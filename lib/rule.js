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
                var metavariableNodeMatches = this.labels.some(function(label) {
                    var metavariableNodeMatches = label.matchMetavariableNode(metavariableNode);
                    if (metavariableNodeMatches) {
                        return true;
                    }
                });
                return metavariableNodeMatches;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9ucyBmcm9tIFwiLi9zdWJzdGl0dXRpb25zXCI7XG5pbXBvcnQgcmVzb2x2ZVN1YnN0aXR1dGlvbnMgZnJvbSBcIi4vcmVzb2x2ZS9zdWJzdGl0dXRpb25zXCI7XG5pbXBvcnQgdW5pZnlQcmVtaXNlc1dpdGhQcm9vZlN0ZXBzIGZyb20gXCIuL3VuaWZ5L3ByZW1pc2VzV2l0aFByb29mU3RlcHNcIjtcbmltcG9ydCB1bmlmeUNvbmNsdXNpb25XaXRoU3RhdGVtZW50IGZyb20gXCIuL3VuaWZ5L2NvbmNsdXNpb25XaXRoU3RhdGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcihsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uLCBmaWxlQ29udGV4dCkge1xuICAgIHRoaXMubGFiZWxzID0gbGFiZWxzO1xuICAgIHRoaXMucHJlbWlzZXMgPSBwcmVtaXNlcztcbiAgICB0aGlzLmNvbmNsdXNpb24gPSBjb25jbHVzaW9uO1xuICAgIHRoaXMuZmlsZUNvbnRleHQgPSBmaWxlQ29udGV4dDtcbiAgfVxuXG4gIGdldExhYmVscygpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbHM7XG4gIH1cblxuICBnZXRQcmVtaXNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5wcmVtaXNlcztcbiAgfVxuXG4gIGdldENvbmNsdXNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uY2x1c2lvbjtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0O1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcHJvb2ZTdGVwcyA9IGxvY2FsQ29udGV4dC5nZXRQcm9vZlN0ZXBzKCksXG4gICAgICAgICAgcHJlbWlzZXNBID0gdGhpcy5wcmVtaXNlcyxcbiAgICAgICAgICBwcm9vZlN0ZXBzQiA9IHByb29mU3RlcHMsIC8vL1xuICAgICAgICAgIGZpbGVDb250ZXh0QSA9IHRoaXMuZmlsZUNvbnRleHQsICAvLy9cbiAgICAgICAgICBsb2NhbENvbnRleHRCID0gbG9jYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICBwcmVtaXNlc1VuaWZpZWQgPSB1bmlmeVByZW1pc2VzV2l0aFByb29mU3RlcHMocHJlbWlzZXNBLCBwcm9vZlN0ZXBzQiwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgIGlmIChwcmVtaXNlc1VuaWZpZWQpIHtcbiAgICAgIGNvbnN0IGNvbmNsdXNpb25BID0gdGhpcy5jb25jbHVzaW9uLCAgLy8vXG4gICAgICAgICAgICBjb25jbHVzaW9uVW5pZmllZCA9IHVuaWZ5Q29uY2x1c2lvbldpdGhTdGF0ZW1lbnQoY29uY2x1c2lvbkEsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG5cbiAgICAgIGlmIChjb25jbHVzaW9uVW5pZmllZCkge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zUmVzb2x2ZWQgPSByZXNvbHZlU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSBzdWJzdGl0dXRpb25zUmVzb2x2ZWQ7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRoaXMubGFiZWxzLnNvbWUoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IGxhYmVsLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21MYWJlbHNQcmVtaXNlc0NvbmNsdXNpb25BbmRGaWxlQ29udGV4dChsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHJ1bGUgPSBuZXcgUnVsZShsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlJ1bGUiLCJsYWJlbHMiLCJwcmVtaXNlcyIsImNvbmNsdXNpb24iLCJmaWxlQ29udGV4dCIsImdldExhYmVscyIsImdldFByZW1pc2VzIiwiZ2V0Q29uY2x1c2lvbiIsImdldEZpbGVDb250ZXh0IiwidW5pZnlTdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwibG9jYWxDb250ZXh0Iiwic3RhdGVtZW50VW5pZmllZCIsInN1YnN0aXR1dGlvbnMiLCJTdWJzdGl0dXRpb25zIiwiZnJvbU5vdGhpbmciLCJwcm9vZlN0ZXBzIiwiZ2V0UHJvb2ZTdGVwcyIsInByZW1pc2VzQSIsInByb29mU3RlcHNCIiwiZmlsZUNvbnRleHRBIiwibG9jYWxDb250ZXh0QiIsInByZW1pc2VzVW5pZmllZCIsInVuaWZ5UHJlbWlzZXNXaXRoUHJvb2ZTdGVwcyIsImNvbmNsdXNpb25BIiwiY29uY2x1c2lvblVuaWZpZWQiLCJ1bmlmeUNvbmNsdXNpb25XaXRoU3RhdGVtZW50Iiwic3Vic3RpdHV0aW9uc1Jlc29sdmVkIiwicmVzb2x2ZVN1YnN0aXR1dGlvbnMiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMiLCJzb21lIiwibGFiZWwiLCJmcm9tTGFiZWxzUHJlbWlzZXNDb25jbHVzaW9uQW5kRmlsZUNvbnRleHQiLCJydWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7OztvRUFMSztxRUFDTzs2RUFDTzs4RUFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFBLEFBQU1BLHFCQUFOO2FBQU1BLEtBQ1BDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLFdBQVc7Z0NBRGxDSjtRQUVqQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTs7a0JBTEZKOztZQVFuQkssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixNQUFNO1lBQ3BCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixRQUFRO1lBQ3RCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixVQUFVO1lBQ3hCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixXQUFXO1lBQ3pCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVDLGFBQWEsRUFBRUMsWUFBWTtnQkFDeEMsSUFBSUMsbUJBQW1CO2dCQUV2QixJQUFNQyxnQkFBZ0JDLHNCQUFhLENBQUNDLFdBQVcsSUFDekNDLGFBQWFMLGFBQWFNLGFBQWEsSUFDdkNDLFlBQVksSUFBSSxDQUFDaEIsUUFBUSxFQUN6QmlCLGNBQWNILFlBQ2RJLGVBQWUsSUFBSSxDQUFDaEIsV0FBVyxFQUMvQmlCLGdCQUFnQlYsY0FDaEJXLGtCQUFrQkMsSUFBQUEsK0JBQTJCLEVBQUNMLFdBQVdDLGFBQWFOLGVBQWVPLGNBQWNDO2dCQUV6RyxJQUFJQyxpQkFBaUI7b0JBQ25CLElBQU1FLGNBQWMsSUFBSSxDQUFDckIsVUFBVSxFQUM3QnNCLG9CQUFvQkMsSUFBQUEsZ0NBQTRCLEVBQUNGLGFBQWFkLGVBQWVHLGVBQWVPLGNBQWNDO29CQUVoSCxJQUFJSSxtQkFBbUI7d0JBQ3JCLElBQU1FLHdCQUF3QkMsSUFBQUEsdUJBQW9CLEVBQUNmLGVBQWVPLGNBQWNDO3dCQUVoRlQsbUJBQW1CZSx1QkFBdUIsR0FBRztvQkFDL0M7Z0JBQ0Y7Z0JBRUEsT0FBT2Y7WUFDVDs7O1lBRUFpQixLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCQyxnQkFBZ0I7Z0JBQ3BDLElBQU1DLDBCQUEwQixJQUFJLENBQUM5QixNQUFNLENBQUMrQixJQUFJLENBQUMsU0FBQ0M7b0JBQ2hELElBQU1GLDBCQUEwQkUsTUFBTUoscUJBQXFCLENBQUNDO29CQUU1RCxJQUFJQyx5QkFBeUI7d0JBQzNCLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRUEsT0FBT0E7WUFDVDs7OztZQUVPRyxLQUFBQTttQkFBUCxTQUFPQSwyQ0FBMkNqQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxXQUFXO2dCQUN6RixJQUFNK0IsT0FBTyxJQTlESW5DLEtBOERLQyxRQUFRQyxVQUFVQyxZQUFZQztnQkFFcEQsT0FBTytCO1lBQ1Q7OztXQWpFbUJuQyJ9