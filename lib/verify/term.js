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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGVybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcbmltcG9ydCBUZXJtIGZyb20gXCIuLi90ZXJtXCI7XG5pbXBvcnQgYnJhY2tldGVkQ29uc3RydWN0b3IgZnJvbSBcIi4uL2NvbnN0cnVjdG9yL2JyYWNrZXRlZFwiO1xuaW1wb3J0IHRlcm1BZ2FpbnN0Q29uc3RydWN0b3JVbmlmaWVyIGZyb20gXCIuLi91bmlmaWVyL3Rlcm1BZ2FpbnN0Q29uc3RydWN0b3JcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybS9hcmd1bWVudC90ZXJtXCIpLFxuICAgICAgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybS92YXJpYWJsZSFcIik7XG5cbmZ1bmN0aW9uIHZlcmlmeVRlcm0odGVybU5vZGUsIHRlcm1zLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCB0ZXJtVmVyaWZpZWQ7XG5cbiAgY29uc3QgdGVybVN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcodGVybU5vZGUpO1xuXG4gIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS4uLmAsIHRlcm1Ob2RlKTtcblxuICBjb25zdCB2ZXJpZnlUZXJtRnVuY3Rpb25zID0gW1xuICAgIHZlcmlmeVRlcm1Bc1ZhcmlhYmxlLFxuICAgIHZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3JzLFxuICAgIHZlcmlmeVRlcm1BZ2FpbnN0QnJhY2tldGVkQ29uc3RydWN0b3JcbiAgXTtcblxuICB0ZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtRnVuY3Rpb25zLnNvbWUoKHZlcmlmeVRlcm1GdW5jdGlvbikgPT4ge1xuICAgIGNvbnN0IHRlcm1WZXJpZmllZCA9IHZlcmlmeVRlcm1GdW5jdGlvbih0ZXJtTm9kZSwgdGVybXMsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgaWYgKHRlcm1WZXJpZmllZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBpZiAodGVybVZlcmlmaWVkKSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0uYCwgdGVybU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1WZXJpZmllZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeVN0YW5kYWxvbmVUZXJtKHRlcm1Ob2RlLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCBzdGFuZGFsb25lVGVybVZlcmlmaWVkO1xuXG4gIGNvbnN0IHRlcm1TdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKTtcblxuICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHN0YW5kYWxvbmUgdGVybS4uLmAsIHRlcm1Ob2RlKTtcblxuICBjb25zdCB0ZXJtcyA9IFtdLFxuICAgICAgICB0ZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtKHRlcm1Ob2RlLCB0ZXJtcywgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgc3RhbmRhbG9uZVRlcm1WZXJpZmllZCA9IHRlcm1WZXJpZmllZDsgIC8vL1xuXG4gIGlmIChzdGFuZGFsb25lVGVybVZlcmlmaWVkKSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHN0YW5kYWxvbmUgdGVybS5gLCB0ZXJtTm9kZSk7XG4gIH1cblxuICByZXR1cm4gc3RhbmRhbG9uZVRlcm1WZXJpZmllZDtcbn1cblxuT2JqZWN0LmFzc2lnbihzaGltLCB7XG4gIHZlcmlmeVRlcm1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB2ZXJpZnlUZXJtO1xuXG5mdW5jdGlvbiB2ZXJpZnlUZXJtQXNWYXJpYWJsZSh0ZXJtTm9kZSwgdGVybXMsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHRlcm1WZXJpZmllZEFzVmFyaWFibGUgPSBmYWxzZTtcblxuICBjb25zdCB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeSh0ZXJtTm9kZSk7XG5cbiAgaWYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBhcyBhIHZhcmlhYmxlLi4uYCwgdGVybU5vZGUpO1xuXG4gICAgY29uc3QgdmFyaWFibGUgPSBsb2NhbENvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICAgIGlmICh2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgbGV0IHZlcmlmaWVkQWhlYWQ7XG5cbiAgICAgIGNvbnN0IHR5cGUgPSB2YXJpYWJsZS5nZXRUeXBlKCksXG4gICAgICAgICAgICB0ZXJtID0gVGVybS5mcm9tVGVybU5vZGVBbmRUeXBlKHRlcm1Ob2RlLCB0eXBlKTtcblxuICAgICAgdGVybXMucHVzaCh0ZXJtKTtcblxuICAgICAgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICAgIGlmICghdmVyaWZpZWRBaGVhZCkge1xuICAgICAgICB0ZXJtcy5wb3AoKTtcbiAgICAgIH1cblxuICAgICAgdGVybVZlcmlmaWVkQXNWYXJpYWJsZSA9IHZlcmlmaWVkQWhlYWQ7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAodGVybVZlcmlmaWVkQXNWYXJpYWJsZSkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYXMgYSB2YXJpYWJsZS5gLCB0ZXJtTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRlcm1WZXJpZmllZEFzVmFyaWFibGU7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3JzKHRlcm1Ob2RlLCB0ZXJtcywgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9ycyA9IGZhbHNlO1xuXG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKTtcblxuICBpZiAodmFyaWFibGVOb2RlID09PSBudWxsKSB7XG4gICAgY29uc3QgY29uc3RydWN0b3JzID0gbG9jYWxDb250ZXh0LmdldENvbnN0cnVjdG9ycygpO1xuXG4gICAgdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9ycy5zb21lKChjb25zdHJ1Y3RvcikgPT4ge1xuICAgICAgY29uc3QgdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9yID0gdmVyaWZ5VGVybUFnYWluc3RDb25zdHJ1Y3Rvcih0ZXJtTm9kZSwgdGVybXMsIGNvbnN0cnVjdG9yLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgICAgaWYgKHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3Rvcikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3JzO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlUZXJtQWdhaW5zdEJyYWNrZXRlZENvbnN0cnVjdG9yKHRlcm1Ob2RlLCB0ZXJtcywgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgdGVybVZlcmlmaWVkQWdhaW5zdEJyYWNrZXRlZENvbnN0cnVjdG9yO1xuXG4gIGNvbnN0IHRlcm1TdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKSxcbiAgICAgICAgYnJhY2tldGVkQ29uc3RydWN0b3JTdHJpbmcgPSBicmFja2V0ZWRDb25zdHJ1Y3Rvci5nZXRTdHJpbmcoKTtcblxuICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYWdhaW5zdCB0aGUgJyR7YnJhY2tldGVkQ29uc3RydWN0b3JTdHJpbmd9JyBicmFja2V0ZWQgY29uc3RydWN0b3IuLi5gLCB0ZXJtTm9kZSk7XG5cbiAgY29uc3QgYnJhY2tldGVkQ29uc3RydWN0b3JUZXJtTm9kZSA9IGJyYWNrZXRlZENvbnN0cnVjdG9yLmdldFRlcm1Ob2RlKCksXG4gICAgICAgIG5vblRlcm1pbmFsTk5kZUEgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gYnJhY2tldGVkQ29uc3RydWN0b3JUZXJtTm9kZSwgIC8vL1xuICAgICAgICBub2RlVW5pZmllZCA9IHRlcm1BZ2FpbnN0Q29uc3RydWN0b3JVbmlmaWVyLnVuaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTk5kZUEsIG5vblRlcm1pbmFsTm9kZUIsIGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgIGxldCB2ZXJpZmllZEFoZWFkO1xuXG4gICAgICAgICAgY29uc3QgYnJhY2tldGVkVGVybU5vZGUgPSB0ZXJtTm9kZTsgLy8vXG5cbiAgICAgICAgICB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkodGVybU5vZGUpOyAvLy9cblxuICAgICAgICAgIGlmICh0ZXJtTm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdmVyaWZpZWRBaGVhZCA9IGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgdHlwZTtcblxuICAgICAgICAgICAgdmVyaWZ5VGVybSh0ZXJtTm9kZSwgdGVybXMsIGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgICAgICBsZXQgdmVyaWZpZWRBaGVhZDtcblxuICAgICAgICAgICAgICBjb25zdCBmaXJzdFRlcm0gPSBmaXJzdCh0ZXJtcyksXG4gICAgICAgICAgICAgICAgICAgIHRlcm0gPSBmaXJzdFRlcm07IC8vL1xuXG4gICAgICAgICAgICAgIHR5cGUgPSB0ZXJtLmdldFR5cGUoKTtcblxuICAgICAgICAgICAgICB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0ZXJtcy5wb3AoKTtcblxuICAgICAgICAgICAgdGVybU5vZGUgPSBicmFja2V0ZWRUZXJtTm9kZTsgLy8vXG5cbiAgICAgICAgICAgIGNvbnN0IHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZUFuZFR5cGUodGVybU5vZGUsIHR5cGUpO1xuXG4gICAgICAgICAgICB0ZXJtcy5wdXNoKHRlcm0pO1xuXG4gICAgICAgICAgICB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgICAgICAgICAgaWYgKCF2ZXJpZmllZEFoZWFkKSB7XG4gICAgICAgICAgICAgIHRlcm1zLnBvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICB9KTtcblxuICB0ZXJtVmVyaWZpZWRBZ2FpbnN0QnJhY2tldGVkQ29uc3RydWN0b3IgPSBub2RlVW5pZmllZDsgIC8vL1xuXG4gIGlmICh0ZXJtVmVyaWZpZWRBZ2FpbnN0QnJhY2tldGVkQ29uc3RydWN0b3IpIHtcbiAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBhZ2FpbnN0IHRoZSAnJHticmFja2V0ZWRDb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yLmAsIHRlcm1Ob2RlKTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtVmVyaWZpZWRBZ2FpbnN0QnJhY2tldGVkQ29uc3RydWN0b3I7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3IodGVybU5vZGUsIHRlcm1zLCBjb25zdHJ1Y3RvciwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9yO1xuXG4gIGNvbnN0IHRlcm1TdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKSxcbiAgICAgICAgY29uc3RydWN0b3JTdHJpbmcgPSBjb25zdHJ1Y3Rvci5nZXRTdHJpbmcoKTtcblxuICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYWdhaW5zdCB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci4uLmAsIHRlcm1Ob2RlKTtcblxuICBjb25zdCBjb25zdHJ1Y3RvclRlcm1Ob2RlID0gY29uc3RydWN0b3IuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgbm9uVGVybWluYWxOTmRlQSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBjb25zdHJ1Y3RvclRlcm1Ob2RlLCAgLy8vXG4gICAgICAgIG5vZGVVbmlmeSA9IHRlcm1BZ2FpbnN0Q29uc3RydWN0b3JVbmlmaWVyLnVuaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTk5kZUEsIG5vblRlcm1pbmFsTm9kZUIsIGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgIGxldCB2ZXJpZmllZEFoZWFkO1xuXG4gICAgICAgICAgY29uc3QgdHlwZSA9IGNvbnN0cnVjdG9yLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgICB0ZXJtID0gVGVybS5mcm9tVGVybU5vZGVBbmRUeXBlKHRlcm1Ob2RlLCB0eXBlKTtcblxuICAgICAgICAgIHRlcm1zLnB1c2godGVybSk7XG5cbiAgICAgICAgICB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgICAgICAgIGlmICghdmVyaWZpZWRBaGVhZCkge1xuICAgICAgICAgICAgdGVybXMucG9wKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgIH0pO1xuXG4gIHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvciA9IG5vZGVVbmlmeTsgIC8vL1xuXG4gIGlmICh0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3IpIHtcbiAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBhZ2FpbnN0IHRoZSAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yLmAsIHRlcm1Ob2RlKTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3I7XG59XG5cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlTdGFuZGFsb25lVGVybSIsInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ2YXJpYWJsZU5vZGVRdWVyeSIsInZlcmlmeVRlcm0iLCJ0ZXJtTm9kZSIsInRlcm1zIiwibG9jYWxDb250ZXh0IiwidmVyaWZ5QWhlYWQiLCJ0ZXJtVmVyaWZpZWQiLCJ0ZXJtU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJ2ZXJpZnlUZXJtRnVuY3Rpb25zIiwidmVyaWZ5VGVybUFzVmFyaWFibGUiLCJ2ZXJpZnlUZXJtQWdhaW5zdENvbnN0cnVjdG9ycyIsInZlcmlmeVRlcm1BZ2FpbnN0QnJhY2tldGVkQ29uc3RydWN0b3IiLCJzb21lIiwidmVyaWZ5VGVybUZ1bmN0aW9uIiwiZGVidWciLCJzdGFuZGFsb25lVGVybVZlcmlmaWVkIiwiT2JqZWN0IiwiYXNzaWduIiwic2hpbSIsInRlcm1WZXJpZmllZEFzVmFyaWFibGUiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlIiwidmVyaWZpZWRBaGVhZCIsInR5cGUiLCJnZXRUeXBlIiwidGVybSIsIlRlcm0iLCJmcm9tVGVybU5vZGVBbmRUeXBlIiwicHVzaCIsInBvcCIsInRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvcnMiLCJjb25zdHJ1Y3RvcnMiLCJnZXRDb25zdHJ1Y3RvcnMiLCJjb25zdHJ1Y3RvciIsInRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvciIsInZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3IiLCJ0ZXJtVmVyaWZpZWRBZ2FpbnN0QnJhY2tldGVkQ29uc3RydWN0b3IiLCJicmFja2V0ZWRDb25zdHJ1Y3RvclN0cmluZyIsImJyYWNrZXRlZENvbnN0cnVjdG9yIiwiZ2V0U3RyaW5nIiwiYnJhY2tldGVkQ29uc3RydWN0b3JUZXJtTm9kZSIsImdldFRlcm1Ob2RlIiwibm9uVGVybWluYWxOTmRlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJub2RlVW5pZmllZCIsInRlcm1BZ2FpbnN0Q29uc3RydWN0b3JVbmlmaWVyIiwidW5pZnlOb25UZXJtaW5hbE5vZGUiLCJicmFja2V0ZWRUZXJtTm9kZSIsImZpcnN0VGVybSIsImZpcnN0IiwiY29uc3RydWN0b3JTdHJpbmciLCJjb25zdHJ1Y3RvclRlcm1Ob2RlIiwibm9kZVVuaWZ5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFnRUEsT0FBMEI7ZUFBMUI7O0lBdkJnQkEsb0JBQW9CO2VBQXBCQTs7OzJEQXZDQzsyREFDQTtnRUFDZ0I7NkVBQ1M7cUJBRXBCO3FCQUNJOzs7Ozs7QUFFMUIsSUFBTUMsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLHdCQUMxQkMsb0JBQW9CRCxJQUFBQSxnQkFBUyxFQUFDO0FBRXBDLFNBQVNFLFdBQVdDLFFBQVEsRUFBRUMsS0FBSyxFQUFFQyxZQUFZLEVBQUVDLFdBQVc7SUFDNUQsSUFBSUM7SUFFSixJQUFNQyxhQUFh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