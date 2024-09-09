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
function unifyTermAgainstType(termNode, typeNode, localContext, unifyAhead) {
    var termUnifiedAgainstType;
    var verifyTerm = _shim.default.verifyTerm, terms = [], termVerified = verifyTerm(termNode, terms, localContext, function() {
        var unifiedAhead = false;
        var firstTerm = (0, _array.first)(terms), term = firstTerm, termType = term.getType(), type = localContext.findTypeByTypeNode(typeNode), termTypeEqualToOrSubTypeOfType = termType.isEqualToOrSubTypeOf(type);
        if (termTypeEqualToOrSubTypeOfType) {
            unifiedAhead = unifyAhead();
        }
        return unifiedAhead;
    });
    termUnifiedAgainstType = termVerified; ///
    return termUnifiedAgainstType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmeS90ZXJtQWdhaW5zdFR5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuLi9zaGltXCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1bmlmeVRlcm1BZ2FpbnN0VHlwZSh0ZXJtTm9kZSwgdHlwZU5vZGUsIGxvY2FsQ29udGV4dCwgdW5pZnlBaGVhZCkge1xuICBsZXQgdGVybVVuaWZpZWRBZ2FpbnN0VHlwZTtcblxuICBjb25zdCB7IHZlcmlmeVRlcm0gfSA9IHNoaW0sXG4gICAgICAgIHRlcm1zID0gW10sXG4gICAgICAgIHRlcm1WZXJpZmllZCA9IHZlcmlmeVRlcm0odGVybU5vZGUsIHRlcm1zLCBsb2NhbENvbnRleHQsICgpID0+IHtcbiAgICAgICAgICBsZXQgdW5pZmllZEFoZWFkID0gZmFsc2U7XG5cbiAgICAgICAgICBjb25zdCBmaXJzdFRlcm0gPSBmaXJzdCh0ZXJtcyksXG4gICAgICAgICAgICAgICAgdGVybSA9IGZpcnN0VGVybSwgLy8vXG4gICAgICAgICAgICAgICAgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgICB0eXBlID0gbG9jYWxDb250ZXh0LmZpbmRUeXBlQnlUeXBlTm9kZSh0eXBlTm9kZSksXG4gICAgICAgICAgICAgICAgdGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUeXBlID0gdGVybVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YodHlwZSk7XG5cbiAgICAgICAgICBpZiAodGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUeXBlKSB7XG4gICAgICAgICAgICB1bmlmaWVkQWhlYWQgPSB1bmlmeUFoZWFkKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHVuaWZpZWRBaGVhZDtcbiAgICAgICAgfSk7XG5cbiAgdGVybVVuaWZpZWRBZ2FpbnN0VHlwZSA9IHRlcm1WZXJpZmllZDsgLy8vXG5cbiAgcmV0dXJuIHRlcm1VbmlmaWVkQWdhaW5zdFR5cGU7XG59XG4iXSwibmFtZXMiOlsidW5pZnlUZXJtQWdhaW5zdFR5cGUiLCJ0ZXJtTm9kZSIsInR5cGVOb2RlIiwibG9jYWxDb250ZXh0IiwidW5pZnlBaGVhZCIsInRlcm1VbmlmaWVkQWdhaW5zdFR5cGUiLCJ2ZXJpZnlUZXJtIiwic2hpbSIsInRlcm1zIiwidGVybVZlcmlmaWVkIiwidW5pZmllZEFoZWFkIiwiZmlyc3RUZXJtIiwiZmlyc3QiLCJ0ZXJtIiwidGVybVR5cGUiLCJnZXRUeXBlIiwidHlwZSIsImZpbmRUeXBlQnlUeXBlTm9kZSIsInRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mVHlwZSIsImlzRXF1YWxUb09yU3ViVHlwZU9mIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXdCQTs7OzJEQUpQO3FCQUVLOzs7Ozs7QUFFUCxTQUFTQSxxQkFBcUJDLFFBQVEsRUFBRUMsUUFBUSxFQUFFQyxZQUFZLEVBQUVDLFVBQVU7SUFDdkYsSUFBSUM7SUFFSixJQUFNLEFBQUVDLGFBQWVDLGFBQUksQ0FBbkJELFlBQ0ZFLFFBQVEsRUFBRSxFQUNWQyxlQUFlSCxXQUFXTCxVQUFVTyxPQUFPTCxjQUFjO1FBQ3ZELElBQUlPLGVBQWU7UUFFbkIsSUFBTUMsWUFBWUMsSUFBQUEsWUFBSyxFQUFDSixRQUNsQkssT0FBT0YsV0FDUEcsV0FBV0QsS0FBS0UsT0FBTyxJQUN2QkMsT0FBT2IsYUFBYWMsa0JBQWtCLENBQUNmLFdBQ3ZDZ0IsaUNBQWlDSixTQUFTSyxvQkFBb0IsQ0FBQ0g7UUFFckUsSUFBSUUsZ0NBQWdDO1lBQ2xDUixlQUFlTjtRQUNqQjtRQUVBLE9BQU9NO0lBQ1Q7SUFFTkwseUJBQXlCSSxjQUFjLEdBQUc7SUFFMUMsT0FBT0o7QUFDVCJ9