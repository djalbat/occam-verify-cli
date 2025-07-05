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
var _constructor = /*#__PURE__*/ _interop_require_default(require("../../verifier/constructor"));
var _type = require("../type");
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
var _ConstructorDeclaration;
var _default = (0, _dom.domAssigned)((_ConstructorDeclaration = /*#__PURE__*/ function() {
    function ConstructorDeclaration(fileContext, string, constructor) {
        _class_call_check(this, ConstructorDeclaration);
        this.fileContext = fileContext;
        this.string = string;
        this.constructor = constructor;
    }
    _create_class(ConstructorDeclaration, [
        {
            key: "getFileContext",
            value: function getFileContext() {
                return this.fileContext;
            }
        },
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getConstructor",
            value: function getConstructor() {
                return this.constructor;
            }
        },
        {
            key: "verify",
            value: function verify() {
                var verified;
                var constructorDeclarationString = this.getString(); ///
                this.fileContext.trace("Verifying the '".concat(constructorDeclarationString, "' constructor declaration..."));
                var constructorVerified = this.verifyConstructor();
                if (constructorVerified) {
                    var typeVerified = this.verifyType();
                    if (typeVerified) {
                        var type;
                        type = this.constructor.getType();
                        var typeName = type.getName();
                        type = this.fileContext.findTypeByTypeName(typeName);
                        var typeProvisional = type.isProvisional(), constructorProvisional = this.constructor.isProvisional();
                        if (typeProvisional !== constructorProvisional) {
                            var typeString = type.getString(), constructorString = this.constructor.getString();
                            if (typeProvisional) {
                                this.fileContext.debug("The '".concat(typeString, "' type is provisional whilst the '").concat(constructorString, "' constructor's type is not."));
                            }
                            if (constructorProvisional) {
                                this.fileContext.debug("The '".concat(typeString, "' type is not provisional whilst the '").concat(constructorString, "' constructor's type is."));
                            }
                        } else {
                            this.constructor.setType(type);
                            this.fileContext.addConstructor(this.constructor);
                            verified = true;
                        }
                    }
                }
                if (verified) {
                    this.fileContext.debug("...verified the '".concat(constructorDeclarationString, "' constructor declaration."));
                }
                return verified;
            }
        },
        {
            key: "verifyType",
            value: function verifyType() {
                var typeVerified;
                var type = this.constructor.getType();
                if (type === _type.baseType) {
                    typeVerified = true;
                } else {
                    var typeName = type.getName();
                    this.fileContext.trace("Verifying the '".concat(typeName, "' type..."));
                    var typePresent = this.fileContext.isTypePresentByTypeName(typeName);
                    if (!typePresent) {
                        this.fileContext.debug("The '".concat(typeName, "' type is not present."));
                    } else {
                        typeVerified = true;
                    }
                    if (typeVerified) {
                        this.fileContext.debug("...verified the '".concat(typeName, "' type."));
                    }
                }
                return typeVerified;
            }
        },
        {
            key: "verifyConstructor",
            value: function verifyConstructor() {
                var constructorVerified;
                var constructorString = this.constructor.getString();
                this.fileContext.trace("Verifying the '".concat(constructorString, "' constructor..."));
                var term = this.constructor.getTerm(), termNode = term.getNode();
                constructorVerified = _constructor.default.verifyTerm(termNode, this.fileContext);
                if (constructorVerified) {
                    this.fileContext.debug("...verified the '".concat(constructorString, "' constructor."));
                }
                return constructorVerified;
            }
        }
    ], [
        {
            key: "fromConstructorDeclarationNode",
            value: function fromConstructorDeclarationNode(constructorDeclarationNode, fileContext) {
                var Constructor = _dom.default.Constructor, node = constructorDeclarationNode, string = fileContext.nodeAsString(node), constructor = Constructor.fromConstructorDeclarationNode(constructorDeclarationNode, fileContext), constructorDeclaration = new ConstructorDeclaration(fileContext, string, constructor);
                return constructorDeclaration;
            }
        }
    ]);
    return ConstructorDeclaration;
}(), _define_property(_ConstructorDeclaration, "name", "ConstructorDeclaration"), _ConstructorDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vY29uc3RydWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgY29uc3RydWN0b3JWZXJpZmllciBmcm9tIFwiLi4vLi4vdmVyaWZpZXIvY29uc3RydWN0b3JcIjtcblxuaW1wb3J0IHsgYmFzZVR5cGUgfSBmcm9tIFwiLi4vdHlwZVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIENvbnN0cnVjdG9yRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3RvcihmaWxlQ29udGV4dCwgc3RyaW5nLCBjb25zdHJ1Y3Rvcikge1xuICAgIHRoaXMuZmlsZUNvbnRleHQgPSBmaWxlQ29udGV4dDtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLmNvbnN0cnVjdG9yID0gY29uc3RydWN0b3I7XG4gIH1cblxuICBnZXRGaWxlQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlQ29udGV4dDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRDb25zdHJ1Y3RvcigpIHtcbiAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICBjb25zdCBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbnN0cnVjdG9yRGVjbGFyYXRpb25TdHJpbmd9JyBjb25zdHJ1Y3RvciBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgY29uc3RydWN0b3JWZXJpZmllZCA9IHRoaXMudmVyaWZ5Q29uc3RydWN0b3IoKTtcblxuICAgIGlmIChjb25zdHJ1Y3RvclZlcmlmaWVkKSB7XG4gICAgICBjb25zdCB0eXBlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVR5cGUoKTtcblxuICAgICAgaWYgKHR5cGVWZXJpZmllZCkge1xuICAgICAgICBsZXQgdHlwZTtcblxuICAgICAgICB0eXBlID0gdGhpcy5jb25zdHJ1Y3Rvci5nZXRUeXBlKCk7XG5cbiAgICAgICAgY29uc3QgdHlwZU5hbWUgPSB0eXBlLmdldE5hbWUoKTtcblxuICAgICAgICB0eXBlID0gdGhpcy5maWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICAgIGNvbnN0IHR5cGVQcm92aXNpb25hbCA9IHR5cGUuaXNQcm92aXNpb25hbCgpLFxuICAgICAgICAgICAgICBjb25zdHJ1Y3RvclByb3Zpc2lvbmFsID0gdGhpcy5jb25zdHJ1Y3Rvci5pc1Byb3Zpc2lvbmFsKCk7XG5cbiAgICAgICAgaWYgKHR5cGVQcm92aXNpb25hbCAhPT0gY29uc3RydWN0b3JQcm92aXNpb25hbCkge1xuICAgICAgICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0eXBlLmdldFN0cmluZygpLFxuICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yU3RyaW5nID0gdGhpcy5jb25zdHJ1Y3Rvci5nZXRTdHJpbmcoKTtcblxuICAgICAgICAgIGlmICh0eXBlUHJvdmlzaW9uYWwpIHtcbiAgICAgICAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBwcm92aXNpb25hbCB3aGlsc3QgdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IncyB0eXBlIGlzIG5vdC5gKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoY29uc3RydWN0b3JQcm92aXNpb25hbCkge1xuICAgICAgICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIG5vdCBwcm92aXNpb25hbCB3aGlsc3QgdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IncyB0eXBlIGlzLmApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLnNldFR5cGUodHlwZSk7XG5cbiAgICAgICAgICB0aGlzLmZpbGVDb250ZXh0LmFkZENvbnN0cnVjdG9yKHRoaXMuY29uc3RydWN0b3IpO1xuXG4gICAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29uc3RydWN0b3JEZWNsYXJhdGlvblN0cmluZ30nIGNvbnN0cnVjdG9yIGRlY2xhcmF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVR5cGUoKSB7XG4gICAgbGV0IHR5cGVWZXJpZmllZDtcblxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLmNvbnN0cnVjdG9yLmdldFR5cGUoKTtcblxuICAgIGlmICh0eXBlID09PSBiYXNlVHlwZSkge1xuICAgICAgdHlwZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZU5hbWUgPSB0eXBlLmdldE5hbWUoKTtcblxuICAgICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlTmFtZX0nIHR5cGUuLi5gKTtcblxuICAgICAgY29uc3QgdHlwZVByZXNlbnQgPSB0aGlzLmZpbGVDb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgICAgaWYgKCF0eXBlUHJlc2VudCkge1xuICAgICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZU5hbWV9JyB0eXBlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVWZXJpZmllZCkge1xuICAgICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZU5hbWV9JyB0eXBlLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlDb25zdHJ1Y3RvcigpIHtcbiAgICBsZXQgY29uc3RydWN0b3JWZXJpZmllZDtcblxuICAgIGNvbnN0IGNvbnN0cnVjdG9yU3RyaW5nID0gdGhpcy5jb25zdHJ1Y3Rvci5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci4uLmApO1xuXG4gICAgY29uc3QgdGVybSA9IHRoaXMuY29uc3RydWN0b3IuZ2V0VGVybSgpLFxuICAgICAgICAgIHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCk7XG5cbiAgICBjb25zdHJ1Y3RvclZlcmlmaWVkID0gY29uc3RydWN0b3JWZXJpZmllci52ZXJpZnlUZXJtKHRlcm1Ob2RlLCB0aGlzLmZpbGVDb250ZXh0KTtcblxuICAgIGlmIChjb25zdHJ1Y3RvclZlcmlmaWVkKSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JWZXJpZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJDb25zdHJ1Y3RvckRlY2xhcmF0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IENvbnN0cnVjdG9yIH0gPSBkb20sXG4gICAgICAgICAgbm9kZSA9IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIGNvbnN0cnVjdG9yID0gQ29uc3RydWN0b3IuZnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgY29uc3RydWN0b3JEZWNsYXJhdGlvbiA9IG5ldyBDb25zdHJ1Y3RvckRlY2xhcmF0aW9uKGZpbGVDb250ZXh0LCBzdHJpbmcsIGNvbnN0cnVjdG9yKTtcblxuICAgIHJldHVybiBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkb21Bc3NpZ25lZCIsIkNvbnN0cnVjdG9yRGVjbGFyYXRpb24iLCJmaWxlQ29udGV4dCIsInN0cmluZyIsImNvbnN0cnVjdG9yIiwiZ2V0RmlsZUNvbnRleHQiLCJnZXRTdHJpbmciLCJnZXRDb25zdHJ1Y3RvciIsInZlcmlmeSIsInZlcmlmaWVkIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvblN0cmluZyIsInRyYWNlIiwiY29uc3RydWN0b3JWZXJpZmllZCIsInZlcmlmeUNvbnN0cnVjdG9yIiwidHlwZVZlcmlmaWVkIiwidmVyaWZ5VHlwZSIsInR5cGUiLCJnZXRUeXBlIiwidHlwZU5hbWUiLCJnZXROYW1lIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwidHlwZVByb3Zpc2lvbmFsIiwiaXNQcm92aXNpb25hbCIsImNvbnN0cnVjdG9yUHJvdmlzaW9uYWwiLCJ0eXBlU3RyaW5nIiwiY29uc3RydWN0b3JTdHJpbmciLCJkZWJ1ZyIsInNldFR5cGUiLCJhZGRDb25zdHJ1Y3RvciIsImJhc2VUeXBlIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsInRlcm0iLCJnZXRUZXJtIiwidGVybU5vZGUiLCJnZXROb2RlIiwiY29uc3RydWN0b3JWZXJpZmllciIsInZlcmlmeVRlcm0iLCJmcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsIkNvbnN0cnVjdG9yIiwiZG9tIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQUE7OzsyREFQZ0I7a0VBRWdCO29CQUVQOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUd6QixXQUFlQSxJQUFBQSxnQkFBVywyQ0FBQzthQUFNQyx1QkFDbkJDLFdBQVcsRUFBRUMsTUFBTSxFQUFFQyxXQUFXO2dDQURiSDtRQUU3QixJQUFJLENBQUNDLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDLFdBQVcsR0FBR0M7Ozs7WUFHckJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsV0FBVztZQUN6Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQyxXQUFXO1lBQ3pCOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQUlDO2dCQUVKLElBQU1DLCtCQUErQixJQUFJLENBQUNKLFNBQVMsSUFBSSxHQUFHO2dCQUUxRCxJQUFJLENBQUNKLFdBQVcsQ0FBQ1MsS0FBSyxDQUFDLEFBQUMsa0JBQThDLE9BQTdCRCw4QkFBNkI7Z0JBRXRFLElBQU1FLHNCQUFzQixJQUFJLENBQUNDLGlCQUFpQjtnQkFFbEQsSUFB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