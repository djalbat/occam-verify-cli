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
            key: "isEqualToOrSubTypeOfOfSuperTypeOf",
            value: function isEqualToOrSubTypeOfOfSuperTypeOf(type) {
                var equalTo = this.isEqualTo(type), subTypeOf = this.isSubTypeOf(type), superTypeOf = this.isSuperTypeOf(type), equalToOrSubTypeOfOfSuperTypeOf = equalTo || subTypeOf || superTypeOf;
                return equalToOrSubTypeOfOfSuperTypeOf;
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
        var json = superTypeJSON, name = json.name;
        if (name === _typeNames.OBJECT_TYPE_NAME) {
            superType = objectType; ///
        } else {
            var typeName = name, type = fileContext.findTypeByTypeName(typeName);
            superType = type !== null ? type : Type.fromJSONAndFileContext(json, fileContext); ///
        }
    }
    return superType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90eXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBPQkpFQ1RfVFlQRV9OQU1FIH0gZnJvbSBcIi4vdHlwZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR5cGUge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBzdXBlclR5cGUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuc3VwZXJUeXBlID0gc3VwZXJUeXBlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0U3VwZXJUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnN1cGVyVHlwZTtcbiAgfVxuXG4gIGlzRXF1YWxUbyh0eXBlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9ICh0aGlzID09PSB0eXBlKTtcblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgaXNTdWJUeXBlT2YodHlwZSkge1xuICAgIGxldCBzdWJUeXBlT2YgPSBmYWxzZTtcblxuICAgIGxldCBzdXBlclR5cGUgPSB0aGlzLnN1cGVyVHlwZTtcblxuICAgIHdoaWxlIChzdXBlclR5cGUgIT09IG51bGwpIHtcbiAgICAgIGlmIChzdXBlclR5cGUgPT09IHR5cGUpIHtcbiAgICAgICAgc3ViVHlwZU9mID0gdHJ1ZTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgc3VwZXJUeXBlID0gc3VwZXJUeXBlLmdldFN1cGVyVHlwZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJUeXBlT2Y7XG4gIH1cblxuICBpc1N1cGVyVHlwZU9mKHR5cGUpIHtcbiAgICBsZXQgc3VwZXJUeXBlT2YgPSBmYWxzZTtcblxuICAgIGxldCBzdXBlclR5cGUgPSB0eXBlLmdldFN1cGVyVHlwZSgpO1xuXG4gICAgd2hpbGUgKHN1cGVyVHlwZSAhPT0gbnVsbCkge1xuICAgICAgaWYgKHN1cGVyVHlwZSA9PT0gdGhpcykge1xuICAgICAgICBzdXBlclR5cGVPZiA9IHRydWU7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHN1cGVyVHlwZSA9IHN1cGVyVHlwZS5nZXRTdXBlclR5cGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXJUeXBlT2Y7XG4gIH1cblxuICBpc0VxdWFsVG9PclN1YlR5cGVPZih0eXBlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9IHRoaXMuaXNFcXVhbFRvKHR5cGUpLFxuICAgICAgICAgIHN1YlR5cGVPZiA9IHRoaXMuaXNTdWJUeXBlT2YodHlwZSksXG4gICAgICAgICAgZXF1YWxUb09yU3ViVHlwZU9mID0gKGVxdWFsVG8gfHwgc3ViVHlwZU9mKTtcblxuICAgIHJldHVybiBlcXVhbFRvT3JTdWJUeXBlT2Y7XG4gIH1cblxuICBpc0VxdWFsVG9PclN1cGVyVHlwZU9mKHR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvID0gdGhpcy5pc0VxdWFsVG8odHlwZSksXG4gICAgICAgICAgc3VwZXJUeXBlT2YgPSB0aGlzLmlzU3VwZXJUeXBlT2YodHlwZSksXG4gICAgICAgICAgZXF1YWxUb09yU3VwZXJUeXBlT2YgPSAoZXF1YWxUbyB8fCBzdXBlclR5cGVPZik7XG5cbiAgICByZXR1cm4gZXF1YWxUb09yU3VwZXJUeXBlT2Y7XG4gIH1cblxuICBpc0VxdWFsVG9PclN1YlR5cGVPZk9mU3VwZXJUeXBlT2YodHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG8gPSB0aGlzLmlzRXF1YWxUbyh0eXBlKSxcbiAgICAgICAgICBzdWJUeXBlT2YgPSB0aGlzLmlzU3ViVHlwZU9mKHR5cGUpLFxuICAgICAgICAgIHN1cGVyVHlwZU9mID0gdGhpcy5pc1N1cGVyVHlwZU9mKHR5cGUpLFxuICAgICAgICAgIGVxdWFsVG9PclN1YlR5cGVPZk9mU3VwZXJUeXBlT2YgPSAoZXF1YWxUbyB8fCBzdWJUeXBlT2YgfHwgc3VwZXJUeXBlT2YpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG9PclN1YlR5cGVPZk9mU3VwZXJUeXBlT2Y7XG4gIH1cblxuICBtYXRjaCh0eXBlKSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9ICh0eXBlID09PSB0aGlzKTsgIC8vL1xuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE5hbWUobmFtZSkge1xuICAgIGNvbnN0IG5hbWVNYXRjaGVzID0gKHRoaXMubmFtZSA9PT0gbmFtZSk7XG5cbiAgICByZXR1cm4gbmFtZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaFR5cGVOYW1lKHR5cGVOYW1lKSB7XG4gICAgY29uc3QgdHlwZU5hbWVNYXRjaGVzID0gKHRoaXMubmFtZSA9PT0gdHlwZU5hbWUpO1xuXG4gICAgcmV0dXJuIHR5cGVOYW1lTWF0Y2hlcztcbiAgfVxuXG4gIGFzU3RyaW5nKHRva2Vucywgbm9TdXBlclR5cGUpIHtcbiAgICBsZXQgc3RyaW5nO1xuXG4gICAgaWYgKG5vU3VwZXJUeXBlKSB7XG4gICAgICBzdHJpbmcgPSBgJHt0aGlzLm5hbWV9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlTmFtZSA9IHRoaXMuc3VwZXJUeXBlLmdldE5hbWUoKTtcblxuICAgICAgc3RyaW5nID0gYCR7dGhpcy5uYW1lfToke3N1cGVyVHlwZU5hbWV9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgdG9KU09OKHRva2Vucykge1xuICAgIGNvbnN0IHN1cGVyVHlwZUpTT04gPSB0aGlzLnN1cGVyVHlwZS50b0pTT04odG9rZW5zKSxcbiAgICAgICAgICBuYW1lID0gdGhpcy5uYW1lLFxuICAgICAgICAgIHN1cGVyVHlwZSA9IHN1cGVyVHlwZUpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHN1cGVyVHlwZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVHlwZU5hbWUodHlwZU5hbWUpIHtcbiAgICBjb25zdCBuYW1lID0gdHlwZU5hbWUsICAvLy9cbiAgICAgICAgICBzdXBlclR5cGUgPSBvYmplY3RUeXBlLCAvLy9cbiAgICAgICAgICB0eXBlID0gbmV3IFR5cGUobmFtZSwgc3VwZXJUeXBlKTtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgdHlwZTtcblxuICAgIGxldCB7IHN1cGVyVHlwZSB9ID0ganNvbjtcblxuICAgIGNvbnN0IHN1cGVyVHlwZUpTT04gPSBzdXBlclR5cGU7ICAvLy9cblxuICAgIHN1cGVyVHlwZSA9IHN1cGVyVHlwZUZyb21TdXBlclR5cGVKU09OQW5kRmlsZUNvbnRleHQoc3VwZXJUeXBlSlNPTiwgZmlsZUNvbnRleHQpO1xuXG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uO1xuXG4gICAgdHlwZSA9IG5ldyBUeXBlKG5hbWUsIHN1cGVyVHlwZSk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVHlwZU5hbWVBbmRTdXBlclR5cGUodHlwZU5hbWUsIHN1cGVyVHlwZSkge1xuICAgIGNvbnN0IG5hbWUgPSB0eXBlTmFtZSwgIC8vL1xuICAgICAgICAgIHR5cGUgPSBuZXcgVHlwZShuYW1lLCBzdXBlclR5cGUpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cbn1cblxuY2xhc3MgT2JqZWN0VHlwZSBleHRlbmRzIFR5cGUge1xuICB0b0pTT04odG9rZW5zKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICBzdXBlclR5cGUgPSBudWxsLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBzdXBlclR5cGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbmFtZSA9IE9CSkVDVF9UWVBFX05BTUUsXG4gICAgICAgICAgc3VwZXJUeXBlID0gbnVsbCxcbiAgICAgICAgICBvYmplY3RUeXBlID0gbmV3IE9iamVjdFR5cGUobmFtZSwgc3VwZXJUeXBlKTtcblxuICAgIHJldHVybiBvYmplY3RUeXBlO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBvYmplY3RUeXBlID0gT2JqZWN0VHlwZS5mcm9tTm90aGluZygpO1xuXG5mdW5jdGlvbiBzdXBlclR5cGVGcm9tU3VwZXJUeXBlSlNPTkFuZEZpbGVDb250ZXh0KHN1cGVyVHlwZUpTT04sIGZpbGVDb250ZXh0KSB7XG4gIGxldCBzdXBlclR5cGUgPSBudWxsO1xuXG4gIGlmIChzdXBlclR5cGVKU09OICE9PSBudWxsKSB7XG4gICAgY29uc3QganNvbiA9IHN1cGVyVHlwZUpTT04sIC8vL1xuICAgICAgICAgIHsgbmFtZSB9ID0ganNvbjtcblxuICAgIGlmIChuYW1lID09PSBPQkpFQ1RfVFlQRV9OQU1FKSB7XG4gICAgICBzdXBlclR5cGUgPSBvYmplY3RUeXBlOyAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZU5hbWUgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgICB0eXBlID0gZmlsZUNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgICAgc3VwZXJUeXBlID0gKHR5cGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgdHlwZSA6ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgICBUeXBlLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpOyAgLy8vXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN1cGVyVHlwZTtcbn1cbiJdLCJuYW1lcyI6WyJUeXBlIiwib2JqZWN0VHlwZSIsIm5hbWUiLCJzdXBlclR5cGUiLCJnZXROYW1lIiwiZ2V0U3VwZXJUeXBlIiwiaXNFcXVhbFRvIiwidHlwZSIsImVxdWFsVG8iLCJpc1N1YlR5cGVPZiIsInN1YlR5cGVPZiIsImlzU3VwZXJUeXBlT2YiLCJzdXBlclR5cGVPZiIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwiZXF1YWxUb09yU3ViVHlwZU9mIiwiaXNFcXVhbFRvT3JTdXBlclR5cGVPZiIsImVxdWFsVG9PclN1cGVyVHlwZU9mIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2ZPZlN1cGVyVHlwZU9mIiwiZXF1YWxUb09yU3ViVHlwZU9mT2ZTdXBlclR5cGVPZiIsIm1hdGNoIiwibWF0Y2hlcyIsIm1hdGNoTmFtZSIsIm5hbWVNYXRjaGVzIiwibWF0Y2hUeXBlTmFtZSIsInR5cGVOYW1lIiwidHlwZU5hbWVNYXRjaGVzIiwiYXNTdHJpbmciLCJ0b2tlbnMiLCJub1N1cGVyVHlwZSIsInN0cmluZyIsInN1cGVyVHlwZU5hbWUiLCJ0b0pTT04iLCJzdXBlclR5cGVKU09OIiwianNvbiIsImZyb21UeXBlTmFtZSIsImZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJmaWxlQ29udGV4dCIsInN1cGVyVHlwZUZyb21TdXBlclR5cGVKU09OQW5kRmlsZUNvbnRleHQiLCJmcm9tVHlwZU5hbWVBbmRTdXBlclR5cGUiLCJPYmplY3RUeXBlIiwiZnJvbU5vdGhpbmciLCJPQkpFQ1RfVFlQRV9OQU1FIiwiZmluZFR5cGVCeVR5cGVOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O2VBSXFCQTs7SUFrTFJDLFVBQVU7ZUFBVkE7Ozt5QkFwTG9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsQixJQUFBLEFBQU1ELHFCQTZKbEIsQUE3Slk7YUFBTUEsS0FDUEUsSUFBSSxFQUFFQyxTQUFTO2dDQURSSDtRQUVqQixJQUFJLENBQUNFLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFNBQVMsR0FBR0E7O2tCQUhBSDs7WUFNbkJJLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVO2dCQUNSLE9BQU8sSUFB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