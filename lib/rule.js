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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBwcnVuZSB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgc29tZVN1YkFycmF5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBsYWJlbHNBc1N0cmluZyB9IGZyb20gXCIuL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24pIHtcbiAgICB0aGlzLmxhYmVscyA9IGxhYmVscztcbiAgICB0aGlzLnByZW1pc2VzID0gcHJlbWlzZXM7XG4gICAgdGhpcy5jb25jbHVzaW9uID0gY29uY2x1c2lvbjtcbiAgfVxuXG4gIGdldExhYmVscygpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbHM7XG4gIH1cblxuICBnZXRQcmVtaXNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5wcmVtaXNlcztcbiAgfVxuXG4gIGdldENvbmNsdXNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uY2x1c2lvbjtcbiAgfVxuXG4gIG1hdGNoTWV0YXN0YXRlbWVudChtZXRhc3RhdGVtZW50Tm9kZSwgbWV0YXByb29mQ29udGV4dCkge1xuICAgIGxldCBtZXRhc3RhdGVtZW50TmF0Y2hlcztcblxuICAgIGNvbnN0IHByZW1pc2VzTGVuZ3RoID0gdGhpcy5wcmVtaXNlcy5sZW5ndGg7XG5cbiAgICBpZiAocHJlbWlzZXNMZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IG1ldGFTdWJzdGl0dXRpb25zID0gW10sXG4gICAgICAgICAgICBjb25jbHVzaW9uTWF0Y2hlcyA9IG1hdGNoQ29uY2x1c2lvbih0aGlzLmNvbmNsdXNpb24sIG1ldGFzdGF0ZW1lbnROb2RlLCBtZXRhU3Vic3RpdHV0aW9ucyk7XG5cbiAgICAgIG1ldGFzdGF0ZW1lbnROYXRjaGVzID0gY29uY2x1c2lvbk1hdGNoZXM7IC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXRhQXNzZXJ0aW9ucyA9IG1ldGFwcm9vZkNvbnRleHQuZ2V0TWV0YUFzc2VydGlvbnMoKTtcblxuICAgICAgbWV0YXN0YXRlbWVudE5hdGNoZXMgPSBzb21lU3ViQXJyYXkobWV0YUFzc2VydGlvbnMsIHByZW1pc2VzTGVuZ3RoLCAobWV0YUFzc2VydGlvbnMpID0+IHtcbiAgICAgICAgY29uc3QgcHJlbWlzZXNNYXRjaENvbmNsdXNpb24gPSBtYXRjaFByZW1pc2VzQW5kQ29uY2x1c2lvbih0aGlzLnByZW1pc2VzLCB0aGlzLmNvbmNsdXNpb24sIG1ldGFBc3NlcnRpb25zLCBtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgICAgaWYgKHByZW1pc2VzTWF0Y2hDb25jbHVzaW9uKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhc3RhdGVtZW50TmF0Y2hlcztcbiAgfVxuXG4gIGFzU3RyaW5nKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IGxhYmVsc0FzU3RyaW5nKHRoaXMubGFiZWxzKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByZW1pc2VzQ29uY2x1c2lvbkFuZExhYmVscyhwcmVtaXNlcywgY29uY2x1c2lvbiwgbGFiZWxzKSB7XG4gICAgY29uc3QgcnVsZSA9IG5ldyBSdWxlKGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24pO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWF0Y2hQcmVtaXNlKHByZW1pc2UsIG1ldGFBc3NlcnRpb25zLCBtZXRhU3Vic3RpdHV0aW9ucykge1xuICBjb25zdCBtZXRhQXNzZXJ0aW9uID0gcHJ1bmUobWV0YUFzc2VydGlvbnMsIChtZXRhQXNzZXJ0aW9uKSA9PiB7XG4gICAgY29uc3QgbWV0YVN1YnByb29mTm9kZSA9IG1ldGFBc3NlcnRpb24uZ2V0TWV0YVN1YnByb29mTm9kZSgpLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlID0gbWV0YUFzc2VydGlvbi5nZXRNZXRhc3RhdGVtZW50Tm9kZSgpXG5cbiAgICBpZiAobWV0YVN1YnByb29mTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YVN1YlByb29mTWF0Y2hlcyA9IHByZW1pc2UubWF0Y2hNZXRhU3VicHJvb2ZOb2RlKG1ldGFTdWJwcm9vZk5vZGUsIG1ldGFTdWJzdGl0dXRpb25zKTtcblxuICAgICAgaWYgKCFtZXRhU3ViUHJvb2ZNYXRjaGVzKSB7ICAvLy9cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGFzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhc3RhdGVtZW50TWF0Y2hlcyA9IHByZW1pc2UubWF0Y2hNZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZSwgbWV0YVN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICBpZiAoIW1ldGFzdGF0ZW1lbnRNYXRjaGVzKSB7ICAvLy9cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gIH0pIHx8IG51bGw7XG5cbiAgY29uc3QgcHJlbWlzZU1hdGNoZXMgPSAobWV0YUFzc2VydGlvbiAhPT0gbnVsbCk7XG5cbiAgcmV0dXJuIHByZW1pc2VNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtYXRjaFByZW1pc2VzKHByZW1pc2UsIG1ldGFBc3NlcnRpb25zLCBtZXRhU3Vic3RpdHV0aW9ucykge1xuICBjb25zdCBwcmVtaXNlc01hdGNoZXMgPSBwcmVtaXNlLmV2ZXJ5KChwcmVtaXNlKSA9PiB7XG4gICAgY29uc3QgcHJlbWlzZU1hdGNoZXMgPSBtYXRjaFByZW1pc2UocHJlbWlzZSwgbWV0YUFzc2VydGlvbnMsIG1ldGFTdWJzdGl0dXRpb25zKTtcblxuICAgIGlmIChwcmVtaXNlTWF0Y2hlcykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcHJlbWlzZXNNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtYXRjaENvbmNsdXNpb24oY29uY2x1c2lvbiwgbWV0YXN0YXRlbWVudE5vZGUsIG1ldGFTdWJzdGl0dXRpb25zKSB7XG4gIGNvbnN0IG5vblRlcm1pbmFsTm9kZU1hdGNoZXMgPSBjb25jbHVzaW9uLm1hdGNoTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUsIG1ldGFTdWJzdGl0dXRpb25zKSxcbiAgICAgICAgY29uY2x1c2lvbk1hdGNoZXMgPSBub25UZXJtaW5hbE5vZGVNYXRjaGVzOyAvLy9cblxuICByZXR1cm4gY29uY2x1c2lvbk1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1hdGNoUHJlbWlzZXNBbmRDb25jbHVzaW9uKHByZW1pc2VzLCBjb25jbHVzaW9uLCBtZXRhQXNzZXJ0aW9ucywgbWV0YXN0YXRlbWVudE5vZGUpIHtcbiAgbGV0IHByZW1pc2VzTWF0Y2hDb25jbHVzaW9uID0gZmFsc2U7XG5cbiAgY29uc3QgbWV0YVN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgcHJlbWlzZXNNYXRjaGVzID0gbWF0Y2hQcmVtaXNlcyhwcmVtaXNlcywgbWV0YUFzc2VydGlvbnMsIG1ldGFTdWJzdGl0dXRpb25zKTtcblxuICBpZiAocHJlbWlzZXNNYXRjaGVzKSB7XG4gICAgY29uc3QgY29uY2x1c2lvbk1hdGNoZXMgPSBtYXRjaENvbmNsdXNpb24oY29uY2x1c2lvbiwgbWV0YXN0YXRlbWVudE5vZGUsIG1ldGFTdWJzdGl0dXRpb25zKTtcblxuICAgIHByZW1pc2VzTWF0Y2hDb25jbHVzaW9uID0gY29uY2x1c2lvbk1hdGNoZXM7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBwcmVtaXNlc01hdGNoQ29uY2x1c2lvbjtcbn1cbiJdLCJuYW1lcyI6WyJSdWxlIiwibGFiZWxzIiwicHJlbWlzZXMiLCJjb25jbHVzaW9uIiwiZ2V0TGFiZWxzIiwiZ2V0UHJlbWlzZXMiLCJnZXRDb25jbHVzaW9uIiwibWF0Y2hNZXRhc3RhdGVtZW50IiwibWV0YXN0YXRlbWVudE5vZGUiLCJtZXRhcHJvb2ZDb250ZXh0IiwibWV0YXN0YXRlbWVudE5hdGNoZXMiLCJwcmVtaXNlc0xlbmd0aCIsImxlbmd0aCIsIm1ldGFTdWJzdGl0dXRpb25zIiwiY29uY2x1c2lvbk1hdGNoZXMiLCJtYXRjaENvbmNsdXNpb24iLCJtZXRhQXNzZXJ0aW9ucyIsImdldE1ldGFBc3NlcnRpb25zIiwic29tZVN1YkFycmF5IiwicHJlbWlzZXNNYXRjaENvbmNsdXNpb24iLCJtYXRjaFByZW1pc2VzQW5kQ29uY2x1c2lvbiIsImFzU3RyaW5nIiwic3RyaW5nIiwibGFiZWxzQXNTdHJpbmciLCJmcm9tUHJlbWlzZXNDb25jbHVzaW9uQW5kTGFiZWxzIiwicnVsZSIsIm1hdGNoUHJlbWlzZSIsInByZW1pc2UiLCJtZXRhQXNzZXJ0aW9uIiwicHJ1bmUiLCJtZXRhU3VicHJvb2ZOb2RlIiwiZ2V0TWV0YVN1YnByb29mTm9kZSIsImdldE1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YVN1YlByb29mTWF0Y2hlcyIsIm1hdGNoTWV0YVN1YnByb29mTm9kZSIsIm1ldGFzdGF0ZW1lbnRNYXRjaGVzIiwibWF0Y2hNZXRhc3RhdGVtZW50Tm9kZSIsInByZW1pc2VNYXRjaGVzIiwibWF0Y2hQcmVtaXNlcyIsInByZW1pc2VzTWF0Y2hlcyIsImV2ZXJ5Iiwibm9uVGVybWluYWxOb2RlTWF0Y2hlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7cUJBSkM7c0JBRVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhCLElBQUEsQUFBTUEscUJBeURsQixBQXpEWTthQUFNQSxLQUNQQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsVUFBVTs4QkFEckJIO1FBRWpCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7O2lCQUpESDs7WUFPbkJJLEtBQUFBO21CQUFBQSxTQUFBQSxZQUFZO2dCQUNWLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWM7Z0JBQ1osT0FBTyxJQUFJLENBQUNILFFBQVE7WUFDdEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsZ0JBQWdCO2dCQUNkLE9BQU8sSUFBSSxDQUFDSCxVQUFVO1lBQ3hCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQkMsaUJBQWlCLEVBQUVDLGdCQUFnQixFQUFFOztnQkFDdEQsSUFBSUM7Z0JBRUosSUFBTUMsaUJBQWlCLElBQUksQ0FBQ1QsUUFBUSxDQUFDVSxNQUFNO2dCQUUzQyxJQUFJRCxtQkFBbUIsR0FBRztvQkFDeEIsSUFBTUUsb0JBQW9CLEVBQUUsRUFDdEJDLG9CQUFvQkMsZ0JBQWdCLElBQUksQ0FBQ1osVUFBVSxFQUFFSyxtQkFBbUJLO29CQUU5RUgsdUJBQXVCSSxtQkFBbUIsR0FBRztnQkFDL0MsT0FBTztvQkFDTCxJQUFNRSxpQkFBaUJQLGlCQUFpQlEsaUJBQWlCO29CQUV6RFAsdUJBQXVCUSxJQUFBQSxtQkFBWSxFQUFDRixnQkFBZ0JMLGdCQUFnQixTQUFDSyxnQkFBbUI7d0JBQ3RGLElBQU1HLDBCQUEwQkMsMkJBQTJCLE1BQUtsQixRQUFRLEVBQUUsTUFBS0MsVUFBVSxFQUFFYSxnQkFBZ0JSO3dCQUUzRyxJQUFJVyx5QkFBeUI7NEJBQzNCLE9BQU8sSUFBSTt3QkFDYixDQUFDO29CQUNIO2dCQUNGLENBQUM7Z0JBRUQsT0FBT1Q7WUFDVDs7O1lBRUFXLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXO2dCQUNULElBQU1DLFNBQVNDLElBQUFBLHNCQUFjLEVBQUMsSUFBSSxDQUFDdEIsTUFBTTtnQkFFekMsT0FBT3FCO1lBQ1Q7Ozs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0EsZ0NBQWdDdEIsUUFBUSxFQUFFQyxVQUFVLEVBQUVGLE1BQU0sRUFBRTtnQkFDbkUsSUFBTXdCLE9BQU8sSUFuREl6QixLQW1ES0MsUUFBUUMsVUFBVUM7Z0JBRXhDLE9BQU9zQjtZQUNUOzs7V0F0RG1CekI7O0FBeURyQixTQUFTMEIsYUFBYUMsT0FBTyxFQUFFWCxjQUFjLEVBQUVILGlCQUFpQixFQUFFO0lBQ2hFLElBQU1lLGdCQUFnQkMsSUFBQUEsWUFBSyxFQUFDYixnQkFBZ0IsU0FBQ1ksZUFBa0I7UUFDN0QsSUFBTUUsbUJBQW1CRixjQUFjRyxtQkFBbUIsSUFDcER2QixvQkFBb0JvQixjQUFjSSxvQkFBb0I7UUFFNUQsSUFBSUYscUJBQXFCLElBQUksRUFBRTtZQUM3QixJQUFNRyxzQkFBc0JOLFFBQVFPLHFCQUFxQixDQUFDSixrQkFBa0JqQjtZQUU1RSxJQUFJLENBQUNvQixxQkFBcUI7Z0JBQ3hCLE9BQU8sSUFBSTtZQUNiLENBQUM7UUFDSCxDQUFDO1FBRUQsSUFBSXpCLHNCQUFzQixJQUFJLEVBQUU7WUFDOUIsSUFBTTJCLHVCQUF1QlIsUUFBUVMsc0JBQXNCLENBQUM1QixtQkFBbUJLO1lBRS9FLElBQUksQ0FBQ3NCLHNCQUFzQjtnQkFDekIsT0FBTyxJQUFJO1lBQ2IsQ0FBQztRQUNILENBQUM7SUFFSCxNQUFNLElBQUk7SUFFVixJQUFNRSxpQkFBa0JULGtCQUFrQixJQUFJO0lBRTlDLE9BQU9TO0FBQ1Q7QUFFQSxTQUFTQyxjQUFjWCxPQUFPLEVBQUVYLGNBQWMsRUFBRUgsaUJBQWlCLEVBQUU7SUFDakUsSUFBTTBCLGtCQUFrQlosUUFBUWEsS0FBSyxDQUFDLFNBQUNiLFNBQVk7UUFDakQsSUFBTVUsaUJBQWlCWCxhQUFhQyxTQUFTWCxnQkFBZ0JIO1FBRTdELElBQUl3QixnQkFBZ0I7WUFDbEIsT0FBTyxJQUFJO1FBQ2IsQ0FBQztJQUNIO0lBRUEsT0FBT0U7QUFDVDtBQUVBLFNBQVN4QixnQkFBZ0JaLFVBQVUsRUFBRUssaUJBQWlCLEVBQUVLLGlCQUFpQixFQUFFO0lBQ3pFLElBQU00Qix5QkFBeUJ0QyxXQUFXaUMsc0JBQXNCLENBQUM1QixtQkFBbUJLLG9CQUM5RUMsb0JBQW9CMkIsd0JBQXdCLEdBQUc7SUFFckQsT0FBTzNCO0FBQ1Q7QUFFQSxTQUFTTSwyQkFBMkJsQixRQUFRLEVBQUVDLFVBQVUsRUFBRWEsY0FBYyxFQUFFUixpQkFBaUIsRUFBRTtJQUMzRixJQUFJVywwQkFBMEIsS0FBSztJQUVuQyxJQUFNTixvQkFBb0IsRUFBRSxFQUN0QjBCLGtCQUFrQkQsY0FBY3BDLFVBQVVjLGdCQUFnQkg7SUFFaEUsSUFBSTBCLGlCQUFpQjtRQUNuQixJQUFNekIsb0JBQW9CQyxnQkFBZ0JaLFlBQVlLLG1CQUFtQks7UUFFekVNLDBCQUEwQkwsbUJBQW9CLEdBQUc7SUFDbkQsQ0FBQztJQUVELE9BQU9LO0FBQ1QifQ==