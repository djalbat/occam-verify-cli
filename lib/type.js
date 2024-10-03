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
        return Type;
    },
    objectType: function() {
        return objectType;
    }
});
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
        }
    ], [
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90eXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IE9CSkVDVF9UWVBFX05BTUUgfSBmcm9tIFwiLi90eXBlTmFtZXNcIjtcbmltcG9ydCB7IHR5cGVOYW1lRnJvbVR5cGVOb2RlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25hbWVcIjtcblxuY29uc3QgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlRGVjbGFyYXRpb24vdHlwZVswXVwiKSxcbiAgICAgIHN1cGVyVHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlRGVjbGFyYXRpb24vdHlwZVsxXVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHlwZSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbmFtZSwgc3VwZXJUeXBlKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnN1cGVyVHlwZSA9IHN1cGVyVHlwZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRTdXBlclR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VwZXJUeXBlO1xuICB9XG5cbiAgaXNFcXVhbFRvKHR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvID0gKHRoaXMgPT09IHR5cGUpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBpc1N1YlR5cGVPZih0eXBlKSB7XG4gICAgbGV0IHN1YlR5cGVPZiA9IGZhbHNlO1xuXG4gICAgbGV0IHN1cGVyVHlwZSA9IHRoaXMuc3VwZXJUeXBlO1xuXG4gICAgd2hpbGUgKHN1cGVyVHlwZSAhPT0gbnVsbCkge1xuICAgICAgaWYgKHN1cGVyVHlwZSA9PT0gdHlwZSkge1xuICAgICAgICBzdWJUeXBlT2YgPSB0cnVlO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBzdXBlclR5cGUgPSBzdXBlclR5cGUuZ2V0U3VwZXJUeXBlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YlR5cGVPZjtcbiAgfVxuXG4gIGlzU3VwZXJUeXBlT2YodHlwZSkge1xuICAgIGxldCBzdXBlclR5cGVPZiA9IGZhbHNlO1xuXG4gICAgbGV0IHN1cGVyVHlwZSA9IHR5cGUuZ2V0U3VwZXJUeXBlKCk7XG5cbiAgICB3aGlsZSAoc3VwZXJUeXBlICE9PSBudWxsKSB7XG4gICAgICBpZiAoc3VwZXJUeXBlID09PSB0aGlzKSB7XG4gICAgICAgIHN1cGVyVHlwZU9mID0gdHJ1ZTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgc3VwZXJUeXBlID0gc3VwZXJUeXBlLmdldFN1cGVyVHlwZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlclR5cGVPZjtcbiAgfVxuXG4gIGlzQ29tcGFyYWJsZVRvKHR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvID0gdGhpcy5pc0VxdWFsVG8odHlwZSksXG4gICAgICAgICAgc3ViVHlwZU9mID0gdGhpcy5pc1N1YlR5cGVPZih0eXBlKSxcbiAgICAgICAgICBzdXBlclR5cGVPZiA9IHRoaXMuaXNTdXBlclR5cGVPZih0eXBlKSxcbiAgICAgICAgICBjb21wYXJhYmxlVG8gPSBlcXVhbFRvIHx8IHN1YlR5cGVPZiB8fCBzdXBlclR5cGVPZjtcblxuICAgIHJldHVybiBjb21wYXJhYmxlVG87XG4gIH1cblxuICBpc0VxdWFsVG9PclN1YlR5cGVPZih0eXBlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9IHRoaXMuaXNFcXVhbFRvKHR5cGUpLFxuICAgICAgICAgIHN1YlR5cGVPZiA9IHRoaXMuaXNTdWJUeXBlT2YodHlwZSksXG4gICAgICAgICAgZXF1YWxUb09yU3ViVHlwZU9mID0gZXF1YWxUbyB8fCBzdWJUeXBlT2Y7XG5cbiAgICByZXR1cm4gZXF1YWxUb09yU3ViVHlwZU9mO1xuICB9XG5cbiAgaXNFcXVhbFRvT3JTdXBlclR5cGVPZih0eXBlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9IHRoaXMuaXNFcXVhbFRvKHR5cGUpLFxuICAgICAgICAgIHN1cGVyVHlwZU9mID0gdGhpcy5pc1N1cGVyVHlwZU9mKHR5cGUpLFxuICAgICAgICAgIGVxdWFsVG9PclN1cGVyVHlwZU9mID0gZXF1YWxUbyB8fCBzdXBlclR5cGVPZjtcblxuICAgIHJldHVybiBlcXVhbFRvT3JTdXBlclR5cGVPZjtcbiAgfVxuXG4gIG1hdGNoKHR5cGUpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gKHR5cGUgPT09IHRoaXMpOyAgLy8vXG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTmFtZShuYW1lKSB7XG4gICAgY29uc3Qgbm9kZU1hdGNoZXMgPSAodGhpcy5uYW1lID09PSBuYW1lKTtcblxuICAgIHJldHVybiBub2RlTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoVHlwZU5hbWUodHlwZU5hbWUpIHtcbiAgICBjb25zdCB0eXBlTmFtZU1hdGNoZXMgPSAodGhpcy5uYW1lID09PSB0eXBlTmFtZSk7XG5cbiAgICByZXR1cm4gdHlwZU5hbWVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hUeXBlTm9kZSh0eXBlTm9kZSkge1xuICAgIGNvbnN0IHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICAgIHR5cGVOYW1lTWF0Y2hlcyA9IHRoaXMubWF0Y2hUeXBlTmFtZSh0eXBlTmFtZSksXG4gICAgICAgICAgdHlwZU5vZGVNYXRjaGVzID0gdHlwZU5hbWVNYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gdHlwZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgdmVyaWZ5KGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCB0eXBlU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuLi5gKTtcblxuICAgIGNvbnN0IHR5cGVQcmVzZW50ID0gZmlsZUNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodGhpcy5uYW1lKTtcblxuICAgIGlmICh0eXBlUHJlc2VudCkge1xuICAgICAgZmlsZUNvbnRleHQuZGVidWcoYFRoZSB0eXBlICcke3R5cGVTdHJpbmd9JyBpcyBhbHJlYWR5IHByZXNlbnQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnN1cGVyVHlwZSA9PT0gbnVsbCkge1xuICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBuYW1lID0gdGhpcy5zdXBlclR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICBzdXBlclR5cGVQcmVzZW50ID0gZmlsZUNvbnRleHQuaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUobmFtZSk7XG5cbiAgICAgICAgaWYgKHN1cGVyVHlwZVByZXNlbnQpIHtcbiAgICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3Qgc3VwZXJUeXBlU3RyaW5nID0gdGhpcy5zdXBlclR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgICBmaWxlQ29udGV4dC5kZWJ1ZyhgVGhlIHN1cGVyLXR5cGUgJyR7c3VwZXJUeXBlU3RyaW5nfScgaXMgbm90IHByZXNlbnQuYCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21UeXBlTm9kZSh0eXBlTm9kZSkge1xuICAgIGxldCB0eXBlID0gbnVsbDtcblxuICAgIGlmICh0eXBlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdHlwZU5hbWUgPSB0eXBlTmFtZUZyb21UeXBlTm9kZSh0eXBlTm9kZSksXG4gICAgICAgICAgICBuYW1lID0gdHlwZU5hbWUsICAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IG5hbWUsICAvLy9cbiAgICAgICAgICAgIHN1cGVyVHlwZSA9IG51bGw7XG5cbiAgICAgIHR5cGUgPSBuZXcgVHlwZShzdHJpbmcsIG5hbWUsIHN1cGVyVHlwZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVR5cGVEZWNsYXJhdGlvbk5vZGUodHlwZURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkodHlwZURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgICAgc3VwZXJUeXBlTm9kZSA9IHN1cGVyVHlwZU5vZGVRdWVyeSh0eXBlRGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgICB0eXBlTmFtZSA9IHR5cGVOYW1lRnJvbVR5cGVOb2RlKHR5cGVOb2RlKSxcbiAgICAgICAgICBzdXBlclR5cGUgPSBUeXBlLmZyb21UeXBlTm9kZShzdXBlclR5cGVOb2RlKSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVHlwZU5hbWVBbmRTdXBlclR5cGUodHlwZU5hbWUsIHN1cGVyVHlwZSksXG4gICAgICAgICAgbmFtZSA9IHR5cGVOYW1lLFxuICAgICAgICAgIHR5cGUgPSBuZXcgVHlwZShzdHJpbmcsIG5hbWUsIHN1cGVyVHlwZSk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tVHlwZU5hbWVBbmRTdXBlclR5cGUodHlwZU5hbWUsIHN1cGVyVHlwZSkge1xuICBsZXQgc3RyaW5nID0gdHlwZU5hbWU7ICAvLy9cblxuICBpZiAoc3VwZXJUeXBlICE9PSBudWxsKSB7XG4gICAgY29uc3QgdHlwZVN0cmluZyA9IHN0cmluZywgIC8vL1xuICAgICAgICAgIHN1cGVyVHlwZVN0cmluZyA9IHN1cGVyVHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIHN0cmluZyA9IGAke3R5cGVTdHJpbmd9OiR7c3VwZXJUeXBlU3RyaW5nfWA7XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5jbGFzcyBPYmplY3RUeXBlIGV4dGVuZHMgVHlwZSB7XG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBuYW1lID0gT0JKRUNUX1RZUEVfTkFNRSxcbiAgICAgICAgICBzdXBlclR5cGUgPSBudWxsLFxuICAgICAgICAgIG9iamVjdFR5cGUgPSBuZXcgT2JqZWN0VHlwZShuYW1lLCBzdXBlclR5cGUpO1xuXG4gICAgcmV0dXJuIG9iamVjdFR5cGU7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG9iamVjdFR5cGUgPSBPYmplY3RUeXBlLmZyb21Ob3RoaW5nKCk7XG4iXSwibmFtZXMiOlsiVHlwZSIsIm9iamVjdFR5cGUiLCJ0eXBlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwic3VwZXJUeXBlTm9kZVF1ZXJ5Iiwic3RyaW5nIiwibmFtZSIsInN1cGVyVHlwZSIsImdldFN0cmluZyIsImdldE5hbWUiLCJnZXRTdXBlclR5cGUiLCJpc0VxdWFsVG8iLCJ0eXBlIiwiZXF1YWxUbyIsImlzU3ViVHlwZU9mIiwic3ViVHlwZU9mIiwiaXNTdXBlclR5cGVPZiIsInN1cGVyVHlwZU9mIiwiaXNDb21wYXJhYmxlVG8iLCJjb21wYXJhYmxlVG8iLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsImVxdWFsVG9PclN1YlR5cGVPZiIsImlzRXF1YWxUb09yU3VwZXJUeXBlT2YiLCJlcXVhbFRvT3JTdXBlclR5cGVPZiIsIm1hdGNoIiwibWF0Y2hlcyIsIm1hdGNoTmFtZSIsIm5vZGVNYXRjaGVzIiwibWF0Y2hUeXBlTmFtZSIsInR5cGVOYW1lIiwidHlwZU5hbWVNYXRjaGVzIiwibWF0Y2hUeXBlTm9kZSIsInR5cGVOb2RlIiwidHlwZU5hbWVGcm9tVHlwZU5vZGUiLCJ0eXBlTm9kZU1hdGNoZXMiLCJ2ZXJpZnkiLCJmaWxlQ29udGV4dCIsInZlcmlmaWVkIiwidHlwZVN0cmluZyIsInRyYWNlIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsImRlYnVnIiwic3VwZXJUeXBlUHJlc2VudCIsInN1cGVyVHlwZVN0cmluZyIsImZyb21UeXBlTm9kZSIsImZyb21UeXBlRGVjbGFyYXRpb25Ob2RlIiwidHlwZURlY2xhcmF0aW9uTm9kZSIsInN1cGVyVHlwZU5vZGUiLCJzdHJpbmdGcm9tVHlwZU5hbWVBbmRTdXBlclR5cGUiLCJPYmplY3RUeXBlIiwiZnJvbU5vdGhpbmciLCJPQkpFQ1RfVFlQRV9OQU1FIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O2VBU3FCQTs7SUFzTVJDLFVBQVU7ZUFBVkE7OztxQkE3TWE7eUJBQ087b0JBQ0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJDLElBQU1DLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyw2QkFDMUJDLHFCQUFxQkQsSUFBQUEsZ0JBQVMsRUFBQztBQUV0QixJQUFBLEFBQU1ILHFCQUFOO2FBQU1BLEtBQ1BLLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTO2dDQURoQlA7UUFFakIsSUFBSSxDQUFDSyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxTQUFTLEdBQUdBOztrQkFKQVA7O1lBT25CUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFB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