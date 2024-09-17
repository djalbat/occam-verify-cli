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
var _substitutions = /*#__PURE__*/ _interop_require_default(require("./substitutions"));
var _substitutions1 = /*#__PURE__*/ _interop_require_default(require("./resolve/substitutions"));
var _premisesWithProofSteps = /*#__PURE__*/ _interop_require_default(require("./unify/premisesWithProofSteps"));
var _conclusionWithStatement = /*#__PURE__*/ _interop_require_default(require("./unify/conclusionWithStatement"));
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var Rule = /*#__PURE__*/ function() {
    function Rule(labels, premises, conclusion, fileContext) {
        _class_call_check(this, Rule);
        this.labels = labels;
        this.premises = premises;
        this.conclusion = conclusion;
        this.fileContext = fileContext;
    }
    _create_class(Rule, [
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
            key: "getFileContext",
            value: function getFileContext() {
                return this.fileContext;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statementNode, localContext) {
                var statementUnified = false;
                var substitutions = _substitutions.default.fromNothing(), proofSteps = localContext.getProofSteps(), premisesA = this.premises, proofStepsB = proofSteps, fileContextA = this.fileContext, localContextB = localContext, premisesUnified = (0, _premisesWithProofSteps.default)(premisesA, proofStepsB, substitutions, fileContextA, localContextB);
                if (premisesUnified) {
                    var conclusionA = this.conclusion, conclusionUnified = (0, _conclusionWithStatement.default)(conclusionA, statementNode, substitutions, fileContextA, localContextB);
                    if (conclusionUnified) {
                        var substitutionsResolved = (0, _substitutions1.default)(substitutions, fileContextA, localContextB);
                        statementUnified = substitutionsResolved; ///
                    }
                }
                return statementUnified;
            }
        },
        {
            key: "matchMetavariableNode",
            value: function matchMetavariableNode(metavariableNode) {
                var matchesMetavariableNode = this.labels.some(function(label) {
                    var labelMatchesMetavariableNode = label.matchMetavariableNode(metavariableNode);
                    if (labelMatchesMetavariableNode) {
                        return true;
                    }
                });
                return matchesMetavariableNode;
            }
        }
    ], [
        {
            key: "fromLabelsPremisesConclusionAndFileContext",
            value: function fromLabelsPremisesConclusionAndFileContext(labels, premises, conclusion, fileContext) {
                var rule = new Rule(labels, premises, conclusion, fileContext);
                return rule;
            }
        }
    ]);
    return Rule;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9ucyBmcm9tIFwiLi9zdWJzdGl0dXRpb25zXCI7XG5pbXBvcnQgcmVzb2x2ZVN1YnN0aXR1dGlvbnMgZnJvbSBcIi4vcmVzb2x2ZS9zdWJzdGl0dXRpb25zXCI7XG5pbXBvcnQgdW5pZnlQcmVtaXNlc1dpdGhQcm9vZlN0ZXBzIGZyb20gXCIuL3VuaWZ5L3ByZW1pc2VzV2l0aFByb29mU3RlcHNcIjtcbmltcG9ydCB1bmlmeUNvbmNsdXNpb25XaXRoU3RhdGVtZW50IGZyb20gXCIuL3VuaWZ5L2NvbmNsdXNpb25XaXRoU3RhdGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcihsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uLCBmaWxlQ29udGV4dCkge1xuICAgIHRoaXMubGFiZWxzID0gbGFiZWxzO1xuICAgIHRoaXMucHJlbWlzZXMgPSBwcmVtaXNlcztcbiAgICB0aGlzLmNvbmNsdXNpb24gPSBjb25jbHVzaW9uO1xuICAgIHRoaXMuZmlsZUNvbnRleHQgPSBmaWxlQ29udGV4dDtcbiAgfVxuXG4gIGdldExhYmVscygpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbHM7XG4gIH1cblxuICBnZXRQcmVtaXNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5wcmVtaXNlcztcbiAgfVxuXG4gIGdldENvbmNsdXNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uY2x1c2lvbjtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0O1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcHJvb2ZTdGVwcyA9IGxvY2FsQ29udGV4dC5nZXRQcm9vZlN0ZXBzKCksXG4gICAgICAgICAgcHJlbWlzZXNBID0gdGhpcy5wcmVtaXNlcyxcbiAgICAgICAgICBwcm9vZlN0ZXBzQiA9IHByb29mU3RlcHMsIC8vL1xuICAgICAgICAgIGZpbGVDb250ZXh0QSA9IHRoaXMuZmlsZUNvbnRleHQsICAvLy9cbiAgICAgICAgICBsb2NhbENvbnRleHRCID0gbG9jYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICBwcmVtaXNlc1VuaWZpZWQgPSB1bmlmeVByZW1pc2VzV2l0aFByb29mU3RlcHMocHJlbWlzZXNBLCBwcm9vZlN0ZXBzQiwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgIGlmIChwcmVtaXNlc1VuaWZpZWQpIHtcbiAgICAgIGNvbnN0IGNvbmNsdXNpb25BID0gdGhpcy5jb25jbHVzaW9uLCAgLy8vXG4gICAgICAgICAgICBjb25jbHVzaW9uVW5pZmllZCA9IHVuaWZ5Q29uY2x1c2lvbldpdGhTdGF0ZW1lbnQoY29uY2x1c2lvbkEsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG5cbiAgICAgIGlmIChjb25jbHVzaW9uVW5pZmllZCkge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zUmVzb2x2ZWQgPSByZXNvbHZlU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSBzdWJzdGl0dXRpb25zUmVzb2x2ZWQ7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBtYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMubGFiZWxzLnNvbWUoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBsYWJlbE1hdGNoZXNNZXRhdmFyaWFibGVOb2RlID0gbGFiZWwubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAobGFiZWxNYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtYXRjaGVzTWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGFiZWxzUHJlbWlzZXNDb25jbHVzaW9uQW5kRmlsZUNvbnRleHQobGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBydWxlID0gbmV3IFJ1bGUobGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJSdWxlIiwibGFiZWxzIiwicHJlbWlzZXMiLCJjb25jbHVzaW9uIiwiZmlsZUNvbnRleHQiLCJnZXRMYWJlbHMiLCJnZXRQcmVtaXNlcyIsImdldENvbmNsdXNpb24iLCJnZXRGaWxlQ29udGV4dCIsInVuaWZ5U3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsImxvY2FsQ29udGV4dCIsInN0YXRlbWVudFVuaWZpZWQiLCJzdWJzdGl0dXRpb25zIiwiU3Vic3RpdHV0aW9ucyIsImZyb21Ob3RoaW5nIiwicHJvb2ZTdGVwcyIsImdldFByb29mU3RlcHMiLCJwcmVtaXNlc0EiLCJwcm9vZlN0ZXBzQiIsImZpbGVDb250ZXh0QSIsImxvY2FsQ29udGV4dEIiLCJwcmVtaXNlc1VuaWZpZWQiLCJ1bmlmeVByZW1pc2VzV2l0aFByb29mU3RlcHMiLCJjb25jbHVzaW9uQSIsImNvbmNsdXNpb25VbmlmaWVkIiwidW5pZnlDb25jbHVzaW9uV2l0aFN0YXRlbWVudCIsInN1YnN0aXR1dGlvbnNSZXNvbHZlZCIsInJlc29sdmVTdWJzdGl0dXRpb25zIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1hdGNoZXNNZXRhdmFyaWFibGVOb2RlIiwic29tZSIsImxhYmVsIiwibGFiZWxNYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSIsImZyb21MYWJlbHNQcmVtaXNlc0NvbmNsdXNpb25BbmRGaWxlQ29udGV4dCIsInJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBT3FCQTs7O29FQUxLO3FFQUNPOzZFQUNPOzhFQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQUEsQUFBTUEscUJBQU47YUFBTUEsS0FDUEMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsV0FBVztnQ0FEbENKO1FBRWpCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBOztrQkFMRko7O1lBUW5CSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLE1BQU07WUFDcEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFFBQVE7WUFDdEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFVBQVU7WUFDeEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFdBQVc7WUFDekI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUMsYUFBYSxFQUFFQyxZQUFZO2dCQUN4QyxJQUFJQyxtQkFBbUI7Z0JBRXZCLElBQU1DLGdCQUFnQkMsc0JBQWEsQ0FBQ0MsV0FBVyxJQUN6Q0MsYUFBYUwsYUFBYU0sYUFBYSxJQUN2Q0MsWUFBWSxJQUFJLENBQUNoQixRQUFRLEVBQ3pCaUIsY0FBY0gsWUFDZEksZUFBZSxJQUFJLENBQUNoQixXQUFXLEVBQy9CaUIsZ0JBQWdCVixjQUNoQlcsa0JBQWtCQyxJQUFBQSwrQkFBMkIsRUFBQ0wsV0FBV0MsYUFBYU4sZUFBZU8sY0FBY0M7Z0JBRXpHLElBQUlDLGlCQUFpQjtvQkFDbkIsSUFBTUUsY0FBYyxJQUFJLENBQUNyQixVQUFVLEVBQzdCc0Isb0JBQW9CQyxJQUFBQSxnQ0FBNEIsRUFBQ0YsYUFBYWQsZUFBZUcsZUFBZU8sY0FBY0M7b0JBRWhILElBQUlJLG1CQUFtQjt3QkFDckIsSUFBTUUsd0JBQXdCQyxJQUFBQSx1QkFBb0IsRUFBQ2YsZUFBZU8sY0FBY0M7d0JBRWhGVCxtQkFBbUJlLHVCQUF1QixHQUFHO29CQUMvQztnQkFDRjtnQkFFQSxPQUFPZjtZQUNUOzs7WUFFQWlCLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JDLGdCQUFnQjtnQkFDcEMsSUFBTUMsMEJBQTBCLElBQUksQ0FBQzlCLE1BQU0sQ0FBQytCLElBQUksQ0FBQyxTQUFDQztvQkFDaEQsSUFBTUMsK0JBQStCRCxNQUFNSixxQkFBcUIsQ0FBQ0M7b0JBRWpFLElBQUlJLDhCQUE4Qjt3QkFDaEMsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxPQUFPSDtZQUNUOzs7O1lBRU9JLEtBQUFBO21CQUFQLFNBQU9BLDJDQUEyQ2xDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLFdBQVc7Z0JBQ3pGLElBQU1nQyxPQUFPLElBOURJcEMsS0E4REtDLFFBQVFDLFVBQVVDLFlBQVlDO2dCQUVwRCxPQUFPZ0M7WUFDVDs7O1dBakVtQnBDIn0=