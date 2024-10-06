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
                    verified = true;
                } else {
                    fileContext.debug("The type '".concat(typeString, "' is not present."));
                }
                if (verified) {
                    fileContext.debug("...verified the '".concat(typeString, "' type."));
                }
                return verified;
            }
        },
        {
            key: "verifyAtTopLevel",
            value: function verifyAtTopLevel(fileContext) {
                var verifiedAtTopLevel = false;
                var typeString = this.string; ///
                fileContext.trace("Verifying the '".concat(typeString, "' type at top level..."));
                var typePresent = fileContext.isTypePresentByTypeName(this.name);
                if (typePresent) {
                    fileContext.debug("The type '".concat(typeString, "' is already present."));
                } else {
                    if (this.superType === null) {
                        verifiedAtTopLevel = true;
                    } else {
                        var name = this.superType.getName(), superTypePresent = fileContext.isTypePresentByTypeName(name);
                        if (superTypePresent) {
                            verifiedAtTopLevel = true;
                        } else {
                            var superTypeString = this.superType.getString();
                            fileContext.debug("The super-type '".concat(superTypeString, "' is not present."));
                        }
                    }
                }
                if (verifiedAtTopLevel) {
                    fileContext.debug("...verified the '".concat(typeString, "' type at top level."));
                }
                return verifiedAtTopLevel;
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
                var typeName = name, string = stringFromTypeNameAndSuperType(typeName, superType), typeNameObjectTypeName = typeName === _typeNames.OBJECT_TYPE_NAME, type = typeNameObjectTypeName ? objectType : new Type(string, name, superType);
                return type;
            }
        },
        {
            key: "fromTypeNode",
            value: function fromTypeNode(typeNode) {
                var typeName = (0, _name.typeNameFromTypeNode)(typeNode), name = typeName, string = name, superType = null, typeNameObjectTypeName = typeName === _typeNames.OBJECT_TYPE_NAME, type = typeNameObjectTypeName ? objectType : new Type(string, name, superType);
                return type;
            }
        },
        {
            key: "fromTypeDeclarationNode",
            value: function fromTypeDeclarationNode(typeDeclarationNode, fileContext) {
                var typeNode = typeNodeQuery(typeDeclarationNode), superTypeNode = superTypeNodeQuery(typeDeclarationNode), typeName = (0, _name.typeNameFromTypeNode)(typeNode), superType = superTypeNode === null ? objectType : Type.fromTypeNode(superTypeNode), string = stringFromTypeNameAndSuperType(typeName, superType), name = typeName, type = new Type(string, name, superType);
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
                var name = _typeNames.OBJECT_TYPE_NAME, string = name, superType = null, objectType = new ObjectType(string, name, superType);
                return objectType;
            }
        }
    ]);
    return ObjectType;
}(Type);
var objectType = ObjectType.fromNothing();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90eXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi9zaGltXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgT0JKRUNUX1RZUEVfTkFNRSB9IGZyb20gXCIuL3R5cGVOYW1lc1wiO1xuaW1wb3J0IHsgdHlwZU5hbWVGcm9tVHlwZU5vZGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvbmFtZVwiO1xuXG5jb25zdCB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVEZWNsYXJhdGlvbi90eXBlWzBdXCIpLFxuICAgICAgc3VwZXJUeXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVEZWNsYXJhdGlvbi90eXBlWzFdXCIpO1xuXG5jbGFzcyBUeXBlIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBuYW1lLCBzdXBlclR5cGUpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuc3VwZXJUeXBlID0gc3VwZXJUeXBlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFN1cGVyVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBlclR5cGU7XG4gIH1cblxuICBpc0VxdWFsVG8odHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG8gPSAodGhpcyA9PT0gdHlwZSk7XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzU3ViVHlwZU9mKHR5cGUpIHtcbiAgICBsZXQgc3ViVHlwZU9mID0gZmFsc2U7XG5cbiAgICBsZXQgc3VwZXJUeXBlID0gdGhpcy5zdXBlclR5cGU7XG5cbiAgICB3aGlsZSAoc3VwZXJUeXBlICE9PSBudWxsKSB7XG4gICAgICBpZiAoc3VwZXJUeXBlID09PSB0eXBlKSB7XG4gICAgICAgIHN1YlR5cGVPZiA9IHRydWU7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHN1cGVyVHlwZSA9IHN1cGVyVHlwZS5nZXRTdXBlclR5cGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3ViVHlwZU9mO1xuICB9XG5cbiAgaXNTdXBlclR5cGVPZih0eXBlKSB7XG4gICAgbGV0IHN1cGVyVHlwZU9mID0gZmFsc2U7XG5cbiAgICBsZXQgc3VwZXJUeXBlID0gdHlwZS5nZXRTdXBlclR5cGUoKTtcblxuICAgIHdoaWxlIChzdXBlclR5cGUgIT09IG51bGwpIHtcbiAgICAgIGlmIChzdXBlclR5cGUgPT09IHRoaXMpIHtcbiAgICAgICAgc3VwZXJUeXBlT2YgPSB0cnVlO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBzdXBlclR5cGUgPSBzdXBlclR5cGUuZ2V0U3VwZXJUeXBlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyVHlwZU9mO1xuICB9XG5cbiAgaXNDb21wYXJhYmxlVG8odHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG8gPSB0aGlzLmlzRXF1YWxUbyh0eXBlKSxcbiAgICAgICAgICBzdWJUeXBlT2YgPSB0aGlzLmlzU3ViVHlwZU9mKHR5cGUpLFxuICAgICAgICAgIHN1cGVyVHlwZU9mID0gdGhpcy5pc1N1cGVyVHlwZU9mKHR5cGUpLFxuICAgICAgICAgIGNvbXBhcmFibGVUbyA9IChlcXVhbFRvIHx8IHN1YlR5cGVPZiB8fCBzdXBlclR5cGVPZik7XG5cbiAgICByZXR1cm4gY29tcGFyYWJsZVRvO1xuICB9XG5cbiAgaXNFcXVhbFRvT3JTdWJUeXBlT2YodHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG8gPSB0aGlzLmlzRXF1YWxUbyh0eXBlKSxcbiAgICAgICAgICBzdWJUeXBlT2YgPSB0aGlzLmlzU3ViVHlwZU9mKHR5cGUpLFxuICAgICAgICAgIGVxdWFsVG9PclN1YlR5cGVPZiA9IChlcXVhbFRvIHx8IHN1YlR5cGVPZik7XG5cbiAgICByZXR1cm4gZXF1YWxUb09yU3ViVHlwZU9mO1xuICB9XG5cbiAgaXNFcXVhbFRvT3JTdXBlclR5cGVPZih0eXBlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9IHRoaXMuaXNFcXVhbFRvKHR5cGUpLFxuICAgICAgICAgIHN1cGVyVHlwZU9mID0gdGhpcy5pc1N1cGVyVHlwZU9mKHR5cGUpLFxuICAgICAgICAgIGVxdWFsVG9PclN1cGVyVHlwZU9mID0gKGVxdWFsVG8gfHwgc3VwZXJUeXBlT2YpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG9PclN1cGVyVHlwZU9mO1xuICB9XG5cbiAgbWF0Y2godHlwZSkge1xuICAgIGNvbnN0IG1hdGNoZXMgPSAodHlwZSA9PT0gdGhpcyk7ICAvLy9cblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hOYW1lKG5hbWUpIHtcbiAgICBjb25zdCBub2RlTWF0Y2hlcyA9ICh0aGlzLm5hbWUgPT09IG5hbWUpO1xuXG4gICAgcmV0dXJuIG5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hUeXBlTmFtZSh0eXBlTmFtZSkge1xuICAgIGNvbnN0IHR5cGVOYW1lTWF0Y2hlcyA9ICh0aGlzLm5hbWUgPT09IHR5cGVOYW1lKTtcblxuICAgIHJldHVybiB0eXBlTmFtZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFR5cGVOb2RlKHR5cGVOb2RlKSB7XG4gICAgY29uc3QgdHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSksXG4gICAgICAgICAgdHlwZU5hbWVNYXRjaGVzID0gdGhpcy5tYXRjaFR5cGVOYW1lKHR5cGVOYW1lKSxcbiAgICAgICAgICB0eXBlTm9kZU1hdGNoZXMgPSB0eXBlTmFtZU1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiB0eXBlTm9kZU1hdGNoZXM7XG4gIH1cblxuICB2ZXJpZnkoZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS4uLmApO1xuXG4gICAgY29uc3QgdHlwZVByZXNlbnQgPSBmaWxlQ29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0aGlzLm5hbWUpO1xuXG4gICAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGBUaGUgdHlwZSAnJHt0eXBlU3RyaW5nfScgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVTdHJpbmd9JyB0eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeUF0VG9wTGV2ZWwoZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRBdFRvcExldmVsID0gZmFsc2U7XG5cbiAgICBjb25zdCB0eXBlU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgYXQgdG9wIGxldmVsLi4uYCk7XG5cbiAgICBjb25zdCB0eXBlUHJlc2VudCA9IGZpbGVDb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHRoaXMubmFtZSk7XG5cbiAgICBpZiAodHlwZVByZXNlbnQpIHtcbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGBUaGUgdHlwZSAnJHt0eXBlU3RyaW5nfScgaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5zdXBlclR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgdmVyaWZpZWRBdFRvcExldmVsID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLnN1cGVyVHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgIHN1cGVyVHlwZVByZXNlbnQgPSBmaWxlQ29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZShuYW1lKTtcblxuICAgICAgICBpZiAoc3VwZXJUeXBlUHJlc2VudCkge1xuICAgICAgICAgIHZlcmlmaWVkQXRUb3BMZXZlbCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3Qgc3VwZXJUeXBlU3RyaW5nID0gdGhpcy5zdXBlclR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgVGhlIHN1cGVyLXR5cGUgJyR7c3VwZXJUeXBlU3RyaW5nfScgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWRBdFRvcExldmVsKSB7XG4gICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGF0IHRvcCBsZXZlbC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRBdFRvcExldmVsO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN1cGVyVHlwZUpTT04gPSAodGhpcy5zdXBlclR5cGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1cGVyVHlwZS50b0pTT04oKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgIG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAgc3VwZXJUeXBlID0gc3VwZXJUeXBlSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgc3VwZXJUeXBlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uO1xuXG4gICAgbGV0IHsgc3VwZXJUeXBlIH0gPSBqc29uO1xuXG4gICAgY29uc3Qgc3VwZXJUeXBlSlNPTiA9IHN1cGVyVHlwZTsgIC8vL1xuXG4gICAganNvbiA9IHN1cGVyVHlwZUpTT047IC8vL1xuXG4gICAgc3VwZXJUeXBlID0gKGpzb24gIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICBUeXBlLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSA6XG4gICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICAgIGNvbnN0IHR5cGVOYW1lID0gbmFtZSwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21UeXBlTmFtZUFuZFN1cGVyVHlwZSh0eXBlTmFtZSwgc3VwZXJUeXBlKSxcbiAgICAgICAgICB0eXBlTmFtZU9iamVjdFR5cGVOYW1lID0gKHR5cGVOYW1lID09PSBPQkpFQ1RfVFlQRV9OQU1FKSxcbiAgICAgICAgICB0eXBlID0gdHlwZU5hbWVPYmplY3RUeXBlTmFtZSA/XG4gICAgICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6XG4gICAgICAgICAgICAgICAgICAgICBuZXcgVHlwZShzdHJpbmcsIG5hbWUsIHN1cGVyVHlwZSk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVHlwZU5vZGUodHlwZU5vZGUpIHtcbiAgICBjb25zdCB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKSxcbiAgICAgICAgICBuYW1lID0gdHlwZU5hbWUsICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgc3VwZXJUeXBlID0gbnVsbCxcbiAgICAgICAgICB0eXBlTmFtZU9iamVjdFR5cGVOYW1lID0gKHR5cGVOYW1lID09PSBPQkpFQ1RfVFlQRV9OQU1FKSxcbiAgICAgICAgICB0eXBlID0gdHlwZU5hbWVPYmplY3RUeXBlTmFtZSA/XG4gICAgICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6XG4gICAgICAgICAgICAgICAgICAgICBuZXcgVHlwZShzdHJpbmcsIG5hbWUsIHN1cGVyVHlwZSk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVHlwZURlY2xhcmF0aW9uTm9kZSh0eXBlRGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHR5cGVOb2RlID0gdHlwZU5vZGVRdWVyeSh0eXBlRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgICBzdXBlclR5cGVOb2RlID0gc3VwZXJUeXBlTm9kZVF1ZXJ5KHR5cGVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgIHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICAgIHN1cGVyVHlwZSA9IChzdXBlclR5cGVOb2RlID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgVHlwZS5mcm9tVHlwZU5vZGUoc3VwZXJUeXBlTm9kZSksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVR5cGVOYW1lQW5kU3VwZXJUeXBlKHR5cGVOYW1lLCBzdXBlclR5cGUpLFxuICAgICAgICAgIG5hbWUgPSB0eXBlTmFtZSwgIC8vL1xuICAgICAgICAgIHR5cGUgPSBuZXcgVHlwZShzdHJpbmcsIG5hbWUsIHN1cGVyVHlwZSk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tVHlwZU5hbWVBbmRTdXBlclR5cGUodHlwZU5hbWUsIHN1cGVyVHlwZSkge1xuICBsZXQgc3RyaW5nID0gdHlwZU5hbWU7ICAvLy9cblxuICBpZiAoc3VwZXJUeXBlICE9PSBudWxsKSB7XG4gICAgY29uc3QgdHlwZVN0cmluZyA9IHN0cmluZywgIC8vL1xuICAgICAgICAgIHN1cGVyVHlwZVN0cmluZyA9IHN1cGVyVHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIHN0cmluZyA9IGAke3R5cGVTdHJpbmd9OiR7c3VwZXJUeXBlU3RyaW5nfWA7XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5PYmplY3QuYXNzaWduKHNoaW0sIHtcbiAgVHlwZVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFR5cGU7XG5cbmNsYXNzIE9iamVjdFR5cGUgZXh0ZW5kcyBUeXBlIHtcbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG5hbWUgPSBPQkpFQ1RfVFlQRV9OQU1FLFxuICAgICAgICAgIHN0cmluZyA9IG5hbWUsICAvL1xuICAgICAgICAgIHN1cGVyVHlwZSA9IG51bGwsXG4gICAgICAgICAgb2JqZWN0VHlwZSA9IG5ldyBPYmplY3RUeXBlKHN0cmluZywgbmFtZSwgc3VwZXJUeXBlKTtcblxuICAgIHJldHVybiBvYmplY3RUeXBlO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBvYmplY3RUeXBlID0gT2JqZWN0VHlwZS5mcm9tTm90aGluZygpO1xuIl0sIm5hbWVzIjpbIm9iamVjdFR5cGUiLCJ0eXBlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwic3VwZXJUeXBlTm9kZVF1ZXJ5IiwiVHlwZSIsInN0cmluZyIsIm5hbWUiLCJzdXBlclR5cGUiLCJnZXRTdHJpbmciLCJnZXROYW1lIiwiZ2V0U3VwZXJUeXBlIiwiaXNFcXVhbFRvIiwidHlwZSIsImVxdWFsVG8iLCJpc1N1YlR5cGVPZiIsInN1YlR5cGVPZiIsImlzU3VwZXJUeXBlT2YiLCJzdXBlclR5cGVPZiIsImlzQ29tcGFyYWJsZVRvIiwiY29tcGFyYWJsZVRvIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJlcXVhbFRvT3JTdWJUeXBlT2YiLCJpc0VxdWFsVG9PclN1cGVyVHlwZU9mIiwiZXF1YWxUb09yU3VwZXJUeXBlT2YiLCJtYXRjaCIsIm1hdGNoZXMiLCJtYXRjaE5hbWUiLCJub2RlTWF0Y2hlcyIsIm1hdGNoVHlwZU5hbWUiLCJ0eXBlTmFtZSIsInR5cGVOYW1lTWF0Y2hlcyIsIm1hdGNoVHlwZU5vZGUiLCJ0eXBlTm9kZSIsInR5cGVOYW1lRnJvbVR5cGVOb2RlIiwidHlwZU5vZGVNYXRjaGVzIiwidmVyaWZ5IiwiZmlsZUNvbnRleHQiLCJ2ZXJpZmllZCIsInR5cGVTdHJpbmciLCJ0cmFjZSIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJkZWJ1ZyIsInZlcmlmeUF0VG9wTGV2ZWwiLCJ2ZXJpZmllZEF0VG9wTGV2ZWwiLCJzdXBlclR5cGVQcmVzZW50Iiwic3VwZXJUeXBlU3RyaW5nIiwidG9KU09OIiwic3VwZXJUeXBlSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsInN0cmluZ0Zyb21UeXBlTmFtZUFuZFN1cGVyVHlwZSIsInR5cGVOYW1lT2JqZWN0VHlwZU5hbWUiLCJPQkpFQ1RfVFlQRV9OQU1FIiwiZnJvbVR5cGVOb2RlIiwiZnJvbVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJ0eXBlRGVjbGFyYXRpb25Ob2RlIiwic3VwZXJUeXBlTm9kZSIsIk9iamVjdCIsImFzc2lnbiIsInNoaW0iLCJPYmplY3RUeXBlIiwiZnJvbU5vdGhpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQXNRQSxPQUFvQjtlQUFwQjs7SUFhYUEsVUFBVTtlQUFWQTs7OzJEQWpSSTtxQkFFUzt5QkFDTztvQkFDSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyQyxJQUFNQyxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsNkJBQzFCQyxxQkFBcUJELElBQUFBLGdCQUFTLEVBQUM7QUFFckMsSUFBQSxBQUFNRSxxQkFBTjthQUFNQSxLQUNRQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUztnQ0FEL0JIO1FBRUYsSUFB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