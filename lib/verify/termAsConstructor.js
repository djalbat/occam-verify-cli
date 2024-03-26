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
                fileContext.debug("The '".concat(termString, "' constructor's '").concat(typeName, "' type is not present."), termNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGVybUFzQ29uc3RydWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDb25zdHJ1Y3RvciBmcm9tIFwiLi4vY29uc3RydWN0b3JcIjtcbmltcG9ydCB0ZXJtQXNDb25zdHJ1Y3Rvck5vZGVWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXIvbm9kZS90ZXJtQXNDb25zdHJ1Y3RvclwiO1xuXG5pbXBvcnQgeyB0eXBlTmFtZUZyb21UeXBlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5VGVybUFzQ29uc3RydWN0b3IodGVybU5vZGUsIHR5cGVOb2RlLCBmaWxlQ29udGV4dCkge1xuICBsZXQgdGVybVZlcmlmaWVkQXNDb25zdHJ1Y3RvciA9IGZhbHNlO1xuXG4gIGNvbnN0IHRlcm1TdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcodGVybU5vZGUpO1xuXG4gIGZpbGVDb250ZXh0LmRlYnVnKGBWZXJpZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFzIGEgY29uc3RydWN0b3IuLi5gLCB0ZXJtTm9kZSk7XG5cbiAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gdGVybU5vZGUsIC8vL1xuICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgY2hpbGROb2Rlc1ZlcmlmaWVkID0gdGVybUFzQ29uc3RydWN0b3JOb2RlVmVyaWZpZXIudmVyaWZ5Q2hpbGROb2RlcyhjaGlsZE5vZGVzLCBmaWxlQ29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgIH0pO1xuXG4gIGlmIChjaGlsZE5vZGVzVmVyaWZpZWQpIHtcbiAgICBsZXQgdHlwZSA9IG51bGw7XG5cbiAgICBpZiAodHlwZU5vZGUgPT09IG51bGwpIHtcbiAgICAgIHRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3IgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKTtcblxuICAgICAgdHlwZSA9IGZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgIGlmICh0eXBlICE9PSBudWxsKSB7XG4gICAgICAgIHRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3IgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZmlsZUNvbnRleHQuZGVidWcoYFRoZSAnJHt0ZXJtU3RyaW5nfScgY29uc3RydWN0b3IncyAnJHt0eXBlTmFtZX0nIHR5cGUgaXMgbm90IHByZXNlbnQuYCwgdGVybU5vZGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yKSB7XG4gICAgICBjb25zdCB0b2tlbnMgPSBmaWxlQ29udGV4dC5nZXRUb2tlbnMoKSxcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yID0gQ29uc3RydWN0b3IuZnJvbVRlcm1Ob2RlVHlwZUFuZFRva2Vucyh0ZXJtTm9kZSwgdHlwZSwgdG9rZW5zKTtcblxuICAgICAgZmlsZUNvbnRleHQuYWRkQ29uc3RydWN0b3IoY29uc3RydWN0b3IpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yKSB7XG4gICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBhcyBhIGNvbnN0cnVjdG9yLmAsIHRlcm1Ob2RlKTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVRlcm1Bc0NvbnN0cnVjdG9yIiwidGVybU5vZGUiLCJ0eXBlTm9kZSIsImZpbGVDb250ZXh0IiwidGVybVZlcmlmaWVkQXNDb25zdHJ1Y3RvciIsInRlcm1TdHJpbmciLCJub2RlQXNTdHJpbmciLCJkZWJ1ZyIsIm5vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwiY2hpbGROb2Rlc1ZlcmlmaWVkIiwidGVybUFzQ29uc3RydWN0b3JOb2RlVmVyaWZpZXIiLCJ2ZXJpZnlDaGlsZE5vZGVzIiwidmVyaWZpZWRBaGVhZCIsInR5cGUiLCJ0eXBlTmFtZSIsInR5cGVOYW1lRnJvbVR5cGVOb2RlIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwidG9rZW5zIiwiZ2V0VG9rZW5zIiwiY29uc3RydWN0b3IiLCJDb25zdHJ1Y3RvciIsImZyb21UZXJtTm9kZVR5cGVBbmRUb2tlbnMiLCJhZGRDb25zdHJ1Y3RvciJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBd0JBOzs7a0VBTEE7d0VBQ2tCO3FCQUVMOzs7Ozs7QUFFdEIsU0FBU0Esd0JBQXdCQyxRQUFRLEVBQUVDLFFBQVEsRUFBRUMsV0FBVztJQUM3RSxJQUFJQyw0QkFBNEI7SUFFaEMsSUFBTUMsYUFBYUYsWUFBWUcsWUFBWSxDQUFDTDtJQUU1Q0UsWUFBWUksS0FBSyxDQUFDLEFBQUMsa0JBQTRCLE9BQVhGLFlBQVcsK0JBQTZCSjtJQUU1RSxJQUFNTyxrQkFBa0JQLFVBQ2xCUSxhQUFhRCxnQkFBZ0JFLGFBQWEsSUFDMUNDLHFCQUFxQkMsMEJBQTZCLENBQUNDLGdCQUFnQixDQUFDSixZQUFZTixhQUFhO1FBQzNGLElBQU1XLGdCQUFnQjtRQUV0QixPQUFPQTtJQUNUO0lBRU4sSUFBSUgsb0JBQW9CO1FBQ3RCLElBQUlJLE9BQU87UUFFWCxJQUFJYixhQUFhLE1BQU07WUFDckJFLDRCQUE0QjtRQUM5QixPQUFPO1lBQ0wsSUFBTVksV0FBV0MsSUFBQUEsMkJBQW9CLEVBQUNmO1lBRXRDYSxPQUFPWixZQUFZZSxrQkFBa0IsQ0FBQ0Y7WUFFdEMsSUFBSUQsU0FBUyxNQUFNO2dCQUNqQlgsNEJBQTRCO1lBQzlCLE9BQU87Z0JBQ0xELFlBQVlJLEtBQUssQ0FBQyxBQUFDLFFBQXFDUyxPQUE5QlgsWUFBVyxxQkFBNEIsT0FBVFcsVUFBUywyQkFBeUJmO1lBQzVGO1FBQ0Y7UUFFQSxJQUFJRywyQkFBMkI7WUFDN0IsSUFBTWUsU0FBU2hCLFlBQVlpQixTQUFTLElBQzlCQyxjQUFjQyxvQkFBVyxDQUFDQyx5QkFBeUIsQ0FBQ3RCLFVBQVVjLE1BQU1JO1lBRTFFaEIsWUFBWXFCLGNBQWMsQ0FBQ0g7UUFDN0I7SUFDRjtJQUVBLElBQUlqQiwyQkFBMkI7UUFDN0JELFlBQVlJLEtBQUssQ0FBQyxBQUFDLG9CQUE4QixPQUFYRixZQUFXLDZCQUEyQko7SUFDOUU7SUFFQSxPQUFPRztBQUNUIn0=