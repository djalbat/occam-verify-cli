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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90eXBlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBUWVBFX0tJTkQgfSBmcm9tIFwiLi9raW5kc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUeXBlIHtcbiAgY29uc3RydWN0b3IobmFtZSwgc3VwZXJUeXBlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnN1cGVyVHlwZSA9IHN1cGVyVHlwZTtcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFN1cGVyVHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBlclR5cGU7XG4gIH1cblxuICBpc0VxdWFsVG8odHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG9UeXBlID0gKHRoaXMgPT09IHR5cGUpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG9UeXBlO1xuICB9XG5cbiAgaXNTdWJUeXBlT2YodHlwZSkge1xuICAgIGxldCBzdWJUeXBlT2ZUeXBlID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5zdXBlclR5cGUgPT09IHR5cGUpIHtcbiAgICAgIHN1YlR5cGVPZlR5cGUgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5zdXBlclR5cGUgIT09IG51bGwpIHtcbiAgICAgICAgc3ViVHlwZU9mVHlwZSA9IHRoaXMuc3VwZXJUeXBlLmlzU3ViVHlwZU9mKHR5cGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdWJUeXBlT2ZUeXBlO1xuICB9XG5cbiAgaXNTdXBlclR5cGVPZih0eXBlKSB7XG4gICAgbGV0IHN1cGVyVHlwZU9mVHlwZSA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VwZXJUeXBlID0gdHlwZS5nZXRTdXBlclR5cGUoKTtcblxuICAgIGlmIChzdXBlclR5cGUgPT09IHRoaXMpIHtcbiAgICAgIHN1cGVyVHlwZU9mVHlwZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChzdXBlclR5cGUgIT09IG51bGwpIHtcbiAgICAgICAgc3VwZXJUeXBlT2ZUeXBlID0gc3VwZXJUeXBlLmlzU3VwZXJUeXBlT2YodGhpcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyVHlwZU9mVHlwZTtcbiAgfVxuXG4gIGlzRXF1YWxUb09yU3ViVHlwZU9mKHR5cGUpIHtcbiAgICBjb25zdCBlcXVhbFRvVHlwZSA9IHRoaXMuaXNFcXVhbFRvKHR5cGUpLFxuICAgICAgICAgIHN1YlR5cGVPZlR5cGUgPSB0aGlzLmlzU3ViVHlwZU9mKHR5cGUpLFxuICAgICAgICAgIGVxdWFsVG9UeXBlT3JTdWJUeXBlT2YgPSAoZXF1YWxUb1R5cGUgfHwgc3ViVHlwZU9mVHlwZSk7XG5cbiAgICByZXR1cm4gZXF1YWxUb1R5cGVPclN1YlR5cGVPZjtcbiAgfVxuXG4gIGlzRXF1YWxUb09yU3VwZXJUeXBlT2YodHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG9UeXBlID0gdGhpcy5pc0VxdWFsVG8odHlwZSksXG4gICAgICAgICAgc3VwZXJUeXBlT2ZUeXBlID0gdGhpcy5pc1N1cGVyVHlwZU9mKHR5cGUpLFxuICAgICAgICAgIGVxdWFsVG9UeXBlT3JTdXBlclR5cGVPZiA9IChlcXVhbFRvVHlwZSB8fCBzdXBlclR5cGVPZlR5cGUpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG9UeXBlT3JTdXBlclR5cGVPZjtcbiAgfVxuXG4gIGlzRXF1YWxUb1N1YlR5cGVPZk9yU3VwZXJUeXBlT2YodHlwZSkge1xuICAgIGNvbnN0IGVxdWFsVG9UeXBlID0gdGhpcy5pc0VxdWFsVG8odHlwZSksXG4gICAgICAgICAgc3ViVHlwZU9mVHlwZSA9IHRoaXMuaXNTdWJUeXBlT2YodHlwZSksXG4gICAgICAgICAgc3VwZXJUeXBlT2ZUeXBlID0gdGhpcy5pc1N1cGVyVHlwZU9mKHR5cGUpLFxuICAgICAgICAgIGVxdWFsVG9UeXBlU3ViVHlwZU9mT3JTdXBlclR5cGVPZiA9IChlcXVhbFRvVHlwZSB8fCBzdWJUeXBlT2ZUeXBlIHx8IHN1cGVyVHlwZU9mVHlwZSk7XG5cbiAgICByZXR1cm4gZXF1YWxUb1R5cGVTdWJUeXBlT2ZPclN1cGVyVHlwZU9mO1xuICB9XG5cbiAgbWF0Y2hOYW1lKG5hbWUpIHtcbiAgICBjb25zdCBtYXRjaGVzTmFtZSA9ICh0aGlzLm5hbWUgPT09IG5hbWUpO1xuXG4gICAgcmV0dXJuIG1hdGNoZXNOYW1lO1xuICB9XG5cbiAgbWF0Y2hUeXBlTmFtZSh0eXBlTmFtZSkge1xuICAgIGNvbnN0IG1hdGNoZXNUeXBlTmFtZSA9ICh0aGlzLm5hbWUgPT09IHR5cGVOYW1lKTtcblxuICAgIHJldHVybiBtYXRjaGVzVHlwZU5hbWU7XG4gIH1cblxuICBhc1N0cmluZyhub1N1cGVyVHlwZSA9ICh0aGlzLnN1cGVyVHlwZSA9PT0gbnVsbCkpIHtcbiAgICBsZXQgc3RyaW5nO1xuXG4gICAgaWYgKG5vU3VwZXJUeXBlKSB7XG4gICAgICBzdHJpbmcgPSBgJHt0aGlzLm5hbWV9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlTmFtZSA9IHRoaXMuc3VwZXJUeXBlLmdldE5hbWUoKTtcblxuICAgICAgc3RyaW5nID0gYCR7dGhpcy5uYW1lfToke3N1cGVyVHlwZU5hbWV9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN1cGVyVHlwZUpTT04gPSAodGhpcy5zdXBlclR5cGUgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3VwZXJUeXBlLnRvSlNPTigpLFxuICAgICAgICAgIGtpbmQgPSBUWVBFX0tJTkQsXG4gICAgICAgICAgbmFtZSA9IHRoaXMubmFtZSxcbiAgICAgICAgICBzdXBlclR5cGUgPSBzdXBlclR5cGVKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGtpbmQsXG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgc3VwZXJUeXBlXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIHJlbGVhc2VDb250ZXh0KSB7XG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uO1xuXG4gICAgbGV0IHsgc3VwZXJUeXBlIH0gPSBqc29uO1xuXG4gICAgaWYgKHN1cGVyVHlwZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3VwZXJUeXBlSlNPTiA9IHN1cGVyVHlwZTsgIC8vL1xuXG4gICAgICBqc29uID0gc3VwZXJUeXBlSlNPTjsgLy8vXG5cbiAgICAgIHN1cGVyVHlwZSA9IFR5cGUuZnJvbUpTT04oanNvbiwgcmVsZWFzZUNvbnRleHQpO1xuXG4gICAgICBjb25zdCBzdXBlclR5cGVOYW1lID0gc3VwZXJUeXBlLmdldE5hbWUoKTtcblxuICAgICAgc3VwZXJUeXBlID0gcmVsZWFzZUNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHN1cGVyVHlwZU5hbWUpOyAvLy9cbiAgICB9XG5cbiAgICBjb25zdCB0eXBlID0gbmV3IFR5cGUobmFtZSwgc3VwZXJUeXBlKTtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3RhdGljIGZyb21UeXBlTmFtZSh0eXBlTmFtZSkge1xuICAgIGNvbnN0IG5hbWUgPSB0eXBlTmFtZSwgIC8vL1xuICAgICAgICAgIHN1cGVyVHlwZSA9IG51bGwsXG4gICAgICAgICAgdHlwZSA9IG5ldyBUeXBlKG5hbWUsIHN1cGVyVHlwZSk7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVHlwZU5hbWVBbmRTdXBlclR5cGUodHlwZU5hbWUsIHN1cGVyVHlwZSkge1xuICAgIGNvbnN0IG5hbWUgPSB0eXBlTmFtZSwgIC8vL1xuICAgICAgICAgIHR5cGUgPSBuZXcgVHlwZShuYW1lLCBzdXBlclR5cGUpO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiVHlwZSIsIm5hbWUiLCJzdXBlclR5cGUiLCJnZXROYW1lIiwiZ2V0U3VwZXJUeXBlIiwiaXNFcXVhbFRvIiwidHlwZSIsImVxdWFsVG9UeXBlIiwiaXNTdWJUeXBlT2YiLCJzdWJUeXBlT2ZUeXBlIiwiaXNTdXBlclR5cGVPZiIsInN1cGVyVHlwZU9mVHlwZSIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwiZXF1YWxUb1R5cGVPclN1YlR5cGVPZiIsImlzRXF1YWxUb09yU3VwZXJUeXBlT2YiLCJlcXVhbFRvVHlwZU9yU3VwZXJUeXBlT2YiLCJpc0VxdWFsVG9TdWJUeXBlT2ZPclN1cGVyVHlwZU9mIiwiZXF1YWxUb1R5cGVTdWJUeXBlT2ZPclN1cGVyVHlwZU9mIiwibWF0Y2hOYW1lIiwibWF0Y2hlc05hbWUiLCJtYXRjaFR5cGVOYW1lIiwidHlwZU5hbWUiLCJtYXRjaGVzVHlwZU5hbWUiLCJhc1N0cmluZyIsIm5vU3VwZXJUeXBlIiwic3RyaW5nIiwic3VwZXJUeXBlTmFtZSIsInRvSlNPTiIsInN1cGVyVHlwZUpTT04iLCJraW5kIiwiVFlQRV9LSU5EIiwianNvbiIsImZyb21KU09OIiwicmVsZWFzZUNvbnRleHQiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJmcm9tVHlwZU5hbWUiLCJmcm9tVHlwZU5hbWVBbmRTdXBlclR5cGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7O3FCQUZLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVYLElBQUEsQUFBTUEscUJBQU47YUFBTUEsS0FDUEMsSUFBSSxFQUFFQyxTQUFTOzhCQURSRjtRQUVqQixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFNBQVMsR0FBR0E7O2lCQUhBRjs7WUFNbkJHLEtBQUFBO21CQUFBQSxTQUFBQSxVQUFVO2dCQUNSLE9BQU8sSUFBSSxDQUFDRixJQUFJO1lBQ2xCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWU7Z0JBQ2IsT0FBTyxJQUFJLENBQUNGLFNBQVM7WUFDdkI7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVUMsSUFBSSxFQUFFO2dCQUNkLElBQU1DLGNBQWUsSUFBSSxLQUFLRDtnQkFFOUIsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxZQUFZRixJQUFJLEVBQUU7Z0JBQ2hCLElBQUlHLGdCQUFnQixLQUFLO2dCQUV6QixJQUFJLElBQUksQ0FBQ1AsU0FBUyxLQUFLSSxNQUFNO29CQUMzQkcsZ0JBQWdCLElBQUk7Z0JBQ3RCLE9BQU87b0JBQ0wsSUFBSSxJQUFJLENBQUNQLFNBQVMsS0FBSyxJQUFJLEVBQUU7d0JBQzNCTyxnQkFBZ0IsSUFBSSxDQUFDUCxTQUFTLENBQUNNLFdBQVcsQ0FBQ0Y7b0JBQzdDLENBQUM7Z0JBQ0gsQ0FBQztnQkFFRCxPQUFPRztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWNKLElBQUksRUFBRTtnQkFDbEIsSUFBSUssa0JBQWtCLEtBQUs7Z0JBRTNCLElBQU1ULFlBQVlJLEtBQUtGLFlBQVk7Z0JBRW5DLElBQUlGLGNBQWMsSUFBSSxFQUFFO29CQUN0QlMsa0JBQWtCLElBQUk7Z0JBQ3hCLE9BQU87b0JBQ0wsSUFBSVQsY0FBYyxJQUFJLEVBQUU7d0JBQ3RCUyxrQkFBa0JULFVBQVVRLGFBQWEsQ0FBQyxJQUFJO29CQUNoRCxDQUFDO2dCQUNILENBQUM7Z0JBRUQsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxxQkFBcUJOLElBQUksRUFBRTtnQkFDekIsSUFBTUMsY0FBYyxJQUFJLENBQUNGLFNBQVMsQ0FBQ0MsT0FDN0JHLGdCQUFnQixJQUFJLENBQUNELFdBQVcsQ0FBQ0YsT0FDakNPLHlCQUEwQk4sZUFBZUU7Z0JBRS9DLE9BQU9JO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsdUJBQXVCUixJQUFJLEVBQUU7Z0JBQzNCLElBQU1DLGNBQWMsSUFBSSxDQUFDRixTQUFTLENBQUNDLE9BQzdCSyxrQkFBa0IsSUFBSSxDQUFDRCxhQUFhLENBQUNKLE9BQ3JDUywyQkFBNEJSLGVBQWVJO2dCQUVqRCxPQUFPSTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGdDQUFnQ1YsSUFBSSxFQUFFO2dCQUNwQyxJQUFNQyxjQUFjLElBQUksQ0FBQ0YsU0FBUyxDQUFDQyxPQUM3QkcsZ0JBQWdCLElBQUksQ0FBQ0QsV0FBVyxDQUFDRixPQUNqQ0ssa0JBQWtCLElBQUksQ0FBQ0QsYUFBYSxDQUFDSixPQUNyQ1csb0NBQXFDVixlQUFlRSxpQkFBaUJFO2dCQUUzRSxPQUFPTTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFVBQVVqQixJQUFJLEVBQUU7Z0JBQ2QsSUFBTWtCLGNBQWUsSUFBSSxDQUFDbEIsSUFBSSxLQUFLQTtnQkFFbkMsT0FBT2tCO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsY0FBY0MsUUFBUSxFQUFFO2dCQUN0QixJQUFNQyxrQkFBbUIsSUFBSSxDQUFDckIsSUFBSSxLQUFLb0I7Z0JBRXZDLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsV0FBa0Q7b0JBQXpDQyxjQUFBQSxpRUFBZSxJQUFJLENBQUN0QixTQUFTLEtBQUssSUFBSSxBQUFDO2dCQUM5QyxJQUFJdUI7Z0JBRUosSUFBSUQsYUFBYTtvQkFDZkMsU0FBUyxBQUFDLEdBQVksT0FBVixJQUFJLENBQUN4QixJQUFJO2dCQUN2QixPQUFPO29CQUNMLElBQU15QixnQkFBZ0IsSUFBSSxDQUFDeEIsU0FBUyxDQUFDQyxPQUFPO29CQUU1Q3NCLFNBQVMsQUFBQyxHQUFlQyxPQUFiLElBQUksQ0FBQ3pCLElBQUksRUFBQyxLQUFpQixPQUFkeUI7Z0JBQzNCLENBQUM7Z0JBRUQsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxTQUFTO2dCQUNQLElBQU1DLGdCQUFnQixBQUFDLElBQUksQ0FBQzFCLFNBQVMsS0FBSyxJQUFJLEdBQ3RCLElBQUksR0FDRixJQUFJLENBQUNBLFNBQVMsQ0FBQ3lCLE1BQU0sRUFBRSxFQUMzQ0UsT0FBT0MsZ0JBQVMsRUFDaEI3QixPQUFPLElBQUksQ0FBQ0EsSUFBSSxFQUNoQkMsWUFBWTBCLGVBQ1pHLE9BQU87b0JBQ0xGLE1BQUFBO29CQUNBNUIsTUFBQUE7b0JBQ0FDLFdBQUFBO2dCQUNGO2dCQUVOLE9BQU82QjtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNELElBQUksRUFBRUUsY0FBYyxFQUFFO2dCQUNwQyxJQUFNLEFBQUVoQyxPQUFTOEIsS0FBVDlCO2dCQUVSLElBQUksQUFBRUMsWUFBYzZCLEtBQWQ3QjtnQkFFTixJQUFJQSxjQUFjLElBQUksRUFBRTtvQkFDdEIsSUFBTTBCLGdCQUFnQjFCLFdBQVksR0FBRztvQkFFckM2QixPQUFPSCxlQUFlLEdBQUc7b0JBRXpCMUIsWUFBWUYsQUEvSEdBLEtBK0hFZ0MsUUFBUSxDQUFDRCxNQUFNRTtvQkFFaEMsSUFBTVAsZ0JBQWdCeEIsVUFBVUMsT0FBTztvQkFFdkNELFlBQVkrQixlQUFlQyxrQkFBa0IsQ0FBQ1IsZ0JBQWdCLEdBQUc7Z0JBQ25FLENBQUM7Z0JBRUQsSUFBTXBCLE9BQU8sSUF0SUlOLEtBc0lLQyxNQUFNQztnQkFFNUIsT0FBT0k7WUFDVDs7O1lBRU82QixLQUFBQTttQkFBUCxTQUFPQSxhQUFhZCxRQUFRLEVBQUU7Z0JBQzVCLElBQU1wQixPQUFPb0IsVUFDUG5CLFlBQVksSUFBSSxFQUNoQkksT0FBTyxJQTlJSU4sS0E4SUtDLE1BQU1DO2dCQUU1QixPQUFPSTtZQUNUOzs7WUFFTzhCLEtBQUFBO21CQUFQLFNBQU9BLHlCQUF5QmYsUUFBUSxFQUFFbkIsU0FBUyxFQUFFO2dCQUNuRCxJQUFNRCxPQUFPb0IsVUFDUGYsT0FBTyxJQXJKSU4sS0FxSktDLE1BQU1DO2dCQUU1QixPQUFPSTtZQUNUOzs7V0F4Sm1CTiJ9