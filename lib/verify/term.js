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
var _termAgainstConstructor = /*#__PURE__*/ _interop_require_default(require("../verifier/nodes/termAgainstConstructor"));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGVybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRlcm0gZnJvbSBcIi4uL3Rlcm1cIjtcbmltcG9ydCBicmFja2V0ZWRDb25zdHJ1Y3RvciBmcm9tIFwiLi4vY29uc3RydWN0b3IvYnJhY2tldGVkXCI7XG5pbXBvcnQgdGVybUFnYWluc3RDb25zdHJ1Y3Rvck5vZGVzVmVyaWZpZXIgZnJvbSBcIi4uL3ZlcmlmaWVyL25vZGVzL3Rlcm1BZ2FpbnN0Q29uc3RydWN0b3JcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybS9hcmd1bWVudC90ZXJtXCIpLFxuICAgICAgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybS92YXJpYWJsZSFcIik7XG5cbmZ1bmN0aW9uIHZlcmlmeVRlcm0odGVybU5vZGUsIHRlcm1zLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCB0ZXJtVmVyaWZpZWQ7XG5cbiAgY29uc3QgdGVybVN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcodGVybU5vZGUpO1xuXG4gIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS4uLmAsIHRlcm1Ob2RlKTtcblxuICBjb25zdCB2ZXJpZnlUZXJtRnVuY3Rpb25zID0gW1xuICAgIHZlcmlmeVRlcm1Bc1ZhcmlhYmxlLFxuICAgIHZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3JzLFxuICAgIHZlcmlmeVRlcm1BZ2FpbnN0QnJhY2tldGVkQ29uc3RydWN0b3JcbiAgXTtcblxuICB0ZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtRnVuY3Rpb25zLnNvbWUoKHZlcmlmeVRlcm1GdW5jdGlvbikgPT4ge1xuICAgIGNvbnN0IHRlcm1WZXJpZmllZCA9IHZlcmlmeVRlcm1GdW5jdGlvbih0ZXJtTm9kZSwgdGVybXMsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgaWYgKHRlcm1WZXJpZmllZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBpZiAodGVybVZlcmlmaWVkKSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0uYCwgdGVybU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1WZXJpZmllZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeVN0YW5kYWxvbmVUZXJtKHRlcm1Ob2RlLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCBzdGFuZGFsb25lVGVybVZlcmlmaWVkO1xuXG4gIGNvbnN0IHRlcm1TdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKTtcblxuICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHN0YW5kYWxvbmUgdGVybS4uLmAsIHRlcm1Ob2RlKTtcblxuICBjb25zdCB0ZXJtcyA9IFtdLFxuICAgICAgICB0ZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtKHRlcm1Ob2RlLCB0ZXJtcywgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgc3RhbmRhbG9uZVRlcm1WZXJpZmllZCA9IHRlcm1WZXJpZmllZDsgIC8vL1xuXG4gIGlmIChzdGFuZGFsb25lVGVybVZlcmlmaWVkKSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHN0YW5kYWxvbmUgdGVybS5gLCB0ZXJtTm9kZSk7XG4gIH1cblxuICByZXR1cm4gc3RhbmRhbG9uZVRlcm1WZXJpZmllZDtcbn1cblxuT2JqZWN0LmFzc2lnbih0ZXJtQWdhaW5zdENvbnN0cnVjdG9yTm9kZXNWZXJpZmllciwge1xuICB2ZXJpZnlUZXJtXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgdmVyaWZ5VGVybTtcblxuZnVuY3Rpb24gdmVyaWZ5VGVybUFzVmFyaWFibGUodGVybU5vZGUsIHRlcm1zLCBsb2NhbENvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCB0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlID0gZmFsc2U7XG5cbiAgY29uc3QgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkodGVybU5vZGUpO1xuXG4gIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyh0ZXJtTm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYXMgYSB2YXJpYWJsZS4uLmAsIHRlcm1Ob2RlKTtcblxuICAgIGNvbnN0IHZhcmlhYmxlID0gbG9jYWxDb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG5cbiAgICBpZiAodmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIGxldCB2ZXJpZmllZEFoZWFkO1xuXG4gICAgICBjb25zdCB0eXBlID0gdmFyaWFibGUuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgdGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlQW5kVHlwZSh0ZXJtTm9kZSwgdHlwZSk7XG5cbiAgICAgIHRlcm1zLnB1c2godGVybSk7XG5cbiAgICAgIHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgICBpZiAoIXZlcmlmaWVkQWhlYWQpIHtcbiAgICAgICAgdGVybXMucG9wKCk7XG4gICAgICB9XG5cbiAgICAgIHRlcm1WZXJpZmllZEFzVmFyaWFibGUgPSB2ZXJpZmllZEFoZWFkOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKHRlcm1WZXJpZmllZEFzVmFyaWFibGUpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFzIGEgdmFyaWFibGUuYCwgdGVybU5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlUZXJtQWdhaW5zdENvbnN0cnVjdG9ycyh0ZXJtTm9kZSwgdGVybXMsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvcnMgPSBmYWxzZTtcblxuICBjb25zdCB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeSh0ZXJtTm9kZSk7XG5cbiAgaWYgKHZhcmlhYmxlTm9kZSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IGNvbnN0cnVjdG9ycyA9IGxvY2FsQ29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoKTtcblxuICAgIHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnMuc29tZSgoY29uc3RydWN0b3IpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvciA9IHZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3IodGVybU5vZGUsIHRlcm1zLCBjb25zdHJ1Y3RvciwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgIGlmICh0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9ycztcbn1cblxuZnVuY3Rpb24gdmVyaWZ5VGVybUFnYWluc3RCcmFja2V0ZWRDb25zdHJ1Y3Rvcih0ZXJtTm9kZSwgdGVybXMsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHRlcm1WZXJpZmllZEFnYWluc3RCcmFja2V0ZWRDb25zdHJ1Y3RvcjtcblxuICBjb25zdCB0ZXJtU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyh0ZXJtTm9kZSksXG4gICAgICAgIGJyYWNrZXRlZENvbnN0cnVjdG9yU3RyaW5nID0gYnJhY2tldGVkQ29uc3RydWN0b3IuZ2V0U3RyaW5nKCk7XG5cbiAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFnYWluc3QgdGhlICcke2JyYWNrZXRlZENvbnN0cnVjdG9yU3RyaW5nfScgYnJhY2tldGVkIGNvbnN0cnVjdG9yLi4uYCwgdGVybU5vZGUpO1xuXG4gIGNvbnN0IGJyYWNrZXRlZENvbnN0cnVjdG9yVGVybU5vZGUgPSBicmFja2V0ZWRDb25zdHJ1Y3Rvci5nZXRUZXJtTm9kZSgpLFxuICAgICAgICBub25UZXJtaW5hbE5OZGVBID0gdGVybU5vZGUsICAvLy9cbiAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IGJyYWNrZXRlZENvbnN0cnVjdG9yVGVybU5vZGUsICAvLy9cbiAgICAgICAgbm9kZVZlcmlmaWVkID0gdGVybUFnYWluc3RDb25zdHJ1Y3Rvck5vZGVzVmVyaWZpZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTk5kZUEsIG5vblRlcm1pbmFsTm9kZUIsIGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgIGxldCB2ZXJpZmllZEFoZWFkO1xuXG4gICAgICAgICAgY29uc3QgYnJhY2tldGVkVGVybU5vZGUgPSB0ZXJtTm9kZTsgLy8vXG5cbiAgICAgICAgICB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkodGVybU5vZGUpOyAvLy9cblxuICAgICAgICAgIGlmICh0ZXJtTm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdmVyaWZpZWRBaGVhZCA9IGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgdHlwZTtcblxuICAgICAgICAgICAgdmVyaWZ5VGVybSh0ZXJtTm9kZSwgdGVybXMsIGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgICAgICBsZXQgdmVyaWZpZWRBaGVhZDtcblxuICAgICAgICAgICAgICBjb25zdCBmaXJzdFRlcm0gPSBmaXJzdCh0ZXJtcyksXG4gICAgICAgICAgICAgICAgICAgIHRlcm0gPSBmaXJzdFRlcm07IC8vL1xuXG4gICAgICAgICAgICAgIHR5cGUgPSB0ZXJtLmdldFR5cGUoKTtcblxuICAgICAgICAgICAgICB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0ZXJtcy5wb3AoKTtcblxuICAgICAgICAgICAgdGVybU5vZGUgPSBicmFja2V0ZWRUZXJtTm9kZTsgLy8vXG5cbiAgICAgICAgICAgIGNvbnN0IHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZUFuZFR5cGUodGVybU5vZGUsIHR5cGUpO1xuXG4gICAgICAgICAgICB0ZXJtcy5wdXNoKHRlcm0pO1xuXG4gICAgICAgICAgICB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgICAgICAgICAgaWYgKCF2ZXJpZmllZEFoZWFkKSB7XG4gICAgICAgICAgICAgIHRlcm1zLnBvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICB9KTtcblxuICB0ZXJtVmVyaWZpZWRBZ2FpbnN0QnJhY2tldGVkQ29uc3RydWN0b3IgPSBub2RlVmVyaWZpZWQ7ICAvLy9cblxuICBpZiAodGVybVZlcmlmaWVkQWdhaW5zdEJyYWNrZXRlZENvbnN0cnVjdG9yKSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYWdhaW5zdCB0aGUgJyR7YnJhY2tldGVkQ29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci5gLCB0ZXJtTm9kZSk7XG4gIH1cblxuICByZXR1cm4gdGVybVZlcmlmaWVkQWdhaW5zdEJyYWNrZXRlZENvbnN0cnVjdG9yO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlUZXJtQWdhaW5zdENvbnN0cnVjdG9yKHRlcm1Ob2RlLCB0ZXJtcywgY29uc3RydWN0b3IsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvcjtcblxuICBjb25zdCB0ZXJtU3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyh0ZXJtTm9kZSksXG4gICAgICAgIGNvbnN0cnVjdG9yU3RyaW5nID0gY29uc3RydWN0b3IuZ2V0U3RyaW5nKCk7XG5cbiAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFnYWluc3QgdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IuLi5gLCB0ZXJtTm9kZSk7XG5cbiAgY29uc3QgY29uc3RydWN0b3JUZXJtTm9kZSA9IGNvbnN0cnVjdG9yLmdldFRlcm1Ob2RlKCksXG4gICAgICAgIG5vblRlcm1pbmFsTk5kZUEgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gY29uc3RydWN0b3JUZXJtTm9kZSwgIC8vL1xuICAgICAgICBub2RlVmVyaWZpZWQgPSB0ZXJtQWdhaW5zdENvbnN0cnVjdG9yTm9kZXNWZXJpZmllci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOTmRlQSwgbm9uVGVybWluYWxOb2RlQiwgbG9jYWxDb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgbGV0IHZlcmlmaWVkQWhlYWQ7XG5cbiAgICAgICAgICBjb25zdCB0eXBlID0gY29uc3RydWN0b3IuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZUFuZFR5cGUodGVybU5vZGUsIHR5cGUpO1xuXG4gICAgICAgICAgdGVybXMucHVzaCh0ZXJtKTtcblxuICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgICAgICAgaWYgKCF2ZXJpZmllZEFoZWFkKSB7XG4gICAgICAgICAgICB0ZXJtcy5wb3AoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgfSk7XG5cbiAgdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9yID0gbm9kZVZlcmlmaWVkOyAgLy8vXG5cbiAgaWYgKHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3Rvcikge1xuICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFnYWluc3QgdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IuYCwgdGVybU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3Rvcjtcbn1cblxuIl0sIm5hbWVzIjpbInZlcmlmeVN0YW5kYWxvbmVUZXJtIiwidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInZhcmlhYmxlTm9kZVF1ZXJ5IiwidmVyaWZ5VGVybSIsInRlcm1Ob2RlIiwidGVybXMiLCJsb2NhbENvbnRleHQiLCJ2ZXJpZnlBaGVhZCIsInRlcm1WZXJpZmllZCIsInRlcm1TdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsInZlcmlmeVRlcm1GdW5jdGlvbnMiLCJ2ZXJpZnlUZXJtQXNWYXJpYWJsZSIsInZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3JzIiwidmVyaWZ5VGVybUFnYWluc3RCcmFja2V0ZWRDb25zdHJ1Y3RvciIsInNvbWUiLCJ2ZXJpZnlUZXJtRnVuY3Rpb24iLCJkZWJ1ZyIsInN0YW5kYWxvbmVUZXJtVmVyaWZpZWQiLCJPYmplY3QiLCJhc3NpZ24iLCJ0ZXJtQWdhaW5zdENvbnN0cnVjdG9yTm9kZXNWZXJpZmllciIsInRlcm1WZXJpZmllZEFzVmFyaWFibGUiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlIiwidmVyaWZpZWRBaGVhZCIsInR5cGUiLCJnZXRUeXBlIiwidGVybSIsIlRlcm0iLCJmcm9tVGVybU5vZGVBbmRUeXBlIiwicHVzaCIsInBvcCIsInRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvcnMiLCJjb25zdHJ1Y3RvcnMiLCJnZXRDb25zdHJ1Y3RvcnMiLCJjb25zdHJ1Y3RvciIsInRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvciIsInZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3IiLCJ0ZXJtVmVyaWZpZWRBZ2FpbnN0QnJhY2tldGVkQ29uc3RydWN0b3IiLCJicmFja2V0ZWRDb25zdHJ1Y3RvclN0cmluZyIsImJyYWNrZXRlZENvbnN0cnVjdG9yIiwiZ2V0U3RyaW5nIiwiYnJhY2tldGVkQ29uc3RydWN0b3JUZXJtTm9kZSIsImdldFRlcm1Ob2RlIiwibm9uVGVybWluYWxOTmRlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJub2RlVmVyaWZpZWQiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiLCJicmFja2V0ZWRUZXJtTm9kZSIsImZpcnN0VGVybSIsImZpcnN0IiwiY29uc3RydWN0b3JTdHJpbmciLCJjb25zdHJ1Y3RvclRlcm1Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUErREEsT0FBMEI7ZUFBMUI7O0lBdkJnQkEsb0JBQW9CO2VBQXBCQTs7OzJEQXRDQztnRUFDZ0I7NkVBQ2U7cUJBRTFCO3FCQUNJOzs7Ozs7QUFFMUIsSUFBTUMsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLHdCQUMxQkMsb0JBQW9CRCxJQUFBQSxnQkFBUyxFQUFDO0FBRXBDLFNBQVNFLFdBQVdDLFFBQVEsRUFBRUMsS0FBSyxFQUFFQyxZQUFZLEVBQUVDLFdBQVc7SUFDNUQsSUFB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