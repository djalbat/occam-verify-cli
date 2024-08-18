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
var _givenVariable = /*#__PURE__*/ _interop_require_default(require("../verify/givenVariable"));
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
    var standaloneVariableVerified;
    var variableString = localContext.nodeAsString(variableNode);
    localContext.trace("Verifying the '".concat(variableString, "' standalone variable..."), variableNode);
    var variables = [], givenVariableVerified = (0, _givenVariable.default)(variableNode, variables, localContext, verifyAhead);
    standaloneVariableVerified = givenVariableVerified; ///
    if (standaloneVariableVerified) {
        localContext.debug("...verified the '".concat(variableString, "' standalone variable."), variableNode);
    }
    return standaloneVariableVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBWYXJpYWJsZSBmcm9tIFwiLi4vdmFyaWFibGVcIjtcbmltcG9ydCBWYXJpYWJsZUFzc2lnbm1lbnQgZnJvbSBcIi4uL2Fzc2lnbm1lbnQvdmFyaWFibGVcIjtcbmltcG9ydCB2ZXJpZnlHaXZlblZhcmlhYmxlIGZyb20gXCIuLi92ZXJpZnkvZ2l2ZW5WYXJpYWJsZVwiO1xuXG5pbXBvcnQgeyBvYmplY3RUeXBlIH0gZnJvbSBcIi4uL3R5cGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5VmFyaWFibGUodmFyaWFibGVOb2RlLCB0eXBlTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHZhcmlhYmxlVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyh2YXJpYWJsZU5vZGUpO1xuXG4gIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuLi5gLCB2YXJpYWJsZU5vZGUpO1xuXG4gIGNvbnN0IHZhcmlhYmxlUHJlc2VudCA9IGZpbGVDb250ZXh0LmlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICBpZiAodmFyaWFibGVQcmVzZW50KSB7XG4gICAgZmlsZUNvbnRleHQuZGVidWcoYFRoZSB2YXJpYWJsZSAnJHt2YXJpYWJsZVN0cmluZ30nIGlzIGFscmVhZHkgcHJlc2VudC5gLCB2YXJpYWJsZU5vZGUpO1xuICB9IGVsc2Uge1xuICAgIGxldCB2YXJpYWJsZTtcblxuICAgIGlmICh0eXBlTm9kZSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgdHlwZSA9IG9iamVjdFR5cGU7XG5cbiAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUodmFyaWFibGVOb2RlLCB0eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZSA9IGZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTm9kZSh0eXBlTm9kZSk7XG5cbiAgICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHR5cGVTdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcodHlwZU5vZGUpO1xuXG4gICAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGBUaGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSdzICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIG5vdCBwcmVzZW50LmAsIHZhcmlhYmxlTm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYXJpYWJsZU5vZGVBbmRUeXBlKHZhcmlhYmxlTm9kZSwgdHlwZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZUFzc2lnbm1lbnQgPSBWYXJpYWJsZUFzc2lnbm1lbnQuZnJvbVZhcmlhYmxlKHZhcmlhYmxlKSxcbiAgICAgICAgICAgIHZhcmlhYmxlQXNzaWduZWQgPSB2YXJpYWJsZUFzc2lnbm1lbnQuYXNzaWduKGZpbGVDb250ZXh0KTtcblxuICAgICAgaWYgKHZhcmlhYmxlQXNzaWduZWQpIHtcbiAgICAgICAgdmFyaWFibGVWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHZhcmlhYmxlVmVyaWZpZWQpIHtcbiAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuYCwgdmFyaWFibGVOb2RlKTtcbiAgfVxuXG4gIHJldHVybiB2YXJpYWJsZVZlcmlmaWVkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdmVyaWZ5U3RhbmRhbG9uZVZhcmlhYmxlKHZhcmlhYmxlTm9kZSwgbG9jYWxDb250ZXh0LCB2ZXJpZnlBaGVhZCkge1xuICBsZXQgc3RhbmRhbG9uZVZhcmlhYmxlVmVyaWZpZWQ7XG5cbiAgY29uc3QgdmFyaWFibGVTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKHZhcmlhYmxlTm9kZSk7XG5cbiAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgc3RhbmRhbG9uZSB2YXJpYWJsZS4uLmAsIHZhcmlhYmxlTm9kZSk7XG5cbiAgY29uc3QgdmFyaWFibGVzID0gW10sXG4gICAgICAgIGdpdmVuVmFyaWFibGVWZXJpZmllZCA9IHZlcmlmeUdpdmVuVmFyaWFibGUodmFyaWFibGVOb2RlLCB2YXJpYWJsZXMsIGxvY2FsQ29udGV4dCwgdmVyaWZ5QWhlYWQpO1xuXG4gIHN0YW5kYWxvbmVWYXJpYWJsZVZlcmlmaWVkID0gZ2l2ZW5WYXJpYWJsZVZlcmlmaWVkOyAvLy9cblxuICBpZiAoc3RhbmRhbG9uZVZhcmlhYmxlVmVyaWZpZWQpIHtcbiAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHN0YW5kYWxvbmUgdmFyaWFibGUuYCwgdmFyaWFibGVOb2RlKTtcbiAgfVxuXG4gIHJldHVybiBzdGFuZGFsb25lVmFyaWFibGVWZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlWYXJpYWJsZSIsInZlcmlmeVN0YW5kYWxvbmVWYXJpYWJsZSIsInZhcmlhYmxlTm9kZSIsInR5cGVOb2RlIiwiZmlsZUNvbnRleHQiLCJ2YXJpYWJsZVZlcmlmaWVkIiwidmFyaWFibGVTdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0cmFjZSIsInZhcmlhYmxlUHJlc2VudCIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5vZGUiLCJkZWJ1ZyIsInZhcmlhYmxlIiwidHlwZSIsIm9iamVjdFR5cGUiLCJWYXJpYWJsZSIsImZyb21WYXJpYWJsZU5vZGVBbmRUeXBlIiwiZmluZFR5cGVCeVR5cGVOb2RlIiwidHlwZVN0cmluZyIsInZhcmlhYmxlQXNzaWdubWVudCIsIlZhcmlhYmxlQXNzaWdubWVudCIsImZyb21WYXJpYWJsZSIsInZhcmlhYmxlQXNzaWduZWQiLCJhc3NpZ24iLCJsb2NhbENvbnRleHQiLCJ2ZXJpZnlBaGVhZCIsInN0YW5kYWxvbmVWYXJpYWJsZVZlcmlmaWVkIiwidmFyaWFibGVzIiwiZ2l2ZW5WYXJpYWJsZVZlcmlmaWVkIiwidmVyaWZ5R2l2ZW5WYXJpYWJsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBUUEsT0E2Q0M7ZUE3Q3VCQTs7SUErQ1JDLHdCQUF3QjtlQUF4QkE7OzsrREFyREs7Z0VBQ1U7b0VBQ0M7b0JBRUw7Ozs7OztBQUVaLFNBQVNELGVBQWVFLFlBQVksRUFBRUMsUUFBUSxFQUFFQyxXQUFXO0lBQ3hFLElBQUlDLG1CQUFtQjtJQUV2QixJQUFNQyxpQkFBaUJGLFlBQVlHLFlBQVksQ0FBQ0w7SUFFaERFLFlBQVlJLEtBQUssQ0FBQyxBQUFDLGtCQUFnQyxPQUFmRixnQkFBZSxrQkFBZ0JKO0lBRW5FLElBQU1PLGtCQUFrQkwsWUFBWU0sK0JBQStCLENBQUNSO0lBRXBFLElBQUlPLGlCQUFpQjtRQUNuQkwsWUFBWU8sS0FBSyxDQUFDLEFBQUMsaUJBQStCLE9BQWZMLGdCQUFlLDBCQUF3Qko7SUFDNUUsT0FBTztRQUNMLElBQUlVO1FBRUosSUFBSVQsYUFBYSxNQUFNO1lBQ3JCLElBQU1VLE9BQU9DLGdCQUFVO1lBRXZCRixXQUFXRyxpQkFBUSxDQUFDQyx1QkFBdUIsQ0FBQ2QsY0FBY1c7UUFDNUQsT0FBTztZQUNMLElBQU1BLFFBQU9ULFlBQVlhLGtCQUFrQixDQUFDZDtZQUU1QyxJQUFJVSxVQUFTLE1BQU07Z0JBQ2pCLElBQU1LLGFBQWFkLFlBQVlHLFlBQVksQ0FBQ0o7Z0JBRTVDQyxZQUFZTyxLQUFLLENBQUMsQUFBQyxRQUFzQ08sT0FBL0JaLGdCQUFlLGtCQUEyQixPQUFYWSxZQUFXLDJCQUF5QmhCO1lBQy9GLE9BQU87Z0JBQ0xVLFdBQVdHLGlCQUFRLENBQUNDLHVCQUF1QixDQUFDZCxjQUFjVztZQUM1RDtRQUNGO1FBRUEsSUFBSUQsYUFBYSxNQUFNO1lBQ3JCLElBQU1PLHFCQUFxQkMsa0JBQWtCLENBQUNDLFlBQVksQ0FBQ1QsV0FDckRVLG1CQUFtQkgsbUJBQW1CSSxNQUFNLENBQUNuQjtZQUVuRCxJQUFJa0Isa0JBQWtCO2dCQUNwQmpCLG1CQUFtQjtZQUNyQjtRQUNGO0lBQ0Y7SUFFQSxJQUFJQSxrQkFBa0I7UUFDcEJELFlBQVlPLEtBQUssQ0FBQyxBQUFDLG9CQUFrQyxPQUFmTCxnQkFBZSxnQkFBY0o7SUFDckU7SUFFQSxPQUFPRztBQUNUO0FBRU8sU0FBU0oseUJBQXlCQyxZQUFZLEVBQUVzQixZQUFZLEVBQUVDLFdBQVc7SUFDOUUsSUFBSUM7SUFFSixJQUFNcEIsaUJBQWlCa0IsYUFBYWpCLFlBQVksQ0FBQ0w7SUFFakRzQixhQUFhaEIsS0FBSyxDQUFDLEFBQUMsa0JBQWdDLE9BQWZGLGdCQUFlLDZCQUEyQko7SUFFL0UsSUFBTXlCLFlBQVksRUFBRSxFQUNkQyx3QkFBd0JDLElBQUFBLHNCQUFtQixFQUFDM0IsY0FBY3lCLFdBQVdILGNBQWNDO0lBRXpGQyw2QkFBNkJFLHVCQUF1QixHQUFHO0lBRXZELElBQUlGLDRCQUE0QjtRQUM5QkYsYUFBYWIsS0FBSyxDQUFDLEFBQUMsb0JBQWtDLE9BQWZMLGdCQUFlLDJCQUF5Qko7SUFDakY7SUFFQSxPQUFPd0I7QUFDVCJ9