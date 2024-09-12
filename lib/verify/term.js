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
function verifyTerm(termNode, terms, localContext, verifyAhead) {
    var termVerified;
    var termString = localContext.nodeAsString(termNode);
    localContext.trace("Verifying the '".concat(termString, "' term..."), termNode);
    var verifyTermFunctions = [
        verifyTermAsVariable,
        _termWithConstructors.default,
        _termWithBracketedConstructor.default
    ];
    termVerified = verifyTermFunctions.some(function(verifyTermFunction) {
        var termVerified = verifyTermFunction(termNode, terms, localContext, verifyAhead);
        if (termVerified) {
            return true;
        }
    });
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
        var variable = localContext.findVariableByVariableNode(variableNode);
        if (variable === null) {
            var variableString = localContext.nodeAsString(variableNode);
            localContext.trace("The '".concat(variableString, "' variable is not present."), termNode);
        } else {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGVybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcbmltcG9ydCBUZXJtIGZyb20gXCIuLi90ZXJtXCI7XG5pbXBvcnQgdW5pZnlUZXJtV2l0aENvbnN0cnVjdG9ycyBmcm9tIFwiLi4vdW5pZnkvdGVybVdpdGhDb25zdHJ1Y3RvcnNcIjtcbmltcG9ydCB1bmlmeVRlcm1XaXRoQnJhY2tldGVkQ29uc3RydWN0b3IgZnJvbSBcIi4uL3VuaWZ5L3Rlcm1XaXRoQnJhY2tldGVkQ29uc3RydWN0b3JcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlIVwiKTtcblxuZnVuY3Rpb24gdmVyaWZ5VGVybSh0ZXJtTm9kZSwgdGVybXMsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHRlcm1WZXJpZmllZDtcblxuICBjb25zdCB0ZXJtU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyh0ZXJtTm9kZSk7XG5cbiAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLi4uYCwgdGVybU5vZGUpO1xuXG4gIGNvbnN0IHZlcmlmeVRlcm1GdW5jdGlvbnMgPSBbXG4gICAgdmVyaWZ5VGVybUFzVmFyaWFibGUsXG4gICAgdW5pZnlUZXJtV2l0aENvbnN0cnVjdG9ycyxcbiAgICB1bmlmeVRlcm1XaXRoQnJhY2tldGVkQ29uc3RydWN0b3JcbiAgXTtcblxuICB0ZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtRnVuY3Rpb25zLnNvbWUoKHZlcmlmeVRlcm1GdW5jdGlvbikgPT4ge1xuICAgIGNvbnN0IHRlcm1WZXJpZmllZCA9IHZlcmlmeVRlcm1GdW5jdGlvbih0ZXJtTm9kZSwgdGVybXMsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgaWYgKHRlcm1WZXJpZmllZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBpZiAodGVybVZlcmlmaWVkKSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0uYCwgdGVybU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1WZXJpZmllZDtcbn1cblxuT2JqZWN0LmFzc2lnbihzaGltLCB7XG4gIHZlcmlmeVRlcm1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB2ZXJpZnlUZXJtO1xuXG5mdW5jdGlvbiB2ZXJpZnlUZXJtQXNWYXJpYWJsZSh0ZXJtTm9kZSwgdGVybXMsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHRlcm1WZXJpZmllZEFzVmFyaWFibGUgPSBmYWxzZTtcblxuICBjb25zdCB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeSh0ZXJtTm9kZSk7XG5cbiAgaWYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBhcyBhIHZhcmlhYmxlLi4uYCwgdGVybU5vZGUpO1xuXG4gICAgY29uc3QgdmFyaWFibGUgPSBsb2NhbENvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICAgIGlmICh2YXJpYWJsZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFyaWFibGVTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGxvY2FsQ29udGV4dC50cmFjZShgVGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUgaXMgbm90IHByZXNlbnQuYCwgdGVybU5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdmVyaWZpZWRBaGVhZDtcblxuICAgICAgY29uc3QgdHlwZSA9IHZhcmlhYmxlLmdldFR5cGUoKSxcbiAgICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZUFuZFR5cGUodGVybU5vZGUsIHR5cGUpO1xuXG4gICAgICB0ZXJtcy5wdXNoKHRlcm0pO1xuXG4gICAgICB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgICAgdGVybXMucG9wKCk7XG5cbiAgICAgIHRlcm1WZXJpZmllZEFzVmFyaWFibGUgPSB2ZXJpZmllZEFoZWFkOyAvLy9cbiAgICB9XG5cbiAgICBpZiAodGVybVZlcmlmaWVkQXNWYXJpYWJsZSkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYXMgYSB2YXJpYWJsZS5gLCB0ZXJtTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRlcm1WZXJpZmllZEFzVmFyaWFibGU7XG59XG4iXSwibmFtZXMiOlsidmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ2ZXJpZnlUZXJtIiwidGVybU5vZGUiLCJ0ZXJtcyIsImxvY2FsQ29udGV4dCIsInZlcmlmeUFoZWFkIiwidGVybVZlcmlmaWVkIiwidGVybVN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwidmVyaWZ5VGVybUZ1bmN0aW9ucyIsInZlcmlmeVRlcm1Bc1ZhcmlhYmxlIiwidW5pZnlUZXJtV2l0aENvbnN0cnVjdG9ycyIsInVuaWZ5VGVybVdpdGhCcmFja2V0ZWRDb25zdHJ1Y3RvciIsInNvbWUiLCJ2ZXJpZnlUZXJtRnVuY3Rpb24iLCJkZWJ1ZyIsIk9iamVjdCIsImFzc2lnbiIsInNoaW0iLCJ0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlU3RyaW5nIiwidmVyaWZpZWRBaGVhZCIsInR5cGUiLCJnZXRUeXBlIiwidGVybSIsIlRlcm0iLCJmcm9tVGVybU5vZGVBbmRUeXBlIiwicHVzaCIsInBvcCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBMkNBOzs7ZUFBQTs7OzJEQXpDaUI7MkRBQ0E7MkVBQ3FCO21GQUNRO3FCQUVwQjs7Ozs7O0FBRTFCLElBQU1BLG9CQUFvQkMsSUFBQUEsZ0JBQVMsRUFBQztBQUVwQyxTQUFTQyxXQUFXQyxRQUFRLEVBQUVDLEtBQUssRUFBRUMsWUFBWSxFQUFFQyxXQUFXO0lBQzVELElBQUlDO0lBRUosSUFBTUMsYUFBYUgsYUFBYUksWUFBWSxDQUFDTjtJQUU3Q0UsYUFBYUssS0FBSyxDQUFDLEFBQUMsa0JBQTRCLE9BQVhGLFlBQVcsY0FBWUw7SUFFNUQsSUFBTVEsc0JBQXNCO1FBQzFCQztRQUNBQyw2QkFBeUI7UUFDekJDLHFDQUFpQztLQUNsQztJQUVEUCxlQUFlSSxvQkFBb0JJLElBQUksQ0FBQyxTQUFDQztRQUN2QyxJQUFNVCxlQUFlUyxtQkFBbUJiLFVBQVVDLE9BQU9DLGNBQWNDO1FBRXZFLElBQUlDLGNBQWM7WUFDaEIsT0FBTztRQUNUO0lBQ0Y7SUFFQSxJQUFJQSxjQUFjO1FBQ2hCRixhQUFhWSxLQUFLLENBQUMsQUFBQyxvQkFBOEIsT0FBWFQsWUFBVyxZQUFVTDtJQUM5RDtJQUVBLE9BQU9JO0FBQ1Q7QUFFQVcsT0FBT0MsTUFBTSxDQUFDQyxhQUFJLEVBQUU7SUFDbEJsQixZQUFBQTtBQUNGO0lBRUEsV0FBZUE7QUFFZixTQUFTVSxxQkFBcUJULFFBQVEsRUFBRUMsS0FBSyxFQUFFQyxZQUFZLEVBQUVDLFdBQVc7SUFDdEUsSUFBSWUseUJBQXlCO0lBRTdCLElBQU1DLGVBQWV0QixrQkFBa0JHO0lBRXZDLElBQUltQixpQkFBaUIsTUFBTTtRQUN6QixJQUFNZCxhQUFhSCxhQUFhSSxZQUFZLENBQUNOO1FBRTdDRSxhQUFhSyxLQUFLLENBQUMsQUFBQyxrQkFBNEIsT0FBWEYsWUFBVyw0QkFBMEJMO1FBRTFFLElBQU1vQixXQUFXbEIsYUFBYW1CLDBCQUEwQixDQUFDRjtRQUV6RCxJQUFJQyxhQUFhLE1BQU07WUFDckIsSUFBTUUsaUJBQWlCcEIsYUFBYUksWUFBWSxDQUFDYTtZQUVqRGpCLGFBQWFLLEtBQUssQ0FBQyxBQUFDLFFBQXNCLE9BQWZlLGdCQUFlLCtCQUE2QnRCO1FBQ3pFLE9BQU87WUFDTCxJQUFJdUI7WUFFSixJQUFNQyxPQUFPSixTQUFTSyxPQUFPLElBQ3ZCQyxPQUFPQyxhQUFJLENBQUNDLG1CQUFtQixDQUFDNUIsVUFBVXdCO1lBRWhEdkIsTUFBTTRCLElBQUksQ0FBQ0g7WUFFWEgsZ0JBQWdCcEI7WUFFaEJGLE1BQU02QixHQUFHO1lBRVRaLHlCQUF5QkssZUFBZSxHQUFHO1FBQzdDO1FBRUEsSUFBSUwsd0JBQXdCO1lBQzFCaEIsYUFBYVksS0FBSyxDQUFDLEFBQUMsb0JBQThCLE9BQVhULFlBQVcsMEJBQXdCTDtRQUM1RTtJQUNGO0lBRUEsT0FBT2tCO0FBQ1QifQ==