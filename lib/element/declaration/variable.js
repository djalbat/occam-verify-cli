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
var _declaration = /*#__PURE__*/ _interop_require_default(require("../declaration"));
var _elements = require("../../elements");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var _VariableDeclaration;
var _default = (0, _elements.define)((_VariableDeclaration = /*#__PURE__*/ function(Declaration) {
    _inherits(VariableDeclaration, Declaration);
    function VariableDeclaration(context, string, node, variable) {
        _class_call_check(this, VariableDeclaration);
        var _this;
        _this = _call_super(this, VariableDeclaration, [
            context,
            string,
            node
        ]);
        _this.variable = variable;
        return _this;
    }
    _create_class(VariableDeclaration, [
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
                var node = this.getNode(), context = this.getContext(), variableDeclarationString = this.getString(); ///
                context.trace("Verifying the '".concat(variableDeclarationString, "' variable declaration..."), node);
                var variableTypeVerifies = this.verifyVariableType();
                if (variableTypeVerifies) {
                    var variableVerifies = this.verifyVariable();
                    if (variableVerifies) {
                        context.addVariable(this.variable);
                        verifies = true;
                    }
                }
                if (verifies) {
                    context.debug("...verified the '".concat(variableDeclarationString, "' variable declaration."), node);
                }
                return verifies;
            }
        },
        {
            key: "verifyVariable",
            value: function verifyVariable() {
                var variableVerifies = false;
                var node = this.getNode(), context = this.getContext(), variableString = this.variable.getString();
                context.trace("Verifying the '".concat(variableString, "' variable..."), node);
                var variableIdentifier = this.variable.getIdentifier(), variablePresent = context.isVariablePresentByVariableIdentifier(variableIdentifier);
                if (variablePresent) {
                    context.debug("The '".concat(variableName, "' variable is already present."), node);
                } else {
                    variableVerifies = true;
                }
                if (variableVerifies) {
                    context.debug("...verified the '".concat(variableString, "' variable."), node);
                }
                return variableVerifies;
            }
        },
        {
            key: "verifyVariableType",
            value: function verifyVariableType() {
                var variableTypeVerifies = false;
                var node = this.getNode(), context = this.getContext();
                var type;
                type = this.variable.getType();
                var typeString = type.getString();
                context.trace("Verifying the '".concat(typeString, "' type..."), node);
                var includeSupertypes = false, provisional = type.isProvisional(includeSupertypes), nominalTypeName = type.getNominalTypeName();
                type = context.findTypeByNominalTypeName(nominalTypeName);
                var typePresent = type !== null;
                if (!typePresent) {
                    context.debug("The '".concat(typeString, "' type is not present."), node);
                } else {
                    var typeComparesToProvisional = type.compareProvisional(provisional);
                    if (!typeComparesToProvisional) {
                        provisional ? context.debug("The '".concat(typeString, "' type is present but not provisional."), node) : context.debug("The '".concat(typeString, "' type is present but provisional."), node);
                    } else {
                        this.variable.setType(type);
                        variableTypeVerifies = true;
                    }
                }
                if (variableTypeVerifies) {
                    context.debug("...verified the '".concat(typeString, "' type."), node);
                }
                return variableTypeVerifies;
            }
        }
    ]);
    return VariableDeclaration;
}(_declaration.default), _define_property(_VariableDeclaration, "name", "VariableDeclaration"), _VariableDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL3ZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVjbGFyYXRpb24gZnJvbSBcIi4uL2RlY2xhcmF0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVmFyaWFibGVEZWNsYXJhdGlvbiBleHRlbmRzIERlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB2YXJpYWJsZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gIH1cblxuICBnZXRWYXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZTtcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdmFyaWFibGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nfScgdmFyaWFibGUgZGVjbGFyYXRpb24uLi5gLCBub2RlKTtcblxuICAgIGNvbnN0IHZhcmlhYmxlVHlwZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlWYXJpYWJsZVR5cGUoKTtcblxuICAgIGlmICh2YXJpYWJsZVR5cGVWZXJpZmllcykge1xuICAgICAgY29uc3QgdmFyaWFibGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5VmFyaWFibGUoKTtcblxuICAgICAgaWYgKHZhcmlhYmxlVmVyaWZpZXMpIHtcbiAgICAgICAgY29udGV4dC5hZGRWYXJpYWJsZSh0aGlzLnZhcmlhYmxlKTtcblxuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dmFyaWFibGVEZWNsYXJhdGlvblN0cmluZ30nIHZhcmlhYmxlIGRlY2xhcmF0aW9uLmAsIG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVZhcmlhYmxlKCkge1xuICAgIGxldCAgdmFyaWFibGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHRoaXMudmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuLi5gLCBub2RlKTtcblxuICAgIGNvbnN0IHZhcmlhYmxlSWRlbnRpZmllciA9IHRoaXMudmFyaWFibGUuZ2V0SWRlbnRpZmllcigpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgaWYgKHZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3ZhcmlhYmxlTmFtZX0nIHZhcmlhYmxlIGlzIGFscmVhZHkgcHJlc2VudC5gLCBub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyaWFibGVWZXJpZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCB2YXJpYWJsZVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS5gLCBub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFyaWFibGVWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVZhcmlhYmxlVHlwZSgpIHtcbiAgICBsZXQgdmFyaWFibGVUeXBlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBsZXQgdHlwZTtcblxuICAgIHR5cGUgPSB0aGlzLnZhcmlhYmxlLmdldFR5cGUoKTtcblxuICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0eXBlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS4uLmAsIG5vZGUpO1xuXG4gICAgY29uc3QgaW5jbHVkZVN1cGVydHlwZXMgPSBmYWxzZSxcbiAgICAgICAgICBwcm92aXNpb25hbCA9IHR5cGUuaXNQcm92aXNpb25hbChpbmNsdWRlU3VwZXJ0eXBlcyksXG4gICAgICAgICAgbm9taW5hbFR5cGVOYW1lID0gdHlwZS5nZXROb21pbmFsVHlwZU5hbWUoKTtcblxuICAgIHR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgIGNvbnN0IHR5cGVQcmVzZW50ID0gKHR5cGUgIT09IG51bGwpXG5cbiAgICBpZiAoIXR5cGVQcmVzZW50KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgbm90IHByZXNlbnQuYCwgbm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVDb21wYXJlc1RvUHJvdmlzaW9uYWwgPSB0eXBlLmNvbXBhcmVQcm92aXNpb25hbChwcm92aXNpb25hbCk7XG5cbiAgICAgIGlmICghdHlwZUNvbXBhcmVzVG9Qcm92aXNpb25hbCkge1xuICAgICAgICBwcm92aXNpb25hbCA/XG4gICAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIHByZXNlbnQgYnV0IG5vdCBwcm92aXNpb25hbC5gLCBub2RlKSA6XG4gICAgICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgcHJlc2VudCBidXQgcHJvdmlzaW9uYWwuYCwgbm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnZhcmlhYmxlLnNldFR5cGUodHlwZSk7XG5cbiAgICAgICAgdmFyaWFibGVUeXBlVmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2YXJpYWJsZVR5cGVWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVTdHJpbmd9JyB0eXBlLmAsIG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZVR5cGVWZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJWYXJpYWJsZURlY2xhcmF0aW9uXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJWYXJpYWJsZURlY2xhcmF0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ2YXJpYWJsZSIsImdldFZhcmlhYmxlIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJnZXROb2RlIiwiZ2V0Q29udGV4dCIsInZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhcmlhYmxlVHlwZVZlcmlmaWVzIiwidmVyaWZ5VmFyaWFibGVUeXBlIiwidmFyaWFibGVWZXJpZmllcyIsInZlcmlmeVZhcmlhYmxlIiwiYWRkVmFyaWFibGUiLCJkZWJ1ZyIsInZhcmlhYmxlU3RyaW5nIiwidmFyaWFibGVJZGVudGlmaWVyIiwiZ2V0SWRlbnRpZmllciIsInZhcmlhYmxlUHJlc2VudCIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZUlkZW50aWZpZXIiLCJ2YXJpYWJsZU5hbWUiLCJ0eXBlIiwiZ2V0VHlwZSIsInR5cGVTdHJpbmciLCJpbmNsdWRlU3VwZXJ0eXBlcyIsInByb3Zpc2lvbmFsIiwiaXNQcm92aXNpb25hbCIsIm5vbWluYWxUeXBlTmFtZSIsImdldE5vbWluYWxUeXBlTmFtZSIsImZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUiLCJ0eXBlUHJlc2VudCIsInR5cGVDb21wYXJlc1RvUHJvdmlzaW9uYWwiLCJjb21wYXJlUHJvdmlzaW9uYWwiLCJzZXRUeXBlIiwiRGVjbGFyYXRpb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQUE7OztrRUFKd0I7d0JBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV2QixXQUFlQSxJQUFBQSxnQkFBTSx3Q0FBQzs7YUFBTUMsb0JBQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFFBQVE7Z0NBRGpCSjs7Z0JBRXhCLGtCQUZ3QkE7WUFFbEJDO1lBQVNDO1lBQVFDOztRQUV2QixNQUFLQyxRQUFRLEdBQUdBOzs7OztZQUdsQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxRQUFRO1lBQ3RCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLFdBQVc7Z0JBRWYsSUFBTUosT0FBTyxJQUFJLENBQUNLLE9BQU8sSUFDbkJQLFVBQVUsSUFBSSxDQUFDUSxVQUFVLElBQ3pCQyw0QkFBNEIsSUFBSSxDQUFDQyxTQUFTLElBQUksR0FBRztnQkFFdkRWLFFBQVFXLEtBQUssQ0FBQyxBQUFDLGtCQUEyQyxPQUExQkYsMkJBQTBCLDhCQUE0QlA7Z0JBRXRGLElBQU1VLHVCQUF1QixJQUFJLENBQUNDLGtCQUFrQjtnQkFFcEQs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