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
            key: "asJSON",
            value: function asJSON() {
                var premisesJSON = this.premises.map(function(premise) {
                    var premiseJSON = premise.asJSON();
                    return premiseJSON;
                }), conclusionJSON = this.conclusion.asJSON(), kind = _kinds.RULE_KIND, premises = premisesJSON, conclusion = conclusionJSON, json = this.labels.map(function(label) {
                    var labelString = label.asString();
                    label = labelString; ///
                    return {
                        kind: kind,
                        label: label,
                        premises: premises,
                        conclusion: conclusion
                    };
                });
                return json;
            }
        }
    ], [
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwcnVuZSB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgUlVMRV9LSU5EIH0gZnJvbSBcIi4va2luZHNcIjtcbmltcG9ydCB7IHNvbWVTdWJBcnJheSB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlIHtcbiAgY29uc3RydWN0b3IobGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbikge1xuICAgIHRoaXMubGFiZWxzID0gbGFiZWxzO1xuICAgIHRoaXMucHJlbWlzZXMgPSBwcmVtaXNlcztcbiAgICB0aGlzLmNvbmNsdXNpb24gPSBjb25jbHVzaW9uO1xuICB9XG5cbiAgZ2V0TGFiZWxzKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVscztcbiAgfVxuXG4gIGdldFByZW1pc2VzKCkge1xuICAgIHJldHVybiB0aGlzLnByZW1pc2VzO1xuICB9XG5cbiAgZ2V0Q29uY2x1c2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5jb25jbHVzaW9uO1xuICB9XG5cbiAgbWF0Y2hMYWJlbE5hbWUobGFiZWxOYW1lKSB7XG4gICAgY29uc3QgbWF0Y2hlc0xhYmVsTmFtZSA9IHRoaXMubGFiZWxzLnNvbWUoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBuYW1lID0gbGFiZWxOYW1lLCAvLy9cbiAgICAgICAgICAgIGxhYmVsTWF0Y2hlc05hbWUgPSBsYWJlbC5tYXRjaE5hbWUobmFtZSk7XG5cbiAgICAgIGlmIChsYWJlbE1hdGNoZXNOYW1lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNMYWJlbE5hbWU7XG4gIH1cblxuICBtYXRjaE1ldGFzdGF0ZW1lbnQobWV0YXN0YXRlbWVudE5vZGUsIG1ldGFwcm9vZkNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXN0YXRlbWVudE5hdGNoZXM7XG5cbiAgICBjb25zdCBwcmVtaXNlc0xlbmd0aCA9IHRoaXMucHJlbWlzZXMubGVuZ3RoO1xuXG4gICAgaWYgKHByZW1pc2VzTGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zdCBtZXRhU3Vic3RpdHV0aW9ucyA9IFtdLFxuICAgICAgICAgICAgY29uY2x1c2lvbk1hdGNoZXMgPSBtYXRjaENvbmNsdXNpb24odGhpcy5jb25jbHVzaW9uLCBtZXRhc3RhdGVtZW50Tm9kZSwgbWV0YVN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICBtZXRhc3RhdGVtZW50TmF0Y2hlcyA9IGNvbmNsdXNpb25NYXRjaGVzOyAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWV0YUFzc2VydGlvbnMgPSBtZXRhcHJvb2ZDb250ZXh0LmdldE1ldGFBc3NlcnRpb25zKCk7XG5cbiAgICAgIG1ldGFzdGF0ZW1lbnROYXRjaGVzID0gc29tZVN1YkFycmF5KG1ldGFBc3NlcnRpb25zLCBwcmVtaXNlc0xlbmd0aCwgKG1ldGFBc3NlcnRpb25zKSA9PiB7XG4gICAgICAgIGNvbnN0IHByZW1pc2VzTWF0Y2hDb25jbHVzaW9uID0gbWF0Y2hQcmVtaXNlc0FuZENvbmNsdXNpb24odGhpcy5wcmVtaXNlcywgdGhpcy5jb25jbHVzaW9uLCBtZXRhQXNzZXJ0aW9ucywgbWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgICAgIGlmIChwcmVtaXNlc01hdGNoQ29uY2x1c2lvbikge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXN0YXRlbWVudE5hdGNoZXM7XG4gIH1cblxuICBhc0pTT04oKSB7XG4gICAgY29uc3QgcHJlbWlzZXNKU09OID0gdGhpcy5wcmVtaXNlcy5tYXAoKHByZW1pc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByZW1pc2VKU09OID0gcHJlbWlzZS5hc0pTT04oKTtcblxuICAgICAgICAgICAgcmV0dXJuIHByZW1pc2VKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNvbmNsdXNpb25KU09OID0gdGhpcy5jb25jbHVzaW9uLmFzSlNPTigpLFxuICAgICAgICAgIGtpbmQgPSBSVUxFX0tJTkQsXG4gICAgICAgICAgcHJlbWlzZXMgPSBwcmVtaXNlc0pTT04sICAvLy9cbiAgICAgICAgICBjb25jbHVzaW9uID0gY29uY2x1c2lvbkpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0gdGhpcy5sYWJlbHMubWFwKChsYWJlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGFiZWxTdHJpbmcgPSBsYWJlbC5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICBsYWJlbCA9IGxhYmVsU3RyaW5nOyAgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiAoe1xuICAgICAgICAgICAgICBraW5kLFxuICAgICAgICAgICAgICBsYWJlbCxcbiAgICAgICAgICAgICAgcHJlbWlzZXMsXG4gICAgICAgICAgICAgIGNvbmNsdXNpb25cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUxhYmVsc1ByZW1pc2VzQW5kQ29uY2x1c2lvbihsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uKSB7XG4gICAgY29uc3QgcnVsZSA9IG5ldyBSdWxlKGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24pO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWF0Y2hQcmVtaXNlKHByZW1pc2UsIG1ldGFBc3NlcnRpb25zLCBtZXRhU3Vic3RpdHV0aW9ucykge1xuICBjb25zdCBtZXRhQXNzZXJ0aW9uID0gcHJ1bmUobWV0YUFzc2VydGlvbnMsIChtZXRhQXNzZXJ0aW9uKSA9PiB7XG4gICAgY29uc3QgbWV0YVN1YnByb29mTm9kZSA9IG1ldGFBc3NlcnRpb24uZ2V0TWV0YVN1YnByb29mTm9kZSgpLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlID0gbWV0YUFzc2VydGlvbi5nZXRNZXRhc3RhdGVtZW50Tm9kZSgpXG5cbiAgICBpZiAobWV0YVN1YnByb29mTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YVN1YlByb29mTWF0Y2hlcyA9IHByZW1pc2UubWF0Y2hNZXRhU3VicHJvb2ZOb2RlKG1ldGFTdWJwcm9vZk5vZGUsIG1ldGFTdWJzdGl0dXRpb25zKTtcblxuICAgICAgaWYgKCFtZXRhU3ViUHJvb2ZNYXRjaGVzKSB7ICAvLy9cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGFzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhc3RhdGVtZW50TWF0Y2hlcyA9IHByZW1pc2UubWF0Y2hNZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZSwgbWV0YVN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICBpZiAoIW1ldGFzdGF0ZW1lbnRNYXRjaGVzKSB7ICAvLy9cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gIH0pIHx8IG51bGw7XG5cbiAgY29uc3QgcHJlbWlzZU1hdGNoZXMgPSAobWV0YUFzc2VydGlvbiAhPT0gbnVsbCk7XG5cbiAgcmV0dXJuIHByZW1pc2VNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtYXRjaFByZW1pc2VzKHByZW1pc2UsIG1ldGFBc3NlcnRpb25zLCBtZXRhU3Vic3RpdHV0aW9ucykge1xuICBjb25zdCBwcmVtaXNlc01hdGNoZXMgPSBwcmVtaXNlLmV2ZXJ5KChwcmVtaXNlKSA9PiB7XG4gICAgY29uc3QgcHJlbWlzZU1hdGNoZXMgPSBtYXRjaFByZW1pc2UocHJlbWlzZSwgbWV0YUFzc2VydGlvbnMsIG1ldGFTdWJzdGl0dXRpb25zKTtcblxuICAgIGlmIChwcmVtaXNlTWF0Y2hlcykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcHJlbWlzZXNNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtYXRjaENvbmNsdXNpb24oY29uY2x1c2lvbiwgbWV0YXN0YXRlbWVudE5vZGUsIG1ldGFTdWJzdGl0dXRpb25zKSB7XG4gIGNvbnN0IG5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBjb25jbHVzaW9uLm1hdGNoTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUsIG1ldGFTdWJzdGl0dXRpb25zKSxcbiAgICAgICAgY29uY2x1c2lvbk1hdGNoZXMgPSBub25UZXJtaW5hbE5vZGVNYXRjaGVzOyAvLy9cblxuICByZXR1cm4gY29uY2x1c2lvbk1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1hdGNoUHJlbWlzZXNBbmRDb25jbHVzaW9uKHByZW1pc2VzLCBjb25jbHVzaW9uLCBtZXRhQXNzZXJ0aW9ucywgbWV0YXN0YXRlbWVudE5vZGUpIHtcbiAgbGV0IHByZW1pc2VzTWF0Y2hDb25jbHVzaW9uID0gZmFsc2U7XG5cbiAgY29uc3QgbWV0YVN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgcHJlbWlzZXNNYXRjaGVzID0gbWF0Y2hQcmVtaXNlcyhwcmVtaXNlcywgbWV0YUFzc2VydGlvbnMsIG1ldGFTdWJzdGl0dXRpb25zKTtcblxuICBpZiAocHJlbWlzZXNNYXRjaGVzKSB7XG4gICAgY29uc3QgY29uY2x1c2lvbk1hdGNoZXMgPSBtYXRjaENvbmNsdXNpb24oY29uY2x1c2lvbiwgbWV0YXN0YXRlbWVudE5vZGUsIG1ldGFTdWJzdGl0dXRpb25zKTtcblxuICAgIHByZW1pc2VzTWF0Y2hDb25jbHVzaW9uID0gY29uY2x1c2lvbk1hdGNoZXM7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBwcmVtaXNlc01hdGNoQ29uY2x1c2lvbjtcbn1cbiJdLCJuYW1lcyI6WyJSdWxlIiwibGFiZWxzIiwicHJlbWlzZXMiLCJjb25jbHVzaW9uIiwiZ2V0TGFiZWxzIiwiZ2V0UHJlbWlzZXMiLCJnZXRDb25jbHVzaW9uIiwibWF0Y2hMYWJlbE5hbWUiLCJsYWJlbE5hbWUiLCJtYXRjaGVzTGFiZWxOYW1lIiwic29tZSIsImxhYmVsIiwibmFtZSIsImxhYmVsTWF0Y2hlc05hbWUiLCJtYXRjaE5hbWUiLCJtYXRjaE1ldGFzdGF0ZW1lbnQiLCJtZXRhc3RhdGVtZW50Tm9kZSIsIm1ldGFwcm9vZkNvbnRleHQiLCJtZXRhc3RhdGVtZW50TmF0Y2hlcyIsInByZW1pc2VzTGVuZ3RoIiwibGVuZ3RoIiwibWV0YVN1YnN0aXR1dGlvbnMiLCJjb25jbHVzaW9uTWF0Y2hlcyIsIm1hdGNoQ29uY2x1c2lvbiIsIm1ldGFBc3NlcnRpb25zIiwiZ2V0TWV0YUFzc2VydGlvbnMiLCJzb21lU3ViQXJyYXkiLCJwcmVtaXNlc01hdGNoQ29uY2x1c2lvbiIsIm1hdGNoUHJlbWlzZXNBbmRDb25jbHVzaW9uIiwiYXNKU09OIiwicHJlbWlzZXNKU09OIiwibWFwIiwicHJlbWlzZSIsInByZW1pc2VKU09OIiwiY29uY2x1c2lvbkpTT04iLCJraW5kIiwiUlVMRV9LSU5EIiwianNvbiIsImxhYmVsU3RyaW5nIiwiYXNTdHJpbmciLCJmcm9tTGFiZWxzUHJlbWlzZXNBbmRDb25jbHVzaW9uIiwicnVsZSIsIm1hdGNoUHJlbWlzZSIsIm1ldGFBc3NlcnRpb24iLCJwcnVuZSIsIm1ldGFTdWJwcm9vZk5vZGUiLCJnZXRNZXRhU3VicHJvb2ZOb2RlIiwiZ2V0TWV0YXN0YXRlbWVudE5vZGUiLCJtZXRhU3ViUHJvb2ZNYXRjaGVzIiwibWF0Y2hNZXRhU3VicHJvb2ZOb2RlIiwibWV0YXN0YXRlbWVudE1hdGNoZXMiLCJtYXRjaE1ldGFzdGF0ZW1lbnROb2RlIiwicHJlbWlzZU1hdGNoZXMiLCJtYXRjaFByZW1pc2VzIiwicHJlbWlzZXNNYXRjaGVzIiwiZXZlcnkiLCJub25UZXJtaW5hbE5vZGVNYXRjaGVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OztxQkFKQztxQkFDSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHWCxJQUFBLEFBQU1BLHFCQTBG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