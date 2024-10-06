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
var _type = /*#__PURE__*/ _interop_require_wildcard(require("./type"));
var _local = /*#__PURE__*/ _interop_require_default(require("./context/local"));
var _query = require("./utilities/query");
var _name = require("./utilities/name");
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
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
var typeNodeQuery = (0, _query.nodeQuery)("/variableDeclaration/type"), variableNodeQuery = (0, _query.nodeQuery)("/variableDeclaration/variable");
var Variable = /*#__PURE__*/ function() {
    function Variable(string, node, name, type) {
        _class_call_check(this, Variable);
        this.string = string;
        this.node = node;
        this.name = name;
        this.type = type;
    }
    _create_class(Variable, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        },
        {
            key: "getName",
            value: function getName() {
                return this.name;
            }
        },
        {
            key: "getType",
            value: function getType() {
                return this.type;
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
            key: "matchName",
            value: function matchName(name) {
                var nameMatches = this.name === name;
                return nameMatches;
            }
        },
        {
            key: "verify",
            value: function verify(localContext) {
                var verified;
                var variableString = this.string; ///
                localContext.trace("Verifying the '".concat(variableString, "' variable..."));
                var variableNode = this.node, variableName = (0, _name.variableNameFromVariableNode)(variableNode), variable = localContext.findVariableByVariableName(variableName);
                if (variable === null) {
                    localContext.debug("The '".concat(variableString, "' variable is not present."));
                } else {
                    var type = variable.getType();
                    this.type = type;
                    verified = true;
                }
                if (verified) {
                    localContext.debug("...verified the '".concat(variableString, "' variable."));
                }
                return verified;
            }
        },
        {
            key: "verifyAtTopLevel",
            value: function verifyAtTopLevel(localContext) {
                var verifiedAtTopLevel;
                var variableString = this.string; ///
                localContext.trace("Verifying the '".concat(variableString, "' variable at top level..."));
                var variableNode = this.node, variableName = (0, _name.variableNameFromVariableNode)(variableNode), variablePresent = localContext.isVariablePresentByVariableName(variableName);
                if (variablePresent) {
                    localContext.debug("The '".concat(variableString, "' variable is already present."));
                } else {
                    var typeName = this.type.getName(), type = localContext.findTypeByTypeName(typeName);
                    if (type === null) {
                        var typeString = this.type.getString();
                        localContext.debug("The '".concat(typeString, "' type is not present."));
                    } else {
                        this.type = type;
                        verifiedAtTopLevel = true;
                    }
                }
                if (verifiedAtTopLevel) {
                    localContext.debug("...verified the '".concat(variableString, "' variable at top level."));
                }
                return verifiedAtTopLevel;
            }
        }
    ], [
        {
            key: "fromVariableNode",
            value: function fromVariableNode(variableNode, localContext) {
                var node = variableNode, variableName = (0, _name.variableNameFromVariableNode)(variableNode), string = localContext.nodeAsString(node), name = variableName, type = null, variable = new Variable(string, node, name, type);
                return variable;
            }
        },
        {
            key: "fromVariableNodeAndType",
            value: function fromVariableNodeAndType(variableNode, type, localContext) {
                var node = variableNode, variableName = (0, _name.variableNameFromVariableNode)(variableNode), string = localContext.nodeAsString(node), name = variableName, variable = new Variable(string, node, name, type);
                return variable;
            }
        },
        {
            key: "fromVariableDeclarationNode",
            value: function fromVariableDeclarationNode(variableDeclarationNode, fileContext) {
                var typeNode = typeNodeQuery(variableDeclarationNode), variableNode = variableNodeQuery(variableDeclarationNode), variableName = (0, _name.variableNameFromVariableNode)(variableNode), localContext = _local.default.fromFileContext(fileContext), variableString = fileContext.nodeAsString(variableNode), string = variableString, node = variableNode, name = variableName, type = typeNode === null ? _type.objectType : _type.default.fromTypeNode(typeNode, localContext), variable = new Variable(string, node, name, type);
                return variable;
            }
        }
    ]);
    return Variable;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy92YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFR5cGUsIHtvYmplY3RUeXBlfSBmcm9tIFwiLi90eXBlXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuL2NvbnRleHQvbG9jYWxcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25hbWVcIjtcblxuY29uc3QgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YXJpYWJsZURlY2xhcmF0aW9uL3R5cGVcIiksXG4gICAgICB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi92YXJpYWJsZURlY2xhcmF0aW9uL3ZhcmlhYmxlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWYXJpYWJsZSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSwgbmFtZSwgdHlwZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIG1hdGNoTm9kZShub2RlKSB7XG4gICAgY29uc3Qgbm9kZU1hdGNoZXMgPSB0aGlzLm5vZGUubWF0Y2gobm9kZSk7XG5cbiAgICByZXR1cm4gbm9kZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE5hbWUobmFtZSkge1xuICAgIGNvbnN0IG5hbWVNYXRjaGVzID0gKHRoaXMubmFtZSA9PT0gbmFtZSk7XG5cbiAgICByZXR1cm4gbmFtZU1hdGNoZXM7XG4gIH1cblxuICB2ZXJpZnkobG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkO1xuXG4gICAgY29uc3QgdmFyaWFibGVTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgdmFyaWFibGVOb2RlID0gdGhpcy5ub2RlLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgdmFyaWFibGUgPSBsb2NhbENvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKTtcblxuICAgIGlmICh2YXJpYWJsZSA9PT0gbnVsbCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGBUaGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZSA9IHZhcmlhYmxlLmdldFR5cGUoKTtcblxuICAgICAgdGhpcy50eXBlID0gdHlwZTtcblxuICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlBdFRvcExldmVsKGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZEF0VG9wTGV2ZWw7XG5cbiAgICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIGF0IHRvcCBsZXZlbC4uLmApO1xuXG4gICAgY29uc3QgdmFyaWFibGVOb2RlID0gdGhpcy5ub2RlLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gbG9jYWxDb250ZXh0LmlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKTtcblxuICAgIGlmICh2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgVGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUgaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMudHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgICB0eXBlID0gbG9jYWxDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuXG4gICAgICAgIHZlcmlmaWVkQXRUb3BMZXZlbCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkQXRUb3BMZXZlbCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSBhdCB0b3AgbGV2ZWwuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkQXRUb3BMZXZlbDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IHZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBzdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIG5hbWUgPSB2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICB0eXBlID0gbnVsbCxcbiAgICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIG5vZGUsIG5hbWUsIHR5cGUpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZU5vZGVBbmRUeXBlKHZhcmlhYmxlTm9kZSwgdHlwZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IHZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlTmFtZSA9IHZhcmlhYmxlTmFtZUZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBzdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIG5hbWUgPSB2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZSA9IG5ldyBWYXJpYWJsZShzdHJpbmcsIG5vZGUsIG5hbWUsIHR5cGUpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkodmFyaWFibGVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgICB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZU5hbWVGcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBzdHJpbmcgPSB2YXJpYWJsZVN0cmluZywgIC8vL1xuICAgICAgICAgIG5vZGUgPSB2YXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICBuYW1lID0gdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgdHlwZSA9ICh0eXBlTm9kZSA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOlxuICAgICAgICAgICAgICAgICAgICAgVHlwZS5mcm9tVHlwZU5vZGUodHlwZU5vZGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgdmFyaWFibGUgPSBuZXcgVmFyaWFibGUoc3RyaW5nLCBub2RlLCBuYW1lLCB0eXBlKTtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlZhcmlhYmxlIiwidHlwZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInZhcmlhYmxlTm9kZVF1ZXJ5Iiwic3RyaW5nIiwibm9kZSIsIm5hbWUiLCJ0eXBlIiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsImdldE5hbWUiLCJnZXRUeXBlIiwibWF0Y2hOb2RlIiwibm9kZU1hdGNoZXMiLCJtYXRjaCIsIm1hdGNoTmFtZSIsIm5hbWVNYXRjaGVzIiwidmVyaWZ5IiwibG9jYWxDb250ZXh0IiwidmVyaWZpZWQiLCJ2YXJpYWJsZVN0cmluZyIsInRyYWNlIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGVOYW1lIiwidmFyaWFibGVOYW1lRnJvbVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUiLCJkZWJ1ZyIsInZlcmlmeUF0VG9wTGV2ZWwiLCJ2ZXJpZmllZEF0VG9wTGV2ZWwiLCJ2YXJpYWJsZVByZXNlbnQiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lIiwidHlwZU5hbWUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJ0eXBlU3RyaW5nIiwiZnJvbVZhcmlhYmxlTm9kZSIsIm5vZGVBc1N0cmluZyIsImZyb21WYXJpYWJsZU5vZGVBbmRUeXBlIiwiZnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwidmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJmaWxlQ29udGV4dCIsInR5cGVOb2RlIiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0Iiwib2JqZWN0VHlwZSIsIlR5cGUiLCJmcm9tVHlwZU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBV3FCQTs7OzREQVRVOzREQUNOO3FCQUVDO29CQUNtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdDLElBQU1DLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyw4QkFDMUJDLG9CQUFvQkQsSUFBQUEsZ0JBQVMsRUFBQztBQUVyQixJQUFBLEFBQU1GLHlCQUFOO2FBQU1BLFNBQ1BJLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLElBQUk7Z0NBRGpCUDtRQUVqQixJQUFJLENBQUNJLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLElBQUksR0FBR0E7O2tCQUxLUDs7WUFRbkJRLEtB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