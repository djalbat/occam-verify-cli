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
            terms.pop();
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
            terms.pop();
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
        terms.pop();
        return verifiedAhead;
    });
    termUnifiedAgainstConstructor = unified; ///
    if (termUnifiedAgainstConstructor) {
        localContext.debug("...unified the '".concat(termString, "' term against the '").concat(constructorString, "' constructor."), termNode);
    }
    return termUnifiedAgainstConstructor;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGVybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcbmltcG9ydCBUZXJtIGZyb20gXCIuLi90ZXJtXCI7XG5pbXBvcnQgYnJhY2tldGVkQ29uc3RydWN0b3IgZnJvbSBcIi4uL2NvbnN0cnVjdG9yL2JyYWNrZXRlZFwiO1xuaW1wb3J0IHRlcm1BZ2FpbnN0Q29uc3RydWN0b3JVbmlmaWVyIGZyb20gXCIuLi91bmlmaWVyL3Rlcm1BZ2FpbnN0Q29uc3RydWN0b3JcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybS9hcmd1bWVudC90ZXJtXCIpLFxuICAgICAgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybS92YXJpYWJsZSFcIik7XG5cbmZ1bmN0aW9uIHZlcmlmeVRlcm0odGVybU5vZGUsIHRlcm1zLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCB0ZXJtVmVyaWZpZWQ7XG5cbiAgY29uc3QgdGVybVN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcodGVybU5vZGUpO1xuXG4gIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS4uLmAsIHRlcm1Ob2RlKTtcblxuICBjb25zdCB2ZXJpZnlUZXJtRnVuY3Rpb25zID0gW1xuICAgIHZlcmlmeVRlcm1Bc1ZhcmlhYmxlLFxuICAgIHVuaWZ5VGVybUFnYWluc3RDb25zdHJ1Y3RvcnMsXG4gICAgdW5pZnlUZXJtQWdhaW5zdEJyYWNrZXRlZENvbnN0cnVjdG9yXG4gIF07XG5cbiAgdGVybVZlcmlmaWVkID0gdmVyaWZ5VGVybUZ1bmN0aW9ucy5zb21lKCh2ZXJpZnlUZXJtRnVuY3Rpb24pID0+IHtcbiAgICBjb25zdCB0ZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtRnVuY3Rpb24odGVybU5vZGUsIHRlcm1zLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgIGlmICh0ZXJtVmVyaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKHRlcm1WZXJpZmllZCkge1xuICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLmAsIHRlcm1Ob2RlKTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtVmVyaWZpZWQ7XG59XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICB2ZXJpZnlUZXJtXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgdmVyaWZ5VGVybTtcblxuZnVuY3Rpb24gdmVyaWZ5VGVybUFzVmFyaWFibGUodGVybU5vZGUsIHRlcm1zLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCB0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlID0gZmFsc2U7XG5cbiAgY29uc3QgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkodGVybU5vZGUpO1xuXG4gIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyh0ZXJtTm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYXMgYSB2YXJpYWJsZS4uLmAsIHRlcm1Ob2RlKTtcblxuICAgIGNvbnN0IHZhcmlhYmxlID0gbG9jYWxDb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG5cbiAgICBpZiAodmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIGxldCB2ZXJpZmllZEFoZWFkO1xuXG4gICAgICBjb25zdCB0eXBlID0gdmFyaWFibGUuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgdGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlQW5kVHlwZSh0ZXJtTm9kZSwgdHlwZSk7XG5cbiAgICAgIHRlcm1zLnB1c2godGVybSk7XG5cbiAgICAgIHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgICB0ZXJtcy5wb3AoKTtcblxuICAgICAgdGVybVZlcmlmaWVkQXNWYXJpYWJsZSA9IHZlcmlmaWVkQWhlYWQ7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAodGVybVZlcmlmaWVkQXNWYXJpYWJsZSkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYXMgYSB2YXJpYWJsZS5gLCB0ZXJtTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRlcm1WZXJpZmllZEFzVmFyaWFibGU7XG59XG5cbmZ1bmN0aW9uIHVuaWZ5VGVybUFnYWluc3RDb25zdHJ1Y3RvcnModGVybU5vZGUsIHRlcm1zLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCB0ZXJtVW5pZmllZEFnYWluc3RDb25zdHJ1Y3RvcnMgPSBmYWxzZTtcblxuICBjb25zdCB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeSh0ZXJtTm9kZSk7XG5cbiAgaWYgKHZhcmlhYmxlTm9kZSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IGNvbnN0cnVjdG9ycyA9IGxvY2FsQ29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoKTtcblxuICAgIHRlcm1VbmlmaWVkQWdhaW5zdENvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9ycy5zb21lKChjb25zdHJ1Y3RvcikgPT4ge1xuICAgICAgY29uc3QgdGVybVVuaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3IgPSB1bmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3IodGVybU5vZGUsIHRlcm1zLCBjb25zdHJ1Y3RvciwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgIGlmICh0ZXJtVW5pZmllZEFnYWluc3RDb25zdHJ1Y3Rvcikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtVW5pZmllZEFnYWluc3RDb25zdHJ1Y3RvcnM7XG59XG5cbmZ1bmN0aW9uIHVuaWZ5VGVybUFnYWluc3RCcmFja2V0ZWRDb25zdHJ1Y3Rvcih0ZXJtTm9kZSwgdGVybXMsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHRlcm1VbmlmaWVkQWdhaW5zdEJyYWNrZXRlZENvbnN0cnVjdG9yO1xuXG4gIGNvbnN0IHRlcm1TdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKSxcbiAgICAgICAgYnJhY2tldGVkQ29uc3RydWN0b3JTdHJpbmcgPSBicmFja2V0ZWRDb25zdHJ1Y3Rvci5nZXRTdHJpbmcoKTtcblxuICBsb2NhbENvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBhZ2FpbnN0IHRoZSAnJHticmFja2V0ZWRDb25zdHJ1Y3RvclN0cmluZ30nIGJyYWNrZXRlZCBjb25zdHJ1Y3Rvci4uLmAsIHRlcm1Ob2RlKTtcblxuICBjb25zdCBicmFja2V0ZWRDb25zdHJ1Y3RvclRlcm1Ob2RlID0gYnJhY2tldGVkQ29uc3RydWN0b3IuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgdGVybU5vZGVBID0gdGVybU5vZGUsICAvLy9cbiAgICAgICAgY29uc3RydWN0b3JUZXJtTm9kZUIgPSBicmFja2V0ZWRDb25zdHJ1Y3RvclRlcm1Ob2RlLCAgLy8vXG4gICAgICAgIHVuaWZpZWQgPSB0ZXJtQWdhaW5zdENvbnN0cnVjdG9yVW5pZmllci51bmlmeSh0ZXJtTm9kZUEsIGNvbnN0cnVjdG9yVGVybU5vZGVCLCBsb2NhbENvbnRleHQsICgpID0+IHtcbiAgICAgICAgICBsZXQgdmVyaWZpZWRBaGVhZDtcblxuICAgICAgICAgIGNvbnN0IGJyYWNrZXRlZFRlcm1Ob2RlID0gdGVybU5vZGU7IC8vL1xuXG4gICAgICAgICAgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KHRlcm1Ob2RlKTsgLy8vXG5cbiAgICAgICAgICBpZiAodGVybU5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSBmYWxzZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHR5cGU7XG5cbiAgICAgICAgICAgIHZlcmlmeVRlcm0odGVybU5vZGUsIHRlcm1zLCBsb2NhbENvbnRleHQsICgpID0+IHtcbiAgICAgICAgICAgICAgbGV0IHZlcmlmaWVkQWhlYWQ7XG5cbiAgICAgICAgICAgICAgY29uc3QgZmlyc3RUZXJtID0gZmlyc3QodGVybXMpLFxuICAgICAgICAgICAgICAgICAgICB0ZXJtID0gZmlyc3RUZXJtOyAvLy9cblxuICAgICAgICAgICAgICB0eXBlID0gdGVybS5nZXRUeXBlKCk7XG5cbiAgICAgICAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGVybXMucG9wKCk7XG5cbiAgICAgICAgICAgIHRlcm1Ob2RlID0gYnJhY2tldGVkVGVybU5vZGU7IC8vL1xuXG4gICAgICAgICAgICBjb25zdCB0ZXJtID0gVGVybS5mcm9tVGVybU5vZGVBbmRUeXBlKHRlcm1Ob2RlLCB0eXBlKTtcblxuICAgICAgICAgICAgdGVybXMucHVzaCh0ZXJtKTtcblxuICAgICAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICAgICAgICAgIHRlcm1zLnBvcCgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICB9KTtcblxuICB0ZXJtVW5pZmllZEFnYWluc3RCcmFja2V0ZWRDb25zdHJ1Y3RvciA9IHVuaWZpZWQ7ICAvLy9cblxuICBpZiAodGVybVVuaWZpZWRBZ2FpbnN0QnJhY2tldGVkQ29uc3RydWN0b3IpIHtcbiAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFnYWluc3QgdGhlICcke2JyYWNrZXRlZENvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IuYCwgdGVybU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1VbmlmaWVkQWdhaW5zdEJyYWNrZXRlZENvbnN0cnVjdG9yO1xufVxuXG5mdW5jdGlvbiB1bmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3IodGVybU5vZGUsIHRlcm1zLCBjb25zdHJ1Y3RvciwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgdGVybVVuaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3I7XG5cbiAgY29uc3QgdGVybVN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcodGVybU5vZGUpLFxuICAgICAgICBjb25zdHJ1Y3RvclN0cmluZyA9IGNvbnN0cnVjdG9yLmdldFN0cmluZygpO1xuXG4gIGxvY2FsQ29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFnYWluc3QgdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IuLi5gLCB0ZXJtTm9kZSk7XG5cbiAgY29uc3QgY29uc3RydWN0b3JUZXJtTm9kZSA9IGNvbnN0cnVjdG9yLmdldFRlcm1Ob2RlKCksXG4gICAgICAgIHRlcm1Ob2RlQSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgIGNvbnN0cnVjdG9yVGVybU5vZGVCID0gY29uc3RydWN0b3JUZXJtTm9kZSwgIC8vL1xuICAgICAgICB1bmlmaWVkID0gdGVybUFnYWluc3RDb25zdHJ1Y3RvclVuaWZpZXIudW5pZnkodGVybU5vZGVBLCBjb25zdHJ1Y3RvclRlcm1Ob2RlQiwgbG9jYWxDb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgbGV0IHZlcmlmaWVkQWhlYWQ7XG5cbiAgICAgICAgICBjb25zdCB0eXBlID0gY29uc3RydWN0b3IuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZUFuZFR5cGUodGVybU5vZGUsIHR5cGUpO1xuXG4gICAgICAgICAgdGVybXMucHVzaCh0ZXJtKTtcblxuICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgICAgICAgdGVybXMucG9wKCk7XG5cbiAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgfSk7XG5cbiAgdGVybVVuaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3IgPSB1bmlmaWVkOyAgLy8vXG5cbiAgaWYgKHRlcm1VbmlmaWVkQWdhaW5zdENvbnN0cnVjdG9yKSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBhZ2FpbnN0IHRoZSAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yLmAsIHRlcm1Ob2RlKTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtVW5pZmllZEFnYWluc3RDb25zdHJ1Y3Rvcjtcbn1cblxuIl0sIm5hbWVzIjpbInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ2YXJpYWJsZU5vZGVRdWVyeSIsInZlcmlmeVRlcm0iLCJ0ZXJtTm9kZSIsInRlcm1zIiwibG9jYWxDb250ZXh0IiwidmVyaWZ5QWhlYWQiLCJ0ZXJtVmVyaWZpZWQiLCJ0ZXJtU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJ2ZXJpZnlUZXJtRnVuY3Rpb25zIiwidmVyaWZ5VGVybUFzVmFyaWFibGUiLCJ1bmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3JzIiwidW5pZnlUZXJtQWdhaW5zdEJyYWNrZXRlZENvbnN0cnVjdG9yIiwic29tZSIsInZlcmlmeVRlcm1GdW5jdGlvbiIsImRlYnVnIiwiT2JqZWN0IiwiYXNzaWduIiwic2hpbSIsInRlcm1WZXJpZmllZEFzVmFyaWFibGUiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlIiwidmVyaWZpZWRBaGVhZCIsInR5cGUiLCJnZXRUeXBlIiwidGVybSIsIlRlcm0iLCJmcm9tVGVybU5vZGVBbmRUeXBlIiwicHVzaCIsInBvcCIsInRlcm1VbmlmaWVkQWdhaW5zdENvbnN0cnVjdG9ycyIsImNvbnN0cnVjdG9ycyIsImdldENvbnN0cnVjdG9ycyIsImNvbnN0cnVjdG9yIiwidGVybVVuaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3IiLCJ1bmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3IiLCJ0ZXJtVW5pZmllZEFnYWluc3RCcmFja2V0ZWRDb25zdHJ1Y3RvciIsImJyYWNrZXRlZENvbnN0cnVjdG9yU3RyaW5nIiwiYnJhY2tldGVkQ29uc3RydWN0b3IiLCJnZXRTdHJpbmciLCJicmFja2V0ZWRDb25zdHJ1Y3RvclRlcm1Ob2RlIiwiZ2V0VGVybU5vZGUiLCJ0ZXJtTm9kZUEiLCJjb25zdHJ1Y3RvclRlcm1Ob2RlQiIsInVuaWZpZWQiLCJ0ZXJtQWdhaW5zdENvbnN0cnVjdG9yVW5pZmllciIsInVuaWZ5IiwiYnJhY2tldGVkVGVybU5vZGUiLCJmaXJzdFRlcm0iLCJmaXJzdCIsImNvbnN0cnVjdG9yU3RyaW5nIiwiY29uc3RydWN0b3JUZXJtTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBNkNBOzs7ZUFBQTs7OzJEQTNDaUI7MkRBQ0E7Z0VBQ2dCOzZFQUNTO3FCQUVwQjtxQkFDSTs7Ozs7O0FBRTFCLElBQU1BLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyx3QkFDMUJDLG9CQUFvQkQsSUFBQUEsZ0JBQVMsRUFBQztBQUVwQyxTQUFTRSxXQUFXQyxRQUFRLEVBQUVDLEtBQUssRUFBRUMsWUFBWSxFQUFFQyxXQUFXO0lBQzVELElBQUlDO0lBRUosSUFBTUMsYUFBYUgsYUFBYUksWUFBWSxD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