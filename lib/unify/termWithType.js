"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return unifyTermWithType;
    }
});
var _termGivenType = /*#__PURE__*/ _interop_require_default(require("../verify/termGivenType"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function unifyTermWithType(termNode, typeNode, localContext) {
    var termUnifiedWithType;
    var type = localContext.findTypeByTypeNode(typeNode), termVerifiedGivenType = (0, _termGivenType.default)(termNode, type, localContext);
    termUnifiedWithType = termVerifiedGivenType; ///
    return termUnifiedWithType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmeS90ZXJtV2l0aFR5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB2ZXJpZnlUZXJtR2l2ZW5UeXBlIGZyb20gXCIuLi92ZXJpZnkvdGVybUdpdmVuVHlwZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1bmlmeVRlcm1XaXRoVHlwZSh0ZXJtTm9kZSwgdHlwZU5vZGUsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgdGVybVVuaWZpZWRXaXRoVHlwZTtcblxuICBjb25zdCB0eXBlID0gbG9jYWxDb250ZXh0LmZpbmRUeXBlQnlUeXBlTm9kZSh0eXBlTm9kZSksXG4gICAgICAgIHRlcm1WZXJpZmllZEdpdmVuVHlwZSA9IHZlcmlmeVRlcm1HaXZlblR5cGUodGVybU5vZGUsIHR5cGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgdGVybVVuaWZpZWRXaXRoVHlwZSA9IHRlcm1WZXJpZmllZEdpdmVuVHlwZTsgIC8vL1xuXG5cbiAgcmV0dXJuIHRlcm1VbmlmaWVkV2l0aFR5cGU7XG59XG4iXSwibmFtZXMiOlsidW5pZnlUZXJtV2l0aFR5cGUiLCJ0ZXJtTm9kZSIsInR5cGVOb2RlIiwibG9jYWxDb250ZXh0IiwidGVybVVuaWZpZWRXaXRoVHlwZSIsInR5cGUiLCJmaW5kVHlwZUJ5VHlwZU5vZGUiLCJ0ZXJtVmVyaWZpZWRHaXZlblR5cGUiLCJ2ZXJpZnlUZXJtR2l2ZW5UeXBlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFJQTs7O2VBQXdCQTs7O29FQUZROzs7Ozs7QUFFakIsU0FBU0Esa0JBQWtCQyxRQUFRLEVBQUVDLFFBQVEsRUFBRUMsWUFBWTtJQUN4RSxJQUFJQztJQUVKLElBQU1DLE9BQU9GLGFBQWFHLGtCQUFrQixDQUFDSixXQUN2Q0ssd0JBQXdCQyxJQUFBQSxzQkFBbUIsRUFBQ1AsVUFBVUksTUFBTUY7SUFFbEVDLHNCQUFzQkcsdUJBQXdCLEdBQUc7SUFHakQsT0FBT0g7QUFDVCJ9