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
                    var metaproofSteps = metaproofContext.getMetaproofSteps();
                    metastatementNatches = (0, _array.someSubArray)(metaproofSteps, premisesLength, function(metaproofSteps) {
                        var premisesMatchConclusion = false;
                        var metaSubstitutions = [], premisesMatches = matchPremises(_this.premises, metaproofSteps, metaSubstitutions);
                        if (premisesMatches) {
                            var conclusionMatches = matchConclusion(_this.conclusion, metastatementNode, metaSubstitutions);
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
function matchPremise(premise, metaproofSteps, metaSubstitutions) {
    var metaproofStep = (0, _array.prune)(metaproofSteps, function(metaproofStep) {
        var metaSubproofNode = metaproofStep.getMetaSubproofNode(), metastatementNode = metaproofStep.getMetastatementNode();
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
    var premiseMatches = metaproofStep !== null;
    return premiseMatches;
}
function matchPremises(premise, metaproofSteps, metaSubstitutions) {
    var premisesMatches = premise.every(function(premise) {
        var premiseMatches = matchPremise(premise, metaproofSteps, metaSubstitutions);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4vbGFiZWxcIjtcbmltcG9ydCBQcmVtaXNlIGZyb20gXCIuL3ByZW1pc2VcIjtcbmltcG9ydCBDb25jbHVzaW9uIGZyb20gXCIuL2NvbmNsdXNpb25cIjtcblxuaW1wb3J0IHsgcHJ1bmUgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IFJVTEVfS0lORCB9IGZyb20gXCIuL2tpbmRzXCI7XG5pbXBvcnQgeyBzb21lU3ViQXJyYXkgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24pIHtcbiAgICB0aGlzLmxhYmVscyA9IGxhYmVscztcbiAgICB0aGlzLnByZW1pc2VzID0gcHJlbWlzZXM7XG4gICAgdGhpcy5jb25jbHVzaW9uID0gY29uY2x1c2lvbjtcbiAgfVxuXG4gIGdldExhYmVscygpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbHM7XG4gIH1cblxuICBnZXRQcmVtaXNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5wcmVtaXNlcztcbiAgfVxuXG4gIGdldENvbmNsdXNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uY2x1c2lvbjtcbiAgfVxuXG4gIG1hdGNoTGFiZWxOYW1lKGxhYmVsTmFtZSkge1xuICAgIGNvbnN0IG1hdGNoZXNMYWJlbE5hbWUgPSB0aGlzLmxhYmVscy5zb21lKChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbmFtZSA9IGxhYmVsTmFtZSwgLy8vXG4gICAgICAgICAgICBsYWJlbE1hdGNoZXNOYW1lID0gbGFiZWwubWF0Y2hOYW1lKG5hbWUpO1xuXG4gICAgICBpZiAobGFiZWxNYXRjaGVzTmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtYXRjaGVzTGFiZWxOYW1lO1xuICB9XG5cbiAgbWF0Y2hNZXRhc3RhdGVtZW50KG1ldGFzdGF0ZW1lbnROb2RlLCBtZXRhcHJvb2ZDb250ZXh0KSB7XG4gICAgbGV0IG1ldGFzdGF0ZW1lbnROYXRjaGVzO1xuXG4gICAgY29uc3QgcHJlbWlzZXNMZW5ndGggPSB0aGlzLnByZW1pc2VzLmxlbmd0aDtcblxuICAgIGlmIChwcmVtaXNlc0xlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3QgbWV0YVN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICAgIGNvbmNsdXNpb25NYXRjaGVzID0gbWF0Y2hDb25jbHVzaW9uKHRoaXMuY29uY2x1c2lvbiwgbWV0YXN0YXRlbWVudE5vZGUsIG1ldGFTdWJzdGl0dXRpb25zKTtcblxuICAgICAgbWV0YXN0YXRlbWVudE5hdGNoZXMgPSBjb25jbHVzaW9uTWF0Y2hlczsgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGFwcm9vZlN0ZXBzID0gbWV0YXByb29mQ29udGV4dC5nZXRNZXRhcHJvb2ZTdGVwcygpO1xuXG4gICAgICBtZXRhc3RhdGVtZW50TmF0Y2hlcyA9IHNvbWVTdWJBcnJheShtZXRhcHJvb2ZTdGVwcywgcHJlbWlzZXNMZW5ndGgsIChtZXRhcHJvb2ZTdGVwcykgPT4ge1xuICAgICAgICBsZXQgcHJlbWlzZXNNYXRjaENvbmNsdXNpb24gPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBtZXRhU3Vic3RpdHV0aW9ucyA9IFtdLFxuICAgICAgICAgICAgICBwcmVtaXNlc01hdGNoZXMgPSBtYXRjaFByZW1pc2VzKHRoaXMucHJlbWlzZXMsIG1ldGFwcm9vZlN0ZXBzLCBtZXRhU3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgICAgaWYgKHByZW1pc2VzTWF0Y2hlcykge1xuICAgICAgICAgIGNvbnN0IGNvbmNsdXNpb25NYXRjaGVzID0gbWF0Y2hDb25jbHVzaW9uKHRoaXMuY29uY2x1c2lvbiwgbWV0YXN0YXRlbWVudE5vZGUsIG1ldGFTdWJzdGl0dXRpb25zKTtcblxuICAgICAgICAgIHByZW1pc2VzTWF0Y2hDb25jbHVzaW9uID0gY29uY2x1c2lvbk1hdGNoZXM7ICAvLy9cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmVtaXNlc01hdGNoQ29uY2x1c2lvbikge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXN0YXRlbWVudE5hdGNoZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IHRoaXMubGFiZWxzLm1hcCgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsSlNPTiA9IGxhYmVsLnRvSlNPTigpO1xuXG4gICAgICAgICAgICByZXR1cm4gbGFiZWxKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHByZW1pc2VzSlNPTiA9IHRoaXMucHJlbWlzZXMubWFwKChwcmVtaXNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcmVtaXNlSlNPTiA9IHByZW1pc2UudG9KU09OKCk7XG5cbiAgICAgICAgICAgIHJldHVybiBwcmVtaXNlSlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjb25jbHVzaW9uSlNPTiA9IHRoaXMuY29uY2x1c2lvbi50b0pTT04oKSxcbiAgICAgICAgICBraW5kID0gUlVMRV9LSU5ELFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsc0pTT04sICAvLy9cbiAgICAgICAgICBwcmVtaXNlcyA9IHByZW1pc2VzSlNPTiwgIC8vL1xuICAgICAgICAgIGNvbmNsdXNpb24gPSBjb25jbHVzaW9uSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBraW5kLFxuICAgICAgICAgICAgbGFiZWxzLFxuICAgICAgICAgICAgcHJlbWlzZXMsXG4gICAgICAgICAgICBjb25jbHVzaW9uXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIHJlbGVhc2VDb250ZXh0KSB7XG4gICAgbGV0IHJ1bGU7XG5cbiAgICBsZXQgeyBsYWJlbHMgfSA9IGpzb247XG5cbiAgICBjb25zdCBsYWJlbHNKU09OID0gbGFiZWxzOyAgLy8vXG5cbiAgICBsYWJlbHMgPSBsYWJlbHNKU09OLm1hcCgobGFiZWxKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gbGFiZWxKU09OLCAvLy9cbiAgICAgICAgICAgIGxhYmVsID0gTGFiZWwuZnJvbUpTT04oanNvbiwgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gbGFiZWw7XG4gICAgfSk7XG5cbiAgICBsZXQgeyBwcmVtaXNlcyB9ID0ganNvbjtcblxuICAgIGNvbnN0IHByZW1pc2VzSlNPTiA9IHByZW1pc2VzOyAgLy8vXG5cbiAgICBwcmVtaXNlcyA9IHByZW1pc2VzSlNPTi5tYXAoKHByZW1pc2VKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gcHJlbWlzZUpTT04sIC8vL1xuICAgICAgICAgICAgcHJlbWlzZSA9IFByZW1pc2UuZnJvbUpTT04oanNvbiwgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gcHJlbWlzZTtcbiAgICB9KTtcblxuICAgIGxldCB7IGNvbmNsdXNpb24gfSA9IGpzb247XG5cbiAgICBjb25zdCBjb25jbHVzaW9uSlNPTiA9IGNvbmNsdXNpb247ICAvLy9cblxuICAgIGpzb24gPSBjb25jbHVzaW9uSlNPTjsgIC8vL1xuXG4gICAgY29uY2x1c2lvbiA9IENvbmNsdXNpb24uZnJvbUpTT04oanNvbiwgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgcnVsZSA9IG5ldyBSdWxlKGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24pO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUxhYmVsc1ByZW1pc2VzQW5kQ29uY2x1c2lvbihsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uKSB7XG4gICAgY29uc3QgcnVsZSA9IG5ldyBSdWxlKGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24pO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWF0Y2hQcmVtaXNlKHByZW1pc2UsIG1ldGFwcm9vZlN0ZXBzLCBtZXRhU3Vic3RpdHV0aW9ucykge1xuICBjb25zdCBtZXRhcHJvb2ZTdGVwID0gcHJ1bmUobWV0YXByb29mU3RlcHMsIChtZXRhcHJvb2ZTdGVwKSA9PiB7XG4gICAgY29uc3QgbWV0YVN1YnByb29mTm9kZSA9IG1ldGFwcm9vZlN0ZXAuZ2V0TWV0YVN1YnByb29mTm9kZSgpLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlID0gbWV0YXByb29mU3RlcC5nZXRNZXRhc3RhdGVtZW50Tm9kZSgpXG5cbiAgICBpZiAobWV0YVN1YnByb29mTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YVN1YlByb29mTWF0Y2hlcyA9IHByZW1pc2UubWF0Y2hNZXRhU3VicHJvb2ZOb2RlKG1ldGFTdWJwcm9vZk5vZGUsIG1ldGFTdWJzdGl0dXRpb25zKTtcblxuICAgICAgaWYgKCFtZXRhU3ViUHJvb2ZNYXRjaGVzKSB7ICAvLy9cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGFzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhc3RhdGVtZW50TWF0Y2hlcyA9IHByZW1pc2UubWF0Y2hNZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZSwgbWV0YVN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICBpZiAoIW1ldGFzdGF0ZW1lbnRNYXRjaGVzKSB7ICAvLy9cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9KSB8fCBudWxsO1xuXG4gIGNvbnN0IHByZW1pc2VNYXRjaGVzID0gKG1ldGFwcm9vZlN0ZXAgIT09IG51bGwpO1xuXG4gIHJldHVybiBwcmVtaXNlTWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gbWF0Y2hQcmVtaXNlcyhwcmVtaXNlLCBtZXRhcHJvb2ZTdGVwcywgbWV0YVN1YnN0aXR1dGlvbnMpIHtcbiAgY29uc3QgcHJlbWlzZXNNYXRjaGVzID0gcHJlbWlzZS5ldmVyeSgocHJlbWlzZSkgPT4ge1xuICAgIGNvbnN0IHByZW1pc2VNYXRjaGVzID0gbWF0Y2hQcmVtaXNlKHByZW1pc2UsIG1ldGFwcm9vZlN0ZXBzLCBtZXRhU3Vic3RpdHV0aW9ucyk7XG5cbiAgICBpZiAocHJlbWlzZU1hdGNoZXMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHByZW1pc2VzTWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gbWF0Y2hDb25jbHVzaW9uKGNvbmNsdXNpb24sIG1ldGFzdGF0ZW1lbnROb2RlLCBtZXRhU3Vic3RpdHV0aW9ucykge1xuICBjb25zdCBub25UZXJtaW5hbE5vZGVNYXRjaGVzID0gY29uY2x1c2lvbi5tYXRjaE1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlLCBtZXRhU3Vic3RpdHV0aW9ucyksXG4gICAgICAgIGNvbmNsdXNpb25NYXRjaGVzID0gbm9uVGVybWluYWxOb2RlTWF0Y2hlczsgLy8vXG5cbiAgcmV0dXJuIGNvbmNsdXNpb25NYXRjaGVzO1xufVxuIl0sIm5hbWVzIjpbIlJ1bGUiLCJsYWJlbHMiLCJwcmVtaXNlcyIsImNvbmNsdXNpb24iLCJnZXRMYWJlbHMiLCJnZXRQcmVtaXNlcyIsImdldENvbmNsdXNpb24iLCJtYXRjaExhYmVsTmFtZSIsImxhYmVsTmFtZSIsIm1hdGNoZXNMYWJlbE5hbWUiLCJzb21lIiwibGFiZWwiLCJuYW1lIiwibGFiZWxNYXRjaGVzTmFtZSIsIm1hdGNoTmFtZSIsIm1hdGNoTWV0YXN0YXRlbWVudCIsIm1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YXByb29mQ29udGV4dCIsIm1ldGFzdGF0ZW1lbnROYXRjaGVzIiwicHJlbWlzZXNMZW5ndGgiLCJsZW5ndGgiLCJtZXRhU3Vic3RpdHV0aW9ucyIsImNvbmNsdXNpb25NYXRjaGVzIiwibWF0Y2hDb25jbHVzaW9uIiwibWV0YXByb29mU3RlcHMiLCJnZXRNZXRhcHJvb2ZTdGVwcyIsInNvbWVTdWJBcnJheSIsInByZW1pc2VzTWF0Y2hDb25jbHVzaW9uIiwicHJlbWlzZXNNYXRjaGVzIiwibWF0Y2hQcmVtaXNlcyIsInRvSlNPTiIsImxhYmVsc0pTT04iLCJtYXAiLCJsYWJlbEpTT04iLCJwcmVtaXNlc0pTT04iLCJwcmVtaXNlIiwicHJlbWlzZUpTT04iLCJjb25jbHVzaW9uSlNPTiIsImtpbmQiLCJSVUxFX0tJTkQiLCJqc29uIiwiZnJvbUpTT04iLCJyZWxlYXNlQ29udGV4dCIsInJ1bGUiLCJMYWJlbCIsIlByZW1pc2UiLCJDb25jbHVzaW9uIiwiZnJvbUxhYmVsc1ByZW1pc2VzQW5kQ29uY2x1c2lvbiIsIm1hdGNoUHJlbWlzZSIsIm1ldGFwcm9vZlN0ZXAiLCJwcnVuZSIsIm1ldGFTdWJwcm9vZk5vZGUiLCJnZXRNZXRhU3VicHJvb2ZOb2RlIiwiZ2V0TWV0YXN0YXRlbWVudE5vZGUiLCJtZXRhU3ViUHJvb2ZNYXRjaGVzIiwibWF0Y2hNZXRhU3VicHJvb2ZOb2RlIiwibWV0YXN0YXRlbWVudE1hdGNoZXMiLCJtYXRjaE1ldGFzdGF0ZW1lbnROb2RlIiwicHJlbWlzZU1hdGNoZXMiLCJldmVyeSIsIm5vblRlcm1pbmFsTm9kZU1hdGNoZXMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBVXFCQTs7OzBEQVJIOzREQUNFOytEQUNHO3FCQUVEO3FCQUNJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR1gsSUFBQSxBQUFNQSxxQkF5SWxCLEFBeklZO2FBQU1BLEtBQ1BDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxVQUFVOzhCQURyQkg7UUFFakIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElB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