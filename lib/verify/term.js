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
        var variable = context.findVariableByVariableNode(variableNode);
        if (variable !== null) {
            var verifiedAhead;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGVybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRlcm0gZnJvbSBcIi4uL3Rlcm1cIjtcbmltcG9ydCB0ZXJtTm9kZXNWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXIvbm9kZXMvdGVybVwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybS92YXJpYWJsZSFcIik7XG5cbmZ1bmN0aW9uIHZlcmlmeVRlcm0odGVybU5vZGUsIHRlcm1zLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgdGVybVZlcmlmaWVkO1xuXG4gIGNvbnN0IHRlcm1TdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyh0ZXJtTm9kZSk7XG5cbiAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS4uLmAsIHRlcm1Ob2RlKTtcblxuICBjb25zdCB2ZXJpZnlUZXJtRnVuY3Rpb25zID0gW1xuICAgIHZlcmlmeVRlcm1Bc1N0YW5kYWxvbmVWYXJpYWJsZSxcbiAgICB2ZXJpZnlUZXJtQWdhaW5zdENvbnN0cnVjdG9yc1xuICBdO1xuXG4gIHRlcm1WZXJpZmllZCA9IHZlcmlmeVRlcm1GdW5jdGlvbnMuc29tZSgodmVyaWZ5VGVybUZ1bmN0aW9uKSA9PiB7XG4gICAgY29uc3QgdGVybVZlcmlmaWVkID0gdmVyaWZ5VGVybUZ1bmN0aW9uKHRlcm1Ob2RlLCB0ZXJtcywgY29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgaWYgKHRlcm1WZXJpZmllZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICBpZiAodGVybVZlcmlmaWVkKSB7XG4gICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLmAsIHRlcm1Ob2RlKTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtVmVyaWZpZWQ7XG59XG5cbk9iamVjdC5hc3NpZ24odGVybU5vZGVzVmVyaWZpZXIsIHtcbiAgdmVyaWZ5VGVybVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHZlcmlmeVRlcm07XG5cbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlUZXJtQWdhaW5zdENvbnN0cnVjdG9ycyh0ZXJtTm9kZSwgdGVybXMsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCB0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3JzO1xuXG4gIGNvbnN0IGNvbnN0cnVjdG9ycyA9IGNvbnRleHQuZ2V0Q29uc3RydWN0b3JzKCk7XG5cbiAgdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9ycy5zb21lKChjb25zdHJ1Y3RvcikgPT4ge1xuICAgIGNvbnN0IHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvciA9IHZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3IodGVybU5vZGUsIHRlcm1zLCBjb25zdHJ1Y3RvciwgY29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gICAgaWYgKHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3Rvcikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9ycztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeVRlcm1Bc1ZhcmlhYmxlKHRlcm1Ob2RlLCB2YXJpYWJsZXMsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCB0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlID0gZmFsc2U7XG5cbiAgY29uc3QgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkodGVybU5vZGUpO1xuXG4gIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcodGVybU5vZGUpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBhcyBhIHZhcmlhYmxlLi4uYCwgdGVybU5vZGUpO1xuXG4gICAgY29uc3QgdmFyaWFibGUgPSBjb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG5cbiAgICBpZiAodmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIGxldCB2ZXJpZmllZEFoZWFkO1xuXG4gICAgICB2YXJpYWJsZXMucHVzaCh2YXJpYWJsZSk7XG5cbiAgICAgIHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgICBpZiAoIXZlcmlmaWVkQWhlYWQpIHtcbiAgICAgICAgdmFyaWFibGVzLnBvcCgpO1xuICAgICAgfVxuXG4gICAgICB0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlID0gdmVyaWZpZWRBaGVhZDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHRlcm1WZXJpZmllZEFzVmFyaWFibGUpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBhcyBhIHZhcmlhYmxlLmAsIHRlcm1Ob2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGVybVZlcmlmaWVkQXNWYXJpYWJsZTtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5VGVybUFzU3RhbmRhbG9uZVZhcmlhYmxlKHRlcm1Ob2RlLCB0ZXJtcywgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHRlcm1WZXJpZmllZEFzU3RhbmRhbG9uZVZhcmlhYmxlO1xuXG4gIGNvbnN0IHRlcm1TdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyh0ZXJtTm9kZSk7XG5cbiAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBhcyBhIHN0YW5kYWxvbmUgdmFyaWFibGUuLi5gLCB0ZXJtTm9kZSk7XG5cbiAgY29uc3QgdmFyaWFibGVzID0gW10sXG4gICAgICAgIHRlcm1WZXJpZmllZEFzVmFyaWFibGUgPSB2ZXJpZnlUZXJtQXNWYXJpYWJsZSh0ZXJtTm9kZSwgdmFyaWFibGVzLCBjb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgbGV0IHZlcmlmaWVkQWhlYWQ7XG5cbiAgICAgICAgICBjb25zdCBmaXJzdFZhcmlhYmxlID0gZmlyc3QodmFyaWFibGVzKSxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZSA9IGZpcnN0VmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgICAgIHR5cGUgPSB2YXJpYWJsZS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgdGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlQW5kVHlwZSh0ZXJtTm9kZSwgdHlwZSk7XG5cbiAgICAgICAgICB0ZXJtcy5wdXNoKHRlcm0pO1xuXG4gICAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICAgICAgICBpZiAoIXZlcmlmaWVkQWhlYWQpIHtcbiAgICAgICAgICAgIHRlcm1zLnBvcCgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICB9KTtcblxuICB0ZXJtVmVyaWZpZWRBc1N0YW5kYWxvbmVWYXJpYWJsZSA9IHRlcm1WZXJpZmllZEFzVmFyaWFibGU7ICAvLy9cblxuICBpZiAodGVybVZlcmlmaWVkQXNTdGFuZGFsb25lVmFyaWFibGUpIHtcbiAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYXMgYSBzdGFuZGFsb25lIHZhcmlhYmxlLmAsIHRlcm1Ob2RlKTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtVmVyaWZpZWRBc1N0YW5kYWxvbmVWYXJpYWJsZTtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5VGVybUFnYWluc3RDb25zdHJ1Y3Rvcih0ZXJtTm9kZSwgdGVybXMsIGNvbnN0cnVjdG9yLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9yO1xuXG4gIGNvbnN0IHRlcm1TdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyh0ZXJtTm9kZSksXG4gICAgICAgIGNvbnN0cnVjdG9yU3RyaW5nID0gY29uc3RydWN0b3IuZ2V0U3RyaW5nKCk7XG5cbiAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBhZ2FpbnN0IHRoZSAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yLi4uYCwgdGVybU5vZGUpO1xuXG4gIGNvbnN0IGNvbnN0cnVjdG9yVGVybU5vZGUgPSBjb25zdHJ1Y3Rvci5nZXRUZXJtTm9kZSgpLFxuICAgICAgICBub25UZXJtaW5hbE5OZGVBID0gdGVybU5vZGUsICAvLy9cbiAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IGNvbnN0cnVjdG9yVGVybU5vZGUsICAvLy9cbiAgICAgICAgbm9kZVZlcmlmaWVkID0gdGVybU5vZGVzVmVyaWZpZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTk5kZUEsIG5vblRlcm1pbmFsTm9kZUIsIGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgICBsZXQgdmVyaWZpZWRBaGVhZDtcblxuICAgICAgICAgIGNvbnN0IHR5cGUgPSBjb25zdHJ1Y3Rvci5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgdGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlQW5kVHlwZSh0ZXJtTm9kZSwgdHlwZSk7XG5cbiAgICAgICAgICB0ZXJtcy5wdXNoKHRlcm0pO1xuXG4gICAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICAgICAgICBpZiAoIXZlcmlmaWVkQWhlYWQpIHtcbiAgICAgICAgICAgIHRlcm1zLnBvcCgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICB9KTtcblxuICB0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3IgPSBub2RlVmVyaWZpZWQ7ICAvLy9cblxuICBpZiAodGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9yKSB7XG4gICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFnYWluc3QgdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IuYCwgdGVybU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3Rvcjtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlUZXJtQWdhaW5zdENvbnN0cnVjdG9ycyIsInZlcmlmeVRlcm1Bc1ZhcmlhYmxlIiwidmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ2ZXJpZnlUZXJtIiwidGVybU5vZGUiLCJ0ZXJtcyIsImNvbnRleHQiLCJ2ZXJpZnlBaGVhZCIsInRlcm1WZXJpZmllZCIsInRlcm1TdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsInZlcmlmeVRlcm1GdW5jdGlvbnMiLCJ2ZXJpZnlUZXJtQXNTdGFuZGFsb25lVmFyaWFibGUiLCJzb21lIiwidmVyaWZ5VGVybUZ1bmN0aW9uIiwiZGVidWciLCJPYmplY3QiLCJhc3NpZ24iLCJ0ZXJtTm9kZXNWZXJpZmllciIsInRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvcnMiLCJjb25zdHJ1Y3RvcnMiLCJnZXRDb25zdHJ1Y3RvcnMiLCJjb25zdHJ1Y3RvciIsInRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvciIsInZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3IiLCJ2YXJpYWJsZXMiLCJ0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSIsInZlcmlmaWVkQWhlYWQiLCJwdXNoIiwicG9wIiwidGVybVZlcmlmaWVkQXNTdGFuZGFsb25lVmFyaWFibGUiLCJmaXJzdFZhcmlhYmxlIiwiZmlyc3QiLCJ0eXBlIiwiZ2V0VHlwZSIsInRlcm0iLCJUZXJtIiwiZnJvbVRlcm1Ob2RlQW5kVHlwZSIsImNvbnN0cnVjdG9yU3RyaW5nIiwiZ2V0U3RyaW5nIiwiY29uc3RydWN0b3JUZXJtTm9kZSIsImdldFRlcm1Ob2RlIiwibm9uVGVybWluYWxOTmRlQSIsIm5vblRlcm1pbmFsTm9kZUIiLCJub2RlVmVyaWZpZWQiLCJ2ZXJpZnlOb25UZXJtaW5hbE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQXlDQSxPQUEwQjtlQUExQjs7SUFFZ0JBLDZCQUE2QjtlQUE3QkE7O0lBZ0JBQyxvQkFBb0I7ZUFBcEJBOzs7MkRBekRDOzREQUNhO3FCQUVSO3FCQUNJOzs7Ozs7QUFFMUIsSUFBTUMsb0JBQW9CQyxJQUFBQSxnQkFBUyxFQUFDO0FBRXBDLFNBQVNDLFdBQVdDLFFBQVEsRUFBRUMsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLFdBQVc7SUFDdkQsSUFBSUM7SUFFSixJQUFNQyxhQUFhSCxRQUFRSSxZQUFZLENBQUNOO0lBRXhDRSxRQUFRSyxLQUFLLENBQUMsQUFBQyxrQkFBNEIsT0FBWEYsWUFBVyxjQUFZTDtJQUV2RCxJQUFNUSxzQkFBc0I7UUFDMUJDO1FBQ0FkO0tBQ0Q7SUFFRFMsZUFBZUksb0JBQW9CRSxJQUFJLENBQUMsU0FBQ0M7UUFDdkMsSUFBTVAsZUFBZU8sbUJBQW1CWCxVQUFVQyxPQUFPQyxTQUFTQztRQUVsRSxJQUFJQyxjQUFjO1lBQ2hCLE9BQU87UUFDVDtJQUNGO0lBRUEsSUFBSUEsY0FBYztRQUNoQkYsUUFBUVUsS0FBSyxDQUFDLEFBQUMsb0JBQThCLE9BQVhQLFlBQVcsWUFBVUw7SUFDekQ7SUFFQSxPQUFPSTtBQUNUO0FBRUFTLE9BQU9DLE1BQU0sQ0FBQ0MsY0FBaUIsRUFBRTtJQUMvQmhCLFlBQUFBO0FBQ0Y7SUFFQSxXQUFl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