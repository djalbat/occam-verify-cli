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
        return verifyVariable;
    },
    verifyStandaloneVariable: function() {
        return verifyStandaloneVariable;
    }
});
var _variable = /*#__PURE__*/ _interop_require_default(require("../variable"));
var _variable1 = /*#__PURE__*/ _interop_require_default(require("../assignment/variable"));
var _type = require("../type");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function verifyVariable(variableNode, typeNode, fileContext) {
    var variableVerified = false;
    var variableString = fileContext.nodeAsString(variableNode);
    fileContext.trace("Verifying the '".concat(variableString, "' variable..."), variableNode);
    var variablePresent = fileContext.isVariablePresentByVariableNode(variableNode);
    if (variablePresent) {
        fileContext.debug("The variable '".concat(variableString, "' is already present."), variableNode);
    } else {
        var variable;
        if (typeNode === null) {
            var type = _type.objectType;
            variable = _variable.default.fromVariableNodeAndType(variableNode, type);
        } else {
            var type1 = fileContext.findTypeByTypeNode(typeNode);
            if (type1 === null) {
                var typeString = fileContext.nodeAsString(typeNode);
                fileContext.debug("The '".concat(variableString, "' variable's '").concat(typeString, "' type is not present."), variableNode);
            } else {
                variable = _variable.default.fromVariableNodeAndType(variableNode, type1);
            }
        }
        if (variable !== null) {
            var variableAssignment = _variable1.default.fromVariable(variable), variableAssigned = variableAssignment.assign(fileContext);
            if (variableAssigned) {
                variableVerified = true;
            }
        }
    }
    if (variableVerified) {
        fileContext.debug("...verified the '".concat(variableString, "' variable."), variableNode);
    }
    return variableVerified;
}
function verifyStandaloneVariable(variableNode, localContext, verifyAhead) {
    var standaloneVariableVerified = false;
    var variableString = localContext.nodeAsString(variableNode);
    localContext.trace("Verifying the '".concat(variableString, "' standalone variable..."), variableNode);
    var variablePresent = localContext.isVariablePresentByVariableNode(variableNode);
    if (variablePresent) {
        var verifiedAhead = verifyAhead();
        standaloneVariableVerified = verifiedAhead; ///
    }
    if (standaloneVariableVerified) {
        localContext.debug("...verified the '".concat(variableString, "' standalone variable."), variableNode);
    }
    return standaloneVariableVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWYXJpYWJsZSBmcm9tIFwiLi4vdmFyaWFibGVcIjtcbmltcG9ydCBWYXJpYWJsZUFzc2lnbm1lbnQgZnJvbSBcIi4uL2Fzc2lnbm1lbnQvdmFyaWFibGVcIjtcblxuaW1wb3J0IHsgb2JqZWN0VHlwZSB9IGZyb20gXCIuLi90eXBlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVZhcmlhYmxlKHZhcmlhYmxlTm9kZSwgdHlwZU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGxldCB2YXJpYWJsZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgdmFyaWFibGVTdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcodmFyaWFibGVOb2RlKTtcblxuICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLi4uYCwgdmFyaWFibGVOb2RlKTtcblxuICBjb25zdCB2YXJpYWJsZVByZXNlbnQgPSBmaWxlQ29udGV4dC5pc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG5cbiAgaWYgKHZhcmlhYmxlUHJlc2VudCkge1xuICAgIGZpbGVDb250ZXh0LmRlYnVnKGBUaGUgdmFyaWFibGUgJyR7dmFyaWFibGVTdHJpbmd9JyBpcyBhbHJlYWR5IHByZXNlbnQuYCwgdmFyaWFibGVOb2RlKTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgdmFyaWFibGU7XG5cbiAgICBpZiAodHlwZU5vZGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHR5cGUgPSBvYmplY3RUeXBlO1xuXG4gICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYXJpYWJsZU5vZGVBbmRUeXBlKHZhcmlhYmxlTm9kZSwgdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGUgPSBmaWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5vZGUodHlwZU5vZGUpO1xuXG4gICAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgICBjb25zdCB0eXBlU3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKHR5cGVOb2RlKTtcblxuICAgICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgVGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUncyAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBub3QgcHJlc2VudC5gLCB2YXJpYWJsZU5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVmFyaWFibGVOb2RlQW5kVHlwZSh2YXJpYWJsZU5vZGUsIHR5cGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFyaWFibGVBc3NpZ25tZW50ID0gVmFyaWFibGVBc3NpZ25tZW50LmZyb21WYXJpYWJsZSh2YXJpYWJsZSksXG4gICAgICAgICAgICB2YXJpYWJsZUFzc2lnbmVkID0gdmFyaWFibGVBc3NpZ25tZW50LmFzc2lnbihmaWxlQ29udGV4dCk7XG5cbiAgICAgIGlmICh2YXJpYWJsZUFzc2lnbmVkKSB7XG4gICAgICAgIHZhcmlhYmxlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmICh2YXJpYWJsZVZlcmlmaWVkKSB7XG4gICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLmAsIHZhcmlhYmxlTm9kZSk7XG4gIH1cblxuICByZXR1cm4gdmFyaWFibGVWZXJpZmllZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHZlcmlmeVN0YW5kYWxvbmVWYXJpYWJsZSh2YXJpYWJsZU5vZGUsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHN0YW5kYWxvbmVWYXJpYWJsZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgdmFyaWFibGVTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHZhcmlhYmxlTm9kZSk7XG5cbiAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgc3RhbmRhbG9uZSB2YXJpYWJsZS4uLmAsIHZhcmlhYmxlTm9kZSk7XG5cbiAgY29uc3QgdmFyaWFibGVQcmVzZW50ID0gbG9jYWxDb250ZXh0LmlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICBpZiAodmFyaWFibGVQcmVzZW50KSB7XG4gICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICBzdGFuZGFsb25lVmFyaWFibGVWZXJpZmllZCA9IHZlcmlmaWVkQWhlYWQ7IC8vL1xuICB9XG5cbiAgaWYgKHN0YW5kYWxvbmVWYXJpYWJsZVZlcmlmaWVkKSB7XG4gICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyBzdGFuZGFsb25lIHZhcmlhYmxlLmAsIHZhcmlhYmxlTm9kZSk7XG4gIH1cblxuICByZXR1cm4gc3RhbmRhbG9uZVZhcmlhYmxlVmVyaWZpZWQ7XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5VmFyaWFibGUiLCJ2ZXJpZnlTdGFuZGFsb25lVmFyaWFibGUiLCJ2YXJpYWJsZU5vZGUiLCJ0eXBlTm9kZSIsImZpbGVDb250ZXh0IiwidmFyaWFibGVWZXJpZmllZCIsInZhcmlhYmxlU3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidHJhY2UiLCJ2YXJpYWJsZVByZXNlbnQiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOb2RlIiwiZGVidWciLCJ2YXJpYWJsZSIsInR5cGUiLCJvYmplY3RUeXBlIiwiVmFyaWFibGUiLCJmcm9tVmFyaWFibGVOb2RlQW5kVHlwZSIsImZpbmRUeXBlQnlUeXBlTm9kZSIsInR5cGVTdHJpbmciLCJ2YXJpYWJsZUFzc2lnbm1lbnQiLCJWYXJpYWJsZUFzc2lnbm1lbnQiLCJmcm9tVmFyaWFibGUiLCJ2YXJpYWJsZUFzc2lnbmVkIiwiYXNzaWduIiwibG9jYWxDb250ZXh0IiwidmVyaWZ5QWhlYWQiLCJzdGFuZGFsb25lVmFyaWFibGVWZXJpZmllZCIsInZlcmlmaWVkQWhlYWQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQU9BLE9BNkNDO2VBN0N1QkE7O0lBK0NSQyx3QkFBd0I7ZUFBeEJBOzs7K0RBcERLO2dFQUNVO29CQUVKOzs7Ozs7QUFFWixTQUFTRCxlQUFlRSxZQUFZLEVBQUVDLFFBQVEsRUFBRUMsV0FBVztJQUN4RSxJQUFJQyxtQkFBbUI7SUFFdkIsSUFBTUMsaUJBQWlCRixZQUFZRyxZQUFZLENBQUNMO0lBRWhERSxZQUFZSSxLQUFLLENBQUMsQUFBQyxrQkFBZ0MsT0FBZkYsZ0JBQWUsa0JBQWdCSjtJQUVuRSxJQUFNTyxrQkFBa0JMLFlBQVlNLCtCQUErQixDQUFDUjtJQUVwRSxJQUFJTyxpQkFBaUI7UUFDbkJMLFlBQVlPLEtBQUssQ0FBQyxBQUFDLGlCQUErQixPQUFmTCxnQkFBZSwwQkFBd0JKO0lBQzVFLE9BQU87UUFDTCxJQUFJVTtRQUVKLElBQUlULGFBQWEsTUFBTTtZQUNyQixJQUFNVSxPQUFPQyxnQkFBVTtZQUV2QkYsV0FBV0csaUJBQVEsQ0FBQ0MsdUJBQXVCLENBQUNkLGNBQWNXO1FBQzVELE9BQU87WUFDTCxJQUFNQSxRQUFPVCxZQUFZYSxrQkFBa0IsQ0FBQ2Q7WUFFNUMsSUFBSVUsVUFBUyxNQUFNO2dCQUNqQixJQUFNSyxhQUFhZCxZQUFZRyxZQUFZLENBQUNKO2dCQUU1Q0MsWUFBWU8sS0FBSyxDQUFDLEFBQUMsUUFBc0NPLE9BQS9CWixnQkFBZSxrQkFBMkIsT0FBWFksWUFBVywyQkFBeUJoQjtZQUMvRixPQUFPO2dCQUNMVSxXQUFXRyxpQkFBUSxDQUFDQyx1QkFBdUIsQ0FBQ2QsY0FBY1c7WUFDNUQ7UUFDRjtRQUVBLElBQUlELGFBQWEsTUFBTTtZQUNyQixJQUFNTyxxQkFBcUJDLGtCQUFrQixDQUFDQyxZQUFZLENBQUNULFdBQ3JEVSxtQkFBbUJILG1CQUFtQkksTUFBTSxDQUFDbkI7WUFFbkQsSUFBSWtCLGtCQUFrQjtnQkFDcEJqQixtQkFBbUI7WUFDckI7UUFDRjtJQUNGO0lBRUEsSUFBSUEsa0JBQWtCO1FBQ3BCRCxZQUFZTyxLQUFLLENBQUMsQUFBQyxvQkFBa0MsT0FBZkwsZ0JBQWUsZ0JBQWNKO0lBQ3JFO0lBRUEsT0FBT0c7QUFDVDtBQUVPLFNBQVNKLHlCQUF5QkMsWUFBWSxFQUFFc0IsWUFBWSxFQUFFQyxXQUFXO0lBQzlFLElBQUlDLDZCQUE2QjtJQUVqQyxJQUFNcEIsaUJBQWlCa0IsYUFBYWpCLFlBQVksQ0FBQ0w7SUFFakRzQixhQUFhaEIsS0FBSyxDQUFDLEFBQUMsa0JBQWdDLE9BQWZGLGdCQUFlLDZCQUEyQko7SUFFL0UsSUFBTU8sa0JBQWtCZSxhQUFhZCwrQkFBK0IsQ0FBQ1I7SUFFckUsSUFBSU8saUJBQWlCO1FBQ25CLElBQU1rQixnQkFBZ0JGO1FBRXRCQyw2QkFBNkJDLGVBQWUsR0FBRztJQUNqRDtJQUVBLElBQUlELDRCQUE0QjtRQUM5QkYsYUFBYWIsS0FBSyxDQUFDLEFBQUMsb0JBQWtDLE9BQWZMLGdCQUFlLDJCQUF5Qko7SUFDakY7SUFFQSxPQUFPd0I7QUFDVCJ9