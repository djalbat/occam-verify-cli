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
                var leftTerm = this.getLeftTerm(), rightTerm = this.getRightTerm(), leftTermNode = leftTerm.getNode(), rightTermNode = rightTerm.getNode(), nonTerminalNodeA = leftTermNode, nonTerminalNodeB = rightTermNode, collections = context.getCollections(), localContext = this, nonTerminalNodeVerified = _equality.default.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, collections, localContext, function() {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lcXVhbGl0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVxdWFsaXR5Tm9kZXNWZXJpZmllciBmcm9tIFwiLi92ZXJpZmllci9ub2Rlcy9lcXVhbGl0eVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcXVhbGl0eSB7XG4gIGNvbnN0cnVjdG9yKG5vZGUsIGxlZnRUZXJtLCByaWdodFRlcm0pIHtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMubGVmdFRlcm0gPSBsZWZ0VGVybTtcbiAgICB0aGlzLnJpZ2h0VGVybSA9IHJpZ2h0VGVybTtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldExlZnRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnRUZXJtO1xuICB9XG5cbiAgZ2V0UmlnaHRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnJpZ2h0VGVybTtcbiAgfVxuXG4gIGlzUmVmbGV4aXZlKCkge1xuICAgIGNvbnN0IGxlZnRUZXJtTWF0Y2hlc1JpZ2h0VGVybSA9IHRoaXMubGVmdFRlcm0ubWF0Y2godGhpcy5yaWdodFRlcm0pLFxuICAgICAgICAgIHJlZmxleGl2ZSA9IGxlZnRUZXJtTWF0Y2hlc1JpZ2h0VGVybTsgLy8vXG5cbiAgICByZXR1cm4gcmVmbGV4aXZlO1xuICB9XG5cbiAgaXNFcXVhbChjb250ZXh0KSB7XG4gICAgY29uc3QgbGVmdFRlcm0gPSB0aGlzLmdldExlZnRUZXJtKCksXG4gICAgICAgICAgcmlnaHRUZXJtID0gdGhpcy5nZXRSaWdodFRlcm0oKSxcbiAgICAgICAgICBsZWZ0VGVybU5vZGUgPSBsZWZ0VGVybS5nZXROb2RlKCksXG4gICAgICAgICAgcmlnaHRUZXJtTm9kZSA9IHJpZ2h0VGVybS5nZXROb2RlKCksXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlQSA9IGxlZnRUZXJtTm9kZSwgIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSByaWdodFRlcm1Ob2RlLCAvLy9cbiAgICAgICAgICBjb2xsZWN0aW9ucyA9IGNvbnRleHQuZ2V0Q29sbGVjdGlvbnMoKSxcbiAgICAgICAgICBsb2NhbENvbnRleHQgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBlcXVhbGl0eU5vZGVzVmVyaWZpZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIGNvbGxlY3Rpb25zLCBsb2NhbENvbnRleHQsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBlcXVhbCA9IG5vblRlcm1pbmFsTm9kZVZlcmlmaWVkOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWw7XG4gIH1cblxuICBzdGF0aWMgZnJvbUxlZnRUZXJtUmlnaHRUZXJtQW5kRXF1YWxpdHlOb2RlKGxlZnRUZXJtLCByaWdodFRlcm0sIGVxdWFsaXR5Tm9kZSkge1xuICAgIGxldCBlcXVhbGl0eSA9IG51bGw7XG5cbiAgICBjb25zdCBsZWZ0VGVybVR5cGUgPSBsZWZ0VGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgcmlnaHRUZXJtVHlwZSA9IHJpZ2h0VGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgbGVmdFRlcm1UeXBlQ29tcGFyYWJsZVRvUmlnaHRUZXJtVHlwZSA9IGxlZnRUZXJtVHlwZS5pc0NvbXBhcmFibGVUbyhyaWdodFRlcm1UeXBlKTtcblxuICAgIGlmIChsZWZ0VGVybVR5cGVDb21wYXJhYmxlVG9SaWdodFRlcm1UeXBlKSB7XG4gICAgICBjb25zdCBub2RlID0gZXF1YWxpdHlOb2RlOyAgLy8vXG5cbiAgICAgIGVxdWFsaXR5ID0gbmV3IEVxdWFsaXR5KG5vZGUsIGxlZnRUZXJtLCByaWdodFRlcm0pO1xuICAgIH1cblxuICAgIHJldHVybiBlcXVhbGl0eTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkVxdWFsaXR5Iiwibm9kZSIsImxlZnRUZXJtIiwicmlnaHRUZXJtIiwiZ2V0Tm9kZSIsImdldExlZnRUZXJtIiwiZ2V0UmlnaHRUZXJtIiwiaXNSZWZsZXhpdmUiLCJsZWZ0VGVybU1hdGNoZXNSaWdodFRlcm0iLCJtYXRjaCIsInJlZmxleGl2ZSIsImlzRXF1YWwiLCJjb250ZXh0IiwibGVmdFRlcm1Ob2RlIiwicmlnaHRUZXJtTm9kZSIsIm5vblRlcm1pbmFsTm9kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwiY29sbGVjdGlvbnMiLCJnZXRDb2xsZWN0aW9ucyIsImxvY2FsQ29udGV4dCIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwiZXF1YWxpdHlOb2Rlc1ZlcmlmaWVyIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwidmVyaWZpZWRBaGVhZCIsImVxdWFsIiwiZnJvbUxlZnRUZXJtUmlnaHRUZXJtQW5kRXF1YWxpdHlOb2RlIiwiZXF1YWxpdHlOb2RlIiwiZXF1YWxpdHkiLCJsZWZ0VGVybVR5cGUiLCJnZXRUeXBlIiwicmlnaHRUZXJtVHlwZSIsImxlZnRUZXJtVHlwZUNvbXBhcmFibGVUb1JpZ2h0VGVybVR5cGUiLCJpc0NvbXBhcmFibGVUbyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7K0RBRmE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkIsSUFBQSxBQUFNQSx5QkFBRCxBQUFMO2FBQU1BLFNBQ1BDLElBQUksRUFBRUMsUUFBUSxFQUFFQyxTQUFTO2dDQURsQkg7UUFFakIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTs7a0JBSkFIOztZQU9uQkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxJQUFJO1lBQ2xCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxRQUFRO1lBQ3RCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxTQUFTO1lBQ3ZCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLDJCQUEyQixJQUFJLENBQUNOLFFBQVEsQ0FBQ08sS0FBSyxDQUFDLElBQUksQ0FBQ04sU0FBUyxHQUM3RE8sWUFBWUYsMEJBQTBCLEdBQUc7Z0JBRS9DLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsT0FBTztnQkFDYixJQUFNVixXQUFXLElBQUksQ0FBQ0csV0FBVyxJQUMzQkYsWUFBWSxJQUFJLENBQUNHLFlBQVksSUFDN0JPLGVBQWVYLFNBQVNFLE9BQU8sSUFDL0JVLGdCQUFnQlgsVUFBVUMsT0FBTyxJQUNqQ1csbUJBQW1CRixjQUNuQkcsbUJBQW1CRixlQUNuQkcsY0FBY0wsUUFBUU0sY0FBYyxJQUNwQ0MsZUFBZSxJQUFJLEVBQ25CQywwQkFBMEJDLGlCQUFxQixDQUFDQyxxQkFBcUIsQ0FBQ1Asa0JBQWtCQyxrQkFBa0JDLGFBQWFFLGNBQWM7b0JBQ25JLElBQU1JLGdCQUFnQjtvQkFFdEIsT0FBT0E7Z0JBQ1QsSUFDQUMsUUFBUUoseUJBQTBCLEdBQUc7Z0JBRTNDLE9BQU9JO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EscUNBQXFDdkIsUUFBUSxFQUFFQyxTQUFTLEVBQUV1QixZQUFZO2dCQUMzRSxJQUFJQyxXQUFXO2dCQUVmLElBQU1DLGVBQWUxQixTQUFTMkIsT0FBTyxJQUMvQkMsZ0JBQWdCM0IsVUFBVTBCLE9BQU8sSUFDakNFLHdDQUF3Q0gsYUFBYUksY0FBYyxDQUFDRjtnQkFFMUUsSUFBSUMsdUNBQXVDO29CQUN6QyxJQUFNOUIsT0FBT3lCLGNBQWUsR0FBRztvQkFFL0JDLFdBQVcsSUF2REkzQixTQXVEU0MsTUFBTUMsVUFBVUM7Z0JBQzFDO2dCQUVBLE9BQU93QjtZQUNUOzs7V0EzRG1CM0IifQ==