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
];
function verifyTerm(termNode, terms, localContext, verifyAhead) {
    var termVerified = false;
    var termString = localContext.nodeAsString(termNode);
    localContext.trace("Verifying the '".concat(termString, "' term..."), termNode);
    if (!termVerified) {
        var termVerifiedAsVariable = verifyTermAsVariable(termNode, terms, localContext, verifyAhead);
        termVerified = termVerifiedAsVariable; ///
    }
    if (!termVerified) {
        var termUnified = unifyTermFunctions.some(function(unifyTermFunction) {
            var termUnified = unifyTermFunction(termNode, terms, localContext, verifyAhead);
            if (termUnified) {
                return true;
            }
        });
        termVerified = termUnified; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGVybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcbmltcG9ydCBUZXJtIGZyb20gXCIuLi90ZXJtXCI7XG5pbXBvcnQgdW5pZnlUZXJtV2l0aENvbnN0cnVjdG9ycyBmcm9tIFwiLi4vdW5pZnkvdGVybVdpdGhDb25zdHJ1Y3RvcnNcIjtcbmltcG9ydCB1bmlmeVRlcm1XaXRoQnJhY2tldGVkQ29uc3RydWN0b3IgZnJvbSBcIi4uL3VuaWZ5L3Rlcm1XaXRoQnJhY2tldGVkQ29uc3RydWN0b3JcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0vdmFyaWFibGUhXCIpO1xuXG5jb25zdCB1bmlmeVRlcm1GdW5jdGlvbnMgPSBbXG4gICAgICAgIHVuaWZ5VGVybVdpdGhCcmFja2V0ZWRDb25zdHJ1Y3RvcixcbiAgICAgICAgdW5pZnlUZXJtV2l0aENvbnN0cnVjdG9ycyxcbiAgICAgIF07XG5cbmZ1bmN0aW9uIHZlcmlmeVRlcm0odGVybU5vZGUsIHRlcm1zLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCB0ZXJtVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCB0ZXJtU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyh0ZXJtTm9kZSk7XG5cbiAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLi4uYCwgdGVybU5vZGUpO1xuXG4gIGlmICghdGVybVZlcmlmaWVkKSB7XG4gICAgY29uc3QgdGVybVZlcmlmaWVkQXNWYXJpYWJsZSA9IHZlcmlmeVRlcm1Bc1ZhcmlhYmxlKHRlcm1Ob2RlLCB0ZXJtcywgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICB0ZXJtVmVyaWZpZWQgPSB0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlOyAvLy9cbiAgfVxuXG4gIGlmICghdGVybVZlcmlmaWVkKSB7XG4gICAgY29uc3QgdGVybVVuaWZpZWQgPSB1bmlmeVRlcm1GdW5jdGlvbnMuc29tZSgodW5pZnlUZXJtRnVuY3Rpb24pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1VbmlmaWVkID0gdW5pZnlUZXJtRnVuY3Rpb24odGVybU5vZGUsIHRlcm1zLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgaWYgKHRlcm1VbmlmaWVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGVybVZlcmlmaWVkID0gdGVybVVuaWZpZWQ7IC8vL1xuICB9XG5cbiAgaWYgKHRlcm1WZXJpZmllZCkge1xuICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLmAsIHRlcm1Ob2RlKTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtVmVyaWZpZWQ7XG59XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICB2ZXJpZnlUZXJtXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgdmVyaWZ5VGVybTtcblxuZnVuY3Rpb24gdmVyaWZ5VGVybUFzVmFyaWFibGUodGVybU5vZGUsIHRlcm1zLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCB0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlID0gZmFsc2U7XG5cbiAgY29uc3QgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkodGVybU5vZGUpO1xuXG4gIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyh0ZXJtTm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYXMgYSB2YXJpYWJsZS4uLmAsIHRlcm1Ob2RlKTtcblxuICAgIGNvbnN0IHZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIHZhcmlhYmxlVmVyaWZpZWQgPSB2ZXJpZnlWYXJpYWJsZSh2YXJpYWJsZU5vZGUsIHZhcmlhYmxlcywgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmICh2YXJpYWJsZVZlcmlmaWVkKSB7XG4gICAgICBsZXQgdmVyaWZpZWRBaGVhZDtcblxuICAgICAgY29uc3QgZmlyc3RWYXJpYWJsZSA9IGZpcnN0KHZhcmlhYmxlcyksXG4gICAgICAgICAgICB2YXJpYWJsZSA9IGZpcnN0VmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgdHlwZSA9IHZhcmlhYmxlLmdldFR5cGUoKSxcbiAgICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZUFuZFR5cGUodGVybU5vZGUsIHR5cGUpO1xuXG4gICAgICB0ZXJtcy5wdXNoKHRlcm0pO1xuXG4gICAgICB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgICAgdGVybXMucG9wKCk7XG5cbiAgICAgIHRlcm1WZXJpZmllZEFzVmFyaWFibGUgPSB2ZXJpZmllZEFoZWFkOyAvLy9cbiAgICB9XG5cbiAgICBpZiAodGVybVZlcmlmaWVkQXNWYXJpYWJsZSkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYXMgYSB2YXJpYWJsZS5gLCB0ZXJtTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRlcm1WZXJpZmllZEFzVmFyaWFibGU7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVZhcmlhYmxlKHZhcmlhYmxlTm9kZSwgdmFyaWFibGVzLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHZhcmlhYmxlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcodmFyaWFibGVOb2RlKTtcblxuICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmAsIHZhcmlhYmxlTm9kZSk7XG5cbiAgY29uc3QgdmFyaWFibGUgPSBsb2NhbENvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICBpZiAodmFyaWFibGUgPT09IG51bGwpIHtcbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIGlzIG5vdCBwcmVzZW50LmAsIHZhcmlhYmxlTm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuXG4gICAgdmFyaWFibGVWZXJpZmllZCA9IHRydWU7XG4gIH1cblxuICBpZiAodmFyaWFibGVWZXJpZmllZCkge1xuICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuYCwgdmFyaWFibGVOb2RlKTtcbiAgfVxuXG4gIHJldHVybiB2YXJpYWJsZVZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidW5pZnlUZXJtRnVuY3Rpb25zIiwidW5pZnlUZXJtV2l0aEJyYWNrZXRlZENvbnN0cnVjdG9yIiwidW5pZnlUZXJtV2l0aENvbnN0cnVjdG9ycyIsInZlcmlmeVRlcm0iLCJ0ZXJtTm9kZSIsInRlcm1zIiwibG9jYWxDb250ZXh0IiwidmVyaWZ5QWhlYWQiLCJ0ZXJtVmVyaWZpZWQiLCJ0ZXJtU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJ0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlIiwidmVyaWZ5VGVybUFzVmFyaWFibGUiLCJ0ZXJtVW5pZmllZCIsInNvbWUiLCJ1bmlmeVRlcm1GdW5jdGlvbiIsImRlYnVnIiwiT2JqZWN0IiwiYXNzaWduIiwic2hpbSIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlcyIsInZhcmlhYmxlVmVyaWZpZWQiLCJ2ZXJpZnlWYXJpYWJsZSIsInZlcmlmaWVkQWhlYWQiLCJmaXJzdFZhcmlhYmxlIiwiZmlyc3QiLCJ2YXJpYWJsZSIsInR5cGUiLCJnZXRUeXBlIiwidGVybSIsIlRlcm0iLCJmcm9tVGVybU5vZGVBbmRUeXBlIiwicHVzaCIsInBvcCIsInZhcmlhYmxlU3RyaW5nIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXFEQTs7O2VBQUE7OzsyREFuRGlCOzJEQUNBOzJFQUNxQjttRkFDUTtxQkFFeEI7cUJBQ0k7Ozs7OztBQUUxQixJQUFNQSxvQkFBb0JDLElBQUFBLGdCQUFTLEVBQUM7QUFFcEMsSUFBTUMscUJBQXFCO0lBQ25CQyxxQ0FBaUM7SUFDakNDLDZCQUF5QjtDQUMxQjtBQUVQLFNBQVNDLFdBQVdDLFFBQVEsRUFBRUMsS0FBSyxFQUFFQyxZQUFZLEVBQUVDLFdBQVc7SUFDNUQsSUFBSUMsZUFBZTtJQUVuQixJQUFNQyxhQUFhSCxhQUFhSSxZQUFZLENBQUNOO0lBRTdDRSxhQUFhSyxLQUFLLENBQUMsQUFBQyxrQkFBNEIsT0FBWEYsWUFBVyxjQUFZTDtJQUU1RCxJQUFJLENBQUNJLGNBQWM7UUFDakIsSUFBTUkseUJBQXlCQyxxQkFBcUJULFVBQVVDLE9BQU9DLGNBQWNDO1FBRW5GQyxlQUFlSSx3QkFBd0IsR0FBRztJQUM1QztJQUVBLElBQUksQ0FBQ0osY0FBYztRQUNqQixJQUFNTSxjQUFjZCxtQkFBbUJlLElBQUksQ0FBQyxTQUFDQztZQUMzQyxJQUFNRixjQUFjRSxrQkFBa0JaLFVBQVVDLE9BQU9DLGNBQWNDO1lBRXJFLElBQUlPLGFBQWE7Z0JBQ2YsT0FBTztZQUNUO1FBQ0Y7UUFFQU4sZUFBZU0sYUFBYSxHQUFHO0lBQ2pDO0lBRUEsSUFBSU4sY0FBYztRQUNoQkYsYUFBYVcsS0FBSyxDQUFDLEFBQUMsb0JBQThCLE9BQVhSLFlBQVcsWUFBVUw7SUFDOUQ7SUFFQSxPQUFPSTtBQUNUO0FBRUFVLE9BQU9DLE1BQU0sQ0FBQ0MsYUFBSSxFQUFFO0lBQ2xCakIsWUFBQUE7QUFDRjtJQUVBLFdBQWVBO0FBRWYsU0FBU1UscUJBQXFCVCxRQUFRLEVBQUVDLEtBQUssRUFBRUMsWUFBWSxFQUFFQyxXQUFXO0lBQ3RFLElBQUlLLHlCQUF5QjtJQUU3QixJQUFNUyxlQUFldkIsa0JBQWtCTTtJQUV2QyxJQUFJaUIsaUJBQWlCLE1BQU07UUFDekIsSUFBTVosYUFBYUgsYUFBYUksWUFBWSxDQUFDTjtRQUU3Q0UsYUFBYUssS0FBSyxDQUFDLEFBQUMsa0JBQTRCLE9BQVhGLFlBQVcsNEJBQTBCTDtRQUUxRSxJQUFNa0IsWUFBWSxFQUFFLEVBQ2RDLG1CQUFtQkMsZUFBZUgsY0FBY0MsV0FBV2hCO1FBRWpFLElBQUlpQixrQkFBa0I7WUFDcEIsSUFBSUU7WUFFSixJQUFNQyxnQkFBZ0JDLElBQUFBLFlBQUssRUFBQ0wsWUFDdEJNLFdBQVdGLGVBQ1hHLE9BQU9ELFNBQVNFLE9BQU8sSUFDdkJDLE9BQU9DLGFBQUksQ0FBQ0MsbUJBQW1CLENBQUM3QixVQUFVeUI7WUFFaER4QixNQUFNNkIsSUFBSSxDQUFDSDtZQUVYTixnQkFBZ0JsQjtZQUVoQkYsTUFBTThCLEdBQUc7WUFFVHZCLHlCQUF5QmEsZUFBZSxHQUFHO1FBQzdDO1FBRUEsSUFBSWIsd0JBQXdCO1lBQzFCTixhQUFhVyxLQUFLLENBQUMsQUFBQyxvQkFBOEIsT0FBWFIsWUFBVywwQkFBd0JMO1FBQzVFO0lBQ0Y7SUFFQSxPQUFPUTtBQUNUO0FBRUEsU0FBU1ksZUFBZUgsWUFBWSxFQUFFQyxTQUFTLEVBQUVoQixZQUFZO0lBQzNELElBQUlpQixtQkFBbUI7SUFFdkIsSUFBTWEsaUJBQWlCOUIsYUFBYUksWUFBWSxDQUFDVztJQUVqRGYsYUFBYUssS0FBSyxDQUFDLEFBQUMsa0JBQWdDLE9BQWZ5QixnQkFBZSxrQkFBZ0JmO0lBRXBFLElBQU1PLFdBQVd0QixhQUFhK0IsMEJBQTBCLENBQUNoQjtJQUV6RCxJQUFJTyxhQUFhLE1BQU07UUFDckJ0QixhQUFhSyxLQUFLLENBQUMsQUFBQyxRQUFzQixPQUFmeUIsZ0JBQWUsK0JBQTZCZjtJQUN6RSxPQUFPO1FBQ0xDLFVBQVVZLElBQUksQ0FBQ047UUFFZkwsbUJBQW1CO0lBQ3JCO0lBRUEsSUFBSUEsa0JBQWtCO1FBQ3BCakIsYUFBYVcsS0FBSyxDQUFDLEFBQUMsb0JBQWtDLE9BQWZtQixnQkFBZSxnQkFBY2Y7SUFDdEU7SUFFQSxPQUFPRTtBQUNUIn0=