"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyVariable;
    }
});
function verifyVariable(variableNode, localContext) {
    var variableVerified = false;
    var variableString = localContext.nodeAsString(variableNode);
    localContext.trace("Verifying the '".concat(variableString, "' variable..."), variableNode);
    var variablePresent = localContext.isVariablePresentByVariableNode(variableNode);
    if (variablePresent) {
        variableVerified = true;
    }
    if (variableVerified) {
        localContext.debug("...verified the '".concat(variableString, "' variable."), variableNode);
    }
    return variableVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVZhcmlhYmxlKHZhcmlhYmxlTm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCB2YXJpYWJsZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgdmFyaWFibGVTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHZhcmlhYmxlTm9kZSk7XG5cbiAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuLi5gLCB2YXJpYWJsZU5vZGUpO1xuXG4gIGNvbnN0IHZhcmlhYmxlUHJlc2VudCA9IGxvY2FsQ29udGV4dC5pc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG5cbiAgaWYgKHZhcmlhYmxlUHJlc2VudCkge1xuICAgIHZhcmlhYmxlVmVyaWZpZWQgPSB0cnVlO1xuICB9XG5cbiAgaWYgKHZhcmlhYmxlVmVyaWZpZWQpIHtcbiAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLmAsIHZhcmlhYmxlTm9kZSk7XG4gIH1cblxuICByZXR1cm4gdmFyaWFibGVWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlWYXJpYWJsZSIsInZhcmlhYmxlTm9kZSIsImxvY2FsQ29udGV4dCIsInZhcmlhYmxlVmVyaWZpZWQiLCJ2YXJpYWJsZVN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwidmFyaWFibGVQcmVzZW50IiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTm9kZSIsImRlYnVnIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFFQTs7O2VBQXdCQTs7O0FBQVQsU0FBU0EsZUFBZUMsWUFBWSxFQUFFQyxZQUFZO0lBQy9ELElBQUlDLG1CQUFtQjtJQUV2QixJQUFNQyxpQkFBaUJGLGFBQWFHLFlBQVksQ0FBQ0o7SUFFakRDLGFBQWFJLEtBQUssQ0FBQyxBQUFDLGtCQUFnQyxPQUFmRixnQkFBZSxrQkFBZ0JIO0lBRXBFLElBQU1NLGtCQUFrQkwsYUFBYU0sK0JBQStCLENBQUNQO0lBRXJFLElBQUlNLGlCQUFpQjtRQUNuQkosbUJBQW1CO0lBQ3JCO0lBRUEsSUFBSUEsa0JBQWtCO1FBQ3BCRCxhQUFhTyxLQUFLLENBQUMsQUFBQyxvQkFBa0MsT0FBZkwsZ0JBQWUsZ0JBQWNIO0lBQ3RFO0lBRUEsT0FBT0U7QUFDVCJ9