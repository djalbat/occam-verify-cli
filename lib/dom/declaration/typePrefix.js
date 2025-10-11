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
var _TypePrefixDeclaration;
var _default = (0, _dom.domAssigned)((_TypePrefixDeclaration = /*#__PURE__*/ function() {
    function TypePrefixDeclaration(context, node, string, typePrefix) {
        _class_call_check(this, TypePrefixDeclaration);
        this.context = context;
        this.node = node;
        this.string = string;
        this.typePrefix = typePrefix;
    }
    _create_class(TypePrefixDeclaration, [
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
            key: "getTypePrefix",
            value: function getTypePrefix() {
                return this.typePrefix;
            }
        },
        {
            key: "verify",
            value: function verify() {
                var verifies = false;
                var typePrefixDeclarationString = this.string; ///
                this.context.trace("Verifying the '".concat(typePrefixDeclarationString, "' type prefix declaration..."), this.node);
                var typePrefixVerifies = this.verifyTypePrefix();
                if (typePrefixVerifies) {
                    verifies = true;
                }
                if (verifies) {
                    this.context.debug("...verified the '".concat(typePrefixDeclarationString, "' type prefix declaration."), this.node);
                }
                return verifies;
            }
        },
        {
            key: "verifyTypePrefix",
            value: function verifyTypePrefix() {
                var typePrefixVerifies = false;
                var typePrefixString = this.typePrefix.getString();
                this.context.trace("Verifying the '".concat(typePrefixString, "' type prefix..."), this.node);
                var typePrefix = this.context.getTypePrefix();
                if (typePrefix !== null) {
                    this.context.debug("The package already has a '".concat(typePrefixString, "' type prefix."), this.node);
                } else {
                    var typePrefixName = this.typePrefix.getName(), typePrefixPresent = this.context.isTypePrefixPresentByTypePrefixName(typePrefixName);
                    if (typePrefixPresent) {
                        this.context.debug("The '".concat(typePrefixString, "' type prefix is already present."), this.node);
                    } else {
                        var typeName = typePrefixName, typePresent = this.context.isTypePresentByTypeName(typeName);
                        if (typePresent) {
                            this.context.debug("The '".concat(typePrefixString, "' type is already present."), this.node);
                        } else {
                            typePrefixVerifies = true;
                        }
                    }
                }
                if (typePrefixVerifies) {
                    this.context.debug("...verified the '".concat(typePrefixString, "' type prefix."), this.node);
                }
                return typePrefixVerifies;
            }
        }
    ], [
        {
            key: "fromTypePrefixDeclarationNode",
            value: function fromTypePrefixDeclarationNode(typePrefixDeclarationNode, context) {
                var TypePrefix = _dom.default.TypePrefix, node = typePrefixDeclarationNode, typePrefix = TypePrefix.fromTypePrefixDeclarationNode(typePrefixDeclarationNode, context), typePrefixName = typePrefix.getName(), string = typePrefixName, simpleTypeDeclaration = new TypePrefixDeclaration(context, node, string, typePrefix);
                return simpleTypeDeclaration;
            }
        }
    ]);
    return TypePrefixDeclaration;
}(), _define_property(_TypePrefixDeclaration, "name", "TypePrefixDeclaration"), _TypePrefixDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vdHlwZVByZWZpeC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBUeXBlUHJlZml4RGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBub2RlLCBzdHJpbmcsIHR5cGVQcmVmaXgpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50eXBlUHJlZml4ID0gdHlwZVByZWZpeDtcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRUeXBlUHJlZml4KCkge1xuICAgIHJldHVybiB0aGlzLnR5cGVQcmVmaXg7XG4gIH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB0eXBlUHJlZml4RGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgdGhpcy5jb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVQcmVmaXhEZWNsYXJhdGlvblN0cmluZ30nIHR5cGUgcHJlZml4IGRlY2xhcmF0aW9uLi4uYCwgdGhpcy5ub2RlKTtcblxuICAgIGNvbnN0IHR5cGVQcmVmaXhWZXJpZmllcyA9IHRoaXMudmVyaWZ5VHlwZVByZWZpeCgpO1xuXG4gICAgaWYgKHR5cGVQcmVmaXhWZXJpZmllcykge1xuICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZVByZWZpeERlY2xhcmF0aW9uU3RyaW5nfScgdHlwZSBwcmVmaXggZGVjbGFyYXRpb24uYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlUeXBlUHJlZml4KCkge1xuICAgIGxldCB0eXBlUHJlZml4VmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGVQcmVmaXhTdHJpbmcgPSB0aGlzLnR5cGVQcmVmaXguZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLmNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZVByZWZpeFN0cmluZ30nIHR5cGUgcHJlZml4Li4uYCwgdGhpcy5ub2RlKTtcblxuICAgIGNvbnN0IHR5cGVQcmVmaXggPSB0aGlzLmNvbnRleHQuZ2V0VHlwZVByZWZpeCgpO1xuXG4gICAgaWYgKHR5cGVQcmVmaXggIT09IG51bGwpIHtcbiAgICAgIHRoaXMuY29udGV4dC5kZWJ1ZyhgVGhlIHBhY2thZ2UgYWxyZWFkeSBoYXMgYSAnJHt0eXBlUHJlZml4U3RyaW5nfScgdHlwZSBwcmVmaXguYCwgdGhpcy5ub2RlKTtcbiAgICB9IGVsc2Uge1xuXG4gICAgICBjb25zdCB0eXBlUHJlZml4TmFtZSA9IHRoaXMudHlwZVByZWZpeC5nZXROYW1lKCksXG4gICAgICAgICAgICB0eXBlUHJlZml4UHJlc2VudCA9IHRoaXMuY29udGV4dC5pc1R5cGVQcmVmaXhQcmVzZW50QnlUeXBlUHJlZml4TmFtZSh0eXBlUHJlZml4TmFtZSk7XG5cbiAgICAgIGlmICh0eXBlUHJlZml4UHJlc2VudCkge1xuICAgICAgICB0aGlzLmNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlUHJlZml4U3RyaW5nfScgdHlwZSBwcmVmaXggaXMgYWxyZWFkeSBwcmVzZW50LmAsIHRoaXMubm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0eXBlTmFtZSA9IHR5cGVQcmVmaXhOYW1lLCAgLy8vXG4gICAgICAgICAgICAgIHR5cGVQcmVzZW50ID0gdGhpcy5jb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgICAgICBpZiAodHlwZVByZXNlbnQpIHtcbiAgICAgICAgICB0aGlzLmNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlUHJlZml4U3RyaW5nfScgdHlwZSBpcyBhbHJlYWR5IHByZXNlbnQuYCwgdGhpcy5ub2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0eXBlUHJlZml4VmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVQcmVmaXhWZXJpZmllcykge1xuICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZVByZWZpeFN0cmluZ30nIHR5cGUgcHJlZml4LmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXhWZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJUeXBlUHJlZml4RGVjbGFyYXRpb25cIjtcblxuICBzdGF0aWMgZnJvbVR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUodHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgVHlwZVByZWZpeCB9ID0gZG9tLFxuICAgICAgICAgIG5vZGUgPSB0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlLCAvLy9cbiAgICAgICAgICB0eXBlUHJlZml4ID0gVHlwZVByZWZpeC5mcm9tVHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSh0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICB0eXBlUHJlZml4TmFtZSA9IHR5cGVQcmVmaXguZ2V0TmFtZSgpLFxuICAgICAgICAgIHN0cmluZyA9IHR5cGVQcmVmaXhOYW1lLCAgLy8vXG4gICAgICAgICAgc2ltcGxlVHlwZURlY2xhcmF0aW9uID0gbmV3IFR5cGVQcmVmaXhEZWNsYXJhdGlvbihjb250ZXh0LCBub2RlLCBzdHJpbmcsIHR5cGVQcmVmaXgpO1xuXG4gICAgcmV0dXJuIHNpbXBsZVR5cGVEZWNsYXJhdGlvbjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZG9tQXNzaWduZWQiLCJUeXBlUHJlZml4RGVjbGFyYXRpb24iLCJjb250ZXh0Iiwibm9kZSIsInN0cmluZyIsInR5cGVQcmVmaXgiLCJnZXRDb250ZXh0IiwiZ2V0Tm9kZSIsImdldFN0cmluZyIsImdldFR5cGVQcmVmaXgiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsInR5cGVQcmVmaXhEZWNsYXJhdGlvblN0cmluZyIsInRyYWNlIiwidHlwZVByZWZpeFZlcmlmaWVzIiwidmVyaWZ5VHlwZVByZWZpeCIsImRlYnVnIiwidHlwZVByZWZpeFN0cmluZyIsInR5cGVQcmVmaXhOYW1lIiwiZ2V0TmFtZSIsInR5cGVQcmVmaXhQcmVzZW50IiwiaXNUeXBlUHJlZml4UHJlc2VudEJ5VHlwZVByZWZpeE5hbWUiLCJ0eXBlTmFtZSIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJmcm9tVHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSIsInR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUiLCJUeXBlUHJlZml4IiwiZG9tIiwic2ltcGxlVHlwZURlY2xhcmF0aW9uIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFBOzs7MkRBSmdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJaEIsV0FBZUEsSUFBQUEsZ0JBQVcsMENBQUM7YUFBTUMsc0JBQ25CQyxPQUFPLEVBQUVDLElB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