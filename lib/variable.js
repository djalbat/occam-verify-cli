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
                var type = variable.getType(), node = variable.getNode(), typeMatches = this.matchType(type), nodeMatches = this.matchNode(node), matches = nodeMatches && typeMatches;
                return matches;
            }
        },
        {
            key: "matchNode",
            value: function matchNode(node) {
                var nodeMatches = this.node.match(node);
                return nodeMatches;
            }
        },
        {
            key: "matchType",
            value: function matchType(type) {
                var typeMatches = this.type.match(type);
                return typeMatches;
            }
        },
        {
            key: "matchNodeAndType",
            value: function matchNodeAndType(node, type) {
                var nodeMatches = this.matchNode(node), typeNatches = this.matchType(type), nodeAndTypeMatch = nodeMatches && typeNatches;
                return nodeAndTypeMatch;
            }
        }
    ], [
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWYXJpYWJsZSB7XG4gIGNvbnN0cnVjdG9yKG5vZGUsIHR5cGUpIHtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBtYXRjaCh2YXJpYWJsZSkge1xuICAgIGNvbnN0IHR5cGUgPSB2YXJpYWJsZS5nZXRUeXBlKCksXG4gICAgICAgICAgbm9kZSA9IHZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgICB0eXBlTWF0Y2hlcyA9IHRoaXMubWF0Y2hUeXBlKHR5cGUpLFxuICAgICAgICAgIG5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE5vZGUobm9kZSksXG4gICAgICAgICAgbWF0Y2hlcyA9IG5vZGVNYXRjaGVzICYmIHR5cGVNYXRjaGVzO1xuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE5vZGUobm9kZSkge1xuICAgIGNvbnN0IG5vZGVNYXRjaGVzID0gdGhpcy5ub2RlLm1hdGNoKG5vZGUpO1xuXG4gICAgcmV0dXJuIG5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hUeXBlKHR5cGUpIHtcbiAgICBjb25zdCB0eXBlTWF0Y2hlcyA9IHRoaXMudHlwZS5tYXRjaCh0eXBlKTtcblxuICAgIHJldHVybiB0eXBlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTm9kZUFuZFR5cGUobm9kZSwgdHlwZSkge1xuICAgIGNvbnN0IG5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE5vZGUobm9kZSksXG4gICAgICAgICAgdHlwZU5hdGNoZXMgPSB0aGlzLm1hdGNoVHlwZSh0eXBlKSxcbiAgICAgICAgICBub2RlQW5kVHlwZU1hdGNoID0gKG5vZGVNYXRjaGVzICYmIHR5cGVOYXRjaGVzKTtcblxuICAgIHJldHVybiBub2RlQW5kVHlwZU1hdGNoO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZU5vZGVBbmRUeXBlKHZhcmlhYmxlTm9kZSwgdHlwZSkge1xuICAgIGNvbnN0IG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShub2RlLCB0eXBlKTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlZhcmlhYmxlIiwibm9kZSIsInR5cGUiLCJnZXROb2RlIiwiZ2V0VHlwZSIsIm1hdGNoIiwidmFyaWFibGUiLCJ0eXBlTWF0Y2hlcyIsIm1hdGNoVHlwZSIsIm5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwibWF0Y2hlcyIsIm1hdGNoTm9kZUFuZFR5cGUiLCJ0eXBlTmF0Y2hlcyIsIm5vZGVBbmRUeXBlTWF0Y2giLCJmcm9tVmFyaWFibGVOb2RlQW5kVHlwZSIsInZhcmlhYmxlTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7c0JBRlE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWQsSUFBQSxBQUFNQSx5QkFBTjthQUFNQSxTQUNQQyxJQUFJLEVBQUVDLElBQUk7Z0NBREhGO1FBRWpCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTs7a0JBSEtGOztZQU1uQkcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixJQUFJO1lBQ2xCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixJQUFJO1lBQ2xCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1DLFFBQVE7Z0JBQ1osSUFBTUosT0FBT0ksU0FBU0YsT0FBTyxJQUN2QkgsT0FBT0ssU0FBU0gsT0FBTyxJQUN2QkksY0FBYyxJQUFJLENBQUNDLFNBQVMsQ0FBQ04sT0FDN0JPLGNBQWMsSUFBSSxDQUFDQyxTQUFTLENBQUNULE9BQzdCVSxVQUFVRixlQUFlRjtnQkFFL0IsT0FBT0k7WUFDVDs7O1lBRUFELEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVVCxJQUFJO2dCQUNaLElBQU1RLGNBQWMsSUFBSSxDQUFDUixJQUFJLENBQUNJLEtBQUssQ0FBQ0o7Z0JBRXBDLE9BQU9RO1lBQ1Q7OztZQUVBRCxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVU4sSUFBSTtnQkFDWixJQUFNSyxjQUFjLElBQUksQ0FBQ0wsSUFBSSxDQUFDRyxLQUFLLENBQUNIO2dCQUVwQyxPQUFPSztZQUNUOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQlgsSUFBSSxFQUFFQyxJQUFJO2dCQUN6QixJQUFNTyxjQUFjLElBQUksQ0FBQ0MsU0FBUyxDQUFDVCxPQUM3QlksY0FBYyxJQUFJLENBQUNMLFNBQVMsQ0FBQ04sT0FDN0JZLG1CQUFvQkwsZUFBZUk7Z0JBRXpDLE9BQU9DO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0Esd0JBQXdCQyxZQUFZLEVBQUVkLElBQUk7Z0JBQy9DLElBQU1ELE9BQU9lLGNBQ1BWLFdBQVcsSUE5Q0FOLFNBOENhQyxNQUFNQztnQkFFcEMsT0FBT0k7WUFDVDs7O1dBakRtQk4ifQ==