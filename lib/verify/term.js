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
        unifyTermAgainstConstructors,
        unifyTermAgainstBracketedConstructor
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
function unifyTermAgainstConstructors(termNode, terms, localContext, verifyAhead) {
    var termUnifiedAgainstConstructors = false;
    var variableNode = variableNodeQuery(termNode);
    if (variableNode === null) {
        var constructors = localContext.getConstructors();
        termUnifiedAgainstConstructors = constructors.some(function(constructor) {
            var termUnifiedAgainstConstructor = unifyTermAgainstConstructor(termNode, terms, constructor, localContext, verifyAhead);
            if (termUnifiedAgainstConstructor) {
                return true;
            }
        });
    }
    return termUnifiedAgainstConstructors;
}
function unifyTermAgainstBracketedConstructor(termNode, terms, localContext, verifyAhead) {
    var termUnifiedAgainstBracketedConstructor;
    var termString = localContext.nodeAsString(termNode), bracketedConstructorString = _bracketed.default.getString();
    localContext.trace("Unifying the '".concat(termString, "' term against the '").concat(bracketedConstructorString, "' bracketed constructor..."), termNode);
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
    termUnifiedAgainstBracketedConstructor = unified; ///
    if (termUnifiedAgainstBracketedConstructor) {
        localContext.debug("...unified the '".concat(termString, "' term against the '").concat(bracketedConstructorString, "' constructor."), termNode);
    }
    return termUnifiedAgainstBracketedConstructor;
}
function unifyTermAgainstConstructor(termNode, terms, constructor, localContext, verifyAhead) {
    var termUnifiedAgainstConstructor;
    var termString = localContext.nodeAsString(termNode), constructorString = constructor.getString();
    localContext.trace("Unifying the '".concat(termString, "' term against the '").concat(constructorString, "' constructor..."), termNode);
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
    termUnifiedAgainstConstructor = unified; ///
    if (termUnifiedAgainstConstructor) {
        localContext.debug("...unified the '".concat(termString, "' term against the '").concat(constructorString, "' constructor."), termNode);
    }
    return termUnifiedAgainstConstructor;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGVybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcbmltcG9ydCBUZXJtIGZyb20gXCIuLi90ZXJtXCI7XG5pbXBvcnQgYnJhY2tldGVkQ29uc3RydWN0b3IgZnJvbSBcIi4uL2NvbnN0cnVjdG9yL2JyYWNrZXRlZFwiO1xuaW1wb3J0IHRlcm1BZ2FpbnN0Q29uc3RydWN0b3JVbmlmaWVyIGZyb20gXCIuLi91bmlmaWVyL3Rlcm1BZ2FpbnN0Q29uc3RydWN0b3JcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybS9hcmd1bWVudC90ZXJtXCIpLFxuICAgICAgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybS92YXJpYWJsZSFcIik7XG5cbmZ1bmN0aW9uIHZlcmlmeVRlcm0odGVybU5vZGUsIHRlcm1zLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCB0ZXJtVmVyaWZpZWQ7XG5cbiAgY29uc3QgdGVybVN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcodGVybU5vZGUpO1xuXG4gIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS4uLmAsIHRlcm1Ob2RlKTtcblxuICBjb25zdCB2ZXJpZnlUZXJtRnVuY3Rpb25zID0gW1xuICAgIHZlcmlmeVRlcm1Bc1ZhcmlhYmxlLFxuICAgIHVuaWZ5VGVybUFnYWluc3RDb25zdHJ1Y3RvcnMsXG4gICAgdW5pZnlUZXJtQWdhaW5zdEJyYWNrZXRlZENvbnN0cnVjdG9yXG4gIF07XG5cbiAgdGVybVZlcmlmaWVkID0gdmVyaWZ5VGVybUZ1bmN0aW9ucy5zb21lKCh2ZXJpZnlUZXJtRnVuY3Rpb24pID0+IHtcbiAgICBjb25zdCB0ZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtRnVuY3Rpb24odGVybU5vZGUsIHRlcm1zLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgIGlmICh0ZXJtVmVyaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKHRlcm1WZXJpZmllZCkge1xuICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLmAsIHRlcm1Ob2RlKTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtVmVyaWZpZWQ7XG59XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICB2ZXJpZnlUZXJtXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgdmVyaWZ5VGVybTtcblxuZnVuY3Rpb24gdmVyaWZ5VGVybUFzVmFyaWFibGUodGVybU5vZGUsIHRlcm1zLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCB0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlID0gZmFsc2U7XG5cbiAgY29uc3QgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkodGVybU5vZGUpO1xuXG4gIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyh0ZXJtTm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYXMgYSB2YXJpYWJsZS4uLmAsIHRlcm1Ob2RlKTtcblxuICAgIGNvbnN0IHZhcmlhYmxlID0gbG9jYWxDb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG5cbiAgICBpZiAodmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIGxldCB2ZXJpZmllZEFoZWFkO1xuXG4gICAgICBjb25zdCB0eXBlID0gdmFyaWFibGUuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgdGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlQW5kVHlwZSh0ZXJtTm9kZSwgdHlwZSk7XG5cbiAgICAgIHRlcm1zLnB1c2godGVybSk7XG5cbiAgICAgIHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgICBpZiAoIXZlcmlmaWVkQWhlYWQpIHtcbiAgICAgICAgdGVybXMucG9wKCk7XG4gICAgICB9XG5cbiAgICAgIHRlcm1WZXJpZmllZEFzVmFyaWFibGUgPSB2ZXJpZmllZEFoZWFkOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKHRlcm1WZXJpZmllZEFzVmFyaWFibGUpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFzIGEgdmFyaWFibGUuYCwgdGVybU5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlO1xufVxuXG5mdW5jdGlvbiB1bmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3JzKHRlcm1Ob2RlLCB0ZXJtcywgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgdGVybVVuaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3JzID0gZmFsc2U7XG5cbiAgY29uc3QgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkodGVybU5vZGUpO1xuXG4gIGlmICh2YXJpYWJsZU5vZGUgPT09IG51bGwpIHtcbiAgICBjb25zdCBjb25zdHJ1Y3RvcnMgPSBsb2NhbENvbnRleHQuZ2V0Q29uc3RydWN0b3JzKCk7XG5cbiAgICB0ZXJtVW5pZmllZEFnYWluc3RDb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnMuc29tZSgoY29uc3RydWN0b3IpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1VbmlmaWVkQWdhaW5zdENvbnN0cnVjdG9yID0gdW5pZnlUZXJtQWdhaW5zdENvbnN0cnVjdG9yKHRlcm1Ob2RlLCB0ZXJtcywgY29uc3RydWN0b3IsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICBpZiAodGVybVVuaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdGVybVVuaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3JzO1xufVxuXG5mdW5jdGlvbiB1bmlmeVRlcm1BZ2FpbnN0QnJhY2tldGVkQ29uc3RydWN0b3IodGVybU5vZGUsIHRlcm1zLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCB0ZXJtVW5pZmllZEFnYWluc3RCcmFja2V0ZWRDb25zdHJ1Y3RvcjtcblxuICBjb25zdCB0ZXJtU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyh0ZXJtTm9kZSksXG4gICAgICAgIGJyYWNrZXRlZENvbnN0cnVjdG9yU3RyaW5nID0gYnJhY2tldGVkQ29uc3RydWN0b3IuZ2V0U3RyaW5nKCk7XG5cbiAgbG9jYWxDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYWdhaW5zdCB0aGUgJyR7YnJhY2tldGVkQ29uc3RydWN0b3JTdHJpbmd9JyBicmFja2V0ZWQgY29uc3RydWN0b3IuLi5gLCB0ZXJtTm9kZSk7XG5cbiAgY29uc3QgYnJhY2tldGVkQ29uc3RydWN0b3JUZXJtTm9kZSA9IGJyYWNrZXRlZENvbnN0cnVjdG9yLmdldFRlcm1Ob2RlKCksXG4gICAgICAgIHRlcm1Ob2RlQSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgIGNvbnN0cnVjdG9yVGVybU5vZGVCID0gYnJhY2tldGVkQ29uc3RydWN0b3JUZXJtTm9kZSwgIC8vL1xuICAgICAgICB1bmlmaWVkID0gdGVybUFnYWluc3RDb25zdHJ1Y3RvclVuaWZpZXIudW5pZnkodGVybU5vZGVBLCBjb25zdHJ1Y3RvclRlcm1Ob2RlQiwgbG9jYWxDb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgbGV0IHZlcmlmaWVkQWhlYWQ7XG5cbiAgICAgICAgICBjb25zdCBicmFja2V0ZWRUZXJtTm9kZSA9IHRlcm1Ob2RlOyAvLy9cblxuICAgICAgICAgIHRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeSh0ZXJtTm9kZSk7IC8vL1xuXG4gICAgICAgICAgaWYgKHRlcm1Ob2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICB2ZXJpZmllZEFoZWFkID0gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCB0eXBlO1xuXG4gICAgICAgICAgICB2ZXJpZnlUZXJtKHRlcm1Ob2RlLCB0ZXJtcywgbG9jYWxDb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgICAgIGxldCB2ZXJpZmllZEFoZWFkO1xuXG4gICAgICAgICAgICAgIGNvbnN0IGZpcnN0VGVybSA9IGZpcnN0KHRlcm1zKSxcbiAgICAgICAgICAgICAgICAgICAgdGVybSA9IGZpcnN0VGVybTsgLy8vXG5cbiAgICAgICAgICAgICAgdHlwZSA9IHRlcm0uZ2V0VHlwZSgpO1xuXG4gICAgICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRlcm1zLnBvcCgpO1xuXG4gICAgICAgICAgICB0ZXJtTm9kZSA9IGJyYWNrZXRlZFRlcm1Ob2RlOyAvLy9cblxuICAgICAgICAgICAgY29uc3QgdGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlQW5kVHlwZSh0ZXJtTm9kZSwgdHlwZSk7XG5cbiAgICAgICAgICAgIHRlcm1zLnB1c2godGVybSk7XG5cbiAgICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgICAgICAgICBpZiAoIXZlcmlmaWVkQWhlYWQpIHtcbiAgICAgICAgICAgICAgdGVybXMucG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgIH0pO1xuXG4gIHRlcm1VbmlmaWVkQWdhaW5zdEJyYWNrZXRlZENvbnN0cnVjdG9yID0gdW5pZmllZDsgIC8vL1xuXG4gIGlmICh0ZXJtVW5pZmllZEFnYWluc3RCcmFja2V0ZWRDb25zdHJ1Y3Rvcikge1xuICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYWdhaW5zdCB0aGUgJyR7YnJhY2tldGVkQ29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci5gLCB0ZXJtTm9kZSk7XG4gIH1cblxuICByZXR1cm4gdGVybVVuaWZpZWRBZ2FpbnN0QnJhY2tldGVkQ29uc3RydWN0b3I7XG59XG5cbmZ1bmN0aW9uIHVuaWZ5VGVybUFnYWluc3RDb25zdHJ1Y3Rvcih0ZXJtTm9kZSwgdGVybXMsIGNvbnN0cnVjdG9yLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCB0ZXJtVW5pZmllZEFnYWluc3RDb25zdHJ1Y3RvcjtcblxuICBjb25zdCB0ZXJtU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyh0ZXJtTm9kZSksXG4gICAgICAgIGNvbnN0cnVjdG9yU3RyaW5nID0gY29uc3RydWN0b3IuZ2V0U3RyaW5nKCk7XG5cbiAgbG9jYWxDb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYWdhaW5zdCB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci4uLmAsIHRlcm1Ob2RlKTtcblxuICBjb25zdCBjb25zdHJ1Y3RvclRlcm1Ob2RlID0gY29uc3RydWN0b3IuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgdGVybU5vZGVBID0gdGVybU5vZGUsICAvLy9cbiAgICAgICAgY29uc3RydWN0b3JUZXJtTm9kZUIgPSBjb25zdHJ1Y3RvclRlcm1Ob2RlLCAgLy8vXG4gICAgICAgIHVuaWZpZWQgPSB0ZXJtQWdhaW5zdENvbnN0cnVjdG9yVW5pZmllci51bmlmeSh0ZXJtTm9kZUEsIGNvbnN0cnVjdG9yVGVybU5vZGVCLCBsb2NhbENvbnRleHQsICgpID0+IHtcbiAgICAgICAgICBsZXQgdmVyaWZpZWRBaGVhZDtcblxuICAgICAgICAgIGNvbnN0IHR5cGUgPSBjb25zdHJ1Y3Rvci5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgdGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlQW5kVHlwZSh0ZXJtTm9kZSwgdHlwZSk7XG5cbiAgICAgICAgICB0ZXJtcy5wdXNoKHRlcm0pO1xuXG4gICAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICAgICAgICBpZiAoIXZlcmlmaWVkQWhlYWQpIHtcbiAgICAgICAgICAgIHRlcm1zLnBvcCgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICB9KTtcblxuICB0ZXJtVW5pZmllZEFnYWluc3RDb25zdHJ1Y3RvciA9IHVuaWZpZWQ7ICAvLy9cblxuICBpZiAodGVybVVuaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3IpIHtcbiAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFnYWluc3QgdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IuYCwgdGVybU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1VbmlmaWVkQWdhaW5zdENvbnN0cnVjdG9yO1xufVxuXG4iXSwibmFtZXMiOlsidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInZhcmlhYmxlTm9kZVF1ZXJ5IiwidmVyaWZ5VGVybSIsInRlcm1Ob2RlIiwidGVybXMiLCJsb2NhbENvbnRleHQiLCJ2ZXJpZnlBaGVhZCIsInRlcm1WZXJpZmllZCIsInRlcm1TdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsInZlcmlmeVRlcm1GdW5jdGlvbnMiLCJ2ZXJpZnlUZXJtQXNWYXJpYWJsZSIsInVuaWZ5VGVybUFnYWluc3RDb25zdHJ1Y3RvcnMiLCJ1bmlmeVRlcm1BZ2FpbnN0QnJhY2tldGVkQ29uc3RydWN0b3IiLCJzb21lIiwidmVyaWZ5VGVybUZ1bmN0aW9uIiwiZGVidWciLCJPYmplY3QiLCJhc3NpZ24iLCJzaGltIiwidGVybVZlcmlmaWVkQXNWYXJpYWJsZSIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUiLCJ2ZXJpZmllZEFoZWFkIiwidHlwZSIsImdldFR5cGUiLCJ0ZXJtIiwiVGVybSIsImZyb21UZXJtTm9kZUFuZFR5cGUiLCJwdXNoIiwicG9wIiwidGVybVVuaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3JzIiwiY29uc3RydWN0b3JzIiwiZ2V0Q29uc3RydWN0b3JzIiwiY29uc3RydWN0b3IiLCJ0ZXJtVW5pZmllZEFnYWluc3RDb25zdHJ1Y3RvciIsInVuaWZ5VGVybUFnYWluc3RDb25zdHJ1Y3RvciIsInRlcm1VbmlmaWVkQWdhaW5zdEJyYWNrZXRlZENvbnN0cnVjdG9yIiwiYnJhY2tldGVkQ29uc3RydWN0b3JTdHJpbmciLCJicmFja2V0ZWRDb25zdHJ1Y3RvciIsImdldFN0cmluZyIsImJyYWNrZXRlZENvbnN0cnVjdG9yVGVybU5vZGUiLCJnZXRUZXJtTm9kZSIsInRlcm1Ob2RlQSIsImNvbnN0cnVjdG9yVGVybU5vZGVCIiwidW5pZmllZCIsInRlcm1BZ2FpbnN0Q29uc3RydWN0b3JVbmlmaWVyIiwidW5pZnkiLCJicmFja2V0ZWRUZXJtTm9kZSIsImZpcnN0VGVybSIsImZpcnN0IiwiY29uc3RydWN0b3JTdHJpbmciLCJjb25zdHJ1Y3RvclRlcm1Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkE2Q0E7OztlQUFBOzs7MkRBM0NpQjsyREFDQTtnRUFDZ0I7NkVBQ1M7cUJBRXBCO3FCQUNJOzs7Ozs7QUFFMUIsSUFBTUEsZ0JBQWdCQyxJQUFBQSxn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