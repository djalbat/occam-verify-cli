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
                    var metaSubstitutions = [], conclusionMatches = metaMatchConclusion(this.conclusion, metastatementNode, metaSubstitutions);
                    metastatementNatches = conclusionMatches; ///
                } else {
                    var metaproofSteps = metaproofContext.getMetaproofSteps();
                    metastatementNatches = (0, _array.someSubArray)(metaproofSteps, premisesLength, function(metaproofSteps) {
                        var premisesMatchConclusion = false;
                        var metaSubstitutions = [], premisesMatch = metaMatchPremises(_this.premises, metaproofSteps, metaSubstitutions);
                        if (premisesMatch) {
                            var conclusionMatches = metaMatchConclusion(_this.conclusion, metastatementNode, metaSubstitutions);
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
            value: function toJSON() {
                var labelsJSON = this.labels.map(function(label) {
                    var labelJSON = label.toJSON();
                    return labelJSON;
                }), premisesJSON = this.premises.map(function(premise) {
                    var premiseJSON = premise.toJSON();
                    return premiseJSON;
                }), conclusionJSON = this.conclusion.toJSON(), kind = _kinds.RULE_KIND, labels = labelsJSON, premises = premisesJSON, conclusion = conclusionJSON, json = {
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
            value: function fromJSON(json, releaseContext) {
                var rule;
                var labels = json.labels;
                var labelsJSON = labels; ///
                labels = labelsJSON.map(function(labelJSON) {
                    var _$json = labelJSON, label = _label.default.fromJSON(_$json, releaseContext);
                    return label;
                });
                var premises = json.premises;
                var premisesJSON = premises; ///
                premises = premisesJSON.map(function(premiseJSON) {
                    var _$json = premiseJSON, premise = _premise.default.fromJSON(_$json, releaseContext);
                    return premise;
                });
                var conclusion = json.conclusion;
                var conclusionJSON = conclusion; ///
                json = conclusionJSON; ///
                conclusion = _conclusion.default.fromJSON(json, releaseContext);
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
function metaMatchPremise(premise, metaproofSteps, metaSubstitutions) {
    var metaproofStep = (0, _array.prune)(metaproofSteps, function(metaproofStep) {
        var metaSubproofNode = metaproofStep.getMetaSubproofNode(), metastatementNode = metaproofStep.getMetastatementNode();
        if (metaSubproofNode !== null) {
            var metaSubProofNodeMatches = premise.matchMetaSubproofNode(metaSubproofNode, metaSubstitutions);
            if (!metaSubProofNodeMatches) {
                return true;
            }
        }
        if (metastatementNode !== null) {
            var metastatementNodeMatches = premise.matchMetastatementNode(metastatementNode, metaSubstitutions);
            if (!metastatementNodeMatches) {
                return true;
            }
        }
    }) || null;
    var premiseMatches = metaproofStep !== null;
    return premiseMatches;
}
function metaMatchPremises(premise, metaproofSteps, metaSubstitutions) {
    var premisesMatch = premise.every(function(premise) {
        var premiseMatches = metaMatchPremise(premise, metaproofSteps, metaSubstitutions);
        if (premiseMatches) {
            return true;
        }
    });
    return premisesMatch;
}
function metaMatchConclusion(conclusion, metastatementNode, metaSubstitutions) {
    var metastatementNodeMatches = conclusion.matchMetastatementNode(metastatementNode, metaSubstitutions), conclusionMatches = metastatementNodeMatches; ///
    return conclusionMatches;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4vbGFiZWxcIjtcbmltcG9ydCBQcmVtaXNlIGZyb20gXCIuL3ByZW1pc2VcIjtcbmltcG9ydCBDb25jbHVzaW9uIGZyb20gXCIuL2NvbmNsdXNpb25cIjtcblxuaW1wb3J0IHsgcHJ1bmUgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IFJVTEVfS0lORCB9IGZyb20gXCIuL2tpbmRzXCI7XG5pbXBvcnQgeyBzb21lU3ViQXJyYXkgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24pIHtcbiAgICB0aGlzLmxhYmVscyA9IGxhYmVscztcbiAgICB0aGlzLnByZW1pc2VzID0gcHJlbWlzZXM7XG4gICAgdGhpcy5jb25jbHVzaW9uID0gY29uY2x1c2lvbjtcbiAgfVxuXG4gIGdldExhYmVscygpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbHM7XG4gIH1cblxuICBnZXRQcmVtaXNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5wcmVtaXNlcztcbiAgfVxuXG4gIGdldENvbmNsdXNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uY2x1c2lvbjtcbiAgfVxuXG4gIG1hdGNoTGFiZWxOYW1lKGxhYmVsTmFtZSkge1xuICAgIGNvbnN0IG1hdGNoZXNMYWJlbE5hbWUgPSB0aGlzLmxhYmVscy5zb21lKChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbmFtZSA9IGxhYmVsTmFtZSwgLy8vXG4gICAgICAgICAgICBsYWJlbE1hdGNoZXNOYW1lID0gbGFiZWwubWF0Y2hOYW1lKG5hbWUpO1xuXG4gICAgICBpZiAobGFiZWxNYXRjaGVzTmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtYXRjaGVzTGFiZWxOYW1lO1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgcHJvb2ZDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudE5hdGNoZXM7XG5cbiAgICBjb25zdCBwcmVtaXNlc0xlbmd0aCA9IHRoaXMucHJlbWlzZXMubGVuZ3RoO1xuXG4gICAgaWYgKHByZW1pc2VzTGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gW10sXG4gICAgICAgICAgICBjb25jbHVzaW9uTWF0Y2hlcyA9IG1hdGNoQ29uY2x1c2lvbih0aGlzLmNvbmNsdXNpb24sIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICBzdGF0ZW1lbnROYXRjaGVzID0gY29uY2x1c2lvbk1hdGNoZXM7IC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwcm9vZlN0ZXBzID0gcHJvb2ZDb250ZXh0LmdldFByb29mU3RlcHMoKTtcblxuICAgICAgc3RhdGVtZW50TmF0Y2hlcyA9IHNvbWVTdWJBcnJheShwcm9vZlN0ZXBzLCBwcmVtaXNlc0xlbmd0aCwgKHByb29mU3RlcHMpID0+IHtcbiAgICAgICAgbGV0IHByZW1pc2VzTWF0Y2hDb25jbHVzaW9uID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IFtdLFxuICAgICAgICAgICAgICBwcmVtaXNlc01hdGNoID0gbWF0Y2hQcmVtaXNlcyh0aGlzLnByZW1pc2VzLCBwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zKTtcblxuICAgICAgICBpZiAocHJlbWlzZXNNYXRjaCkge1xuICAgICAgICAgIGNvbnN0IGNvbmNsdXNpb25NYXRjaGVzID0gbWF0Y2hDb25jbHVzaW9uKHRoaXMuY29uY2x1c2lvbiwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgICAgICBwcmVtaXNlc01hdGNoQ29uY2x1c2lvbiA9IGNvbmNsdXNpb25NYXRjaGVzOyAgLy8vXG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJlbWlzZXNNYXRjaENvbmNsdXNpb24pIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudE5hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGFzdGF0ZW1lbnQobWV0YXN0YXRlbWVudE5vZGUsIG1ldGFwcm9vZkNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXN0YXRlbWVudE5hdGNoZXM7XG5cbiAgICBjb25zdCBwcmVtaXNlc0xlbmd0aCA9IHRoaXMucHJlbWlzZXMubGVuZ3RoO1xuXG4gICAgaWYgKHByZW1pc2VzTGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zdCBtZXRhU3Vic3RpdHV0aW9ucyA9IFtdLFxuICAgICAgICAgICAgY29uY2x1c2lvbk1hdGNoZXMgPSBtZXRhTWF0Y2hDb25jbHVzaW9uKHRoaXMuY29uY2x1c2lvbiwgbWV0YXN0YXRlbWVudE5vZGUsIG1ldGFTdWJzdGl0dXRpb25zKTtcblxuICAgICAgbWV0YXN0YXRlbWVudE5hdGNoZXMgPSBjb25jbHVzaW9uTWF0Y2hlczsgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGFwcm9vZlN0ZXBzID0gbWV0YXByb29mQ29udGV4dC5nZXRNZXRhcHJvb2ZTdGVwcygpO1xuXG4gICAgICBtZXRhc3RhdGVtZW50TmF0Y2hlcyA9IHNvbWVTdWJBcnJheShtZXRhcHJvb2ZTdGVwcywgcHJlbWlzZXNMZW5ndGgsIChtZXRhcHJvb2ZTdGVwcykgPT4ge1xuICAgICAgICBsZXQgcHJlbWlzZXNNYXRjaENvbmNsdXNpb24gPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBtZXRhU3Vic3RpdHV0aW9ucyA9IFtdLFxuICAgICAgICAgICAgICBwcmVtaXNlc01hdGNoID0gbWV0YU1hdGNoUHJlbWlzZXModGhpcy5wcmVtaXNlcywgbWV0YXByb29mU3RlcHMsIG1ldGFTdWJzdGl0dXRpb25zKTtcblxuICAgICAgICBpZiAocHJlbWlzZXNNYXRjaCkge1xuICAgICAgICAgIGNvbnN0IGNvbmNsdXNpb25NYXRjaGVzID0gbWV0YU1hdGNoQ29uY2x1c2lvbih0aGlzLmNvbmNsdXNpb24sIG1ldGFzdGF0ZW1lbnROb2RlLCBtZXRhU3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgICAgICBwcmVtaXNlc01hdGNoQ29uY2x1c2lvbiA9IGNvbmNsdXNpb25NYXRjaGVzOyAgLy8vXG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJlbWlzZXNNYXRjaENvbmNsdXNpb24pIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFzdGF0ZW1lbnROYXRjaGVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGxhYmVsc0pTT04gPSB0aGlzLmxhYmVscy5tYXAoKGxhYmVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbEpTT04gPSBsYWJlbC50b0pTT04oKTtcblxuICAgICAgICAgICAgcmV0dXJuIGxhYmVsSlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBwcmVtaXNlc0pTT04gPSB0aGlzLnByZW1pc2VzLm1hcCgocHJlbWlzZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJlbWlzZUpTT04gPSBwcmVtaXNlLnRvSlNPTigpO1xuXG4gICAgICAgICAgICByZXR1cm4gcHJlbWlzZUpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY29uY2x1c2lvbkpTT04gPSB0aGlzLmNvbmNsdXNpb24udG9KU09OKCksXG4gICAgICAgICAga2luZCA9IFJVTEVfS0lORCxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNKU09OLCAgLy8vXG4gICAgICAgICAgcHJlbWlzZXMgPSBwcmVtaXNlc0pTT04sICAvLy9cbiAgICAgICAgICBjb25jbHVzaW9uID0gY29uY2x1c2lvbkpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAga2luZCxcbiAgICAgICAgICAgIGxhYmVscyxcbiAgICAgICAgICAgIHByZW1pc2VzLFxuICAgICAgICAgICAgY29uY2x1c2lvblxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCByZWxlYXNlQ29udGV4dCkge1xuICAgIGxldCBydWxlO1xuXG4gICAgbGV0IHsgbGFiZWxzIH0gPSBqc29uO1xuXG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVsczsgIC8vL1xuXG4gICAgbGFiZWxzID0gbGFiZWxzSlNPTi5tYXAoKGxhYmVsSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGxhYmVsSlNPTiwgLy8vXG4gICAgICAgICAgICBsYWJlbCA9IExhYmVsLmZyb21KU09OKGpzb24sIHJlbGVhc2VDb250ZXh0KTtcblxuICAgICAgcmV0dXJuIGxhYmVsO1xuICAgIH0pO1xuXG4gICAgbGV0IHsgcHJlbWlzZXMgfSA9IGpzb247XG5cbiAgICBjb25zdCBwcmVtaXNlc0pTT04gPSBwcmVtaXNlczsgIC8vL1xuXG4gICAgcHJlbWlzZXMgPSBwcmVtaXNlc0pTT04ubWFwKChwcmVtaXNlSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IHByZW1pc2VKU09OLCAvLy9cbiAgICAgICAgICAgIHByZW1pc2UgPSBQcmVtaXNlLmZyb21KU09OKGpzb24sIHJlbGVhc2VDb250ZXh0KTtcblxuICAgICAgcmV0dXJuIHByZW1pc2U7XG4gICAgfSk7XG5cbiAgICBsZXQgeyBjb25jbHVzaW9uIH0gPSBqc29uO1xuXG4gICAgY29uc3QgY29uY2x1c2lvbkpTT04gPSBjb25jbHVzaW9uOyAgLy8vXG5cbiAgICBqc29uID0gY29uY2x1c2lvbkpTT047ICAvLy9cblxuICAgIGNvbmNsdXNpb24gPSBDb25jbHVzaW9uLmZyb21KU09OKGpzb24sIHJlbGVhc2VDb250ZXh0KTtcblxuICAgIHJ1bGUgPSBuZXcgUnVsZShsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21MYWJlbHNQcmVtaXNlc0FuZENvbmNsdXNpb24obGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbikge1xuICAgIGNvbnN0IHJ1bGUgPSBuZXcgUnVsZShsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hdGNoUHJlbWlzZShwcmVtaXNlLCBwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zKSB7XG4gIGNvbnN0IHByb29mU3RlcCA9IHBydW5lKHByb29mU3RlcHMsIChwcm9vZlN0ZXApID0+IHtcbiAgICBjb25zdCBzdWJwcm9vZk5vZGUgPSBwcm9vZlN0ZXAuZ2V0U3VicHJvb2ZOb2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHByb29mU3RlcC5nZXRTdGF0ZW1lbnROb2RlKClcblxuICAgIGlmIChzdWJwcm9vZk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN1YlByb29mTm9kZU1hdGNoZXMgPSBwcmVtaXNlLm1hdGNoU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgIGlmICghc3ViUHJvb2ZOb2RlTWF0Y2hlcykgeyAgLy8vXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHByZW1pc2UubWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICBpZiAoIXN0YXRlbWVudE5vZGVNYXRjaGVzKSB7ICAvLy9cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9KSB8fCBudWxsO1xuXG4gIGNvbnN0IHByZW1pc2VNYXRjaGVzID0gKHByb29mU3RlcCAhPT0gbnVsbCk7XG5cbiAgcmV0dXJuIHByZW1pc2VNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtYXRjaFByZW1pc2VzKHByZW1pc2UsIHByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMpIHtcbiAgY29uc3QgcHJlbWlzZXNNYXRjaCA9IHByZW1pc2UuZXZlcnkoKHByZW1pc2UpID0+IHtcbiAgICBjb25zdCBwcmVtaXNlTWF0Y2hlcyA9IG1hdGNoUHJlbWlzZShwcmVtaXNlLCBwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zKTtcblxuICAgIGlmIChwcmVtaXNlTWF0Y2hlcykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcHJlbWlzZXNNYXRjaDtcbn1cblxuZnVuY3Rpb24gbWF0Y2hDb25jbHVzaW9uKGNvbmNsdXNpb24sIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMpIHtcbiAgY29uc3Qgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBjb25jbHVzaW9uLm1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zKSxcbiAgICAgICAgY29uY2x1c2lvbk1hdGNoZXMgPSBzdGF0ZW1lbnROb2RlTWF0Y2hlczsgLy8vXG5cbiAgcmV0dXJuIGNvbmNsdXNpb25NYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtZXRhTWF0Y2hQcmVtaXNlKHByZW1pc2UsIG1ldGFwcm9vZlN0ZXBzLCBtZXRhU3Vic3RpdHV0aW9ucykge1xuICBjb25zdCBtZXRhcHJvb2ZTdGVwID0gcHJ1bmUobWV0YXByb29mU3RlcHMsIChtZXRhcHJvb2ZTdGVwKSA9PiB7XG4gICAgY29uc3QgbWV0YVN1YnByb29mTm9kZSA9IG1ldGFwcm9vZlN0ZXAuZ2V0TWV0YVN1YnByb29mTm9kZSgpLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlID0gbWV0YXByb29mU3RlcC5nZXRNZXRhc3RhdGVtZW50Tm9kZSgpXG5cbiAgICBpZiAobWV0YVN1YnByb29mTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YVN1YlByb29mTm9kZU1hdGNoZXMgPSBwcmVtaXNlLm1hdGNoTWV0YVN1YnByb29mTm9kZShtZXRhU3VicHJvb2ZOb2RlLCBtZXRhU3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgIGlmICghbWV0YVN1YlByb29mTm9kZU1hdGNoZXMpIHsgIC8vL1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0YXN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHByZW1pc2UubWF0Y2hNZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZSwgbWV0YVN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICBpZiAoIW1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcykgeyAgLy8vXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfSkgfHwgbnVsbDtcblxuICBjb25zdCBwcmVtaXNlTWF0Y2hlcyA9IChtZXRhcHJvb2ZTdGVwICE9PSBudWxsKTtcblxuICByZXR1cm4gcHJlbWlzZU1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1ldGFNYXRjaFByZW1pc2VzKHByZW1pc2UsIG1ldGFwcm9vZlN0ZXBzLCBtZXRhU3Vic3RpdHV0aW9ucykge1xuICBjb25zdCBwcmVtaXNlc01hdGNoID0gcHJlbWlzZS5ldmVyeSgocHJlbWlzZSkgPT4ge1xuICAgIGNvbnN0IHByZW1pc2VNYXRjaGVzID0gbWV0YU1hdGNoUHJlbWlzZShwcmVtaXNlLCBtZXRhcHJvb2ZTdGVwcywgbWV0YVN1YnN0aXR1dGlvbnMpO1xuXG4gICAgaWYgKHByZW1pc2VNYXRjaGVzKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwcmVtaXNlc01hdGNoO1xufVxuXG5mdW5jdGlvbiBtZXRhTWF0Y2hDb25jbHVzaW9uKGNvbmNsdXNpb24sIG1ldGFzdGF0ZW1lbnROb2RlLCBtZXRhU3Vic3RpdHV0aW9ucykge1xuICBjb25zdCBtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBjb25jbHVzaW9uLm1hdGNoTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUsIG1ldGFTdWJzdGl0dXRpb25zKSxcbiAgICAgICAgY29uY2x1c2lvbk1hdGNoZXMgPSBtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXM7IC8vL1xuXG4gIHJldHVybiBjb25jbHVzaW9uTWF0Y2hlcztcbn1cbiJdLCJuYW1lcyI6WyJSdWxlIiwibGFiZWxzIiwicHJlbWlzZXMiLCJjb25jbHVzaW9uIiwiZ2V0TGFiZWxzIiwiZ2V0UHJlbWlzZXMiLCJnZXRDb25jbHVzaW9uIiwibWF0Y2hMYWJlbE5hbWUiLCJsYWJlbE5hbWUiLCJtYXRjaGVzTGFiZWxOYW1lIiwic29tZSIsImxhYmVsIiwibmFtZSIsImxhYmVsTWF0Y2hlc05hbWUiLCJtYXRjaE5hbWUiLCJtYXRjaFN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJwcm9vZkNvbnRleHQiLCJzdGF0ZW1lbnROYXRjaGVzIiwicHJlbWlzZXNMZW5ndGgiLCJsZW5ndGgiLCJzdWJzdGl0dXRpb25zIiwiY29uY2x1c2lvbk1hdGNoZXMiLCJtYXRjaENvbmNsdXNpb24iLCJwcm9vZlN0ZXBzIiwiZ2V0UHJvb2ZTdGVwcyIsInNvbWVTdWJBcnJheSIsInByZW1pc2VzTWF0Y2hDb25jbHVzaW9uIiwicHJlbWlzZXNNYXRjaCIsIm1hdGNoUHJlbWlzZXMiLCJtYXRjaE1ldGFzdGF0ZW1lbnQiLCJtZXRhc3RhdGVtZW50Tm9kZSIsIm1ldGFwcm9vZkNvbnRleHQiLCJtZXRhc3RhdGVtZW50TmF0Y2hlcyIsIm1ldGFTdWJzdGl0dXRpb25zIiwibWV0YU1hdGNoQ29uY2x1c2lvbiIsIm1ldGFwcm9vZlN0ZXBzIiwiZ2V0TWV0YXByb29mU3RlcHMiLCJtZXRhTWF0Y2hQcmVtaXNlcyIsInRvSlNPTiIsImxhYmVsc0pTT04iLCJtYXAiLCJsYWJlbEpTT04iLCJwcmVtaXNlc0pTT04iLCJwcmVtaXNlIiwicHJlbWlzZUpTT04iLCJjb25jbHVzaW9uSlNPTiIsImtpbmQiLCJSVUxFX0tJTkQiLCJqc29uIiwiZnJvbUpTT04iLCJyZWxlYXNlQ29udGV4dCIsInJ1bGUiLCJMYWJlbCIsIlByZW1pc2UiLCJDb25jbHVzaW9uIiwiZnJvbUxhYmVsc1ByZW1pc2VzQW5kQ29uY2x1c2lvbiIsIm1hdGNoUHJlbWlzZSIsInByb29mU3RlcCIsInBydW5lIiwic3VicHJvb2ZOb2RlIiwiZ2V0U3VicHJvb2ZOb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsInN1YlByb29mTm9kZU1hdGNoZXMiLCJtYXRjaFN1YnByb29mTm9kZSIsInN0YXRlbWVudE5vZGVNYXRjaGVzIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwicHJlbWlzZU1hdGNoZXMiLCJldmVyeSIsIm1ldGFNYXRjaFByZW1pc2UiLCJtZXRhcHJvb2ZTdGVwIiwibWV0YVN1YnByb29mTm9kZSIsImdldE1ldGFTdWJwcm9vZk5vZGUiLCJnZXRNZXRhc3RhdGVtZW50Tm9kZSIsIm1ldGFTdWJQcm9vZk5vZGVNYXRjaGVzIiwibWF0Y2hNZXRhU3VicHJvb2ZOb2RlIiwibWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzIiwibWF0Y2hNZXRhc3RhdGVtZW50Tm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7MERBUkg7NERBQ0U7K0RBQ0c7cUJBRUQ7cUJBQ0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHWCxJQUFBLEFBQU1BLHFCQTJLbEIsQUEzS1k7YUFBTUEsS0FDUEMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFVBQVU7OEJBRHJCSDtRQUVqQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBOztpQkFKREg7O1lBT25CSSxLQUFBQTttQkFBQUEsU0FBQUEs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