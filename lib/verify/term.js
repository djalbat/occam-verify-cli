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
var _term1 = /*#__PURE__*/ _interop_require_default(require("../verifier/nodes/term"));
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
function verifyStandaloneTerm(termNode, fileContext, verifyAhead) {
    var standaloneTermVerified;
    var termString = fileContext.nodeAsString(termNode);
    fileContext.trace("Verifying the '".concat(termString, "' standalone term..."), termNode);
    var terms = [], context = fileContext, termVerified = verifyTerm(termNode, terms, context, verifyAhead);
    standaloneTermVerified = termVerified; ///
    if (standaloneTermVerified) {
        fileContext.debug("...verified the '".concat(termString, "' standalone term."), termNode);
    }
    return standaloneTermVerified;
}
Object.assign(_term1.default, {
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
    var constructorTermNode = constructor.getTermNode(), nonTerminalNNdeA = termNode, nonTerminalNodeB = constructorTermNode, nodeVerified = _term1.default.verifyNonTerminalNode(nonTerminalNNdeA, nonTerminalNodeB, context, function() {
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
    var bracketedConstructorTermNode = _bracketed.default.getTermNode(), nonTerminalNNdeA = termNode, nonTerminalNodeB = bracketedConstructorTermNode, nodeVerified = _term1.default.verifyNonTerminalNode(nonTerminalNNdeA, nonTerminalNodeB, context, function() {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGVybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRlcm0gZnJvbSBcIi4uL3Rlcm1cIjtcbmltcG9ydCB0ZXJtTm9kZXNWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXIvbm9kZXMvdGVybVwiO1xuaW1wb3J0IHZlcmlmeUdpdmVuVmFyaWFibGUgZnJvbSBcIi4uL3ZlcmlmeS9naXZlblZhcmlhYmxlXCI7XG5pbXBvcnQgYnJhY2tldGVkQ29uc3RydWN0b3IgZnJvbSBcIi4uL2NvbnN0cnVjdG9yL2JyYWNrZXRlZFwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL2FyZ3VtZW50L3Rlcm1cIiksXG4gICAgICB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlIVwiKTtcblxuZnVuY3Rpb24gdmVyaWZ5VGVybSh0ZXJtTm9kZSwgdGVybXMsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCB0ZXJtVmVyaWZpZWQ7XG5cbiAgY29uc3QgdGVybVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKTtcblxuICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLi4uYCwgdGVybU5vZGUpO1xuXG4gIGNvbnN0IHZlcmlmeVRlcm1GdW5jdGlvbnMgPSBbXG4gICAgdmVyaWZ5VGVybUFzVmFyaWFibGUsXG4gICAgdmVyaWZ5VGVybUFnYWluc3RDb25zdHJ1Y3RvcnMsXG4gICAgdmVyaWZ5VGVybUFnYWluc3RCcmFja2V0ZWRDb25zdHJ1Y3RvclxuICBdO1xuXG4gIHRlcm1WZXJpZmllZCA9IHZlcmlmeVRlcm1GdW5jdGlvbnMuc29tZSgodmVyaWZ5VGVybUZ1bmN0aW9uKSA9PiB7XG4gICAgY29uc3QgdGVybVZlcmlmaWVkID0gdmVyaWZ5VGVybUZ1bmN0aW9uKHRlcm1Ob2RlLCB0ZXJtcywgY29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgaWYgKHRlcm1WZXJpZmllZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBpZiAodGVybVZlcmlmaWVkKSB7XG4gICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLmAsIHRlcm1Ob2RlKTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtVmVyaWZpZWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlTdGFuZGFsb25lVGVybSh0ZXJtTm9kZSwgZmlsZUNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCBzdGFuZGFsb25lVGVybVZlcmlmaWVkO1xuXG4gIGNvbnN0IHRlcm1TdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcodGVybU5vZGUpO1xuXG4gIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyBzdGFuZGFsb25lIHRlcm0uLi5gLCB0ZXJtTm9kZSk7XG5cbiAgY29uc3QgdGVybXMgPSBbXSxcbiAgICAgICAgY29udGV4dCA9IGZpbGVDb250ZXh0LCAgLy8vXG4gICAgICAgIHRlcm1WZXJpZmllZCA9IHZlcmlmeVRlcm0odGVybU5vZGUsIHRlcm1zLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgc3RhbmRhbG9uZVRlcm1WZXJpZmllZCA9IHRlcm1WZXJpZmllZDsgIC8vL1xuXG4gIGlmIChzdGFuZGFsb25lVGVybVZlcmlmaWVkKSB7XG4gICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgc3RhbmRhbG9uZSB0ZXJtLmAsIHRlcm1Ob2RlKTtcbiAgfVxuXG4gIHJldHVybiBzdGFuZGFsb25lVGVybVZlcmlmaWVkO1xufVxuXG5PYmplY3QuYXNzaWduKHRlcm1Ob2Rlc1ZlcmlmaWVyLCB7XG4gIHZlcmlmeVRlcm1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB2ZXJpZnlUZXJtO1xuXG5mdW5jdGlvbiB2ZXJpZnlUZXJtQXNWYXJpYWJsZSh0ZXJtTm9kZSwgdGVybXMsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCB0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlID0gZmFsc2U7XG5cbiAgY29uc3QgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkodGVybU5vZGUpO1xuXG4gIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcodGVybU5vZGUpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBhcyBhIHZhcmlhYmxlLi4uYCwgdGVybU5vZGUpO1xuXG4gICAgY29uc3QgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgZ2l2ZW5WYXJpYWJsZVZlcmlmaWVkID0gdmVyaWZ5R2l2ZW5WYXJpYWJsZSh2YXJpYWJsZU5vZGUsIHZhcmlhYmxlcywgY29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHZlcmlmaWVkQWhlYWQ7XG5cbiAgICAgICAgICAgIGNvbnN0IGZpcnN0VmFyaWFibGUgPSBmaXJzdCh2YXJpYWJsZXMpLFxuICAgICAgICAgICAgICAgICAgdmFyaWFibGUgPSBmaXJzdFZhcmlhYmxlLCAvLy9cbiAgICAgICAgICAgICAgICAgIHR5cGUgPSB2YXJpYWJsZS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgICB0ZXJtID0gVGVybS5mcm9tVGVybU5vZGVBbmRUeXBlKHRlcm1Ob2RlLCB0eXBlKTtcblxuICAgICAgICAgICAgdGVybXMucHVzaCh0ZXJtKTtcblxuICAgICAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICAgICAgICAgIGlmICghdmVyaWZpZWRBaGVhZCkge1xuICAgICAgICAgICAgICB0ZXJtcy5wb3AoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgICAgfSk7XG5cbiAgICB0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlID0gZ2l2ZW5WYXJpYWJsZVZlcmlmaWVkOyAgLy8vXG5cbiAgICBpZiAodGVybVZlcmlmaWVkQXNWYXJpYWJsZSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFzIGEgdmFyaWFibGUuYCwgdGVybU5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlUZXJtQWdhaW5zdENvbnN0cnVjdG9yKHRlcm1Ob2RlLCB0ZXJtcywgY29uc3RydWN0b3IsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCB0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3I7XG5cbiAgY29uc3QgdGVybVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKSxcbiAgICAgICAgY29uc3RydWN0b3JTdHJpbmcgPSBjb25zdHJ1Y3Rvci5nZXRTdHJpbmcoKTtcblxuICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFnYWluc3QgdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IuLi5gLCB0ZXJtTm9kZSk7XG5cbiAgY29uc3QgY29uc3RydWN0b3JUZXJtTm9kZSA9IGNvbnN0cnVjdG9yLmdldFRlcm1Ob2RlKCksXG4gICAgICAgIG5vblRlcm1pbmFsTk5kZUEgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gY29uc3RydWN0b3JUZXJtTm9kZSwgIC8vL1xuICAgICAgICBub2RlVmVyaWZpZWQgPSB0ZXJtTm9kZXNWZXJpZmllci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOTmRlQSwgbm9uVGVybWluYWxOb2RlQiwgY29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgIGxldCB2ZXJpZmllZEFoZWFkO1xuXG4gICAgICAgICAgY29uc3QgdHlwZSA9IGNvbnN0cnVjdG9yLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgICB0ZXJtID0gVGVybS5mcm9tVGVybU5vZGVBbmRUeXBlKHRlcm1Ob2RlLCB0eXBlKTtcblxuICAgICAgICAgIHRlcm1zLnB1c2godGVybSk7XG5cbiAgICAgICAgICB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgICAgICAgIGlmICghdmVyaWZpZWRBaGVhZCkge1xuICAgICAgICAgICAgdGVybXMucG9wKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgIH0pO1xuXG4gIHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvciA9IG5vZGVWZXJpZmllZDsgIC8vL1xuXG4gIGlmICh0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3IpIHtcbiAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYWdhaW5zdCB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci5gLCB0ZXJtTm9kZSk7XG4gIH1cblxuICByZXR1cm4gdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9yO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlUZXJtQWdhaW5zdENvbnN0cnVjdG9ycyh0ZXJtTm9kZSwgdGVybXMsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCB0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3JzID0gZmFsc2U7XG5cbiAgY29uc3QgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkodGVybU5vZGUpO1xuXG4gIGlmICh2YXJpYWJsZU5vZGUgPT09IG51bGwpIHtcbiAgICBjb25zdCBjb25zdHJ1Y3RvcnMgPSBjb250ZXh0LmdldENvbnN0cnVjdG9ycygpO1xuXG4gICAgdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9ycy5zb21lKChjb25zdHJ1Y3RvcikgPT4ge1xuICAgICAgY29uc3QgdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9yID0gdmVyaWZ5VGVybUFnYWluc3RDb25zdHJ1Y3Rvcih0ZXJtTm9kZSwgdGVybXMsIGNvbnN0cnVjdG9yLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICAgIGlmICh0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9ycztcbn1cblxuZnVuY3Rpb24gdmVyaWZ5VGVybUFnYWluc3RCcmFja2V0ZWRDb25zdHJ1Y3Rvcih0ZXJtTm9kZSwgdGVybXMsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCB0ZXJtVmVyaWZpZWRBZ2FpbnN0QnJhY2tldGVkQ29uc3RydWN0b3I7XG5cbiAgY29uc3QgdGVybVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKSxcbiAgICAgICAgYnJhY2tldGVkQ29uc3RydWN0b3JTdHJpbmcgPSBicmFja2V0ZWRDb25zdHJ1Y3Rvci5nZXRTdHJpbmcoKTtcblxuICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFnYWluc3QgdGhlICcke2JyYWNrZXRlZENvbnN0cnVjdG9yU3RyaW5nfScgYnJhY2tldGVkIGNvbnN0cnVjdG9yLi4uYCwgdGVybU5vZGUpO1xuXG4gIGNvbnN0IGJyYWNrZXRlZENvbnN0cnVjdG9yVGVybU5vZGUgPSBicmFja2V0ZWRDb25zdHJ1Y3Rvci5nZXRUZXJtTm9kZSgpLFxuICAgICAgICBub25UZXJtaW5hbE5OZGVBID0gdGVybU5vZGUsICAvLy9cbiAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IGJyYWNrZXRlZENvbnN0cnVjdG9yVGVybU5vZGUsICAvLy9cbiAgICAgICAgbm9kZVZlcmlmaWVkID0gdGVybU5vZGVzVmVyaWZpZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTk5kZUEsIG5vblRlcm1pbmFsTm9kZUIsIGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgICBsZXQgdmVyaWZpZWRBaGVhZDtcblxuICAgICAgICAgIGNvbnN0IGJyYWNrZXRlZFRlcm1Ob2RlID0gdGVybU5vZGU7IC8vL1xuXG4gICAgICAgICAgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KHRlcm1Ob2RlKTsgLy8vXG5cbiAgICAgICAgICBpZiAodGVybU5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSBmYWxzZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHR5cGU7XG5cbiAgICAgICAgICAgIHZlcmlmeVRlcm0odGVybU5vZGUsIHRlcm1zLCBjb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgICAgIGxldCB2ZXJpZmllZEFoZWFkO1xuXG4gICAgICAgICAgICAgIGNvbnN0IGZpcnN0VGVybSA9IGZpcnN0KHRlcm1zKSxcbiAgICAgICAgICAgICAgICAgICAgdGVybSA9IGZpcnN0VGVybTsgLy8vXG5cbiAgICAgICAgICAgICAgdHlwZSA9IHRlcm0uZ2V0VHlwZSgpO1xuXG4gICAgICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRlcm1zLnBvcCgpO1xuXG4gICAgICAgICAgICB0ZXJtTm9kZSA9IGJyYWNrZXRlZFRlcm1Ob2RlOyAvLy9cblxuICAgICAgICAgICAgY29uc3QgdGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlQW5kVHlwZSh0ZXJtTm9kZSwgdHlwZSk7XG5cbiAgICAgICAgICAgIHRlcm1zLnB1c2godGVybSk7XG5cbiAgICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgICAgICAgICBpZiAoIXZlcmlmaWVkQWhlYWQpIHtcbiAgICAgICAgICAgICAgdGVybXMucG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgIH0pO1xuXG4gIHRlcm1WZXJpZmllZEFnYWluc3RCcmFja2V0ZWRDb25zdHJ1Y3RvciA9IG5vZGVWZXJpZmllZDsgIC8vL1xuXG4gIGlmICh0ZXJtVmVyaWZpZWRBZ2FpbnN0QnJhY2tldGVkQ29uc3RydWN0b3IpIHtcbiAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYWdhaW5zdCB0aGUgJyR7YnJhY2tldGVkQ29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci5gLCB0ZXJtTm9kZSk7XG4gIH1cblxuICByZXR1cm4gdGVybVZlcmlmaWVkQWdhaW5zdEJyYWNrZXRlZENvbnN0cnVjdG9yO1xufVxuXG4iXSwibmFtZXMiOlsidmVyaWZ5U3RhbmRhbG9uZVRlcm0iLCJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidmFyaWFibGVOb2RlUXVlcnkiLCJ2ZXJpZnlUZXJtIiwidGVybU5vZGUiLCJ0ZXJtcyIsImNvbnRleHQiLCJ2ZXJpZnlBaGVhZCIsInRlcm1WZXJpZmllZCIsInRlcm1TdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsInZlcmlmeVRlcm1GdW5jdGlvbnMiLCJ2ZXJpZnlUZXJtQXNWYXJpYWJsZSIsInZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3JzIiwidmVyaWZ5VGVybUFnYWluc3RCcmFja2V0ZWRDb25zdHJ1Y3RvciIsInNvbWUiLCJ2ZXJpZnlUZXJtRnVuY3Rpb24iLCJkZWJ1ZyIsImZpbGVDb250ZXh0Iiwic3RhbmRhbG9uZVRlcm1WZXJpZmllZCIsIk9iamVjdCIsImFzc2lnbiIsInRlcm1Ob2Rlc1ZlcmlmaWVyIiwidGVybVZlcmlmaWVkQXNWYXJpYWJsZSIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlcyIsImdpdmVuVmFyaWFibGVWZXJpZmllZCIsInZlcmlmeUdpdmVuVmFyaWFibGUiLCJ2ZXJpZmllZEFoZWFkIiwiZmlyc3RWYXJpYWJsZSIsImZpcnN0IiwidmFyaWFibGUiLCJ0eXBlIiwiZ2V0VHlwZSIsInRlcm0iLCJUZXJtIiwiZnJvbVRlcm1Ob2RlQW5kVHlwZSIsInB1c2giLCJwb3AiLCJ2ZXJpZnlUZXJtQWdhaW5zdENvbnN0cnVjdG9yIiwiY29uc3RydWN0b3IiLCJ0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3IiLCJjb25zdHJ1Y3RvclN0cmluZyIsImdldFN0cmluZyIsImNvbnN0cnVjdG9yVGVybU5vZGUiLCJnZXRUZXJtTm9kZSIsIm5vblRlcm1pbmFsTk5kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwibm9kZVZlcmlmaWVkIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwidGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9ycyIsImNvbnN0cnVjdG9ycyIsImdldENvbnN0cnVjdG9ycyIsInRlcm1WZXJpZmllZEFnYWluc3RCcmFja2V0ZWRDb25zdHJ1Y3RvciIsImJyYWNrZXRlZENvbnN0cnVjdG9yU3RyaW5nIiwiYnJhY2tldGVkQ29uc3RydWN0b3IiLCJicmFja2V0ZWRDb25zdHJ1Y3RvclRlcm1Ob2RlIiwiYnJhY2tldGVkVGVybU5vZGUiLCJmaXJzdFRlcm0iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQWlFQSxPQUEwQjtlQUExQjs7SUF4QmdCQSxvQkFBb0I7ZUFBcEJBOzs7MkRBdkNDOzREQUNhO29FQUNFO2dFQUNDO3FCQUVYO3FCQUNJ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