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
function verifyDefining(argumentNode, definingNode, localContext) {
    var definingVerified = false;
    var defined = definedFromDefiningNode(definingNode), termNode = termNodeQuery(argumentNode), variableNode = variableNodeQuery(argumentNode);
    if (false) {
    ///
    } else if (variableNode !== null) {
        var variable = localContext.findVariableByVariableNode(variableNode);
        if (variable !== null) {
            var variableDefined = localContext.isVariableDefined(variable);
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
        var terms = [], termVerified = (0, _term.default)(termNode, terms, localContext, function() {
            var verifiedAhead;
            var firstTerm = (0, _array.first)(terms), term = firstTerm, termGrounded = localContext.isTermGrounded(term);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZGVmaW5pbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB2ZXJpZnlUZXJtIGZyb20gXCIuL3Rlcm1cIjtcblxuaW1wb3J0IHsgREVGSU5FRCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvYXJndW1lbnQvdGVybSFcIiksXG4gICAgICB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9hcmd1bWVudC90ZXJtL3ZhcmlhYmxlIVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmVyaWZ5RGVmaW5pbmcoYXJndW1lbnROb2RlLCBkZWZpbmluZ05vZGUsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgZGVmaW5pbmdWZXJpZmllZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGRlZmluZWQgPSBkZWZpbmVkRnJvbURlZmluaW5nTm9kZShkZWZpbmluZ05vZGUpLFxuICAgICAgICB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkoYXJndW1lbnROb2RlKSxcbiAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkoYXJndW1lbnROb2RlKTtcblxuICBpZiAoZmFsc2UpIHtcbiAgICAvLy9cbiAgfSBlbHNlIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB2YXJpYWJsZSA9IGxvY2FsQ29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpO1xuXG4gICAgaWYgKHZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZURlZmluZWQgPSBsb2NhbENvbnRleHQuaXNWYXJpYWJsZURlZmluZWQodmFyaWFibGUpO1xuXG4gICAgICBpZiAoZGVmaW5lZCkge1xuICAgICAgICBpZiAodmFyaWFibGVEZWZpbmVkKSB7XG4gICAgICAgICAgZGVmaW5pbmdWZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFkZWZpbmVkKSB7XG4gICAgICAgIGlmICghdmFyaWFibGVEZWZpbmVkKSB7XG4gICAgICAgICAgZGVmaW5pbmdWZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAodGVybU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB0ZXJtcyA9IFtdLFxuICAgICAgICAgIHRlcm1WZXJpZmllZCA9IHZlcmlmeVRlcm0odGVybU5vZGUsIHRlcm1zLCBsb2NhbENvbnRleHQsICgpID0+IHtcbiAgICAgICAgICAgIGxldCB2ZXJpZmllZEFoZWFkO1xuXG4gICAgICAgICAgICBjb25zdCBmaXJzdFRlcm0gPSBmaXJzdCh0ZXJtcyksXG4gICAgICAgICAgICAgICAgICB0ZXJtID0gZmlyc3RUZXJtLCAvLy9cbiAgICAgICAgICAgICAgICAgIHRlcm1Hcm91bmRlZCA9IGxvY2FsQ29udGV4dC5pc1Rlcm1Hcm91bmRlZCh0ZXJtKTtcblxuICAgICAgICAgICAgaWYgKGRlZmluZWQpIHtcbiAgICAgICAgICAgICAgaWYgKHRlcm1Hcm91bmRlZCkge1xuICAgICAgICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghZGVmaW5lZCkge1xuICAgICAgICAgICAgICBpZiAoIXRlcm1Hcm91bmRlZCkge1xuICAgICAgICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgICAgIH0pO1xuXG4gICAgZGVmaW5pbmdWZXJpZmllZCA9IHRlcm1WZXJpZmllZDsgIC8vL1xuXG4gIH1cblxuICByZXR1cm4gZGVmaW5pbmdWZXJpZmllZDtcbn1cblxuZnVuY3Rpb24gZGVmaW5lZEZyb21EZWZpbmluZ05vZGUoZGVmaW5pbmdOb2RlKSB7XG4gIGNvbnN0IGNoaWxkTm9kZXMgPSBkZWZpbmluZ05vZGUuZ2V0Q2hpbGROb2RlcygpLFxuICAgICAgICBzZWNvbmRDaGlsZE5vZGUgPSBzZWNvbmQoY2hpbGROb2RlcyksXG4gICAgICAgIHRlcm1pbmFsTm9kZSA9IHNlY29uZENoaWxkTm9kZSwgIC8vL1xuICAgICAgICBjb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgZGVmaW5lZCA9IChjb250ZW50ID09PSBERUZJTkVEKTtcblxuICByZXR1cm4gZGVmaW5lZDtcbn1cbiJdLCJuYW1lcyI6WyJ2ZXJpZnlEZWZpbmluZyIsInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ2YXJpYWJsZU5vZGVRdWVyeSIsImFyZ3VtZW50Tm9kZSIsImRlZmluaW5nTm9kZSIsImxvY2FsQ29udGV4dCIsImRlZmluaW5nVmVyaWZpZWQiLCJkZWZpbmVkIiwiZGVmaW5lZEZyb21EZWZpbmluZ05vZGUiLCJ0ZXJtTm9kZSIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZURlZmluZWQiLCJpc1ZhcmlhYmxlRGVmaW5lZCIsInRlcm1zIiwidGVybVZlcmlmaWVkIiwidmVyaWZ5VGVybSIsInZlcmlmaWVkQWhlYWQiLCJmaXJzdFRlcm0iLCJmaXJzdCIsInRlcm0iLCJ0ZXJtR3JvdW5kZWQiLCJpc1Rlcm1Hcm91bmRlZCIsImNoaWxkTm9kZXMiLCJnZXRDaGlsZE5vZGVzIiwic2Vjb25kQ2hpbGROb2RlIiwic2Vjb25kIiwidGVybWluYWxOb2RlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJERUZJTkVEIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQXdCQTs7OzJEQVREO3lCQUVDO3FCQUNFO3FCQUNJOzs7Ozs7QUFFOUIsSUFBTUMsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLG9CQUMxQkMsb0JBQW9CRCxJQUFBQSxnQkFBUyxFQUFDO0FBRXJCLFNBQVNGLGVBQWVJLFlBQVksRUFBRUMsWUFBWSxFQUFFQyxZQUFZO0lBQzdFLElBQUlDLG1CQUFtQjtJQUV2QixJQUFNQyxVQUFVQyx3QkFBd0JKLGVBQ2xDSyxXQUFXVCxjQUFjRyxlQUN6Qk8sZUFBZVIsa0JBQWtCQztJQUV2QyxJQUFJLE9BQU87SUFDVCxHQUFHO0lBQ0wsT0FBTyxJQUFJTyxpQkFBaUIsTUFBTTtRQUNoQyxJQUFNQyxXQUFXTixhQUFhTywwQkFBMEIsQ0FBQ0Y7UUFFekQsSUFBSUMsYUFBYSxNQUFNO1lBQ3JCLElBQU1FLGtCQUFrQlIsYUFBYVMsaUJBQWlCLENBQUNIO1lBRXZELElBQUlKLFNBQVM7Z0JBQ1gsSUFBSU0saUJBQWlCO29CQUNuQlAsbUJBQW1CO2dCQUNyQjtZQUNGO1lBRUEsSUFBSSxDQUFDQyxTQUFTO2dCQUNaLElBQUksQ0FBQ00saUJBQWlCO29CQUNwQlAsbUJBQW1CO2dCQUNyQjtZQUNGO1FBQ0Y7SUFDRixPQUFPLElBQUlHLGFBQWEsTUFBTTtRQUM1QixJQUFNTSxRQUFRLEVBQUUsRUFDVkMsZUFBZUMsSUFBQUEsYUFBVSxFQUFDUixVQUFVTSxPQUFPVixjQUFjO1lBQ3ZELElBQUlhO1lBRUosSUFBTUMsWUFBWUMsSUFBQUEsWUFBSyxFQUFDTCxRQUNsQk0sT0FBT0YsV0FDUEcsZUFBZWpCLGFBQWFrQixjQUFjLENBQUNGO1lBRWpELElBQUlkLFNBQVM7Z0JBQ1gsSUFBSWUsY0FBYztvQkFDaEJKLGdCQUFnQjtnQkFDbEI7WUFDRjtZQUVBLElBQUksQ0FBQ1gsU0FBUztnQkFDWixJQUFJLENBQUNlLGNBQWM7b0JBQ2pCSixnQkFBZ0I7Z0JBQ2xCO1lBQ0Y7WUFFQSxPQUFPQTtRQUNUO1FBRU5aLG1CQUFtQlUsY0FBZSxHQUFHO0lBRXZDO0lBRUEsT0FBT1Y7QUFDVDtBQUVBLFNBQVNFLHdCQUF3QkosWUFBWTtJQUMzQyxJQUFNb0IsYUFBYXBCLGFBQWFxQixhQUFhLElBQ3ZDQyxrQkFBa0JDLElBQUFBLGFBQU0sRUFBQ0gsYUFDekJJLGVBQWVGLGlCQUNmRyxVQUFVRCxhQUFhRSxVQUFVLElBQ2pDdkIsVUFBV3NCLFlBQVlFLGtCQUFPO0lBRXBDLE9BQU94QjtBQUNUIn0=