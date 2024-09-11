"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Variable;
    }
});
var _string = require("./utilities/string");
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
var Variable = /*#__PURE__*/ function() {
    function Variable(node, type) {
        _class_call_check(this, Variable);
        this.node = node;
        this.type = type;
    }
    _create_class(Variable, [
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
            value: function match(variable) {
                var type = variable.getType(), node = variable.getNode(), matchesType = this.matchType(type), matchesNode = this.matchNode(node), matches = matchesNode && matchesType;
                return matches;
            }
        },
        {
            key: "matchNode",
            value: function matchNode(node) {
                var matchesNode = this.node.match(node);
                return matchesNode;
            }
        },
        {
            key: "matchType",
            value: function matchType(type) {
                var matchesType = this.type.match(type);
                return matchesType;
            }
        },
        {
            key: "matchNodeAndType",
            value: function matchNodeAndType(node, type) {
                var matchesNode = this.matchNode(node), matchesType = this.matchType(type), matchesNodeAndType = matchesNode && matchesType;
                return matchesNodeAndType;
            }
        },
        {
            key: "asString",
            value: function asString(tokens) {
                var typeName = this.type.getName();
                var string = (0, _string.nodeAsString)(this.node, tokens);
                string = "".concat(string, ":").concat(typeName); ///
                return string;
            }
        }
    ], [
        {
            key: "fromVariableAndType",
            value: function fromVariableAndType(variable, type) {
                var node = variable.getNode();
                variable = new Variable(node, type); ///
                return variable;
            }
        },
        {
            key: "fromVariableNodeAndType",
            value: function fromVariableNodeAndType(variableNode, type) {
                var node = variableNode, variable = new Variable(node, type);
                return variable;
            }
        }
    ]);
    return Variable;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWYXJpYWJsZSB7XG4gIGNvbnN0cnVjdG9yKG5vZGUsIHR5cGUpIHtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBtYXRjaCh2YXJpYWJsZSkge1xuICAgIGNvbnN0IHR5cGUgPSB2YXJpYWJsZS5nZXRUeXBlKCksXG4gICAgICAgICAgbm9kZSA9IHZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgICBtYXRjaGVzVHlwZSA9IHRoaXMubWF0Y2hUeXBlKHR5cGUpLFxuICAgICAgICAgIG1hdGNoZXNOb2RlID0gdGhpcy5tYXRjaE5vZGUobm9kZSksXG4gICAgICAgICAgbWF0Y2hlcyA9IG1hdGNoZXNOb2RlICYmIG1hdGNoZXNUeXBlO1xuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE5vZGUobm9kZSkge1xuICAgIGNvbnN0IG1hdGNoZXNOb2RlID0gdGhpcy5ub2RlLm1hdGNoKG5vZGUpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNOb2RlO1xuICB9XG5cbiAgbWF0Y2hUeXBlKHR5cGUpIHtcbiAgICBjb25zdCBtYXRjaGVzVHlwZSA9IHRoaXMudHlwZS5tYXRjaCh0eXBlKTtcblxuICAgIHJldHVybiBtYXRjaGVzVHlwZTtcbiAgfVxuXG4gIG1hdGNoTm9kZUFuZFR5cGUobm9kZSwgdHlwZSkge1xuICAgIGNvbnN0IG1hdGNoZXNOb2RlID0gdGhpcy5tYXRjaE5vZGUobm9kZSksXG4gICAgICAgICAgbWF0Y2hlc1R5cGUgPSB0aGlzLm1hdGNoVHlwZSh0eXBlKSxcbiAgICAgICAgICBtYXRjaGVzTm9kZUFuZFR5cGUgPSBtYXRjaGVzTm9kZSAmJiBtYXRjaGVzVHlwZTtcblxuICAgIHJldHVybiBtYXRjaGVzTm9kZUFuZFR5cGU7XG4gIH1cblxuICBhc1N0cmluZyh0b2tlbnMpIHtcbiAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMudHlwZS5nZXROYW1lKCk7XG5cbiAgICBsZXQgc3RyaW5nID0gbm9kZUFzU3RyaW5nKHRoaXMubm9kZSwgdG9rZW5zKTtcblxuICAgIHN0cmluZyA9IGAke3N0cmluZ306JHt0eXBlTmFtZX1gOyAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhcmlhYmxlQW5kVHlwZSh2YXJpYWJsZSwgdHlwZSkge1xuICAgIGNvbnN0IG5vZGUgPSB2YXJpYWJsZS5nZXROb2RlKCk7XG5cbiAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShub2RlLCB0eXBlKTsgIC8vL1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZU5vZGVBbmRUeXBlKHZhcmlhYmxlTm9kZSwgdHlwZSkge1xuICAgIGNvbnN0IG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShub2RlLCB0eXBlKTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlZhcmlhYmxlIiwibm9kZSIsInR5cGUiLCJnZXROb2RlIiwiZ2V0VHlwZSIsIm1hdGNoIiwidmFyaWFibGUiLCJtYXRjaGVzVHlwZSIsIm1hdGNoVHlwZSIsIm1hdGNoZXNOb2RlIiwibWF0Y2hOb2RlIiwibWF0Y2hlcyIsIm1hdGNoTm9kZUFuZFR5cGUiLCJtYXRjaGVzTm9kZUFuZFR5cGUiLCJhc1N0cmluZyIsInRva2VucyIsInR5cGVOYW1lIiwiZ2V0TmFtZSIsInN0cmluZyIsIm5vZGVBc1N0cmluZyIsImZyb21WYXJpYWJsZUFuZFR5cGUiLCJmcm9tVmFyaWFibGVOb2RlQW5kVHlwZSIsInZhcmlhYmxlTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7c0JBRlE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWQsSUFBQSxBQUFNQSx5QkFBTjthQUFNQSxTQUNQQyxJQUFJLEVBQUVDLElBQUk7Z0NBREhGO1FBRWpCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTs7a0JBSEtGOztZQU1uQkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixJQUFJO1lBQ2xCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixJQUFJO1lBQ2xCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLFFBQVE7Z0JBQ1osSUFBTUosT0FBT0ksU0FBU0YsT0FBTyxJQUN2QkgsT0FBT0ssU0FBU0gsT0FBTyxJQUN2QkksY0FBYyxJQUFJLENBQUNDLFNBQVMsQ0FBQ04sT0FDN0JPLGNBQWMsSUFBSSxDQUFDQyxTQUFTLENBQUNULE9BQzdCVSxVQUFVRixlQUFlRjtnQkFFL0IsT0FBT0k7WUFDVDs7O1lBRUFELEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVVCxJQUFJO2dCQUNaLElBQU1RLGNBQWMsSUFBSSxDQUFDUixJQUFJLENBQUNJLEtBQUssQ0FBQ0o7Z0JBRXBDLE9BQU9RO1lBQ1Q7OztZQUVBRCxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVU4sSUFBSTtnQkFDWixJQUFNSyxjQUFjLElBQUksQ0FBQ0wsSUFBSSxDQUFDRyxLQUFLLENBQUNIO2dCQUVwQyxPQUFPSztZQUNUOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQlgsSUFBSSxFQUFFQyxJQUFJO2dCQUN6QixJQUFNTyxjQUFjLElBQUksQ0FBQ0MsU0FBUyxDQUFDVCxPQUM3Qk0sY0FBYyxJQUFJLENBQUNDLFNBQVMsQ0FBQ04sT0FDN0JXLHFCQUFxQkosZUFBZUY7Z0JBRTFDLE9BQU9NO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsU0FBU0MsTUFBTTtnQkFDYixJQUFNQyxXQUFXLElBQUksQ0FBQ2QsSUFBSSxDQUFDZSxPQUFPO2dCQUVsQyxJQUFJQyxTQUFTQyxJQUFBQSxvQkFBWSxFQUFDLElBQUksQ0FBQ2xCLElBQUksRUFBRWM7Z0JBRXJDRyxTQUFTLEFBQUMsR0FBWUYsT0FBVkUsUUFBTyxLQUFZLE9BQVRGLFdBQVksR0FBRztnQkFFckMsT0FBT0U7WUFDVDs7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSxvQkFBb0JkLFFBQVEsRUFBRUosSUFBSTtnQkFDdkMsSUFBTUQsT0FBT0ssU0FBU0gsT0FBTztnQkFFN0JHLFdBQVcsSUF6RE1OLFNBeURPQyxNQUFNQyxPQUFRLEdBQUc7Z0JBRXpDLE9BQU9JO1lBQ1Q7OztZQUVPZSxLQUFBQTttQkFBUCxTQUFPQSx3QkFBd0JDLFlBQVksRUFBRXBCLElBQUk7Z0JBQy9DLElBQU1ELE9BQU9xQixjQUNQaEIsV0FBVyxJQWhFQU4sU0FnRWFDLE1BQU1DO2dCQUVwQyxPQUFPSTtZQUNUOzs7V0FuRW1CTiJ9