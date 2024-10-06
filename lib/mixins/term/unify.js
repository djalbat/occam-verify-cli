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
var _shim = /*#__PURE__*/ _interop_require_default(require("../../shim"));
var _bracketed = /*#__PURE__*/ _interop_require_default(require("../../constructor/bracketed"));
var _termWithConstructor = /*#__PURE__*/ _interop_require_default(require("../../unifier/termWithConstructor"));
var _query = require("../../utilities/query");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var termNodeQuery = (0, _query.nodeQuery)("/term/argument/term");
function unifyTermWithBracketedConstructor(term, localContext, verifyAhead) {
    var termUnifiedWithBracketedConstructor;
    var termString = term.getString();
    localContext.trace("Unifying the '".concat(termString, "' term with the bracketed constructor..."), term);
    var bracketedConstructor = _bracketed.default.fromNothing();
    termUnifiedWithBracketedConstructor = unifyTermWithConstructor(term, bracketedConstructor, localContext, function() {
        var verifiedAhead = false;
        var bracketedTerm = term, bracketedTermNode = bracketedTerm.getNode(), termNode = termNodeQuery(bracketedTermNode); ///
        if (termNode !== null) {
            var Term = _shim.default.Term;
            term = Term.fromTermNode(termNode, localContext);
            var termVVerified = term.verify(localContext, function() {
                var verifiedAhead;
                var type = term.getType();
                bracketedTerm.setType(type);
                verifiedAhead = verifyAhead();
                return verifiedAhead;
            });
            verifiedAhead = termVVerified; ///
        }
        return verifiedAhead;
    });
    if (termUnifiedWithBracketedConstructor) {
        localContext.debug("...unified the '".concat(termString, "' term with the bracketed constructor."), term);
    }
    return termUnifiedWithBracketedConstructor;
}
function unifyTermWithConstructors(term, localContext, verifyAhead) {
    var termUnifiedWithConstructors = false;
    var constructors = localContext.getConstructors();
    termUnifiedWithConstructors = constructors.some(function(constructor) {
        var termUnifiedWithConstructor = unifyTermWithConstructor(term, constructor, localContext, verifyAhead);
        if (termUnifiedWithConstructor) {
            return true;
        }
    });
    return termUnifiedWithConstructors;
}
var unifyMixins = [
    unifyTermWithBracketedConstructor,
    unifyTermWithConstructors
];
var _default = unifyMixins;
function unifyTermWithConstructor(term, constructor, localContext, verifyAhead) {
    var termUnifiedWithConstructor = false;
    var termString = term.getString(), constructorString = constructor.getString();
    localContext.trace("Unifying the '".concat(termString, "' term with the '").concat(constructorString, "' constructor..."), term);
    var termNode = term.getNode(), constructorTerm = constructor.getTerm(), constructorTermNode = constructorTerm.getNode(), unified = _termWithConstructor.default.unify(termNode, constructorTermNode, localContext);
    if (unified) {
        var verifiedAhead;
        var type = constructor.getType();
        term.setType(type);
        verifiedAhead = verifyAhead();
        termUnifiedWithConstructor = verifiedAhead; ///
    }
    if (termUnifiedWithConstructor) {
        localContext.debug("...unified the '".concat(termString, "' term with the '").concat(constructorString, "' constructor."), term);
    }
    return termUnifiedWithConstructor;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9taXhpbnMvdGVybS91bmlmeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uLy4uL3NoaW1cIjtcbmltcG9ydCBCcmFja2V0ZWRDb25zdHJ1Y3RvciBmcm9tIFwiLi4vLi4vY29uc3RydWN0b3IvYnJhY2tldGVkXCI7XG5pbXBvcnQgdGVybVdpdGhDb25zdHJ1Y3RvclVuaWZpZXIgZnJvbSBcIi4uLy4uL3VuaWZpZXIvdGVybVdpdGhDb25zdHJ1Y3RvclwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybS9hcmd1bWVudC90ZXJtXCIpO1xuXG5mdW5jdGlvbiB1bmlmeVRlcm1XaXRoQnJhY2tldGVkQ29uc3RydWN0b3IodGVybSwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgdGVybVVuaWZpZWRXaXRoQnJhY2tldGVkQ29uc3RydWN0b3I7XG5cbiAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgbG9jYWxDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gd2l0aCB0aGUgYnJhY2tldGVkIGNvbnN0cnVjdG9yLi4uYCwgdGVybSk7XG5cbiAgY29uc3QgYnJhY2tldGVkQ29uc3RydWN0b3IgPSBCcmFja2V0ZWRDb25zdHJ1Y3Rvci5mcm9tTm90aGluZygpO1xuXG4gIHRlcm1VbmlmaWVkV2l0aEJyYWNrZXRlZENvbnN0cnVjdG9yID0gdW5pZnlUZXJtV2l0aENvbnN0cnVjdG9yKHRlcm0sIGJyYWNrZXRlZENvbnN0cnVjdG9yLCBsb2NhbENvbnRleHQsICgpID0+IHtcbiAgICBsZXQgdmVyaWZpZWRBaGVhZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgYnJhY2tldGVkVGVybSA9IHRlcm0sIC8vL1xuICAgICAgICAgIGJyYWNrZXRlZFRlcm1Ob2RlID0gYnJhY2tldGVkVGVybS5nZXROb2RlKCksXG4gICAgICAgICAgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KGJyYWNrZXRlZFRlcm1Ob2RlKTsgLy8vXG5cbiAgICBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgVGVybSB9ID0gc2hpbTtcblxuICAgICAgdGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBjb25zdCB0ZXJtVlZlcmlmaWVkID0gdGVybS52ZXJpZnkobG9jYWxDb250ZXh0LCAoKSA9PiB7XG4gICAgICAgIGxldCB2ZXJpZmllZEFoZWFkO1xuXG4gICAgICAgIGNvbnN0IHR5cGUgPSB0ZXJtLmdldFR5cGUoKTtcblxuICAgICAgICBicmFja2V0ZWRUZXJtLnNldFR5cGUodHlwZSk7XG5cbiAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICB9KTtcblxuICAgICAgdmVyaWZpZWRBaGVhZCA9IHRlcm1WVmVyaWZpZWQ7ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgfSk7XG5cbiAgaWYgKHRlcm1VbmlmaWVkV2l0aEJyYWNrZXRlZENvbnN0cnVjdG9yKSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB3aXRoIHRoZSBicmFja2V0ZWQgY29uc3RydWN0b3IuYCwgdGVybSk7XG4gIH1cblxuICByZXR1cm4gdGVybVVuaWZpZWRXaXRoQnJhY2tldGVkQ29uc3RydWN0b3I7XG59XG5cbmZ1bmN0aW9uIHVuaWZ5VGVybVdpdGhDb25zdHJ1Y3RvcnModGVybSwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgdGVybVVuaWZpZWRXaXRoQ29uc3RydWN0b3JzID0gZmFsc2U7XG5cbiAgY29uc3QgY29uc3RydWN0b3JzID0gbG9jYWxDb250ZXh0LmdldENvbnN0cnVjdG9ycygpO1xuXG4gIHRlcm1VbmlmaWVkV2l0aENvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9ycy5zb21lKChjb25zdHJ1Y3RvcikgPT4ge1xuICAgIGNvbnN0IHRlcm1VbmlmaWVkV2l0aENvbnN0cnVjdG9yID0gdW5pZnlUZXJtV2l0aENvbnN0cnVjdG9yKHRlcm0sIGNvbnN0cnVjdG9yLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgIGlmICh0ZXJtVW5pZmllZFdpdGhDb25zdHJ1Y3Rvcikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gdGVybVVuaWZpZWRXaXRoQ29uc3RydWN0b3JzO1xufVxuXG5jb25zdCB1bmlmeU1peGlucyA9IFtcbiAgdW5pZnlUZXJtV2l0aEJyYWNrZXRlZENvbnN0cnVjdG9yLFxuICB1bmlmeVRlcm1XaXRoQ29uc3RydWN0b3JzXG5dO1xuXG5leHBvcnQgZGVmYXVsdCB1bmlmeU1peGlucztcblxuZnVuY3Rpb24gdW5pZnlUZXJtV2l0aENvbnN0cnVjdG9yKHRlcm0sIGNvbnN0cnVjdG9yLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCB0ZXJtVW5pZmllZFdpdGhDb25zdHJ1Y3RvciA9IGZhbHNlO1xuXG4gIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICBjb25zdHJ1Y3RvclN0cmluZyA9IGNvbnN0cnVjdG9yLmdldFN0cmluZygpO1xuXG4gIGxvY2FsQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IuLi5gLCB0ZXJtKTtcblxuICBjb25zdCB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICBjb25zdHJ1Y3RvclRlcm0gPSBjb25zdHJ1Y3Rvci5nZXRUZXJtKCksXG4gICAgICAgIGNvbnN0cnVjdG9yVGVybU5vZGUgPSBjb25zdHJ1Y3RvclRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICB1bmlmaWVkID0gdGVybVdpdGhDb25zdHJ1Y3RvclVuaWZpZXIudW5pZnkodGVybU5vZGUsIGNvbnN0cnVjdG9yVGVybU5vZGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgaWYgKHVuaWZpZWQpIHtcbiAgICBsZXQgdmVyaWZpZWRBaGVhZDtcblxuICAgIGNvbnN0IHR5cGUgPSBjb25zdHJ1Y3Rvci5nZXRUeXBlKCk7XG5cbiAgICB0ZXJtLnNldFR5cGUodHlwZSk7XG5cbiAgICB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgIHRlcm1VbmlmaWVkV2l0aENvbnN0cnVjdG9yID0gdmVyaWZpZWRBaGVhZDsgIC8vL1xuICB9XG5cbiAgaWYgKHRlcm1VbmlmaWVkV2l0aENvbnN0cnVjdG9yKSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB3aXRoIHRoZSAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yLmAsIHRlcm0pO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1VbmlmaWVkV2l0aENvbnN0cnVjdG9yO1xufVxuIl0sIm5hbWVzIjpbInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ1bmlmeVRlcm1XaXRoQnJhY2tldGVkQ29uc3RydWN0b3IiLCJ0ZXJtIiwibG9jYWxDb250ZXh0IiwidmVyaWZ5QWhlYWQiLCJ0ZXJtVW5pZmllZFdpdGhCcmFja2V0ZWRDb25zdHJ1Y3RvciIsInRlcm1TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImJyYWNrZXRlZENvbnN0cnVjdG9yIiwiQnJhY2tldGVkQ29uc3RydWN0b3IiLCJmcm9tTm90aGluZyIsInVuaWZ5VGVybVdpdGhDb25zdHJ1Y3RvciIsInZlcmlmaWVkQWhlYWQiLCJicmFja2V0ZWRUZXJtIiwiYnJhY2tldGVkVGVybU5vZGUiLCJnZXROb2RlIiwidGVybU5vZGUiLCJUZXJtIiwic2hpbSIsImZyb21UZXJtTm9kZSIsInRlcm1WVmVyaWZpZWQiLCJ2ZXJpZnkiLCJ0eXBlIiwiZ2V0VHlwZSIsInNldFR5cGUiLCJkZWJ1ZyIsInVuaWZ5VGVybVdpdGhDb25zdHJ1Y3RvcnMiLCJ0ZXJtVW5pZmllZFdpdGhDb25zdHJ1Y3RvcnMiLCJjb25zdHJ1Y3RvcnMiLCJnZXRDb25zdHJ1Y3RvcnMiLCJzb21lIiwiY29uc3RydWN0b3IiLCJ0ZXJtVW5pZmllZFdpdGhDb25zdHJ1Y3RvciIsInVuaWZ5TWl4aW5zIiwiY29uc3RydWN0b3JTdHJpbmciLCJjb25zdHJ1Y3RvclRlcm0iLCJnZXRUZXJtIiwiY29uc3RydWN0b3JUZXJtTm9kZSIsInVuaWZpZWQiLCJ0ZXJtV2l0aENvbnN0cnVjdG9yVW5pZmllciIsInVuaWZ5Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE2RUE7OztlQUFBOzs7MkRBM0VpQjtnRUFDZ0I7MEVBQ007cUJBRWI7Ozs7OztBQUUxQixJQUFNQSxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUM7QUFFaEMsU0FBU0Msa0NBQWtDQyxJQUFJLEVBQUVDLFlBQVksRUFBRUMsV0FBVztJQUN4RSxJQUFJQztJQUVKLElBQU1DLGFBQWFKLEtBQUtLLFNBQVM7SUFFakNKLGFBQWFLLEtBQUssQ0FBQyxBQUFDLGlCQUEyQixPQUFYRixZQUFXLDZDQUEyQ0o7SUFFMUYsSUFBTU8sdUJBQXVCQyxrQkFBb0IsQ0FBQ0MsV0FBVztJQUU3RE4sc0NBQXNDTyx5QkFBeUJWLE1BQU1PLHNCQUFzQk4sY0FBYztRQUN2RyxJQUFJVSxnQkFBZ0I7UUFFcEIsSUFBTUMsZ0JBQWdCWixNQUNoQmEsb0JBQW9CRCxjQUFjRSxPQUFPLElBQ3pDQyxXQUFXbEIsY0FBY2dCLG9CQUFvQixHQUFHO1FBRXRELElBQUlFLGFBQWEsTUFBTTtZQUNyQixJQUFNLEFBQUVDLE9BQVNDLGFBQUksQ0FBYkQ7WUFFUmhCLE9BQU9nQixLQUFLRSxZQUFZLENBQUNILFVBQVVkO1lBRW5DLElBQU1rQixnQkFBZ0JuQixLQUFLb0IsTUFBTSxDQUFDbkIsY0FBYztnQkFDOUMsSUFBSVU7Z0JBRUosSUFBTVUsT0FBT3JCLEtBQUtzQixPQUFPO2dCQUV6QlYsY0FBY1csT0FBTyxDQUFDRjtnQkFFdEJWLGdCQUFnQlQ7Z0JBRWhCLE9BQU9TO1lBQ1Q7WUFFQUEsZ0JBQWdCUSxlQUFnQixHQUFHO1FBQ3JDO1FBRUEsT0FBT1I7SUFDVDtJQUVBLElBQUlSLHFDQUFxQztRQUN2Q0YsYUFBYXVCLEtBQUssQ0FBQyxBQUFDLG1CQUE2QixPQUFYcEIsWUFBVywyQ0FBeUNKO0lBQzVGO0lBRUEsT0FBT0c7QUFDVDtBQUVBLFNBQVNzQiwwQkFBMEJ6QixJQUFJLEVBQUVDLFlBQVksRUFBRUMsV0FBVztJQUNoRSxJQUFJd0IsOEJBQThCO0lBRWxDLElBQU1DLGVBQWUxQixhQUFhMkIsZUFBZTtJQUVqREYsOEJBQThCQyxhQUFhRSxJQUFJLENBQUMsU0FBQ0M7UUFDL0MsSUFBTUMsNkJBQTZCckIseUJBQXlCVixNQUFNOEIsYUFBYTdCLGNBQWNDO1FBRTdGLElBQUk2Qiw0QkFBNEI7WUFDOUIsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPTDtBQUNUO0FBRUEsSUFBTU0sY0FBYztJQUNsQmpDO0lBQ0EwQjtDQUNEO0lBRUQsV0FBZU87QUFFZixTQUFTdEIseUJBQXlCVixJQUFJLEVBQUU4QixXQUFXLEVBQUU3QixZQUFZLEVBQUVDLFdBQVc7SUFDNUUsSUFBSTZCLDZCQUE2QjtJQUVqQyxJQUFNM0IsYUFBYUosS0FBS0ssU0FBUyxJQUMzQjRCLG9CQUFvQkgsWUFBWXpCLFNBQVM7SUFFL0NKLGFBQWFLLEtBQUssQ0FBQyxBQUFDLGlCQUE4QzJCLE9BQTlCN0IsWUFBVyxxQkFBcUMsT0FBbEI2QixtQkFBa0IscUJBQW1CakM7SUFFdkcsSUFBTWUsV0FBV2YsS0FBS2MsT0FBTyxJQUN2Qm9CLGtCQUFrQkosWUFBWUssT0FBTyxJQUNyQ0Msc0JBQXNCRixnQkFBZ0JwQixPQUFPLElBQzdDdUIsVUFBVUMsNEJBQTBCLENBQUNDLEtBQUssQ0FBQ3hCLFVBQVVxQixxQkFBcUJuQztJQUVoRixJQUFJb0MsU0FBUztRQUNYLElBQUkxQjtRQUVKLElBQU1VLE9BQU9TLFlBQVlSLE9BQU87UUFFaEN0QixLQUFLdUIsT0FBTyxDQUFDRjtRQUViVixnQkFBZ0JUO1FBRWhCNkIsNkJBQTZCcEIsZUFBZ0IsR0FBRztJQUNsRDtJQUVBLElBQUlvQiw0QkFBNEI7UUFDOUI5QixhQUFhdUIsS0FBSyxDQUFDLEFBQUMsbUJBQWdEUyxPQUE5QjdCLFlBQVcscUJBQXFDLE9BQWxCNkIsbUJBQWtCLG1CQUFpQmpDO0lBQ3pHO0lBRUEsT0FBTytCO0FBQ1QifQ==