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
var _query = require("../utilities/query");
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
var typeNodeQuery = (0, _query.nodeQuery)("/property/type"), propertyNodeQuery = (0, _query.nodeQuery)("/propertyDeclaration/property"), nameTerminalNodeQuery = (0, _query.nodeQuery)("/property/@name");
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
            key: "verify",
            value: function verify(context) {
                var verified;
                var propertyString = this.string; ///
                context.trace("Verifying the '".concat(propertyString, "' property..."));
                debugger;
                if (verified) {
                    context.debug("...verified the '".concat(propertyString, "' property."));
                }
                return verified;
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
                var name = json.name, type = (0, _json.typeFromJSON)(json, fileContext), string = stringFromNameAndType(name, type, fileContext), property = new Property(string, name, type);
                return property;
            }
        },
        {
            key: "fromPropertyDeclarationNode",
            value: function fromPropertyDeclarationNode(propertyDeclarationNode, fileContext) {
                var propertyNode = propertyNodeQuery(propertyDeclarationNode), node = propertyNode, name = nameFromPropertyNode(propertyNode), type = typeFromPropertyNode(propertyNode), string = fileContext.nodeAsString(node), property = new Property(string, name, type);
                return property;
            }
        }
    ]);
    return Property;
}(), _define_property(_Property, "name", "Property"), _Property));
function nameFromPropertyNode(propertyNode, fileContext) {
    var nameTerminalNode = nameTerminalNodeQuery(propertyNode), nameTerminalNodeContent = nameTerminalNode.getContent(), name = nameTerminalNodeContent; ///
    return name;
}
function typeFromPropertyNode(propertyNode, fileContext) {
    var Type = _dom.default.Type, typeNode = typeNodeQuery(propertyNode), type = Type.fromTypeNode(typeNode);
    return type;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcHJvcGVydHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IHR5cGVGcm9tSlNPTiwgdHlwZVRvVHlwZUpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9wZXJ0eS90eXBlXCIpLFxuICAgICAgcHJvcGVydHlOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcHJvcGVydHlEZWNsYXJhdGlvbi9wcm9wZXJ0eVwiKSxcbiAgICAgIG5hbWVUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9wZXJ0eS9AbmFtZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgUHJvcGVydHkge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5hbWUsIHR5cGUpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQ7XG5cbiAgICBjb25zdCBwcm9wZXJ0eVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eS4uLmApO1xuXG4gICAgZGVidWdnZXJcblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHR5cGVKU09OID0gdHlwZVRvVHlwZUpTT04odGhpcy50eXBlKSxcbiAgICAgICAgICBuYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICB0eXBlID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJvcGVydHlcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IGpzb24sXG4gICAgICAgICAgdHlwZSA9IHR5cGVGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbU5hbWVBbmRUeXBlKG5hbWUsIHR5cGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBwcm9wZXJ0eSA9IG5ldyBQcm9wZXJ0eShzdHJpbmcsIG5hbWUsIHR5cGUpO1xuXG4gICAgcmV0dXJuIHByb3BlcnR5O1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0eURlY2xhcmF0aW9uTm9kZShwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBwcm9wZXJ0eU5vZGUgPSBwcm9wZXJ0eU5vZGVRdWVyeShwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgICAgbm9kZSA9IHByb3BlcnR5Tm9kZSwgIC8vL1xuICAgICAgICAgIG5hbWUgPSBuYW1lRnJvbVByb3BlcnR5Tm9kZShwcm9wZXJ0eU5vZGUpLFxuICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbVByb3BlcnR5Tm9kZShwcm9wZXJ0eU5vZGUpLFxuICAgICAgICAgIHN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICBwcm9wZXJ0eSA9IG5ldyBQcm9wZXJ0eShzdHJpbmcsIG5hbWUsIHR5cGUpO1xuXG4gICAgcmV0dXJuIHByb3BlcnR5O1xuICB9XG59KTtcblxuZnVuY3Rpb24gbmFtZUZyb21Qcm9wZXJ0eU5vZGUocHJvcGVydHlOb2RlLCBmaWxlQ29udGV4dCkge1xuICBjb25zdCBuYW1lVGVybWluYWxOb2RlID0gbmFtZVRlcm1pbmFsTm9kZVF1ZXJ5KHByb3BlcnR5Tm9kZSksXG4gICAgICAgIG5hbWVUZXJtaW5hbE5vZGVDb250ZW50ID0gbmFtZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIG5hbWUgPSBuYW1lVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG5cbiAgcmV0dXJuIG5hbWU7XG59XG5cbmZ1bmN0aW9uIHR5cGVGcm9tUHJvcGVydHlOb2RlKHByb3BlcnR5Tm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgY29uc3QgeyBUeXBlIH0gPSBkb20sXG4gICAgICAgIHR5cGVOb2RlID0gdHlwZU5vZGVRdWVyeShwcm9wZXJ0eU5vZGUpLFxuICAgICAgICB0eXBlID0gVHlwZS5mcm9tVHlwZU5vZGUodHlwZU5vZGUpO1xuXG4gIHJldHVybiB0eXBlO1xufVxuIl0sIm5hbWVzIjpbInR5cGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJwcm9wZXJ0eU5vZGVRdWVyeSIsIm5hbWVUZXJtaW5hbE5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiUHJvcGVydHkiLCJzdHJpbmciLCJuYW1lIiwidHlwZSIsImdldFN0cmluZyIsImdldE5hbWUiLCJnZXRUeXBlIiwidmVyaWZ5IiwiY29udGV4dCIsInZlcmlmaWVkIiwicHJvcGVydHlTdHJpbmciLCJ0cmFjZSIsImRlYnVnIiwidG9KU09OIiwidHlwZUpTT04iLCJ0eXBlVG9UeXBlSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImZpbGVDb250ZXh0IiwidHlwZUZyb21KU09OIiwic3RyaW5nRnJvbU5hbWVBbmRUeXBlIiwicHJvcGVydHkiLCJmcm9tUHJvcGVydHlEZWNsYXJhdGlvbk5vZGUiLCJwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSIsInByb3BlcnR5Tm9kZSIsIm5vZGUiLCJuYW1lRnJvbVByb3BlcnR5Tm9kZSIsInR5cGVGcm9tUHJvcGVydHlOb2RlIiwibm9kZUFzU3RyaW5nIiwibmFtZVRlcm1pbmFsTm9kZSIsIm5hbWVUZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsIlR5cGUiLCJkb20iLCJ0eXBlTm9kZSIsImZyb21UeXBlTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUFBOzs7MkRBVmdCO3FCQUVVO29CQUVtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdDLElBQU1BLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyxtQkFDMUJDLG9CQUFvQkQsSUFBQUEsZ0JBQVMsRUFBQyxrQ0FDOUJFLHdCQUF3QkYsSUFBQUEsZ0JBQVMsRUFBQztJQUV4QyxXQUFlRyxJQUFBQSxnQkFBVyw2QkFBQzthQUFNQyxTQUNuQkMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUk7Z0NBRENIO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTs7OztZQUdkQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILElBQUk7WUFDbEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsT0FBTztnQkFDWixJQUFJQztnQkFFSixJQUFNQyxpQkFBaUIsSUFBSSxDQUFDVCxNQUFNLEVBQUUsR0FBRztnQkFFdkNPLFFBQVFHLEtBQUssQ0FBQyxBQUFDLGtCQUFnQyxPQUFmRCxnQkFBZTtnQkFFL0MsUUFBUTtnQkFFUixJQUFJRCxVQUFVO29CQUNaRCxRQUFRSSxLQUFLLENBQUMsQUFBQyxvQkFBa0MsT0FBZkYsZ0JBQWU7Z0JBQ25EO2dCQUVBLE9BQU9EO1lBQ1Q7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsV0FBV0MsSUFBQUEsb0JBQWMsRUFBQyxJQUFJLENBQUNaLElBQUksR0FDbkNELE9BQU8sSUFBSSxDQUFDQSxJQUFJLEVBQ2hCQyxPQUFPVyxVQUNQRSxPQUFPO29CQUNMYixNQUFBQTtvQkFDQUQsTUFBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT2M7WUFDVDs7OztZQUlPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTRCxJQUFJLEVBQUVFLFdBQVc7Z0JBQy9CLElBQU0sQUFBRWhCLE9BQVNjLEtBQVRkLE1BQ0ZDLE9BQU9nQixJQUFBQSxrQkFBWSxFQUFDSCxNQUFNRSxjQUMxQmpCLFNBQVNtQixzQkFBc0JsQixNQUFNQyxNQUFNZSxjQUMzQ0csV0FBVyxJQUFJckIsU0FBU0MsUUFBUUMsTUFBTUM7Z0JBRTVDLE9BQU9rQjtZQUNUOzs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0EsNEJBQTRCQyx1QkFBdUIsRUFBRUwsV0FBVztnQkFDckUsSUFBTU0sZUFBZTNCLGtCQUFrQjBCLDBCQUNqQ0UsT0FBT0QsY0FDUHRCLE9BQU93QixxQkFBcUJGLGVBQzVCckIsT0FBT3dCLHFCQUFxQkgsZUFDNUJ2QixTQUFTaUIsWUFBWVUsWUFBWSxDQUFDSCxPQUNsQ0osV0FBVyxJQUFJckIsU0FBU0MsUUFBUUMsTUFBTUM7Z0JBRTVDLE9BQU9rQjtZQUNUOzs7O0tBcEJBLDRCQUFPbkIsUUFBTztBQXVCaEIsU0FBU3dCLHFCQUFxQkYsWUFBWSxFQUFFTixXQUFXO0lBQ3JELElBQU1XLG1CQUFtQi9CLHNCQUFzQjBCLGVBQ3pDTSwwQkFBMEJELGlCQUFpQkUsVUFBVSxJQUNyRDdCLE9BQU80Qix5QkFBeUIsR0FBRztJQUV6QyxPQUFPNUI7QUFDVDtBQUVBLFNBQVN5QixxQkFBcUJILFlBQVksRUFBRU4sV0FBVztJQUNyRCxJQUFNLEFBQUVjLE9BQVNDLFlBQUcsQ0FBWkQsTUFDRkUsV0FBV3ZDLGNBQWM2QixlQUN6QnJCLE9BQU82QixLQUFLRyxZQUFZLENBQUNEO0lBRS9CLE9BQU8vQjtBQUNUIn0=