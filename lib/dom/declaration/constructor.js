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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vY29uc3RydWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgY29uc3RydWN0b3JWZXJpZmllciBmcm9tIFwiLi4vLi4vdmVyaWZpZXIvY29uc3RydWN0b3JcIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIENvbnN0cnVjdG9yRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3RvcihmaWxlQ29udGV4dCwgc3RyaW5nLCBjb25zdHJ1Y3Rvcikge1xuICAgIHRoaXMuZmlsZUNvbnRleHQgPSBmaWxlQ29udGV4dDtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLmNvbnN0cnVjdG9yID0gY29uc3RydWN0b3I7XG4gIH1cblxuICBnZXRGaWxlQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlQ29udGV4dDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRDb25zdHJ1Y3RvcigpIHtcbiAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICBjb25zdCBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbnN0cnVjdG9yRGVjbGFyYXRpb25TdHJpbmd9JyBjb25zdHJ1Y3RvciBkZWNsYXJhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgY29uc3RydWN0b3JWZXJpZmllZCA9IHRoaXMudmVyaWZ5Q29uc3RydWN0b3IoKTtcblxuICAgIGlmIChjb25zdHJ1Y3RvclZlcmlmaWVkKSB7XG4gICAgICBjb25zdCB0eXBlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVR5cGUoKTtcblxuICAgICAgaWYgKHR5cGVWZXJpZmllZCkge1xuICAgICAgICBsZXQgdHlwZTtcblxuICAgICAgICB0eXBlID0gdGhpcy5jb25zdHJ1Y3Rvci5nZXRUeXBlKCk7XG5cbiAgICAgICAgY29uc3QgdHlwZU5hbWUgPSB0eXBlLmdldE5hbWUoKTtcblxuICAgICAgICB0eXBlID0gdGhpcy5maWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICAgIGNvbnN0IHR5cGVQcm92aXNpb25hbCA9IHR5cGUuaXNQcm92aXNpb25hbCgpLFxuICAgICAgICAgICAgICBjb25zdHJ1Y3RvclByb3Zpc2lvbmFsID0gdGhpcy5jb25zdHJ1Y3Rvci5pc1Byb3Zpc2lvbmFsKCk7XG5cbiAgICAgICAgaWYgKHR5cGVQcm92aXNpb25hbCAhPT0gY29uc3RydWN0b3JQcm92aXNpb25hbCkge1xuICAgICAgICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0eXBlLmdldFN0cmluZygpLFxuICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yU3RyaW5nID0gdGhpcy5jb25zdHJ1Y3Rvci5nZXRTdHJpbmcoKTtcblxuICAgICAgICAgIGlmICh0eXBlUHJvdmlzaW9uYWwpIHtcbiAgICAgICAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBwcm92aXNpb25hbCB3aGlsc3QgdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IncyB0eXBlIGlzIG5vdC5gKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoY29uc3RydWN0b3JQcm92aXNpb25hbCkge1xuICAgICAgICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIG5vdCBwcm92aXNpb25hbCB3aGlsc3QgdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IncyB0eXBlIGlzLmApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9yLnNldFR5cGUodHlwZSk7XG5cbiAgICAgICAgICB0aGlzLmZpbGVDb250ZXh0LmFkZENvbnN0cnVjdG9yKHRoaXMuY29uc3RydWN0b3IpO1xuXG4gICAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29uc3RydWN0b3JEZWNsYXJhdGlvblN0cmluZ30nIGNvbnN0cnVjdG9yIGRlY2xhcmF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVR5cGUoKSB7XG4gICAgbGV0IHR5cGVWZXJpZmllZDtcblxuICAgIGNvbnN0IHR5cGUgPSB0aGlzLmNvbnN0cnVjdG9yLmdldFR5cGUoKTtcblxuICAgIGNvbnN0IHR5cGVOYW1lID0gdHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgdHlwZVN0cmluZyA9IHR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVTdHJpbmd9JyB0eXBlLi4uYCk7XG5cbiAgICBjb25zdCB0eXBlUHJlc2VudCA9IHRoaXMuZmlsZUNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgaWYgKCF0eXBlUHJlc2VudCkge1xuICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0eXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0eXBlVmVyaWZpZWQpIHtcbiAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5Q29uc3RydWN0b3IoKSB7XG4gICAgbGV0IGNvbnN0cnVjdG9yVmVyaWZpZWQ7XG5cbiAgICBjb25zdCBjb25zdHJ1Y3RvclN0cmluZyA9IHRoaXMuY29uc3RydWN0b3IuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IuLi5gKTtcblxuICAgIGNvbnN0IHRlcm0gPSB0aGlzLmNvbnN0cnVjdG9yLmdldFRlcm0oKSxcbiAgICAgICAgICB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpO1xuXG4gICAgY29uc3RydWN0b3JWZXJpZmllZCA9IGNvbnN0cnVjdG9yVmVyaWZpZXIudmVyaWZ5VGVybSh0ZXJtTm9kZSwgdGhpcy5maWxlQ29udGV4dCk7XG5cbiAgICBpZiAoY29uc3RydWN0b3JWZXJpZmllZCkge1xuICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yVmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQ29uc3RydWN0b3JEZWNsYXJhdGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBDb25zdHJ1Y3RvciB9ID0gZG9tLFxuICAgICAgICAgIG5vZGUgPSBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICBjb25zdHJ1Y3RvciA9IENvbnN0cnVjdG9yLmZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIGNvbnN0cnVjdG9yRGVjbGFyYXRpb24gPSBuZXcgQ29uc3RydWN0b3JEZWNsYXJhdGlvbihmaWxlQ29udGV4dCwgc3RyaW5nLCBjb25zdHJ1Y3Rvcik7XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JEZWNsYXJhdGlvbjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZG9tQXNzaWduZWQiLCJDb25zdHJ1Y3RvckRlY2xhcmF0aW9uIiwiZmlsZUNvbnRleHQiLCJzdHJpbmciLCJjb25zdHJ1Y3RvciIsImdldEZpbGVDb250ZXh0IiwiZ2V0U3RyaW5nIiwiZ2V0Q29uc3RydWN0b3IiLCJ2ZXJpZnkiLCJ2ZXJpZmllZCIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25TdHJpbmciLCJ0cmFjZSIsImNvbnN0cnVjdG9yVmVyaWZpZWQiLCJ2ZXJpZnlDb25zdHJ1Y3RvciIsInR5cGVWZXJpZmllZCIsInZlcmlmeVR5cGUiLCJ0eXBlIiwiZ2V0VHlwZSIsInR5cGVOYW1lIiwiZ2V0TmFtZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInR5cGVQcm92aXNpb25hbCIsImlzUHJvdmlzaW9uYWwiLCJjb25zdHJ1Y3RvclByb3Zpc2lvbmFsIiwidHlwZVN0cmluZyIsImNvbnN0cnVjdG9yU3RyaW5nIiwiZGVidWciLCJzZXRUeXBlIiwiYWRkQ29uc3RydWN0b3IiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwidGVybSIsImdldFRlcm0iLCJ0ZXJtTm9kZSIsImdldE5vZGUiLCJjb25zdHJ1Y3RvclZlcmlmaWVyIiwidmVyaWZ5VGVybSIsImZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiQ29uc3RydWN0b3IiLCJkb20iLCJub2RlIiwibm9kZUFzU3RyaW5nIiwiY29uc3RydWN0b3JEZWNsYXJhdGlvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBQTs7OzJEQU5nQjtrRUFFZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSWhDLFdBQWVBLElBQUFBLGdCQUFXLDJDQUFDO2FBQU1DLHVCQUNuQkMsV0FBVyxFQUFFQyxNQUFNLEVBQUVDLFdBQVc7Z0NBRGJIO1FBRTdCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUMsV0FBVyxHQUFHQzs7OztZQUdyQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxXQUFXO1lBQ3pCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVc7WUFDekI7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUM7Z0JBRUosSUFBTUMsK0JBQStCLElBQUksQ0FBQ0osU0FBUyxJQUFJLEdBQUc7Z0JBRTFELElBQUksQ0FBQ0osV0FBVyxDQUFDUyxLQUFLLENBQUMsQUFBQyxrQkFBOEMsT0FBN0JELDhCQUE2QjtnQkFFdEUsSUFBTUUsc0JBQXNCLElBQUksQ0FBQ0MsaUJBQWlCO2dCQUVsRCxJQUFJRCxxQkFBcUI7b0JBQ3ZCLElBQU1FLGVBQWUsSUFBSSxDQUFDQyxVQUFVO29CQUVwQyxJQUFJRCxjQUFjO3dCQUNoQixJQUFJRTt3QkFFSkEsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDQyxP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