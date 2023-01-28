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
            value: function matchStatement(statementNode, proofContext) {
                var _this = this;
                var statementNatches;
                var premisesLength = this.premises.length;
                if (premisesLength === 0) {
                    var substitutions = [], conclusionMatches = matchConclusion(this.conclusion, statementNode, substitutions);
                    statementNatches = conclusionMatches; ///
                } else {
                    var proofSteps = proofContext.getProofSteps();
                    statementNatches = (0, _array.someSubArray)(proofSteps, premisesLength, function(proofSteps) {
                        var premisesMatchConclusion = false;
                        var substitutions = [], premisesMatch = matchPremises(_this.premises, proofSteps, substitutions);
                        if (premisesMatch) {
                            var conclusionMatches = matchConclusion(_this.conclusion, statementNode, substitutions);
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
                    var substitutions = [], conclusionMatches = metaMatchConclusion(this.conclusion, metastatementNode, substitutions);
                    metastatementNatches = conclusionMatches; ///
                } else {
                    var metaproofSteps = metaproofContext.getMetaproofSteps();
                    metastatementNatches = (0, _array.someSubArray)(metaproofSteps, premisesLength, function(metaproofSteps) {
                        var premisesMatchConclusion = false;
                        var substitutions = [], premisesMatch = metaMatchPremises(_this.premises, metaproofSteps, substitutions);
                        if (premisesMatch) {
                            var conclusionMatches = metaMatchConclusion(_this.conclusion, metastatementNode, substitutions);
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
            value: function fromJSON(json, lexer, parser) {
                var rule;
                var labels = json.labels;
                var labelsJSON = labels; ///
                labels = labelsJSON.map(function(labelJSON) {
                    var _$json = labelJSON, label = _label.default.fromJSON(_$json, lexer, parser);
                    return label;
                });
                var premises = json.premises;
                var premisesJSON = premises; ///
                premises = premisesJSON.map(function(premiseJSON) {
                    var _$json = premiseJSON, premise = _premise.default.fromJSON(_$json, lexer, parser);
                    return premise;
                });
                var conclusion = json.conclusion;
                var conclusionJSON = conclusion; ///
                json = conclusionJSON; ///
                conclusion = _conclusion.default.fromJSON(json, lexer, parser);
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
function matchPremise(premise, proofSteps, substitutions) {
    var proofStep = (0, _array.prune)(proofSteps, function(proofStep) {
        var subproofNode = proofStep.getSubproofNode(), statementNode = proofStep.getStatementNode();
        if (subproofNode !== null) {
            var subProofNodeMatches = premise.matchSubproofNode(subproofNode, substitutions);
            if (!subProofNodeMatches) {
                return true;
            }
        }
        if (statementNode !== null) {
            var statementNodeMatches = premise.matchStatementNode(statementNode, substitutions);
            if (!statementNodeMatches) {
                return true;
            }
        }
    }) || null;
    var premiseMatches = proofStep !== null;
    return premiseMatches;
}
function matchPremises(premise, proofSteps, substitutions) {
    var premisesMatch = premise.every(function(premise) {
        var premiseMatches = matchPremise(premise, proofSteps, substitutions);
        if (premiseMatches) {
            return true;
        }
    });
    return premisesMatch;
}
function matchConclusion(conclusion, statementNode, substitutions) {
    var statementNodeMatches = conclusion.matchStatementNode(statementNode, substitutions), conclusionMatches = statementNodeMatches; ///
    return conclusionMatches;
}
function metaMatchPremise(premise, metaproofSteps, substitutions) {
    var metaproofStep = (0, _array.prune)(metaproofSteps, function(metaproofStep) {
        var ruleSubproofNode = metaproofStep.getRuleSubproofNode(), metastatementNode = metaproofStep.getMetastatementNode();
        if (ruleSubproofNode !== null) {
            var ruleSubProofNodeMatches = premise.matchRuleSubproofNode(ruleSubproofNode, substitutions);
            if (!ruleSubProofNodeMatches) {
                return true;
            }
        }
        if (metastatementNode !== null) {
            var metastatementNodeMatches = premise.matchMetastatementNode(metastatementNode, substitutions);
            if (!metastatementNodeMatches) {
                return true;
            }
        }
    }) || null;
    var premiseMatches = metaproofStep !== null;
    return premiseMatches;
}
function metaMatchPremises(premise, metaproofSteps, substitutions) {
    var premisesMatch = premise.every(function(premise) {
        var premiseMatches = metaMatchPremise(premise, metaproofSteps, substitutions);
        if (premiseMatches) {
            return true;
        }
    });
    return premisesMatch;
}
function metaMatchConclusion(conclusion, metastatementNode, substitutions) {
    var metastatementNodeMatches = conclusion.matchMetastatementNode(metastatementNode, substitutions), conclusionMatches = metastatementNodeMatches; ///
    return conclusionMatches;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4vbGFiZWxcIjtcbmltcG9ydCBQcmVtaXNlIGZyb20gXCIuL3ByZW1pc2VcIjtcbmltcG9ydCBDb25jbHVzaW9uIGZyb20gXCIuL2NvbmNsdXNpb25cIjtcblxuaW1wb3J0IHsgcHJ1bmUgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IFJVTEVfS0lORCB9IGZyb20gXCIuL2tpbmRzXCI7XG5pbXBvcnQgeyBzb21lU3ViQXJyYXkgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24pIHtcbiAgICB0aGlzLmxhYmVscyA9IGxhYmVscztcbiAgICB0aGlzLnByZW1pc2VzID0gcHJlbWlzZXM7XG4gICAgdGhpcy5jb25jbHVzaW9uID0gY29uY2x1c2lvbjtcbiAgfVxuXG4gIGdldExhYmVscygpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbHM7XG4gIH1cblxuICBnZXRQcmVtaXNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5wcmVtaXNlcztcbiAgfVxuXG4gIGdldENvbmNsdXNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uY2x1c2lvbjtcbiAgfVxuXG4gIG1hdGNoTGFiZWxOYW1lKGxhYmVsTmFtZSkge1xuICAgIGNvbnN0IG1hdGNoZXNMYWJlbE5hbWUgPSB0aGlzLmxhYmVscy5zb21lKChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbmFtZSA9IGxhYmVsTmFtZSwgLy8vXG4gICAgICAgICAgICBsYWJlbE1hdGNoZXNOYW1lID0gbGFiZWwubWF0Y2hOYW1lKG5hbWUpO1xuXG4gICAgICBpZiAobGFiZWxNYXRjaGVzTmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtYXRjaGVzTGFiZWxOYW1lO1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgcHJvb2ZDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudE5hdGNoZXM7XG5cbiAgICBjb25zdCBwcmVtaXNlc0xlbmd0aCA9IHRoaXMucHJlbWlzZXMubGVuZ3RoO1xuXG4gICAgaWYgKHByZW1pc2VzTGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gW10sXG4gICAgICAgICAgICBjb25jbHVzaW9uTWF0Y2hlcyA9IG1hdGNoQ29uY2x1c2lvbih0aGlzLmNvbmNsdXNpb24sIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICBzdGF0ZW1lbnROYXRjaGVzID0gY29uY2x1c2lvbk1hdGNoZXM7IC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwcm9vZlN0ZXBzID0gcHJvb2ZDb250ZXh0LmdldFByb29mU3RlcHMoKTtcblxuICAgICAgc3RhdGVtZW50TmF0Y2hlcyA9IHNvbWVTdWJBcnJheShwcm9vZlN0ZXBzLCBwcmVtaXNlc0xlbmd0aCwgKHByb29mU3RlcHMpID0+IHtcbiAgICAgICAgbGV0IHByZW1pc2VzTWF0Y2hDb25jbHVzaW9uID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IFtdLFxuICAgICAgICAgICAgICBwcmVtaXNlc01hdGNoID0gbWF0Y2hQcmVtaXNlcyh0aGlzLnByZW1pc2VzLCBwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zKTtcblxuICAgICAgICBpZiAocHJlbWlzZXNNYXRjaCkge1xuICAgICAgICAgIGNvbnN0IGNvbmNsdXNpb25NYXRjaGVzID0gbWF0Y2hDb25jbHVzaW9uKHRoaXMuY29uY2x1c2lvbiwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgICAgICBwcmVtaXNlc01hdGNoQ29uY2x1c2lvbiA9IGNvbmNsdXNpb25NYXRjaGVzOyAgLy8vXG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJlbWlzZXNNYXRjaENvbmNsdXNpb24pIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudE5hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGFzdGF0ZW1lbnQobWV0YXN0YXRlbWVudE5vZGUsIG1ldGFwcm9vZkNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXN0YXRlbWVudE5hdGNoZXM7XG5cbiAgICBjb25zdCBwcmVtaXNlc0xlbmd0aCA9IHRoaXMucHJlbWlzZXMubGVuZ3RoO1xuXG4gICAgaWYgKHByZW1pc2VzTGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gW10sXG4gICAgICAgICAgICBjb25jbHVzaW9uTWF0Y2hlcyA9IG1ldGFNYXRjaENvbmNsdXNpb24odGhpcy5jb25jbHVzaW9uLCBtZXRhc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgIG1ldGFzdGF0ZW1lbnROYXRjaGVzID0gY29uY2x1c2lvbk1hdGNoZXM7IC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXRhcHJvb2ZTdGVwcyA9IG1ldGFwcm9vZkNvbnRleHQuZ2V0TWV0YXByb29mU3RlcHMoKTtcblxuICAgICAgbWV0YXN0YXRlbWVudE5hdGNoZXMgPSBzb21lU3ViQXJyYXkobWV0YXByb29mU3RlcHMsIHByZW1pc2VzTGVuZ3RoLCAobWV0YXByb29mU3RlcHMpID0+IHtcbiAgICAgICAgbGV0IHByZW1pc2VzTWF0Y2hDb25jbHVzaW9uID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IFtdLFxuICAgICAgICAgICAgICBwcmVtaXNlc01hdGNoID0gbWV0YU1hdGNoUHJlbWlzZXModGhpcy5wcmVtaXNlcywgbWV0YXByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICAgIGlmIChwcmVtaXNlc01hdGNoKSB7XG4gICAgICAgICAgY29uc3QgY29uY2x1c2lvbk1hdGNoZXMgPSBtZXRhTWF0Y2hDb25jbHVzaW9uKHRoaXMuY29uY2x1c2lvbiwgbWV0YXN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICAgICAgcHJlbWlzZXNNYXRjaENvbmNsdXNpb24gPSBjb25jbHVzaW9uTWF0Y2hlczsgIC8vL1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByZW1pc2VzTWF0Y2hDb25jbHVzaW9uKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhc3RhdGVtZW50TmF0Y2hlcztcbiAgfVxuXG4gIHRvSlNPTih0b2tlbnMpIHtcbiAgICBjb25zdCBsYWJlbHNKU09OID0gdGhpcy5sYWJlbHMubWFwKChsYWJlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGFiZWxKU09OID0gbGFiZWwudG9KU09OKHRva2Vucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBsYWJlbEpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAgcHJlbWlzZXNKU09OID0gdGhpcy5wcmVtaXNlcy5tYXAoKHByZW1pc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByZW1pc2VKU09OID0gcHJlbWlzZS50b0pTT04odG9rZW5zKTtcblxuICAgICAgICAgICAgcmV0dXJuIHByZW1pc2VKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNvbmNsdXNpb25KU09OID0gdGhpcy5jb25jbHVzaW9uLnRvSlNPTih0b2tlbnMpLFxuICAgICAgICAgIGtpbmQgPSBSVUxFX0tJTkQsXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxzSlNPTiwgIC8vL1xuICAgICAgICAgIHByZW1pc2VzID0gcHJlbWlzZXNKU09OLCAgLy8vXG4gICAgICAgICAgY29uY2x1c2lvbiA9IGNvbmNsdXNpb25KU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGtpbmQsXG4gICAgICAgICAgICBsYWJlbHMsXG4gICAgICAgICAgICBwcmVtaXNlcyxcbiAgICAgICAgICAgIGNvbmNsdXNpb25cbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgbGV4ZXIsIHBhcnNlcikge1xuICAgIGxldCBydWxlO1xuXG4gICAgbGV0IHsgbGFiZWxzIH0gPSBqc29uO1xuXG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVsczsgIC8vL1xuXG4gICAgbGFiZWxzID0gbGFiZWxzSlNPTi5tYXAoKGxhYmVsSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGxhYmVsSlNPTiwgLy8vXG4gICAgICAgICAgICBsYWJlbCA9IExhYmVsLmZyb21KU09OKGpzb24sIGxleGVyLCBwYXJzZXIpO1xuXG4gICAgICByZXR1cm4gbGFiZWw7XG4gICAgfSk7XG5cbiAgICBsZXQgeyBwcmVtaXNlcyB9ID0ganNvbjtcblxuICAgIGNvbnN0IHByZW1pc2VzSlNPTiA9IHByZW1pc2VzOyAgLy8vXG5cbiAgICBwcmVtaXNlcyA9IHByZW1pc2VzSlNPTi5tYXAoKHByZW1pc2VKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gcHJlbWlzZUpTT04sIC8vL1xuICAgICAgICAgICAgcHJlbWlzZSA9IFByZW1pc2UuZnJvbUpTT04oanNvbiwgbGV4ZXIsIHBhcnNlcik7XG5cbiAgICAgIHJldHVybiBwcmVtaXNlO1xuICAgIH0pO1xuXG4gICAgbGV0IHsgY29uY2x1c2lvbiB9ID0ganNvbjtcblxuICAgIGNvbnN0IGNvbmNsdXNpb25KU09OID0gY29uY2x1c2lvbjsgIC8vL1xuXG4gICAganNvbiA9IGNvbmNsdXNpb25KU09OOyAgLy8vXG5cbiAgICBjb25jbHVzaW9uID0gQ29uY2x1c2lvbi5mcm9tSlNPTihqc29uLCBsZXhlciwgcGFyc2VyKTtcblxuICAgIHJ1bGUgPSBuZXcgUnVsZShsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21MYWJlbHNQcmVtaXNlc0FuZENvbmNsdXNpb24obGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbikge1xuICAgIGNvbnN0IHJ1bGUgPSBuZXcgUnVsZShsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hdGNoUHJlbWlzZShwcmVtaXNlLCBwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zKSB7XG4gIGNvbnN0IHByb29mU3RlcCA9IHBydW5lKHByb29mU3RlcHMsIChwcm9vZlN0ZXApID0+IHtcbiAgICBjb25zdCBzdWJwcm9vZk5vZGUgPSBwcm9vZlN0ZXAuZ2V0U3VicHJvb2ZOb2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHByb29mU3RlcC5nZXRTdGF0ZW1lbnROb2RlKClcblxuICAgIGlmIChzdWJwcm9vZk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN1YlByb29mTm9kZU1hdGNoZXMgPSBwcmVtaXNlLm1hdGNoU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgIGlmICghc3ViUHJvb2ZOb2RlTWF0Y2hlcykgeyAgLy8vXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHByZW1pc2UubWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICBpZiAoIXN0YXRlbWVudE5vZGVNYXRjaGVzKSB7ICAvLy9cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9KSB8fCBudWxsO1xuXG4gIGNvbnN0IHByZW1pc2VNYXRjaGVzID0gKHByb29mU3RlcCAhPT0gbnVsbCk7XG5cbiAgcmV0dXJuIHByZW1pc2VNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtYXRjaFByZW1pc2VzKHByZW1pc2UsIHByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMpIHtcbiAgY29uc3QgcHJlbWlzZXNNYXRjaCA9IHByZW1pc2UuZXZlcnkoKHByZW1pc2UpID0+IHtcbiAgICBjb25zdCBwcmVtaXNlTWF0Y2hlcyA9IG1hdGNoUHJlbWlzZShwcmVtaXNlLCBwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zKTtcblxuICAgIGlmIChwcmVtaXNlTWF0Y2hlcykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcHJlbWlzZXNNYXRjaDtcbn1cblxuZnVuY3Rpb24gbWF0Y2hDb25jbHVzaW9uKGNvbmNsdXNpb24sIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMpIHtcbiAgY29uc3Qgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBjb25jbHVzaW9uLm1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zKSxcbiAgICAgICAgY29uY2x1c2lvbk1hdGNoZXMgPSBzdGF0ZW1lbnROb2RlTWF0Y2hlczsgLy8vXG5cbiAgcmV0dXJuIGNvbmNsdXNpb25NYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtZXRhTWF0Y2hQcmVtaXNlKHByZW1pc2UsIG1ldGFwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zKSB7XG4gIGNvbnN0IG1ldGFwcm9vZlN0ZXAgPSBwcnVuZShtZXRhcHJvb2ZTdGVwcywgKG1ldGFwcm9vZlN0ZXApID0+IHtcbiAgICBjb25zdCBydWxlU3VicHJvb2ZOb2RlID0gbWV0YXByb29mU3RlcC5nZXRSdWxlU3VicHJvb2ZOb2RlKCksXG4gICAgICAgICAgbWV0YXN0YXRlbWVudE5vZGUgPSBtZXRhcHJvb2ZTdGVwLmdldE1ldGFzdGF0ZW1lbnROb2RlKClcblxuICAgIGlmIChydWxlU3VicHJvb2ZOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBydWxlU3ViUHJvb2ZOb2RlTWF0Y2hlcyA9IHByZW1pc2UubWF0Y2hSdWxlU3VicHJvb2ZOb2RlKHJ1bGVTdWJwcm9vZk5vZGUsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICBpZiAoIXJ1bGVTdWJQcm9vZk5vZGVNYXRjaGVzKSB7ICAvLy9cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGFzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBwcmVtaXNlLm1hdGNoTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICBpZiAoIW1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcykgeyAgLy8vXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfSkgfHwgbnVsbDtcblxuICBjb25zdCBwcmVtaXNlTWF0Y2hlcyA9IChtZXRhcHJvb2ZTdGVwICE9PSBudWxsKTtcblxuICByZXR1cm4gcHJlbWlzZU1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1ldGFNYXRjaFByZW1pc2VzKHByZW1pc2UsIG1ldGFwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zKSB7XG4gIGNvbnN0IHByZW1pc2VzTWF0Y2ggPSBwcmVtaXNlLmV2ZXJ5KChwcmVtaXNlKSA9PiB7XG4gICAgY29uc3QgcHJlbWlzZU1hdGNoZXMgPSBtZXRhTWF0Y2hQcmVtaXNlKHByZW1pc2UsIG1ldGFwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zKTtcblxuICAgIGlmIChwcmVtaXNlTWF0Y2hlcykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcHJlbWlzZXNNYXRjaDtcbn1cblxuZnVuY3Rpb24gbWV0YU1hdGNoQ29uY2x1c2lvbihjb25jbHVzaW9uLCBtZXRhc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucykge1xuICBjb25zdCBtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBjb25jbHVzaW9uLm1hdGNoTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMpLFxuICAgICAgICBjb25jbHVzaW9uTWF0Y2hlcyA9IG1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlczsgLy8vXG5cbiAgcmV0dXJuIGNvbmNsdXNpb25NYXRjaGVzO1xufVxuIl0sIm5hbWVzIjpbIlJ1bGUiLCJsYWJlbHMiLCJwcmVtaXNlcyIsImNvbmNsdXNpb24iLCJnZXRMYWJlbHMiLCJnZXRQcmVtaXNlcyIsImdldENvbmNsdXNpb24iLCJtYXRjaExhYmVsTmFtZSIsImxhYmVsTmFtZSIsIm1hdGNoZXNMYWJlbE5hbWUiLCJzb21lIiwibGFiZWwiLCJuYW1lIiwibGFiZWxNYXRjaGVzTmFtZSIsIm1hdGNoTmFtZSIsIm1hdGNoU3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsInByb29mQ29udGV4dCIsInN0YXRlbWVudE5hdGNoZXMiLCJwcmVtaXNlc0xlbmd0aCIsImxlbmd0aCIsInN1YnN0aXR1dGlvbnMiLCJjb25jbHVzaW9uTWF0Y2hlcyIsIm1hdGNoQ29uY2x1c2lvbiIsInByb29mU3RlcHMiLCJnZXRQcm9vZlN0ZXBzIiwic29tZVN1YkFycmF5IiwicHJlbWlzZXNNYXRjaENvbmNsdXNpb24iLCJwcmVtaXNlc01hdGNoIiwibWF0Y2hQcmVtaXNlcyIsIm1hdGNoTWV0YXN0YXRlbWVudCIsIm1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YXByb29mQ29udGV4dCIsIm1ldGFzdGF0ZW1lbnROYXRjaGVzIiwibWV0YU1hdGNoQ29uY2x1c2lvbiIsIm1ldGFwcm9vZlN0ZXBzIiwiZ2V0TWV0YXByb29mU3RlcHMiLCJtZXRhTWF0Y2hQcmVtaXNlcyIsInRvSlNPTiIsInRva2VucyIsImxhYmVsc0pTT04iLCJtYXAiLCJsYWJlbEpTT04iLCJwcmVtaXNlc0pTT04iLCJwcmVtaXNlIiwicHJlbWlzZUpTT04iLCJjb25jbHVzaW9uSlNPTiIsImtpbmQiLCJSVUxFX0tJTkQiLCJqc29uIiwiZnJvbUpTT04iLCJsZXhlciIsInBhcnNlciIsInJ1bGUiLCJMYWJlbCIsIlByZW1pc2UiLCJDb25jbHVzaW9uIiwiZnJvbUxhYmVsc1ByZW1pc2VzQW5kQ29uY2x1c2lvbiIsIm1hdGNoUHJlbWlzZSIsInByb29mU3RlcCIsInBydW5lIiwic3VicHJvb2ZOb2RlIiwiZ2V0U3VicHJvb2ZOb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsInN1YlByb29mTm9kZU1hdGNoZXMiLCJtYXRjaFN1YnByb29mTm9kZSIsInN0YXRlbWVudE5vZGVNYXRjaGVzIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwicHJlbWlzZU1hdGNoZXMiLCJldmVyeSIsIm1ldGFNYXRjaFByZW1pc2UiLCJtZXRhcHJvb2ZTdGVwIiwicnVsZVN1YnByb29mTm9kZSIsImdldFJ1bGVTdWJwcm9vZk5vZGUiLCJnZXRNZXRhc3RhdGVtZW50Tm9kZSIsInJ1bGVTdWJQcm9vZk5vZGVNYXRjaGVzIiwibWF0Y2hSdWxlU3VicHJvb2ZOb2RlIiwibWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzIiwibWF0Y2hNZXRhc3RhdGVtZW50Tm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7MERBUkg7NERBQ0U7K0RBQ0c7cUJBRUQ7cUJBQ0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHWCxJQUFBLEFBQU1BLHFCQTJLbEIsQUEzS1k7YUFBTUEsS0FDUEMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFVBQVU7OEJBRHJCSDtRQUVqQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBOztpQkFKREg7O1lBT25CSSxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWTtnQkFDVixPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7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