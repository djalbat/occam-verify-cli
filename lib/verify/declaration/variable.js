"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyVariableDeclaration;
    }
});
var _variable = /*#__PURE__*/ _interop_require_default(require("../../variable"));
var _variable1 = /*#__PURE__*/ _interop_require_default(require("../../assignment/variable"));
var _query = require("../../utilities/query");
var _type = require("../../type");
var _constants = require("../../constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var typeNodeQuery = (0, _query.nodeQuery)("/variableDeclaration/type"), variableNodeQuery = (0, _query.nodeQuery)("/variableDeclaration/variable");
function verifyVariableDeclaration(variableDeclarationNode, fileContext) {
    var variableDeclarationVerified;
    var typeNode = typeNodeQuery(variableDeclarationNode), variableNode = variableNodeQuery(variableDeclarationNode), typeString = typeNode === null ? _constants.EMPTY_STRING : fileContext.nodeAsString(typeNode), variableString = fileContext.nodeAsString(variableNode);
    typeString === _constants.EMPTY_STRING ? fileContext.trace("Verifying the '".concat(variableString, "' variable declaration..."), variableDeclarationNode) : fileContext.trace("Verifying the '".concat(variableString, ":").concat(typeString, "' variable declaration..."), variableDeclarationNode);
    var variableVVerified = verifyVariable(variableNode, typeNode, fileContext);
    variableDeclarationVerified = variableVVerified; ///
    if (variableDeclarationVerified) {
        typeString === _constants.EMPTY_STRING ? fileContext.debug("...verified the '".concat(variableString, "' variable declaration."), variableDeclarationNode) : fileContext.debug("...verified the '".concat(variableString, ":").concat(typeString, "' variable declaration."), variableDeclarationNode);
    }
    return variableDeclarationVerified;
}
function verifyVariable(variableNode, typeNode, fileContext) {
    var variableVerified = false;
    var variableString = fileContext.nodeAsString(variableNode);
    fileContext.trace("Verifying the '".concat(variableString, "' variable..."), variableNode);
    var variablePresent = fileContext.isVariablePresentByVariableName(variableName);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy92ZXJpZnkvZGVjbGFyYXRpb24vdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWYXJpYWJsZSBmcm9tIFwiLi4vLi4vdmFyaWFibGVcIjtcbmltcG9ydCBWYXJpYWJsZUFzc2lnbm1lbnQgZnJvbSBcIi4uLy4uL2Fzc2lnbm1lbnQvdmFyaWFibGVcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgb2JqZWN0VHlwZSB9IGZyb20gXCIuLi8uLi90eXBlXCI7XG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFyaWFibGVEZWNsYXJhdGlvbi90eXBlXCIpLFxuICAgICAgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdmFyaWFibGVEZWNsYXJhdGlvbi92YXJpYWJsZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5VmFyaWFibGVEZWNsYXJhdGlvbih2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHZhcmlhYmxlRGVjbGFyYXRpb25WZXJpZmllZDtcblxuICBjb25zdCB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkodmFyaWFibGVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeSh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgIHR5cGVTdHJpbmcgPSAodHlwZU5vZGUgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgRU1QVFlfU1RSSU5HIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcodHlwZU5vZGUpLFxuICAgICAgICB2YXJpYWJsZVN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyh2YXJpYWJsZU5vZGUpO1xuXG4gICh0eXBlU3RyaW5nID09PSBFTVBUWV9TVFJJTkcpID9cbiAgICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIGRlY2xhcmF0aW9uLi4uYCwgdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUpIDpcbiAgICAgIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3ZhcmlhYmxlU3RyaW5nfToke3R5cGVTdHJpbmd9JyB2YXJpYWJsZSBkZWNsYXJhdGlvbi4uLmAsIHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKTtcblxuICBjb25zdCB2YXJpYWJsZVZWZXJpZmllZCA9IHZlcmlmeVZhcmlhYmxlKHZhcmlhYmxlTm9kZSwgdHlwZU5vZGUsIGZpbGVDb250ZXh0KTtcblxuICB2YXJpYWJsZURlY2xhcmF0aW9uVmVyaWZpZWQgPSB2YXJpYWJsZVZWZXJpZmllZDsgIC8vL1xuXG4gIGlmICh2YXJpYWJsZURlY2xhcmF0aW9uVmVyaWZpZWQpIHtcbiAgICAodHlwZVN0cmluZyA9PT0gRU1QVFlfU1RSSU5HKSA/XG4gICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUgZGVjbGFyYXRpb24uYCwgdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUpIDpcbiAgICAgICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt2YXJpYWJsZVN0cmluZ306JHt0eXBlU3RyaW5nfScgdmFyaWFibGUgZGVjbGFyYXRpb24uYCwgdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUpO1xuICB9XG5cbiAgcmV0dXJuIHZhcmlhYmxlRGVjbGFyYXRpb25WZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5VmFyaWFibGUodmFyaWFibGVOb2RlLCB0eXBlTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHZhcmlhYmxlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyh2YXJpYWJsZU5vZGUpO1xuXG4gIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuLi5gLCB2YXJpYWJsZU5vZGUpO1xuXG4gIGNvbnN0IHZhcmlhYmxlUHJlc2VudCA9IGZpbGVDb250ZXh0LmlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKTtcblxuICBpZiAodmFyaWFibGVQcmVzZW50KSB7XG4gICAgZmlsZUNvbnRleHQuZGVidWcoYFRoZSB2YXJpYWJsZSAnJHt2YXJpYWJsZVN0cmluZ30nIGlzIGFscmVhZHkgcHJlc2VudC5gLCB2YXJpYWJsZU5vZGUpO1xuICB9IGVsc2Uge1xuICAgIGxldCB2YXJpYWJsZTtcblxuICAgIGlmICh0eXBlTm9kZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgdHlwZSA9IG9iamVjdFR5cGU7XG5cbiAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUodmFyaWFibGVOb2RlLCB0eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZSA9IGZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTm9kZSh0eXBlTm9kZSk7XG5cbiAgICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHR5cGVTdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcodHlwZU5vZGUpO1xuXG4gICAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGBUaGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSdzICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIG5vdCBwcmVzZW50LmAsIHZhcmlhYmxlTm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYXJpYWJsZU5vZGVBbmRUeXBlKHZhcmlhYmxlTm9kZSwgdHlwZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZUFzc2lnbm1lbnQgPSBWYXJpYWJsZUFzc2lnbm1lbnQuZnJvbVZhcmlhYmxlKHZhcmlhYmxlKSxcbiAgICAgICAgICAgIHZhcmlhYmxlQXNzaWduZWQgPSB2YXJpYWJsZUFzc2lnbm1lbnQuYXNzaWduKGZpbGVDb250ZXh0KTtcblxuICAgICAgaWYgKHZhcmlhYmxlQXNzaWduZWQpIHtcbiAgICAgICAgdmFyaWFibGVWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHZhcmlhYmxlVmVyaWZpZWQpIHtcbiAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuYCwgdmFyaWFibGVOb2RlKTtcbiAgfVxuXG4gIHJldHVybiB2YXJpYWJsZVZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeVZhcmlhYmxlRGVjbGFyYXRpb24iLCJ0eXBlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidmFyaWFibGVOb2RlUXVlcnkiLCJ2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsImZpbGVDb250ZXh0IiwidmFyaWFibGVEZWNsYXJhdGlvblZlcmlmaWVkIiwidHlwZU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJ0eXBlU3RyaW5nIiwiRU1QVFlfU1RSSU5HIiwibm9kZUFzU3RyaW5nIiwidmFyaWFibGVTdHJpbmciLCJ0cmFjZSIsInZhcmlhYmxlVlZlcmlmaWVkIiwidmVyaWZ5VmFyaWFibGUiLCJkZWJ1ZyIsInZhcmlhYmxlVmVyaWZpZWQiLCJ2YXJpYWJsZVByZXNlbnQiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lIiwidmFyaWFibGVOYW1lIiwidmFyaWFibGUiLCJ0eXBlIiwib2JqZWN0VHlwZSIsIlZhcmlhYmxlIiwiZnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUiLCJmaW5kVHlwZUJ5VHlwZU5vZGUiLCJ2YXJpYWJsZUFzc2lnbm1lbnQiLCJWYXJpYWJsZUFzc2lnbm1lbnQiLCJmcm9tVmFyaWFibGUiLCJ2YXJpYWJsZUFzc2lnbmVkIiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQXdCQTs7OytEQVZIO2dFQUNVO3FCQUVMO29CQUNDO3lCQUNFOzs7Ozs7QUFFN0IsSUFBTUMsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLDhCQUMxQkMsb0JBQW9CRCxJQUFBQSxnQkFBUyxFQUFDO0FBRXJCLFNBQVNGLDBCQUEwQkksdUJBQXVCLEVBQUVDLFdBQVc7SUFDcEYsSUFBSUM7SUFFSixJQUFNQyxXQUFXTixjQUFjRywwQkFDekJJLGVBQWVMLGtCQUFrQkMsMEJBQ2pDSyxhQUFhLEFBQUNGLGFBQWEsT0FDWkcsdUJBQVksR0FDVkwsWUFBWU0sWUFBWSxDQUFDSixXQUMxQ0ssaUJBQWlCUCxZQUFZTSxZQUFZLENBQUNIO0lBRS9DQyxlQUFlQyx1QkFBWSxHQUMxQkwsWUFBWVEsS0FBSyxDQUFDLEFBQUMsa0JBQWdDLE9BQWZELGdCQUFlLDhCQUE0QlIsMkJBQzdFQyxZQUFZUSxLQUFLLENBQUMsQUFBQyxrQkFBbUNKLE9BQWxCRyxnQkFBZSxLQUFjLE9BQVhILFlBQVcsOEJBQTRCTDtJQUVqRyxJQUFNVSxvQkFBb0JDLGVBQWVQLGNBQWNELFVBQVVGO0lBRWpFQyw4QkFBOEJRLG1CQUFvQixHQUFHO0lBRXJELElBQUlSLDZCQUE2QjtRQUM5QkcsZUFBZUMsdUJBQVksR0FDMUJMLFlBQVlXLEtBQUssQ0FBQyxBQUFDLG9CQUFrQyxPQUFmSixnQkFBZSw0QkFBMEJSLDJCQUM3RUMsWUFBWVcsS0FBSyxDQUFDLEFBQUMsb0JBQXFDUCxPQUFsQkcsZ0JBQWUsS0FBYyxPQUFYSCxZQUFXLDRCQUEwQkw7SUFDbkc7SUFFQSxPQUFPRTtBQUNUO0FBRUEsU0FBU1MsZUFBZVAsWUFBWSxFQUFFRCxRQUFRLEVBQUVGLFdBQVc7SUFDekQsSUFBSVksbUJBQW1CO0lBRXZCLElBQU1MLGlCQUFpQlAsWUFBWU0sWUFBWSxDQUFDSDtJQUVoREgsWUFBWVEsS0FBSyxDQUFDLEFBQUMsa0JBQWdDLE9BQWZELGdCQUFlLGtCQUFnQko7SUFFbkUsSUFBTVUsa0JBQWtCYixZQUFZYywrQkFBK0IsQ0FBQ0M7SUFFcEUsSUFBSUYsaUJBQWlCO1FBQ25CYixZQUFZVyxLQUFLLENBQUMsQUFBQyxpQkFBK0IsT0FBZkosZ0JBQWUsMEJBQXdCSjtJQUM1RSxPQUFPO1FBQ0wsSUFBSWE7UUFFSixJQUFJZCxhQUFhLE1BQU07WUFDckIsSUFBTWUsT0FBT0MsZ0JBQVU7WUFFdkJGLFdBQVdHLGlCQUFRLENBQUNDLHVCQUF1QixDQUFDakIsY0FBY2M7UUFDNUQsT0FBTztZQUNMLElBQU1BLFFBQU9qQixZQUFZcUIsa0JBQWtCLENBQUNuQjtZQUU1QyxJQUFJZSxVQUFTLE1BQU07Z0JBQ2pCLElBQU1iLGFBQWFKLFlBQVlNLFlBQVksQ0FBQ0o7Z0JBRTVDRixZQUFZVyxLQUFLLENBQUMsQUFBQyxRQUFzQ1AsT0FBL0JHLGdCQUFlLGtCQUEyQixPQUFYSCxZQUFXLDJCQUF5QkQ7WUFDL0YsT0FBTztnQkFDTGEsV0FBV0csaUJBQVEsQ0FBQ0MsdUJBQXVCLENBQUNqQixjQUFjYztZQUM1RDtRQUNGO1FBRUEsSUFBSUQsYUFBYSxNQUFNO1lBQ3JCLElBQU1NLHFCQUFxQkMsa0JBQWtCLENBQUNDLFlBQVksQ0FBQ1IsV0FDckRTLG1CQUFtQkgsbUJBQW1CSSxNQUFNLENBQUMxQjtZQUVuRCxJQUFJeUIsa0JBQWtCO2dCQUNwQmIsbUJBQW1CO1lBQ3JCO1FBQ0Y7SUFDRjtJQUVBLElBQUlBLGtCQUFrQjtRQUNwQlosWUFBWVcsS0FBSyxDQUFDLEFBQUMsb0JBQWtDLE9BQWZKLGdCQUFlLGdCQUFjSjtJQUNyRTtJQUVBLE9BQU9TO0FBQ1QifQ==