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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90eXBlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUeXBlIHtcbiAgY29uc3RydWN0b3IobmFtZSwgc3VwZXJUeXBlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnN1cGVyVHlwZSA9IHN1cGVyVHlwZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFN1cGVyVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBlclR5cGU7XG4gIH1cblxuICBpc0VxdWFsVG8odHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG9UeXBlID0gKHRoaXMgPT09IHR5cGUpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG9UeXBlO1xuICB9XG5cbiAgaXNTdWJUeXBlT2YodHlwZSkge1xuICAgIGxldCBzdWJUeXBlT2ZUeXBlID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5zdXBlclR5cGUgPT09IHR5cGUpIHtcbiAgICAgIHN1YlR5cGVPZlR5cGUgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5zdXBlclR5cGUgIT09IG51bGwpIHtcbiAgICAgICAgc3ViVHlwZU9mVHlwZSA9IHRoaXMuc3VwZXJUeXBlLmlzU3ViVHlwZU9mKHR5cGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdWJUeXBlT2ZUeXBlO1xuICB9XG5cbiAgaXNTdXBlclR5cGVPZih0eXBlKSB7XG4gICAgbGV0IHN1cGVyVHlwZU9mVHlwZSA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VwZXJUeXBlID0gdHlwZS5nZXRTdXBlclR5cGUoKTtcblxuICAgIGlmIChzdXBlclR5cGUgPT09IHRoaXMpIHtcbiAgICAgIHN1cGVyVHlwZU9mVHlwZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChzdXBlclR5cGUgIT09IG51bGwpIHtcbiAgICAgICAgc3VwZXJUeXBlT2ZUeXBlID0gc3VwZXJUeXBlLmlzU3VwZXJUeXBlT2YodGhpcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyVHlwZU9mVHlwZTtcbiAgfVxuXG4gIGlzRXF1YWxUb09yU3ViVHlwZU9mKHR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvVHlwZSA9IHRoaXMuaXNFcXVhbFRvKHR5cGUpLFxuICAgICAgICAgIHN1YlR5cGVPZlR5cGUgPSB0aGlzLmlzU3ViVHlwZU9mKHR5cGUpLFxuICAgICAgICAgIGVxdWFsVG9UeXBlT3JTdWJUeXBlT2YgPSAoZXF1YWxUb1R5cGUgfHwgc3ViVHlwZU9mVHlwZSk7XG5cbiAgICByZXR1cm4gZXF1YWxUb1R5cGVPclN1YlR5cGVPZjtcbiAgfVxuXG4gIGlzRXF1YWxUb09yU3VwZXJUeXBlT2YodHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG9UeXBlID0gdGhpcy5pc0VxdWFsVG8odHlwZSksXG4gICAgICAgICAgc3VwZXJUeXBlT2ZUeXBlID0gdGhpcy5pc1N1cGVyVHlwZU9mKHR5cGUpLFxuICAgICAgICAgIGVxdWFsVG9UeXBlT3JTdXBlclR5cGVPZiA9IChlcXVhbFRvVHlwZSB8fCBzdXBlclR5cGVPZlR5cGUpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG9UeXBlT3JTdXBlclR5cGVPZjtcbiAgfVxuXG4gIGlzRXF1YWxUb1N1YlR5cGVPZk9yU3VwZXJUeXBlT2YodHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG9UeXBlID0gdGhpcy5pc0VxdWFsVG8odHlwZSksXG4gICAgICAgICAgc3ViVHlwZU9mVHlwZSA9IHRoaXMuaXNTdWJUeXBlT2YodHlwZSksXG4gICAgICAgICAgc3VwZXJUeXBlT2ZUeXBlID0gdGhpcy5pc1N1cGVyVHlwZU9mKHR5cGUpLFxuICAgICAgICAgIGVxdWFsVG9UeXBlU3ViVHlwZU9mT3JTdXBlclR5cGVPZiA9IChlcXVhbFRvVHlwZSB8fCBzdWJUeXBlT2ZUeXBlIHx8IHN1cGVyVHlwZU9mVHlwZSk7XG5cbiAgICByZXR1cm4gZXF1YWxUb1R5cGVTdWJUeXBlT2ZPclN1cGVyVHlwZU9mO1xuICB9XG5cbiAgbWF0Y2hOYW1lKG5hbWUpIHtcbiAgICBjb25zdCBtYXRjaGVzTmFtZSA9ICh0aGlzLm5hbWUgPT09IG5hbWUpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNOYW1lO1xuICB9XG5cbiAgbWF0Y2hUeXBlTmFtZSh0eXBlTmFtZSkge1xuICAgIGNvbnN0IG1hdGNoZXNUeXBlTmFtZSA9ICh0aGlzLm5hbWUgPT09IHR5cGVOYW1lKTtcblxuICAgIHJldHVybiBtYXRjaGVzVHlwZU5hbWU7XG4gIH1cblxuICBhc1N0cmluZyhub1N1cGVyVHlwZSA9ICh0aGlzLnN1cGVyVHlwZSA9PT0gbnVsbCkpIHtcbiAgICBsZXQgc3RyaW5nO1xuXG4gICAgaWYgKG5vU3VwZXJUeXBlKSB7XG4gICAgICBzdHJpbmcgPSBgJHt0aGlzLm5hbWV9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlTmFtZSA9IHRoaXMuc3VwZXJUeXBlLmdldE5hbWUoKTtcblxuICAgICAgc3RyaW5nID0gYCR7dGhpcy5uYW1lfToke3N1cGVyVHlwZU5hbWV9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21UeXBlTmFtZSh0eXBlTmFtZSkge1xuICAgIGNvbnN0IG5hbWUgPSB0eXBlTmFtZSwgIC8vL1xuICAgICAgICAgIHN1cGVyVHlwZSA9IG51bGwsXG4gICAgICAgICAgdHlwZSA9IG5ldyBUeXBlKG5hbWUsIHN1cGVyVHlwZSk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVHlwZU5hbWVBbmRTdXBlclR5cGUodHlwZU5hbWUsIHN1cGVyVHlwZSkge1xuICAgIGNvbnN0IG5hbWUgPSB0eXBlTmFtZSwgIC8vL1xuICAgICAgICAgIHR5cGUgPSBuZXcgVHlwZShuYW1lLCBzdXBlclR5cGUpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiVHlwZSIsIm5hbWUiLCJzdXBlclR5cGUiLCJnZXROYW1lIiwiZ2V0U3VwZXJUeXBlIiwiaXNFcXVhbFRvIiwidHlwZSIsImVxdWFsVG9UeXBlIiwiaXNTdWJUeXBlT2YiLCJzdWJUeXBlT2ZUeXBlIiwiaXNTdXBlclR5cGVPZiIsInN1cGVyVHlwZU9mVHlwZSIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwiZXF1YWxUb1R5cGVPclN1YlR5cGVPZiIsImlzRXF1YWxUb09yU3VwZXJUeXBlT2YiLCJlcXVhbFRvVHlwZU9yU3VwZXJUeXBlT2YiLCJpc0VxdWFsVG9TdWJUeXBlT2ZPclN1cGVyVHlwZU9mIiwiZXF1YWxUb1R5cGVTdWJUeXBlT2ZPclN1cGVyVHlwZU9mIiwibWF0Y2hOYW1lIiwibWF0Y2hlc05hbWUiLCJtYXRjaFR5cGVOYW1lIiwidHlwZU5hbWUiLCJtYXRjaGVzVHlwZU5hbWUiLCJhc1N0cmluZyIsIm5vU3VwZXJUeXBlIiwic3RyaW5nIiwic3VwZXJUeXBlTmFtZSIsImZyb21UeXBlTmFtZSIsImZyb21UeXBlTmFtZUFuZFN1cGVyVHlwZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFFcUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU4sSUFBQSxBQUFNQSxxQkFBTjthQUFNQSxLQUNQQyxJQUFJLEVBQUVDLFNBQVM7OEJBRFJGO1FBRWpCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTs7aUJBSEFGOztZQU1uQkcsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVU7Z0JBQ1IsT0FBTyxJQUFJLENBQUNGLElBQUk7WUFDbEI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZTtnQkFDYixPQUFPLElBQUksQ0FBQ0YsU0FBUztZQUN2Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVQyxJQUFJLEVBQUU7Z0JBQ2Qs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