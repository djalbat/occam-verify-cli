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
        },
        {
            key: "unifyWithEquivalence",
            value: function unifyWithEquivalence(equivalence, substitutions, localContextA, localContextB) {
                var unifiedWithEquivalence = false;
                return unifiedWithEquivalence;
            }
        },
        {
            key: "unifyWithEquivalences",
            value: function unifyWithEquivalences(equivalences, substitutions, localContextA, localContextB) {
                var _this = this;
                var unifiedWithEquivalences = equivalences.some(function(equivalence) {
                    var substitutionUnifiedWithEquivalence = _this.unifyWithEquivalence(equivalence, substitutions, localContextA, localContextB);
                    if (substitutionUnifiedWithEquivalence) {
                        return true;
                    }
                });
                return unifiedWithEquivalences;
            }
        }
    ]);
    return Substitution;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zdWJzdGl0dXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1YnN0aXR1dGlvbiB7XG4gIG1hdGNoVGVybU5vZGUodGVybU5vZGUpIHtcbiAgICBjb25zdCBtYXRjaGVzVGVybU5vZGUgPSBmYWxzZTtcblxuICAgIHJldHVybiBtYXRjaGVzVGVybU5vZGU7XG4gIH1cblxuICBtYXRjaFZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBtYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNNZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBtYXRjaGVzU3RhdGVtZW50Tm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNTdGF0ZW1lbnROb2RlO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBtYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNNZXRhdmFyaWFibGVOb2RlO1xuICB9XG5cbiAgdW5pZnlXaXRoRXF1aXZhbGVuY2UoZXF1aXZhbGVuY2UsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpIHtcbiAgICBsZXQgdW5pZmllZFdpdGhFcXVpdmFsZW5jZSA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIHVuaWZpZWRXaXRoRXF1aXZhbGVuY2U7XG4gIH1cblxuICB1bmlmeVdpdGhFcXVpdmFsZW5jZXMoZXF1aXZhbGVuY2VzLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKSB7XG4gICAgY29uc3QgdW5pZmllZFdpdGhFcXVpdmFsZW5jZXMgPSBlcXVpdmFsZW5jZXMuc29tZSgoZXF1aXZhbGVuY2UpID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblVuaWZpZWRXaXRoRXF1aXZhbGVuY2UgPSB0aGlzLnVuaWZ5V2l0aEVxdWl2YWxlbmNlKGVxdWl2YWxlbmNlLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvblVuaWZpZWRXaXRoRXF1aXZhbGVuY2UpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdW5pZmllZFdpdGhFcXVpdmFsZW5jZXM7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJTdWJzdGl0dXRpb24iLCJtYXRjaFRlcm1Ob2RlIiwidGVybU5vZGUiLCJtYXRjaGVzVGVybU5vZGUiLCJtYXRjaFZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZSIsIm1hdGNoZXNNZXRhdmFyaWFibGVOb2RlIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsIm1hdGNoZXNTdGF0ZW1lbnROb2RlIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsInVuaWZ5V2l0aEVxdWl2YWxlbmNlIiwiZXF1aXZhbGVuY2UiLCJzdWJzdGl0dXRpb25zIiwibG9jYWxDb250ZXh0QSIsImxvY2FsQ29udGV4dEIiLCJ1bmlmaWVkV2l0aEVxdWl2YWxlbmNlIiwidW5pZnlXaXRoRXF1aXZhbGVuY2VzIiwiZXF1aXZhbGVuY2VzIiwidW5pZmllZFdpdGhFcXVpdmFsZW5jZXMiLCJzb21lIiwic3Vic3RpdHV0aW9uVW5pZmllZFdpdGhFcXVpdmFsZW5jZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFFcUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU4sSUFBQSxBQUFNQSw2QkFBTjthQUFNQTtnQ0FBQUE7O2tCQUFBQTs7WUFDbkJDLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjQyxRQUFRO2dCQUNwQixJQUFNQyxrQkFBa0I7Z0JBRXhCLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCQyxZQUFZO2dCQUM1QixJQUFNQywwQkFBMEI7Z0JBRWhDLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CQyxhQUFhO2dCQUM5QixJQUFNQyx1QkFBdUI7Z0JBRTdCLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCQyxnQkFBZ0I7Z0JBQ3BDLElBQU1MLDBCQUEwQjtnQkFFaEMsT0FBT0E7WUFDVDs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQSxxQkFBcUJDLFdBQVcsRUFBRUMsYUFBYSxFQUFFQyxhQUFhLEVBQUVDLGFBQWE7Z0JBQzNFLElBQUlDLHlCQUF5QjtnQkFFN0IsT0FBT0E7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JDLFlBQVksRUFBRUwsYUFBYSxFQUFFQyxhQUFhLEVBQUVDLGFBQWE7O2dCQUM3RSxJQUFNSSwwQkFBMEJELGFBQWFFLElBQUksQ0FBQyxTQUFDUjtvQkFDakQsSUFBTVMscUNBQXFDLE1BQUtWLG9CQUFvQixDQUFDQyxhQUFhQyxlQUFlQyxlQUFlQztvQkFFaEgsSUFBSU0sb0NBQW9DO3dCQUN0QyxPQUFPO29CQUNUO2dCQUNGO2dCQUVBLE9BQU9GO1lBQ1Q7OztXQXpDbUJwQiJ9