"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Equality;
    }
});
var _equality = /*#__PURE__*/ _interop_require_default(require("./unifier/equality"));
var _array = require("./utilities/array");
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
var Equality = /*#__PURE__*/ function() {
    function Equality(leftTerm, rightTerm) {
        _class_call_check(this, Equality);
        this.leftTerm = leftTerm;
        this.rightTerm = rightTerm;
    }
    _create_class(Equality, [
        {
            key: "getLeftTerm",
            value: function getLeftTerm() {
                return this.leftTerm;
            }
        },
        {
            key: "getRightTerm",
            value: function getRightTerm() {
                return this.rightTerm;
            }
        },
        {
            key: "isReflexive",
            value: function isReflexive() {
                var leftTermMatchesRightTerm = this.leftTerm.match(this.rightTerm), reflexive = leftTermMatchesRightTerm; ///
                return reflexive;
            }
        },
        {
            key: "isEqual",
            value: function isEqual(localContext) {
                var leftTermNode = this.leftTerm.getNode(), rightTermNode = this.rightTerm.getNode(), equalityUnified = _equality.default.unify(leftTermNode, rightTermNode, localContext), equal = equalityUnified; ///
                return equal;
            }
        }
    ], [
        {
            key: "fromTermsAndEqualityNode",
            value: function fromTermsAndEqualityNode(terms, equalityNode) {
                var equality = null;
                var firstTerm = (0, _array.first)(terms), secondTerm = (0, _array.second)(terms), leftTerm = firstTerm, rightTerm = secondTerm, leftTermType = leftTerm.getType(), rightTermType = rightTerm.getType(), leftTermTypeComparableToRightTermType = leftTermType.isComparableTo(rightTermType);
                if (leftTermTypeComparableToRightTermType) {
                    var node = equalityNode; ///
                    equality = new Equality(node, leftTerm, rightTerm);
                }
                return equality;
            }
        },
        {
            key: "fromLeftTermRightTermAndEqualityNode",
            value: function fromLeftTermRightTermAndEqualityNode(leftTerm, rightTerm, equalityNode) {
                var equality = null;
                var leftTermType = leftTerm.getType(), rightTermType = rightTerm.getType(), leftTermTypeComparableToRightTermType = leftTermType.isComparableTo(rightTermType);
                if (leftTermTypeComparableToRightTermType) {
                    equality = new Equality(leftTerm, rightTerm);
                }
                return equality;
            }
        }
    ]);
    return Equality;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lcXVhbGl0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVxdWFsaXR5VW5pZmllciBmcm9tIFwiLi91bmlmaWVyL2VxdWFsaXR5XCI7XG5cbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXF1YWxpdHkge1xuICBjb25zdHJ1Y3RvcihsZWZ0VGVybSwgcmlnaHRUZXJtKSB7XG4gICAgdGhpcy5sZWZ0VGVybSA9IGxlZnRUZXJtO1xuICAgIHRoaXMucmlnaHRUZXJtID0gcmlnaHRUZXJtO1xuICB9XG5cbiAgZ2V0TGVmdFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFRlcm07XG4gIH1cblxuICBnZXRSaWdodFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMucmlnaHRUZXJtO1xuICB9XG5cbiAgaXNSZWZsZXhpdmUoKSB7XG4gICAgY29uc3QgbGVmdFRlcm1NYXRjaGVzUmlnaHRUZXJtID0gdGhpcy5sZWZ0VGVybS5tYXRjaCh0aGlzLnJpZ2h0VGVybSksXG4gICAgICAgICAgcmVmbGV4aXZlID0gbGVmdFRlcm1NYXRjaGVzUmlnaHRUZXJtOyAvLy9cblxuICAgIHJldHVybiByZWZsZXhpdmU7XG4gIH1cblxuICBpc0VxdWFsKGxvY2FsQ29udGV4dCkge1xuICAgIGNvbnN0IGxlZnRUZXJtTm9kZSA9IHRoaXMubGVmdFRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHJpZ2h0VGVybU5vZGUgPSB0aGlzLnJpZ2h0VGVybS5nZXROb2RlKCksXG4gICAgICAgICAgZXF1YWxpdHlVbmlmaWVkID0gZXF1YWxpdHlVbmlmaWVyLnVuaWZ5KGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICBlcXVhbCA9IGVxdWFsaXR5VW5pZmllZDsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsO1xuICB9XG5cbiAgc3RhdGljIGZyb21UZXJtc0FuZEVxdWFsaXR5Tm9kZSh0ZXJtcywgZXF1YWxpdHlOb2RlKSB7XG4gICAgbGV0IGVxdWFsaXR5ID0gbnVsbDtcblxuICAgIGNvbnN0IGZpcnN0VGVybSA9IGZpcnN0KHRlcm1zKSxcbiAgICAgICAgICBzZWNvbmRUZXJtID0gc2Vjb25kKHRlcm1zKSxcbiAgICAgICAgICBsZWZ0VGVybSA9IGZpcnN0VGVybSwgLy8vXG4gICAgICAgICAgcmlnaHRUZXJtID0gc2Vjb25kVGVybSwgLy8vXG4gICAgICAgICAgbGVmdFRlcm1UeXBlID0gbGVmdFRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgIHJpZ2h0VGVybVR5cGUgPSByaWdodFRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgIGxlZnRUZXJtVHlwZUNvbXBhcmFibGVUb1JpZ2h0VGVybVR5cGUgPSBsZWZ0VGVybVR5cGUuaXNDb21wYXJhYmxlVG8ocmlnaHRUZXJtVHlwZSk7XG5cbiAgICBpZiAobGVmdFRlcm1UeXBlQ29tcGFyYWJsZVRvUmlnaHRUZXJtVHlwZSkge1xuICAgICAgY29uc3Qgbm9kZSA9IGVxdWFsaXR5Tm9kZTsgIC8vL1xuXG4gICAgICBlcXVhbGl0eSA9IG5ldyBFcXVhbGl0eShub2RlLCBsZWZ0VGVybSwgcmlnaHRUZXJtKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWxpdHk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUxlZnRUZXJtUmlnaHRUZXJtQW5kRXF1YWxpdHlOb2RlKGxlZnRUZXJtLCByaWdodFRlcm0sIGVxdWFsaXR5Tm9kZSkge1xuICAgIGxldCBlcXVhbGl0eSA9IG51bGw7XG5cbiAgICBjb25zdCBsZWZ0VGVybVR5cGUgPSBsZWZ0VGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgcmlnaHRUZXJtVHlwZSA9IHJpZ2h0VGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgbGVmdFRlcm1UeXBlQ29tcGFyYWJsZVRvUmlnaHRUZXJtVHlwZSA9IGxlZnRUZXJtVHlwZS5pc0NvbXBhcmFibGVUbyhyaWdodFRlcm1UeXBlKTtcblxuICAgIGlmIChsZWZ0VGVybVR5cGVDb21wYXJhYmxlVG9SaWdodFRlcm1UeXBlKSB7XG4gICAgICBlcXVhbGl0eSA9IG5ldyBFcXVhbGl0eShsZWZ0VGVybSwgcmlnaHRUZXJtKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWxpdHk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJFcXVhbGl0eSIsImxlZnRUZXJtIiwicmlnaHRUZXJtIiwiZ2V0TGVmdFRlcm0iLCJnZXRSaWdodFRlcm0iLCJpc1JlZmxleGl2ZSIsImxlZnRUZXJtTWF0Y2hlc1JpZ2h0VGVybSIsIm1hdGNoIiwicmVmbGV4aXZlIiwiaXNFcXVhbCIsImxvY2FsQ29udGV4dCIsImxlZnRUZXJtTm9kZSIsImdldE5vZGUiLCJyaWdodFRlcm1Ob2RlIiwiZXF1YWxpdHlVbmlmaWVkIiwiZXF1YWxpdHlVbmlmaWVyIiwidW5pZnkiLCJlcXVhbCIsImZyb21UZXJtc0FuZEVxdWFsaXR5Tm9kZSIsInRlcm1zIiwiZXF1YWxpdHlOb2RlIiwiZXF1YWxpdHkiLCJmaXJzdFRlcm0iLCJmaXJzdCIsInNlY29uZFRlcm0iLCJzZWNvbmQiLCJsZWZ0VGVybVR5cGUiLCJnZXRUeXBlIiwicmlnaHRUZXJtVHlwZSIsImxlZnRUZXJtVHlwZUNvbXBhcmFibGVUb1JpZ2h0VGVybVR5cGUiLCJpc0NvbXBhcmFibGVUbyIsIm5vZGUiLCJmcm9tTGVmdFRlcm1SaWdodFRlcm1BbmRFcXVhbGl0eU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7OytEQUpPO3FCQUVFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWYsSUFBQSxBQUFNQSx5QkFBTjthQUFNQSxTQUNQQyxRQUFRLEVBQUVDLFNBQVM7Z0NBRFpGO1FBRWpCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLFNBQVMsR0FBR0E7O2tCQUhBRjs7WUFNbkJHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsUUFBUTtZQUN0Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsU0FBUztZQUN2Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQywyQkFBMkIsSUFBSSxDQUFDTCxRQUFRLENBQUNNLEtBQUssQ0FBQyxJQUFJLENBQUNMLFNBQVMsR0FDN0RNLFlBQVlGLDBCQUEwQixHQUFHO2dCQUUvQyxPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLFlBQVk7Z0JBQ2xCLElBQU1DLGVBQWUsSUFBSSxDQUFDVixRQUFRLENBQUNXLE9BQU8sSUFDcENDLGdCQUFnQixJQUFJLENBQUNYLFNBQVMsQ0FBQ1UsT0FBTyxJQUN0Q0Usa0JBQWtCQyxpQkFBZSxDQUFDQyxLQUFLLENBQUNMLGNBQWNFLGVBQWVILGVBQ3JFTyxRQUFRSCxpQkFBa0IsR0FBRztnQkFFbkMsT0FBT0c7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSx5QkFBeUJDLEtBQUssRUFBRUMsWUFBWTtnQkFDakQsSUFBSUMsV0FBVztnQkFFZixJQUFNQyxZQUFZQyxJQUFBQSxZQUFLLEVBQUNKLFFBQ2xCSyxhQUFhQyxJQUFBQSxhQUFNLEVBQUNOLFFBQ3BCbEIsV0FBV3FCLFdBQ1hwQixZQUFZc0IsWUFDWkUsZUFBZXpCLFNBQVMwQixPQUFPLElBQy9CQyxnQkFBZ0IxQixVQUFVeUIsT0FBTyxJQUNqQ0Usd0NBQXdDSCxhQUFhSSxjQUFjLENBQUNGO2dCQUUxRSxJQUFJQyx1Q0FBdUM7b0JBQ3pDLElBQU1FLE9BQU9YLGNBQWUsR0FBRztvQkFFL0JDLFdBQVcsSUE1Q0lyQixTQTRDUytCLE1BQU05QixVQUFVQztnQkFDMUM7Z0JBRUEsT0FBT21CO1lBQ1Q7OztZQUVPVyxLQUFBQTttQkFBUCxTQUFPQSxxQ0FBcUMvQixRQUFRLEVBQUVDLFNBQVMsRUFBRWtCLFlBQVk7Z0JBQzNFLElBQUlDLFdBQVc7Z0JBRWYsSUFBTUssZUFBZXpCLFNBQVMwQixPQUFPLElBQy9CQyxnQkFBZ0IxQixVQUFVeUIsT0FBTyxJQUNqQ0Usd0NBQXdDSCxhQUFhSSxjQUFjLENBQUNGO2dCQUUxRSxJQUFJQyx1Q0FBdUM7b0JBQ3pDUixXQUFXLElBMURJckIsU0EwRFNDLFVBQVVDO2dCQUNwQztnQkFFQSxPQUFPbUI7WUFDVDs7O1dBOURtQnJCIn0=