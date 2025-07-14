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
var _necessary = require("necessary");
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../dom"));
var _type = require("./type");
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
var match = _necessary.arrayUtilities.match;
var nameTerminalNodesQuery = (0, _query.nodesQuery)("/property/@name"), propertyRelationPropertyNodeQuery = (0, _query.nodeQuery)("/propertyRelation/property"), propertyDeclarationPropertyNodeQuery = (0, _query.nodeQuery)("/propertyDeclaration/property");
var _default = (0, _dom.domAssigned)((_Property = /*#__PURE__*/ function() {
    function Property(string, names, type) {
        _class_call_check(this, Property);
        this.string = string;
        this.names = names;
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
            key: "getNames",
            value: function getNames() {
                return this.names;
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
            key: "matchPropertyNames",
            value: function matchPropertyNames(propertyNames) {
                var propertyNamesMatch = match(propertyNames, this.names, function(propertyName, name) {
                    if (propertyName === name) {
                        return true;
                    }
                });
                return propertyNamesMatch;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var typeJSON = (0, _json.typeToTypeJSON)(this.type), names = this.names, type = typeJSON, json = {
                    type: type,
                    names: names
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                var names = json.names, type = (0, _json.typeFromJSON)(json, fileContext), string = stringFromNamesAndType(names, type), property = new Property(string, names, type);
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
                var propertyRelationPropertyNode = propertyRelationPropertyNodeQuery(propertyRelationNode), propertyNode = propertyRelationPropertyNode, property = propertyFromPropertyNode(propertyNode, fileContext);
                return property;
            }
        },
        {
            key: "fromPropertyDeclarationNode",
            value: function fromPropertyDeclarationNode(propertyDeclarationNode, fileContext) {
                var Type = _dom.default.Type, type = Type.fromPropertyDeclarationNode(propertyDeclarationNode), propertyDeclarationPropertyNode = propertyDeclarationPropertyNodeQuery(propertyDeclarationNode), propertyNode = propertyDeclarationPropertyNode, property = propertyFromPropertyNode(propertyNode, fileContext);
                property.setType(type);
                return property;
            }
        }
    ]);
    return Property;
}(), _define_property(_Property, "name", "Property"), _Property));
function propertyFromPropertyNode(propertyNode, fileContext) {
    var Property = _dom.default.Property, node = propertyNode, names = namesFromPropertyNode(propertyNode), type = null, string = fileContext.nodeAsString(node), property = new Property(string, names, type);
    return property;
}
function stringFromNamesAndType(names, type) {
    var string;
    var namesString = namesStringFromNames(names);
    if (type === _type.objectType) {
        string = namesString; ///
    } else {
        var typeString = type.getString();
        string = "".concat(namesString, ":").concat(typeString);
    }
    return string;
}
function namesFromPropertyNode(propertyNode, fileContext) {
    var nameTerminalNodes = nameTerminalNodesQuery(propertyNode), names = nameTerminalNodes.map(function(nameTerminalNode) {
        var nameTerminalNodeContent = nameTerminalNode.getContent(), name = nameTerminalNodeContent; ///
        return name;
    });
    return names;
}
function namesStringFromNames(names) {
    var namesString = names.reduce(function(namesString, name) {
        var nameString = name; ///
        namesString = namesString === null ? nameString : "".concat(namesString, " ").concat(nameString);
        return namesString;
    }, null);
    return namesString;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcHJvcGVydHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcblxuaW1wb3J0IHsgb2JqZWN0VHlwZSB9IGZyb20gXCIuL3R5cGVcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgdHlwZUZyb21KU09OLCB0eXBlVG9UeXBlSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5jb25zdCB7IG1hdGNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgbmFtZVRlcm1pbmFsTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvcHJvcGVydHkvQG5hbWVcIiksXG4gICAgICBwcm9wZXJ0eVJlbGF0aW9uUHJvcGVydHlOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcHJvcGVydHlSZWxhdGlvbi9wcm9wZXJ0eVwiKSxcbiAgICAgIHByb3BlcnR5RGVjbGFyYXRpb25Qcm9wZXJ0eU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9wZXJ0eURlY2xhcmF0aW9uL3Byb3BlcnR5XCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBQcm9wZXJ0eSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbmFtZXMsIHR5cGUpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5hbWVzID0gbmFtZXM7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROYW1lcygpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lcztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIHNldFR5cGUodHlwZSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBtYXRjaFByb3BlcnR5TmFtZXMocHJvcGVydHlOYW1lcykge1xuICAgIGNvbnN0IHByb3BlcnR5TmFtZXNNYXRjaCA9IG1hdGNoKHByb3BlcnR5TmFtZXMsIHRoaXMubmFtZXMsIChwcm9wZXJ0eU5hbWUsIG5hbWUpID0+IHtcbiAgICAgIGlmIChwcm9wZXJ0eU5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcHJvcGVydHlOYW1lc01hdGNoO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHR5cGVKU09OID0gdHlwZVRvVHlwZUpTT04odGhpcy50eXBlKSxcbiAgICAgICAgICBuYW1lcyA9IHRoaXMubmFtZXMsIC8vL1xuICAgICAgICAgIHR5cGUgPSB0eXBlSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgbmFtZXNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJvcGVydHlcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IG5hbWVzIH0gPSBqc29uLFxuICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21OYW1lc0FuZFR5cGUobmFtZXMsIHR5cGUpLFxuICAgICAgICAgIHByb3BlcnR5ID0gbmV3IFByb3BlcnR5KHN0cmluZywgbmFtZXMsIHR5cGUpO1xuXG4gICAgcmV0dXJuIHByb3BlcnR5O1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0eU5vZGUocHJvcGVydHlOb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHByb3BlcnR5ID0gcHJvcGVydHlGcm9tUHJvcGVydHlOb2RlKHByb3BlcnR5Tm9kZSwgZmlsZUNvbnRleHQpXG5cbiAgICByZXR1cm4gcHJvcGVydHk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHByb3BlcnR5UmVsYXRpb25Qcm9wZXJ0eU5vZGUgPSBwcm9wZXJ0eVJlbGF0aW9uUHJvcGVydHlOb2RlUXVlcnkocHJvcGVydHlSZWxhdGlvbk5vZGUpLFxuICAgICAgICAgIHByb3BlcnR5Tm9kZSA9IHByb3BlcnR5UmVsYXRpb25Qcm9wZXJ0eU5vZGUsICAvLy9cbiAgICAgICAgICBwcm9wZXJ0eSA9IHByb3BlcnR5RnJvbVByb3BlcnR5Tm9kZShwcm9wZXJ0eU5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydHlEZWNsYXJhdGlvbk5vZGUocHJvcGVydHlEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBUeXBlIH0gPSBkb20sXG4gICAgICAgICAgdHlwZSA9IFR5cGUuZnJvbVByb3BlcnR5RGVjbGFyYXRpb25Ob2RlKHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgICBwcm9wZXJ0eURlY2xhcmF0aW9uUHJvcGVydHlOb2RlID0gcHJvcGVydHlEZWNsYXJhdGlvblByb3BlcnR5Tm9kZVF1ZXJ5KHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgICBwcm9wZXJ0eU5vZGUgPSBwcm9wZXJ0eURlY2xhcmF0aW9uUHJvcGVydHlOb2RlLCAgLy8vXG4gICAgICAgICAgcHJvcGVydHkgPSBwcm9wZXJ0eUZyb21Qcm9wZXJ0eU5vZGUocHJvcGVydHlOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICBwcm9wZXJ0eS5zZXRUeXBlKHR5cGUpO1xuXG4gICAgcmV0dXJuIHByb3BlcnR5O1xuICB9XG59KTtcblxuZnVuY3Rpb24gcHJvcGVydHlGcm9tUHJvcGVydHlOb2RlKHByb3BlcnR5Tm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9wZXJ0eSB9ID0gZG9tLFxuICAgICAgICBub2RlID0gcHJvcGVydHlOb2RlLCAgLy8vXG4gICAgICAgIG5hbWVzID0gbmFtZXNGcm9tUHJvcGVydHlOb2RlKHByb3BlcnR5Tm9kZSksXG4gICAgICAgIHR5cGUgPSBudWxsLFxuICAgICAgICBzdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgIHByb3BlcnR5ID0gbmV3IFByb3BlcnR5KHN0cmluZywgbmFtZXMsIHR5cGUpO1xuXG4gIHJldHVybiBwcm9wZXJ0eTtcbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbU5hbWVzQW5kVHlwZShuYW1lcywgdHlwZSkge1xuICBsZXQgc3RyaW5nO1xuXG4gIGNvbnN0IG5hbWVzU3RyaW5nID0gbmFtZXNTdHJpbmdGcm9tTmFtZXMobmFtZXMpO1xuXG4gIGlmICh0eXBlID09PSBvYmplY3RUeXBlKSB7XG4gICAgc3RyaW5nID0gbmFtZXNTdHJpbmc7ICAvLy9cbiAgfSBlbHNlIHtcbiAgICBjb25zdCB0eXBlU3RyaW5nID0gdHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIHN0cmluZyA9IGAke25hbWVzU3RyaW5nfToke3R5cGVTdHJpbmd9YDtcbiAgfVxuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIG5hbWVzRnJvbVByb3BlcnR5Tm9kZShwcm9wZXJ0eU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IG5hbWVUZXJtaW5hbE5vZGVzID0gbmFtZVRlcm1pbmFsTm9kZXNRdWVyeShwcm9wZXJ0eU5vZGUpLFxuICAgICAgICBuYW1lcyA9IG5hbWVUZXJtaW5hbE5vZGVzLm1hcCgobmFtZVRlcm1pbmFsTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5hbWVUZXJtaW5hbE5vZGVDb250ZW50ID0gbmFtZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgICAgICAgbmFtZSA9IG5hbWVUZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cblxuICAgICAgICAgIHJldHVybiBuYW1lO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gbmFtZXM7XG59XG5cbmZ1bmN0aW9uIG5hbWVzU3RyaW5nRnJvbU5hbWVzKG5hbWVzKSB7XG4gIGNvbnN0IG5hbWVzU3RyaW5nID0gbmFtZXMucmVkdWNlKChuYW1lc1N0cmluZywgbmFtZSkgPT4ge1xuICAgIGNvbnN0IG5hbWVTdHJpbmcgPSBuYW1lOyAgLy8vXG5cbiAgICBuYW1lc1N0cmluZyA9IChuYW1lc1N0cmluZyA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICBuYW1lU3RyaW5nIDogIC8vL1xuICAgICAgICAgICAgICAgICAgICAgYCR7bmFtZXNTdHJpbmd9ICR7bmFtZVN0cmluZ31gO1xuXG4gICAgcmV0dXJuIG5hbWVzU3RyaW5nO1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gbmFtZXNTdHJpbmc7XG59XG5cbiJdLCJuYW1lcyI6WyJtYXRjaCIsImFycmF5VXRpbGl0aWVzIiwibmFtZVRlcm1pbmFsTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJwcm9wZXJ0eVJlbGF0aW9uUHJvcGVydHlOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJwcm9wZXJ0eURlY2xhcmF0aW9uUHJvcGVydHlOb2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlByb3BlcnR5Iiwic3RyaW5nIiwibmFtZXMiLCJ0eXBlIiwiZ2V0U3RyaW5nIiwiZ2V0TmFtZXMiLCJnZXRUeXBlIiwic2V0VHlwZSIsIm1hdGNoUHJvcGVydHlOYW1lcyIsInByb3BlcnR5TmFtZXMiLCJwcm9wZXJ0eU5hbWVzTWF0Y2giLCJwcm9wZXJ0eU5hbWUiLCJuYW1lIiwidG9KU09OIiwidHlwZUpTT04iLCJ0eXBlVG9UeXBlSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImZpbGVDb250ZXh0IiwidHlwZUZyb21KU09OIiwic3RyaW5nRnJvbU5hbWVzQW5kVHlwZSIsInByb3BlcnR5IiwiZnJvbVByb3BlcnR5Tm9kZSIsInByb3BlcnR5Tm9kZSIsInByb3BlcnR5RnJvbVByb3BlcnR5Tm9kZSIsImZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZSIsInByb3BlcnR5UmVsYXRpb25Ob2RlIiwicHJvcGVydHlSZWxhdGlvblByb3BlcnR5Tm9kZSIsImZyb21Qcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSIsInByb3BlcnR5RGVjbGFyYXRpb25Ob2RlIiwiVHlwZSIsImRvbSIsInByb3BlcnR5RGVjbGFyYXRpb25Qcm9wZXJ0eU5vZGUiLCJub2RlIiwibmFtZXNGcm9tUHJvcGVydHlOb2RlIiwibm9kZUFzU3RyaW5nIiwibmFtZXNTdHJpbmciLCJuYW1lc1N0cmluZ0Zyb21OYW1lcyIsIm9iamVjdFR5cGUiLCJ0eXBlU3RyaW5nIiwibmFtZVRlcm1pbmFsTm9kZXMiLCJtYXAiLCJuYW1lVGVybWluYWxOb2RlIiwibmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50IiwicmVkdWNlIiwibmFtZVN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBaUJBOzs7ZUFBQTs7O3lCQWYrQjsyREFFZjtvQkFFVztxQkFFVztvQkFDTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdDLElBQU0sQUFBRUEsUUFBVUMseUJBQWMsQ0FBeEJEO0FBRVIsSUFBTUUseUJBQXlCQyxJQUFBQSxpQkFBVSxFQUFDLG9CQUNwQ0Msb0NBQW9DQyxJQUFBQSxnQkFBUyxFQUFDLCtCQUM5Q0MsdUNBQXVDRCxJQUFBQSxnQkFBUyxFQUFDO0lBRXZELFdBQWVFLElBQUFBLGdCQUFXLDZCQUFDO2FBQU1DLFNBQ25CQyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsSUFBSTtnQ0FEQUg7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxJQUFJLEdBQUdBOzs7O1lBR2RDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsS0FBSztZQUNuQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsSUFBSTtZQUNsQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRSixJQUFJO2dCQUNWLElBQUksQ0FBQ0EsSUFBSSxHQUFHQTtZQUNkOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQkMsYUFBYTtnQkFDOUIsSUFBTUMscUJBQXFCbEIsTUFBTWlCLGVBQWUsSUFBSSxDQUFDUCxLQUFLLEVBQUUsU0FBQ1MsY0FBY0M7b0JBQ3pFLElBQUlELGlCQUFpQkMsTUFBTTt3QkFDekIsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxPQUFPRjtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFdBQVdDLElBQUFBLG9CQUFjLEVBQUMsSUFBSSxDQUFDWixJQUFJLEdBQ25DRCxRQUFRLElBQUksQ0FBQ0EsS0FBSyxFQUNsQkMsT0FBT1csVUFDUEUsT0FBTztvQkFDTGIsTUFBQUE7b0JBQ0FELE9BQUFBO2dCQUNGO2dCQUVOLE9BQU9jO1lBQ1Q7Ozs7WUFJT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0QsSUFBSSxFQUFFRSxXQUFXO2dCQUMvQixJQUFNLEFBQUVoQixRQUFVYyxLQUFWZCxPQUNGQyxPQUFPZ0IsSUFBQUEsa0JBQVksRUFBQ0gsTUFBTUUsY0FDMUJqQixTQUFTbUIsdUJBQXVCbEIsT0FBT0MsT0FDdkNrQixXQUFXLElBQUlyQixTQUFTQyxRQUFRQyxPQUFPQztnQkFFN0MsT0FBT2tCO1lBQ1Q7OztZQUVPQyxLQUFBQTttQkFBUCxTQUFPQSxpQkFBaUJDLFlBQVksRUFBRUwsV0FBVztnQkFDL0MsSUFBTUcsV0FBV0cseUJBQXlCRCxjQUFjTDtnQkFFeEQsT0FBT0c7WUFDVDs7O1lBRU9JLEtBQUFBO21CQUFQLFNBQU9BLHlCQUF5QkMsb0JBQW9CLEVBQUVSLFdBQVc7Z0JBQy9ELElBQU1TLCtCQUErQi9CLGtDQUFrQzhCLHVCQUNqRUgsZUFBZUksOEJBQ2ZOLFdBQVdHLHlCQUF5QkQsY0FBY0w7Z0JBRXhELE9BQU9HO1lBQ1Q7OztZQUVPTyxLQUFBQTttQkFBUCxTQUFPQSw0QkFBNEJDLHVCQUF1QixFQUFFWCxXQUFXO2dCQUNyRSxJQUFNLEFBQUVZLE9BQVNDLFlBQUcsQ0FBWkQsTUFDRjNCLE9BQU8yQixLQUFLRiwyQkFBMkIsQ0FBQ0MsMEJBQ3hDRyxrQ0FBa0NsQyxxQ0FBcUMrQiwwQkFDdkVOLGVBQWVTLGlDQUNmWCxXQUFXRyx5QkFBeUJELGNBQWNMO2dCQUV4REcsU0FBU2QsT0FBTyxDQUFDSjtnQkFFakIsT0FBT2tCO1lBQ1Q7Ozs7S0FuQ0EsNEJBQU9ULFFBQU87QUFzQ2hCLFNBQVNZLHlCQUF5QkQsWUFBWSxFQUFFTCxXQUFXO0lBQ3pELElBQU0sQUFBRWxCLFdBQWErQixZQUFHLENBQWhCL0IsVUFDRmlDLE9BQU9WLGNBQ1ByQixRQUFRZ0Msc0JBQXNCWCxlQUM5QnBCLE9BQU8sTUFDUEYsU0FBU2lCLFlBQVlpQixZQUFZLENBQUNGLE9BQ2xDWixXQUFXLElBQUlyQixTQUFTQyxRQUFRQyxPQUFPQztJQUU3QyxPQUFPa0I7QUFDVDtBQUVBLFNBQVNELHVCQUF1QmxCLEtBQUssRUFBRUMsSUFBSTtJQUN6QyxJQUFJRjtJQUVKLElBQU1tQyxjQUFjQyxxQkFBcUJuQztJQUV6QyxJQUFJQyxTQUFTbUMsZ0JBQVUsRUFBRTtRQUN2QnJDLFNBQVNtQyxhQUFjLEdBQUc7SUFDNUIsT0FBTztRQUNMLElBQU1HLGFBQWFwQyxLQUFLQyxTQUFTO1FBRWpDSCxTQUFTLEFBQUMsR0FBaUJzQyxPQUFmSCxhQUFZLEtBQWMsT0FBWEc7SUFDN0I7SUFFQSxPQUFPdEM7QUFDVDtBQUVBLFNBQVNpQyxzQkFBc0JYLFlBQVksRUFBRUwsV0FBVztJQUN0RCxJQUFNc0Isb0JBQW9COUMsdUJBQXVCNkIsZUFDM0NyQixRQUFRc0Msa0JBQWtCQyxHQUFHLENBQUMsU0FBQ0M7UUFDN0IsSUFBTUMsMEJBQTBCRCxpQkFBaUJFLFVBQVUsSUFDckRoQyxPQUFPK0IseUJBQXlCLEdBQUc7UUFFekMsT0FBTy9CO0lBQ1Q7SUFFTixPQUFPVjtBQUNUO0FBRUEsU0FBU21DLHFCQUFxQm5DLEtBQUs7SUFDakMsSUFBTWtDLGNBQWNsQyxNQUFNMkMsTUFBTSxDQUFDLFNBQUNULGFBQWF4QjtRQUM3QyxJQUFNa0MsYUFBYWxDLE1BQU8sR0FBRztRQUU3QndCLGNBQWMsQUFBQ0EsZ0JBQWdCLE9BQ2ZVLGFBQ0MsQUFBQyxHQUFpQkEsT0FBZlYsYUFBWSxLQUFjLE9BQVhVO1FBRW5DLE9BQU9WO0lBQ1QsR0FBRztJQUVILE9BQU9BO0FBQ1QifQ==