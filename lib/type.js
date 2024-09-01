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
    },
    typeFromJSONAndFileContext: function() {
        return typeFromJSONAndFileContext;
    }
});
var _typeNames = require("./typeNames");
var _name = require("./utilities/name");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var Type = /*#__PURE__*/ function() {
    function Type(name, superType) {
        _class_call_check(this, Type);
        this.name = name;
        this.superType = superType;
    }
    _create_class(Type, [
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
                var matchesName = this.name === name;
                return matchesName;
            }
        },
        {
            key: "matchTypeName",
            value: function matchTypeName(typeName) {
                var matchesTypeName = this.name === typeName;
                return matchesTypeName;
            }
        },
        {
            key: "matchTypeNode",
            value: function matchTypeNode(typeNode) {
                var typeName = (0, _name.typeNameFromTypeNode)(typeNode), matchesTypeName = this.matchTypeName(typeName), matchesTypeNode = matchesTypeName; ///
                return matchesTypeNode;
            }
        },
        {
            key: "asString",
            value: function asString(tokens) {
                var noSuperType = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                var string;
                if (noSuperType) {
                    string = "".concat(this.name);
                } else {
                    var superTypeName = this.superType.getName();
                    string = "".concat(this.name, ":").concat(superTypeName);
                }
                return string;
            }
        },
        {
            key: "toJSON",
            value: function toJSON(tokens) {
                var superTypeJSON = this.superType.toJSON(tokens), name = this.name, superType = superTypeJSON, json = {
                    name: name,
                    superType: superType
                };
                return json;
            }
        }
    ], [
        {
            key: "fromTypeName",
            value: function fromTypeName(typeName) {
                var name = typeName, superType = objectType, type = new Type(name, superType);
                return type;
            }
        },
        {
            key: "fromTypeNameAndSuperType",
            value: function fromTypeNameAndSuperType(typeName, superType) {
                var name = typeName, type = new Type(name, superType);
                return type;
            }
        }
    ]);
    return Type;
}();
var ObjectType = /*#__PURE__*/ function(Type) {
    _inherits(ObjectType, Type);
    var _super = _create_super(ObjectType);
    function ObjectType() {
        _class_call_check(this, ObjectType);
        return _super.apply(this, arguments);
    }
    _create_class(ObjectType, [
        {
            key: "toJSON",
            value: function toJSON(tokens) {
                var name = this.name, superType = null, json = {
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
                var name = _typeNames.OBJECT_TYPE_NAME, superType = null, objectType = new ObjectType(name, superType);
                return objectType;
            }
        }
    ]);
    return ObjectType;
}(Type);
var objectType = ObjectType.fromNothing();
function typeFromJSONAndFileContext(json, fileContext) {
    var type;
    var name = json.name, typeName = name; ///
    type = fileContext.findTypeByTypeName(typeName);
    if (type === null) {
        var superType = json.superType;
        var superJSON = superType; ///
        superType = typeFromJSONAndFileContext(superJSON, fileContext);
        type = new Type(name, superType);
    }
    return type;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90eXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBPQkpFQ1RfVFlQRV9OQU1FIH0gZnJvbSBcIi4vdHlwZU5hbWVzXCI7XG5cbmltcG9ydCB7IHR5cGVOYW1lRnJvbVR5cGVOb2RlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL25hbWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHlwZSB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIHN1cGVyVHlwZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5zdXBlclR5cGUgPSBzdXBlclR5cGU7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRTdXBlclR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VwZXJUeXBlO1xuICB9XG5cbiAgaXNFcXVhbFRvKHR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvID0gKHRoaXMgPT09IHR5cGUpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBpc1N1YlR5cGVPZih0eXBlKSB7XG4gICAgbGV0IHN1YlR5cGVPZiA9IGZhbHNlO1xuXG4gICAgbGV0IHN1cGVyVHlwZSA9IHRoaXMuc3VwZXJUeXBlO1xuXG4gICAgd2hpbGUgKHN1cGVyVHlwZSAhPT0gbnVsbCkge1xuICAgICAgaWYgKHN1cGVyVHlwZSA9PT0gdHlwZSkge1xuICAgICAgICBzdWJUeXBlT2YgPSB0cnVlO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBzdXBlclR5cGUgPSBzdXBlclR5cGUuZ2V0U3VwZXJUeXBlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YlR5cGVPZjtcbiAgfVxuXG4gIGlzU3VwZXJUeXBlT2YodHlwZSkge1xuICAgIGxldCBzdXBlclR5cGVPZiA9IGZhbHNlO1xuXG4gICAgbGV0IHN1cGVyVHlwZSA9IHR5cGUuZ2V0U3VwZXJUeXBlKCk7XG5cbiAgICB3aGlsZSAoc3VwZXJUeXBlICE9PSBudWxsKSB7XG4gICAgICBpZiAoc3VwZXJUeXBlID09PSB0aGlzKSB7XG4gICAgICAgIHN1cGVyVHlwZU9mID0gdHJ1ZTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgc3VwZXJUeXBlID0gc3VwZXJUeXBlLmdldFN1cGVyVHlwZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBlclR5cGVPZjtcbiAgfVxuXG4gIGlzQ29tcGFyYWJsZVRvKHR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvID0gdGhpcy5pc0VxdWFsVG8odHlwZSksXG4gICAgICAgICAgc3ViVHlwZU9mID0gdGhpcy5pc1N1YlR5cGVPZih0eXBlKSxcbiAgICAgICAgICBzdXBlclR5cGVPZiA9IHRoaXMuaXNTdXBlclR5cGVPZih0eXBlKSxcbiAgICAgICAgICBjb21wYXJhYmxlVG8gPSBlcXVhbFRvIHx8IHN1YlR5cGVPZiB8fCBzdXBlclR5cGVPZjtcblxuICAgIHJldHVybiBjb21wYXJhYmxlVG87XG4gIH1cblxuICBpc0VxdWFsVG9PclN1YlR5cGVPZih0eXBlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9IHRoaXMuaXNFcXVhbFRvKHR5cGUpLFxuICAgICAgICAgIHN1YlR5cGVPZiA9IHRoaXMuaXNTdWJUeXBlT2YodHlwZSksXG4gICAgICAgICAgZXF1YWxUb09yU3ViVHlwZU9mID0gZXF1YWxUbyB8fCBzdWJUeXBlT2Y7XG5cbiAgICByZXR1cm4gZXF1YWxUb09yU3ViVHlwZU9mO1xuICB9XG5cbiAgaXNFcXVhbFRvT3JTdXBlclR5cGVPZih0eXBlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9IHRoaXMuaXNFcXVhbFRvKHR5cGUpLFxuICAgICAgICAgIHN1cGVyVHlwZU9mID0gdGhpcy5pc1N1cGVyVHlwZU9mKHR5cGUpLFxuICAgICAgICAgIGVxdWFsVG9PclN1cGVyVHlwZU9mID0gZXF1YWxUbyB8fCBzdXBlclR5cGVPZjtcblxuICAgIHJldHVybiBlcXVhbFRvT3JTdXBlclR5cGVPZjtcbiAgfVxuXG4gIG1hdGNoKHR5cGUpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gKHR5cGUgPT09IHRoaXMpOyAgLy8vXG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTmFtZShuYW1lKSB7XG4gICAgY29uc3QgbWF0Y2hlc05hbWUgPSAodGhpcy5uYW1lID09PSBuYW1lKTtcblxuICAgIHJldHVybiBtYXRjaGVzTmFtZTtcbiAgfVxuXG4gIG1hdGNoVHlwZU5hbWUodHlwZU5hbWUpIHtcbiAgICBjb25zdCBtYXRjaGVzVHlwZU5hbWUgPSAodGhpcy5uYW1lID09PSB0eXBlTmFtZSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlc1R5cGVOYW1lO1xuICB9XG5cbiAgbWF0Y2hUeXBlTm9kZSh0eXBlTm9kZSkge1xuICAgIGNvbnN0IHR5cGVOYW1lID0gdHlwZU5hbWVGcm9tVHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICAgIG1hdGNoZXNUeXBlTmFtZSA9IHRoaXMubWF0Y2hUeXBlTmFtZSh0eXBlTmFtZSksXG4gICAgICAgICAgbWF0Y2hlc1R5cGVOb2RlID0gbWF0Y2hlc1R5cGVOYW1lOyAgLy8vXG5cbiAgICByZXR1cm4gbWF0Y2hlc1R5cGVOb2RlO1xuICB9XG5cbiAgYXNTdHJpbmcodG9rZW5zLCBub1N1cGVyVHlwZSA9IGZhbHNlKSB7XG4gICAgbGV0IHN0cmluZztcblxuICAgIGlmIChub1N1cGVyVHlwZSkge1xuICAgICAgc3RyaW5nID0gYCR7dGhpcy5uYW1lfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN1cGVyVHlwZU5hbWUgPSB0aGlzLnN1cGVyVHlwZS5nZXROYW1lKCk7XG5cbiAgICAgIHN0cmluZyA9IGAke3RoaXMubmFtZX06JHtzdXBlclR5cGVOYW1lfWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHRvSlNPTih0b2tlbnMpIHtcbiAgICBjb25zdCBzdXBlclR5cGVKU09OID0gdGhpcy5zdXBlclR5cGUudG9KU09OKHRva2VucyksXG4gICAgICAgICAgbmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICBzdXBlclR5cGUgPSBzdXBlclR5cGVKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBzdXBlclR5cGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVR5cGVOYW1lKHR5cGVOYW1lKSB7XG4gICAgY29uc3QgbmFtZSA9IHR5cGVOYW1lLCAgLy8vXG4gICAgICAgICAgc3VwZXJUeXBlID0gb2JqZWN0VHlwZSwgLy8vXG4gICAgICAgICAgdHlwZSA9IG5ldyBUeXBlKG5hbWUsIHN1cGVyVHlwZSk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVHlwZU5hbWVBbmRTdXBlclR5cGUodHlwZU5hbWUsIHN1cGVyVHlwZSkge1xuICAgIGNvbnN0IG5hbWUgPSB0eXBlTmFtZSwgIC8vL1xuICAgICAgICAgIHR5cGUgPSBuZXcgVHlwZShuYW1lLCBzdXBlclR5cGUpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cbn1cblxuY2xhc3MgT2JqZWN0VHlwZSBleHRlbmRzIFR5cGUge1xuICB0b0pTT04odG9rZW5zKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICBzdXBlclR5cGUgPSBudWxsLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBzdXBlclR5cGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbmFtZSA9IE9CSkVDVF9UWVBFX05BTUUsXG4gICAgICAgICAgc3VwZXJUeXBlID0gbnVsbCxcbiAgICAgICAgICBvYmplY3RUeXBlID0gbmV3IE9iamVjdFR5cGUobmFtZSwgc3VwZXJUeXBlKTtcblxuICAgIHJldHVybiBvYmplY3RUeXBlO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBvYmplY3RUeXBlID0gT2JqZWN0VHlwZS5mcm9tTm90aGluZygpO1xuXG5leHBvcnQgZnVuY3Rpb24gdHlwZUZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHR5cGU7XG5cbiAgY29uc3QgeyBuYW1lIH0gPSBqc29uLFxuICAgICAgICB0eXBlTmFtZSA9IG5hbWU7ICAvLy9cblxuICB0eXBlID0gZmlsZUNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgIGxldCB7IHN1cGVyVHlwZSB9ID0ganNvbjtcblxuICAgIGNvbnN0IHN1cGVySlNPTiA9IHN1cGVyVHlwZTsgIC8vL1xuXG4gICAgc3VwZXJUeXBlID0gdHlwZUZyb21KU09OQW5kRmlsZUNvbnRleHQoc3VwZXJKU09OLCBmaWxlQ29udGV4dCk7XG5cbiAgICB0eXBlID0gbmV3IFR5cGUobmFtZSwgc3VwZXJUeXBlKTtcbiAgfVxuXG4gIHJldHVybiB0eXBlO1xufVxuIl0sIm5hbWVzIjpbIlR5cGUiLCJvYmplY3RUeXBlIiwidHlwZUZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJuYW1lIiwic3VwZXJUeXBlIiwiZ2V0TmFtZSIsImdldFN1cGVyVHlwZSIsImlzRXF1YWxUbyIsInR5cGUiLCJlcXVhbFRvIiwiaXNTdWJUeXBlT2YiLCJzdWJUeXBlT2YiLCJpc1N1cGVyVHlwZU9mIiwic3VwZXJUeXBlT2YiLCJpc0NvbXBhcmFibGVUbyIsImNvbXBhcmFibGVUbyIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwiZXF1YWxUb09yU3ViVHlwZU9mIiwiaXNFcXVhbFRvT3JTdXBlclR5cGVPZiIsImVxdWFsVG9PclN1cGVyVHlwZU9mIiwibWF0Y2giLCJtYXRjaGVzIiwibWF0Y2hOYW1lIiwibWF0Y2hlc05hbWUiLCJtYXRjaFR5cGVOYW1lIiwidHlwZU5hbWUiLCJtYXRjaGVzVHlwZU5hbWUiLCJtYXRjaFR5cGVOb2RlIiwidHlwZU5vZGUiLCJ0eXBlTmFtZUZyb21UeXBlTm9kZSIsIm1hdGNoZXNUeXBlTm9kZSIsImFzU3RyaW5nIiwidG9rZW5zIiwibm9TdXBlclR5cGUiLCJzdHJpbmciLCJzdXBlclR5cGVOYW1lIiwidG9KU09OIiwic3VwZXJUeXBlSlNPTiIsImpzb24iLCJmcm9tVHlwZU5hbWUiLCJmcm9tVHlwZU5hbWVBbmRTdXBlclR5cGUiLCJPYmplY3RUeXBlIiwiZnJvbU5vdGhpbmciLCJPQkpFQ1RfVFlQRV9OQU1FIiwiZmlsZUNvbnRleHQiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJzdXBlckpTT04iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7ZUFNcUJBOztJQTBLUkMsVUFBVTtlQUFWQTs7SUFFR0MsMEJBQTBCO2VBQTFCQTs7O3lCQWhMaUI7b0JBRUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRCLElBQUEsQUFBTUYscUJBQUQsQUFBTDthQUFNQSxLQUNQRyxJQUFJLEVBQUVDLFNBQVM7Z0NBRFJKO1FBRWpCLElBQUksQ0FBQ0csSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTs7a0JBSEFKOztZQU1uQkssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixJQUFJO1lBQ2xCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixTQUFTO1lBQ3ZCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVDLElBQUk7Z0JBQ1osSUFBTUMsVUFBVyxJQUFJLEtBQUtEO2dCQUUxQixPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFlBQVlGLElBQUk7Z0JBQ2QsSUFBSUcsWUFBWTtnQkFFaEIs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