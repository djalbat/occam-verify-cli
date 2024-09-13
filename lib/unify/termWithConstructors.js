"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return unifyTermWithConstructors;
    },
    unifyTermWithConstructor: function() {
        return unifyTermWithConstructor;
    }
});
var _term = /*#__PURE__*/ _interop_require_default(require("../term"));
var _termWithConstructor = /*#__PURE__*/ _interop_require_default(require("../unifier/termWithConstructor"));
var _query = require("../utilities/query");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var variableNodeQuery = (0, _query.nodeQuery)("/term/variable!");
function unifyTermWithConstructors(termNode, terms, localContext, verifyAhead) {
    var termUnifiedWithConstructors = false;
    var variableNode = variableNodeQuery(termNode);
    if (variableNode === null) {
        var constructors = localContext.getConstructors();
        termUnifiedWithConstructors = constructors.some(function(constructor) {
            var termUnifiedWithConstructor = unifyTermWithConstructor(termNode, terms, constructor, localContext, verifyAhead);
            if (termUnifiedWithConstructor) {
                return true;
            }
        });
    }
    return termUnifiedWithConstructors;
}
function unifyTermWithConstructor(termNode, terms, constructor, localContext, verifyAhead) {
    var termUnifiedWithConstructor = false;
    var termString = localContext.nodeAsString(termNode), constructorString = constructor.getString(), constructorTermNode = constructor.getTermNode();
    localContext.trace("Unifying the '".concat(termString, "' term with the '").concat(constructorString, "' constructor..."), termNode);
    var termNodeA = termNode, constructorTermNodeB = constructorTermNode, unified = _termWithConstructor.default.unify(termNodeA, constructorTermNodeB, localContext);
    if (unified) {
        var verifiedAhead;
        var type = constructor.getType(), term = _term.default.fromTermNodeAndType(termNode, type);
        terms.push(term);
        verifiedAhead = verifyAhead();
        terms.pop();
        termUnifiedWithConstructor = verifiedAhead; ///
    }
    if (termUnifiedWithConstructor) {
        localContext.debug("...unified the '".concat(termString, "' term with the '").concat(constructorString, "' constructor."), termNode);
    }
    return termUnifiedWithConstructor;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmeS90ZXJtV2l0aENvbnN0cnVjdG9ycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRlcm0gZnJvbSBcIi4uL3Rlcm1cIjtcbmltcG9ydCB0ZXJtV2l0aENvbnN0cnVjdG9yVW5pZmllciBmcm9tIFwiLi4vdW5pZmllci90ZXJtV2l0aENvbnN0cnVjdG9yXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybS92YXJpYWJsZSFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVuaWZ5VGVybVdpdGhDb25zdHJ1Y3RvcnModGVybU5vZGUsIHRlcm1zLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCB0ZXJtVW5pZmllZFdpdGhDb25zdHJ1Y3RvcnMgPSBmYWxzZTtcblxuICBjb25zdCB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeSh0ZXJtTm9kZSk7XG5cbiAgaWYgKHZhcmlhYmxlTm9kZSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IGNvbnN0cnVjdG9ycyA9IGxvY2FsQ29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoKTtcblxuICAgIHRlcm1VbmlmaWVkV2l0aENvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9ycy5zb21lKChjb25zdHJ1Y3RvcikgPT4ge1xuICAgICAgY29uc3QgdGVybVVuaWZpZWRXaXRoQ29uc3RydWN0b3IgPSB1bmlmeVRlcm1XaXRoQ29uc3RydWN0b3IodGVybU5vZGUsIHRlcm1zLCBjb25zdHJ1Y3RvciwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgIGlmICh0ZXJtVW5pZmllZFdpdGhDb25zdHJ1Y3Rvcikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtVW5pZmllZFdpdGhDb25zdHJ1Y3RvcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmlmeVRlcm1XaXRoQ29uc3RydWN0b3IodGVybU5vZGUsIHRlcm1zLCBjb25zdHJ1Y3RvciwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgdGVybVVuaWZpZWRXaXRoQ29uc3RydWN0b3IgPSBmYWxzZTtcblxuICBjb25zdCB0ZXJtU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyh0ZXJtTm9kZSksXG4gICAgICAgIGNvbnN0cnVjdG9yU3RyaW5nID0gY29uc3RydWN0b3IuZ2V0U3RyaW5nKCksXG4gICAgICAgIGNvbnN0cnVjdG9yVGVybU5vZGUgPSBjb25zdHJ1Y3Rvci5nZXRUZXJtTm9kZSgpO1xuXG4gIGxvY2FsQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IuLi5gLCB0ZXJtTm9kZSk7XG5cbiAgY29uc3QgdGVybU5vZGVBID0gdGVybU5vZGUsICAvLy9cbiAgICAgICAgY29uc3RydWN0b3JUZXJtTm9kZUIgPSBjb25zdHJ1Y3RvclRlcm1Ob2RlLCAgLy8vXG4gICAgICAgIHVuaWZpZWQgPSB0ZXJtV2l0aENvbnN0cnVjdG9yVW5pZmllci51bmlmeSh0ZXJtTm9kZUEsIGNvbnN0cnVjdG9yVGVybU5vZGVCLCBsb2NhbENvbnRleHQpO1xuXG4gIGlmICh1bmlmaWVkKSB7XG4gICAgbGV0IHZlcmlmaWVkQWhlYWQ7XG5cbiAgICBjb25zdCB0eXBlID0gY29uc3RydWN0b3IuZ2V0VHlwZSgpLFxuICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZUFuZFR5cGUodGVybU5vZGUsIHR5cGUpO1xuXG4gICAgdGVybXMucHVzaCh0ZXJtKTtcblxuICAgIHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgdGVybXMucG9wKCk7XG5cbiAgICB0ZXJtVW5pZmllZFdpdGhDb25zdHJ1Y3RvciA9IHZlcmlmaWVkQWhlYWQ7ICAvLy9cbiAgfVxuXG4gIGlmICh0ZXJtVW5pZmllZFdpdGhDb25zdHJ1Y3Rvcikge1xuICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gd2l0aCB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci5gLCB0ZXJtTm9kZSk7XG4gIH1cblxuICByZXR1cm4gdGVybVVuaWZpZWRXaXRoQ29uc3RydWN0b3I7XG59XG4iXSwibmFtZXMiOlsidW5pZnlUZXJtV2l0aENvbnN0cnVjdG9ycyIsInVuaWZ5VGVybVdpdGhDb25zdHJ1Y3RvciIsInZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidGVybU5vZGUiLCJ0ZXJtcyIsImxvY2FsQ29udGV4dCIsInZlcmlmeUFoZWFkIiwidGVybVVuaWZpZWRXaXRoQ29uc3RydWN0b3JzIiwidmFyaWFibGVOb2RlIiwiY29uc3RydWN0b3JzIiwiZ2V0Q29uc3RydWN0b3JzIiwic29tZSIsImNvbnN0cnVjdG9yIiwidGVybVVuaWZpZWRXaXRoQ29uc3RydWN0b3IiLCJ0ZXJtU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwiY29uc3RydWN0b3JTdHJpbmciLCJnZXRTdHJpbmciLCJjb25zdHJ1Y3RvclRlcm1Ob2RlIiwiZ2V0VGVybU5vZGUiLCJ0cmFjZSIsInRlcm1Ob2RlQSIsImNvbnN0cnVjdG9yVGVybU5vZGVCIiwidW5pZmllZCIsInRlcm1XaXRoQ29uc3RydWN0b3JVbmlmaWVyIiwidW5pZnkiLCJ2ZXJpZmllZEFoZWFkIiwidHlwZSIsImdldFR5cGUiLCJ0ZXJtIiwiVGVybSIsImZyb21UZXJtTm9kZUFuZFR5cGUiLCJwdXNoIiwicG9wIiwiZGVidWciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQVNBLE9Ba0JDO2VBbEJ1QkE7O0lBb0JSQyx3QkFBd0I7ZUFBeEJBOzs7MkRBM0JDOzBFQUNzQjtxQkFFYjs7Ozs7O0FBRTFCLElBQU1DLG9CQUFvQkMsSUFBQUEsZ0JBQVMsRUFBQztBQUVyQixTQUFTSCwwQkFBMEJJLFFBQVEsRUFBRUMsS0FBSyxFQUFFQyxZQUFZLEVBQUVDLFdBQVc7SUFDMUYsSUFBSUMsOEJBQThCO0lBRWxDLElBQU1DLGVBQWVQLGtCQUFrQkU7SUFFdkMsSUFBSUssaUJBQWlCLE1BQU07UUFDekIsSUFBTUMsZUFBZUosYUFBYUssZUFBZTtRQUVqREgsOEJBQThCRSxhQUFhRSxJQUFJLENBQUMsU0FBQ0M7WUFDL0MsSUFBTUMsNkJBQTZCYix5QkFBeUJHLFVBQVVDLE9BQU9RLGFBQWFQLGNBQWNDO1lBRXhHLElBQUlPLDRCQUE0QjtnQkFDOUIsT0FBTztZQUNUO1FBQ0Y7SUFDRjtJQUVBLE9BQU9OO0FBQ1Q7QUFFTyxTQUFTUCx5QkFBeUJHLFFBQVEsRUFBRUMsS0FBSyxFQUFFUSxXQUFXLEVBQUVQLFlBQVksRUFBRUMsV0FBVztJQUM5RixJQUFJTyw2QkFBNkI7SUFFakMsSUFBTUMsYUFBYVQsYUFBYVUsWUFBWSxDQUFDWixXQUN2Q2Esb0JBQW9CSixZQUFZSyxTQUFTLElBQ3pDQyxzQkFBc0JOLFlBQVlPLFdBQVc7SUFFbkRkLGFBQWFlLEtBQUssQ0FBQyxBQUFDLGlCQUE4Q0osT0FBOUJGLFlBQVcscUJBQXFDLE9BQWxCRSxtQkFBa0IscUJBQW1CYjtJQUV2RyxJQUFNa0IsWUFBWWxCLFVBQ1ptQix1QkFBdUJKLHFCQUN2QkssVUFBVUMsNEJBQTBCLENBQUNDLEtBQUssQ0FBQ0osV0FBV0Msc0JBQXNCakI7SUFFbEYsSUFBSWtCLFNBQVM7UUFDWCxJQUFJRztRQUVKLElBQU1DLE9BQU9mLFlBQVlnQixPQUFPLElBQzFCQyxPQUFPQyxhQUFJLENBQUNDLG1CQUFtQixDQUFDNUIsVUFBVXdCO1FBRWhEdkIsTUFBTTRCLElBQUksQ0FBQ0g7UUFFWEgsZ0JBQWdCcEI7UUFFaEJGLE1BQU02QixHQUFHO1FBRVRwQiw2QkFBNkJhLGVBQWdCLEdBQUc7SUFDbEQ7SUFFQSxJQUFJYiw0QkFBNEI7UUFDOUJSLGFBQWE2QixLQUFLLENBQUMsQUFBQyxtQkFBZ0RsQixPQUE5QkYsWUFBVyxxQkFBcUMsT0FBbEJFLG1CQUFrQixtQkFBaUJiO0lBQ3pHO0lBRUEsT0FBT1U7QUFDVCJ9