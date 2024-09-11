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
                    var node = equalityNode; ///
                    equality = new Equality(node, leftTerm, rightTerm);
                }
                return equality;
            }
        }
    ]);
    return Equality;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lcXVhbGl0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVxdWFsaXR5VW5pZmllciBmcm9tIFwiLi91bmlmaWVyL2VxdWFsaXR5XCI7XG5cbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXF1YWxpdHkge1xuICBjb25zdHJ1Y3Rvcihub2RlLCBsZWZ0VGVybSwgcmlnaHRUZXJtKSB7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLmxlZnRUZXJtID0gbGVmdFRlcm07XG4gICAgdGhpcy5yaWdodFRlcm0gPSByaWdodFRlcm07XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRMZWZ0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0VGVybTtcbiAgfVxuXG4gIGdldFJpZ2h0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy5yaWdodFRlcm07XG4gIH1cblxuICBpc1JlZmxleGl2ZSgpIHtcbiAgICBjb25zdCBsZWZ0VGVybU1hdGNoZXNSaWdodFRlcm0gPSB0aGlzLmxlZnRUZXJtLm1hdGNoKHRoaXMucmlnaHRUZXJtKSxcbiAgICAgICAgICByZWZsZXhpdmUgPSBsZWZ0VGVybU1hdGNoZXNSaWdodFRlcm07IC8vL1xuXG4gICAgcmV0dXJuIHJlZmxleGl2ZTtcbiAgfVxuXG4gIGlzRXF1YWwobG9jYWxDb250ZXh0KSB7XG4gICAgY29uc3QgbGVmdFRlcm1Ob2RlID0gdGhpcy5sZWZ0VGVybS5nZXROb2RlKCksXG4gICAgICAgICAgcmlnaHRUZXJtTm9kZSA9IHRoaXMucmlnaHRUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICBlcXVhbGl0eVVuaWZpZWQgPSBlcXVhbGl0eVVuaWZpZXIudW5pZnkobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgIGVxdWFsID0gZXF1YWxpdHlVbmlmaWVkOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWw7XG4gIH1cblxuICBzdGF0aWMgZnJvbVRlcm1zQW5kRXF1YWxpdHlOb2RlKHRlcm1zLCBlcXVhbGl0eU5vZGUpIHtcbiAgICBsZXQgZXF1YWxpdHkgPSBudWxsO1xuXG4gICAgY29uc3QgZmlyc3RUZXJtID0gZmlyc3QodGVybXMpLFxuICAgICAgICAgIHNlY29uZFRlcm0gPSBzZWNvbmQodGVybXMpLFxuICAgICAgICAgIGxlZnRUZXJtID0gZmlyc3RUZXJtLCAvLy9cbiAgICAgICAgICByaWdodFRlcm0gPSBzZWNvbmRUZXJtLCAvLy9cbiAgICAgICAgICBsZWZ0VGVybVR5cGUgPSBsZWZ0VGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgcmlnaHRUZXJtVHlwZSA9IHJpZ2h0VGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgbGVmdFRlcm1UeXBlQ29tcGFyYWJsZVRvUmlnaHRUZXJtVHlwZSA9IGxlZnRUZXJtVHlwZS5pc0NvbXBhcmFibGVUbyhyaWdodFRlcm1UeXBlKTtcblxuICAgIGlmIChsZWZ0VGVybVR5cGVDb21wYXJhYmxlVG9SaWdodFRlcm1UeXBlKSB7XG4gICAgICBjb25zdCBub2RlID0gZXF1YWxpdHlOb2RlOyAgLy8vXG5cbiAgICAgIGVxdWFsaXR5ID0gbmV3IEVxdWFsaXR5KG5vZGUsIGxlZnRUZXJtLCByaWdodFRlcm0pO1xuICAgIH1cblxuICAgIHJldHVybiBlcXVhbGl0eTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGVmdFRlcm1SaWdodFRlcm1BbmRFcXVhbGl0eU5vZGUobGVmdFRlcm0sIHJpZ2h0VGVybSwgZXF1YWxpdHlOb2RlKSB7XG4gICAgbGV0IGVxdWFsaXR5ID0gbnVsbDtcblxuICAgIGNvbnN0IGxlZnRUZXJtVHlwZSA9IGxlZnRUZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICByaWdodFRlcm1UeXBlID0gcmlnaHRUZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICBsZWZ0VGVybVR5cGVDb21wYXJhYmxlVG9SaWdodFRlcm1UeXBlID0gbGVmdFRlcm1UeXBlLmlzQ29tcGFyYWJsZVRvKHJpZ2h0VGVybVR5cGUpO1xuXG4gICAgaWYgKGxlZnRUZXJtVHlwZUNvbXBhcmFibGVUb1JpZ2h0VGVybVR5cGUpIHtcbiAgICAgIGNvbnN0IG5vZGUgPSBlcXVhbGl0eU5vZGU7ICAvLy9cblxuICAgICAgZXF1YWxpdHkgPSBuZXcgRXF1YWxpdHkobm9kZSwgbGVmdFRlcm0sIHJpZ2h0VGVybSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsaXR5O1xuICB9XG59XG4iXSwibmFtZXMiOlsiRXF1YWxpdHkiLCJub2RlIiwibGVmdFRlcm0iLCJyaWdodFRlcm0iLCJnZXROb2RlIiwiZ2V0TGVmdFRlcm0iLCJnZXRSaWdodFRlcm0iLCJpc1JlZmxleGl2ZSIsImxlZnRUZXJtTWF0Y2hlc1JpZ2h0VGVybSIsIm1hdGNoIiwicmVmbGV4aXZlIiwiaXNFcXVhbCIsImxvY2FsQ29udGV4dCIsImxlZnRUZXJtTm9kZSIsInJpZ2h0VGVybU5vZGUiLCJlcXVhbGl0eVVuaWZpZWQiLCJlcXVhbGl0eVVuaWZpZXIiLCJ1bmlmeSIsImVxdWFsIiwiZnJvbVRlcm1zQW5kRXF1YWxpdHlOb2RlIiwidGVybXMiLCJlcXVhbGl0eU5vZGUiLCJlcXVhbGl0eSIsImZpcnN0VGVybSIsImZpcnN0Iiwic2Vjb25kVGVybSIsInNlY29uZCIsImxlZnRUZXJtVHlwZSIsImdldFR5cGUiLCJyaWdodFRlcm1UeXBlIiwibGVmdFRlcm1UeXBlQ29tcGFyYWJsZVRvUmlnaHRUZXJtVHlwZSIsImlzQ29tcGFyYWJsZVRvIiwiZnJvbUxlZnRUZXJtUmlnaHRUZXJtQW5kRXF1YWxpdHlOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OzsrREFKTztxQkFFRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVmLElBQUEsQUFBTUEseUJBQU47YUFBTUEsU0FDUEMsSUFBSSxFQUFFQyxRQUFRLEVBQUVDLFNBQVM7Z0NBRGxCSDtRQUVqQixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBOztrQkFKQUg7O1lBT25CSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFFBQVE7WUFDdEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFNBQVM7WUFDdkI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsMkJBQTJCLElBQUksQ0FBQ04sUUFBUSxDQUFDTyxLQUFLLENBQUMsSUFBSSxDQUFDTixTQUFTLEdBQzdETyxZQUFZRiwwQkFBMEIsR0FBRztnQkFFL0MsT0FBT0U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxZQUFZO2dCQUNsQixJQUFNQyxlQUFlLElBQUksQ0FBQ1gsUUFBUSxDQUFDRSxPQUFPLElBQ3BDVSxnQkFBZ0IsSUFBSSxDQUFDWCxTQUFTLENBQUNDLE9BQU8sSUFDdENXLGtCQUFrQkMsaUJBQWUsQ0FBQ0MsS0FBSyxDQUFDSixjQUFjQyxlQUFlRixlQUNyRU0sUUFBUUgsaUJBQWtCLEdBQUc7Z0JBRW5DLE9BQU9HO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EseUJBQXlCQyxLQUFLLEVBQUVDLFlBQVk7Z0JBQ2pELElBQUlDLFdBQVc7Z0JBRWYsSUFBTUMsWUFBWUMsSUFBQUEsWUFBSyxFQUFDSixRQUNsQkssYUFBYUMsSUFBQUEsYUFBTSxFQUFDTixRQUNwQmxCLFdBQVdxQixXQUNYcEIsWUFBWXNCLFlBQ1pFLGVBQWV6QixTQUFTMEIsT0FBTyxJQUMvQkMsZ0JBQWdCMUIsVUFBVXlCLE9BQU8sSUFDakNFLHdDQUF3Q0gsYUFBYUksY0FBYyxDQUFDRjtnQkFFMUUsSUFBSUMsdUNBQXVDO29CQUN6QyxJQUFNN0IsT0FBT29CLGNBQWUsR0FBRztvQkFFL0JDLFdBQVcsSUFqREl0QixTQWlEU0MsTUFBTUMsVUFBVUM7Z0JBQzFDO2dCQUVBLE9BQU9tQjtZQUNUOzs7WUFFT1UsS0FBQUE7bUJBQVAsU0FBT0EscUNBQXFDOUIsUUFBUSxFQUFFQyxTQUFTLEVBQUVrQixZQUFZO2dCQUMzRSxJQUFJQyxXQUFXO2dCQUVmLElBQU1LLGVBQWV6QixTQUFTMEIsT0FBTyxJQUMvQkMsZ0JBQWdCMUIsVUFBVXlCLE9BQU8sSUFDakNFLHdDQUF3Q0gsYUFBYUksY0FBYyxDQUFDRjtnQkFFMUUsSUFBSUMsdUNBQXVDO29CQUN6QyxJQUFNN0IsT0FBT29CLGNBQWUsR0FBRztvQkFFL0JDLFdBQVcsSUFqRUl0QixTQWlFU0MsTUFBTUMsVUFBVUM7Z0JBQzFDO2dCQUVBLE9BQU9tQjtZQUNUOzs7V0FyRW1CdEIifQ==