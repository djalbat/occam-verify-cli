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
            key: "matchMetastatement",
            value: function matchMetastatement(metastatementNode, metaproofContext) {
                var _this = this;
                var metastatementNatches;
                var premisesLength = this.premises.length;
                if (premisesLength === 0) {
                    var metaSubstitutions = [], conclusionMatches = matchConclusion(this.conclusion, metastatementNode, metaSubstitutions);
                    metastatementNatches = conclusionMatches; ///
                } else {
                    var metaAssertions = metaproofContext.getMetaAssertions();
                    metastatementNatches = (0, _array.someSubArray)(metaAssertions, premisesLength, function(metaAssertions) {
                        var premisesMatchConclusion = matchPremisesAndConclusion(_this.premises, _this.conclusion, metaAssertions, metastatementNode);
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
function matchPremise(premise, metaAssertions, metaSubstitutions) {
    var metaAssertion = (0, _array.prune)(metaAssertions, function(metaAssertion) {
        var metaSubproofNode = metaAssertion.getMetaSubproofNode(), metastatementNode = metaAssertion.getMetastatementNode();
        if (metaSubproofNode !== null) {
            var metaSubProofMatches = premise.matchMetaSubproofNode(metaSubproofNode, metaSubstitutions);
            if (!metaSubProofMatches) {
                return true;
            }
        }
        if (metastatementNode !== null) {
            var metastatementMatches = premise.matchMetastatementNode(metastatementNode, metaSubstitutions);
            if (!metastatementMatches) {
                return true;
            }
        }
    }) || null;
    var premiseMatches = metaAssertion !== null;
    return premiseMatches;
}
function matchPremises(premise, metaAssertions, metaSubstitutions) {
    var premisesMatches = premise.every(function(premise) {
        var premiseMatches = matchPremise(premise, metaAssertions, metaSubstitutions);
        if (premiseMatches) {
            return true;
        }
    });
    return premisesMatches;
}
function matchConclusion(conclusion, metastatementNode, metaSubstitutions) {
    var nonTerminalNodeMatches = conclusion.matchMetastatementNode(metastatementNode, metaSubstitutions), conclusionMatches = nonTerminalNodeMatches; ///
    return conclusionMatches;
}
function matchPremisesAndConclusion(premises, conclusion, metaAssertions, metastatementNode) {
    var premisesMatchConclusion = false;
    var metaSubstitutions = [], premisesMatches = matchPremises(premises, metaAssertions, metaSubstitutions);
    if (premisesMatches) {
        var conclusionMatches = matchConclusion(conclusion, metastatementNode, metaSubstitutions);
        premisesMatchConclusion = conclusionMatches; ///
    }
    return premisesMatchConclusion;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4vbGFiZWxcIjtcbmltcG9ydCBQcmVtaXNlIGZyb20gXCIuL3ByZW1pc2VcIjtcbmltcG9ydCBDb25jbHVzaW9uIGZyb20gXCIuL2NvbmNsdXNpb25cIjtcblxuaW1wb3J0IHsgcHJ1bmUgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IFJVTEVfS0lORCB9IGZyb20gXCIuL2tpbmRzXCI7XG5pbXBvcnQgeyBzb21lU3ViQXJyYXkgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24pIHtcbiAgICB0aGlzLmxhYmVscyA9IGxhYmVscztcbiAgICB0aGlzLnByZW1pc2VzID0gcHJlbWlzZXM7XG4gICAgdGhpcy5jb25jbHVzaW9uID0gY29uY2x1c2lvbjtcbiAgfVxuXG4gIGdldExhYmVscygpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbHM7XG4gIH1cblxuICBnZXRQcmVtaXNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5wcmVtaXNlcztcbiAgfVxuXG4gIGdldENvbmNsdXNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uY2x1c2lvbjtcbiAgfVxuXG4gIG1hdGNoTGFiZWxOYW1lKGxhYmVsTmFtZSkge1xuICAgIGNvbnN0IG1hdGNoZXNMYWJlbE5hbWUgPSB0aGlzLmxhYmVscy5zb21lKChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbmFtZSA9IGxhYmVsTmFtZSwgLy8vXG4gICAgICAgICAgICBsYWJlbE1hdGNoZXNOYW1lID0gbGFiZWwubWF0Y2hOYW1lKG5hbWUpO1xuXG4gICAgICBpZiAobGFiZWxNYXRjaGVzTmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtYXRjaGVzTGFiZWxOYW1lO1xuICB9XG5cbiAgbWF0Y2hNZXRhc3RhdGVtZW50KG1ldGFzdGF0ZW1lbnROb2RlLCBtZXRhcHJvb2ZDb250ZXh0KSB7XG4gICAgbGV0IG1ldGFzdGF0ZW1lbnROYXRjaGVzO1xuXG4gICAgY29uc3QgcHJlbWlzZXNMZW5ndGggPSB0aGlzLnByZW1pc2VzLmxlbmd0aDtcblxuICAgIGlmIChwcmVtaXNlc0xlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3QgbWV0YVN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICAgIGNvbmNsdXNpb25NYXRjaGVzID0gbWF0Y2hDb25jbHVzaW9uKHRoaXMuY29uY2x1c2lvbiwgbWV0YXN0YXRlbWVudE5vZGUsIG1ldGFTdWJzdGl0dXRpb25zKTtcblxuICAgICAgbWV0YXN0YXRlbWVudE5hdGNoZXMgPSBjb25jbHVzaW9uTWF0Y2hlczsgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGFBc3NlcnRpb25zID0gbWV0YXByb29mQ29udGV4dC5nZXRNZXRhQXNzZXJ0aW9ucygpO1xuXG4gICAgICBtZXRhc3RhdGVtZW50TmF0Y2hlcyA9IHNvbWVTdWJBcnJheShtZXRhQXNzZXJ0aW9ucywgcHJlbWlzZXNMZW5ndGgsIChtZXRhQXNzZXJ0aW9ucykgPT4ge1xuICAgICAgICBjb25zdCBwcmVtaXNlc01hdGNoQ29uY2x1c2lvbiA9IG1hdGNoUHJlbWlzZXNBbmRDb25jbHVzaW9uKHRoaXMucHJlbWlzZXMsIHRoaXMuY29uY2x1c2lvbiwgbWV0YUFzc2VydGlvbnMsIG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgICBpZiAocHJlbWlzZXNNYXRjaENvbmNsdXNpb24pIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFzdGF0ZW1lbnROYXRjaGVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGxhYmVsc0pTT04gPSB0aGlzLmxhYmVscy5tYXAoKGxhYmVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbEpTT04gPSBsYWJlbC50b0pTT04oKTtcblxuICAgICAgICAgICAgcmV0dXJuIGxhYmVsSlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBwcmVtaXNlc0pTT04gPSB0aGlzLnByZW1pc2VzLm1hcCgocHJlbWlzZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJlbWlzZUpTT04gPSBwcmVtaXNlLnRvSlNPTigpO1xuXG4gICAgICAgICAgICByZXR1cm4gcHJlbWlzZUpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY29uY2x1c2lvbkpTT04gPSB0aGlzLmNvbmNsdXNpb24udG9KU09OKCksXG4gICAgICAgICAga2luZCA9IFJVTEVfS0lORCxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNKU09OLCAgLy8vXG4gICAgICAgICAgcHJlbWlzZXMgPSBwcmVtaXNlc0pTT04sICAvLy9cbiAgICAgICAgICBjb25jbHVzaW9uID0gY29uY2x1c2lvbkpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAga2luZCxcbiAgICAgICAgICAgIGxhYmVscyxcbiAgICAgICAgICAgIHByZW1pc2VzLFxuICAgICAgICAgICAgY29uY2x1c2lvblxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCByZWxlYXNlQ29udGV4dCkge1xuICAgIGxldCBydWxlO1xuXG4gICAgbGV0IHsgbGFiZWxzIH0gPSBqc29uO1xuXG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVsczsgIC8vL1xuXG4gICAgbGFiZWxzID0gbGFiZWxzSlNPTi5tYXAoKGxhYmVsSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGxhYmVsSlNPTiwgLy8vXG4gICAgICAgICAgICBsYWJlbCA9IExhYmVsLmZyb21KU09OKGpzb24sIHJlbGVhc2VDb250ZXh0KTtcblxuICAgICAgcmV0dXJuIGxhYmVsO1xuICAgIH0pO1xuXG4gICAgbGV0IHsgcHJlbWlzZXMgfSA9IGpzb247XG5cbiAgICBjb25zdCBwcmVtaXNlc0pTT04gPSBwcmVtaXNlczsgIC8vL1xuXG4gICAgcHJlbWlzZXMgPSBwcmVtaXNlc0pTT04ubWFwKChwcmVtaXNlSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IHByZW1pc2VKU09OLCAvLy9cbiAgICAgICAgICAgIHByZW1pc2UgPSBQcmVtaXNlLmZyb21KU09OKGpzb24sIHJlbGVhc2VDb250ZXh0KTtcblxuICAgICAgcmV0dXJuIHByZW1pc2U7XG4gICAgfSk7XG5cbiAgICBsZXQgeyBjb25jbHVzaW9uIH0gPSBqc29uO1xuXG4gICAgY29uc3QgY29uY2x1c2lvbkpTT04gPSBjb25jbHVzaW9uOyAgLy8vXG5cbiAgICBqc29uID0gY29uY2x1c2lvbkpTT047ICAvLy9cblxuICAgIGNvbmNsdXNpb24gPSBDb25jbHVzaW9uLmZyb21KU09OKGpzb24sIHJlbGVhc2VDb250ZXh0KTtcblxuICAgIHJ1bGUgPSBuZXcgUnVsZShsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21MYWJlbHNQcmVtaXNlc0FuZENvbmNsdXNpb24obGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbikge1xuICAgIGNvbnN0IHJ1bGUgPSBuZXcgUnVsZShsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hdGNoUHJlbWlzZShwcmVtaXNlLCBtZXRhQXNzZXJ0aW9ucywgbWV0YVN1YnN0aXR1dGlvbnMpIHtcbiAgY29uc3QgbWV0YUFzc2VydGlvbiA9IHBydW5lKG1ldGFBc3NlcnRpb25zLCAobWV0YUFzc2VydGlvbikgPT4ge1xuICAgIGNvbnN0IG1ldGFTdWJwcm9vZk5vZGUgPSBtZXRhQXNzZXJ0aW9uLmdldE1ldGFTdWJwcm9vZk5vZGUoKSxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFBc3NlcnRpb24uZ2V0TWV0YXN0YXRlbWVudE5vZGUoKVxuXG4gICAgaWYgKG1ldGFTdWJwcm9vZk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGFTdWJQcm9vZk1hdGNoZXMgPSBwcmVtaXNlLm1hdGNoTWV0YVN1YnByb29mTm9kZShtZXRhU3VicHJvb2ZOb2RlLCBtZXRhU3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgIGlmICghbWV0YVN1YlByb29mTWF0Y2hlcykgeyAgLy8vXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRhc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YXN0YXRlbWVudE1hdGNoZXMgPSBwcmVtaXNlLm1hdGNoTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUsIG1ldGFTdWJzdGl0dXRpb25zKTtcblxuICAgICAgaWYgKCFtZXRhc3RhdGVtZW50TWF0Y2hlcykgeyAgLy8vXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICB9KSB8fCBudWxsO1xuXG4gIGNvbnN0IHByZW1pc2VNYXRjaGVzID0gKG1ldGFBc3NlcnRpb24gIT09IG51bGwpO1xuXG4gIHJldHVybiBwcmVtaXNlTWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gbWF0Y2hQcmVtaXNlcyhwcmVtaXNlLCBtZXRhQXNzZXJ0aW9ucywgbWV0YVN1YnN0aXR1dGlvbnMpIHtcbiAgY29uc3QgcHJlbWlzZXNNYXRjaGVzID0gcHJlbWlzZS5ldmVyeSgocHJlbWlzZSkgPT4ge1xuICAgIGNvbnN0IHByZW1pc2VNYXRjaGVzID0gbWF0Y2hQcmVtaXNlKHByZW1pc2UsIG1ldGFBc3NlcnRpb25zLCBtZXRhU3Vic3RpdHV0aW9ucyk7XG5cbiAgICBpZiAocHJlbWlzZU1hdGNoZXMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHByZW1pc2VzTWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gbWF0Y2hDb25jbHVzaW9uKGNvbmNsdXNpb24sIG1ldGFzdGF0ZW1lbnROb2RlLCBtZXRhU3Vic3RpdHV0aW9ucykge1xuICBjb25zdCBub25UZXJtaW5hbE5vZGVNYXRjaGVzID0gY29uY2x1c2lvbi5tYXRjaE1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlLCBtZXRhU3Vic3RpdHV0aW9ucyksXG4gICAgICAgIGNvbmNsdXNpb25NYXRjaGVzID0gbm9uVGVybWluYWxOb2RlTWF0Y2hlczsgLy8vXG5cbiAgcmV0dXJuIGNvbmNsdXNpb25NYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtYXRjaFByZW1pc2VzQW5kQ29uY2x1c2lvbihwcmVtaXNlcywgY29uY2x1c2lvbiwgbWV0YUFzc2VydGlvbnMsIG1ldGFzdGF0ZW1lbnROb2RlKSB7XG4gIGxldCBwcmVtaXNlc01hdGNoQ29uY2x1c2lvbiA9IGZhbHNlO1xuXG4gIGNvbnN0IG1ldGFTdWJzdGl0dXRpb25zID0gW10sXG4gICAgICAgIHByZW1pc2VzTWF0Y2hlcyA9IG1hdGNoUHJlbWlzZXMocHJlbWlzZXMsIG1ldGFBc3NlcnRpb25zLCBtZXRhU3Vic3RpdHV0aW9ucyk7XG5cbiAgaWYgKHByZW1pc2VzTWF0Y2hlcykge1xuICAgIGNvbnN0IGNvbmNsdXNpb25NYXRjaGVzID0gbWF0Y2hDb25jbHVzaW9uKGNvbmNsdXNpb24sIG1ldGFzdGF0ZW1lbnROb2RlLCBtZXRhU3Vic3RpdHV0aW9ucyk7XG5cbiAgICBwcmVtaXNlc01hdGNoQ29uY2x1c2lvbiA9IGNvbmNsdXNpb25NYXRjaGVzOyAgLy8vXG4gIH1cblxuICByZXR1cm4gcHJlbWlzZXNNYXRjaENvbmNsdXNpb247XG59XG4iXSwibmFtZXMiOlsiUnVsZSIsImxhYmVscyIsInByZW1pc2VzIiwiY29uY2x1c2lvbiIsImdldExhYmVscyIsImdldFByZW1pc2VzIiwiZ2V0Q29uY2x1c2lvbiIsIm1hdGNoTGFiZWxOYW1lIiwibGFiZWxOYW1lIiwibWF0Y2hlc0xhYmVsTmFtZSIsInNvbWUiLCJsYWJlbCIsIm5hbWUiLCJsYWJlbE1hdGNoZXNOYW1lIiwibWF0Y2hOYW1lIiwibWF0Y2hNZXRhc3RhdGVtZW50IiwibWV0YXN0YXRlbWVudE5vZGUiLCJtZXRhcHJvb2ZDb250ZXh0IiwibWV0YXN0YXRlbWVudE5hdGNoZXMiLCJwcmVtaXNlc0xlbmd0aCIsImxlbmd0aCIsIm1ldGFTdWJzdGl0dXRpb25zIiwiY29uY2x1c2lvbk1hdGNoZXMiLCJtYXRjaENvbmNsdXNpb24iLCJtZXRhQXNzZXJ0aW9ucyIsImdldE1ldGFBc3NlcnRpb25zIiwic29tZVN1YkFycmF5IiwicHJlbWlzZXNNYXRjaENvbmNsdXNpb24iLCJtYXRjaFByZW1pc2VzQW5kQ29uY2x1c2lvbiIsInRvSlNPTiIsImxhYmVsc0pTT04iLCJtYXAiLCJsYWJlbEpTT04iLCJwcmVtaXNlc0pTT04iLCJwcmVtaXNlIiwicHJlbWlzZUpTT04iLCJjb25jbHVzaW9uSlNPTiIsImtpbmQiLCJSVUxFX0tJTkQiLCJqc29uIiwiZnJvbUpTT04iLCJyZWxlYXNlQ29udGV4dCIsInJ1bGUiLCJMYWJlbCIsIlByZW1pc2UiLCJDb25jbHVzaW9uIiwiZnJvbUxhYmVsc1ByZW1pc2VzQW5kQ29uY2x1c2lvbiIsIm1hdGNoUHJlbWlzZSIsIm1ldGFBc3NlcnRpb24iLCJwcnVuZSIsIm1ldGFTdWJwcm9vZk5vZGUiLCJnZXRNZXRhU3VicHJvb2ZOb2RlIiwiZ2V0TWV0YXN0YXRlbWVudE5vZGUiLCJtZXRhU3ViUHJvb2ZNYXRjaGVzIiwibWF0Y2hNZXRhU3VicHJvb2ZOb2RlIiwibWV0YXN0YXRlbWVudE1hdGNoZXMiLCJtYXRjaE1ldGFzdGF0ZW1lbnROb2RlIiwicHJlbWlzZU1hdGNoZXMiLCJtYXRjaFByZW1pc2VzIiwicHJlbWlzZXNNYXRjaGVzIiwiZXZlcnki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