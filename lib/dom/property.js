"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../dom"));
var _json = require("../utilities/json");
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
var _Property;
var _default = (0, _dom.domAssigned)((_Property = /*#__PURE__*/ function() {
    function Property(string, name, type) {
        _class_call_check(this, Property);
        this.string = string;
        this.name = name;
        this.type = type;
    }
    _create_class(Property, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getName",
            value: function getName() {
                return this.name;
            }
        },
        {
            key: "getType",
            value: function getType() {
                return this.type;
            }
        },
        {
            key: "setType",
            value: function setType(type) {
                this.type = type;
            }
        },
        {
            key: "matchPropertyName",
            value: function matchPropertyName(propertyName) {
                var propertyNameMatches = this.name === propertyName;
                return propertyNameMatches;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var typeJSON = (0, _json.typeToTypeJSON)(this.type), name = this.name, type = typeJSON, json = {
                    type: type,
                    name: name
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                var name = json.name, type = (0, _json.typeFromJSON)(json, fileContext), string = name, property = new Property(string, name, type);
                return property;
            }
        },
        {
            key: "fromPropertyNode",
            value: function fromPropertyNode(propertyNode, fileContext) {
                var property = propertyFromPropertyNode(propertyNode, fileContext);
                return property;
            }
        },
        {
            key: "fromPropertyRelationNode",
            value: function fromPropertyRelationNode(propertyRelationNode, fileContext) {
                var propertyNode = propertyRelationNode.getPropertyNode(), property = propertyFromPropertyNode(propertyNode, fileContext);
                return property;
            }
        },
        {
            key: "fromPropertyDeclarationNode",
            value: function fromPropertyDeclarationNode(propertyDeclarationNode, fileContext) {
                var Type = _dom.default.Type, type = Type.fromPropertyDeclarationNode(propertyDeclarationNode), propertyName = propertyDeclarationNode.getPropertyName(), name = propertyName, string = name, property = new Property(string, name, type);
                return property;
            }
        }
    ]);
    return Property;
}(), _define_property(_Property, "name", "Property"), _Property));
function propertyFromPropertyNode(propertyNode, fileContext) {
    var Property = _dom.default.Property, name = propertyNode.getName(), type = null, string = name, property = new Property(string, name, type);
    return property;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcHJvcGVydHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IHR5cGVGcm9tSlNPTiwgdHlwZVRvVHlwZUpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgUHJvcGVydHkge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5hbWUsIHR5cGUpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgc2V0VHlwZSh0eXBlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIG1hdGNoUHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZSkge1xuICAgIGNvbnN0IHByb3BlcnR5TmFtZU1hdGNoZXMgPSAodGhpcy5uYW1lID09PSBwcm9wZXJ0eU5hbWUpO1xuXG4gICAgcmV0dXJuIHByb3BlcnR5TmFtZU1hdGNoZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgdHlwZUpTT04gPSB0eXBlVG9UeXBlSlNPTih0aGlzLnR5cGUpLFxuICAgICAgICAgIG5hbWUgPSB0aGlzLm5hbWUsIC8vL1xuICAgICAgICAgIHR5cGUgPSB0eXBlSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgbmFtZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9wZXJ0eVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0ganNvbixcbiAgICAgICAgICB0eXBlID0gdHlwZUZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBuYW1lLCAvLy9cbiAgICAgICAgICBwcm9wZXJ0eSA9IG5ldyBQcm9wZXJ0eShzdHJpbmcsIG5hbWUsIHR5cGUpO1xuXG4gICAgcmV0dXJuIHByb3BlcnR5O1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0eU5vZGUocHJvcGVydHlOb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHByb3BlcnR5ID0gcHJvcGVydHlGcm9tUHJvcGVydHlOb2RlKHByb3BlcnR5Tm9kZSwgZmlsZUNvbnRleHQpXG5cbiAgICByZXR1cm4gcHJvcGVydHk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHByb3BlcnR5Tm9kZSA9IHByb3BlcnR5UmVsYXRpb25Ob2RlLmdldFByb3BlcnR5Tm9kZSgpLFxuICAgICAgICAgIHByb3BlcnR5ID0gcHJvcGVydHlGcm9tUHJvcGVydHlOb2RlKHByb3BlcnR5Tm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHByb3BlcnR5O1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0eURlY2xhcmF0aW9uTm9kZShwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IFR5cGUgfSA9IGRvbSxcbiAgICAgICAgICB0eXBlID0gVHlwZS5mcm9tUHJvcGVydHlEZWNsYXJhdGlvbk5vZGUocHJvcGVydHlEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgIHByb3BlcnR5TmFtZSA9IHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlLmdldFByb3BlcnR5TmFtZSgpLFxuICAgICAgICAgIG5hbWUgPSBwcm9wZXJ0eU5hbWUsICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgcHJvcGVydHkgPSBuZXcgUHJvcGVydHkoc3RyaW5nLCBuYW1lLCB0eXBlKTtcblxuICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHByb3BlcnR5RnJvbVByb3BlcnR5Tm9kZShwcm9wZXJ0eU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvcGVydHkgfSA9IGRvbSxcbiAgICAgICAgbmFtZSA9IHByb3BlcnR5Tm9kZS5nZXROYW1lKCksXG4gICAgICAgIHR5cGUgPSBudWxsLFxuICAgICAgICBzdHJpbmcgPSBuYW1lLCAgLy8vXG4gICAgICAgIHByb3BlcnR5ID0gbmV3IFByb3BlcnR5KHN0cmluZywgbmFtZSwgdHlwZSk7XG5cbiAgcmV0dXJuIHByb3BlcnR5O1xufVxuIl0sIm5hbWVzIjpbImRvbUFzc2lnbmVkIiwiUHJvcGVydHkiLCJzdHJpbmciLCJuYW1lIiwidHlwZSIsImdldFN0cmluZyIsImdldE5hbWUiLCJnZXRUeXBlIiwic2V0VHlwZSIsIm1hdGNoUHJvcGVydHlOYW1lIiwicHJvcGVydHlOYW1lIiwicHJvcGVydHlOYW1lTWF0Y2hlcyIsInRvSlNPTiIsInR5cGVKU09OIiwidHlwZVRvVHlwZUpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJmaWxlQ29udGV4dCIsInR5cGVGcm9tSlNPTiIsInByb3BlcnR5IiwiZnJvbVByb3BlcnR5Tm9kZSIsInByb3BlcnR5Tm9kZSIsInByb3BlcnR5RnJvbVByb3BlcnR5Tm9kZSIsImZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZSIsInByb3BlcnR5UmVsYXRpb25Ob2RlIiwiZ2V0UHJvcGVydHlOb2RlIiwiZnJvbVByb3BlcnR5RGVjbGFyYXRpb25Ob2RlIiwicHJvcGVydHlEZWNsYXJhdGlvbk5vZGUiLCJUeXBlIiwiZG9tIiwiZ2V0UHJvcGVydHlOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQUE7OzsyREFMZ0I7b0JBRzZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFN0MsV0FBZUEsSUFBQUEsZ0JBQVcsNkJBQUM7YUFBTUMsU0FDbkJDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJO2dDQURDSDtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLElBQUksR0FBR0E7Ozs7WUFHZEMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxJQUFJO1lBQ2xCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxJQUFJO1lBQ2xCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFKLElBQUk7Z0JBQ1YsSUFBSSxDQUFDQSxJQUFJLEdBQUdBO1lBQ2Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCQyxZQUFZO2dCQUM1QixJQUFNQyxzQkFBdUIsSUFBSSxDQUFDUixJQUFJLEtBQUtPO2dCQUUzQyxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVdDLElBQUFBLG9CQUFjLEVBQUMsSUFBSSxDQUFDVixJQUFJLEdBQ25DRCxPQUFPLElBQUksQ0FBQ0EsSUFBSSxFQUNoQkMsT0FBT1MsVUFDUEUsT0FBTztvQkFDTFgsTUFBQUE7b0JBQ0FELE1BQUFBO2dCQUNGO2dCQUVOLE9BQU9ZO1lBQ1Q7Ozs7WUFJT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0QsSUFBSSxFQUFFRSxXQUFXO2dCQUMvQixJQUFNLEFBQUVkLE9BQVNZLEtBQVRaLE1BQ0ZDLE9BQU9jLElBQUFBLGtCQUFZLEVBQUNILE1BQU1FLGNBQzFCZixTQUFTQyxNQUNUZ0IsV0FBVyxJQUFJbEIsU0FBU0MsUUFBUUMsTUFBTUM7Z0JBRTVDLE9BQU9lO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxpQkFBaUJDLFlBQVksRUFBRUosV0FBVztnQkFDL0MsSUFBTUUsV0FBV0cseUJBQXlCRCxjQUFjSjtnQkFFeEQsT0FBT0U7WUFDVDs7O1lBRU9JLEtBQUFBO21CQUFQLFNBQU9BLHlCQUF5QkMsb0JBQW9CLEVBQUVQLFdBQVc7Z0JBQy9ELElBQU1JLGVBQWVHLHFCQUFxQkMsZUFBZSxJQUNuRE4sV0FBV0cseUJBQXlCRCxjQUFjSjtnQkFFeEQsT0FBT0U7WUFDVDs7O1lBRU9PLEtBQUFBO21CQUFQLFNBQU9BLDRCQUE0QkMsdUJBQXVCLEVBQUVWLFdBQVc7Z0JBQ3JFLElBQU0sQUFBRVcsT0FBU0MsWUFBRyxDQUFaRCxNQUNGeEIsT0FBT3dCLEtBQUtGLDJCQUEyQixDQUFDQywwQkFDeENqQixlQUFlaUIsd0JBQXdCRyxlQUFlLElBQ3REM0IsT0FBT08sY0FDUFIsU0FBU0MsTUFDVGdCLFdBQVcsSUFBSWxCLFNBQVNDLFFBQVFDLE1BQU1DO2dCQUU1QyxPQUFPZTtZQUNUOzs7O0tBakNBLDRCQUFPaEIsUUFBTztBQW9DaEIsU0FBU21CLHlCQUF5QkQsWUFBWSxFQUFFSixXQUFXO0lBQ3pELElBQU0sQUFBRWhCLFdBQWE0QixZQUFHLENBQWhCNUIsVUFDRkUsT0FBT2tCLGFBQWFmLE9BQU8sSUFDM0JGLE9BQU8sTUFDUEYsU0FBU0MsTUFDVGdCLFdBQVcsSUFBSWxCLFNBQVNDLFFBQVFDLE1BQU1DO0lBRTVDLE9BQU9lO0FBQ1QifQ==