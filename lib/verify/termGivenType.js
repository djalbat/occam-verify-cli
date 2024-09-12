"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyTermGivenType;
    }
});
var _shim = /*#__PURE__*/ _interop_require_default(require("../shim"));
var _array = require("../utilities/array");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function verifyTermGivenType(termNode, type, localContext) {
    var termVerifiedGivenType = false;
    if (type !== null) {
        var verifyTerm = _shim.default.verifyTerm, terms = [], termVerified = verifyTerm(termNode, terms, localContext, function() {
            var verifiedAhead = false;
            var firstTerm = (0, _array.first)(terms), term = firstTerm, termType = term.getType(), termTypeEqualToOrSubTypeOfType = termType.isEqualToOrSubTypeOf(type);
            if (termTypeEqualToOrSubTypeOfType) {
                verifiedAhead = true;
            }
            return verifiedAhead;
        });
        termVerifiedGivenType = termVerified; ///
    }
    return termVerifiedGivenType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGVybUdpdmVuVHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVRlcm1HaXZlblR5cGUodGVybU5vZGUsIHR5cGUsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgdGVybVZlcmlmaWVkR2l2ZW5UeXBlID0gZmFsc2U7XG5cbiAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IHZlcmlmeVRlcm0gfSA9IHNoaW0sXG4gICAgICAgICAgdGVybXMgPSBbXSxcbiAgICAgICAgICB0ZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtKHRlcm1Ob2RlLCB0ZXJtcywgbG9jYWxDb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgdmVyaWZpZWRBaGVhZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBjb25zdCBmaXJzdFRlcm0gPSBmaXJzdCh0ZXJtcyksXG4gICAgICAgICAgICAgICAgICB0ZXJtID0gZmlyc3RUZXJtLCAvLy9cbiAgICAgICAgICAgICAgICAgIHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgICB0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlR5cGUgPSB0ZXJtVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZih0eXBlKTtcblxuICAgICAgICAgICAgaWYgKHRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVHlwZSkge1xuICAgICAgICAgICAgICB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgICAgfSk7XG5cbiAgICB0ZXJtVmVyaWZpZWRHaXZlblR5cGUgPSB0ZXJtVmVyaWZpZWQ7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHRlcm1WZXJpZmllZEdpdmVuVHlwZTtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlUZXJtR2l2ZW5UeXBlIiwidGVybU5vZGUiLCJ0eXBlIiwibG9jYWxDb250ZXh0IiwidGVybVZlcmlmaWVkR2l2ZW5UeXBlIiwidmVyaWZ5VGVybSIsInNoaW0iLCJ0ZXJtcyIsInRlcm1WZXJpZmllZCIsInZlcmlmaWVkQWhlYWQiLCJmaXJzdFRlcm0iLCJmaXJzdCIsInRlcm0iLCJ0ZXJtVHlwZSIsImdldFR5cGUiLCJ0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUF3QkE7OzsyREFKUDtxQkFFSzs7Ozs7O0FBRVAsU0FBU0Esb0JBQW9CQyxRQUFRLEVBQUVDLElBQUksRUFBRUMsWUFBWTtJQUN0RSxJQUFJQyx3QkFBd0I7SUFFNUIsSUFBSUYsU0FBUyxNQUFNO1FBQ2pCLElBQU0sQUFBRUcsYUFBZUMsYUFBSSxDQUFuQkQsWUFDRkUsUUFBUSxFQUFFLEVBQ1ZDLGVBQWVILFdBQVdKLFVBQVVNLE9BQU9KLGNBQWM7WUFDdkQsSUFBSU0sZ0JBQWdCO1lBRXBCLElBQU1DLFlBQVlDLElBQUFBLFlBQUssRUFBQ0osUUFDbEJLLE9BQU9GLFdBQ1BHLFdBQVdELEtBQUtFLE9BQU8sSUFDdkJDLGlDQUFpQ0YsU0FBU0csb0JBQW9CLENBQUNkO1lBRXJFLElBQUlhLGdDQUFnQztnQkFDbENOLGdCQUFnQjtZQUNsQjtZQUVBLE9BQU9BO1FBQ1Q7UUFFTkwsd0JBQXdCSSxjQUFjLEdBQUc7SUFDM0M7SUFFQSxPQUFPSjtBQUNUIn0=