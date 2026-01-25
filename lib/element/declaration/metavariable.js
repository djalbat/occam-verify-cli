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
var _occamfurtle = require("occam-furtle");
var _declaration = /*#__PURE__*/ _interop_require_default(require("../declaration"));
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
var define = _occamfurtle.elements.define;
var _default = define((_MetavariableDeclaration = /*#__PURE__*/ function(Declaration) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL21ldGF2YXJpYWJsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZWxlbWVudHMgfSBmcm9tIFwib2NjYW0tZnVydGxlXCI7XG5cbmltcG9ydCBEZWNsYXJhdGlvbiBmcm9tIFwiLi4vZGVjbGFyYXRpb25cIjtcblxuY29uc3QgeyBkZWZpbmUgfSA9IGVsZW1lbnRzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgTWV0YXZhcmlhYmxlRGVjbGFyYXRpb24gZXh0ZW5kcyBEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbWV0YXZhcmlhYmxlKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMubWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXM7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZURlY2xhcmF0aW9uU3RyaW5nfScgbWV0YXZhcmlhYmxlIGRlY2xhcmF0aW9uLi4uYCwgbm9kZSk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5TWV0YXZhcmlhYmxlKHRoaXMubWV0YXZhcmlhYmxlKTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVWZXJpZmllcykge1xuICAgICAgY29udGV4dC5hZGRNZXRhdmFyaWFibGUodGhpcy5tZXRhdmFyaWFibGUpO1xuXG4gICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bWV0YXZhcmlhYmxlRGVjbGFyYXRpb25TdHJpbmd9JyBtZXRhdmFyaWFibGUgZGVjbGFyYXRpb24uYCwgbm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5VHlwZSh0eXBlKSB7XG4gICAgbGV0IHR5cGVWZXJpZmllcztcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgdHlwZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZVN0cmluZyA9IHR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuLi5gLCBub2RlKTtcblxuICAgICAgY29uc3Qgbm9taW5hbFR5cGVOYW1lID0gdHlwZS5nZXROb21pbmFsVHlwZU5hbWUoKSxcbiAgICAgICAgICAgIHR5cGVQcmVzZW50ID0gY29udGV4dC5pc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgICAgaWYgKCF0eXBlUHJlc2VudCkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgbm90IHByZXNlbnQuYCwgbm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlVmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZVZlcmlmaWVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS5gLCBub2RlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkge1xuICAgIGxldCBtZXRhdmFyaWFibGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSBtZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS4uLmAsIG5vZGUpO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZS5nZXROb2RlKCksIC8vL1xuICAgICAgICAgIHRlcm1Ob2RlID0gbWV0YXZhcmlhYmxlTm9kZS5nZXRUZXJtTm9kZSgpO1xuXG4gICAgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBBIHRlcm0gd2FzIGZvdW5kIGluIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgd2hlbiBhIHR5cGUgc2hvdWxkIGhhdmUgYmVlbiBwcmVzZW50LmAsIG5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlLmdldE5hbWUoKSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke21ldGF2YXJpYWJsZU5hbWV9JyBtZXRhdmFyaWFibGUgaXMgYWxyZWFkeSBwcmVzZW50LmAsIG5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdHlwZSA9IG1ldGF2YXJpYWJsZS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgIHR5cGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5VHlwZSh0eXBlKTtcblxuICAgICAgICBtZXRhdmFyaWFibGVWZXJpZmllcyA9IHR5cGVWZXJpZmllczsgIC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRhdmFyaWFibGVWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZS5gLCBub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlVmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiTWV0YXZhcmlhYmxlRGVjbGFyYXRpb25cIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsImVsZW1lbnRzIiwiTWV0YXZhcmlhYmxlRGVjbGFyYXRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsIm1ldGF2YXJpYWJsZSIsImdldE1ldGF2YXJpYWJsZSIsInZlcmlmeSIsInZlcmlmaWVzIiwiZ2V0Tm9kZSIsImdldENvbnRleHQiLCJtZXRhdmFyaWFibGVEZWNsYXJhdGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwibWV0YXZhcmlhYmxlVmVyaWZpZXMiLCJ2ZXJpZnlNZXRhdmFyaWFibGUiLCJhZGRNZXRhdmFyaWFibGUiLCJkZWJ1ZyIsInZlcmlmeVR5cGUiLCJ0eXBlIiwidHlwZVZlcmlmaWVzIiwidHlwZVN0cmluZyIsIm5vbWluYWxUeXBlTmFtZSIsImdldE5vbWluYWxUeXBlTmFtZSIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwibWV0YXZhcmlhYmxlTm9kZSIsInRlcm1Ob2RlIiwiZ2V0VGVybU5vZGUiLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TmFtZSIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJnZXRUeXBlIiwiRGVjbGFyYXRpb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQUE7OzsyQkFOeUI7a0VBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV4QixJQUFNLEFBQUVBLFNBQVdDLHFCQUFRLENBQW5CRDtJQUVSLFdBQWVBLGlEQUFPOzthQUFNRSx3QkFDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsWUFBWTtnQ0FEckJKOztnQkFFeEIsa0JBRndCQTtZQUVsQkM7WUFBU0M7WUFBUUM7O1FBRXZCLE1BQUtDLFlBQVksR0FBR0E7Ozs7O1lBR3RCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELFlBQVk7WUFDMUI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUM7Z0JBRUosSUFBTUosT0FBTyxJQUFJLENBQUNLLE9BQU8sSUFDbkJQLFVBQVUsSUFBSSxDQUFDUSxVQUFVLElBQ3pCQyxnQ0FBZ0MsSUFBSSxDQUFDQyxTQUFTLElBQUksR0FBRztnQkFFM0RWLFFBQVFXLEtBQUssQ0FBQyxBQUFDLGtCQUErQyxPQUE5QkYsK0JBQThCLGtDQUFnQ1A7Z0JBRTlGLElBQU1VLHVCQUF1QixJQUFJLENBQUNDLGtCQUFrQixDQUFDLElBQUksQ0FBQ1YsWUFBWTtnQkFFdEUsSUFBSVMsc0JBQXNCO29CQUN4QlosUUFBUWMsZUFBZSxDQUFDLElBQUksQ0FBQ1gsWUFBWTtvQkFFekNHLFdBQVc7Z0JBQ2I7Z0JBRUEsSUFBSUEsVUFBVTtvQkFDWk4sUUFBUWUsS0FBSyxDQUFDLEFBQUMsb0JBQWlELE9BQTlCTiwrQkFBOEIsZ0NBQThCUDtnQkFDaEc7Z0JBRUEsT0FBT0k7WUFDVDs7O1lBRUFVLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXQyxJQUFJO2dCQUNiLElBQUlDO2dCQUVKLElBQU1oQixPQUFPLElBQUksQ0FBQ0ssT0FBTyxJQUNuQlAsVUFBVSxJQUFJLENBQUNRLFVBQVU7Z0JBRS9CLElBQUlTLFNBQVMsTUFBTTtvQkFDakJDLGVBQWU7Z0JBQ2pCLE9BQU87b0JBQ0wsSUFBTUMsYUFBYUYsS0FBS1AsU0FBUztvQkFFakNWLFFBQVFXLEtBQUssQ0FBQyxBQUFDLGtCQUE0QixPQUFYUSxZQUFXLGNBQVlqQjtvQkFFdkQsSUFBTWtCLGtCQUFrQkgsS0FBS0ksa0JBQWtCLElBQ3pDQyxjQUFjdEIsUUFBUXVCLDhCQUE4QixDQUFDSDtvQkFFM0QsSUFBSSxDQUFDRSxhQUFhO3dCQUNoQnRCLFFBQVFlLEtBQUssQ0FBQyxBQUFDLFFBQWtCLE9BQVhJLFlBQVcsMkJBQXlCakI7b0JBQzVELE9BQU87d0JBQ0xnQixlQUFlO29CQUNqQjtvQkFFQSxJQUFJQSxjQUFjO3dCQUNoQmxCLFFBQVFlLEtBQUssQ0FBQyxBQUFDLG9CQUE4QixPQUFYSSxZQUFXLFlBQVVqQjtvQkFDekQ7Z0JBQ0Y7Z0JBRUEsT0FBT2dCO1lBQ1Q7OztZQUVBTCxLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CVixZQUFZO2dCQUM3QixJQUFJUyx1QkFBdUI7Z0JBRTNCLElBQU1WLE9BQU8sSUFBSSxDQUFDSyxPQUFPLElBQ25CUCxVQUFVLElBQUksQ0FBQ1EsVUFBVSxJQUN6QmdCLHFCQUFxQnJCLGFBQWFPLFNBQVM7Z0JBRWpEVixRQUFRVyxLQUFLLENBQUMsQUFBQyxrQkFBb0MsT0FBbkJhLG9CQUFtQixzQkFBb0J0QjtnQkFFdkUsSUFBTXVCLG1CQUFtQnRCLGFBQWFJLE9BQU8sSUFDdkNtQixXQUFXRCxpQkFBaUJFLFdBQVc7Z0JBRTdDLElBQUlELGFBQWEsTUFBTTtvQkFDckIxQixRQUFRZSxLQUFLLENBQUMsQUFBQyw0QkFBOEMsT0FBbkJTLG9CQUFtQix5REFBdUR0QjtnQkFDdEgsT0FBTztvQkFDTCxJQUFNMEIsbUJBQW1CekIsYUFBYTBCLE9BQU8sSUFDdkNDLHNCQUFzQjlCLFFBQVErQix1Q0FBdUMsQ0FBQ0g7b0JBRTVFLElBQUlFLHFCQUFxQjt3QkFDdkI5QixRQUFRZSxLQUFLLENBQUMsQUFBQyxRQUF3QixPQUFqQmEsa0JBQWlCLHVDQUFxQzFCO29CQUM5RSxPQUFPO3dCQUNMLElBQU1lLE9BQU9kLGFBQWE2QixPQUFPLElBQzNCZCxlQUFlLElBQUksQ0FBQ0YsVUFBVSxDQUFDQzt3QkFFckNMLHVCQUF1Qk0sY0FBZSxHQUFHO29CQUMzQztnQkFDRjtnQkFFQSxJQUFJTixzQkFBc0I7b0JBQ3hCWixRQUFRZSxLQUFLLENBQUMsQUFBQyxvQkFBc0MsT0FBbkJTLG9CQUFtQixvQkFBa0J0QjtnQkFDekU7Z0JBRUEsT0FBT1U7WUFDVDs7OztFQWxHMERxQixvQkFBVyxHQW9HckUsMkNBQU9DLFFBQU8ifQ==