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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi8uLi9kb21cIjtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgVmFyaWFibGVEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGZpbGVDb250ZXh0LCBzdHJpbmcsIHZhcmlhYmxlKSB7XG4gICAgdGhpcy5maWxlQ29udGV4dCA9IGZpbGVDb250ZXh0O1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdmFyaWFibGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3ZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmd9JyB2YXJpYWJsZSBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgdmFyaWFibGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5VmFyaWFibGUoKTtcblxuICAgIGlmICh2YXJpYWJsZVZlcmlmaWVkKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZVR5cGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5VmFyaWFibGVUeXBlKCk7XG5cbiAgICAgIGlmICh2YXJpYWJsZVR5cGVWZXJpZmllZCkge1xuICAgICAgICB0aGlzLmZpbGVDb250ZXh0LmFkZFZhcmlhYmxlKHRoaXMudmFyaWFibGUpO1xuXG4gICAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nfScgdmFyaWFibGUgZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5VmFyaWFibGUoKSB7XG4gICAgbGV0ICB2YXJpYWJsZVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IHRoaXMudmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuLi5gKTtcblxuICAgIGNvbnN0IHZhcmlhYmxlTmFtZSA9IHRoaXMudmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IHRoaXMuZmlsZUNvbnRleHQuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuXG4gICAgaWYgKHZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgVGhlICcke3ZhcmlhYmxlTmFtZX0nIHZhcmlhYmxlIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyaWFibGVWZXJpZmllZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCB2YXJpYWJsZVZlcmlmaWVkKSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gIHZhcmlhYmxlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlWYXJpYWJsZVR5cGUoKSB7XG4gICAgbGV0IHR5cGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgbGV0IHR5cGU7XG5cbiAgICB0eXBlID0gdGhpcy52YXJpYWJsZS5nZXRUeXBlKCk7XG5cbiAgICBjb25zdCB0eXBlTmFtZSA9IHR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIHR5cGVTdHJpbmcgPSB0eXBlLmdldFN0cmluZygpLFxuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdGhpcy52YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSdzICcke3R5cGVTdHJpbmd9JyB0eXBlLi4uYCk7XG5cbiAgICBjb25zdCBpbmNsdWRlU3VwZXJ0eXBlcyA9IGZhbHNlLFxuICAgICAgICAgIHByb3Zpc2lvbmFsID0gdHlwZS5pc1Byb3Zpc2lvbmFsKGluY2x1ZGVTdXBlcnR5cGVzKTtcblxuICAgIHR5cGUgPSB0aGlzLmZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICBjb25zdCB0eXBlUHJlc2VudCA9ICh0eXBlICE9PSBudWxsKVxuXG4gICAgaWYgKCF0eXBlUHJlc2VudCkge1xuICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgVGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUncyAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcHJvdmlzaW9uYWxNYXRjaGVzID0gdHlwZS5tYXRjaFByb3Zpc2lvbmFsKHByb3Zpc2lvbmFsKTtcblxuICAgICAgaWYgKCFwcm92aXNpb25hbE1hdGNoZXMpIHtcbiAgICAgICAgcHJvdmlzaW9uYWwgP1xuICAgICAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYFRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlJ3MgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgcHJlc2VudCBidXQgaXQgc2hvdWxkIGJlIHByb3Zpc2lvbmFsLmApIDpcbiAgICAgICAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYFRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlJ3MgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgcHJlc2VudCBidXQgaXQgc2hvdWxkIG5vdCBiZSBwcm92aXNpb25hbC5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudmFyaWFibGUuc2V0VHlwZSh0eXBlKTtcblxuICAgICAgICB0eXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlVmVyaWZpZWQpIHtcbiAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlJ3MgJyR7dHlwZVN0cmluZ30nIHR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVWZXJpZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJWYXJpYWJsZURlY2xhcmF0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IFZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgICAgbm9kZSA9IHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUodmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICB2YXJpYWJsZURlY2xhcmF0aW9uID0gbmV3IFZhcmlhYmxlRGVjbGFyYXRpb24oZmlsZUNvbnRleHQsIHN0cmluZywgdmFyaWFibGUpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlRGVjbGFyYXRpb247XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRvbUFzc2lnbmVkIiwiVmFyaWFibGVEZWNsYXJhdGlvbiIsImZpbGVDb250ZXh0Iiwic3RyaW5nIiwidmFyaWFibGUiLCJnZXRGaWxlQ29udGV4dCIsImdldFN0cmluZyIsImdldFZhcmlhYmxlIiwidmVyaWZ5IiwidmVyaWZpZWQiLCJ2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nIiwidHJhY2UiLCJ2YXJpYWJsZVZlcmlmaWVkIiwidmVyaWZ5VmFyaWFibGUiLCJ2YXJpYWJsZVR5cGVWZXJpZmllZCIsInZlcmlmeVZhcmlhYmxlVHlwZSIsImFkZFZhcmlhYmxlIiwiZGVidWciLCJ2YXJpYWJsZVN0cmluZyIsInZhcmlhYmxlTmFtZSIsImdldE5hbWUiLCJ2YXJpYWJsZVByZXNlbnQiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lIiwidHlwZVZlcmlmaWVkIiwidHlwZSIsImdldFR5cGUiLCJ0eXBlTmFtZSIsInR5cGVTdHJpbmciLCJpbmNsdWRlU3VwZXJ0eXBlcyIsInByb3Zpc2lvbmFsIiwiaXNQcm92aXNpb25hbCIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInR5cGVQcmVzZW50IiwicHJvdmlzaW9uYWxNYXRjaGVzIiwibWF0Y2hQcm92aXNpb25hbCIsInNldFR5cGUiLCJmcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJ2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSIsIlZhcmlhYmxlIiwiZG9tIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsInZhcmlhYmxlRGVjbGFyYXRpb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQUE7OzsyREFKZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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