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
                        debugger;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vdHlwZVByZWZpeC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBUeXBlUHJlZml4RGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBub2RlLCBzdHJpbmcsIHR5cGVQcmVmaXgpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy50eXBlUHJlZml4ID0gdHlwZVByZWZpeDtcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRUeXBlUHJlZml4KCkge1xuICAgIHJldHVybiB0aGlzLnR5cGVQcmVmaXg7XG4gIH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB0eXBlUHJlZml4RGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgdGhpcy5jb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVQcmVmaXhEZWNsYXJhdGlvblN0cmluZ30nIHR5cGUgcHJlZml4IGRlY2xhcmF0aW9uLi4uYCwgdGhpcy5ub2RlKTtcblxuICAgIGNvbnN0IHR5cGVQcmVmaXhWZXJpZmllcyA9IHRoaXMudmVyaWZ5VHlwZVByZWZpeCgpO1xuXG4gICAgaWYgKHR5cGVQcmVmaXhWZXJpZmllcykge1xuICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZVByZWZpeERlY2xhcmF0aW9uU3RyaW5nfScgdHlwZSBwcmVmaXggZGVjbGFyYXRpb24uYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlUeXBlUHJlZml4KCkge1xuICAgIGxldCB0eXBlUHJlZml4VmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGVQcmVmaXhTdHJpbmcgPSB0aGlzLnR5cGVQcmVmaXguZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLmNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZVByZWZpeFN0cmluZ30nIHR5cGUgcHJlZml4Li4uYCwgdGhpcy5ub2RlKTtcblxuICAgIGNvbnN0IHR5cGVQcmVmaXggPSB0aGlzLmNvbnRleHQuZ2V0VHlwZVByZWZpeCgpO1xuXG4gICAgaWYgKHR5cGVQcmVmaXggIT09IG51bGwpIHtcbiAgICAgIHRoaXMuY29udGV4dC5kZWJ1ZyhgVGhlIHBhY2thZ2UgYWxyZWFkeSBoYXMgYSAnJHt0eXBlUHJlZml4U3RyaW5nfScgdHlwZSBwcmVmaXguYCwgdGhpcy5ub2RlKTtcbiAgICB9IGVsc2Uge1xuXG4gICAgICBjb25zdCB0eXBlUHJlZml4TmFtZSA9IHRoaXMudHlwZVByZWZpeC5nZXROYW1lKCksXG4gICAgICAgICAgICB0eXBlUHJlZml4UHJlc2VudCA9IHRoaXMuY29udGV4dC5pc1R5cGVQcmVmaXhQcmVzZW50QnlUeXBlUHJlZml4TmFtZSh0eXBlUHJlZml4TmFtZSk7XG5cbiAgICAgIGlmICh0eXBlUHJlZml4UHJlc2VudCkge1xuICAgICAgICB0aGlzLmNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlUHJlZml4U3RyaW5nfScgdHlwZSBwcmVmaXggaXMgYWxyZWFkeSBwcmVzZW50LmAsIHRoaXMubm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWJ1Z2dlclxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlUHJlZml4VmVyaWZpZXMpIHtcbiAgICAgIHRoaXMuY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVQcmVmaXhTdHJpbmd9JyB0eXBlIHByZWZpeC5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlUHJlZml4VmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVHlwZVByZWZpeERlY2xhcmF0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21UeXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlKHR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IFR5cGVQcmVmaXggfSA9IGRvbSxcbiAgICAgICAgICBub2RlID0gdHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSwgLy8vXG4gICAgICAgICAgdHlwZVByZWZpeCA9IFR5cGVQcmVmaXguZnJvbVR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUodHlwZVByZWZpeERlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgdHlwZVByZWZpeE5hbWUgPSB0eXBlUHJlZml4LmdldE5hbWUoKSxcbiAgICAgICAgICBzdHJpbmcgPSB0eXBlUHJlZml4TmFtZSwgIC8vL1xuICAgICAgICAgIHNpbXBsZVR5cGVEZWNsYXJhdGlvbiA9IG5ldyBUeXBlUHJlZml4RGVjbGFyYXRpb24oY29udGV4dCwgbm9kZSwgc3RyaW5nLCB0eXBlUHJlZml4KTtcblxuICAgIHJldHVybiBzaW1wbGVUeXBlRGVjbGFyYXRpb247XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRvbUFzc2lnbmVkIiwiVHlwZVByZWZpeERlY2xhcmF0aW9uIiwiY29udGV4dCIsIm5vZGUiLCJzdHJpbmciLCJ0eXBlUHJlZml4IiwiZ2V0Q29udGV4dCIsImdldE5vZGUiLCJnZXRTdHJpbmciLCJnZXRUeXBlUHJlZml4IiwidmVyaWZ5IiwidmVyaWZpZXMiLCJ0eXBlUHJlZml4RGVjbGFyYXRpb25TdHJpbmciLCJ0cmFjZSIsInR5cGVQcmVmaXhWZXJpZmllcyIsInZlcmlmeVR5cGVQcmVmaXgiLCJkZWJ1ZyIsInR5cGVQcmVmaXhTdHJpbmciLCJ0eXBlUHJlZml4TmFtZSIsImdldE5hbWUiLCJ0eXBlUHJlZml4UHJlc2VudCIsImlzVHlwZVByZWZpeFByZXNlbnRCeVR5cGVQcmVmaXhOYW1lIiwiZnJvbVR5cGVQcmVmaXhEZWNsYXJhdGlvbk5vZGUiLCJ0eXBlUHJlZml4RGVjbGFyYXRpb25Ob2RlIiwiVHlwZVByZWZpeCIsImRvbSIsInNpbXBsZVR5cGVEZWNsYXJhdGlvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7OzJEQUpnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSWhCLFdBQWVBLElBQUFBLGdCQUFXLDBDQUFDO2FBQU1DLHNCQUNuQkMsT0FBTyxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsVUFBVTtnQ0FEZEo7UUFFN0IsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxVQUFVLEdBQUdBOzs7O1lBR3BCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLE9BQU87WUFDckI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLElBQUk7WUFDbEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLE1BQU07WUFDcEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFVBQVU7WUFDeEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsV0FBVztnQkFFZixJQUFNQyw4QkFBOEIsSUFBSSxDQUFDUixNQUFNLEVBQUcsR0FBRztnQkFFckQsSUFBSSxDQUFDRixPQUFPLENBQUNXLEtBQUssQ0FBQyxBQUFDLGtCQUE2QyxPQUE1QkQsNkJBQTRCLGlDQUErQixJQUFJLENBQUNULElBQUk7Z0JBRXpHLElBQU1XLHFCQUFxQixJQUFJLENBQUNDLGdCQUFnQjtnQkFFaEQsSUFBSUQsb0JBQW9CO29CQUN0QkgsV0FBVztnQkFDYjtnQkFFQSxJQUFJQSxVQUFVO29CQUNaLElBQUksQ0FBQ1QsT0FBTyxDQUFDYyxLQUFLLENBQUMsQUFBQyxvQkFBK0MsT0FBNUJKLDZCQUE0QiwrQkFBNkIsSUFBSSxDQUFDVCxJQUFJO2dCQUMzRztnQkFFQSxPQUFPUTtZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlELHFCQUFxQjtnQkFFekIsSUFBTUcsbUJBQW1CLElBQUksQ0FBQ1osVUFBVSxDQUFDRyxTQUFTO2dCQUVsRCxJQUFJLENBQUNOLE9BQU8sQ0FBQ1csS0FBSyxDQUFDLEFBQUMsa0JBQWtDLE9BQWpCSSxrQkFBaUIscUJBQW1CLElBQUksQ0FBQ2QsSUFBSTtnQkFFbEYsSUFBTUUsYUFBYSxJQUFJLENBQUNILE9BQU8sQ0FBQ08sYUFBYTtnQkFFN0MsSUFBSUosZUFBZSxNQUFNO29CQUN2QixJQUFJLENBQUNILE9BQU8sQ0FBQ2MsS0FBSyxDQUFDLEFBQUMsOEJBQThDLE9BQWpCQyxrQkFBaUIsbUJBQWlCLElBQUksQ0FBQ2QsSUFBSTtnQkFDOUYsT0FBTztvQkFFTCxJQUFNZSxpQkFBaUIsSUFBSSxDQUFDYixVQUFVLENBQUNjLE9BQU8sSUFDeENDLG9CQUFvQixJQUFJLENBQUNsQixPQUFPLENBQUNtQixtQ0FBbUMsQ0FBQ0g7b0JBRTNFLElBQUlFLG1CQUFtQjt3QkFDckIsSUFBSSxDQUFDbEIsT0FBTyxDQUFDYyxLQUFLLENBQUMsQUFBQyxRQUF3QixPQUFqQkMsa0JBQWlCLHNDQUFvQyxJQUFJLENBQUNkLElBQUk7b0JBQzNGLE9BQU87d0JBQ0wsUUFBUTtvQkFDVjtnQkFDRjtnQkFFQSxJQUFJVyxvQkFBb0I7b0JBQ3RCLElBQUksQ0FBQ1osT0FBTyxDQUFDYyxLQUFLLENBQUMsQUFBQyxvQkFBb0MsT0FBakJDLGtCQUFpQixtQkFBaUIsSUFBSSxDQUFDZCxJQUFJO2dCQUNwRjtnQkFFQSxPQUFPVztZQUNUOzs7O1lBSU9RLEtBQUFBO21CQUFQLFNBQU9BLDhCQUE4QkMseUJBQXlCLEVBQUVyQixPQUFPO2dCQUNyRSxJQUFNLEFBQUVzQixhQUFlQyxZQUFHLENBQWxCRCxZQUNGckIsT0FBT29CLDJCQUNQbEIsYUFBYW1CLFdBQVdGLDZCQUE2QixDQUFDQywyQkFBMkJyQixVQUNqRmdCLGlCQUFpQmIsV0FBV2MsT0FBTyxJQUNuQ2YsU0FBU2MsZ0JBQ1RRLHdCQUF3QixJQUFJekIsc0JBQXNCQyxTQUFTQyxNQUFNQyxRQUFRQztnQkFFL0UsT0FBT3FCO1lBQ1Q7Ozs7S0FYQSx5Q0FBT0MsUUFBTyJ9