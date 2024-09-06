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
    var bracketedConstructorTermNode = _bracketed.default.getTermNode(), nonTerminalNNdeA = termNode, nonTerminalNodeB = bracketedConstructorTermNode, nodeUnified = _termAgainstConstructor.default.unifyNonTerminalNode(nonTerminalNNdeA, nonTerminalNodeB, localContext, function() {
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
    termVerifiedAgainstBracketedConstructor = nodeUnified; ///
    if (termVerifiedAgainstBracketedConstructor) {
        localContext.debug("...verified the '".concat(termString, "' term against the '").concat(bracketedConstructorString, "' constructor."), termNode);
    }
    return termVerifiedAgainstBracketedConstructor;
}
function verifyTermAgainstConstructor(termNode, terms, constructor, localContext, verifyAhead) {
    var termVerifiedAgainstConstructor;
    var termString = localContext.nodeAsString(termNode), constructorString = constructor.getString();
    localContext.trace("Verifying the '".concat(termString, "' term against the '").concat(constructorString, "' constructor..."), termNode);
    var constructorTermNode = constructor.getTermNode(), nonTerminalNNdeA = termNode, nonTerminalNodeB = constructorTermNode, nodeUnify = _termAgainstConstructor.default.unifyNonTerminalNode(nonTerminalNNdeA, nonTerminalNodeB, localContext, function() {
        var verifiedAhead;
        var type = constructor.getType(), term = _term.default.fromTermNodeAndType(termNode, type);
        terms.push(term);
        verifiedAhead = verifyAhead();
        if (!verifiedAhead) {
            terms.pop();
        }
        return verifiedAhead;
    });
    termVerifiedAgainstConstructor = nodeUnify; ///
    if (termVerifiedAgainstConstructor) {
        localContext.debug("...verified the '".concat(termString, "' term against the '").concat(constructorString, "' constructor."), termNode);
    }
    return termVerifiedAgainstConstructor;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGVybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRlcm0gZnJvbSBcIi4uL3Rlcm1cIjtcbmltcG9ydCBicmFja2V0ZWRDb25zdHJ1Y3RvciBmcm9tIFwiLi4vY29uc3RydWN0b3IvYnJhY2tldGVkXCI7XG5pbXBvcnQgdGVybUFnYWluc3RDb25zdHJ1Y3RvclVuaWZpZXIgZnJvbSBcIi4uL3VuaWZpZXIvdGVybUFnYWluc3RDb25zdHJ1Y3RvclwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL2FyZ3VtZW50L3Rlcm1cIiksXG4gICAgICB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlIVwiKTtcblxuZnVuY3Rpb24gdmVyaWZ5VGVybSh0ZXJtTm9kZSwgdGVybXMsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHRlcm1WZXJpZmllZDtcblxuICBjb25zdCB0ZXJtU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyh0ZXJtTm9kZSk7XG5cbiAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLi4uYCwgdGVybU5vZGUpO1xuXG4gIGNvbnN0IHZlcmlmeVRlcm1GdW5jdGlvbnMgPSBbXG4gICAgdmVyaWZ5VGVybUFzVmFyaWFibGUsXG4gICAgdmVyaWZ5VGVybUFnYWluc3RDb25zdHJ1Y3RvcnMsXG4gICAgdmVyaWZ5VGVybUFnYWluc3RCcmFja2V0ZWRDb25zdHJ1Y3RvclxuICBdO1xuXG4gIHRlcm1WZXJpZmllZCA9IHZlcmlmeVRlcm1GdW5jdGlvbnMuc29tZSgodmVyaWZ5VGVybUZ1bmN0aW9uKSA9PiB7XG4gICAgY29uc3QgdGVybVZlcmlmaWVkID0gdmVyaWZ5VGVybUZ1bmN0aW9uKHRlcm1Ob2RlLCB0ZXJtcywgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICBpZiAodGVybVZlcmlmaWVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmICh0ZXJtVmVyaWZpZWQpIHtcbiAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS5gLCB0ZXJtTm9kZSk7XG4gIH1cblxuICByZXR1cm4gdGVybVZlcmlmaWVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5U3RhbmRhbG9uZVRlcm0odGVybU5vZGUsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHN0YW5kYWxvbmVUZXJtVmVyaWZpZWQ7XG5cbiAgY29uc3QgdGVybVN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcodGVybU5vZGUpO1xuXG4gIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgc3RhbmRhbG9uZSB0ZXJtLi4uYCwgdGVybU5vZGUpO1xuXG4gIGNvbnN0IHRlcm1zID0gW10sXG4gICAgICAgIHRlcm1WZXJpZmllZCA9IHZlcmlmeVRlcm0odGVybU5vZGUsIHRlcm1zLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICBzdGFuZGFsb25lVGVybVZlcmlmaWVkID0gdGVybVZlcmlmaWVkOyAgLy8vXG5cbiAgaWYgKHN0YW5kYWxvbmVUZXJtVmVyaWZpZWQpIHtcbiAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgc3RhbmRhbG9uZSB0ZXJtLmAsIHRlcm1Ob2RlKTtcbiAgfVxuXG4gIHJldHVybiBzdGFuZGFsb25lVGVybVZlcmlmaWVkO1xufVxuXG5PYmplY3QuYXNzaWduKHRlcm1BZ2FpbnN0Q29uc3RydWN0b3JVbmlmaWVyLCB7XG4gIHZlcmlmeVRlcm1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB2ZXJpZnlUZXJtO1xuXG5mdW5jdGlvbiB2ZXJpZnlUZXJtQXNWYXJpYWJsZSh0ZXJtTm9kZSwgdGVybXMsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHRlcm1WZXJpZmllZEFzVmFyaWFibGUgPSBmYWxzZTtcblxuICBjb25zdCB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeSh0ZXJtTm9kZSk7XG5cbiAgaWYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBhcyBhIHZhcmlhYmxlLi4uYCwgdGVybU5vZGUpO1xuXG4gICAgY29uc3QgdmFyaWFibGUgPSBsb2NhbENvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICAgIGlmICh2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgbGV0IHZlcmlmaWVkQWhlYWQ7XG5cbiAgICAgIGNvbnN0IHR5cGUgPSB2YXJpYWJsZS5nZXRUeXBlKCksXG4gICAgICAgICAgICB0ZXJtID0gVGVybS5mcm9tVGVybU5vZGVBbmRUeXBlKHRlcm1Ob2RlLCB0eXBlKTtcblxuICAgICAgdGVybXMucHVzaCh0ZXJtKTtcblxuICAgICAgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICAgIGlmICghdmVyaWZpZWRBaGVhZCkge1xuICAgICAgICB0ZXJtcy5wb3AoKTtcbiAgICAgIH1cblxuICAgICAgdGVybVZlcmlmaWVkQXNWYXJpYWJsZSA9IHZlcmlmaWVkQWhlYWQ7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAodGVybVZlcmlmaWVkQXNWYXJpYWJsZSkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYXMgYSB2YXJpYWJsZS5gLCB0ZXJtTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRlcm1WZXJpZmllZEFzVmFyaWFibGU7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3JzKHRlcm1Ob2RlLCB0ZXJtcywgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9ycyA9IGZhbHNlO1xuXG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKTtcblxuICBpZiAodmFyaWFibGVOb2RlID09PSBudWxsKSB7XG4gICAgY29uc3QgY29uc3RydWN0b3JzID0gbG9jYWxDb250ZXh0LmdldENvbnN0cnVjdG9ycygpO1xuXG4gICAgdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9ycy5zb21lKChjb25zdHJ1Y3RvcikgPT4ge1xuICAgICAgY29uc3QgdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9yID0gdmVyaWZ5VGVybUFnYWluc3RDb25zdHJ1Y3Rvcih0ZXJtTm9kZSwgdGVybXMsIGNvbnN0cnVjdG9yLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgaWYgKHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3Rvcikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3JzO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlUZXJtQWdhaW5zdEJyYWNrZXRlZENvbnN0cnVjdG9yKHRlcm1Ob2RlLCB0ZXJtcywgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgdGVybVZlcmlmaWVkQWdhaW5zdEJyYWNrZXRlZENvbnN0cnVjdG9yO1xuXG4gIGNvbnN0IHRlcm1TdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKSxcbiAgICAgICAgYnJhY2tldGVkQ29uc3RydWN0b3JTdHJpbmcgPSBicmFja2V0ZWRDb25zdHJ1Y3Rvci5nZXRTdHJpbmcoKTtcblxuICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYWdhaW5zdCB0aGUgJyR7YnJhY2tldGVkQ29uc3RydWN0b3JTdHJpbmd9JyBicmFja2V0ZWQgY29uc3RydWN0b3IuLi5gLCB0ZXJtTm9kZSk7XG5cbiAgY29uc3QgYnJhY2tldGVkQ29uc3RydWN0b3JUZXJtTm9kZSA9IGJyYWNrZXRlZENvbnN0cnVjdG9yLmdldFRlcm1Ob2RlKCksXG4gICAgICAgIG5vblRlcm1pbmFsTk5kZUEgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gYnJhY2tldGVkQ29uc3RydWN0b3JUZXJtTm9kZSwgIC8vL1xuICAgICAgICBub2RlVW5pZmllZCA9IHRlcm1BZ2FpbnN0Q29uc3RydWN0b3JVbmlmaWVyLnVuaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTk5kZUEsIG5vblRlcm1pbmFsTm9kZUIsIGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgIGxldCB2ZXJpZmllZEFoZWFkO1xuXG4gICAgICAgICAgY29uc3QgYnJhY2tldGVkVGVybU5vZGUgPSB0ZXJtTm9kZTsgLy8vXG5cbiAgICAgICAgICB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkodGVybU5vZGUpOyAvLy9cblxuICAgICAgICAgIGlmICh0ZXJtTm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdmVyaWZpZWRBaGVhZCA9IGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgdHlwZTtcblxuICAgICAgICAgICAgdmVyaWZ5VGVybSh0ZXJtTm9kZSwgdGVybXMsIGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgICAgICBsZXQgdmVyaWZpZWRBaGVhZDtcblxuICAgICAgICAgICAgICBjb25zdCBmaXJzdFRlcm0gPSBmaXJzdCh0ZXJtcyksXG4gICAgICAgICAgICAgICAgICAgIHRlcm0gPSBmaXJzdFRlcm07IC8vL1xuXG4gICAgICAgICAgICAgIHR5cGUgPSB0ZXJtLmdldFR5cGUoKTtcblxuICAgICAgICAgICAgICB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0ZXJtcy5wb3AoKTtcblxuICAgICAgICAgICAgdGVybU5vZGUgPSBicmFja2V0ZWRUZXJtTm9kZTsgLy8vXG5cbiAgICAgICAgICAgIGNvbnN0IHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZUFuZFR5cGUodGVybU5vZGUsIHR5cGUpO1xuXG4gICAgICAgICAgICB0ZXJtcy5wdXNoKHRlcm0pO1xuXG4gICAgICAgICAgICB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgICAgICAgICAgaWYgKCF2ZXJpZmllZEFoZWFkKSB7XG4gICAgICAgICAgICAgIHRlcm1zLnBvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICB9KTtcblxuICB0ZXJtVmVyaWZpZWRBZ2FpbnN0QnJhY2tldGVkQ29uc3RydWN0b3IgPSBub2RlVW5pZmllZDsgIC8vL1xuXG4gIGlmICh0ZXJtVmVyaWZpZWRBZ2FpbnN0QnJhY2tldGVkQ29uc3RydWN0b3IpIHtcbiAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBhZ2FpbnN0IHRoZSAnJHticmFja2V0ZWRDb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yLmAsIHRlcm1Ob2RlKTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtVmVyaWZpZWRBZ2FpbnN0QnJhY2tldGVkQ29uc3RydWN0b3I7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3IodGVybU5vZGUsIHRlcm1zLCBjb25zdHJ1Y3RvciwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9yO1xuXG4gIGNvbnN0IHRlcm1TdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKSxcbiAgICAgICAgY29uc3RydWN0b3JTdHJpbmcgPSBjb25zdHJ1Y3Rvci5nZXRTdHJpbmcoKTtcblxuICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYWdhaW5zdCB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci4uLmAsIHRlcm1Ob2RlKTtcblxuICBjb25zdCBjb25zdHJ1Y3RvclRlcm1Ob2RlID0gY29uc3RydWN0b3IuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgbm9uVGVybWluYWxOTmRlQSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBjb25zdHJ1Y3RvclRlcm1Ob2RlLCAgLy8vXG4gICAgICAgIG5vZGVVbmlmeSA9IHRlcm1BZ2FpbnN0Q29uc3RydWN0b3JVbmlmaWVyLnVuaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTk5kZUEsIG5vblRlcm1pbmFsTm9kZUIsIGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgIGxldCB2ZXJpZmllZEFoZWFkO1xuXG4gICAgICAgICAgY29uc3QgdHlwZSA9IGNvbnN0cnVjdG9yLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgICB0ZXJtID0gVGVybS5mcm9tVGVybU5vZGVBbmRUeXBlKHRlcm1Ob2RlLCB0eXBlKTtcblxuICAgICAgICAgIHRlcm1zLnB1c2godGVybSk7XG5cbiAgICAgICAgICB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgICAgICAgIGlmICghdmVyaWZpZWRBaGVhZCkge1xuICAgICAgICAgICAgdGVybXMucG9wKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgIH0pO1xuXG4gIHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvciA9IG5vZGVVbmlmeTsgIC8vL1xuXG4gIGlmICh0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3IpIHtcbiAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBhZ2FpbnN0IHRoZSAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yLmAsIHRlcm1Ob2RlKTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3I7XG59XG5cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlTdGFuZGFsb25lVGVybSIsInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ2YXJpYWJsZU5vZGVRdWVyeSIsInZlcmlmeVRlcm0iLCJ0ZXJtTm9kZSIsInRlcm1zIiwibG9jYWxDb250ZXh0IiwidmVyaWZ5QWhlYWQiLCJ0ZXJtVmVyaWZpZWQiLCJ0ZXJtU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJ2ZXJpZnlUZXJtRnVuY3Rpb25zIiwidmVyaWZ5VGVybUFzVmFyaWFibGUiLCJ2ZXJpZnlUZXJtQWdhaW5zdENvbnN0cnVjdG9ycyIsInZlcmlmeVRlcm1BZ2FpbnN0QnJhY2tldGVkQ29uc3RydWN0b3IiLCJzb21lIiwidmVyaWZ5VGVybUZ1bmN0aW9uIiwiZGVidWciLCJzdGFuZGFsb25lVGVybVZlcmlmaWVkIiwiT2JqZWN0IiwiYXNzaWduIiwidGVybUFnYWluc3RDb25zdHJ1Y3RvclVuaWZpZXIiLCJ0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSIsInZlcmlmaWVkQWhlYWQiLCJ0eXBlIiwiZ2V0VHlwZSIsInRlcm0iLCJUZXJtIiwiZnJvbVRlcm1Ob2RlQW5kVHlwZSIsInB1c2giLCJwb3AiLCJ0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3JzIiwiY29uc3RydWN0b3JzIiwiZ2V0Q29uc3RydWN0b3JzIiwiY29uc3RydWN0b3IiLCJ0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3IiLCJ2ZXJpZnlUZXJtQWdhaW5zdENvbnN0cnVjdG9yIiwidGVybVZlcmlmaWVkQWdhaW5zdEJyYWNrZXRlZENvbnN0cnVjdG9yIiwiYnJhY2tldGVkQ29uc3RydWN0b3JTdHJpbmciLCJicmFja2V0ZWRDb25zdHJ1Y3RvciIsImdldFN0cmluZyIsImJyYWNrZXRlZENvbnN0cnVjdG9yVGVybU5vZGUiLCJnZXRUZXJtTm9kZSIsIm5vblRlcm1pbmFsTk5kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwibm9kZVVuaWZpZWQiLCJ1bmlmeU5vblRlcm1pbmFsTm9kZSIsImJyYWNrZXRlZFRlcm1Ob2RlIiwiZmlyc3RUZXJtIiwiZmlyc3QiLCJjb25zdHJ1Y3RvclN0cmluZyIsImNvbnN0cnVjdG9yVGVybU5vZGUiLCJub2RlVW5pZnkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQStEQSxPQUEwQjtlQUExQjs7SUF2QmdCQSxvQkFBb0I7ZUFBcEJBOzs7MkRBdENDO2dFQUNnQjs2RUFDUztxQkFFcEI7cUJBQ0k7Ozs7OztBQUUxQixJQUFNQyxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsd0JBQzFCQyxvQkFBb0JELElBQUFBLGdCQUFTLEVBQUM7QUFFcEMsU0FBU0UsV0FBV0MsUUFBUSxFQUFFQyxLQUFLLEVBQUVDLFlBQVksRUFBRUMsV0FBVztJQUM1RCxJQUFJQztJQUVKLElBQU1DLGFBQWFILGFBQWFJLFlBQVksQ0FBQ047SUFFN0NFLGFBQWFLLEtBQUssQ0FBQyxBQUFDLGtCQUE0QixPQUFYRixZQUFXLGNBQVlMO0lBRTVELElBQU1RLHNCQUFzQjtRQUMxQkM7UUFDQUM7UUFDQUM7S0FDRDtJQUVEUCxlQUFlSSxvQkFBb0JJLElBQUksQ0FBQyxTQUFDQztRQUN2QyxJQUFNVCxlQUFlUyxtQkFBbUJiLFVBQVVDLE9BQU9DLGNBQWNDO1FBRXZFLElBQUlDLGNBQWM7WUFDaEIsT0FBTztRQUNUO0lBQ0Y7SUFFQSxJQUFJQSxjQUFjO1FBQ2hCRixhQUFhWSxLQUFLLENBQUMsQUFBQyxvQkFBOEIsT0FBWFQsWUFBVyxZQUFVTDtJQUM5RDtJQUVBLE9BQU9JO0FBQ1Q7QUFFTyxTQUFTVCxxQkFBcUJLLFFBQVEsRUFBRUUsWUFBWSxFQUFFQyxXQUFXO0lBQ3RFLElBQUlZO0lBRUosSUFBTVYsYUFBYUgsYUFBYUksWUFBWSxDQUFDTjtJQUU3Q0UsYUFBYUssS0FBSyxDQUFDLEFBQUMsa0JBQTRCLE9BQVhGLFlBQVcseUJBQXVCTDtJQUV2RSxJQUFNQyxRQUFRLEVBQUUsRUFDVkcsZUFBZUwsV0FBV0MsVUFBVUMsT0FBT0MsY0FBY0M7SUFFL0RZLHlCQUF5QlgsY0FBZSxHQUFHO0lBRTNDLElBQUlXLHdCQUF3QjtRQUMxQmIsYUFBYVksS0FBSyxDQUFDLEFBQUMsb0JBQThCLE9BQVhULFlBQVcsdUJBQXFCTDtJQUN6RTtJQUVBLE9BQU9lO0FBQ1Q7QUFFQUMsT0FBT0MsTUFBTSxDQUFDQywrQkFBNkIsRUFBRTtJQUMzQ25CLFlBQUFBO0FBQ0Y7SUFFQSxXQUFlQTtBQUVmLFNBQVNVLHFCQUFxQlQsUUFBUSxFQUFFQyxLQUFLLEVBQUVDLFlBQVksRUFBRUMsV0FBVztJQUN0RSxJQUFJZ0IseUJBQXlCO0lBRTdCLElBQU1DLGVBQWV0QixrQkFBa0JFO0lBRXZDLElBQUlvQixpQkFBaUIsTUFBTTtRQUN6QixJQUFNZixhQUFhSCxhQUFhSSxZQUFZLENBQUNOO1FBRTdDRSxhQUFhSyxLQUFLLENBQUMsQUFBQyxrQkFBNEIsT0FBWEYsWUFBVyw0QkFBMEJMO1FBRTFFLElBQU1xQixXQUFXbkIsYUFBYW9CLDBCQUEwQixDQUFDRjtRQUV6RCxJQUFJQyxhQUFhLE1BQU07WUFDckIsSUFBSUU7WUFFSixJQUFNQyxPQUFPSCxTQUFTSSxPQUFPLElBQ3ZCQyxPQUFPQyxhQUFJLENBQUNDLG1CQUFtQixDQUFDNUIsVUFBVXdCO1lBRWhEdkIsTUFBTTRCLElBQUksQ0FBQ0g7WUFFWEgsZ0JBQWdCcEI7WUFFaEIsSUFBSSxDQUFDb0IsZUFBZTtnQkFDbEJ0QixNQUFNNkIsR0FBRztZQUNYO1lBRUFYLHlCQUF5QkksZUFBZ0IsR0FBRztRQUM5QztRQUVBLElBQUlKLHdCQUF3QjtZQUMxQmpCLGFBQWFZLEtBQUssQ0FBQyxBQUFDLG9CQUE4QixPQUFYVCxZQUFXLDBCQUF3Qkw7UUFDNUU7SUFDRjtJQUVBLE9BQU9tQjtBQUNUO0FBRUEsU0FBU1QsOEJBQThCVixRQUFRLEVBQUVDLEtBQUssRUFBRUMsWUFBWSxFQUFFQyxXQUFXO0lBQy9FLElBQUk0QixrQ0FBa0M7SUFFdEMsSUFBTVgsZUFBZXRCLGtCQUFrQkU7SUFFdkMsSUFBSW9CLGlCQUFpQixNQUFNO1FBQ3pCLElBQU1ZLGVBQWU5QixhQUFhK0IsZUFBZTtRQUVqREYsa0NBQWtDQyxhQUFhcEIsSUFBSSxDQUFDLFNBQUNzQjtZQUNuRCxJQUFNQyxpQ0FBaUNDLDZCQUE2QnBDLFVBQVVDLE9BQU9pQyxhQUFhaEMsY0FBY0M7WUFFaEgsSUFBSWdDLGdDQUFnQztnQkFDbEMsT0FBTztZQUNUO1FBQ0Y7SUFDRjtJQUVBLE9BQU9KO0FBQ1Q7QUFFQSxTQUFTcEIsc0NBQXNDWCxRQUFRLEVBQUVDLEtBQUssRUFBRUMsWUFBWSxFQUFFQyxXQUFXO0lBQ3ZGLElBQUlrQztJQUVKLElBQU1oQyxhQUFhSCxhQUFhSSxZQUFZLENBQUNOLFdBQ3ZDc0MsNkJBQTZCQyxrQkFBb0IsQ0FBQ0MsU0FBUztJQUVqRXRDLGFBQWFLLEtBQUssQ0FBQyxBQUFDLGtCQUFrRCtCLE9BQWpDakMsWUFBVyx3QkFBaUQsT0FBM0JpQyw0QkFBMkIsK0JBQTZCdEM7SUFFOUgsSUFBTXlDLCtCQUErQkYsa0JBQW9CLENBQUNHLFdBQVcsSUFDL0RDLG1CQUFtQjNDLFVBQ25CNEMsbUJBQW1CSCw4QkFDbkJJLGNBQWMzQiwrQkFBNkIsQ0FBQzRCLG9CQUFvQixDQUFDSCxrQkFBa0JDLGtCQUFrQjFDLGNBQWM7UUFDakgsSUFBSXFCO1FBRUosSUFBTXdCLG9CQUFvQi9DLFVBQVUsR0FBRztRQUV2Q0EsV0FBV0osY0FBY0ksV0FBVyxHQUFHO1FBRXZDLElBQUlBLGFBQWEsTUFBTTtZQUNyQnVCLGdCQUFnQjtRQUNsQixPQUFPO1lBQ0wsSUFBSUM7WUFFSnpCLFdBQVdDLFVBQVVDLE9BQU9DLGNBQWM7Z0JBQ3hDLElBQUlxQjtnQkFFSixJQUFNeUIsWUFBWUMsSUFBQUEsWUFBSyxFQUFDaEQsUUFDbEJ5QixPQUFPc0IsV0FBVyxHQUFHO2dCQUUzQnhCLE9BQU9FLEtBQUtELE9BQU87Z0JBRW5CRixnQkFBZ0I7Z0JBRWhCLE9BQU9BO1lBQ1Q7WUFFQXRCLE1BQU02QixHQUFHO1lBRVQ5QixXQUFXK0MsbUJBQW1CLEdBQUc7WUFFakMsSUFBTXJCLE9BQU9DLGFBQUksQ0FBQ0MsbUJBQW1CLENBQUM1QixVQUFVd0I7WUFFaER2QixNQUFNNEIsSUFBSSxDQUFDSDtZQUVYSCxnQkFBZ0JwQjtZQUVoQixJQUFJLENBQUNvQixlQUFlO2dCQUNsQnRCLE1BQU02QixHQUFHO1lBQ1g7UUFDRjtRQUVBLE9BQU9QO0lBQ1Q7SUFFTmMsMENBQTBDUSxhQUFjLEdBQUc7SUFFM0QsSUFBSVIseUNBQXlDO1FBQzNDbkMsYUFBYVksS0FBSyxDQUFDLEFBQUMsb0JBQW9Ed0IsT0FBakNqQyxZQUFXLHdCQUFpRCxPQUEzQmlDLDRCQUEyQixtQkFBaUJ0QztJQUN0SDtJQUVBLE9BQU9xQztBQUNUO0FBRUEsU0FBU0QsNkJBQTZCcEMsUUFBUSxFQUFFQyxLQUFLLEVBQUVpQyxXQUFXLEVBQUVoQyxZQUFZLEVBQUVDLFdBQVc7SUFDM0YsSUFBSWdDO0lBRUosSUFBTTlCLGFBQWFILGFBQWFJLFlBQVksQ0FBQ04sV0FDdkNrRCxvQkFBb0JoQixZQUFZTSxTQUFTO0lBRS9DdEMsYUFBYUssS0FBSyxDQUFDLEFBQUMsa0JBQWtEMkMsT0FBakM3QyxZQUFXLHdCQUF3QyxPQUFsQjZDLG1CQUFrQixxQkFBbUJsRDtJQUUzRyxJQUFNbUQsc0JBQXNCakIsWUFBWVEsV0FBVyxJQUM3Q0MsbUJBQW1CM0MsVUFDbkI0QyxtQkFBbUJPLHFCQUNuQkMsWUFBWWxDLCtCQUE2QixDQUFDNEIsb0JBQW9CLENBQUNILGtCQUFrQkMsa0JBQWtCMUMsY0FBYztRQUMvRyxJQUFJcUI7UUFFSixJQUFNQyxPQUFPVSxZQUFZVCxPQUFPLElBQzFCQyxPQUFPQyxhQUFJLENBQUNDLG1CQUFtQixDQUFDNUIsVUFBVXdCO1FBRWhEdkIsTUFBTTRCLElBQUksQ0FBQ0g7UUFFWEgsZ0JBQWdCcEI7UUFFaEIsSUFBSSxDQUFDb0IsZUFBZTtZQUNsQnRCLE1BQU02QixHQUFHO1FBQ1g7UUFFQSxPQUFPUDtJQUNUO0lBRU5ZLGlDQUFpQ2lCLFdBQVksR0FBRztJQUVoRCxJQUFJakIsZ0NBQWdDO1FBQ2xDakMsYUFBYVksS0FBSyxDQUFDLEFBQUMsb0JBQW9Eb0MsT0FBakM3QyxZQUFXLHdCQUF3QyxPQUFsQjZDLG1CQUFrQixtQkFBaUJsRDtJQUM3RztJQUVBLE9BQU9tQztBQUNUIn0=