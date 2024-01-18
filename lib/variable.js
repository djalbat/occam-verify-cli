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
var _type = /*#__PURE__*/ _interop_require_default(require("./type"));
var _string = require("./utilities/string");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
                var nodeMatches = this.matchNode(node), typeMatches = this.matchType(type), nodeAndTypeMatch = nodeMatches && typeMatches;
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
                type = _type.default.fromJSONAndFileContext(json, fileContext);
                var typeName = type.getName();
                type = fileContext.findTypeByTypeName(typeName); ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFR5cGUgZnJvbSBcIi4vdHlwZVwiO1xuXG5pbXBvcnQgeyBub2RlQXNTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyB2YXJpYWJsZU5vZGVGcm9tVmFyaWFibGVTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWYXJpYWJsZSB7XG4gIGNvbnN0cnVjdG9yKG5vZGUsIHR5cGUpIHtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBtYXRjaCh2YXJpYWJsZSkge1xuICAgIGNvbnN0IHR5cGUgPSB2YXJpYWJsZS5nZXRUeXBlKCksXG4gICAgICAgICAgbm9kZSA9IHZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgICB0eXBlTWF0Y2hlcyA9IHRoaXMubWF0Y2hUeXBlKHR5cGUpLFxuICAgICAgICAgIG5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE5vZGUobm9kZSksXG4gICAgICAgICAgbWF0Y2hlcyA9IG5vZGVNYXRjaGVzICYmIHR5cGVNYXRjaGVzO1xuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE5vZGUobm9kZSkge1xuICAgIGNvbnN0IG5vZGVNYXRjaGVzID0gdGhpcy5ub2RlLm1hdGNoKG5vZGUpO1xuXG4gICAgcmV0dXJuIG5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hUeXBlKHR5cGUpIHtcbiAgICBjb25zdCB0eXBlTWF0Y2hlcyA9IHRoaXMudHlwZS5tYXRjaCh0eXBlKTtcblxuICAgIHJldHVybiB0eXBlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTm9kZUFuZFR5cGUobm9kZSwgdHlwZSkge1xuICAgIGNvbnN0IG5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE5vZGUobm9kZSksXG4gICAgICAgICAgdHlwZU1hdGNoZXMgPSB0aGlzLm1hdGNoVHlwZSh0eXBlKSxcbiAgICAgICAgICBub2RlQW5kVHlwZU1hdGNoID0gbm9kZU1hdGNoZXMgJiYgdHlwZU1hdGNoZXM7XG5cbiAgICByZXR1cm4gbm9kZUFuZFR5cGVNYXRjaDtcbiAgfVxuXG4gIGFzU3RyaW5nKHRva2Vucykge1xuICAgIGNvbnN0IHR5cGVOYW1lID0gdGhpcy50eXBlLmdldE5hbWUoKTtcblxuICAgIGxldCBzdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5ub2RlLCB0b2tlbnMpO1xuXG4gICAgc3RyaW5nID0gYCR7c3RyaW5nfToke3R5cGVOYW1lfWA7IC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHRvSlNPTih0b2tlbnMpIHtcbiAgICBjb25zdCB0eXBlSlNPTiA9IHRoaXMudHlwZS50b0pTT04odG9rZW5zKSxcbiAgICAgICAgICBzdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5ub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIG5vZGUgPSBzdHJpbmcsICAvL1xuICAgICAgICAgIHR5cGUgPSB0eXBlSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBub2RlLFxuICAgICAgICAgICAgdHlwZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHsgbm9kZSB9ID0ganNvbjtcblxuICAgIGNvbnN0IGxleGVyICA9IGZpbGVDb250ZXh0LmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gZmlsZUNvbnRleHQuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSBub2RlLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlRnJvbVZhcmlhYmxlU3RyaW5nKHZhcmlhYmxlU3RyaW5nLCBsZXhlciwgcGFyc2VyKTtcblxuICAgIG5vZGUgPSB2YXJpYWJsZU5vZGU7ICAvLy9cblxuICAgIGxldCB7IHR5cGUgfSA9IGpzb247XG5cbiAgICBqc29uID0gdHlwZTsgIC8vL1xuXG4gICAgdHlwZSA9IFR5cGUuZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICBjb25zdCB0eXBlTmFtZSA9IHR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgdHlwZSA9IGZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7IC8vL1xuXG4gICAgY29uc3QgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUobm9kZSwgdHlwZSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVZhcmlhYmxlQW5kVHlwZSh2YXJpYWJsZSwgdHlwZSkge1xuICAgIGNvbnN0IG5vZGUgPSB2YXJpYWJsZS5nZXROb2RlKCk7XG5cbiAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShub2RlLCB0eXBlKTsgIC8vL1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZU5vZGVBbmRUeXBlKHZhcmlhYmxlTm9kZSwgdHlwZSkge1xuICAgIGNvbnN0IG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShub2RlLCB0eXBlKTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlZhcmlhYmxlIiwibm9kZSIsInR5cGUiLCJnZXROb2RlIiwiZ2V0VHlwZSIsIm1hdGNoIiwidmFyaWFibGUiLCJ0eXBlTWF0Y2hlcyIsIm1hdGNoVHlwZSIsIm5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwibWF0Y2hlcyIsIm1hdGNoTm9kZUFuZFR5cGUiLCJub2RlQW5kVHlwZU1hdGNoIiwiYXNTdHJpbmciLCJ0b2tlbnMiLCJ0eXBlTmFtZSIsImdldE5hbWUiLCJzdHJpbmciLCJub2RlQXNTdHJpbmciLCJ0b0pTT04iLCJ0eXBlSlNPTiIsImpzb24iLCJmcm9tSlNPTkFuZEZpbGVDb250ZXh0IiwiZmlsZUNvbnRleHQiLCJsZXhlciIsImdldExleGVyIiwicGFyc2VyIiwiZ2V0UGFyc2VyIiwidmFyaWFibGVTdHJpbmciLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGVGcm9tVmFyaWFibGVTdHJpbmciLCJUeXBlIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwiZnJvbVZhcmlhYmxlQW5kVHlwZSIsImZyb21WYXJpYWJsZU5vZGVBbmRUeXBlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU9xQkE7OzsyREFMSjtzQkFFWTtvQkFDa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEMsSUFBQSxBQUFNQSx5QkFBRCxBQUFMO2FBQU1BLFNBQ1BDLElBQUksRUFBRUMsSUFBSTtnQ0FESEY7UUFFakIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBOztrQkFIS0Y7O1lBTW5CRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTUMsUUFBUTtnQkFDWixJQUFNSixPQUFPSSxTQUFTRixPQUFPLElBQ3ZCSCxPQUFPSyxTQUFTSCxPQUFPLElBQ3ZCSSxjQUFjLElBQUksQ0FBQ0MsU0FBUyxDQUFDTixPQUM3Qk8sY0FBYyxJQUFJLENBQUNDLFNBQVMsQ0FBQ1QsT0FDN0JVLFVBQVVGLGVBQWVGO2dCQUUvQixPQUFPSTtZQUNUOzs7WUFF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