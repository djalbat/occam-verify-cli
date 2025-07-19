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
                var variableTypeVerified = this.verifyVariableType();
                if (variableTypeVerified) {
                    var variableVerified = this.verifyVariable();
                    if (variableVerified) {
                        this.fileContext.addVariable(this.variable);
                        verified = true;
                    }
                }
                if (verified) {
                    this.fileContext.debug("...verified the '".concat(variableDeclarationString, "' variable declaration."));
                }
                return verified;
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
        },
        {
            key: "verifyVariableType",
            value: function verifyVariableType() {
                var variableTypeVerified = false;
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
                        variableTypeVerified = true;
                    }
                }
                if (variableTypeVerified) {
                    this.fileContext.debug("...verified the '".concat(variableString, "' variable's '").concat(typeString, "' type."));
                }
                return variableTypeVerified;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi8uLi9kb21cIjtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgVmFyaWFibGVEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGZpbGVDb250ZXh0LCBzdHJpbmcsIHZhcmlhYmxlKSB7XG4gICAgdGhpcy5maWxlQ29udGV4dCA9IGZpbGVDb250ZXh0O1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdmFyaWFibGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3ZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmd9JyB2YXJpYWJsZSBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgdmFyaWFibGVUeXBlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVZhcmlhYmxlVHlwZSgpO1xuXG4gICAgaWYgKHZhcmlhYmxlVHlwZVZlcmlmaWVkKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlWYXJpYWJsZSgpO1xuXG4gICAgICBpZiAodmFyaWFibGVWZXJpZmllZCkge1xuICAgICAgICB0aGlzLmZpbGVDb250ZXh0LmFkZFZhcmlhYmxlKHRoaXMudmFyaWFibGUpO1xuXG4gICAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nfScgdmFyaWFibGUgZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5VmFyaWFibGUoKSB7XG4gICAgbGV0ICB2YXJpYWJsZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IHRoaXMudmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IHZhcmlhYmxlTmFtZSA9IHRoaXMudmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IHRoaXMuZmlsZUNvbnRleHQuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuXG4gICAgaWYgKHZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgVGhlICcke3ZhcmlhYmxlTmFtZX0nIHZhcmlhYmxlIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyaWFibGVWZXJpZmllZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCB2YXJpYWJsZVZlcmlmaWVkKSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gIHZhcmlhYmxlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlWYXJpYWJsZVR5cGUoKSB7XG4gICAgbGV0IHZhcmlhYmxlVHlwZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBsZXQgdHlwZTtcblxuICAgIHR5cGUgPSB0aGlzLnZhcmlhYmxlLmdldFR5cGUoKTtcblxuICAgIGNvbnN0IHR5cGVOYW1lID0gdHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgdHlwZVN0cmluZyA9IHR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB0aGlzLnZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlJ3MgJyR7dHlwZVN0cmluZ30nIHR5cGUuLi5gKTtcblxuICAgIGNvbnN0IGluY2x1ZGVTdXBlcnR5cGVzID0gZmFsc2UsXG4gICAgICAgICAgcHJvdmlzaW9uYWwgPSB0eXBlLmlzUHJvdmlzaW9uYWwoaW5jbHVkZVN1cGVydHlwZXMpO1xuXG4gICAgdHlwZSA9IHRoaXMuZmlsZUNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgIGNvbnN0IHR5cGVQcmVzZW50ID0gKHR5cGUgIT09IG51bGwpXG5cbiAgICBpZiAoIXR5cGVQcmVzZW50KSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGBUaGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSdzICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwcm92aXNpb25hbE1hdGNoZXMgPSB0eXBlLm1hdGNoUHJvdmlzaW9uYWwocHJvdmlzaW9uYWwpO1xuXG4gICAgICBpZiAoIXByb3Zpc2lvbmFsTWF0Y2hlcykge1xuICAgICAgICBwcm92aXNpb25hbCA/XG4gICAgICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgVGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUncyAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBwcmVzZW50IGJ1dCBpdCBzaG91bGQgYmUgcHJvdmlzaW9uYWwuYCkgOlxuICAgICAgICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgVGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUncyAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBwcmVzZW50IGJ1dCBpdCBzaG91bGQgbm90IGJlIHByb3Zpc2lvbmFsLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy52YXJpYWJsZS5zZXRUeXBlKHR5cGUpO1xuXG4gICAgICAgIHZhcmlhYmxlVHlwZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmFyaWFibGVUeXBlVmVyaWZpZWQpIHtcbiAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlJ3MgJyR7dHlwZVN0cmluZ30nIHR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlVHlwZVZlcmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlZhcmlhYmxlRGVjbGFyYXRpb25cIjtcblxuICBzdGF0aWMgZnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlKHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgVmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgICBub2RlID0gdmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHZhcmlhYmxlRGVjbGFyYXRpb24gPSBuZXcgVmFyaWFibGVEZWNsYXJhdGlvbihmaWxlQ29udGV4dCwgc3RyaW5nLCB2YXJpYWJsZSk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVEZWNsYXJhdGlvbjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZG9tQXNzaWduZWQiLCJWYXJpYWJsZURlY2xhcmF0aW9uIiwiZmlsZUNvbnRleHQiLCJzdHJpbmciLCJ2YXJpYWJsZSIsImdldEZpbGVDb250ZXh0IiwiZ2V0U3RyaW5nIiwiZ2V0VmFyaWFibGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllZCIsInZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmciLCJ0cmFjZSIsInZhcmlhYmxlVHlwZVZlcmlmaWVkIiwidmVyaWZ5VmFyaWFibGVUeXBlIiwidmFyaWFibGVWZXJpZmllZCIsInZlcmlmeVZhcmlhYmxlIiwiYWRkVmFyaWFibGUiLCJkZWJ1ZyIsInZhcmlhYmxlU3RyaW5nIiwidmFyaWFibGVOYW1lIiwiZ2V0TmFtZSIsInZhcmlhYmxlUHJlc2VudCIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUiLCJ0eXBlIiwiZ2V0VHlwZSIsInR5cGVOYW1lIiwidHlwZVN0cmluZyIsImluY2x1ZGVTdXBlcnR5cGVzIiwicHJvdmlzaW9uYWwiLCJpc1Byb3Zpc2lvbmFsIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwidHlwZVByZXNlbnQiLCJwcm92aXNpb25hbE1hdGNoZXMiLCJtYXRjaFByb3Zpc2lvbmFsIiwic2V0VHlwZSIsImZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsInZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwiVmFyaWFibGUiLCJkb20iLCJub2RlIiwibm9kZUFzU3RyaW5nIiwidmFyaWFibGVEZWNsYXJhdGlvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7OzJEQUpnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSWhCLFdBQWVBLElBQUFBLGdCQUFXLHdDQUFDO2FBQU1DLG9CQUNuQkMsV0FBVyxFQUFFQyxNQUFNLEVBQUVDLFFBQVE7Z0NBRFZIO1FBRTdCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFFBQVEsR0FBR0E7Ozs7WUFHbEJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsV0FBVztZQUN6Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsUUFBUTtZQUN0Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxXQUFXO2dCQUVmLElBQU1DLDRCQUE0QixJQUFJLENBQUNKLFNBQVM7Z0JBRWhELElBQUksQ0FBQ0osV0FBVyxDQUFDUyxLQUFLLENBQUMsQUFBQyxrQkFBMkMsT0FBMUJELDJCQUEwQjtnQkFFbkUsSUFBTUUsdUJBQXVCLElBQUksQ0FBQ0Msa0JBQWtCO2dCQUVwRCxJQUFJRCxzQkFBc0I7b0JBQ3hCLElBQU1FLG1CQUFtQixJQUFJLENBQUNDLGNBQWM7b0JBRTVDLElBQUlELGtCQUFrQjt3QkFDcEIsSUFBSSxDQUFDWixXQUFXLENBQUNjLFdBQVcsQ0FBQyxJQUFJLENBQUNaLFFBQVE7d0JBRTFDSyxXQUFXO29CQUNiO2dCQUNGO2dCQUVBLElBQUlBLFVBQVU7b0JBQ1osSUFBSSxDQUFDUCxXQUFXLENBQUNlLEtBQUssQ0FBQyxBQUFDLG9CQUE2QyxPQUExQlAsMkJBQTBCO2dCQUN2RTtnQkFFQSxPQUFPRDtZQUNUOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUtELG1CQUFtQjtnQkFFeEIsSUFBTUksaUJBQWlCLElBQUksQ0FBQ2QsUUFBUSxDQUFDRSxTQUFTO2dCQUU5QyxJQUFJLENBQUNKLFdBQVcsQ0FBQ1MsS0FBSyxDQUFDLEFBQUMsa0JBQWdDLE9BQWZPLGdCQUFlO2dCQUV4RCxJQUFNQyxlQUFlLElBQUksQ0FBQ2YsUUFBUSxDQUFDZ0IsT0FBTyxJQUNwQ0Msa0JBQWtCLElBQUksQ0FBQ25CLFdBQVcsQ0FBQ29CLCtCQUErQixDQUFDSDtnQkFFekUsSUFBSUUsaUJBQWlCO29CQUNuQixJQUFJLENBQUNuQixXQUFXLENBQUNlLEtBQUssQ0FBQyxBQUFDLFFBQW9CLE9BQWJFLGNBQWE7Z0JBQzlDLE9BQU87b0JBQ0xMLG1CQUFtQjtnQkFDckI7Z0JBRUEsSUFBS0Esa0JBQWtCO29CQUNyQixJQUFJLENBQUNaLFdBQVcsQ0FBQ2UsS0FBSyxDQUFDLEFBQUMsb0JBQWtDLE9BQWZDLGdCQUFlO2dCQUM1RDtnQkFFQSxPQUFRSjtZQUNWOzs7WUFFQUQsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlELHVCQUF1QjtnQkFFM0IsSUFBSVc7Z0JBRUpBLE9BQU8sSUFBSSxDQUFDbkIsUUFBUSxDQUFDb0IsT0FBTztnQkFFNUIsSUFBTUMsV0FBV0YsS0FBS0gsT0FBTyxJQUN2Qk0sYUFBYUgsS0FBS2pCLFNBQVMsSUFDM0JZLGlCQUFpQixJQUFJLENBQUNkLFFBQVEsQ0FBQ0UsU0FBUztnQkFFOUMsSUFBSSxDQUFDSixXQUFXLENBQUNTLEtBQUssQ0FBQyxBQUFDLGtCQUFnRGUsT0FBL0JSLGdCQUFlLGtCQUEyQixPQUFYUSxZQUFXO2dCQUVuRixJQUFNQyxvQkFBb0IsT0FDcEJDLGNBQWNMLEtBQUtNLGFBQWEsQ0FBQ0Y7Z0JBRXZDSixPQUFPLElBQUksQ0FBQ3JCLFdBQVcsQ0FBQzRCLGtCQUFrQixDQUFDTDtnQkFFM0MsSUFBTU0sY0FBZVIsU0FBUztnQkFFOUIsSUFBSSxDQUFDUSxhQUFhO29CQUNoQixJQUFJLENBQUM3QixXQUFXLENBQUNlLEtBQUssQ0FBQyxBQUFDLFFBQXNDUyxPQUEvQlIsZ0JBQWUsa0JBQTJCLE9BQVhRLFlBQVc7Z0JBQzNFLE9BQU87b0JBQ0wsSUFBTU0scUJBQXFCVCxLQUFLVSxnQkFBZ0IsQ0FBQ0w7b0JBRWpELElBQUksQ0FBQ0ksb0JBQW9CO3dCQUN2QkosY0FDRSxJQUFJLENBQUMxQixXQUFXLENBQUNlLEtBQUssQ0FBQyxBQUFDLFFBQXNDUyxPQUEvQlIsZ0JBQWUsa0JBQTJCLE9BQVhRLFlBQVcsc0RBQ3ZFLElBQUksQ0FBQ3hCLFdBQVcsQ0FBQ2UsS0FBSyxDQUFDLEFBQUMsUUFBc0NTLE9BQS9CUixnQkFBZSxrQkFBMkIsT0FBWFEsWUFBVztvQkFDL0UsT0FBTzt3QkFDTCxJQUFJLENBQUN0QixRQUFRLENBQUM4QixPQUFPLENBQUNYO3dCQUV0QlgsdUJBQXVCO29CQUN6QjtnQkFDRjtnQkFFQSxJQUFJQSxzQkFBc0I7b0JBQ3hCLElBQUksQ0FBQ1YsV0FBVyxDQUFDZSxLQUFLLENBQUMsQUFBQyxvQkFBa0RTLE9BQS9CUixnQkFBZSxrQkFBMkIsT0FBWFEsWUFBVztnQkFDdkY7Z0JBRUEsT0FBT2Q7WUFDVDs7OztZQUlPdUIsS0FBQUE7bUJBQVAsU0FBT0EsNEJBQTRCQyx1QkFBdUIsRUFBRWxDLFdBQVc7Z0JBQ3JFLElBQU0sQUFBRW1DLFdBQWFDLFlBQUcsQ0FBaEJELFVBQ0ZFLE9BQU9ILHlCQUNQakMsU0FBU0QsWUFBWXNDLFlBQVksQ0FBQ0QsT0FDbENuQyxXQUFXaUMsU0FBU0YsMkJBQTJCLENBQUNDLHlCQUF5QmxDLGNBQ3pFdUMsc0JBQXNCLElBQUl4QyxvQkFBb0JDLGFBQWFDLFFBQVFDO2dCQUV6RSxPQUFPcUM7WUFDVDs7OztLQVZBLHVDQUFPQyxRQUFPIn0=