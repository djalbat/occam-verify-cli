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
var _name = require("../utilities/name");
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
        var typeName = (0, _name.typeNameFromTypeNode)(typeNode);
        if (typeName === null) {
            var type = _type.objectType;
            variable = _variable.default.fromVariableNodeAndType(variableNode, type);
        } else {
            var type1 = fileContext.findTypeByTypeName(typeName);
            if (type1 === null) {
                fileContext.debug("The '".concat(variableString, "' variable's '").concat(typeName, "' type is not present."), variableNode);
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
function verifyStandaloneVariable(variableNode, localMetaContext, verifyAhead) {
    var standaloneVariableVerified = false;
    var variableString = localMetaContext.nodeAsString(variableNode);
    localMetaContext.trace("Verifying the '".concat(variableString, "' standalone variable..."), variableNode);
    var variablePresent = localMetaContext.isVariablePresentByVariableNode(variableNode);
    if (variablePresent) {
        var verifiedAhead = verifyAhead();
        standaloneVariableVerified = verifiedAhead; ///
    }
    if (standaloneVariableVerified) {
        localMetaContext.debug("...verified the '".concat(variableString, "' standalone variable."), variableNode);
    }
    return standaloneVariableVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWYXJpYWJsZSBmcm9tIFwiLi4vdmFyaWFibGVcIjtcbmltcG9ydCBWYXJpYWJsZUFzc2lnbm1lbnQgZnJvbSBcIi4uL2Fzc2lnbm1lbnQvdmFyaWFibGVcIjtcblxuaW1wb3J0IHsgb2JqZWN0VHlwZSB9IGZyb20gXCIuLi90eXBlXCI7XG5pbXBvcnQgeyB0eXBlTmFtZUZyb21UeXBlTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvbmFtZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlWYXJpYWJsZSh2YXJpYWJsZU5vZGUsIHR5cGVOb2RlLCBmaWxlQ29udGV4dCkge1xuICBsZXQgdmFyaWFibGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHZhcmlhYmxlU3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKHZhcmlhYmxlTm9kZSk7XG5cbiAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmAsIHZhcmlhYmxlTm9kZSk7XG5cbiAgY29uc3QgdmFyaWFibGVQcmVzZW50ID0gZmlsZUNvbnRleHQuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpO1xuXG4gIGlmICh2YXJpYWJsZVByZXNlbnQpIHtcbiAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgVGhlIHZhcmlhYmxlICcke3ZhcmlhYmxlU3RyaW5nfScgaXMgYWxyZWFkeSBwcmVzZW50LmAsIHZhcmlhYmxlTm9kZSk7XG4gIH0gZWxzZSB7XG4gICAgbGV0IHZhcmlhYmxlO1xuXG4gICAgY29uc3QgdHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSk7XG4gICAgXG4gICAgaWYgKHR5cGVOYW1lID09PSBudWxsKSB7XG4gICAgICBjb25zdCB0eXBlID0gb2JqZWN0VHlwZTtcblxuICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVmFyaWFibGVOb2RlQW5kVHlwZSh2YXJpYWJsZU5vZGUsIHR5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlID0gZmlsZUNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgZmlsZUNvbnRleHQuZGVidWcoYFRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlJ3MgJyR7dHlwZU5hbWV9JyB0eXBlIGlzIG5vdCBwcmVzZW50LmAsIHZhcmlhYmxlTm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYXJpYWJsZU5vZGVBbmRUeXBlKHZhcmlhYmxlTm9kZSwgdHlwZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZUFzc2lnbm1lbnQgPSBWYXJpYWJsZUFzc2lnbm1lbnQuZnJvbVZhcmlhYmxlKHZhcmlhYmxlKSxcbiAgICAgICAgICAgIHZhcmlhYmxlQXNzaWduZWQgPSB2YXJpYWJsZUFzc2lnbm1lbnQuYXNzaWduKGZpbGVDb250ZXh0KTtcblxuICAgICAgaWYgKHZhcmlhYmxlQXNzaWduZWQpIHtcbiAgICAgICAgdmFyaWFibGVWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHZhcmlhYmxlVmVyaWZpZWQpIHtcbiAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuYCwgdmFyaWFibGVOb2RlKTtcbiAgfVxuXG4gIHJldHVybiB2YXJpYWJsZVZlcmlmaWVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5U3RhbmRhbG9uZVZhcmlhYmxlKHZhcmlhYmxlTm9kZSwgbG9jYWxNZXRhQ29udGV4dCwgdmVyaWZ5QWhlYWQpIHtcbiAgbGV0IHN0YW5kYWxvbmVWYXJpYWJsZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgdmFyaWFibGVTdHJpbmcgPSBsb2NhbE1ldGFDb250ZXh0Lm5vZGVBc1N0cmluZyh2YXJpYWJsZU5vZGUpO1xuXG4gIGxvY2FsTWV0YUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyBzdGFuZGFsb25lIHZhcmlhYmxlLi4uYCwgdmFyaWFibGVOb2RlKTtcblxuICBjb25zdCB2YXJpYWJsZVByZXNlbnQgPSBsb2NhbE1ldGFDb250ZXh0LmlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICBpZiAodmFyaWFibGVQcmVzZW50KSB7XG4gICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHZlcmlmeUFoZWFkKCk7XG5cbiAgICBzdGFuZGFsb25lVmFyaWFibGVWZXJpZmllZCA9IHZlcmlmaWVkQWhlYWQ7IC8vL1xuICB9XG5cbiAgaWYgKHN0YW5kYWxvbmVWYXJpYWJsZVZlcmlmaWVkKSB7XG4gICAgbG9jYWxNZXRhQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgc3RhbmRhbG9uZSB2YXJpYWJsZS5gLCB2YXJpYWJsZU5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0YW5kYWxvbmVWYXJpYWJsZVZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVZhcmlhYmxlIiwidmVyaWZ5U3RhbmRhbG9uZVZhcmlhYmxlIiwidmFyaWFibGVOb2RlIiwidHlwZU5vZGUiLCJmaWxlQ29udGV4dCIsInZhcmlhYmxlVmVyaWZpZWQiLCJ2YXJpYWJsZVN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwidmFyaWFibGVQcmVzZW50IiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTm9kZSIsImRlYnVnIiwidmFyaWFibGUiLCJ0eXBlTmFtZSIsInR5cGVOYW1lRnJvbVR5cGVOb2RlIiwidHlwZSIsIm9iamVjdFR5cGUiLCJWYXJpYWJsZSIsImZyb21WYXJpYWJsZU5vZGVBbmRUeXBlIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwidmFyaWFibGVBc3NpZ25tZW50IiwiVmFyaWFibGVBc3NpZ25tZW50IiwiZnJvbVZhcmlhYmxlIiwidmFyaWFibGVBc3NpZ25lZCIsImFzc2lnbiIsImxvY2FsTWV0YUNvbnRleHQiLCJ2ZXJpZnlBaGVhZCIsInN0YW5kYWxvbmVWYXJpYWJsZVZlcmlmaWVkIiwidmVyaWZpZWRBaGVhZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBUUEsT0E2Q0M7ZUE3Q3VCQTs7SUErQ1JDLHdCQUF3QjtlQUF4QkE7OzsrREFyREs7Z0VBQ1U7b0JBRUo7b0JBQ1U7Ozs7OztBQUV0QixTQUFTRCxlQUFlRSxZQUFZLEVBQUVDLFFBQVEsRUFBRUMsV0FBVztJQUN4RSxJQUFJQyxtQkFBbUI7SUFFdkIsSUFBTUMsaUJBQWlCRixZQUFZRyxZQUFZLENBQUNMO0lBRWhERSxZQUFZSSxLQUFLLENBQUMsQUFBQyxrQkFBZ0MsT0FBZkYsZ0JBQWUsa0JBQWdCSjtJQUVuRSxJQUFNTyxrQkFBa0JMLFlBQVlNLCtCQUErQixDQUFDUjtJQUVwRSxJQUFJTyxpQkFBaUI7UUFDbkJMLFlBQVlPLEtBQUssQ0FBQyxBQUFDLGlCQUErQixPQUFmTCxnQkFBZSwwQkFBd0JKO0lBQzVFLE9BQU87UUFDTCxJQUFJVTtRQUVKLElBQU1DLFdBQVdDLElBQUFBLDBCQUFvQixFQUFDWDtRQUV0QyxJQUFJVSxhQUFhLE1BQU07WUFDckIsSUFBTUUsT0FBT0MsZ0JBQVU7WUFFdkJKLFdBQVdLLGlCQUFRLENBQUNDLHVCQUF1QixDQUFDaEIsY0FBY2E7UUFDNUQsT0FBTztZQUNMLElBQU1BLFFBQU9YLFlBQVllLGtCQUFrQixDQUFDTjtZQUU1QyxJQUFJRSxVQUFTLE1BQU07Z0JBQ2pCWCxZQUFZTyxLQUFLLENBQUMsQUFBQyxRQUFzQ0UsT0FBL0JQLGdCQUFlLGtCQUF5QixPQUFUTyxVQUFTLDJCQUF5Qlg7WUFDN0YsT0FBTztnQkFDTFUsV0FBV0ssaUJBQVEsQ0FBQ0MsdUJBQXVCLENBQUNoQixjQUFjYTtZQUM1RDtRQUNGO1FBRUEsSUFBSUgsYUFBYSxNQUFNO1lBQ3JCLElBQU1RLHFCQUFxQkMsa0JBQWtCLENBQUNDLFlBQVksQ0FBQ1YsV0FDckRXLG1CQUFtQkgsbUJBQW1CSSxNQUFNLENBQUNwQjtZQUVuRCxJQUFJbUIsa0JBQWtCO2dCQUNwQmxCLG1CQUFtQjtZQUNyQjtRQUNGO0lBQ0Y7SUFFQSxJQUFJQSxrQkFBa0I7UUFDcEJELFlBQVlPLEtBQUssQ0FBQyxBQUFDLG9CQUFrQyxPQUFmTCxnQkFBZSxnQkFBY0o7SUFDckU7SUFFQSxPQUFPRztBQUNUO0FBRU8sU0FBU0oseUJBQXlCQyxZQUFZLEVBQUV1QixnQkFBZ0IsRUFBRUMsV0FBVztJQUNsRixJQUFJQyw2QkFBNkI7SUFFakMsSUFBTXJCLGlCQUFpQm1CLGlCQUFpQmxCLFlBQVksQ0FBQ0w7SUFFckR1QixpQkFBaUJqQixLQUFLLENBQUMsQUFBQyxrQkFBZ0MsT0FBZkYsZ0JBQWUsNkJBQTJCSjtJQUVuRixJQUFNTyxrQkFBa0JnQixpQkFBaUJmLCtCQUErQixDQUFDUjtJQUV6RSxJQUFJTyxpQkFBaUI7UUFDbkIsSUFBTW1CLGdCQUFnQkY7UUFFdEJDLDZCQUE2QkMsZUFBZSxHQUFHO0lBQ2pEO0lBRUEsSUFBSUQsNEJBQTRCO1FBQzlCRixpQkFBaUJkLEtBQUssQ0FBQyxBQUFDLG9CQUFrQyxPQUFmTCxnQkFBZSwyQkFBeUJKO0lBQ3JGO0lBRUEsT0FBT3lCO0FBQ1QifQ==