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
var _dom = /*#__PURE__*/ _interop_require_default(require("../../dom"));
var _query = require("../../utilities/query");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var variableNodeQuery = (0, _query.nodeQuery)("/term/variable!");
function verifyTermAsVariable(term, localContext, verifyAhead) {
    var termVerifiedAsVariable = false;
    var Variable = _dom.default.Variable, context = localContext, termNode = term.getNode(), variableNode = variableNodeQuery(termNode), variable = Variable.fromVariableNode(variableNode, context);
    if (variable !== null) {
        var termString = term.getString();
        localContext.trace("Verifying the '".concat(termString, "' term as a variable..."));
        var variableVerified = variable.verify(localContext);
        if (variableVerified) {
            var verifiedAhead;
            var type = variable.getType();
            term.setType(type);
            verifiedAhead = verifyAhead();
            termVerifiedAsVariable = verifiedAhead; ///
        }
        if (termVerifiedAsVariable) {
            localContext.debug("...verified the '".concat(termString, "' term as a variable."));
        }
    }
    return termVerifiedAsVariable;
}
function unifyWithBracketedConstructor(term, context, verifyAhead) {
    var unifiedWithBracketedConstructor;
    var BracketedConstructor = _dom.default.BracketedConstructor, bracketedConstructor = BracketedConstructor.fromNothing();
    unifiedWithBracketedConstructor = bracketedConstructor.unifyTerm(term, context, verifyAhead);
    return unifiedWithBracketedConstructor;
}
function unifyWithConstructors(term, context, verifyAhead) {
    var unifiedWithConstructors;
    var constructors = context.getConstructors();
    unifiedWithConstructors = constructors.some(function(constructor) {
        var unifiedWithConstructor = constructor.unifyTerm(term, context, verifyAhead);
        if (unifiedWithConstructor) {
            return true;
        }
    });
    return unifiedWithConstructors;
}
var verifyMixins = [
    verifyTermAsVariable,
    unifyWithBracketedConstructor,
    unifyWithConstructors
];
var _default = verifyMixins;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9taXhpbnMvdGVybS92ZXJpZnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0vdmFyaWFibGUhXCIpO1xuXG5mdW5jdGlvbiB2ZXJpZnlUZXJtQXNWYXJpYWJsZSh0ZXJtLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCB0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlID0gZmFsc2U7XG5cbiAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICBjb250ZXh0ID0gbG9jYWxDb250ZXh0LCAvLy9cbiAgICAgICAgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkodGVybU5vZGUpLFxuICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KTtcblxuICBpZiAodmFyaWFibGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBhcyBhIHZhcmlhYmxlLi4uYCk7XG5cbiAgICBjb25zdCB2YXJpYWJsZVZlcmlmaWVkID0gdmFyaWFibGUudmVyaWZ5KGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAodmFyaWFibGVWZXJpZmllZCkge1xuICAgICAgbGV0IHZlcmlmaWVkQWhlYWQ7XG5cbiAgICAgIGNvbnN0IHR5cGUgPSB2YXJpYWJsZS5nZXRUeXBlKCk7XG5cbiAgICAgIHRlcm0uc2V0VHlwZSh0eXBlKTtcblxuICAgICAgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICAgIHRlcm1WZXJpZmllZEFzVmFyaWFibGUgPSB2ZXJpZmllZEFoZWFkOyAvLy9cbiAgICB9XG5cbiAgICBpZiAodGVybVZlcmlmaWVkQXNWYXJpYWJsZSkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYXMgYSB2YXJpYWJsZS5gKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGVybVZlcmlmaWVkQXNWYXJpYWJsZTtcbn1cblxuZnVuY3Rpb24gdW5pZnlXaXRoQnJhY2tldGVkQ29uc3RydWN0b3IodGVybSwgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHVuaWZpZWRXaXRoQnJhY2tldGVkQ29uc3RydWN0b3I7XG5cbiAgY29uc3QgeyBCcmFja2V0ZWRDb25zdHJ1Y3RvciB9ID0gZG9tLFxuICAgICAgICBicmFja2V0ZWRDb25zdHJ1Y3RvciA9IEJyYWNrZXRlZENvbnN0cnVjdG9yLmZyb21Ob3RoaW5nKCk7XG5cbiAgdW5pZmllZFdpdGhCcmFja2V0ZWRDb25zdHJ1Y3RvciA9IGJyYWNrZXRlZENvbnN0cnVjdG9yLnVuaWZ5VGVybSh0ZXJtLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgcmV0dXJuIHVuaWZpZWRXaXRoQnJhY2tldGVkQ29uc3RydWN0b3I7XG59XG5cbmZ1bmN0aW9uIHVuaWZ5V2l0aENvbnN0cnVjdG9ycyh0ZXJtLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgdW5pZmllZFdpdGhDb25zdHJ1Y3RvcnM7XG5cbiAgY29uc3QgY29uc3RydWN0b3JzID0gY29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoKTtcblxuICB1bmlmaWVkV2l0aENvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9ycy5zb21lKChjb25zdHJ1Y3RvcikgPT4ge1xuICAgIGNvbnN0IHVuaWZpZWRXaXRoQ29uc3RydWN0b3IgPSBjb25zdHJ1Y3Rvci51bmlmeVRlcm0odGVybSwgY29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgaWYgKHVuaWZpZWRXaXRoQ29uc3RydWN0b3IpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHVuaWZpZWRXaXRoQ29uc3RydWN0b3JzO1xufVxuXG5jb25zdCB2ZXJpZnlNaXhpbnMgPSBbXG4gIHZlcmlmeVRlcm1Bc1ZhcmlhYmxlLFxuICB1bmlmeVdpdGhCcmFja2V0ZWRDb25zdHJ1Y3RvcixcbiAgdW5pZnlXaXRoQ29uc3RydWN0b3JzXG5dO1xuXG5leHBvcnQgZGVmYXVsdCB2ZXJpZnlNaXhpbnM7XG4iXSwibmFtZXMiOlsidmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ2ZXJpZnlUZXJtQXNWYXJpYWJsZSIsInRlcm0iLCJsb2NhbENvbnRleHQiLCJ2ZXJpZnlBaGVhZCIsInRlcm1WZXJpZmllZEFzVmFyaWFibGUiLCJWYXJpYWJsZSIsImRvbSIsImNvbnRleHQiLCJ0ZXJtTm9kZSIsImdldE5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZSIsImZyb21WYXJpYWJsZU5vZGUiLCJ0ZXJtU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YXJpYWJsZVZlcmlmaWVkIiwidmVyaWZ5IiwidmVyaWZpZWRBaGVhZCIsInR5cGUiLCJnZXRUeXBlIiwic2V0VHlwZSIsImRlYnVnIiwidW5pZnlXaXRoQnJhY2tldGVkQ29uc3RydWN0b3IiLCJ1bmlmaWVkV2l0aEJyYWNrZXRlZENvbnN0cnVjdG9yIiwiQnJhY2tldGVkQ29uc3RydWN0b3IiLCJicmFja2V0ZWRDb25zdHJ1Y3RvciIsImZyb21Ob3RoaW5nIiwidW5pZnlUZXJtIiwidW5pZnlXaXRoQ29uc3RydWN0b3JzIiwidW5pZmllZFdpdGhDb25zdHJ1Y3RvcnMiLCJjb25zdHJ1Y3RvcnMiLCJnZXRDb25zdHJ1Y3RvcnMiLCJzb21lIiwiY29uc3RydWN0b3IiLCJ1bmlmaWVkV2l0aENvbnN0cnVjdG9yIiwidmVyaWZ5TWl4aW5zIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE2RUE7OztlQUFBOzs7MERBM0VnQjtxQkFFVTs7Ozs7O0FBRTFCLElBQU1BLG9CQUFvQkMsSUFBQUEsZ0JBQVMsRUFBQztBQUVwQyxTQUFTQyxxQkFBcUJDLElBQUksRUFBRUMsWUFBWSxFQUFFQyxXQUFXO0lBQzNELElBQUlDLHlCQUF5QjtJQUU3QixJQUFNLEFBQUVDLFdBQWFDLFlBQUcsQ0FBaEJELFVBQ0ZFLFVBQVVMLGNBQ1ZNLFdBQVdQLEtBQUtRLE9BQU8sSUFDdkJDLGVBQWVaLGtCQUFrQlUsV0FDakNHLFdBQVdOLFNBQVNPLGdCQUFnQixDQUFDRixjQUFjSDtJQUV6RCxJQUFJSSxhQUFhLE1BQU07UUFDckIsSUFBTUUsYUFBYVosS0FBS2EsU0FBUztRQUVqQ1osYUFBYWEsS0FBSyxDQUFDLEFBQUMsa0JBQTRCLE9BQVhGLFlBQVc7UUFFaEQsSUFBTUcsbUJBQW1CTCxTQUFTTSxNQUFNLENBQUNmO1FBRXpDLElBQUljLGtCQUFrQjtZQUNwQixJQUFJRTtZQUVKLElBQU1DLE9BQU9SLFNBQVNTLE9BQU87WUFFN0JuQixLQUFLb0IsT0FBTyxDQUFDRjtZQUViRCxnQkFBZ0JmO1lBRWhCQyx5QkFBeUJjLGVBQWUsR0FBRztRQUM3QztRQUVBLElBQUlkLHdCQUF3QjtZQUMxQkYsYUFBYW9CLEtBQUssQ0FBQyxBQUFDLG9CQUE4QixPQUFYVCxZQUFXO1FBQ3BEO0lBQ0Y7SUFFQSxPQUFPVDtBQUNUO0FBRUEsU0FBU21CLDhCQUE4QnRCLElBQUksRUFBRU0sT0FBTyxFQUFFSixXQUFXO0lBQy9ELElBQUlxQjtJQUVKLElBQU0sQUFBRUMsdUJBQXlCbkIsWUFBRyxDQUE1Qm1CLHNCQUNGQyx1QkFBdUJELHFCQUFxQkUsV0FBVztJQUU3REgsa0NBQWtDRSxxQkFBcUJFLFNBQVMsQ0FBQzNCLE1BQU1NLFNBQVNKO0lBRWhGLE9BQU9xQjtBQUNUO0FBRUEsU0FBU0ssc0JBQXNCNUIsSUFBSSxFQUFFTSxPQUFPLEVBQUVKLFdBQVc7SUFDdkQsSUFBSTJCO0lBRUosSUFBTUMsZUFBZXhCLFFBQVF5QixlQUFlO0lBRTVDRiwwQkFBMEJDLGFBQWFFLElBQUksQ0FBQyxTQUFDQztRQUMzQyxJQUFNQyx5QkFBeUJELFlBQVlOLFNBQVMsQ0FBQzNCLE1BQU1NLFNBQVNKO1FBRXBFLElBQUlnQyx3QkFBd0I7WUFDMUIsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPTDtBQUNUO0FBRUEsSUFBTU0sZUFBZTtJQUNuQnBDO0lBQ0F1QjtJQUNBTTtDQUNEO0lBRUQsV0FBZU8ifQ==