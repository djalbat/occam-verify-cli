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
var _matcher = /*#__PURE__*/ _interop_require_default(require("../matcher"));
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
                var nodeA = this.termNode, nodeB = termNode, nodeMatches = _matcher.default.matchNode(nodeA, nodeB);
                termNodeMatches = nodeMatches; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdWJzdGl0dXRpb24vdGVybUZvclZhcmlhYmxlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgbWF0Y2hlciBmcm9tIFwiLi4vbWF0Y2hlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3Rvcih2YXJpYWJsZU5hbWUsIHRlcm1Ob2RlKSB7XG4gICAgdGhpcy52YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWU7XG4gICAgdGhpcy50ZXJtTm9kZSA9IHRlcm1Ob2RlO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlTmFtZTtcbiAgfVxuXG4gIGdldFRlcm1Ob2RlKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm1Ob2RlO1xuICB9XG5cbiAgbWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSkge1xuICAgIGxldCB0ZXJtTm9kZU1hdGNoZXM7XG5cbiAgICBjb25zdCBub2RlQSA9IHRoaXMudGVybU5vZGUsICAvLy9cbiAgICAgICAgICBub2RlQiA9IHRlcm1Ob2RlLFxuICAgICAgICAgIG5vZGVNYXRjaGVzID0gbWF0Y2hlci5tYXRjaE5vZGUobm9kZUEsIG5vZGVCKTtcblxuICAgIHRlcm1Ob2RlTWF0Y2hlcyA9IG5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gdGVybU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZU5hbWVBbmRUZXJtTm9kZSh2YXJpYWJsZU5hbWUsIHRlcm1Ob2RlKSB7XG4gICAgY29uc3QgdGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uID0gbmV3IFRlcm1Gb3JWYXJpYWJsZVN1YnN0aXR1dGlvbih2YXJpYWJsZU5hbWUsIHRlcm1Ob2RlKTtcblxuICAgIHJldHVybiB0ZXJtRm9yVmFyaWFibGVTdWJzdGl0dXRpb247XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiVGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIiwidmFyaWFibGVOYW1lIiwidGVybU5vZGUiLCJnZXRWYXJpYWJsZU5hbWUiLCJnZXRUZXJtTm9kZSIsIm1hdGNoVGVybU5vZGUiLCJ0ZXJtTm9kZU1hdGNoZXMiLCJub2RlQSIsIm5vZGVCIiwibm9kZU1hdGNoZXMiLCJtYXRjaGVyIiwibWF0Y2hOb2RlIiwiZnJvbVZhcmlhYmxlTmFtZUFuZFRlcm1Ob2RlIiwidGVybUZvclZhcmlhYmxlU3Vic3RpdHV0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7Ozs4REFGRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVMLElBQUEsQUFBTUEsNENBQU47YUFBTUEsNEJBQ1BDLFlBQVksRUFBRUMsUUFBUTtnQ0FEZkY7UUFFakIsSUFBSSxDQUFDQyxZQUFZLEdBQUdBO1FBQ3BCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTs7a0JBSENGOztZQU1uQkcsS0FBQUE7bUJBQUFBLFNBQUFBLGtCQUFrQjtnQkFDaEIsT0FBTyxJQUFJLENBQUNGLFlBQVk7WUFDMUI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsY0FBYztnQkFDWixPQUFPLElBQUksQ0FBQ0YsUUFBUTtZQUN0Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjSCxRQUFRLEVBQUU7Z0JBQ3RCLElBQUlJO2dCQUVKLElBQU1DLFFBQVEsSUFBSSxDQUFDTCxRQUFRLEVBQ3JCTSxRQUFRTixVQUNSTyxjQUFjQyxnQkFBTyxDQUFDQyxTQUFTLENBQUNKLE9BQU9DO2dCQUU3Q0Ysa0JBQWtCRyxhQUFjLEdBQUc7Z0JBRW5DLE9BQU9IO1lBQ1Q7Ozs7WUFFT00sS0FBQUE7bUJBQVAsU0FBT0EsNEJBQTRCWCxZQUFZLEVBQUVDLFFBQVEsRUFBRTtnQkFDekQsSUFBTVcsOEJBQThCLElBM0JuQmIsNEJBMkJtREMsY0FBY0M7Z0JBRWxGLE9BQU9XO1lBQ1Q7OztXQTlCbUJiIn0=