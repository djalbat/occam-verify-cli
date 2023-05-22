"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TermForVariableSubstitution;
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
var TermForVariableSubstitution = /*#__PURE__*/ function() {
    function TermForVariableSubstitution(variableName, termNode) {
        _class_call_check(this, TermForVariableSubstitution);
        this.variableName = variableName;
        this.termNode = termNode;
    }
    _create_class(TermForVariableSubstitution, [
        {
            key: "getVariableName",
            value: function getVariableName() {
                return this.variableName;
            }
        },
        {
            key: "getTermNode",
            value: function getTermNode() {
                return this.termNode;
            }
        },
        {
            key: "matchTermNode",
            value: function matchTermNode(termNode) {
                var termNodeMatches;
                termNodeMatches = this.termNode.match(termNode);
                return termNodeMatches;
            }
        }
    ], [
        {
            key: "fromVariableNameAndTermNode",
            value: function fromVariableNameAndTermNode(variableName, termNode) {
                var termForVariableSubstitution = new TermForVariableSubstitution(variableName, termNode);
                return termForVariableSubstitution;
            }
        }
    ]);
    return TermForVariableSubstitution;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vdGVybUZvclZhcmlhYmxlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3Rvcih2YXJpYWJsZU5hbWUsIHRlcm1Ob2RlKSB7XG4gICAgdGhpcy52YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWU7XG4gICAgdGhpcy50ZXJtTm9kZSA9IHRlcm1Ob2RlO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlTmFtZTtcbiAgfVxuXG4gIGdldFRlcm1Ob2RlKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm1Ob2RlO1xuICB9XG5cbiAgbWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSkge1xuICAgIGxldCB0ZXJtTm9kZU1hdGNoZXM7XG5cbiAgICB0ZXJtTm9kZU1hdGNoZXMgPSB0aGlzLnRlcm1Ob2RlLm1hdGNoKHRlcm1Ob2RlKTtcblxuICAgIHJldHVybiB0ZXJtTm9kZU1hdGNoZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhcmlhYmxlTmFtZUFuZFRlcm1Ob2RlKHZhcmlhYmxlTmFtZSwgdGVybU5vZGUpIHtcbiAgICBjb25zdCB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24gPSBuZXcgVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uKHZhcmlhYmxlTmFtZSwgdGVybU5vZGUpO1xuXG4gICAgcmV0dXJuIHRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbjtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24iLCJ2YXJpYWJsZU5hbWUiLCJ0ZXJtTm9kZSIsImdldFZhcmlhYmxlTmFtZSIsImdldFRlcm1Ob2RlIiwibWF0Y2hUZXJtTm9kZSIsInRlcm1Ob2RlTWF0Y2hlcyIsIm1hdGNoIiwiZnJvbVZhcmlhYmxlTmFtZUFuZFRlcm1Ob2RlIiwidGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUVxQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTixJQUFBLEFBQU1BLDRDQUFOO2FBQU1BLDRCQUNQQyxZQUFZLEVBQUVDLFFBQVE7Z0NBRGZGO1FBRWpCLElBQUksQ0FBQ0MsZUFBZUE7UUFDcEIsSUFBSSxDQUFDQyxXQUFXQTs7a0JBSENGOztZQU1uQkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRjtZQUNkOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRjtZQUNkOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWNILFFBQVE7Z0JBQ3BCLElBQUlJO2dCQUVKQSxrQkFBa0IsSUFBSSxDQUFDSixTQUFTSyxNQUFNTDtnQkFFdEMsT0FBT0k7WUFDVDs7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSw0QkFBNEJQLFlBQVksRUFBRUMsUUFBUTtnQkFDdkQsSUFBTU8sOEJBQThCLElBdkJuQlQsNEJBdUJtREMsY0FBY0M7Z0JBRWxGLE9BQU9PO1lBQ1Q7OztXQTFCbUJUIn0=