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
var _intrinsicLevel = /*#__PURE__*/ _interop_require_default(require("../context/local/intrinsicLevel"));
var _termAsConstructor = /*#__PURE__*/ _interop_require_default(require("../verifier/node/termAsConstructor"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function verifyTermAsConstructor(termNode, typeNode, fileContext) {
    var termVerifiedAsConstructor = false;
    var termString = fileContext.nodeAsString(termNode);
    fileContext.debug("Verifying the '".concat(termString, "' term as a constructor..."), termNode);
    var intrinsicLevelLocalContext = _intrinsicLevel.default.fromFileContext(fileContext), nonTerminalNode = termNode, childNodes = nonTerminalNode.getChildNodes(), localContext = intrinsicLevelLocalContext, childNodesVerified = _termAsConstructor.default.verifyChildNodes(childNodes, localContext, function() {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGVybUFzQ29uc3RydWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDb25zdHJ1Y3RvciBmcm9tIFwiLi4vY29uc3RydWN0b3JcIjtcbmltcG9ydCBJbnRyaW5zaWNMZXZlbExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbC9pbnRyaW5zaWNMZXZlbFwiO1xuaW1wb3J0IHRlcm1Bc0NvbnN0cnVjdG9yTm9kZVZlcmlmaWVyIGZyb20gXCIuLi92ZXJpZmllci9ub2RlL3Rlcm1Bc0NvbnN0cnVjdG9yXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVRlcm1Bc0NvbnN0cnVjdG9yKHRlcm1Ob2RlLCB0eXBlTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3IgPSBmYWxzZTtcblxuICBjb25zdCB0ZXJtU3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKTtcblxuICBmaWxlQ29udGV4dC5kZWJ1ZyhgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBhcyBhIGNvbnN0cnVjdG9yLi4uYCwgdGVybU5vZGUpO1xuXG4gIGNvbnN0IGludHJpbnNpY0xldmVsTG9jYWxDb250ZXh0ID0gSW50cmluc2ljTGV2ZWxMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSxcbiAgICAgICAgbm9uVGVybWluYWxOb2RlID0gdGVybU5vZGUsIC8vL1xuICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgbG9jYWxDb250ZXh0ID0gaW50cmluc2ljTGV2ZWxMb2NhbENvbnRleHQsICAvLy9cbiAgICAgICAgY2hpbGROb2Rlc1ZlcmlmaWVkID0gdGVybUFzQ29uc3RydWN0b3JOb2RlVmVyaWZpZXIudmVyaWZ5Q2hpbGROb2RlcyhjaGlsZE5vZGVzLCBsb2NhbENvbnRleHQsICgpID0+IHtcbiAgICAgICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICB9KTtcblxuICBpZiAoY2hpbGROb2Rlc1ZlcmlmaWVkKSB7XG4gICAgbGV0IHR5cGUgPSBudWxsO1xuXG4gICAgaWYgKHR5cGVOb2RlID09PSBudWxsKSB7XG4gICAgICB0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHlwZSA9IGZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTm9kZSh0eXBlTm9kZSk7XG5cbiAgICAgIGlmICh0eXBlICE9PSBudWxsKSB7XG4gICAgICAgIHRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3IgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdHlwZVN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyh0eXBlTm9kZSk7XG5cbiAgICAgICAgZmlsZUNvbnRleHQuZGVidWcoYFRoZSAnJHt0ZXJtU3RyaW5nfScgY29uc3RydWN0b3IncyAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBub3QgcHJlc2VudC5gLCB0ZXJtTm9kZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3IpIHtcbiAgICAgIGNvbnN0IHRva2VucyA9IGZpbGVDb250ZXh0LmdldFRva2VucygpLFxuICAgICAgICAgICAgY29uc3RydWN0b3IgPSBDb25zdHJ1Y3Rvci5mcm9tVGVybU5vZGVUeXBlQW5kVG9rZW5zKHRlcm1Ob2RlLCB0eXBlLCB0b2tlbnMpO1xuXG4gICAgICBmaWxlQ29udGV4dC5hZGRDb25zdHJ1Y3Rvcihjb25zdHJ1Y3Rvcik7XG4gICAgfVxuICB9XG5cbiAgaWYgKHRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3IpIHtcbiAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFzIGEgY29uc3RydWN0b3IuYCwgdGVybU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3I7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5VGVybUFzQ29uc3RydWN0b3IiLCJ0ZXJtTm9kZSIsInR5cGVOb2RlIiwiZmlsZUNvbnRleHQiLCJ0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yIiwidGVybVN0cmluZyIsIm5vZGVBc1N0cmluZyIsImRlYnVnIiwiaW50cmluc2ljTGV2ZWxMb2NhbENvbnRleHQiLCJJbnRyaW5zaWNMZXZlbExvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsIm5vblRlcm1pbmFsTm9kZSIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwibG9jYWxDb250ZXh0IiwiY2hpbGROb2Rlc1ZlcmlmaWVkIiwidGVybUFzQ29uc3RydWN0b3JOb2RlVmVyaWZpZXIiLCJ2ZXJpZnlDaGlsZE5vZGVzIiwidmVyaWZpZWRBaGVhZCIsInR5cGUiLCJmaW5kVHlwZUJ5VHlwZU5vZGUiLCJ0eXBlU3RyaW5nIiwidG9rZW5zIiwiZ2V0VG9rZW5zIiwiY29uc3RydWN0b3IiLCJDb25zdHJ1Y3RvciIsImZyb21UZXJtTm9kZVR5cGVBbmRUb2tlbnMiLCJhZGRDb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUF3QkE7OztrRUFKQTtxRUFDZTt3RUFDRzs7Ozs7O0FBRTNCLFNBQVNBLHdCQUF3QkMsUUFBUSxFQUFFQyxRQUFRLEVBQUVDLFdBQVc7SUFDN0UsSUFBSUMsNEJBQTRCO0lBRWhDLElBQU1DLGFBQWFGLFlBQVlHLFlBQVksQ0FBQ0w7SUFFNUNFLFlBQVlJLEtBQUssQ0FBQyxBQUFDLGtCQUE0QixPQUFYRixZQUFXLCtCQUE2Qko7SUFFNUUsSUFBTU8sNkJBQTZCQyx1QkFBMEIsQ0FBQ0MsZUFBZSxDQUFDUCxjQUN4RVEsa0JBQWtCVixVQUNsQlcsYUFBYUQsZ0JBQWdCRSxhQUFhLElBQzFDQyxlQUFlTiw0QkFDZk8scUJBQXFCQywwQkFBNkIsQ0FBQ0MsZ0JBQWdCLENBQUNMLFlBQVlFLGNBQWM7UUFDNUYsSUFBTUksZ0JBQWdCO1FBRXRCLE9BQU9BO0lBQ1Q7SUFFTixJQUFJSCxvQkFBb0I7UUFDdEIsSUFBSUksT0FBTztRQUVYLElBQUlqQixhQUFhLE1BQU07WUFDckJFLDRCQUE0QjtRQUM5QixPQUFPO1lBQ0xlLE9BQU9oQixZQUFZaUIsa0JBQWtCLENBQUNsQjtZQUV0QyxJQUFJaUIsU0FBUyxNQUFNO2dCQUNqQmYsNEJBQTRCO1lBQzlCLE9BQU87Z0JBQ0wsSUFBTWlCLGFBQWFsQixZQUFZRyxZQUFZLENBQUNKO2dCQUU1Q0MsWUFBWUksS0FBSyxDQUFDLEFBQUMsUUFBcUNjLE9BQTlCaEIsWUFBVyxxQkFBOEIsT0FBWGdCLFlBQVcsMkJBQXlCcEI7WUFDOUY7UUFDRjtRQUVBLElBQUlHLDJCQUEyQjtZQUM3QixJQUFNa0IsU0FBU25CLFlBQVlvQixTQUFTLElBQzlCQyxjQUFjQyxvQkFBVyxDQUFDQyx5QkFBeUIsQ0FBQ3pCLFVBQVVrQixNQUFNRztZQUUxRW5CLFlBQVl3QixjQUFjLENBQUNIO1FBQzdCO0lBQ0Y7SUFFQSxJQUFJcEIsMkJBQTJCO1FBQzdCRCxZQUFZSSxLQUFLLENBQUMsQUFBQyxvQkFBOEIsT0FBWEYsWUFBVyw2QkFBMkJKO0lBQzlFO0lBRUEsT0FBT0c7QUFDVCJ9