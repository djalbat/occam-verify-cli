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
    function ConstructorDeclaration(context, node, string, constructor) {
        _class_call_check(this, ConstructorDeclaration);
        this.context = context;
        this.node = node;
        this.string = string;
        this.constructor = constructor;
    }
    _create_class(ConstructorDeclaration, [
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
            key: "getConstructor",
            value: function getConstructor() {
                return this.constructor;
            }
        },
        {
            key: "verify",
            value: function verify() {
                var verifies;
                var constructorDeclarationString = this.getString(); ///
                this.context.trace("Verifying the '".concat(constructorDeclarationString, "' constructor declaration..."), this.node);
                var constructorTypeVerifies = this.verifyConstructorType();
                if (constructorTypeVerifies) {
                    var constructorVerifies = this.verifyConstructor();
                    if (constructorVerifies) {
                        this.context.addConstructor(this.constructor);
                        verifies = true;
                    }
                }
                if (verifies) {
                    this.context.debug("...verified the '".concat(constructorDeclarationString, "' constructor declaration."), this.node);
                }
                return verifies;
            }
        },
        {
            key: "verifyConstructor",
            value: function verifyConstructor() {
                var constructorVerifies;
                var constructorString = this.constructor.getString();
                this.context.trace("Verifying the '".concat(constructorString, "' constructor..."), this.node);
                var term = this.constructor.getTerm(), termNode = term.getNode();
                constructorVerifies = _constructor.default.verifyTerm(termNode, this.context);
                if (constructorVerifies) {
                    this.context.debug("...verified the '".concat(constructorString, "' constructor."), this.node);
                }
                return constructorVerifies;
            }
        },
        {
            key: "verifyConstructorType",
            value: function verifyConstructorType() {
                var constructorTypeVerifies = false;
                var type;
                type = this.constructor.getType();
                var typeName = type.getName(), typeString = type.getString();
                this.context.trace("Verifying the '".concat(typeString, "' type..."), this.node);
                var includeSupertypes = false, provisional = type.isProvisional(includeSupertypes);
                type = this.context.findTypeByTypeName(typeName);
                var typePresent = type !== null;
                if (!typePresent) {
                    this.context.debug("The '".concat(typeString, "' type is not present."), this.node);
                } else {
                    var provisionalMatches = type.matchProvisional(provisional);
                    if (!provisionalMatches) {
                        provisional ? this.context.debug("The '".concat(typeString, "' type is present but not provisional."), this.node) : this.context.debug("The '".concat(typeString, "' type is present but provisional."), this.node);
                    } else {
                        this.constructor.setType(type);
                        constructorTypeVerifies = true;
                    }
                }
                if (constructorTypeVerifies) {
                    this.context.debug("...verified the '".concat(typeString, "' type."), this.node);
                }
                return constructorTypeVerifies;
            }
        }
    ], [
        {
            key: "fromConstructorDeclarationNode",
            value: function fromConstructorDeclarationNode(constructorDeclarationNode, context) {
                var Constructor = _dom.default.Constructor, node = constructorDeclarationNode, string = context.nodeAsString(node), constructor = Constructor.fromConstructorDeclarationNode(constructorDeclarationNode, context), constructorDeclaration = new ConstructorDeclaration(context, node, string, constructor);
                return constructorDeclaration;
            }
        }
    ]);
    return ConstructorDeclaration;
}(), _define_property(_ConstructorDeclaration, "name", "ConstructorDeclaration"), _ConstructorDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vZGVjbGFyYXRpb24vY29uc3RydWN0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgY29uc3RydWN0b3JWZXJpZmllciBmcm9tIFwiLi4vLi4vdmVyaWZpZXIvY29uc3RydWN0b3JcIjtcblxuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIENvbnN0cnVjdG9yRGVjbGFyYXRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBub2RlLCBzdHJpbmcsIGNvbnN0cnVjdG9yKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMuY29uc3RydWN0b3IgPSBjb25zdHJ1Y3RvcjtcbiAgfVxuXG4gIGdldENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dDtcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRDb25zdHJ1Y3RvcigpIHtcbiAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXM7XG5cbiAgICBjb25zdCBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICB0aGlzLmNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29uc3RydWN0b3JEZWNsYXJhdGlvblN0cmluZ30nIGNvbnN0cnVjdG9yIGRlY2xhcmF0aW9uLi4uYCwgdGhpcy5ub2RlKTtcblxuICAgIGNvbnN0IGNvbnN0cnVjdG9yVHlwZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlDb25zdHJ1Y3RvclR5cGUoKTtcblxuICAgIGlmIChjb25zdHJ1Y3RvclR5cGVWZXJpZmllcykge1xuICAgICAgY29uc3QgY29uc3RydWN0b3JWZXJpZmllcyA9IHRoaXMudmVyaWZ5Q29uc3RydWN0b3IoKTtcblxuICAgICAgaWYgKGNvbnN0cnVjdG9yVmVyaWZpZXMpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0LmFkZENvbnN0cnVjdG9yKHRoaXMuY29uc3RydWN0b3IpO1xuXG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIHRoaXMuY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbnN0cnVjdG9yRGVjbGFyYXRpb25TdHJpbmd9JyBjb25zdHJ1Y3RvciBkZWNsYXJhdGlvbi5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeUNvbnN0cnVjdG9yKCkge1xuICAgIGxldCBjb25zdHJ1Y3RvclZlcmlmaWVzO1xuXG4gICAgY29uc3QgY29uc3RydWN0b3JTdHJpbmcgPSB0aGlzLmNvbnN0cnVjdG9yLmdldFN0cmluZygpO1xuXG4gICAgdGhpcy5jb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IuLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgY29uc3QgdGVybSA9IHRoaXMuY29uc3RydWN0b3IuZ2V0VGVybSgpLFxuICAgICAgICAgIHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCk7XG5cbiAgICBjb25zdHJ1Y3RvclZlcmlmaWVzID0gY29uc3RydWN0b3JWZXJpZmllci52ZXJpZnlUZXJtKHRlcm1Ob2RlLCB0aGlzLmNvbnRleHQpO1xuXG4gICAgaWYgKGNvbnN0cnVjdG9yVmVyaWZpZXMpIHtcbiAgICAgIHRoaXMuY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IuYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeUNvbnN0cnVjdG9yVHlwZSgpIHtcbiAgICBsZXQgY29uc3RydWN0b3JUeXBlVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGxldCB0eXBlO1xuXG4gICAgdHlwZSA9IHRoaXMuY29uc3RydWN0b3IuZ2V0VHlwZSgpO1xuXG4gICAgY29uc3QgdHlwZU5hbWUgPSB0eXBlLmdldE5hbWUoKSxcbiAgICAgICAgICB0eXBlU3RyaW5nID0gdHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMuY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBjb25zdCBpbmNsdWRlU3VwZXJ0eXBlcyA9IGZhbHNlLFxuICAgICAgICAgIHByb3Zpc2lvbmFsID0gdHlwZS5pc1Byb3Zpc2lvbmFsKGluY2x1ZGVTdXBlcnR5cGVzKTtcblxuICAgIHR5cGUgPSB0aGlzLmNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgIGNvbnN0IHR5cGVQcmVzZW50ID0gKHR5cGUgIT09IG51bGwpXG5cbiAgICBpZiAoIXR5cGVQcmVzZW50KSB7XG4gICAgICB0aGlzLmNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBub3QgcHJlc2VudC5gLCB0aGlzLm5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwcm92aXNpb25hbE1hdGNoZXMgPSB0eXBlLm1hdGNoUHJvdmlzaW9uYWwocHJvdmlzaW9uYWwpO1xuXG4gICAgICBpZiAoIXByb3Zpc2lvbmFsTWF0Y2hlcykge1xuICAgICAgICBwcm92aXNpb25hbCA/XG4gICAgICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgcHJlc2VudCBidXQgbm90IHByb3Zpc2lvbmFsLmAsIHRoaXMubm9kZSkgOlxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgcHJlc2VudCBidXQgcHJvdmlzaW9uYWwuYCwgdGhpcy5ub2RlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29uc3RydWN0b3Iuc2V0VHlwZSh0eXBlKTtcblxuICAgICAgICBjb25zdHJ1Y3RvclR5cGVWZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvbnN0cnVjdG9yVHlwZVZlcmlmaWVzKSB7XG4gICAgICB0aGlzLmNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBjb25zdHJ1Y3RvclR5cGVWZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJDb25zdHJ1Y3RvckRlY2xhcmF0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgQ29uc3RydWN0b3IgfSA9IGRvbSxcbiAgICAgICAgICBub2RlID0gY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICBjb25zdHJ1Y3RvciA9IENvbnN0cnVjdG9yLmZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZShjb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgY29uc3RydWN0b3JEZWNsYXJhdGlvbiA9IG5ldyBDb25zdHJ1Y3RvckRlY2xhcmF0aW9uKGNvbnRleHQsIG5vZGUsIHN0cmluZywgY29uc3RydWN0b3IpO1xuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yRGVjbGFyYXRpb247XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRvbUFzc2lnbmVkIiwiQ29uc3RydWN0b3JEZWNsYXJhdGlvbiIsImNvbnRleHQiLCJub2RlIiwic3RyaW5nIiwiY29uc3RydWN0b3IiLCJnZXRDb250ZXh0IiwiZ2V0Tm9kZSIsImdldFN0cmluZyIsImdldENvbnN0cnVjdG9yIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uU3RyaW5nIiwidHJhY2UiLCJjb25zdHJ1Y3RvclR5cGVWZXJpZmllcyIsInZlcmlmeUNvbnN0cnVjdG9yVHlwZSIsImNvbnN0cnVjdG9yVmVyaWZpZXMiLCJ2ZXJpZnlDb25zdHJ1Y3RvciIsImFkZENvbnN0cnVjdG9yIiwiZGVidWciLCJjb25zdHJ1Y3RvclN0cmluZyIsInRlcm0iLCJnZXRUZXJtIiwidGVybU5vZGUiLCJjb25zdHJ1Y3RvclZlcmlmaWVyIiwidmVyaWZ5VGVybSIsInR5cGUiLCJnZXRUeXBlIiwidHlwZU5hbWUiLCJnZXROYW1lIiwidHlwZVN0cmluZyIsImluY2x1ZGVTdXBlcnR5cGVzIiwicHJvdmlzaW9uYWwiLCJpc1Byb3Zpc2lvbmFsIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwidHlwZVByZXNlbnQiLCJwcm92aXNpb25hbE1hdGNoZXMiLCJtYXRjaFByb3Zpc2lvbmFsIiwic2V0VHlwZSIsImZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiQ29uc3RydWN0b3IiLCJkb20iLCJub2RlQXNTdHJpbmciLCJjb25zdHJ1Y3RvckRlY2xhcmF0aW9uIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFBOzs7MkRBTmdCO2tFQUVnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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