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
var _bracketed = /*#__PURE__*/ _interop_require_default(require("../../constructor/bracketed"));
var _termWithConstructor = /*#__PURE__*/ _interop_require_default(require("../../unifier/termWithConstructor"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function unifyTermWithBracketedConstructor(term, localContext, verifyAhead) {
    var termUnifiedWithBracketedConstructor;
    var termString = term.getString();
    localContext.trace("Unifying the '".concat(termString, "' term with the bracketed constructor..."), term);
    var bracketedConstructor = _bracketed.default.fromNothing();
    termUnifiedWithBracketedConstructor = unifyTermWithConstructor(term, bracketedConstructor, localContext, function() {
        var verifiedAhead;
        debugger;
        // const bracketedTermNode = term; ///
        //
        // term = termQuery(bracketedTermNode); ///
        //
        // const { Term } = shim,
        //       termVVerified = verifyTerm(term, localContext, verifyAhead);
        //
        // verifiedAhead = termVVerified;  ///
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
        debugger;
    // const type = constructor.getType(),
    //       term = Term.fromTermNodeAndType(term, type);
    //
    // terms.push(term);
    //
    // verifiedAhead = verifyAhead();
    //
    // terms.pop();
    //
    // termUnifiedWithConstructor = verifiedAhead;  ///
    }
    if (termUnifiedWithConstructor) {
        localContext.debug("...unified the '".concat(termString, "' term with the '").concat(constructorString, "' constructor."), term);
    }
    return termUnifiedWithConstructor;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9taXhpbnMvdGVybS91bmlmeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEJyYWNrZXRlZENvbnN0cnVjdG9yIGZyb20gXCIuLi8uLi9jb25zdHJ1Y3Rvci9icmFja2V0ZWRcIjtcbmltcG9ydCB0ZXJtV2l0aENvbnN0cnVjdG9yVW5pZmllciBmcm9tIFwiLi4vLi4vdW5pZmllci90ZXJtV2l0aENvbnN0cnVjdG9yXCI7XG5cbmZ1bmN0aW9uIHVuaWZ5VGVybVdpdGhCcmFja2V0ZWRDb25zdHJ1Y3Rvcih0ZXJtLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCB0ZXJtVW5pZmllZFdpdGhCcmFja2V0ZWRDb25zdHJ1Y3RvcjtcblxuICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKTtcblxuICBsb2NhbENvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB3aXRoIHRoZSBicmFja2V0ZWQgY29uc3RydWN0b3IuLi5gLCB0ZXJtKTtcblxuICBjb25zdCBicmFja2V0ZWRDb25zdHJ1Y3RvciA9IEJyYWNrZXRlZENvbnN0cnVjdG9yLmZyb21Ob3RoaW5nKCk7XG5cbiAgdGVybVVuaWZpZWRXaXRoQnJhY2tldGVkQ29uc3RydWN0b3IgPSB1bmlmeVRlcm1XaXRoQ29uc3RydWN0b3IodGVybSwgYnJhY2tldGVkQ29uc3RydWN0b3IsIGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgIGxldCB2ZXJpZmllZEFoZWFkO1xuXG4gICAgZGVidWdnZXJcblxuICAgIC8vIGNvbnN0IGJyYWNrZXRlZFRlcm1Ob2RlID0gdGVybTsgLy8vXG4gICAgLy9cbiAgICAvLyB0ZXJtID0gdGVybVF1ZXJ5KGJyYWNrZXRlZFRlcm1Ob2RlKTsgLy8vXG4gICAgLy9cbiAgICAvLyBjb25zdCB7IFRlcm0gfSA9IHNoaW0sXG4gICAgLy8gICAgICAgdGVybVZWZXJpZmllZCA9IHZlcmlmeVRlcm0odGVybSwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG4gICAgLy9cbiAgICAvLyB2ZXJpZmllZEFoZWFkID0gdGVybVZWZXJpZmllZDsgIC8vL1xuXG4gICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gIH0pO1xuXG4gIGlmICh0ZXJtVW5pZmllZFdpdGhCcmFja2V0ZWRDb25zdHJ1Y3Rvcikge1xuICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gd2l0aCB0aGUgYnJhY2tldGVkIGNvbnN0cnVjdG9yLmAsIHRlcm0pO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1VbmlmaWVkV2l0aEJyYWNrZXRlZENvbnN0cnVjdG9yO1xufVxuXG5mdW5jdGlvbiB1bmlmeVRlcm1XaXRoQ29uc3RydWN0b3JzKHRlcm0sIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHRlcm1VbmlmaWVkV2l0aENvbnN0cnVjdG9ycyA9IGZhbHNlO1xuXG4gIGNvbnN0IGNvbnN0cnVjdG9ycyA9IGxvY2FsQ29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoKTtcblxuICB0ZXJtVW5pZmllZFdpdGhDb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnMuc29tZSgoY29uc3RydWN0b3IpID0+IHtcbiAgICBjb25zdCB0ZXJtVW5pZmllZFdpdGhDb25zdHJ1Y3RvciA9IHVuaWZ5VGVybVdpdGhDb25zdHJ1Y3Rvcih0ZXJtLCBjb25zdHJ1Y3RvciwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICBpZiAodGVybVVuaWZpZWRXaXRoQ29uc3RydWN0b3IpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHRlcm1VbmlmaWVkV2l0aENvbnN0cnVjdG9ycztcbn1cblxuY29uc3QgdW5pZnlNaXhpbnMgPSBbXG4gIHVuaWZ5VGVybVdpdGhCcmFja2V0ZWRDb25zdHJ1Y3RvcixcbiAgdW5pZnlUZXJtV2l0aENvbnN0cnVjdG9yc1xuXTtcblxuZXhwb3J0IGRlZmF1bHQgdW5pZnlNaXhpbnM7XG5cbmZ1bmN0aW9uIHVuaWZ5VGVybVdpdGhDb25zdHJ1Y3Rvcih0ZXJtLCBjb25zdHJ1Y3RvciwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgdGVybVVuaWZpZWRXaXRoQ29uc3RydWN0b3IgPSBmYWxzZTtcblxuICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgY29uc3RydWN0b3JTdHJpbmcgPSBjb25zdHJ1Y3Rvci5nZXRTdHJpbmcoKTtcblxuICBsb2NhbENvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB3aXRoIHRoZSAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yLi4uYCwgdGVybSk7XG5cbiAgY29uc3QgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgY29uc3RydWN0b3JUZXJtID0gY29uc3RydWN0b3IuZ2V0VGVybSgpLFxuICAgICAgICBjb25zdHJ1Y3RvclRlcm1Ob2RlID0gY29uc3RydWN0b3JUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgdW5pZmllZCA9IHRlcm1XaXRoQ29uc3RydWN0b3JVbmlmaWVyLnVuaWZ5KHRlcm1Ob2RlLCBjb25zdHJ1Y3RvclRlcm1Ob2RlLCBsb2NhbENvbnRleHQpO1xuXG4gIGlmICh1bmlmaWVkKSB7XG4gICAgbGV0IHZlcmlmaWVkQWhlYWQ7XG5cbiAgICBkZWJ1Z2dlclxuXG4gICAgLy8gY29uc3QgdHlwZSA9IGNvbnN0cnVjdG9yLmdldFR5cGUoKSxcbiAgICAvLyAgICAgICB0ZXJtID0gVGVybS5mcm9tVGVybU5vZGVBbmRUeXBlKHRlcm0sIHR5cGUpO1xuICAgIC8vXG4gICAgLy8gdGVybXMucHVzaCh0ZXJtKTtcbiAgICAvL1xuICAgIC8vIHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuICAgIC8vXG4gICAgLy8gdGVybXMucG9wKCk7XG4gICAgLy9cbiAgICAvLyB0ZXJtVW5pZmllZFdpdGhDb25zdHJ1Y3RvciA9IHZlcmlmaWVkQWhlYWQ7ICAvLy9cbiAgfVxuXG4gIGlmICh0ZXJtVW5pZmllZFdpdGhDb25zdHJ1Y3Rvcikge1xuICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gd2l0aCB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci5gLCB0ZXJtKTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtVW5pZmllZFdpdGhDb25zdHJ1Y3Rvcjtcbn1cbiJdLCJuYW1lcyI6WyJ1bmlmeVRlcm1XaXRoQnJhY2tldGVkQ29uc3RydWN0b3IiLCJ0ZXJtIiwibG9jYWxDb250ZXh0IiwidmVyaWZ5QWhlYWQiLCJ0ZXJtVW5pZmllZFdpdGhCcmFja2V0ZWRDb25zdHJ1Y3RvciIsInRlcm1TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImJyYWNrZXRlZENvbnN0cnVjdG9yIiwiQnJhY2tldGVkQ29uc3RydWN0b3IiLCJmcm9tTm90aGluZyIsInVuaWZ5VGVybVdpdGhDb25zdHJ1Y3RvciIsInZlcmlmaWVkQWhlYWQiLCJkZWJ1ZyIsInVuaWZ5VGVybVdpdGhDb25zdHJ1Y3RvcnMiLCJ0ZXJtVW5pZmllZFdpdGhDb25zdHJ1Y3RvcnMiLCJjb25zdHJ1Y3RvcnMiLCJnZXRDb25zdHJ1Y3RvcnMiLCJzb21lIiwiY29uc3RydWN0b3IiLCJ0ZXJtVW5pZmllZFdpdGhDb25zdHJ1Y3RvciIsInVuaWZ5TWl4aW5zIiwiY29uc3RydWN0b3JTdHJpbmciLCJ0ZXJtTm9kZSIsImdldE5vZGUiLCJjb25zdHJ1Y3RvclRlcm0iLCJnZXRUZXJtIiwiY29uc3RydWN0b3JUZXJtTm9kZSIsInVuaWZpZWQiLCJ0ZXJtV2l0aENvbnN0cnVjdG9yVW5pZmllciIsInVuaWZ5Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkEyREE7OztlQUFBOzs7Z0VBekRpQzswRUFDTTs7Ozs7O0FBRXZDLFNBQVNBLGtDQUFrQ0MsSUFBSSxFQUFFQyxZQUFZLEVBQUVDLFdBQVc7SUFDeEUsSUFBSUM7SUFFSixJQUFNQyxhQUFhSixLQUFLSyxTQUFTO0lBRWpDSixhQUFhSyxLQUFLLENBQUMsQUFBQyxpQkFBMkIsT0FBWEYsWUFBVyw2Q0FBMkNKO0lBRTFGLElBQU1PLHVCQUF1QkMsa0JBQW9CLENBQUNDLFdBQVc7SUFFN0ROLHNDQUFzQ08seUJBQXlCVixNQUFNTyxzQkFBc0JOLGNBQWM7UUFDdkcsSUFBSVU7UUFFSixRQUFRO1FBRVIsc0NBQXNDO1FBQ3RDLEVBQUU7UUFDRiwyQ0FBMkM7UUFDM0MsRUFBRTtRQUNGLHlCQUF5QjtRQUN6QixxRUFBcUU7UUFDckUsRUFBRTtRQUNGLHNDQUFzQztRQUV0QyxPQUFPQTtJQUNUO0lBRUEsSUFBSVIscUNBQXFDO1FBQ3ZDRixhQUFhVyxLQUFLLENBQUMsQUFBQyxtQkFBNkIsT0FBWFIsWUFBVywyQ0FBeUNKO0lBQzVGO0lBRUEsT0FBT0c7QUFDVDtBQUVBLFNBQVNVLDBCQUEwQmIsSUFBSSxFQUFFQyxZQUFZLEVBQUVDLFdBQVc7SUFDaEUsSUFBSVksOEJBQThCO0lBRWxDLElBQU1DLGVBQWVkLGFBQWFlLGVBQWU7SUFFakRGLDhCQUE4QkMsYUFBYUUsSUFBSSxDQUFDLFNBQUNDO1FBQy9DLElBQU1DLDZCQUE2QlQseUJBQXlCVixNQUFNa0IsYUFBYWpCLGNBQWNDO1FBRTdGLElBQUlpQiw0QkFBNEI7WUFDOUIsT0FBTztRQUNUO0lBQ0Y7SUFFQSxPQUFPTDtBQUNUO0FBRUEsSUFBTU0sY0FBYztJQUNsQnJCO0lBQ0FjO0NBQ0Q7SUFFRCxXQUFlTztBQUVmLFNBQVNWLHlCQUF5QlYsSUFBSSxFQUFFa0IsV0FBVyxFQUFFakIsWUFBWSxFQUFFQyxXQUFXO0lBQzVFLElBQUlpQiw2QkFBNkI7SUFFakMsSUFBTWYsYUFBYUosS0FBS0ssU0FBUyxJQUMzQmdCLG9CQUFvQkgsWUFBWWIsU0FBUztJQUUvQ0osYUFBYUssS0FBSyxDQUFDLEFBQUMsaUJBQThDZSxPQUE5QmpCLFlBQVcscUJBQXFDLE9BQWxCaUIsbUJBQWtCLHFCQUFtQnJCO0lBRXZHLElBQU1zQixXQUFXdEIsS0FBS3VCLE9BQU8sSUFDdkJDLGtCQUFrQk4sWUFBWU8sT0FBTyxJQUNyQ0Msc0JBQXNCRixnQkFBZ0JELE9BQU8sSUFDN0NJLFVBQVVDLDRCQUEwQixDQUFDQyxLQUFLLENBQUNQLFVBQVVJLHFCQUFxQnpCO0lBRWhGLElBQUkwQixTQUFTO1FBQ1gsSUFBSWhCO1FBRUosUUFBUTtJQUVSLHNDQUFzQztJQUN0QyxxREFBcUQ7SUFDckQsRUFBRTtJQUNGLG9CQUFvQjtJQUNwQixFQUFFO0lBQ0YsaUNBQWlDO0lBQ2pDLEVBQUU7SUFDRixlQUFlO0lBQ2YsRUFBRTtJQUNGLG1EQUFtRDtJQUNyRDtJQUVBLElBQUlRLDRCQUE0QjtRQUM5QmxCLGFBQWFXLEtBQUssQ0FBQyxBQUFDLG1CQUFnRFMsT0FBOUJqQixZQUFXLHFCQUFxQyxPQUFsQmlCLG1CQUFrQixtQkFBaUJyQjtJQUN6RztJQUVBLE9BQU9tQjtBQUNUIn0=