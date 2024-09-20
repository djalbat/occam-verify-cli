"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return unifyTermWithConstructors;
    }
});
var _termWithConstructor = /*#__PURE__*/ _interop_require_default(require("../unify/termWithConstructor"));
var _query = require("../utilities/query");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var variableNodeQuery = (0, _query.nodeQuery)("/term/variable!");
function unifyTermWithConstructors(termNode, terms, localContext, verifyAhead) {
    var termUnifiedWithConstructors = false;
    var variableNode = variableNodeQuery(termNode);
    if (variableNode === null) {
        var constructors = localContext.getConstructors();
        termUnifiedWithConstructors = constructors.some(function(constructor) {
            var termUnifiedWithConstructor = (0, _termWithConstructor.default)(termNode, terms, constructor, localContext, verifyAhead);
            if (termUnifiedWithConstructor) {
                return true;
            }
        });
    }
    return termUnifiedWithConstructors;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmeS90ZXJtV2l0aENvbnN0cnVjdG9ycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHVuaWZ5VGVybVdpdGhDb25zdHJ1Y3RvciBmcm9tIFwiLi4vdW5pZnkvdGVybVdpdGhDb25zdHJ1Y3RvclwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0vdmFyaWFibGUhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1bmlmeVRlcm1XaXRoQ29uc3RydWN0b3JzKHRlcm1Ob2RlLCB0ZXJtcywgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgdGVybVVuaWZpZWRXaXRoQ29uc3RydWN0b3JzID0gZmFsc2U7XG5cbiAgY29uc3QgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkodGVybU5vZGUpO1xuXG4gIGlmICh2YXJpYWJsZU5vZGUgPT09IG51bGwpIHtcbiAgICBjb25zdCBjb25zdHJ1Y3RvcnMgPSBsb2NhbENvbnRleHQuZ2V0Q29uc3RydWN0b3JzKCk7XG5cbiAgICB0ZXJtVW5pZmllZFdpdGhDb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnMuc29tZSgoY29uc3RydWN0b3IpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1VbmlmaWVkV2l0aENvbnN0cnVjdG9yID0gdW5pZnlUZXJtV2l0aENvbnN0cnVjdG9yKHRlcm1Ob2RlLCB0ZXJtcywgY29uc3RydWN0b3IsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICBpZiAodGVybVVuaWZpZWRXaXRoQ29uc3RydWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdGVybVVuaWZpZWRXaXRoQ29uc3RydWN0b3JzO1xufVxuIl0sIm5hbWVzIjpbInVuaWZ5VGVybVdpdGhDb25zdHJ1Y3RvcnMiLCJ2YXJpYWJsZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInRlcm1Ob2RlIiwidGVybXMiLCJsb2NhbENvbnRleHQiLCJ2ZXJpZnlBaGVhZCIsInRlcm1VbmlmaWVkV2l0aENvbnN0cnVjdG9ycyIsInZhcmlhYmxlTm9kZSIsImNvbnN0cnVjdG9ycyIsImdldENvbnN0cnVjdG9ycyIsInNvbWUiLCJjb25zdHJ1Y3RvciIsInRlcm1VbmlmaWVkV2l0aENvbnN0cnVjdG9yIiwidW5pZnlUZXJtV2l0aENvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQXdCQTs7OzBFQU5hO3FCQUVYOzs7Ozs7QUFFMUIsSUFBTUMsb0JBQW9CQyxJQUFBQSxnQkFBUyxFQUFDO0FBRXJCLFNBQVNGLDBCQUEwQkcsUUFBUSxFQUFFQyxLQUFLLEVBQUVDLFlBQVksRUFBRUMsV0FBVztJQUMxRixJQUFJQyw4QkFBOEI7SUFFbEMsSUFBTUMsZUFBZVAsa0JBQWtCRTtJQUV2QyxJQUFJSyxpQkFBaUIsTUFBTTtRQUN6QixJQUFNQyxlQUFlSixhQUFhSyxlQUFlO1FBRWpESCw4QkFBOEJFLGFBQWFFLElBQUksQ0FBQyxTQUFDQztZQUMvQyxJQUFNQyw2QkFBNkJDLElBQUFBLDRCQUF3QixFQUFDWCxVQUFVQyxPQUFPUSxhQUFhUCxjQUFjQztZQUV4RyxJQUFJTyw0QkFBNEI7Z0JBQzlCLE9BQU87WUFDVDtRQUNGO0lBQ0Y7SUFFQSxPQUFPTjtBQUNUIn0=