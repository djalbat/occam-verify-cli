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
var _array = require("../utilities/array");
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
        var variables = [], variableVerified = verifyVariable(variableNode, variables, localContext);
        if (variableVerified) {
            var verifiedAhead;
            var firstVariable = (0, _array.first)(variables), variable = firstVariable, type = variable.getType(), term = _term.default.fromTermNodeAndType(termNode, type);
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
function verifyVariable(variableNode, variables, localContext) {
    var variableVerified = false;
    var variableString = localContext.nodeAsString(variableNode);
    localContext.trace("Verifying the '".concat(variableString, "' variable..."), variableNode);
    var variable = localContext.findVariableByVariableNode(variableNode);
    if (variable === null) {
        localContext.trace("The '".concat(variableString, "' variable is not present."), variableNode);
    } else {
        variables.push(variable);
        variableVerified = true;
    }
    if (variableVerified) {
        localContext.debug("...verified the '".concat(variableString, "' variable."), variableNode);
    }
    return variableVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGVybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcbmltcG9ydCBUZXJtIGZyb20gXCIuLi90ZXJtXCI7XG5pbXBvcnQgdW5pZnlUZXJtV2l0aENvbnN0cnVjdG9ycyBmcm9tIFwiLi4vdW5pZnkvdGVybVdpdGhDb25zdHJ1Y3RvcnNcIjtcbmltcG9ydCB1bmlmeVRlcm1XaXRoQnJhY2tldGVkQ29uc3RydWN0b3IgZnJvbSBcIi4uL3VuaWZ5L3Rlcm1XaXRoQnJhY2tldGVkQ29uc3RydWN0b3JcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0vdmFyaWFibGUhXCIpO1xuXG5jb25zdCB1bmlmeVRlcm1GdW5jdGlvbnMgPSBbXG4gICAgICAgIHVuaWZ5VGVybVdpdGhCcmFja2V0ZWRDb25zdHJ1Y3RvcixcbiAgICAgICAgdW5pZnlUZXJtV2l0aENvbnN0cnVjdG9ycyxcbiAgICAgIF0sXG4gICAgICB2ZXJpZnlUZXJtRnVuY3Rpb25zID0gW1xuICAgICAgICB2ZXJpZnlUZXJtQXNWYXJpYWJsZVxuICAgICAgXTtcblxuZnVuY3Rpb24gdmVyaWZ5VGVybSh0ZXJtTm9kZSwgdGVybXMsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHRlcm1WZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHRlcm1TdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKTtcblxuICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0uLi5gLCB0ZXJtTm9kZSk7XG5cbiAgaWYgKCF0ZXJtVmVyaWZpZWQpIHtcbiAgICBjb25zdCB0ZXJtVW5pZmllZCA9IHVuaWZ5VGVybUZ1bmN0aW9ucy5zb21lKCh1bmlmeVRlcm1GdW5jdGlvbikgPT4ge1xuICAgICAgY29uc3QgdGVybVVuaWZpZWQgPSB1bmlmeVRlcm1GdW5jdGlvbih0ZXJtTm9kZSwgdGVybXMsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICBpZiAodGVybVVuaWZpZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0ZXJtVmVyaWZpZWQgPSB0ZXJtVW5pZmllZDsgLy8vXG4gIH1cblxuICBpZiAoIXRlcm1WZXJpZmllZCkge1xuICAgIHRlcm1WZXJpZmllZCA9IHZlcmlmeVRlcm1GdW5jdGlvbnMuc29tZSgodmVyaWZ5VGVybUZ1bmN0aW9uKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtRnVuY3Rpb24odGVybU5vZGUsIHRlcm1zLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgaWYgKHRlcm1WZXJpZmllZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlmICh0ZXJtVmVyaWZpZWQpIHtcbiAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS5gLCB0ZXJtTm9kZSk7XG4gIH1cblxuICByZXR1cm4gdGVybVZlcmlmaWVkO1xufVxuXG5PYmplY3QuYXNzaWduKHNoaW0sIHtcbiAgdmVyaWZ5VGVybVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHZlcmlmeVRlcm07XG5cbmZ1bmN0aW9uIHZlcmlmeVRlcm1Bc1ZhcmlhYmxlKHRlcm1Ob2RlLCB0ZXJtcywgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgdGVybVZlcmlmaWVkQXNWYXJpYWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKTtcblxuICBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgdGVybVN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcodGVybU5vZGUpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFzIGEgdmFyaWFibGUuLi5gLCB0ZXJtTm9kZSk7XG5cbiAgICBjb25zdCB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICB2YXJpYWJsZVZlcmlmaWVkID0gdmVyaWZ5VmFyaWFibGUodmFyaWFibGVOb2RlLCB2YXJpYWJsZXMsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAodmFyaWFibGVWZXJpZmllZCkge1xuICAgICAgbGV0IHZlcmlmaWVkQWhlYWQ7XG5cbiAgICAgIGNvbnN0IGZpcnN0VmFyaWFibGUgPSBmaXJzdCh2YXJpYWJsZXMpLFxuICAgICAgICAgICAgdmFyaWFibGUgPSBmaXJzdFZhcmlhYmxlLCAvLy9cbiAgICAgICAgICAgIHR5cGUgPSB2YXJpYWJsZS5nZXRUeXBlKCksXG4gICAgICAgICAgICB0ZXJtID0gVGVybS5mcm9tVGVybU5vZGVBbmRUeXBlKHRlcm1Ob2RlLCB0eXBlKTtcblxuICAgICAgdGVybXMucHVzaCh0ZXJtKTtcblxuICAgICAgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICAgIHRlcm1zLnBvcCgpO1xuXG4gICAgICB0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlID0gdmVyaWZpZWRBaGVhZDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHRlcm1WZXJpZmllZEFzVmFyaWFibGUpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFzIGEgdmFyaWFibGUuYCwgdGVybU5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlWYXJpYWJsZSh2YXJpYWJsZU5vZGUsIHZhcmlhYmxlcywgbG9jYWxDb250ZXh0KSB7XG4gIGxldCB2YXJpYWJsZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgdmFyaWFibGVTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHZhcmlhYmxlTm9kZSk7XG5cbiAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuLi5gLCB2YXJpYWJsZU5vZGUpO1xuXG4gIGNvbnN0IHZhcmlhYmxlID0gbG9jYWxDb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG5cbiAgaWYgKHZhcmlhYmxlID09PSBudWxsKSB7XG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBUaGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSBpcyBub3QgcHJlc2VudC5gLCB2YXJpYWJsZU5vZGUpO1xuICB9IGVsc2Uge1xuICAgIHZhcmlhYmxlcy5wdXNoKHZhcmlhYmxlKTtcblxuICAgIHZhcmlhYmxlVmVyaWZpZWQgPSB0cnVlO1xuICB9XG5cbiAgaWYgKHZhcmlhYmxlVmVyaWZpZWQpIHtcbiAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLmAsIHZhcmlhYmxlTm9kZSk7XG4gIH1cblxuICByZXR1cm4gdmFyaWFibGVWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2YXJpYWJsZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInVuaWZ5VGVybUZ1bmN0aW9ucyIsInVuaWZ5VGVybVdpdGhCcmFja2V0ZWRDb25zdHJ1Y3RvciIsInVuaWZ5VGVybVdpdGhDb25zdHJ1Y3RvcnMiLCJ2ZXJpZnlUZXJtRnVuY3Rpb25zIiwidmVyaWZ5VGVybUFzVmFyaWFibGUiLCJ2ZXJpZnlUZXJtIiwidGVybU5vZGUiLCJ0ZXJtcyIsImxvY2FsQ29udGV4dCIsInZlcmlmeUFoZWFkIiwidGVybVZlcmlmaWVkIiwidGVybVN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwidGVybVVuaWZpZWQiLCJzb21lIiwidW5pZnlUZXJtRnVuY3Rpb24iLCJ2ZXJpZnlUZXJtRnVuY3Rpb24iLCJkZWJ1ZyIsIk9iamVjdCIsImFzc2lnbiIsInNoaW0iLCJ0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGVzIiwidmFyaWFibGVWZXJpZmllZCIsInZlcmlmeVZhcmlhYmxlIiwidmVyaWZpZWRBaGVhZCIsImZpcnN0VmFyaWFibGUiLCJmaXJzdCIsInZhcmlhYmxlIiwidHlwZSIsImdldFR5cGUiLCJ0ZXJtIiwiVGVybSIsImZyb21UZXJtTm9kZUFuZFR5cGUiLCJwdXNoIiwicG9wIiwidmFyaWFibGVTdHJpbmciLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNERBOzs7ZUFBQTs7OzJEQTFEaUI7MkRBQ0E7MkVBQ3FCO21GQUNRO3FCQUV4QjtxQkFDSTs7Ozs7O0FBRTFCLElBQU1BLG9CQUFvQkMsSUFBQUEsZ0JBQVMsRUFBQztBQUVwQyxJQUFNQyxxQkFBcUI7SUFDbkJDLHFDQUFpQztJQUNqQ0MsNkJBQXlCO0NBQzFCLEVBQ0RDLHNCQUFzQjtJQUNwQkM7Q0FDRDtBQUVQLFNBQVNDLFdBQVdDLFFBQVEsRUFBRUMsS0FBSyxFQUFFQyxZQUFZLEVBQUVDLFdBQVc7SUFDNUQsSUFBSUMsZUFBZTtJQUVuQixJQUFNQyxhQUFhSCxhQUFhSSxZQUFZLENBQUNOO0lBRTdDRSxhQUFhSyxLQUFLLENBQUMsQUFBQyxrQkFBNEIsT0FBWEYsWUFBVyxjQUFZTDtJQUU1RCxJQUFJLENBQUNJLGNBQWM7UUFDakIsSUFBTUksY0FBY2QsbUJBQW1CZSxJQUFJLENBQUMsU0FBQ0M7WUFDM0MsSUFBTUYsY0FBY0Usa0JBQWtCVixVQUFVQyxPQUFPQyxjQUFjQztZQUVyRSxJQUFJSyxhQUFhO2dCQUNmLE9BQU87WUFDVDtRQUNGO1FBRUFKLGVBQWVJLGFBQWEsR0FBRztJQUNqQztJQUVBLElBQUksQ0FBQ0osY0FBYztRQUNqQkEsZUFBZVAsb0JBQW9CWSxJQUFJLENBQUMsU0FBQ0U7WUFDdkMsSUFBTVAsZUFBZU8sbUJBQW1CWCxVQUFVQyxPQUFPQyxjQUFjQztZQUV2RSxJQUFJQyxjQUFjO2dCQUNoQixPQUFPO1lBQ1Q7UUFDRjtJQUNGO0lBRUEsSUFBSUEsY0FBYztRQUNoQkYsYUFBYVUsS0FBSyxDQUFDLEFBQUMsb0JBQThCLE9BQVhQLFlBQVcsWUFBVUw7SUFDOUQ7SUFFQSxPQUFPSTtBQUNUO0FBRUFTLE9BQU9DLE1BQU0sQ0FBQ0MsYUFBSSxFQUFFO0lBQ2xCaEIsWUFBQUE7QUFDRjtJQUVBLFdBQWVBO0FBRWYsU0FBU0QscUJBQXFCRSxRQUFRLEVBQUVDLEtBQUssRUFBRUMsWUFBWSxFQUFFQyxXQUFXO0lBQ3RFLElBQUlhLHlCQUF5QjtJQUU3QixJQUFNQyxlQUFlekIsa0JBQWtCUTtJQUV2QyxJQUFJaUIsaUJBQWlCLE1BQU07UUFDekIsSUFBTVosYUFBYUgsYUFBYUksWUFBWSxDQUFDTjtRQUU3Q0UsYUFBYUssS0FBSyxDQUFDLEFBQUMsa0JBQTRCLE9BQVhGLFlBQVcsNEJBQTBCTDtRQUUxRSxJQUFNa0IsWUFBWSxFQUFFLEVBQ2RDLG1CQUFtQkMsZUFBZUgsY0FBY0MsV0FBV2hCO1FBRWpFLElBQUlpQixrQkFBa0I7WUFDcEIsSUFBSUU7WUFFSixJQUFNQyxnQkFBZ0JDLElBQUFBLFlBQUssRUFBQ0wsWUFDdEJNLFdBQVdGLGVBQ1hHLE9BQU9ELFNBQVNFLE9BQU8sSUFDdkJDLE9BQU9DLGFBQUksQ0FBQ0MsbUJBQW1CLENBQUM3QixVQUFVeUI7WUFFaER4QixNQUFNNkIsSUFBSSxDQUFDSDtZQUVYTixnQkFBZ0JsQjtZQUVoQkYsTUFBTThCLEdBQUc7WUFFVGYseUJBQXlCSyxlQUFlLEdBQUc7UUFDN0M7UUFFQSxJQUFJTCx3QkFBd0I7WUFDMUJkLGFBQWFVLEtBQUssQ0FBQyxBQUFDLG9CQUE4QixPQUFYUCxZQUFXLDBCQUF3Qkw7UUFDNUU7SUFDRjtJQUVBLE9BQU9nQjtBQUNUO0FBRUEsU0FBU0ksZUFBZUgsWUFBWSxFQUFFQyxTQUFTLEVBQUVoQixZQUFZO0lBQzNELElBQUlpQixtQkFBbUI7SUFFdkIsSUFBTWEsaUJBQWlCOUIsYUFBYUksWUFBWSxDQUFDVztJQUVqRGYsYUFBYUssS0FBSyxDQUFDLEFBQUMsa0JBQWdDLE9BQWZ5QixnQkFBZSxrQkFBZ0JmO0lBRXBFLElBQU1PLFdBQVd0QixhQUFhK0IsMEJBQTBCLENBQUNoQjtJQUV6RCxJQUFJTyxhQUFhLE1BQU07UUFDckJ0QixhQUFhSyxLQUFLLENBQUMsQUFBQyxRQUFzQixPQUFmeUIsZ0JBQWUsK0JBQTZCZjtJQUN6RSxPQUFPO1FBQ0xDLFVBQVVZLElBQUksQ0FBQ047UUFFZkwsbUJBQW1CO0lBQ3JCO0lBRUEsSUFBSUEsa0JBQWtCO1FBQ3BCakIsYUFBYVUsS0FBSyxDQUFDLEFBQUMsb0JBQWtDLE9BQWZvQixnQkFBZSxnQkFBY2Y7SUFDdEU7SUFFQSxPQUFPRTtBQUNUIn0=