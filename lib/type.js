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
                    var superTypeName = superType.getName(), superTypePresent = releaseContext.isTypePresentByTypeName(superTypeName);
                    if (!superTypePresent) {
                        var typeName = name; ///
                        throw new Error("The '".concat(typeName, "' type cannot be instantiated because its '").concat(superTypeName, "' super type is not present."));
                    }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90eXBlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBUWVBFX0tJTkQgfSBmcm9tIFwiLi9raW5kc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUeXBlIHtcbiAgY29uc3RydWN0b3IobmFtZSwgc3VwZXJUeXBlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnN1cGVyVHlwZSA9IHN1cGVyVHlwZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFN1cGVyVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBlclR5cGU7XG4gIH1cblxuICBpc0VxdWFsVG8odHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG9UeXBlID0gKHRoaXMgPT09IHR5cGUpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG9UeXBlO1xuICB9XG5cbiAgaXNTdWJUeXBlT2YodHlwZSkge1xuICAgIGxldCBzdWJUeXBlT2ZUeXBlID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5zdXBlclR5cGUgPT09IHR5cGUpIHtcbiAgICAgIHN1YlR5cGVPZlR5cGUgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5zdXBlclR5cGUgIT09IG51bGwpIHtcbiAgICAgICAgc3ViVHlwZU9mVHlwZSA9IHRoaXMuc3VwZXJUeXBlLmlzU3ViVHlwZU9mKHR5cGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdWJUeXBlT2ZUeXBlO1xuICB9XG5cbiAgaXNTdXBlclR5cGVPZih0eXBlKSB7XG4gICAgbGV0IHN1cGVyVHlwZU9mVHlwZSA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VwZXJUeXBlID0gdHlwZS5nZXRTdXBlclR5cGUoKTtcblxuICAgIGlmIChzdXBlclR5cGUgPT09IHRoaXMpIHtcbiAgICAgIHN1cGVyVHlwZU9mVHlwZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChzdXBlclR5cGUgIT09IG51bGwpIHtcbiAgICAgICAgc3VwZXJUeXBlT2ZUeXBlID0gc3VwZXJUeXBlLmlzU3VwZXJUeXBlT2YodGhpcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyVHlwZU9mVHlwZTtcbiAgfVxuXG4gIGlzRXF1YWxUb09yU3ViVHlwZU9mKHR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvVHlwZSA9IHRoaXMuaXNFcXVhbFRvKHR5cGUpLFxuICAgICAgICAgIHN1YlR5cGVPZlR5cGUgPSB0aGlzLmlzU3ViVHlwZU9mKHR5cGUpLFxuICAgICAgICAgIGVxdWFsVG9UeXBlT3JTdWJUeXBlT2YgPSAoZXF1YWxUb1R5cGUgfHwgc3ViVHlwZU9mVHlwZSk7XG5cbiAgICByZXR1cm4gZXF1YWxUb1R5cGVPclN1YlR5cGVPZjtcbiAgfVxuXG4gIGlzRXF1YWxUb09yU3VwZXJUeXBlT2YodHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG9UeXBlID0gdGhpcy5pc0VxdWFsVG8odHlwZSksXG4gICAgICAgICAgc3VwZXJUeXBlT2ZUeXBlID0gdGhpcy5pc1N1cGVyVHlwZU9mKHR5cGUpLFxuICAgICAgICAgIGVxdWFsVG9UeXBlT3JTdXBlclR5cGVPZiA9IChlcXVhbFRvVHlwZSB8fCBzdXBlclR5cGVPZlR5cGUpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG9UeXBlT3JTdXBlclR5cGVPZjtcbiAgfVxuXG4gIGlzRXF1YWxUb1N1YlR5cGVPZk9yU3VwZXJUeXBlT2YodHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG9UeXBlID0gdGhpcy5pc0VxdWFsVG8odHlwZSksXG4gICAgICAgICAgc3ViVHlwZU9mVHlwZSA9IHRoaXMuaXNTdWJUeXBlT2YodHlwZSksXG4gICAgICAgICAgc3VwZXJUeXBlT2ZUeXBlID0gdGhpcy5pc1N1cGVyVHlwZU9mKHR5cGUpLFxuICAgICAgICAgIGVxdWFsVG9UeXBlU3ViVHlwZU9mT3JTdXBlclR5cGVPZiA9IChlcXVhbFRvVHlwZSB8fCBzdWJUeXBlT2ZUeXBlIHx8IHN1cGVyVHlwZU9mVHlwZSk7XG5cbiAgICByZXR1cm4gZXF1YWxUb1R5cGVTdWJUeXBlT2ZPclN1cGVyVHlwZU9mO1xuICB9XG5cbiAgbWF0Y2hOYW1lKG5hbWUpIHtcbiAgICBjb25zdCBtYXRjaGVzTmFtZSA9ICh0aGlzLm5hbWUgPT09IG5hbWUpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNOYW1lO1xuICB9XG5cbiAgbWF0Y2hUeXBlTmFtZSh0eXBlTmFtZSkge1xuICAgIGNvbnN0IG1hdGNoZXNUeXBlTmFtZSA9ICh0aGlzLm5hbWUgPT09IHR5cGVOYW1lKTtcblxuICAgIHJldHVybiBtYXRjaGVzVHlwZU5hbWU7XG4gIH1cblxuICBhc1N0cmluZyhub1N1cGVyVHlwZSA9ICh0aGlzLnN1cGVyVHlwZSA9PT0gbnVsbCkpIHtcbiAgICBsZXQgc3RyaW5nO1xuXG4gICAgaWYgKG5vU3VwZXJUeXBlKSB7XG4gICAgICBzdHJpbmcgPSBgJHt0aGlzLm5hbWV9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlTmFtZSA9IHRoaXMuc3VwZXJUeXBlLmdldE5hbWUoKTtcblxuICAgICAgc3RyaW5nID0gYCR7dGhpcy5uYW1lfToke3N1cGVyVHlwZU5hbWV9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN1cGVyVHlwZUpTT04gPSAodGhpcy5zdXBlclR5cGUgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3VwZXJUeXBlLnRvSlNPTigpLFxuICAgICAgICAgIGtpbmQgPSBUWVBFX0tJTkQsXG4gICAgICAgICAgbmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICBzdXBlclR5cGUgPSBzdXBlclR5cGVKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGtpbmQsXG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgc3VwZXJUeXBlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIHJlbGVhc2VDb250ZXh0KSB7XG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uO1xuXG4gICAgbGV0IHsgc3VwZXJUeXBlIH0gPSBqc29uO1xuXG4gICAgaWYgKHN1cGVyVHlwZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlSlNPTiA9IHN1cGVyVHlwZTsgIC8vL1xuXG4gICAgICBqc29uID0gc3VwZXJUeXBlSlNPTjsgLy8vXG5cbiAgICAgIHN1cGVyVHlwZSA9IFR5cGUuZnJvbUpTT04oanNvbiwgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgICBjb25zdCBzdXBlclR5cGVOYW1lID0gc3VwZXJUeXBlLmdldE5hbWUoKSxcbiAgICAgICAgICAgIHN1cGVyVHlwZVByZXNlbnQgPSByZWxlYXNlQ29udGV4dC5pc1R5cGVQcmVzZW50QnlUeXBlTmFtZShzdXBlclR5cGVOYW1lKTtcblxuICAgICAgaWYgKCFzdXBlclR5cGVQcmVzZW50KSB7XG4gICAgICAgIGNvbnN0IHR5cGVOYW1lID0gbmFtZTsgIC8vL1xuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke3R5cGVOYW1lfScgdHlwZSBjYW5ub3QgYmUgaW5zdGFudGlhdGVkIGJlY2F1c2UgaXRzICcke3N1cGVyVHlwZU5hbWV9JyBzdXBlciB0eXBlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgICAgfVxuXG4gICAgICBzdXBlclR5cGUgPSByZWxlYXNlQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUoc3VwZXJUeXBlTmFtZSk7IC8vL1xuICAgIH1cblxuICAgIGNvbnN0IHR5cGUgPSBuZXcgVHlwZShuYW1lLCBzdXBlclR5cGUpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVR5cGVOYW1lKHR5cGVOYW1lKSB7XG4gICAgY29uc3QgbmFtZSA9IHR5cGVOYW1lLCAgLy8vXG4gICAgICAgICAgc3VwZXJUeXBlID0gbnVsbCxcbiAgICAgICAgICB0eXBlID0gbmV3IFR5cGUobmFtZSwgc3VwZXJUeXBlKTtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3RhdGljIGZyb21UeXBlTmFtZUFuZFN1cGVyVHlwZSh0eXBlTmFtZSwgc3VwZXJUeXBlKSB7XG4gICAgY29uc3QgbmFtZSA9IHR5cGVOYW1lLCAgLy8vXG4gICAgICAgICAgdHlwZSA9IG5ldyBUeXBlKG5hbWUsIHN1cGVyVHlwZSk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJUeXBlIiwibmFtZSIsInN1cGVyVHlwZSIsImdldE5hbWUiLCJnZXRTdXBlclR5cGUiLCJpc0VxdWFsVG8iLCJ0eXBlIiwiZXF1YWxUb1R5cGUiLCJpc1N1YlR5cGVPZiIsInN1YlR5cGVPZlR5cGUiLCJpc1N1cGVyVHlwZU9mIiwic3VwZXJUeXBlT2ZUeXBlIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJlcXVhbFRvVHlwZU9yU3ViVHlwZU9mIiwiaXNFcXVhbFRvT3JTdXBlclR5cGVPZiIsImVxdWFsVG9UeXBlT3JTdXBlclR5cGVPZiIsImlzRXF1YWxUb1N1YlR5cGVPZk9yU3VwZXJUeXBlT2YiLCJlcXVhbFRvVHlwZVN1YlR5cGVPZk9yU3VwZXJUeXBlT2YiLCJtYXRjaE5hbWUiLCJtYXRjaGVzTmFtZSIsIm1hdGNoVHlwZU5hbWUiLCJ0eXBlTmFtZSIsIm1hdGNoZXNUeXBlTmFtZSIsImFzU3RyaW5nIiwibm9TdXBlclR5cGUiLCJzdHJpbmciLCJzdXBlclR5cGVOYW1lIiwidG9KU09OIiwic3VwZXJUeXBlSlNPTiIsImtpbmQiLCJUWVBFX0tJTkQiLCJqc29uIiwiZnJvbUpTT04iLCJyZWxlYXNlQ29udGV4dCIsInN1cGVyVHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsIkVycm9yIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwiZnJvbVR5cGVOYW1lIiwiZnJvbVR5cGVOYW1lQW5kU3VwZXJUeXBlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQUlxQkE7OztxQkFGSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFWCxJQUFBLEFBQU1BLHFCQUFOO2FBQU1BLEtBQ1BDLElBQUksRUFBRUMsU0FBUzs4QkFEUkY7UUFFakIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxTQUFTLEdBQUdBOztpQkFIQUY7O1lBTW5CRyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVTtnQkFDUixPQUFPLElBQUksQ0FBQ0YsSUFBSTtZQUNsQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlO2dCQUNiLE9BQU8sSUFBSSxDQUFDRixTQUFTO1lBQ3ZCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVDLElBQUksRUFBRTtnQkFDZCxJQUFNQyxjQUFlLElBQUksS0FBS0Q7Z0JBRTlCLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsWUFBWUYsSUFBSSxFQUFFO2dCQUNoQixJQUFJRyxnQkFBZ0IsS0FBSztnQkFFekIsSUFBSSxJQUFJLENBQUNQLFNBQVMsS0FBS0ksTUFBTTtvQkFDM0JHLGdCQUFnQixJQUFJO2dCQUN0QixPQUFPO29CQUNMLElBQUksSUFBSSxDQUFDUCxTQUFTLEtBQUssSUFBSSxFQUFFO3dCQUMzQk8sZ0JBQWdCLElBQUksQ0FBQ1AsU0FBUyxDQUFDTSxXQUFXLENBQUNGO29CQUM3QyxDQUFDO2dCQUNILENBQUM7Z0JBRUQsT0FBT0c7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjSixJQUFJLEVBQUU7Z0JBQ2xCLElBQUlLLGtCQUFrQixLQUFLO2dCQUUzQixJQUFNVCxZQUFZSSxLQUFLRixZQUFZO2dCQUVuQyxJQUFJRixjQUFjLElBQUks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