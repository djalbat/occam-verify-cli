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
    var nonTerminalNode = termNode, childNodes = nonTerminalNode.getChildNodes(), localContext = _local.default.fromFileContext(fileContext), childNodesVerified = _termAsConstructor.default.verifyChildNodes(childNodes, localContext, function() {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGVybUFzQ29uc3RydWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBDb25zdHJ1Y3RvciBmcm9tIFwiLi4vY29uc3RydWN0b3JcIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbG9jYWxcIjtcbmltcG9ydCB0ZXJtQXNDb25zdHJ1Y3Rvck5vZGVWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXIvbm9kZS90ZXJtQXNDb25zdHJ1Y3RvclwiO1xuXG5pbXBvcnQgeyB0eXBlTmFtZUZyb21UeXBlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5VGVybUFzQ29uc3RydWN0b3IodGVybU5vZGUsIHR5cGVOb2RlLCBmaWxlQ29udGV4dCkge1xuICBsZXQgdGVybVZlcmlmaWVkQXNDb25zdHJ1Y3RvciA9IGZhbHNlO1xuXG4gIGNvbnN0IHRlcm1TdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcodGVybU5vZGUpO1xuXG4gIGZpbGVDb250ZXh0LmRlYnVnKGBWZXJpZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFzIGEgY29uc3RydWN0b3IuLi5gLCB0ZXJtTm9kZSk7XG5cbiAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gdGVybU5vZGUsIC8vL1xuICAgICAgICBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKSxcbiAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgIGNoaWxkTm9kZXNWZXJpZmllZCA9IHRlcm1Bc0NvbnN0cnVjdG9yTm9kZVZlcmlmaWVyLnZlcmlmeUNoaWxkTm9kZXMoY2hpbGROb2RlcywgbG9jYWxDb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgfSk7XG5cbiAgaWYgKGNoaWxkTm9kZXNWZXJpZmllZCkge1xuICAgIGxldCB0eXBlID0gbnVsbDtcblxuICAgIGlmICh0eXBlTm9kZSA9PT0gbnVsbCkge1xuICAgICAgdGVybVZlcmlmaWVkQXNDb25zdHJ1Y3RvciA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpO1xuXG4gICAgICB0eXBlID0gZmlsZUNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgICAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICAgICAgdGVybVZlcmlmaWVkQXNDb25zdHJ1Y3RvciA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgVGhlICcke3Rlcm1TdHJpbmd9JyBjb25zdHJ1Y3RvcidzICcke3R5cGVOYW1lfScgdHlwZSBpcyBub3QgcHJlc2VudC5gLCB0ZXJtTm9kZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3IpIHtcbiAgICAgIGNvbnN0IHRva2VucyA9IGZpbGVDb250ZXh0LmdldFRva2VucygpLFxuICAgICAgICAgICAgY29uc3RydWN0b3IgPSBDb25zdHJ1Y3Rvci5mcm9tVGVybU5vZGVUeXBlQW5kVG9rZW5zKHRlcm1Ob2RlLCB0eXBlLCB0b2tlbnMpO1xuXG4gICAgICBmaWxlQ29udGV4dC5hZGRDb25zdHJ1Y3Rvcihjb25zdHJ1Y3Rvcik7XG4gICAgfVxuICB9XG5cbiAgaWYgKHRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3IpIHtcbiAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFzIGEgY29uc3RydWN0b3IuYCwgdGVybU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1WZXJpZmllZEFzQ29uc3RydWN0b3I7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5VGVybUFzQ29uc3RydWN0b3IiLCJ0ZXJtTm9kZSIsInR5cGVOb2RlIiwiZmlsZUNvbnRleHQiLCJ0ZXJtVmVyaWZpZWRBc0NvbnN0cnVjdG9yIiwidGVybVN0cmluZyIsIm5vZGVBc1N0cmluZyIsImRlYnVnIiwibm9uVGVybWluYWxOb2RlIiwiY2hpbGROb2RlcyIsImdldENoaWxkTm9kZXMiLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJjaGlsZE5vZGVzVmVyaWZpZWQiLCJ0ZXJtQXNDb25zdHJ1Y3Rvck5vZGVWZXJpZmllciIsInZlcmlmeUNoaWxkTm9kZXMiLCJ2ZXJpZmllZEFoZWFkIiwidHlwZSIsInR5cGVOYW1lIiwidHlwZU5hbWVGcm9tVHlwZU5vZGUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJ0b2tlbnMiLCJnZXRUb2tlbnMiLCJjb25zdHJ1Y3RvciIsIkNvbnN0cnVjdG9yIiwiZnJvbVRlcm1Ob2RlVHlwZUFuZFRva2VucyIsImFkZENvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQXdCQTs7O2tFQU5BOzREQUNDO3dFQUNpQjtxQkFFTDs7Ozs7O0FBRXRCLFNBQVNBLHdCQUF3QkMsUUFBUSxFQUFFQyxRQUFRLEVBQUVDLFdBQVc7SUFDN0UsSUFBSUMsNEJBQTRCO0lBRWhDLElBQU1DLGFBQWFGLFlBQVlHLFlBQVksQ0FBQ0w7SUFFNUNFLFlBQVlJLEtBQUssQ0FBQyxBQUFDLGtCQUE0QixPQUFYRixZQUFXLCtCQUE2Qko7SUFFNUUsSUFBTU8sa0JBQWtCUCxVQUNsQlEsYUFBYUQsZ0JBQWdCRSxhQUFhLElBQzFDQyxlQUFlQyxjQUFZLENBQUNDLGVBQWUsQ0FBQ1YsY0FDNUNXLHFCQUFxQkMsMEJBQTZCLENBQUNDLGdCQUFnQixDQUFDUCxZQUFZRSxjQUFjO1FBQzVGLElBQU1NLGdCQUFnQjtRQUV0QixPQUFPQTtJQUNUO0lBRU4sSUFBSUgsb0JBQW9CO1FBQ3RCLElBQUlJLE9BQU87UUFFWCxJQUFJaEIsYUFBYSxNQUFNO1lBQ3JCRSw0QkFBNEI7UUFDOUIsT0FBTztZQUNMLElBQU1lLFdBQVdDLElBQUFBLDJCQUFvQixFQUFDbEI7WUFFdENnQixPQUFPZixZQUFZa0Isa0JBQWtCLENBQUNGO1lBRXRDLElBQUlELFNBQVMsTUFBTTtnQkFDakJkLDRCQUE0QjtZQUM5QixPQUFPO2dCQUNMRCxZQUFZSSxLQUFLLENBQUMsQUFBQyxRQUFxQ1ksT0FBOUJkLFlBQVcscUJBQTRCLE9BQVRjLFVBQVMsMkJBQXlCbEI7WUFDNUY7UUFDRjtRQUVBLElBQUlHLDJCQUEyQjtZQUM3QixJQUFNa0IsU0FBU25CLFlBQVlvQixTQUFTLElBQzlCQyxjQUFjQyxvQkFBVyxDQUFDQyx5QkFBeUIsQ0FBQ3pCLFVBQVVpQixNQUFNSTtZQUUxRW5CLFlBQVl3QixjQUFjLENBQUNIO1FBQzdCO0lBQ0Y7SUFFQSxJQUFJcEIsMkJBQTJCO1FBQzdCRCxZQUFZSSxLQUFLLENBQUMsQUFBQyxvQkFBOEIsT0FBWEYsWUFBVyw2QkFBMkJKO0lBQzlFO0lBRUEsT0FBT0c7QUFDVCJ9