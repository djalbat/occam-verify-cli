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
var _string = require("./utilities/string");
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
            key: "asString",
            value: function asString() {
                var string = (0, _string.labelsAsString)(this.labels);
                return string;
            }
        },
        {
            key: "asJSON",
            value: function asJSON(tokens) {}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwcnVuZSB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgc29tZVN1YkFycmF5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBsYWJlbHNBc1N0cmluZyB9IGZyb20gXCIuL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24pIHtcbiAgICB0aGlzLmxhYmVscyA9IGxhYmVscztcbiAgICB0aGlzLnByZW1pc2VzID0gcHJlbWlzZXM7XG4gICAgdGhpcy5jb25jbHVzaW9uID0gY29uY2x1c2lvbjtcbiAgfVxuXG4gIGdldExhYmVscygpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbHM7XG4gIH1cblxuICBnZXRQcmVtaXNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5wcmVtaXNlcztcbiAgfVxuXG4gIGdldENvbmNsdXNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uY2x1c2lvbjtcbiAgfVxuXG4gIG1hdGNoTGFiZWxOYW1lKGxhYmVsTmFtZSkge1xuICAgIGNvbnN0IG1hdGNoZXNMYWJlbE5hbWUgPSB0aGlzLmxhYmVscy5zb21lKChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbmFtZSA9IGxhYmVsTmFtZSwgLy8vXG4gICAgICAgICAgICBsYWJlbE1hdGNoZXNOYW1lID0gbGFiZWwubWF0Y2hOYW1lKG5hbWUpO1xuXG4gICAgICBpZiAobGFiZWxNYXRjaGVzTmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtYXRjaGVzTGFiZWxOYW1lO1xuICB9XG5cbiAgbWF0Y2hNZXRhc3RhdGVtZW50KG1ldGFzdGF0ZW1lbnROb2RlLCBtZXRhcHJvb2ZDb250ZXh0KSB7XG4gICAgbGV0IG1ldGFzdGF0ZW1lbnROYXRjaGVzO1xuXG4gICAgY29uc3QgcHJlbWlzZXNMZW5ndGggPSB0aGlzLnByZW1pc2VzLmxlbmd0aDtcblxuICAgIGlmIChwcmVtaXNlc0xlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3QgbWV0YVN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICAgIGNvbmNsdXNpb25NYXRjaGVzID0gbWF0Y2hDb25jbHVzaW9uKHRoaXMuY29uY2x1c2lvbiwgbWV0YXN0YXRlbWVudE5vZGUsIG1ldGFTdWJzdGl0dXRpb25zKTtcblxuICAgICAgbWV0YXN0YXRlbWVudE5hdGNoZXMgPSBjb25jbHVzaW9uTWF0Y2hlczsgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGFBc3NlcnRpb25zID0gbWV0YXByb29mQ29udGV4dC5nZXRNZXRhQXNzZXJ0aW9ucygpO1xuXG4gICAgICBtZXRhc3RhdGVtZW50TmF0Y2hlcyA9IHNvbWVTdWJBcnJheShtZXRhQXNzZXJ0aW9ucywgcHJlbWlzZXNMZW5ndGgsIChtZXRhQXNzZXJ0aW9ucykgPT4ge1xuICAgICAgICBjb25zdCBwcmVtaXNlc01hdGNoQ29uY2x1c2lvbiA9IG1hdGNoUHJlbWlzZXNBbmRDb25jbHVzaW9uKHRoaXMucHJlbWlzZXMsIHRoaXMuY29uY2x1c2lvbiwgbWV0YUFzc2VydGlvbnMsIG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgICBpZiAocHJlbWlzZXNNYXRjaENvbmNsdXNpb24pIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFzdGF0ZW1lbnROYXRjaGVzO1xuICB9XG5cbiAgYXNTdHJpbmcoKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gbGFiZWxzQXNTdHJpbmcodGhpcy5sYWJlbHMpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGFzSlNPTih0b2tlbnMpIHtcblxuICB9XG5cbiAgc3RhdGljIGZyb21MYWJlbHNQcmVtaXNlc0FuZENvbmNsdXNpb24obGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbikge1xuICAgIGNvbnN0IHJ1bGUgPSBuZXcgUnVsZShsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hdGNoUHJlbWlzZShwcmVtaXNlLCBtZXRhQXNzZXJ0aW9ucywgbWV0YVN1YnN0aXR1dGlvbnMpIHtcbiAgY29uc3QgbWV0YUFzc2VydGlvbiA9IHBydW5lKG1ldGFBc3NlcnRpb25zLCAobWV0YUFzc2VydGlvbikgPT4ge1xuICAgIGNvbnN0IG1ldGFTdWJwcm9vZk5vZGUgPSBtZXRhQXNzZXJ0aW9uLmdldE1ldGFTdWJwcm9vZk5vZGUoKSxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFBc3NlcnRpb24uZ2V0TWV0YXN0YXRlbWVudE5vZGUoKVxuXG4gICAgaWYgKG1ldGFTdWJwcm9vZk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGFTdWJQcm9vZk1hdGNoZXMgPSBwcmVtaXNlLm1hdGNoTWV0YVN1YnByb29mTm9kZShtZXRhU3VicHJvb2ZOb2RlLCBtZXRhU3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgIGlmICghbWV0YVN1YlByb29mTWF0Y2hlcykgeyAgLy8vXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRhc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YXN0YXRlbWVudE1hdGNoZXMgPSBwcmVtaXNlLm1hdGNoTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUsIG1ldGFTdWJzdGl0dXRpb25zKTtcblxuICAgICAgaWYgKCFtZXRhc3RhdGVtZW50TWF0Y2hlcykgeyAgLy8vXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICB9KSB8fCBudWxsO1xuXG4gIGNvbnN0IHByZW1pc2VNYXRjaGVzID0gKG1ldGFBc3NlcnRpb24gIT09IG51bGwpO1xuXG4gIHJldHVybiBwcmVtaXNlTWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gbWF0Y2hQcmVtaXNlcyhwcmVtaXNlLCBtZXRhQXNzZXJ0aW9ucywgbWV0YVN1YnN0aXR1dGlvbnMpIHtcbiAgY29uc3QgcHJlbWlzZXNNYXRjaGVzID0gcHJlbWlzZS5ldmVyeSgocHJlbWlzZSkgPT4ge1xuICAgIGNvbnN0IHByZW1pc2VNYXRjaGVzID0gbWF0Y2hQcmVtaXNlKHByZW1pc2UsIG1ldGFBc3NlcnRpb25zLCBtZXRhU3Vic3RpdHV0aW9ucyk7XG5cbiAgICBpZiAocHJlbWlzZU1hdGNoZXMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHByZW1pc2VzTWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gbWF0Y2hDb25jbHVzaW9uKGNvbmNsdXNpb24sIG1ldGFzdGF0ZW1lbnROb2RlLCBtZXRhU3Vic3RpdHV0aW9ucykge1xuICBjb25zdCBub25UZXJtaW5hbE5vZGVNYXRjaGVzID0gY29uY2x1c2lvbi5tYXRjaE1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlLCBtZXRhU3Vic3RpdHV0aW9ucyksXG4gICAgICAgIGNvbmNsdXNpb25NYXRjaGVzID0gbm9uVGVybWluYWxOb2RlTWF0Y2hlczsgLy8vXG5cbiAgcmV0dXJuIGNvbmNsdXNpb25NYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtYXRjaFByZW1pc2VzQW5kQ29uY2x1c2lvbihwcmVtaXNlcywgY29uY2x1c2lvbiwgbWV0YUFzc2VydGlvbnMsIG1ldGFzdGF0ZW1lbnROb2RlKSB7XG4gIGxldCBwcmVtaXNlc01hdGNoQ29uY2x1c2lvbiA9IGZhbHNlO1xuXG4gIGNvbnN0IG1ldGFTdWJzdGl0dXRpb25zID0gW10sXG4gICAgICAgIHByZW1pc2VzTWF0Y2hlcyA9IG1hdGNoUHJlbWlzZXMocHJlbWlzZXMsIG1ldGFBc3NlcnRpb25zLCBtZXRhU3Vic3RpdHV0aW9ucyk7XG5cbiAgaWYgKHByZW1pc2VzTWF0Y2hlcykge1xuICAgIGNvbnN0IGNvbmNsdXNpb25NYXRjaGVzID0gbWF0Y2hDb25jbHVzaW9uKGNvbmNsdXNpb24sIG1ldGFzdGF0ZW1lbnROb2RlLCBtZXRhU3Vic3RpdHV0aW9ucyk7XG5cbiAgICBwcmVtaXNlc01hdGNoQ29uY2x1c2lvbiA9IGNvbmNsdXNpb25NYXRjaGVzOyAgLy8vXG4gIH1cblxuICByZXR1cm4gcHJlbWlzZXNNYXRjaENvbmNsdXNpb247XG59XG4iXSwibmFtZXMiOlsiUnVsZSIsImxhYmVscyIsInByZW1pc2VzIiwiY29uY2x1c2lvbiIsImdldExhYmVscyIsImdldFByZW1pc2VzIiwiZ2V0Q29uY2x1c2lvbiIsIm1hdGNoTGFiZWxOYW1lIiwibGFiZWxOYW1lIiwibWF0Y2hlc0xhYmVsTmFtZSIsInNvbWUiLCJsYWJlbCIsIm5hbWUiLCJsYWJlbE1hdGNoZXNOYW1lIiwibWF0Y2hOYW1lIiwibWF0Y2hNZXRhc3RhdGVtZW50IiwibWV0YXN0YXRlbWVudE5vZGUiLCJtZXRhcHJvb2ZDb250ZXh0IiwibWV0YXN0YXRlbWVudE5hdGNoZXMiLCJwcmVtaXNlc0xlbmd0aCIsImxlbmd0aCIsIm1ldGFTdWJzdGl0dXRpb25zIiwiY29uY2x1c2lvbk1hdGNoZXMiLCJtYXRjaENvbmNsdXNpb24iLCJtZXRhQXNzZXJ0aW9ucyIsImdldE1ldGFBc3NlcnRpb25zIiwic29tZVN1YkFycmF5IiwicHJlbWlzZXNNYXRjaENvbmNsdXNpb24iLCJtYXRjaFByZW1pc2VzQW5kQ29uY2x1c2lvbiIsImFzU3RyaW5nIiwic3RyaW5nIiwibGFiZWxzQXNTdHJpbmciLCJhc0pTT04iLCJ0b2tlbnMiLCJmcm9tTGFiZWxzUHJlbWlzZXNBbmRDb25jbHVzaW9uIiwicnVsZSIsIm1hdGNoUHJlbWlzZSIsInByZW1pc2UiLCJtZXRhQXNzZXJ0aW9uIiwicHJ1bmUiLCJtZXRhU3VicHJvb2ZOb2RlIiwiZ2V0TWV0YVN1YnByb29mTm9kZSIsImdldE1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YVN1YlByb29mTWF0Y2hlcyIsIm1hdGNoTWV0YVN1YnByb29mTm9kZSIsIm1ldGFzdGF0ZW1lbnRNYXRjaGVzIiwibWF0Y2hNZXRhc3RhdGVtZW50Tm9kZSIsInByZW1pc2VNYXRjaGVzIiwibWF0Y2hQcmVtaXNlcyIsInByZW1pc2VzTWF0Y2hlcyIsImV2ZXJ5Iiwibm9uVGVybWluYWxOb2RlTWF0Y2hlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7cUJBSkM7c0JBRVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhCLElBQUEsQUFBTUEscUJBMEVsQixBQTFFWTthQUFNQSxLQUNQQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsVUFBVTs4QkFEckJIO1FBRWpCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7O2lCQUpESDs7WUFPbkJJLEtBQUFBO21CQUFBQSxTQUFBQSxZQUFZO2dCQUNWLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWM7Z0JBQ1osT0FBTyxJQUFJLENBQUNILFFBQVE7WUFDdEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCO2dCQUNkLE9BQU8sSUFBSSxDQUFDSCxVQUFVO1lBQ3hCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVDLFNBQVMsRUFBRTtnQkFDeEIsSUFBTUMsbUJBQW1CLElBQUksQ0FBQ1IsTUFBTSxDQUFDUyxJQUFJLENBQUMsU0FBQ0MsT0FBVTtvQkFDbkQsSUFBTUMsT0FBT0osV0FDUEssbUJBQW1CRixNQUFNRyxTQUFTLENBQUNGO29CQUV6QyxJQUFJQyxrQkFBa0I7d0JBQ3BCLE9BQU8sSUFBSTtvQkFDYixDQUFDO2dCQUNIO2dCQUVBLE9BQU9KO1lBQ1Q7OztZQUVB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