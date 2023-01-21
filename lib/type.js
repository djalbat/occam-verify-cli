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
            value: function asString() {
                var noSuperType = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.superType === null;
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
            value: function toJSON() {
                var superTypeJSON = this.superType === null ? null : this.superType.toJSON(), kind = _kinds.TYPE_KIND, name = this.name, superType = superTypeJSON, json = {
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
                var name = json.name;
                var superType = json.superType;
                if (superType !== null) {
                    var superTypeJSON = superType; ///
                    json = superTypeJSON; ///
                    superType = Type.fromJSON(json, releaseContext);
                    var superTypeName = superType.getName();
                    superType = releaseContext.findTypeByTypeName(superTypeName); ///
                }
                var type = new Type(name, superType);
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
    _createClass(ObjectType, null, [
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90eXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBUWVBFX0tJTkQgfSBmcm9tIFwiLi9raW5kc1wiO1xuaW1wb3J0IHsgT0JKRUNUX1RZUEVfTkFNRSB9IGZyb20gXCIuL3R5cGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUeXBlIHtcbiAgY29uc3RydWN0b3IobmFtZSwgc3VwZXJUeXBlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnN1cGVyVHlwZSA9IHN1cGVyVHlwZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFN1cGVyVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBlclR5cGU7XG4gIH1cblxuICBpc0VxdWFsVG8odHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG8gPSAodGhpcyA9PT0gdHlwZSk7XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzU3ViVHlwZU9mKHR5cGUpIHtcbiAgICBsZXQgc3ViVHlwZU9mID0gZmFsc2U7XG5cbiAgICBsZXQgc3VwZXJUeXBlID0gdGhpcy5zdXBlclR5cGU7XG5cbiAgICB3aGlsZSAoc3VwZXJUeXBlICE9PSBudWxsKSB7XG4gICAgICBpZiAoc3VwZXJUeXBlID09PSB0eXBlKSB7XG4gICAgICAgIHN1YlR5cGVPZiA9IHRydWU7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHN1cGVyVHlwZSA9IHN1cGVyVHlwZS5nZXRTdXBlclR5cGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3ViVHlwZU9mO1xuICB9XG5cbiAgaXNTdXBlclR5cGVPZih0eXBlKSB7XG4gICAgbGV0IHN1cGVyVHlwZU9mID0gZmFsc2U7XG5cbiAgICBsZXQgc3VwZXJUeXBlID0gdHlwZS5nZXRTdXBlclR5cGUoKTtcblxuICAgIHdoaWxlIChzdXBlclR5cGUgIT09IG51bGwpIHtcbiAgICAgIGlmIChzdXBlclR5cGUgPT09IHRoaXMpIHtcbiAgICAgICAgc3VwZXJUeXBlT2YgPSB0cnVlO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBzdXBlclR5cGUgPSBzdXBlclR5cGUuZ2V0U3VwZXJUeXBlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyVHlwZU9mO1xuICB9XG5cbiAgaXNFcXVhbFRvT3JTdWJUeXBlT2YodHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG9UeXBlID0gdGhpcy5pc0VxdWFsVG8odHlwZSksXG4gICAgICAgICAgc3ViVHlwZU9mVHlwZSA9IHRoaXMuaXNTdWJUeXBlT2YodHlwZSksXG4gICAgICAgICAgZXF1YWxUb1R5cGVPclN1YlR5cGVPZiA9IChlcXVhbFRvVHlwZSB8fCBzdWJUeXBlT2ZUeXBlKTtcblxuICAgIHJldHVybiBlcXVhbFRvVHlwZU9yU3ViVHlwZU9mO1xuICB9XG5cbiAgaXNFcXVhbFRvT3JTdXBlclR5cGVPZih0eXBlKSB7XG4gICAgY29uc3QgZXF1YWxUb1R5cGUgPSB0aGlzLmlzRXF1YWxUbyh0eXBlKSxcbiAgICAgICAgICBzdXBlclR5cGVPZlR5cGUgPSB0aGlzLmlzU3VwZXJUeXBlT2YodHlwZSksXG4gICAgICAgICAgZXF1YWxUb1R5cGVPclN1cGVyVHlwZU9mID0gKGVxdWFsVG9UeXBlIHx8IHN1cGVyVHlwZU9mVHlwZSk7XG5cbiAgICByZXR1cm4gZXF1YWxUb1R5cGVPclN1cGVyVHlwZU9mO1xuICB9XG5cbiAgbWF0Y2godHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG9UeXBlID0gdGhpcy5pc0VxdWFsVG8odHlwZSksXG4gICAgICAgICAgc3ViVHlwZU9mVHlwZSA9IHRoaXMuaXNTdWJUeXBlT2YodHlwZSksXG4gICAgICAgICAgc3VwZXJUeXBlT2ZUeXBlID0gdGhpcy5pc1N1cGVyVHlwZU9mKHR5cGUpLFxuICAgICAgICAgIG1hdGNoZXMgPSAoZXF1YWxUb1R5cGUgfHwgc3ViVHlwZU9mVHlwZSB8fCBzdXBlclR5cGVPZlR5cGUpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE5hbWUobmFtZSkge1xuICAgIGNvbnN0IG1hdGNoZXNOYW1lID0gKHRoaXMubmFtZSA9PT0gbmFtZSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlc05hbWU7XG4gIH1cblxuICBtYXRjaFR5cGVOYW1lKHR5cGVOYW1lKSB7XG4gICAgY29uc3QgbWF0Y2hlc1R5cGVOYW1lID0gKHRoaXMubmFtZSA9PT0gdHlwZU5hbWUpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNUeXBlTmFtZTtcbiAgfVxuXG4gIGFzU3RyaW5nKG5vU3VwZXJUeXBlID0gKHRoaXMuc3VwZXJUeXBlID09PSBudWxsKSkge1xuICAgIGxldCBzdHJpbmc7XG5cbiAgICBpZiAobm9TdXBlclR5cGUpIHtcbiAgICAgIHN0cmluZyA9IGAke3RoaXMubmFtZX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdXBlclR5cGVOYW1lID0gdGhpcy5zdXBlclR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICBzdHJpbmcgPSBgJHt0aGlzLm5hbWV9OiR7c3VwZXJUeXBlTmFtZX1gO1xuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3VwZXJUeXBlSlNPTiA9ICh0aGlzLnN1cGVyVHlwZSA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdXBlclR5cGUudG9KU09OKCksXG4gICAgICAgICAga2luZCA9IFRZUEVfS0lORCxcbiAgICAgICAgICBuYW1lID0gdGhpcy5uYW1lLFxuICAgICAgICAgIHN1cGVyVHlwZSA9IHN1cGVyVHlwZUpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAga2luZCxcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBzdXBlclR5cGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgcmVsZWFzZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IGpzb247XG5cbiAgICBsZXQgeyBzdXBlclR5cGUgfSA9IGpzb247XG5cbiAgICBpZiAoc3VwZXJUeXBlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdXBlclR5cGVKU09OID0gc3VwZXJUeXBlOyAgLy8vXG5cbiAgICAgIGpzb24gPSBzdXBlclR5cGVKU09OOyAvLy9cblxuICAgICAgc3VwZXJUeXBlID0gVHlwZS5mcm9tSlNPTihqc29uLCByZWxlYXNlQ29udGV4dCk7XG5cbiAgICAgIGNvbnN0IHN1cGVyVHlwZU5hbWUgPSBzdXBlclR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICBzdXBlclR5cGUgPSByZWxlYXNlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUoc3VwZXJUeXBlTmFtZSk7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHR5cGUgPSBuZXcgVHlwZShuYW1lLCBzdXBlclR5cGUpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVR5cGVOYW1lKHR5cGVOYW1lKSB7XG4gICAgY29uc3QgbmFtZSA9IHR5cGVOYW1lLCAgLy8vXG4gICAgICAgICAgc3VwZXJUeXBlID0gb2JqZWN0VHlwZSwgLy8vXG4gICAgICAgICAgdHlwZSA9IG5ldyBUeXBlKG5hbWUsIHN1cGVyVHlwZSk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVHlwZU5hbWVBbmRTdXBlclR5cGUodHlwZU5hbWUsIHN1cGVyVHlwZSkge1xuICAgIGNvbnN0IG5hbWUgPSB0eXBlTmFtZSwgIC8vL1xuICAgICAgICAgIHR5cGUgPSBuZXcgVHlwZShuYW1lLCBzdXBlclR5cGUpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cbn1cblxuY2xhc3MgT2JqZWN0VHlwZSBleHRlbmRzIFR5cGUge1xuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgbmFtZSA9IE9CSkVDVF9UWVBFX05BTUUsXG4gICAgICAgICAgc3VwZXJUeXBlID0gbnVsbCxcbiAgICAgICAgICBvYmplY3RUeXBlID0gbmV3IE9iamVjdFR5cGUobmFtZSwgc3VwZXJUeXBlKTtcblxuICAgIHJldHVybiBvYmplY3RUeXBlO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBvYmplY3RUeXBlID0gT2JqZWN0VHlwZS5mcm9tTm90aGluZygpO1xuIl0sIm5hbWVzIjpbIlR5cGUiLCJvYmplY3RUeXBlIiwibmFtZSIsInN1cGVyVHlwZSIsImdldE5hbWUiLCJnZXRTdXBlclR5cGUiLCJpc0VxdWFsVG8iLCJ0eXBlIiwiZXF1YWxUbyIsImlzU3ViVHlwZU9mIiwic3ViVHlwZU9mIiwiaXNTdXBlclR5cGVPZiIsInN1cGVyVHlwZU9mIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJlcXVhbFRvVHlwZSIsInN1YlR5cGVPZlR5cGUiLCJlcXVhbFRvVHlwZU9yU3ViVHlwZU9mIiwiaXNFcXVhbFRvT3JTdXBlclR5cGVPZiIsInN1cGVyVHlwZU9mVHlwZSIsImVxdWFsVG9UeXBlT3JTdXBlclR5cGVPZiIsIm1hdGNoIiwibWF0Y2hlcyIsIm1hdGNoTmFtZSIsIm1hdGNoZXNOYW1lIiwibWF0Y2hUeXBlTmFtZSIsInR5cGVOYW1lIiwibWF0Y2hlc1R5cGVOYW1lIiwiYXNTdHJpbmciLCJub1N1cGVyVHlwZSIsInN0cmluZyIsInN1cGVyVHlwZU5hbWUiLCJ0b0pTT04iLCJzdXBlclR5cGVKU09OIiwia2luZCIsIlRZUEVfS0lORCIsImpzb24iLCJmcm9tSlNPTiIsInJlbGVhc2VDb250ZXh0IiwiZmluZFR5cGVCeVR5cGVOYW1lIiwiZnJvbVR5cGVOYW1lIiwiZnJvbVR5cGVOYW1lQW5kU3VwZXJUeXBlIiwiT2JqZWN0VHlwZSIsImZyb21Ob3RoaW5nIiwiT0JKRUNUX1RZUEVfTkFNRSJdLCJt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