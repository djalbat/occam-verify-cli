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
    var _super = _createSuper(ObjectType);
    function ObjectType() {
        _classCallCheck(this, ObjectType);
        return _super.apply(this, arguments);
    }
    _createClass(ObjectType, [
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
    var superType;
    var json = superTypeJSON, name = json.name;
    if (name === _typeNames.OBJECT_TYPE_NAME) {
        superType = objectType; ///
    } else {
        var typeName = name, type = fileContext.findTypeByTypeName(typeName);
        superType = type !== null ? type : Type.fromJSONAndFileContext(json, fileContext); ///
    }
    return superType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90eXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBPQkpFQ1RfVFlQRV9OQU1FIH0gZnJvbSBcIi4vdHlwZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR5cGUge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBzdXBlclR5cGUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuc3VwZXJUeXBlID0gc3VwZXJUeXBlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0U3VwZXJUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnN1cGVyVHlwZTtcbiAgfVxuXG4gIGlzRXF1YWxUbyh0eXBlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9ICh0aGlzID09PSB0eXBlKTtcblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgaXNTdWJUeXBlT2YodHlwZSkge1xuICAgIGxldCBzdWJUeXBlT2YgPSBmYWxzZTtcblxuICAgIGxldCBzdXBlclR5cGUgPSB0aGlzLnN1cGVyVHlwZTtcblxuICAgIHdoaWxlIChzdXBlclR5cGUgIT09IG51bGwpIHtcbiAgICAgIGlmIChzdXBlclR5cGUgPT09IHR5cGUpIHtcbiAgICAgICAgc3ViVHlwZU9mID0gdHJ1ZTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgc3VwZXJUeXBlID0gc3VwZXJUeXBlLmdldFN1cGVyVHlwZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJUeXBlT2Y7XG4gIH1cblxuICBpc1N1cGVyVHlwZU9mKHR5cGUpIHtcbiAgICBsZXQgc3VwZXJUeXBlT2YgPSBmYWxzZTtcblxuICAgIGxldCBzdXBlclR5cGUgPSB0eXBlLmdldFN1cGVyVHlwZSgpO1xuXG4gICAgd2hpbGUgKHN1cGVyVHlwZSAhPT0gbnVsbCkge1xuICAgICAgaWYgKHN1cGVyVHlwZSA9PT0gdGhpcykge1xuICAgICAgICBzdXBlclR5cGVPZiA9IHRydWU7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHN1cGVyVHlwZSA9IHN1cGVyVHlwZS5nZXRTdXBlclR5cGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXJUeXBlT2Y7XG4gIH1cblxuICBpc0VxdWFsVG9PclN1YlR5cGVPZih0eXBlKSB7XG4gICAgY29uc3QgZXF1YWxUbyA9IHRoaXMuaXNFcXVhbFRvKHR5cGUpLFxuICAgICAgICAgIHN1YlR5cGVPZiA9IHRoaXMuaXNTdWJUeXBlT2YodHlwZSksXG4gICAgICAgICAgZXF1YWxUb09yU3ViVHlwZU9mID0gKGVxdWFsVG8gfHwgc3ViVHlwZU9mKTtcblxuICAgIHJldHVybiBlcXVhbFRvT3JTdWJUeXBlT2Y7XG4gIH1cblxuICBpc0VxdWFsVG9PclN1cGVyVHlwZU9mKHR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvID0gdGhpcy5pc0VxdWFsVG8odHlwZSksXG4gICAgICAgICAgc3VwZXJUeXBlT2YgPSB0aGlzLmlzU3VwZXJUeXBlT2YodHlwZSksXG4gICAgICAgICAgZXF1YWxUb09yU3VwZXJUeXBlT2YgPSAoZXF1YWxUbyB8fCBzdXBlclR5cGVPZik7XG5cbiAgICByZXR1cm4gZXF1YWxUb09yU3VwZXJUeXBlT2Y7XG4gIH1cblxuICBpc0VxdWFsVG9PclN1YlR5cGVPZk9mU3VwZXJUeXBlT2YodHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG8gPSB0aGlzLmlzRXF1YWxUbyh0eXBlKSxcbiAgICAgICAgICBzdWJUeXBlT2YgPSB0aGlzLmlzU3ViVHlwZU9mKHR5cGUpLFxuICAgICAgICAgIHN1cGVyVHlwZU9mID0gdGhpcy5pc1N1cGVyVHlwZU9mKHR5cGUpLFxuICAgICAgICAgIGVxdWFsVG9PclN1YlR5cGVPZk9mU3VwZXJUeXBlT2YgPSAoZXF1YWxUbyB8fCBzdWJUeXBlT2YgfHwgc3VwZXJUeXBlT2YpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG9PclN1YlR5cGVPZk9mU3VwZXJUeXBlT2Y7XG4gIH1cblxuICBtYXRjaCh0eXBlKSB7XG4gICAgY29uc3QgZXF1YWxUb1R5cGUgPSB0aGlzLmlzRXF1YWxUbyh0eXBlKSxcbiAgICAgICAgICBzdWJUeXBlT2ZUeXBlID0gdGhpcy5pc1N1YlR5cGVPZih0eXBlKSxcbiAgICAgICAgICBzdXBlclR5cGVPZlR5cGUgPSB0aGlzLmlzU3VwZXJUeXBlT2YodHlwZSksXG4gICAgICAgICAgbWF0Y2hlcyA9IChlcXVhbFRvVHlwZSB8fCBzdWJUeXBlT2ZUeXBlIHx8IHN1cGVyVHlwZU9mVHlwZSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTmFtZShuYW1lKSB7XG4gICAgY29uc3QgbWF0Y2hlc05hbWUgPSAodGhpcy5uYW1lID09PSBuYW1lKTtcblxuICAgIHJldHVybiBtYXRjaGVzTmFtZTtcbiAgfVxuXG4gIG1hdGNoVHlwZU5hbWUodHlwZU5hbWUpIHtcbiAgICBjb25zdCBtYXRjaGVzVHlwZU5hbWUgPSAodGhpcy5uYW1lID09PSB0eXBlTmFtZSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlc1R5cGVOYW1lO1xuICB9XG5cbiAgYXNTdHJpbmcodG9rZW5zLCBub1N1cGVyVHlwZSkge1xuICAgIGxldCBzdHJpbmc7XG5cbiAgICBpZiAobm9TdXBlclR5cGUpIHtcbiAgICAgIHN0cmluZyA9IGAke3RoaXMubmFtZX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdXBlclR5cGVOYW1lID0gdGhpcy5zdXBlclR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICBzdHJpbmcgPSBgJHt0aGlzLm5hbWV9OiR7c3VwZXJUeXBlTmFtZX1gO1xuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICB0b0pTT04odG9rZW5zKSB7XG4gICAgY29uc3Qgc3VwZXJUeXBlSlNPTiA9IHRoaXMuc3VwZXJUeXBlLnRvSlNPTih0b2tlbnMpLFxuICAgICAgICAgIG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAgc3VwZXJUeXBlID0gc3VwZXJUeXBlSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgc3VwZXJUeXBlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21UeXBlTmFtZSh0eXBlTmFtZSkge1xuICAgIGNvbnN0IG5hbWUgPSB0eXBlTmFtZSwgIC8vL1xuICAgICAgICAgIHN1cGVyVHlwZSA9IG9iamVjdFR5cGUsIC8vL1xuICAgICAgICAgIHR5cGUgPSBuZXcgVHlwZShuYW1lLCBzdXBlclR5cGUpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCB0eXBlO1xuXG4gICAgbGV0IHsgc3VwZXJUeXBlIH0gPSBqc29uO1xuXG4gICAgY29uc3Qgc3VwZXJUeXBlSlNPTiA9IHN1cGVyVHlwZTsgIC8vL1xuXG4gICAgc3VwZXJUeXBlID0gc3VwZXJUeXBlRnJvbVN1cGVyVHlwZUpTT05BbmRGaWxlQ29udGV4dChzdXBlclR5cGVKU09OLCBmaWxlQ29udGV4dCk7XG5cbiAgICBjb25zdCB7IG5hbWUgfSA9IGpzb247XG5cbiAgICB0eXBlID0gbmV3IFR5cGUobmFtZSwgc3VwZXJUeXBlKTtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3RhdGljIGZyb21UeXBlTmFtZUFuZFN1cGVyVHlwZSh0eXBlTmFtZSwgc3VwZXJUeXBlKSB7XG4gICAgY29uc3QgbmFtZSA9IHR5cGVOYW1lLCAgLy8vXG4gICAgICAgICAgdHlwZSA9IG5ldyBUeXBlKG5hbWUsIHN1cGVyVHlwZSk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxufVxuXG5jbGFzcyBPYmplY3RUeXBlIGV4dGVuZHMgVHlwZSB7XG4gIHRvSlNPTih0b2tlbnMpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5uYW1lLFxuICAgICAgICAgIHN1cGVyVHlwZSA9IG51bGwsICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHN1cGVyVHlwZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBuYW1lID0gT0JKRUNUX1RZUEVfTkFNRSxcbiAgICAgICAgICBzdXBlclR5cGUgPSBudWxsLFxuICAgICAgICAgIG9iamVjdFR5cGUgPSBuZXcgT2JqZWN0VHlwZShuYW1lLCBzdXBlclR5cGUpO1xuXG4gICAgcmV0dXJuIG9iamVjdFR5cGU7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG9iamVjdFR5cGUgPSBPYmplY3RUeXBlLmZyb21Ob3RoaW5nKCk7XG5cbmZ1bmN0aW9uIHN1cGVyVHlwZUZyb21TdXBlclR5cGVKU09OQW5kRmlsZUNvbnRleHQoc3VwZXJUeXBlSlNPTiwgZmlsZUNvbnRleHQpIHtcbiAgbGV0IHN1cGVyVHlwZTtcblxuICBjb25zdCBqc29uID0gc3VwZXJUeXBlSlNPTiwgLy8vXG4gICAgICAgIHsgbmFtZSB9ID0ganNvbjtcblxuICBpZiAobmFtZSA9PT0gT0JKRUNUX1RZUEVfTkFNRSkge1xuICAgIHN1cGVyVHlwZSA9IG9iamVjdFR5cGU7IC8vL1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHR5cGVOYW1lID0gbmFtZSwgIC8vL1xuICAgICAgICAgIHR5cGUgPSBmaWxlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgc3VwZXJUeXBlID0gKHR5cGUgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgIHR5cGUgOiAgLy8vXG4gICAgICAgICAgICAgICAgICAgIFR5cGUuZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBzdXBlclR5cGU7XG59XG4iXSwibmFtZXMiOlsiVHlwZSIsIm9iamVjdFR5cGUiLCJuYW1lIiwic3VwZXJUeXBlIiwiZ2V0TmFtZSIsImdldFN1cGVyVHlwZSIsImlzRXF1YWxUbyIsInR5cGUiLCJlcXVhbFRvIiwiaXNTdWJUeXBlT2YiLCJzdWJUeXBlT2YiLCJpc1N1cGVyVHlwZU9mIiwic3VwZXJUeXBlT2YiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsImVxdWFsVG9PclN1YlR5cGVPZiIsImlzRXF1YWxUb09yU3VwZXJUeXBlT2YiLCJlcXVhbFRvT3JTdXBlclR5cGVPZiIsImlzRXF1YWxUb09yU3ViVHlwZU9mT2ZTdXBlclR5cGVPZiIsImVxdWFsVG9PclN1YlR5cGVPZk9mU3VwZXJUeXBlT2YiLCJtYXRjaCIsImVxdWFsVG9UeXBlIiwic3ViVHlwZU9mVHlwZSIsInN1cGVyVHlwZU9mVHlwZSIsIm1hdGNoZXMiLCJtYXRjaE5hbWUiLCJtYXRjaGVzTmFtZSIsIm1hdGNoVHlwZU5hbWUiLCJ0eXBlTmFtZSIsIm1hdGNoZXNUeXBlTmFtZSIsImFzU3RyaW5nIiwidG9rZW5zIiwibm9TdXBlclR5cGUiLCJzdHJpbmciLCJzdXBlclR5cGVOYW1lIiwidG9KU09OIiwic3VwZXJUeXBlSlNPTiIsImpzb24iLCJmcm9tVHlwZU5hbWUiLCJmcm9tSlNPTkFuZEZpbGVDb250ZXh0IiwiZmlsZUNvbnRleHQiLCJzdXBlclR5cGVGcm9tU3VwZXJUeXBlSlNPTkFuZEZpbGVDb250ZXh0IiwiZnJvbVR5cGVOYW1lQW5kU3VwZXJUeXBlIiwiT2JqZWN0VHlwZSIsImZyb21Ob3RoaW5nIiwiT0JKRUNUX1RZUEVfTkFNRSIsImZpbmRUeXBlQnlUeXBlTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztlQUlxQkE7O0lBcUxSQyxVQUFVO2VBQVZBOzs7eUJBdkxvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEIsSUFBQSxBQUFNRCxxQkFnS2xCLEFBaEtZO2FBQU1BLEtBQ1BFLElBQUksRUFBRUMsU0FBUzs4QkFEUkg7UUFFakIsSUFBSSxDQUFDRSxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxTQUFTLEdBQUdBOztpQkFIQUg7O1lBTW5CSSxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVTtnQkFDUixPQUFPLElBQUksQ0FBQ0YsSUFBSTtZQUNsQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlO2dCQUNiLE9BQU8sSUFBSSxDQUFDRixTQUFTO1lBQ3ZCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVDLElBQUksRUFBRTtnQkFDZCxJQUFNQyxVQUFXLElBQUksS0FBS0Q7Z0JBRTFCLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWUYsSUFBSSxFQUFFO2dCQUNoQixJQUFJRyxZQUFZLEtBQUs7Z0JBRXJCLElBQUlQLFlBQVksSUFBSSxDQUFDQSxTQUFTO2dCQUU5QixNQUFPQSxjQUFjLElBQUksQ0FBRTtvQkFDekIsSUFBSUEsY0FBY0ksTUFBTTt3QkFDdEJHLFlBQVksSUFBSTt3QkFFaEIsS0FBTTtvQkFDUixDQUFDO29CQUVEUCxZQUFZQSxVQUFVRSxZQUFZO2dCQUNwQztnQkFFQSxPQUFPSztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWNKLElBQUksRUFBRTtnQkFDbEIsSUFBSUssY0FBYyxLQUFLO2dCQUV2QixJQUFJVCxZQUFZSSxLQUFLRixZQUFZO2dCQUVqQyxNQUFPRixjQUFjLElBQUksQ0FBRTtvQkFDekIsSUFBSUEsY0FBYyxJQUFJLEVBQUU7d0JBQ3RCUyxjQUFjLElBQUk7d0JBRWxCLEtBQU07b0JBQ1IsQ0FBQztvQkFFRFQsWUFBWUEsVUFBVUUsWUFBWTtnQkFDcEM7Z0JBRUEsT0FBT087WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxxQkFBcUJOLElBQUksRUFBRTtnQkFDekIsSUFBTUMsVUFBVSxJQUFJLENBQUNGLFNBQVMsQ0FBQ0MsT0FDekJHLFlBQVksSUFBSSxDQUFDRCxXQUFXLENBQUNGLE9BQzdCTyxxQkFBc0JOLFdBQVdFO2dCQUV2QyxPQUFPSTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLHVCQUF1QlIsSUFBSSxFQUFFO2dCQUMzQixJQUFNQyxVQUFVLElBQUksQ0FBQ0YsU0FBUyxDQUFDQyxPQUN6QkssY0FBYyxJQUFJLENBQUNELGFBQWEsQ0FBQ0osT0FDakNTLHVCQUF3QlIsV0FBV0k7Z0JBRXpDLE9BQU9JO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsa0NBQWtDVixJQUFJLEVBQUU7Z0JBQ3RDLElBQU1DLFVBQVUsSUFBSSxDQUFDRixTQUFTLENBQUNDLE9BQ3pCRyxZQUFZLElBQUksQ0FBQ0QsV0FBVyxDQUFDRixPQUM3QkssY0FBYyxJQUFJLENBQUNELGFBQWEsQ0FBQ0osT0FDakNXLGtDQUFtQ1YsV0FBV0UsYUFBYUU7Z0JBRWpFLE9BQU9NO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsTUFBTVosSUFBSSxFQUFFO2dCQUNWLElBQU1hLGNBQWMsSUFBSSxDQUFDZCxTQUFTLENBQUNDLE9BQzdCYyxnQkFBZ0IsSUFBSSxDQUFDWixXQUFXLENBQUNGLE9BQ2pDZSxrQkFBa0IsSUFBSSxDQUFDWCxhQUFhLENBQUNKLE9BQ3JDZ0IsVUFBV0gsZUFBZUMsaUJBQWlCQztnQkFFakQsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVdEIsSUFBSSxFQUFFO2dCQUNkLElBQU11QixjQUFlLElBQUksQ0FBQ3ZCLElBQUksS0FBS0E7Z0JBRW5DLE9BQU91QjtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWNDLFFBQVEsRUFBRTtnQkFDdEIsSUFBTUMsa0JBQW1CLElBQUksQ0FBQzFCLElBQUksS0FBS3lCO2dCQUV2QyxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFNBQVNDLE1BQU0sRUFBRUMsV0FBVyxFQUFFO2dCQUM1QixJQUFJQztnQkFFSixJQUFJRCxhQUFhO29CQUNmQyxTQUFTLEFBQUMsR0FBWSxPQUFWLElBQUksQ0FBQzlCLElBQUk7Z0JBQ3ZCLE9BQU87b0JBQ0wsSUFBTStCLGdCQUFnQixJQUFJLENBQUM5QixTQUFTLENBQUNDLE9BQU87b0JBRTVDNEIsU0FBUyxBQUFDLEdBQWVDLE9BQWIsSUFBSSxDQUFDL0IsSUFBSSxFQUFDLEtBQWlCLE9BQWQrQjtnQkFDM0IsQ0FBQztnQkFFRCxPQUFPRDtZQUNUOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9KLE1BQU0sRUFBRTtnQkFDYixJQUFNSyxnQkFBZ0IsSUFBSSxDQUFDaEMsU0FBUyxDQUFDK0IsTUFBTSxDQUFDSixTQUN0QzVCLE9BQU8sSUFBSSxDQUFDQSxJQUFJLEVBQ2hCQyxZQUFZZ0MsZUFDWkMsT0FBTztvQkFDTGxDLE1BQUFBO29CQUNBQyxXQUFBQTtnQkFDRjtnQkFFTixPQUFPaUM7WUFDVDs7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxhQUFhVixRQUFRLEVBQUU7Z0JBQzVCLElBQU16QixPQUFPeUIsVUFDUHhCLFlBQVlGLFlBQ1pNLE9BQU8sSUFuSUlQLEtBbUlLRSxNQUFNQztnQkFFNUIsT0FBT0k7WUFDVDs7O1lBRU8rQixLQUFBQTttQkFBUCxTQUFPQSx1QkFBdUJGLElBQUksRUFBRUcsV0FBVyxFQUFFO2dCQUMvQyxJQUFJaEM7Z0JBRUosSUFBSSxBQUFFSixZQUFjaUMsS0FBZGpDO2dCQUVOLElBQU1nQyxnQkFBZ0JoQyxXQUFZLEdBQUc7Z0JBRXJDQSxZQUFZcUMseUNBQXlDTCxlQUFlSTtnQkFFcEUsSUFBTSxBQUFFckMsT0FBU2tDLEtBQVRsQztnQkFFUkssT0FBTyxJQW5KVVAsS0FtSkRFLE1BQU1DO2dCQUV0QixPQUFPSTtZQUNUOzs7WUFFT2tDLEtBQUFBO21CQUFQLFNBQU9BLHlCQUF5QmQsUUFBUSxFQUFFeEIsU0FBUyxFQUFFO2dCQUNuRCxJQUFNRCxPQUFPeUIsVUFDUHBCLE9BQU8sSUExSklQLEtBMEpLRSxNQUFNQztnQkFFNUIsT0FBT0k7WUFDVDs7O1dBN0ptQlA7O0FBZ0tyQixJQUFBLEFBQU0wQywyQkFxQkgsQUFyQkg7Y0FBTUE7OEJBQUFBO2FBQUFBOzhCQUFBQTs7O2lCQUFBQTs7WUFDSlIsS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9KLE1BQU0sRUFBRTtnQkFDYixJQUFNNUIsT0FBTyxJQUFJLENBQUNBLElBQUksRUFDaEJDLFlBQVksSUFBSSxFQUNoQmlDLE9BQU87b0JBQ0xsQyxNQUFBQTtvQkFDQUMsV0FBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT2lDO1lBQ1Q7Ozs7WUFFT08sS0FBQUE7bUJBQVAsU0FBT0EsY0FBYztnQkFDbkIsSUFBTXpDLE9BQU8wQywyQkFBZ0IsRUFDdkJ6QyxZQUFZLElBQUksRUFDaEJGLGFBQWEsSUFmakJ5QyxXQWVnQ3hDLE1BQU1DO2dCQUV4QyxPQUFPRjtZQUNUOzs7V0FsQkl5QztFQUFtQjFDO0FBcUJsQixJQUFNQyxhQUFheUMsV0FBV0MsV0FBVztBQUVoRCxTQUFTSCx5Q0FBeUNMLGFBQWEsRUFBRUksV0FBVyxFQUFFO0lBQzVFLElBQUlwQztJQUVKLElBQU1pQyxPQUFPRCxlQUNQLEFBQUVqQyxPQUFTa0MsS0FBVGxDO0lBRVIsSUFBSUEsU0FBUzBDLDJCQUFnQixFQUFFO1FBQzdCekMsWUFBWUYsWUFBWSxHQUFHO0lBQzdCLE9BQU87UUFDTCxJQUFNMEIsV0FBV3pCLE1BQ1hLLE9BQU9nQyxZQUFZTSxrQkFBa0IsQ0FBQ2xCO1FBRTVDeEIsWUFBWSxBQUFDSSxTQUFTLElBQUksR0FDWkEsT0FDRVAsS0FBS3NDLHNCQUFzQixDQUFDRixNQUFNRyxZQUFZLEVBQUcsR0FBRztJQUN0RSxDQUFDO0lBRUQsT0FBT3BDO0FBQ1QifQ==