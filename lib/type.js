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
var _typeNames = require("./typeNames");
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
            key: "isEqualToSubTypeOfOrSuperTypeOf",
            value: function isEqualToSubTypeOfOrSuperTypeOf(type) {
                var equalTo = this.isEqualTo(type), subTypeOf = this.isSubTypeOf(type), superTypeOf = this.isSuperTypeOf(type), equalToOrSubTypeOfSuperTypeOf = equalTo || subTypeOf || superTypeOf;
                return equalToOrSubTypeOfSuperTypeOf;
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
                var nameMatches = this.name === name;
                return nameMatches;
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
            key: "asString",
            value: function asString(tokens, noSuperType) {
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
            key: "fromJSONAndFileContext",
            value: function fromJSONAndFileContext(json, fileContext) {
                var type;
                var superType = json.superType;
                var superTypeJSON = superType; ///
                superType = superTypeFromSuperTypeJSONAndFileContext(superTypeJSON, fileContext);
                var name = json.name;
                type = new Type(name, superType);
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
function superTypeFromSuperTypeJSONAndFileContext(superTypeJSON, fileContext) {
    var superType = null;
    if (superTypeJSON !== null) {
        var json = superTypeJSON, name = json.name, typeName = name, type = fileContext.findTypeByTypeName(typeName);
        superType = type !== null ? type : Type.fromJSONAndFileContext(json, fileContext); ///
    }
    return superType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90eXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBPQkpFQ1RfVFlQRV9OQU1FIH0gZnJvbSBcIi4vdHlwZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR5cGUge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBzdXBlclR5cGUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuc3VwZXJUeXBlID0gc3VwZXJUeXBlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0U3VwZXJUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnN1cGVyVHlwZTtcbiAgfVxuXG4gIGlzRXF1YWxUbyh0eXBlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9ICh0aGlzID09PSB0eXBlKTtcblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgaXNTdWJUeXBlT2YodHlwZSkge1xuICAgIGxldCBzdWJUeXBlT2YgPSBmYWxzZTtcblxuICAgIGxldCBzdXBlclR5cGUgPSB0aGlzLnN1cGVyVHlwZTtcblxuICAgIHdoaWxlIChzdXBlclR5cGUgIT09IG51bGwpIHtcbiAgICAgIGlmIChzdXBlclR5cGUgPT09IHR5cGUpIHtcbiAgICAgICAgc3ViVHlwZU9mID0gdHJ1ZTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgc3VwZXJUeXBlID0gc3VwZXJUeXBlLmdldFN1cGVyVHlwZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJUeXBlT2Y7XG4gIH1cblxuICBpc1N1cGVyVHlwZU9mKHR5cGUpIHtcbiAgICBsZXQgc3VwZXJUeXBlT2YgPSBmYWxzZTtcblxuICAgIGxldCBzdXBlclR5cGUgPSB0eXBlLmdldFN1cGVyVHlwZSgpO1xuXG4gICAgd2hpbGUgKHN1cGVyVHlwZSAhPT0gbnVsbCkge1xuICAgICAgaWYgKHN1cGVyVHlwZSA9PT0gdGhpcykge1xuICAgICAgICBzdXBlclR5cGVPZiA9IHRydWU7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHN1cGVyVHlwZSA9IHN1cGVyVHlwZS5nZXRTdXBlclR5cGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXJUeXBlT2Y7XG4gIH1cblxuICBpc0VxdWFsVG9PclN1YlR5cGVPZih0eXBlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9IHRoaXMuaXNFcXVhbFRvKHR5cGUpLFxuICAgICAgICAgIHN1YlR5cGVPZiA9IHRoaXMuaXNTdWJUeXBlT2YodHlwZSksXG4gICAgICAgICAgZXF1YWxUb09yU3ViVHlwZU9mID0gKGVxdWFsVG8gfHwgc3ViVHlwZU9mKTtcblxuICAgIHJldHVybiBlcXVhbFRvT3JTdWJUeXBlT2Y7XG4gIH1cblxuICBpc0VxdWFsVG9PclN1cGVyVHlwZU9mKHR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvID0gdGhpcy5pc0VxdWFsVG8odHlwZSksXG4gICAgICAgICAgc3VwZXJUeXBlT2YgPSB0aGlzLmlzU3VwZXJUeXBlT2YodHlwZSksXG4gICAgICAgICAgZXF1YWxUb09yU3VwZXJUeXBlT2YgPSAoZXF1YWxUbyB8fCBzdXBlclR5cGVPZik7XG5cbiAgICByZXR1cm4gZXF1YWxUb09yU3VwZXJUeXBlT2Y7XG4gIH1cblxuICBpc0VxdWFsVG9TdWJUeXBlT2ZPclN1cGVyVHlwZU9mKHR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvID0gdGhpcy5pc0VxdWFsVG8odHlwZSksXG4gICAgICAgICAgc3ViVHlwZU9mID0gdGhpcy5pc1N1YlR5cGVPZih0eXBlKSxcbiAgICAgICAgICBzdXBlclR5cGVPZiA9IHRoaXMuaXNTdXBlclR5cGVPZih0eXBlKSxcbiAgICAgICAgICBlcXVhbFRvT3JTdWJUeXBlT2ZTdXBlclR5cGVPZiA9IChlcXVhbFRvIHx8IHN1YlR5cGVPZiB8fCBzdXBlclR5cGVPZik7XG5cbiAgICByZXR1cm4gZXF1YWxUb09yU3ViVHlwZU9mU3VwZXJUeXBlT2Y7XG4gIH1cblxuICBtYXRjaCh0eXBlKSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9ICh0eXBlID09PSB0aGlzKTsgIC8vL1xuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE5hbWUobmFtZSkge1xuICAgIGNvbnN0IG5hbWVNYXRjaGVzID0gKHRoaXMubmFtZSA9PT0gbmFtZSk7XG5cbiAgICByZXR1cm4gbmFtZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFR5cGVOYW1lKHR5cGVOYW1lKSB7XG4gICAgY29uc3QgdHlwZU5hbWVNYXRjaGVzID0gKHRoaXMubmFtZSA9PT0gdHlwZU5hbWUpO1xuXG4gICAgcmV0dXJuIHR5cGVOYW1lTWF0Y2hlcztcbiAgfVxuXG4gIGFzU3RyaW5nKHRva2Vucywgbm9TdXBlclR5cGUpIHtcbiAgICBsZXQgc3RyaW5nO1xuXG4gICAgaWYgKG5vU3VwZXJUeXBlKSB7XG4gICAgICBzdHJpbmcgPSBgJHt0aGlzLm5hbWV9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlTmFtZSA9IHRoaXMuc3VwZXJUeXBlLmdldE5hbWUoKTtcblxuICAgICAgc3RyaW5nID0gYCR7dGhpcy5uYW1lfToke3N1cGVyVHlwZU5hbWV9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgdG9KU09OKHRva2Vucykge1xuICAgIGNvbnN0IHN1cGVyVHlwZUpTT04gPSB0aGlzLnN1cGVyVHlwZS50b0pTT04odG9rZW5zKSxcbiAgICAgICAgICBuYW1lID0gdGhpcy5uYW1lLFxuICAgICAgICAgIHN1cGVyVHlwZSA9IHN1cGVyVHlwZUpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHN1cGVyVHlwZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVHlwZU5hbWUodHlwZU5hbWUpIHtcbiAgICBjb25zdCBuYW1lID0gdHlwZU5hbWUsICAvLy9cbiAgICAgICAgICBzdXBlclR5cGUgPSBvYmplY3RUeXBlLCAvLy9cbiAgICAgICAgICB0eXBlID0gbmV3IFR5cGUobmFtZSwgc3VwZXJUeXBlKTtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgdHlwZTtcblxuICAgIGxldCB7IHN1cGVyVHlwZSB9ID0ganNvbjtcblxuICAgIGNvbnN0IHN1cGVyVHlwZUpTT04gPSBzdXBlclR5cGU7ICAvLy9cblxuICAgIHN1cGVyVHlwZSA9IHN1cGVyVHlwZUZyb21TdXBlclR5cGVKU09OQW5kRmlsZUNvbnRleHQoc3VwZXJUeXBlSlNPTiwgZmlsZUNvbnRleHQpO1xuXG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uO1xuXG4gICAgdHlwZSA9IG5ldyBUeXBlKG5hbWUsIHN1cGVyVHlwZSk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVHlwZU5hbWVBbmRTdXBlclR5cGUodHlwZU5hbWUsIHN1cGVyVHlwZSkge1xuICAgIGNvbnN0IG5hbWUgPSB0eXBlTmFtZSwgIC8vL1xuICAgICAgICAgIHR5cGUgPSBuZXcgVHlwZShuYW1lLCBzdXBlclR5cGUpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cbn1cblxuY2xhc3MgT2JqZWN0VHlwZSBleHRlbmRzIFR5cGUge1xuICB0b0pTT04odG9rZW5zKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICBzdXBlclR5cGUgPSBudWxsLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBzdXBlclR5cGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbmFtZSA9IE9CSkVDVF9UWVBFX05BTUUsXG4gICAgICAgICAgc3VwZXJUeXBlID0gbnVsbCxcbiAgICAgICAgICBvYmplY3RUeXBlID0gbmV3IE9iamVjdFR5cGUobmFtZSwgc3VwZXJUeXBlKTtcblxuICAgIHJldHVybiBvYmplY3RUeXBlO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBvYmplY3RUeXBlID0gT2JqZWN0VHlwZS5mcm9tTm90aGluZygpO1xuXG5mdW5jdGlvbiBzdXBlclR5cGVGcm9tU3VwZXJUeXBlSlNPTkFuZEZpbGVDb250ZXh0KHN1cGVyVHlwZUpTT04sIGZpbGVDb250ZXh0KSB7XG4gIGxldCBzdXBlclR5cGUgPSBudWxsO1xuXG4gIGlmIChzdXBlclR5cGVKU09OICE9PSBudWxsKSB7XG4gICAgY29uc3QganNvbiA9IHN1cGVyVHlwZUpTT04sIC8vL1xuICAgICAgICAgIHsgbmFtZSB9ID0ganNvbixcbiAgICAgICAgICB0eXBlTmFtZSA9IG5hbWUsICAvLy9cbiAgICAgICAgICB0eXBlID0gZmlsZUNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgICAgc3VwZXJUeXBlID0gKHR5cGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgdHlwZSA6ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgICBUeXBlLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpOyAgLy8vXG4gIH1cblxuICByZXR1cm4gc3VwZXJUeXBlO1xufVxuIl0sIm5hbWVzIjpbIlR5cGUiLCJvYmplY3RUeXBlIiwibmFtZSIsInN1cGVyVHlwZSIsImdldE5hbWUiLCJnZXRTdXBlclR5cGUiLCJpc0VxdWFsVG8iLCJ0eXBlIiwiZXF1YWxUbyIsImlzU3ViVHlwZU9mIiwic3ViVHlwZU9mIiwiaXNTdXBlclR5cGVPZiIsInN1cGVyVHlwZU9mIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJlcXVhbFRvT3JTdWJUeXBlT2YiLCJpc0VxdWFsVG9PclN1cGVyVHlwZU9mIiwiZXF1YWxUb09yU3VwZXJUeXBlT2YiLCJpc0VxdWFsVG9TdWJUeXBlT2ZPclN1cGVyVHlwZU9mIiwiZXF1YWxUb09yU3ViVHlwZU9mU3VwZXJUeXBlT2YiLCJtYXRjaCIsIm1hdGNoZXMiLCJtYXRjaE5hbWUiLCJuYW1lTWF0Y2hlcyIsIm1hdGNoVHlwZU5hbWUiLCJ0eXBlTmFtZSIsInR5cGVOYW1lTWF0Y2hlcyIsImFzU3RyaW5nIiwidG9rZW5zIiwibm9TdXBlclR5cGUiLCJzdHJpbmciLCJzdXBlclR5cGVOYW1lIiwidG9KU09OIiwic3VwZXJUeXBlSlNPTiIsImpzb24iLCJmcm9tVHlwZU5hbWUiLCJmcm9tSlNPTkFuZEZpbGVDb250ZXh0IiwiZmlsZUNvbnRleHQiLCJzdXBlclR5cGVGcm9tU3VwZXJUeXBlSlNPTkFuZEZpbGVDb250ZXh0IiwiZnJvbVR5cGVOYW1lQW5kU3VwZXJUeXBlIiwiT2JqZWN0VHlwZSIsImZyb21Ob3RoaW5nIiwiT0JKRUNUX1RZUEVfTkFNRSIsImZpbmRUeXBlQnlUeXBlTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztlQUlxQkE7O0lBa0xSQyxVQUFVO2VBQVZBOzs7eUJBcExvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEIsSUFBQSxBQUFNRCxxQkE2SmxCLEFBN0pZO2FBQU1BLEtBQ1BFLElBQUksRUFBRUMsU0FBUztnQ0FEUkg7UUFFakIsSUFBSSxDQUFDRSxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxTQUFTLEdBQUdBOztrQkFIQUg7O1lBTW5CSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLFNBQVM7WUFDdkI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUMsSUFB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