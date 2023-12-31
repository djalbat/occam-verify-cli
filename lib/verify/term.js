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
var _term = /*#__PURE__*/ _interop_require_default(require("../term"));
var _term1 = /*#__PURE__*/ _interop_require_default(require("../verifier/nodes/term"));
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
        verifyTermAsStandaloneVariable,
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
Object.assign(_term1.default, {
    verifyTerm: verifyTerm
});
var _default = verifyTerm;
function verifyTermAgainstConstructors(termNode, terms, context, verifyAhead) {
    var termVerifiedAgainstConstructors;
    var constructors = context.getConstructors();
    termVerifiedAgainstConstructors = constructors.some(function(constructor) {
        var termVerifiedAgainstConstructor = verifyTermAgainstConstructor(termNode, terms, constructor, context, verifyAhead);
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
function verifyTermAsStandaloneVariable(termNode, terms, context, verifyAhead) {
    var termVerifiedAsStandaloneVariable;
    var termString = context.nodeAsString(termNode);
    context.trace("Verifying the '".concat(termString, "' term as a standalone variable..."), termNode);
    var variables = [], termVerifiedAsVariable = verifyTermAsVariable(termNode, variables, context, function() {
        var verifiedAhead;
        var firstVariable = (0, _array.first)(variables), variable = firstVariable, type = variable.getType(), term = _term.default.fromTermNodeAndType(termNode, type);
        terms.push(term);
        verifiedAhead = verifyAhead();
        if (!verifiedAhead) {
            terms.pop();
        }
        return verifiedAhead;
    });
    termVerifiedAsStandaloneVariable = termVerifiedAsVariable; ///
    if (termVerifiedAsStandaloneVariable) {
        context.debug("...verified the '".concat(termString, "' term as a standalone variable."), termNode);
    }
    return termVerifiedAsStandaloneVariable;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGVybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRlcm0gZnJvbSBcIi4uL3Rlcm1cIjtcbmltcG9ydCB0ZXJtTm9kZXNWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXIvbm9kZXMvdGVybVwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybS92YXJpYWJsZSFcIik7XG5cbmZ1bmN0aW9uIHZlcmlmeVRlcm0odGVybU5vZGUsIHRlcm1zLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgdGVybVZlcmlmaWVkO1xuXG4gIGNvbnN0IHRlcm1TdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyh0ZXJtTm9kZSk7XG5cbiAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS4uLmAsIHRlcm1Ob2RlKTtcblxuICBjb25zdCB2ZXJpZnlUZXJtRnVuY3Rpb25zID0gW1xuICAgIHZlcmlmeVRlcm1Bc1N0YW5kYWxvbmVWYXJpYWJsZSxcbiAgICB2ZXJpZnlUZXJtQWdhaW5zdENvbnN0cnVjdG9yc1xuICBdO1xuXG4gIHRlcm1WZXJpZmllZCA9IHZlcmlmeVRlcm1GdW5jdGlvbnMuc29tZSgodmVyaWZ5VGVybUZ1bmN0aW9uKSA9PiB7XG4gICAgY29uc3QgdGVybVZlcmlmaWVkID0gdmVyaWZ5VGVybUZ1bmN0aW9uKHRlcm1Ob2RlLCB0ZXJtcywgY29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgaWYgKHRlcm1WZXJpZmllZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBpZiAodGVybVZlcmlmaWVkKSB7XG4gICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLmAsIHRlcm1Ob2RlKTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtVmVyaWZpZWQ7XG59XG5cbk9iamVjdC5hc3NpZ24odGVybU5vZGVzVmVyaWZpZXIsIHtcbiAgdmVyaWZ5VGVybVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHZlcmlmeVRlcm07XG5cbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlUZXJtQWdhaW5zdENvbnN0cnVjdG9ycyh0ZXJtTm9kZSwgdGVybXMsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCB0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3JzO1xuXG4gIGNvbnN0IGNvbnN0cnVjdG9ycyA9IGNvbnRleHQuZ2V0Q29uc3RydWN0b3JzKCk7XG5cbiAgdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9ycy5zb21lKChjb25zdHJ1Y3RvcikgPT4ge1xuICAgIGNvbnN0IHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvciA9IHZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3IodGVybU5vZGUsIHRlcm1zLCBjb25zdHJ1Y3RvciwgY29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgaWYgKHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3Rvcikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9ycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeVRlcm1Bc1ZhcmlhYmxlKHRlcm1Ob2RlLCB2YXJpYWJsZXMsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCB0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlID0gZmFsc2U7XG5cbiAgY29uc3QgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkodGVybU5vZGUpO1xuXG4gIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcodGVybU5vZGUpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBhcyBhIHZhcmlhYmxlLi4uYCwgdGVybU5vZGUpO1xuXG4gICAgY29uc3QgdmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuXG4gICAgaWYgKHZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgbGV0IHZlcmlmaWVkQWhlYWQ7XG5cbiAgICAgIGNvbnN0IHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuXG4gICAgICB2YXJpYWJsZXMucHVzaCh2YXJpYWJsZSk7XG5cbiAgICAgIHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgICBpZiAoIXZlcmlmaWVkQWhlYWQpIHtcbiAgICAgICAgdmFyaWFibGVzLnBvcCgpO1xuICAgICAgfVxuXG4gICAgICB0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlID0gdmVyaWZpZWRBaGVhZDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHRlcm1WZXJpZmllZEFzVmFyaWFibGUpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBhcyBhIHZhcmlhYmxlLmAsIHRlcm1Ob2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGVybVZlcmlmaWVkQXNWYXJpYWJsZTtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5VGVybUFzU3RhbmRhbG9uZVZhcmlhYmxlKHRlcm1Ob2RlLCB0ZXJtcywgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHRlcm1WZXJpZmllZEFzU3RhbmRhbG9uZVZhcmlhYmxlO1xuXG4gIGNvbnN0IHRlcm1TdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyh0ZXJtTm9kZSk7XG5cbiAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBhcyBhIHN0YW5kYWxvbmUgdmFyaWFibGUuLi5gLCB0ZXJtTm9kZSk7XG5cbiAgY29uc3QgdmFyaWFibGVzID0gW10sXG4gICAgICAgIHRlcm1WZXJpZmllZEFzVmFyaWFibGUgPSB2ZXJpZnlUZXJtQXNWYXJpYWJsZSh0ZXJtTm9kZSwgdmFyaWFibGVzLCBjb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgbGV0IHZlcmlmaWVkQWhlYWQ7XG5cbiAgICAgICAgICBjb25zdCBmaXJzdFZhcmlhYmxlID0gZmlyc3QodmFyaWFibGVzKSxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZSA9IGZpcnN0VmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgICAgIHR5cGUgPSB2YXJpYWJsZS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgdGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlQW5kVHlwZSh0ZXJtTm9kZSwgdHlwZSk7XG5cbiAgICAgICAgICB0ZXJtcy5wdXNoKHRlcm0pO1xuXG4gICAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICAgICAgICBpZiAoIXZlcmlmaWVkQWhlYWQpIHtcbiAgICAgICAgICAgIHRlcm1zLnBvcCgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICB9KTtcblxuICB0ZXJtVmVyaWZpZWRBc1N0YW5kYWxvbmVWYXJpYWJsZSA9IHRlcm1WZXJpZmllZEFzVmFyaWFibGU7ICAvLy9cblxuICBpZiAodGVybVZlcmlmaWVkQXNTdGFuZGFsb25lVmFyaWFibGUpIHtcbiAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYXMgYSBzdGFuZGFsb25lIHZhcmlhYmxlLmAsIHRlcm1Ob2RlKTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtVmVyaWZpZWRBc1N0YW5kYWxvbmVWYXJpYWJsZTtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5VGVybUFnYWluc3RDb25zdHJ1Y3Rvcih0ZXJtTm9kZSwgdGVybXMsIGNvbnN0cnVjdG9yLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9yO1xuXG4gIGNvbnN0IHRlcm1TdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyh0ZXJtTm9kZSksXG4gICAgICAgIGNvbnN0cnVjdG9yU3RyaW5nID0gY29uc3RydWN0b3IuZ2V0U3RyaW5nKCk7XG5cbiAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBhZ2FpbnN0IHRoZSAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yLi4uYCwgdGVybU5vZGUpO1xuXG4gIGNvbnN0IGNvbnN0cnVjdG9yVGVybU5vZGUgPSBjb25zdHJ1Y3Rvci5nZXRUZXJtTm9kZSgpLFxuICAgICAgICBub25UZXJtaW5hbE5OZGVBID0gdGVybU5vZGUsICAvLy9cbiAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IGNvbnN0cnVjdG9yVGVybU5vZGUsICAvLy9cbiAgICAgICAgbm9kZVZlcmlmaWVkID0gdGVybU5vZGVzVmVyaWZpZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTk5kZUEsIG5vblRlcm1pbmFsTm9kZUIsIGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgICBsZXQgdmVyaWZpZWRBaGVhZDtcblxuICAgICAgICAgIGNvbnN0IHR5cGUgPSBjb25zdHJ1Y3Rvci5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgdGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlQW5kVHlwZSh0ZXJtTm9kZSwgdHlwZSk7XG5cbiAgICAgICAgICB0ZXJtcy5wdXNoKHRlcm0pO1xuXG4gICAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICAgICAgICBpZiAoIXZlcmlmaWVkQWhlYWQpIHtcbiAgICAgICAgICAgIHRlcm1zLnBvcCgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICB9KTtcblxuICB0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3IgPSBub2RlVmVyaWZpZWQ7ICAvLy9cblxuICBpZiAodGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9yKSB7XG4gICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFnYWluc3QgdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IuYCwgdGVybU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3Rvcjtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlUZXJtQWdhaW5zdENvbnN0cnVjdG9ycyIsInZlcmlmeVRlcm1Bc1ZhcmlhYmxlIiwidmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ2ZXJpZnlUZXJtIiwidGVybU5vZGUiLCJ0ZXJtcyIsImNvbnRleHQiLCJ2ZXJpZnlBaGVhZCIsInRlcm1WZXJpZmllZCIsInRlcm1TdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsInZlcmlmeVRlcm1GdW5jdGlvbnMiLCJ2ZXJpZnlUZXJtQXNTdGFuZGFsb25lVmFyaWFibGUiLCJzb21lIiwidmVyaWZ5VGVybUZ1bmN0aW9uIiwiZGVidWciLCJPYmplY3QiLCJhc3NpZ24iLCJ0ZXJtTm9kZXNWZXJpZmllciIsInRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvcnMiLCJjb25zdHJ1Y3RvcnMiLCJnZXRDb25zdHJ1Y3RvcnMiLCJjb25zdHJ1Y3RvciIsInRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvciIsInZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3IiLCJ2YXJpYWJsZXMiLCJ0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGVOYW1lIiwidmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlUHJlc2VudCIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUiLCJ2ZXJpZmllZEFoZWFkIiwidmFyaWFibGUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSIsInB1c2giLCJwb3AiLCJ0ZXJtVmVyaWZpZWRBc1N0YW5kYWxvbmVWYXJpYWJsZSIsImZpcnN0VmFyaWFibGUiLCJmaXJzdCIsInR5cGUiLCJnZXRUeXBlIiwidGVybSIsIlRlcm0iLCJmcm9tVGVybU5vZGVBbmRUeXBlIiwiY29uc3RydWN0b3JTdHJpbmciLCJnZXRTdHJpbmciLCJjb25zdHJ1Y3RvclRlcm1Ob2RlIiwiZ2V0VGVybU5vZGUiLCJub25UZXJtaW5hbE5OZGVBIiwibm9uVGVybWluYWxOb2RlQiIsIm5vZGVWZXJpZmllZCIsInZlcmlmeU5vblRlcm1pbmFsTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBeUNBLE9BQTBCO2VBQTFCOztJQUVnQkEsNkJBQTZCO2VBQTdCQTs7SUFnQkFDLG9CQUFvQjtlQUFwQkE7OzsyREF6REM7NERBQ2E7cUJBRVI7cUJBQ2tDOzs7Ozs7QUFFeEQsSUFBTUMsb0JBQW9CQyxJQUFBQSxnQkFBUyxFQUFDO0FBRXBDLFNBQVNDLFdBQVdDLFFBQVEsRUFBRUMsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLFdBQVc7SUFDdkQsSUFBSUM7SUFFSixJQUFNQyxhQUFhSCxRQUFRSSxZQUFZLENBQUNOO0lBRXhDRSxRQUFRSyxLQUFLLENBQUMsQUFBQyxrQkFBNEIsT0FBWEYsWUFBVyxjQUFZTDtJQUV2RCxJQUFNUSxzQkFBc0I7UUFD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