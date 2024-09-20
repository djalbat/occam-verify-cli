"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return unifyTermWithBracketedConstructor;
    }
});
var _shim = /*#__PURE__*/ _interop_require_default(require("../shim"));
var _bracketed = /*#__PURE__*/ _interop_require_default(require("../constructor/bracketed"));
var _termWithConstructor = /*#__PURE__*/ _interop_require_default(require("../unify/termWithConstructor"));
var _query = require("../utilities/query");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var termNodeQuery = (0, _query.nodeQuery)("/term/argument/term");
function unifyTermWithBracketedConstructor(termNode, terms, localContext, verifyAhead) {
    var termUnifiedWithBracketedConstructor;
    var termString = localContext.nodeAsString(termNode), bracketedTerms = [];
    localContext.trace("Unifying the '".concat(termString, "' term with the bracketed constructor..."), termNode);
    termUnifiedWithBracketedConstructor = (0, _termWithConstructor.default)(termNode, bracketedTerms, _bracketed.default, localContext, function() {
        var verifiedAhead;
        var bracketedTermNode = termNode; ///
        termNode = termNodeQuery(bracketedTermNode); ///
        var verifyTerm = _shim.default.verifyTerm, termVVerified = verifyTerm(termNode, terms, localContext, verifyAhead);
        verifiedAhead = termVVerified; ///
        return verifiedAhead;
    });
    if (termUnifiedWithBracketedConstructor) {
        localContext.debug("...unified the '".concat(termString, "' term with the bracketed constructor."), termNode);
    }
    return termUnifiedWithBracketedConstructor;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmeS90ZXJtV2l0aEJyYWNrZXRlZENvbnN0cnVjdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuaW1wb3J0IGJyYWNrZXRlZENvbnN0cnVjdG9yIGZyb20gXCIuLi9jb25zdHJ1Y3Rvci9icmFja2V0ZWRcIjtcbmltcG9ydCB1bmlmeVRlcm1XaXRoQ29uc3RydWN0b3IgZnJvbSBcIi4uL3VuaWZ5L3Rlcm1XaXRoQ29uc3RydWN0b3JcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0vYXJndW1lbnQvdGVybVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdW5pZnlUZXJtV2l0aEJyYWNrZXRlZENvbnN0cnVjdG9yKHRlcm1Ob2RlLCB0ZXJtcywgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgdGVybVVuaWZpZWRXaXRoQnJhY2tldGVkQ29uc3RydWN0b3I7XG5cbiAgY29uc3QgdGVybVN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcodGVybU5vZGUpLFxuICAgICAgICBicmFja2V0ZWRUZXJtcyA9IFtdO1xuXG4gIGxvY2FsQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlIGJyYWNrZXRlZCBjb25zdHJ1Y3Rvci4uLmAsIHRlcm1Ob2RlKTtcblxuICB0ZXJtVW5pZmllZFdpdGhCcmFja2V0ZWRDb25zdHJ1Y3RvciA9IHVuaWZ5VGVybVdpdGhDb25zdHJ1Y3Rvcih0ZXJtTm9kZSwgYnJhY2tldGVkVGVybXMsIGJyYWNrZXRlZENvbnN0cnVjdG9yLCBsb2NhbENvbnRleHQsICgpID0+IHtcbiAgICBsZXQgdmVyaWZpZWRBaGVhZDtcblxuICAgIGNvbnN0IGJyYWNrZXRlZFRlcm1Ob2RlID0gdGVybU5vZGU7IC8vL1xuXG4gICAgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KGJyYWNrZXRlZFRlcm1Ob2RlKTsgLy8vXG5cbiAgICBjb25zdCB7IHZlcmlmeVRlcm0gfSA9IHNoaW0sXG4gICAgICAgICAgdGVybVZWZXJpZmllZCA9IHZlcmlmeVRlcm0odGVybU5vZGUsIHRlcm1zLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgIHZlcmlmaWVkQWhlYWQgPSB0ZXJtVlZlcmlmaWVkOyAgLy8vXG5cbiAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgfSk7XG5cbiAgaWYgKHRlcm1VbmlmaWVkV2l0aEJyYWNrZXRlZENvbnN0cnVjdG9yKSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB3aXRoIHRoZSBicmFja2V0ZWQgY29uc3RydWN0b3IuYCwgdGVybU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1VbmlmaWVkV2l0aEJyYWNrZXRlZENvbnN0cnVjdG9yO1xufVxuIl0sIm5hbWVzIjpbInVuaWZ5VGVybVdpdGhCcmFja2V0ZWRDb25zdHJ1Y3RvciIsInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0ZXJtTm9kZSIsInRlcm1zIiwibG9jYWxDb250ZXh0IiwidmVyaWZ5QWhlYWQiLCJ0ZXJtVW5pZmllZFdpdGhCcmFja2V0ZWRDb25zdHJ1Y3RvciIsInRlcm1TdHJpbmciLCJub2RlQXNTdHJpbmciLCJicmFja2V0ZWRUZXJtcyIsInRyYWNlIiwidW5pZnlUZXJtV2l0aENvbnN0cnVjdG9yIiwiYnJhY2tldGVkQ29uc3RydWN0b3IiLCJ2ZXJpZmllZEFoZWFkIiwiYnJhY2tldGVkVGVybU5vZGUiLCJ2ZXJpZnlUZXJtIiwic2hpbSIsInRlcm1WVmVyaWZpZWQiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUF3QkE7OzsyREFSUDtnRUFDZ0I7MEVBQ0k7cUJBRVg7Ozs7OztBQUUxQixJQUFNQyxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUM7QUFFakIsU0FBU0Ysa0NBQWtDRyxRQUFRLEVBQUVDLEtBQUssRUFBRUMsWUFBWSxFQUFFQyxXQUFXO0lBQ2xHLElBQUlDO0lBRUosSUFBTUMsYUFBYUgsYUFBYUksWUFBWSxDQUFDTixXQUN2Q08saUJBQWlCLEVBQUU7SUFFekJMLGFBQWFNLEtBQUssQ0FBQyxBQUFDLGlCQUEyQixPQUFYSCxZQUFXLDZDQUEyQ0w7SUFFMUZJLHNDQUFzQ0ssSUFBQUEsNEJBQXdCLEVBQUNULFVBQVVPLGdCQUFnQkcsa0JBQW9CLEVBQUVSLGNBQWM7UUFDM0gsSUFBSVM7UUFFSixJQUFNQyxvQkFBb0JaLFVBQVUsR0FBRztRQUV2Q0EsV0FBV0YsY0FBY2Msb0JBQW9CLEdBQUc7UUFFaEQsSUFBTSxBQUFFQyxhQUFlQyxhQUFJLENBQW5CRCxZQUNGRSxnQkFBZ0JGLFdBQVdiLFVBQVVDLE9BQU9DLGNBQWNDO1FBRWhFUSxnQkFBZ0JJLGVBQWdCLEdBQUc7UUFFbkMsT0FBT0o7SUFDVDtJQUVBLElBQUlQLHFDQUFxQztRQUN2Q0YsYUFBYWMsS0FBSyxDQUFDLEFBQUMsbUJBQTZCLE9BQVhYLFlBQVcsMkNBQXlDTDtJQUM1RjtJQUVBLE9BQU9JO0FBQ1QifQ==