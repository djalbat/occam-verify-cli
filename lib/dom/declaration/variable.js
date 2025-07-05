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
                        var typeBaseType = type === _type.baseType;
                        if (!typeBaseType) {
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
                if (type === _type.baseType) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgeyBiYXNlVHlwZSB9IGZyb20gXCIuLi90eXBlXCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi8uLi9kb21cIjtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgVmFyaWFibGVEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGZpbGVDb250ZXh0LCBzdHJpbmcsIHZhcmlhYmxlKSB7XG4gICAgdGhpcy5maWxlQ29udGV4dCA9IGZpbGVDb250ZXh0O1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdmFyaWFibGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3ZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmd9JyB2YXJpYWJsZSBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgdmFyaWFibGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5VmFyaWFibGUoKTtcblxuICAgIGlmICh2YXJpYWJsZVZlcmlmaWVkKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZVR5cGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5VmFyaWFibGVUeXBlKCk7XG5cbiAgICAgIGlmICh2YXJpYWJsZVR5cGVWZXJpZmllZCkge1xuICAgICAgICBsZXQgdHlwZTtcblxuICAgICAgICB0eXBlID0gdGhpcy52YXJpYWJsZS5nZXRUeXBlKCk7XG5cbiAgICAgICAgY29uc3QgdHlwZUJhc2VUeXBlID0gKHR5cGUgPT09IGJhc2VUeXBlKTtcblxuICAgICAgICBpZiAoIXR5cGVCYXNlVHlwZSkge1xuICAgICAgICAgIGNvbnN0IHR5cGVOYW1lID0gdHlwZS5nZXROYW1lKCk7XG5cbiAgICAgICAgICB0eXBlID0gdGhpcy5maWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdHlwZVByb3Zpc2lvbmFsID0gdHlwZS5pc1Byb3Zpc2lvbmFsKCksXG4gICAgICAgICAgICAgIHZhcmlhYmxlUHJvdmlzaW9uYWwgPSB0aGlzLnZhcmlhYmxlLmlzUHJvdmlzaW9uYWwoKTtcblxuICAgICAgICBpZiAodHlwZVByb3Zpc2lvbmFsICE9PSB2YXJpYWJsZVByb3Zpc2lvbmFsKSB7XG4gICAgICAgICAgY29uc3QgdHlwZVN0cmluZyA9IHR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB0aGlzLnZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgICAgICAgaWYgKHR5cGVQcm92aXNpb25hbCkge1xuICAgICAgICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIHByb3Zpc2lvbmFsIHdoaWxzdCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSdzIHR5cGUgaXMgbm90LmApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh2YXJpYWJsZVByb3Zpc2lvbmFsKSB7XG4gICAgICAgICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgbm90IHByb3Zpc2lvbmFsIHdoaWxzdCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSdzIHR5cGUgaXMuYCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMudmFyaWFibGUuc2V0VHlwZSh0eXBlKTtcblxuICAgICAgICAgIHRoaXMuZmlsZUNvbnRleHQuYWRkVmFyaWFibGUodGhpcy52YXJpYWJsZSk7XG5cbiAgICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nfScgdmFyaWFibGUgZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5VmFyaWFibGVUeXBlKCkge1xuICAgIGxldCB0eXBlVmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLnZhcmlhYmxlLmdldFR5cGUoKTtcblxuICAgIGlmICh0eXBlID09PSBiYXNlVHlwZSkge1xuICAgICAgdHlwZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZU5hbWUgPSB0eXBlLmdldE5hbWUoKTtcblxuICAgICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlTmFtZX0nIHR5cGUuLi5gKTtcblxuICAgICAgY29uc3QgdHlwZVByZXNlbnQgPSB0aGlzLmZpbGVDb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgICAgaWYgKCF0eXBlUHJlc2VudCkge1xuICAgICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZU5hbWV9JyB0eXBlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVWZXJpZmllZCkge1xuICAgICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZU5hbWV9JyB0eXBlLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlWYXJpYWJsZSgpIHtcbiAgICBsZXQgIHZhcmlhYmxlVmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhcmlhYmxlU3RyaW5nID0gdGhpcy52YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmApO1xuXG4gICAgY29uc3QgdmFyaWFibGVOYW1lID0gdGhpcy52YXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gdGhpcy5maWxlQ29udGV4dC5pc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSk7XG5cbiAgICBpZiAodmFyaWFibGVQcmVzZW50KSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGBUaGUgJyR7dmFyaWFibGVOYW1lfScgdmFyaWFibGUgaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXJpYWJsZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoIHZhcmlhYmxlVmVyaWZpZWQpIHtcbiAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiAgdmFyaWFibGVWZXJpZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJWYXJpYWJsZURlY2xhcmF0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IFZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgICAgbm9kZSA9IHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUodmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICB2YXJpYWJsZURlY2xhcmF0aW9uID0gbmV3IFZhcmlhYmxlRGVjbGFyYXRpb24oZmlsZUNvbnRleHQsIHN0cmluZywgdmFyaWFibGUpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlRGVjbGFyYXRpb247XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRvbUFzc2lnbmVkIiwiVmFyaWFibGVEZWNsYXJhdGlvbiIsImZpbGVDb250ZXh0Iiwic3RyaW5nIiwidmFyaWFibGUiLCJnZXRGaWxlQ29udGV4dCIsImdldFN0cmluZyIsImdldFZhcmlhYmxlIiwidmVyaWZ5IiwidmVyaWZpZWQiLCJ2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nIiwidHJhY2UiLCJ2YXJpYWJsZVZlcmlmaWVkIiwidmVyaWZ5VmFyaWFibGUiLCJ2YXJpYWJsZVR5cGVWZXJpZmllZCIsInZlcmlmeVZhcmlhYmxlVHlwZSIsInR5cGUiLCJnZXRUeXBlIiwidHlwZUJhc2VUeXBlIiwiYmFzZVR5cGUiLCJ0eXBlTmFtZSIsImdldE5hbWUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJ0eXBlUHJvdmlzaW9uYWwiLCJpc1Byb3Zpc2lvbmFsIiwidmFyaWFibGVQcm92aXNpb25hbCIsInR5cGVTdHJpbmciLCJ2YXJpYWJsZVN0cmluZyIsImRlYnVnIiwic2V0VHlwZSIsImFkZFZhcmlhYmxlIiwidHlwZVZlcmlmaWVkIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsInZhcmlhYmxlTmFtZSIsInZhcmlhYmxlUHJlc2VudCIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUiLCJmcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJ2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIlZhcmlhYmxlIiwiZG9tIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsInZhcmlhYmxlRGVjbGFyYXRpb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQUE7OzsyREFMZ0I7b0JBRVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUd6QixXQUFlQSxJQUFBQSxnQkFBVyx3Q0FBQzthQUFNQyxvQkFDbkJDLFdBQVcsRUFBRUMsTUFBTSxFQUFFQyxRQUFRO2dDQURWSDtRQUU3QixJQUFJLENBQUNDLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxRQUFRLEdBQUdBOzs7O1lBR2xCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFdBQVc7WUFDekI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFFBQVE7WUFDdEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsV0FBVztnQkFFZixJQUFNQyw0QkFBNEIsSUFBSSxDQUFDSixTQUFTO2dCQUVoRCxJQUFJLENBQUNKLFdBQVcsQ0FBQ1MsS0FBSyxDQUFDLEFBQUMsa0JBQTJDLE9BQTFCRCwyQkFBMEI7Z0JBRW5FLElBQU1FLG1CQUFtQixJQUFJLENBQUNDLGNBQWM7Z0JBRTVDLElBQUlELGtCQUFrQjtvQkFDcEIsSUFBTUUsdUJBQXVCLElBQUksQ0FBQ0Msa0JBQWtCO29CQUVwRCxJQUFJRCxzQkFBc0I7d0JBQ3hCLElBQUlFO3dCQUVKQSxPQUFPLElBQUksQ0FBQ1osUUFBUSxDQUFDYSxPQUFPO3dCQUU1QixJQUFNQyxlQUFnQkYsU0FBU0csY0FBUTt3QkFFdkMsSUFBSSxDQUFDRCxjQUFjOzRCQUNqQixJQUFNRSxXQUFXSixLQUFLSyxPQUFPOzRCQUU3QkwsT0FBTyxJQUFJLENBQUNkLFdBQVcsQ0FBQ29CLGtCQUFrQixDQUFDRjt3QkFDN0M7d0JBRUEsSUFBTUcsa0JBQWtCUCxLQUFLUSxhQUFhLElBQ3BDQyxzQkFBc0IsSUFBSSxDQUFDckIsUUFBUSxDQUFDb0IsYUFBYTt3QkFFdkQsSUFBSUQsb0JBQW9CRSxxQkFBcUI7NEJBQzNDLElBQU1DLGFBQWFWLEtBQUtWLFNBQVMsSUFDM0JxQixpQkFBaUIsSUFBSSxDQUFDdkIsUUFBUSxDQUFDRSxTQUFTOzRCQUU5QyxJQUFJaUIsaUJBQWlCO2dDQUNuQixJQUFJLENBQUNyQixXQUFXLENBQUMwQixLQUFLLENBQUMsQUFBQyxRQUFzREQsT0FBL0NELFlBQVcsc0NBQW1ELE9BQWZDLGdCQUFlOzRCQUMvRjs0QkFFQSxJQUFJRixxQkFBcUI7Z0NBQ3ZCLElBQUksQ0FBQ3ZCLFdBQVcsQ0FBQzBCLEtBQUssQ0FBQyxBQUFDLFFBQTBERCxPQUFuREQsWUFBVywwQ0FBdUQsT0FBZkMsZ0JBQWU7NEJBQ25HO3dCQUNGLE9BQU87NEJBQ0wsSUFBSSxDQUFDdkIsUUFBUSxDQUFDeUIsT0FBTyxDQUFDYjs0QkFFdEIsSUFBSSxDQUFDZCxXQUFXLENBQUM0QixXQUFXLENBQUMsSUFBSSxDQUFDMUIsUUFBUTs0QkFFMUNLLFdBQVc7d0JBQ2I7b0JBQ0Y7Z0JBQ0Y7Z0JBRUEsSUFBSUEsVUFBVTtvQkFDWixJQUFJLENBQUNQLFdBQVcsQ0FBQzBCLEtBQUssQ0FBQyxBQUFDLG9CQUE2QyxPQUExQmxCLDJCQUEwQjtnQkFDdkU7Z0JBRUEsT0FBT0Q7WUFDVDs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJZ0IsZUFBZTtnQkFFbkIsSUFBTWYsT0FBTyxJQUFJLENBQUNaLFFBQVEsQ0FBQ2EsT0FBTztnQkFFbEMsSUFBSUQsU0FBU0csY0FBUSxFQUFFO29CQUNyQlksZUFBZTtnQkFDakIsT0FBTztvQkFDTCxJQUFNWCxXQUFXSixLQUFLSyxPQUFPO29CQUU3QixJQUFJLENBQUNuQixXQUFXLENBQUNTLEtBQUssQ0FBQyxBQUFDLGtCQUEwQixPQUFUUyxVQUFTO29CQUVsRCxJQUFNWSxjQUFjLElBQUksQ0FBQzlCLFdBQVcsQ0FBQytCLHVCQUF1QixDQUFDYjtvQkFFN0QsSUFBSSxDQUFDWSxhQUFhO3dCQUNoQixJQUFJLENBQUM5QixXQUFXLENBQUMwQixLQUFLLENBQUMsQUFBQyxRQUFnQixPQUFUUixVQUFTO29CQUMxQyxPQUFPO3dCQUNMVyxlQUFlO29CQUNqQjtvQkFFQSxJQUFJQSxjQUFjO3dCQUNoQixJQUFJLENBQUM3QixXQUFXLENBQUMwQixLQUFLLENBQUMsQUFBQyxvQkFBNEIsT0FBVFIsVUFBUztvQkFDdEQ7Z0JBQ0Y7Z0JBRUEsT0FBT1c7WUFDVDs7O1lBRUFsQixLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBS0QsbUJBQW1CO2dCQUV4QixJQUFNZSxpQkFBaUIsSUFBSSxDQUFDdkIsUUFBUSxDQUFDRSxTQUFTO2dCQUU5QyxJQUFJLENBQUNKLFdBQVcsQ0FBQ1MsS0FBSyxDQUFDLEFBQUMsa0JBQWdDLE9BQWZnQixnQkFBZTtnQkFFeEQsSUFBTU8sZUFBZSxJQUFJLENBQUM5QixRQUFRLENBQUNpQixPQUFPLElBQ3BDYyxrQkFBa0IsSUFBSSxDQUFDakMsV0FBVyxDQUFDa0MsK0JBQStCLENBQUNGO2dCQUV6RSxJQUFJQyxpQkFBaUI7b0JBQ25CLElBQUksQ0FBQ2pDLFdBQVcsQ0FBQzBCLEtBQUssQ0FBQyxBQUFDLFFBQW9CLE9BQWJNLGNBQWE7Z0JBQzlDLE9BQU87b0JBQ0x0QixtQkFBbUI7Z0JBQ3JCO2dCQUVBLElBQUtBLGtCQUFrQjtvQkFDckIsSUFBSSxDQUFDVixXQUFXLENBQUMwQixLQUFLLENBQUMsQUFBQyxvQkFBa0MsT0FBZkQsZ0JBQWU7Z0JBQzVEO2dCQUVBLE9BQVFmO1lBQ1Y7Ozs7WUFJT3lCLEtBQUFBO21CQUFQLFNBQU9BLDRCQUE0QkMsdUJBQXVCLEVBQUVwQyxXQUFXO2dCQUNyRSxJQUFNLEFBQUVxQyxXQUFhQyxZQUFHLENBQWhCRCxVQUNGRSxPQUFPSCx5QkFDUG5DLFNBQVNELFlBQVl3QyxZQUFZLENBQUNELE9BQ2xDckMsV0FBV21DLFNBQVNGLDJCQUEyQixDQUFDQyx5QkFBeUJwQyxjQUN6RXlDLHNCQUFzQixJQUFJMUMsb0JBQW9CQyxhQUFhQyxRQUFRQztnQkFFekUsT0FBT3VDO1lBQ1Q7Ozs7S0FWQSx1Q0FBT0MsUUFBTyJ9