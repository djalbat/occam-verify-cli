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
var _array = require("../utilities/array");
var _query = require("../utilities/query");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var variableNodeQuery = (0, _query.nodeQuery)("/term/variable!");
function verifyTerm(termNode, terms, context, verifyAhead) {
    var termVerified;
    var termString = context.nodeAsString(termNode);
    context.trace("Verifying the '".concat(termString, "' term..."), termNode);
    var verifyTermFunctions = [
        verifyTermAsVariable,
        verifyTermAgainstConstructors
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGVybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRlcm0gZnJvbSBcIi4uL3Rlcm1cIjtcbmltcG9ydCB0ZXJtTm9kZXNWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXIvbm9kZXMvdGVybVwiO1xuaW1wb3J0IHZlcmlmeUdpdmVuVmFyaWFibGUgZnJvbSBcIi4uL3ZlcmlmeS9naXZlblZhcmlhYmxlXCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlIVwiKTtcblxuZnVuY3Rpb24gdmVyaWZ5VGVybSh0ZXJtTm9kZSwgdGVybXMsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCB0ZXJtVmVyaWZpZWQ7XG5cbiAgY29uc3QgdGVybVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKTtcblxuICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLi4uYCwgdGVybU5vZGUpO1xuXG4gIGNvbnN0IHZlcmlmeVRlcm1GdW5jdGlvbnMgPSBbXG4gICAgdmVyaWZ5VGVybUFzVmFyaWFibGUsXG4gICAgdmVyaWZ5VGVybUFnYWluc3RDb25zdHJ1Y3RvcnNcbiAgXTtcblxuICB0ZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtRnVuY3Rpb25zLnNvbWUoKHZlcmlmeVRlcm1GdW5jdGlvbikgPT4ge1xuICAgIGNvbnN0IHRlcm1WZXJpZmllZCA9IHZlcmlmeVRlcm1GdW5jdGlvbih0ZXJtTm9kZSwgdGVybXMsIGNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgIGlmICh0ZXJtVmVyaWZpZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKHRlcm1WZXJpZmllZCkge1xuICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS5gLCB0ZXJtTm9kZSk7XG4gIH1cblxuICByZXR1cm4gdGVybVZlcmlmaWVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5U3RhbmRhbG9uZVRlcm0odGVybU5vZGUsIGZpbGVDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgc3RhbmRhbG9uZVRlcm1WZXJpZmllZDtcblxuICBjb25zdCB0ZXJtU3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKTtcblxuICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgc3RhbmRhbG9uZSB0ZXJtLi4uYCwgdGVybU5vZGUpO1xuXG4gIGNvbnN0IHRlcm1zID0gW10sXG4gICAgICAgIGNvbnRleHQgPSBmaWxlQ29udGV4dCwgIC8vL1xuICAgICAgICB0ZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtKHRlcm1Ob2RlLCB0ZXJtcywgY29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gIHN0YW5kYWxvbmVUZXJtVmVyaWZpZWQgPSB0ZXJtVmVyaWZpZWQ7ICAvLy9cblxuICBpZiAoc3RhbmRhbG9uZVRlcm1WZXJpZmllZCkge1xuICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHN0YW5kYWxvbmUgdGVybS5gLCB0ZXJtTm9kZSk7XG4gIH1cblxuICByZXR1cm4gc3RhbmRhbG9uZVRlcm1WZXJpZmllZDtcbn1cblxuT2JqZWN0LmFzc2lnbih0ZXJtTm9kZXNWZXJpZmllciwge1xuICB2ZXJpZnlUZXJtXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgdmVyaWZ5VGVybTtcblxuZnVuY3Rpb24gdmVyaWZ5VGVybUFzVmFyaWFibGUodGVybU5vZGUsIHRlcm1zLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgdGVybVZlcmlmaWVkQXNWYXJpYWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKTtcblxuICBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgdGVybVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYXMgYSB2YXJpYWJsZS4uLmAsIHRlcm1Ob2RlKTtcblxuICAgIGNvbnN0IHZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIGdpdmVuVmFyaWFibGVWZXJpZmllZCA9IHZlcmlmeUdpdmVuVmFyaWFibGUodmFyaWFibGVOb2RlLCB2YXJpYWJsZXMsIGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgICAgIGxldCB2ZXJpZmllZEFoZWFkO1xuXG4gICAgICAgICAgICBjb25zdCBmaXJzdFZhcmlhYmxlID0gZmlyc3QodmFyaWFibGVzKSxcbiAgICAgICAgICAgICAgICAgIHZhcmlhYmxlID0gZmlyc3RWYXJpYWJsZSwgLy8vXG4gICAgICAgICAgICAgICAgICB0eXBlID0gdmFyaWFibGUuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgICAgdGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlQW5kVHlwZSh0ZXJtTm9kZSwgdHlwZSk7XG5cbiAgICAgICAgICAgIHRlcm1zLnB1c2godGVybSk7XG5cbiAgICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgICAgICAgICBpZiAoIXZlcmlmaWVkQWhlYWQpIHtcbiAgICAgICAgICAgICAgdGVybXMucG9wKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgIH0pO1xuXG4gICAgdGVybVZlcmlmaWVkQXNWYXJpYWJsZSA9IGdpdmVuVmFyaWFibGVWZXJpZmllZDsgIC8vL1xuXG4gICAgaWYgKHRlcm1WZXJpZmllZEFzVmFyaWFibGUpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBhcyBhIHZhcmlhYmxlLmAsIHRlcm1Ob2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGVybVZlcmlmaWVkQXNWYXJpYWJsZTtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5VGVybUFnYWluc3RDb25zdHJ1Y3RvcnModGVybU5vZGUsIHRlcm1zLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9ycyA9IGZhbHNlO1xuXG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKTtcblxuICBpZiAodmFyaWFibGVOb2RlID09PSBudWxsKSB7XG4gICAgY29uc3QgY29uc3RydWN0b3JzID0gY29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoKTtcblxuICAgIHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnMuc29tZSgoY29uc3RydWN0b3IpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvciA9IHZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3IodGVybU5vZGUsIHRlcm1zLCBjb25zdHJ1Y3RvciwgY29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgICBpZiAodGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9yKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvcnM7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3IodGVybU5vZGUsIHRlcm1zLCBjb25zdHJ1Y3RvciwgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvcjtcblxuICBjb25zdCB0ZXJtU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcodGVybU5vZGUpLFxuICAgICAgICBjb25zdHJ1Y3RvclN0cmluZyA9IGNvbnN0cnVjdG9yLmdldFN0cmluZygpO1xuXG4gIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYWdhaW5zdCB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci4uLmAsIHRlcm1Ob2RlKTtcblxuICBjb25zdCBjb25zdHJ1Y3RvclRlcm1Ob2RlID0gY29uc3RydWN0b3IuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgbm9uVGVybWluYWxOTmRlQSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBjb25zdHJ1Y3RvclRlcm1Ob2RlLCAgLy8vXG4gICAgICAgIG5vZGVWZXJpZmllZCA9IHRlcm1Ob2Rlc1ZlcmlmaWVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5OZGVBLCBub25UZXJtaW5hbE5vZGVCLCBjb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgbGV0IHZlcmlmaWVkQWhlYWQ7XG5cbiAgICAgICAgICBjb25zdCB0eXBlID0gY29uc3RydWN0b3IuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZUFuZFR5cGUodGVybU5vZGUsIHR5cGUpO1xuXG4gICAgICAgICAgdGVybXMucHVzaCh0ZXJtKTtcblxuICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgICAgICAgaWYgKCF2ZXJpZmllZEFoZWFkKSB7XG4gICAgICAgICAgICB0ZXJtcy5wb3AoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgfSk7XG5cbiAgdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9yID0gbm9kZVZlcmlmaWVkOyAgLy8vXG5cbiAgaWYgKHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3Rvcikge1xuICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBhZ2FpbnN0IHRoZSAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yLmAsIHRlcm1Ob2RlKTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3I7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5U3RhbmRhbG9uZVRlcm0iLCJ2YXJpYWJsZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInZlcmlmeVRlcm0iLCJ0ZXJtTm9kZSIsInRlcm1zIiwiY29udGV4dCIsInZlcmlmeUFoZWFkIiwidGVybVZlcmlmaWVkIiwidGVybVN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwidmVyaWZ5VGVybUZ1bmN0aW9ucyIsInZlcmlmeVRlcm1Bc1ZhcmlhYmxlIiwidmVyaWZ5VGVybUFnYWluc3RDb25zdHJ1Y3RvcnMiLCJzb21lIiwidmVyaWZ5VGVybUZ1bmN0aW9uIiwiZGVidWciLCJmaWxlQ29udGV4dCIsInN0YW5kYWxvbmVUZXJtVmVyaWZpZWQiLCJPYmplY3QiLCJhc3NpZ24iLCJ0ZXJtTm9kZXNWZXJpZmllciIsInRlcm1WZXJpZmllZEFzVmFyaWFibGUiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZXMiLCJnaXZlblZhcmlhYmxlVmVyaWZpZWQiLCJ2ZXJpZnlHaXZlblZhcmlhYmxlIiwidmVyaWZpZWRBaGVhZCIsImZpcnN0VmFyaWFibGUiLCJmaXJzdCIsInZhcmlhYmxlIiwidHlwZSIsImdldFR5cGUiLCJ0ZXJtIiwiVGVybSIsImZyb21UZXJtTm9kZUFuZFR5cGUiLCJwdXNoIiwicG9wIiwidGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9ycyIsImNvbnN0cnVjdG9ycyIsImdldENvbnN0cnVjdG9ycyIsImNvbnN0cnVjdG9yIiwidGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9yIiwidmVyaWZ5VGVybUFnYWluc3RDb25zdHJ1Y3RvciIsImNvbnN0cnVjdG9yU3RyaW5nIiwiZ2V0U3RyaW5nIiwiY29uc3RydWN0b3JUZXJtTm9kZSIsImdldFRlcm1Ob2RlIiwibm9uVGVybWluYWxOTmRlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJub2RlVmVyaWZpZWQiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQThEQSxPQUEwQjtlQUExQjs7SUF4QmdCQSxvQkFBb0I7ZUFBcEJBOzs7MkRBcENDOzREQUNhO29FQUNFO3FCQUVWO3FCQUNJOzs7Ozs7QUFFMUIsSUFBTUMsb0JBQW9CQyxJQUFBQSxnQkFBUyxFQUFDO0FBRXBDLFNBQVNDLFdBQVdDLFFBQVEsRUFBRUMsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLFdBQVc7SUFDdkQsSUFBSUM7SUFFSixJQUFNQyxhQUFhSCxRQUFRSSxZQUFZLENBQUNOO0lBRXhDRSxRQUFRSyxLQUFLLENBQUMsQUFBQyxrQkFBNEIsT0FBWEYsWUFBVyxjQUFZTDtJQUV2RCxJQUFNUSxzQkFBc0I7UUFDMUJDO1FBQ0FDO0tBQ0Q7SUFFRE4sZUFBZUksb0JBQW9CRyxJQUFJLENBQUMsU0FBQ0M7UUFDdkMsSUFBTVIsZUFBZVEsbUJBQW1CWixVQUFVQyxPQUFPQyxTQUFTQztRQUVsRSxJQUFJQyxjQUFjO1lBQ2hCLE9BQU87UUFDVDtJQUNGO0lBRUEsSUFBSUEsY0FBYztRQUNoQkYsUUFBUVcsS0FBSyxDQUFDLEFBQUMsb0JBQThCLE9BQVhSLFlBQVcsWUFBVUw7SUFDekQ7SUFFQSxPQUFPSTtBQUNUO0FBRU8sU0FBU1IscUJBQXFCSSxRQUFRLEVBQUVjLFdBQVcsRUFBRVgsV0FBVztJQUNyRSxJQUFJWTtJQUVKLElBQU1WLGFBQWFTLFlBQVlSLFlBQVksQ0FBQ047SUFFNUNj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