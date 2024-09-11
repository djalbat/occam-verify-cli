"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TopLevelAssertion;
    }
});
var _substitutions = /*#__PURE__*/ _interop_require_default(require("./substitutions"));
var _consequentAgainstStatement = /*#__PURE__*/ _interop_require_default(require("./unify/consequentAgainstStatement"));
var _suppositionsAgainstProofSteps = /*#__PURE__*/ _interop_require_default(require("./unify/suppositionsAgainstProofSteps"));
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
var TopLevelAssertion = /*#__PURE__*/ function() {
    function TopLevelAssertion(labels, suppositions, consequent, substitutions, fileContext) {
        _class_call_check(this, TopLevelAssertion);
        this.labels = labels;
        this.suppositions = suppositions;
        this.consequent = consequent;
        this.substitutions = substitutions;
        this.fileContext = fileContext;
    }
    _create_class(TopLevelAssertion, [
        {
            key: "getLabels",
            value: function getLabels() {
                return this.labels;
            }
        },
        {
            key: "getSuppositions",
            value: function getSuppositions() {
                return this.suppositions;
            }
        },
        {
            key: "getConsequent",
            value: function getConsequent() {
                return this.consequent;
            }
        },
        {
            key: "getSubstitutions",
            value: function getSubstitutions() {
                return this.substitutions;
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
                var substitutions = _substitutions.default.fromNothing(), proofSteps = localContext.getProofSteps(), proofStepsB = proofSteps, fileContextA = this.fileContext, suppositionsA = this.suppositions, localContextB = localContext, suppositionsUnified = (0, _suppositionsAgainstProofSteps.default)(suppositionsA, proofStepsB, substitutions, fileContextA, localContextB);
                if (suppositionsUnified) {
                    var consequentA = this.consequent, consequentUnified = (0, _consequentAgainstStatement.default)(consequentA, statementNode, substitutions, fileContextA, localContext);
                    statementUnified = consequentUnified; ///
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
            key: "fromLabelsSuppositionsConsequentSubstitutionsAndFileContext",
            value: function fromLabelsSuppositionsConsequentSubstitutionsAndFileContext(Class, labels, suppositions, consequent, substitutions, fileContext) {
                return new Class(labels, suppositions, consequent, substitutions, fileContext);
            }
        }
    ]);
    return TopLevelAssertion;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90b3BMZXZlbEFzc2VydGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFN1YnN0aXR1dGlvbnMgZnJvbSBcIi4vc3Vic3RpdHV0aW9uc1wiO1xuaW1wb3J0IHVuaWZ5Q29uc2VxdWVudEFnYWluc3RTdGF0ZW1lbnQgZnJvbSBcIi4vdW5pZnkvY29uc2VxdWVudEFnYWluc3RTdGF0ZW1lbnRcIjtcbmltcG9ydCB1bmlmeVN1cHBvc2l0aW9uc0FnYWluc3RQcm9vZlN0ZXBzIGZyb20gXCIuL3VuaWZ5L3N1cHBvc2l0aW9uc0FnYWluc3RQcm9vZlN0ZXBzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvcExldmVsQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IobGFiZWxzLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbnQsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0KSB7XG4gICAgdGhpcy5sYWJlbHMgPSBsYWJlbHM7XG4gICAgdGhpcy5zdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnM7XG4gICAgdGhpcy5jb25zZXF1ZW50ID0gY29uc2VxdWVudDtcbiAgICB0aGlzLnN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zO1xuICAgIHRoaXMuZmlsZUNvbnRleHQgPSBmaWxlQ29udGV4dDtcbiAgfVxuXG4gIGdldExhYmVscygpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbHM7XG4gIH1cblxuICBnZXRTdXBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VwcG9zaXRpb25zO1xuICB9XG5cbiAgZ2V0Q29uc2VxdWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb25zZXF1ZW50O1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZUNvbnRleHQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBwcm9vZlN0ZXBzID0gbG9jYWxDb250ZXh0LmdldFByb29mU3RlcHMoKSxcbiAgICAgICAgICBwcm9vZlN0ZXBzQiA9IHByb29mU3RlcHMsIC8vL1xuICAgICAgICAgIGZpbGVDb250ZXh0QSA9IHRoaXMuZmlsZUNvbnRleHQsICAvLy9cbiAgICAgICAgICBzdXBwb3NpdGlvbnNBID0gdGhpcy5zdXBwb3NpdGlvbnMsICAvLy9cbiAgICAgICAgICBsb2NhbENvbnRleHRCID0gbG9jYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICBzdXBwb3NpdGlvbnNVbmlmaWVkID0gdW5pZnlTdXBwb3NpdGlvbnNBZ2FpbnN0UHJvb2ZTdGVwcyhzdXBwb3NpdGlvbnNBLCBwcm9vZlN0ZXBzQiwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgIGlmIChzdXBwb3NpdGlvbnNVbmlmaWVkKSB7XG4gICAgICBjb25zdCBjb25zZXF1ZW50QSA9IHRoaXMuY29uc2VxdWVudCwgIC8vL1xuICAgICAgICAgICAgY29uc2VxdWVudFVuaWZpZWQgPSB1bmlmeUNvbnNlcXVlbnRBZ2FpbnN0U3RhdGVtZW50KGNvbnNlcXVlbnRBLCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dEEsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSBjb25zZXF1ZW50VW5pZmllZDsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBtYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMubGFiZWxzLnNvbWUoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBsYWJlbE1hdGNoZXNNZXRhdmFyaWFibGVOb2RlID0gbGFiZWwubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAobGFiZWxNYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtYXRjaGVzTWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGFiZWxzU3VwcG9zaXRpb25zQ29uc2VxdWVudFN1YnN0aXR1dGlvbnNBbmRGaWxlQ29udGV4dChDbGFzcywgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbnQsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0KSB7IHJldHVybiBuZXcgQ2xhc3MobGFiZWxzLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbnQsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0KTsgfVxufVxuIl0sIm5hbWVzIjpbIlRvcExldmVsQXNzZXJ0aW9uIiwibGFiZWxzIiwic3VwcG9zaXRpb25zIiwiY29uc2VxdWVudCIsInN1YnN0aXR1dGlvbnMiLCJmaWxlQ29udGV4dCIsImdldExhYmVscyIsImdldFN1cHBvc2l0aW9ucyIsImdldENvbnNlcXVlbnQiLCJnZXRTdWJzdGl0dXRpb25zIiwiZ2V0RmlsZUNvbnRleHQiLCJ1bmlmeVN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJsb2NhbENvbnRleHQiLCJzdGF0ZW1lbnRVbmlmaWVkIiwiU3Vic3RpdHV0aW9ucyIsImZyb21Ob3RoaW5nIiwicHJvb2ZTdGVwcyIsImdldFByb29mU3RlcHMiLCJwcm9vZlN0ZXBzQiIsImZpbGVDb250ZXh0QSIsInN1cHBvc2l0aW9uc0EiLCJsb2NhbENvbnRleHRCIiwic3VwcG9zaXRpb25zVW5pZmllZCIsInVuaWZ5U3VwcG9zaXRpb25zQWdhaW5zdFByb29mU3RlcHMiLCJjb25zZXF1ZW50QSIsImNvbnNlcXVlbnRVbmlmaWVkIiwidW5pZnlDb25zZXF1ZW50QWdhaW5zdFN0YXRlbWVudCIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJtYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSIsInNvbWUiLCJsYWJlbCIsImxhYmVsTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUiLCJmcm9tTGFiZWxzU3VwcG9zaXRpb25zQ29uc2VxdWVudFN1YnN0aXR1dGlvbnNBbmRGaWxlQ29udGV4dCIsIkNsYXNzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OztvRUFKSztpRkFDa0I7b0ZBQ0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEMsSUFBQSxBQUFNQSxrQ0FBTjthQUFNQSxrQkFDUEMsTUFBTSxFQUFFQyxZQUFZLEVBQUVDLFVBQVUsRUFBRUMsYUFBYSxFQUFFQyxXQUFXO2dDQURyREw7UUFFakIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxZQUFZLEdBQUdBO1FBQ3BCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLGFBQWEsR0FBR0E7UUFDckIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBOztrQkFORkw7O1lBU25CTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLE1BQU07WUFDcEI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLFlBQVk7WUFDMUI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLFVBQVU7WUFDeEI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLGFBQWE7WUFDM0I7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLFdBQVc7WUFDekI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUMsYUFBYSxFQUFFQyxZQUFZO2dCQUN4QyxJQUFJQyxtQkFBbUI7Z0JBRXZCLElBQU1WLGdCQUFnQlcsc0JBQWEsQ0FBQ0MsV0FBVyxJQUN6Q0MsYUFBYUosYUFBYUssYUFBYSxJQUN2Q0MsY0FBY0YsWUFDZEcsZUFBZSxJQUFJLENBQUNmLFdBQVcsRUFDL0JnQixnQkFBZ0IsSUFBSSxDQUFDbkIsWUFBWSxFQUNqQ29CLGdCQUFnQlQsY0FDaEJVLHNCQUFzQkMsSUFBQUEsc0NBQWtDLEVBQUNILGVBQWVGLGFBQWFmLGVBQWVnQixjQUFjRTtnQkFFeEgsSUFBSUMscUJBQXFCO29CQUN2QixJQUFNRSxjQUFjLElBQUksQ0FBQ3RCLFVBQVUsRUFDN0J1QixvQkFBb0JDLElBQUFBLG1DQUErQixFQUFDRixhQUFhYixlQUFlUixlQUFlZ0IsY0FBY1A7b0JBRW5IQyxtQkFBbUJZLG1CQUFvQixHQUFHO2dCQUM1QztnQkFFQSxPQUFPWjtZQUNUOzs7WUFFQWMsS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQkMsZ0JBQWdCO2dCQUNwQyxJQUFNQywwQkFBMEIsSUFBSSxDQUFDN0IsTUFBTSxDQUFDOEIsSUFBSSxDQUFDLFNBQUNDO29CQUNoRCxJQUFNQywrQkFBK0JELE1BQU1KLHFCQUFxQixDQUFDQztvQkFFakUsSUFBSUksOEJBQThCO3dCQUNoQyxPQUFPO29CQUNUO2dCQUNGO2dCQUVBLE9BQU9IO1lBQ1Q7Ozs7WUFFT0ksS0FBQUE7bUJBQVAsU0FBT0EsNERBQTREQyxLQUFLLEVBQUVsQyxNQUFNLEVBQUVDLFlBQVksRUFBRUMsVUFBVSxFQUFFQyxhQUFhLEVBQUVDLFdBQVc7Z0JBQUksT0FBTyxJQUFJOEIsTUFBTWxDLFFBQVFDLGNBQWNDLFlBQVlDLGVBQWVDO1lBQWM7OztXQTlEdk1MIn0=