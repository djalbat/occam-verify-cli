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
            key: "matchMetastatement",
            value: function matchMetastatement(metastatementNode, context) {
                var _this = this;
                var metastatementNatches;
                var premisesLength = this.premises.length;
                if (premisesLength === 0) {
                    var metaSubstitutions = [], conclusionMatches = matchConclusion(this.conclusion, metastatementNode, metaSubstitutions);
                    metastatementNatches = conclusionMatches; ///
                } else {
                    var metaAssertions = context.getMetaAssertions();
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
        }
    ], [
        {
            key: "fromPremisesConclusionAndLabels",
            value: function fromPremisesConclusionAndLabels(premises, conclusion, labels) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwcnVuZSB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgc29tZVN1YkFycmF5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBsYWJlbHNBc1N0cmluZyB9IGZyb20gXCIuL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24pIHtcbiAgICB0aGlzLmxhYmVscyA9IGxhYmVscztcbiAgICB0aGlzLnByZW1pc2VzID0gcHJlbWlzZXM7XG4gICAgdGhpcy5jb25jbHVzaW9uID0gY29uY2x1c2lvbjtcbiAgfVxuXG4gIGdldExhYmVscygpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbHM7XG4gIH1cblxuICBnZXRQcmVtaXNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5wcmVtaXNlcztcbiAgfVxuXG4gIGdldENvbmNsdXNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uY2x1c2lvbjtcbiAgfVxuXG4gIG1hdGNoTWV0YXN0YXRlbWVudChtZXRhc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCBtZXRhc3RhdGVtZW50TmF0Y2hlcztcblxuICAgIGNvbnN0IHByZW1pc2VzTGVuZ3RoID0gdGhpcy5wcmVtaXNlcy5sZW5ndGg7XG5cbiAgICBpZiAocHJlbWlzZXNMZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IG1ldGFTdWJzdGl0dXRpb25zID0gW10sXG4gICAgICAgICAgICBjb25jbHVzaW9uTWF0Y2hlcyA9IG1hdGNoQ29uY2x1c2lvbih0aGlzLmNvbmNsdXNpb24sIG1ldGFzdGF0ZW1lbnROb2RlLCBtZXRhU3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgIG1ldGFzdGF0ZW1lbnROYXRjaGVzID0gY29uY2x1c2lvbk1hdGNoZXM7IC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXRhQXNzZXJ0aW9ucyA9IGNvbnRleHQuZ2V0TWV0YUFzc2VydGlvbnMoKTtcblxuICAgICAgbWV0YXN0YXRlbWVudE5hdGNoZXMgPSBzb21lU3ViQXJyYXkobWV0YUFzc2VydGlvbnMsIHByZW1pc2VzTGVuZ3RoLCAobWV0YUFzc2VydGlvbnMpID0+IHtcbiAgICAgICAgY29uc3QgcHJlbWlzZXNNYXRjaENvbmNsdXNpb24gPSBtYXRjaFByZW1pc2VzQW5kQ29uY2x1c2lvbih0aGlzLnByZW1pc2VzLCB0aGlzLmNvbmNsdXNpb24sIG1ldGFBc3NlcnRpb25zLCBtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgICAgaWYgKHByZW1pc2VzTWF0Y2hDb25jbHVzaW9uKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhc3RhdGVtZW50TmF0Y2hlcztcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IGxhYmVsc0FzU3RyaW5nKHRoaXMubGFiZWxzKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByZW1pc2VzQ29uY2x1c2lvbkFuZExhYmVscyhwcmVtaXNlcywgY29uY2x1c2lvbiwgbGFiZWxzKSB7XG4gICAgY29uc3QgcnVsZSA9IG5ldyBSdWxlKGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24pO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWF0Y2hQcmVtaXNlKHByZW1pc2UsIG1ldGFBc3NlcnRpb25zLCBtZXRhU3Vic3RpdHV0aW9ucykge1xuICBjb25zdCBtZXRhQXNzZXJ0aW9uID0gcHJ1bmUobWV0YUFzc2VydGlvbnMsIChtZXRhQXNzZXJ0aW9uKSA9PiB7XG4gICAgY29uc3QgbWV0YVN1YnByb29mTm9kZSA9IG1ldGFBc3NlcnRpb24uZ2V0TWV0YVN1YnByb29mTm9kZSgpLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlID0gbWV0YUFzc2VydGlvbi5nZXRNZXRhc3RhdGVtZW50Tm9kZSgpXG5cbiAgICBpZiAobWV0YVN1YnByb29mTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YVN1YlByb29mTWF0Y2hlcyA9IHByZW1pc2UubWF0Y2hNZXRhU3VicHJvb2ZOb2RlKG1ldGFTdWJwcm9vZk5vZGUsIG1ldGFTdWJzdGl0dXRpb25zKTtcblxuICAgICAgaWYgKCFtZXRhU3ViUHJvb2ZNYXRjaGVzKSB7ICAvLy9cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGFzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhc3RhdGVtZW50TWF0Y2hlcyA9IHByZW1pc2UubWF0Y2hNZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZSwgbWV0YVN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICBpZiAoIW1ldGFzdGF0ZW1lbnRNYXRjaGVzKSB7ICAvLy9cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gIH0pIHx8IG51bGw7XG5cbiAgY29uc3QgcHJlbWlzZU1hdGNoZXMgPSAobWV0YUFzc2VydGlvbiAhPT0gbnVsbCk7XG5cbiAgcmV0dXJuIHByZW1pc2VNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtYXRjaFByZW1pc2VzKHByZW1pc2UsIG1ldGFBc3NlcnRpb25zLCBtZXRhU3Vic3RpdHV0aW9ucykge1xuICBjb25zdCBwcmVtaXNlc01hdGNoZXMgPSBwcmVtaXNlLmV2ZXJ5KChwcmVtaXNlKSA9PiB7XG4gICAgY29uc3QgcHJlbWlzZU1hdGNoZXMgPSBtYXRjaFByZW1pc2UocHJlbWlzZSwgbWV0YUFzc2VydGlvbnMsIG1ldGFTdWJzdGl0dXRpb25zKTtcblxuICAgIGlmIChwcmVtaXNlTWF0Y2hlcykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcHJlbWlzZXNNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtYXRjaENvbmNsdXNpb24oY29uY2x1c2lvbiwgbWV0YXN0YXRlbWVudE5vZGUsIG1ldGFTdWJzdGl0dXRpb25zKSB7XG4gIGNvbnN0IG5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBjb25jbHVzaW9uLm1hdGNoTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUsIG1ldGFTdWJzdGl0dXRpb25zKSxcbiAgICAgICAgY29uY2x1c2lvbk1hdGNoZXMgPSBub25UZXJtaW5hbE5vZGVNYXRjaGVzOyAvLy9cblxuICByZXR1cm4gY29uY2x1c2lvbk1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1hdGNoUHJlbWlzZXNBbmRDb25jbHVzaW9uKHByZW1pc2VzLCBjb25jbHVzaW9uLCBtZXRhQXNzZXJ0aW9ucywgbWV0YXN0YXRlbWVudE5vZGUpIHtcbiAgbGV0IHByZW1pc2VzTWF0Y2hDb25jbHVzaW9uID0gZmFsc2U7XG5cbiAgY29uc3QgbWV0YVN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgcHJlbWlzZXNNYXRjaGVzID0gbWF0Y2hQcmVtaXNlcyhwcmVtaXNlcywgbWV0YUFzc2VydGlvbnMsIG1ldGFTdWJzdGl0dXRpb25zKTtcblxuICBpZiAocHJlbWlzZXNNYXRjaGVzKSB7XG4gICAgY29uc3QgY29uY2x1c2lvbk1hdGNoZXMgPSBtYXRjaENvbmNsdXNpb24oY29uY2x1c2lvbiwgbWV0YXN0YXRlbWVudE5vZGUsIG1ldGFTdWJzdGl0dXRpb25zKTtcblxuICAgIHByZW1pc2VzTWF0Y2hDb25jbHVzaW9uID0gY29uY2x1c2lvbk1hdGNoZXM7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBwcmVtaXNlc01hdGNoQ29uY2x1c2lvbjtcbn1cbiJdLCJuYW1lcyI6WyJSdWxlIiwibGFiZWxzIiwicHJlbWlzZXMiLCJjb25jbHVzaW9uIiwiZ2V0TGFiZWxzIiwiZ2V0UHJlbWlzZXMiLCJnZXRDb25jbHVzaW9uIiwibWF0Y2hNZXRhc3RhdGVtZW50IiwibWV0YXN0YXRlbWVudE5vZGUiLCJjb250ZXh0IiwibWV0YXN0YXRlbWVudE5hdGNoZXMiLCJwcmVtaXNlc0xlbmd0aCIsImxlbmd0aCIsIm1ldGFTdWJzdGl0dXRpb25zIiwiY29uY2x1c2lvbk1hdGNoZXMiLCJtYXRjaENvbmNsdXNpb24iLCJtZXRhQXNzZXJ0aW9ucyIsImdldE1ldGFBc3NlcnRpb25zIiwic29tZVN1YkFycmF5IiwicHJlbWlzZXNNYXRjaENvbmNsdXNpb24iLCJtYXRjaFByZW1pc2VzQW5kQ29uY2x1c2lvbiIsImFzU3RyaW5nIiwic3RyaW5nIiwibGFiZWxzQXNTdHJpbmciLCJmcm9tUHJlbWlzZXNDb25jbHVzaW9uQW5kTGFiZWxzIiwicnVsZSIsIm1hdGNoUHJlbWlzZSIsInByZW1pc2UiLCJtZXRhQXNzZXJ0aW9uIiwicHJ1bmUiLCJtZXRhU3VicHJvb2ZOb2RlIiwiZ2V0TWV0YVN1YnByb29mTm9kZSIsImdldE1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YVN1YlByb29mTWF0Y2hlcyIsIm1hdGNoTWV0YVN1YnByb29mTm9kZSIsIm1ldGFzdGF0ZW1lbnRNYXRjaGVzIiwibWF0Y2hNZXRhc3RhdGVtZW50Tm9kZSIsInByZW1pc2VNYXRjaGVzIiwibWF0Y2hQcmVtaXNlcyIsInByZW1pc2VzTWF0Y2hlcyIsImV2ZXJ5Iiwibm9uVGVybWluYWxOb2RlTWF0Y2hlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7cUJBSkM7c0JBRVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhCLElBQUEsQUFBTUEscUJBeURsQixBQXpEWTthQUFNQSxLQUNQQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsVUFBVTs4QkFEckJIO1FBRWpCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7O2lCQUpE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