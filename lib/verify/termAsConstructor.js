"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyTermAsConstructor;
    }
});
var _constructor = /*#__PURE__*/ _interop_require_default(require("../constructor"));
var _termAsConstructor = /*#__PURE__*/ _interop_require_default(require("../verifier/node/termAsConstructor"));
var _query = require("../utilities/query");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function verifyTermAsConstructor(termNode, typeNode, fileContext) {
    var termVerifiedAsConstructor = false;
    var termString = fileContext.nodeAsString(termNode);
    fileContext.debug("Verifying the '".concat(termString, "' term as a constructor..."), termNode);
    var nonTerminalNode = termNode, childNodes = nonTerminalNode.getChildNodes(), childNodesVerified = _termAsConstructor.default.verifyChildNodes(childNodes, fileContext, function() {
        var verifiedAhead = true;
        return verifiedAhead;
    });
    if (childNodesVerified) {
        var type = null;
        if (typeNode === null) {
            termVerifiedAsConstructor = true;
        } else {
            var typeName = (0, _query.typeNameFromTypeNode)(typeNode);
            type = fileContext.findTypeByTypeName(typeName);
            if (type !== null) {
                termVerifiedAsConstructor = true;
            } else {
                fileContext.info("The '".concat(termString, "' constructor's '").concat(typeName, "' type is not present."), termNode);
            }
        }
        if (termVerifiedAsConstructor) {
            var tokens = fileContext.getTokens(), constructor = _constructor.default.fromTermNodeTypeAndTokens(termNode, type, tokens);
            fileContext.addConstructor(constructor);
        }
    }
    if (termVerifiedAsConstructor) {
        fileContext.debug("...verified the '".concat(termString, "' term as a constructor."), termNode);
    }
    return termVerifiedAsConstructor;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGVybUFzQ29uc3RydWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDb25zdHJ1Y3RvciBmcm9tIFwiLi4vY29uc3RydWN0b3JcIjtcbmltcG9ydCB0ZXJtQXNDb25zdHJ1Y3Rvck5vZGVWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXIvbm9kZS90ZXJtQXNDb25zdHJ1Y3RvclwiO1xuXG5pbXBvcnQgeyB0eXBlTmFtZUZyb21UeXBlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5VGVybUFzQ29uc3RydWN0b3IodGVybU5vZGUsIHR5cGVOb2RlLCBmaWxlQ29udGV4dCkge1xuICBsZXQgdGVybVZlcmlmaWVkQXNDb25zdHJ1Y3RvciA9IGZhbHNlO1xuXG4gIGNvbnN0IHRlcm1TdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcodGVybU5vZGUpO1xuXG4gIGZpbGVDb250ZXh0LmRlYnVnKGBWZXJpZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFzIGEgY29uc3RydWN0b3IuLi5gLCB0ZXJtTm9kZSk7XG5cbiAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gdGVybU5vZGUsIC8vL1xuICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgY2hpbGROb2Rlc1ZlcmlmaWVkID0gdGVybUFzQ29uc3RydWN0b3JOb2RlVmVyaWZpZXIudmVyaWZ5Q2hpbGROb2RlcyhjaGlsZE5vZGVzLCBmaWxlQ29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgIH0pO1xuXG4gIGlmIChjaGlsZE5vZGVzVmVyaWZpZWQpIHtcbiAgICBsZXQgdHlwZSA9IG51bGw7XG5cbiAgICBpZiAodHlwZU5vZGUgPT09IG51bGwpIHtcbiAgICAgIHRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3IgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKTtcblxuICAgICAgdHlwZSA9IGZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgIGlmICh0eXBlICE9PSBudWxsKSB7XG4gICAgICAgIHRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3IgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmlsZUNvbnRleHQuaW5mbyhgVGhlICcke3Rlcm1TdHJpbmd9JyBjb25zdHJ1Y3RvcidzICcke3R5cGVOYW1lfScgdHlwZSBpcyBub3QgcHJlc2VudC5gLCB0ZXJtTm9kZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3IpIHtcbiAgICAgIGNvbnN0IHRva2VucyA9IGZpbGVDb250ZXh0LmdldFRva2VucygpLFxuICAgICAgICAgICAgY29uc3RydWN0b3IgPSBDb25zdHJ1Y3Rvci5mcm9tVGVybU5vZGVUeXBlQW5kVG9rZW5zKHRlcm1Ob2RlLCB0eXBlLCB0b2tlbnMpO1xuXG4gICAgICBmaWxlQ29udGV4dC5hZGRDb25zdHJ1Y3Rvcihjb25zdHJ1Y3Rvcik7XG4gICAgfVxuICB9XG5cbiAgaWYgKHRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3IpIHtcbiAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFzIGEgY29uc3RydWN0b3IuYCwgdGVybU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3I7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5VGVybUFzQ29uc3RydWN0b3IiLCJ0ZXJtTm9kZSIsInR5cGVOb2RlIiwiZmlsZUNvbnRleHQiLCJ0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yIiwidGVybVN0cmluZyIsIm5vZGVBc1N0cmluZyIsImRlYnVnIiwibm9uVGVybWluYWxOb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJjaGlsZE5vZGVzVmVyaWZpZWQiLCJ0ZXJtQXNDb25zdHJ1Y3Rvck5vZGVWZXJpZmllciIsInZlcmlmeUNoaWxkTm9kZXMiLCJ2ZXJpZmllZEFoZWFkIiwidHlwZSIsInR5cGVOYW1lIiwidHlwZU5hbWVGcm9tVHlwZU5vZGUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJpbmZvIiwidG9rZW5zIiwiZ2V0VG9rZW5zIiwiY29uc3RydWN0b3IiLCJDb25zdHJ1Y3RvciIsImZyb21UZXJtTm9kZVR5cGVBbmRUb2tlbnMiLCJhZGRDb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUF3QkE7OztrRUFMQTt3RUFDa0I7cUJBRUw7Ozs7OztBQUV0QixTQUFTQSx3QkFBd0JDLFFBQVEsRUFBRUMsUUFBUSxFQUFFQyxXQUFXO0lBQzdFLElBQUlDLDRCQUE0QjtJQUVoQyxJQUFNQyxhQUFhRixZQUFZRyxZQUFZLENBQUNMO0lBRTVDRSxZQUFZSSxLQUFLLENBQUMsQUFBQyxrQkFBNEIsT0FBWEYsWUFBVywrQkFBNkJKO0lBRTVFLElBQU1PLGtCQUFrQlAsVUFDbEJRLGFBQWFELGdCQUFnQkUsYUFBYSxJQUMxQ0MscUJBQXFCQywwQkFBNkIsQ0FBQ0MsZ0JBQWdCLENBQUNKLFlBQVlOLGFBQWE7UUFDM0YsSUFBTVcsZ0JBQWdCO1FBRXRCLE9BQU9BO0lBQ1Q7SUFFTixJQUFJSCxvQkFBb0I7UUFDdEIsSUFBSUksT0FBTztRQUVYLElBQUliLGFBQWEsTUFBTTtZQUNyQkUsNEJBQTRCO1FBQzlCLE9BQU87WUFDTCxJQUFNWSxXQUFXQyxJQUFBQSwyQkFBb0IsRUFBQ2Y7WUFFdENhLE9BQU9aLFlBQVllLGtCQUFrQixDQUFDRjtZQUV0QyxJQUFJRCxTQUFTLE1BQU07Z0JBQ2pCWCw0QkFBNEI7WUFDOUIsT0FBTztnQkFDTEQsWUFBWWdCLElBQUksQ0FBQyxBQUFDLFFBQXFDSCxPQUE5QlgsWUFBVyxxQkFBNEIsT0FBVFcsVUFBUywyQkFBeUJmO1lBQzNGO1FBQ0Y7UUFFQSxJQUFJRywyQkFBMkI7WUFDN0IsSUFBTWdCLFNBQVNqQixZQUFZa0IsU0FBUyxJQUM5QkMsY0FBY0Msb0JBQVcsQ0FBQ0MseUJBQXlCLENBQUN2QixVQUFVYyxNQUFNSztZQUUxRWpCLFlBQVlzQixjQUFjLENBQUNIO1FBQzdCO0lBQ0Y7SUFFQSxJQUFJbEIsMkJBQTJCO1FBQzdCRCxZQUFZSSxLQUFLLENBQUMsQUFBQyxvQkFBOEIsT0FBWEYsWUFBVyw2QkFBMkJKO0lBQzlFO0lBRUEsT0FBT0c7QUFDVCJ9