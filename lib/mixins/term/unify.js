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
var _query = require("../../utilities/query");
var _unification = require("../../utilities/unification");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var termNodeQuery = (0, _query.nodeQuery)("/term/argument/term");
function unifyWithBracketedConstructor(term, context, verifyAhead) {
    var unifiedWithBracketedConstructor;
    var termString = term.getString();
    context.trace("Unifying the '".concat(termString, "' term with the bracketed constructor..."), term);
    var bracketedConstructor = _bracketed.default.fromNothing();
    unifiedWithBracketedConstructor = unifyWithConstructor(term, bracketedConstructor, context, function() {
        var verifiedAhead = false;
        var Term = _shim.default.Term, bracketedTerm = term, bracketedTermNode = bracketedTerm.getNode(), termNode = termNodeQuery(bracketedTermNode); ///
        term = Term.fromTermNode(termNode, context);
        if (term !== null) {
            var termVVerified = term.verify(context, function() {
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
    if (unifiedWithBracketedConstructor) {
        context.debug("...unified the '".concat(termString, "' term with the bracketed constructor."), term);
    }
    return unifiedWithBracketedConstructor;
}
function unifyWithConstructors(term, context, verifyAhead) {
    var unifiedWithConstructors;
    var constructors = context.getConstructors();
    unifiedWithConstructors = constructors.some(function(constructor) {
        var unifiedWithConstructor = unifyWithConstructor(term, constructor, context, verifyAhead);
        if (unifiedWithConstructor) {
            return true;
        }
    });
    return unifiedWithConstructors;
}
var unifyMixins = [
    unifyWithBracketedConstructor,
    unifyWithConstructors
];
var _default = unifyMixins;
function unifyWithConstructor(term, constructor, context, verifyAhead) {
    var unifiedWithConstructor = false;
    var termString = term.getString(), constructorString = constructor.getString();
    context.trace("Unifying the '".concat(termString, "' term with the '").concat(constructorString, "' constructor..."), term);
    var termUnifiedWithConstructor = (0, _unification.unifyTermWithConstructor)(term, constructor, context);
    if (termUnifiedWithConstructor) {
        var verifiedAhead;
        var type = constructor.getType();
        term.setType(type);
        verifiedAhead = verifyAhead();
        unifiedWithConstructor = verifiedAhead; ///
    }
    if (unifiedWithConstructor) {
        context.debug("...unified the '".concat(termString, "' term with the '").concat(constructorString, "' constructor."), term);
    }
    return unifiedWithConstructor;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9taXhpbnMvdGVybS91bmlmeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uLy4uL3NoaW1cIjtcbmltcG9ydCBCcmFja2V0ZWRDb25zdHJ1Y3RvciBmcm9tIFwiLi4vLi4vY29uc3RydWN0b3IvYnJhY2tldGVkXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHVuaWZ5VGVybVdpdGhDb25zdHJ1Y3RvciB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdW5pZmljYXRpb25cIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL2FyZ3VtZW50L3Rlcm1cIik7XG5cbmZ1bmN0aW9uIHVuaWZ5V2l0aEJyYWNrZXRlZENvbnN0cnVjdG9yKHRlcm0sIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCB1bmlmaWVkV2l0aEJyYWNrZXRlZENvbnN0cnVjdG9yO1xuXG4gIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpO1xuXG4gIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB3aXRoIHRoZSBicmFja2V0ZWQgY29uc3RydWN0b3IuLi5gLCB0ZXJtKTtcblxuICBjb25zdCBicmFja2V0ZWRDb25zdHJ1Y3RvciA9IEJyYWNrZXRlZENvbnN0cnVjdG9yLmZyb21Ob3RoaW5nKCk7XG5cbiAgdW5pZmllZFdpdGhCcmFja2V0ZWRDb25zdHJ1Y3RvciA9IHVuaWZ5V2l0aENvbnN0cnVjdG9yKHRlcm0sIGJyYWNrZXRlZENvbnN0cnVjdG9yLCBjb250ZXh0LCAoKSA9PiB7XG4gICAgbGV0IHZlcmlmaWVkQWhlYWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHsgVGVybSB9ID0gc2hpbSxcbiAgICAgICAgICBicmFja2V0ZWRUZXJtID0gdGVybSwgLy8vXG4gICAgICAgICAgYnJhY2tldGVkVGVybU5vZGUgPSBicmFja2V0ZWRUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkoYnJhY2tldGVkVGVybU5vZGUpOyAvLy9cblxuICAgIHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdGVybVZWZXJpZmllZCA9IHRlcm0udmVyaWZ5KGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgbGV0IHZlcmlmaWVkQWhlYWQ7XG5cbiAgICAgICAgY29uc3QgdHlwZSA9IHRlcm0uZ2V0VHlwZSgpO1xuXG4gICAgICAgIGJyYWNrZXRlZFRlcm0uc2V0VHlwZSh0eXBlKTtcblxuICAgICAgICB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgIH0pO1xuXG4gICAgICB2ZXJpZmllZEFoZWFkID0gdGVybVZWZXJpZmllZDsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICB9KTtcblxuICBpZiAodW5pZmllZFdpdGhCcmFja2V0ZWRDb25zdHJ1Y3Rvcikge1xuICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlIGJyYWNrZXRlZCBjb25zdHJ1Y3Rvci5gLCB0ZXJtKTtcbiAgfVxuXG4gIHJldHVybiB1bmlmaWVkV2l0aEJyYWNrZXRlZENvbnN0cnVjdG9yO1xufVxuXG5mdW5jdGlvbiB1bmlmeVdpdGhDb25zdHJ1Y3RvcnModGVybSwgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHVuaWZpZWRXaXRoQ29uc3RydWN0b3JzO1xuXG4gIGNvbnN0IGNvbnN0cnVjdG9ycyA9IGNvbnRleHQuZ2V0Q29uc3RydWN0b3JzKCk7XG5cbiAgdW5pZmllZFdpdGhDb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnMuc29tZSgoY29uc3RydWN0b3IpID0+IHtcbiAgICBjb25zdCB1bmlmaWVkV2l0aENvbnN0cnVjdG9yID0gdW5pZnlXaXRoQ29uc3RydWN0b3IodGVybSwgY29uc3RydWN0b3IsIGNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgIGlmICh1bmlmaWVkV2l0aENvbnN0cnVjdG9yKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB1bmlmaWVkV2l0aENvbnN0cnVjdG9ycztcbn1cblxuY29uc3QgdW5pZnlNaXhpbnMgPSBbXG4gIHVuaWZ5V2l0aEJyYWNrZXRlZENvbnN0cnVjdG9yLFxuICB1bmlmeVdpdGhDb25zdHJ1Y3RvcnNcbl07XG5cbmV4cG9ydCBkZWZhdWx0IHVuaWZ5TWl4aW5zO1xuXG5mdW5jdGlvbiB1bmlmeVdpdGhDb25zdHJ1Y3Rvcih0ZXJtLCBjb25zdHJ1Y3RvciwgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHVuaWZpZWRXaXRoQ29uc3RydWN0b3IgPSBmYWxzZTtcblxuICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgY29uc3RydWN0b3JTdHJpbmcgPSBjb25zdHJ1Y3Rvci5nZXRTdHJpbmcoKTtcblxuICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gd2l0aCB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci4uLmAsIHRlcm0pO1xuXG4gIGNvbnN0IHRlcm1VbmlmaWVkV2l0aENvbnN0cnVjdG9yID0gdW5pZnlUZXJtV2l0aENvbnN0cnVjdG9yKHRlcm0sIGNvbnN0cnVjdG9yLCBjb250ZXh0KTtcblxuICBpZiAodGVybVVuaWZpZWRXaXRoQ29uc3RydWN0b3IpIHtcbiAgICBsZXQgdmVyaWZpZWRBaGVhZDtcblxuICAgIGNvbnN0IHR5cGUgPSBjb25zdHJ1Y3Rvci5nZXRUeXBlKCk7XG5cbiAgICB0ZXJtLnNldFR5cGUodHlwZSk7XG5cbiAgICB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgIHVuaWZpZWRXaXRoQ29uc3RydWN0b3IgPSB2ZXJpZmllZEFoZWFkOyAgLy8vXG4gIH1cblxuICBpZiAodW5pZmllZFdpdGhDb25zdHJ1Y3Rvcikge1xuICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHdpdGggdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IuYCwgdGVybSk7XG4gIH1cblxuICByZXR1cm4gdW5pZmllZFdpdGhDb25zdHJ1Y3Rvcjtcbn1cbiJdLCJuYW1lcyI6WyJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidW5pZnlXaXRoQnJhY2tldGVkQ29uc3RydWN0b3IiLCJ0ZXJtIiwiY29udGV4dCIsInZlcmlmeUFoZWFkIiwidW5pZmllZFdpdGhCcmFja2V0ZWRDb25zdHJ1Y3RvciIsInRlcm1TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImJyYWNrZXRlZENvbnN0cnVjdG9yIiwiQnJhY2tldGVkQ29uc3RydWN0b3IiLCJmcm9tTm90aGluZyIsInVuaWZ5V2l0aENvbnN0cnVjdG9yIiwidmVyaWZpZWRBaGVhZCIsIlRlcm0iLCJzaGltIiwiYnJhY2tldGVkVGVybSIsImJyYWNrZXRlZFRlcm1Ob2RlIiwiZ2V0Tm9kZSIsInRlcm1Ob2RlIiwiZnJvbVRlcm1Ob2RlIiwidGVybVZWZXJpZmllZCIsInZlcmlmeSIsInR5cGUiLCJnZXRUeXBlIiwic2V0VHlwZSIsImRlYnVnIiwidW5pZnlXaXRoQ29uc3RydWN0b3JzIiwidW5pZmllZFdpdGhDb25zdHJ1Y3RvcnMiLCJjb25zdHJ1Y3RvcnMiLCJnZXRDb25zdHJ1Y3RvcnMiLCJzb21lIiwiY29uc3RydWN0b3IiLCJ1bmlmaWVkV2l0aENvbnN0cnVjdG9yIiwidW5pZnlNaXhpbnMiLCJjb25zdHJ1Y3RvclN0cmlu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