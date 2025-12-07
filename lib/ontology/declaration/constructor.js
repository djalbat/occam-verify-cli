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
var _default = (0, _ontology.define)((_ConstructorDeclaration = /*#__PURE__*/ function() {
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
                var constructorDeclarationString = this.string; ///
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
                var typeString = type.getString();
                this.context.trace("Verifying the '".concat(typeString, "' type..."), this.node);
                var nominalTypeName = type.getNominalTypeName();
                type = this.context.findTypeByNominalTypeName(nominalTypeName);
                var typePresent = type !== null;
                if (!typePresent) {
                    this.context.debug("The '".concat(typeString, "' type is not present."), this.node);
                } else {
                    var includeSupertypes = false, provisional = type.isProvisional(includeSupertypes), provisionalMatches = type.matchProvisional(provisional);
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
                var Constructor = _ontology.default.Constructor, node = constructorDeclarationNode, string = context.nodeAsString(node), constructor = Constructor.fromConstructorDeclarationNode(constructorDeclarationNode, context), constructorDeclaration = new ConstructorDeclaration(context, node, string, constructor);
                return constructorDeclaration;
            }
        }
    ]);
    return ConstructorDeclaration;
}(), _define_property(_ConstructorDeclaration, "name", "ConstructorDeclaration"), _ConstructorDeclaration));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbnRvbG9neS9kZWNsYXJhdGlvbi9jb25zdHJ1Y3Rvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IG9udG9sb2d5IGZyb20gXCIuLi8uLi9vbnRvbG9neVwiO1xuXG5pbXBvcnQgY29uc3RydWN0b3JWZXJpZmllciBmcm9tIFwiLi4vLi4vdmVyaWZpZXIvY29uc3RydWN0b3JcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL29udG9sb2d5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBDb25zdHJ1Y3RvckRlY2xhcmF0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgbm9kZSwgc3RyaW5nLCBjb25zdHJ1Y3Rvcikge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLmNvbnN0cnVjdG9yID0gY29uc3RydWN0b3I7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Q29uc3RydWN0b3IoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uc3RydWN0b3I7XG4gIH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzO1xuXG4gICAgY29uc3QgY29uc3RydWN0b3JEZWNsYXJhdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIHRoaXMuY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb25zdHJ1Y3RvckRlY2xhcmF0aW9uU3RyaW5nfScgY29uc3RydWN0b3IgZGVjbGFyYXRpb24uLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgY29uc3QgY29uc3RydWN0b3JUeXBlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeUNvbnN0cnVjdG9yVHlwZSgpO1xuXG4gICAgaWYgKGNvbnN0cnVjdG9yVHlwZVZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBjb25zdHJ1Y3RvclZlcmlmaWVzID0gdGhpcy52ZXJpZnlDb25zdHJ1Y3RvcigpO1xuXG4gICAgICBpZiAoY29uc3RydWN0b3JWZXJpZmllcykge1xuICAgICAgICB0aGlzLmNvbnRleHQuYWRkQ29uc3RydWN0b3IodGhpcy5jb25zdHJ1Y3Rvcik7XG5cbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29uc3RydWN0b3JEZWNsYXJhdGlvblN0cmluZ30nIGNvbnN0cnVjdG9yIGRlY2xhcmF0aW9uLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5Q29uc3RydWN0b3IoKSB7XG4gICAgbGV0IGNvbnN0cnVjdG9yVmVyaWZpZXM7XG5cbiAgICBjb25zdCBjb25zdHJ1Y3RvclN0cmluZyA9IHRoaXMuY29uc3RydWN0b3IuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLmNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBjb25zdCB0ZXJtID0gdGhpcy5jb25zdHJ1Y3Rvci5nZXRUZXJtKCksXG4gICAgICAgICAgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKTtcblxuICAgIGNvbnN0cnVjdG9yVmVyaWZpZXMgPSBjb25zdHJ1Y3RvclZlcmlmaWVyLnZlcmlmeVRlcm0odGVybU5vZGUsIHRoaXMuY29udGV4dCk7XG5cbiAgICBpZiAoY29uc3RydWN0b3JWZXJpZmllcykge1xuICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3Rvci5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBjb25zdHJ1Y3RvclZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5Q29uc3RydWN0b3JUeXBlKCkge1xuICAgIGxldCBjb25zdHJ1Y3RvclR5cGVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgbGV0IHR5cGU7XG5cbiAgICB0eXBlID0gdGhpcy5jb25zdHJ1Y3Rvci5nZXRUeXBlKCk7XG5cbiAgICBjb25zdCB0eXBlU3RyaW5nID0gdHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMuY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBjb25zdCBub21pbmFsVHlwZU5hbWUgPSB0eXBlLmdldE5vbWluYWxUeXBlTmFtZSgpO1xuXG4gICAgdHlwZSA9IHRoaXMuY29udGV4dC5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICBjb25zdCB0eXBlUHJlc2VudCA9ICh0eXBlICE9PSBudWxsKVxuXG4gICAgaWYgKCF0eXBlUHJlc2VudCkge1xuICAgICAgdGhpcy5jb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgaXMgbm90IHByZXNlbnQuYCwgdGhpcy5ub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaW5jbHVkZVN1cGVydHlwZXMgPSBmYWxzZSxcbiAgICAgICAgICAgIHByb3Zpc2lvbmFsID0gdHlwZS5pc1Byb3Zpc2lvbmFsKGluY2x1ZGVTdXBlcnR5cGVzKSxcbiAgICAgICAgICAgIHByb3Zpc2lvbmFsTWF0Y2hlcyA9IHR5cGUubWF0Y2hQcm92aXNpb25hbChwcm92aXNpb25hbCk7XG5cbiAgICAgIGlmICghcHJvdmlzaW9uYWxNYXRjaGVzKSB7XG4gICAgICAgIHByb3Zpc2lvbmFsID9cbiAgICAgICAgICB0aGlzLmNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBwcmVzZW50IGJ1dCBub3QgcHJvdmlzaW9uYWwuYCwgdGhpcy5ub2RlKSA6XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBwcmVzZW50IGJ1dCBwcm92aXNpb25hbC5gLCB0aGlzLm5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb25zdHJ1Y3Rvci5zZXRUeXBlKHR5cGUpO1xuXG4gICAgICAgIGNvbnN0cnVjdG9yVHlwZVZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29uc3RydWN0b3JUeXBlVmVyaWZpZXMpIHtcbiAgICAgIHRoaXMuY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVTdHJpbmd9JyB0eXBlLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yVHlwZVZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkNvbnN0cnVjdG9yRGVjbGFyYXRpb25cIjtcblxuICBzdGF0aWMgZnJvbUNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlKGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBDb25zdHJ1Y3RvciB9ID0gb250b2xvZ3ksXG4gICAgICAgICAgbm9kZSA9IGNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgY29uc3RydWN0b3IgPSBDb25zdHJ1Y3Rvci5mcm9tQ29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUoY29uc3RydWN0b3JEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIGNvbnN0cnVjdG9yRGVjbGFyYXRpb24gPSBuZXcgQ29uc3RydWN0b3JEZWNsYXJhdGlvbihjb250ZXh0LCBub2RlLCBzdHJpbmcsIGNvbnN0cnVjdG9yKTtcblxuICAgIHJldHVybiBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJDb25zdHJ1Y3RvckRlY2xhcmF0aW9uIiwiY29udGV4dCIsIm5vZGUiLCJzdHJpbmciLCJjb25zdHJ1Y3RvciIsImdldENvbnRleHQiLCJnZXROb2RlIiwiZ2V0U3RyaW5nIiwiZ2V0Q29uc3RydWN0b3IiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25TdHJpbmciLCJ0cmFjZSIsImNvbnN0cnVjdG9yVHlwZVZlcmlmaWVzIiwidmVyaWZ5Q29uc3RydWN0b3JUeXBlIiwiY29uc3RydWN0b3JWZXJpZmllcyIsInZlcmlmeUNvbnN0cnVjdG9yIiwiYWRkQ29uc3RydWN0b3IiLCJkZWJ1ZyIsImNvbnN0cnVjdG9yU3RyaW5nIiwidGVybSIsImdldFRlcm0iLCJ0ZXJtTm9kZSIsImNvbnN0cnVjdG9yVmVyaWZpZXIiLCJ2ZXJpZnlUZXJtIiwidHlwZSIsImdldFR5cGUiLCJ0eXBlU3RyaW5nIiwibm9taW5hbFR5cGVOYW1lIiwiZ2V0Tm9taW5hbFR5cGVOYW1lIiwiZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZSIsInR5cGVQcmVzZW50IiwiaW5jbHVkZVN1cGVydHlwZXMiLCJwcm92aXNpb25hbCIsImlzUHJvdmlzaW9uYWwiLCJwcm92aXNpb25hbE1hdGNoZXMiLCJtYXRjaFByb3Zpc2lvbmFsIiwic2V0VHlwZSIsImZyb21Db25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlIiwiQ29uc3RydWN0b3IiLCJvbnRvbG9neSIsIm5vZGVBc1N0cmluZyIsImNvbnN0cnVjdG9yRGVjbGFyYXRpb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoi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