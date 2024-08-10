"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyGivenVariable;
    }
});
function verifyGivenVariable(variableNode, variables, localContext, verifyAhead) {
    var givenVariableVerified = false;
    var variableString = localContext.nodeAsString(variableNode);
    localContext.trace("Verifying the '".concat(variableString, "' given variable..."), variableNode);
    var variable = localContext.findVariableByVariableNode(variableNode);
    if (variable !== null) {
        var verifiedAhead;
        variables.push(variable);
        verifiedAhead = verifyAhead();
        if (!verifiedAhead) {
            variables.pop();
        }
        givenVariableVerified = verifiedAhead; ///
    }
    if (givenVariableVerified) {
        localContext.debug("...verified the '".concat(variableString, "' given variable."), variableNode);
    }
    return givenVariableVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZ2l2ZW5WYXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5R2l2ZW5WYXJpYWJsZSh2YXJpYWJsZU5vZGUsIHZhcmlhYmxlcywgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgZ2l2ZW5WYXJpYWJsZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgdmFyaWFibGVTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHZhcmlhYmxlTm9kZSk7XG5cbiAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgZ2l2ZW4gdmFyaWFibGUuLi5gLCB2YXJpYWJsZU5vZGUpO1xuXG4gIGNvbnN0IHZhcmlhYmxlID0gbG9jYWxDb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG5cbiAgaWYgKHZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgbGV0IHZlcmlmaWVkQWhlYWQ7XG5cbiAgICB2YXJpYWJsZXMucHVzaCh2YXJpYWJsZSk7XG5cbiAgICB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgIGlmICghdmVyaWZpZWRBaGVhZCkge1xuICAgICAgdmFyaWFibGVzLnBvcCgpO1xuICAgIH1cblxuICAgIGdpdmVuVmFyaWFibGVWZXJpZmllZCA9IHZlcmlmaWVkQWhlYWQ7IC8vL1xuICB9XG5cbiAgaWYgKGdpdmVuVmFyaWFibGVWZXJpZmllZCkge1xuICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgZ2l2ZW4gdmFyaWFibGUuYCwgdmFyaWFibGVOb2RlKTtcbiAgfVxuXG4gIHJldHVybiBnaXZlblZhcmlhYmxlVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5R2l2ZW5WYXJpYWJsZSIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlcyIsImxvY2FsQ29udGV4dCIsInZlcmlmeUFoZWFkIiwiZ2l2ZW5WYXJpYWJsZVZlcmlmaWVkIiwidmFyaWFibGVTdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsInZhcmlhYmxlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUiLCJ2ZXJpZmllZEFoZWFkIiwicHVzaCIsInBvcCIsImRlYnVnIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFFQTs7O2VBQXdCQTs7O0FBQVQsU0FBU0Esb0JBQW9CQyxZQUFZLEVBQUVDLFNBQVMsRUFBRUMsWUFBWSxFQUFFQyxXQUFXO0lBQzVGLElBQUlDLHdCQUF3QjtJQUU1QixJQUFNQyxpQkFBaUJILGFBQWFJLFlBQVksQ0FBQ047SUFFakRFLGFBQWFLLEtBQUssQ0FBQyxBQUFDLGtCQUFnQyxPQUFmRixnQkFBZSx3QkFBc0JMO0lBRTFFLElBQU1RLFdBQVdOLGFBQWFPLDBCQUEwQixDQUFDVDtJQUV6RCxJQUFJUSxhQUFhLE1BQU07UUFDckIsSUFBSUU7UUFFSlQsVUFBVVUsSUFBSSxDQUFDSDtRQUVmRSxnQkFBZ0JQO1FBRWhCLElBQUksQ0FBQ08sZUFBZTtZQUNsQlQsVUFBVVcsR0FBRztRQUNmO1FBRUFSLHdCQUF3Qk0sZUFBZSxHQUFHO0lBQzVDO0lBRUEsSUFBSU4sdUJBQXVCO1FBQ3pCRixhQUFhVyxLQUFLLENBQUMsQUFBQyxvQkFBa0MsT0FBZlIsZ0JBQWUsc0JBQW9CTDtJQUM1RTtJQUVBLE9BQU9JO0FBQ1QifQ==