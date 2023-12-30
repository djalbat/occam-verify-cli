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
    var variableNode = variableNodeQuery(termNode);
    if (variableNode !== null) {
        var termString = context.nodeAsString(termNode);
        context.trace("Verifying the '".concat(termString, "' term as a variable..."), termNode);
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
        if (termVerifiedAsVariable) {
            context.debug("...verified the '".concat(termString, "' term as a variable."), termNode);
        }
    }
    return termVerifiedAsVariable;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGVybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHRlcm1Ob2Rlc1ZlcmlmaWVyIGZyb20gXCIuLi92ZXJpZmllci9ub2Rlcy90ZXJtXCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlIVwiKTtcblxuZnVuY3Rpb24gdmVyaWZ5VGVybSh0ZXJtTm9kZSwgdHlwZXMsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCB0ZXJtVmVyaWZpZWQ7XG5cbiAgY29uc3QgdGVybVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKTtcblxuICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLi4uYCwgdGVybU5vZGUpO1xuXG4gIGNvbnN0IHZlcmlmeVRlcm1GdW5jdGlvbnMgPSBbXG4gICAgdmVyaWZ5VGVybUFzU3RhbmRhbG9uZVZhcmlhYmxlLFxuICAgIHZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3JzXG4gIF07XG5cbiAgdGVybVZlcmlmaWVkID0gdmVyaWZ5VGVybUZ1bmN0aW9ucy5zb21lKCh2ZXJpZnlUZXJtRnVuY3Rpb24pID0+IHtcbiAgICBjb25zdCB0ZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtRnVuY3Rpb24odGVybU5vZGUsIHR5cGVzLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICBpZiAodGVybVZlcmlmaWVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmICh0ZXJtVmVyaWZpZWQpIHtcbiAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0uYCwgdGVybU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1WZXJpZmllZDtcbn1cblxuT2JqZWN0LmFzc2lnbih0ZXJtTm9kZXNWZXJpZmllciwge1xuICB2ZXJpZnlUZXJtXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgdmVyaWZ5VGVybTtcblxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3JzKHRlcm1Ob2RlLCB0eXBlcywgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvcnM7XG5cbiAgY29uc3QgY29uc3RydWN0b3JzID0gY29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoKTtcblxuICB0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzLnNvbWUoKGNvbnN0cnVjdG9yKSA9PiB7XG4gICAgY29uc3QgdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9yID0gdmVyaWZ5VGVybUFnYWluc3RDb25zdHJ1Y3Rvcih0ZXJtTm9kZSwgdHlwZXMsIGNvbnN0cnVjdG9yLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICBpZiAodGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9yKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3JzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5VGVybUFzVmFyaWFibGUodGVybU5vZGUsIHZhcmlhYmxlcywgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHRlcm1WZXJpZmllZEFzVmFyaWFibGUgPSBmYWxzZTtcblxuICBjb25zdCB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeSh0ZXJtTm9kZSk7XG5cbiAgaWYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyh0ZXJtTm9kZSk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFzIGEgdmFyaWFibGUuLi5gLCB0ZXJtTm9kZSk7XG5cbiAgICBjb25zdCB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gY29udGV4dC5pc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSk7XG5cbiAgICBpZiAodmFyaWFibGVQcmVzZW50KSB7XG4gICAgICBsZXQgdmVyaWZpZWRBaGVhZDtcblxuICAgICAgY29uc3QgdmFyaWFibGUgPSBjb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSk7XG5cbiAgICAgIHZhcmlhYmxlcy5wdXNoKHZhcmlhYmxlKTtcblxuICAgICAgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICAgIGlmICghdmVyaWZpZWRBaGVhZCkge1xuICAgICAgICB2YXJpYWJsZXMucG9wKCk7XG4gICAgICB9XG5cbiAgICAgIHRlcm1WZXJpZmllZEFzVmFyaWFibGUgPSB2ZXJpZmllZEFoZWFkOyAvLy9cbiAgICB9XG5cbiAgICBpZiAodGVybVZlcmlmaWVkQXNWYXJpYWJsZSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFzIGEgdmFyaWFibGUuYCwgdGVybU5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlUZXJtQXNTdGFuZGFsb25lVmFyaWFibGUodGVybU5vZGUsIHR5cGVzLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgdGVybVZlcmlmaWVkQXNTdGFuZGFsb25lVmFyaWFibGU7XG5cbiAgY29uc3QgdGVybVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKTtcblxuICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFzIGEgc3RhbmRhbG9uZSB2YXJpYWJsZS4uLmAsIHRlcm1Ob2RlKTtcblxuICBjb25zdCB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgdGVybVZlcmlmaWVkQXNWYXJpYWJsZSA9IHZlcmlmeVRlcm1Bc1ZhcmlhYmxlKHRlcm1Ob2RlLCB2YXJpYWJsZXMsIGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgICBsZXQgdmVyaWZpZWRBaGVhZDtcblxuICAgICAgICAgIGNvbnN0IGZpcnN0VmFyaWFibGUgPSBmaXJzdCh2YXJpYWJsZXMpLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlID0gZmlyc3RWYXJpYWJsZSwgLy8vXG4gICAgICAgICAgICAgICAgdHlwZSA9IHZhcmlhYmxlLmdldFR5cGUoKTtcblxuICAgICAgICAgIHR5cGVzLnB1c2godHlwZSk7XG5cbiAgICAgICAgICB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgICAgICAgIGlmICghdmVyaWZpZWRBaGVhZCkge1xuICAgICAgICAgICAgdHlwZXMucG9wKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgIH0pO1xuXG4gIHRlcm1WZXJpZmllZEFzU3RhbmRhbG9uZVZhcmlhYmxlID0gdGVybVZlcmlmaWVkQXNWYXJpYWJsZTsgIC8vL1xuXG4gIGlmICh0ZXJtVmVyaWZpZWRBc1N0YW5kYWxvbmVWYXJpYWJsZSkge1xuICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBhcyBhIHN0YW5kYWxvbmUgdmFyaWFibGUuYCwgdGVybU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1WZXJpZmllZEFzU3RhbmRhbG9uZVZhcmlhYmxlO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlUZXJtQWdhaW5zdENvbnN0cnVjdG9yKHRlcm1Ob2RlLCB0eXBlcywgY29uc3RydWN0b3IsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCB0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3I7XG5cbiAgY29uc3QgdGVybVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKSxcbiAgICAgICAgY29uc3RydWN0b3JTdHJpbmcgPSBjb25zdHJ1Y3Rvci5nZXRTdHJpbmcoKTtcblxuICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFnYWluc3QgdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IuLi5gLCB0ZXJtTm9kZSk7XG5cbiAgY29uc3QgY29uc3RydWN0b3JUZXJtTm9kZSA9IGNvbnN0cnVjdG9yLmdldFRlcm1Ob2RlKCksXG4gICAgICAgIG5vblRlcm1pbmFsTk5kZUEgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICBub25UZXJtaW5hbE5vZGVCID0gY29uc3RydWN0b3JUZXJtTm9kZSwgIC8vL1xuICAgICAgICBub2RlVmVyaWZpZWQgPSB0ZXJtTm9kZXNWZXJpZmllci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOTmRlQSwgbm9uVGVybWluYWxOb2RlQiwgY29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgIGxldCB2ZXJpZmllZEFoZWFkO1xuXG4gICAgICAgICAgY29uc3QgdHlwZSA9IGNvbnN0cnVjdG9yLmdldFR5cGUoKTtcblxuICAgICAgICAgIHR5cGVzLnB1c2godHlwZSk7XG5cbiAgICAgICAgICB2ZXJpZmllZEFoZWFkID0gdmVyaWZ5QWhlYWQoKTtcblxuICAgICAgICAgIGlmICghdmVyaWZpZWRBaGVhZCkge1xuICAgICAgICAgICAgdHlwZXMucG9wKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgIH0pO1xuXG4gIHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvciA9IG5vZGVWZXJpZmllZDsgIC8vL1xuXG4gIGlmICh0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3IpIHtcbiAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYWdhaW5zdCB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci5gLCB0ZXJtTm9kZSk7XG4gIH1cblxuICByZXR1cm4gdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9yO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3JzIiwidmVyaWZ5VGVybUFzVmFyaWFibGUiLCJ2YXJpYWJsZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInZlcmlmeVRlcm0iLCJ0ZXJtTm9kZSIsInR5cGVzIiwiY29udGV4dCIsInZlcmlmeUFoZWFkIiwidGVybVZlcmlmaWVkIiwidGVybVN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwidmVyaWZ5VGVybUZ1bmN0aW9ucyIsInZlcmlmeVRlcm1Bc1N0YW5kYWxvbmVWYXJpYWJsZSIsInNvbWUiLCJ2ZXJpZnlUZXJtRnVuY3Rpb24iLCJkZWJ1ZyIsIk9iamVjdCIsImFzc2lnbiIsInRlcm1Ob2Rlc1ZlcmlmaWVyIiwidGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9ycyIsImNvbnN0cnVjdG9ycyIsImdldENvbnN0cnVjdG9ycyIsImNvbnN0cnVjdG9yIiwidGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9yIiwidmVyaWZ5VGVybUFnYWluc3RDb25zdHJ1Y3RvciIsInZhcmlhYmxlcyIsInRlcm1WZXJpZmllZEFzVmFyaWFibGUiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlIiwidmFyaWFibGVQcmVzZW50IiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSIsInZlcmlmaWVkQWhlYWQiLCJ2YXJpYWJsZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lIiwicHVzaCIsInBvcCIsInRlcm1WZXJpZmllZEFzU3RhbmRhbG9uZVZhcmlhYmxlIiwiZmlyc3RWYXJpYWJsZSIsImZpcnN0IiwidHlwZSIsImdldFR5cGUiLCJjb25zdHJ1Y3RvclN0cmluZyIsImdldFN0cmluZyIsImNvbnN0cnVjdG9yVGVybU5vZGUiLCJnZXRUZXJtTm9kZSIsIm5vblRlcm1pbmFsTk5kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwibm9kZVZlcmlmaWVkIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUF3Q0EsT0FBMEI7ZUFBMUI7O0lBRWdCQSw2QkFBNkI7ZUFBN0JBOztJQWdCQUMsb0JBQW9CO2VBQXBCQTs7OzJEQXhEYztxQkFFUjtxQkFDa0M7Ozs7OztBQUV4RCxJQUFNQyxvQkFBb0JDLElBQUFBLGdCQUFTLEVBQUM7QUFFcEMsU0FBU0MsV0FBV0MsUUFBUSxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sRUFBRUMsV0FBVztJQUN2RCxJQUFJQztJQUVKLElBQU1DLGFBQWFILFFBQVFJLFlBQVksQ0FBQ047SUFFeENFLFFBQVFLLEtBQUssQ0FBQyxBQUFDLGtCQUE0QixPQUFYRixZQUFXLGNBQVlMO0lBRXZELElBQU1RLHNCQUFzQjtRQUMxQkM7UUFDQWQ7S0FDRDtJQUVEUyxlQUFlSSxvQkFBb0JFLElBQUksQ0FBQyxTQUFDQztRQUN2QyxJQUFNUCxlQUFlTyxtQkFBbUJYLFVBQVVDLE9BQU9DLFNBQVNDO1FBRWxFLElBQUlDLGNBQWM7WUFDaEIsT0FBTztRQUNUO0lBQ0Y7SUFFQSxJQUFJQSxjQUFjO1FBQ2hCRixRQUFRVSxLQUFLLENBQUMsQUFBQyxvQkFBOEIsT0FBWFAsWUFBVyxZQUFVTDtJQUN6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