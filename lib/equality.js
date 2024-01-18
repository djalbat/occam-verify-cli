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
                var leftTermMatchesRightTerm = this.leftTerm.match(this.rightTerm), reflexive = leftTermMatchesRightTerm;
                return reflexive;
            }
        }
    ], [
        {
            key: "fromEqualityNodeLeftTermAndRightTerm",
            value: function fromEqualityNodeLeftTermAndRightTerm(equalityNode, leftTerm, rightTerm) {
                var equality = null;
                var leftTermType = leftTerm.getType(), rightTermType = rightTerm.getType(), leftTermTypeEqualToSubTypeOfOrSuperTypeOfRightTermType = leftTermType.isEqualToSubTypeOfOrSuperTypeOf(rightTermType);
                if (leftTermTypeEqualToSubTypeOfOrSuperTypeOfRightTermType) {
                    var node = equalityNode; ///
                    equality = new Equality(node, leftTerm, rightTerm);
                }
                return equality;
            }
        }
    ]);
    return Equality;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lcXVhbGl0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXF1YWxpdHkge1xuICBjb25zdHJ1Y3Rvcihub2RlLCBsZWZ0VGVybSwgcmlnaHRUZXJtKSB7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLmxlZnRUZXJtID0gbGVmdFRlcm07XG4gICAgdGhpcy5yaWdodFRlcm0gPSByaWdodFRlcm07XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRMZWZ0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0VGVybTtcbiAgfVxuXG4gIGdldFJpZ2h0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy5yaWdodFRlcm07XG4gIH1cblxuICBpc1JlZmxleGl2ZSgpIHtcbiAgICBjb25zdCBsZWZ0VGVybU1hdGNoZXNSaWdodFRlcm0gPSB0aGlzLmxlZnRUZXJtLm1hdGNoKHRoaXMucmlnaHRUZXJtKSxcbiAgICAgICAgICByZWZsZXhpdmUgPSBsZWZ0VGVybU1hdGNoZXNSaWdodFRlcm07XG5cbiAgICByZXR1cm4gcmVmbGV4aXZlO1xuICB9XG5cbiAgc3RhdGljIGZyb21FcXVhbGl0eU5vZGVMZWZ0VGVybUFuZFJpZ2h0VGVybShlcXVhbGl0eU5vZGUsIGxlZnRUZXJtLCByaWdodFRlcm0pIHtcbiAgICBsZXQgZXF1YWxpdHkgPSBudWxsO1xuXG4gICAgY29uc3QgbGVmdFRlcm1UeXBlID0gbGVmdFRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgIHJpZ2h0VGVybVR5cGUgPSByaWdodFRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgIGxlZnRUZXJtVHlwZUVxdWFsVG9TdWJUeXBlT2ZPclN1cGVyVHlwZU9mUmlnaHRUZXJtVHlwZSA9IGxlZnRUZXJtVHlwZS5pc0VxdWFsVG9TdWJUeXBlT2ZPclN1cGVyVHlwZU9mKHJpZ2h0VGVybVR5cGUpO1xuXG4gICAgaWYgKGxlZnRUZXJtVHlwZUVxdWFsVG9TdWJUeXBlT2ZPclN1cGVyVHlwZU9mUmlnaHRUZXJtVHlwZSkge1xuICAgICAgY29uc3Qgbm9kZSA9IGVxdWFsaXR5Tm9kZTsgIC8vL1xuXG4gICAgICBlcXVhbGl0eSA9IG5ldyBFcXVhbGl0eShub2RlLCBsZWZ0VGVybSwgcmlnaHRUZXJtKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWxpdHk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJFcXVhbGl0eSIsIm5vZGUiLCJsZWZ0VGVybSIsInJpZ2h0VGVybSIsImdldE5vZGUiLCJnZXRMZWZ0VGVybSIsImdldFJpZ2h0VGVybSIsImlzUmVmbGV4aXZlIiwibGVmdFRlcm1NYXRjaGVzUmlnaHRUZXJtIiwibWF0Y2giLCJyZWZsZXhpdmUiLCJmcm9tRXF1YWxpdHlOb2RlTGVmdFRlcm1BbmRSaWdodFRlcm0iLCJlcXVhbGl0eU5vZGUiLCJlcXVhbGl0eSIsImxlZnRUZXJtVHlwZSIsImdldFR5cGUiLCJyaWdodFRlcm1UeXBlIiwibGVmdFRlcm1UeXBlRXF1YWxUb1N1YlR5cGVPZk9yU3VwZXJUeXBlT2ZSaWdodFRlcm1UeXBlIiwiaXNFcXVhbFRvU3ViVHlwZU9mT3JTdXBlclR5cGVPZiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFFcUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU4sSUFBQSxBQUFNQSx5QkFBRCxBQUFMO2FBQU1BLFNBQ1BDLElBQUksRUFBRUMsUUFBUSxFQUFFQyxTQUFTO2dDQURsQkg7UUFFakIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTs7a0JBSkFIOztZQU9uQkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxJQUFJO1lBQ2xCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxRQUFRO1lBQ3RCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxTQUFTO1lBQ3ZCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLDJCQUEyQixJQUFJLENBQUNOLFFBQVEsQ0FBQ08sS0FBSyxDQUFDLElBQUksQ0FBQ04sU0FBUyxHQUM3RE8sWUFBWUY7Z0JBRWxCLE9BQU9FO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EscUNBQXFDQyxZQUFZLEVBQUVWLFFBQVEsRUFBRUMsU0FBUztnQkFDM0UsSUFBSVUsV0FBVztnQkFFZixJQUFNQyxlQUFlWixTQUFTYSxPQUFPLElBQy9CQyxnQkFBZ0JiLFVBQVVZLE9BQU8sSUFDakNFLHlEQUF5REgsYUFBYUksK0JBQStCLENBQUNGO2dCQUU1RyxJQUFJQyx3REFBd0Q7b0JBQzFELElBQU1oQixPQUFPVyxjQUFlLEdBQUc7b0JBRS9CQyxXQUFXLElBcENJYixTQW9DU0MsTUFBTUMsVUFBVUM7Z0JBQzFDO2dCQUVBLE9BQU9VO1lBQ1Q7OztXQXhDbUJiIn0=