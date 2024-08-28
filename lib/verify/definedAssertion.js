"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyDefinedAssertion;
    }
});
var _term = /*#__PURE__*/ _interop_require_default(require("./term"));
var _array = require("../utilities/array");
var _query = require("../utilities/query");
var _verify = require("../utilities/verify");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var termNodeQuery = (0, _query.nodeQuery)("/definedAssertion/term!"), variableNodeQuery = (0, _query.nodeQuery)("/definedAssertion/term/variable!");
function verifyDefinedAssertion(definedAssertionNode, localContext) {
    var definedAssertionVerified = false;
    var definedAssertionNegated = (0, _verify.isAssertionNegated)(definedAssertionNode), variableNode = variableNodeQuery(definedAssertionNode), termNode = termNodeQuery(definedAssertionNode), negated = definedAssertionNegated; ///
    if (false) {
    ///
    } else if (variableNode !== null) {
        var variable = localContext.findVariableByVariableNode(variableNode);
        if (variable !== null) {
            var variableDefined = localContext.isVariableDefined(variable);
            if (!negated) {
                if (variableDefined) {
                    definedAssertionVerified = true;
                }
            }
            if (negated) {
                if (!variableDefined) {
                    definedAssertionVerified = true;
                }
            }
        }
    } else if (termNode !== null) {
        var terms = [], termVerified = (0, _term.default)(termNode, terms, localContext, function() {
            var verifiedAhead = true;
            return verifiedAhead;
        });
        if (termVerified) {
            var firstTerm = (0, _array.first)(terms), term = firstTerm, termGrounded = localContext.isTermGrounded(term);
            if (!negated) {
                if (termGrounded) {
                    definedAssertionVerified = true;
                }
            }
            if (negated) {
                if (!termGrounded) {
                    definedAssertionVerified = true;
                }
            }
        }
    }
    return definedAssertionVerified;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZGVmaW5lZEFzc2VydGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHZlcmlmeVRlcm0gZnJvbSBcIi4vdGVybVwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGlzQXNzZXJ0aW9uTmVnYXRlZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvdmVyaWZ5XCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZGVmaW5lZEFzc2VydGlvbi90ZXJtIVwiKSxcbiAgICAgIHZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2RlZmluZWRBc3NlcnRpb24vdGVybS92YXJpYWJsZSFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeURlZmluZWRBc3NlcnRpb24oZGVmaW5lZEFzc2VydGlvbk5vZGUsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgZGVmaW5lZEFzc2VydGlvblZlcmlmaWVkID0gZmFsc2U7XG5cbiAgY29uc3QgZGVmaW5lZEFzc2VydGlvbk5lZ2F0ZWQgPSBpc0Fzc2VydGlvbk5lZ2F0ZWQoZGVmaW5lZEFzc2VydGlvbk5vZGUpLFxuICAgICAgICB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeShkZWZpbmVkQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgIHRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeShkZWZpbmVkQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgIG5lZ2F0ZWQgPSBkZWZpbmVkQXNzZXJ0aW9uTmVnYXRlZDsgIC8vL1xuXG4gIGlmIChmYWxzZSkge1xuICAgIC8vL1xuICB9IGVsc2UgaWYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHZhcmlhYmxlID0gbG9jYWxDb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG5cbiAgICBpZiAodmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlRGVmaW5lZCA9IGxvY2FsQ29udGV4dC5pc1ZhcmlhYmxlRGVmaW5lZCh2YXJpYWJsZSk7XG5cbiAgICAgIGlmICghbmVnYXRlZCkge1xuICAgICAgICBpZiAodmFyaWFibGVEZWZpbmVkKSB7XG4gICAgICAgICAgZGVmaW5lZEFzc2VydGlvblZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobmVnYXRlZCkge1xuICAgICAgICBpZiAoIXZhcmlhYmxlRGVmaW5lZCkge1xuICAgICAgICAgIGRlZmluZWRBc3NlcnRpb25WZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB0ZXJtcyA9IFtdLFxuICAgICAgICAgIHRlcm1WZXJpZmllZCA9IHZlcmlmeVRlcm0odGVybU5vZGUsIHRlcm1zLCBsb2NhbENvbnRleHQsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICB9KTtcblxuICAgIGlmICh0ZXJtVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IGZpcnN0VGVybSA9IGZpcnN0KHRlcm1zKSxcbiAgICAgICAgICAgIHRlcm0gPSBmaXJzdFRlcm0sIC8vL1xuICAgICAgICAgICAgdGVybUdyb3VuZGVkID0gbG9jYWxDb250ZXh0LmlzVGVybUdyb3VuZGVkKHRlcm0pO1xuXG4gICAgICBpZiAoIW5lZ2F0ZWQpIHtcbiAgICAgICAgaWYgKHRlcm1Hcm91bmRlZCkge1xuICAgICAgICAgIGRlZmluZWRBc3NlcnRpb25WZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG5lZ2F0ZWQpIHtcbiAgICAgICAgaWYgKCF0ZXJtR3JvdW5kZWQpIHtcbiAgICAgICAgICBkZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRlZmluZWRBc3NlcnRpb25WZXJpZmllZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlEZWZpbmVkQXNzZXJ0aW9uIiwidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInZhcmlhYmxlTm9kZVF1ZXJ5IiwiZGVmaW5lZEFzc2VydGlvbk5vZGUiLCJsb2NhbENvbnRleHQiLCJkZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQiLCJkZWZpbmVkQXNzZXJ0aW9uTmVnYXRlZCIsImlzQXNzZXJ0aW9uTmVnYXRlZCIsInZhcmlhYmxlTm9kZSIsInRlcm1Ob2RlIiwibmVnYXRlZCIsInZhcmlhYmxlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZURlZmluZWQiLCJpc1ZhcmlhYmxlRGVmaW5lZCIsInRlcm1zIiwidGVybVZlcmlmaWVkIiwidmVyaWZ5VGVybSIsInZlcmlmaWVkQWhlYWQiLCJmaXJzdFRlcm0iLCJmaXJzdCIsInRlcm0iLCJ0ZXJtR3JvdW5kZWQiLCJpc1Rlcm1Hcm91bmRlZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUF3QkE7OzsyREFURDtxQkFFRDtxQkFDSTtzQkFDUzs7Ozs7O0FBRW5DLElBQU1DLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyw0QkFDMUJDLG9CQUFvQkQsSUFBQUEsZ0JBQVMsRUFBQztBQUVyQixTQUFTRix1QkFBdUJJLG9CQUFvQixFQUFFQyxZQUFZO0lBQy9FLElBQUlDLDJCQUEyQjtJQUUvQixJQUFNQywwQkFBMEJDLElBQUFBLDBCQUFrQixFQUFDSix1QkFDN0NLLGVBQWVOLGtCQUFrQkMsdUJBQ2pDTSxXQUFXVCxjQUFjRyx1QkFDekJPLFVBQVVKLHlCQUEwQixHQUFHO0lBRTdDLElBQUksT0FBTztJQUNULEdBQUc7SUFDTCxPQUFPLElBQUlFLGlCQUFpQixNQUFNO1FBQ2hDLElBQU1HLFdBQVdQLGFBQWFRLDBCQUEwQixDQUFDSjtRQUV6RCxJQUFJRyxhQUFhLE1BQU07WUFDckIsSUFBTUUsa0JBQWtCVCxhQUFhVSxpQkFBaUIsQ0FBQ0g7WUFFdkQsSUFBSSxDQUFDRCxTQUFTO2dCQUNaLElBQUlHLGlCQUFpQjtvQkFDbkJSLDJCQUEyQjtnQkFDN0I7WUFDRjtZQUVBLElBQUlLLFNBQVM7Z0JBQ1gsSUFBSSxDQUFDRyxpQkFBaUI7b0JBQ3BCUiwyQkFBMkI7Z0JBQzdCO1lBQ0Y7UUFDRjtJQUNGLE9BQU8sSUFBSUksYUFBYSxNQUFNO1FBQzVCLElBQU1NLFFBQVEsRUFBRSxFQUNWQyxlQUFlQyxJQUFBQSxhQUFVLEVBQUNSLFVBQVVNLE9BQU9YLGNBQWM7WUFDdkQsSUFBTWMsZ0JBQWdCO1lBRXRCLE9BQU9BO1FBQ1Q7UUFFTixJQUFJRixjQUFjO1lBQ2hCLElBQU1HLFlBQVlDLElBQUFBLFlBQUssRUFBQ0wsUUFDbEJNLE9BQU9GLFdBQ1BHLGVBQWVsQixhQUFhbUIsY0FBYyxDQUFDRjtZQUVqRCxJQUFJLENBQUNYLFNBQVM7Z0JBQ1osSUFBSVksY0FBYztvQkFDaEJqQiwyQkFBMkI7Z0JBQzdCO1lBQ0Y7WUFFQSxJQUFJSyxTQUFTO2dCQUNYLElBQUksQ0FBQ1ksY0FBYztvQkFDakJqQiwyQkFBMkI7Z0JBQzdCO1lBQ0Y7UUFDRjtJQUNGO0lBRUEsT0FBT0E7QUFDVCJ9