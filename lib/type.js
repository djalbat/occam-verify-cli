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
                    fileContext.debug("...verifiedAtTopLevel the '".concat(typeString, "' type at top level."));
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
                var typeName = name, string = stringFromTypeNameAndSuperType(typeName, superType), type = new Type(string, name, superType);
                return type;
            }
        },
        {
            key: "fromTypeNode",
            value: function fromTypeNode(typeNode) {
                var typeName = (0, _name.typeNameFromTypeNode)(typeNode), name = typeName, string = name, superType = null, type = new Type(string, name, superType);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90eXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi9zaGltXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgT0JKRUNUX1RZUEVfTkFNRSB9IGZyb20gXCIuL3R5cGVOYW1lc1wiO1xuaW1wb3J0IHsgdHlwZU5hbWVGcm9tVHlwZU5vZGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvbmFtZVwiO1xuXG5jb25zdCB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVEZWNsYXJhdGlvbi90eXBlWzBdXCIpLFxuICAgICAgc3VwZXJUeXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVEZWNsYXJhdGlvbi90eXBlWzFdXCIpO1xuXG5jbGFzcyBUeXBlIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBuYW1lLCBzdXBlclR5cGUpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuc3VwZXJUeXBlID0gc3VwZXJUeXBlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFN1cGVyVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBlclR5cGU7XG4gIH1cblxuICBpc0VxdWFsVG8odHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG8gPSAodGhpcyA9PT0gdHlwZSk7XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzU3ViVHlwZU9mKHR5cGUpIHtcbiAgICBsZXQgc3ViVHlwZU9mID0gZmFsc2U7XG5cbiAgICBsZXQgc3VwZXJUeXBlID0gdGhpcy5zdXBlclR5cGU7XG5cbiAgICB3aGlsZSAoc3VwZXJUeXBlICE9PSBudWxsKSB7XG4gICAgICBpZiAoc3VwZXJUeXBlID09PSB0eXBlKSB7XG4gICAgICAgIHN1YlR5cGVPZiA9IHRydWU7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHN1cGVyVHlwZSA9IHN1cGVyVHlwZS5nZXRTdXBlclR5cGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3ViVHlwZU9mO1xuICB9XG5cbiAgaXNTdXBlclR5cGVPZih0eXBlKSB7XG4gICAgbGV0IHN1cGVyVHlwZU9mID0gZmFsc2U7XG5cbiAgICBsZXQgc3VwZXJUeXBlID0gdHlwZS5nZXRTdXBlclR5cGUoKTtcblxuICAgIHdoaWxlIChzdXBlclR5cGUgIT09IG51bGwpIHtcbiAgICAgIGlmIChzdXBlclR5cGUgPT09IHRoaXMpIHtcbiAgICAgICAgc3VwZXJUeXBlT2YgPSB0cnVlO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBzdXBlclR5cGUgPSBzdXBlclR5cGUuZ2V0U3VwZXJUeXBlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyVHlwZU9mO1xuICB9XG5cbiAgaXNDb21wYXJhYmxlVG8odHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG8gPSB0aGlzLmlzRXF1YWxUbyh0eXBlKSxcbiAgICAgICAgICBzdWJUeXBlT2YgPSB0aGlzLmlzU3ViVHlwZU9mKHR5cGUpLFxuICAgICAgICAgIHN1cGVyVHlwZU9mID0gdGhpcy5pc1N1cGVyVHlwZU9mKHR5cGUpLFxuICAgICAgICAgIGNvbXBhcmFibGVUbyA9IChlcXVhbFRvIHx8IHN1YlR5cGVPZiB8fCBzdXBlclR5cGVPZik7XG5cbiAgICByZXR1cm4gY29tcGFyYWJsZVRvO1xuICB9XG5cbiAgaXNFcXVhbFRvT3JTdWJUeXBlT2YodHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG8gPSB0aGlzLmlzRXF1YWxUbyh0eXBlKSxcbiAgICAgICAgICBzdWJUeXBlT2YgPSB0aGlzLmlzU3ViVHlwZU9mKHR5cGUpLFxuICAgICAgICAgIGVxdWFsVG9PclN1YlR5cGVPZiA9IChlcXVhbFRvIHx8IHN1YlR5cGVPZik7XG5cbiAgICByZXR1cm4gZXF1YWxUb09yU3ViVHlwZU9mO1xuICB9XG5cbiAgaXNFcXVhbFRvT3JTdXBlclR5cGVPZih0eXBlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9IHRoaXMuaXNFcXVhbFRvKHR5cGUpLFxuICAgICAgICAgIHN1cGVyVHlwZU9mID0gdGhpcy5pc1N1cGVyVHlwZU9mKHR5cGUpLFxuICAgICAgICAgIGVxdWFsVG9PclN1cGVyVHlwZU9mID0gKGVxdWFsVG8gfHwgc3VwZXJUeXBlT2YpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG9PclN1cGVyVHlwZU9mO1xuICB9XG5cbiAgbWF0Y2godHlwZSkge1xuICAgIGNvbnN0IG1hdGNoZXMgPSAodHlwZSA9PT0gdGhpcyk7ICAvLy9cblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hOYW1lKG5hbWUpIHtcbiAgICBjb25zdCBub2RlTWF0Y2hlcyA9ICh0aGlzLm5hbWUgPT09IG5hbWUpO1xuXG4gICAgcmV0dXJuIG5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hUeXBlTmFtZSh0eXBlTmFtZSkge1xuICAgIGNvbnN0IHR5cGVOYW1lTWF0Y2hlcyA9ICh0aGlzLm5hbWUgPT09IHR5cGVOYW1lKTtcblxuICAgIHJldHVybiB0eXBlTmFtZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFR5cGVOb2RlKHR5cGVOb2RlKSB7XG4gICAgY29uc3QgdHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSksXG4gICAgICAgICAgdHlwZU5hbWVNYXRjaGVzID0gdGhpcy5tYXRjaFR5cGVOYW1lKHR5cGVOYW1lKSxcbiAgICAgICAgICB0eXBlTm9kZU1hdGNoZXMgPSB0eXBlTmFtZU1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiB0eXBlTm9kZU1hdGNoZXM7XG4gIH1cblxuICB2ZXJpZnkoZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGVTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS4uLmApO1xuXG4gICAgY29uc3QgdHlwZVByZXNlbnQgPSBmaWxlQ29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0aGlzLm5hbWUpO1xuXG4gICAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGBUaGUgdHlwZSAnJHt0eXBlU3RyaW5nfScgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVTdHJpbmd9JyB0eXBlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeUF0VG9wTGV2ZWwoZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRBdFRvcExldmVsID0gZmFsc2U7XG5cbiAgICBjb25zdCB0eXBlU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgYXQgdG9wIGxldmVsLi4uYCk7XG5cbiAgICBjb25zdCB0eXBlUHJlc2VudCA9IGZpbGVDb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHRoaXMubmFtZSk7XG5cbiAgICBpZiAodHlwZVByZXNlbnQpIHtcbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGBUaGUgdHlwZSAnJHt0eXBlU3RyaW5nfScgaXMgYWxyZWFkeSBwcmVzZW50LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5zdXBlclR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgdmVyaWZpZWRBdFRvcExldmVsID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLnN1cGVyVHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgc3VwZXJUeXBlUHJlc2VudCA9IGZpbGVDb250ZXh0LmlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKG5hbWUpO1xuXG4gICAgICAgIGlmIChzdXBlclR5cGVQcmVzZW50KSB7XG4gICAgICAgICAgdmVyaWZpZWRBdFRvcExldmVsID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBzdXBlclR5cGVTdHJpbmcgPSB0aGlzLnN1cGVyVHlwZS5nZXRTdHJpbmcoKTtcblxuICAgICAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGBUaGUgc3VwZXItdHlwZSAnJHtzdXBlclR5cGVTdHJpbmd9JyBpcyBub3QgcHJlc2VudC5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZEF0VG9wTGV2ZWwpIHtcbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZEF0VG9wTGV2ZWwgdGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGF0IHRvcCBsZXZlbC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRBdFRvcExldmVsO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN1cGVyVHlwZUpTT04gPSAodGhpcy5zdXBlclR5cGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN1cGVyVHlwZS50b0pTT04oKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgIG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAgc3VwZXJUeXBlID0gc3VwZXJUeXBlSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgc3VwZXJUeXBlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uO1xuXG4gICAgbGV0IHsgc3VwZXJUeXBlIH0gPSBqc29uO1xuXG4gICAgY29uc3Qgc3VwZXJUeXBlSlNPTiA9IHN1cGVyVHlwZTsgIC8vL1xuXG4gICAganNvbiA9IHN1cGVyVHlwZUpTT047IC8vL1xuXG4gICAgc3VwZXJUeXBlID0gKGpzb24gIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICBUeXBlLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSA6XG4gICAgICAgICAgICAgICAgICAgICAgbnVsbDtcblxuICAgIGNvbnN0IHR5cGVOYW1lID0gbmFtZSwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21UeXBlTmFtZUFuZFN1cGVyVHlwZSh0eXBlTmFtZSwgc3VwZXJUeXBlKSxcbiAgICAgICAgICB0eXBlID0gbmV3IFR5cGUoc3RyaW5nLCBuYW1lLCBzdXBlclR5cGUpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVR5cGVOb2RlKHR5cGVOb2RlKSB7XG4gICAgY29uc3QgdHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSksXG4gICAgICAgICAgbmFtZSA9IHR5cGVOYW1lLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gbmFtZSwgIC8vL1xuICAgICAgICAgIHN1cGVyVHlwZSA9IG51bGwsXG4gICAgICAgICAgdHlwZSA9IG5ldyBUeXBlKHN0cmluZywgbmFtZSwgc3VwZXJUeXBlKTtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3RhdGljIGZyb21UeXBlRGVjbGFyYXRpb25Ob2RlKHR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgdHlwZU5vZGUgPSB0eXBlTm9kZVF1ZXJ5KHR5cGVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgIHN1cGVyVHlwZU5vZGUgPSBzdXBlclR5cGVOb2RlUXVlcnkodHlwZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgICAgdHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSksXG4gICAgICAgICAgc3VwZXJUeXBlID0gKHN1cGVyVHlwZU5vZGUgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBUeXBlLmZyb21UeXBlTm9kZShzdXBlclR5cGVOb2RlKSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVHlwZU5hbWVBbmRTdXBlclR5cGUodHlwZU5hbWUsIHN1cGVyVHlwZSksXG4gICAgICAgICAgbmFtZSA9IHR5cGVOYW1lLCAgLy8vXG4gICAgICAgICAgdHlwZSA9IG5ldyBUeXBlKHN0cmluZywgbmFtZSwgc3VwZXJUeXBlKTtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21UeXBlTmFtZUFuZFN1cGVyVHlwZSh0eXBlTmFtZSwgc3VwZXJUeXBlKSB7XG4gIGxldCBzdHJpbmcgPSB0eXBlTmFtZTsgIC8vL1xuXG4gIGlmIChzdXBlclR5cGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB0eXBlU3RyaW5nID0gc3RyaW5nLCAgLy8vXG4gICAgICAgICAgc3VwZXJUeXBlU3RyaW5nID0gc3VwZXJUeXBlLmdldFN0cmluZygpO1xuXG4gICAgc3RyaW5nID0gYCR7dHlwZVN0cmluZ306JHtzdXBlclR5cGVTdHJpbmd9YDtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICBUeXBlXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgVHlwZTtcblxuY2xhc3MgT2JqZWN0VHlwZSBleHRlbmRzIFR5cGUge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbmFtZSA9IE9CSkVDVF9UWVBFX05BTUUsXG4gICAgICAgICAgc3RyaW5nID0gbmFtZSwgIC8vXG4gICAgICAgICAgc3VwZXJUeXBlID0gbnVsbCxcbiAgICAgICAgICBvYmplY3RUeXBlID0gbmV3IE9iamVjdFR5cGUoc3RyaW5nLCBuYW1lLCBzdXBlclR5cGUpO1xuXG4gICAgcmV0dXJuIG9iamVjdFR5cGU7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG9iamVjdFR5cGUgPSBPYmplY3RUeXBlLmZyb21Ob3RoaW5nKCk7XG4iXSwibmFtZXMiOlsib2JqZWN0VHlwZSIsInR5cGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJzdXBlclR5cGVOb2RlUXVlcnkiLCJUeXBlIiwic3RyaW5nIiwibmFtZSIsInN1cGVyVHlwZSIsImdldFN0cmluZyIsImdldE5hbWUiLCJnZXRTdXBlclR5cGUiLCJpc0VxdWFsVG8iLCJ0eXBlIiwiZXF1YWxUbyIsImlzU3ViVHlwZU9mIiwic3ViVHlwZU9mIiwiaXNTdXBlclR5cGVPZiIsInN1cGVyVHlwZU9mIiwiaXNDb21wYXJhYmxlVG8iLCJjb21wYXJhYmxlVG8iLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsImVxdWFsVG9PclN1YlR5cGVPZiIsImlzRXF1YWxUb09yU3VwZXJUeXBlT2YiLCJlcXVhbFRvT3JTdXBlclR5cGVPZiIsIm1hdGNoIiwibWF0Y2hlcyIsIm1hdGNoTmFtZSIsIm5vZGVNYXRjaGVzIiwibWF0Y2hUeXBlTmFtZSIsInR5cGVOYW1lIiwidHlwZU5hbWVNYXRjaGVzIiwibWF0Y2hUeXBlTm9kZSIsInR5cGVOb2RlIiwidHlwZU5hbWVGcm9tVHlwZU5vZGUiLCJ0eXBlTm9kZU1hdGNoZXMiLCJ2ZXJpZnkiLCJmaWxlQ29udGV4dCIsInZlcmlmaWVkIiwidHlwZVN0cmluZyIsInRyYWNlIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsImRlYnVnIiwidmVyaWZ5QXRUb3BMZXZlbCIsInZlcmlmaWVkQXRUb3BMZXZlbCIsInN1cGVyVHlwZVByZXNlbnQiLCJzdXBlclR5cGVTdHJpbmciLCJ0b0pTT04iLCJzdXBlclR5cGVKU09OIiwianNvbiIsImZyb21KU09OIiwic3RyaW5nRnJvbVR5cGVOYW1lQW5kU3VwZXJUeXBlIiwiZnJvbVR5cGVOb2RlIiwiZnJvbVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJ0eXBlRGVjbGFyYXRpb25Ob2RlIiwic3VwZXJUeXBlTm9kZSIsIk9iamVjdCIsImFzc2lnbiIsInNoaW0iLCJPYmplY3RUeXBlIiwiZnJvbU5vdGhpbmciLCJPQkpFQ1RfVFlQRV9OQU1FIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFnUUEsT0FBb0I7ZUFBcEI7O0lBYWFBLFVBQVU7ZUFBVkE7OzsyREEzUUk7cUJBRVM7eUJBQ087b0JBQ0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFckMsSUFBTUMsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLDZCQUMxQkMscUJBQXFCRCxJQUFBQSxnQkFBUyxFQUFDO0FBRXJDLElBQUEsQUFBTUUscUJBQU47YUFBTUEsS0FDUUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVM7Z0NBRC9CSDtRQUVGLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTs7a0JBSmZIOztZQU9KSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFNBQVM7WUFDdkI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUMsSUFBSTtnQkFDWixJQUFNQyxVQUFXLElB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