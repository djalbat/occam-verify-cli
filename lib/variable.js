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
            key: "fromVariableNodeAndType",
            value: function fromVariableNodeAndType(variableNode, type) {
                var node = variableNode, variable = new Variable(node, type);
                return variable;
            }
        }
    ]);
    return Variable;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWYXJpYWJsZSB7XG4gIGNvbnN0cnVjdG9yKG5vZGUsIHR5cGUpIHtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBtYXRjaCh2YXJpYWJsZSkge1xuICAgIGNvbnN0IHR5cGUgPSB2YXJpYWJsZS5nZXRUeXBlKCksXG4gICAgICAgICAgbm9kZSA9IHZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgICBtYXRjaGVzVHlwZSA9IHRoaXMubWF0Y2hUeXBlKHR5cGUpLFxuICAgICAgICAgIG1hdGNoZXNOb2RlID0gdGhpcy5tYXRjaE5vZGUobm9kZSksXG4gICAgICAgICAgbWF0Y2hlcyA9IG1hdGNoZXNOb2RlICYmIG1hdGNoZXNUeXBlO1xuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE5vZGUobm9kZSkge1xuICAgIGNvbnN0IG1hdGNoZXNOb2RlID0gdGhpcy5ub2RlLm1hdGNoKG5vZGUpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNOb2RlO1xuICB9XG5cbiAgbWF0Y2hUeXBlKHR5cGUpIHtcbiAgICBjb25zdCBtYXRjaGVzVHlwZSA9IHRoaXMudHlwZS5tYXRjaCh0eXBlKTtcblxuICAgIHJldHVybiBtYXRjaGVzVHlwZTtcbiAgfVxuXG4gIG1hdGNoTm9kZUFuZFR5cGUobm9kZSwgdHlwZSkge1xuICAgIGNvbnN0IG1hdGNoZXNOb2RlID0gdGhpcy5tYXRjaE5vZGUobm9kZSksXG4gICAgICAgICAgbWF0Y2hlc1R5cGUgPSB0aGlzLm1hdGNoVHlwZSh0eXBlKSxcbiAgICAgICAgICBtYXRjaGVzTm9kZUFuZFR5cGUgPSBtYXRjaGVzTm9kZSAmJiBtYXRjaGVzVHlwZTtcblxuICAgIHJldHVybiBtYXRjaGVzTm9kZUFuZFR5cGU7XG4gIH1cblxuICBhc1N0cmluZyh0b2tlbnMpIHtcbiAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMudHlwZS5nZXROYW1lKCk7XG5cbiAgICBsZXQgc3RyaW5nID0gbm9kZUFzU3RyaW5nKHRoaXMubm9kZSwgdG9rZW5zKTtcblxuICAgIHN0cmluZyA9IGAke3N0cmluZ306JHt0eXBlTmFtZX1gOyAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUodmFyaWFibGVOb2RlLCB0eXBlKSB7XG4gICAgY29uc3Qgbm9kZSA9IHZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKG5vZGUsIHR5cGUpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiVmFyaWFibGUiLCJub2RlIiwidHlwZSIsImdldE5vZGUiLCJnZXRUeXBlIiwibWF0Y2giLCJ2YXJpYWJsZSIsIm1hdGNoZXNUeXBlIiwibWF0Y2hUeXBlIiwibWF0Y2hlc05vZGUiLCJtYXRjaE5vZGUiLCJtYXRjaGVzIiwibWF0Y2hOb2RlQW5kVHlwZSIsIm1hdGNoZXNOb2RlQW5kVHlwZSIsImFzU3RyaW5nIiwidG9rZW5zIiwidHlwZU5hbWUiLCJnZXROYW1lIiwic3RyaW5nIiwibm9kZUFzU3RyaW5nIiwiZnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUiLCJ2YXJpYWJsZU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7O3NCQUZROzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVkLElBQUEsQUFBTUEseUJBQU47YUFBTUEsU0FDUEMsSUFBSSxFQUFFQyxJQUFJO2dDQURIRjtRQUVqQixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLElBQUksR0FBR0E7O2tCQUhLRjs7WUFNbkJHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsSUFBSTtZQUNsQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsSUFBSTtZQUNsQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxRQUFRO2dCQUNaLElBQU1KLE9BQU9JLFNBQVNGLE9BQU8sSUFDdkJILE9BQU9LLFNBQVNILE9BQU8sSUFDdkJJLGNBQWMsSUFBSSxDQUFDQyxTQUFTLENBQUNOLE9BQzdCTyxjQUFjLElBQUksQ0FBQ0MsU0FBUyxDQUFDVCxPQUM3QlUsVUFBVUYsZUFBZUY7Z0JBRS9CLE9BQU9JO1lBQ1Q7OztZQUVBRCxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVVQsSUFBSTtnQkFDWixJQUFNUSxjQUFjLElBQUksQ0FBQ1IsSUFBSSxDQUFDSSxLQUFLLENBQUNKO2dCQUVwQyxPQUFPUTtZQUNUOzs7WUFFQUQsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVOLElBQUk7Z0JBQ1osSUFBTUssY0FBYyxJQUFJLENBQUNMLElBQUksQ0FBQ0csS0FBSyxDQUFDSDtnQkFFcEMsT0FBT0s7WUFDVDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJYLElBQUksRUFBRUMsSUFBSTtnQkFDekIsSUFBTU8sY0FBYyxJQUFJLENBQUNDLFNBQVMsQ0FBQ1QsT0FDN0JNLGNBQWMsSUFBSSxDQUFDQyxTQUFTLENBQUNOLE9BQzdCVyxxQkFBcUJKLGVBQWVGO2dCQUUxQyxPQUFPTTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLE1BQU07Z0JBQ2IsSUFBTUMsV0FBVyxJQUFJLENBQUNkLElBQUksQ0FBQ2UsT0FBTztnQkFFbEMsSUFBSUMsU0FBU0MsSUFBQUEsb0JBQVksRUFBQyxJQUFJLENBQUNsQixJQUFJLEVBQUVjO2dCQUVyQ0csU0FBUyxBQUFDLEdBQVlGLE9BQVZFLFFBQU8sS0FBWSxPQUFURixXQUFZLEdBQUc7Z0JBRXJDLE9BQU9FO1lBQ1Q7Ozs7WUFFT0UsS0FBQUE7bUJBQVAsU0FBT0Esd0JBQXdCQyxZQUFZLEVBQUVuQixJQUFJO2dCQUMvQyxJQUFNRCxPQUFPb0IsY0FDUGYsV0FBVyxJQXhEQU4sU0F3RGFDLE1BQU1DO2dCQUVwQyxPQUFPSTtZQUNUOzs7V0EzRG1CTiJ9