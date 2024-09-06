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
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
var _termAsConstructor = /*#__PURE__*/ _interop_require_default(require("../verifier/termAsConstructor"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function verifyTermAsConstructor(termNode, typeNode, fileContext) {
    var termVerifiedAsConstructor = false;
    var termString = fileContext.nodeAsString(termNode);
    fileContext.debug("Verifying the '".concat(termString, "' term as a constructor..."), termNode);
    var localContext = _local.default.fromFileContext(fileContext), nonTerminalNode = termNode, childNodes = nonTerminalNode.getChildNodes(), childNodesVerified = _termAsConstructor.default.verifyChildNodes(childNodes, localContext, function() {
        var verifiedAhead = true;
        return verifiedAhead;
    });
    if (childNodesVerified) {
        var type = null;
        if (typeNode === null) {
            termVerifiedAsConstructor = true;
        } else {
            type = fileContext.findTypeByTypeNode(typeNode);
            if (type !== null) {
                termVerifiedAsConstructor = true;
            } else {
                var typeString = fileContext.nodeAsString(typeNode);
                fileContext.debug("The '".concat(termString, "' constructor's '").concat(typeString, "' type is not present."), termNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGVybUFzQ29uc3RydWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDb25zdHJ1Y3RvciBmcm9tIFwiLi4vY29uc3RydWN0b3JcIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbG9jYWxcIjtcbmltcG9ydCB0ZXJtQXNDb25zdHJ1Y3RvclZlcmlmaWVyIGZyb20gXCIuLi92ZXJpZmllci90ZXJtQXNDb25zdHJ1Y3RvclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlUZXJtQXNDb25zdHJ1Y3Rvcih0ZXJtTm9kZSwgdHlwZU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGxldCB0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yID0gZmFsc2U7XG5cbiAgY29uc3QgdGVybVN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyh0ZXJtTm9kZSk7XG5cbiAgZmlsZUNvbnRleHQuZGVidWcoYFZlcmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYXMgYSBjb25zdHJ1Y3Rvci4uLmAsIHRlcm1Ob2RlKTtcblxuICBjb25zdCBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSxcbiAgICAgICAgbm9uVGVybWluYWxOb2RlID0gdGVybU5vZGUsIC8vL1xuICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgY2hpbGROb2Rlc1ZlcmlmaWVkID0gdGVybUFzQ29uc3RydWN0b3JWZXJpZmllci52ZXJpZnlDaGlsZE5vZGVzKGNoaWxkTm9kZXMsIGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgIH0pO1xuXG4gIGlmIChjaGlsZE5vZGVzVmVyaWZpZWQpIHtcbiAgICBsZXQgdHlwZSA9IG51bGw7XG5cbiAgICBpZiAodHlwZU5vZGUgPT09IG51bGwpIHtcbiAgICAgIHRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3IgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0eXBlID0gZmlsZUNvbnRleHQuZmluZFR5cGVCeVR5cGVOb2RlKHR5cGVOb2RlKTtcblxuICAgICAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICAgICAgdGVybVZlcmlmaWVkQXNDb25zdHJ1Y3RvciA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0eXBlU3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKHR5cGVOb2RlKTtcblxuICAgICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgVGhlICcke3Rlcm1TdHJpbmd9JyBjb25zdHJ1Y3RvcidzICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIG5vdCBwcmVzZW50LmAsIHRlcm1Ob2RlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGVybVZlcmlmaWVkQXNDb25zdHJ1Y3Rvcikge1xuICAgICAgY29uc3QgdG9rZW5zID0gZmlsZUNvbnRleHQuZ2V0VG9rZW5zKCksXG4gICAgICAgICAgICBjb25zdHJ1Y3RvciA9IENvbnN0cnVjdG9yLmZyb21UZXJtTm9kZVR5cGVBbmRUb2tlbnModGVybU5vZGUsIHR5cGUsIHRva2Vucyk7XG5cbiAgICAgIGZpbGVDb250ZXh0LmFkZENvbnN0cnVjdG9yKGNvbnN0cnVjdG9yKTtcbiAgICB9XG4gIH1cblxuICBpZiAodGVybVZlcmlmaWVkQXNDb25zdHJ1Y3Rvcikge1xuICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYXMgYSBjb25zdHJ1Y3Rvci5gLCB0ZXJtTm9kZSk7XG4gIH1cblxuICByZXR1cm4gdGVybVZlcmlmaWVkQXNDb25zdHJ1Y3Rvcjtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlUZXJtQXNDb25zdHJ1Y3RvciIsInRlcm1Ob2RlIiwidHlwZU5vZGUiLCJmaWxlQ29udGV4dCIsInRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3IiLCJ0ZXJtU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwiZGVidWciLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJub25UZXJtaW5hbE5vZGUiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImNoaWxkTm9kZXNWZXJpZmllZCIsInRlcm1Bc0NvbnN0cnVjdG9yVmVyaWZpZXIiLCJ2ZXJpZnlDaGlsZE5vZGVzIiwidmVyaWZpZWRBaGVhZCIsInR5cGUiLCJmaW5kVHlwZUJ5VHlwZU5vZGUiLCJ0eXBlU3RyaW5nIiwidG9rZW5zIiwiZ2V0VG9rZW5zIiwiY29uc3RydWN0b3IiLCJDb25zdHJ1Y3RvciIsImZyb21UZXJtTm9kZVR5cGVBbmRUb2tlbnMiLCJhZGRDb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUF3QkE7OztrRUFKQTs0REFDQzt3RUFDYTs7Ozs7O0FBRXZCLFNBQVNBLHdCQUF3QkMsUUFBUSxFQUFFQyxRQUFRLEVBQUVDLFdBQVc7SUFDN0UsSUFBSUMsNEJBQTRCO0lBRWhDLElBQU1DLGFBQWFGLFlBQVlHLFlBQVksQ0FBQ0w7SUFFNUNFLFlBQVlJLEtBQUssQ0FBQyxBQUFDLGtCQUE0QixPQUFYRixZQUFXLCtCQUE2Qko7SUFFNUUsSUFBTU8sZUFBZUMsY0FBWSxDQUFDQyxlQUFlLENBQUNQLGNBQzVDUSxrQkFBa0JWLFVBQ2xCVyxhQUFhRCxnQkFBZ0JFLGFBQWEsSUFDMUNDLHFCQUFxQkMsMEJBQXlCLENBQUNDLGdCQUFnQixDQUFDSixZQUFZSixjQUFjO1FBQ3hGLElBQU1TLGdCQUFnQjtRQUV0QixPQUFPQTtJQUNUO0lBRU4sSUFBSUgsb0JBQW9CO1FBQ3RCLElBQUlJLE9BQU87UUFFWCxJQUFJaEIsYUFBYSxNQUFNO1lBQ3JCRSw0QkFBNEI7UUFDOUIsT0FBTztZQUNMYyxPQUFPZixZQUFZZ0Isa0JBQWtCLENBQUNqQjtZQUV0QyxJQUFJZ0IsU0FBUyxNQUFNO2dCQUNqQmQsNEJBQTRCO1lBQzlCLE9BQU87Z0JBQ0wsSUFBTWdCLGFBQWFqQixZQUFZRyxZQUFZLENBQUNKO2dCQUU1Q0MsWUFBWUksS0FBSyxDQUFDLEFBQUMsUUFBcUNhLE9BQTlCZixZQUFXLHFCQUE4QixPQUFYZSxZQUFXLDJCQUF5Qm5CO1lBQzlGO1FBQ0Y7UUFFQSxJQUFJRywyQkFBMkI7WUFDN0IsSUFBTWlCLFNBQVNsQixZQUFZbUIsU0FBUyxJQUM5QkMsY0FBY0Msb0JBQVcsQ0FBQ0MseUJBQXlCLENBQUN4QixVQUFVaUIsTUFBTUc7WUFFMUVsQixZQUFZdUIsY0FBYyxDQUFDSDtRQUM3QjtJQUNGO0lBRUEsSUFBSW5CLDJCQUEyQjtRQUM3QkQsWUFBWUksS0FBSyxDQUFDLEFBQUMsb0JBQThCLE9BQVhGLFlBQVcsNkJBQTJCSjtJQUM5RTtJQUVBLE9BQU9HO0FBQ1QifQ==