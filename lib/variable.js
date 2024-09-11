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
var _type = require("./type");
var _node = require("./utilities/node");
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
        },
        {
            key: "toJSON",
            value: function toJSON(tokens) {
                var typeJSON = this.type.toJSON(tokens), string = (0, _string.nodeAsString)(this.node, tokens), node = string, type = typeJSON, json = {
                    node: node,
                    type: type
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSONAndFileContext",
            value: function fromJSONAndFileContext(json, fileContext) {
                var node = json.node;
                var lexer = fileContext.getLexer(), parser = fileContext.getParser(), variableString = node, variableNode = (0, _node.variableNodeFromVariableString)(variableString, lexer, parser);
                node = variableNode; ///
                var type = json.type;
                json = type; ///
                type = (0, _type.typeFromJSONAndFileContext)(json, fileContext);
                var variable = new Variable(node, type);
                return variable;
            }
        },
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgdHlwZUZyb21KU09OQW5kRmlsZUNvbnRleHQgfSBmcm9tIFwiLi90eXBlXCI7XG5pbXBvcnQgeyB2YXJpYWJsZU5vZGVGcm9tVmFyaWFibGVTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWYXJpYWJsZSB7XG4gIGNvbnN0cnVjdG9yKG5vZGUsIHR5cGUpIHtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBtYXRjaCh2YXJpYWJsZSkge1xuICAgIGNvbnN0IHR5cGUgPSB2YXJpYWJsZS5nZXRUeXBlKCksXG4gICAgICAgICAgbm9kZSA9IHZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgICBtYXRjaGVzVHlwZSA9IHRoaXMubWF0Y2hUeXBlKHR5cGUpLFxuICAgICAgICAgIG1hdGNoZXNOb2RlID0gdGhpcy5tYXRjaE5vZGUobm9kZSksXG4gICAgICAgICAgbWF0Y2hlcyA9IG1hdGNoZXNOb2RlICYmIG1hdGNoZXNUeXBlO1xuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE5vZGUobm9kZSkge1xuICAgIGNvbnN0IG1hdGNoZXNOb2RlID0gdGhpcy5ub2RlLm1hdGNoKG5vZGUpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNOb2RlO1xuICB9XG5cbiAgbWF0Y2hUeXBlKHR5cGUpIHtcbiAgICBjb25zdCBtYXRjaGVzVHlwZSA9IHRoaXMudHlwZS5tYXRjaCh0eXBlKTtcblxuICAgIHJldHVybiBtYXRjaGVzVHlwZTtcbiAgfVxuXG4gIG1hdGNoTm9kZUFuZFR5cGUobm9kZSwgdHlwZSkge1xuICAgIGNvbnN0IG1hdGNoZXNOb2RlID0gdGhpcy5tYXRjaE5vZGUobm9kZSksXG4gICAgICAgICAgbWF0Y2hlc1R5cGUgPSB0aGlzLm1hdGNoVHlwZSh0eXBlKSxcbiAgICAgICAgICBtYXRjaGVzTm9kZUFuZFR5cGUgPSBtYXRjaGVzTm9kZSAmJiBtYXRjaGVzVHlwZTtcblxuICAgIHJldHVybiBtYXRjaGVzTm9kZUFuZFR5cGU7XG4gIH1cblxuICBhc1N0cmluZyh0b2tlbnMpIHtcbiAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMudHlwZS5nZXROYW1lKCk7XG5cbiAgICBsZXQgc3RyaW5nID0gbm9kZUFzU3RyaW5nKHRoaXMubm9kZSwgdG9rZW5zKTtcblxuICAgIHN0cmluZyA9IGAke3N0cmluZ306JHt0eXBlTmFtZX1gOyAvLy9cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICB0b0pTT04odG9rZW5zKSB7XG4gICAgY29uc3QgdHlwZUpTT04gPSB0aGlzLnR5cGUudG9KU09OKHRva2VucyksXG4gICAgICAgICAgc3RyaW5nID0gbm9kZUFzU3RyaW5nKHRoaXMubm9kZSwgdG9rZW5zKSxcbiAgICAgICAgICBub2RlID0gc3RyaW5nLCAgLy9cbiAgICAgICAgICB0eXBlID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbm9kZSxcbiAgICAgICAgICAgIHR5cGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCB7IG5vZGUgfSA9IGpzb247XG5cbiAgICBjb25zdCBsZXhlciAgPSBmaWxlQ29udGV4dC5nZXRMZXhlcigpLFxuICAgICAgICAgIHBhcnNlciA9IGZpbGVDb250ZXh0LmdldFBhcnNlcigpLFxuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gbm9kZSwgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZUZyb21WYXJpYWJsZVN0cmluZyh2YXJpYWJsZVN0cmluZywgbGV4ZXIsIHBhcnNlcik7XG5cbiAgICBub2RlID0gdmFyaWFibGVOb2RlOyAgLy8vXG5cbiAgICBsZXQgeyB0eXBlIH0gPSBqc29uO1xuXG4gICAganNvbiA9IHR5cGU7ICAvLy9cblxuICAgIHR5cGUgPSB0eXBlRnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICBjb25zdCB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShub2RlLCB0eXBlKTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFyaWFibGVBbmRUeXBlKHZhcmlhYmxlLCB0eXBlKSB7XG4gICAgY29uc3Qgbm9kZSA9IHZhcmlhYmxlLmdldE5vZGUoKTtcblxuICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKG5vZGUsIHR5cGUpOyAgLy8vXG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUodmFyaWFibGVOb2RlLCB0eXBlKSB7XG4gICAgY29uc3Qgbm9kZSA9IHZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKG5vZGUsIHR5cGUpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiVmFyaWFibGUiLCJub2RlIiwidHlwZSIsImdldE5vZGUiLCJnZXRUeXBlIiwibWF0Y2giLCJ2YXJpYWJsZSIsIm1hdGNoZXNUeXBlIiwibWF0Y2hUeXBlIiwibWF0Y2hlc05vZGUiLCJtYXRjaE5vZGUiLCJtYXRjaGVzIiwibWF0Y2hOb2RlQW5kVHlwZSIsIm1hdGNoZXNOb2RlQW5kVHlwZSIsImFzU3RyaW5nIiwidG9rZW5zIiwidHlwZU5hbWUiLCJnZXROYW1lIiwic3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidG9KU09OIiwidHlwZUpTT04iLCJqc29uIiwiZnJvbUpTT05BbmRGaWxlQ29udGV4dCIsImZpbGVDb250ZXh0IiwibGV4ZXIiLCJnZXRMZXhlciIsInBhcnNlciIsImdldFBhcnNlciIsInZhcmlhYmxlU3RyaW5nIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlRnJvbVZhcmlhYmxlU3RyaW5nIiwidHlwZUZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJmcm9tVmFyaWFibGVBbmRUeXBlIiwiZnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O3NCQUpRO29CQUNjO29CQUNJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoQyxJQUFBLEFBQU1BLHlCQUFOO2FBQU1BLFNBQ1BDLElBQUksRUFBRUMsSUFBSTtnQ0FESEY7UUFFakIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBOztrQkFIS0Y7O1lBTW5CRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsUUFBUTtnQkFDWixJQUFNSixPQUFPSSxTQUFTRixPQUFPLElBQ3ZCSCxPQUFPSyxTQUFTSCxPQUFPLElBQ3ZCSSxjQUFjLElBQUksQ0FBQ0MsU0FBUyxDQUFDTixPQUM3Qk8sY0FBYyxJQUFJLENBQUNDLFNBQVMsQ0FBQ1QsT0FDN0JVLFVBQVVGLGVBQWVGO2dCQUUvQixPQUFPSTtZQUNUOzs7WUFFQUQsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVULElBQUk7Z0JBQ1osSUFBTVEsY0FBYyxJQUFJLENBQUNSLElBQUksQ0FBQ0ksS0FBSyxDQUFDSjtnQkFFcEMsT0FBT1E7WUFDVDs7O1lBRUFELEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVTixJQUFJO2dCQUNaLElBQU1LLGNBQWMsSUFBSSxDQUFDTCxJQUFJLENBQUNHLEtBQUssQ0FBQ0g7Z0JBRXBDLE9BQU9LO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCWCxJQUFJLEVBQUVDLElBQUk7Z0JBQ3pCLElBQU1PLGNBQWMsSUFBSSxDQUFDQyxTQUFTLENBQUNULE9BQzdCTSxjQUFjLElBQUksQ0FBQ0MsU0FBUyxDQUFDTixPQUM3QlcscUJBQXFCSixlQUFlRjtnQkFFMUMsT0FBT007WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTQyxNQUFNO2dCQUNiLElBQU1DLFdBQVcsSUFBSSxDQUFDZCxJQUFJLENBQUNlLE9BQU87Z0JBRWxDLElBQUlDLFNBQVNDLElBQUFBLG9CQUFZLEVBQUMsSUFBSSxDQUFDbEIsSUFBSSxFQUFFYztnQkFFckNHLFNBQVMsQUFBQyxHQUFZRixPQUFWRSxRQUFPLEtBQVksT0FBVEYsV0FBWSxHQUFHO2dCQUVyQyxPQUFPRTtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9MLE1BQU07Z0JBQ1gsSUFBTU0sV0FBVyxJQUFJLENBQUNuQixJQUFJLENBQUNrQixNQUFNLENBQUNMLFNBQzVCRyxTQUFTQyxJQUFBQSxvQkFBWSxFQUFDLElBQUksQ0FBQ2xCLElBQUksRUFBRWMsU0FDakNkLE9BQU9pQixRQUNQaEIsT0FBT21CLFVBQ1BDLE9BQU87b0JBQ0xyQixNQUFBQTtvQkFDQUMsTUFBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT29CO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsdUJBQXVCRCxJQUFJLEVBQUVFLFdBQVc7Z0JBQzdDLElBQUksQUFBRXZCLE9BQVNxQixLQUFUckI7Z0JBRU4sSUFBTXdCLFFBQVNELFlBQVlFLFFBQVEsSUFDN0JDLFNBQVNILFlBQVlJLFNBQVMsSUFDOUJDLGlCQUFpQjVCLE1BQ2pCNkIsZUFBZUMsSUFBQUEsb0NBQThCLEVBQUNGLGdCQUFnQkosT0FBT0U7Z0JBRTNFMUIsT0FBTzZCLGNBQWUsR0FBRztnQkFFekIsSUFBSSxBQUFFNUIsT0FBU29CLEtBQVRwQjtnQkFFTm9CLE9BQU9wQixNQUFPLEdBQUc7Z0JBRWpCQSxPQUFPOEIsSUFBQUEsZ0NBQTBCLEVBQUNWLE1BQU1FO2dCQUV4QyxJQUFNbEIsV0FBVyxJQW5GQU4sU0FtRmFDLE1BQU1DO2dCQUVwQyxPQUFPSTtZQUNUOzs7WUFFTzJCLEtBQUFBO21CQUFQLFNBQU9BLG9CQUFvQjNCLFFBQVEsRUFBRUosSUFBSTtnQkFDdkMsSUFBTUQsT0FBT0ssU0FBU0gsT0FBTztnQkFFN0JHLFdBQVcsSUEzRk1OLFNBMkZPQyxNQUFNQyxPQUFRLEdBQUc7Z0JBRXpDLE9BQU9JO1lBQ1Q7OztZQUVPNEIsS0FBQUE7bUJBQVAsU0FBT0Esd0JBQXdCSixZQUFZLEVBQUU1QixJQUFJO2dCQUMvQyxJQUFNRCxPQUFPNkIsY0FDUHhCLFdBQVcsSUFsR0FOLFNBa0dhQyxNQUFNQztnQkFFcEMsT0FBT0k7WUFDVDs7O1dBckdtQk4ifQ==