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
    var nonTerminalNode = termNode, childNodes = nonTerminalNode.getChildNodes(), childNodesVerified = _termAsConstructor.default.verifyChildNodes(childNodes, fileContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGVybUFzQ29uc3RydWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDb25zdHJ1Y3RvciBmcm9tIFwiLi4vY29uc3RydWN0b3JcIjtcbmltcG9ydCB0ZXJtQXNDb25zdHJ1Y3Rvck5vZGVWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXIvbm9kZS90ZXJtQXNDb25zdHJ1Y3RvclwiO1xuXG5pbXBvcnQgeyB0eXBlTmFtZUZyb21UeXBlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5VGVybUFzQ29uc3RydWN0b3IodGVybU5vZGUsIHR5cGVOb2RlLCBmaWxlQ29udGV4dCkge1xuICBsZXQgdGVybVZlcmlmaWVkQXNDb25zdHJ1Y3RvciA9IGZhbHNlO1xuXG4gIGNvbnN0IHRlcm1TdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcodGVybU5vZGUpO1xuXG4gIGZpbGVDb250ZXh0LmRlYnVnKGBWZXJpZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFzIGEgY29uc3RydWN0b3IuLi5gLCB0ZXJtTm9kZSk7XG5cbiAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gdGVybU5vZGUsIC8vL1xuICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgY2hpbGROb2Rlc1ZlcmlmaWVkID0gdGVybUFzQ29uc3RydWN0b3JOb2RlVmVyaWZpZXIudmVyaWZ5Q2hpbGROb2RlcyhjaGlsZE5vZGVzLCBmaWxlQ29udGV4dCk7XG5cbiAgaWYgKGNoaWxkTm9kZXNWZXJpZmllZCkge1xuICAgIGxldCB0eXBlID0gbnVsbDtcblxuICAgIGlmICh0eXBlTm9kZSA9PT0gbnVsbCkge1xuICAgICAgdGVybVZlcmlmaWVkQXNDb25zdHJ1Y3RvciA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpO1xuXG4gICAgICB0eXBlID0gZmlsZUNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgICAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICAgICAgdGVybVZlcmlmaWVkQXNDb25zdHJ1Y3RvciA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaWxlQ29udGV4dC5pbmZvKGBUaGUgJyR7dGVybVN0cmluZ30nIGNvbnN0cnVjdG9yJ3MgJyR7dHlwZU5hbWV9JyB0eXBlIGlzIG5vdCBwcmVzZW50LmAsIHRlcm1Ob2RlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGVybVZlcmlmaWVkQXNDb25zdHJ1Y3Rvcikge1xuICAgICAgY29uc3QgdG9rZW5zID0gZmlsZUNvbnRleHQuZ2V0VG9rZW5zKCksXG4gICAgICAgICAgICBjb25zdHJ1Y3RvciA9IENvbnN0cnVjdG9yLmZyb21UZXJtTm9kZVR5cGVBbmRUb2tlbnModGVybU5vZGUsIHR5cGUsIHRva2Vucyk7XG5cbiAgICAgIGZpbGVDb250ZXh0LmFkZENvbnN0cnVjdG9yKGNvbnN0cnVjdG9yKTtcbiAgICB9XG4gIH1cblxuICBpZiAodGVybVZlcmlmaWVkQXNDb25zdHJ1Y3Rvcikge1xuICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYXMgYSBjb25zdHJ1Y3Rvci5gLCB0ZXJtTm9kZSk7XG4gIH1cblxuICByZXR1cm4gdGVybVZlcmlmaWVkQXNDb25zdHJ1Y3Rvcjtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlUZXJtQXNDb25zdHJ1Y3RvciIsInRlcm1Ob2RlIiwidHlwZU5vZGUiLCJmaWxlQ29udGV4dCIsInRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3IiLCJ0ZXJtU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwiZGVidWciLCJub25UZXJtaW5hbE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImNoaWxkTm9kZXNWZXJpZmllZCIsInRlcm1Bc0NvbnN0cnVjdG9yTm9kZVZlcmlmaWVyIiwidmVyaWZ5Q2hpbGROb2RlcyIsInR5cGUiLCJ0eXBlTmFtZSIsInR5cGVOYW1lRnJvbVR5cGVOb2RlIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwiaW5mbyIsInRva2VucyIsImdldFRva2VucyIsImNvbnN0cnVjdG9yIiwiQ29uc3RydWN0b3IiLCJmcm9tVGVybU5vZGVUeXBlQW5kVG9rZW5zIiwiYWRkQ29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBd0JBOzs7a0VBTEE7d0VBQ2tCO3FCQUVMOzs7Ozs7QUFFdEIsU0FBU0Esd0JBQXdCQyxRQUFRLEVBQUVDLFFBQVEsRUFBRUMsV0FBVztJQUM3RSxJQUFJQyw0QkFBNEI7SUFFaEMsSUFBTUMsYUFBYUYsWUFBWUcsWUFBWSxDQUFDTDtJQUU1Q0UsWUFBWUksS0FBSyxDQUFDLEFBQUMsa0JBQTRCLE9BQVhGLFlBQVcsK0JBQTZCSjtJQUU1RSxJQUFNTyxrQkFBa0JQLFVBQ2xCUSxhQUFhRCxnQkFBZ0JFLGFBQWEsSUFDMUNDLHFCQUFxQkMsMEJBQTZCLENBQUNDLGdCQUFnQixDQUFDSixZQUFZTjtJQUV0RixJQUFJUSxvQkFBb0I7UUFDdEIsSUFBSUcsT0FBTztRQUVYLElBQUlaLGFBQWEsTUFBTTtZQUNyQkUsNEJBQTRCO1FBQzlCLE9BQU87WUFDTCxJQUFNVyxXQUFXQyxJQUFBQSwyQkFBb0IsRUFBQ2Q7WUFFdENZLE9BQU9YLFlBQVljLGtCQUFrQixDQUFDRjtZQUV0QyxJQUFJRCxTQUFTLE1BQU07Z0JBQ2pCViw0QkFBNEI7WUFDOUIsT0FBTztnQkFDTEQsWUFBWWUsSUFBSSxDQUFDLEFBQUMsUUFBcUNILE9BQTlCVixZQUFXLHFCQUE0QixPQUFUVSxVQUFTLDJCQUF5QmQ7WUFDM0Y7UUFDRjtRQUVBLElBQUlHLDJCQUEyQjtZQUM3QixJQUFNZSxTQUFTaEIsWUFBWWlCLFNBQVMsSUFDOUJDLGNBQWNDLG9CQUFXLENBQUNDLHlCQUF5QixDQUFDdEIsVUFBVWEsTUFBTUs7WUFFMUVoQixZQUFZcUIsY0FBYyxDQUFDSDtRQUM3QjtJQUNGO0lBRUEsSUFBSWpCLDJCQUEyQjtRQUM3QkQsWUFBWUksS0FBSyxDQUFDLEFBQUMsb0JBQThCLE9BQVhGLFlBQVcsNkJBQTJCSjtJQUM5RTtJQUVBLE9BQU9HO0FBQ1QifQ==