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
    verifyTermAgainstConstructors: function() {
        return verifyTermAgainstConstructors;
    },
    verifyTermAsVariable: function() {
        return verifyTermAsVariable;
    }
});
var _term = /*#__PURE__*/ _interop_require_default(require("../verifier/nodes/term"));
var _array = require("../utilities/array");
var _query = require("../utilities/query");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var variableNodeQuery = (0, _query.nodeQuery)("/term/variable!");
function verifyTerm(termNode, types, context, verifyAhead) {
    var termVerified;
    var termString = context.nodeAsString(termNode);
    context.trace("Verifying the '".concat(termString, "' term..."), termNode);
    var verifyTermFunctions = [
        verifyTermAsStandaloneVariable,
        verifyTermAgainstConstructors
    ];
    termVerified = verifyTermFunctions.some(function(verifyTermFunction) {
        var termVerified = verifyTermFunction(termNode, types, context, verifyAhead);
        if (termVerified) {
            return true;
        }
    });
    if (termVerified) {
        context.debug("...verified the '".concat(termString, "' term."), termNode);
    }
    return termVerified;
}
Object.assign(_term.default, {
    verifyTerm: verifyTerm
});
var _default = verifyTerm;
function verifyTermAgainstConstructors(termNode, types, context, verifyAhead) {
    var termVerifiedAgainstConstructors;
    var constructors = context.getConstructors();
    termVerifiedAgainstConstructors = constructors.some(function(constructor) {
        var termVerifiedAgainstConstructor = verifyTermAgainstConstructor(termNode, types, constructor, context, verifyAhead);
        if (termVerifiedAgainstConstructor) {
            return true;
        }
    });
    return termVerifiedAgainstConstructors;
}
function verifyTermAsVariable(termNode, variables, context, verifyAhead) {
    var termVerifiedAsVariable = false;
    var termString = context.nodeAsString(termNode);
    context.trace("Verifying the '".concat(termString, "' term as a variable..."), termNode);
    var variableNode = variableNodeQuery(termNode);
    if (variableNode !== null) {
        var variableName = (0, _query.variableNameFromVariableNode)(variableNode), variablePresent = context.isVariablePresentByVariableName(variableName);
        if (variablePresent) {
            var verifiedAhead;
            var variable = context.findVariableByVariableName(variableName);
            variables.push(variable);
            verifiedAhead = verifyAhead();
            if (!verifiedAhead) {
                variables.pop();
            }
            termVerifiedAsVariable = verifiedAhead; ///
        }
    }
    if (termVerifiedAsVariable) {
        context.debug("...verified the '".concat(termString, "' term as a variable."), termNode);
    }
    return termVerifiedAsVariable;
}
function verifyTermAgainstConstructor(termNode, types, constructor, context, verifyAhead) {
    var termVerifiedAgainstConstructor;
    var termString = context.nodeAsString(termNode), constructorString = constructor.getString();
    context.trace("Verifying the '".concat(termString, "' term against the '").concat(constructorString, "' constructor..."), termNode);
    var constructorTermNode = constructor.getTermNode(), nonTerminalNNdeA = termNode, nonTerminalNodeB = constructorTermNode, nodeVerified = _term.default.verifyNonTerminalNode(nonTerminalNNdeA, nonTerminalNodeB, context, function() {
        var verifiedAhead;
        var type = constructor.getType();
        types.push(type);
        verifiedAhead = verifyAhead();
        if (!verifiedAhead) {
            types.pop();
        }
        return verifiedAhead;
    });
    termVerifiedAgainstConstructor = nodeVerified; ///
    if (termVerifiedAgainstConstructor) {
        context.debug("...verified the '".concat(termString, "' term against the '").concat(constructorString, "' constructor."), termNode);
    }
    return termVerifiedAgainstConstructor;
}
function verifyTermAsStandaloneVariable(termNode, types, context, verifyAhead) {
    var termVerifiedAsStandaloneVariable;
    var termString = context.nodeAsString(termNode);
    context.trace("Verifying the '".concat(termString, "' term as a standalone variable..."), termNode);
    var variables = [], termVerifiedAsVariable = verifyTermAsVariable(termNode, variables, context, function() {
        var verifiedAhead;
        var firstVariable = (0, _array.first)(variables), variable = firstVariable, type = variable.getType();
        types.push(type);
        verifiedAhead = verifyAhead();
        if (!verifiedAhead) {
            types.pop();
        }
        return verifiedAhead;
    });
    termVerifiedAsStandaloneVariable = termVerifiedAsVariable; ///
    if (termVerifiedAsStandaloneVariable) {
        context.debug("...verified the '".concat(termString, "' term as a standalone variable."), termNode);
    }
    return termVerifiedAsStandaloneVariable;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGVybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHRlcm1Ob2Rlc1ZlcmlmaWVyIGZyb20gXCIuLi92ZXJpZmllci9ub2Rlcy90ZXJtXCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlIVwiKTtcblxuZnVuY3Rpb24gdmVyaWZ5VGVybSh0ZXJtTm9kZSwgdHlwZXMsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCB0ZXJtVmVyaWZpZWQ7XG5cbiAgY29uc3QgdGVybVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKTtcblxuICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLi4uYCwgdGVybU5vZGUpO1xuXG4gIGNvbnN0IHZlcmlmeVRlcm1GdW5jdGlvbnMgPSBbXG4gICAgdmVyaWZ5VGVybUFzU3RhbmRhbG9uZVZhcmlhYmxlLFxuICAgIHZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3JzXG4gIF07XG5cbiAgdGVybVZlcmlmaWVkID0gdmVyaWZ5VGVybUZ1bmN0aW9ucy5zb21lKCh2ZXJpZnlUZXJtRnVuY3Rpb24pID0+IHtcbiAgICBjb25zdCB0ZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtRnVuY3Rpb24odGVybU5vZGUsIHR5cGVzLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICBpZiAodGVybVZlcmlmaWVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmICh0ZXJtVmVyaWZpZWQpIHtcbiAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0uYCwgdGVybU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1WZXJpZmllZDtcbn1cblxuT2JqZWN0LmFzc2lnbih0ZXJtTm9kZXNWZXJpZmllciwge1xuICB2ZXJpZnlUZXJtXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgdmVyaWZ5VGVybTtcblxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3JzKHRlcm1Ob2RlLCB0eXBlcywgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvcnM7XG5cbiAgY29uc3QgY29uc3RydWN0b3JzID0gY29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoKTtcblxuICB0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzLnNvbWUoKGNvbnN0cnVjdG9yKSA9PiB7XG4gICAgY29uc3QgdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9yID0gdmVyaWZ5VGVybUFnYWluc3RDb25zdHJ1Y3Rvcih0ZXJtTm9kZSwgdHlwZXMsIGNvbnN0cnVjdG9yLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICBpZiAodGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9yKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3JzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5VGVybUFzVmFyaWFibGUodGVybU5vZGUsIHZhcmlhYmxlcywgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHRlcm1WZXJpZmllZEFzVmFyaWFibGUgPSBmYWxzZTtcblxuICBjb25zdCB0ZXJtU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcodGVybU5vZGUpO1xuXG4gIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYXMgYSB2YXJpYWJsZS4uLmAsIHRlcm1Ob2RlKTtcblxuICBjb25zdCB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeSh0ZXJtTm9kZSk7XG5cbiAgaWYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKTtcblxuICAgIGlmICh2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIGxldCB2ZXJpZmllZEFoZWFkO1xuXG4gICAgICBjb25zdCB2YXJpYWJsZSA9IGNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKTtcblxuICAgICAgdmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuXG4gICAgICB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgICAgaWYgKCF2ZXJpZmllZEFoZWFkKSB7XG4gICAgICAgIHZhcmlhYmxlcy5wb3AoKTtcbiAgICAgIH1cblxuICAgICAgdGVybVZlcmlmaWVkQXNWYXJpYWJsZSA9IHZlcmlmaWVkQWhlYWQ7IC8vL1xuICAgIH1cbiAgfVxuXG4gIGlmICh0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlKSB7XG4gICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFzIGEgdmFyaWFibGUuYCwgdGVybU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1WZXJpZmllZEFzVmFyaWFibGU7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3IodGVybU5vZGUsIHR5cGVzLCBjb25zdHJ1Y3RvciwgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvcjtcblxuICBjb25zdCB0ZXJtU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcodGVybU5vZGUpLFxuICAgICAgICBjb25zdHJ1Y3RvclN0cmluZyA9IGNvbnN0cnVjdG9yLmdldFN0cmluZygpO1xuXG4gIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYWdhaW5zdCB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci4uLmAsIHRlcm1Ob2RlKTtcblxuICBjb25zdCBjb25zdHJ1Y3RvclRlcm1Ob2RlID0gY29uc3RydWN0b3IuZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgbm9uVGVybWluYWxOTmRlQSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgIG5vblRlcm1pbmFsTm9kZUIgPSBjb25zdHJ1Y3RvclRlcm1Ob2RlLCAgLy8vXG4gICAgICAgIG5vZGVWZXJpZmllZCA9IHRlcm1Ob2Rlc1ZlcmlmaWVyLnZlcmlmeU5vblRlcm1pbmFsTm9kZShub25UZXJtaW5hbE5OZGVBLCBub25UZXJtaW5hbE5vZGVCLCBjb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgbGV0IHZlcmlmaWVkQWhlYWQ7XG5cbiAgICAgICAgICBjb25zdCB0eXBlID0gY29uc3RydWN0b3IuZ2V0VHlwZSgpO1xuXG4gICAgICAgICAgdHlwZXMucHVzaCh0eXBlKTtcblxuICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgICAgICAgaWYgKCF2ZXJpZmllZEFoZWFkKSB7XG4gICAgICAgICAgICB0eXBlcy5wb3AoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgfSk7XG5cbiAgdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9yID0gbm9kZVZlcmlmaWVkOyAgLy8vXG5cbiAgaWYgKHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3Rvcikge1xuICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBhZ2FpbnN0IHRoZSAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yLmAsIHRlcm1Ob2RlKTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3I7XG59XG5cbmZ1bmN0aW9uIHZlcmlmeVRlcm1Bc1N0YW5kYWxvbmVWYXJpYWJsZSh0ZXJtTm9kZSwgdHlwZXMsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCB0ZXJtVmVyaWZpZWRBc1N0YW5kYWxvbmVWYXJpYWJsZTtcblxuICBjb25zdCB0ZXJtU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcodGVybU5vZGUpO1xuXG4gIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYXMgYSBzdGFuZGFsb25lIHZhcmlhYmxlLi4uYCwgdGVybU5vZGUpO1xuXG4gIGNvbnN0IHZhcmlhYmxlcyA9IFtdLFxuICAgICAgICB0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlID0gdmVyaWZ5VGVybUFzVmFyaWFibGUodGVybU5vZGUsIHZhcmlhYmxlcywgY29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgIGxldCB2ZXJpZmllZEFoZWFkO1xuXG4gICAgICAgICAgY29uc3QgZmlyc3RWYXJpYWJsZSA9IGZpcnN0KHZhcmlhYmxlcyksXG4gICAgICAgICAgICAgICAgdmFyaWFibGUgPSBmaXJzdFZhcmlhYmxlLCAvLy9cbiAgICAgICAgICAgICAgICB0eXBlID0gdmFyaWFibGUuZ2V0VHlwZSgpO1xuXG4gICAgICAgICAgdHlwZXMucHVzaCh0eXBlKTtcblxuICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgICAgICAgaWYgKCF2ZXJpZmllZEFoZWFkKSB7XG4gICAgICAgICAgICB0eXBlcy5wb3AoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgfSk7XG5cbiAgdGVybVZlcmlmaWVkQXNTdGFuZGFsb25lVmFyaWFibGUgPSB0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlOyAgLy8vXG5cbiAgaWYgKHRlcm1WZXJpZmllZEFzU3RhbmRhbG9uZVZhcmlhYmxlKSB7XG4gICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFzIGEgc3RhbmRhbG9uZSB2YXJpYWJsZS5gLCB0ZXJtTm9kZSk7XG4gIH1cblxuICByZXR1cm4gdGVybVZlcmlmaWVkQXNTdGFuZGFsb25lVmFyaWFibGU7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5VGVybUFnYWluc3RDb25zdHJ1Y3RvcnMiLCJ2ZXJpZnlUZXJtQXNWYXJpYWJsZSIsInZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidmVyaWZ5VGVybSIsInRlcm1Ob2RlIiwidHlwZXMiLCJjb250ZXh0IiwidmVyaWZ5QWhlYWQiLCJ0ZXJtVmVyaWZpZWQiLCJ0ZXJtU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJ2ZXJpZnlUZXJtRnVuY3Rpb25zIiwidmVyaWZ5VGVybUFzU3RhbmRhbG9uZVZhcmlhYmxlIiwic29tZSIsInZlcmlmeVRlcm1GdW5jdGlvbiIsImRlYnVnIiwiT2JqZWN0IiwiYXNzaWduIiwidGVybU5vZGVzVmVyaWZpZXIiLCJ0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3JzIiwiY29uc3RydWN0b3JzIiwiZ2V0Q29uc3RydWN0b3JzIiwiY29uc3RydWN0b3IiLCJ0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3IiLCJ2ZXJpZnlUZXJtQWdhaW5zdENvbnN0cnVjdG9yIiwidmFyaWFibGVzIiwidGVybVZlcmlmaWVkQXNWYXJpYWJsZSIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTmFtZSIsInZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZVByZXNlbnQiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lIiwidmVyaWZpZWRBaGVhZCIsInZhcmlhYmxlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUiLCJwdXNoIiwicG9wIiwiY29uc3RydWN0b3JTdHJpbmciLCJnZXRTdHJpbmciLCJjb25zdHJ1Y3RvclRlcm1Ob2RlIiwiZ2V0VGVybU5vZGUiLCJub25UZXJtaW5hbE5OZGVBIiwibm9uVGVybWluYWxOb2RlQiIsIm5vZGVWZXJpZmllZCIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSIsInR5cGUiLCJnZXRUeXBlIiwidGVybVZlcmlmaWVkQXNTdGFuZGFsb25lVmFyaWFibGUiLCJmaXJzdFZhcmlhYmxlIiwiZmlyc3QiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQXdDQSxPQUEwQjtlQUExQjs7SUFFZ0JBLDZCQUE2QjtlQUE3QkE7O0lBZ0JBQyxvQkFBb0I7ZUFBcEJBOzs7MkRBeERjO3FCQUVSO3FCQUNrQzs7Ozs7O0FBRXhELElBQU1DLG9CQUFvQkMsSUFBQUEsZ0JBQVMsRUFBQztBQUVwQyxTQUFTQyxXQUFXQyxRQUFRLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxXQUFXO0lBQ3ZELElBQUlDO0lBRUosSUFBTUMsYUFBYUgsUUFBUUksWUFBWSxDQUFDTjtJQUV4Q0UsUUFBUUssS0FBSyxDQUFDLEFBQUMsa0JBQTRCLE9BQVhGLFlBQVcsY0FBWUw7SUFFdkQsSUFBTVEsc0JBQXNCO1FBQzFCQztRQUNBZDtLQUNEO0lBRURTLGVBQWVJLG9CQUFvQkUsSUFBSSxDQUFDLFNBQUNDO1FBQ3ZDLElBQU1QLGVBQWVPLG1CQUFtQlgsVUFBVUMsT0FBT0MsU0FBU0M7UUFFbEUsSUFBSUMsY0FBYztZQUNoQixPQUFPO1FBQ1Q7SUFDRjtJQUVBLElBQUlBLGNBQWM7UUFDaEJGLFFBQVFVLEtBQUssQ0FBQyxBQUFDLG9CQUE4QixPQUFYUCxZQUFXLFlBQVVMO0lBQ3pEO0lBRUEsT0FB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