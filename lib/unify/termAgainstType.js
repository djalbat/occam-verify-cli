"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return unifyTermAgainstType;
    }
});
var _shim = /*#__PURE__*/ _interop_require_default(require("../shim"));
var _array = require("../utilities/array");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function unifyTermAgainstType(termNode, typeNode, localContext) {
    var termUnifiedAgainstType;
    var verifyTerm = _shim.default.verifyTerm, terms = [], termVerified = verifyTerm(termNode, terms, localContext, function() {
        var verifiedAhead = false;
        var firstTerm = (0, _array.first)(terms), term = firstTerm, termType = term.getType(), type = localContext.findTypeByTypeNode(typeNode), termTypeEqualToOrSubTypeOfType = termType.isEqualToOrSubTypeOf(type);
        if (termTypeEqualToOrSubTypeOfType) {
            verifiedAhead = true;
        }
        return verifiedAhead;
    });
    termUnifiedAgainstType = termVerified; ///
    return termUnifiedAgainstType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmeS90ZXJtQWdhaW5zdFR5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuLi9zaGltXCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1bmlmeVRlcm1BZ2FpbnN0VHlwZSh0ZXJtTm9kZSwgdHlwZU5vZGUsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgdGVybVVuaWZpZWRBZ2FpbnN0VHlwZTtcblxuICBjb25zdCB7IHZlcmlmeVRlcm0gfSA9IHNoaW0sXG4gICAgICAgIHRlcm1zID0gW10sXG4gICAgICAgIHRlcm1WZXJpZmllZCA9IHZlcmlmeVRlcm0odGVybU5vZGUsIHRlcm1zLCBsb2NhbENvbnRleHQsICgpID0+IHtcbiAgICAgICAgICBsZXQgdmVyaWZpZWRBaGVhZCA9IGZhbHNlO1xuXG4gICAgICAgICAgY29uc3QgZmlyc3RUZXJtID0gZmlyc3QodGVybXMpLFxuICAgICAgICAgICAgICAgIHRlcm0gPSBmaXJzdFRlcm0sIC8vL1xuICAgICAgICAgICAgICAgIHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgdHlwZSA9IGxvY2FsQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICAgICAgICAgIHRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVHlwZSA9IHRlcm1UeXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKHR5cGUpO1xuXG4gICAgICAgICAgaWYgKHRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVHlwZSkge1xuICAgICAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgIH0pO1xuXG4gIHRlcm1VbmlmaWVkQWdhaW5zdFR5cGUgPSB0ZXJtVmVyaWZpZWQ7IC8vL1xuXG4gIHJldHVybiB0ZXJtVW5pZmllZEFnYWluc3RUeXBlO1xufVxuIl0sIm5hbWVzIjpbInVuaWZ5VGVybUFnYWluc3RUeXBlIiwidGVybU5vZGUiLCJ0eXBlTm9kZSIsImxvY2FsQ29udGV4dCIsInRlcm1VbmlmaWVkQWdhaW5zdFR5cGUiLCJ2ZXJpZnlUZXJtIiwic2hpbSIsInRlcm1zIiwidGVybVZlcmlmaWVkIiwidmVyaWZpZWRBaGVhZCIsImZpcnN0VGVybSIsImZpcnN0IiwidGVybSIsInRlcm1UeXBlIiwiZ2V0VHlwZSIsInR5cGUiLCJmaW5kVHlwZUJ5VHlwZU5vZGUiLCJ0ZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUF3QkE7OzsyREFKUDtxQkFFSzs7Ozs7O0FBRVAsU0FBU0EscUJBQXFCQyxRQUFRLEVBQUVDLFFBQVEsRUFBRUMsWUFBWTtJQUMzRSxJQUFJQztJQUVKLElBQU0sQUFBRUMsYUFBZUMsYUFBSSxDQUFuQkQsWUFDRkUsUUFBUSxFQUFFLEVBQ1ZDLGVBQWVILFdBQVdKLFVBQVVNLE9BQU9KLGNBQWM7UUFDdkQsSUFBSU0sZ0JBQWdCO1FBRXBCLElBQU1DLFlBQVlDLElBQUFBLFlBQUssRUFBQ0osUUFDbEJLLE9BQU9GLFdBQ1BHLFdBQVdELEtBQUtFLE9BQU8sSUFDdkJDLE9BQU9aLGFBQWFhLGtCQUFrQixDQUFDZCxXQUN2Q2UsaUNBQWlDSixTQUFTSyxvQkFBb0IsQ0FBQ0g7UUFFckUsSUFBSUUsZ0NBQWdDO1lBQ2xDUixnQkFBZ0I7UUFDbEI7UUFFQSxPQUFPQTtJQUNUO0lBRU5MLHlCQUF5QkksY0FBYyxHQUFHO0lBRTFDLE9BQU9KO0FBQ1QifQ==