"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../../dom"));
var _type = require("../type");
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
var _VariableDeclaration;
var _default = (0, _dom.domAssigned)((_VariableDeclaration = /*#__PURE__*/ function() {
    function VariableDeclaration(fileContext, string, variable) {
        _class_call_check(this, VariableDeclaration);
        this.fileContext = fileContext;
        this.string = string;
        this.variable = variable;
    }
    _create_class(VariableDeclaration, [
        {
            key: "getFileContext",
            value: function getFileContext() {
                return this.fileContext;
            }
        },
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getVariable",
            value: function getVariable() {
                return this.variable;
            }
        },
        {
            key: "verify",
            value: function verify() {
                var verified = false;
                var variableDeclarationString = this.getString();
                this.fileContext.trace("Verifying the '".concat(variableDeclarationString, "' variable declaration..."));
                var variableVerified = this.verifyVariable();
                if (variableVerified) {
                    var variableTypeVerified = this.verifyVariableType();
                    if (variableTypeVerified) {
                        var type;
                        type = this.variable.getType();
                        var typeObjectType = type === _type.objectType;
                        if (!typeObjectType) {
                            var typeName = type.getName();
                            type = this.fileContext.findTypeByTypeName(typeName);
                        }
                        var typeProvisional = type.isProvisional(), variableProvisional = this.variable.isProvisional();
                        if (typeProvisional !== variableProvisional) {
                            var typeString = type.getString(), variableString = this.variable.getString();
                            if (typeProvisional) {
                                this.fileContext.debug("The '".concat(typeString, "' type is provisional whilst the '").concat(variableString, "' variable's type is not."));
                            }
                            if (variableProvisional) {
                                this.fileContext.debug("The '".concat(typeString, "' type is not provisional whilst the '").concat(variableString, "' variable's type is."));
                            }
                        } else {
                            this.variable.setType(type);
                            this.fileContext.addVariable(this.variable);
                            verified = true;
                        }
                    }
                }
                if (verified) {
                    this.fileContext.debug("...verified the '".concat(variableDeclarationString, "' variable declaration."));
                }
                return verified;
            }
        },
        {
            key: "verifyVariableType",
            value: function verifyVariableType() {
                var typeVerified = false;
                var type = this.variable.getType();
                if (type === _type.objectType) {
                    typeVerified = true;
                } else {
                    var typeName = type.getName();
                    this.fileContext.trace("Verifying the '".concat(typeName, "' type..."));
                    var typePresent = this.fileContext.isTypePresentByTypeName(typeName);
                    if (!typePresent) {
                        this.fileContext.debug("The '".concat(typeName, "' type is not present."));
                    } else {
                        typeVerified = true;
                    }
                    if (typeVerified) {
                        this.fileContext.debug("...verified the '".concat(typeName, "' type."));
                    }
                }
                return typeVerified;
            }
        },
        {
            key: "verifyVariable",
            value: function verifyVariable() {
                var variableVerified = false;
                var variableString = this.variable.getString();
                this.fileContext.trace("Verifying the '".concat(variableString, "' variable..."));
                var variableName = this.variable.getName(), variablePresent = this.fileContext.isVariablePresentByVariableName(variableName);
                if (variablePresent) {
                    this.fileContext.debug("The '".concat(variableName, "' variable is already present."));
                } else {
                    variableVerified = true;
                }
                if (variableVerified) {
                    this.fileContext.debug("...verified the '".concat(variableString, "' variable."));
                }
                return variableVerified;
            }
        }
    ], [
        {
            key: "fromVariableDeclarationNode",
            value: function fromVariableDeclarationNode(variableDeclarationNode, fileContext) {
                var Variable = _dom.default.Variable, node = variableDeclarationNode, string = fileContext.nodeAsString(node), variable = Variable.fromVariableDeclarationNode(variableDeclarationNode, fileContext), variableDeclaration = new VariableDeclaration(fileContext, string, variable);
                return variableDeclaration;
            }
        }
    ]);
    return VariableDeclaration;
}(), _define_property(_VariableDeclaration, "name", "VariableDeclaration"), _VariableDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgeyBvYmplY3RUeXBlIH0gZnJvbSBcIi4uL3R5cGVcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBWYXJpYWJsZURlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IoZmlsZUNvbnRleHQsIHN0cmluZywgdmFyaWFibGUpIHtcbiAgICB0aGlzLmZpbGVDb250ZXh0ID0gZmlsZUNvbnRleHQ7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZUNvbnRleHQ7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCB2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dmFyaWFibGVEZWNsYXJhdGlvblN0cmluZ30nIHZhcmlhYmxlIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB2YXJpYWJsZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlWYXJpYWJsZSgpO1xuXG4gICAgaWYgKHZhcmlhYmxlVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlVHlwZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlWYXJpYWJsZVR5cGUoKTtcblxuICAgICAgaWYgKHZhcmlhYmxlVHlwZVZlcmlmaWVkKSB7XG4gICAgICAgIGxldCB0eXBlO1xuXG4gICAgICAgIHR5cGUgPSB0aGlzLnZhcmlhYmxlLmdldFR5cGUoKTtcblxuICAgICAgICBjb25zdCB0eXBlT2JqZWN0VHlwZSA9ICh0eXBlID09PSBvYmplY3RUeXBlKTtcblxuICAgICAgICBpZiAoIXR5cGVPYmplY3RUeXBlKSB7XG4gICAgICAgICAgY29uc3QgdHlwZU5hbWUgPSB0eXBlLmdldE5hbWUoKTtcblxuICAgICAgICAgIHR5cGUgPSB0aGlzLmZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0eXBlUHJvdmlzaW9uYWwgPSB0eXBlLmlzUHJvdmlzaW9uYWwoKSxcbiAgICAgICAgICAgICAgdmFyaWFibGVQcm92aXNpb25hbCA9IHRoaXMudmFyaWFibGUuaXNQcm92aXNpb25hbCgpO1xuXG4gICAgICAgIGlmICh0eXBlUHJvdmlzaW9uYWwgIT09IHZhcmlhYmxlUHJvdmlzaW9uYWwpIHtcbiAgICAgICAgICBjb25zdCB0eXBlU3RyaW5nID0gdHlwZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHRoaXMudmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgICBpZiAodHlwZVByb3Zpc2lvbmFsKSB7XG4gICAgICAgICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgcHJvdmlzaW9uYWwgd2hpbHN0IHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlJ3MgdHlwZSBpcyBub3QuYCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHZhcmlhYmxlUHJvdmlzaW9uYWwpIHtcbiAgICAgICAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBub3QgcHJvdmlzaW9uYWwgd2hpbHN0IHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlJ3MgdHlwZSBpcy5gKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy52YXJpYWJsZS5zZXRUeXBlKHR5cGUpO1xuXG4gICAgICAgICAgdGhpcy5maWxlQ29udGV4dC5hZGRWYXJpYWJsZSh0aGlzLnZhcmlhYmxlKTtcblxuICAgICAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3ZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmd9JyB2YXJpYWJsZSBkZWNsYXJhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlWYXJpYWJsZVR5cGUoKSB7XG4gICAgbGV0IHR5cGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHlwZSA9IHRoaXMudmFyaWFibGUuZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHR5cGUgPT09IG9iamVjdFR5cGUpIHtcbiAgICAgIHR5cGVWZXJpZmllZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVOYW1lID0gdHlwZS5nZXROYW1lKCk7XG5cbiAgICAgIHRoaXMuZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZU5hbWV9JyB0eXBlLi4uYCk7XG5cbiAgICAgIGNvbnN0IHR5cGVQcmVzZW50ID0gdGhpcy5maWxlQ29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgIGlmICghdHlwZVByZXNlbnQpIHtcbiAgICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVOYW1lfScgdHlwZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR5cGVWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlVmVyaWZpZWQpIHtcbiAgICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVOYW1lfScgdHlwZS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5VmFyaWFibGUoKSB7XG4gICAgbGV0ICB2YXJpYWJsZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IHRoaXMudmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IHZhcmlhYmxlTmFtZSA9IHRoaXMudmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IHRoaXMuZmlsZUNvbnRleHQuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuXG4gICAgaWYgKHZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgVGhlICcke3ZhcmlhYmxlTmFtZX0nIHZhcmlhYmxlIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyaWFibGVWZXJpZmllZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCB2YXJpYWJsZVZlcmlmaWVkKSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gIHZhcmlhYmxlVmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVmFyaWFibGVEZWNsYXJhdGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUodmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICAgIG5vZGUgPSB2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgLy8vXG4gICAgICAgICAgc3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgdmFyaWFibGVEZWNsYXJhdGlvbiA9IG5ldyBWYXJpYWJsZURlY2xhcmF0aW9uKGZpbGVDb250ZXh0LCBzdHJpbmcsIHZhcmlhYmxlKTtcblxuICAgIHJldHVybiB2YXJpYWJsZURlY2xhcmF0aW9uO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkb21Bc3NpZ25lZCIsIlZhcmlhYmxlRGVjbGFyYXRpb24iLCJmaWxlQ29udGV4dCIsInN0cmluZyIsInZhcmlhYmxlIiwiZ2V0RmlsZUNvbnRleHQiLCJnZXRTdHJpbmciLCJnZXRWYXJpYWJsZSIsInZlcmlmeSIsInZlcmlmaWVkIiwidmFyaWFibGVEZWNsYXJhdGlvblN0cmluZyIsInRyYWNlIiwidmFyaWFibGVWZXJpZmllZCIsInZlcmlmeVZhcmlhYmxlIiwidmFyaWFibGVUeXBlVmVyaWZpZWQiLCJ2ZXJpZnlWYXJpYWJsZVR5cGUiLCJ0eXBlIiwiZ2V0VHlwZSIsInR5cGVPYmplY3RUeXBlIiwib2JqZWN0VHlwZSIsInR5cGVOYW1lIiwiZ2V0TmFtZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInR5cGVQcm92aXNpb25hbCIsImlzUHJvdmlzaW9uYWwiLCJ2YXJpYWJsZVByb3Zpc2lvbmFsIiwidHlwZVN0cmluZyIsInZhcmlhYmxlU3RyaW5nIiwiZGVidWciLCJzZXRUeXBlIiwiYWRkVmFyaWFibGUiLCJ0eXBlVmVyaWZpZWQiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwidmFyaWFibGVOYW1lIiwidmFyaWFibGVQcmVzZW50IiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSIsImZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsInZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwiVmFyaWFibGUiLCJkb20iLCJub2RlIiwibm9kZUFzU3RyaW5nIiwidmFyaWFibGVEZWNsYXJhdGlvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBQTs7OzJEQUxnQjtvQkFFVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRzNCLFdBQWVBLElBQUFBLGdCQUFXLHdDQUFDO2FBQU1DLG9CQUNuQkMsV0FBVyxFQUFFQyxNQUFNLEVBQUVDLFFBQVE7Z0NBRFZIO1FBRTdCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFFBQVEsR0FBR0E7Ozs7WUFHbEJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsV0FBVztZQUN6Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsUUFBUTtZQUN0Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxXQUFXO2dCQUVmLElBQU1DLDRCQUE0QixJQUFJLENBQUNKLFNBQVM7Z0JBRWhELElBQUksQ0FBQ0osV0FBVyxDQUFDUyxLQUFLLENBQUMsQUFBQyxrQkFB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