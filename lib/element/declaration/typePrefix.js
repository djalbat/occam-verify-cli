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
var _TypePrefixDeclaration;
var _default = (0, _elements.define)((_TypePrefixDeclaration = /*#__PURE__*/ function(Declaration) {
    _inherits(TypePrefixDeclaration, Declaration);
    function TypePrefixDeclaration(context, string, node, typePrefix) {
        _class_call_check(this, TypePrefixDeclaration);
        var _this;
        _this = _call_super(this, TypePrefixDeclaration, [
            context,
            string,
            node
        ]);
        _this.typePrefix = typePrefix;
        return _this;
    }
    _create_class(TypePrefixDeclaration, [
        {
            key: "getTypePrefix",
            value: function getTypePrefix() {
                return this.typePrefix;
            }
        },
        {
            key: "verify",
            value: function verify() {
                var verifies = false;
                var node = this.getNode(), context = this.getContext(), typePrefixDeclarationString = this.getString(); ///
                context.trace("Verifying the '".concat(typePrefixDeclarationString, "' type prefix declaration..."), node);
                var includeRelease = true, includeDependencies = false, types = context.getTypes(includeRelease, includeDependencies), typesLength = types.length;
                if (typesLength > 0) {
                    context.debug("Unable to verify the '".concat(typePrefixDeclarationString, "' type prefix declaration because types have already been declared."), node);
                } else {
                    var typePrefixVerifies = this.verifyTypePrefix();
                    if (typePrefixVerifies) {
                        context.addTypePrefix(this.typePrefix);
                        verifies = true;
                    }
                }
                if (verifies) {
                    context.debug("...verified the '".concat(typePrefixDeclarationString, "' type prefix declaration."), node);
                }
                return verifies;
            }
        },
        {
            key: "verifyTypePrefix",
            value: function verifyTypePrefix() {
                var typePrefixVerifies = false;
                var node = this.getNode(), context = this.getContext(), typePrefixString = this.typePrefix.getString();
                context.trace("Verifying the '".concat(typePrefixString, "' type prefix..."), node);
                var typePrefix = context.getTypePrefix();
                if (typePrefix !== null) {
                    context.trace("The package already has a '".concat(typePrefixString, "' type prefix."), node);
                } else {
                    var typePrefixName = this.typePrefix.getName(), typePrefixPresent = context.isTypePrefixPresentByTypePrefixName(typePrefixName);
                    if (typePrefixPresent) {
                        context.trace("The '".concat(typePrefixString, "' type prefix is already present."), node);
                    } else {
                        var nominalTypeName = typePrefixName, typePresent = context.isTypePresentByNominalTypeName(nominalTypeName);
                        if (typePresent) {
                            context.trace("The '".concat(typePrefixString, "' type is already present."), node);
                        } else {
                            typePrefixVerifies = true;
                        }
                    }
                }
                if (typePrefixVerifies) {
                    context.debug("...verified the '".concat(typePrefixString, "' type prefix."), node);
                }
                return typePrefixVerifies;
            }
        }
    ]);
    return TypePrefixDeclaration;
}(_declaration.default), _define_property(_TypePrefixDeclaration, "name", "TypePrefixDeclaration"), _TypePrefixDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL3R5cGVQcmVmaXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEZWNsYXJhdGlvbiBmcm9tIFwiLi4vZGVjbGFyYXRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBUeXBlUHJlZml4RGVjbGFyYXRpb24gZXh0ZW5kcyBEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdHlwZVByZWZpeCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnR5cGVQcmVmaXggPSB0eXBlUHJlZml4O1xuICB9XG5cbiAgZ2V0VHlwZVByZWZpeCgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlUHJlZml4O1xuICB9XG5cbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0eXBlUHJlZml4RGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVQcmVmaXhEZWNsYXJhdGlvblN0cmluZ30nIHR5cGUgcHJlZml4IGRlY2xhcmF0aW9uLi4uYCwgbm9kZSk7XG5cbiAgICBjb25zdCBpbmNsdWRlUmVsZWFzZSA9IHRydWUsXG4gICAgICAgICAgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgIHR5cGVzID0gY29udGV4dC5nZXRUeXBlcyhpbmNsdWRlUmVsZWFzZSwgaW5jbHVkZURlcGVuZGVuY2llcyksXG4gICAgICAgICAgdHlwZXNMZW5ndGggPSB0eXBlcy5sZW5ndGg7XG5cbiAgICBpZiAodHlwZXNMZW5ndGggPiAwKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBVbmFibGUgdG8gdmVyaWZ5IHRoZSAnJHt0eXBlUHJlZml4RGVjbGFyYXRpb25TdHJpbmd9JyB0eXBlIHByZWZpeCBkZWNsYXJhdGlvbiBiZWNhdXNlIHR5cGVzIGhhdmUgYWxyZWFkeSBiZWVuIGRlY2xhcmVkLmAsIG5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlUHJlZml4VmVyaWZpZXMgPSB0aGlzLnZlcmlmeVR5cGVQcmVmaXgoKTtcblxuICAgICAgaWYgKHR5cGVQcmVmaXhWZXJpZmllcykge1xuICAgICAgICBjb250ZXh0LmFkZFR5cGVQcmVmaXgodGhpcy50eXBlUHJlZml4KTtcblxuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZVByZWZpeERlY2xhcmF0aW9uU3RyaW5nfScgdHlwZSBwcmVmaXggZGVjbGFyYXRpb24uYCwgbm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5VHlwZVByZWZpeCgpIHtcbiAgICBsZXQgdHlwZVByZWZpeFZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHR5cGVQcmVmaXhTdHJpbmcgPSB0aGlzLnR5cGVQcmVmaXguZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVQcmVmaXhTdHJpbmd9JyB0eXBlIHByZWZpeC4uLmAsIG5vZGUpO1xuXG4gICAgY29uc3QgdHlwZVByZWZpeCA9IGNvbnRleHQuZ2V0VHlwZVByZWZpeCgpO1xuXG4gICAgaWYgKHR5cGVQcmVmaXggIT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSBwYWNrYWdlIGFscmVhZHkgaGFzIGEgJyR7dHlwZVByZWZpeFN0cmluZ30nIHR5cGUgcHJlZml4LmAsIG5vZGUpO1xuICAgIH0gZWxzZSB7XG5cbiAgICAgIGNvbnN0IHR5cGVQcmVmaXhOYW1lID0gdGhpcy50eXBlUHJlZml4LmdldE5hbWUoKSxcbiAgICAgICAgICAgIHR5cGVQcmVmaXhQcmVzZW50ID0gY29udGV4dC5pc1R5cGVQcmVmaXhQcmVzZW50QnlUeXBlUHJlZml4TmFtZSh0eXBlUHJlZml4TmFtZSk7XG5cbiAgICAgIGlmICh0eXBlUHJlZml4UHJlc2VudCkge1xuICAgICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7dHlwZVByZWZpeFN0cmluZ30nIHR5cGUgcHJlZml4IGlzIGFscmVhZHkgcHJlc2VudC5gLCBub2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5vbWluYWxUeXBlTmFtZSA9IHR5cGVQcmVmaXhOYW1lLCAgLy8vXG4gICAgICAgICAgICAgIHR5cGVQcmVzZW50ID0gY29udGV4dC5pc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgICAgICBpZiAodHlwZVByZXNlbnQpIHtcbiAgICAgICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7dHlwZVByZWZpeFN0cmluZ30nIHR5cGUgaXMgYWxyZWFkeSBwcmVzZW50LmAsIG5vZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHR5cGVQcmVmaXhWZXJpZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZVByZWZpeFZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZVByZWZpeFN0cmluZ30nIHR5cGUgcHJlZml4LmAsIG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlUHJlZml4VmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVHlwZVByZWZpeERlY2xhcmF0aW9uXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJUeXBlUHJlZml4RGVjbGFyYXRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInR5cGVQcmVmaXgiLCJnZXRUeXBlUHJlZml4IiwidmVyaWZ5IiwidmVyaWZpZXMiLCJnZXROb2RlIiwiZ2V0Q29udGV4dCIsInR5cGVQcmVmaXhEZWNsYXJhdGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwiaW5jbHVkZVJlbGVhc2UiLCJpbmNsdWRlRGVwZW5kZW5jaWVzIiwidHlwZXMiLCJnZXRUeXBlcyIsInR5cGVzTGVuZ3RoIiwibGVuZ3RoIiwiZGVidWciLCJ0eXBlUHJlZml4VmVyaWZpZXMiLCJ2ZXJpZnlUeXBlUHJlZml4IiwiYWRkVHlwZVByZWZpeCIsInR5cGVQcmVmaXhTdHJpbmciLCJ0eXBlUHJlZml4TmFtZSIsImdldE5hbWUiLCJ0eXBlUHJlZml4UHJlc2VudCIsImlzVHlwZVByZWZpeFByZXNlbnRCeVR5cGVQcmVmaXhOYW1lIiwibm9taW5hbFR5cGVOYW1lIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUiLCJEZWNsYXJhdGlvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7O2tFQUp3Qjt3QkFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXZCLFdBQWVBLElBQUFBLGdCQUFNLDBDQUFDOzthQUFNQyxzQkFDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVTtnQ0FEbkJKOztnQkFFeEIsa0JBRndCQTtZQUVsQkM7WUFBU0M7WUFBUUM7O1FB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