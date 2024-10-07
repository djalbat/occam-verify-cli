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
            key: "verifyAtTopLevel",
            value: function verifyAtTopLevel(fileContext) {
                var verifiedAtTopLevel = false;
                var typeString = this.string; ///
                fileContext.trace("Verifying the '".concat(typeString, "' type at top level..."));
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
                    fileContext.debug("...verified the '".concat(typeString, "' type at top level."));
                }
                return verifiedAtTopLevel;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var superTypeJSON = this.superType.toJSON(), name = this.name, superType = superTypeJSON, json = {
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
                var name = json.name, typeName = name, superType = superTypeFromJSON(json, fileContext), string = stringFromTypeNameAndSuperType(typeName, superType), type = new Type(string, name, superType);
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
    if (superType !== null) {
        if (superType !== objectType) {
            var typeString = string, superTypeName = superType.getName();
            string = "".concat(typeString, ":").concat(superTypeName);
        }
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
function superTypeFromJSON(json, fileContext) {
    var superType = json.superType;
    var superTypeJSON = superType; ///
    json = superTypeJSON; ///
    var name = json.name, typeName = name, type = fileContext.findTypeByTypeName(typeName);
    superType = type; ///
    return superType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90eXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi9zaGltXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgT0JKRUNUX1RZUEVfTkFNRSB9IGZyb20gXCIuL3R5cGVOYW1lc1wiO1xuaW1wb3J0IHsgdHlwZU5hbWVGcm9tVHlwZU5vZGUgfSBmcm9tIFwiLi91dGlsaXRpZXMvbmFtZVwiO1xuXG5jb25zdCB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVEZWNsYXJhdGlvbi90eXBlWzBdXCIpLFxuICAgICAgc3VwZXJUeXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVEZWNsYXJhdGlvbi90eXBlWzFdXCIpO1xuXG5jbGFzcyBUeXBlIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBuYW1lLCBzdXBlclR5cGUpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuc3VwZXJUeXBlID0gc3VwZXJUeXBlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFN1cGVyVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBlclR5cGU7XG4gIH1cblxuICBpc0VxdWFsVG8odHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG8gPSAodGhpcyA9PT0gdHlwZSk7XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzU3ViVHlwZU9mKHR5cGUpIHtcbiAgICBsZXQgc3ViVHlwZU9mID0gZmFsc2U7XG5cbiAgICBsZXQgc3VwZXJUeXBlID0gdGhpcy5zdXBlclR5cGU7XG5cbiAgICB3aGlsZSAoc3VwZXJUeXBlICE9PSBudWxsKSB7XG4gICAgICBpZiAoc3VwZXJUeXBlID09PSB0eXBlKSB7XG4gICAgICAgIHN1YlR5cGVPZiA9IHRydWU7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHN1cGVyVHlwZSA9IHN1cGVyVHlwZS5nZXRTdXBlclR5cGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3ViVHlwZU9mO1xuICB9XG5cbiAgaXNTdXBlclR5cGVPZih0eXBlKSB7XG4gICAgbGV0IHN1cGVyVHlwZU9mID0gZmFsc2U7XG5cbiAgICBsZXQgc3VwZXJUeXBlID0gdHlwZS5nZXRTdXBlclR5cGUoKTtcblxuICAgIHdoaWxlIChzdXBlclR5cGUgIT09IG51bGwpIHtcbiAgICAgIGlmIChzdXBlclR5cGUgPT09IHRoaXMpIHtcbiAgICAgICAgc3VwZXJUeXBlT2YgPSB0cnVlO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBzdXBlclR5cGUgPSBzdXBlclR5cGUuZ2V0U3VwZXJUeXBlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyVHlwZU9mO1xuICB9XG5cbiAgaXNDb21wYXJhYmxlVG8odHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG8gPSB0aGlzLmlzRXF1YWxUbyh0eXBlKSxcbiAgICAgICAgICBzdWJUeXBlT2YgPSB0aGlzLmlzU3ViVHlwZU9mKHR5cGUpLFxuICAgICAgICAgIHN1cGVyVHlwZU9mID0gdGhpcy5pc1N1cGVyVHlwZU9mKHR5cGUpLFxuICAgICAgICAgIGNvbXBhcmFibGVUbyA9IChlcXVhbFRvIHx8IHN1YlR5cGVPZiB8fCBzdXBlclR5cGVPZik7XG5cbiAgICByZXR1cm4gY29tcGFyYWJsZVRvO1xuICB9XG5cbiAgaXNFcXVhbFRvT3JTdWJUeXBlT2YodHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG8gPSB0aGlzLmlzRXF1YWxUbyh0eXBlKSxcbiAgICAgICAgICBzdWJUeXBlT2YgPSB0aGlzLmlzU3ViVHlwZU9mKHR5cGUpLFxuICAgICAgICAgIGVxdWFsVG9PclN1YlR5cGVPZiA9IChlcXVhbFRvIHx8IHN1YlR5cGVPZik7XG5cbiAgICByZXR1cm4gZXF1YWxUb09yU3ViVHlwZU9mO1xuICB9XG5cbiAgaXNFcXVhbFRvT3JTdXBlclR5cGVPZih0eXBlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9IHRoaXMuaXNFcXVhbFRvKHR5cGUpLFxuICAgICAgICAgIHN1cGVyVHlwZU9mID0gdGhpcy5pc1N1cGVyVHlwZU9mKHR5cGUpLFxuICAgICAgICAgIGVxdWFsVG9PclN1cGVyVHlwZU9mID0gKGVxdWFsVG8gfHwgc3VwZXJUeXBlT2YpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG9PclN1cGVyVHlwZU9mO1xuICB9XG5cbiAgbWF0Y2godHlwZSkge1xuICAgIGNvbnN0IG1hdGNoZXMgPSAodHlwZSA9PT0gdGhpcyk7ICAvLy9cblxuICAgIHJldHVybiBtYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hOYW1lKG5hbWUpIHtcbiAgICBjb25zdCBub2RlTWF0Y2hlcyA9ICh0aGlzLm5hbWUgPT09IG5hbWUpO1xuXG4gICAgcmV0dXJuIG5vZGVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hUeXBlTmFtZSh0eXBlTmFtZSkge1xuICAgIGNvbnN0IHR5cGVOYW1lTWF0Y2hlcyA9ICh0aGlzLm5hbWUgPT09IHR5cGVOYW1lKTtcblxuICAgIHJldHVybiB0eXBlTmFtZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFR5cGVOb2RlKHR5cGVOb2RlKSB7XG4gICAgY29uc3QgdHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSksXG4gICAgICAgICAgdHlwZU5hbWVNYXRjaGVzID0gdGhpcy5tYXRjaFR5cGVOYW1lKHR5cGVOYW1lKSxcbiAgICAgICAgICB0eXBlTm9kZU1hdGNoZXMgPSB0eXBlTmFtZU1hdGNoZXM7ICAvLy9cblxuICAgIHJldHVybiB0eXBlTm9kZU1hdGNoZXM7XG4gIH1cblxuICB2ZXJpZnlBdFRvcExldmVsKGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkQXRUb3BMZXZlbCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHlwZVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIGF0IHRvcCBsZXZlbC4uLmApO1xuXG4gICAgY29uc3QgdHlwZVByZXNlbnQgPSBmaWxlQ29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0aGlzLm5hbWUpO1xuXG4gICAgaWYgKHR5cGVQcmVzZW50KSB7XG4gICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgVGhlIHR5cGUgJyR7dHlwZVN0cmluZ30nIGlzIGFscmVhZHkgcHJlc2VudC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlTmFtZSA9IHRoaXMuc3VwZXJUeXBlLmdldE5hbWUoKSxcbiAgICAgICAgICAgIHN1cGVyVHlwZSA9IGZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZShzdXBlclR5cGVOYW1lKTtcblxuICAgICAgaWYgKHN1cGVyVHlwZSA9PT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzdXBlclR5cGVTdHJpbmcgPSB0aGlzLnN1cGVyVHlwZS5nZXRTdHJpbmcoKTtcblxuICAgICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgVGhlIHN1cGVyLXR5cGUgJyR7c3VwZXJUeXBlU3RyaW5nfScgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN1cGVyVHlwZSA9IHN1cGVyVHlwZTtcblxuICAgICAgICB2ZXJpZmllZEF0VG9wTGV2ZWwgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZEF0VG9wTGV2ZWwpIHtcbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgYXQgdG9wIGxldmVsLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZEF0VG9wTGV2ZWw7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3VwZXJUeXBlSlNPTiA9IHRoaXMuc3VwZXJUeXBlLnRvSlNPTigpLFxuICAgICAgICAgIG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAgc3VwZXJUeXBlID0gc3VwZXJUeXBlSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgc3VwZXJUeXBlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uLFxuICAgICAgICAgIHR5cGVOYW1lID0gbmFtZSwgIC8vL1xuICAgICAgICAgIHN1cGVyVHlwZSA9IHN1cGVyVHlwZUZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVHlwZU5hbWVBbmRTdXBlclR5cGUodHlwZU5hbWUsIHN1cGVyVHlwZSksXG4gICAgICAgICAgdHlwZSA9IG5ldyBUeXBlKHN0cmluZywgbmFtZSwgc3VwZXJUeXBlKTtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3RhdGljIGZyb21UeXBlTm9kZSh0eXBlTm9kZSkge1xuICAgIGxldCB0eXBlO1xuXG4gICAgaWYgKHR5cGVOb2RlID09PSBudWxsKSB7XG4gICAgICB0eXBlID0gb2JqZWN0VHlwZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSksXG4gICAgICAgICAgICBuYW1lID0gdHlwZU5hbWUsICAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IG5hbWUsICAvLy9cbiAgICAgICAgICAgIHN1cGVyVHlwZSA9IG51bGw7XG5cbiAgICAgIHR5cGUgPSBuZXcgVHlwZShzdHJpbmcsIG5hbWUsIHN1cGVyVHlwZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVR5cGVEZWNsYXJhdGlvbk5vZGUodHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkodHlwZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgICAgc3VwZXJUeXBlTm9kZSA9IHN1cGVyVHlwZU5vZGVRdWVyeSh0eXBlRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgICB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKSxcbiAgICAgICAgICBzdXBlclR5cGUgPSBUeXBlLmZyb21UeXBlTm9kZShzdXBlclR5cGVOb2RlKSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVHlwZU5hbWVBbmRTdXBlclR5cGUodHlwZU5hbWUsIHN1cGVyVHlwZSksXG4gICAgICAgICAgbmFtZSA9IHR5cGVOYW1lLCAgLy8vXG4gICAgICAgICAgdHlwZSA9IG5ldyBUeXBlKHN0cmluZywgbmFtZSwgc3VwZXJUeXBlKTtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21UeXBlTmFtZUFuZFN1cGVyVHlwZSh0eXBlTmFtZSwgc3VwZXJUeXBlKSB7XG4gIGxldCBzdHJpbmcgPSB0eXBlTmFtZTsgIC8vL1xuXG4gIGlmIChzdXBlclR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAoc3VwZXJUeXBlICE9PSBvYmplY3RUeXBlKSB7XG4gICAgICBjb25zdCB0eXBlU3RyaW5nID0gc3RyaW5nLCAgLy8vXG4gICAgICAgICAgICBzdXBlclR5cGVOYW1lID0gc3VwZXJUeXBlLmdldE5hbWUoKTtcblxuICAgICAgc3RyaW5nID0gYCR7dHlwZVN0cmluZ306JHtzdXBlclR5cGVOYW1lfWA7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuT2JqZWN0LmFzc2lnbihzaGltLCB7XG4gIFR5cGVcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBUeXBlO1xuXG5jbGFzcyBPYmplY3RUeXBlIGV4dGVuZHMgVHlwZSB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBuYW1lID0gT0JKRUNUX1RZUEVfTkFNRSxcbiAgICAgICAgICBzdHJpbmcgPSBuYW1lLCAgLy9cbiAgICAgICAgICBzdXBlclR5cGUgPSBudWxsLFxuICAgICAgICAgIG9iamVjdFR5cGUgPSBuZXcgT2JqZWN0VHlwZShzdHJpbmcsIG5hbWUsIHN1cGVyVHlwZSk7XG5cbiAgICByZXR1cm4gb2JqZWN0VHlwZTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgb2JqZWN0VHlwZSA9IE9iamVjdFR5cGUuZnJvbU5vdGhpbmcoKTtcblxuZnVuY3Rpb24gc3VwZXJUeXBlRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHsgc3VwZXJUeXBlIH0gPSBqc29uO1xuXG4gIGNvbnN0IHN1cGVyVHlwZUpTT04gPSBzdXBlclR5cGU7ICAvLy9cblxuICBqc29uID0gc3VwZXJUeXBlSlNPTjsgLy8vXG5cbiAgY29uc3QgeyBuYW1lIH0gPSBqc29uLFxuICAgICAgICB0eXBlTmFtZSA9IG5hbWUsICAvLy9cbiAgICAgICAgdHlwZSA9IGZpbGVDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgc3VwZXJUeXBlID0gdHlwZTsgLy8vXG5cbiAgcmV0dXJuIHN1cGVyVHlwZTtcbn1cbiJdLCJuYW1lcyI6WyJvYmplY3RUeXBlIiwidHlwZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInN1cGVyVHlwZU5vZGVRdWVyeSIsIlR5cGUiLCJzdHJpbmciLCJuYW1lIiwic3VwZXJUeXBlIiwiZ2V0U3RyaW5nIiwiZ2V0TmFtZSIsImdldFN1cGVyVHlwZSIsImlzRXF1YWxUbyIsInR5cGUiLCJlcXVhbFRvIiwiaXNTdWJUeXBlT2YiLCJzdWJUeXBlT2YiLCJpc1N1cGVyVHlwZU9mIiwic3VwZXJUeXBlT2YiLCJpc0NvbXBhcmFibGVUbyIsImNvbXBhcmFibGVUbyIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwiZXF1YWxUb09yU3ViVHlwZU9mIiwiaXNFcXVhbFRvT3JTdXBlclR5cGVPZiIsImVxdWFsVG9PclN1cGVyVHlwZU9mIiwibWF0Y2giLCJtYXRjaGVzIiwibWF0Y2hOYW1lIiwibm9kZU1hdGNoZXMiLCJtYXRjaFR5cGVOYW1lIiwidHlwZU5hbWUiLCJ0eXBlTmFtZU1hdGNoZXMiLCJtYXRjaFR5cGVOb2RlIiwidHlwZU5vZGUiLCJ0eXBlTmFtZUZyb21UeXBlTm9kZSIsInR5cGVOb2RlTWF0Y2hlcyIsInZlcmlmeUF0VG9wTGV2ZWwiLCJmaWxlQ29udGV4dCIsInZlcmlmaWVkQXRUb3BMZXZlbCIsInR5cGVTdHJpbmciLCJ0cmFjZSIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJkZWJ1ZyIsInN1cGVyVHlwZU5hbWUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJzdXBlclR5cGVTdHJpbmciLCJ0b0pTT04iLCJzdXBlclR5cGVKU09OIiwianNvbiIsImZyb21KU09OIiwic3VwZXJUeXBlRnJvbUpTT04iLCJzdHJpbmdGcm9tVHlwZU5hbWVBbmRTdXBlclR5cGUiLCJmcm9tVHlwZU5vZGUiLCJmcm9tVHlwZURlY2xhcmF0aW9uTm9kZSIsInR5cGVEZWNsYXJhdGlvbk5vZGUiLCJzdXBlclR5cGVOb2RlIiwiT2JqZWN0IiwiYXNzaWduIiwic2hpbSIsIk9iamVjdFR5cGUiLCJmcm9tTm90aGluZyIsIk9CSkVDVF9UWVBFX05BTUUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQW1PQSxPQUFvQjtlQUFwQjs7SUFhYUEsVUFBVTtlQUFWQTs7OzJEQTlPSTtxQkFFUzt5QkFDTztvQkFDSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVyQyxJQUFNQyxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsNkJBQzFCQyxxQkFBcUJELElBQUFBLGdCQUFTLEVBQUM7QUFFckMsSUFBQSxBQUFNRSxxQkFBTjthQUFNQSxLQUNRQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUztnQ0FEL0JIO1FBRUYsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxTQUFTLEdBQUdBOztrQkFKZkg7O1lBT0pJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsSUFBSTtZQUNsQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsU0FBUztZQUN2Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVQyxJQUFJO2dCQUNaLElBQU1DLFVBQVcsSUFBSSxLQUFLRDtnQkFFMUIsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxZQUFZRixJQUFJO2dCQUNkLElBQUlHLFlBQVk7Z0JBRWhCLElBQUlSLFlBQVksSUFBSSxDQUFDQSxTQUFTO2dCQUU5QixNQUFPQSxjQUFjLEtBQU07b0JBQ3pCLElBQUlBLGNBQWNLLE1BQU07d0JBQ3RCRyxZQUFZO3dCQUVaO29CQUNGO29CQUVBUixZQUFZQSxVQUFVRyxZQUFZO2dCQUNwQztnQkFFQSxPQUFPSztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWNKLElBQUk7Z0JBQ2hCLElBQUlLLGNBQWM7Z0JBRWxCLElBQUlWLFlBQVlLLEtBQUtGLFlBQVk7Z0JBRWpDLE1BQU9ILGNBQWMsS0FBTTtvQkFDekIsSUFBSUEsY0FBYyxJQUFJLEVBQUU7d0JBQ3RCVSxjQUFjO3dCQUVkO29CQUNGO29CQUVBVixZQUFZQSxVQUFVRyxZQUFZO2dCQUNwQztnQkFFQSxPQUFPTztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVOLElBQUk7Z0JBQ2pCLElBQU1DLFVBQVUsSUFBSSxDQUFDRixTQUFTLENBQUNDLE9BQ3pCRyxZQUFZLElBQUksQ0FBQ0QsV0FBVyxDQUFDRixPQUM3QkssY0FBYyxJQUFJLENBQUNELGFBQWEsQ0FBQ0osT0FDakNPLGVBQWdCTixXQUFXRSxhQUFhRTtnQkFFOUMsT0FBT0U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxxQkFBcUJSLElBQUk7Z0JBQ3ZCLElBQU1DLFVBQVUsSUFBSSxDQUFDRixTQUFTLENBQUNDLE9BQ3pCRyxZQUFZLElBQUksQ0FBQ0QsV0FBVyxDQUFDRixPQUM3QlMscUJBQXNCUixXQUFXRTtnQkFFdkMsT0FBT007WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSx1QkFBdUJWLElBQUk7Z0JBQ3pCLElBQU1DLFVBQVUsSUFBSSxDQUFDRixTQUFTLENBQUNDLE9BQ3pCSyxjQUFjLElBQUksQ0FBQ0QsYUFBYSxDQUFDSixPQUNqQ1csdUJBQXdCVixXQUFXSTtnQkFFekMsT0FBT007WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxNQUFNWixJQUFJO2dCQUNSLElBQU1hLFVBQVdiLFNBQVMsSUFBSSxFQUFJLEdBQUc7Z0JBRXJDLE9BQU9hO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVXBCLElBQUk7Z0JBQ1osSUFBTXFCLGNBQWUsSUFBSSxDQUFDckIsSUFBSSxLQUFLQTtnQkFFbkMsT0FBT3FCO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsY0FBY0MsUUFBUTtnQkFDcEIsSUFBTUMsa0JBQW1CLElBQUksQ0FBQ3hCLElBQUksS0FBS3VCO2dCQUV2QyxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWNDLFFBQVE7Z0JBQ3BCLElBQU1ILFdBQVdJLElBQUFBLDBCQUFvQixFQUFDRCxXQUNoQ0Ysa0JBQWtCLElBQUksQ0FBQ0YsYUFBYSxDQUFDQyxXQUNyQ0ssa0JBQWtCSixpQkFBa0IsR0FBRztnQkFFN0MsT0FBT0k7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJDLFdBQVc7Z0JBQzFCLElBQUlDLHFCQUFxQjtnQkFFekIsSUFBTUMsYUFBYSxJQUFJLENBQUNqQyxNQUFNLEVBQUUsR0FBRztnQkFFbkMrQixZQUFZRyxLQUFLLENBQUMsQUFBQyxrQkFBNEIsT0FBWEQsWUFBVztnQkFFL0MsSUFBTUUsY0FBY0osWUFBWUssdUJBQXVCLENBQUMsSUFBSSxDQUFDbkMsSUFBSTtnQkFFakUsSUFBSWtDLGFBQWE7b0JBQ2ZKLFlBQVlNLEtBQUssQ0FBQyxBQUFDLGFBQXVCLE9BQVhKLFlBQVc7Z0JBQzVDLE9BQU87b0JBQ0wsSUFBTUssZ0JBQWdCLElBQUksQ0FBQ3BDLFNBQVMsQ0FBQ0UsT0FBTyxJQUN0Q0YsWUFBWTZCLFlBQVlRLGtCQUFrQixDQUFDRDtvQkFFakQsSUFBSXBDLGNBQWMsTUFBTTt3QkFDdEIsSUFBTXNDLGtCQUFrQixJQUFJLENBQUN0QyxTQUFTLENBQUNDLFNBQVM7d0JBRWhENEIsWUFBWU0sS0FBSyxDQUFDLEFBQUMsbUJBQWtDLE9BQWhCRyxpQkFBZ0I7b0JBQ3ZELE9BQU87d0JBQ0wsSUFBSSxDQUFDdEMsU0FBUyxHQUFHQTt3QkFFakI4QixxQkFBcUI7b0JBQ3ZCO2dCQUNGO2dCQUVBLElBQUlBLG9CQUFvQjtvQkFDdEJELFlBQVlNLEtBQUssQ0FBQyxBQUFDLG9CQUE4QixPQUFYSixZQUFXO2dCQUNuRDtnQkFFQSxPQUFPRDtZQUNUOzs7WUFFQVMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGdCQUFnQixJQUFJLENBQUN4QyxTQUFTLENBQUN1QyxNQUFNLElBQ3JDeEMsT0FBTyxJQUFJLENBQUNBLElBQUksRUFDaEJDLFlBQVl3QyxlQUNaQyxPQUFPO29CQUNMMUMsTUFBQUE7b0JBQ0FDLFdBQUFBO2dCQUNGO2dCQUVOLE9BQU95QztZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNELElBQUksRUFBRVosV0FBVztnQkFDL0IsSUFBTSxBQUFFOUIsT0FBUzBDLEtBQVQxQyxNQUNGdUIsV0FBV3ZCLE1BQ1hDLFlBQVkyQyxrQkFBa0JGLE1BQU1aLGNBQ3BDL0IsU0FBUzhDLCtCQUErQnRCLFVBQVV0QixZQUNsREssT0FBTyxJQWxLWFIsS0FrS29CQyxRQUFRQyxNQUFNQztnQkFFcEMsT0FBT0s7WUFDVDs7O1lBRU93QyxLQUFBQTttQkFBUCxTQUFPQSxhQUFhcEIsUUFBUTtnQkFDMUIsSUFBSXBCO2dCQUVKLElBQUlvQixhQUFhLE1BQU07b0JBQ3JCcEIsT0FBT1o7Z0JBQ1QsT0FBTztvQkFDTCxJQUFNNkIsV0FBV0ksSUFBQUEsMEJBQW9CLEVBQUNELFdBQ2hDMUIsT0FBT3VCLFVBQ1B4QixTQUFTQyxNQUNUQyxZQUFZO29CQUVsQkssT0FBTyxJQWxMUFIsS0FrTGdCQyxRQUFRQyxNQUFNQztnQkFDaEM7Z0JBRUEsT0FBT0s7WUFDVDs7O1lBRU95QyxLQUFBQTttQkFBUCxTQUFPQSx3QkFBd0JDLG1CQUFtQixFQUFFbEIsV0FBVztnQkFDN0QsSUFBTUosV0FBVy9CLGNBQWNxRCxzQkFDekJDLGdCQUFnQnBELG1CQUFtQm1ELHNCQUNuQ3pCLFdBQVdJLElBQUFBLDBCQUFvQixFQUFDRCxXQUNoQ3pCLFlBQVlILEFBNUxoQkEsS0E0THFCZ0QsWUFBWSxDQUFDRyxnQkFDOUJsRCxTQUFTOEMsK0JBQStCdEIsVUFBVXRCLFlBQ2xERCxPQUFPdUIsVUFDUGpCLE9BQU8sSUEvTFhSLEtBK0xvQkMsUUFBUUMsTUFBTUM7Z0JBRXBDLE9BQU9LO1lBQ1Q7OztXQWxNSVI7O0FBcU1OLFNBQVMrQywrQkFBK0J0QixRQUFRLEVBQUV0QixTQUFTO0lBQ3pELElBQUlGLFNBQVN3QixVQUFXLEdBQUc7SUFFM0IsSUFBSXRCLGNBQWMsTUFBTTtRQUN0QixJQUFJQSxjQUFjUCxZQUFZO1lBQzVCLElBQU1zQyxhQUFhakMsUUFDYnNDLGdCQUFnQnBDLFVBQVVFLE9BQU87WUFFdkNKLFNBQVMsQUFBQyxHQUFnQnNDLE9BQWRMLFlBQVcsS0FBaUIsT0FBZEs7UUFDNUI7SUFDRjtJQUVBLE9BQU90QztBQUNUO0FBRUFtRCxPQUFPQyxNQUFNLENBQUNDLGFBQUksRUFBRTtJQUNsQnRELE1BQUFBO0FBQ0Y7SUFFQSxXQUFlQTtBQUVmLElBQUEsQUFBTXVELDJCQUFOO2NBQU1BO2FBQUFBO2dDQUFBQTtpQ0FBQUE7O2tCQUFBQTs7WUFDR0MsS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTXRELE9BQU91RCwyQkFBZ0IsRUFDdkJ4RCxTQUFTQyxNQUNUQyxZQUFZLE1BQ1pQLGFBQWEsSUFMakIyRCxXQUtnQ3RELFFBQVFDLE1BQU1DO2dCQUVoRCxPQUFPUDtZQUNUOzs7V0FSSTJEO0VBQW1CdkQ7QUFXbEIsSUFBTUosYUFBYTJELFdBQVdDLFdBQVc7QUFFaEQsU0FBU1Ysa0JBQWtCRixJQUFJLEVBQUVaLFdBQVc7SUFDMUMsSUFBSSxBQUFFN0IsWUFBY3lDLEtBQWR6QztJQUVOLElBQU13QyxnQkFBZ0J4QyxXQUFZLEdBQUc7SUFFckN5QyxPQUFPRCxlQUFlLEdBQUc7SUFFekIsSUFBTSxBQUFFekMsT0FBUzBDLEtBQVQxQyxNQUNGdUIsV0FBV3ZCLE1BQ1hNLE9BQU93QixZQUFZUSxrQkFBa0IsQ0FBQ2Y7SUFFNUN0QixZQUFZSyxNQUFNLEdBQUc7SUFFckIsT0FBT0w7QUFDVCJ9