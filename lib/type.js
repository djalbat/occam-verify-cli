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
            value: function fromJSON(json, lexer, parser) {
                var type;
                var superType = json.superType;
                var superTypeJSON = superType; ///
                superType = superTypeFromSuperTypeJSON(superTypeJSON, lexer, parser);
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
function superTypeFromSuperTypeJSON(superTypeJSON, lexer, parser) {
    var superType;
    var json = superTypeJSON, name = json.name;
    if (name === _typeNames.OBJECT_TYPE_NAME) {
        superType = objectType; ///
    } else {
        var typeName = name, type = releaseContext.findTypeByTypeName(typeName);
        superType = type !== null ? type : Type.fromJSON(json, lexer, parser); ///
    }
    return superType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90eXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBUWVBFX0tJTkQgfSBmcm9tIFwiLi9raW5kc1wiO1xuaW1wb3J0IHsgT0JKRUNUX1RZUEVfTkFNRSB9IGZyb20gXCIuL3R5cGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUeXBlIHtcbiAgY29uc3RydWN0b3IobmFtZSwgc3VwZXJUeXBlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnN1cGVyVHlwZSA9IHN1cGVyVHlwZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFN1cGVyVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBlclR5cGU7XG4gIH1cblxuICBpc0VxdWFsVG8odHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG8gPSAodGhpcyA9PT0gdHlwZSk7XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzU3ViVHlwZU9mKHR5cGUpIHtcbiAgICBsZXQgc3ViVHlwZU9mID0gZmFsc2U7XG5cbiAgICBsZXQgc3VwZXJUeXBlID0gdGhpcy5zdXBlclR5cGU7XG5cbiAgICB3aGlsZSAoc3VwZXJUeXBlICE9PSBudWxsKSB7XG4gICAgICBpZiAoc3VwZXJUeXBlID09PSB0eXBlKSB7XG4gICAgICAgIHN1YlR5cGVPZiA9IHRydWU7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHN1cGVyVHlwZSA9IHN1cGVyVHlwZS5nZXRTdXBlclR5cGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3ViVHlwZU9mO1xuICB9XG5cbiAgaXNTdXBlclR5cGVPZih0eXBlKSB7XG4gICAgbGV0IHN1cGVyVHlwZU9mID0gZmFsc2U7XG5cbiAgICBsZXQgc3VwZXJUeXBlID0gdHlwZS5nZXRTdXBlclR5cGUoKTtcblxuICAgIHdoaWxlIChzdXBlclR5cGUgIT09IG51bGwpIHtcbiAgICAgIGlmIChzdXBlclR5cGUgPT09IHRoaXMpIHtcbiAgICAgICAgc3VwZXJUeXBlT2YgPSB0cnVlO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBzdXBlclR5cGUgPSBzdXBlclR5cGUuZ2V0U3VwZXJUeXBlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyVHlwZU9mO1xuICB9XG5cbiAgaXNFcXVhbFRvT3JTdWJUeXBlT2YodHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG9UeXBlID0gdGhpcy5pc0VxdWFsVG8odHlwZSksXG4gICAgICAgICAgc3ViVHlwZU9mVHlwZSA9IHRoaXMuaXNTdWJUeXBlT2YodHlwZSksXG4gICAgICAgICAgZXF1YWxUb1R5cGVPclN1YlR5cGVPZiA9IChlcXVhbFRvVHlwZSB8fCBzdWJUeXBlT2ZUeXBlKTtcblxuICAgIHJldHVybiBlcXVhbFRvVHlwZU9yU3ViVHlwZU9mO1xuICB9XG5cbiAgaXNFcXVhbFRvT3JTdXBlclR5cGVPZih0eXBlKSB7XG4gICAgY29uc3QgZXF1YWxUb1R5cGUgPSB0aGlzLmlzRXF1YWxUbyh0eXBlKSxcbiAgICAgICAgICBzdXBlclR5cGVPZlR5cGUgPSB0aGlzLmlzU3VwZXJUeXBlT2YodHlwZSksXG4gICAgICAgICAgZXF1YWxUb1R5cGVPclN1cGVyVHlwZU9mID0gKGVxdWFsVG9UeXBlIHx8IHN1cGVyVHlwZU9mVHlwZSk7XG5cbiAgICByZXR1cm4gZXF1YWxUb1R5cGVPclN1cGVyVHlwZU9mO1xuICB9XG5cbiAgbWF0Y2godHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG9UeXBlID0gdGhpcy5pc0VxdWFsVG8odHlwZSksXG4gICAgICAgICAgc3ViVHlwZU9mVHlwZSA9IHRoaXMuaXNTdWJUeXBlT2YodHlwZSksXG4gICAgICAgICAgc3VwZXJUeXBlT2ZUeXBlID0gdGhpcy5pc1N1cGVyVHlwZU9mKHR5cGUpLFxuICAgICAgICAgIG1hdGNoZXMgPSAoZXF1YWxUb1R5cGUgfHwgc3ViVHlwZU9mVHlwZSB8fCBzdXBlclR5cGVPZlR5cGUpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE5hbWUobmFtZSkge1xuICAgIGNvbnN0IG1hdGNoZXNOYW1lID0gKHRoaXMubmFtZSA9PT0gbmFtZSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlc05hbWU7XG4gIH1cblxuICBtYXRjaFR5cGVOYW1lKHR5cGVOYW1lKSB7XG4gICAgY29uc3QgbWF0Y2hlc1R5cGVOYW1lID0gKHRoaXMubmFtZSA9PT0gdHlwZU5hbWUpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNUeXBlTmFtZTtcbiAgfVxuXG4gIGFzU3RyaW5nKHRva2Vucywgbm9TdXBlclR5cGUpIHtcbiAgICBsZXQgc3RyaW5nO1xuXG4gICAgaWYgKG5vU3VwZXJUeXBlKSB7XG4gICAgICBzdHJpbmcgPSBgJHt0aGlzLm5hbWV9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlTmFtZSA9IHRoaXMuc3VwZXJUeXBlLmdldE5hbWUoKTtcblxuICAgICAgc3RyaW5nID0gYCR7dGhpcy5uYW1lfToke3N1cGVyVHlwZU5hbWV9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgdG9KU09OKHRva2Vucykge1xuICAgIGNvbnN0IHN1cGVyVHlwZUpTT04gPSB0aGlzLnN1cGVyVHlwZS50b0pTT04odG9rZW5zKSxcbiAgICAgICAgICBraW5kID0gVFlQRV9LSU5ELFxuICAgICAgICAgIG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAgc3VwZXJUeXBlID0gc3VwZXJUeXBlSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBraW5kLFxuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHN1cGVyVHlwZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBsZXhlciwgcGFyc2VyKSB7XG4gICAgbGV0IHR5cGU7XG5cbiAgICBsZXQgeyBzdXBlclR5cGUgfSA9IGpzb247XG5cbiAgICBjb25zdCBzdXBlclR5cGVKU09OID0gc3VwZXJUeXBlOyAgLy8vXG5cbiAgICBzdXBlclR5cGUgPSBzdXBlclR5cGVGcm9tU3VwZXJUeXBlSlNPTihzdXBlclR5cGVKU09OLCBsZXhlciwgcGFyc2VyKTtcblxuICAgIGNvbnN0IHsgbmFtZSB9ID0ganNvbjtcblxuICAgIHR5cGUgPSBuZXcgVHlwZShuYW1lLCBzdXBlclR5cGUpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVR5cGVOYW1lKHR5cGVOYW1lKSB7XG4gICAgY29uc3QgbmFtZSA9IHR5cGVOYW1lLCAgLy8vXG4gICAgICAgICAgc3VwZXJUeXBlID0gb2JqZWN0VHlwZSwgLy8vXG4gICAgICAgICAgdHlwZSA9IG5ldyBUeXBlKG5hbWUsIHN1cGVyVHlwZSk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVHlwZU5hbWVBbmRTdXBlclR5cGUodHlwZU5hbWUsIHN1cGVyVHlwZSkge1xuICAgIGNvbnN0IG5hbWUgPSB0eXBlTmFtZSwgIC8vL1xuICAgICAgICAgIHR5cGUgPSBuZXcgVHlwZShuYW1lLCBzdXBlclR5cGUpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cbn1cblxuY2xhc3MgT2JqZWN0VHlwZSBleHRlbmRzIFR5cGUge1xuICB0b0pTT04odG9rZW5zKSB7XG4gICAgY29uc3Qga2luZCA9IFRZUEVfS0lORCxcbiAgICAgICAgICBuYW1lID0gdGhpcy5uYW1lLFxuICAgICAgICAgIHN1cGVyVHlwZSA9IG51bGwsICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAga2luZCxcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBzdXBlclR5cGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbmFtZSA9IE9CSkVDVF9UWVBFX05BTUUsXG4gICAgICAgICAgc3VwZXJUeXBlID0gbnVsbCxcbiAgICAgICAgICBvYmplY3RUeXBlID0gbmV3IE9iamVjdFR5cGUobmFtZSwgc3VwZXJUeXBlKTtcblxuICAgIHJldHVybiBvYmplY3RUeXBlO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBvYmplY3RUeXBlID0gT2JqZWN0VHlwZS5mcm9tTm90aGluZygpO1xuXG5mdW5jdGlvbiBzdXBlclR5cGVGcm9tU3VwZXJUeXBlSlNPTihzdXBlclR5cGVKU09OLCBsZXhlciwgcGFyc2VyKSB7XG4gIGxldCBzdXBlclR5cGU7XG5cbiAgY29uc3QganNvbiA9IHN1cGVyVHlwZUpTT04sIC8vL1xuICAgICAgICB7IG5hbWUgfSA9IGpzb247XG5cbiAgaWYgKG5hbWUgPT09IE9CSkVDVF9UWVBFX05BTUUpIHtcbiAgICBzdXBlclR5cGUgPSBvYmplY3RUeXBlOyAvLy9cbiAgfSBlbHNlIHtcbiAgICBjb25zdCB0eXBlTmFtZSA9IG5hbWUsICAvLy9cbiAgICAgICAgICB0eXBlID0gcmVsZWFzZUNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgIHN1cGVyVHlwZSA9ICh0eXBlICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICB0eXBlIDogIC8vL1xuICAgICAgICAgICAgICAgICAgICBUeXBlLmZyb21KU09OKGpzb24sIGxleGVyLCBwYXJzZXIpOyAgLy8vXG4gIH1cblxuICByZXR1cm4gc3VwZXJUeXBlO1xufVxuIl0sIm5hbWVzIjpbIlR5cGUiLCJvYmplY3RUeXBlIiwibmFtZSIsInN1cGVyVHlwZSIsImdldE5hbWUiLCJnZXRTdXBlclR5cGUiLCJpc0VxdWFsVG8iLCJ0eXBlIiwiZXF1YWxUbyIsImlzU3ViVHlwZU9mIiwic3ViVHlwZU9mIiwiaXNTdXBlclR5cGVPZiIsInN1cGVyVHlwZU9mIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJlcXVhbFRvVHlwZSIsInN1YlR5cGVPZlR5cGUiLCJlcXVhbFRvVHlwZU9yU3ViVHlwZU9mIiwiaXNFcXVhbFRvT3JTdXBlclR5cGVPZiIsInN1cGVyVHlwZU9mVHlwZSIsImVxdWFsVG9UeXBlT3JTdXBlclR5cGVPZiIsIm1hdGNoIiwibWF0Y2hlcyIsIm1hdGNoTmFtZSIsIm1hdGNoZXNOYW1lIiwibWF0Y2hUeXBlTmFtZSIsInR5cGVOYW1lIiwibWF0Y2hlc1R5cGVOYW1lIiwiYXNTdHJpbmciLCJ0b2tlbnMiLCJub1N1cGVyVHlwZSIsInN0cmluZyIsInN1cGVyVHlwZU5hbWUiLCJ0b0pTT04iLCJzdXBlclR5cGVKU09OIiwia2luZCIsIlRZUEVfS0lORCIsImpzb24iLCJmcm9tSlNPTiIsImxleGVyIiwicGFyc2VyIiwic3VwZXJUeXBlRnJvbVN1cGVyVHlwZUpTT04iLCJmcm9tVHlwZU5hbWUiLCJmcm9tVHlwZU5hbWVBbmRTdXBlclR5cGUiLCJPYmplY3RUeXBlIiwiZnJvbU5vdGhpbmciLCJPQkpFQ1RfVFlQRV9OQU1FIiwicmVsZWFzZUNvbnRleHQiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7ZUFLcUJBOztJQWdMUkMsVUFBVTtlQUFWQTs7O3FCQW5MYTt5QkFDTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEIsSUFBQSxBQUFNRCxxQkF5SmxCLEFBekpZO2FBQU1BLEtBQ1BFLElBQUksRUFBRUMsU0FBUzs4QkFEUkg7UUFFakIsSUFBSSxDQUFDRSxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxTQUFTLEdBQUdBOztpQkFIQUg7O1lBTW5CSSxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVTtnQkFDUixPQUFPLElBQUksQ0FBQ0YsSUFBSTtZQUNsQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlO2dCQUNiLE9BQU8sSUFBSSxD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