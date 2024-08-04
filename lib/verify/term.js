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
var _term = /*#__PURE__*/ _interop_require_default(require("../term"));
var _termAgainstConstructor = /*#__PURE__*/ _interop_require_default(require("../verifier/nodes/termAgainstConstructor"));
var _givenVariable = /*#__PURE__*/ _interop_require_default(require("../verify/givenVariable"));
var _bracketed = /*#__PURE__*/ _interop_require_default(require("../constructor/bracketed"));
var _array = require("../utilities/array");
var _query = require("../utilities/query");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var termNodeQuery = (0, _query.nodeQuery)("/term/argument/term"), variableNodeQuery = (0, _query.nodeQuery)("/term/variable!");
function verifyTerm(termNode, terms, context, verifyAhead) {
    var termVerified;
    var termString = context.nodeAsString(termNode);
    context.trace("Verifying the '".concat(termString, "' term..."), termNode);
    var verifyTermFunctions = [
        verifyTermAsVariable,
        verifyTermAgainstConstructors,
        verifyTermAgainstBracketedConstructor
    ];
    termVerified = verifyTermFunctions.some(function(verifyTermFunction) {
        var termVerified = verifyTermFunction(termNode, terms, context, verifyAhead);
        if (termVerified) {
            return true;
        }
    });
    if (termVerified) {
        context.debug("...verified the '".concat(termString, "' term."), termNode);
    }
    return termVerified;
}
function verifyStandaloneTerm(termNode, context, verifyAhead) {
    var standaloneTermVerified;
    var termString = context.nodeAsString(termNode);
    context.trace("Verifying the '".concat(termString, "' standalone term..."), termNode);
    var terms = [], termVerified = verifyTerm(termNode, terms, context, verifyAhead);
    standaloneTermVerified = termVerified; ///
    if (standaloneTermVerified) {
        context.debug("...verified the '".concat(termString, "' standalone term."), termNode);
    }
    return standaloneTermVerified;
}
Object.assign(_termAgainstConstructor.default, {
    verifyTerm: verifyTerm
});
var _default = verifyTerm;
function verifyTermAsVariable(termNode, terms, context, verifyAhead) {
    var termVerifiedAsVariable = false;
    var variableNode = variableNodeQuery(termNode);
    if (variableNode !== null) {
        var termString = context.nodeAsString(termNode);
        context.trace("Verifying the '".concat(termString, "' term as a variable..."), termNode);
        var variables = [], givenVariableVerified = (0, _givenVariable.default)(variableNode, variables, context, function() {
            var verifiedAhead;
            var firstVariable = (0, _array.first)(variables), variable = firstVariable, type = variable.getType(), term = _term.default.fromTermNodeAndType(termNode, type);
            terms.push(term);
            verifiedAhead = verifyAhead();
            if (!verifiedAhead) {
                terms.pop();
            }
            return verifiedAhead;
        });
        termVerifiedAsVariable = givenVariableVerified; ///
        if (termVerifiedAsVariable) {
            context.debug("...verified the '".concat(termString, "' term as a variable."), termNode);
        }
    }
    return termVerifiedAsVariable;
}
function verifyTermAgainstConstructor(termNode, terms, constructor, context, verifyAhead) {
    var termVerifiedAgainstConstructor;
    var termString = context.nodeAsString(termNode), constructorString = constructor.getString();
    context.trace("Verifying the '".concat(termString, "' term against the '").concat(constructorString, "' constructor..."), termNode);
    var constructorTermNode = constructor.getTermNode(), nonTerminalNNdeA = termNode, nonTerminalNodeB = constructorTermNode, nodeVerified = _termAgainstConstructor.default.verifyNonTerminalNode(nonTerminalNNdeA, nonTerminalNodeB, context, function() {
        var verifiedAhead;
        var type = constructor.getType(), term = _term.default.fromTermNodeAndType(termNode, type);
        terms.push(term);
        verifiedAhead = verifyAhead();
        if (!verifiedAhead) {
            terms.pop();
        }
        return verifiedAhead;
    });
    termVerifiedAgainstConstructor = nodeVerified; ///
    if (termVerifiedAgainstConstructor) {
        context.debug("...verified the '".concat(termString, "' term against the '").concat(constructorString, "' constructor."), termNode);
    }
    return termVerifiedAgainstConstructor;
}
function verifyTermAgainstConstructors(termNode, terms, context, verifyAhead) {
    var termVerifiedAgainstConstructors = false;
    var variableNode = variableNodeQuery(termNode);
    if (variableNode === null) {
        var constructors = context.getConstructors();
        termVerifiedAgainstConstructors = constructors.some(function(constructor) {
            var termVerifiedAgainstConstructor = verifyTermAgainstConstructor(termNode, terms, constructor, context, verifyAhead);
            if (termVerifiedAgainstConstructor) {
                return true;
            }
        });
    }
    return termVerifiedAgainstConstructors;
}
function verifyTermAgainstBracketedConstructor(termNode, terms, context, verifyAhead) {
    var termVerifiedAgainstBracketedConstructor;
    var termString = context.nodeAsString(termNode), bracketedConstructorString = _bracketed.default.getString();
    context.trace("Verifying the '".concat(termString, "' term against the '").concat(bracketedConstructorString, "' bracketed constructor..."), termNode);
    var bracketedConstructorTermNode = _bracketed.default.getTermNode(), nonTerminalNNdeA = termNode, nonTerminalNodeB = bracketedConstructorTermNode, nodeVerified = _termAgainstConstructor.default.verifyNonTerminalNode(nonTerminalNNdeA, nonTerminalNodeB, context, function() {
        var verifiedAhead;
        var bracketedTermNode = termNode; ///
        termNode = termNodeQuery(termNode); ///
        if (termNode === null) {
            verifiedAhead = false;
        } else {
            var type;
            verifyTerm(termNode, terms, context, function() {
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
    termVerifiedAgainstBracketedConstructor = nodeVerified; ///
    if (termVerifiedAgainstBracketedConstructor) {
        context.debug("...verified the '".concat(termString, "' term against the '").concat(bracketedConstructorString, "' constructor."), termNode);
    }
    return termVerifiedAgainstBracketedConstructor;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGVybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRlcm0gZnJvbSBcIi4uL3Rlcm1cIjtcbmltcG9ydCB0ZXJtQWdhaW5zdENvbnN0cnVjdG9yTm9kZXNWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXIvbm9kZXMvdGVybUFnYWluc3RDb25zdHJ1Y3RvclwiO1xuaW1wb3J0IHZlcmlmeUdpdmVuVmFyaWFibGUgZnJvbSBcIi4uL3ZlcmlmeS9naXZlblZhcmlhYmxlXCI7XG5pbXBvcnQgYnJhY2tldGVkQ29uc3RydWN0b3IgZnJvbSBcIi4uL2NvbnN0cnVjdG9yL2JyYWNrZXRlZFwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL2FyZ3VtZW50L3Rlcm1cIiksXG4gICAgICB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlIVwiKTtcblxuZnVuY3Rpb24gdmVyaWZ5VGVybSh0ZXJtTm9kZSwgdGVybXMsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCB0ZXJtVmVyaWZpZWQ7XG5cbiAgY29uc3QgdGVybVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKTtcblxuICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLi4uYCwgdGVybU5vZGUpO1xuXG4gIGNvbnN0IHZlcmlmeVRlcm1GdW5jdGlvbnMgPSBbXG4gICAgdmVyaWZ5VGVybUFzVmFyaWFibGUsXG4gICAgdmVyaWZ5VGVybUFnYWluc3RDb25zdHJ1Y3RvcnMsXG4gICAgdmVyaWZ5VGVybUFnYWluc3RCcmFja2V0ZWRDb25zdHJ1Y3RvclxuICBdO1xuXG4gIHRlcm1WZXJpZmllZCA9IHZlcmlmeVRlcm1GdW5jdGlvbnMuc29tZSgodmVyaWZ5VGVybUZ1bmN0aW9uKSA9PiB7XG4gICAgY29uc3QgdGVybVZlcmlmaWVkID0gdmVyaWZ5VGVybUZ1bmN0aW9uKHRlcm1Ob2RlLCB0ZXJtcywgY29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgaWYgKHRlcm1WZXJpZmllZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBpZiAodGVybVZlcmlmaWVkKSB7XG4gICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLmAsIHRlcm1Ob2RlKTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtVmVyaWZpZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlTdGFuZGFsb25lVGVybSh0ZXJtTm9kZSwgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHN0YW5kYWxvbmVUZXJtVmVyaWZpZWQ7XG5cbiAgY29uc3QgdGVybVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKTtcblxuICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyBzdGFuZGFsb25lIHRlcm0uLi5gLCB0ZXJtTm9kZSk7XG5cbiAgY29uc3QgdGVybXMgPSBbXSxcbiAgICAgICAgdGVybVZlcmlmaWVkID0gdmVyaWZ5VGVybSh0ZXJtTm9kZSwgdGVybXMsIGNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICBzdGFuZGFsb25lVGVybVZlcmlmaWVkID0gdGVybVZlcmlmaWVkOyAgLy8vXG5cbiAgaWYgKHN0YW5kYWxvbmVUZXJtVmVyaWZpZWQpIHtcbiAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHN0YW5kYWxvbmUgdGVybS5gLCB0ZXJtTm9kZSk7XG4gIH1cblxuICByZXR1cm4gc3RhbmRhbG9uZVRlcm1WZXJpZmllZDtcbn1cblxuT2JqZWN0LmFzc2lnbih0ZXJtQWdhaW5zdENvbnN0cnVjdG9yTm9kZXNWZXJpZmllciwge1xuICB2ZXJpZnlUZXJtXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgdmVyaWZ5VGVybTtcblxuZnVuY3Rpb24gdmVyaWZ5VGVybUFzVmFyaWFibGUodGVybU5vZGUsIHRlcm1zLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgdGVybVZlcmlmaWVkQXNWYXJpYWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKTtcblxuICBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgdGVybVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYXMgYSB2YXJpYWJsZS4uLmAsIHRlcm1Ob2RlKTtcblxuICAgIGNvbnN0IHZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIGdpdmVuVmFyaWFibGVWZXJpZmllZCA9IHZlcmlmeUdpdmVuVmFyaWFibGUodmFyaWFibGVOb2RlLCB2YXJpYWJsZXMsIGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgICAgIGxldCB2ZXJpZmllZEFoZWFkO1xuXG4gICAgICAgICAgICBjb25zdCBmaXJzdFZhcmlhYmxlID0gZmlyc3QodmFyaWFibGVzKSxcbiAgICAgICAgICAgICAgICAgIHZhcmlhYmxlID0gZmlyc3RWYXJpYWJsZSwgLy8vXG4gICAgICAgICAgICAgICAgICB0eXBlID0gdmFyaWFibGUuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgICAgdGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlQW5kVHlwZSh0ZXJtTm9kZSwgdHlwZSk7XG5cbiAgICAgICAgICAgIHRlcm1zLnB1c2godGVybSk7XG5cbiAgICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgICAgICAgICBpZiAoIXZlcmlmaWVkQWhlYWQpIHtcbiAgICAgICAgICAgICAgdGVybXMucG9wKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgIH0pO1xuXG4gICAgdGVybVZlcmlmaWVkQXNWYXJpYWJsZSA9IGdpdmVuVmFyaWFibGVWZXJpZmllZDsgIC8vL1xuXG4gICAgaWYgKHRlcm1WZXJpZmllZEFzVmFyaWFibGUpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBhcyBhIHZhcmlhYmxlLmAsIHRlcm1Ob2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGVybVZlcmlmaWVkQXNWYXJpYWJsZTtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5VGVybUFnYWluc3RDb25zdHJ1Y3Rvcih0ZXJtTm9kZSwgdGVybXMsIGNvbnN0cnVjdG9yLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9yO1xuXG4gIGNvbnN0IHRlcm1TdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyh0ZXJtTm9kZSksXG4gICAgICAgIGNvbnN0cnVjdG9yU3RyaW5nID0gY29uc3RydWN0b3IuZ2V0U3RyaW5nKCk7XG5cbiAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBhZ2FpbnN0IHRoZSAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yLi4uYCwgdGVybU5vZGUpO1xuXG4gIGNvbnN0IGNvbnN0cnVjdG9yVGVybU5vZGUgPSBjb25zdHJ1Y3Rvci5nZXRUZXJtTm9kZSgpLFxuICAgICAgICBub25UZXJtaW5hbE5OZGVBID0gdGVybU5vZGUsICAvLy9cbiAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IGNvbnN0cnVjdG9yVGVybU5vZGUsICAvLy9cbiAgICAgICAgbm9kZVZlcmlmaWVkID0gdGVybUFnYWluc3RDb25zdHJ1Y3Rvck5vZGVzVmVyaWZpZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTk5kZUEsIG5vblRlcm1pbmFsTm9kZUIsIGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgICBsZXQgdmVyaWZpZWRBaGVhZDtcblxuICAgICAgICAgIGNvbnN0IHR5cGUgPSBjb25zdHJ1Y3Rvci5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgdGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlQW5kVHlwZSh0ZXJtTm9kZSwgdHlwZSk7XG5cbiAgICAgICAgICB0ZXJtcy5wdXNoKHRlcm0pO1xuXG4gICAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICAgICAgICBpZiAoIXZlcmlmaWVkQWhlYWQpIHtcbiAgICAgICAgICAgIHRlcm1zLnBvcCgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICB9KTtcblxuICB0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3IgPSBub2RlVmVyaWZpZWQ7ICAvLy9cblxuICBpZiAodGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9yKSB7XG4gICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFnYWluc3QgdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IuYCwgdGVybU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5VGVybUFnYWluc3RDb25zdHJ1Y3RvcnModGVybU5vZGUsIHRlcm1zLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9ycyA9IGZhbHNlO1xuXG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKTtcblxuICBpZiAodmFyaWFibGVOb2RlID09PSBudWxsKSB7XG4gICAgY29uc3QgY29uc3RydWN0b3JzID0gY29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoKTtcblxuICAgIHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnMuc29tZSgoY29uc3RydWN0b3IpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvciA9IHZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3IodGVybU5vZGUsIHRlcm1zLCBjb25zdHJ1Y3RvciwgY29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICBpZiAodGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9yKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvcnM7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVRlcm1BZ2FpbnN0QnJhY2tldGVkQ29uc3RydWN0b3IodGVybU5vZGUsIHRlcm1zLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgdGVybVZlcmlmaWVkQWdhaW5zdEJyYWNrZXRlZENvbnN0cnVjdG9yO1xuXG4gIGNvbnN0IHRlcm1TdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyh0ZXJtTm9kZSksXG4gICAgICAgIGJyYWNrZXRlZENvbnN0cnVjdG9yU3RyaW5nID0gYnJhY2tldGVkQ29uc3RydWN0b3IuZ2V0U3RyaW5nKCk7XG5cbiAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBhZ2FpbnN0IHRoZSAnJHticmFja2V0ZWRDb25zdHJ1Y3RvclN0cmluZ30nIGJyYWNrZXRlZCBjb25zdHJ1Y3Rvci4uLmAsIHRlcm1Ob2RlKTtcblxuICBjb25zdCBicmFja2V0ZWRDb25zdHJ1Y3RvclRlcm1Ob2RlID0gYnJhY2tldGVkQ29uc3RydWN0b3IuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgbm9uVGVybWluYWxOTmRlQSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBicmFja2V0ZWRDb25zdHJ1Y3RvclRlcm1Ob2RlLCAgLy8vXG4gICAgICAgIG5vZGVWZXJpZmllZCA9IHRlcm1BZ2FpbnN0Q29uc3RydWN0b3JOb2Rlc1ZlcmlmaWVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5OZGVBLCBub25UZXJtaW5hbE5vZGVCLCBjb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgbGV0IHZlcmlmaWVkQWhlYWQ7XG5cbiAgICAgICAgICBjb25zdCBicmFja2V0ZWRUZXJtTm9kZSA9IHRlcm1Ob2RlOyAvLy9cblxuICAgICAgICAgIHRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeSh0ZXJtTm9kZSk7IC8vL1xuXG4gICAgICAgICAgaWYgKHRlcm1Ob2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICB2ZXJpZmllZEFoZWFkID0gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCB0eXBlO1xuXG4gICAgICAgICAgICB2ZXJpZnlUZXJtKHRlcm1Ob2RlLCB0ZXJtcywgY29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgICAgICBsZXQgdmVyaWZpZWRBaGVhZDtcblxuICAgICAgICAgICAgICBjb25zdCBmaXJzdFRlcm0gPSBmaXJzdCh0ZXJtcyksXG4gICAgICAgICAgICAgICAgICAgIHRlcm0gPSBmaXJzdFRlcm07IC8vL1xuXG4gICAgICAgICAgICAgIHR5cGUgPSB0ZXJtLmdldFR5cGUoKTtcblxuICAgICAgICAgICAgICB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0ZXJtcy5wb3AoKTtcblxuICAgICAgICAgICAgdGVybU5vZGUgPSBicmFja2V0ZWRUZXJtTm9kZTsgLy8vXG5cbiAgICAgICAgICAgIGNvbnN0IHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZUFuZFR5cGUodGVybU5vZGUsIHR5cGUpO1xuXG4gICAgICAgICAgICB0ZXJtcy5wdXNoKHRlcm0pO1xuXG4gICAgICAgICAgICB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgICAgICAgICAgaWYgKCF2ZXJpZmllZEFoZWFkKSB7XG4gICAgICAgICAgICAgIHRlcm1zLnBvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICB9KTtcblxuICB0ZXJtVmVyaWZpZWRBZ2FpbnN0QnJhY2tldGVkQ29uc3RydWN0b3IgPSBub2RlVmVyaWZpZWQ7ICAvLy9cblxuICBpZiAodGVybVZlcmlmaWVkQWdhaW5zdEJyYWNrZXRlZENvbnN0cnVjdG9yKSB7XG4gICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFnYWluc3QgdGhlICcke2JyYWNrZXRlZENvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IuYCwgdGVybU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1WZXJpZmllZEFnYWluc3RCcmFja2V0ZWRDb25zdHJ1Y3Rvcjtcbn1cblxuIl0sIm5hbWVzIjpbInZlcmlmeVN0YW5kYWxvbmVUZXJtIiwidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInZhcmlhYmxlTm9kZVF1ZXJ5IiwidmVyaWZ5VGVybSIsInRlcm1Ob2RlIiwidGVybXMiLCJjb250ZXh0IiwidmVyaWZ5QWhlYWQiLCJ0ZXJtVmVyaWZpZWQiLCJ0ZXJtU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJ2ZXJpZnlUZXJtRnVuY3Rpb25zIiwidmVyaWZ5VGVybUFzVmFyaWFibGUiLCJ2ZXJpZnlUZXJtQWdhaW5zdENvbnN0cnVjdG9ycyIsInZlcmlmeVRlcm1BZ2FpbnN0QnJhY2tldGVkQ29uc3RydWN0b3IiLCJzb21lIiwidmVyaWZ5VGVybUZ1bmN0aW9uIiwiZGVidWciLCJzdGFuZGFsb25lVGVybVZlcmlmaWVkIiwiT2JqZWN0IiwiYXNzaWduIiwidGVybUFnYWluc3RDb25zdHJ1Y3Rvck5vZGVzVmVyaWZpZXIiLCJ0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGVzIiwiZ2l2ZW5WYXJpYWJsZVZlcmlmaWVkIiwidmVyaWZ5R2l2ZW5WYXJpYWJsZSIsInZlcmlmaWVkQWhlYWQiLCJmaXJzdFZhcmlhYmxlIiwiZmlyc3QiLCJ2YXJpYWJsZSIsInR5cGUiLCJnZXRUeXBlIiwidGVybSIsIlRlcm0iLCJmcm9tVGVybU5vZGVBbmRUeXBlIiwicHVzaCIsInBvcCIsInZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3IiLCJjb25zdHJ1Y3RvciIsInRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvciIsImNvbnN0cnVjdG9yU3RyaW5nIiwiZ2V0U3RyaW5nIiwiY29uc3RydWN0b3JUZXJtTm9kZSIsImdldFRlcm1Ob2RlIiwibm9uVGVybWluYWxOTmRlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJub2RlVmVyaWZpZWQiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJ0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3JzIiwiY29uc3RydWN0b3JzIiwiZ2V0Q29uc3RydWN0b3JzIiwidGVybVZlcmlmaWVkQWdhaW5zdEJyYWNrZXRlZENvbnN0cnVjdG9yIiwiYnJhY2tldGVkQ29uc3RydWN0b3JTdHJpbmciLCJicmFja2V0ZWRDb25zdHJ1Y3RvciIsImJyYWNrZXRlZENvbnN0cnVjdG9yVGVybU5vZGUiLCJicmFja2V0ZWRUZXJtTm9kZSIsImZpcnN0VGVybSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBZ0VBLE9BQTBCO2VBQTFCOztJQXZCZ0JBLG9CQUFvQjtlQUFw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