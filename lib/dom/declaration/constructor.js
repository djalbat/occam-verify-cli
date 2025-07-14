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
                if (type === _type.objectType) {
                    typeVerified = true;
                } else {
                    var typeName = type.getName(), typeString = type.getString();
                    this.fileContext.trace("Verifying the '".concat(typeString, "' type..."));
                    var typePresent = this.fileContext.isTypePresentByTypeName(typeName);
                    if (!typePresent) {
                        this.fileContext.debug("The '".concat(typeString, "' type is not present."));
                    } else {
                        typeVerified = true;
                    }
                    if (typeVerified) {
                        this.fileContext.debug("...verified the '".concat(typeString, "' type."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vY29uc3RydWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgY29uc3RydWN0b3JWZXJpZmllciBmcm9tIFwiLi4vLi4vdmVyaWZpZXIvY29uc3RydWN0b3JcIjtcblxuaW1wb3J0IHsgb2JqZWN0VHlwZSB9IGZyb20gXCIuLi90eXBlXCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi8uLi9kb21cIjtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgQ29uc3RydWN0b3JEZWNsYXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGZpbGVDb250ZXh0LCBzdHJpbmcsIGNvbnN0cnVjdG9yKSB7XG4gICAgdGhpcy5maWxlQ29udGV4dCA9IGZpbGVDb250ZXh0O1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuY29uc3RydWN0b3IgPSBjb25zdHJ1Y3RvcjtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldENvbnN0cnVjdG9yKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yO1xuICB9XG5cbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllZDtcblxuICAgIGNvbnN0IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIHRoaXMuZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29uc3RydWN0b3JEZWNsYXJhdGlvblN0cmluZ30nIGNvbnN0cnVjdG9yIGRlY2xhcmF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBjb25zdHJ1Y3RvclZlcmlmaWVkID0gdGhpcy52ZXJpZnlDb25zdHJ1Y3RvcigpO1xuXG4gICAgaWYgKGNvbnN0cnVjdG9yVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IHR5cGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5VHlwZSgpO1xuXG4gICAgICBpZiAodHlwZVZlcmlmaWVkKSB7XG4gICAgICAgIGxldCB0eXBlO1xuXG4gICAgICAgIHR5cGUgPSB0aGlzLmNvbnN0cnVjdG9yLmdldFR5cGUoKTtcblxuICAgICAgICBjb25zdCB0eXBlTmFtZSA9IHR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICAgIHR5cGUgPSB0aGlzLmZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgICAgY29uc3QgdHlwZVByb3Zpc2lvbmFsID0gdHlwZS5pc1Byb3Zpc2lvbmFsKCksXG4gICAgICAgICAgICAgIGNvbnN0cnVjdG9yUHJvdmlzaW9uYWwgPSB0aGlzLmNvbnN0cnVjdG9yLmlzUHJvdmlzaW9uYWwoKTtcblxuICAgICAgICBpZiAodHlwZVByb3Zpc2lvbmFsICE9PSBjb25zdHJ1Y3RvclByb3Zpc2lvbmFsKSB7XG4gICAgICAgICAgY29uc3QgdHlwZVN0cmluZyA9IHR5cGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICAgICAgY29uc3RydWN0b3JTdHJpbmcgPSB0aGlzLmNvbnN0cnVjdG9yLmdldFN0cmluZygpO1xuXG4gICAgICAgICAgaWYgKHR5cGVQcm92aXNpb25hbCkge1xuICAgICAgICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIHByb3Zpc2lvbmFsIHdoaWxzdCB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3RvcidzIHR5cGUgaXMgbm90LmApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChjb25zdHJ1Y3RvclByb3Zpc2lvbmFsKSB7XG4gICAgICAgICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgbm90IHByb3Zpc2lvbmFsIHdoaWxzdCB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3RvcidzIHR5cGUgaXMuYCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY29uc3RydWN0b3Iuc2V0VHlwZSh0eXBlKTtcblxuICAgICAgICAgIHRoaXMuZmlsZUNvbnRleHQuYWRkQ29uc3RydWN0b3IodGhpcy5jb25zdHJ1Y3Rvcik7XG5cbiAgICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb25zdHJ1Y3RvckRlY2xhcmF0aW9uU3RyaW5nfScgY29uc3RydWN0b3IgZGVjbGFyYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5VHlwZSgpIHtcbiAgICBsZXQgdHlwZVZlcmlmaWVkO1xuXG4gICAgY29uc3QgdHlwZSA9IHRoaXMuY29uc3RydWN0b3IuZ2V0VHlwZSgpO1xuXG4gICAgaWYgKHR5cGUgPT09IG9iamVjdFR5cGUpIHtcbiAgICAgIHR5cGVWZXJpZmllZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVOYW1lID0gdHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgICB0eXBlU3RyaW5nID0gdHlwZS5nZXRTdHJpbmcoKTtcblxuICAgICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS4uLmApO1xuXG4gICAgICBjb25zdCB0eXBlUHJlc2VudCA9IHRoaXMuZmlsZUNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICBpZiAoIXR5cGVQcmVzZW50KSB7XG4gICAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR5cGVWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlVmVyaWZpZWQpIHtcbiAgICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVTdHJpbmd9JyB0eXBlLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlDb25zdHJ1Y3RvcigpIHtcbiAgICBsZXQgY29uc3RydWN0b3JWZXJpZmllZDtcblxuICAgIGNvbnN0IGNvbnN0cnVjdG9yU3RyaW5nID0gdGhpcy5jb25zdHJ1Y3Rvci5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMuZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci4uLmApO1xuXG4gICAgY29uc3QgdGVybSA9IHRoaXMuY29uc3RydWN0b3IuZ2V0VGVybSgpLFxuICAgICAgICAgIHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCk7XG5cbiAgICBjb25zdHJ1Y3RvclZlcmlmaWVkID0gY29uc3RydWN0b3JWZXJpZmllci52ZXJpZnlUZXJtKHRlcm1Ob2RlLCB0aGlzLmZpbGVDb250ZXh0KTtcblxuICAgIGlmIChjb25zdHJ1Y3RvclZlcmlmaWVkKSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JWZXJpZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJDb25zdHJ1Y3RvckRlY2xhcmF0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IENvbnN0cnVjdG9yIH0gPSBkb20sXG4gICAgICAgICAgbm9kZSA9IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIGNvbnN0cnVjdG9yID0gQ29uc3RydWN0b3IuZnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgY29uc3RydWN0b3JEZWNsYXJhdGlvbiA9IG5ldyBDb25zdHJ1Y3RvckRlY2xhcmF0aW9uKGZpbGVDb250ZXh0LCBzdHJpbmcsIGNvbnN0cnVjdG9yKTtcblxuICAgIHJldHVybiBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkb21Bc3NpZ25lZCIsIkNvbnN0cnVjdG9yRGVjbGFyYXRpb24iLCJmaWxlQ29udGV4dCIsInN0cmluZyIsImNvbnN0cnVjdG9yIiwiZ2V0RmlsZUNvbnRleHQiLCJnZXRTdHJpbmciLCJnZXRDb25zdHJ1Y3RvciIsInZlcmlmeSIsInZlcmlmaWVkIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvblN0cmluZyIsInRyYWNlIiwiY29uc3RydWN0b3JWZXJpZmllZCIsInZlcmlmeUNvbnN0cnVjdG9yIiwidHlwZVZlcmlmaWVkIiwidmVyaWZ5VHlwZSIsInR5cGUiLCJnZXRUeXBlIiwidHlwZU5hbWUiLCJnZXROYW1lIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwidHlwZVByb3Zpc2lvbmFsIiwiaXNQcm92aXNpb25hbCIsImNvbnN0cnVjdG9yUHJvdmlzaW9uYWwiLCJ0eXBlU3RyaW5nIiwiY29uc3RydWN0b3JTdHJpbmciLCJkZWJ1ZyIsInNldFR5cGUiLCJhZGRDb25zdHJ1Y3RvciIsIm9iamVjdFR5cGUiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwidGVybSIsImdldFRlcm0iLCJ0ZXJtTm9kZSIsImdldE5vZGUiLCJjb25zdHJ1Y3RvclZlcmlmaWVyIiwidmVyaWZ5VGVybSIsImZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiQ29uc3RydWN0b3IiLCJkb20iLCJub2RlIiwibm9kZUFzU3RyaW5nIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7OzJEQVBnQjtrRUFFZ0I7b0JBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRzNCLFdBQWVBLElBQUFBLGdCQUFXLDJDQUFDO2FBQU1DLHVCQUNuQkMsV0FBVyxFQUFFQyxNQUFNLEVBQUVDLFdBQVc7Z0NBRGJIO1FBRTdCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUMsV0FBVyxHQUFHQzs7OztZQUdyQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxXQUFXO1lBQ3pCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVc7WUFDekI7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUM7Z0JBRUosSUFBTUMsK0JBQStCLElBQUksQ0FBQ0osU0FBUyxJQUFJLEdBQUc7Z0JBRTFELElBQUksQ0FBQ0osV0FBVyxDQUFDUyxLQUFLLENBQUMsQUFBQyxrQkFBOEMsT0FBN0JE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