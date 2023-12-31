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
                var leftTermMatchesRightTerm = this.leftTerm.match(this.rightTerm), reflexive = leftTermMatchesRightTerm;
                return reflexive;
            }
        }
    ], [
        {
            key: "fromLeftTermAndRightTerm",
            value: function fromLeftTermAndRightTerm(leftTerm, rightTerm) {
                var equality = null;
                var leftTermType = leftTerm.getType(), rightTermType = rightTerm.getType(), leftTermTypeEqualToSubTypeOfOrSuperTypeOfRightTermType = leftTermType.isEqualToSubTypeOfOrSuperTypeOf(rightTermType);
                if (leftTermTypeEqualToSubTypeOfOrSuperTypeOfRightTermType) {
                    equality = new Equality(leftTerm, rightTerm);
                }
                return equality;
            }
        }
    ]);
    return Equality;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lcXVhbGl0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXF1YWxpdHkge1xuICBjb25zdHJ1Y3RvcihsZWZ0VGVybSwgcmlnaHRUZXJtKSB7XG4gICAgdGhpcy5sZWZ0VGVybSA9IGxlZnRUZXJtO1xuICAgIHRoaXMucmlnaHRUZXJtID0gcmlnaHRUZXJtO1xuICB9XG5cbiAgZ2V0TGVmdFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFRlcm07XG4gIH1cblxuICBnZXRSaWdodFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMucmlnaHRUZXJtO1xuICB9XG5cbiAgaXNSZWZsZXhpdmUoKSB7XG4gICAgY29uc3QgbGVmdFRlcm1NYXRjaGVzUmlnaHRUZXJtID0gdGhpcy5sZWZ0VGVybS5tYXRjaCh0aGlzLnJpZ2h0VGVybSksXG4gICAgICAgICAgcmVmbGV4aXZlID0gbGVmdFRlcm1NYXRjaGVzUmlnaHRUZXJtO1xuXG4gICAgcmV0dXJuIHJlZmxleGl2ZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGVmdFRlcm1BbmRSaWdodFRlcm0obGVmdFRlcm0sIHJpZ2h0VGVybSkge1xuICAgIGxldCBlcXVhbGl0eSA9IG51bGw7XG5cbiAgICBjb25zdCBsZWZ0VGVybVR5cGUgPSBsZWZ0VGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgcmlnaHRUZXJtVHlwZSA9IHJpZ2h0VGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgbGVmdFRlcm1UeXBlRXF1YWxUb1N1YlR5cGVPZk9yU3VwZXJUeXBlT2ZSaWdodFRlcm1UeXBlID0gbGVmdFRlcm1UeXBlLmlzRXF1YWxUb1N1YlR5cGVPZk9yU3VwZXJUeXBlT2YocmlnaHRUZXJtVHlwZSk7XG5cbiAgICBpZiAobGVmdFRlcm1UeXBlRXF1YWxUb1N1YlR5cGVPZk9yU3VwZXJUeXBlT2ZSaWdodFRlcm1UeXBlKSB7XG4gICAgICBlcXVhbGl0eSA9IG5ldyBFcXVhbGl0eShsZWZ0VGVybSwgcmlnaHRUZXJtKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWxpdHk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJFcXVhbGl0eSIsImxlZnRUZXJtIiwicmlnaHRUZXJtIiwiZ2V0TGVmdFRlcm0iLCJnZXRSaWdodFRlcm0iLCJpc1JlZmxleGl2ZSIsImxlZnRUZXJtTWF0Y2hlc1JpZ2h0VGVybSIsIm1hdGNoIiwicmVmbGV4aXZlIiwiZnJvbUxlZnRUZXJtQW5kUmlnaHRUZXJtIiwiZXF1YWxpdHkiLCJsZWZ0VGVybVR5cGUiLCJnZXRUeXBlIiwicmlnaHRUZXJtVHlwZSIsImxlZnRUZXJtVHlwZUVxdWFsVG9TdWJUeXBlT2ZPclN1cGVyVHlwZU9mUmlnaHRUZXJtVHlwZSIsImlzRXF1YWxUb1N1YlR5cGVPZk9yU3VwZXJUeXBlT2YiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBRXFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFOLElBQUEsQUFBTUEseUJBQU47YUFBTUEsU0FDUEMsUUFBUSxFQUFFQyxTQUFTO2dDQURaRjtRQUVqQixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBOztrQkFIQUY7O1lBTW5CRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFFBQVE7WUFDdEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFNBQVM7WUFDdkI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsMkJBQTJCLElBQUksQ0FBQ0wsUUFBUSxDQUFDTSxLQUFLLENBQUMsSUFBSSxDQUFDTCxTQUFTLEdBQzdETSxZQUFZRjtnQkFFbEIsT0FBT0U7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSx5QkFBeUJSLFFBQVEsRUFBRUMsU0FBUztnQkFDakQsSUFBSVEsV0FBVztnQkFFZixJQUFNQyxlQUFlVixTQUFTVyxPQUFPLElBQy9CQyxnQkFBZ0JYLFVBQVVVLE9BQU8sSUFDakNFLHlEQUF5REgsYUFBYUksK0JBQStCLENBQUNGO2dCQUU1RyxJQUFJQyx3REFBd0Q7b0JBQzFESixXQUFXLElBN0JJVixTQTZCU0MsVUFBVUM7Z0JBQ3BDO2dCQUVBLE9BQU9RO1lBQ1Q7OztXQWpDbUJWIn0=