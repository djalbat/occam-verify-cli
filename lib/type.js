"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Type;
    }
});
var _kinds = require("./kinds");
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
                var name = typeName, superType = null, type = new Type(name, superType);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90eXBlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBUWVBFX0tJTkQgfSBmcm9tIFwiLi9raW5kc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUeXBlIHtcbiAgY29uc3RydWN0b3IobmFtZSwgc3VwZXJUeXBlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnN1cGVyVHlwZSA9IHN1cGVyVHlwZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFN1cGVyVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBlclR5cGU7XG4gIH1cblxuICBpc0VxdWFsVG8odHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG8gPSAodGhpcyA9PT0gdHlwZSk7XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzU3ViVHlwZU9mKHR5cGUpIHtcbiAgICBsZXQgc3ViVHlwZU9mID0gZmFsc2U7XG5cbiAgICBsZXQgc3VwZXJUeXBlID0gdGhpcy5zdXBlclR5cGU7XG5cbiAgICB3aGlsZSAoc3VwZXJUeXBlICE9PSBudWxsKSB7XG4gICAgICBpZiAoc3VwZXJUeXBlID09PSB0eXBlKSB7XG4gICAgICAgIHN1YlR5cGVPZiA9IHRydWU7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHN1cGVyVHlwZSA9IHN1cGVyVHlwZS5nZXRTdXBlclR5cGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3ViVHlwZU9mO1xuICB9XG5cbiAgaXNTdXBlclR5cGVPZih0eXBlKSB7XG4gICAgbGV0IHN1cGVyVHlwZU9mID0gZmFsc2U7XG5cbiAgICBsZXQgc3VwZXJUeXBlID0gdHlwZS5nZXRTdXBlclR5cGUoKTtcblxuICAgIHdoaWxlIChzdXBlclR5cGUgIT09IG51bGwpIHtcbiAgICAgIGlmIChzdXBlclR5cGUgPT09IHRoaXMpIHtcbiAgICAgICAgc3VwZXJUeXBlT2YgPSB0cnVlO1xuXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBzdXBlclR5cGUgPSBzdXBlclR5cGUuZ2V0U3VwZXJUeXBlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyVHlwZU9mO1xuICB9XG5cbiAgaXNFcXVhbFRvT3JTdWJUeXBlT2YodHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG9UeXBlID0gdGhpcy5pc0VxdWFsVG8odHlwZSksXG4gICAgICAgICAgc3ViVHlwZU9mVHlwZSA9IHRoaXMuaXNTdWJUeXBlT2YodHlwZSksXG4gICAgICAgICAgZXF1YWxUb1R5cGVPclN1YlR5cGVPZiA9IChlcXVhbFRvVHlwZSB8fCBzdWJUeXBlT2ZUeXBlKTtcblxuICAgIHJldHVybiBlcXVhbFRvVHlwZU9yU3ViVHlwZU9mO1xuICB9XG5cbiAgaXNFcXVhbFRvT3JTdXBlclR5cGVPZih0eXBlKSB7XG4gICAgY29uc3QgZXF1YWxUb1R5cGUgPSB0aGlzLmlzRXF1YWxUbyh0eXBlKSxcbiAgICAgICAgICBzdXBlclR5cGVPZlR5cGUgPSB0aGlzLmlzU3VwZXJUeXBlT2YodHlwZSksXG4gICAgICAgICAgZXF1YWxUb1R5cGVPclN1cGVyVHlwZU9mID0gKGVxdWFsVG9UeXBlIHx8IHN1cGVyVHlwZU9mVHlwZSk7XG5cbiAgICByZXR1cm4gZXF1YWxUb1R5cGVPclN1cGVyVHlwZU9mO1xuICB9XG5cbiAgbWF0Y2godHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG9UeXBlID0gdGhpcy5pc0VxdWFsVG8odHlwZSksXG4gICAgICAgICAgc3ViVHlwZU9mVHlwZSA9IHRoaXMuaXNTdWJUeXBlT2YodHlwZSksXG4gICAgICAgICAgc3VwZXJUeXBlT2ZUeXBlID0gdGhpcy5pc1N1cGVyVHlwZU9mKHR5cGUpLFxuICAgICAgICAgIG1hdGNoZXMgPSAoZXF1YWxUb1R5cGUgfHwgc3ViVHlwZU9mVHlwZSB8fCBzdXBlclR5cGVPZlR5cGUpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE5hbWUobmFtZSkge1xuICAgIGNvbnN0IG1hdGNoZXNOYW1lID0gKHRoaXMubmFtZSA9PT0gbmFtZSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlc05hbWU7XG4gIH1cblxuICBtYXRjaFR5cGVOYW1lKHR5cGVOYW1lKSB7XG4gICAgY29uc3QgbWF0Y2hlc1R5cGVOYW1lID0gKHRoaXMubmFtZSA9PT0gdHlwZU5hbWUpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNUeXBlTmFtZTtcbiAgfVxuXG4gIGFzU3RyaW5nKG5vU3VwZXJUeXBlID0gKHRoaXMuc3VwZXJUeXBlID09PSBudWxsKSkge1xuICAgIGxldCBzdHJpbmc7XG5cbiAgICBpZiAobm9TdXBlclR5cGUpIHtcbiAgICAgIHN0cmluZyA9IGAke3RoaXMubmFtZX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdXBlclR5cGVOYW1lID0gdGhpcy5zdXBlclR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICBzdHJpbmcgPSBgJHt0aGlzLm5hbWV9OiR7c3VwZXJUeXBlTmFtZX1gO1xuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3VwZXJUeXBlSlNPTiA9ICh0aGlzLnN1cGVyVHlwZSA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdXBlclR5cGUudG9KU09OKCksXG4gICAgICAgICAga2luZCA9IFRZUEVfS0lORCxcbiAgICAgICAgICBuYW1lID0gdGhpcy5uYW1lLFxuICAgICAgICAgIHN1cGVyVHlwZSA9IHN1cGVyVHlwZUpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAga2luZCxcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBzdXBlclR5cGVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgcmVsZWFzZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IGpzb247XG5cbiAgICBsZXQgeyBzdXBlclR5cGUgfSA9IGpzb247XG5cbiAgICBpZiAoc3VwZXJUeXBlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdXBlclR5cGVKU09OID0gc3VwZXJUeXBlOyAgLy8vXG5cbiAgICAgIGpzb24gPSBzdXBlclR5cGVKU09OOyAvLy9cblxuICAgICAgc3VwZXJUeXBlID0gVHlwZS5mcm9tSlNPTihqc29uLCByZWxlYXNlQ29udGV4dCk7XG5cbiAgICAgIGNvbnN0IHN1cGVyVHlwZU5hbWUgPSBzdXBlclR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICBzdXBlclR5cGUgPSByZWxlYXNlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUoc3VwZXJUeXBlTmFtZSk7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHR5cGUgPSBuZXcgVHlwZShuYW1lLCBzdXBlclR5cGUpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVR5cGVOYW1lKHR5cGVOYW1lKSB7XG4gICAgY29uc3QgbmFtZSA9IHR5cGVOYW1lLCAgLy8vXG4gICAgICAgICAgc3VwZXJUeXBlID0gbnVsbCxcbiAgICAgICAgICB0eXBlID0gbmV3IFR5cGUobmFtZSwgc3VwZXJUeXBlKTtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3RhdGljIGZyb21UeXBlTmFtZUFuZFN1cGVyVHlwZSh0eXBlTmFtZSwgc3VwZXJUeXBlKSB7XG4gICAgY29uc3QgbmFtZSA9IHR5cGVOYW1lLCAgLy8vXG4gICAgICAgICAgdHlwZSA9IG5ldyBUeXBlKG5hbWUsIHN1cGVyVHlwZSk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJUeXBlIiwibmFtZSIsInN1cGVyVHlwZSIsImdldE5hbWUiLCJnZXRTdXBlclR5cGUiLCJpc0VxdWFsVG8iLCJ0eXBlIiwiZXF1YWxUbyIsImlzU3ViVHlwZU9mIiwic3ViVHlwZU9mIiwiaXNTdXBlclR5cGVPZiIsInN1cGVyVHlwZU9mIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJlcXVhbFRvVHlwZSIsInN1YlR5cGVPZlR5cGUiLCJlcXVhbFRvVHlwZU9yU3ViVHlwZU9mIiwiaXNFcXVhbFRvT3JTdXBlclR5cGVPZiIsInN1cGVyVHlwZU9mVHlwZSIsImVxdWFsVG9UeXBlT3JTdXBlclR5cGVPZiIsIm1hdGNoIiwibWF0Y2hlcyIsIm1hdGNoTmFtZSIsIm1hdGNoZXNOYW1lIiwibWF0Y2hUeXBlTmFtZSIsInR5cGVOYW1lIiwibWF0Y2hlc1R5cGVOYW1lIiwiYXNTdHJpbmciLCJub1N1cGVyVHlwZSIsInN0cmluZyIsInN1cGVyVHlwZU5hbWUiLCJ0b0pTT04iLCJzdXBlclR5cGVKU09OIiwia2luZCIsIlRZUEVfS0lORCIsImpzb24iLCJmcm9tSlNPTiIsInJlbGVhc2VDb250ZXh0IiwiZmluZFR5cGVCeVR5cGVOYW1lIiwiZnJvbVR5cGVOYW1lIiwiZnJvbVR5cGVOYW1lQW5kU3VwZXJUeXBlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OztxQkFGSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFWCxJQUFBLEFBQU1BLHFCQUFOO2FBQU1BLEtBQ1BDLElBQUksRUFBRUMsU0FBUzs4QkFEUkY7UUFFakIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxTQUFTLEdBQUdBOztpQkFIQUY7O1lBTW5CRyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVTtnQkFDUixPQUFPLElBQUksQ0FBQ0YsSUFBSTtZQUNsQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlO2dCQUNiLE9BQU8sSUFBSSxDQUFDRixTQUFTO1lBQ3ZCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVDLElBQUks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