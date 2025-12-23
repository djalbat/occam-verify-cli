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
var _ontology = /*#__PURE__*/ _interop_require_wildcard(require("../../ontology"));
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
var _default = (0, _ontology.define)((_TypePrefixDeclaration = /*#__PURE__*/ function(Declaration) {
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
                var TypePrefix = _ontology.default.TypePrefix, node = typePrefixDeclarationNode, typePrefix = TypePrefix.fromTypePrefixDeclarationNode(typePrefixDeclarationNode, context), typePrefixName = typePrefix.getName(), string = typePrefixName, simpleTypeDeclaration = new TypePrefixDeclaration(context, node, string, typePrefix);
                return simpleTypeDeclaration;
            }
        }
    ]);
    return TypePrefixDeclaration;
}(_declaration.default), _define_property(_TypePrefixDeclaration, "name", "TypePrefixDeclaration"), _TypePrefixDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbnRvbG9neS9kZWNsYXJhdGlvbi90eXBlUHJlZml4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgb250b2xvZ3kgZnJvbSBcIi4uLy4uL29udG9sb2d5XCI7XG5pbXBvcnQgRGVjbGFyYXRpb24gZnJvbSBcIi4uL2RlY2xhcmF0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9vbnRvbG9neVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVHlwZVByZWZpeERlY2xhcmF0aW9uIGV4dGVuZHMgRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBub2RlLCBzdHJpbmcsIHR5cGVQcmVmaXgpIHtcbiAgICBzdXBlcihjb250ZXh0LCBub2RlLCBzdHJpbmcpO1xuXG4gICAgdGhpcy50eXBlUHJlZml4ID0gdHlwZVByZWZpeDtcbiAgfVxuXG4gIGdldFR5cGVQcmVmaXgoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZVByZWZpeDtcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdHlwZVByZWZpeERlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlUHJlZml4RGVjbGFyYXRpb25TdHJpbmd9JyB0eXBlIHByZWZpeCBkZWNsYXJhdGlvbi4uLmAsIG5vZGUpO1xuXG4gICAgY29uc3QgaW5jbHVkZVJlbGVhc2UgPSB0cnVlLFxuICAgICAgICAgIGluY2x1ZGVEZXBlbmRlbmNpZXMgPSBmYWxzZSxcbiAgICAgICAgICB0eXBlcyA9IGNvbnRleHQuZ2V0VHlwZXMoaW5jbHVkZVJlbGVhc2UsIGluY2x1ZGVEZXBlbmRlbmNpZXMpLFxuICAgICAgICAgIHR5cGVzTGVuZ3RoID0gdHlwZXMubGVuZ3RoO1xuXG4gICAgaWYgKHR5cGVzTGVuZ3RoID4gMCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgQ2Fubm90IHZlcmlmeSB0aGUgJyR7dHlwZVByZWZpeERlY2xhcmF0aW9uU3RyaW5nfScgdHlwZSBwcmVmaXggZGVjbGFyYXRpb24gYmVjYXVzZSB0eXBlcyBoYXZlIGFscmVhZHkgYmVlbiBkZWNsYXJlZC5gLCBub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZVByZWZpeFZlcmlmaWVzID0gdGhpcy52ZXJpZnlUeXBlUHJlZml4KCk7XG5cbiAgICAgIGlmICh0eXBlUHJlZml4VmVyaWZpZXMpIHtcbiAgICAgICAgY29udGV4dC5hZGRUeXBlUHJlZml4KHRoaXMudHlwZVByZWZpeCk7XG5cbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVQcmVmaXhEZWNsYXJhdGlvblN0cmluZ30nIHR5cGUgcHJlZml4IGRlY2xhcmF0aW9uLmAsIG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVR5cGVQcmVmaXgoKSB7XG4gICAgbGV0IHR5cGVQcmVmaXhWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0eXBlUHJlZml4U3RyaW5nID0gdGhpcy50eXBlUHJlZml4LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlUHJlZml4U3RyaW5nfScgdHlwZSBwcmVmaXguLi5gLCBub2RlKTtcblxuICAgIGNvbnN0IHR5cGVQcmVmaXggPSBjb250ZXh0LmdldFR5cGVQcmVmaXgoKTtcblxuICAgIGlmICh0eXBlUHJlZml4ICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgcGFja2FnZSBhbHJlYWR5IGhhcyBhICcke3R5cGVQcmVmaXhTdHJpbmd9JyB0eXBlIHByZWZpeC5gLCBub2RlKTtcbiAgICB9IGVsc2Uge1xuXG4gICAgICBjb25zdCB0eXBlUHJlZml4TmFtZSA9IHRoaXMudHlwZVByZWZpeC5nZXROYW1lKCksXG4gICAgICAgICAgICB0eXBlUHJlZml4UHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlZml4UHJlc2VudEJ5VHlwZVByZWZpeE5hbWUodHlwZVByZWZpeE5hbWUpO1xuXG4gICAgICBpZiAodHlwZVByZWZpeFByZXNlbnQpIHtcbiAgICAgICAgY29udGV4dC50cmFjZShgVGhlICcke3R5cGVQcmVmaXhTdHJpbmd9JyB0eXBlIHByZWZpeCBpcyBhbHJlYWR5IHByZXNlbnQuYCwgbm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBub21pbmFsVHlwZU5hbWUgPSB0eXBlUHJlZml4TmFtZSwgIC8vL1xuICAgICAgICAgICAgICB0eXBlUHJlc2VudCA9IGNvbnRleHQuaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICAgICAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgICAgICAgY29udGV4dC50cmFjZShgVGhlICcke3R5cGVQcmVmaXhTdHJpbmd9JyB0eXBlIGlzIGFscmVhZHkgcHJlc2VudC5gLCBub2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0eXBlUHJlZml4VmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVQcmVmaXhWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVQcmVmaXhTdHJpbmd9JyB0eXBlIHByZWZpeC5gLCBub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeFZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlR5cGVQcmVmaXhEZWNsYXJhdGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tVHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSh0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBUeXBlUHJlZml4IH0gPSBvbnRvbG9neSxcbiAgICAgICAgICBub2RlID0gdHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSwgLy8vXG4gICAgICAgICAgdHlwZVByZWZpeCA9IFR5cGVQcmVmaXguZnJvbVR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUodHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgdHlwZVByZWZpeE5hbWUgPSB0eXBlUHJlZml4LmdldE5hbWUoKSxcbiAgICAgICAgICBzdHJpbmcgPSB0eXBlUHJlZml4TmFtZSwgIC8vL1xuICAgICAgICAgIHNpbXBsZVR5cGVEZWNsYXJhdGlvbiA9IG5ldyBUeXBlUHJlZml4RGVjbGFyYXRpb24oY29udGV4dCwgbm9kZSwgc3RyaW5nLCB0eXBlUHJlZml4KTtcblxuICAgIHJldHVybiBzaW1wbGVUeXBlRGVjbGFyYXRpb247XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlR5cGVQcmVmaXhEZWNsYXJhdGlvbiIsImNvbnRleHQiLCJub2RlIiwic3RyaW5nIiwidHlwZVByZWZpeCIsImdldFR5cGVQcmVmaXgiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImdldE5vZGUiLCJnZXRDb250ZXh0IiwidHlwZVByZWZpeERlY2xhcmF0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJpbmNsdWRlUmVsZWFzZSIsImluY2x1ZGVEZXBlbmRlbmNpZXMiLCJ0eXBlcyIsImdldFR5cGVzIiwidHlwZXNMZW5ndGgiLCJsZW5ndGgiLCJkZWJ1ZyIsInR5cGVQcmVmaXhWZXJpZmllcyIsInZlcmlmeVR5cGVQcmVmaXgiLCJhZGRUeXBlUHJlZml4IiwidHlwZVByZWZpeFN0cmluZyIsInR5cGVQcmVmaXhOYW1lIiwiZ2V0TmFtZSIsInR5cGVQcmVmaXhQcmVzZW50IiwiaXNUeXBlUHJlZml4UHJlc2VudEJ5VHlwZVByZWZpeE5hbWUiLCJub21pbmFsVHlwZU5hbWUiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZSIsImZyb21UeXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlIiwidHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSIsIlR5cGVQcmVmaXgiLCJvbnRvbG9neSIsInNpbXBsZVR5cGVEZWNsYXJhdGlvbiIsIkRlY2xhcmF0aW9uIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFBOzs7Z0VBTHFCO2tFQUNHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUl4QixXQUFlQSxJQUFBQSxnQkFBTSwwQ0FBQzs7YUFBTUMsc0JBQ2RDLE9BQU8sRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLFVBQVU7Z0NBRG5CSjs7Z0JBRXhCLGtCQUZ3QkE7WUFFbEJDO1lBQVNDO1lBQU1DOztRQUVyQixNQUFLQyxVQUFVLEdBQUdBOzs7OztZQUdwQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxVQUFVO1lBQ3hCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDLFdBQVc7Z0JBRWYsSUFBTUwsT0FBTyxJQUFJLENBQUNNLE9BQU8sSUFDbkJQLFVBQVUsSUFBSSxDQUFDUSxVQUFVLElBQ3pCQyw4QkFBOEIsSUFBSSxDQUFD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