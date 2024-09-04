"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Substitution;
    }
});
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
var Substitution = /*#__PURE__*/ function() {
    function Substitution() {
        _class_call_check(this, Substitution);
    }
    _create_class(Substitution, [
        {
            key: "matchTermNode",
            value: function matchTermNode(termNode) {
                var matchesTermNode = false;
                return matchesTermNode;
            }
        },
        {
            key: "matchVariableNode",
            value: function matchVariableNode(variableNode) {
                var matchesMetavariableNode = false;
                return matchesMetavariableNode;
            }
        },
        {
            key: "matchStatementNode",
            value: function matchStatementNode(statementNode) {
                var matchesStatementNode = false;
                return matchesStatementNode;
            }
        },
        {
            key: "matchMetavariableNode",
            value: function matchMetavariableNode(metavariableNode) {
                var matchesMetavariableNode = false;
                return matchesMetavariableNode;
            }
        }
    ]);
    return Substitution;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdWJzdGl0dXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1YnN0aXR1dGlvbiB7XG4gIG1hdGNoVGVybU5vZGUodGVybU5vZGUpIHtcbiAgICBjb25zdCBtYXRjaGVzVGVybU5vZGUgPSBmYWxzZTtcblxuICAgIHJldHVybiBtYXRjaGVzVGVybU5vZGU7XG4gIH1cblxuICBtYXRjaFZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBtYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNNZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBtYXRjaGVzU3RhdGVtZW50Tm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNTdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBtYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNNZXRhdmFyaWFibGVOb2RlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiU3Vic3RpdHV0aW9uIiwibWF0Y2hUZXJtTm9kZSIsInRlcm1Ob2RlIiwibWF0Y2hlc1Rlcm1Ob2RlIiwibWF0Y2hWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJtYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJtYXRjaGVzU3RhdGVtZW50Tm9kZSIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBRXFCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFOLElBQUEsQUFBTUEsNkJBQUQsQUFBTDthQUFNQTtnQ0FBQUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjQyxRQUFRO2dCQUNwQixJQUFNQyxrQkFBa0I7Z0JBRXhCLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCQyxZQUFZO2dCQUM1QixJQUFNQywwQkFBMEI7Z0JBRWhDLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CQyxhQUFhO2dCQUM5QixJQUFNQyx1QkFBdUI7Z0JBRTdCLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCQyxnQkFBZ0I7Z0JBQ3BDLElBQU1MLDBCQUEwQjtnQkFFaEMsT0FBT0E7WUFDVDs7O1dBdkJtQk4ifQ==