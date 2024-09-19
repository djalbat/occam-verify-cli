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
            key: "fromVariableNodeAndType",
            value: function fromVariableNodeAndType(variableNode, type) {
                var node = variableNode, variable = new Variable(node, type);
                return variable;
            }
        }
    ]);
    return Variable;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWYXJpYWJsZSB7XG4gIGNvbnN0cnVjdG9yKG5vZGUsIHR5cGUpIHtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBtYXRjaCh2YXJpYWJsZSkge1xuICAgIGNvbnN0IHR5cGUgPSB2YXJpYWJsZS5nZXRUeXBlKCksXG4gICAgICAgICAgbm9kZSA9IHZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgICB0eXBlTWF0Y2hlcyA9IHRoaXMubWF0Y2hUeXBlKHR5cGUpLFxuICAgICAgICAgIG5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE5vZGUobm9kZSksXG4gICAgICAgICAgbWF0Y2hlcyA9IG5vZGVNYXRjaGVzICYmIHR5cGVNYXRjaGVzO1xuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE5vZGUobm9kZSkge1xuICAgIGNvbnN0IG5vZGVNYXRjaGVzID0gdGhpcy5ub2RlLm1hdGNoKG5vZGUpO1xuXG4gICAgcmV0dXJuIG5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hUeXBlKHR5cGUpIHtcbiAgICBjb25zdCB0eXBlTWF0Y2hlcyA9IHRoaXMudHlwZS5tYXRjaCh0eXBlKTtcblxuICAgIHJldHVybiB0eXBlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTm9kZUFuZFR5cGUobm9kZSwgdHlwZSkge1xuICAgIGNvbnN0IG5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE5vZGUobm9kZSksXG4gICAgICAgICAgdHlwZU5hdGNoZXMgPSB0aGlzLm1hdGNoVHlwZSh0eXBlKSxcbiAgICAgICAgICBub2RlQW5kVHlwZU1hdGNoID0gKG5vZGVNYXRjaGVzICYmIHR5cGVOYXRjaGVzKTtcblxuICAgIHJldHVybiBub2RlQW5kVHlwZU1hdGNoO1xuICB9XG5cbiAgYXNTdHJpbmcodG9rZW5zKSB7XG4gICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgbGV0IHN0cmluZyA9IG5vZGVBc1N0cmluZyh0aGlzLm5vZGUsIHRva2Vucyk7XG5cbiAgICBzdHJpbmcgPSBgJHtzdHJpbmd9OiR7dHlwZU5hbWV9YDsgLy8vXG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZU5vZGVBbmRUeXBlKHZhcmlhYmxlTm9kZSwgdHlwZSkge1xuICAgIGNvbnN0IG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShub2RlLCB0eXBlKTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlZhcmlhYmxlIiwibm9kZSIsInR5cGUiLCJnZXROb2RlIiwiZ2V0VHlwZSIsIm1hdGNoIiwidmFyaWFibGUiLCJ0eXBlTWF0Y2hlcyIsIm1hdGNoVHlwZSIsIm5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwibWF0Y2hlcyIsIm1hdGNoTm9kZUFuZFR5cGUiLCJ0eXBlTmF0Y2hlcyIsIm5vZGVBbmRUeXBlTWF0Y2giLCJhc1N0cmluZyIsInRva2VucyIsInR5cGVOYW1lIiwiZ2V0TmFtZSIsInN0cmluZyIsIm5vZGVBc1N0cmluZyIsImZyb21WYXJpYWJsZU5vZGVBbmRUeXBlIiwidmFyaWFibGVOb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OztzQkFGUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFZCxJQUFBLEFBQU1BLHlCQUFOO2FBQU1BLFNBQ1BDLElBQUksRUFBRUMsSUFBSTtnQ0FESEY7UUFFakIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBOztrQkFIS0Y7O1lBTW5CRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsUUFBUTtnQkFDWixJQUFNSixPQUFPSSxTQUFTRixPQUFPLElBQ3ZCSCxPQUFPSyxTQUFTSCxPQUFPLElBQ3ZCSSxjQUFjLElBQUksQ0FBQ0MsU0FBUyxDQUFDTixPQUM3Qk8sY0FBYyxJQUFJLENBQUNDLFNBQVMsQ0FBQ1QsT0FDN0JVLFVBQVVGLGVBQWVGO2dCQUUvQixPQUFPSTtZQUNUOzs7WUFFQUQsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVULElBQUk7Z0JBQ1osSUFBTVEsY0FBYyxJQUFJLENBQUNSLElBQUksQ0FBQ0ksS0FBSyxDQUFDSjtnQkFFcEMsT0FBT1E7WUFDVDs7O1lBRUFELEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVTixJQUFJO2dCQUNaLElBQU1LLGNBQWMsSUFBSSxDQUFDTCxJQUFJLENBQUNHLEtBQUssQ0FBQ0g7Z0JBRXBDLE9BQU9LO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCWCxJQUFJLEVBQUVDLElBQUk7Z0JBQ3pCLElBQU1PLGNBQWMsSUFBSSxDQUFDQyxTQUFTLENBQUNULE9BQzdCWSxjQUFjLElBQUksQ0FBQ0wsU0FBUyxDQUFDTixPQUM3QlksbUJBQW9CTCxlQUFlSTtnQkFFekMsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxNQUFNO2dCQUNiLElBQU1DLFdBQVcsSUFBSSxDQUFDZixJQUFJLENBQUNnQixPQUFPO2dCQUVsQyxJQUFJQyxTQUFTQyxJQUFBQSxvQkFBWSxFQUFDLElBQUksQ0FBQ25CLElBQUksRUFBRWU7Z0JBRXJDRyxTQUFTLEFBQUMsR0FBWUYsT0FBVkUsUUFBTyxLQUFZLE9BQVRGLFdBQVksR0FBRztnQkFFckMsT0FBT0U7WUFDVDs7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSx3QkFBd0JDLFlBQVksRUFBRXBCLElBQUk7Z0JBQy9DLElBQU1ELE9BQU9xQixjQUNQaEIsV0FBVyxJQXhEQU4sU0F3RGFDLE1BQU1DO2dCQUVwQyxPQUFPSTtZQUNUOzs7V0EzRG1CTiJ9