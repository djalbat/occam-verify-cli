"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    objectType: function() {
        return objectType;
    }
});
var _shim = /*#__PURE__*/ _interop_require_default(require("./shim"));
var _query = require("./utilities/query");
var _typeNames = require("./typeNames");
var _name = require("./utilities/name");
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
var typeNodeQuery = (0, _query.nodeQuery)("/typeDeclaration/type[0]"), superTypeNodeQuery = (0, _query.nodeQuery)("/typeDeclaration/type[1]");
var Type = /*#__PURE__*/ function() {
    function Type(string, name, superType) {
        _class_call_check(this, Type);
        this.string = string;
        this.name = name;
        this.superType = superType;
    }
    _create_class(Type, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getName",
            value: function getName() {
                return this.name;
            }
        },
        {
            key: "getSuperType",
            value: function getSuperType() {
                return this.superType;
            }
        },
        {
            key: "isEqualTo",
            value: function isEqualTo(type) {
                var equalTo = this === type;
                return equalTo;
            }
        },
        {
            key: "isSubTypeOf",
            value: function isSubTypeOf(type) {
                var subTypeOf = false;
                var superType = this.superType;
                while(superType !== null){
                    if (superType === type) {
                        subTypeOf = true;
                        break;
                    }
                    superType = superType.getSuperType();
                }
                return subTypeOf;
            }
        },
        {
            key: "isSuperTypeOf",
            value: function isSuperTypeOf(type) {
                var superTypeOf = false;
                var superType = type.getSuperType();
                while(superType !== null){
                    if (superType === this) {
                        superTypeOf = true;
                        break;
                    }
                    superType = superType.getSuperType();
                }
                return superTypeOf;
            }
        },
        {
            key: "isComparableTo",
            value: function isComparableTo(type) {
                var equalTo = this.isEqualTo(type), subTypeOf = this.isSubTypeOf(type), superTypeOf = this.isSuperTypeOf(type), comparableTo = equalTo || subTypeOf || superTypeOf;
                return comparableTo;
            }
        },
        {
            key: "isEqualToOrSubTypeOf",
            value: function isEqualToOrSubTypeOf(type) {
                var equalTo = this.isEqualTo(type), subTypeOf = this.isSubTypeOf(type), equalToOrSubTypeOf = equalTo || subTypeOf;
                return equalToOrSubTypeOf;
            }
        },
        {
            key: "isEqualToOrSuperTypeOf",
            value: function isEqualToOrSuperTypeOf(type) {
                var equalTo = this.isEqualTo(type), superTypeOf = this.isSuperTypeOf(type), equalToOrSuperTypeOf = equalTo || superTypeOf;
                return equalToOrSuperTypeOf;
            }
        },
        {
            key: "match",
            value: function match(type) {
                var matches = type === this; ///
                return matches;
            }
        },
        {
            key: "matchName",
            value: function matchName(name) {
                var nodeMatches = this.name === name;
                return nodeMatches;
            }
        },
        {
            key: "matchTypeName",
            value: function matchTypeName(typeName) {
                var typeNameMatches = this.name === typeName;
                return typeNameMatches;
            }
        },
        {
            key: "matchTypeNode",
            value: function matchTypeNode(typeNode) {
                var typeName = (0, _name.typeNameFromTypeNode)(typeNode), typeNameMatches = this.matchTypeName(typeName), typeNodeMatches = typeNameMatches; ///
                return typeNodeMatches;
            }
        },
        {
            key: "verify",
            value: function verify(fileContext) {
                var verified = false;
                var typeString = this.string; ///
                fileContext.trace("Verifying the '".concat(typeString, "' type..."));
                var typePresent = fileContext.isTypePresentByTypeName(this.name);
                if (typePresent) {
                    fileContext.debug("The type '".concat(typeString, "' is already present."));
                } else {
                    if (this.superType === null) {
                        verified = true;
                    } else {
                        var name = this.superType.getName(), superTypePresent = fileContext.isTypePresentByTypeName(name);
                        if (superTypePresent) {
                            verified = true;
                        } else {
                            var superTypeString = this.superType.getString();
                            fileContext.debug("The super-type '".concat(superTypeString, "' is not present."));
                        }
                    }
                }
                if (verified) {
                    fileContext.debug("...verified the '".concat(typeString, "' type."));
                }
                return verified;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var superTypeJSON = this.superType !== null ? this.superType.toJSON() : null, name = this.name, superType = superTypeJSON, json = {
                    name: name,
                    superType: superType
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                var name = json.name;
                var superType = json.superType;
                var superTypeJSON = superType; ///
                json = superTypeJSON; ///
                superType = json !== null ? Type.fromJSON(json, fileContext) : null;
                var typeName = name, string = stringFromTypeNameAndSuperType(typeName, superType), type = new Type(string, name, superType);
                return type;
            }
        },
        {
            key: "fromTypeNode",
            value: function fromTypeNode(typeNode) {
                var type = null;
                if (typeNode !== null) {
                    var typeName = (0, _name.typeNameFromTypeNode)(typeNode), name = typeName, string = name, superType = null;
                    type = new Type(string, name, superType);
                }
                return type;
            }
        },
        {
            key: "fromTypeDeclarationNode",
            value: function fromTypeDeclarationNode(typeDeclarationNode, fileContext) {
                var typeNode = typeNodeQuery(typeDeclarationNode), superTypeNode = superTypeNodeQuery(typeDeclarationNode), typeName = (0, _name.typeNameFromTypeNode)(typeNode), superType = Type.fromTypeNode(superTypeNode), string = stringFromTypeNameAndSuperType(typeName, superType), name = typeName, type = new Type(string, name, superType);
                return type;
            }
        }
    ]);
    return Type;
}();
function stringFromTypeNameAndSuperType(typeName, superType) {
    var string = typeName; ///
    if (superType !== null) {
        var typeString = string, superTypeString = superType.getString();
        string = "".concat(typeString, ":").concat(superTypeString);
    }
    return string;
}
Object.assign(_shim.default, {
    Type: Type
});
var _default = Type;
var ObjectType = /*#__PURE__*/ function(Type) {
    _inherits(ObjectType, Type);
    function ObjectType() {
        _class_call_check(this, ObjectType);
        return _call_super(this, ObjectType, arguments);
    }
    _create_class(ObjectType, null, [
        {
            key: "fromNothing",
            value: function fromNothing() {
                var name = _typeNames.OBJECT_TYPE_NAME, superType = null, objectType = new ObjectType(name, superType);
                return objectType;
            }
        }
    ]);
    return ObjectType;
}(Type);
var objectType = ObjectType.fromNothing();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90eXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi9zaGltXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgT0JKRUNUX1RZUEVfTkFNRSB9IGZyb20gXCIuL3R5cGVOYW1lc1wiO1xuaW1wb3J0IHsgdHlwZU5hbWVGcm9tVHlwZU5vZGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvbmFtZVwiO1xuXG5jb25zdCB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVEZWNsYXJhdGlvbi90eXBlWzBdXCIpLFxuICAgICAgc3VwZXJUeXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVEZWNsYXJhdGlvbi90eXBlWzFdXCIpO1xuXG5jbGFzcyBUeXBlIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBuYW1lLCBzdXBlclR5cGUpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuc3VwZXJUeXBlID0gc3VwZXJUeXBlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFN1cGVyVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBlclR5cGU7XG4gIH1cblxuICBpc0VxdWFsVG8odHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG8gPSAodGhpcyA9PT0gdHlwZSk7XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzU3ViVHlwZU9mKHR5cGUpIHtcbiAgICBsZXQgc3ViVHlwZU9mID0gZmFsc2U7XG5cbiAgICBsZXQgc3VwZXJUeXBlID0gdGhpcy5zdXBlclR5cGU7XG5cbiAgICB3aGlsZSAoc3VwZXJUeXBlICE9PSBudWxsKSB7XG4gICAgICBpZiAoc3VwZXJUeXBlID09PSB0eXBlKSB7XG4gICAgICAgIHN1YlR5cGVPZiA9IHRydWU7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHN1cGVyVHlwZSA9IHN1cGVyVHlwZS5nZXRTdXBlclR5cGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3ViVHlwZU9mO1xuICB9XG5cbiAgaXNTdXBlclR5cGVPZih0eXBlKSB7XG4gICAgbGV0IHN1cGVyVHlwZU9mID0gZmFsc2U7XG5cbiAgICBsZXQgc3VwZXJUeXBlID0gdHlwZS5nZXRTdXBlclR5cGUoKTtcblxuICAgIHdoaWxlIChzdXBlclR5cGUgIT09IG51bGwpIHtcbiAgICAgIGlmIChzdXBlclR5cGUgPT09IHRoaXMpIHtcbiAgICAgICAgc3VwZXJUeXBlT2YgPSB0cnVlO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBzdXBlclR5cGUgPSBzdXBlclR5cGUuZ2V0U3VwZXJUeXBlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyVHlwZU9mO1xuICB9XG5cbiAgaXNDb21wYXJhYmxlVG8odHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG8gPSB0aGlzLmlzRXF1YWxUbyh0eXBlKSxcbiAgICAgICAgICBzdWJUeXBlT2YgPSB0aGlzLmlzU3ViVHlwZU9mKHR5cGUpLFxuICAgICAgICAgIHN1cGVyVHlwZU9mID0gdGhpcy5pc1N1cGVyVHlwZU9mKHR5cGUpLFxuICAgICAgICAgIGNvbXBhcmFibGVUbyA9IGVxdWFsVG8gfHwgc3ViVHlwZU9mIHx8IHN1cGVyVHlwZU9mO1xuXG4gICAgcmV0dXJuIGNvbXBhcmFibGVUbztcbiAgfVxuXG4gIGlzRXF1YWxUb09yU3ViVHlwZU9mKHR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvID0gdGhpcy5pc0VxdWFsVG8odHlwZSksXG4gICAgICAgICAgc3ViVHlwZU9mID0gdGhpcy5pc1N1YlR5cGVPZih0eXBlKSxcbiAgICAgICAgICBlcXVhbFRvT3JTdWJUeXBlT2YgPSBlcXVhbFRvIHx8IHN1YlR5cGVPZjtcblxuICAgIHJldHVybiBlcXVhbFRvT3JTdWJUeXBlT2Y7XG4gIH1cblxuICBpc0VxdWFsVG9PclN1cGVyVHlwZU9mKHR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvID0gdGhpcy5pc0VxdWFsVG8odHlwZSksXG4gICAgICAgICAgc3VwZXJUeXBlT2YgPSB0aGlzLmlzU3VwZXJUeXBlT2YodHlwZSksXG4gICAgICAgICAgZXF1YWxUb09yU3VwZXJUeXBlT2YgPSBlcXVhbFRvIHx8IHN1cGVyVHlwZU9mO1xuXG4gICAgcmV0dXJuIGVxdWFsVG9PclN1cGVyVHlwZU9mO1xuICB9XG5cbiAgbWF0Y2godHlwZSkge1xuICAgIGNvbnN0IG1hdGNoZXMgPSAodHlwZSA9PT0gdGhpcyk7ICAvLy9cblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hOYW1lKG5hbWUpIHtcbiAgICBjb25zdCBub2RlTWF0Y2hlcyA9ICh0aGlzLm5hbWUgPT09IG5hbWUpO1xuXG4gICAgcmV0dXJuIG5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hUeXBlTmFtZSh0eXBlTmFtZSkge1xuICAgIGNvbnN0IHR5cGVOYW1lTWF0Y2hlcyA9ICh0aGlzLm5hbWUgPT09IHR5cGVOYW1lKTtcblxuICAgIHJldHVybiB0eXBlTmFtZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFR5cGVOb2RlKHR5cGVOb2RlKSB7XG4gICAgY29uc3QgdHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSksXG4gICAgICAgICAgdHlwZU5hbWVNYXRjaGVzID0gdGhpcy5tYXRjaFR5cGVOYW1lKHR5cGVOYW1lKSxcbiAgICAgICAgICB0eXBlTm9kZU1hdGNoZXMgPSB0eXBlTmFtZU1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiB0eXBlTm9kZU1hdGNoZXM7XG4gIH1cblxuICB2ZXJpZnkoZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS4uLmApO1xuXG4gICAgY29uc3QgdHlwZVByZXNlbnQgPSBmaWxlQ29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0aGlzLm5hbWUpO1xuXG4gICAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgVGhlIHR5cGUgJyR7dHlwZVN0cmluZ30nIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuc3VwZXJUeXBlID09PSBudWxsKSB7XG4gICAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLnN1cGVyVHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgIHN1cGVyVHlwZVByZXNlbnQgPSBmaWxlQ29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZShuYW1lKTtcblxuICAgICAgICBpZiAoc3VwZXJUeXBlUHJlc2VudCkge1xuICAgICAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBzdXBlclR5cGVTdHJpbmcgPSB0aGlzLnN1cGVyVHlwZS5nZXRTdHJpbmcoKTtcblxuICAgICAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGBUaGUgc3VwZXItdHlwZSAnJHtzdXBlclR5cGVTdHJpbmd9JyBpcyBub3QgcHJlc2VudC5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3VwZXJUeXBlSlNPTiA9ICh0aGlzLnN1cGVyVHlwZSAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3VwZXJUeXBlLnRvSlNPTigpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgbmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICBzdXBlclR5cGUgPSBzdXBlclR5cGVKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBzdXBlclR5cGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IGpzb247XG5cbiAgICBsZXQgeyBzdXBlclR5cGUgfSA9IGpzb247XG5cbiAgICBjb25zdCBzdXBlclR5cGVKU09OID0gc3VwZXJUeXBlOyAgLy8vXG5cbiAgICBqc29uID0gc3VwZXJUeXBlSlNPTjsgLy8vXG5cbiAgICBzdXBlclR5cGUgPSAoanNvbiAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgIFR5cGUuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIDpcbiAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gICAgY29uc3QgdHlwZU5hbWUgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVR5cGVOYW1lQW5kU3VwZXJUeXBlKHR5cGVOYW1lLCBzdXBlclR5cGUpLFxuICAgICAgICAgIHR5cGUgPSBuZXcgVHlwZShzdHJpbmcsIG5hbWUsIHN1cGVyVHlwZSk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVHlwZU5vZGUodHlwZU5vZGUpIHtcbiAgICBsZXQgdHlwZSA9IG51bGw7XG5cbiAgICBpZiAodHlwZU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICAgICAgbmFtZSA9IHR5cGVOYW1lLCAgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgICBzdXBlclR5cGUgPSBudWxsO1xuXG4gICAgICB0eXBlID0gbmV3IFR5cGUoc3RyaW5nLCBuYW1lLCBzdXBlclR5cGUpO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3RhdGljIGZyb21UeXBlRGVjbGFyYXRpb25Ob2RlKHR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgdHlwZU5vZGUgPSB0eXBlTm9kZVF1ZXJ5KHR5cGVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgIHN1cGVyVHlwZU5vZGUgPSBzdXBlclR5cGVOb2RlUXVlcnkodHlwZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgICAgdHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSksXG4gICAgICAgICAgc3VwZXJUeXBlID0gVHlwZS5mcm9tVHlwZU5vZGUoc3VwZXJUeXBlTm9kZSksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVR5cGVOYW1lQW5kU3VwZXJUeXBlKHR5cGVOYW1lLCBzdXBlclR5cGUpLFxuICAgICAgICAgIG5hbWUgPSB0eXBlTmFtZSwgIC8vL1xuICAgICAgICAgIHR5cGUgPSBuZXcgVHlwZShzdHJpbmcsIG5hbWUsIHN1cGVyVHlwZSk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tVHlwZU5hbWVBbmRTdXBlclR5cGUodHlwZU5hbWUsIHN1cGVyVHlwZSkge1xuICBsZXQgc3RyaW5nID0gdHlwZU5hbWU7ICAvLy9cblxuICBpZiAoc3VwZXJUeXBlICE9PSBudWxsKSB7XG4gICAgY29uc3QgdHlwZVN0cmluZyA9IHN0cmluZywgIC8vL1xuICAgICAgICAgIHN1cGVyVHlwZVN0cmluZyA9IHN1cGVyVHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIHN0cmluZyA9IGAke3R5cGVTdHJpbmd9OiR7c3VwZXJUeXBlU3RyaW5nfWA7XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5PYmplY3QuYXNzaWduKHNoaW0sIHtcbiAgVHlwZVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFR5cGU7XG5cbmNsYXNzIE9iamVjdFR5cGUgZXh0ZW5kcyBUeXBlIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG5hbWUgPSBPQkpFQ1RfVFlQRV9OQU1FLFxuICAgICAgICAgIHN1cGVyVHlwZSA9IG51bGwsXG4gICAgICAgICAgb2JqZWN0VHlwZSA9IG5ldyBPYmplY3RUeXBlKG5hbWUsIHN1cGVyVHlwZSk7XG5cbiAgICByZXR1cm4gb2JqZWN0VHlwZTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgb2JqZWN0VHlwZSA9IE9iamVjdFR5cGUuZnJvbU5vdGhpbmcoKTtcbiJdLCJuYW1lcyI6WyJvYmplY3RUeXBlIiwidHlwZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInN1cGVyVHlwZU5vZGVRdWVyeSIsIlR5cGUiLCJzdHJpbmciLCJuYW1lIiwic3VwZXJUeXBlIiwiZ2V0U3RyaW5nIiwiZ2V0TmFtZSIsImdldFN1cGVyVHlwZSIsImlzRXF1YWxUbyIsInR5cGUiLCJlcXVhbFRvIiwiaXNTdWJUeXBlT2YiLCJzdWJUeXBlT2YiLCJpc1N1cGVyVHlwZU9mIiwic3VwZXJUeXBlT2YiLCJpc0NvbXBhcmFibGVUbyIsImNvbXBhcmFibGVUbyIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwiZXF1YWxUb09yU3ViVHlwZU9mIiwiaXNFcXVhbFRvT3JTdXBlclR5cGVPZiIsImVxdWFsVG9PclN1cGVyVHlwZU9mIiwibWF0Y2giLCJtYXRjaGVzIiwibWF0Y2hOYW1lIiwibm9kZU1hdGNoZXMiLCJtYXRjaFR5cGVOYW1lIiwidHlwZU5hbWUiLCJ0eXBlTmFtZU1hdGNoZXMiLCJtYXRjaFR5cGVOb2RlIiwidHlwZU5vZGUiLCJ0eXBlTmFtZUZyb21UeXBlTm9kZSIsInR5cGVOb2RlTWF0Y2hlcyIsInZlcmlmeSIsImZpbGVDb250ZXh0IiwidmVyaWZpZWQiLCJ0eXBlU3RyaW5nIiwidHJhY2UiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwiZGVidWciLCJzdXBlclR5cGVQcmVzZW50Iiwic3VwZXJUeXBlU3RyaW5nIiwidG9KU09OIiwic3VwZXJUeXBlSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsInN0cmluZ0Zyb21UeXBlTmFtZUFuZFN1cGVyVHlwZSIsImZyb21UeXBlTm9kZSIsImZyb21UeXBlRGVjbGFyYXRpb25Ob2RlIiwidHlwZURlY2xhcmF0aW9uTm9kZSIsInN1cGVyVHlwZU5vZGUiLCJPYmplY3QiLCJhc3NpZ24iLCJzaGltIiwiT2JqZWN0VHlwZSIsImZyb21Ob3RoaW5nIiwiT0JKRUNUX1RZUEVfTkFNRSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBNk9BLE9BQW9CO2VBQXBCOztJQVlhQSxVQUFVO2VBQVZBOzs7MkRBdlBJO3FCQUVTO3lCQUNPO29CQUNJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJDLElBQU1DLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyw2QkFDMUJDLHFCQUFxQkQsSUFBQUEsZ0JBQVMsRUFBQztBQUVyQyxJQUFBLEFBQU1FLHFCQUFOO2FBQU1BLEtBQ1FDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTO2dDQUQvQkg7UUFFRixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFNBQVMsR0FBR0E7O2tCQUpmSDs7WUFPSkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxD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