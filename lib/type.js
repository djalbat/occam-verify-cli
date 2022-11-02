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
                var equalToType = this === type;
                return equalToType;
            }
        },
        {
            key: "isSubTypeOf",
            value: function isSubTypeOf(type) {
                var subTypeOfType = false;
                if (this.superType === type) {
                    subTypeOfType = true;
                } else {
                    if (this.superType !== null) {
                        subTypeOfType = this.superType.isSubTypeOf(type);
                    }
                }
                return subTypeOfType;
            }
        },
        {
            key: "isSuperTypeOf",
            value: function isSuperTypeOf(type) {
                var superTypeOfType = false;
                var superType = type.getSuperType();
                if (superType === this) {
                    superTypeOfType = true;
                } else {
                    if (superType !== null) {
                        superTypeOfType = superType.isSuperTypeOf(this);
                    }
                }
                return superTypeOfType;
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
            key: "isEqualToSubTypeOfOrSuperTypeOf",
            value: function isEqualToSubTypeOfOrSuperTypeOf(type) {
                var equalToType = this.isEqualTo(type), subTypeOfType = this.isSubTypeOf(type), superTypeOfType = this.isSuperTypeOf(type), equalToTypeSubTypeOfOrSuperTypeOf = equalToType || subTypeOfType || superTypeOfType;
                return equalToTypeSubTypeOfOrSuperTypeOf;
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
            key: "asJSON",
            value: function asJSON() {
                var superTypeJSON = this.superType === null ? null : this.superType.asJSON(), name = this.name, superType = superTypeJSON, json = {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90eXBlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUeXBlIHtcbiAgY29uc3RydWN0b3IobmFtZSwgc3VwZXJUeXBlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnN1cGVyVHlwZSA9IHN1cGVyVHlwZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFN1cGVyVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBlclR5cGU7XG4gIH1cblxuICBpc0VxdWFsVG8odHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG9UeXBlID0gKHRoaXMgPT09IHR5cGUpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG9UeXBlO1xuICB9XG5cbiAgaXNTdWJUeXBlT2YodHlwZSkge1xuICAgIGxldCBzdWJUeXBlT2ZUeXBlID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5zdXBlclR5cGUgPT09IHR5cGUpIHtcbiAgICAgIHN1YlR5cGVPZlR5cGUgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5zdXBlclR5cGUgIT09IG51bGwpIHtcbiAgICAgICAgc3ViVHlwZU9mVHlwZSA9IHRoaXMuc3VwZXJUeXBlLmlzU3ViVHlwZU9mKHR5cGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdWJUeXBlT2ZUeXBlO1xuICB9XG5cbiAgaXNTdXBlclR5cGVPZih0eXBlKSB7XG4gICAgbGV0IHN1cGVyVHlwZU9mVHlwZSA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VwZXJUeXBlID0gdHlwZS5nZXRTdXBlclR5cGUoKTtcblxuICAgIGlmIChzdXBlclR5cGUgPT09IHRoaXMpIHtcbiAgICAgIHN1cGVyVHlwZU9mVHlwZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChzdXBlclR5cGUgIT09IG51bGwpIHtcbiAgICAgICAgc3VwZXJUeXBlT2ZUeXBlID0gc3VwZXJUeXBlLmlzU3VwZXJUeXBlT2YodGhpcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyVHlwZU9mVHlwZTtcbiAgfVxuXG4gIGlzRXF1YWxUb09yU3ViVHlwZU9mKHR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvVHlwZSA9IHRoaXMuaXNFcXVhbFRvKHR5cGUpLFxuICAgICAgICAgIHN1YlR5cGVPZlR5cGUgPSB0aGlzLmlzU3ViVHlwZU9mKHR5cGUpLFxuICAgICAgICAgIGVxdWFsVG9UeXBlT3JTdWJUeXBlT2YgPSAoZXF1YWxUb1R5cGUgfHwgc3ViVHlwZU9mVHlwZSk7XG5cbiAgICByZXR1cm4gZXF1YWxUb1R5cGVPclN1YlR5cGVPZjtcbiAgfVxuXG4gIGlzRXF1YWxUb09yU3VwZXJUeXBlT2YodHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG9UeXBlID0gdGhpcy5pc0VxdWFsVG8odHlwZSksXG4gICAgICAgICAgc3VwZXJUeXBlT2ZUeXBlID0gdGhpcy5pc1N1cGVyVHlwZU9mKHR5cGUpLFxuICAgICAgICAgIGVxdWFsVG9UeXBlT3JTdXBlclR5cGVPZiA9IChlcXVhbFRvVHlwZSB8fCBzdXBlclR5cGVPZlR5cGUpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG9UeXBlT3JTdXBlclR5cGVPZjtcbiAgfVxuXG4gIGlzRXF1YWxUb1N1YlR5cGVPZk9yU3VwZXJUeXBlT2YodHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG9UeXBlID0gdGhpcy5pc0VxdWFsVG8odHlwZSksXG4gICAgICAgICAgc3ViVHlwZU9mVHlwZSA9IHRoaXMuaXNTdWJUeXBlT2YodHlwZSksXG4gICAgICAgICAgc3VwZXJUeXBlT2ZUeXBlID0gdGhpcy5pc1N1cGVyVHlwZU9mKHR5cGUpLFxuICAgICAgICAgIGVxdWFsVG9UeXBlU3ViVHlwZU9mT3JTdXBlclR5cGVPZiA9IChlcXVhbFRvVHlwZSB8fCBzdWJUeXBlT2ZUeXBlIHx8IHN1cGVyVHlwZU9mVHlwZSk7XG5cbiAgICByZXR1cm4gZXF1YWxUb1R5cGVTdWJUeXBlT2ZPclN1cGVyVHlwZU9mO1xuICB9XG5cbiAgbWF0Y2hOYW1lKG5hbWUpIHtcbiAgICBjb25zdCBtYXRjaGVzTmFtZSA9ICh0aGlzLm5hbWUgPT09IG5hbWUpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNOYW1lO1xuICB9XG5cbiAgbWF0Y2hUeXBlTmFtZSh0eXBlTmFtZSkge1xuICAgIGNvbnN0IG1hdGNoZXNUeXBlTmFtZSA9ICh0aGlzLm5hbWUgPT09IHR5cGVOYW1lKTtcblxuICAgIHJldHVybiBtYXRjaGVzVHlwZU5hbWU7XG4gIH1cblxuICBhc1N0cmluZyhub1N1cGVyVHlwZSA9ICh0aGlzLnN1cGVyVHlwZSA9PT0gbnVsbCkpIHtcbiAgICBsZXQgc3RyaW5nO1xuXG4gICAgaWYgKG5vU3VwZXJUeXBlKSB7XG4gICAgICBzdHJpbmcgPSBgJHt0aGlzLm5hbWV9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlTmFtZSA9IHRoaXMuc3VwZXJUeXBlLmdldE5hbWUoKTtcblxuICAgICAgc3RyaW5nID0gYCR7dGhpcy5uYW1lfToke3N1cGVyVHlwZU5hbWV9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgYXNKU09OKCkge1xuICAgIGNvbnN0IHN1cGVyVHlwZUpTT04gPSAodGhpcy5zdXBlclR5cGUgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3VwZXJUeXBlLmFzSlNPTigpLFxuICAgICAgICAgIG5hbWUgPSB0aGlzLm5hbWUsXG4gICAgICAgICAgc3VwZXJUeXBlID0gc3VwZXJUeXBlSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgc3VwZXJUeXBlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21UeXBlTmFtZSh0eXBlTmFtZSkge1xuICAgIGNvbnN0IG5hbWUgPSB0eXBlTmFtZSwgIC8vL1xuICAgICAgICAgIHN1cGVyVHlwZSA9IG51bGwsXG4gICAgICAgICAgdHlwZSA9IG5ldyBUeXBlKG5hbWUsIHN1cGVyVHlwZSk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVHlwZU5hbWVBbmRTdXBlclR5cGUodHlwZU5hbWUsIHN1cGVyVHlwZSkge1xuICAgIGNvbnN0IG5hbWUgPSB0eXBlTmFtZSwgIC8vL1xuICAgICAgICAgIHR5cGUgPSBuZXcgVHlwZShuYW1lLCBzdXBlclR5cGUpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiVHlwZSIsIm5hbWUiLCJzdXBlclR5cGUiLCJnZXROYW1lIiwiZ2V0U3VwZXJUeXBlIiwiaXNFcXVhbFRvIiwidHlwZSIsImVxdWFsVG9UeXBlIiwiaXNTdWJUeXBlT2YiLCJzdWJUeXBlT2ZUeXBlIiwiaXNTdXBlclR5cGVPZiIsInN1cGVyVHlwZU9mVHlwZSIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwiZXF1YWxUb1R5cGVPclN1YlR5cGVPZiIsImlzRXF1YWxUb09yU3VwZXJUeXBlT2YiLCJlcXVhbFRvVHlwZU9yU3VwZXJUeXBlT2YiLCJpc0VxdWFsVG9TdWJUeXBlT2ZPclN1cGVyVHlwZU9mIiwiZXF1YWxUb1R5cGVTdWJUeXBlT2ZPclN1cGVyVHlwZU9mIiwibWF0Y2hOYW1lIiwibWF0Y2hlc05hbWUiLCJtYXRjaFR5cGVOYW1lIiwidHlwZU5hbWUiLCJtYXRjaGVzVHlwZU5hbWUiLCJhc1N0cmluZyIsIm5vU3VwZXJUeXBlIiwic3RyaW5nIiwic3VwZXJUeXBlTmFtZSIsImFzSlNPTiIsInN1cGVyVHlwZUpTT04iLCJqc29uIiwiZnJvbVR5cGVOYW1lIiwiZnJvbVR5cGVO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