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
                var equalToType = this.isEqualTo(type), subTypeOfType = this.isSubTypeOf(type), equalToTypeOrSubTypeOf = equalToType || subTypeOfType;
                return equalToTypeOrSubTypeOf;
            }
        },
        {
            key: "isEqualToOrSuperTypeOf",
            value: function isEqualToOrSuperTypeOf(type) {
                var equalToType = this.isEqualTo(type), superTypeOfType = this.isSuperTypeOf(type), equalToTypeOrSuperTypeOf = equalToType || superTypeOfType;
                return equalToTypeOrSuperTypeOf;
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
            value: function fromJSON(json, releaseContext) {
                var type;
                var superType = json.superType;
                var superTypeJSON = superType; ///
                superType = superTypeFromSuperTypeJSON(superTypeJSON, releaseContext);
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
function superTypeFromSuperTypeJSON(superTypeJSON, releaseContext) {
    var superType;
    var json = superTypeJSON, name = json.name;
    if (name === _typeNames.OBJECT_TYPE_NAME) {
        superType = objectType; ///
    } else {
        var typeName = name, type = releaseContext.findTypeByTypeName(typeName);
        superType = type !== null ? type : Type.fromJSON(json, releaseContext); ///
    }
    return superType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90eXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBUWVBFX0tJTkQgfSBmcm9tIFwiLi9raW5kc1wiO1xuaW1wb3J0IHsgT0JKRUNUX1RZUEVfTkFNRSB9IGZyb20gXCIuL3R5cGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUeXBlIHtcbiAgY29uc3RydWN0b3IobmFtZSwgc3VwZXJUeXBlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnN1cGVyVHlwZSA9IHN1cGVyVHlwZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFN1cGVyVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBlclR5cGU7XG4gIH1cblxuICBpc0VxdWFsVG8odHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG8gPSAodGhpcyA9PT0gdHlwZSk7XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzU3ViVHlwZU9mKHR5cGUpIHtcbiAgICBsZXQgc3ViVHlwZU9mID0gZmFsc2U7XG5cbiAgICBsZXQgc3VwZXJUeXBlID0gdGhpcy5zdXBlclR5cGU7XG5cbiAgICB3aGlsZSAoc3VwZXJUeXBlICE9PSBudWxsKSB7XG4gICAgICBpZiAoc3VwZXJUeXBlID09PSB0eXBlKSB7XG4gICAgICAgIHN1YlR5cGVPZiA9IHRydWU7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHN1cGVyVHlwZSA9IHN1cGVyVHlwZS5nZXRTdXBlclR5cGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3ViVHlwZU9mO1xuICB9XG5cbiAgaXNTdXBlclR5cGVPZih0eXBlKSB7XG4gICAgbGV0IHN1cGVyVHlwZU9mID0gZmFsc2U7XG5cbiAgICBsZXQgc3VwZXJUeXBlID0gdHlwZS5nZXRTdXBlclR5cGUoKTtcblxuICAgIHdoaWxlIChzdXBlclR5cGUgIT09IG51bGwpIHtcbiAgICAgIGlmIChzdXBlclR5cGUgPT09IHRoaXMpIHtcbiAgICAgICAgc3VwZXJUeXBlT2YgPSB0cnVlO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBzdXBlclR5cGUgPSBzdXBlclR5cGUuZ2V0U3VwZXJUeXBlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyVHlwZU9mO1xuICB9XG5cbiAgaXNFcXVhbFRvT3JTdWJUeXBlT2YodHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG9UeXBlID0gdGhpcy5pc0VxdWFsVG8odHlwZSksXG4gICAgICAgICAgc3ViVHlwZU9mVHlwZSA9IHRoaXMuaXNTdWJUeXBlT2YodHlwZSksXG4gICAgICAgICAgZXF1YWxUb1R5cGVPclN1YlR5cGVPZiA9IChlcXVhbFRvVHlwZSB8fCBzdWJUeXBlT2ZUeXBlKTtcblxuICAgIHJldHVybiBlcXVhbFRvVHlwZU9yU3ViVHlwZU9mO1xuICB9XG5cbiAgaXNFcXVhbFRvT3JTdXBlclR5cGVPZih0eXBlKSB7XG4gICAgY29uc3QgZXF1YWxUb1R5cGUgPSB0aGlzLmlzRXF1YWxUbyh0eXBlKSxcbiAgICAgICAgICBzdXBlclR5cGVPZlR5cGUgPSB0aGlzLmlzU3VwZXJUeXBlT2YodHlwZSksXG4gICAgICAgICAgZXF1YWxUb1R5cGVPclN1cGVyVHlwZU9mID0gKGVxdWFsVG9UeXBlIHx8IHN1cGVyVHlwZU9mVHlwZSk7XG5cbiAgICByZXR1cm4gZXF1YWxUb1R5cGVPclN1cGVyVHlwZU9mO1xuICB9XG5cbiAgbWF0Y2godHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG9UeXBlID0gdGhpcy5pc0VxdWFsVG8odHlwZSksXG4gICAgICAgICAgc3ViVHlwZU9mVHlwZSA9IHRoaXMuaXNTdWJUeXBlT2YodHlwZSksXG4gICAgICAgICAgc3VwZXJUeXBlT2ZUeXBlID0gdGhpcy5pc1N1cGVyVHlwZU9mKHR5cGUpLFxuICAgICAgICAgIG1hdGNoZXMgPSAoZXF1YWxUb1R5cGUgfHwgc3ViVHlwZU9mVHlwZSB8fCBzdXBlclR5cGVPZlR5cGUpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE5hbWUobmFtZSkge1xuICAgIGNvbnN0IG1hdGNoZXNOYW1lID0gKHRoaXMubmFtZSA9PT0gbmFtZSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlc05hbWU7XG4gIH1cblxuICBtYXRjaFR5cGVOYW1lKHR5cGVOYW1lKSB7XG4gICAgY29uc3QgbWF0Y2hlc1R5cGVOYW1lID0gKHRoaXMubmFtZSA9PT0gdHlwZU5hbWUpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNUeXBlTmFtZTtcbiAgfVxuXG4gIGFzU3RyaW5nKHRva2Vucywgbm9TdXBlclR5cGUpIHtcbiAgICBsZXQgc3RyaW5nO1xuXG4gICAgaWYgKG5vU3VwZXJUeXBlKSB7XG4gICAgICBzdHJpbmcgPSBgJHt0aGlzLm5hbWV9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlTmFtZSA9IHRoaXMuc3VwZXJUeXBlLmdldE5hbWUoKTtcblxuICAgICAgc3RyaW5nID0gYCR7dGhpcy5uYW1lfToke3N1cGVyVHlwZU5hbWV9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgdG9KU09OKHRva2Vucykge1xuICAgIGNvbnN0IHN1cGVyVHlwZUpTT04gPSB0aGlzLnN1cGVyVHlwZS50b0pTT04odG9rZW5zKSxcbiAgICAgICAgICBraW5kID0gVFlQRV9LSU5ELFxuICAgICAgICAgIG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAgc3VwZXJUeXBlID0gc3VwZXJUeXBlSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBraW5kLFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHN1cGVyVHlwZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCByZWxlYXNlQ29udGV4dCkge1xuICAgIGxldCB0eXBlO1xuXG4gICAgbGV0IHsgc3VwZXJUeXBlIH0gPSBqc29uO1xuXG4gICAgY29uc3Qgc3VwZXJUeXBlSlNPTiA9IHN1cGVyVHlwZTsgIC8vL1xuXG4gICAgc3VwZXJUeXBlID0gc3VwZXJUeXBlRnJvbVN1cGVyVHlwZUpTT04oc3VwZXJUeXBlSlNPTiwgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uO1xuXG4gICAgdHlwZSA9IG5ldyBUeXBlKG5hbWUsIHN1cGVyVHlwZSk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVHlwZU5hbWUodHlwZU5hbWUpIHtcbiAgICBjb25zdCBuYW1lID0gdHlwZU5hbWUsICAvLy9cbiAgICAgICAgICBzdXBlclR5cGUgPSBvYmplY3RUeXBlLCAvLy9cbiAgICAgICAgICB0eXBlID0gbmV3IFR5cGUobmFtZSwgc3VwZXJUeXBlKTtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3RhdGljIGZyb21UeXBlTmFtZUFuZFN1cGVyVHlwZSh0eXBlTmFtZSwgc3VwZXJUeXBlKSB7XG4gICAgY29uc3QgbmFtZSA9IHR5cGVOYW1lLCAgLy8vXG4gICAgICAgICAgdHlwZSA9IG5ldyBUeXBlKG5hbWUsIHN1cGVyVHlwZSk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxufVxuXG5jbGFzcyBPYmplY3RUeXBlIGV4dGVuZHMgVHlwZSB7XG4gIHRvSlNPTih0b2tlbnMpIHtcbiAgICBjb25zdCBraW5kID0gVFlQRV9LSU5ELFxuICAgICAgICAgIG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAgc3VwZXJUeXBlID0gbnVsbCwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBraW5kLFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHN1cGVyVHlwZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBuYW1lID0gT0JKRUNUX1RZUEVfTkFNRSxcbiAgICAgICAgICBzdXBlclR5cGUgPSBudWxsLFxuICAgICAgICAgIG9iamVjdFR5cGUgPSBuZXcgT2JqZWN0VHlwZShuYW1lLCBzdXBlclR5cGUpO1xuXG4gICAgcmV0dXJuIG9iamVjdFR5cGU7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG9iamVjdFR5cGUgPSBPYmplY3RUeXBlLmZyb21Ob3RoaW5nKCk7XG5cbmZ1bmN0aW9uIHN1cGVyVHlwZUZyb21TdXBlclR5cGVKU09OKHN1cGVyVHlwZUpTT04sIHJlbGVhc2VDb250ZXh0KSB7XG4gIGxldCBzdXBlclR5cGU7XG5cbiAgY29uc3QganNvbiA9IHN1cGVyVHlwZUpTT04sIC8vL1xuICAgICAgICB7IG5hbWUgfSA9IGpzb247XG5cbiAgaWYgKG5hbWUgPT09IE9CSkVDVF9UWVBFX05BTUUpIHtcbiAgICBzdXBlclR5cGUgPSBvYmplY3RUeXBlOyAvLy9cbiAgfSBlbHNlIHtcbiAgICBjb25zdCB0eXBlTmFtZSA9IG5hbWUsICAvLy9cbiAgICAgICAgICB0eXBlID0gcmVsZWFzZUNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgIHN1cGVyVHlwZSA9ICh0eXBlICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICB0eXBlIDogIC8vL1xuICAgICAgICAgICAgICAgICAgICBUeXBlLmZyb21KU09OKGpzb24sIHJlbGVhc2VDb250ZXh0KTsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIHN1cGVyVHlwZTtcbn1cbiJdLCJuYW1lcyI6WyJUeXBlIiwib2JqZWN0VHlwZSIsIm5hbWUiLCJzdXBlclR5cGUiLCJnZXROYW1lIiwiZ2V0U3VwZXJUeXBlIiwiaXNFcXVhbFRvIiwidHlwZSIsImVxdWFsVG8iLCJpc1N1YlR5cGVPZiIsInN1YlR5cGVPZiIsImlzU3VwZXJUeXBlT2YiLCJzdXBlclR5cGVPZiIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwiZXF1YWxUb1R5cGUiLCJzdWJUeXBlT2ZUeXBlIiwiZXF1YWxUb1R5cGVPclN1YlR5cGVPZiIsImlzRXF1YWxUb09yU3VwZXJUeXBlT2YiLCJzdXBlclR5cGVPZlR5cGUiLCJlcXVhbFRvVHlwZU9yU3VwZXJUeXBlT2YiLCJtYXRjaCIsIm1hdGNoZXMiLCJtYXRjaE5hbWUiLCJtYXRjaGVzTmFtZSIsIm1hdGNoVHlwZU5hbWUiLCJ0eXBlTmFtZSIsIm1hdGNoZXNUeXBlTmFtZSIsImFzU3RyaW5nIiwidG9rZW5zIiwibm9TdXBlclR5cGUiLCJzdHJpbmciLCJzdXBlclR5cGVOYW1lIiwidG9KU09OIiwic3VwZXJUeXBlSlNPTiIsImtpbmQiLCJUWVBFX0tJTkQiLCJqc29uIiwiZnJvbUpTT04iLCJyZWxlYXNlQ29udGV4dCIsInN1cGVyVHlwZUZyb21TdXBlclR5cGVKU09OIiwiZnJvbVR5cGVOYW1lIiwiZnJvbVR5cGVOYW1lQW5kU3VwZXJUeXBlIiwiT2JqZWN0VHlwZSIsImZyb21Ob3RoaW5nIiwiT0JKRUNUX1RZUEVfTkFNRSIsImZpbmRUeXBlQnlUeXBlTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztlQUtxQkE7O0lBZ0xSQyxVQUFVO2VBQVZBOzs7cUJBbkxhO3lCQUNPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsQixJQUFBLEFBQU1ELHFCQXlKbEIsQUF6Slk7YUFBTUEsS0FDUEUsSUFBSSxFQUFFQyxTQUFTOzhCQURSSDtRQUVqQixJQUFJLENBQUNFLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFNBQVMsR0FBR0E7O2lCQUhBSDs7WUFNbkJJLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVO2dCQUNSLE9BQU8sSUFBSSxDQUFDRixJQUFJO1lBQ2xCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWU7Z0JBQ2IsT0FBTyxJQUFJLENBQUNGLFNBQVM7WUFD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