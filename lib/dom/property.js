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
var _type = require("./type");
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
var propertyNodeQuery = (0, _query.nodeQuery)("/propertyDeclaration/property"), nameTerminalNodeQuery = (0, _query.nodeQuery)("/property/@name");
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
                var propertyNameMatches = propertyName === this.name;
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
                var name = json.name, type = (0, _json.typeFromJSON)(json, fileContext), string = stringFromNameAndType(name, type), property = new Property(string, name, type);
                return property;
            }
        },
        {
            key: "fromPropertyNode",
            value: function fromPropertyNode(propertyNode, fileContext) {
                var node = propertyNode, name = nameFromPropertyNode(propertyNode), type = null, string = fileContext.nodeAsString(node), property = new Property(string, name, type);
                return property;
            }
        },
        {
            key: "fromPropertyDeclarationNode",
            value: function fromPropertyDeclarationNode(propertyDeclarationNode, fileContext) {
                var Type = _dom.default.Type, propertyNode = propertyNodeQuery(propertyDeclarationNode), node = propertyDeclarationNode, name = nameFromPropertyNode(propertyNode), type = Type.fromPropertyDeclarationNode(propertyDeclarationNode), string = fileContext.nodeAsString(node), property = new Property(string, name, type);
                return property;
            }
        }
    ]);
    return Property;
}(), _define_property(_Property, "name", "Property"), _Property));
function stringFromNameAndType(name, type) {
    var string;
    if (type === _type.objectType) {
        string = name; ///
    } else {
        var typeName = type.getName();
        string = "".concat(name, ":").concat(typeName);
    }
    return string;
}
function nameFromPropertyNode(propertyNode, fileContext) {
    var nameTerminalNode = nameTerminalNodeQuery(propertyNode), nameTerminalNodeContent = nameTerminalNode.getContent(), name = nameTerminalNodeContent; ///
    return name;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcHJvcGVydHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBvYmplY3RUeXBlIH0gZnJvbSBcIi4vdHlwZVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQgeyB0eXBlRnJvbUpTT04sIHR5cGVUb1R5cGVKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmNvbnN0IHByb3BlcnR5Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Byb3BlcnR5RGVjbGFyYXRpb24vcHJvcGVydHlcIiksXG4gICAgICBuYW1lVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcHJvcGVydHkvQG5hbWVcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFByb3BlcnR5IHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBuYW1lLCB0eXBlKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIHNldFR5cGUodHlwZSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBtYXRjaFByb3BlcnR5TmFtZShwcm9wZXJ0eU5hbWUpIHtcbiAgICBjb25zdCBwcm9wZXJ0eU5hbWVNYXRjaGVzID0gKHByb3BlcnR5TmFtZSA9PT0gdGhpcy5uYW1lKTtcblxuICAgIHJldHVybiBwcm9wZXJ0eU5hbWVNYXRjaGVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHR5cGVKU09OID0gdHlwZVRvVHlwZUpTT04odGhpcy50eXBlKSxcbiAgICAgICAgICBuYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICB0eXBlID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJvcGVydHlcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IGpzb24sXG4gICAgICAgICAgdHlwZSA9IHR5cGVGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbU5hbWVBbmRUeXBlKG5hbWUsIHR5cGUpLFxuICAgICAgICAgIHByb3BlcnR5ID0gbmV3IFByb3BlcnR5KHN0cmluZywgbmFtZSwgdHlwZSk7XG5cbiAgICByZXR1cm4gcHJvcGVydHk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnR5Tm9kZShwcm9wZXJ0eU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IHByb3BlcnR5Tm9kZSwgIC8vL1xuICAgICAgICAgIG5hbWUgPSBuYW1lRnJvbVByb3BlcnR5Tm9kZShwcm9wZXJ0eU5vZGUpLFxuICAgICAgICAgIHR5cGUgPSBudWxsLFxuICAgICAgICAgIHN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICBwcm9wZXJ0eSA9IG5ldyBQcm9wZXJ0eShzdHJpbmcsIG5hbWUsIHR5cGUpO1xuXG4gICAgcmV0dXJuIHByb3BlcnR5O1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0eURlY2xhcmF0aW9uTm9kZShwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IFR5cGUgfSA9IGRvbSxcbiAgICAgICAgICBwcm9wZXJ0eU5vZGUgPSBwcm9wZXJ0eU5vZGVRdWVyeShwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgICAgbm9kZSA9IHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgbmFtZSA9IG5hbWVGcm9tUHJvcGVydHlOb2RlKHByb3BlcnR5Tm9kZSksXG4gICAgICAgICAgdHlwZSA9IFR5cGUuZnJvbVByb3BlcnR5RGVjbGFyYXRpb25Ob2RlKHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgICBzdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgcHJvcGVydHkgPSBuZXcgUHJvcGVydHkoc3RyaW5nLCBuYW1lLCB0eXBlKTtcblxuICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21OYW1lQW5kVHlwZShuYW1lLCB0eXBlKSB7XG4gIGxldCBzdHJpbmc7XG5cbiAgaWYgKHR5cGUgPT09IG9iamVjdFR5cGUpIHtcbiAgICBzdHJpbmcgPSBuYW1lOyAgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdHlwZU5hbWUgPSB0eXBlLmdldE5hbWUoKTtcblxuICAgIHN0cmluZyA9IGAke25hbWV9OiR7dHlwZU5hbWV9YDtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIG5hbWVGcm9tUHJvcGVydHlOb2RlKHByb3BlcnR5Tm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgY29uc3QgbmFtZVRlcm1pbmFsTm9kZSA9IG5hbWVUZXJtaW5hbE5vZGVRdWVyeShwcm9wZXJ0eU5vZGUpLFxuICAgICAgICBuYW1lVGVybWluYWxOb2RlQ29udGVudCA9IG5hbWVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICBuYW1lID0gbmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQ7IC8vL1xuXG4gIHJldHVybiBuYW1lO1xufVxuIl0sIm5hbWVzIjpbInByb3BlcnR5Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibmFtZVRlcm1pbmFsTm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJQcm9wZXJ0eSIsInN0cmluZyIsIm5hbWUiLCJ0eXBlIiwiZ2V0U3RyaW5nIiwiZ2V0TmFtZSIsImdldFR5cGUiLCJzZXRUeXBlIiwibWF0Y2hQcm9wZXJ0eU5hbWUiLCJwcm9wZXJ0eU5hbWUiLCJwcm9wZXJ0eU5hbWVNYXRjaGVzIiwidG9KU09OIiwidHlwZUpTT04iLCJ0eXBlVG9UeXBlSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImZpbGVDb250ZXh0IiwidHlwZUZyb21KU09OIiwic3RyaW5nRnJvbU5hbWVBbmRUeXBlIiwicHJvcGVydHkiLCJmcm9tUHJvcGVydHlOb2RlIiwicHJvcGVydHlOb2RlIiwibm9kZSIsIm5hbWVGcm9tUHJvcGVydHlOb2RlIiwibm9kZUFzU3RyaW5nIiwiZnJvbVByb3BlcnR5RGVjbGFyYXRpb25Ob2RlIiwicHJvcGVydHlEZWNsYXJhdGlvbk5vZGUiLCJUeXBlIiwiZG9tIiwib2JqZWN0VHlwZSIsInR5cGVOYW1lIiwibmFtZVRlcm1pbmFsTm9kZSIsIm5hbWVUZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUFBOzs7MkRBVmdCO3FCQUVVO29CQUNDO29CQUVrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdDLElBQU1BLG9CQUFvQkMsSUFBQUEsZ0JBQVMsRUFBQyxrQ0FDOUJDLHdCQUF3QkQsSUFBQUEsZ0JBQVMsRUFBQztJQUV4QyxXQUFlRSxJQUFBQSxnQkFBVyw2QkFBQzthQUFNQyxTQUNuQkMsTUFBTSxFQUFF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