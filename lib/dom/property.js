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
    function Property(string, type, name, identifier) {
        _class_call_check(this, Property);
        this.string = string;
        this.type = type;
        this.identifier = identifier;
    }
    _create_class(Property, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getType",
            value: function getType() {
                return this.type;
            }
        },
        {
            key: "getIdentifier",
            value: function getIdentifier() {
                return this.identifier;
            }
        },
        {
            key: "setType",
            value: function setType(type) {
                this.type = type;
            }
        },
        {
            key: "matchTypeName",
            value: function matchTypeName(typeName) {
                return this.type.matchTypeName(typeName);
            }
        },
        {
            key: "matchPropertyIdentifier",
            value: function matchPropertyIdentifier(propertyIdentifier) {
                var propertyIdentifierMatches = this.identifier === propertyIdentifier;
                return propertyIdentifierMatches;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var typeJSON = (0, _json.typeToTypeJSON)(this.type), identifier = this.identifier, type = typeJSON, json = {
                    type: type,
                    identifier: identifier
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, context) {
                var identifier = json.identifier, type = (0, _json.typeFromJSON)(json, context), string = identifier, property = new Property(string, type, identifier);
                return property;
            }
        },
        {
            key: "fromPropertyNode",
            value: function fromPropertyNode(propertyNode, context) {
                var property = propertyFromPropertyNode(propertyNode, context);
                return property;
            }
        },
        {
            key: "fromPropertyRelationNode",
            value: function fromPropertyRelationNode(propertyRelationNode, context) {
                var propertyNode = propertyRelationNode.getPropertyNode(), property = propertyFromPropertyNode(propertyNode, context);
                return property;
            }
        },
        {
            key: "fromPropertyDeclarationNode",
            value: function fromPropertyDeclarationNode(propertyDeclarationNode, context) {
                var Type = _dom.default.Type, type = Type.fromPropertyDeclarationNode(propertyDeclarationNode), propertyIdentifier = propertyDeclarationNode.getPropertyIdentifier(), identifier = propertyIdentifier, string = identifier, property = new Property(string, type, identifier);
                return property;
            }
        }
    ]);
    return Property;
}(), _define_property(_Property, "name", "Property"), _Property));
function propertyFromPropertyNode(propertyNode, context) {
    var Property = _dom.default.Property, propertyIdentifier = propertyNode.getPropertyIdentifier(), identifier = propertyIdentifier, type = null, string = identifier, property = new Property(string, type, identifier);
    return property;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcHJvcGVydHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IHR5cGVGcm9tSlNPTiwgdHlwZVRvVHlwZUpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgUHJvcGVydHkge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHR5cGUsIG5hbWUsIGlkZW50aWZpZXIpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuaWRlbnRpZmllciA9IGlkZW50aWZpZXI7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0SWRlbnRpZmllcigpIHtcbiAgICByZXR1cm4gdGhpcy5pZGVudGlmaWVyO1xuICB9XG5cbiAgc2V0VHlwZSh0eXBlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIG1hdGNoVHlwZU5hbWUodHlwZU5hbWUpIHsgcmV0dXJuIHRoaXMudHlwZS5tYXRjaFR5cGVOYW1lKHR5cGVOYW1lKTsgfVxuXG4gIG1hdGNoUHJvcGVydHlJZGVudGlmaWVyKHByb3BlcnR5SWRlbnRpZmllcikge1xuICAgIGNvbnN0IHByb3BlcnR5SWRlbnRpZmllck1hdGNoZXMgPSAodGhpcy5pZGVudGlmaWVyID09PSBwcm9wZXJ0eUlkZW50aWZpZXIpO1xuXG4gICAgcmV0dXJuIHByb3BlcnR5SWRlbnRpZmllck1hdGNoZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgdHlwZUpTT04gPSB0eXBlVG9UeXBlSlNPTih0aGlzLnR5cGUpLFxuICAgICAgICAgIGlkZW50aWZpZXIgPSB0aGlzLmlkZW50aWZpZXIsIC8vL1xuICAgICAgICAgIHR5cGUgPSB0eXBlSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgaWRlbnRpZmllclxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9wZXJ0eVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBpZGVudGlmaWVyIH0gPSBqc29uLFxuICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gaWRlbnRpZmllciwgLy8vXG4gICAgICAgICAgcHJvcGVydHkgPSBuZXcgUHJvcGVydHkoc3RyaW5nLCB0eXBlLCBpZGVudGlmaWVyKTtcblxuICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydHlOb2RlKHByb3BlcnR5Tm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHByb3BlcnR5ID0gcHJvcGVydHlGcm9tUHJvcGVydHlOb2RlKHByb3BlcnR5Tm9kZSwgY29udGV4dClcblxuICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUocHJvcGVydHlSZWxhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBwcm9wZXJ0eU5vZGUgPSBwcm9wZXJ0eVJlbGF0aW9uTm9kZS5nZXRQcm9wZXJ0eU5vZGUoKSxcbiAgICAgICAgICBwcm9wZXJ0eSA9IHByb3BlcnR5RnJvbVByb3BlcnR5Tm9kZShwcm9wZXJ0eU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHByb3BlcnR5O1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0eURlY2xhcmF0aW9uTm9kZShwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgVHlwZSB9ID0gZG9tLFxuICAgICAgICAgIHR5cGUgPSBUeXBlLmZyb21Qcm9wZXJ0eURlY2xhcmF0aW9uTm9kZShwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgICAgcHJvcGVydHlJZGVudGlmaWVyID0gcHJvcGVydHlEZWNsYXJhdGlvbk5vZGUuZ2V0UHJvcGVydHlJZGVudGlmaWVyKCksXG4gICAgICAgICAgaWRlbnRpZmllciA9IHByb3BlcnR5SWRlbnRpZmllciwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGlkZW50aWZpZXIsICAvLy9cbiAgICAgICAgICBwcm9wZXJ0eSA9IG5ldyBQcm9wZXJ0eShzdHJpbmcsIHR5cGUsIGlkZW50aWZpZXIpO1xuXG4gICAgcmV0dXJuIHByb3BlcnR5O1xuICB9XG59KTtcblxuZnVuY3Rpb24gcHJvcGVydHlGcm9tUHJvcGVydHlOb2RlKHByb3BlcnR5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByb3BlcnR5IH0gPSBkb20sXG4gICAgICAgIHByb3BlcnR5SWRlbnRpZmllciA9IHByb3BlcnR5Tm9kZS5nZXRQcm9wZXJ0eUlkZW50aWZpZXIoKSxcbiAgICAgICAgaWRlbnRpZmllciA9IHByb3BlcnR5SWRlbnRpZmllciwgIC8vL1xuICAgICAgICB0eXBlID0gbnVsbCxcbiAgICAgICAgc3RyaW5nID0gaWRlbnRpZmllciwgIC8vL1xuICAgICAgICBwcm9wZXJ0eSA9IG5ldyBQcm9wZXJ0eShzdHJpbmcsIHR5cGUsIGlkZW50aWZpZXIpO1xuXG4gIHJldHVybiBwcm9wZXJ0eTtcbn1cbiJdLCJuYW1lcyI6WyJkb21Bc3NpZ25lZCIsIlByb3BlcnR5Iiwic3RyaW5nIiwidHlwZSIsIm5hbWUiLCJpZGVudGlmaWVyIiwiZ2V0U3RyaW5nIiwiZ2V0VHlwZSIsImdldElkZW50aWZpZXIiLCJzZXRUeXBlIiwibWF0Y2hUeXBlTmFtZSIsInR5cGVOYW1lIiwibWF0Y2hQcm9wZXJ0eUlkZW50aWZpZXIiLCJwcm9wZXJ0eUlkZW50aWZpZXIiLCJwcm9wZXJ0eUlkZW50aWZpZXJNYXRjaGVzIiwidG9KU09OIiwidHlwZUpTT04iLCJ0eXBlVG9UeXBlSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImNvbnRleHQiLCJ0eXBlRnJvbUpTT04iLCJwcm9wZXJ0eSIsImZyb21Qcm9wZXJ0eU5vZGUiLCJwcm9wZXJ0eU5vZGUiLCJwcm9wZXJ0eUZyb21Qcm9wZXJ0eU5vZGUiLCJmcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUiLCJwcm9wZXJ0eVJlbGF0aW9uTm9kZSIsImdldFByb3BlcnR5Tm9kZSIsImZyb21Qcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSIsInByb3BlcnR5RGVjbGFyYXRpb25Ob2RlIiwiVHlwZSIsImRvbSIsImdldFByb3BlcnR5SWRlbnRpZmllciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFBOzs7MkRBTGdCO29CQUc2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTdDLFdBQWVBLElBQUFBLGdCQUFXLDZCQUFDO2FBQU1DLFNBQ25CQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxVQUFVO2dDQURYSjtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNFLFVBQVUsR0FBR0E7Ozs7WUFHcEJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osTUFBTTtZQUNwQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osSUFBSTtZQUNsQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsVUFBVTtZQUN4Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRTixJQUFJO2dCQUNWLElBQUksQ0FBQ0EsSUFBSSxHQUFHQTtZQUNkOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWNDLFFBQVE7Z0JBQUksT0FBTyxJQUFJLENBQUNSLElBQUksQ0FBQ08sYUFBYSxDQUFDQztZQUFXOzs7WUFFcEVDLEtBQUFBO21CQUFBQSxTQUFBQSx3QkFBd0JDLGtCQUFrQjtnQkFDeEMsSUFBTUMsNEJBQTZCLElBQUksQ0FBQ1QsVUFBVSxLQUFLUTtnQkFFdkQsT0FBT0M7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxXQUFXQyxJQUFBQSxvQkFBYyxFQUFDLElBQUksQ0FBQ2QsSUFBSSxHQUNuQ0UsYUFBYSxJQUFJLENBQUNBLFVBQVUsRUFDNUJGLE9BQU9hLFVBQ1BFLE9BQU87b0JBQ0xmLE1BQUFBO29CQUNBRSxZQUFBQTtnQkFDRjtnQkFFTixPQUFPYTtZQUNUOzs7O1lBSU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNELElBQUksRUFBRUUsT0FBTztnQkFDM0IsSUFBTSxBQUFFZixhQUFlYSxLQUFmYixZQUNGRixPQUFPa0IsSUFBQUEsa0JBQVksRUFBQ0gsTUFBTUUsVUFDMUJsQixTQUFTRyxZQUNUaUIsV0FBVyxJQUFJckIsU0FBU0MsUUFBUUMsTUFBTUU7Z0JBRTVDLE9BQU9pQjtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsaUJBQWlCQyxZQUFZLEVBQUVKLE9BQU87Z0JBQzNDLElBQU1FLFdBQVdHLHlCQUF5QkQsY0FBY0o7Z0JBRXhELE9BQU9FO1lBQ1Q7OztZQUVPSSxLQUFBQTttQkFBUCxTQUFPQSx5QkFBeUJDLG9CQUFvQixFQUFFUCxPQUFPO2dCQUMzRCxJQUFNSSxlQUFlRyxxQkFBcUJDLGVBQWUsSUFDbkROLFdBQVdHLHlCQUF5QkQsY0FBY0o7Z0JBRXhELE9BQU9FO1lBQ1Q7OztZQUVPTyxLQUFBQTttQkFBUCxTQUFPQSw0QkFBNEJDLHVCQUF1QixFQUFFVixPQUFPO2dCQUNqRSxJQUFNLEFBQUVXLE9BQVNDLFlBQUcsQ0FBWkQsTUFDRjVCLE9BQU80QixLQUFLRiwyQkFBMkIsQ0FBQ0MsMEJBQ3hDakIscUJBQXFCaUIsd0JBQXdCRyxxQkFBcUIsSUFDbEU1QixhQUFhUSxvQkFDYlgsU0FBU0csWUFDVGlCLFdBQVcsSUFBSXJCLFNBQVNDLFFBQVFDLE1BQU1FO2dCQUU1QyxPQUFPaUI7WUFDVDs7OztLQWpDQSw0QkFBT2xCLFFBQU87QUFvQ2hCLFNBQVNxQix5QkFBeUJELFlBQVksRUFBRUosT0FBTztJQUNyRCxJQUFNLEFBQUVuQixXQUFhK0IsWUFBRyxDQUFoQi9CLFVBQ0ZZLHFCQUFxQlcsYUFBYVMscUJBQXFCLElBQ3ZENUIsYUFBYVEsb0JBQ2JWLE9BQU8sTUFDUEQsU0FBU0csWUFDVGlCLFdBQVcsSUFBSXJCLFNBQVNDLFFBQVFDLE1BQU1FO0lBRTVDLE9BQU9pQjtBQUNUIn0=