"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _shim = /*#__PURE__*/ _interop_require_default(require("../shim"));
var _term = /*#__PURE__*/ _interop_require_default(require("../term"));
var _termWithConstructors = /*#__PURE__*/ _interop_require_default(require("../unify/termWithConstructors"));
var _termWithBracketedConstructor = /*#__PURE__*/ _interop_require_default(require("../unify/termWithBracketedConstructor"));
var _query = require("../utilities/query");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var variableNodeQuery = (0, _query.nodeQuery)("/term/variable!");
var unifyTermFunctions = [
    _termWithBracketedConstructor.default,
    _termWithConstructors.default
], verifyTermFunctions = [
    verifyTermAsVariable
];
function verifyTerm(termNode, terms, localContext, verifyAhead) {
    var termVerified = false;
    var termString = localContext.nodeAsString(termNode);
    localContext.trace("Verifying the '".concat(termString, "' term..."), termNode);
    if (!termVerified) {
        var termUnified = unifyTermFunctions.some(function(unifyTermFunction) {
            var termUnified = unifyTermFunction(termNode, terms, localContext, verifyAhead);
            if (termUnified) {
                return true;
            }
        });
        termVerified = termUnified; ///
    }
    if (!termVerified) {
        termVerified = verifyTermFunctions.some(function(verifyTermFunction) {
            var termVerified = verifyTermFunction(termNode, terms, localContext, verifyAhead);
            if (termVerified) {
                return true;
            }
        });
    }
    if (termVerified) {
        localContext.debug("...verified the '".concat(termString, "' term."), termNode);
    }
    return termVerified;
}
Object.assign(_shim.default, {
    verifyTerm: verifyTerm
});
var _default = verifyTerm;
function verifyTermAsVariable(termNode, terms, localContext, verifyAhead) {
    var termVerifiedAsVariable = false;
    var variableNode = variableNodeQuery(termNode);
    if (variableNode !== null) {
        var termString = localContext.nodeAsString(termNode);
        localContext.trace("Verifying the '".concat(termString, "' term as a variable..."), termNode);
        var variableVerified = verifyVariable(variableNode, localContext);
        if (variableVerified) {
            var verifiedAhead;
            var type = variable.getType(), term = _term.default.fromTermNodeAndType(termNode, type);
            terms.push(term);
            verifiedAhead = verifyAhead();
            terms.pop();
            termVerifiedAsVariable = verifiedAhead; ///
        }
        if (termVerifiedAsVariable) {
            localContext.debug("...verified the '".concat(termString, "' term as a variable."), termNode);
        }
    }
    return termVerifiedAsVariable;
}
function verifyVariable(variableNode, localContext) {
    var variableVerified = false;
    var variableString = localContext.nodeAsString(variableNode);
    localContext.trace("Verifying the '".concat(variableString, "' variable..."), variableNode);
    var variablePresent = localContext.isVariablePresentByVariableNode(variableNode);
    if (!variablePresent) {
        localContext.trace("The '".concat(variableString, "' variable is not present."), variableNode);
    } else {
        variableVerified = true;
    }
    if (variableVerified) {
        localContext.debug("...verified the '".concat(variableString, "' variable."), variableNode);
    }
    return variableVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGVybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcbmltcG9ydCBUZXJtIGZyb20gXCIuLi90ZXJtXCI7XG5pbXBvcnQgdW5pZnlUZXJtV2l0aENvbnN0cnVjdG9ycyBmcm9tIFwiLi4vdW5pZnkvdGVybVdpdGhDb25zdHJ1Y3RvcnNcIjtcbmltcG9ydCB1bmlmeVRlcm1XaXRoQnJhY2tldGVkQ29uc3RydWN0b3IgZnJvbSBcIi4uL3VuaWZ5L3Rlcm1XaXRoQnJhY2tldGVkQ29uc3RydWN0b3JcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlIVwiKTtcblxuY29uc3QgdW5pZnlUZXJtRnVuY3Rpb25zID0gW1xuICAgICAgICB1bmlmeVRlcm1XaXRoQnJhY2tldGVkQ29uc3RydWN0b3IsXG4gICAgICAgIHVuaWZ5VGVybVdpdGhDb25zdHJ1Y3RvcnMsXG4gICAgICBdLFxuICAgICAgdmVyaWZ5VGVybUZ1bmN0aW9ucyA9IFtcbiAgICAgICAgdmVyaWZ5VGVybUFzVmFyaWFibGVcbiAgICAgIF07XG5cbmZ1bmN0aW9uIHZlcmlmeVRlcm0odGVybU5vZGUsIHRlcm1zLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCB0ZXJtVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCB0ZXJtU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyh0ZXJtTm9kZSk7XG5cbiAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLi4uYCwgdGVybU5vZGUpO1xuXG4gIGlmICghdGVybVZlcmlmaWVkKSB7XG4gICAgY29uc3QgdGVybVVuaWZpZWQgPSB1bmlmeVRlcm1GdW5jdGlvbnMuc29tZSgodW5pZnlUZXJtRnVuY3Rpb24pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1VbmlmaWVkID0gdW5pZnlUZXJtRnVuY3Rpb24odGVybU5vZGUsIHRlcm1zLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgaWYgKHRlcm1VbmlmaWVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGVybVZlcmlmaWVkID0gdGVybVVuaWZpZWQ7IC8vL1xuICB9XG5cbiAgaWYgKCF0ZXJtVmVyaWZpZWQpIHtcbiAgICB0ZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtRnVuY3Rpb25zLnNvbWUoKHZlcmlmeVRlcm1GdW5jdGlvbikgPT4ge1xuICAgICAgY29uc3QgdGVybVZlcmlmaWVkID0gdmVyaWZ5VGVybUZ1bmN0aW9uKHRlcm1Ob2RlLCB0ZXJtcywgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgIGlmICh0ZXJtVmVyaWZpZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBpZiAodGVybVZlcmlmaWVkKSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0uYCwgdGVybU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1WZXJpZmllZDtcbn1cblxuT2JqZWN0LmFzc2lnbihzaGltLCB7XG4gIHZlcmlmeVRlcm1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB2ZXJpZnlUZXJtO1xuXG5mdW5jdGlvbiB2ZXJpZnlUZXJtQXNWYXJpYWJsZSh0ZXJtTm9kZSwgdGVybXMsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHRlcm1WZXJpZmllZEFzVmFyaWFibGUgPSBmYWxzZTtcblxuICBjb25zdCB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeSh0ZXJtTm9kZSk7XG5cbiAgaWYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBhcyBhIHZhcmlhYmxlLi4uYCwgdGVybU5vZGUpO1xuXG4gICAgY29uc3QgdmFyaWFibGVWZXJpZmllZCA9IHZlcmlmeVZhcmlhYmxlKHZhcmlhYmxlTm9kZSwgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmICh2YXJpYWJsZVZlcmlmaWVkKSB7XG4gICAgICBsZXQgdmVyaWZpZWRBaGVhZDtcblxuICAgICAgY29uc3QgdHlwZSA9IHZhcmlhYmxlLmdldFR5cGUoKSxcbiAgICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZUFuZFR5cGUodGVybU5vZGUsIHR5cGUpO1xuXG4gICAgICB0ZXJtcy5wdXNoKHRlcm0pO1xuXG4gICAgICB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgICAgdGVybXMucG9wKCk7XG5cbiAgICAgIHRlcm1WZXJpZmllZEFzVmFyaWFibGUgPSB2ZXJpZmllZEFoZWFkOyAvLy9cbiAgICB9XG5cbiAgICBpZiAodGVybVZlcmlmaWVkQXNWYXJpYWJsZSkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYXMgYSB2YXJpYWJsZS5gLCB0ZXJtTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRlcm1WZXJpZmllZEFzVmFyaWFibGU7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVZhcmlhYmxlKHZhcmlhYmxlTm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCB2YXJpYWJsZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgdmFyaWFibGVTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHZhcmlhYmxlTm9kZSk7XG5cbiAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuLi5gLCB2YXJpYWJsZU5vZGUpO1xuXG4gIGNvbnN0IHZhcmlhYmxlUHJlc2VudCA9IGxvY2FsQ29udGV4dC5pc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG5cbiAgaWYgKCF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIGlzIG5vdCBwcmVzZW50LmAsIHZhcmlhYmxlTm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyaWFibGVWZXJpZmllZCA9IHRydWU7XG4gIH1cblxuICBpZiAodmFyaWFibGVWZXJpZmllZCkge1xuICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuYCwgdmFyaWFibGVOb2RlKTtcbiAgfVxuXG4gIHJldHVybiB2YXJpYWJsZVZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidW5pZnlUZXJtRnVuY3Rpb25zIiwidW5pZnlUZXJtV2l0aEJyYWNrZXRlZENvbnN0cnVjdG9yIiwidW5pZnlUZXJtV2l0aENvbnN0cnVjdG9ycyIsInZlcmlmeVRlcm1GdW5jdGlvbnMiLCJ2ZXJpZnlUZXJtQXNWYXJpYWJsZSIsInZlcmlmeVRlcm0iLCJ0ZXJtTm9kZSIsInRlcm1zIiwibG9jYWxDb250ZXh0IiwidmVyaWZ5QWhlYWQiLCJ0ZXJtVmVyaWZpZWQiLCJ0ZXJtU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJ0ZXJtVW5pZmllZCIsInNvbWUiLCJ1bmlmeVRlcm1GdW5jdGlvbiIsInZlcmlmeVRlcm1GdW5jdGlvbiIsImRlYnVnIiwiT2JqZWN0IiwiYXNzaWduIiwic2hpbSIsInRlcm1WZXJpZmllZEFzVmFyaWFibGUiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZVZlcmlmaWVkIiwidmVyaWZ5VmFyaWFibGUiLCJ2ZXJpZmllZEFoZWFkIiwidHlwZSIsInZhcmlhYmxlIiwiZ2V0VHlwZSIsInRlcm0iLCJUZXJtIiwiZnJvbVRlcm1Ob2RlQW5kVHlwZSIsInB1c2giLCJwb3AiLCJ2YXJpYWJsZVN0cmluZyIsInZhcmlhYmxlUHJlc2VudCIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTJEQTs7O2VBQUE7OzsyREF6RGlCOzJEQUNBOzJFQUNxQjttRkFDUTtxQkFFcEI7Ozs7OztBQUUxQixJQUFNQSxvQkFBb0JDLElBQUFBLGdCQUFTLEVBQUM7QUFFcEMsSUFBTUMscUJBQXFCO0lBQ25CQyxxQ0FBaUM7SUFDakNDLDZCQUF5QjtDQUMxQixFQUNEQyxzQkFBc0I7SUFDcEJDO0NBQ0Q7QUFFUCxTQUFTQyxXQUFXQyxRQUFRLEVBQUVDLEtBQUssRUFBRUMsWUFBWSxFQUFFQyxXQUFXO0lBQzVELElBQUlDLGVBQWU7SUFFbkIsSUFBTUMsYUFBYUgsYUFBYUksWUFBWSxDQUFDTjtJQUU3Q0UsYUFBYUssS0FBSyxDQUFDLEFBQUMsa0JBQTRCLE9BQVhGLFlBQVcsY0FBWUw7SUFFNUQsSUFBSSxDQUFDSSxjQUFjO1FBQ2pCLElBQU1JLGNBQWNkLG1CQUFtQmUsSUFBSSxDQUFDLFNBQUNDO1lBQzNDLElBQU1GLGNBQWNFLGtCQUFrQlYsVUFBVUMsT0FBT0MsY0FBY0M7WUFFckUsSUFBSUssYUFBYTtnQkFDZixPQUFPO1lBQ1Q7UUFDRjtRQUVBSixlQUFlSSxhQUFhLEdBQUc7SUFDakM7SUFFQSxJQUFJLENBQUNKLGNBQWM7UUFDakJBLGVBQWVQLG9CQUFvQlksSUFBSSxDQUFDLFNBQUNFO1lBQ3ZDLElBQU1QLGVBQWVPLG1CQUFtQlgsVUFBVUMsT0FBT0MsY0FBY0M7WUFFdkUsSUFBSUMsY0FBYztnQkFDaEIsT0FBTztZQUNUO1FBQ0Y7SUFDRjtJQUVBLElBQUlBLGNBQWM7UUFDaEJGLGFBQWFVLEtBQUssQ0FBQyxBQUFDLG9CQUE4QixPQUFYUCxZQUFXLFlBQVVMO0lBQzlEO0lBRUEsT0FBT0k7QUFDVDtBQUVBUyxPQUFPQyxNQUFNLENBQUNDLGFBQUksRUFBRTtJQUNsQmhCLFlBQUFBO0FBQ0Y7SUFFQSxXQUFlQTtBQUVmLFNBQVNELHFCQUFxQkUsUUFBUSxFQUFFQyxLQUFLLEVBQUVDLFlBQVksRUFBRUMsV0FBVztJQUN0RSxJQUFJYSx5QkFBeUI7SUFFN0IsSUFBTUMsZUFBZXpCLGtCQUFrQlE7SUFFdkMsSUFBSWlCLGlCQUFpQixNQUFNO1FBQ3pCLElBQU1aLGFBQWFILGFBQWFJLFlBQVksQ0FBQ047UUFFN0NFLGFBQWFLLEtBQUssQ0FBQyxBQUFDLGtCQUE0QixPQUFYRixZQUFXLDRCQUEwQkw7UUFFMUUsSUFBTWtCLG1CQUFtQkMsZUFBZUYsY0FBY2Y7UUFFdEQsSUFBSWdCLGtCQUFrQjtZQUNwQixJQUFJRTtZQUVKLElBQU1DLE9BQU9DLFNBQVNDLE9BQU8sSUFDdkJDLE9BQU9DLGFBQUksQ0FBQ0MsbUJBQW1CLENBQUMxQixVQUFVcUI7WUFFaERwQixNQUFNMEIsSUFBSSxDQUFDSDtZQUVYSixnQkFBZ0JqQjtZQUVoQkYsTUFBTTJCLEdBQUc7WUFFVFoseUJBQXlCSSxlQUFlLEdBQUc7UUFDN0M7UUFFQSxJQUFJSix3QkFBd0I7WUFDMUJkLGFBQWFVLEtBQUssQ0FBQyxBQUFDLG9CQUE4QixPQUFYUCxZQUFXLDBCQUF3Qkw7UUFDNUU7SUFDRjtJQUVBLE9BQU9nQjtBQUNUO0FBRUEsU0FBU0csZUFBZUYsWUFBWSxFQUFFZixZQUFZO0lBQ2hELElBQUlnQixtQkFBbUI7SUFFdkIsSUFBTVcsaUJBQWlCM0IsYUFBYUksWUFBWSxDQUFDVztJQUVqRGYsYUFBYUssS0FBSyxDQUFDLEFBQUMsa0JBQWdDLE9BQWZzQixnQkFBZSxrQkFBZ0JaO0lBRXBFLElBQU1hLGtCQUFrQjVCLGFBQWE2QiwrQkFBK0IsQ0FBQ2Q7SUFFckUsSUFBSSxDQUFDYSxpQkFBaUI7UUFDcEI1QixhQUFhSyxLQUFLLENBQUMsQUFBQyxRQUFzQixPQUFmc0IsZ0JBQWUsK0JBQTZCWjtJQUN6RSxPQUFPO1FBQ0xDLG1CQUFtQjtJQUNyQjtJQUVBLElBQUlBLGtCQUFrQjtRQUNwQmhCLGFBQWFVLEtBQUssQ0FBQyxBQUFDLG9CQUFrQyxPQUFmaUIsZ0JBQWUsZ0JBQWNaO0lBQ3RFO0lBRUEsT0FBT0M7QUFDVCJ9