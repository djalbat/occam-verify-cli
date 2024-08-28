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
var termNodeQuery = (0, _query.nodeQuery)("/definedAssertionNode/term!"), variableNodeQuery = (0, _query.nodeQuery)("/definedAssertionNode/term/variable!");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZGVmaW5lZEFzc2VydGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHZlcmlmeVRlcm0gZnJvbSBcIi4vdGVybVwiO1xuXG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGlzQXNzZXJ0aW9uTmVnYXRlZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvdmVyaWZ5XCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZGVmaW5lZEFzc2VydGlvbk5vZGUvdGVybSFcIiksXG4gICAgICB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9kZWZpbmVkQXNzZXJ0aW9uTm9kZS90ZXJtL3ZhcmlhYmxlIVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5RGVmaW5lZEFzc2VydGlvbihkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBkZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uTmVnYXRlZCA9IGlzQXNzZXJ0aW9uTmVnYXRlZChkZWZpbmVkQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgIHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KGRlZmluZWRBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KGRlZmluZWRBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgbmVnYXRlZCA9IGRlZmluZWRBc3NlcnRpb25OZWdhdGVkOyAgLy8vXG5cbiAgaWYgKGZhbHNlKSB7XG4gICAgLy8vXG4gIH0gZWxzZSBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgdmFyaWFibGUgPSBsb2NhbENvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICAgIGlmICh2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFyaWFibGVEZWZpbmVkID0gbG9jYWxDb250ZXh0LmlzVmFyaWFibGVEZWZpbmVkKHZhcmlhYmxlKTtcblxuICAgICAgaWYgKCFuZWdhdGVkKSB7XG4gICAgICAgIGlmICh2YXJpYWJsZURlZmluZWQpIHtcbiAgICAgICAgICBkZWZpbmVkQXNzZXJ0aW9uVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWdhdGVkKSB7XG4gICAgICAgIGlmICghdmFyaWFibGVEZWZpbmVkKSB7XG4gICAgICAgICAgZGVmaW5lZEFzc2VydGlvblZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmICh0ZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHRlcm1zID0gW10sXG4gICAgICAgICAgdGVybVZlcmlmaWVkID0gdmVyaWZ5VGVybSh0ZXJtTm9kZSwgdGVybXMsIGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKHRlcm1WZXJpZmllZCkge1xuICAgICAgY29uc3QgZmlyc3RUZXJtID0gZmlyc3QodGVybXMpLFxuICAgICAgICAgICAgdGVybSA9IGZpcnN0VGVybSwgLy8vXG4gICAgICAgICAgICB0ZXJtR3JvdW5kZWQgPSBsb2NhbENvbnRleHQuaXNUZXJtR3JvdW5kZWQodGVybSk7XG5cbiAgICAgIGlmICghbmVnYXRlZCkge1xuICAgICAgICBpZiAodGVybUdyb3VuZGVkKSB7XG4gICAgICAgICAgZGVmaW5lZEFzc2VydGlvblZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobmVnYXRlZCkge1xuICAgICAgICBpZiAoIXRlcm1Hcm91bmRlZCkge1xuICAgICAgICAgIGRlZmluZWRBc3NlcnRpb25WZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGVmaW5lZEFzc2VydGlvblZlcmlmaWVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeURlZmluZWRBc3NlcnRpb24iLCJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidmFyaWFibGVOb2RlUXVlcnkiLCJkZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImxvY2FsQ29udGV4dCIsImRlZmluZWRBc3NlcnRpb25WZXJpZmllZCIsImRlZmluZWRBc3NlcnRpb25OZWdhdGVkIiwiaXNBc3NlcnRpb25OZWdhdGVkIiwidmFyaWFibGVOb2RlIiwidGVybU5vZGUiLCJuZWdhdGVkIiwidmFyaWFibGUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlRGVmaW5lZCIsImlzVmFyaWFibGVEZWZpbmVkIiwidGVybXMiLCJ0ZXJtVmVyaWZpZWQiLCJ2ZXJpZnlUZXJtIiwidmVyaWZpZWRBaGVhZCIsImZpcnN0VGVybSIsImZpcnN0IiwidGVybSIsInRlcm1Hcm91bmRlZCIsImlzVGVybUdyb3VuZGVkIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQXdCQTs7OzJEQVREO3FCQUVEO3FCQUNJO3NCQUNTOzs7Ozs7QUFFbkMsSUFBTUMsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLGdDQUMxQkMsb0JBQW9CRCxJQUFBQSxnQkFBUyxFQUFDO0FBRXJCLFNBQVNGLHVCQUF1Qkksb0JBQW9CLEVBQUVDLFlBQVk7SUFDL0UsSUFBSUMsMkJBQTJCO0lBRS9CLElBQU1DLDBCQUEwQkMsSUFBQUEsMEJBQWtCLEVBQUNKLHVCQUM3Q0ssZUFBZU4sa0JBQWtCQyx1QkFDakNNLFdBQVdULGNBQWNHLHVCQUN6Qk8sVUFBVUoseUJBQTBCLEdBQUc7SUFFN0MsSUFBSSxPQUFPO0lBQ1QsR0FBRztJQUNMLE9BQU8sSUFBSUUsaUJBQWlCLE1BQU07UUFDaEMsSUFBTUcsV0FBV1AsYUFBYVEsMEJBQTBCLENBQUNKO1FBRXpELElBQUlHLGFBQWEsTUFBTTtZQUNyQixJQUFNRSxrQkFBa0JULGFBQWFVLGlCQUFpQixDQUFDSDtZQUV2RCxJQUFJLENBQUNELFNBQVM7Z0JBQ1osSUFBSUcsaUJBQWlCO29CQUNuQlIsMkJBQTJCO2dCQUM3QjtZQUNGO1lBRUEsSUFBSUssU0FBUztnQkFDWCxJQUFJLENBQUNHLGlCQUFpQjtvQkFDcEJSLDJCQUEyQjtnQkFDN0I7WUFDRjtRQUNGO0lBQ0YsT0FBTyxJQUFJSSxhQUFhLE1BQU07UUFDNUIsSUFBTU0sUUFBUSxFQUFFLEVBQ1ZDLGVBQWVDLElBQUFBLGFBQVUsRUFBQ1IsVUFBVU0sT0FBT1gsY0FBYztZQUN2RCxJQUFNYyxnQkFBZ0I7WUFFdEIsT0FBT0E7UUFDVDtRQUVOLElBQUlGLGNBQWM7WUFDaEIsSUFBTUcsWUFBWUMsSUFBQUEsWUFBSyxFQUFDTCxRQUNsQk0sT0FBT0YsV0FDUEcsZUFBZWxCLGFBQWFtQixjQUFjLENBQUNGO1lBRWpELElBQUksQ0FBQ1gsU0FBUztnQkFDWixJQUFJWSxjQUFjO29CQUNoQmpCLDJCQUEyQjtnQkFDN0I7WUFDRjtZQUVBLElBQUlLLFNBQVM7Z0JBQ1gsSUFBSSxDQUFDWSxjQUFjO29CQUNqQmpCLDJCQUEyQjtnQkFDN0I7WUFDRjtRQUNGO0lBQ0Y7SUFFQSxPQUFPQTtBQUNUIn0=