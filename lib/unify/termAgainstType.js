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
function unifyTermAgainstType(termNodeA, typeNodeB, localContext, unifyAhead) {
    var termUnifiedAgainstType;
    var verifyTerm = _shim.default.verifyTerm, terms = [], termVerified = verifyTerm(termNodeA, terms, localContext, function() {
        var unifiedAhead = false;
        var firstTerm = (0, _array.first)(terms), term = firstTerm, termType = term.getType(), typeNode = typeNodeB, type = localContext.findTypeByTypeNode(typeNode), termTypeEqualToOrSubTypeOfType = termType.isEqualToOrSubTypeOf(type);
        if (termTypeEqualToOrSubTypeOfType) {
            unifiedAhead = unifyAhead();
        }
        return unifiedAhead;
    });
    termUnifiedAgainstType = termVerified; ///
    return termUnifiedAgainstType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmeS90ZXJtQWdhaW5zdFR5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuLi9zaGltXCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1bmlmeVRlcm1BZ2FpbnN0VHlwZSh0ZXJtTm9kZUEsIHR5cGVOb2RlQiwgbG9jYWxDb250ZXh0LCB1bmlmeUFoZWFkKSB7XG4gIGxldCB0ZXJtVW5pZmllZEFnYWluc3RUeXBlO1xuXG4gIGNvbnN0IHsgdmVyaWZ5VGVybSB9ID0gc2hpbSxcbiAgICAgICAgdGVybXMgPSBbXSxcbiAgICAgICAgdGVybVZlcmlmaWVkID0gdmVyaWZ5VGVybSh0ZXJtTm9kZUEsIHRlcm1zLCBsb2NhbENvbnRleHQsICgpID0+IHtcbiAgICAgICAgICBsZXQgdW5pZmllZEFoZWFkID0gZmFsc2U7XG5cbiAgICAgICAgICBjb25zdCBmaXJzdFRlcm0gPSBmaXJzdCh0ZXJtcyksXG4gICAgICAgICAgICAgICAgdGVybSA9IGZpcnN0VGVybSwgLy8vXG4gICAgICAgICAgICAgICAgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgICB0eXBlTm9kZSA9IHR5cGVOb2RlQiwgLy8vXG4gICAgICAgICAgICAgICAgdHlwZSA9IGxvY2FsQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICAgICAgICAgIHRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVHlwZSA9IHRlcm1UeXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKHR5cGUpO1xuXG4gICAgICAgICAgaWYgKHRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVHlwZSkge1xuICAgICAgICAgICAgdW5pZmllZEFoZWFkID0gdW5pZnlBaGVhZCgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB1bmlmaWVkQWhlYWQ7XG4gICAgICAgIH0pO1xuXG4gIHRlcm1VbmlmaWVkQWdhaW5zdFR5cGUgPSB0ZXJtVmVyaWZpZWQ7IC8vL1xuXG4gIHJldHVybiB0ZXJtVW5pZmllZEFnYWluc3RUeXBlO1xufVxuIl0sIm5hbWVzIjpbInVuaWZ5VGVybUFnYWluc3RUeXBlIiwidGVybU5vZGVBIiwidHlwZU5vZGVCIiwibG9jYWxDb250ZXh0IiwidW5pZnlBaGVhZCIsInRlcm1VbmlmaWVkQWdhaW5zdFR5cGUiLCJ2ZXJpZnlUZXJtIiwic2hpbSIsInRlcm1zIiwidGVybVZlcmlmaWVkIiwidW5pZmllZEFoZWFkIiwiZmlyc3RUZXJtIiwiZmlyc3QiLCJ0ZXJtIiwidGVybVR5cGUiLCJnZXRUeXBlIiwidHlwZU5vZGUiLCJ0eXBlIiwiZmluZFR5cGVCeVR5cGVOb2RlIiwidGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUeXBlIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBd0JBOzs7MkRBSlA7cUJBRUs7Ozs7OztBQUVQLFNBQVNBLHFCQUFxQkMsU0FBUyxFQUFFQyxTQUFTLEVBQUVDLFlBQVksRUFBRUMsVUFBVTtJQUN6RixJQUFJQztJQUVKLElBQU0sQUFBRUMsYUFBZUMsYUFBSSxDQUFuQkQsWUFDRkUsUUFBUSxFQUFFLEVBQ1ZDLGVBQWVILFdBQVdMLFdBQVdPLE9BQU9MLGNBQWM7UUFDeEQsSUFBSU8sZUFBZTtRQUVuQixJQUFNQyxZQUFZQyxJQUFBQSxZQUFLLEVBQUNKLFFBQ2xCSyxPQUFPRixXQUNQRyxXQUFXRCxLQUFLRSxPQUFPLElBQ3ZCQyxXQUFXZCxXQUNYZSxPQUFPZCxhQUFhZSxrQkFBa0IsQ0FBQ0YsV0FDdkNHLGlDQUFpQ0wsU0FBU00sb0JBQW9CLENBQUNIO1FBRXJFLElBQUlFLGdDQUFnQztZQUNsQ1QsZUFBZU47UUFDakI7UUFFQSxPQUFPTTtJQUNUO0lBRU5MLHlCQUF5QkksY0FBYyxHQUFHO0lBRTFDLE9BQU9KO0FBQ1QifQ==