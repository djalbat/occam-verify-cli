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
var _TypeDeclaration;
var _default = (0, _dom.domAssigned)((_TypeDeclaration = /*#__PURE__*/ function() {
    function TypeDeclaration(fileContext, type) {
        _class_call_check(this, TypeDeclaration);
        this.fileContext = fileContext;
        this.type = type;
    }
    _create_class(TypeDeclaration, [
        {
            key: "getFileContext",
            value: function getFileContext() {
                return this.fileContext;
            }
        },
        {
            key: "getType",
            value: function getType() {
                return this.type;
            }
        },
        {
            key: "getString",
            value: function getString() {
                return this.type.getString();
            }
        },
        {
            key: "verify",
            value: function verify() {
                var verified = false;
                var typeDeclarationString = this.getString(); ///
                this.fileContext.trace("Verifying the '".concat(typeDeclarationString, "' type declaration..."));
                var typeVerified = this.verifyType(this.type);
                if (typeVerified) {
                    this.fileContext.addType(this.type);
                    verified = true;
                }
                if (verified) {
                    this.fileContext.debug("...verified the '".concat(typeDeclarationString, "' type declaration."));
                }
                return verified;
            }
        },
        {
            key: "verifyType",
            value: function verifyType(type) {
                var typeVerified = false;
                var typeString = type.getString(); ///
                this.fileContext.trace("Verifying the '".concat(typeString, "' type..."));
                var typeName = type.getName(), typePresent = this.fileContext.isTypePresentByTypeName(typeName);
                if (typePresent) {
                    var typeString1 = this.type.getString();
                    this.fileContext.debug("The type '".concat(typeString1, "' is not present."));
                } else {
                    var superType;
                    superType = type.getSuperType();
                    var superTypeName = superType.getName();
                    superType = this.fileContext.findTypeByTypeName(superTypeName);
                    if (superType === null) {
                        var superTypeString = superType.getString();
                        this.fileContext.debug("The super-type '".concat(superTypeString, "' is not present."));
                    } else {
                        type.setSuperType(superType);
                        typeVerified = true;
                    }
                }
                if (typeVerified) {
                    this.fileContext.debug("...typeVerified the '".concat(typeString, "' type."));
                }
                return typeVerified;
            }
        }
    ], [
        {
            key: "fromTypeDeclarationNode",
            value: function fromTypeDeclarationNode(typeDeclarationNode, fileContext) {
                var Type = _dom.default.Type, type = Type.fromTypeDeclarationNode(typeDeclarationNode, fileContext), typeDeclaration = new TypeDeclaration(fileContext, type);
                return typeDeclaration;
            }
        }
    ]);
    return TypeDeclaration;
}(), _define_property(_TypeDeclaration, "name", "TypeDeclaration"), _TypeDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vdHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBUeXBlRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3RvcihmaWxlQ29udGV4dCwgdHlwZSkge1xuICAgIHRoaXMuZmlsZUNvbnRleHQgPSBmaWxlQ29udGV4dDtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZUNvbnRleHQ7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7IHJldHVybiB0aGlzLnR5cGUuZ2V0U3RyaW5nKCk7IH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCB0eXBlRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIHRoaXMuZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZURlY2xhcmF0aW9uU3RyaW5nfScgdHlwZSBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgdHlwZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlUeXBlKHRoaXMudHlwZSk7XG5cbiAgICBpZiAodHlwZVZlcmlmaWVkKSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmFkZFR5cGUodGhpcy50eXBlKTtcblxuICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVEZWNsYXJhdGlvblN0cmluZ30nIHR5cGUgZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5VHlwZSh0eXBlKSB7XG4gICAgbGV0IHR5cGVWZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHlwZVN0cmluZyA9IHR5cGUuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS4uLmApO1xuXG4gICAgY29uc3QgdHlwZU5hbWUgPSB0eXBlLmdldE5hbWUoKSxcbiAgICAgIHR5cGVQcmVzZW50ID0gdGhpcy5maWxlQ29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICBpZiAodHlwZVByZXNlbnQpIHtcbiAgICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0aGlzLnR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYFRoZSB0eXBlICcke3R5cGVTdHJpbmd9JyBpcyBub3QgcHJlc2VudC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHN1cGVyVHlwZTtcblxuICAgICAgc3VwZXJUeXBlID0gdHlwZS5nZXRTdXBlclR5cGUoKTtcblxuICAgICAgY29uc3Qgc3VwZXJUeXBlTmFtZSA9IHN1cGVyVHlwZS5nZXROYW1lKCk7XG5cbiAgICAgIHN1cGVyVHlwZSA9IHRoaXMuZmlsZUNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHN1cGVyVHlwZU5hbWUpO1xuXG4gICAgICBpZiAoc3VwZXJUeXBlID09PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN1cGVyVHlwZVN0cmluZyA9IHN1cGVyVHlwZS5nZXRTdHJpbmcoKTtcblxuICAgICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGBUaGUgc3VwZXItdHlwZSAnJHtzdXBlclR5cGVTdHJpbmd9JyBpcyBub3QgcHJlc2VudC5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR5cGUuc2V0U3VwZXJUeXBlKHN1cGVyVHlwZSk7XG5cbiAgICAgICAgdHlwZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZVZlcmlmaWVkKSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGAuLi50eXBlVmVyaWZpZWQgdGhlICcke3R5cGVTdHJpbmd9JyB0eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVHlwZURlY2xhcmF0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21UeXBlRGVjbGFyYXRpb25Ob2RlKHR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBUeXBlIH0gPSBkb20sXG4gICAgICAgICAgdHlwZSA9IFR5cGUuZnJvbVR5cGVEZWNsYXJhdGlvbk5vZGUodHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHR5cGVEZWNsYXJhdGlvbiA9IG5ldyBUeXBlRGVjbGFyYXRpb24oZmlsZUNvbnRleHQsIHR5cGUpO1xuXG4gICAgcmV0dXJuIHR5cGVEZWNsYXJhdGlvbjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZG9tQXNzaWduZWQiLCJUeXBlRGVjbGFyYXRpb24iLCJmaWxlQ29udGV4dCIsInR5cGUiLCJnZXRGaWxlQ29udGV4dCIsImdldFR5cGUiLCJnZXRTdHJpbmciLCJ2ZXJpZnkiLCJ2ZXJpZmllZCIsInR5cGVEZWNsYXJhdGlvblN0cmluZyIsInRyYWNlIiwidHlwZVZlcmlmaWVkIiwidmVyaWZ5VHlwZSIsImFkZFR5cGUiLCJkZWJ1ZyIsInR5cGVTdHJpbmciLCJ0eXBlTmFtZSIsImdldE5hbWUiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwic3VwZXJUeXBlIiwiZ2V0U3VwZXJUeXBlIiwic3VwZXJUeXBlTmFtZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInN1cGVyVHlwZVN0cmluZyIsInNldFN1cGVyVHlwZSIsImZyb21UeXBlRGVjbGFyYXRpb25Ob2RlIiwidHlwZURlY2xhcmF0aW9uTm9kZSIsIlR5cGUiLCJkb20iLCJ0eXBlRGVjbGFyYXRpb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQUE7OzsyREFKZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUloQixXQUFlQSxJQUFBQSxnQkFBVyxvQ0FBQzthQUFNQyxnQkFDbkJDLFdBQVcsRUFBRUMsSUFBSTtnQ0FERUY7UUFFN0IsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTs7OztZQUdkQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFdBQVc7WUFDekI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQWMsT0FBTyxJQUFJLENBQUNILElBQUksQ0FBQ0csU0FBUztZQUFJOzs7WUFFNUNDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxXQUFXO2dCQUVmLElBQU1DLHdCQUF3QixJQUFJLENBQUNILFNBQVMsSUFBSSxHQUFHO2dCQUVuRCxJQUFJLENBQUNKLFdBQVcsQ0FBQ1EsS0FBSyxDQUFDLEFBQUMsa0JBQXVDLE9BQXRCRCx1QkFBc0I7Z0JBRS9ELElBQU1FLGVBQWUsSUFBSSxDQUFDQyxVQUFVLENBQUMsSUFBSSxDQUFDVCxJQUFJO2dCQUU5QyxJQUFJUSxjQUFjO29CQUNoQixJQUFJLENBQUNULFdBQVcsQ0FBQ1csT0FBTyxDQUFDLElBQUksQ0FBQ1YsSUFBSTtvQkFFbENLLFdBQVc7Z0JBQ2I7Z0JBRUEsSUFBSUEsVUFBVTtvQkFDWixJQUFJLENBQUNOLFdBQVcsQ0FBQ1ksS0FBSyxDQUFDLEFBQUMsb0JBQXlDLE9BQXRCTCx1QkFBc0I7Z0JBQ25FO2dCQUVBLE9BQU9EO1lBQ1Q7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV1QsSUFBSTtnQkFDYixJQUFJUSxlQUFlO2dCQUVuQixJQUFNSSxhQUFhWixLQUFLRyxTQUFTLElBQUksR0FBRztnQkFFeEMsSUFBSSxDQUFDSixXQUFXLENBQUNRLEtBQUssQ0FBQyxBQUFDLGtCQUE0QixPQUFYSyxZQUFXO2dCQUVwRCxJQUFNQyxXQUFXYixLQUFLYyxPQUFPLElBQzNCQyxjQUFjLElBQUksQ0FBQ2hCLFdBQVcsQ0FBQ2lCLHVCQUF1QixDQUFDSDtnQkFFekQsSUFBSUUsYUFBYTtvQkFDZixJQUFNSCxjQUFhLElBQUksQ0FBQ1osSUFBSSxDQUFDRyxTQUFTO29CQUV0QyxJQUFJLENBQUNKLFdBQVcsQ0FBQ1ksS0FBSyxDQUFDLEFBQUMsYUFBdUIsT0FBWEMsYUFBVztnQkFDakQsT0FBTztvQkFDTCxJQUFJSztvQkFFSkEsWUFBWWpCLEtBQUtrQixZQUFZO29CQUU3QixJQUFNQyxnQkFBZ0JGLFVBQVVILE9BQU87b0JBRXZDRyxZQUFZLElBQUksQ0FBQ2xCLFdBQVcsQ0FBQ3FCLGtCQUFrQixDQUFDRDtvQkFFaEQsSUFBSUYsY0FBYyxNQUFNO3dCQUN0QixJQUFNSSxrQkFBa0JKLFVBQVVkLFNBQVM7d0JBRTNDLElBQUksQ0FBQ0osV0FBVyxDQUFDWSxLQUFLLENBQUMsQUFBQyxtQkFBa0MsT0FBaEJVLGlCQUFnQjtvQkFDNUQsT0FBTzt3QkFDTHJCLEtBQUtzQixZQUFZLENBQUNMO3dCQUVsQlQsZUFBZTtvQkFDakI7Z0JBQ0Y7Z0JBRUEsSUFBSUEsY0FBYztvQkFDaEIsSUFBSSxDQUFDVCxXQUFXLENBQUNZLEtBQUssQ0FBQyxBQUFDLHdCQUFrQyxPQUFYQyxZQUFXO2dCQUM1RDtnQkFFQSxPQUFPSjtZQUNUOzs7O1lBSU9lLEtBQUFBO21CQUFQLFNBQU9BLHdCQUF3QkMsbUJBQW1CLEVBQUV6QixXQUFXO2dCQUM3RCxJQUFNLEFBQUUwQixPQUFTQyxZQUFHLENBQVpELE1BQ0Z6QixPQUFPeUIsS0FBS0YsdUJBQXVCLENBQUNDLHFCQUFxQnpCLGNBQ3pENEIsa0JBQWtCLElBQUk3QixnQkFBZ0JDLGFBQWFDO2dCQUV6RCxPQUFPMkI7WUFDVDs7OztLQVJBLG1DQUFPQyxRQUFPIn0=