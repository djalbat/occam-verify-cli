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
            value: function isEqual(localContext) {
                var leftTermNode = this.leftTerm.getNode(), rightTermNode = this.rightTerm.getNode(), nonTerminalNodeA = leftTermNode, nonTerminalNodeB = rightTermNode, nonTerminalNodeVerified = _equality.default.verifyNonTerminalNode(nonTerminalNodeA, nonTerminalNodeB, localContext, function() {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lcXVhbGl0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVxdWFsaXR5Tm9kZXNWZXJpZmllciBmcm9tIFwiLi92ZXJpZmllci9ub2Rlcy9lcXVhbGl0eVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcXVhbGl0eSB7XG4gIGNvbnN0cnVjdG9yKG5vZGUsIGxlZnRUZXJtLCByaWdodFRlcm0pIHtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMubGVmdFRlcm0gPSBsZWZ0VGVybTtcbiAgICB0aGlzLnJpZ2h0VGVybSA9IHJpZ2h0VGVybTtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldExlZnRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnRUZXJtO1xuICB9XG5cbiAgZ2V0UmlnaHRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnJpZ2h0VGVybTtcbiAgfVxuXG4gIGlzUmVmbGV4aXZlKCkge1xuICAgIGNvbnN0IGxlZnRUZXJtTWF0Y2hlc1JpZ2h0VGVybSA9IHRoaXMubGVmdFRlcm0ubWF0Y2godGhpcy5yaWdodFRlcm0pLFxuICAgICAgICAgIHJlZmxleGl2ZSA9IGxlZnRUZXJtTWF0Y2hlc1JpZ2h0VGVybTsgLy8vXG5cbiAgICByZXR1cm4gcmVmbGV4aXZlO1xuICB9XG5cbiAgaXNFcXVhbChsb2NhbENvbnRleHQpIHtcbiAgICBjb25zdCBsZWZ0VGVybU5vZGUgPSB0aGlzLmxlZnRUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICByaWdodFRlcm1Ob2RlID0gdGhpcy5yaWdodFRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZUEgPSBsZWZ0VGVybU5vZGUsICAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gcmlnaHRUZXJtTm9kZSwgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlVmVyaWZpZWQgPSBlcXVhbGl0eU5vZGVzVmVyaWZpZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTm9kZUEsIG5vblRlcm1pbmFsTm9kZUIsIGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGVxdWFsID0gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7ICAvLy9cblxuICAgIHJldHVybiBlcXVhbDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGVmdFRlcm1SaWdodFRlcm1BbmRFcXVhbGl0eU5vZGUobGVmdFRlcm0sIHJpZ2h0VGVybSwgZXF1YWxpdHlOb2RlKSB7XG4gICAgbGV0IGVxdWFsaXR5ID0gbnVsbDtcblxuICAgIGNvbnN0IGxlZnRUZXJtVHlwZSA9IGxlZnRUZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICByaWdodFRlcm1UeXBlID0gcmlnaHRUZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICBsZWZ0VGVybVR5cGVDb21wYXJhYmxlVG9SaWdodFRlcm1UeXBlID0gbGVmdFRlcm1UeXBlLmlzQ29tcGFyYWJsZVRvKHJpZ2h0VGVybVR5cGUpO1xuXG4gICAgaWYgKGxlZnRUZXJtVHlwZUNvbXBhcmFibGVUb1JpZ2h0VGVybVR5cGUpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBlcXVhbGl0eU5vZGU7ICAvLy9cblxuICAgICAgZXF1YWxpdHkgPSBuZXcgRXF1YWxpdHkobm9kZSwgbGVmdFRlcm0sIHJpZ2h0VGVybSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsaXR5O1xuICB9XG59XG4iXSwibmFtZXMiOlsiRXF1YWxpdHkiLCJub2RlIiwibGVmdFRlcm0iLCJyaWdodFRlcm0iLCJnZXROb2RlIiwiZ2V0TGVmdFRlcm0iLCJnZXRSaWdodFRlcm0iLCJpc1JlZmxleGl2ZSIsImxlZnRUZXJtTWF0Y2hlc1JpZ2h0VGVybSIsIm1hdGNoIiwicmVmbGV4aXZlIiwiaXNFcXVhbCIsImxvY2FsQ29udGV4dCIsImxlZnRUZXJtTm9kZSIsInJpZ2h0VGVybU5vZGUiLCJub25UZXJtaW5hbE5vZGVBIiwibm9uVGVybWluYWxOb2RlQiIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwiZXF1YWxpdHlOb2Rlc1ZlcmlmaWVyIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwidmVyaWZpZWRBaGVhZCIsImVxdWFsIiwiZnJvbUxlZnRUZXJtUmlnaHRUZXJtQW5kRXF1YWxpdHlOb2RlIiwiZXF1YWxpdHlOb2RlIiwiZXF1YWxpdHkiLCJsZWZ0VGVybVR5cGUiLCJnZXRUeXBlIiwicmlnaHRUZXJtVHlwZSIsImxlZnRUZXJtVHlwZUNvbXBhcmFibGVUb1JpZ2h0VGVybVR5cGUiLCJpc0NvbXBhcmFibGVUbyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7K0RBRmE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkIsSUFBQSxBQUFNQSx5QkFBRCxBQUFMO2FBQU1BLFNBQ1BDLElBQUksRUFBRUMsUUFBUSxFQUFFQyxTQUFTO2dDQURsQkg7UUFFakIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTs7a0JBSkFIOztZQU9uQkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxJQUFJO1lBQ2xCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxRQUFRO1lBQ3RCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxTQUFTO1lBQ3ZCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLDJCQUEyQixJQUFJLENBQUNOLFFBQVEsQ0FBQ08sS0FBSyxDQUFDLElBQUksQ0FBQ04sU0FBUyxHQUM3RE8sWUFBWUYsMEJBQTBCLEdBQUc7Z0JBRS9DLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsWUFBWTtnQkFDbEIsSUFBTUMsZUFBZSxJQUFJLENBQUNYLFFBQVEsQ0FBQ0UsT0FBTyxJQUNwQ1UsZ0JBQWdCLElBQUksQ0FBQ1gsU0FBUyxDQUFDQyxPQUFPLElBQ3RDVyxtQkFBbUJGLGNBQ25CRyxtQkFBbUJGLGVBQ25CRywwQkFBMEJDLGlCQUFxQixDQUFDQyxxQkFBcUIsQ0FBQ0osa0JBQWtCQyxrQkFBa0JKLGNBQWM7b0JBQ3RILElBQU1RLGdCQUFnQjtvQkFFdEIsT0FBT0E7Z0JBQ1QsSUFDQUMsUUFBUUoseUJBQTBCLEdBQUc7Z0JBRTNDLE9BQU9JO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EscUNBQXFDcEIsUUFBUSxFQUFFQyxTQUFTLEVBQUVvQixZQUFZO2dCQUMzRSxJQUFJQyxXQUFXO2dCQUVmLElBQU1DLGVBQWV2QixTQUFTd0IsT0FBTyxJQUMvQkMsZ0JBQWdCeEIsVUFBVXVCLE9BQU8sSUFDakNFLHdDQUF3Q0gsYUFBYUksY0FBYyxDQUFDRjtnQkFFMUUsSUFBSUMsdUNBQXVDO29CQUN6QyxJQUFNM0IsT0FBT3NCLGNBQWUsR0FBRztvQkFFL0JDLFdBQVcsSUFuREl4QixTQW1EU0MsTUFBTUMsVUFBVUM7Z0JBQzFDO2dCQUVBLE9BQU9xQjtZQUNUOzs7V0F2RG1CeEIifQ==