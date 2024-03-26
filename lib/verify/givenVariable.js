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
function verifyGivenVariable(variableNode, variables, context, verifyAhead) {
    var givenVariableVerified = false;
    var variableString = context.nodeAsString(variableNode);
    context.trace("Verifying the '".concat(variableString, "' given variable..."), variableNode);
    var variable = context.findVariableByVariableNode(variableNode);
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
        context.debug("...verified the '".concat(variableString, "' given variable."), variableNode);
    }
    return givenVariableVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZ2l2ZW5WYXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5R2l2ZW5WYXJpYWJsZSh2YXJpYWJsZU5vZGUsIHZhcmlhYmxlcywgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IGdpdmVuVmFyaWFibGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHZhcmlhYmxlU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcodmFyaWFibGVOb2RlKTtcblxuICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgZ2l2ZW4gdmFyaWFibGUuLi5gLCB2YXJpYWJsZU5vZGUpO1xuXG4gIGNvbnN0IHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpO1xuXG4gIGlmICh2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgIGxldCB2ZXJpZmllZEFoZWFkO1xuXG4gICAgdmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuXG4gICAgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICBpZiAoIXZlcmlmaWVkQWhlYWQpIHtcbiAgICAgIHZhcmlhYmxlcy5wb3AoKTtcbiAgICB9XG5cbiAgICBnaXZlblZhcmlhYmxlVmVyaWZpZWQgPSB2ZXJpZmllZEFoZWFkOyAvLy9cbiAgfVxuXG4gIGlmIChnaXZlblZhcmlhYmxlVmVyaWZpZWQpIHtcbiAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyBnaXZlbiB2YXJpYWJsZS5gLCB2YXJpYWJsZU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIGdpdmVuVmFyaWFibGVWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlHaXZlblZhcmlhYmxlIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGVzIiwiY29udGV4dCIsInZlcmlmeUFoZWFkIiwiZ2l2ZW5WYXJpYWJsZVZlcmlmaWVkIiwidmFyaWFibGVTdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsInZhcmlhYmxlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUiLCJ2ZXJpZmllZEFoZWFkIiwicHVzaCIsInBvcCIsImRlYnVnIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7OytCQUVBOzs7ZUFBd0JBOzs7QUFBVCxTQUFTQSxvQkFBb0JDLFlBQVksRUFBRUMsU0FBUyxFQUFFQyxPQUFPLEVBQUVDLFdBQVc7SUFDdkYsSUFBSUMsd0JBQXdCO0lBRTVCLElBQU1DLGlCQUFpQkgsUUFBUUksWUFBWSxDQUFDTjtJQUU1Q0UsUUFBUUssS0FBSyxDQUFDLEFBQUMsa0JBQWdDLE9BQWZGLGdCQUFlLHdCQUFzQkw7SUFFckUsSUFBTVEsV0FBV04sUUFBUU8sMEJBQTBCLENBQUNUO0lBRXBELElBQUlRLGFBQWEsTUFBTTtRQUNyQixJQUFJRTtRQUVKVCxVQUFVVSxJQUFJLENBQUNIO1FBRWZFLGdCQUFnQlA7UUFFaEIsSUFBSSxDQUFDTyxlQUFlO1lBQ2xCVCxVQUFVVyxHQUFHO1FBQ2Y7UUFFQVIsd0JBQXdCTSxlQUFlLEdBQUc7SUFDNUM7SUFFQSxJQUFJTix1QkFBdUI7UUFDekJGLFFBQVFXLEtBQUssQ0FBQyxBQUFDLG9CQUFrQyxPQUFmUixnQkFBZSxzQkFBb0JMO0lBQ3ZFO0lBRUEsT0FBT0k7QUFDVCJ9