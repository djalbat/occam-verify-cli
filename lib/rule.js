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
                var labels = json.labels, premises = json.premises, conclusion = json.conclusion;
                labels = labels.map(function(label) {
                    var _$json = label; ///
                    label = _label.default.fromJSON(_$json, callback);
                    return label;
                });
                premises = premises.map(function(premise) {
                    var _$json = premise; ///
                    premise = _premise.default.fromJSON(_$json, callback);
                    return premise;
                });
                json = conclusion; ///
                conclusion = _conclusion.default.fromJSON(json, callback);
                var rule = new Rule(labels, premises, conclusion);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4vbGFiZWxcIjtcbmltcG9ydCBQcmVtaXNlIGZyb20gXCIuL3ByZW1pc2VcIjtcbmltcG9ydCBDb25jbHVzaW9uIGZyb20gXCIuL2NvbmNsdXNpb25cIjtcblxuaW1wb3J0IHsgcHJ1bmUgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IFJVTEVfS0lORCB9IGZyb20gXCIuL2tpbmRzXCI7XG5pbXBvcnQgeyBzb21lU3ViQXJyYXkgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24pIHtcbiAgICB0aGlzLmxhYmVscyA9IGxhYmVscztcbiAgICB0aGlzLnByZW1pc2VzID0gcHJlbWlzZXM7XG4gICAgdGhpcy5jb25jbHVzaW9uID0gY29uY2x1c2lvbjtcbiAgfVxuXG4gIGdldExhYmVscygpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbHM7XG4gIH1cblxuICBnZXRQcmVtaXNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5wcmVtaXNlcztcbiAgfVxuXG4gIGdldENvbmNsdXNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uY2x1c2lvbjtcbiAgfVxuXG4gIG1hdGNoTGFiZWxOYW1lKGxhYmVsTmFtZSkge1xuICAgIGNvbnN0IG1hdGNoZXNMYWJlbE5hbWUgPSB0aGlzLmxhYmVscy5zb21lKChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbmFtZSA9IGxhYmVsTmFtZSwgLy8vXG4gICAgICAgICAgICBsYWJlbE1hdGNoZXNOYW1lID0gbGFiZWwubWF0Y2hOYW1lKG5hbWUpO1xuXG4gICAgICBpZiAobGFiZWxNYXRjaGVzTmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtYXRjaGVzTGFiZWxOYW1lO1xuICB9XG5cbiAgbWF0Y2hNZXRhc3RhdGVtZW50KG1ldGFzdGF0ZW1lbnROb2RlLCBtZXRhcHJvb2ZDb250ZXh0KSB7XG4gICAgbGV0IG1ldGFzdGF0ZW1lbnROYXRjaGVzO1xuXG4gICAgY29uc3QgcHJlbWlzZXNMZW5ndGggPSB0aGlzLnByZW1pc2VzLmxlbmd0aDtcblxuICAgIGlmIChwcmVtaXNlc0xlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3QgbWV0YVN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICAgIGNvbmNsdXNpb25NYXRjaGVzID0gbWF0Y2hDb25jbHVzaW9uKHRoaXMuY29uY2x1c2lvbiwgbWV0YXN0YXRlbWVudE5vZGUsIG1ldGFTdWJzdGl0dXRpb25zKTtcblxuICAgICAgbWV0YXN0YXRlbWVudE5hdGNoZXMgPSBjb25jbHVzaW9uTWF0Y2hlczsgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGFBc3NlcnRpb25zID0gbWV0YXByb29mQ29udGV4dC5nZXRNZXRhQXNzZXJ0aW9ucygpO1xuXG4gICAgICBtZXRhc3RhdGVtZW50TmF0Y2hlcyA9IHNvbWVTdWJBcnJheShtZXRhQXNzZXJ0aW9ucywgcHJlbWlzZXNMZW5ndGgsIChtZXRhQXNzZXJ0aW9ucykgPT4ge1xuICAgICAgICBjb25zdCBwcmVtaXNlc01hdGNoQ29uY2x1c2lvbiA9IG1hdGNoUHJlbWlzZXNBbmRDb25jbHVzaW9uKHRoaXMucHJlbWlzZXMsIHRoaXMuY29uY2x1c2lvbiwgbWV0YUFzc2VydGlvbnMsIG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgICBpZiAocHJlbWlzZXNNYXRjaENvbmNsdXNpb24pIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFzdGF0ZW1lbnROYXRjaGVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGxhYmVsc0pTT04gPSB0aGlzLmxhYmVscy5tYXAoKGxhYmVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbEpTT04gPSBsYWJlbC50b0pTT04oKTtcblxuICAgICAgICAgICAgcmV0dXJuIGxhYmVsSlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBwcmVtaXNlc0pTT04gPSB0aGlzLnByZW1pc2VzLm1hcCgocHJlbWlzZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJlbWlzZUpTT04gPSBwcmVtaXNlLnRvSlNPTigpO1xuXG4gICAgICAgICAgICByZXR1cm4gcHJlbWlzZUpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY29uY2x1c2lvbkpTT04gPSB0aGlzLmNvbmNsdXNpb24udG9KU09OKCksXG4gICAgICAgICAga2luZCA9IFJVTEVfS0lORCxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNKU09OLCAgLy8vXG4gICAgICAgICAgcHJlbWlzZXMgPSBwcmVtaXNlc0pTT04sICAvLy9cbiAgICAgICAgICBjb25jbHVzaW9uID0gY29uY2x1c2lvbkpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAga2luZCxcbiAgICAgICAgICAgIGxhYmVscyxcbiAgICAgICAgICAgIHByZW1pc2VzLFxuICAgICAgICAgICAgY29uY2x1c2lvblxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjYWxsYmFjaykge1xuICAgIGxldCB7IGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24gfSA9IGpzb247XG5cbiAgICBsYWJlbHMgPSBsYWJlbHMubWFwKChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGxhYmVsOyAvLy9cblxuICAgICAgbGFiZWwgPSBMYWJlbC5mcm9tSlNPTihqc29uLCBjYWxsYmFjayk7XG5cbiAgICAgIHJldHVybiBsYWJlbDtcbiAgICB9KTtcblxuICAgIHByZW1pc2VzID0gcHJlbWlzZXMubWFwKChwcmVtaXNlKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gcHJlbWlzZTsgLy8vXG5cbiAgICAgIHByZW1pc2UgPSBQcmVtaXNlLmZyb21KU09OKGpzb24sIGNhbGxiYWNrKTtcblxuICAgICAgcmV0dXJuIHByZW1pc2U7XG4gICAgfSk7XG5cbiAgICBqc29uID0gY29uY2x1c2lvbjsgIC8vL1xuXG4gICAgY29uY2x1c2lvbiA9IENvbmNsdXNpb24uZnJvbUpTT04oanNvbiwgY2FsbGJhY2spO1xuXG4gICAgY29uc3QgcnVsZSA9IG5ldyBSdWxlKGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24pO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUxhYmVsc1ByZW1pc2VzQW5kQ29uY2x1c2lvbihsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uKSB7XG4gICAgY29uc3QgcnVsZSA9IG5ldyBSdWxlKGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24pO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWF0Y2hQcmVtaXNlKHByZW1pc2UsIG1ldGFBc3NlcnRpb25zLCBtZXRhU3Vic3RpdHV0aW9ucykge1xuICBjb25zdCBtZXRhQXNzZXJ0aW9uID0gcHJ1bmUobWV0YUFzc2VydGlvbnMsIChtZXRhQXNzZXJ0aW9uKSA9PiB7XG4gICAgY29uc3QgbWV0YVN1YnByb29mTm9kZSA9IG1ldGFBc3NlcnRpb24uZ2V0TWV0YVN1YnByb29mTm9kZSgpLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlID0gbWV0YUFzc2VydGlvbi5nZXRNZXRhc3RhdGVtZW50Tm9kZSgpXG5cbiAgICBpZiAobWV0YVN1YnByb29mTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YVN1YlByb29mTWF0Y2hlcyA9IHByZW1pc2UubWF0Y2hNZXRhU3VicHJvb2ZOb2RlKG1ldGFTdWJwcm9vZk5vZGUsIG1ldGFTdWJzdGl0dXRpb25zKTtcblxuICAgICAgaWYgKCFtZXRhU3ViUHJvb2ZNYXRjaGVzKSB7ICAvLy9cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGFzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhc3RhdGVtZW50TWF0Y2hlcyA9IHByZW1pc2UubWF0Y2hNZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZSwgbWV0YVN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICBpZiAoIW1ldGFzdGF0ZW1lbnRNYXRjaGVzKSB7ICAvLy9cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gIH0pIHx8IG51bGw7XG5cbiAgY29uc3QgcHJlbWlzZU1hdGNoZXMgPSAobWV0YUFzc2VydGlvbiAhPT0gbnVsbCk7XG5cbiAgcmV0dXJuIHByZW1pc2VNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtYXRjaFByZW1pc2VzKHByZW1pc2UsIG1ldGFBc3NlcnRpb25zLCBtZXRhU3Vic3RpdHV0aW9ucykge1xuICBjb25zdCBwcmVtaXNlc01hdGNoZXMgPSBwcmVtaXNlLmV2ZXJ5KChwcmVtaXNlKSA9PiB7XG4gICAgY29uc3QgcHJlbWlzZU1hdGNoZXMgPSBtYXRjaFByZW1pc2UocHJlbWlzZSwgbWV0YUFzc2VydGlvbnMsIG1ldGFTdWJzdGl0dXRpb25zKTtcblxuICAgIGlmIChwcmVtaXNlTWF0Y2hlcykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcHJlbWlzZXNNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtYXRjaENvbmNsdXNpb24oY29uY2x1c2lvbiwgbWV0YXN0YXRlbWVudE5vZGUsIG1ldGFTdWJzdGl0dXRpb25zKSB7XG4gIGNvbnN0IG5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBjb25jbHVzaW9uLm1hdGNoTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUsIG1ldGFTdWJzdGl0dXRpb25zKSxcbiAgICAgICAgY29uY2x1c2lvbk1hdGNoZXMgPSBub25UZXJtaW5hbE5vZGVNYXRjaGVzOyAvLy9cblxuICByZXR1cm4gY29uY2x1c2lvbk1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1hdGNoUHJlbWlzZXNBbmRDb25jbHVzaW9uKHByZW1pc2VzLCBjb25jbHVzaW9uLCBtZXRhQXNzZXJ0aW9ucywgbWV0YXN0YXRlbWVudE5vZGUpIHtcbiAgbGV0IHByZW1pc2VzTWF0Y2hDb25jbHVzaW9uID0gZmFsc2U7XG5cbiAgY29uc3QgbWV0YVN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgcHJlbWlzZXNNYXRjaGVzID0gbWF0Y2hQcmVtaXNlcyhwcmVtaXNlcywgbWV0YUFzc2VydGlvbnMsIG1ldGFTdWJzdGl0dXRpb25zKTtcblxuICBpZiAocHJlbWlzZXNNYXRjaGVzKSB7XG4gICAgY29uc3QgY29uY2x1c2lvbk1hdGNoZXMgPSBtYXRjaENvbmNsdXNpb24oY29uY2x1c2lvbiwgbWV0YXN0YXRlbWVudE5vZGUsIG1ldGFTdWJzdGl0dXRpb25zKTtcblxuICAgIHByZW1pc2VzTWF0Y2hDb25jbHVzaW9uID0gY29uY2x1c2lvbk1hdGNoZXM7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBwcmVtaXNlc01hdGNoQ29uY2x1c2lvbjtcbn1cbiJdLCJuYW1lcyI6WyJSdWxlIiwibGFiZWxzIiwicHJlbWlzZXMiLCJjb25jbHVzaW9uIiwiZ2V0TGFiZWxzIiwiZ2V0UHJlbWlzZXMiLCJnZXRDb25jbHVzaW9uIiwibWF0Y2hMYWJlbE5hbWUiLCJsYWJlbE5hbWUiLCJtYXRjaGVzTGFiZWxOYW1lIiwic29tZSIsImxhYmVsIiwibmFtZSIsImxhYmVsTWF0Y2hlc05hbWUiLCJtYXRjaE5hbWUiLCJtYXRjaE1ldGFzdGF0ZW1lbnQiLCJtZXRhc3RhdGVtZW50Tm9kZSIsIm1ldGFwcm9vZkNvbnRleHQiLCJtZXRhc3RhdGVtZW50TmF0Y2hlcyIsInByZW1pc2VzTGVuZ3RoIiwibGVuZ3RoIiwibWV0YVN1YnN0aXR1dGlvbnMiLCJjb25jbHVzaW9uTWF0Y2hlcyIsIm1hdGNoQ29uY2x1c2lvbiIsIm1ldGFBc3NlcnRpb25zIiwiZ2V0TWV0YUFzc2VydGlvbnMiLCJzb21lU3ViQXJyYXkiLCJwcmVtaXNlc01hdGNoQ29uY2x1c2lvbiIsIm1hdGNoUHJlbWlzZXNBbmRDb25jbHVzaW9uIiwidG9KU09OIiwibGFiZWxzSlNPTiIsIm1hcCIsImxhYmVsSlNPTiIsInByZW1pc2VzSlNPTiIsInByZW1pc2UiLCJwcmVtaXNlSlNPTiIsImNvbmNsdXNpb25KU09OIiwia2luZCIsIlJVTEVfS0lORCIsImpzb24iLCJmcm9tSlNPTiIsImNhbGxiYWNrIiwiTGFiZWwiLCJQcmVtaXNlIiwiQ29uY2x1c2lvbiIsInJ1bGUiLCJmcm9tTGFiZWxzUHJlbWlzZXNBbmRDb25jbHVzaW9uIiwibWF0Y2hQcmVtaXNlIiwibWV0YUFzc2VydGlvbiIsInBydW5lIiwibWV0YVN1YnByb29mTm9kZSIsImdldE1ldGFTdWJwcm9vZk5vZGUiLCJnZXRNZXRhc3RhdGVtZW50Tm9kZSIsIm1ldGFTdWJQcm9vZk1hdGNoZXMiLCJtYXRjaE1ldGFTdWJwcm9vZk5vZGUiLCJtZXRhc3RhdGVtZW50TWF0Y2hlcyIsIm1hdGNoTWV0YXN0YXRlbWVudE5vZGUiLCJwcmVtaXNlTWF0Y2hlcyIsIm1hdGNoUHJlbWlzZXMiLCJwcmVtaXNlc01hdGNoZXMiLCJldmVyeSIsIm5vblRlcm1pbmFsTm9kZU1hdGNoZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7OzBEQVJIOzREQUNFOytEQUNHO3FCQUVEO3FCQUNJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR1gsSUFBQSxBQUFNQSxxQkFzSGxCLEFBdEhZO2FBQU1BLEtBQ1BDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxVQUFVOzhCQURyQkg7UUFFakIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hC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