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
var variableNodeQuery = (0, _query.nodeQuery)("/term/variable!");
function verifyDefining(termNode, definingNode, localContext) {
    var definingVerified = false;
    var defined = definedFromDefiningNode(definingNode), variableNode = variableNodeQuery(termNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZGVmaW5pbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB2ZXJpZnlUZXJtIGZyb20gXCIuL3Rlcm1cIjtcblxuaW1wb3J0IHsgREVGSU5FRCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGZpcnN0LCBzZWNvbmQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmNvbnN0IHZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0vdmFyaWFibGUhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlEZWZpbmluZyh0ZXJtTm9kZSwgZGVmaW5pbmdOb2RlLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IGRlZmluaW5nVmVyaWZpZWQgPSBmYWxzZTtcblxuICBjb25zdCBkZWZpbmVkID0gZGVmaW5lZEZyb21EZWZpbmluZ05vZGUoZGVmaW5pbmdOb2RlKSxcbiAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkodGVybU5vZGUpO1xuXG4gIGlmIChmYWxzZSkge1xuICAgIC8vL1xuICB9IGVsc2UgaWYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHZhcmlhYmxlID0gbG9jYWxDb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG5cbiAgICBpZiAodmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlRGVmaW5lZCA9IGxvY2FsQ29udGV4dC5pc1ZhcmlhYmxlRGVmaW5lZCh2YXJpYWJsZSk7XG5cbiAgICAgIGlmIChkZWZpbmVkKSB7XG4gICAgICAgIGlmICh2YXJpYWJsZURlZmluZWQpIHtcbiAgICAgICAgICBkZWZpbmluZ1ZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWRlZmluZWQpIHtcbiAgICAgICAgaWYgKCF2YXJpYWJsZURlZmluZWQpIHtcbiAgICAgICAgICBkZWZpbmluZ1ZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmICh0ZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHRlcm1zID0gW10sXG4gICAgICAgICAgdGVybVZlcmlmaWVkID0gdmVyaWZ5VGVybSh0ZXJtTm9kZSwgdGVybXMsIGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHZlcmlmaWVkQWhlYWQ7XG5cbiAgICAgICAgICAgIGNvbnN0IGZpcnN0VGVybSA9IGZpcnN0KHRlcm1zKSxcbiAgICAgICAgICAgICAgICAgIHRlcm0gPSBmaXJzdFRlcm0sIC8vL1xuICAgICAgICAgICAgICAgICAgdGVybUdyb3VuZGVkID0gbG9jYWxDb250ZXh0LmlzVGVybUdyb3VuZGVkKHRlcm0pO1xuXG4gICAgICAgICAgICBpZiAoZGVmaW5lZCkge1xuICAgICAgICAgICAgICBpZiAodGVybUdyb3VuZGVkKSB7XG4gICAgICAgICAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFkZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGlmICghdGVybUdyb3VuZGVkKSB7XG4gICAgICAgICAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgICAgfSk7XG5cbiAgICBkZWZpbmluZ1ZlcmlmaWVkID0gdGVybVZlcmlmaWVkOyAgLy8vXG5cbiAgfVxuXG4gIHJldHVybiBkZWZpbmluZ1ZlcmlmaWVkO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVkRnJvbURlZmluaW5nTm9kZShkZWZpbmluZ05vZGUpIHtcbiAgY29uc3QgY2hpbGROb2RlcyA9IGRlZmluaW5nTm9kZS5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgIHNlY29uZENoaWxkTm9kZSA9IHNlY29uZChjaGlsZE5vZGVzKSxcbiAgICAgICAgdGVybWluYWxOb2RlID0gc2Vjb25kQ2hpbGROb2RlLCAgLy8vXG4gICAgICAgIGNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICBkZWZpbmVkID0gKGNvbnRlbnQgPT09IERFRklORUQpO1xuXG4gIHJldHVybiBkZWZpbmVkO1xufVxuIl0sIm5hbWVzIjpbInZlcmlmeURlZmluaW5nIiwidmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0ZXJtTm9kZSIsImRlZmluaW5nTm9kZSIsImxvY2FsQ29udGV4dCIsImRlZmluaW5nVmVyaWZpZWQiLCJkZWZpbmVkIiwiZGVmaW5lZEZyb21EZWZpbmluZ05vZGUiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlIiwidmFyaWFibGVEZWZpbmVkIiwiaXNWYXJpYWJsZURlZmluZWQiLCJ0ZXJtcyIsInRlcm1WZXJpZmllZCIsInZlcmlmeVRlcm0iLCJ2ZXJpZmllZEFoZWFkIiwiZmlyc3RUZXJtIiwiZmlyc3QiLCJ0ZXJtIiwidGVybUdyb3VuZGVkIiwiaXNUZXJtR3JvdW5kZWQiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsInNlY29uZENoaWxkTm9kZSIsInNlY29uZCIsInRlcm1pbmFsTm9kZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiREVGSU5FRCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUF3QkE7OzsyREFSRDt5QkFFQztxQkFDRTtxQkFDSTs7Ozs7O0FBRTlCLElBQU1DLG9CQUFvQkMsSUFBQUEsZ0JBQVMsRUFBQztBQUVyQixTQUFTRixlQUFlRyxRQUFRLEVBQUVDLFlBQVksRUFBRUMsWUFBWTtJQUN6RSxJQUFJQyxtQkFBbUI7SUFFdkIsSUFBTUMsVUFBVUMsd0JBQXdCSixlQUNsQ0ssZUFBZVIsa0JBQWtCRTtJQUV2QyxJQUFJLE9BQU87SUFDVCxHQUFHO0lBQ0wsT0FBTyxJQUFJTSxpQkFBaUIsTUFBTTtRQUNoQyxJQUFNQyxXQUFXTCxhQUFhTSwwQkFBMEIsQ0FBQ0Y7UUFFekQsSUFBSUMsYUFBYSxNQUFNO1lBQ3JCLElBQU1FLGtCQUFrQlAsYUFBYVEsaUJBQWlCLENBQUNIO1lBRXZELElBQUlILFNBQVM7Z0JBQ1gsSUFBSUssaUJBQWlCO29CQUNuQk4sbUJBQW1CO2dCQUNyQjtZQUNGO1lBRUEsSUFBSSxDQUFDQyxTQUFTO2dCQUNaLElBQUksQ0FBQ0ssaUJBQWlCO29CQUNwQk4sbUJBQW1CO2dCQUNyQjtZQUNGO1FBQ0Y7SUFDRixPQUFPLElBQUlILGFBQWEsTUFBTTtRQUM1QixJQUFNVyxRQUFRLEVBQUUsRUFDVkMsZUFBZUMsSUFBQUEsYUFBVSxFQUFDYixVQUFVVyxPQUFPVCxjQUFjO1lBQ3ZELElBQUlZO1lBRUosSUFBTUMsWUFBWUMsSUFBQUEsWUFBSyxFQUFDTCxRQUNsQk0sT0FBT0YsV0FDUEcsZUFBZWhCLGFBQWFpQixjQUFjLENBQUNGO1lBRWpELElBQUliLFNBQVM7Z0JBQ1gsSUFBSWMsY0FBYztvQkFDaEJKLGdCQUFnQjtnQkFDbEI7WUFDRjtZQUVBLElBQUksQ0FBQ1YsU0FBUztnQkFDWixJQUFJLENBQUNjLGNBQWM7b0JBQ2pCSixnQkFBZ0I7Z0JBQ2xCO1lBQ0Y7WUFFQSxPQUFPQTtRQUNUO1FBRU5YLG1CQUFtQlMsY0FBZSxHQUFHO0lBRXZDO0lBRUEsT0FBT1Q7QUFDVDtBQUVBLFNBQVNFLHdCQUF3QkosWUFBWTtJQUMzQyxJQUFNbUIsYUFBYW5CLGFBQWFvQixhQUFhLElBQ3ZDQyxrQkFBa0JDLElBQUFBLGFBQU0sRUFBQ0gsYUFDekJJLGVBQWVGLGlCQUNmRyxVQUFVRCxhQUFhRSxVQUFVLElBQ2pDdEIsVUFBV3FCLFlBQVlFLGtCQUFPO0lBRXBDLE9BQU92QjtBQUNUIn0=