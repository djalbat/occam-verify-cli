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
var _equality = /*#__PURE__*/ _interop_require_default(require("./verifier/nodes/equality"));
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
    function Equality(node, leftTerm, rightTerm) {
        _class_call_check(this, Equality);
        this.node = node;
        this.leftTerm = leftTerm;
        this.rightTerm = rightTerm;
    }
    _create_class(Equality, [
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        },
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
            value: function isEqual(context) {
                var leftTerm = this.getLeftTerm(), rightTerm = this.getRightTerm(), leftTermNode = leftTerm.getNode(), rightTermNode = rightTerm.getNode(), nonTerminalNodeA = leftTermNode, nonTerminalNodeB = rightTermNode, equivalences = context.getEquivalences(), localContext = this, nonTerminalNodeVerified = _equality.default.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, equivalences, localContext, function() {
                    var verifiedAhead = true;
                    return verifiedAhead;
                }), equal = nonTerminalNodeVerified; ///
                return equal;
            }
        }
    ], [
        {
            key: "fromLeftTermRightTermAndEqualityNode",
            value: function fromLeftTermRightTermAndEqualityNode(leftTerm, rightTerm, equalityNode) {
                var equality = null;
                var leftTermType = leftTerm.getType(), rightTermType = rightTerm.getType(), leftTermTypeComparableToRightTermType = leftTermType.isComparableTo(rightTermType);
                if (leftTermTypeComparableToRightTermType) {
                    var node = equalityNode; ///
                    equality = new Equality(node, leftTerm, rightTerm);
                }
                return equality;
            }
        }
    ]);
    return Equality;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lcXVhbGl0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVxdWFsaXR5Tm9kZXNWZXJpZmllciBmcm9tIFwiLi92ZXJpZmllci9ub2Rlcy9lcXVhbGl0eVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcXVhbGl0eSB7XG4gIGNvbnN0cnVjdG9yKG5vZGUsIGxlZnRUZXJtLCByaWdodFRlcm0pIHtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMubGVmdFRlcm0gPSBsZWZ0VGVybTtcbiAgICB0aGlzLnJpZ2h0VGVybSA9IHJpZ2h0VGVybTtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldExlZnRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnRUZXJtO1xuICB9XG5cbiAgZ2V0UmlnaHRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnJpZ2h0VGVybTtcbiAgfVxuXG4gIGlzUmVmbGV4aXZlKCkge1xuICAgIGNvbnN0IGxlZnRUZXJtTWF0Y2hlc1JpZ2h0VGVybSA9IHRoaXMubGVmdFRlcm0ubWF0Y2godGhpcy5yaWdodFRlcm0pLFxuICAgICAgICAgIHJlZmxleGl2ZSA9IGxlZnRUZXJtTWF0Y2hlc1JpZ2h0VGVybTsgLy8vXG5cbiAgICByZXR1cm4gcmVmbGV4aXZlO1xuICB9XG5cbiAgaXNFcXVhbChjb250ZXh0KSB7XG4gICAgY29uc3QgbGVmdFRlcm0gPSB0aGlzLmdldExlZnRUZXJtKCksXG4gICAgICAgICAgcmlnaHRUZXJtID0gdGhpcy5nZXRSaWdodFRlcm0oKSxcbiAgICAgICAgICBsZWZ0VGVybU5vZGUgPSBsZWZ0VGVybS5nZXROb2RlKCksXG4gICAgICAgICAgcmlnaHRUZXJtTm9kZSA9IHJpZ2h0VGVybS5nZXROb2RlKCksXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlQSA9IGxlZnRUZXJtTm9kZSwgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSByaWdodFRlcm1Ob2RlLCAvLy9cbiAgICAgICAgICBlcXVpdmFsZW5jZXMgPSBjb250ZXh0LmdldEVxdWl2YWxlbmNlcygpLFxuICAgICAgICAgIGxvY2FsQ29udGV4dCA9IHRoaXMsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IGVxdWFsaXR5Tm9kZXNWZXJpZmllci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlQSwgbm9uVGVybWluYWxOb2RlQiwgZXF1aXZhbGVuY2VzLCBsb2NhbENvbnRleHQsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBlcXVhbCA9IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWw7XG4gIH1cblxuICBzdGF0aWMgZnJvbUxlZnRUZXJtUmlnaHRUZXJtQW5kRXF1YWxpdHlOb2RlKGxlZnRUZXJtLCByaWdodFRlcm0sIGVxdWFsaXR5Tm9kZSkge1xuICAgIGxldCBlcXVhbGl0eSA9IG51bGw7XG5cbiAgICBjb25zdCBsZWZ0VGVybVR5cGUgPSBsZWZ0VGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgcmlnaHRUZXJtVHlwZSA9IHJpZ2h0VGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgbGVmdFRlcm1UeXBlQ29tcGFyYWJsZVRvUmlnaHRUZXJtVHlwZSA9IGxlZnRUZXJtVHlwZS5pc0NvbXBhcmFibGVUbyhyaWdodFRlcm1UeXBlKTtcblxuICAgIGlmIChsZWZ0VGVybVR5cGVDb21wYXJhYmxlVG9SaWdodFRlcm1UeXBlKSB7XG4gICAgICBjb25zdCBub2RlID0gZXF1YWxpdHlOb2RlOyAgLy8vXG5cbiAgICAgIGVxdWFsaXR5ID0gbmV3IEVxdWFsaXR5KG5vZGUsIGxlZnRUZXJtLCByaWdodFRlcm0pO1xuICAgIH1cblxuICAgIHJldHVybiBlcXVhbGl0eTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkVxdWFsaXR5Iiwibm9kZSIsImxlZnRUZXJtIiwicmlnaHRUZXJtIiwiZ2V0Tm9kZSIsImdldExlZnRUZXJtIiwiZ2V0UmlnaHRUZXJtIiwiaXNSZWZsZXhpdmUiLCJsZWZ0VGVybU1hdGNoZXNSaWdodFRlcm0iLCJtYXRjaCIsInJlZmxleGl2ZSIsImlzRXF1YWwiLCJjb250ZXh0IiwibGVmdFRlcm1Ob2RlIiwicmlnaHRUZXJtTm9kZSIsIm5vblRlcm1pbmFsTm9kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwiZXF1aXZhbGVuY2VzIiwiZ2V0RXF1aXZhbGVuY2VzIiwibG9jYWxDb250ZXh0Iiwibm9uVGVybWluYWxOb2RlVmVyaWZpZWQiLCJlcXVhbGl0eU5vZGVzVmVyaWZpZXIiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJ2ZXJpZmllZEFoZWFkIiwiZXF1YWwiLCJmcm9tTGVmdFRlcm1SaWdodFRlcm1BbmRFcXVhbGl0eU5vZGUiLCJlcXVhbGl0eU5vZGUiLCJlcXVhbGl0eSIsImxlZnRUZXJtVHlwZSIsImdldFR5cGUiLCJyaWdodFRlcm1UeXBlIiwibGVmdFRlcm1UeXBlQ29tcGFyYWJsZVRvUmlnaHRUZXJtVHlwZSIsImlzQ29tcGFyYWJsZVRvIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OzsrREFGYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuQixJQUFBLEFBQU1BLHlCQUFELEFBQUw7YUFBTUEsU0FDUEMsSUFBSSxFQUFFQyxRQUFRLEVBQUVDLFNBQVM7Z0NBRGxCSDtRQUVqQixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBOztrQkFKQUg7O1lBT25CSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFFBQVE7WUFDdEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFNBQVM7WUFDdkI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsMkJBQTJCLElBQUksQ0FBQ04sUUFBUSxDQUFDTyxLQUFLLENBQUMsSUFBSSxDQUFDTixTQUFTLEdBQzdETyxZQUFZRiwwQkFBMEIsR0FBRztnQkFFL0MsT0FBT0U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxPQUFPO2dCQUNiLElBQU1WLFdBQVcsSUFBSSxDQUFDRyxXQUFXLElBQzNCRixZQUFZLElBQUksQ0FBQ0csWUFBWSxJQUM3Qk8sZUFBZVgsU0FBU0UsT0FBTyxJQUMvQlUsZ0JBQWdCWCxVQUFVQyxPQUFPLElBQ2pDVyxtQkFBbUJGLGNBQ25CRyxtQkFBbUJGLGVBQ25CRyxlQUFlTCxRQUFRTSxlQUFlLElBQ3RDQyxlQUFlLElBQUksRUFDbkJDLDBCQUEwQkMsaUJBQXFCLENBQUNDLHFCQUFxQixDQUFDUCxrQkFBa0JDLGtCQUFrQkMsY0FBY0UsY0FBYztvQkFDcEksSUFBTUksZ0JBQWdCO29CQUV0QixPQUFPQTtnQkFDVCxJQUNBQyxRQUFRSix5QkFBMEIsR0FBRztnQkFFM0MsT0FBT0k7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxxQ0FBcUN2QixRQUFRLEVBQUVDLFNBQVMsRUFBRXVCLFlBQVk7Z0JBQzNFLElBQUlDLFdBQVc7Z0JBRWYsSUFBTUMsZUFBZTFCLFNBQVMyQixPQUFPLElBQy9CQyxnQkFBZ0IzQixVQUFVMEIsT0FBTyxJQUNqQ0Usd0NBQXdDSCxhQUFhSSxjQUFjLENBQUNGO2dCQUUxRSxJQUFJQyx1Q0FBdUM7b0JBQ3pDLElBQU05QixPQUFPeUIsY0FBZSxHQUFHO29CQUUvQkMsV0FBVyxJQXZESTNCLFNBdURTQyxNQUFNQyxVQUFVQztnQkFDMUM7Z0JBRUEsT0FBT3dCO1lBQ1Q7OztXQTNEbUIzQiJ9