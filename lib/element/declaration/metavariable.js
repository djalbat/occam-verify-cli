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
var _MetavariableDeclaration;
var _default = (0, _elements.define)((_MetavariableDeclaration = /*#__PURE__*/ function(Declaration) {
    _inherits(MetavariableDeclaration, Declaration);
    function MetavariableDeclaration(context, string, node, metavariable) {
        _class_call_check(this, MetavariableDeclaration);
        var _this;
        _this = _call_super(this, MetavariableDeclaration, [
            context,
            string,
            node
        ]);
        _this.metavariable = metavariable;
        return _this;
    }
    _create_class(MetavariableDeclaration, [
        {
            key: "getMetavariable",
            value: function getMetavariable() {
                return this.metavariable;
            }
        },
        {
            key: "verify",
            value: function verify() {
                var verifies;
                var node = this.getNode(), context = this.getContext(), metavariableDeclarationString = this.getString(); ///
                context.trace("Verifying the '".concat(metavariableDeclarationString, "' metavariable declaration..."), node);
                var metavariableVerifies = this.verifyMetavariable(this.metavariable);
                if (metavariableVerifies) {
                    context.addMetavariable(this.metavariable);
                    verifies = true;
                }
                if (verifies) {
                    context.debug("...verified the '".concat(metavariableDeclarationString, "' metavariable declaration."), node);
                }
                return verifies;
            }
        },
        {
            key: "verifyType",
            value: function verifyType(type) {
                var typeVerifies;
                var node = this.getNode(), context = this.getContext();
                if (type === null) {
                    typeVerifies = true;
                } else {
                    var typeString = type.getString();
                    context.trace("Verifying the '".concat(typeString, "' type..."), node);
                    var nominalTypeName = type.getNominalTypeName(), typePresent = context.isTypePresentByNominalTypeName(nominalTypeName);
                    if (!typePresent) {
                        context.debug("The '".concat(typeString, "' type is not present."), node);
                    } else {
                        typeVerifies = true;
                    }
                    if (typeVerifies) {
                        context.debug("...verified the '".concat(typeString, "' type."), node);
                    }
                }
                return typeVerifies;
            }
        },
        {
            key: "verifyMetavariable",
            value: function verifyMetavariable(metavariable) {
                var metavariableVerifies = false;
                var node = this.getNode(), context = this.getContext(), metavariableString = metavariable.getString();
                context.trace("Verifying the '".concat(metavariableString, "' metavariable..."), node);
                var metavariableNode = metavariable.getNode(), termNode = metavariableNode.getTermNode();
                if (termNode !== null) {
                    context.debug("A term was found in the '".concat(metavariableString, "' metavariable when a type should have been present."), node);
                } else {
                    var metavariableName = metavariable.getName(), metavariablePresent = context.isMetavariablePresentByMetavariableName(metavariableName);
                    if (metavariablePresent) {
                        context.debug("The '".concat(metavariableName, "' metavariable is already present."), node);
                    } else {
                        var type = metavariable.getType(), typeVerifies = this.verifyType(type);
                        metavariableVerifies = typeVerifies; ///
                    }
                }
                if (metavariableVerifies) {
                    context.debug("...verified the '".concat(metavariableString, "' metavariable."), node);
                }
                return metavariableVerifies;
            }
        }
    ]);
    return MetavariableDeclaration;
}(_declaration.default), _define_property(_MetavariableDeclaration, "name", "MetavariableDeclaration"), _MetavariableDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL21ldGF2YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IERlY2xhcmF0aW9uIGZyb20gXCIuLi9kZWNsYXJhdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIE1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIGV4dGVuZHMgRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG1ldGF2YXJpYWJsZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGU7XG4gIH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHttZXRhdmFyaWFibGVEZWNsYXJhdGlvblN0cmluZ30nIG1ldGF2YXJpYWJsZSBkZWNsYXJhdGlvbi4uLmAsIG5vZGUpO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeU1ldGF2YXJpYWJsZSh0aGlzLm1ldGF2YXJpYWJsZSk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuYWRkTWV0YXZhcmlhYmxlKHRoaXMubWV0YXZhcmlhYmxlKTtcblxuICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nfScgbWV0YXZhcmlhYmxlIGRlY2xhcmF0aW9uLmAsIG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVR5cGUodHlwZSkge1xuICAgIGxldCB0eXBlVmVyaWZpZXM7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgIHR5cGVWZXJpZmllcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0eXBlLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVTdHJpbmd9JyB0eXBlLi4uYCwgbm9kZSk7XG5cbiAgICAgIGNvbnN0IG5vbWluYWxUeXBlTmFtZSA9IHR5cGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCksXG4gICAgICAgICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICAgIGlmICghdHlwZVByZXNlbnQpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIG5vdCBwcmVzZW50LmAsIG5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVWZXJpZmllcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuYCwgbm9kZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gbWV0YXZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuLi5gLCBub2RlKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGUuZ2V0Tm9kZSgpLCAvLy9cbiAgICAgICAgICB0ZXJtTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGUuZ2V0VGVybU5vZGUoKTtcblxuICAgIGlmICh0ZXJtTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgQSB0ZXJtIHdhcyBmb3VuZCBpbiB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHdoZW4gYSB0eXBlIHNob3VsZCBoYXZlIGJlZW4gcHJlc2VudC5gLCBub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gY29udGV4dC5pc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHttZXRhdmFyaWFibGVOYW1lfScgbWV0YXZhcmlhYmxlIGlzIGFscmVhZHkgcHJlc2VudC5gLCBub2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSBtZXRhdmFyaWFibGUuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICB0eXBlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVR5cGUodHlwZSk7XG5cbiAgICAgICAgbWV0YXZhcmlhYmxlVmVyaWZpZXMgPSB0eXBlVmVyaWZpZXM7ICAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUuYCwgbm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIk1ldGF2YXJpYWJsZURlY2xhcmF0aW9uXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJNZXRhdmFyaWFibGVEZWNsYXJhdGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibWV0YXZhcmlhYmxlIiwiZ2V0TWV0YXZhcmlhYmxlIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJnZXROb2RlIiwiZ2V0Q29udGV4dCIsIm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJtZXRhdmFyaWFibGVWZXJpZmllcyIsInZlcmlmeU1ldGF2YXJpYWJsZSIsImFkZE1ldGF2YXJpYWJsZSIsImRlYnVnIiwidmVyaWZ5VHlwZSIsInR5cGUiLCJ0eXBlVmVyaWZpZXMiLCJ0eXBlU3RyaW5nIiwibm9taW5hbFR5cGVOYW1lIiwiZ2V0Tm9taW5hbFR5cGVOYW1lIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUiLCJtZXRhdmFyaWFibGVTdHJpbmciLCJtZXRhdmFyaWFibGVOb2RlIiwidGVybU5vZGUiLCJnZXRUZXJtTm9kZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJnZXROYW1lIiwibWV0YXZhcmlhYmxlUHJlc2VudCIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZSIsImdldFR5cGUiLCJEZWNsYXJhdGlvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7O2tFQUp3Qjt3QkFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXZCLFdBQWVBLElBQUFBLGdCQUFNLDRDQUFDOzthQUFNQyx3QkFDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsWUFBWTtnQ0FEckJKOztnQkFFeEIsa0JBRndCQTtZQUVsQkM7WUFBU0M7WUFBUUM7O1FBRXZCLE1BQUtDLFlBQVksR0FBR0E7Ozs7O1lBR3RCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELFlBQVk7WUFDMUI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUM7Z0JBRUosSUFBTUosT0FBTyxJQUFJLENBQUNLLE9BQU8sSUFDbkJQLFVBQVUsSUFBSSxDQUFDUSxVQUFVLElBQ3pCQyxnQ0FBZ0MsSUFBSSxDQUFDQyxTQUFTLElBQUksR0FBRztnQkFFM0RWLFFBQVFXLEtBQUssQ0FBQyxBQUFDLGtCQUErQyxPQUE5QkYsK0JBQThCLGtDQUFnQ1A7Z0JBRTlGLElBQU1VLHVCQUF1QixJQUFJLENBQUNDLGtCQUFrQixDQUFDLElBQUksQ0FBQ1YsWUFBWTtnQkFFdEUsSUFBSVMsc0JBQXNCO29CQUN4QlosUUFBUWMsZUFBZSxDQUFDLElBQUksQ0FBQ1gsWUFBWTtvQkFFekNHLFdBQVc7Z0JBQ2I7Z0JBRUEsSUFBSUEsVUFBVTtvQkFDWk4sUUFBUWUsS0FBSyxDQUFDLEFBQUMsb0JBQWlELE9BQTlCTiwrQkFBOEIsZ0NBQThCUDtnQkFDaEc7Z0JBRUEsT0FBT0k7WUFDVDs7O1lBRUFVLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXQyxJQUFJO2dCQUNiLElBQUlDO2dCQUVKLElBQU1oQixPQUFPLElBQUksQ0FBQ0ssT0FBTyxJQUNuQlAsVUFBVSxJQUFJLENBQUNRLFVBQVU7Z0JBRS9CLElBQUlTLFNBQVMsTUFBTTtvQkFDakJDLGVBQWU7Z0JBQ2pCLE9BQU87b0JBQ0wsSUFBTUMsYUFBYUYsS0FBS1AsU0FBUztvQkFFakNWLFFBQVFXLEtBQUssQ0FBQyxBQUFDLGtCQUE0QixPQUFYUSxZQUFXLGNBQVlqQjtvQkFFdkQsSUFBTWtCLGtCQUFrQkgsS0FBS0ksa0JBQWtCLElBQ3pDQyxjQUFjdEIsUUFBUXVCLDhCQUE4QixDQUFDSDtvQkFFM0QsSUFBSSxDQUFDRSxhQUFhO3dCQUNoQnRCLFFBQVFlLEtBQUssQ0FBQyxBQUFDLFFBQWtCLE9BQVhJLFlBQVcsMkJBQXlCakI7b0JBQzVELE9BQU87d0JBQ0xnQixlQUFlO29CQUNqQjtvQkFFQSxJQUFJQSxjQUFjO3dCQUNoQmxCLFFBQVFlLEtBQUssQ0FBQyxBQUFDLG9CQUE4QixPQUFYSSxZQUFXLFlBQVVqQjtvQkFDekQ7Z0JBQ0Y7Z0JBRUEsT0FBT2dCO1lBQ1Q7OztZQUVBTCxLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CVixZQUFZO2dCQUM3QixJQUFJUyx1QkFBdUI7Z0JBRTNCLElBQU1WLE9BQU8sSUFBSSxDQUFDSyxPQUFPLElBQ25CUCxVQUFVLElBQUksQ0FBQ1EsVUFBVSxJQUN6QmdCLHFCQUFxQnJCLGFBQWFPLFNBQVM7Z0JBRWpEVixRQUFRVyxLQUFLLENBQUMsQUFBQyxrQkFBb0MsT0FBbkJhLG9CQUFtQixzQkFBb0J0QjtnQkFFdkUsSUFBTXVCLG1CQUFtQnRCLGFBQWFJLE9BQU8sSUFDdkNtQixXQUFXRCxpQkFBaUJFLFdBQVc7Z0JBRTdDLElBQUlELGFBQWEsTUFBTTtvQkFDckIxQixRQUFRZSxLQUFLLENBQUMsQUFBQyw0QkFBOEMsT0FBbkJTLG9CQUFtQix5REFBdUR0QjtnQkFDdEgsT0FBTztvQkFDTCxJQUFNMEIsbUJBQW1CekIsYUFBYTBCLE9BQU8sSUFDdkNDLHNCQUFzQjlCLFFBQVErQix1Q0FBdUMsQ0FBQ0g7b0JBRTVFLElBQUlFLHFCQUFxQjt3QkFDdkI5QixRQUFRZSxLQUFLLENBQUMsQUFBQyxRQUF3QixPQUFqQmEsa0JBQWlCLHVDQUFxQzFCO29CQUM5RSxPQUFPO3dCQUNMLElBQU1lLE9BQU9kLGFBQWE2QixPQUFPLElBQzNCZCxlQUFlLElBQUksQ0FBQ0YsVUFBVSxDQUFDQzt3QkFFckNMLHVCQUF1Qk0sY0FBZSxHQUFHO29CQUMzQztnQkFDRjtnQkFFQSxJQUFJTixzQkFBc0I7b0JBQ3hCWixRQUFRZSxLQUFLLENBQUMsQUFBQyxvQkFBc0MsT0FBbkJTLG9CQUFtQixvQkFBa0J0QjtnQkFDekU7Z0JBRUEsT0FBT1U7WUFDVDs7OztFQWxHMERxQixvQkFBVyxHQW9HckUsMkNBQU9DLFFBQU8ifQ==