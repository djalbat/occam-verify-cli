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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgbm9kZUFzU3RyaW5nIH0gZnJvbSBcIi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgdHlwZUZyb21KU09OQW5kRmlsZUNvbnRleHQgfSBmcm9tIFwiLi90eXBlXCI7XG5pbXBvcnQgeyB2YXJpYWJsZU5vZGVGcm9tVmFyaWFibGVTdHJpbmcgfSBmcm9tIFwiLi91dGlsaXRpZXMvbm9kZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWYXJpYWJsZSB7XG4gIGNvbnN0cnVjdG9yKG5vZGUsIHR5cGUpIHtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBtYXRjaCh2YXJpYWJsZSkge1xuICAgIGNvbnN0IHR5cGUgPSB2YXJpYWJsZS5nZXRUeXBlKCksXG4gICAgICAgICAgbm9kZSA9IHZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgICB0eXBlTWF0Y2hlcyA9IHRoaXMubWF0Y2hUeXBlKHR5cGUpLFxuICAgICAgICAgIG5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE5vZGUobm9kZSksXG4gICAgICAgICAgbWF0Y2hlcyA9IG5vZGVNYXRjaGVzICYmIHR5cGVNYXRjaGVzO1xuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE5vZGUobm9kZSkge1xuICAgIGNvbnN0IG5vZGVNYXRjaGVzID0gdGhpcy5ub2RlLm1hdGNoKG5vZGUpO1xuXG4gICAgcmV0dXJuIG5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hUeXBlKHR5cGUpIHtcbiAgICBjb25zdCB0eXBlTWF0Y2hlcyA9IHRoaXMudHlwZS5tYXRjaCh0eXBlKTtcblxuICAgIHJldHVybiB0eXBlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTm9kZUFuZFR5cGUobm9kZSwgdHlwZSkge1xuICAgIGNvbnN0IG5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE5vZGUobm9kZSksXG4gICAgICAgICAgdHlwZU1hdGNoZXMgPSB0aGlzLm1hdGNoVHlwZSh0eXBlKSxcbiAgICAgICAgICBub2RlQW5kVHlwZU1hdGNoID0gbm9kZU1hdGNoZXMgJiYgdHlwZU1hdGNoZXM7XG5cbiAgICByZXR1cm4gbm9kZUFuZFR5cGVNYXRjaDtcbiAgfVxuXG4gIGFzU3RyaW5nKHRva2Vucykge1xuICAgIGNvbnN0IHR5cGVOYW1lID0gdGhpcy50eXBlLmdldE5hbWUoKTtcblxuICAgIGxldCBzdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5ub2RlLCB0b2tlbnMpO1xuXG4gICAgc3RyaW5nID0gYCR7c3RyaW5nfToke3R5cGVOYW1lfWA7IC8vL1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHRvSlNPTih0b2tlbnMpIHtcbiAgICBjb25zdCB0eXBlSlNPTiA9IHRoaXMudHlwZS50b0pTT04odG9rZW5zKSxcbiAgICAgICAgICBzdHJpbmcgPSBub2RlQXNTdHJpbmcodGhpcy5ub2RlLCB0b2tlbnMpLFxuICAgICAgICAgIG5vZGUgPSBzdHJpbmcsICAvL1xuICAgICAgICAgIHR5cGUgPSB0eXBlSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBub2RlLFxuICAgICAgICAgICAgdHlwZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHsgbm9kZSB9ID0ganNvbjtcblxuICAgIGNvbnN0IGxleGVyICA9IGZpbGVDb250ZXh0LmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gZmlsZUNvbnRleHQuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSBub2RlLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlRnJvbVZhcmlhYmxlU3RyaW5nKHZhcmlhYmxlU3RyaW5nLCBsZXhlciwgcGFyc2VyKTtcblxuICAgIG5vZGUgPSB2YXJpYWJsZU5vZGU7ICAvLy9cblxuICAgIGxldCB7IHR5cGUgfSA9IGpzb247XG5cbiAgICBqc29uID0gdHlwZTsgIC8vL1xuXG4gICAgdHlwZSA9IHR5cGVGcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIGNvbnN0IHZhcmlhYmxlID0gbmV3IFZhcmlhYmxlKG5vZGUsIHR5cGUpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZUFuZFR5cGUodmFyaWFibGUsIHR5cGUpIHtcbiAgICBjb25zdCBub2RlID0gdmFyaWFibGUuZ2V0Tm9kZSgpO1xuXG4gICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUobm9kZSwgdHlwZSk7ICAvLy9cblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFyaWFibGVOb2RlQW5kVHlwZSh2YXJpYWJsZU5vZGUsIHR5cGUpIHtcbiAgICBjb25zdCBub2RlID0gdmFyaWFibGVOb2RlLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUobm9kZSwgdHlwZSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJWYXJpYWJsZSIsIm5vZGUiLCJ0eXBlIiwiZ2V0Tm9kZSIsImdldFR5cGUiLCJtYXRjaCIsInZhcmlhYmxlIiwidHlwZU1hdGNoZXMiLCJtYXRjaFR5cGUiLCJub2RlTWF0Y2hlcyIsIm1hdGNoTm9kZSIsIm1hdGNoZXMiLCJtYXRjaE5vZGVBbmRUeXBlIiwibm9kZUFuZFR5cGVNYXRjaCIsImFzU3RyaW5nIiwidG9rZW5zIiwidHlwZU5hbWUiLCJnZXROYW1lIiwic3RyaW5nIiwibm9kZUFzU3RyaW5nIiwidG9KU09OIiwidHlwZUpTT04iLCJqc29uIiwiZnJvbUpTT05BbmRGaWxlQ29udGV4dCIsImZpbGVDb250ZXh0IiwibGV4ZXIiLCJnZXRMZXhlciIsInBhcnNlciIsImdldFBhcnNlciIsInZhcmlhYmxlU3RyaW5nIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlRnJvbVZhcmlhYmxlU3RyaW5nIiwidHlwZUZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJmcm9tVmFyaWFibGVBbmRUeXBlIiwiZnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7O3NCQUpRO29CQUNjO29CQUNJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoQyxJQUFBLEFBQU1BLHlCQUFELEFBQUw7YUFBTUEsU0FDUEMsSUFBSSxFQUFFQyxJQUFJO2dDQURIRjtRQUVqQixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLElBQUksR0FBR0E7O2tCQUhLRjs7WUFNbkJHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsSUFBSTtZQUNsQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsSUFBSTtZQUNsQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNQyxRQUFRO2dCQUNaLElBQU1KLE9BQU9JLFNBQVNGLE9BQU8sSUFDdkJILE9BQU9LLFNBQVNILE9BQU8sSUFDdkJJLGNBQWMsSUFBSSxDQUFDQyxTQUFTLENBQUNOLE9BQzdCTyxjQUFj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