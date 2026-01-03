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
var _SimpleTypeDeclaration;
var _default = (0, _elements.define)((_SimpleTypeDeclaration = /*#__PURE__*/ function(Declaration) {
    _inherits(SimpleTypeDeclaration, Declaration);
    function SimpleTypeDeclaration(context, string, node, type, prefixed) {
        _class_call_check(this, SimpleTypeDeclaration);
        var _this;
        _this = _call_super(this, SimpleTypeDeclaration, [
            context,
            string,
            node
        ]);
        _this.type = type;
        _this.prefixed = prefixed;
        return _this;
    }
    _create_class(SimpleTypeDeclaration, [
        {
            key: "getType",
            value: function getType() {
                return this.type;
            }
        },
        {
            key: "isPrefixed",
            value: function isPrefixed() {
                return this.prefixed;
            }
        },
        {
            key: "verify",
            value: function verify() {
                var verifies = false;
                var node = this.getNode(), context = this.getContext(), simpleTypeDeclarationString = this.getString(); ///
                context.trace("Verifying the '".concat(simpleTypeDeclarationString, "' simple type declaration..."), node);
                if (this.prefixed) {
                    var typeString = this.type.getString();
                    context.trace("The '".concat(typeString, "' type is prefixed."));
                } else {
                    var typeVerifies = this.verifyType();
                    if (typeVerifies) {
                        var superTypesVerify = this.verifySuperTypes();
                        if (superTypesVerify) {
                            var typePrefix = context.getTypePrefix();
                            if (typePrefix !== null) {
                                var typePrefixName = typePrefix.getName(), prefixName = typePrefixName; ///
                                this.type.setPrefixName(prefixName);
                            }
                            context.addType(this.type);
                            verifies = true;
                        }
                    }
                }
                if (verifies) {
                    context.debug("...verified the '".concat(simpleTypeDeclarationString, "' simple type declaration."), node);
                }
                return verifies;
            }
        },
        {
            key: "verifyType",
            value: function verifyType() {
                var typeVerifies = false;
                var node = this.getNode(), context = this.getContext(), typeString = this.type.getString();
                context.trace("Verifying the '".concat(typeString, "' simple type..."), node);
                var typeName = this.type.getName(), includeRelease = true, includeDependencies = false, typePresent = context.isTypePresentByTypeName(typeName, includeRelease, includeDependencies);
                if (typePresent) {
                    context.trace("The '".concat(typeString, "' type is already present."), node);
                } else {
                    var prefixedTypeName = typeName, typePresent1 = context.isTypePresentByPrefixedTypeName(prefixedTypeName);
                    if (typePresent1) {
                        context.trace("The '".concat(typeString, "' type is already present."), node);
                    } else {
                        typeVerifies = true;
                    }
                }
                if (typeVerifies) {
                    context.trace("...verified the '".concat(typeString, "' simple type."), node);
                }
                return typeVerifies;
            }
        },
        {
            key: "verifySuperType",
            value: function verifySuperType(superType) {
                var superTypeVerifies = false;
                var node = this.getNode(), context = this.getContext(), superTypeString = superType.getString();
                context.trace("Verifying the '".concat(superTypeString, "' super-type..."), node);
                var nominalTypeName = superType.getNominalTypeName(), typeName = nominalTypeName, typeNameMatches = this.type.matchTypeName(typeName);
                if (typeNameMatches) {
                    context.trace("The super-type's name matches the ".concat(typeName, "' simple type's name."), node);
                } else {
                    var oldSuperType = superType;
                    superType = context.findTypeByNominalTypeName(nominalTypeName);
                    var superTypePresent = superType !== null;
                    if (superTypePresent) {
                        var newSuperType = superType; ///
                        this.type.replaceSuperType(oldSuperType, newSuperType);
                        superTypeVerifies = true;
                    }
                }
                if (superTypeVerifies) {
                    context.debug("...verified the '".concat(superTypeString, "' super-type."), node);
                }
                return superTypeVerifies;
            }
        },
        {
            key: "verifySuperTypes",
            value: function verifySuperTypes() {
                var _this = this;
                var superTypesVerify;
                var node = this.getNode(), context = this.getContext(), typeString = this.type.getString();
                context.trace("Verifying the '".concat(typeString, "' simple type's super-types..."), node);
                var typeBasic = this.type.isBasic();
                if (typeBasic) {
                    superTypesVerify = true;
                    context.trace("The '".concat(typeString, "' simple type is basic."), node);
                } else {
                    var superTypes = this.type.getSuperTypes();
                    superTypesVerify = superTypes.every(function(superType) {
                        var superTypeVerifies = _this.verifySuperType(superType);
                        if (superTypeVerifies) {
                            return true;
                        }
                    });
                }
                if (superTypesVerify) {
                    context.debug("...verified the '".concat(typeString, "' simple type's super-types."), node);
                }
                return superTypesVerify;
            }
        }
    ]);
    return SimpleTypeDeclaration;
}(_declaration.default), _define_property(_SimpleTypeDeclaration, "name", "SimpleTypeDeclaration"), _SimpleTypeDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2RlY2xhcmF0aW9uL3NpbXBsZVR5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEZWNsYXJhdGlvbiBmcm9tIFwiLi4vZGVjbGFyYXRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTaW1wbGVUeXBlRGVjbGFyYXRpb24gZXh0ZW5kcyBEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdHlwZSwgcHJlZml4ZWQpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnByZWZpeGVkID0gcHJlZml4ZWQ7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBpc1ByZWZpeGVkKCkge1xuICAgIHJldHVybiB0aGlzLnByZWZpeGVkO1xuICB9XG5cbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzaW1wbGVUeXBlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3NpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZ30nIHNpbXBsZSB0eXBlIGRlY2xhcmF0aW9uLi4uYCwgbm9kZSk7XG5cbiAgICBpZiAodGhpcy5wcmVmaXhlZCkge1xuICAgICAgY29uc3QgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIHByZWZpeGVkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVR5cGUoKTtcblxuICAgICAgaWYgKHR5cGVWZXJpZmllcykge1xuICAgICAgICBjb25zdCBzdXBlclR5cGVzVmVyaWZ5ID0gdGhpcy52ZXJpZnlTdXBlclR5cGVzKCk7XG5cbiAgICAgICAgaWYgKHN1cGVyVHlwZXNWZXJpZnkpIHtcbiAgICAgICAgICBjb25zdCB0eXBlUHJlZml4ID0gY29udGV4dC5nZXRUeXBlUHJlZml4KCk7XG5cbiAgICAgICAgICBpZiAodHlwZVByZWZpeCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgdHlwZVByZWZpeE5hbWUgPSB0eXBlUHJlZml4LmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgICAgIHByZWZpeE5hbWUgPSB0eXBlUHJlZml4TmFtZTsgIC8vL1xuXG4gICAgICAgICAgICB0aGlzLnR5cGUuc2V0UHJlZml4TmFtZShwcmVmaXhOYW1lKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmFkZFR5cGUodGhpcy50eXBlKTtcblxuICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3NpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZ30nIHNpbXBsZSB0eXBlIGRlY2xhcmF0aW9uLmAsIG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVR5cGUoKSB7XG4gICAgbGV0IHR5cGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlU3RyaW5nfScgc2ltcGxlIHR5cGUuLi5gLCBub2RlKTtcblxuICAgIGNvbnN0IHR5cGVOYW1lID0gdGhpcy50eXBlLmdldE5hbWUoKSxcbiAgICAgICAgICBpbmNsdWRlUmVsZWFzZSA9IHRydWUsXG4gICAgICAgICAgaW5jbHVkZURlcGVuZGVuY2llcyA9IGZhbHNlLFxuICAgICAgICAgIHR5cGVQcmVzZW50ID0gY29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSwgaW5jbHVkZVJlbGVhc2UsIGluY2x1ZGVEZXBlbmRlbmNpZXMpO1xuXG4gICAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgYWxyZWFkeSBwcmVzZW50LmAsIG5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwcmVmaXhlZFR5cGVOYW1lID0gdHlwZU5hbWUsIC8vL1xuICAgICAgICAgICAgdHlwZVByZXNlbnQgPSBjb250ZXh0LmlzVHlwZVByZXNlbnRCeVByZWZpeGVkVHlwZU5hbWUocHJlZml4ZWRUeXBlTmFtZSk7XG5cbiAgICAgIGlmICh0eXBlUHJlc2VudCkge1xuICAgICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgYWxyZWFkeSBwcmVzZW50LmAsIG5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZVN0cmluZ30nIHNpbXBsZSB0eXBlLmAsIG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlTdXBlclR5cGUoc3VwZXJUeXBlKSB7XG4gICAgbGV0IHN1cGVyVHlwZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHN1cGVyVHlwZVN0cmluZyA9IHN1cGVyVHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3VwZXJUeXBlU3RyaW5nfScgc3VwZXItdHlwZS4uLmAsIG5vZGUpO1xuXG4gICAgY29uc3Qgbm9taW5hbFR5cGVOYW1lID0gc3VwZXJUeXBlLmdldE5vbWluYWxUeXBlTmFtZSgpLFxuICAgICAgICAgIHR5cGVOYW1lID0gbm9taW5hbFR5cGVOYW1lLCAvLy9cbiAgICAgICAgICB0eXBlTmFtZU1hdGNoZXMgPSB0aGlzLnR5cGUubWF0Y2hUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICBpZiAodHlwZU5hbWVNYXRjaGVzKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgc3VwZXItdHlwZSdzIG5hbWUgbWF0Y2hlcyB0aGUgJHt0eXBlTmFtZX0nIHNpbXBsZSB0eXBlJ3MgbmFtZS5gLCBub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgb2xkU3VwZXJUeXBlID0gc3VwZXJUeXBlO1xuXG4gICAgICBzdXBlclR5cGUgPSBjb250ZXh0LmZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgICAgY29uc3Qgc3VwZXJUeXBlUHJlc2VudCA9IChzdXBlclR5cGUgIT09IG51bGwpO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlUHJlc2VudCkge1xuICAgICAgICBjb25zdCBuZXdTdXBlclR5cGUgPSBzdXBlclR5cGU7IC8vL1xuXG4gICAgICAgIHRoaXMudHlwZS5yZXBsYWNlU3VwZXJUeXBlKG9sZFN1cGVyVHlwZSwgbmV3U3VwZXJUeXBlKTtcblxuICAgICAgICBzdXBlclR5cGVWZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1cGVyVHlwZVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3VwZXJUeXBlU3RyaW5nfScgc3VwZXItdHlwZS5gLCBub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXJUeXBlVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlTdXBlclR5cGVzKCkge1xuICAgIGxldCBzdXBlclR5cGVzVmVyaWZ5O1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlU3RyaW5nfScgc2ltcGxlIHR5cGUncyBzdXBlci10eXBlcy4uLmAsIG5vZGUpO1xuXG4gICAgY29uc3QgdHlwZUJhc2ljID0gdGhpcy50eXBlLmlzQmFzaWMoKTtcblxuICAgIGlmICh0eXBlQmFzaWMpIHtcbiAgICAgIHN1cGVyVHlwZXNWZXJpZnkgPSB0cnVlO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7dHlwZVN0cmluZ30nIHNpbXBsZSB0eXBlIGlzIGJhc2ljLmAsIG5vZGUpXG4gICAgfSBlbHNlICB7XG4gICAgICBjb25zdCBzdXBlclR5cGVzID0gdGhpcy50eXBlLmdldFN1cGVyVHlwZXMoKTtcblxuICAgICAgc3VwZXJUeXBlc1ZlcmlmeSA9IHN1cGVyVHlwZXMuZXZlcnkoKHN1cGVyVHlwZSkgPT4ge1xuICAgICAgICBjb25zdCBzdXBlclR5cGVWZXJpZmllcyA9IHRoaXMudmVyaWZ5U3VwZXJUeXBlKHN1cGVyVHlwZSk7XG5cbiAgICAgICAgaWYgKHN1cGVyVHlwZVZlcmlmaWVzKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChzdXBlclR5cGVzVmVyaWZ5KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZVN0cmluZ30nIHNpbXBsZSB0eXBlJ3Mgc3VwZXItdHlwZXMuYCwgbm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyVHlwZXNWZXJpZnk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU2ltcGxlVHlwZURlY2xhcmF0aW9uXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJTaW1wbGVUeXBlRGVjbGFyYXRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInR5cGUiLCJwcmVmaXhlZCIsImdldFR5cGUiLCJpc1ByZWZpeGVkIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJnZXROb2RlIiwiZ2V0Q29udGV4dCIsInNpbXBsZVR5cGVEZWNsYXJhdGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidHlwZVN0cmluZyIsInR5cGVWZXJpZmllcyIsInZlcmlmeVR5cGUiLCJzdXBlclR5cGVzVmVyaWZ5IiwidmVyaWZ5U3VwZXJUeXBlcyIsInR5cGVQcmVmaXgiLCJnZXRUeXBlUHJlZml4IiwidHlwZVByZWZpeE5hbWUiLCJnZXROYW1lIiwicHJlZml4TmFtZSIsInNldFByZWZpeE5hbWUiLCJhZGRUeXBlIiwiZGVidWciLCJ0eXBlTmFtZSIsImluY2x1ZGVSZWxlYXNlIiwiaW5jbHVkZURlcGVuZGVuY2llcyIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJwcmVmaXhlZFR5cGVOYW1lIiwiaXNUeXBlUHJlc2VudEJ5UHJlZml4ZWRUeXBlTmFtZSIsInZlcmlmeVN1cGVyVHlwZSIsInN1cGVyVHlwZSIsInN1cGVyVHlwZVZlcmlmaWVzIiwic3VwZXJUeXBlU3RyaW5nIiwibm9taW5hbFR5cGVOYW1lIiwiZ2V0Tm9taW5hbFR5cGVOYW1lIiwidHlwZU5hbWVNYXRjaGVzIiwibWF0Y2hUeXBlTmFtZSIsIm9sZFN1cGVyVHlwZSIsImZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUiLCJzdXBlclR5cGVQcmVzZW50IiwibmV3U3VwZXJUeXBlIiwicmVwbGFjZVN1cGVyVHlwZSIsInR5cGVCYXNpYyIsImlzQmFzaWMiLCJzdXBlclR5cGVzIiwiZ2V0U3VwZXJUeXBlcyIsImV2ZXJ5IiwiRGVjbGFyYXRpb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQUE7OztrRUFKd0I7d0JBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV2QixXQUFlQSxJQUFBQSxnQkFBTSwwQ0FBQzs7YUFBTUMsc0JBQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsUUFBUTtnQ0FEdkJMOztnQkFFeEIsa0JBRndCQTtZQUVsQkM7WUFBU0M7WUFBUUM7O1FBRXZCLE1BQUtDLElBQUksR0FBR0E7UUFDWixNQUFLQyxRQUFRLEdBQUdBOzs7OztZQUdsQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixJQUFJO1lBQ2xCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixRQUFRO1lBQ3RCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLFdBQVc7Z0JBRWYsSUFBTU4sT0FBTyxJQUFJLENBQUNPLE9BQU8sSUFDbkJULFVBQVUsSUFBSSxDQUFDVSxVQUFVLElBQ3pCQyw4QkFBOEIsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztnQkFFMURaLFFBQVFhLEtBQUssQ0FBQyxBQUFDLGtCQUE2QyxPQUE1QkYsNkJBQTRCLGlDQUErQlQ7Z0JBRTNGLElBQUksSUFBSSxDQUFDRSxRQUFRLEVBQUU7b0JBQ2pC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