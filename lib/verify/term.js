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
        var firstType = (0, _array.first)(types), type = firstType, typeName = type.getName();
        context.debug("...verified the '".concat(termString, "' term, which has been given the '").concat(typeName, "' type."), termNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdGVybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHRlcm1Ob2Rlc1ZlcmlmaWVyIGZyb20gXCIuLi92ZXJpZmllci9ub2Rlcy90ZXJtXCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlIVwiKTtcblxuZnVuY3Rpb24gdmVyaWZ5VGVybSh0ZXJtTm9kZSwgdHlwZXMsIGNvbnRleHQsIHZlcmlmeUFoZWFkKSB7XG4gIGxldCB0ZXJtVmVyaWZpZWQ7XG5cbiAgY29uc3QgdGVybVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHRlcm1Ob2RlKTtcblxuICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLi4uYCwgdGVybU5vZGUpO1xuXG4gIGNvbnN0IHZlcmlmeVRlcm1GdW5jdGlvbnMgPSBbXG4gICAgdmVyaWZ5VGVybUFzU3RhbmRhbG9uZVZhcmlhYmxlLFxuICAgIHZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3JzXG4gIF07XG5cbiAgdGVybVZlcmlmaWVkID0gdmVyaWZ5VGVybUZ1bmN0aW9ucy5zb21lKCh2ZXJpZnlUZXJtRnVuY3Rpb24pID0+IHtcbiAgICBjb25zdCB0ZXJtVmVyaWZpZWQgPSB2ZXJpZnlUZXJtRnVuY3Rpb24odGVybU5vZGUsIHR5cGVzLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCk7XG5cbiAgICBpZiAodGVybVZlcmlmaWVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmICh0ZXJtVmVyaWZpZWQpIHtcbiAgICBjb25zdCBmaXJzdFR5cGUgPSBmaXJzdCh0eXBlcyksXG4gICAgICAgICAgdHlwZSA9IGZpcnN0VHlwZSwgLy8vXG4gICAgICAgICAgdHlwZU5hbWUgPSB0eXBlLmdldE5hbWUoKTtcblxuICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSwgd2hpY2ggaGFzIGJlZW4gZ2l2ZW4gdGhlICcke3R5cGVOYW1lfScgdHlwZS5gLCB0ZXJtTm9kZSk7XG4gIH1cblxuICByZXR1cm4gdGVybVZlcmlmaWVkO1xufVxuXG5PYmplY3QuYXNzaWduKHRlcm1Ob2Rlc1ZlcmlmaWVyLCB7XG4gIHZlcmlmeVRlcm1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB2ZXJpZnlUZXJtO1xuXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5VGVybUFnYWluc3RDb25zdHJ1Y3RvcnModGVybU5vZGUsIHR5cGVzLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9ycztcblxuICBjb25zdCBjb25zdHJ1Y3RvcnMgPSBjb250ZXh0LmdldENvbnN0cnVjdG9ycygpO1xuXG4gIHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnMuc29tZSgoY29uc3RydWN0b3IpID0+IHtcbiAgICBjb25zdCB0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3IgPSB2ZXJpZnlUZXJtQWdhaW5zdENvbnN0cnVjdG9yKHRlcm1Ob2RlLCB0eXBlcywgY29uc3RydWN0b3IsIGNvbnRleHQsIHZlcmlmeUFoZWFkKTtcblxuICAgIGlmICh0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3IpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB2ZXJpZnlUZXJtQXNWYXJpYWJsZSh0ZXJtTm9kZSwgdmFyaWFibGVzLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgdGVybVZlcmlmaWVkQXNWYXJpYWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0IHRlcm1TdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyh0ZXJtTm9kZSk7XG5cbiAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBhcyBhIHZhcmlhYmxlLi4uYCwgdGVybU5vZGUpO1xuXG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKTtcblxuICBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgdmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuXG4gICAgaWYgKHZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgbGV0IHZlcmlmaWVkQWhlYWQ7XG5cbiAgICAgIGNvbnN0IHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuXG4gICAgICB2YXJpYWJsZXMucHVzaCh2YXJpYWJsZSk7XG5cbiAgICAgIHZlcmlmaWVkQWhlYWQgPSB2ZXJpZnlBaGVhZCgpO1xuXG4gICAgICBpZiAoIXZlcmlmaWVkQWhlYWQpIHtcbiAgICAgICAgdmFyaWFibGVzLnBvcCgpO1xuICAgICAgfVxuXG4gICAgICB0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlID0gdmVyaWZpZWRBaGVhZDsgLy8vXG4gICAgfVxuICB9XG5cbiAgaWYgKHRlcm1WZXJpZmllZEFzVmFyaWFibGUpIHtcbiAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYXMgYSB2YXJpYWJsZS5gLCB0ZXJtTm9kZSk7XG4gIH1cblxuICByZXR1cm4gdGVybVZlcmlmaWVkQXNWYXJpYWJsZTtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5VGVybUFnYWluc3RDb25zdHJ1Y3Rvcih0ZXJtTm9kZSwgdHlwZXMsIGNvbnN0cnVjdG9yLCBjb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgdGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9yO1xuXG4gIGNvbnN0IHRlcm1TdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyh0ZXJtTm9kZSksXG4gICAgICAgIGNvbnN0cnVjdG9yU3RyaW5nID0gY29uc3RydWN0b3IuZ2V0U3RyaW5nKCk7XG5cbiAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBhZ2FpbnN0IHRoZSAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yLi4uYCwgdGVybU5vZGUpO1xuXG4gIGNvbnN0IGNvbnN0cnVjdG9yVGVybU5vZGUgPSBjb25zdHJ1Y3Rvci5nZXRUZXJtTm9kZSgpLFxuICAgICAgICBub25UZXJtaW5hbE5OZGVBID0gdGVybU5vZGUsICAvLy9cbiAgICAgICAgbm9uVGVybWluYWxOb2RlQiA9IGNvbnN0cnVjdG9yVGVybU5vZGUsICAvLy9cbiAgICAgICAgbm9kZVZlcmlmaWVkID0gdGVybU5vZGVzVmVyaWZpZXIudmVyaWZ5Tm9uVGVybWluYWxOb2RlKG5vblRlcm1pbmFsTk5kZUEsIG5vblRlcm1pbmFsTm9kZUIsIGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgICBsZXQgdmVyaWZpZWRBaGVhZDtcblxuICAgICAgICAgIGNvbnN0IHR5cGUgPSBjb25zdHJ1Y3Rvci5nZXRUeXBlKCk7XG5cbiAgICAgICAgICB0eXBlcy5wdXNoKHR5cGUpO1xuXG4gICAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICAgICAgICBpZiAoIXZlcmlmaWVkQWhlYWQpIHtcbiAgICAgICAgICAgIHR5cGVzLnBvcCgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICB9KTtcblxuICB0ZXJtVmVyaWZpZWRBZ2FpbnN0Q29uc3RydWN0b3IgPSBub2RlVmVyaWZpZWQ7ICAvLy9cblxuICBpZiAodGVybVZlcmlmaWVkQWdhaW5zdENvbnN0cnVjdG9yKSB7XG4gICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFnYWluc3QgdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IuYCwgdGVybU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5VGVybUFzU3RhbmRhbG9uZVZhcmlhYmxlKHRlcm1Ob2RlLCB0eXBlcywgY29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHRlcm1WZXJpZmllZEFzU3RhbmRhbG9uZVZhcmlhYmxlO1xuXG4gIGNvbnN0IHRlcm1TdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyh0ZXJtTm9kZSk7XG5cbiAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBhcyBhIHN0YW5kYWxvbmUgdmFyaWFibGUuLi5gLCB0ZXJtTm9kZSk7XG5cbiAgY29uc3QgdmFyaWFibGVzID0gW10sXG4gICAgICAgIHRlcm1WZXJpZmllZEFzVmFyaWFibGUgPSB2ZXJpZnlUZXJtQXNWYXJpYWJsZSh0ZXJtTm9kZSwgdmFyaWFibGVzLCBjb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgbGV0IHZlcmlmaWVkQWhlYWQ7XG5cbiAgICAgICAgICBjb25zdCBmaXJzdFZhcmlhYmxlID0gZmlyc3QodmFyaWFibGVzKSxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZSA9IGZpcnN0VmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgICAgIHR5cGUgPSB2YXJpYWJsZS5nZXRUeXBlKCk7XG5cbiAgICAgICAgICB0eXBlcy5wdXNoKHR5cGUpO1xuXG4gICAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICAgICAgICBpZiAoIXZlcmlmaWVkQWhlYWQpIHtcbiAgICAgICAgICAgIHR5cGVzLnBvcCgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICB9KTtcblxuICB0ZXJtVmVyaWZpZWRBc1N0YW5kYWxvbmVWYXJpYWJsZSA9IHRlcm1WZXJpZmllZEFzVmFyaWFibGU7ICAvLy9cblxuICBpZiAodGVybVZlcmlmaWVkQXNTdGFuZGFsb25lVmFyaWFibGUpIHtcbiAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYXMgYSBzdGFuZGFsb25lIHZhcmlhYmxlLmAsIHRlcm1Ob2RlKTtcbiAgfVxuXG4gIHJldHVybiB0ZXJtVmVyaWZpZWRBc1N0YW5kYWxvbmVWYXJpYWJsZTtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlUZXJtQWdhaW5zdENvbnN0cnVjdG9ycyIsInZlcmlmeVRlcm1Bc1ZhcmlhYmxlIiwidmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ2ZXJpZnlUZXJtIiwidGVybU5vZGUiLCJ0eXBlcyIsImNvbnRleHQiLCJ2ZXJpZnlBaGVhZCIsInRlcm1WZXJpZmllZCIsInRlcm1TdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsInZlcmlmeVRlcm1GdW5jdGlvbnMiLCJ2ZXJpZnlUZXJtQXNTdGFuZGFsb25lVmFyaWFibGUiLCJzb21lIiwidmVyaWZ5VGVybUZ1bmN0aW9uIiwiZmlyc3RUeXBlIiwiZmlyc3QiLCJ0eXBlIiwidHlwZU5hbWUiLCJnZXROYW1lIiwiZGVidWciLCJPYmplY3QiLCJhc3NpZ24iLCJ0ZXJtTm9kZXNWZXJpZmllciIsInRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvcnMiLCJjb25zdHJ1Y3RvcnMiLCJnZXRDb25zdHJ1Y3RvcnMiLCJjb25zdHJ1Y3RvciIsInRlcm1WZXJpZmllZEFnYWluc3RDb25zdHJ1Y3RvciIsInZlcmlmeVRlcm1BZ2FpbnN0Q29uc3RydWN0b3IiLCJ2YXJpYWJsZXMiLCJ0ZXJtVmVyaWZpZWRBc1ZhcmlhYmxlIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGVOYW1lIiwidmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlUHJlc2VudCIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUiLCJ2ZXJpZmllZEFoZWFkIiwidmFyaWFibGUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSIsInB1c2giLCJwb3AiLCJjb25zdHJ1Y3RvclN0cmluZyIsImdldFN0cmluZyIsImNvbnN0cnVjdG9yVGVybU5vZGUiLCJnZXRUZXJtTm9kZSIsIm5vblRlcm1pbmFsTk5kZUEiLCJub25UZXJtaW5hbE5vZGVCIiwibm9kZVZlcmlmaWVkIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwiZ2V0VHlwZSIsInRlcm1WZXJpZmllZEFzU3RhbmRhbG9uZVZhcmlhYmxlIiwiZmlyc3RWYXJpYWJsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBNENBLE9BQTBCO2VBQTFCOztJQUVnQkEsNkJBQTZCO2VBQTdCQTs7SUFnQkFDLG9CQUFvQjtlQUFwQkE7OzsyREE1RGM7cUJBRVI7cUJBQ2tDOzs7Ozs7QUFFeEQsSUFBTUMsb0JBQW9CQyxJQUFBQSxnQkFBUyxFQUFDO0FBRXBDLFNBQVNDLFdBQVdDLFFBQVEsRUFBRUMsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLFdBQVc7SUFDdkQsSUFBSUM7SUFFSixJQUFNQyxhQUFhSCxRQUFRSSxZQUFZLENBQUNOO0lBRXhDRSxRQUFRSyxLQUFLLENBQUMsQUFBQyxrQkFBNEIsT0FBWEYsWUFBVyxjQUFZTDtJQUV2RCxJQUFNUSxzQkFBc0I7UUFDMUJDO1FBQ0FkO0tBQ0Q7SUFFRFMsZUFBZUks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