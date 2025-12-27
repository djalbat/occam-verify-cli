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
var _structure = /*#__PURE__*/ _interop_require_wildcard(require("../../structure"));
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
var _default = (0, _structure.define)((_TypePrefixDeclaration = /*#__PURE__*/ function(Declaration) {
    _inherits(TypePrefixDeclaration, Declaration);
    function TypePrefixDeclaration(context, node, string, typePrefix) {
        _class_call_check(this, TypePrefixDeclaration);
        var _this;
        _this = _call_super(this, TypePrefixDeclaration, [
            context,
            node,
            string
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
                    context.debug("Cannot verify the '".concat(typePrefixDeclarationString, "' type prefix declaration because types have already been declared."), node);
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
    ], [
        {
            key: "fromTypePrefixDeclarationNode",
            value: function fromTypePrefixDeclarationNode(typePrefixDeclarationNode, context) {
                var TypePrefix = _structure.default.TypePrefix, node = typePrefixDeclarationNode, typePrefix = TypePrefix.fromTypePrefixDeclarationNode(typePrefixDeclarationNode, context), typePrefixName = typePrefix.getName(), string = typePrefixName, simpleTypeDeclaration = new TypePrefixDeclaration(context, node, string, typePrefix);
                return simpleTypeDeclaration;
            }
        }
    ]);
    return TypePrefixDeclaration;
}(_declaration.default), _define_property(_TypePrefixDeclaration, "name", "TypePrefixDeclaration"), _TypePrefixDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdHJ1Y3R1cmUvZGVjbGFyYXRpb24vdHlwZVByZWZpeC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHN0cnVjdHVyZSBmcm9tIFwiLi4vLi4vc3RydWN0dXJlXCI7XG5pbXBvcnQgRGVjbGFyYXRpb24gZnJvbSBcIi4uL2RlY2xhcmF0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9zdHJ1Y3R1cmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFR5cGVQcmVmaXhEZWNsYXJhdGlvbiBleHRlbmRzIERlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgbm9kZSwgc3RyaW5nLCB0eXBlUHJlZml4KSB7XG4gICAgc3VwZXIoY29udGV4dCwgbm9kZSwgc3RyaW5nKTtcblxuICAgIHRoaXMudHlwZVByZWZpeCA9IHR5cGVQcmVmaXg7XG4gIH1cblxuICBnZXRUeXBlUHJlZml4KCkge1xuICAgIHJldHVybiB0aGlzLnR5cGVQcmVmaXg7XG4gIH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHR5cGVQcmVmaXhEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZVByZWZpeERlY2xhcmF0aW9uU3RyaW5nfScgdHlwZSBwcmVmaXggZGVjbGFyYXRpb24uLi5gLCBub2RlKTtcblxuICAgIGNvbnN0IGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSxcbiAgICAgICAgICBpbmNsdWRlRGVwZW5kZW5jaWVzID0gZmFsc2UsXG4gICAgICAgICAgdHlwZXMgPSBjb250ZXh0LmdldFR5cGVzKGluY2x1ZGVSZWxlYXNlLCBpbmNsdWRlRGVwZW5kZW5jaWVzKSxcbiAgICAgICAgICB0eXBlc0xlbmd0aCA9IHR5cGVzLmxlbmd0aDtcblxuICAgIGlmICh0eXBlc0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYENhbm5vdCB2ZXJpZnkgdGhlICcke3R5cGVQcmVmaXhEZWNsYXJhdGlvblN0cmluZ30nIHR5cGUgcHJlZml4IGRlY2xhcmF0aW9uIGJlY2F1c2UgdHlwZXMgaGF2ZSBhbHJlYWR5IGJlZW4gZGVjbGFyZWQuYCwgbm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVQcmVmaXhWZXJpZmllcyA9IHRoaXMudmVyaWZ5VHlwZVByZWZpeCgpO1xuXG4gICAgICBpZiAodHlwZVByZWZpeFZlcmlmaWVzKSB7XG4gICAgICAgIGNvbnRleHQuYWRkVHlwZVByZWZpeCh0aGlzLnR5cGVQcmVmaXgpO1xuXG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlUHJlZml4RGVjbGFyYXRpb25TdHJpbmd9JyB0eXBlIHByZWZpeCBkZWNsYXJhdGlvbi5gLCBub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlUeXBlUHJlZml4KCkge1xuICAgIGxldCB0eXBlUHJlZml4VmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdHlwZVByZWZpeFN0cmluZyA9IHRoaXMudHlwZVByZWZpeC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZVByZWZpeFN0cmluZ30nIHR5cGUgcHJlZml4Li4uYCwgbm9kZSk7XG5cbiAgICBjb25zdCB0eXBlUHJlZml4ID0gY29udGV4dC5nZXRUeXBlUHJlZml4KCk7XG5cbiAgICBpZiAodHlwZVByZWZpeCAhPT0gbnVsbCkge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlIHBhY2thZ2UgYWxyZWFkeSBoYXMgYSAnJHt0eXBlUHJlZml4U3RyaW5nfScgdHlwZSBwcmVmaXguYCwgbm9kZSk7XG4gICAgfSBlbHNlIHtcblxuICAgICAgY29uc3QgdHlwZVByZWZpeE5hbWUgPSB0aGlzLnR5cGVQcmVmaXguZ2V0TmFtZSgpLFxuICAgICAgICAgICAgdHlwZVByZWZpeFByZXNlbnQgPSBjb250ZXh0LmlzVHlwZVByZWZpeFByZXNlbnRCeVR5cGVQcmVmaXhOYW1lKHR5cGVQcmVmaXhOYW1lKTtcblxuICAgICAgaWYgKHR5cGVQcmVmaXhQcmVzZW50KSB7XG4gICAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHt0eXBlUHJlZml4U3RyaW5nfScgdHlwZSBwcmVmaXggaXMgYWxyZWFkeSBwcmVzZW50LmAsIG5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgbm9taW5hbFR5cGVOYW1lID0gdHlwZVByZWZpeE5hbWUsICAvLy9cbiAgICAgICAgICAgICAgdHlwZVByZXNlbnQgPSBjb250ZXh0LmlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgICAgIGlmICh0eXBlUHJlc2VudCkge1xuICAgICAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHt0eXBlUHJlZml4U3RyaW5nfScgdHlwZSBpcyBhbHJlYWR5IHByZXNlbnQuYCwgbm9kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdHlwZVByZWZpeFZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlUHJlZml4VmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlUHJlZml4U3RyaW5nfScgdHlwZSBwcmVmaXguYCwgbm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXhWZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJUeXBlUHJlZml4RGVjbGFyYXRpb25cIjtcblxuICBzdGF0aWMgZnJvbVR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUodHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgVHlwZVByZWZpeCB9ID0gc3RydWN0dXJlLFxuICAgICAgICAgIG5vZGUgPSB0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlLCAvLy9cbiAgICAgICAgICB0eXBlUHJlZml4ID0gVHlwZVByZWZpeC5mcm9tVHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSh0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICB0eXBlUHJlZml4TmFtZSA9IHR5cGVQcmVmaXguZ2V0TmFtZSgpLFxuICAgICAgICAgIHN0cmluZyA9IHR5cGVQcmVmaXhOYW1lLCAgLy8vXG4gICAgICAgICAgc2ltcGxlVHlwZURlY2xhcmF0aW9uID0gbmV3IFR5cGVQcmVmaXhEZWNsYXJhdGlvbihjb250ZXh0LCBub2RlLCBzdHJpbmcsIHR5cGVQcmVmaXgpO1xuXG4gICAgcmV0dXJuIHNpbXBsZVR5cGVEZWNsYXJhdGlvbjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiVHlwZVByZWZpeERlY2xhcmF0aW9uIiwiY29udGV4dCIsIm5vZGUiLCJzdHJpbmciLCJ0eXBlUHJlZml4IiwiZ2V0VHlwZVByZWZpeCIsInZlcmlmeSIsInZlcmlmaWVzIiwiZ2V0Tm9kZSIsImdldENvbnRleHQiLCJ0eXBlUHJlZml4RGVjbGFyYXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImluY2x1ZGVSZWxlYXNlIiwiaW5jbHVkZURlcGVuZGVuY2llcyIsInR5cGVzIiwiZ2V0VHlwZXMiLCJ0eXBlc0xlbmd0aCIsImxlbmd0aCIsImRlYnVnIiwidHlwZVByZWZpeFZlcmlmaWVzIiwidmVyaWZ5VHlwZVByZWZpeCIsImFkZFR5cGVQcmVmaXgiLCJ0eXBlUHJlZml4U3RyaW5nIiwidHlwZVByZWZpeE5hbWUiLCJnZXROYW1lIiwidHlwZVByZWZpeFByZXNlbnQiLCJpc1R5cGVQcmVmaXhQcmVzZW50QnlUeXBlUHJlZml4TmFtZSIsIm5vbWluYWxUeXBlTmFtZSIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lIiwiZnJvbVR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUiLCJ0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlIiwiVHlwZVByZWZpeCIsInN0cnVjdHVyZSIsInNpbXBsZVR5cGVEZWNsYXJhdGlvbiIsIkRlY2xhcmF0aW9uIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFBOzs7aUVBTHNCO2tFQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUl4QixXQUFlQSxJQUFBQSxpQkFBTSwwQ0FBQzs7YUFBTUMsc0JBQ2RDLE9BQU8sRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLFVBQVU7Z0NBRG5CSjs7Z0JBRXhCLGtCQUZ3QkE7WUFFbEJDO1lBQVNDO1lBQU1DOztRQUVyQixNQUFLQyxVQUFVLEdBQUdBOzs7OztZQUdwQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxVQUFVO1lBQ3hCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLFdBQVc7Z0JBRWYsSUFBTUwsT0FBTyxJQUFJLENBQUNNLE9BQU8sSUFDbkJQLFVBQVUsSUFBSSxDQUFDUSxVQUFVLElBQ3pCQyw4QkFBOEIsSUFB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