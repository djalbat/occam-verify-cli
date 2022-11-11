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
            value: function fromJSON(json, callback) {
                var rule = null;
                var labels = json.labels, premises = json.premises, conclusion = json.conclusion;
                labels = labels.reduce(function(labels, label) {
                    if (labels !== null) {
                        var _$json = label; ///
                        label = _label.default.fromJSON(_$json, callback); ///
                        if (label !== null) {
                            labels.push(label);
                        } else {
                            labels = null;
                        }
                    }
                    return labels;
                }, []);
                premises = premises.reduce(function(premises, premise) {
                    if (premises !== null) {
                        var _$json = premise; ///
                        premise = _premise.default.fromJSON(_$json, callback); ///
                        if (premise !== null) {
                            premises.push(premise);
                        } else {
                            premises = null;
                        }
                    }
                    return premises;
                }, []);
                json = conclusion; ///
                conclusion = _conclusion.default.fromJSON(json, callback);
                if (labels !== null && premises !== null && conclusion !== null) {
                    rule = new Rule(labels, premises, conclusion);
                }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4vbGFiZWxcIjtcbmltcG9ydCBQcmVtaXNlIGZyb20gXCIuL3ByZW1pc2VcIjtcbmltcG9ydCBDb25jbHVzaW9uIGZyb20gXCIuL2NvbmNsdXNpb25cIjtcblxuaW1wb3J0IHsgcHJ1bmUgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IFJVTEVfS0lORCB9IGZyb20gXCIuL2tpbmRzXCI7XG5pbXBvcnQgeyBzb21lU3ViQXJyYXkgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24pIHtcbiAgICB0aGlzLmxhYmVscyA9IGxhYmVscztcbiAgICB0aGlzLnByZW1pc2VzID0gcHJlbWlzZXM7XG4gICAgdGhpcy5jb25jbHVzaW9uID0gY29uY2x1c2lvbjtcbiAgfVxuXG4gIGdldExhYmVscygpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbHM7XG4gIH1cblxuICBnZXRQcmVtaXNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5wcmVtaXNlcztcbiAgfVxuXG4gIGdldENvbmNsdXNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uY2x1c2lvbjtcbiAgfVxuXG4gIG1hdGNoTGFiZWxOYW1lKGxhYmVsTmFtZSkge1xuICAgIGNvbnN0IG1hdGNoZXNMYWJlbE5hbWUgPSB0aGlzLmxhYmVscy5zb21lKChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbmFtZSA9IGxhYmVsTmFtZSwgLy8vXG4gICAgICAgICAgICBsYWJlbE1hdGNoZXNOYW1lID0gbGFiZWwubWF0Y2hOYW1lKG5hbWUpO1xuXG4gICAgICBpZiAobGFiZWxNYXRjaGVzTmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtYXRjaGVzTGFiZWxOYW1lO1xuICB9XG5cbiAgbWF0Y2hNZXRhc3RhdGVtZW50KG1ldGFzdGF0ZW1lbnROb2RlLCBtZXRhcHJvb2ZDb250ZXh0KSB7XG4gICAgbGV0IG1ldGFzdGF0ZW1lbnROYXRjaGVzO1xuXG4gICAgY29uc3QgcHJlbWlzZXNMZW5ndGggPSB0aGlzLnByZW1pc2VzLmxlbmd0aDtcblxuICAgIGlmIChwcmVtaXNlc0xlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3QgbWV0YVN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICAgIGNvbmNsdXNpb25NYXRjaGVzID0gbWF0Y2hDb25jbHVzaW9uKHRoaXMuY29uY2x1c2lvbiwgbWV0YXN0YXRlbWVudE5vZGUsIG1ldGFTdWJzdGl0dXRpb25zKTtcblxuICAgICAgbWV0YXN0YXRlbWVudE5hdGNoZXMgPSBjb25jbHVzaW9uTWF0Y2hlczsgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGFBc3NlcnRpb25zID0gbWV0YXByb29mQ29udGV4dC5nZXRNZXRhQXNzZXJ0aW9ucygpO1xuXG4gICAgICBtZXRhc3RhdGVtZW50TmF0Y2hlcyA9IHNvbWVTdWJBcnJheShtZXRhQXNzZXJ0aW9ucywgcHJlbWlzZXNMZW5ndGgsIChtZXRhQXNzZXJ0aW9ucykgPT4ge1xuICAgICAgICBjb25zdCBwcmVtaXNlc01hdGNoQ29uY2x1c2lvbiA9IG1hdGNoUHJlbWlzZXNBbmRDb25jbHVzaW9uKHRoaXMucHJlbWlzZXMsIHRoaXMuY29uY2x1c2lvbiwgbWV0YUFzc2VydGlvbnMsIG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgICBpZiAocHJlbWlzZXNNYXRjaENvbmNsdXNpb24pIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFzdGF0ZW1lbnROYXRjaGVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGxhYmVsc0pTT04gPSB0aGlzLmxhYmVscy5tYXAoKGxhYmVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbEpTT04gPSBsYWJlbC50b0pTT04oKTtcblxuICAgICAgICAgICAgcmV0dXJuIGxhYmVsSlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBwcmVtaXNlc0pTT04gPSB0aGlzLnByZW1pc2VzLm1hcCgocHJlbWlzZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJlbWlzZUpTT04gPSBwcmVtaXNlLnRvSlNPTigpO1xuXG4gICAgICAgICAgICByZXR1cm4gcHJlbWlzZUpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY29uY2x1c2lvbkpTT04gPSB0aGlzLmNvbmNsdXNpb24udG9KU09OKCksXG4gICAgICAgICAga2luZCA9IFJVTEVfS0lORCxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNKU09OLCAgLy8vXG4gICAgICAgICAgcHJlbWlzZXMgPSBwcmVtaXNlc0pTT04sICAvLy9cbiAgICAgICAgICBjb25jbHVzaW9uID0gY29uY2x1c2lvbkpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAga2luZCxcbiAgICAgICAgICAgIGxhYmVscyxcbiAgICAgICAgICAgIHByZW1pc2VzLFxuICAgICAgICAgICAgY29uY2x1c2lvblxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjYWxsYmFjaykge1xuICAgIGxldCBydWxlID0gbnVsbDtcblxuICAgIGxldCB7IGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24gfSA9IGpzb247XG5cbiAgICBsYWJlbHMgPSBsYWJlbHMucmVkdWNlKChsYWJlbHMsIGxhYmVsKSA9PiB7XG4gICAgICBpZiAobGFiZWxzICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGpzb24gPSBsYWJlbDsgLy8vXG5cbiAgICAgICAgbGFiZWwgPSBMYWJlbC5mcm9tSlNPTihqc29uLCBjYWxsYmFjayk7IC8vL1xuXG4gICAgICAgIGlmIChsYWJlbCAhPT0gbnVsbCkge1xuICAgICAgICAgIGxhYmVscy5wdXNoKGxhYmVsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsYWJlbHMgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBsYWJlbHM7XG4gICAgfSwgW10pO1xuXG4gICAgcHJlbWlzZXMgPSBwcmVtaXNlcy5yZWR1Y2UoKHByZW1pc2VzLCBwcmVtaXNlKSA9PiB7XG4gICAgICBpZiAocHJlbWlzZXMgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QganNvbiA9IHByZW1pc2U7IC8vL1xuXG4gICAgICAgIHByZW1pc2UgPSBQcmVtaXNlLmZyb21KU09OKGpzb24sIGNhbGxiYWNrKTsgLy8vXG5cbiAgICAgICAgaWYgKHByZW1pc2UgIT09IG51bGwpIHtcbiAgICAgICAgICBwcmVtaXNlcy5wdXNoKHByZW1pc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByZW1pc2VzID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJlbWlzZXM7XG4gICAgfSwgW10pO1xuXG4gICAganNvbiA9IGNvbmNsdXNpb247ICAvLy9cblxuICAgIGNvbmNsdXNpb24gPSBDb25jbHVzaW9uLmZyb21KU09OKGpzb24sIGNhbGxiYWNrKTtcblxuICAgIGlmICgobGFiZWxzICE9PSBudWxsKSAmJiAocHJlbWlzZXMgIT09IG51bGwpICYmIChjb25jbHVzaW9uICE9PSBudWxsKSkge1xuICAgICAgcnVsZSA9IG5ldyBSdWxlKGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBydWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21MYWJlbHNQcmVtaXNlc0FuZENvbmNsdXNpb24obGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbikge1xuICAgIGNvbnN0IHJ1bGUgPSBuZXcgUnVsZShsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hdGNoUHJlbWlzZShwcmVtaXNlLCBtZXRhQXNzZXJ0aW9ucywgbWV0YVN1YnN0aXR1dGlvbnMpIHtcbiAgY29uc3QgbWV0YUFzc2VydGlvbiA9IHBydW5lKG1ldGFBc3NlcnRpb25zLCAobWV0YUFzc2VydGlvbikgPT4ge1xuICAgIGNvbnN0IG1ldGFTdWJwcm9vZk5vZGUgPSBtZXRhQXNzZXJ0aW9uLmdldE1ldGFTdWJwcm9vZk5vZGUoKSxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFBc3NlcnRpb24uZ2V0TWV0YXN0YXRlbWVudE5vZGUoKVxuXG4gICAgaWYgKG1ldGFTdWJwcm9vZk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGFTdWJQcm9vZk1hdGNoZXMgPSBwcmVtaXNlLm1hdGNoTWV0YVN1YnByb29mTm9kZShtZXRhU3VicHJvb2ZOb2RlLCBtZXRhU3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgIGlmICghbWV0YVN1YlByb29mTWF0Y2hlcykgeyAgLy8vXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRhc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YXN0YXRlbWVudE1hdGNoZXMgPSBwcmVtaXNlLm1hdGNoTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUsIG1ldGFTdWJzdGl0dXRpb25zKTtcblxuICAgICAgaWYgKCFtZXRhc3RhdGVtZW50TWF0Y2hlcykgeyAgLy8vXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICB9KSB8fCBudWxsO1xuXG4gIGNvbnN0IHByZW1pc2VNYXRjaGVzID0gKG1ldGFBc3NlcnRpb24gIT09IG51bGwpO1xuXG4gIHJldHVybiBwcmVtaXNlTWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gbWF0Y2hQcmVtaXNlcyhwcmVtaXNlLCBtZXRhQXNzZXJ0aW9ucywgbWV0YVN1YnN0aXR1dGlvbnMpIHtcbiAgY29uc3QgcHJlbWlzZXNNYXRjaGVzID0gcHJlbWlzZS5ldmVyeSgocHJlbWlzZSkgPT4ge1xuICAgIGNvbnN0IHByZW1pc2VNYXRjaGVzID0gbWF0Y2hQcmVtaXNlKHByZW1pc2UsIG1ldGFBc3NlcnRpb25zLCBtZXRhU3Vic3RpdHV0aW9ucyk7XG5cbiAgICBpZiAocHJlbWlzZU1hdGNoZXMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHByZW1pc2VzTWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gbWF0Y2hDb25jbHVzaW9uKGNvbmNsdXNpb24sIG1ldGFzdGF0ZW1lbnROb2RlLCBtZXRhU3Vic3RpdHV0aW9ucykge1xuICBjb25zdCBub25UZXJtaW5hbE5vZGVNYXRjaGVzID0gY29uY2x1c2lvbi5tYXRjaE1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlLCBtZXRhU3Vic3RpdHV0aW9ucyksXG4gICAgICAgIGNvbmNsdXNpb25NYXRjaGVzID0gbm9uVGVybWluYWxOb2RlTWF0Y2hlczsgLy8vXG5cbiAgcmV0dXJuIGNvbmNsdXNpb25NYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtYXRjaFByZW1pc2VzQW5kQ29uY2x1c2lvbihwcmVtaXNlcywgY29uY2x1c2lvbiwgbWV0YUFzc2VydGlvbnMsIG1ldGFzdGF0ZW1lbnROb2RlKSB7XG4gIGxldCBwcmVtaXNlc01hdGNoQ29uY2x1c2lvbiA9IGZhbHNlO1xuXG4gIGNvbnN0IG1ldGFTdWJzdGl0dXRpb25zID0gW10sXG4gICAgICAgIHByZW1pc2VzTWF0Y2hlcyA9IG1hdGNoUHJlbWlzZXMocHJlbWlzZXMsIG1ldGFBc3NlcnRpb25zLCBtZXRhU3Vic3RpdHV0aW9ucyk7XG5cbiAgaWYgKHByZW1pc2VzTWF0Y2hlcykge1xuICAgIGNvbnN0IGNvbmNsdXNpb25NYXRjaGVzID0gbWF0Y2hDb25jbHVzaW9uKGNvbmNsdXNpb24sIG1ldGFzdGF0ZW1lbnROb2RlLCBtZXRhU3Vic3RpdHV0aW9ucyk7XG5cbiAgICBwcmVtaXNlc01hdGNoQ29uY2x1c2lvbiA9IGNvbmNsdXNpb25NYXRjaGVzOyAgLy8vXG4gIH1cblxuICByZXR1cm4gcHJlbWlzZXNNYXRjaENvbmNsdXNpb247XG59XG4iXSwibmFtZXMiOlsiUnVsZSIsImxhYmVscyIsInByZW1pc2VzIiwiY29uY2x1c2lvbiIsImdldExhYmVscyIsImdldFByZW1pc2VzIiwiZ2V0Q29uY2x1c2lvbiIsIm1hdGNoTGFiZWxOYW1lIiwibGFiZWxOYW1lIiwibWF0Y2hlc0xhYmVsTmFtZSIsInNvbWUiLCJsYWJlbCIsIm5hbWUiLCJsYWJlbE1hdGNoZXNOYW1lIiwibWF0Y2hOYW1lIiwibWF0Y2hNZXRhc3RhdGVtZW50IiwibWV0YXN0YXRlbWVudE5vZGUiLCJtZXRhcHJvb2ZDb250ZXh0IiwibWV0YXN0YXRlbWVudE5hdGNoZXMiLCJwcmVtaXNlc0xlbmd0aCIsImxlbmd0aCIsIm1ldGFTdWJzdGl0dXRpb25zIiwiY29uY2x1c2lvbk1hdGNoZXMiLCJtYXRjaENvbmNsdXNpb24iLCJtZXRhQXNzZXJ0aW9ucyIsImdldE1ldGFBc3NlcnRpb25zIiwic29tZVN1YkFycmF5IiwicHJlbWlzZXNNYXRjaENvbmNsdXNpb24iLCJtYXRjaFByZW1pc2VzQW5kQ29uY2x1c2lvbiIsInRvSlNPTiIsImxhYmVsc0pTT04iLCJtYXAiLCJsYWJlbEpTT04iLCJwcmVtaXNlc0pTT04iLCJwcmVtaXNlIiwicHJlbWlzZUpTT04iLCJjb25jbHVzaW9uSlNPTiIsImtpbmQiLCJSVUxFX0tJTkQiLCJqc29uIiwiZnJvbUpTT04iLCJjYWxsYmFjayIsInJ1bGUiLCJyZWR1Y2UiLCJMYWJlbCIsInB1c2giLCJQcmVtaXNlIiwiQ29uY2x1c2lvbiIsImZyb21MYWJlbHNQcmVtaXNlc0FuZENvbmNsdXNpb24iLCJtYXRjaFByZW1pc2UiLCJtZXRhQXNzZXJ0aW9uIiwicHJ1bmUiLCJtZXRhU3VicHJvb2ZOb2RlIiwiZ2V0TWV0YVN1YnByb29mTm9kZSIsImdldE1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YVN1YlByb29mTWF0Y2hlcyIsIm1hdGNoTWV0YVN1YnByb29mTm9kZSIsIm1ldGFzdGF0ZW1lbnRNYXRjaGVzIiwibWF0Y2hNZXRhc3RhdGVtZW50Tm9kZSIsInByZW1pc2VNYXRjaGVzIiwibWF0Y2hQcmVtaXNlcyIsInByZW1pc2VzTWF0Y2hlcyIsImV2ZXJ5Iiwibm9uVGVybWluYWxOb2RlTWF0Y2hlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7MERBUkg7NERBQ0U7K0RBQ0c7cUJBRUQ7cUJBQ0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHWCxJQUFBLEFBQU1BLHFCQTBJbEIsQUExSVk7YUFBTUEsS0FDUEMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFVBQVU7OEJBRHJCSDtRQUVqQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBOztpQkFKREg7O1lBT25CSSxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWTtnQkFDVixPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjO2dCQUNaLE9BQU8sSUFBSSxDQUFDSCxRQUFRO1lBQ3RCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLGdCQUFnQjtnQkFDZCxPQUFPLElBQUksQ0FBQ0gsVUFBVTtZQUN4Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlQyxTQUFTLEVBQUU7Z0JBQ3hCLElBQU1DLG1CQUFtQixJQUFJLENBQUNSLE1BQU0sQ0FBQ1MsSUFBSSxDQUFDLFNBQUNDLE9BQVU7b0JBQ25ELElBQU1DLE9BQU9KLFdBQ1BLLG1CQUFtQkYsTUFBTUcsU0FBUyxDQUFDRjtvQkFFekMsSUFBSUMsa0JBQWtC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