"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Term;
    }
});
var _query = require("./utilities/query");
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
var variableNodesQuery = (0, _query.nodesQuery)("//variable");
var Term = /*#__PURE__*/ function() {
    function Term(node, type) {
        _class_call_check(this, Term);
        this.node = node;
        this.type = type;
    }
    _create_class(Term, [
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        },
        {
            key: "getType",
            value: function getType() {
                return this.type;
            }
        },
        {
            key: "match",
            value: function match(term) {
                var node = term.getNode(), matches = this.node.match(node);
                return matches;
            }
        },
        {
            key: "getVariables",
            value: function getVariables(variables, context) {
                var variableNodes = variableNodesQuery(this.node);
                variableNodes.forEach(function(variableNode) {
                    var variable = context.findVariableByVariableNode(variableNode), variablesIncludesVariable = variables.includes(variable);
                    if (!variablesIncludesVariable) {
                        variables.push(variable);
                    }
                });
                return variables;
            }
        },
        {
            key: "isInitiallyGrounded",
            value: function isInitiallyGrounded() {
                var definedVariables = [], implicitlyGrounded = this.isImplicitlyGrounded(definedVariables), initiallyGrounded = implicitlyGrounded; ///
                return initiallyGrounded;
            }
        },
        {
            key: "isImplicitlyGrounded",
            value: function isImplicitlyGrounded(definedVariables) {
                var variableNodes = variableNodesQuery(this.node), variables = definedVariables, nodes = variableNodes, implicitlyGrounded = nodes.every(function(node) {
                    var variableMatchesNode = variables.some(function(variable) {
                        var variableMatchesNode = variable.matchNode(node);
                        if (variableMatchesNode) {
                            return true;
                        }
                    });
                    if (variableMatchesNode) {
                        return true;
                    }
                });
                return implicitlyGrounded;
            }
        }
    ], [
        {
            key: "fromTermNodeAndType",
            value: function fromTermNodeAndType(termNode, type) {
                var node = termNode, term = new Term(node, type);
                return term;
            }
        }
    ]);
    return Term;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90ZXJtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCJcblxuY29uc3QgdmFyaWFibGVOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi8vdmFyaWFibGVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlcm0ge1xuICBjb25zdHJ1Y3Rvcihub2RlLCB0eXBlKSB7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgbWF0Y2godGVybSkge1xuICAgIGNvbnN0IG5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICBtYXRjaGVzID0gdGhpcy5ub2RlLm1hdGNoKG5vZGUpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBnZXRWYXJpYWJsZXModmFyaWFibGVzLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdmFyaWFibGVOb2RlcyA9IHZhcmlhYmxlTm9kZXNRdWVyeSh0aGlzLm5vZGUpO1xuXG4gICAgdmFyaWFibGVOb2Rlcy5mb3JFYWNoKCh2YXJpYWJsZU5vZGUpID0+IHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgdmFyaWFibGVzSW5jbHVkZXNWYXJpYWJsZSA9IHZhcmlhYmxlcy5pbmNsdWRlcyh2YXJpYWJsZSk7XG5cbiAgICAgIGlmICghdmFyaWFibGVzSW5jbHVkZXNWYXJpYWJsZSkge1xuICAgICAgICB2YXJpYWJsZXMucHVzaCh2YXJpYWJsZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVzO1xuICB9XG5cbiAgaXNJbml0aWFsbHlHcm91bmRlZCgpIHtcbiAgICBjb25zdCBkZWZpbmVkVmFyaWFibGVzID0gW10sXG4gICAgICAgICAgaW1wbGljaXRseUdyb3VuZGVkID0gdGhpcy5pc0ltcGxpY2l0bHlHcm91bmRlZChkZWZpbmVkVmFyaWFibGVzKSxcbiAgICAgICAgICBpbml0aWFsbHlHcm91bmRlZCA9IGltcGxpY2l0bHlHcm91bmRlZDsgLy8vXG5cbiAgICByZXR1cm4gaW5pdGlhbGx5R3JvdW5kZWQ7XG4gIH1cblxuICBpc0ltcGxpY2l0bHlHcm91bmRlZChkZWZpbmVkVmFyaWFibGVzKSB7XG4gICAgY29uc3QgdmFyaWFibGVOb2RlcyA9IHZhcmlhYmxlTm9kZXNRdWVyeSh0aGlzLm5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlcyA9IGRlZmluZWRWYXJpYWJsZXMsIC8vL1xuICAgICAgICAgIG5vZGVzID0gdmFyaWFibGVOb2RlcywgIC8vL1xuICAgICAgICAgIGltcGxpY2l0bHlHcm91bmRlZCA9IG5vZGVzLmV2ZXJ5KChub2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZU1hdGNoZXNOb2RlID0gdmFyaWFibGVzLnNvbWUoKHZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlTWF0Y2hlc05vZGUgPSB2YXJpYWJsZS5tYXRjaE5vZGUobm9kZSk7XG5cbiAgICAgICAgICAgICAgaWYgKHZhcmlhYmxlTWF0Y2hlc05vZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICh2YXJpYWJsZU1hdGNoZXNOb2RlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGltcGxpY2l0bHlHcm91bmRlZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGVybU5vZGVBbmRUeXBlKHRlcm1Ob2RlLCB0eXBlKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgdGVybSA9IG5ldyBUZXJtKG5vZGUsIHR5cGUpO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJUZXJtIiwidmFyaWFibGVOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsIm5vZGUiLCJ0eXBlIiwiZ2V0Tm9kZSIsImdldFR5cGUiLCJtYXRjaCIsInRlcm0iLCJtYXRjaGVzIiwiZ2V0VmFyaWFibGVzIiwidmFyaWFibGVzIiwiY29udGV4dCIsInZhcmlhYmxlTm9kZXMiLCJmb3JFYWNoIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlc0luY2x1ZGVzVmFyaWFibGUiLCJpbmNsdWRlcyIsInB1c2giLCJpc0luaXRpYWxseUdyb3VuZGVkIiwiZGVmaW5lZFZhcmlhYmxlcyIsImltcGxpY2l0bHlHcm91bmRlZCIsImlzSW1wbGljaXRseUdyb3VuZGVkIiwiaW5pdGlhbGx5R3JvdW5kZWQiLCJub2RlcyIsImV2ZXJ5IiwidmFyaWFibGVNYXRjaGVzTm9kZSIsInNvbWUiLCJtYXRjaE5vZGUiLCJmcm9tVGVybU5vZGVBbmRUeXBlIiwidGVybU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O3FCQUpNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzQixJQUFNQyxxQkFBcUJDLElBQUFBLGlCQUFVLEVBQUM7QUFFdkIsSUFBQSxBQUFNRixxQkFBRCxBQUFMO2FBQU1BLEtBQ1BHLElBQUksRUFBRUMsSUFBSTtnQ0FESEo7UUFFakIsSUFBSSxDQUFDRyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBOztrQkFIS0o7O1lBTW5CSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsSUFBSTtnQkFDUixJQUFNTCxPQUFPSyxLQUFLSCxPQUFPLElBQ25CSSxVQUFVLElBQUksQ0FBQ04sSUFBSSxDQUFDSSxLQUFLLENBQUNKO2dCQUVoQyxPQUFPTTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGFBQWFDLFNBQVMsRUFBRUMsT0FBTztnQkFDN0IsSUFBTUMsZ0JBQWdCWixtQkFBbUIsSUFBSSxDQUFDRSxJQUFJO2dCQUVsRFUsY0FBY0MsT0FBTyxDQUFDLFNBQUNDO29CQUNyQixJQUFNQyxXQUFXSixRQUFRSywwQkFBMEIsQ0FBQ0YsZUFDOUNHLDRCQUE0QlAsVUFBVVEsUUFBUSxDQUFDSDtvQkFFckQsSUFBSSxDQUFDRSwyQkFBMkI7d0JBQzlCUCxVQUFVUyxJQUFJLENBQUNKO29CQUNqQjtnQkFDRjtnQkFFQSxPQUFPTDtZQUNUOzs7WUFFQVUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLG1CQUFtQixFQUFFLEVBQ3JCQyxxQkFBcUIsSUFBSSxDQUFDQyxvQkFBb0IsQ0FBQ0YsbUJBQy9DRyxvQkFBb0JGLG9CQUFvQixHQUFHO2dCQUVqRCxPQUFPRTtZQUNUOzs7WUFFQUQsS0FBQUE7bUJBQUFBLFNBQUFBLHFCQUFxQkYsZ0JBQWdCO2dCQUNuQyxJQUFNVCxnQkFBZ0JaLG1CQUFtQixJQUFJLENBQUNFLElBQUksR0FDNUNRLFlBQVlXLGtCQUNaSSxRQUFRYixlQUNSVSxxQkFBcUJHLE1BQU1DLEtBQUssQ0FBQyxTQUFDeEI7b0JBQ2hDLElBQU15QixzQkFBc0JqQixVQUFVa0IsSUFBSSxDQUFDLFNBQUNiO3dCQUMxQyxJQUFNWSxzQkFBc0JaLFNBQVNjLFNBQVMsQ0FBQzNCO3dCQUUvQyxJQUFJeUIscUJBQXFCOzRCQUN2QixPQUFPO3dCQUNUO29CQUNGO29CQUVBLElBQUlBLHFCQUFxQjt3QkFDdkIsT0FBTztvQkFDVDtnQkFDRjtnQkFFTixPQUFPTDtZQUNUOzs7O1lBRU9RLEtBQUFBO21CQUFQLFNBQU9BLG9CQUFvQkMsUUFBUSxFQUFFNUIsSUFBSTtnQkFDdkMsSUFBTUQsT0FBTzZCLFVBQ1B4QixPQUFPLElBbkVJUixLQW1FS0csTUFBTUM7Z0JBRTVCLE9BQU9JO1lBQ1Q7OztXQXRFbUJSIn0=