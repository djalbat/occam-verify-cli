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
Object.assign(_termAgainstConstructor.default, {
    verifyTerm: verifyTerm
});
var _default = verifyTerm;
function verifyTermAsVariable(termNode, terms, localContext, verifyAhead) {
    var termVerifiedAsVariable = false;
    var variableNode = variableNodeQuery(termNode);
    if (variableNode !== null) {
        var termString = localContext.nodeAsString(termNode);
        localContext.trace("Verifying the '".concat(termString, "' term as a variable..."), termNode);
        var variables = [], givenVariableVerified = (0, _givenVariable.default)(variableNode, variables, localContext, function() {
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
            localContext.debug("...verified the '".concat(termString, "' term as a variable."), termNode);
        }
    }
    return termVerifiedAsVariable;
}
function verifyTermAgainstConstructor(termNode, terms, constructor, localContext, verifyAhead) {
    var termVerifiedAgainstConstructor;
    var termString = localContext.nodeAsString(termNode), constructorString = constructor.getString();
    localContext.trace("Verifying the '".concat(termString, "' term against the '").concat(constructorString, "' constructor..."), termNode);
    var constructorTermNode = constructor.getTermNode(), nonTerminalNNdeA = termNode, nonTerminalNodeB = constructorTermNode, nodeVerified = _termAgainstConstructor.default.verifyNonTerminalNode(nonTerminalNNdeA, nonTerminalNodeB, localContext, function() {
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
        localContext.debug("...verified the '".concat(termString, "' term against the '").concat(constructorString, "' constructor."), termNode);
    }
    return termVerifiedAgainstConstructor;
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
    var bracketedConstructorTermNode = _bracketed.default.getTermNode(), nonTerminalNNdeA = termNode, nonTerminalNodeB = bracketedConstructorTermNode, nodeVerified = _termAgainstConstructor.default.verifyNonTerminalNode(nonTerminalNNdeA, nonTerminalNodeB, localContext, function() {
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
    termVerifiedAgainstBracketedConstructor = nodeVerified; ///
    if (termVerifiedAgainstBracketedConstructor) {
        localContext.debug("...verified the '".concat(termString, "' term against the '").concat(bracketedConstructorString, "' constructor."), termNode);
    }
    return termVerifiedAgainstBracketedConstructor;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGVybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRlcm0gZnJvbSBcIi4uL3Rlcm1cIjtcbmltcG9ydCB0ZXJtQWdhaW5zdENvbnN0cnVjdG9yTm9kZXNWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXIvbm9kZXMvdGVybUFnYWluc3RDb25zdHJ1Y3RvclwiO1xuaW1wb3J0IHZlcmlmeUdpdmVuVmFyaWFibGUgZnJvbSBcIi4uL3ZlcmlmeS9naXZlblZhcmlhYmxlXCI7XG5pbXBvcnQgYnJhY2tldGVkQ29uc3RydWN0b3IgZnJvbSBcIi4uL2NvbnN0cnVjdG9yL2JyYWNrZXRlZFwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL2FyZ3VtZW50L3Rlcm1cIiksXG4gICAgICB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlIVwiKTtcblxuZnVuY3Rpb24gdmVyaWZ5VGVybSh0ZXJtTm9kZSwgdGVybXMsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHRlcm1WZXJpZmllZDtcblxuICBjb25zdCB0ZXJtU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyh0ZXJtTm9kZSk7XG5cbiAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLi4uYCwgdGVybU5vZGUpO1xuXG4gIGNvbnN0IHZlcmlmeVRlcm1GdW5jdGlvbnMgPSBbXG4gICAgdmVyaWZ5VGVybUFzVmFyaWFibGUsXG4gICAgdmVyaWZ5VGVybUFnYWluc3RDb25zdHJ1Y3RvcnMsXG4gICAgdmVyaWZ5VGVybUFnYWluc3RCcmFja2V0ZWRDb25zdHJ1Y3RvclxuICBdO1xuXG4gIHRlcm1WZXJpZmllZCA9IHZlcmlmeVRlcm1GdW5jdGlvbnMuc29tZSgodmVyaWZ5VGVybUZ1bmN0aW9uKSA9PiB7XG4gICAgY29uc3QgdGVybVZlcmlmaWVkID0gdmVyaWZ5VGVybUZ1bmN0aW9uKHRlcm1Ob2RlLCB0ZXJtcywgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICBpZiAodGVybVZlcmlmaWVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmICh0ZXJtVmVyaWZpZWQpIHtcbiAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS5gLCB0ZXJtTm9kZSk7XG4gIH1cblxuICByZXR1cm4gdGVybVZlcmlmaWVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5U3RhbmRhbG9uZVRlcm0odGVybU5vZGUsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHN0YW5kYWxvbmVUZXJtVmVyaWZpZWQ7XG5cbiAgY29uc3QgdGVybVN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcodGVybU5vZGUpO1xuXG4gIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgc3RhbmRhbG9uZSB0ZXJtLi4uYCwgdGVybU5vZGUpO1xuXG4gIGNvbnN0IHRlcm1zID0gW10sXG4gICAgICAgIHRlcm1WZXJpZmllZCA9IHZlcmlmeVRlcm0odGVybU5vZGUsIHRlcm1zLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICBzdGFuZGFsb25lVGVybVZlcmlmaWVkID0gdGVybVZlcmlmaWVkOyAgLy8vXG5cbiAgaWYgKHN0YW5kYWxvbmVUZXJtVmVyaWZpZWQpIHtcbiAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgc3RhbmRhbG9uZSB0ZXJtLmAsIHRlcm1Ob2RlKTtcbiAgfVxuXG4gIHJldHVybiBzdGFuZGFsb25lVGVybVZlcmlmaWVkO1xufVxuXG5PYmplY3QuYXNzaWduKHRlcm1BZ2FpbnN0Q29uc3RydWN0b3JOb2Rlc1ZlcmlmaWVyLCB7XG4gIHZlcmlmeVRlcm1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB2ZXJpZnlUZXJtO1xuXG5mdW5jdGlvbiB2ZXJpZnlUZXJtQXNWYXJpYWJsZSh0ZXJtTm9kZSwgdGVybXMsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHRlcm1WZXJpZmllZEFzVmFyaWFibGUgPSBmYWxzZTtcblxuICBjb25zdCB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeSh0ZXJtTm9kZSk7XG5cbiAgaWYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBhcyBhIHZhcmlhYmxlLi4uYCwgdGVybU5vZGUpO1xuXG4gICAgY29uc3QgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgZ2l2ZW5WYXJpYWJsZVZlcmlmaWVkID0gdmVyaWZ5R2l2ZW5WYXJpYWJsZSh2YXJpYWJsZU5vZGUsIHZhcmlhYmxlcywgbG9jYWxDb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgdmVyaWZpZWRBaGVhZDtcblxuICAgICAgICAgICAgY29uc3QgZmlyc3RWYXJpYWJsZSA9IGZpcnN0KHZhcmlhYmxlcyksXG4gICAgICAgICAgICAgICAgICB2YXJpYWJsZSA9IGZpcnN0VmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgICAgICAgdHlwZSA9IHZhcmlhYmxlLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZUFuZFR5cGUodGVybU5vZGUsIHR5cGUpO1xuXG4gICAgICAgICAgICB0ZXJtcy5wdXNoKHRlcm0pO1xuXG4gICAgICAgICAgICB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgICAgICAgICAgaWYgKCF2ZXJpZmllZEFoZWFkKSB7XG4gICAgICAgICAgICAgIHRlcm1zLnBvcCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICB9KTtcblxuICAgIHRlcm1WZXJpZmllZEFzVmFyaWFibGUgPSBnaXZlblZhcmlhYmxlVmVyaWZpZWQ7ICAvLy9cblxuICAgIGlmICh0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBhcyBhIHZhcmlhYmxlLmAsIHRlcm1Ob2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGVybVZlcmlmaWVkQXNWYXJpYWJsZTtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5VGVybUFnYWluc3RDb25zdHJ1Y3Rvcih0ZXJtTm9kZSwgdGVybXMsIGNvbnN0cnVjdG9yLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCB0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3I7XG5cbiAgY29uc3QgdGVybVN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcodGVybU5vZGUpLFxuICAgICAgICBjb25zdHJ1Y3RvclN0cmluZyA9IGNvbnN0cnVjdG9yLmdldFN0cmluZygpO1xuXG4gIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBhZ2FpbnN0IHRoZSAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yLi4uYCwgdGVybU5vZGUpO1xuXG4gIGNvbnN0IGNvbnN0cnVjdG9yVGVybU5vZGUgPSBjb25zdHJ1Y3Rvci5nZXRUZXJtTm9kZSgpLFxuICAgICAgICBub25UZXJtaW5hbE5OZGVBID0gdGVybU5vZGUsICAvLy9cbiAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IGNvbnN0cnVjdG9yVGVybU5vZGUsICAvLy9cbiAgICAgICAgbm9kZVZlcmlmaWVkID0gdGVybUFnYWluc3RDb25zdHJ1Y3Rvck5vZGVzVmVyaWZpZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTk5kZUEsIG5vblRlcm1pbmFsTm9kZUIsIGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgIGxldCB2ZXJpZmllZEFoZWFkO1xuXG4gICAgICAgICAgY29uc3QgdHlwZSA9IGNvbnN0cnVjdG9yLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgICB0ZXJtID0gVGVybS5mcm9tVGVybU5vZGVBbmRUeXBlKHRlcm1Ob2RlLCB0eXBlKTtcblxuICAgICAgICAgIHRlcm1zLnB1c2godGVybSk7XG5cbiAgICAgICAgICB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgICAgICAgIGlmICghdmVyaWZpZWRBaGVhZCkge1xuICAgICAgICAgICAgdGVybXMucG9wKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgIH0pO1xuXG4gIHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvciA9IG5vZGVWZXJpZmllZDsgIC8vL1xuXG4gIGlmICh0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3IpIHtcbiAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBhZ2FpbnN0IHRoZSAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yLmAsIHRlcm1Ob2RlKTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3I7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3JzKHRlcm1Ob2RlLCB0ZXJtcywgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9ycyA9IGZhbHNlO1xuXG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKTtcblxuICBpZiAodmFyaWFibGVOb2RlID09PSBudWxsKSB7XG4gICAgY29uc3QgY29uc3RydWN0b3JzID0gbG9jYWxDb250ZXh0LmdldENvbnN0cnVjdG9ycygpO1xuXG4gICAgdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9ycy5zb21lKChjb25zdHJ1Y3RvcikgPT4ge1xuICAgICAgY29uc3QgdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9yID0gdmVyaWZ5VGVybUFnYWluc3RDb25zdHJ1Y3Rvcih0ZXJtTm9kZSwgdGVybXMsIGNvbnN0cnVjdG9yLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgaWYgKHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3Rvcikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3JzO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlUZXJtQWdhaW5zdEJyYWNrZXRlZENvbnN0cnVjdG9yKHRlcm1Ob2RlLCB0ZXJtcywgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgdGVybVZlcmlmaWVkQWdhaW5zdEJyYWNrZXRlZENvbnN0cnVjdG9yO1xuXG4gIGNvbnN0IHRlcm1TdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKSxcbiAgICAgICAgYnJhY2tldGVkQ29uc3RydWN0b3JTdHJpbmcgPSBicmFja2V0ZWRDb25zdHJ1Y3Rvci5nZXRTdHJpbmcoKTtcblxuICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYWdhaW5zdCB0aGUgJyR7YnJhY2tldGVkQ29uc3RydWN0b3JTdHJpbmd9JyBicmFja2V0ZWQgY29uc3RydWN0b3IuLi5gLCB0ZXJtTm9kZSk7XG5cbiAgY29uc3QgYnJhY2tldGVkQ29uc3RydWN0b3JUZXJtTm9kZSA9IGJyYWNrZXRlZENvbnN0cnVjdG9yLmdldFRlcm1Ob2RlKCksXG4gICAgICAgIG5vblRlcm1pbmFsTk5kZUEgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gYnJhY2tldGVkQ29uc3RydWN0b3JUZXJtTm9kZSwgIC8vL1xuICAgICAgICBub2RlVmVyaWZpZWQgPSB0ZXJtQWdhaW5zdENvbnN0cnVjdG9yTm9kZXNWZXJpZmllci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOTmRlQSwgbm9uVGVybWluYWxOb2RlQiwgbG9jYWxDb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgbGV0IHZlcmlmaWVkQWhlYWQ7XG5cbiAgICAgICAgICBjb25zdCBicmFja2V0ZWRUZXJtTm9kZSA9IHRlcm1Ob2RlOyAvLy9cblxuICAgICAgICAgIHRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeSh0ZXJtTm9kZSk7IC8vL1xuXG4gICAgICAgICAgaWYgKHRlcm1Ob2RlID09PSBudWxsKSB7XG4gICAgICAgICAgICB2ZXJpZmllZEFoZWFkID0gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCB0eXBlO1xuXG4gICAgICAgICAgICB2ZXJpZnlUZXJtKHRlcm1Ob2RlLCB0ZXJtcywgbG9jYWxDb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgICAgIGxldCB2ZXJpZmllZEFoZWFkO1xuXG4gICAgICAgICAgICAgIGNvbnN0IGZpcnN0VGVybSA9IGZpcnN0KHRlcm1zKSxcbiAgICAgICAgICAgICAgICAgICAgdGVybSA9IGZpcnN0VGVybTsgLy8vXG5cbiAgICAgICAgICAgICAgdHlwZSA9IHRlcm0uZ2V0VHlwZSgpO1xuXG4gICAgICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRlcm1zLnBvcCgpO1xuXG4gICAgICAgICAgICB0ZXJtTm9kZSA9IGJyYWNrZXRlZFRlcm1Ob2RlOyAvLy9cblxuICAgICAgICAgICAgY29uc3QgdGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlQW5kVHlwZSh0ZXJtTm9kZSwgdHlwZSk7XG5cbiAgICAgICAgICAgIHRlcm1zLnB1c2godGVybSk7XG5cbiAgICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgICAgICAgICBpZiAoIXZlcmlmaWVkQWhlYWQpIHtcbiAgICAgICAgICAgICAgdGVybXMucG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgIH0pO1xuXG4gIHRlcm1WZXJpZmllZEFnYWluc3RCcmFja2V0ZWRDb25zdHJ1Y3RvciA9IG5vZGVWZXJpZmllZDsgIC8vL1xuXG4gIGlmICh0ZXJtVmVyaWZpZWRBZ2FpbnN0QnJhY2tldGVkQ29uc3RydWN0b3IpIHtcbiAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBhZ2FpbnN0IHRoZSAnJHticmFja2V0ZWRDb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yLmAsIHRlcm1Ob2RlKTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtVmVyaWZpZWRBZ2FpbnN0QnJhY2tldGVkQ29uc3RydWN0b3I7XG59XG5cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlTdGFuZGFsb25lVGVybSIsInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ2YXJpYWJsZU5vZGVRdWVyeSIsInZlcmlmeVRlcm0iLCJ0ZXJtTm9kZSIsInRlcm1zIiwibG9jYWxDb250ZXh0IiwidmVyaWZ5QWhlYWQiLCJ0ZXJtVmVyaWZpZWQiLCJ0ZXJtU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJ2ZXJpZnlUZXJtRnVuY3Rpb25zIiwidmVyaWZ5VGVybUFzVmFyaWFibGUiLCJ2ZXJpZnlUZXJtQWdhaW5zdENvbnN0cnVjdG9ycyIsInZlcmlmeVRlcm1BZ2FpbnN0QnJhY2tldGVkQ29uc3RydWN0b3IiLCJzb21lIiwidmVyaWZ5VGVybUZ1bmN0aW9uIiwiZGVidWciLCJzdGFuZGFsb25lVGVybVZlcmlmaWVkIiwiT2JqZWN0IiwiYXNzaWduIiwidGVybUFnYWluc3RDb25zdHJ1Y3Rvck5vZGVzVmVyaWZpZXIiLCJ0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGVzIiwiZ2l2ZW5WYXJpYWJsZVZlcmlmaWVkIiwidmVyaWZ5R2l2ZW5WYXJpYWJsZSIsInZlcmlmaWVkQWhlYWQiLCJmaXJzdFZhcmlhYmxlIiwiZmlyc3QiLCJ2YXJpYWJsZSIsInR5cGUiLCJnZXRUeXBlIiwidGVybSIsIlRlcm0iLCJmcm9tVGVybU5vZGVBbmRUeXBlIiwicHVzaCIsInBvcCIsInZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3IiLCJjb25zdHJ1Y3RvciIsInRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvciIsImNvbnN0cnVjdG9yU3RyaW5nIiwiZ2V0U3RyaW5nIiwiY29uc3RydWN0b3JUZXJtTm9kZSIsImdldFRlcm1Ob2RlIiwibm9uVGVybWluYWxOTmRlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJub2RlVmVyaWZpZWQiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJ0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3JzIiwiY29uc3RydWN0b3JzIiwiZ2V0Q29uc3RydWN0b3JzIiwidGVybVZlcmlmaWVkQWdhaW5zdEJyYWNrZXRlZENvbnN0cnVjdG9yIiwiYnJhY2tldGVkQ29uc3RydWN0b3JTdHJpbmciLCJicmFja2V0ZWRDb25zdHJ1Y3RvciIsImJyYWNrZXRlZENvbnN0cnVjdG9yVGVybU5vZGUiLCJicmFja2V0ZWRUZXJtTm9kZSIsImZpcnN0VGVybSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBZ0VBLE9BQTBCO2VBQTFCOztJQXZCZ0JBLG9CQUFvQjtlQUFwQkE7OzsyREF2Q0M7NkVBQytCO29FQUNoQjtnRUFDQztxQkFFWDtxQkFDSTs7Ozs7O0FBRTFCLElBQU1DLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyx3QkFDMUJDLG9CQUFvQkQsSUFBQUEsZ0JBQVMsRUFBQztBQUVwQyxTQUFTRSxXQUFXQyxRQUFRLEVBQUVDLEtBQUssRUFBRUMsWUFBWSxFQUFFQyxXQUFXO0lBQzVELElBQUlDO0lBRUosSUFBTUMsYUFBYUgsYUFBYUksWUFBWSxDQUFDTjtJQUU3Q0UsYUFBYUssS0FBSyxDQUFDLEFBQUMsa0JBQTRCLE9BQVhGLFlBQVcsY0FBWUw7SUFFNUQsSUFBTVEsc0JBQXNCO1FBQzFCQztRQUNBQztRQUNBQztLQUNEO0lBRURQLGVBQWVJLG9CQUFvQkksSUFBSSxDQUFDLFNBQUNDO1FBQ3ZDLElBQU1ULGVBQWVTLG1CQUFtQmIsVUFBVUMsT0FBT0MsY0FBY0M7UUFFdkUsSUFBSUMsY0FBYztZQUNoQixPQUFPO1FBQ1Q7SUFDRjtJQUVBLElBQUlBLGNBQWM7UUFDaEJGLGFBQWFZLEtBQUssQ0FBQyxBQUFDLG9CQUE4QixPQUFYVCxZQUFXLFlBQVVMO0lBQzlEO0lBRUEsT0FBT0k7QUFDVDtBQUVPLFNBQVNULHFCQUFxQkssUUFBUSxFQUFFRSxZQUFZLEVBQUVDLFdBQVc7SUFDdEUsSUFBSVk7SUFFSixJQUFNVixhQUFhSCxhQUFhSSxZQUFZLENBQUNOO0lBRTdDRSxhQUFhSyxLQUFLLENBQUMsQUFBQyxrQkFBNEIsT0FBWEYsWUFBVyx5QkFBdUJMO0lBRXZFLElBQU1DLFFBQVEsRUFBRSxFQUNWRyxlQUFlTCxXQUFXQyxVQUFVQyxPQUFPQyxjQUFjQztJQUUvRFkseUJBQXlCWCxjQUFlLEdB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