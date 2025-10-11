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
    function Property(string, type, name) {
        _class_call_check(this, Property);
        this.string = string;
        this.type = type;
        this.name = name;
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
            key: "getName",
            value: function getName() {
                return this.name;
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
            value: function matchTypeName(typeName, prefixed, context) {
                return this.type.matchTypeName(typeName, prefixed, context);
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
            value: function fromJSON(json, context) {
                var name = json.name, type = (0, _json.typeFromJSON)(json, context), string = name, property = new Property(string, type, name);
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
                var Type = _dom.default.Type, type = Type.fromPropertyDeclarationNode(propertyDeclarationNode), propertyName = propertyDeclarationNode.getPropertyName(), name = propertyName, string = name, property = new Property(string, type, name);
                return property;
            }
        }
    ]);
    return Property;
}(), _define_property(_Property, "name", "Property"), _Property));
function propertyFromPropertyNode(propertyNode, context) {
    var Property = _dom.default.Property, propertyName = propertyNode.getPropertyName(), name = propertyName, type = null, string = name, property = new Property(string, type, name);
    return property;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcHJvcGVydHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IHR5cGVGcm9tSlNPTiwgdHlwZVRvVHlwZUpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgUHJvcGVydHkge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHR5cGUsIG5hbWUpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgc2V0VHlwZSh0eXBlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIG1hdGNoVHlwZU5hbWUodHlwZU5hbWUsIHByZWZpeGVkLCBjb250ZXh0KSB7IHJldHVybiB0aGlzLnR5cGUubWF0Y2hUeXBlTmFtZSh0eXBlTmFtZSwgcHJlZml4ZWQsIGNvbnRleHQpOyB9XG5cbiAgbWF0Y2hQcm9wZXJ0eU5hbWUocHJvcGVydHlOYW1lKSB7XG4gICAgY29uc3QgcHJvcGVydHlOYW1lTWF0Y2hlcyA9ICh0aGlzLm5hbWUgPT09IHByb3BlcnR5TmFtZSk7XG5cbiAgICByZXR1cm4gcHJvcGVydHlOYW1lTWF0Y2hlcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB0eXBlSlNPTiA9IHR5cGVUb1R5cGVKU09OKHRoaXMudHlwZSksXG4gICAgICAgICAgbmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgdHlwZSA9IHR5cGVKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICBuYW1lXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlByb3BlcnR5XCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IGpzb24sXG4gICAgICAgICAgdHlwZSA9IHR5cGVGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBuYW1lLCAvLy9cbiAgICAgICAgICBwcm9wZXJ0eSA9IG5ldyBQcm9wZXJ0eShzdHJpbmcsIHR5cGUsIG5hbWUpO1xuXG4gICAgcmV0dXJuIHByb3BlcnR5O1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0eU5vZGUocHJvcGVydHlOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcHJvcGVydHkgPSBwcm9wZXJ0eUZyb21Qcm9wZXJ0eU5vZGUocHJvcGVydHlOb2RlLCBjb250ZXh0KVxuXG4gICAgcmV0dXJuIHByb3BlcnR5O1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHByb3BlcnR5Tm9kZSA9IHByb3BlcnR5UmVsYXRpb25Ob2RlLmdldFByb3BlcnR5Tm9kZSgpLFxuICAgICAgICAgIHByb3BlcnR5ID0gcHJvcGVydHlGcm9tUHJvcGVydHlOb2RlKHByb3BlcnR5Tm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcHJvcGVydHk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnR5RGVjbGFyYXRpb25Ob2RlKHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBUeXBlIH0gPSBkb20sXG4gICAgICAgICAgdHlwZSA9IFR5cGUuZnJvbVByb3BlcnR5RGVjbGFyYXRpb25Ob2RlKHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgICBwcm9wZXJ0eU5hbWUgPSBwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZS5nZXRQcm9wZXJ0eU5hbWUoKSxcbiAgICAgICAgICBuYW1lID0gcHJvcGVydHlOYW1lLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gbmFtZSwgIC8vL1xuICAgICAgICAgIHByb3BlcnR5ID0gbmV3IFByb3BlcnR5KHN0cmluZywgdHlwZSwgbmFtZSk7XG5cbiAgICByZXR1cm4gcHJvcGVydHk7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBwcm9wZXJ0eUZyb21Qcm9wZXJ0eU5vZGUocHJvcGVydHlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvcGVydHkgfSA9IGRvbSxcbiAgICAgICAgcHJvcGVydHlOYW1lID0gcHJvcGVydHlOb2RlLmdldFByb3BlcnR5TmFtZSgpLFxuICAgICAgICBuYW1lID0gcHJvcGVydHlOYW1lLCAgLy8vXG4gICAgICAgIHR5cGUgPSBudWxsLFxuICAgICAgICBzdHJpbmcgPSBuYW1lLCAgLy8vXG4gICAgICAgIHByb3BlcnR5ID0gbmV3IFByb3BlcnR5KHN0cmluZywgdHlwZSwgbmFtZSk7XG5cbiAgcmV0dXJuIHByb3BlcnR5O1xufVxuIl0sIm5hbWVzIjpbImRvbUFzc2lnbmVkIiwiUHJvcGVydHkiLCJzdHJpbmciLCJ0eXBlIiwibmFtZSIsImdldFN0cmluZyIsImdldFR5cGUiLCJnZXROYW1lIiwic2V0VHlwZSIsIm1hdGNoVHlwZU5hbWUiLCJ0eXBlTmFtZSIsInByZWZpeGVkIiwiY29udGV4dCIsIm1hdGNoUHJvcGVydHlOYW1lIiwicHJvcGVydHlOYW1lIiwicHJvcGVydHlOYW1lTWF0Y2hlcyIsInRvSlNPTiIsInR5cGVKU09OIiwidHlwZVRvVHlwZUpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJ0eXBlRnJvbUpTT04iLCJwcm9wZXJ0eSIsImZyb21Qcm9wZXJ0eU5vZGUiLCJwcm9wZXJ0eU5vZGUiLCJwcm9wZXJ0eUZyb21Qcm9wZXJ0eU5vZGUiLCJmcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUiLCJwcm9wZXJ0eVJlbGF0aW9uTm9kZSIsImdldFByb3BlcnR5Tm9kZSIsImZyb21Qcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSIsInByb3BlcnR5RGVjbGFyYXRpb25Ob2RlIiwiVHlwZSIsImRvbSIsImdldFByb3BlcnR5TmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFBOzs7MkRBTGdCO29CQUc2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTdDLFdBQWVBLElBQUFBLGdCQUFXLDZCQUFDO2FBQU1DLFNBQ25CQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSTtnQ0FEQ0g7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBOzs7O1lBR2RDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsSUFBSTtZQUNsQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsSUFBSTtZQUNsQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRTCxJQUFJO2dCQUNWLElBQUksQ0FBQ0EsSUFBSSxHQUFHQTtZQUNkOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWNDLFFBQVEsRUFBRUMsUUFBUSxFQUFFQyxPQUFPO2dCQUFJLE9BQU8sSUFBSSxDQUFDVCxJQUFJLENBQUNNLGFBQWEsQ0FBQ0MsVUFBVUMsVUFBVUM7WUFBVTs7O1lBRTFHQyxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCQyxZQUFZO2dCQUM1QixJQUFNQyxzQkFBdUIsSUFBSSxDQUFDWCxJQUFJLEtBQUtVO2dCQUUzQyxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVdDLElBQUFBLG9CQUFjLEVBQUMsSUFBSSxDQUFDZixJQUFJLEdBQ25DQyxPQUFPLElBQUksQ0FBQ0EsSUFBSSxFQUNoQkQsT0FBT2MsVUFDUEUsT0FBTztvQkFDTGhCLE1BQUFBO29CQUNBQyxNQUFBQTtnQkFDRjtnQkFFTixPQUFPZTtZQUNUOzs7O1lBSU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNELElBQUksRUFBRVAsT0FBTztnQkFDM0IsSUFBTSxBQUFFUixPQUFTZSxLQUFUZixNQUNGRCxPQUFPa0IsSUFBQUEsa0JBQVksRUFBQ0YsTUFBTVAsVUFDMUJWLFNBQVNFLE1BQ1RrQixXQUFXLElBQUlyQixTQUFTQyxRQUFRQyxNQUFNQztnQkFFNUMsT0FBT2tCO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxpQkFBaUJDLFlBQVksRUFBRVosT0FBTztnQkFDM0MsSUFBTVUsV0FBV0cseUJBQXlCRCxjQUFjWjtnQkFFeEQsT0FBT1U7WUFDVDs7O1lBRU9JLEtBQUFBO21CQUFQLFNBQU9BLHlCQUF5QkMsb0JBQW9CLEVBQUVmLE9BQU87Z0JBQzNELElBQU1ZLGVBQWVHLHFCQUFxQkMsZUFBZSxJQUNuRE4sV0FBV0cseUJBQXlCRCxjQUFjWjtnQkFFeEQsT0FBT1U7WUFDVDs7O1lBRU9PLEtBQUFBO21CQUFQLFNBQU9BLDRCQUE0QkMsdUJBQXVCLEVBQUVsQixPQUFPO2dCQUNqRSxJQUFNLEFBQUVtQixPQUFTQyxZQUFHLENBQVpELE1BQ0Y1QixPQUFPNEIsS0FBS0YsMkJBQTJCLENBQUNDLDBCQUN4Q2hCLGVBQWVnQix3QkFBd0JHLGVBQWUsSUFDdEQ3QixPQUFPVSxjQUNQWixTQUFTRSxNQUNUa0IsV0FBVyxJQUFJckIsU0FBU0MsUUFBUUMsTUFBTUM7Z0JBRTVDLE9BQU9rQjtZQUNUOzs7O0tBakNBLDRCQUFPbEIsUUFBTztBQW9DaEIsU0FBU3FCLHlCQUF5QkQsWUFBWSxFQUFFWixPQUFPO0lBQ3JELElBQU0sQUFBRVgsV0FBYStCLFlBQUcsQ0FBaEIvQixVQUNGYSxlQUFlVSxhQUFhUyxlQUFlLElBQzNDN0IsT0FBT1UsY0FDUFgsT0FBTyxNQUNQRCxTQUFTRSxNQUNUa0IsV0FBVyxJQUFJckIsU0FBU0MsUUFBUUMsTUFBTUM7SUFFNUMsT0FBT2tCO0FBQ1QifQ==