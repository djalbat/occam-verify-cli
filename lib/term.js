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
var _occamcustomgrammars = require("occam-custom-grammars");
var _query = require("./utilities/query");
var _ruleNames = require("./ruleNames");
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
var florenceLexerFromNothing = _occamcustomgrammars.lexersUtilities.florenceLexerFromNothing, florenceParserFromNothing = _occamcustomgrammars.parsersUtilities.florenceParserFromNothing;
var florenceLexer = florenceLexerFromNothing(), florenceParser = florenceParserFromNothing();
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
            key: "fromVariable",
            value: function fromVariable(variable, context) {
                var variableNode = variable.getNode(), termNode = termNodeFromVariableNode(variableNode, context), node = termNode, type = variable.getType(), term = new Term(node, type);
                return term;
            }
        },
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
function termNodeFromVariableNode(variableNode, context) {
    var variableString = context.nodeAsString(variableNode), content = variableString, lexer = florenceLexer, parser = florenceParser, ruleMap = parser.getRuleMap(), startRuleName = _ruleNames.TERM_RULE_NAME, startRule = ruleMap[startRuleName], tokens = lexer.tokenise(content), node = parser.parse(tokens, startRule), termNode = node; ///
    return termNode;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90ZXJtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBsZXhlcnNVdGlsaXRpZXMsIHBhcnNlcnNVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tY3VzdG9tLWdyYW1tYXJzXCI7XG5cbmltcG9ydCB7IG5vZGVzUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIlxuaW1wb3J0IHsgVEVSTV9SVUxFX05BTUUgfSBmcm9tIFwiLi9ydWxlTmFtZXNcIjtcblxuY29uc3QgeyBmbG9yZW5jZUxleGVyRnJvbU5vdGhpbmcgfSA9IGxleGVyc1V0aWxpdGllcyxcbiAgICAgIHsgZmxvcmVuY2VQYXJzZXJGcm9tTm90aGluZyB9ID0gcGFyc2Vyc1V0aWxpdGllcztcblxuY29uc3QgZmxvcmVuY2VMZXhlciA9IGZsb3JlbmNlTGV4ZXJGcm9tTm90aGluZygpLFxuICAgICAgZmxvcmVuY2VQYXJzZXIgPSBmbG9yZW5jZVBhcnNlckZyb21Ob3RoaW5nKCk7XG5cbmNvbnN0IHZhcmlhYmxlTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvL3ZhcmlhYmxlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXJtIHtcbiAgY29uc3RydWN0b3Iobm9kZSwgdHlwZSkge1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIG1hdGNoKHRlcm0pIHtcbiAgICBjb25zdCBub2RlID0gdGVybS5nZXROb2RlKCksXG4gICAgICAgICAgbWF0Y2hlcyA9IHRoaXMubm9kZS5tYXRjaChub2RlKTtcblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVzKHZhcmlhYmxlcywgY29udGV4dCkge1xuICAgIGNvbnN0IHZhcmlhYmxlTm9kZXMgPSB2YXJpYWJsZU5vZGVzUXVlcnkodGhpcy5ub2RlKTtcblxuICAgIHZhcmlhYmxlTm9kZXMuZm9yRWFjaCgodmFyaWFibGVOb2RlKSA9PiB7XG4gICAgICBjb25zdCB2YXJpYWJsZSA9IGNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICAgIHZhcmlhYmxlc0luY2x1ZGVzVmFyaWFibGUgPSB2YXJpYWJsZXMuaW5jbHVkZXModmFyaWFibGUpO1xuXG4gICAgICBpZiAoIXZhcmlhYmxlc0luY2x1ZGVzVmFyaWFibGUpIHtcbiAgICAgICAgdmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlcztcbiAgfVxuXG4gIGlzSW5pdGlhbGx5R3JvdW5kZWQoKSB7XG4gICAgY29uc3QgZGVmaW5lZFZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIGltcGxpY2l0bHlHcm91bmRlZCA9IHRoaXMuaXNJbXBsaWNpdGx5R3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcyksXG4gICAgICAgICAgaW5pdGlhbGx5R3JvdW5kZWQgPSBpbXBsaWNpdGx5R3JvdW5kZWQ7IC8vL1xuXG4gICAgcmV0dXJuIGluaXRpYWxseUdyb3VuZGVkO1xuICB9XG5cbiAgaXNJbXBsaWNpdGx5R3JvdW5kZWQoZGVmaW5lZFZhcmlhYmxlcykge1xuICAgIGNvbnN0IHZhcmlhYmxlTm9kZXMgPSB2YXJpYWJsZU5vZGVzUXVlcnkodGhpcy5ub2RlKSxcbiAgICAgICAgICB2YXJpYWJsZXMgPSBkZWZpbmVkVmFyaWFibGVzLCAvLy9cbiAgICAgICAgICBub2RlcyA9IHZhcmlhYmxlTm9kZXMsICAvLy9cbiAgICAgICAgICBpbXBsaWNpdGx5R3JvdW5kZWQgPSBub2Rlcy5ldmVyeSgobm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFyaWFibGVNYXRjaGVzTm9kZSA9IHZhcmlhYmxlcy5zb21lKCh2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB2YXJpYWJsZU1hdGNoZXNOb2RlID0gdmFyaWFibGUubWF0Y2hOb2RlKG5vZGUpO1xuXG4gICAgICAgICAgICAgIGlmICh2YXJpYWJsZU1hdGNoZXNOb2RlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAodmFyaWFibGVNYXRjaGVzTm9kZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBpbXBsaWNpdGx5R3JvdW5kZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhcmlhYmxlKHZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdmFyaWFibGVOb2RlID0gdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRlcm1Ob2RlID0gdGVybU5vZGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgbm9kZSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgdHlwZSA9IHZhcmlhYmxlLmdldFR5cGUoKSxcbiAgICAgICAgICB0ZXJtID0gbmV3IFRlcm0obm9kZSwgdHlwZSk7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGVybU5vZGVBbmRUeXBlKHRlcm1Ob2RlLCB0eXBlKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRlcm1Ob2RlLCAgLy8vXG4gICAgICAgICAgdGVybSA9IG5ldyBUZXJtKG5vZGUsIHR5cGUpO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cbn1cblxuZnVuY3Rpb24gdGVybU5vZGVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKHZhcmlhYmxlTm9kZSksXG4gICAgICAgIGNvbnRlbnQgPSB2YXJpYWJsZVN0cmluZywgLy8vXG4gICAgICAgIGxleGVyID0gZmxvcmVuY2VMZXhlciwgIC8vL1xuICAgICAgICBwYXJzZXIgPSBmbG9yZW5jZVBhcnNlciwgIC8vL1xuICAgICAgICBydWxlTWFwID0gcGFyc2VyLmdldFJ1bGVNYXAoKSxcbiAgICAgICAgc3RhcnRSdWxlTmFtZSA9IFRFUk1fUlVMRV9OQU1FLCAvLy9cbiAgICAgICAgc3RhcnRSdWxlID0gcnVsZU1hcFtzdGFydFJ1bGVOYW1lXSxcbiAgICAgICAgdG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgIG5vZGUgPSBwYXJzZXIucGFyc2UodG9rZW5zLCBzdGFydFJ1bGUpLFxuICAgICAgICB0ZXJtTm9kZSA9IG5vZGU7ICAvLy9cblxuICByZXR1cm4gdGVybU5vZGU7XG59Il0sIm5hbWVzIjpbIlRlcm0iLCJmbG9yZW5jZUxleGVyRnJvbU5vdGhpbmciLCJsZXhlcnNVdGlsaXRpZXMiLCJmbG9yZW5jZVBhcnNlckZyb21Ob3RoaW5nIiwicGFyc2Vyc1V0aWxpdGllcyIsImZsb3JlbmNlTGV4ZXIiLCJmbG9yZW5jZVBhcnNlciIsInZhcmlhYmxlTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJub2RlIiwidHlwZSIsImdldE5vZGUiLCJnZXRUeXBlIiwibWF0Y2giLCJ0ZXJtIiwibWF0Y2hlcyIsImdldFZhcmlhYmxlcyIsInZhcmlhYmxlcyIsImNvbnRleHQiLCJ2YXJpYWJsZU5vZGVzIiwiZm9yRWFjaCIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZXNJbmNsdWRlc1ZhcmlhYmxlIiwiaW5jbHVkZXMiLCJwdXNoIiwiaXNJbml0aWFsbHlHcm91bmRlZCIsImRlZmluZWRWYXJpYWJsZXMiLCJpbXBsaWNpdGx5R3JvdW5kZWQiLCJpc0ltcGxpY2l0bHlHcm91bmRlZCIsImluaXRpYWxseUdyb3VuZGVkIiwibm9kZXMiLCJldmVyeSIsInZhcmlhYmxlTWF0Y2hlc05vZGUiLCJzb21lIiwibWF0Y2hOb2RlIiwiZnJvbVZhcmlhYmxlIiwidGVybU5vZGUiLCJ0ZXJtTm9kZUZyb21WYXJpYWJsZU5vZGUiLCJmcm9tVGVybU5vZGVBbmRUeXBlIiwidmFyaWFibGVTdHJpbmciLCJub2RlQXNTdHJpbmciLCJjb250ZW50IiwibGV4ZXIiLCJwYXJzZXIiLCJydWxlTWFwIiwiZ2V0UnVsZU1hcCIsInN0YXJ0UnVsZU5hbWUiLCJURVJNX1JVTEVfTkFNRSIsInN0YXJ0UnVsZSIsInRva2VucyIsInRva2VuaXNlIiwicGFyc2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBZXFCQTs7O21DQWI2QjtxQkFFdkI7eUJBQ0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9CLElBQU0sQUFBRUMsMkJBQTZCQyxvQ0FBZSxDQUE1Q0QsMEJBQ0YsQUFBRUUsNEJBQThCQyxxQ0FBZ0IsQ0FBOUNEO0FBRVIsSUFBTUUsZ0JBQWdCSiw0QkFDaEJLLGlCQUFpQkg7QUFFdkIsSUFBTUkscUJBQXFCQyxJQUFBQSxpQkFBVSxFQUFDO0FBRXZCLElBQUEsQUFBTVIscUJBQUQsQUFBTDthQUFNQSxLQUNQUyxJQUFJLEVBQUVDLElBQUk7Z0NBREhWO1FBRWpCLElBQUksQ0FBQ1MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTs7a0JBSEtWOztZQU1uQlcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixJQUFJO1lBQ2xCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixJQUFJO1lBQ2xCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLElBQUk7Z0JBQ1IsSUFBTUwsT0FBT0ssS0FBS0gsT0FBTyxJQUNuQkksVUFBVSxJQUFJLENBQUNOLElBQUksQ0FBQ0ksS0FBSyxDQUFDSjtnQkFFaEMsT0FBT007WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxhQUFhQyxTQUFTLEVBQUVDLE9BQU87Z0JBQzdCLElBQU1DLGdCQUFnQlosbUJBQW1CLElBQUksQ0FBQ0UsSUFBSTtnQkFFbERVLGNBQWNDLE9BQU8sQ0FBQyxTQUFDQztvQkFDckIsSUFBTUMsV0FBV0osUUFBUUssMEJBQTBCLENBQUNGLGVBQzlDRyw0QkFBNEJQLFVBQVVRLFFBQVEsQ0FBQ0g7b0JBRXJELElBQUksQ0FBQ0UsMkJBQTJCO3dCQUM5QlAsVUFBVVMsSUFBSSxDQUFDSjtvQkFDakI7Z0JBQ0Y7Z0JBRUEsT0FBT0w7WUFDVDs7O1lBRUFVLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxtQkFBbUIsRUFBRSxFQUNyQkMscUJBQXFCLElBQUksQ0FBQ0Msb0JBQW9CLENBQUNGLG1CQUMvQ0csb0JBQW9CRixvQkFBb0IsR0FBRztnQkFFakQsT0FBT0U7WUFDVDs7O1lBRUFELEtBQUFBO21CQUFBQSxTQUFBQSxxQkFBcUJGLGdCQUFnQjtnQkFDbkMsSUFBTVQsZ0JBQWdCWixtQkFBbUIsSUFBSSxDQUFDRSxJQUFJLEdBQzVDUSxZQUFZVyxrQkFDWkksUUFBUWIsZUFDUlUscUJBQXFCRyxNQUFNQyxLQUFLLENBQUMsU0FBQ3hCO29CQUNoQyxJQUFNeUIsc0JBQXNCakIsVUFBVWtCLElBQUksQ0FBQyxTQUFDYjt3QkFDMUMsSUFBTVksc0JBQXNCWixTQUFTYyxTQUFTLENBQUMzQjt3QkFFL0MsSUFBSXlCLHFCQUFxQjs0QkFDdkIsT0FBTzt3QkFDVDtvQkFDRjtvQkFFQSxJQUFJQSxxQkFBcUI7d0JBQ3ZCLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRU4sT0FBT0w7WUFDVDs7OztZQUVPUSxLQUFBQTttQkFBUCxTQUFPQSxhQUFhZixRQUFRLEVBQUVKLE9BQU87Z0JBQ25DLElBQU1HLGVBQWVDLFNBQVNYLE9BQU8sSUFDL0IyQixXQUFXQyx5QkFBeUJsQixjQUFjSCxVQUNsRFQsT0FBTzZCLFVBQ1A1QixPQUFPWSxTQUFTVixPQUFPLElBQ3ZCRSxPQUFPLElBdEVJZCxLQXNFS1MsTUFBTUM7Z0JBRTVCLE9BQU9JO1lBQ1Q7OztZQUVPMEIsS0FBQUE7bUJBQVAsU0FBT0Esb0JBQW9CRixRQUFRLEVBQUU1QixJQUFJO2dCQUN2QyxJQUFNRCxPQUFPNkIsVUFDUHhCLE9BQU8sSUE3RUlkLEtBNkVLUyxNQUFNQztnQkFFNUIsT0FBT0k7WUFDVDs7O1dBaEZtQmQ7O0FBbUZyQixTQUFTdUMseUJBQXlCbEIsWUFBWSxFQUFFSCxPQUFPO0lBQ3JELElBQU11QixpQkFBaUJ2QixRQUFRd0IsWUFBWSxDQUFDckIsZUFDdENzQixVQUFVRixnQkFDVkcsUUFBUXZDLGVBQ1J3QyxTQUFTdkMsZ0JBQ1R3QyxVQUFVRCxPQUFPRSxVQUFVLElBQzNCQyxnQkFBZ0JDLHlCQUFjLEVBQzlCQyxZQUFZSixPQUFPLENBQUNFLGNBQWMsRUFDbENHLFNBQVNQLE1BQU1RLFFBQVEsQ0FBQ1QsVUFDeEJsQyxPQUFPb0MsT0FBT1EsS0FBSyxDQUFDRixRQUFRRCxZQUM1QlosV0FBVzdCLE1BQU8sR0FBRztJQUUzQixPQUFPNkI7QUFDVCJ9