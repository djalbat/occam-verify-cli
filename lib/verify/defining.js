"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyDefining;
    }
});
var _term = /*#__PURE__*/ _interop_require_default(require("./term"));
var _constants = require("../constants");
var _query = require("../utilities/query");
var _array = require("../utilities/array");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var termNodeQuery = (0, _query.nodeQuery)("/argument/term!"), variableNodeQuery = (0, _query.nodeQuery)("/argument/term/variable!");
function verifyDefining(argumentNode, definingNode, context) {
    var definingVerified = false;
    var defined = definedFromDefiningNode(definingNode), termNode = termNodeQuery(argumentNode), variableNode = variableNodeQuery(argumentNode);
    if (false) {
    ///
    } else if (variableNode !== null) {
        var variable = context.findVariableByVariableNode(variableNode);
        if (variable !== null) {
            var variableDefined = context.isVariableDefined(variable);
            if (defined) {
                if (variableDefined) {
                    definingVerified = true;
                }
            }
            if (!defined) {
                if (!variableDefined) {
                    definingVerified = true;
                }
            }
        }
    } else if (termNode !== null) {
        var terms = [], termVerified = (0, _term.default)(termNode, terms, context, function() {
            var verifiedAhead;
            var firstTerm = (0, _array.first)(terms), term = firstTerm, termGrounded = context.isTermGrounded(term);
            if (defined) {
                if (termGrounded) {
                    verifiedAhead = true;
                }
            }
            if (!defined) {
                if (!termGrounded) {
                    verifiedAhead = true;
                }
            }
            return verifiedAhead;
        });
        definingVerified = termVerified; ///
    }
    return definingVerified;
}
function definedFromDefiningNode(definingNode) {
    var childNodes = definingNode.getChildNodes(), secondChildNode = (0, _array.second)(childNodes), terminalNode = secondChildNode, content = terminalNode.getContent(), defined = content === _constants.DEFINED;
    return defined;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZGVmaW5pbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB2ZXJpZnlUZXJtIGZyb20gXCIuL3Rlcm1cIjtcblxuaW1wb3J0IHsgREVGSU5FRCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXJndW1lbnQvdGVybSFcIiksXG4gICAgICB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hcmd1bWVudC90ZXJtL3ZhcmlhYmxlIVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5RGVmaW5pbmcoYXJndW1lbnROb2RlLCBkZWZpbmluZ05vZGUsIGNvbnRleHQpIHtcbiAgbGV0IGRlZmluaW5nVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBkZWZpbmVkID0gZGVmaW5lZEZyb21EZWZpbmluZ05vZGUoZGVmaW5pbmdOb2RlKSxcbiAgICAgICAgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KGFyZ3VtZW50Tm9kZSksXG4gICAgICAgIHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KGFyZ3VtZW50Tm9kZSk7XG5cbiAgaWYgKGZhbHNlKSB7XG4gICAgLy8vXG4gIH0gZWxzZSBpZiAodmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgdmFyaWFibGUgPSBjb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG5cbiAgICBpZiAodmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlRGVmaW5lZCA9IGNvbnRleHQuaXNWYXJpYWJsZURlZmluZWQodmFyaWFibGUpO1xuXG4gICAgICBpZiAoZGVmaW5lZCkge1xuICAgICAgICBpZiAodmFyaWFibGVEZWZpbmVkKSB7XG4gICAgICAgICAgZGVmaW5pbmdWZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFkZWZpbmVkKSB7XG4gICAgICAgIGlmICghdmFyaWFibGVEZWZpbmVkKSB7XG4gICAgICAgICAgZGVmaW5pbmdWZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB0ZXJtcyA9IFtdLFxuICAgICAgICAgIHRlcm1WZXJpZmllZCA9IHZlcmlmeVRlcm0odGVybU5vZGUsIHRlcm1zLCBjb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgdmVyaWZpZWRBaGVhZDtcblxuICAgICAgICAgICAgY29uc3QgZmlyc3RUZXJtID0gZmlyc3QodGVybXMpLFxuICAgICAgICAgICAgICAgICAgdGVybSA9IGZpcnN0VGVybSwgLy8vXG4gICAgICAgICAgICAgICAgICB0ZXJtR3JvdW5kZWQgPSBjb250ZXh0LmlzVGVybUdyb3VuZGVkKHRlcm0pO1xuXG4gICAgICAgICAgICBpZiAoZGVmaW5lZCkge1xuICAgICAgICAgICAgICBpZiAodGVybUdyb3VuZGVkKSB7XG4gICAgICAgICAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFkZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGlmICghdGVybUdyb3VuZGVkKSB7XG4gICAgICAgICAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgICAgfSk7XG5cbiAgICBkZWZpbmluZ1ZlcmlmaWVkID0gdGVybVZlcmlmaWVkOyAgLy8vXG5cbiAgfVxuXG4gIHJldHVybiBkZWZpbmluZ1ZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVkRnJvbURlZmluaW5nTm9kZShkZWZpbmluZ05vZGUpIHtcbiAgY29uc3QgY2hpbGROb2RlcyA9IGRlZmluaW5nTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIHNlY29uZENoaWxkTm9kZSA9IHNlY29uZChjaGlsZE5vZGVzKSxcbiAgICAgICAgdGVybWluYWxOb2RlID0gc2Vjb25kQ2hpbGROb2RlLCAgLy8vXG4gICAgICAgIGNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICBkZWZpbmVkID0gKGNvbnRlbnQgPT09IERFRklORUQpO1xuXG4gIHJldHVybiBkZWZpbmVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeURlZmluaW5nIiwidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInZhcmlhYmxlTm9kZVF1ZXJ5IiwiYXJndW1lbnROb2RlIiwiZGVmaW5pbmdOb2RlIiwiY29udGV4dCIsImRlZmluaW5nVmVyaWZpZWQiLCJkZWZpbmVkIiwiZGVmaW5lZEZyb21EZWZpbmluZ05vZGUiLCJ0ZXJtTm9kZSIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZURlZmluZWQiLCJpc1ZhcmlhYmxlRGVmaW5lZCIsInRlcm1zIiwidGVybVZlcmlmaWVkIiwidmVyaWZ5VGVybSIsInZlcmlmaWVkQWhlYWQiLCJmaXJzdFRlcm0iLCJmaXJzdCIsInRlcm0iLCJ0ZXJtR3JvdW5kZWQiLCJpc1Rlcm1Hcm91bmRlZCIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwic2Vjb25kQ2hpbGROb2RlIiwic2Vjb25kIiwidGVybWluYWxOb2RlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJERUZJTkVEIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQXdCQTs7OzJEQVREO3lCQUVDO3FCQUNFO3FCQUNJOzs7Ozs7QUFFOUIsSUFBTUMsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLG9CQUMxQkMsb0JBQW9CRCxJQUFBQSxnQkFBUyxFQUFDO0FBRXJCLFNBQVNGLGVBQWVJLFlBQVksRUFBRUMsWUFBWSxFQUFFQyxPQUFPO0lBQ3hFLElBQUlDLG1CQUFtQjtJQUV2QixJQUFNQyxVQUFVQyx3QkFBd0JKLGVBQ2xDSyxXQUFXVCxjQUFjRyxlQUN6Qk8sZUFBZVIsa0JBQWtCQztJQUV2QyxJQUFJLE9BQU87SUFDVCxHQUFHO0lBQ0wsT0FBTyxJQUFJTyxpQkFBaUIsTUFBTTtRQUNoQyxJQUFNQyxXQUFXTixRQUFRTywwQkFBMEIsQ0FBQ0Y7UUFFcEQsSUFBSUMsYUFBYSxNQUFNO1lBQ3JCLElBQU1FLGtCQUFrQlIsUUFBUVMsaUJBQWlCLENBQUNIO1lBRWxELElBQUlKLFNBQVM7Z0JBQ1gsSUFBSU0saUJBQWlCO29CQUNuQlAsbUJBQW1CO2dCQUNyQjtZQUNGO1lBRUEsSUFBSSxDQUFDQyxTQUFTO2dCQUNaLElBQUksQ0FBQ00saUJBQWlCO29CQUNwQlAsbUJBQW1CO2dCQUNyQjtZQUNGO1FBQ0Y7SUFDRixPQUFPLElBQUlHLGFBQWEsTUFBTTtRQUM1QixJQUFNTSxRQUFRLEVBQUUsRUFDVkMsZUFBZUMsSUFBQUEsYUFBVSxFQUFDUixVQUFVTSxPQUFPVixTQUFTO1lBQ2xELElBQUlhO1lBRUosSUFBTUMsWUFBWUMsSUFBQUEsWUFBSyxFQUFDTCxRQUNsQk0sT0FBT0YsV0FDUEcsZUFBZWpCLFFBQVFrQixjQUFjLENBQUNGO1lBRTVDLElBQUlkLFNBQVM7Z0JBQ1gsSUFBSWUsY0FBYztvQkFDaEJKLGdCQUFnQjtnQkFDbEI7WUFDRjtZQUVBLElBQUksQ0FBQ1gsU0FBUztnQkFDWixJQUFJLENBQUNlLGNBQWM7b0JBQ2pCSixnQkFBZ0I7Z0JBQ2xCO1lBQ0Y7WUFFQSxPQUFPQTtRQUNUO1FBRU5aLG1CQUFtQlUsY0FBZSxHQUFHO0lBRXZDO0lBRUEsT0FBT1Y7QUFDVDtBQUVBLFNBQVNFLHdCQUF3QkosWUFBWTtJQUMzQyxJQUFNb0IsYUFBYXBCLGFBQWFxQixhQUFhLElBQ3ZDQyxrQkFBa0JDLElBQUFBLGFBQU0sRUFBQ0gsYUFDekJJLGVBQWVGLGlCQUNmRyxVQUFVRCxhQUFhRSxVQUFVLElBQ2pDdkIsVUFBV3NCLFlBQVlFLGtCQUFPO0lBRXBDLE9BQU94QjtBQUNUIn0=