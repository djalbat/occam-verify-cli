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
    function VariableDeclaration(context, node, string, variable) {
        _class_call_check(this, VariableDeclaration);
        this.context = context;
        this.node = node;
        this.string = string;
        this.variable = variable;
    }
    _create_class(VariableDeclaration, [
        {
            key: "getContext",
            value: function getContext() {
                return this.context;
            }
        },
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
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
                var verifies = false;
                var variableDeclarationString = this.getString();
                this.context.trace("Verifying the '".concat(variableDeclarationString, "' variable declaration..."), this.node);
                var variableTypeVerifies = this.verifyVariableType();
                if (variableTypeVerifies) {
                    var variableVerifies = this.verifyVariable();
                    if (variableVerifies) {
                        this.context.addVariable(this.variable);
                        verifies = true;
                    }
                }
                if (verifies) {
                    this.context.debug("...verified the '".concat(variableDeclarationString, "' variable declaration."), this.node);
                }
                return verifies;
            }
        },
        {
            key: "verifyVariable",
            value: function verifyVariable() {
                var variableVerifies = false;
                var variableString = this.variable.getString();
                this.context.trace("Verifying the '".concat(variableString, "' variable..."), this.node);
                var variableIdentifier = this.variable.getIdentifier(), variablePresent = this.context.isVariablePresentByVariableIdentifier(variableIdentifier);
                if (variablePresent) {
                    this.context.debug("The '".concat(variableName, "' variable is already present."), this.node);
                } else {
                    variableVerifies = true;
                }
                if (variableVerifies) {
                    this.context.debug("...verified the '".concat(variableString, "' variable."), this.node);
                }
                return variableVerifies;
            }
        },
        {
            key: "verifyVariableType",
            value: function verifyVariableType() {
                var variableTypeVerifies = false;
                var type;
                type = this.variable.getType();
                var typeName = type.getName(), typeString = type.getString();
                this.context.trace("Verifying the '".concat(typeString, "' type..."), this.node);
                var includeSupertypes = false, provisional = type.isProvisional(includeSupertypes);
                type = this.context.findTypeByTypeName(typeName);
                var typePresent = type !== null;
                if (!typePresent) {
                    this.context.debug("The '".concat(typeString, "' type is not present."), this.node);
                } else {
                    var provisionalMatches = type.matchProvisional(provisional);
                    if (!provisionalMatches) {
                        provisional ? this.context.debug("The '".concat(typeString, "' type is present but not provisional."), this.node) : this.context.debug("The '".concat(typeString, "' type is present but provisional."), this.node);
                    } else {
                        this.variable.setType(type);
                        variableTypeVerifies = true;
                    }
                }
                if (variableTypeVerifies) {
                    this.context.debug("...verified the '".concat(typeString, "' type."), this.node);
                }
                return variableTypeVerifies;
            }
        }
    ], [
        {
            key: "fromVariableDeclarationNode",
            value: function fromVariableDeclarationNode(variableDeclarationNode, context) {
                var Variable = _dom.default.Variable, node = variableDeclarationNode, string = context.nodeAsString(node), variable = Variable.fromVariableDeclarationNode(variableDeclarationNode, context), variableDeclaration = new VariableDeclaration(context, node, string, variable);
                return variableDeclaration;
            }
        }
    ]);
    return VariableDeclaration;
}(), _define_property(_VariableDeclaration, "name", "VariableDeclaration"), _VariableDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vdmFyaWFibGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi8uLi9kb21cIjtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgVmFyaWFibGVEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIG5vZGUsIHN0cmluZywgdmFyaWFibGUpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdmFyaWFibGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLmNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dmFyaWFibGVEZWNsYXJhdGlvblN0cmluZ30nIHZhcmlhYmxlIGRlY2xhcmF0aW9uLi4uYCwgdGhpcy5ub2RlKTtcblxuICAgIGNvbnN0IHZhcmlhYmxlVHlwZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlWYXJpYWJsZVR5cGUoKTtcblxuICAgIGlmICh2YXJpYWJsZVR5cGVWZXJpZmllcykge1xuICAgICAgY29uc3QgdmFyaWFibGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5VmFyaWFibGUoKTtcblxuICAgICAgaWYgKHZhcmlhYmxlVmVyaWZpZXMpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmFkZFZhcmlhYmxlKHRoaXMudmFyaWFibGUpO1xuXG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIHRoaXMuY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3ZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmd9JyB2YXJpYWJsZSBkZWNsYXJhdGlvbi5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVZhcmlhYmxlKCkge1xuICAgIGxldCAgdmFyaWFibGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdmFyaWFibGVTdHJpbmcgPSB0aGlzLnZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgdGhpcy5jb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyID0gdGhpcy52YXJpYWJsZS5nZXRJZGVudGlmaWVyKCksXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gdGhpcy5jb250ZXh0LmlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgIGlmICh2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIHRoaXMuY29udGV4dC5kZWJ1ZyhgVGhlICcke3ZhcmlhYmxlTmFtZX0nIHZhcmlhYmxlIGlzIGFscmVhZHkgcHJlc2VudC5gLCB0aGlzLm5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXJpYWJsZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoIHZhcmlhYmxlVmVyaWZpZXMpIHtcbiAgICAgIHRoaXMuY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gIHZhcmlhYmxlVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlWYXJpYWJsZVR5cGUoKSB7XG4gICAgbGV0IHZhcmlhYmxlVHlwZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBsZXQgdHlwZTtcblxuICAgIHR5cGUgPSB0aGlzLnZhcmlhYmxlLmdldFR5cGUoKTtcblxuICAgIGNvbnN0IHR5cGVOYW1lID0gdHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgdHlwZVN0cmluZyA9IHR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLmNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgY29uc3QgaW5jbHVkZVN1cGVydHlwZXMgPSBmYWxzZSxcbiAgICAgICAgICBwcm92aXNpb25hbCA9IHR5cGUuaXNQcm92aXNpb25hbChpbmNsdWRlU3VwZXJ0eXBlcyk7XG5cbiAgICB0eXBlID0gdGhpcy5jb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICBjb25zdCB0eXBlUHJlc2VudCA9ICh0eXBlICE9PSBudWxsKVxuXG4gICAgaWYgKCF0eXBlUHJlc2VudCkge1xuICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgbm90IHByZXNlbnQuYCwgdGhpcy5ub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcHJvdmlzaW9uYWxNYXRjaGVzID0gdHlwZS5tYXRjaFByb3Zpc2lvbmFsKHByb3Zpc2lvbmFsKTtcblxuICAgICAgaWYgKCFwcm92aXNpb25hbE1hdGNoZXMpIHtcbiAgICAgICAgcHJvdmlzaW9uYWwgP1xuICAgICAgICAgIHRoaXMuY29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIHByZXNlbnQgYnV0IG5vdCBwcm92aXNpb25hbC5gLCB0aGlzLm5vZGUpIDpcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIHByZXNlbnQgYnV0IHByb3Zpc2lvbmFsLmAsIHRoaXMubm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnZhcmlhYmxlLnNldFR5cGUodHlwZSk7XG5cbiAgICAgICAgdmFyaWFibGVUeXBlVmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2YXJpYWJsZVR5cGVWZXJpZmllcykge1xuICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGVUeXBlVmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVmFyaWFibGVEZWNsYXJhdGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUodmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IFZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgICAgbm9kZSA9IHZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlLCAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYXJpYWJsZURlY2xhcmF0aW9uTm9kZSh2YXJpYWJsZURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgdmFyaWFibGVEZWNsYXJhdGlvbiA9IG5ldyBWYXJpYWJsZURlY2xhcmF0aW9uKGNvbnRleHQsIG5vZGUsIHN0cmluZywgdmFyaWFibGUpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlRGVjbGFyYXRpb247XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRvbUFzc2lnbmVkIiwiVmFyaWFibGVEZWNsYXJhdGlvbiIsImNvbnRleHQiLCJub2RlIiwic3RyaW5nIiwidmFyaWFibGUiLCJnZXRDb250ZXh0IiwiZ2V0Tm9kZSIsImdldFN0cmluZyIsImdldFZhcmlhYmxlIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJ2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nIiwidHJhY2UiLCJ2YXJpYWJsZVR5cGVWZXJpZmllcyIsInZlcmlmeVZhcmlhYmxlVHlwZSIsInZhcmlhYmxlVmVyaWZpZXMiLCJ2ZXJpZnlWYXJpYWJsZSIsImFkZFZhcmlhYmxlIiwiZGVidWciLCJ2YXJpYWJsZVN0cmluZyIsInZhcmlhYmxlSWRlbnRpZmllciIsImdldElkZW50aWZpZXIiLCJ2YXJpYWJsZVByZXNlbnQiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVJZGVudGlmaWVyIiwidmFyaWFibGVOYW1lIiwidHlwZSIsImdldFR5cGUiLCJ0eXBlTmFtZSIsImdldE5hbWUiLCJ0eXBlU3RyaW5nIiwiaW5jbHVkZVN1cGVydHlwZXMiLCJwcm92aXNpb25hbCIsImlzUHJvdmlzaW9uYWwiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJ0eXBlUHJlc2VudCIsInByb3Zpc2lvbmFsTWF0Y2hlcyIsIm1hdGNoUHJvdmlzaW9uYWwiLCJzZXRUeXBlIiwiZnJvbVZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwidmFyaWFibGVEZWNsYXJhdGlvbk5vZGUiLCJWYXJpYWJsZSIsImRvbSIsIm5vZGVBc1N0cmluZyIsInZhcmlhYmxlRGVjbGFyYXRpb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQUE7OzsyREFKZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUloQixXQUFlQSxJQUFBQSxnQkFBVyx3Q0FBQzthQUFNQyxvQkFDbkJDLE9BQU8sRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLFFBQVE7Z0NBRFpKO1FBRTdCLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTs7OztZQUdsQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixPQUFPO1lBQ3JCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixJQUFJO1lBQ2xCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixNQUFNO1lBQ3BCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixRQUFRO1lBQ3RCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLFdBQVc7Z0JBRWYsSUFBTUMsNEJBQTRCLElBQUksQ0FBQ0osU0FBUztnQkFFaEQsSUFBSSxDQUFDTixPQUFPLENBQUNXLEtBQUssQ0FBQyxBQUFDLGtCQUEyQyxPQUExQkQsMkJBQTBCLDhCQUE0QixJQUFJLENBQUNULElBQUk7Z0JBRXBHLElBQU1XLHVCQUF1QixJQUFJLENBQUNDLGtCQUFrQjtnQkFFcEQsSUFBSUQsc0JBQXNCO29CQUN4QixJQUFNRSxtQkFBbUIsSUFBSSxDQUFDQyxjQUFjO29CQUU1QyxJQUFJRCxrQkFBa0I7d0JBQ3BCLElBQUksQ0FBQ2QsT0FBTyxDQUFDZ0IsV0FBVyxDQUFDLElBQUksQ0FBQ2IsUUFBUTt3QkFFdENNLFdBQVc7b0JBQ2I7Z0JBQ0Y7Z0JBRUEsSUFBSUEsVUFBVTtvQkFDWixJQUFJLENBQUNULE9BQU8sQ0FBQ2lCLEtBQUssQ0FBQyxBQUFDLG9CQUE2QyxPQUExQlAsMkJBQTBCLDRCQUEwQixJQUFJLENBQUNULElBQUk7Z0JBQ3RHO2dCQUVBLE9BQU9RO1lBQ1Q7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBS0QsbUJBQW1CO2dCQUV4QixJQUFNSSxpQkFBaUIsSUFBSSxDQUFDZixRQUFRLENBQUNHLFNBQVM7Z0JBRTlDLElBQUksQ0FBQ04sT0FBTyxDQUFDVyxLQUFLLENBQUMsQUFBQyxrQkFBZ0MsT0FBZk8sZ0JBQWUsa0JBQWdCLElBQUksQ0FBQ2pCLElBQUk7Z0JBRTdFLElBQU1rQixxQkFBcUIsSUFBSSxDQUFDaEIsUUFBUSxDQUFDaUIsYUFBYSxJQUNoREMsa0JBQWtCLElBQUksQ0FBQ3JCLE9BQU8sQ0FBQ3NCLHFDQUFxQyxDQUFDSDtnQkFFM0UsSUFBSUUsaUJBQWlCO29CQUNuQixJQUFJLENBQUNyQixPQUFPLENBQUNpQixLQUFLLENBQUMsQUFBQyxRQUFvQixPQUFiTSxjQUFhLG1DQUFpQyxJQUFJLENBQUN0QixJQUFJO2dCQUNwRixPQUFPO29CQUNMYSxtQkFBbUI7Z0JBQ3JCO2dCQUVBLElBQUtBLGtCQUFrQjtvQkFDckIsSUFBSSxDQUFDZCxPQUFPLENBQUNpQixLQUFLLENBQUMsQUFBQyxvQkFBa0MsT0FBZkMsZ0JBQWUsZ0JBQWMsSUFBSSxDQUFDakIsSUFBSTtnQkFDL0U7Z0JBRUEsT0FBUWE7WUFDVjs7O1lBRUFELEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJRCx1QkFBdUI7Z0JBRTNCLElBQUlZO2dCQUVKQSxPQUFPLElBQUksQ0FBQ3JCLFFBQVEsQ0FBQ3NCLE9BQU87Z0JBRTVCLElBQU1DLFdBQVdGLEtBQUtHLE9BQU8sSUFDdkJDLGFBQWFKLEtBQUtsQixTQUFTO2dCQUVqQyxJQUFJLENBQUNOLE9BQU8sQ0FBQ1csS0FBSyxDQUFDLEFBQUMsa0JBQTRCLE9BQVhpQixZQUFXLGNBQVksSUFBSSxDQUFDM0IsSUFBSTtnQkFFckUsSUFBTTRCLG9CQUFvQixPQUNwQkMsY0FBY04sS0FBS08sYUFBYSxDQUFDRjtnQkFFdkNMLE9BQU8sSUFBSSxDQUFDeEIsT0FBTyxDQUFDZ0Msa0JBQWtCLENBQUNOO2dCQUV2QyxJQUFNTyxjQUFlVCxTQUFTO2dCQUU5QixJQUFJLENBQUNTLGFBQWE7b0JBQ2hCLElBQUksQ0FBQ2pDLE9BQU8sQ0FBQ2lCLEtBQUssQ0FBQyxBQUFDLFFBQWtCLE9BQVhXLFlBQVcsMkJBQXlCLElBQUksQ0FBQzNCLElBQUk7Z0JBQzFFLE9BQU87b0JBQ0wsSUFBTWlDLHFCQUFxQlYsS0FBS1csZ0JBQWdCLENBQUNMO29CQUVqRCxJQUFJLENBQUNJLG9CQUFvQjt3QkFDdkJKLGNBQ0UsSUFBSSxDQUFDOUIsT0FBTyxDQUFDaUIsS0FBSyxDQUFDLEFBQUMsUUFBa0IsT0FBWFcsWUFBVywyQ0FBeUMsSUFBSSxDQUFDM0IsSUFBSSxJQUN0RixJQUFJLENBQUNELE9BQU8sQ0FBQ2lCLEtBQUssQ0FBQyxBQUFDLFFBQWtCLE9BQVhXLFlBQVcsdUNBQXFDLElBQUksQ0FBQzNCLElBQUk7b0JBQzFGLE9BQU87d0JBQ0wsSUFBSSxDQUFDRSxRQUFRLENBQUNpQyxPQUFPLENBQUNaO3dCQUV0QlosdUJBQXVCO29CQUN6QjtnQkFDRjtnQkFFQSxJQUFJQSxzQkFBc0I7b0JBQ3hCLElBQUksQ0FBQ1osT0FBTyxDQUFDaUIsS0FBSyxDQUFDLEFBQUMsb0JBQThCLE9BQVhXLFlBQVcsWUFBVSxJQUFJLENBQUMzQixJQUFJO2dCQUN2RTtnQkFFQSxPQUFPVztZQUNUOzs7O1lBSU95QixLQUFBQTttQkFBUCxTQUFPQSw0QkFBNEJDLHVCQUF1QixFQUFFdEMsT0FBTztnQkFDakUsSUFBTSxBQUFFdUMsV0FBYUMsWUFBRyxDQUFoQkQsVUFDRnRDLE9BQU9xQyx5QkFDUHBDLFNBQVNGLFFBQVF5QyxZQUFZLENBQUN4QyxPQUM5QkUsV0FBV29DLFNBQVNGLDJCQUEyQixDQUFDQyx5QkFBeUJ0QyxVQUN6RTBDLHNCQUFzQixJQUFJM0Msb0JBQW9CQyxTQUFTQyxNQUFNQyxRQUFRQztnQkFFM0UsT0FBT3VDO1lBQ1Q7Ozs7S0FWQSx1Q0FBT0MsUUFBTyJ9