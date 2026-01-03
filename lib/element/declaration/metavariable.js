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
                context.trace("Verifying the '".concat(metavariableString, "' metavariable when declared..."), node);
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
                    context.debug("...verified the '".concat(metavariableString, "' metavariable when declared."), node);
                }
                return metavariableVerifies;
            }
        }
    ]);
    return MetavariableDeclaration;
}(_declaration.default), _define_property(_MetavariableDeclaration, "name", "MetavariableDeclaration"), _MetavariableDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL21ldGF2YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IERlY2xhcmF0aW9uIGZyb20gXCIuLi9kZWNsYXJhdGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIE1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIGV4dGVuZHMgRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIG1ldGF2YXJpYWJsZSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLm1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGU7XG4gIH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHttZXRhdmFyaWFibGVEZWNsYXJhdGlvblN0cmluZ30nIG1ldGF2YXJpYWJsZSBkZWNsYXJhdGlvbi4uLmAsIG5vZGUpO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeU1ldGF2YXJpYWJsZSh0aGlzLm1ldGF2YXJpYWJsZSk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuYWRkTWV0YXZhcmlhYmxlKHRoaXMubWV0YXZhcmlhYmxlKTtcblxuICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nfScgbWV0YXZhcmlhYmxlIGRlY2xhcmF0aW9uLmAsIG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVR5cGUodHlwZSkge1xuICAgIGxldCB0eXBlVmVyaWZpZXM7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgIHR5cGVWZXJpZmllcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0eXBlLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVTdHJpbmd9JyB0eXBlLi4uYCwgbm9kZSk7XG5cbiAgICAgIGNvbnN0IG5vbWluYWxUeXBlTmFtZSA9IHR5cGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCksXG4gICAgICAgICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICAgIGlmICghdHlwZVByZXNlbnQpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIG5vdCBwcmVzZW50LmAsIG5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVWZXJpZmllcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuYCwgbm9kZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gbWV0YXZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2hlbiBkZWNsYXJlZC4uLmAsIG5vZGUpO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZS5nZXROb2RlKCksIC8vL1xuICAgICAgICAgIHRlcm1Ob2RlID0gbWV0YXZhcmlhYmxlTm9kZS5nZXRUZXJtTm9kZSgpO1xuXG4gICAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBBIHRlcm0gd2FzIGZvdW5kIGluIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2hlbiBhIHR5cGUgc2hvdWxkIGhhdmUgYmVlbiBwcmVzZW50LmAsIG5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlLmdldE5hbWUoKSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke21ldGF2YXJpYWJsZU5hbWV9JyBtZXRhdmFyaWFibGUgaXMgYWxyZWFkeSBwcmVzZW50LmAsIG5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdHlwZSA9IG1ldGF2YXJpYWJsZS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgIHR5cGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5VHlwZSh0eXBlKTtcblxuICAgICAgICBtZXRhdmFyaWFibGVWZXJpZmllcyA9IHR5cGVWZXJpZmllczsgIC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRhdmFyaWFibGVWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB3aGVuIGRlY2xhcmVkLmAsIG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVWZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJNZXRhdmFyaWFibGVEZWNsYXJhdGlvblwiO1xufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiTWV0YXZhcmlhYmxlRGVjbGFyYXRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsIm1ldGF2YXJpYWJsZSIsImdldE1ldGF2YXJpYWJsZSIsInZlcmlmeSIsInZlcmlmaWVzIiwiZ2V0Tm9kZSIsImdldENvbnRleHQiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwibWV0YXZhcmlhYmxlVmVyaWZpZXMiLCJ2ZXJpZnlNZXRhdmFyaWFibGUiLCJhZGRNZXRhdmFyaWFibGUiLCJkZWJ1ZyIsInZlcmlmeVR5cGUiLCJ0eXBlIiwidHlwZVZlcmlmaWVzIiwidHlwZVN0cmluZyIsIm5vbWluYWxUeXBlTmFtZSIsImdldE5vbWluYWxUeXBlTmFtZSIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwibWV0YXZhcmlhYmxlTm9kZSIsInRlcm1Ob2RlIiwiZ2V0VGVybU5vZGUiLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TmFtZSIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJnZXRUeXBlIiwiRGVjbGFyYXRpb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQUE7OztrRUFKd0I7d0JBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV2QixXQUFlQSxJQUFBQSxnQkFBTSw0Q0FBQzs7YUFBTUMsd0JBQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFlBQVk7Z0NBRHJCSjs7Z0JBRXhCLGtCQUZ3QkE7WUFFbEJDO1lBQVNDO1lBQVFDOztRQUV2QixNQUFLQyxZQUFZLEdBQUdBOzs7OztZQUd0QkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxZQUFZO1lBQzFCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDO2dCQUVKLElBQU1KLE9BQU8sSUFBSSxDQUFDSyxPQUFPLElBQ25CUCxVQUFVLElBQUksQ0FBQ1EsVUFBVSxJQUN6QkMsZ0NBQWdDLElBQUksQ0FBQ0MsU0FBUyxJQUFJLEdBQUc7Z0JBRTNEVixRQUFRVyxLQUFLLENBQUMsQUFBQyxrQkFBK0MsT0FBOUJGLCtCQUE4QixrQ0FBZ0NQO2dCQUU5RixJQUFNVSx1QkFBdUIsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUNWLFlBQVk7Z0JBRXRFLElBQUlTLHNCQUFzQjtvQkFDeEJaLFFBQVFjLGVBQWUsQ0FBQyxJQUFJLENBQUNYLFlBQVk7b0JBRXpDRyxXQUFXO2dCQUNiO2dCQUVBLElBQUlBLFVBQVU7b0JBQ1pOLFFBQVFlLEtBQUssQ0FBQyxBQUFDLG9CQUFpRCxPQUE5Qk4sK0JBQThCLGdDQUE4QlA7Z0JBQ2hHO2dCQUVBLE9BQU9JO1lBQ1Q7OztZQUVBVSxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV0MsSUFBSTtnQkFDYixJQUFJQztnQkFFSixJQUFNaEIsT0FBTyxJQUFJLENBQUNLLE9BQU8sSUFDbkJQLFVBQVUsSUFBSSxDQUFDUSxVQUFVO2dCQUUvQixJQUFJUyxTQUFTLE1BQU07b0JBQ2pCQyxlQUFlO2dCQUNqQixPQUFPO29CQUNMLElBQU1DLGFBQWFGLEtBQUtQLFNBQVM7b0JBRWpDVixRQUFRVyxLQUFLLENBQUMsQUFBQyxrQkFBNEIsT0FBWFEsWUFBVyxjQUFZakI7b0JBRXZELElBQU1rQixrQkFBa0JILEtBQUtJLGtCQUFrQixJQUN6Q0MsY0FBY3RCLFFBQVF1Qiw4QkFBOEIsQ0FBQ0g7b0JBRTNELElBQUksQ0FBQ0UsYUFBYTt3QkFDaEJ0QixRQUFRZSxLQUFLLENBQUMsQUFBQyxRQUFrQixPQUFYSSxZQUFXLDJCQUF5QmpCO29CQUM1RCxPQUFPO3dCQUNMZ0IsZUFBZTtvQkFDakI7b0JBRUEsSUFBSUEsY0FBYzt3QkFDaEJsQixRQUFRZSxLQUFLLENBQUMsQUFBQyxvQkFBOEIsT0FBWEksWUFBVyxZQUFVakI7b0JBQ3pEO2dCQUNGO2dCQUVBLE9BQU9nQjtZQUNUOzs7WUFFQUwsS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQlYsWUFBWTtnQkFDN0IsSUFBSVMsdUJBQXVCO2dCQUUzQixJQUFNVixPQUFPLElBQUksQ0FBQ0ssT0FBTyxJQUNuQlAsVUFBVSxJQUFJLENBQUNRLFVBQVUsSUFDekJnQixxQkFBcUJyQixhQUFhTyxTQUFTO2dCQUVqRFYsUUFBUVcsS0FBSyxDQUFDLEFBQUMsa0JBQW9DLE9BQW5CYSxvQkFBbUIsb0NBQWtDdEI7Z0JBRXJGLElBQU11QixtQkFBbUJ0QixhQUFhSSxPQUFPLElBQ3ZDbUIsV0FBV0QsaUJBQWlCRSxXQUFXO2dCQUU3QyxJQUFJRCxhQUFhLE1BQU07b0JBQ3JCMUIsUUFBUWUsS0FBSyxDQUFDLEFBQUMsNEJBQThDLE9BQW5CUyxvQkFBbUIseURBQXVEdEI7Z0JBQ3RILE9BQU87b0JBQ0wsSUFBTTBCLG1CQUFtQnpCLGFBQWEwQixPQUFPLElBQ3ZDQyxzQkFBc0I5QixRQUFRK0IsdUNBQXVDLENBQUNIO29CQUU1RSxJQUFJRSxxQkFBcUI7d0JBQ3ZCOUIsUUFBUWUsS0FBSyxDQUFDLEFBQUMsUUFBd0IsT0FBakJhLGtCQUFpQix1Q0FBcUMxQjtvQkFDOUUsT0FBTzt3QkFDTCxJQUFNZSxPQUFPZCxhQUFhNkIsT0FBTyxJQUMzQmQsZUFBZSxJQUFJLENBQUNGLFVBQVUsQ0FBQ0M7d0JBRXJDTCx1QkFBdUJNLGNBQWUsR0FBRztvQkFDM0M7Z0JBQ0Y7Z0JBRUEsSUFBSU4sc0JBQXNCO29CQUN4QlosUUFBUWUsS0FBSyxDQUFDLEFBQUMsb0JBQXNDLE9BQW5CUyxvQkFBbUIsa0NBQWdDdEI7Z0JBQ3ZGO2dCQUVBLE9BQU9VO1lBQ1Q7Ozs7RUFsRzBEcUIsb0JBQVcsR0FvR3JFLDJDQUFPQyxRQUFPIn0=