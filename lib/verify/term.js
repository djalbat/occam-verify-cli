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
        return _default;
    },
    verifyStandaloneTerm: function() {
        return verifyStandaloneTerm;
    }
});
var _shim = /*#__PURE__*/ _interop_require_default(require("../shim"));
var _term = /*#__PURE__*/ _interop_require_default(require("../term"));
var _bracketed = /*#__PURE__*/ _interop_require_default(require("../constructor/bracketed"));
var _termAgainstConstructor = /*#__PURE__*/ _interop_require_default(require("../unifier/termAgainstConstructor"));
var _array = require("../utilities/array");
var _query = require("../utilities/query");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var termNodeQuery = (0, _query.nodeQuery)("/term/argument/term"), variableNodeQuery = (0, _query.nodeQuery)("/term/variable!");
function verifyTerm(termNode, terms, localContext, verifyAhead) {
    var termVerified;
    var termString = localContext.nodeAsString(termNode);
    localContext.trace("Verifying the '".concat(termString, "' term..."), termNode);
    var verifyTermFunctions = [
        verifyTermAsVariable,
        verifyTermAgainstConstructors,
        verifyTermAgainstBracketedConstructor
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
function verifyStandaloneTerm(termNode, localContext, verifyAhead) {
    var standaloneTermVerified;
    var termString = localContext.nodeAsString(termNode);
    localContext.trace("Verifying the '".concat(termString, "' standalone term..."), termNode);
    var terms = [], termVerified = verifyTerm(termNode, terms, localContext, verifyAhead);
    standaloneTermVerified = termVerified; ///
    if (standaloneTermVerified) {
        localContext.debug("...verified the '".concat(termString, "' standalone term."), termNode);
    }
    return standaloneTermVerified;
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
        if (variable !== null) {
            var verifiedAhead;
            var type = variable.getType(), term = _term.default.fromTermNodeAndType(termNode, type);
            terms.push(term);
            verifiedAhead = verifyAhead();
            if (!verifiedAhead) {
                terms.pop();
            }
            termVerifiedAsVariable = verifiedAhead; ///
        }
        if (termVerifiedAsVariable) {
            localContext.debug("...verified the '".concat(termString, "' term as a variable."), termNode);
        }
    }
    return termVerifiedAsVariable;
}
function verifyTermAgainstConstructors(termNode, terms, localContext, verifyAhead) {
    var termVerifiedAgainstConstructors = false;
    var variableNode = variableNodeQuery(termNode);
    if (variableNode === null) {
        var constructors = localContext.getConstructors();
        termVerifiedAgainstConstructors = constructors.some(function(constructor) {
            var termVerifiedAgainstConstructor = verifyTermAgainstConstructor(termNode, terms, constructor, localContext, verifyAhead);
            if (termVerifiedAgainstConstructor) {
                return true;
            }
        });
    }
    return termVerifiedAgainstConstructors;
}
function verifyTermAgainstBracketedConstructor(termNode, terms, localContext, verifyAhead) {
    var termVerifiedAgainstBracketedConstructor;
    var termString = localContext.nodeAsString(termNode), bracketedConstructorString = _bracketed.default.getString();
    localContext.trace("Verifying the '".concat(termString, "' term against the '").concat(bracketedConstructorString, "' bracketed constructor..."), termNode);
    var bracketedConstructorTermNode = _bracketed.default.getTermNode(), termNodeA = termNode, constructorTermNodeB = bracketedConstructorTermNode, unified = _termAgainstConstructor.default.unify(termNodeA, constructorTermNodeB, localContext, function() {
        var verifiedAhead;
        var bracketedTermNode = termNode; ///
        termNode = termNodeQuery(termNode); ///
        if (termNode === null) {
            verifiedAhead = false;
        } else {
            var type;
            verifyTerm(termNode, terms, localContext, function() {
                var verifiedAhead;
                var firstTerm = (0, _array.first)(terms), term = firstTerm; ///
                type = term.getType();
                verifiedAhead = true;
                return verifiedAhead;
            });
            terms.pop();
            termNode = bracketedTermNode; ///
            var term = _term.default.fromTermNodeAndType(termNode, type);
            terms.push(term);
            verifiedAhead = verifyAhead();
            if (!verifiedAhead) {
                terms.pop();
            }
        }
        return verifiedAhead;
    });
    termVerifiedAgainstBracketedConstructor = unified; ///
    if (termVerifiedAgainstBracketedConstructor) {
        localContext.debug("...verified the '".concat(termString, "' term against the '").concat(bracketedConstructorString, "' constructor."), termNode);
    }
    return termVerifiedAgainstBracketedConstructor;
}
function verifyTermAgainstConstructor(termNode, terms, constructor, localContext, verifyAhead) {
    var termVerifiedAgainstConstructor;
    var termString = localContext.nodeAsString(termNode), constructorString = constructor.getString();
    localContext.trace("Verifying the '".concat(termString, "' term against the '").concat(constructorString, "' constructor..."), termNode);
    var constructorTermNode = constructor.getTermNode(), termNodeA = termNode, constructorTermNodeB = constructorTermNode, unified = _termAgainstConstructor.default.unify(termNodeA, constructorTermNodeB, localContext, function() {
        var verifiedAhead;
        var type = constructor.getType(), term = _term.default.fromTermNodeAndType(termNode, type);
        terms.push(term);
        verifiedAhead = verifyAhead();
        if (!verifiedAhead) {
            terms.pop();
        }
        return verifiedAhead;
    });
    termVerifiedAgainstConstructor = unified; ///
    if (termVerifiedAgainstConstructor) {
        localContext.debug("...verified the '".concat(termString, "' term against the '").concat(constructorString, "' constructor."), termNode);
    }
    return termVerifiedAgainstConstructor;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGVybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcbmltcG9ydCBUZXJtIGZyb20gXCIuLi90ZXJtXCI7XG5pbXBvcnQgYnJhY2tldGVkQ29uc3RydWN0b3IgZnJvbSBcIi4uL2NvbnN0cnVjdG9yL2JyYWNrZXRlZFwiO1xuaW1wb3J0IHRlcm1BZ2FpbnN0Q29uc3RydWN0b3JVbmlmaWVyIGZyb20gXCIuLi91bmlmaWVyL3Rlcm1BZ2FpbnN0Q29uc3RydWN0b3JcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybS9hcmd1bWVudC90ZXJtXCIpLFxuICAgICAgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybS92YXJpYWJsZSFcIik7XG5cbmZ1bmN0aW9uIHZlcmlmeVRlcm0odGVybU5vZGUsIHRlcm1zLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCB0ZXJtVmVyaWZpZWQ7XG5cbiAgY29uc3QgdGVybVN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcodGVybU5vZGUpO1xuXG4gIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS4uLmAsIHRlcm1Ob2RlKTtcblxuICBjb25zdCB2ZXJpZnlUZXJtRnVuY3Rpb25zID0gW1xuICAgIHZlcmlmeVRlcm1Bc1ZhcmlhYmxlLFxuICAgIHZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3JzLFxuICAgIHZlcmlmeVRlcm1BZ2FpbnN0QnJhY2tldGVkQ29uc3RydWN0b3JcbiAgXTtcblxuICB0ZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtRnVuY3Rpb25zLnNvbWUoKHZlcmlmeVRlcm1GdW5jdGlvbikgPT4ge1xuICAgIGNvbnN0IHRlcm1WZXJpZmllZCA9IHZlcmlmeVRlcm1GdW5jdGlvbih0ZXJtTm9kZSwgdGVybXMsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgaWYgKHRlcm1WZXJpZmllZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBpZiAodGVybVZlcmlmaWVkKSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0uYCwgdGVybU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1WZXJpZmllZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeVN0YW5kYWxvbmVUZXJtKHRlcm1Ob2RlLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCBzdGFuZGFsb25lVGVybVZlcmlmaWVkO1xuXG4gIGNvbnN0IHRlcm1TdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKTtcblxuICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHN0YW5kYWxvbmUgdGVybS4uLmAsIHRlcm1Ob2RlKTtcblxuICBjb25zdCB0ZXJtcyA9IFtdLFxuICAgICAgICB0ZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtKHRlcm1Ob2RlLCB0ZXJtcywgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgc3RhbmRhbG9uZVRlcm1WZXJpZmllZCA9IHRlcm1WZXJpZmllZDsgIC8vL1xuXG4gIGlmIChzdGFuZGFsb25lVGVybVZlcmlmaWVkKSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHN0YW5kYWxvbmUgdGVybS5gLCB0ZXJtTm9kZSk7XG4gIH1cblxuICByZXR1cm4gc3RhbmRhbG9uZVRlcm1WZXJpZmllZDtcbn1cblxuT2JqZWN0LmFzc2lnbihzaGltLCB7XG4gIHZlcmlmeVRlcm1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB2ZXJpZnlUZXJtO1xuXG5mdW5jdGlvbiB2ZXJpZnlUZXJtQXNWYXJpYWJsZSh0ZXJtTm9kZSwgdGVybXMsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHRlcm1WZXJpZmllZEFzVmFyaWFibGUgPSBmYWxzZTtcblxuICBjb25zdCB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeSh0ZXJtTm9kZSk7XG5cbiAgaWYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBhcyBhIHZhcmlhYmxlLi4uYCwgdGVybU5vZGUpO1xuXG4gICAgY29uc3QgdmFyaWFibGUgPSBsb2NhbENvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICAgIGlmICh2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgbGV0IHZlcmlmaWVkQWhlYWQ7XG5cbiAgICAgIGNvbnN0IHR5cGUgPSB2YXJpYWJsZS5nZXRUeXBlKCksXG4gICAgICAgICAgICB0ZXJtID0gVGVybS5mcm9tVGVybU5vZGVBbmRUeXBlKHRlcm1Ob2RlLCB0eXBlKTtcblxuICAgICAgdGVybXMucHVzaCh0ZXJtKTtcblxuICAgICAgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICAgIGlmICghdmVyaWZpZWRBaGVhZCkge1xuICAgICAgICB0ZXJtcy5wb3AoKTtcbiAgICAgIH1cblxuICAgICAgdGVybVZlcmlmaWVkQXNWYXJpYWJsZSA9IHZlcmlmaWVkQWhlYWQ7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAodGVybVZlcmlmaWVkQXNWYXJpYWJsZSkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYXMgYSB2YXJpYWJsZS5gLCB0ZXJtTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRlcm1WZXJpZmllZEFzVmFyaWFibGU7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3JzKHRlcm1Ob2RlLCB0ZXJtcywgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9ycyA9IGZhbHNlO1xuXG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKTtcblxuICBpZiAodmFyaWFibGVOb2RlID09PSBudWxsKSB7XG4gICAgY29uc3QgY29uc3RydWN0b3JzID0gbG9jYWxDb250ZXh0LmdldENvbnN0cnVjdG9ycygpO1xuXG4gICAgdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9ycy5zb21lKChjb25zdHJ1Y3RvcikgPT4ge1xuICAgICAgY29uc3QgdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9yID0gdmVyaWZ5VGVybUFnYWluc3RDb25zdHJ1Y3Rvcih0ZXJtTm9kZSwgdGVybXMsIGNvbnN0cnVjdG9yLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgaWYgKHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3Rvcikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3JzO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlUZXJtQWdhaW5zdEJyYWNrZXRlZENvbnN0cnVjdG9yKHRlcm1Ob2RlLCB0ZXJtcywgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgdGVybVZlcmlmaWVkQWdhaW5zdEJyYWNrZXRlZENvbnN0cnVjdG9yO1xuXG4gIGNvbnN0IHRlcm1TdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKSxcbiAgICAgICAgYnJhY2tldGVkQ29uc3RydWN0b3JTdHJpbmcgPSBicmFja2V0ZWRDb25zdHJ1Y3Rvci5nZXRTdHJpbmcoKTtcblxuICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYWdhaW5zdCB0aGUgJyR7YnJhY2tldGVkQ29uc3RydWN0b3JTdHJpbmd9JyBicmFja2V0ZWQgY29uc3RydWN0b3IuLi5gLCB0ZXJtTm9kZSk7XG5cbiAgY29uc3QgYnJhY2tldGVkQ29uc3RydWN0b3JUZXJtTm9kZSA9IGJyYWNrZXRlZENvbnN0cnVjdG9yLmdldFRlcm1Ob2RlKCksXG4gICAgICAgIHRlcm1Ob2RlQSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgIGNvbnN0cnVjdG9yVGVybU5vZGVCID0gYnJhY2tldGVkQ29uc3RydWN0b3JUZXJtTm9kZSwgIC8vL1xuICAgICAgICB1bmlmaWVkID0gdGVybUFnYWluc3RDb25zdHJ1Y3RvclVuaWZpZXIudW5pZnkodGVybU5vZGVBLCBjb25zdHJ1Y3RvclRlcm1Ob2RlQiwgbG9jYWxDb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgbGV0IHZlcmlmaWVkQWhlYWQ7XG5cbiAgICAgICAgICBjb25zdCBicmFja2V0ZWRUZXJtTm9kZSA9IHRlcm1Ob2RlOyAvLy9cblxuICAgICAgICAgIHRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeSh0ZXJtTm9kZSk7IC8vL1xuXG4gICAgICAgICAgaWYgKHRlcm1Ob2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICB2ZXJpZmllZEFoZWFkID0gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCB0eXBlO1xuXG4gICAgICAgICAgICB2ZXJpZnlUZXJtKHRlcm1Ob2RlLCB0ZXJtcywgbG9jYWxDb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgICAgIGxldCB2ZXJpZmllZEFoZWFkO1xuXG4gICAgICAgICAgICAgIGNvbnN0IGZpcnN0VGVybSA9IGZpcnN0KHRlcm1zKSxcbiAgICAgICAgICAgICAgICAgICAgdGVybSA9IGZpcnN0VGVybTsgLy8vXG5cbiAgICAgICAgICAgICAgdHlwZSA9IHRlcm0uZ2V0VHlwZSgpO1xuXG4gICAgICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRlcm1zLnBvcCgpO1xuXG4gICAgICAgICAgICB0ZXJtTm9kZSA9IGJyYWNrZXRlZFRlcm1Ob2RlOyAvLy9cblxuICAgICAgICAgICAgY29uc3QgdGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlQW5kVHlwZSh0ZXJtTm9kZSwgdHlwZSk7XG5cbiAgICAgICAgICAgIHRlcm1zLnB1c2godGVybSk7XG5cbiAgICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgICAgICAgICBpZiAoIXZlcmlmaWVkQWhlYWQpIHtcbiAgICAgICAgICAgICAgdGVybXMucG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgIH0pO1xuXG4gIHRlcm1WZXJpZmllZEFnYWluc3RCcmFja2V0ZWRDb25zdHJ1Y3RvciA9IHVuaWZpZWQ7ICAvLy9cblxuICBpZiAodGVybVZlcmlmaWVkQWdhaW5zdEJyYWNrZXRlZENvbnN0cnVjdG9yKSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYWdhaW5zdCB0aGUgJyR7YnJhY2tldGVkQ29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci5gLCB0ZXJtTm9kZSk7XG4gIH1cblxuICByZXR1cm4gdGVybVZlcmlmaWVkQWdhaW5zdEJyYWNrZXRlZENvbnN0cnVjdG9yO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlUZXJtQWdhaW5zdENvbnN0cnVjdG9yKHRlcm1Ob2RlLCB0ZXJtcywgY29uc3RydWN0b3IsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvcjtcblxuICBjb25zdCB0ZXJtU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyh0ZXJtTm9kZSksXG4gICAgICAgIGNvbnN0cnVjdG9yU3RyaW5nID0gY29uc3RydWN0b3IuZ2V0U3RyaW5nKCk7XG5cbiAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFnYWluc3QgdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IuLi5gLCB0ZXJtTm9kZSk7XG5cbiAgY29uc3QgY29uc3RydWN0b3JUZXJtTm9kZSA9IGNvbnN0cnVjdG9yLmdldFRlcm1Ob2RlKCksXG4gICAgICAgIHRlcm1Ob2RlQSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgIGNvbnN0cnVjdG9yVGVybU5vZGVCID0gY29uc3RydWN0b3JUZXJtTm9kZSwgIC8vL1xuICAgICAgICB1bmlmaWVkID0gdGVybUFnYWluc3RDb25zdHJ1Y3RvclVuaWZpZXIudW5pZnkodGVybU5vZGVBLCBjb25zdHJ1Y3RvclRlcm1Ob2RlQiwgbG9jYWxDb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgbGV0IHZlcmlmaWVkQWhlYWQ7XG5cbiAgICAgICAgICBjb25zdCB0eXBlID0gY29uc3RydWN0b3IuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZUFuZFR5cGUodGVybU5vZGUsIHR5cGUpO1xuXG4gICAgICAgICAgdGVybXMucHVzaCh0ZXJtKTtcblxuICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgICAgICAgaWYgKCF2ZXJpZmllZEFoZWFkKSB7XG4gICAgICAgICAgICB0ZXJtcy5wb3AoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgfSk7XG5cbiAgdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9yID0gdW5pZmllZDsgIC8vL1xuXG4gIGlmICh0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3IpIHtcbiAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBhZ2FpbnN0IHRoZSAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yLmAsIHRlcm1Ob2RlKTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3I7XG59XG5cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlTdGFuZGFsb25lVGVybSIsInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ2YXJpYWJsZU5vZGVRdWVyeSIsInZlcmlmeVRlcm0iLCJ0ZXJtTm9kZSIsInRlcm1zIiwibG9jYWxDb250ZXh0IiwidmVyaWZ5QWhlYWQiLCJ0ZXJtVmVyaWZpZWQiLCJ0ZXJtU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJ2ZXJpZnlUZXJtRnVuY3Rpb25zIiwidmVyaWZ5VGVybUFzVmFyaWFibGUiLCJ2ZXJpZnlUZXJtQWdhaW5zdENvbnN0cnVjdG9ycyIsInZlcmlmeVRlcm1BZ2FpbnN0QnJhY2tldGVkQ29uc3RydWN0b3IiLCJzb21lIiwidmVyaWZ5VGVybUZ1bmN0aW9uIiwiZGVidWciLCJzdGFuZGFsb25lVGVybVZlcmlmaWVkIiwiT2JqZWN0IiwiYXNzaWduIiwic2hpbSIsInRlcm1WZXJpZmllZEFzVmFyaWFibGUiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlIiwidmVyaWZpZWRBaGVhZCIsInR5cGUiLCJnZXRUeXBlIiwidGVybSIsIlRlcm0iLCJmcm9tVGVybU5vZGVBbmRUeXBlIiwicHVzaCIsInBvcCIsInRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvcnMiLCJjb25zdHJ1Y3RvcnMiLCJnZXRDb25zdHJ1Y3RvcnMiLCJjb25zdHJ1Y3RvciIsInRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvciIsInZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3IiLCJ0ZXJtVmVyaWZpZWRBZ2FpbnN0QnJhY2tldGVkQ29uc3RydWN0b3IiLCJicmFja2V0ZWRDb25zdHJ1Y3RvclN0cmluZyIsImJyYWNrZXRlZENvbnN0cnVjdG9yIiwiZ2V0U3RyaW5nIiwiYnJhY2tldGVkQ29uc3RydWN0b3JUZXJtTm9kZSIsImdldFRlcm1Ob2RlIiwidGVybU5vZGVBIiwiY29uc3RydWN0b3JUZXJtTm9kZUIiLCJ1bmlmaWVkIiwidGVybUFnYWluc3RDb25zdHJ1Y3RvclVuaWZpZXIiLCJ1bmlmeSIsImJyYWNrZXRlZFRlcm1Ob2RlIiwiZmlyc3RUZXJtIiwiZmlyc3QiLCJjb25zdHJ1Y3RvclN0cmluZyIsImNvbnN0cnVjdG9yVGVybU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQWdFQSxPQUEwQjtlQUExQjs7SUF2QmdCQSxvQkFBb0I7ZUFBcEJBOzs7MkRBdkNDOzJEQUNBO2dFQUNnQjs2RUFDUztxQkFFcEI7cUJBQ0k7Ozs7OztBQUUxQixJQUFNQyxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsd0JBQzFCQyxvQkFBb0JELElBQUFBLGdCQUFTLEVBQUM7QUFFcEMsU0FBU0UsV0FBV0MsUUFBUSxFQUFFQyxLQUFLLEVBQUVDLFlBQVksRUFBRUMsV0FBVztJQUM1RCxJQUFJQztJQUVKLElBQU1DLGFBQWFILGFBQWFJLFlBQVksQ0FBQ047SUFFN0NFLGFBQWFLLEtBQUssQ0FBQyxBQUFDLGtCQUE0QixPQUFYRixZQUFXLGNBQVlMO0lBRTVELElBQU1RLHNCQUFz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