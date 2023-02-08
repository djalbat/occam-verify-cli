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
var _kinds = require("./kinds");
var _typeNames = require("./typeNames");
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
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
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
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
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
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
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var Type = /*#__PURE__*/ function() {
    function Type(name, superType) {
        _classCallCheck(this, Type);
        this.name = name;
        this.superType = superType;
    }
    _createClass(Type, [
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
                var equalToType = this.isEqualTo(type), subTypeOfType = this.isSubTypeOf(type), superTypeOfType = this.isSuperTypeOf(type), matches = equalToType || subTypeOfType || superTypeOfType;
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
                var superTypeJSON = this.superType.toJSON(tokens), kind = _kinds.TYPE_KIND, name = this.name, superType = superTypeJSON, json = {
                    kind: kind,
                    name: name,
                    superType: superType
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, context) {
                var type;
                var superType = json.superType;
                var superTypeJSON = superType; ///
                superType = superTypeFromSuperTypeJSON(superTypeJSON, context);
                var name = json.name;
                type = new Type(name, superType);
                return type;
            }
        },
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
    var _super = _createSuper(ObjectType);
    function ObjectType() {
        _classCallCheck(this, ObjectType);
        return _super.apply(this, arguments);
    }
    _createClass(ObjectType, [
        {
            key: "toJSON",
            value: function toJSON(tokens) {
                var kind = _kinds.TYPE_KIND, name = this.name, superType = null, json = {
                    kind: kind,
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
function superTypeFromSuperTypeJSON(superTypeJSON, context) {
    var superType;
    var json = superTypeJSON, name = json.name;
    if (name === _typeNames.OBJECT_TYPE_NAME) {
        superType = objectType; ///
    } else {
        var typeName = name, type = context.findTypeByTypeName(typeName);
        superType = type !== null ? type : Type.fromJSON(json, context); ///
    }
    return superType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90eXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBUWVBFX0tJTkQgfSBmcm9tIFwiLi9raW5kc1wiO1xuaW1wb3J0IHsgT0JKRUNUX1RZUEVfTkFNRSB9IGZyb20gXCIuL3R5cGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUeXBlIHtcbiAgY29uc3RydWN0b3IobmFtZSwgc3VwZXJUeXBlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnN1cGVyVHlwZSA9IHN1cGVyVHlwZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFN1cGVyVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBlclR5cGU7XG4gIH1cblxuICBpc0VxdWFsVG8odHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG8gPSAodGhpcyA9PT0gdHlwZSk7XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzU3ViVHlwZU9mKHR5cGUpIHtcbiAgICBsZXQgc3ViVHlwZU9mID0gZmFsc2U7XG5cbiAgICBsZXQgc3VwZXJUeXBlID0gdGhpcy5zdXBlclR5cGU7XG5cbiAgICB3aGlsZSAoc3VwZXJUeXBlICE9PSBudWxsKSB7XG4gICAgICBpZiAoc3VwZXJUeXBlID09PSB0eXBlKSB7XG4gICAgICAgIHN1YlR5cGVPZiA9IHRydWU7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHN1cGVyVHlwZSA9IHN1cGVyVHlwZS5nZXRTdXBlclR5cGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3ViVHlwZU9mO1xuICB9XG5cbiAgaXNTdXBlclR5cGVPZih0eXBlKSB7XG4gICAgbGV0IHN1cGVyVHlwZU9mID0gZmFsc2U7XG5cbiAgICBsZXQgc3VwZXJUeXBlID0gdHlwZS5nZXRTdXBlclR5cGUoKTtcblxuICAgIHdoaWxlIChzdXBlclR5cGUgIT09IG51bGwpIHtcbiAgICAgIGlmIChzdXBlclR5cGUgPT09IHRoaXMpIHtcbiAgICAgICAgc3VwZXJUeXBlT2YgPSB0cnVlO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBzdXBlclR5cGUgPSBzdXBlclR5cGUuZ2V0U3VwZXJUeXBlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyVHlwZU9mO1xuICB9XG5cbiAgaXNFcXVhbFRvT3JTdWJUeXBlT2YodHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG8gPSB0aGlzLmlzRXF1YWxUbyh0eXBlKSxcbiAgICAgICAgICBzdWJUeXBlT2YgPSB0aGlzLmlzU3ViVHlwZU9mKHR5cGUpLFxuICAgICAgICAgIGVxdWFsVG9PclN1YlR5cGVPZiA9IChlcXVhbFRvIHx8IHN1YlR5cGVPZik7XG5cbiAgICByZXR1cm4gZXF1YWxUb09yU3ViVHlwZU9mO1xuICB9XG5cbiAgaXNFcXVhbFRvT3JTdXBlclR5cGVPZih0eXBlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9IHRoaXMuaXNFcXVhbFRvKHR5cGUpLFxuICAgICAgICAgIHN1cGVyVHlwZU9mID0gdGhpcy5pc1N1cGVyVHlwZU9mKHR5cGUpLFxuICAgICAgICAgIGVxdWFsVG9PclN1cGVyVHlwZU9mID0gKGVxdWFsVG8gfHwgc3VwZXJUeXBlT2YpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG9PclN1cGVyVHlwZU9mO1xuICB9XG5cbiAgaXNFcXVhbFRvT3JTdWJUeXBlT2ZPZlN1cGVyVHlwZU9mKHR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvID0gdGhpcy5pc0VxdWFsVG8odHlwZSksXG4gICAgICAgICAgc3ViVHlwZU9mID0gdGhpcy5pc1N1YlR5cGVPZih0eXBlKSxcbiAgICAgICAgICBzdXBlclR5cGVPZiA9IHRoaXMuaXNTdXBlclR5cGVPZih0eXBlKSxcbiAgICAgICAgICBlcXVhbFRvT3JTdWJUeXBlT2ZPZlN1cGVyVHlwZU9mID0gKGVxdWFsVG8gfHwgc3ViVHlwZU9mIHx8IHN1cGVyVHlwZU9mKTtcblxuICAgIHJldHVybiBlcXVhbFRvT3JTdWJUeXBlT2ZPZlN1cGVyVHlwZU9mO1xuICB9XG5cbiAgbWF0Y2godHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG9UeXBlID0gdGhpcy5pc0VxdWFsVG8odHlwZSksXG4gICAgICAgICAgc3ViVHlwZU9mVHlwZSA9IHRoaXMuaXNTdWJUeXBlT2YodHlwZSksXG4gICAgICAgICAgc3VwZXJUeXBlT2ZUeXBlID0gdGhpcy5pc1N1cGVyVHlwZU9mKHR5cGUpLFxuICAgICAgICAgIG1hdGNoZXMgPSAoZXF1YWxUb1R5cGUgfHwgc3ViVHlwZU9mVHlwZSB8fCBzdXBlclR5cGVPZlR5cGUpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE5hbWUobmFtZSkge1xuICAgIGNvbnN0IG1hdGNoZXNOYW1lID0gKHRoaXMubmFtZSA9PT0gbmFtZSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlc05hbWU7XG4gIH1cblxuICBtYXRjaFR5cGVOYW1lKHR5cGVOYW1lKSB7XG4gICAgY29uc3QgbWF0Y2hlc1R5cGVOYW1lID0gKHRoaXMubmFtZSA9PT0gdHlwZU5hbWUpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNUeXBlTmFtZTtcbiAgfVxuXG4gIGFzU3RyaW5nKHRva2Vucywgbm9TdXBlclR5cGUpIHtcbiAgICBsZXQgc3RyaW5nO1xuXG4gICAgaWYgKG5vU3VwZXJUeXBlKSB7XG4gICAgICBzdHJpbmcgPSBgJHt0aGlzLm5hbWV9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlTmFtZSA9IHRoaXMuc3VwZXJUeXBlLmdldE5hbWUoKTtcblxuICAgICAgc3RyaW5nID0gYCR7dGhpcy5uYW1lfToke3N1cGVyVHlwZU5hbWV9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgdG9KU09OKHRva2Vucykge1xuICAgIGNvbnN0IHN1cGVyVHlwZUpTT04gPSB0aGlzLnN1cGVyVHlwZS50b0pTT04odG9rZW5zKSxcbiAgICAgICAgICBraW5kID0gVFlQRV9LSU5ELFxuICAgICAgICAgIG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAgc3VwZXJUeXBlID0gc3VwZXJUeXBlSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBraW5kLFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHN1cGVyVHlwZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgbGV0IHR5cGU7XG5cbiAgICBsZXQgeyBzdXBlclR5cGUgfSA9IGpzb247XG5cbiAgICBjb25zdCBzdXBlclR5cGVKU09OID0gc3VwZXJUeXBlOyAgLy8vXG5cbiAgICBzdXBlclR5cGUgPSBzdXBlclR5cGVGcm9tU3VwZXJUeXBlSlNPTihzdXBlclR5cGVKU09OLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IHsgbmFtZSB9ID0ganNvbjtcblxuICAgIHR5cGUgPSBuZXcgVHlwZShuYW1lLCBzdXBlclR5cGUpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVR5cGVOYW1lKHR5cGVOYW1lKSB7XG4gICAgY29uc3QgbmFtZSA9IHR5cGVOYW1lLCAgLy8vXG4gICAgICAgICAgc3VwZXJUeXBlID0gb2JqZWN0VHlwZSwgLy8vXG4gICAgICAgICAgdHlwZSA9IG5ldyBUeXBlKG5hbWUsIHN1cGVyVHlwZSk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVHlwZU5hbWVBbmRTdXBlclR5cGUodHlwZU5hbWUsIHN1cGVyVHlwZSkge1xuICAgIGNvbnN0IG5hbWUgPSB0eXBlTmFtZSwgIC8vL1xuICAgICAgICAgIHR5cGUgPSBuZXcgVHlwZShuYW1lLCBzdXBlclR5cGUpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cbn1cblxuY2xhc3MgT2JqZWN0VHlwZSBleHRlbmRzIFR5cGUge1xuICB0b0pTT04odG9rZW5zKSB7XG4gICAgY29uc3Qga2luZCA9IFRZUEVfS0lORCxcbiAgICAgICAgICBuYW1lID0gdGhpcy5uYW1lLFxuICAgICAgICAgIHN1cGVyVHlwZSA9IG51bGwsICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAga2luZCxcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBzdXBlclR5cGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbmFtZSA9IE9CSkVDVF9UWVBFX05BTUUsXG4gICAgICAgICAgc3VwZXJUeXBlID0gbnVsbCxcbiAgICAgICAgICBvYmplY3RUeXBlID0gbmV3IE9iamVjdFR5cGUobmFtZSwgc3VwZXJUeXBlKTtcblxuICAgIHJldHVybiBvYmplY3RUeXBlO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBvYmplY3RUeXBlID0gT2JqZWN0VHlwZS5mcm9tTm90aGluZygpO1xuXG5mdW5jdGlvbiBzdXBlclR5cGVGcm9tU3VwZXJUeXBlSlNPTihzdXBlclR5cGVKU09OLCBjb250ZXh0KSB7XG4gIGxldCBzdXBlclR5cGU7XG5cbiAgY29uc3QganNvbiA9IHN1cGVyVHlwZUpTT04sIC8vL1xuICAgICAgICB7IG5hbWUgfSA9IGpzb247XG5cbiAgaWYgKG5hbWUgPT09IE9CSkVDVF9UWVBFX05BTUUpIHtcbiAgICBzdXBlclR5cGUgPSBvYmplY3RUeXBlOyAvLy9cbiAgfSBlbHNlIHtcbiAgICBjb25zdCB0eXBlTmFtZSA9IG5hbWUsICAvLy9cbiAgICAgICAgICB0eXBlID0gY29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgc3VwZXJUeXBlID0gKHR5cGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgIHR5cGUgOiAgLy8vXG4gICAgICAgICAgICAgICAgICAgIFR5cGUuZnJvbUpTT04oanNvbiwgY29udGV4dCk7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBzdXBlclR5cGU7XG59XG4iXSwibmFtZXMiOlsiVHlwZSIsIm9iamVjdFR5cGUiLCJuYW1lIiwic3VwZXJUeXBlIiwiZ2V0TmFtZSIsImdldFN1cGVyVHlwZSIsImlzRXF1YWxUbyIsInR5cGUiLCJlcXVhbFRvIiwiaXNTdWJUeXBlT2YiLCJzdWJUeXBlT2YiLCJpc1N1cGVyVHlwZU9mIiwic3VwZXJUeXBlT2YiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsImVxdWFsVG9PclN1YlR5cGVPZiIsImlzRXF1YWxUb09yU3VwZXJUeXBlT2YiLCJlcXVhbFRvT3JTdXBlclR5cGVPZiIsImlzRXF1YWxUb09yU3ViVHlwZU9mT2ZTdXBlclR5cGVPZiIsImVxdWFsVG9PclN1YlR5cGVPZk9mU3VwZXJUeXBlT2YiLCJtYXRjaCIsImVxdWFsVG9UeXBlIiwic3ViVHlwZU9mVHlwZSIsInN1cGVyVHlwZU9mVHlwZSIsIm1hdGNoZXMiLCJtYXRjaE5hbWUiLCJtYXRjaGVzTmFtZSIsIm1hdGNoVHlwZU5hbWUiLCJ0eXBlTmFtZSIsIm1hdGNoZXNUeXBlTmFtZSIsImFzU3RyaW5nIiwidG9rZW5zIiwibm9TdXBlclR5cGUiLCJzdHJpbmciLCJzdXBlclR5cGVOYW1lIiwidG9KU09OIiwic3VwZXJUeXBlSlNPTiIsImtpbmQiLCJUWVBFX0tJTkQiLCJqc29uIiwiZnJvbUpTT04iLCJjb250ZXh0Iiwic3VwZXJUeXBlRnJvbVN1cGVyVHlwZUpTT04iLCJmcm9tVHlwZU5hbWUiLCJmcm9tVHlwZU5hbWVBbmRTdXBlclR5cGUiLCJPYmplY3RUeXBlIiwiZnJvbU5vdGhpbmciLCJPQkpFQ1RfVFlQRV9OQU1FIiwiZmluZFR5cGVCeVR5cGVOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O2VBS3FCQTs7SUF5TFJDLFVBQVU7ZUFBVkE7OztxQkE1TGE7eUJBQ087Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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