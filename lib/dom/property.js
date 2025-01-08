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
            key: "matchPropertyName",
            value: function matchPropertyName(propertyName) {
                var propertyNameMatches = propertyName === this.name;
                return propertyNameMatches;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcHJvcGVydHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IHR5cGVGcm9tSlNPTiwgdHlwZVRvVHlwZUpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9wZXJ0eS90eXBlXCIpLFxuICAgICAgcHJvcGVydHlOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcHJvcGVydHlEZWNsYXJhdGlvbi9wcm9wZXJ0eVwiKSxcbiAgICAgIG5hbWVUZXJtaW5hbE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9wZXJ0eS9AbmFtZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgUHJvcGVydHkge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5hbWUsIHR5cGUpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgbWF0Y2hQcm9wZXJ0eU5hbWUocHJvcGVydHlOYW1lKSB7XG4gICAgY29uc3QgcHJvcGVydHlOYW1lTWF0Y2hlcyA9IChwcm9wZXJ0eU5hbWUgPT09IHRoaXMubmFtZSk7XG5cbiAgICByZXR1cm4gcHJvcGVydHlOYW1lTWF0Y2hlcztcbiAgfVxuXG4gIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkO1xuXG4gICAgY29uc3QgcHJvcGVydHlTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkuLi5gKTtcblxuICAgIGRlYnVnZ2VyXG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB0eXBlSlNPTiA9IHR5cGVUb1R5cGVKU09OKHRoaXMudHlwZSksXG4gICAgICAgICAgbmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgdHlwZSA9IHR5cGVKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICBuYW1lXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlByb3BlcnR5XCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uLFxuICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21OYW1lQW5kVHlwZShuYW1lLCB0eXBlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgcHJvcGVydHkgPSBuZXcgUHJvcGVydHkoc3RyaW5nLCBuYW1lLCB0eXBlKTtcblxuICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydHlEZWNsYXJhdGlvbk5vZGUocHJvcGVydHlEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgcHJvcGVydHlOb2RlID0gcHJvcGVydHlOb2RlUXVlcnkocHJvcGVydHlEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgIG5vZGUgPSBwcm9wZXJ0eU5vZGUsICAvLy9cbiAgICAgICAgICBuYW1lID0gbmFtZUZyb21Qcm9wZXJ0eU5vZGUocHJvcGVydHlOb2RlKSxcbiAgICAgICAgICB0eXBlID0gdHlwZUZyb21Qcm9wZXJ0eU5vZGUocHJvcGVydHlOb2RlKSxcbiAgICAgICAgICBzdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgcHJvcGVydHkgPSBuZXcgUHJvcGVydHkoc3RyaW5nLCBuYW1lLCB0eXBlKTtcblxuICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIG5hbWVGcm9tUHJvcGVydHlOb2RlKHByb3BlcnR5Tm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgY29uc3QgbmFtZVRlcm1pbmFsTm9kZSA9IG5hbWVUZXJtaW5hbE5vZGVRdWVyeShwcm9wZXJ0eU5vZGUpLFxuICAgICAgICBuYW1lVGVybWluYWxOb2RlQ29udGVudCA9IG5hbWVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICBuYW1lID0gbmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQ7IC8vL1xuXG4gIHJldHVybiBuYW1lO1xufVxuXG5mdW5jdGlvbiB0eXBlRnJvbVByb3BlcnR5Tm9kZShwcm9wZXJ0eU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IHsgVHlwZSB9ID0gZG9tLFxuICAgICAgICB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkocHJvcGVydHlOb2RlKSxcbiAgICAgICAgdHlwZSA9IFR5cGUuZnJvbVR5cGVOb2RlKHR5cGVOb2RlKTtcblxuICByZXR1cm4gdHlwZTtcbn1cbiJdLCJuYW1lcyI6WyJ0eXBlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwicHJvcGVydHlOb2RlUXVlcnkiLCJuYW1lVGVybWluYWxOb2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlByb3BlcnR5Iiwic3RyaW5nIiwibmFtZSIsInR5cGUiLCJnZXRTdHJpbmciLCJnZXROYW1lIiwiZ2V0VHlwZSIsIm1hdGNoUHJvcGVydHlOYW1lIiwicHJvcGVydHlOYW1lIiwicHJvcGVydHlOYW1lTWF0Y2hlcyIsInZlcmlmeSIsImNvbnRleHQiLCJ2ZXJpZmllZCIsInByb3BlcnR5U3RyaW5nIiwidHJhY2UiLCJkZWJ1ZyIsInRvSlNPTiIsInR5cGVKU09OIiwidHlwZVRvVHlwZUpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJmaWxlQ29udGV4dCIsInR5cGVGcm9tSlNPTiIsInN0cmluZ0Zyb21OYW1lQW5kVHlwZSIsInByb3BlcnR5IiwiZnJvbVByb3BlcnR5RGVjbGFyYXRpb25Ob2RlIiwicHJvcGVydHlEZWNsYXJhdGlvbk5vZGUiLCJwcm9wZXJ0eU5vZGUiLCJub2RlIiwibmFtZUZyb21Qcm9wZXJ0eU5vZGUiLCJ0eXBlRnJvbVByb3BlcnR5Tm9kZSIsIm5vZGVBc1N0cmluZyIsIm5hbWVUZXJtaW5hbE5vZGUiLCJuYW1lVGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJUeXBlIiwiZG9tIiwidHlwZU5vZGUiLCJmcm9tVHlwZU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBQTs7OzJEQVZnQjtxQkFFVTtvQkFFbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QyxJQUFNQSxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsbUJBQzFCQyxvQkFBb0JELElBQUFBLGdCQUFTLEVBQUMsa0NBQzlCRSx3QkFBd0JGLElBQUFBLGdCQUFTLEVBQUM7SUFFeEMsV0FBZUcsSUFBQUEsZ0JBQVcsNkJBQUM7YUFBTUMsU0FDbkJDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJO2dD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