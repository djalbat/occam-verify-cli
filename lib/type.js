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
var _json = require("./utilities/json");
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
                var subTypeOf;
                if (false) {
                ///
                } else if (this === objectType) {
                    subTypeOf = false;
                } else if (this.superType === type) {
                    subTypeOf = true;
                } else {
                    subTypeOf = this.superType.isSubTypeOf(type);
                }
                return subTypeOf;
            }
        },
        {
            key: "isSuperTypeOf",
            value: function isSuperTypeOf(type) {
                var subTypeOf = type.isSubTypeOf(this), superTypeOf = subTypeOf; ///
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
            key: "verifyWhenDeclared",
            value: function verifyWhenDeclared(fileContext) {
                var verifiedAtTopLevel = false;
                var typeString = this.string; ///
                fileContext.trace("Verifying the '".concat(typeString, "' type when declared..."));
                var typePresent = fileContext.isTypePresentByTypeName(this.name);
                if (typePresent) {
                    fileContext.debug("The type '".concat(typeString, "' is already present."));
                } else {
                    var superTypeName = this.superType.getName(), superType = fileContext.findTypeByTypeName(superTypeName);
                    if (superType === null) {
                        var superTypeString = this.superType.getString();
                        fileContext.debug("The super-type '".concat(superTypeString, "' is not present."));
                    } else {
                        this.superType = superType;
                        verifiedAtTopLevel = true;
                    }
                }
                if (verifiedAtTopLevel) {
                    fileContext.debug("...verified the '".concat(typeString, "' type when declared."));
                }
                return verifiedAtTopLevel;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var superTypeJSON = (0, _json.superTypeToSuperTypeJSON)(this.superType), superType = superTypeJSON, name = this.name, json = {
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
                var name = json.name, typeName = name, superType = (0, _json.superTypeFromJSON)(json, fileContext), string = stringFromTypeNameAndSuperType(typeName, superType), type = new Type(string, name, superType);
                return type;
            }
        },
        {
            key: "fromTypeNode",
            value: function fromTypeNode(typeNode) {
                var type;
                if (typeNode === null) {
                    type = objectType;
                } else {
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
    if (superType !== null && superType !== objectType) {
        var typeString = string, superTypeName = superType.getName();
        string = "".concat(typeString, ":").concat(superTypeName);
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
    _create_class(ObjectType, [
        {
            key: "toJSON",
            value: function toJSON() {
                var superType = null, name = this.name, json = {
                    name: name,
                    superType: superType
                };
                return json;
            }
        }
    ], [
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90eXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi9zaGltXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgT0JKRUNUX1RZUEVfTkFNRSB9IGZyb20gXCIuL3R5cGVOYW1lc1wiO1xuaW1wb3J0IHsgdHlwZU5hbWVGcm9tVHlwZU5vZGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvbmFtZVwiO1xuaW1wb3J0IHsgc3VwZXJUeXBlRnJvbUpTT04sIHN1cGVyVHlwZVRvU3VwZXJUeXBlSlNPTiB9IGZyb20gXCIuL3V0aWxpdGllcy9qc29uXCI7XG5cbmNvbnN0IHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZURlY2xhcmF0aW9uL3R5cGVbMF1cIiksXG4gICAgICBzdXBlclR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZURlY2xhcmF0aW9uL3R5cGVbMV1cIik7XG5cbmNsYXNzIFR5cGUge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5hbWUsIHN1cGVyVHlwZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5zdXBlclR5cGUgPSBzdXBlclR5cGU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0U3VwZXJUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnN1cGVyVHlwZTtcbiAgfVxuXG4gIGlzRXF1YWxUbyh0eXBlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9ICh0aGlzID09PSB0eXBlKTtcblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgaXNTdWJUeXBlT2YodHlwZSkge1xuICAgIGxldCBzdWJUeXBlT2Y7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcyA9PT0gb2JqZWN0VHlwZSkge1xuICAgICAgc3ViVHlwZU9mID0gZmFsc2U7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN1cGVyVHlwZSA9PT0gdHlwZSkge1xuICAgICAgc3ViVHlwZU9mID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3ViVHlwZU9mID0gdGhpcy5zdXBlclR5cGUuaXNTdWJUeXBlT2YodHlwZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YlR5cGVPZjtcbiAgfVxuXG4gIGlzU3VwZXJUeXBlT2YodHlwZSkge1xuICAgIGNvbnN0IHN1YlR5cGVPZiA9IHR5cGUuaXNTdWJUeXBlT2YodGhpcyksXG4gICAgICAgICAgc3VwZXJUeXBlT2YgPSBzdWJUeXBlT2Y7ICAvLy9cblxuICAgIHJldHVybiBzdXBlclR5cGVPZjtcbiAgfVxuXG4gIGlzQ29tcGFyYWJsZVRvKHR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvID0gdGhpcy5pc0VxdWFsVG8odHlwZSksXG4gICAgICAgICAgc3ViVHlwZU9mID0gdGhpcy5pc1N1YlR5cGVPZih0eXBlKSxcbiAgICAgICAgICBzdXBlclR5cGVPZiA9IHRoaXMuaXNTdXBlclR5cGVPZih0eXBlKSxcbiAgICAgICAgICBjb21wYXJhYmxlVG8gPSAoZXF1YWxUbyB8fCBzdWJUeXBlT2YgfHwgc3VwZXJUeXBlT2YpO1xuXG4gICAgcmV0dXJuIGNvbXBhcmFibGVUbztcbiAgfVxuXG4gIGlzRXF1YWxUb09yU3ViVHlwZU9mKHR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvID0gdGhpcy5pc0VxdWFsVG8odHlwZSksXG4gICAgICAgICAgc3ViVHlwZU9mID0gdGhpcy5pc1N1YlR5cGVPZih0eXBlKSxcbiAgICAgICAgICBlcXVhbFRvT3JTdWJUeXBlT2YgPSAoZXF1YWxUbyB8fCBzdWJUeXBlT2YpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG9PclN1YlR5cGVPZjtcbiAgfVxuXG4gIGlzRXF1YWxUb09yU3VwZXJUeXBlT2YodHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG8gPSB0aGlzLmlzRXF1YWxUbyh0eXBlKSxcbiAgICAgICAgICBzdXBlclR5cGVPZiA9IHRoaXMuaXNTdXBlclR5cGVPZih0eXBlKSxcbiAgICAgICAgICBlcXVhbFRvT3JTdXBlclR5cGVPZiA9IChlcXVhbFRvIHx8IHN1cGVyVHlwZU9mKTtcblxuICAgIHJldHVybiBlcXVhbFRvT3JTdXBlclR5cGVPZjtcbiAgfVxuXG4gIG1hdGNoTmFtZShuYW1lKSB7XG4gICAgY29uc3Qgbm9kZU1hdGNoZXMgPSAodGhpcy5uYW1lID09PSBuYW1lKTtcblxuICAgIHJldHVybiBub2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoVHlwZU5hbWUodHlwZU5hbWUpIHtcbiAgICBjb25zdCB0eXBlTmFtZU1hdGNoZXMgPSAodGhpcy5uYW1lID09PSB0eXBlTmFtZSk7XG5cbiAgICByZXR1cm4gdHlwZU5hbWVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hUeXBlTm9kZSh0eXBlTm9kZSkge1xuICAgIGNvbnN0IHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICAgIHR5cGVOYW1lTWF0Y2hlcyA9IHRoaXMubWF0Y2hUeXBlTmFtZSh0eXBlTmFtZSksXG4gICAgICAgICAgdHlwZU5vZGVNYXRjaGVzID0gdHlwZU5hbWVNYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gdHlwZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgdmVyaWZ5V2hlbkRlY2xhcmVkKGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkQXRUb3BMZXZlbCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHlwZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIHdoZW4gZGVjbGFyZWQuLi5gKTtcblxuICAgIGNvbnN0IHR5cGVQcmVzZW50ID0gZmlsZUNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodGhpcy5uYW1lKTtcblxuICAgIGlmICh0eXBlUHJlc2VudCkge1xuICAgICAgZmlsZUNvbnRleHQuZGVidWcoYFRoZSB0eXBlICcke3R5cGVTdHJpbmd9JyBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN1cGVyVHlwZU5hbWUgPSB0aGlzLnN1cGVyVHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgICBzdXBlclR5cGUgPSBmaWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUoc3VwZXJUeXBlTmFtZSk7XG5cbiAgICAgIGlmIChzdXBlclR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc3VwZXJUeXBlU3RyaW5nID0gdGhpcy5zdXBlclR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgZmlsZUNvbnRleHQuZGVidWcoYFRoZSBzdXBlci10eXBlICcke3N1cGVyVHlwZVN0cmluZ30nIGlzIG5vdCBwcmVzZW50LmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zdXBlclR5cGUgPSBzdXBlclR5cGU7XG5cbiAgICAgICAgdmVyaWZpZWRBdFRvcExldmVsID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWRBdFRvcExldmVsKSB7XG4gICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIHdoZW4gZGVjbGFyZWQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkQXRUb3BMZXZlbDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdXBlclR5cGVKU09OID0gc3VwZXJUeXBlVG9TdXBlclR5cGVKU09OKHRoaXMuc3VwZXJUeXBlKSxcbiAgICAgICAgICBzdXBlclR5cGUgPSBzdXBlclR5cGVKU09OLCAgLy8vXG4gICAgICAgICAgbmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHN1cGVyVHlwZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0ganNvbixcbiAgICAgICAgICB0eXBlTmFtZSA9IG5hbWUsICAvLy9cbiAgICAgICAgICBzdXBlclR5cGUgPSBzdXBlclR5cGVGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVR5cGVOYW1lQW5kU3VwZXJUeXBlKHR5cGVOYW1lLCBzdXBlclR5cGUpLFxuICAgICAgICAgIHR5cGUgPSBuZXcgVHlwZShzdHJpbmcsIG5hbWUsIHN1cGVyVHlwZSk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVHlwZU5vZGUodHlwZU5vZGUpIHtcbiAgICBsZXQgdHlwZTtcblxuICAgIGlmICh0eXBlTm9kZSA9PT0gbnVsbCkge1xuICAgICAgdHlwZSA9IG9iamVjdFR5cGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICAgICAgbmFtZSA9IHR5cGVOYW1lLCAgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgICBzdXBlclR5cGUgPSBudWxsO1xuXG4gICAgICB0eXBlID0gbmV3IFR5cGUoc3RyaW5nLCBuYW1lLCBzdXBlclR5cGUpO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3RhdGljIGZyb21UeXBlRGVjbGFyYXRpb25Ob2RlKHR5cGVEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgdHlwZU5vZGUgPSB0eXBlTm9kZVF1ZXJ5KHR5cGVEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgIHN1cGVyVHlwZU5vZGUgPSBzdXBlclR5cGVOb2RlUXVlcnkodHlwZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgICAgdHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSksXG4gICAgICAgICAgc3VwZXJUeXBlID0gVHlwZS5mcm9tVHlwZU5vZGUoc3VwZXJUeXBlTm9kZSksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbVR5cGVOYW1lQW5kU3VwZXJUeXBlKHR5cGVOYW1lLCBzdXBlclR5cGUpLFxuICAgICAgICAgIG5hbWUgPSB0eXBlTmFtZSwgIC8vL1xuICAgICAgICAgIHR5cGUgPSBuZXcgVHlwZShzdHJpbmcsIG5hbWUsIHN1cGVyVHlwZSk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tVHlwZU5hbWVBbmRTdXBlclR5cGUodHlwZU5hbWUsIHN1cGVyVHlwZSkge1xuICBsZXQgc3RyaW5nID0gdHlwZU5hbWU7ICAvLy9cblxuICBpZiAoKHN1cGVyVHlwZSAhPT0gbnVsbCkgJiYgKHN1cGVyVHlwZSAhPT0gb2JqZWN0VHlwZSkpIHtcbiAgICBjb25zdCB0eXBlU3RyaW5nID0gc3RyaW5nLCAgLy8vXG4gICAgICAgICAgc3VwZXJUeXBlTmFtZSA9IHN1cGVyVHlwZS5nZXROYW1lKCk7XG5cbiAgICBzdHJpbmcgPSBgJHt0eXBlU3RyaW5nfToke3N1cGVyVHlwZU5hbWV9YDtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICBUeXBlXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgVHlwZTtcblxuY2xhc3MgT2JqZWN0VHlwZSBleHRlbmRzIFR5cGUge1xuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3VwZXJUeXBlID0gbnVsbCxcbiAgICAgICAgICBuYW1lID0gdGhpcy5uYW1lLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgc3VwZXJUeXBlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IG5hbWUgPSBPQkpFQ1RfVFlQRV9OQU1FLFxuICAgICAgICAgIHN0cmluZyA9IG5hbWUsICAvL1xuICAgICAgICAgIHN1cGVyVHlwZSA9IG51bGwsXG4gICAgICAgICAgb2JqZWN0VHlwZSA9IG5ldyBPYmplY3RUeXBlKHN0cmluZywgbmFtZSwgc3VwZXJUeXBlKTtcblxuICAgIHJldHVybiBvYmplY3RUeXBlO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBvYmplY3RUeXBlID0gT2JqZWN0VHlwZS5mcm9tTm90aGluZygpO1xuIl0sIm5hbWVzIjpbIm9iamVjdFR5cGUiLCJ0eXBlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwic3VwZXJUeXBlTm9kZVF1ZXJ5IiwiVHlwZSIsInN0cmluZyIsIm5hbWUiLCJzdXBlclR5cGUiLCJnZXRTdHJpbmciLCJnZXROYW1lIiwiZ2V0U3VwZXJUeXBlIiwiaXNFcXVhbFRvIiwidHlwZSIsImVxdWFsVG8iLCJpc1N1YlR5cGVPZiIsInN1YlR5cGVPZiIsImlzU3VwZXJUeXBlT2YiLCJzdXBlclR5cGVPZiIsImlzQ29tcGFyYWJsZVRvIiwiY29tcGFyYWJsZVRvIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJlcXVhbFRvT3JTdWJUeXBlT2YiLCJpc0VxdWFsVG9PclN1cGVyVHlwZU9mIiwiZXF1YWxUb09yU3VwZXJUeXBlT2YiLCJtYXRjaE5hbWUiLCJub2RlTWF0Y2hlcyIsIm1hdGNoVHlwZU5hbWUiLCJ0eXBlTmFtZSIsInR5cGVOYW1lTWF0Y2hlcyIsIm1hdGNoVHlwZU5vZGUiLCJ0eXBlTm9kZSIsInR5cGVOYW1lRnJvbVR5cGVOb2RlIiwidHlwZU5vZGVNYXRjaGVzIiwidmVyaWZ5V2hlbkRlY2xhcmVkIiwiZmlsZUNvbnRleHQiLCJ2ZXJpZmllZEF0VG9wTGV2ZWwiLCJ0eXBlU3RyaW5nIiwidHJhY2UiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwiZGVidWciLCJzdXBlclR5cGVOYW1lIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwic3VwZXJUeXBlU3RyaW5nIiwidG9KU09OIiwic3VwZXJUeXBlSlNPTiIsInN1cGVyVHlwZVRvU3VwZXJUeXBlSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsInN1cGVyVHlwZUZyb21KU09OIiwic3RyaW5nRnJvbVR5cGVOYW1lQW5kU3VwZXJUeXBlIiwiZnJvbVR5cGVOb2RlIiwiZnJvbVR5cGVEZWNsYXJhdGlvbk5vZGUiLCJ0eXBlRGVjbGFyYXRpb25Ob2RlIiwic3VwZXJUeXBlTm9kZSIsIk9iamVjdCIsImFzc2lnbiIsInNoaW0iLCJPYmplY3RUeXBlIiwiZnJvbU5vdGhpbmciLCJPQkpFQ1RfVFlQRV9OQU1FIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUErTUEsT0FBb0I7ZUFBcEI7O0lBd0JhQSxVQUFVO2VBQVZBOzs7MkRBck9JO3FCQUVTO3lCQUNPO29CQUNJO29CQUN1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RCxJQUFNQyxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsNkJBQzFCQyxxQkFBcUJELElBQUFBLGdCQUFTLEVBQUM7QUFFckMsSUFBQSxBQUFNRSxxQkFBTjthQUFNQSxLQUNRQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUztnQ0FEL0JIO1FBRUYsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxTQUFTLEdBQUdBOztrQkFKZkg7O1lBT0pJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21C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