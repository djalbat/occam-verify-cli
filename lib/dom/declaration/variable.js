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
                        var typeName = type.getName();
                        type = this.fileContext.findTypeByTypeName(typeName);
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
                var type;
                type = this.variable.getType();
                var typeName = type.getName(), typeString = type.getString(), variableString = this.variable.getString();
                this.fileContext.trace("Verifying the '".concat(variableString, "' variable's '").concat(typeString, "' type..."));
                var includeSupertypes = false, provisional = type.isProvisional(includeSupertypes);
                type = this.fileContext.findTypeByTypeName(typeName);
                var typePresent = type !== null;
                if (!typePresent) {
                    this.fileContext.debug("The '".concat(variableString, "' variable's '").concat(typeString, "' type is not present."));
                } else {
                    var provisionalMatches = type.matchProvisional(provisional);
                    if (!provisionalMatches) {
                        provisional ? this.fileContext.debug("The '".concat(variableString, "' variable's '").concat(typeString, "' type is present but it should be provisional.")) : this.fileContext.debug("The '".concat(variableString, "' variable's '").concat(typeString, "' type is present but it should not be provisional."));
                    } else {
                        this.variable.setType(type);
                        typeVerified = true;
                    }
                }
                if (typeVerified) {
                    this.fileContext.debug("...verified the '".concat(variableString, "' variable's '").concat(typeString, "' type."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi8uLi9kb21cIjtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgVmFyaWFibGVEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGZpbGVDb250ZXh0LCBzdHJpbmcsIHZhcmlhYmxlKSB7XG4gICAgdGhpcy5maWxlQ29udGV4dCA9IGZpbGVDb250ZXh0O1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdmFyaWFibGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3ZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmd9JyB2YXJpYWJsZSBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgdmFyaWFibGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5VmFyaWFibGUoKTtcblxuICAgIGlmICh2YXJpYWJsZVZlcmlmaWVkKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZVR5cGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5VmFyaWFibGVUeXBlKCk7XG5cbiAgICAgIGlmICh2YXJpYWJsZVR5cGVWZXJpZmllZCkge1xuICAgICAgICBsZXQgdHlwZTtcblxuICAgICAgICB0eXBlID0gdGhpcy52YXJpYWJsZS5nZXRUeXBlKCk7XG5cbiAgICAgICAgY29uc3QgdHlwZU5hbWUgPSB0eXBlLmdldE5hbWUoKTtcblxuICAgICAgICB0eXBlID0gdGhpcy5maWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICAgIGNvbnN0IHR5cGVQcm92aXNpb25hbCA9IHR5cGUuaXNQcm92aXNpb25hbCgpLFxuICAgICAgICAgICAgICB2YXJpYWJsZVByb3Zpc2lvbmFsID0gdGhpcy52YXJpYWJsZS5pc1Byb3Zpc2lvbmFsKCk7XG5cbiAgICAgICAgaWYgKHR5cGVQcm92aXNpb25hbCAhPT0gdmFyaWFibGVQcm92aXNpb25hbCkge1xuICAgICAgICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0eXBlLmdldFN0cmluZygpLFxuICAgICAgICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdGhpcy52YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgICAgICAgIGlmICh0eXBlUHJvdmlzaW9uYWwpIHtcbiAgICAgICAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBwcm92aXNpb25hbCB3aGlsc3QgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUncyB0eXBlIGlzIG5vdC5gKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodmFyaWFibGVQcm92aXNpb25hbCkge1xuICAgICAgICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIG5vdCBwcm92aXNpb25hbCB3aGlsc3QgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUncyB0eXBlIGlzLmApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmZpbGVDb250ZXh0LmFkZFZhcmlhYmxlKHRoaXMudmFyaWFibGUpO1xuXG4gICAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dmFyaWFibGVEZWNsYXJhdGlvblN0cmluZ30nIHZhcmlhYmxlIGRlY2xhcmF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVZhcmlhYmxlVHlwZSgpIHtcbiAgICBsZXQgdHlwZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBsZXQgdHlwZTtcblxuICAgIHR5cGUgPSB0aGlzLnZhcmlhYmxlLmdldFR5cGUoKTtcblxuICAgIGNvbnN0IHR5cGVOYW1lID0gdHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgdHlwZVN0cmluZyA9IHR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB0aGlzLnZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlJ3MgJyR7dHlwZVN0cmluZ30nIHR5cGUuLi5gKTtcblxuICAgIGNvbnN0IGluY2x1ZGVTdXBlcnR5cGVzID0gZmFsc2UsXG4gICAgICAgICAgcHJvdmlzaW9uYWwgPSB0eXBlLmlzUHJvdmlzaW9uYWwoaW5jbHVkZVN1cGVydHlwZXMpO1xuXG4gICAgdHlwZSA9IHRoaXMuZmlsZUNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgIGNvbnN0IHR5cGVQcmVzZW50ID0gKHR5cGUgIT09IG51bGwpXG5cbiAgICBpZiAoIXR5cGVQcmVzZW50KSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGBUaGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSdzICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwcm92aXNpb25hbE1hdGNoZXMgPSB0eXBlLm1hdGNoUHJvdmlzaW9uYWwocHJvdmlzaW9uYWwpO1xuXG4gICAgICBpZiAoIXByb3Zpc2lvbmFsTWF0Y2hlcykge1xuICAgICAgICBwcm92aXNpb25hbCA/XG4gICAgICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgVGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUncyAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBwcmVzZW50IGJ1dCBpdCBzaG91bGQgYmUgcHJvdmlzaW9uYWwuYCkgOlxuICAgICAgICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgVGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUncyAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBwcmVzZW50IGJ1dCBpdCBzaG91bGQgbm90IGJlIHByb3Zpc2lvbmFsLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy52YXJpYWJsZS5zZXRUeXBlKHR5cGUpO1xuXG4gICAgICAgIHR5cGVWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVWZXJpZmllZCkge1xuICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUncyAnJHt0eXBlU3RyaW5nfScgdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5VmFyaWFibGUoKSB7XG4gICAgbGV0ICB2YXJpYWJsZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IHRoaXMudmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IHZhcmlhYmxlTmFtZSA9IHRoaXMudmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IHRoaXMuZmlsZUNvbnRleHQuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuXG4gICAgaWYgKHZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgVGhlICcke3ZhcmlhYmxlTmFtZX0nIHZhcmlhYmxlIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyaWFibGVWZXJpZmllZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCB2YXJpYWJsZVZlcmlmaWVkKSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gIHZhcmlhYmxlVmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVmFyaWFibGVEZWNsYXJhdGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUodmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICAgIG5vZGUgPSB2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgLy8vXG4gICAgICAgICAgc3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgdmFyaWFibGVEZWNsYXJhdGlvbiA9IG5ldyBWYXJpYWJsZURlY2xhcmF0aW9uKGZpbGVDb250ZXh0LCBzdHJpbmcsIHZhcmlhYmxlKTtcblxuICAgIHJldHVybiB2YXJpYWJsZURlY2xhcmF0aW9uO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkb21Bc3NpZ25lZCIsIlZhcmlhYmxlRGVjbGFyYXRpb24iLCJmaWxlQ29udGV4dCIsInN0cmluZyIsInZhcmlhYmxlIiwiZ2V0RmlsZUNvbnRleHQiLCJnZXRTdHJpbmciLCJnZXRWYXJpYWJsZSIsInZlcmlmeSIsInZlcmlmaWVkIiwidmFyaWFibGVEZWNsYXJhdGlvblN0cmluZyIsInRyYWNlIiwidmFyaWFibGVWZXJpZmllZCIsInZlcmlmeVZhcmlhYmxlIiwidmFyaWFibGVUeXBlVmVyaWZpZWQiLCJ2ZXJpZnlWYXJpYWJsZVR5cGUiLCJ0eXBlIiwiZ2V0VHlwZSIsInR5cGVOYW1lIiwiZ2V0TmFtZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInR5cGVQcm92aXNpb25hbCIsImlzUHJvdmlzaW9uYWwiLCJ2YXJpYWJsZVByb3Zpc2lvbmFsIiwidHlwZVN0cmluZyIsInZhcmlhYmxlU3RyaW5nIiwiZGVidWciLCJhZGRWYXJpYWJsZSIsInR5cGVWZXJpZmllZCIsImluY2x1ZGVTdXBlcnR5cGVzIiwicHJvdmlzaW9uYWwiLCJ0eXBlUHJlc2VudCIsInByb3Zpc2lvbmFsTWF0Y2hlcyIsIm1hdGNoUHJvdmlzaW9uYWwiLCJzZXRUeXBlIiwidmFyaWFibGVOYW1lIiwidmFyaWFibGVQcmVzZW50IiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSIsImZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsInZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwiVmFyaWFibGUiLCJkb20iLCJub2RlIiwibm9kZUFzU3RyaW5nIiwidmFyaWFibGVEZWNsYXJhdGlvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7OzJEQUpnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSWhCLFdBQWVBLElBQUFBLGdCQUFXLHdDQUFDO2FBQU1DLG9CQUNuQkMsV0FBVyxFQUFFQyxNQUFNLEVBQUVDLFFBQVE7Z0NBRFZIO1FBRTdCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFFBQVEsR0FBR0E7Ozs7WUFHbEJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsV0FBVztZQUN6Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsUUFBUTtZQUN0Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxXQUFXO2dCQUVmLElBQU1DLDRCQUE0QixJQUFJLENBQUNKLFNBQVM7Z0JBRWhELElBQUksQ0FBQ0osV0FBVyxDQUFDUyxLQUFLLENBQUMsQUFBQyxrQkFBMkMsT0FBMUJELDJCQUEwQjtnQkFFbkUsSUFBTUUsbUJBQW1CLElBQUksQ0FBQ0MsY0FBYztnQkFFNUMsSUFBSUQsa0JBQWtCO29CQUNwQixJQUFNRSx1QkFBdUIsSUFBSSxDQUFDQyxrQkFBa0I7b0JBRXBELElBQUlELHNCQUFzQjt3QkFDeEIsSUFBSUU7d0JBRUpBLE9BQU8sSUFBSSxDQUFDWixRQUFRLENBQUNhLE9BQU87d0JBRTVCLElBQU1DLFdBQVdGLEtBQUtHLE9BQU87d0JBRTdCSCxPQUFPLElBQUksQ0FBQ2QsV0FBVyxDQUFDa0Isa0JBQWtCLENBQUNGO3dCQUUzQyxJQUFNRyxrQkFBa0JMLEtBQUtNLGFBQWEsSUFDcENDLHNCQUFzQixJQUFJLENBQUNuQixRQUFRLENBQUNrQixhQUFhO3dCQUV2RCxJQUFJRCxvQkFBb0JFLHFCQUFxQjs0QkFDM0MsSUFBTUMsYUFBYVIsS0FBS1YsU0FBUyxJQUMzQm1CLGlCQUFpQixJQUFJLENBQUNyQixRQUFRLENBQUNFLFNBQVM7NEJBRTlDLElBQUllLGlCQUFpQjtnQ0FDbkIsSUFBSSxDQUFDbkIsV0FBVyxDQUFDd0IsS0FBSyxDQUFDLEFBQUMsUUFBc0RELE9BQS9DRCxZQUFXLHNDQUFtRCxPQUFmQyxnQkFBZTs0QkFDL0Y7NEJBRUEsSUFBSUYscUJBQXFCO2dDQUN2QixJQUFJLENBQUNyQixXQUFXLENBQUN3QixLQUFLLENBQUMsQUFBQyxRQUEwREQsT0FBbkRELFlBQVcsMENBQXVELE9BQWZDLGdCQUFlOzRCQUNuRzt3QkFDRixPQUFPOzRCQUNMLElBQUksQ0FBQ3ZCLFdBQVcsQ0FBQ3lCLFdBQVcsQ0FBQyxJQUFJLENBQUN2QixRQUFROzRCQUUxQ0ssV0FBVzt3QkFDYjtvQkFDRjtnQkFDRjtnQkFFQSxJQUFJQSxVQUFVO29CQUNaLElBQUksQ0FBQ1AsV0FBVyxDQUFDd0IsS0FBSyxDQUFDLEFBQUMsb0JBQTZDLE9BQTFCaEIsMkJBQTBCO2dCQUN2RTtnQkFFQSxPQUFPRDtZQUNUOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlhLGVBQWU7Z0JBRW5CLElBQUlaO2dCQUVKQSxPQUFPLElBQUksQ0FBQ1osUUFBUSxDQUFDYSxPQUFPO2dCQUU1QixJQUFNQyxXQUFXRixLQUFLRyxPQUFPLElBQ3ZCSyxhQUFhUixLQUFLVixTQUFTLElBQzNCbUIsaUJBQWlCLElBQUksQ0FBQ3JCLFFBQVEsQ0FBQ0UsU0FBUztnQkFFOUMsSUFBSSxDQUFDSixXQUFXLENBQUNTLEtBQUssQ0FBQyxBQUFDLGtCQUFnRGEsT0FBL0JDLGdCQUFlLGtCQUEyQixPQUFYRCxZQUFXO2dCQUVuRixJQUFNSyxvQkFBb0IsT0FDcEJDLGNBQWNkLEtBQUtNLGFBQWEsQ0FBQ087Z0JBRXZDYixPQUFPLElBQUksQ0FBQ2QsV0FBVyxDQUFDa0Isa0JBQWtCLENBQUNGO2dCQUUzQyxJQUFNYSxjQUFlZixTQUFTO2dCQUU5QixJQUFJLENBQUNlLGFBQWE7b0JBQ2hCLElBQUksQ0FBQzdCLFdBQVcsQ0FBQ3dCLEtBQUssQ0FBQyxBQUFDLFFBQXNDRixPQUEvQkMsZ0JBQWUsa0JBQTJCLE9BQVhELFlBQVc7Z0JBQzNFLE9BQU87b0JBQ0wsSUFBTVEscUJBQXFCaEIsS0FBS2lCLGdCQUFnQixDQUFDSDtvQkFFakQsSUFBSSxDQUFDRSxvQkFBb0I7d0JBQ3ZCRixjQUNFLElBQUksQ0FBQzVCLFdBQVcsQ0FBQ3dCLEtBQUssQ0FBQyxBQUFDLFFBQXNDRixPQUEvQkMsZ0JBQWUsa0JBQTJCLE9BQVhELFlBQVcsc0RBQ3ZFLElBQUksQ0FBQ3RCLFdBQVcsQ0FBQ3dCLEtBQUssQ0FBQyxBQUFDLFFBQXNDRixPQUEvQkMsZ0JBQWUsa0JBQTJCLE9BQVhELFlBQVc7b0JBQy9FLE9BQU87d0JBQ0wsSUFBSSxDQUFDcEIsUUFBUSxDQUFDOEIsT0FBTyxDQUFDbEI7d0JBRXRCWSxlQUFlO29CQUNqQjtnQkFDRjtnQkFFQSxJQUFJQSxjQUFjO29CQUNoQixJQUFJLENBQUMxQixXQUFXLENBQUN3QixLQUFLLENBQUMsQUFBQyxvQkFBa0RGLE9BQS9CQyxnQkFBZSxrQkFBMkIsT0FBWEQsWUFBVztnQkFDdkY7Z0JBRUEsT0FBT0k7WUFDVDs7O1lBRUFmLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFLRCxtQkFBbUI7Z0JBRXhCLElBQU1hLGlCQUFpQixJQUFJLENBQUNyQixRQUFRLENBQUNFLFNBQVM7Z0JBRTlDLElBQUksQ0FBQ0osV0FBVyxDQUFDUyxLQUFLLENBQUMsQUFBQyxrQkFBZ0MsT0FBZmMsZ0JBQWU7Z0JBRXhELElBQU1VLGVBQWUsSUFBSSxDQUFDL0IsUUFBUSxDQUFDZSxPQUFPLElBQ3BDaUIsa0JBQWtCLElBQUksQ0FBQ2xDLFdBQVcsQ0FBQ21DLCtCQUErQixDQUFDRjtnQkFFekUsSUFBSUMsaUJBQWlCO29CQUNuQixJQUFJLENBQUNsQyxXQUFXLENBQUN3QixLQUFLLENBQUMsQUFBQyxRQUFvQixPQUFiUyxjQUFhO2dCQUM5QyxPQUFPO29CQUNMdkIsbUJBQW1CO2dCQUNyQjtnQkFFQSxJQUFLQSxrQkFBa0I7b0JBQ3JCLElBQUksQ0FBQ1YsV0FBVyxDQUFDd0IsS0FBSyxDQUFDLEFBQUMsb0JBQWtDLE9BQWZELGdCQUFlO2dCQUM1RDtnQkFFQSxPQUFRYjtZQUNWOzs7O1lBSU8wQixLQUFBQTttQkFBUCxTQUFPQSw0QkFBNEJDLHVCQUF1QixFQUFFckMsV0FBVztnQkFDckUsSUFBTSxBQUFFc0MsV0FBYUMsWUFBRyxDQUFoQkQsVUFDRkUsT0FBT0gseUJBQ1BwQyxTQUFTRCxZQUFZeUMsWUFBWSxDQUFDRCxPQUNsQ3RDLFdBQVdvQyxTQUFTRiwyQkFBMkIsQ0FBQ0MseUJBQXlCckMsY0FDekUwQyxzQkFBc0IsSUFBSTNDLG9CQUFvQkMsYUFBYUMsUUFBUUM7Z0JBRXpFLE9BQU93QztZQUNUOzs7O0tBVkEsdUNBQU9DLFFBQU8ifQ==