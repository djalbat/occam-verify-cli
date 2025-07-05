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
    if (type === _type.baseType) {
        string = namesString; ///
    } else {
        var typeName = type.getName();
        string = "".concat(namesString, ":").concat(typeName);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcHJvcGVydHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcblxuaW1wb3J0IHsgYmFzZVR5cGUgfSBmcm9tIFwiLi90eXBlXCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHR5cGVGcm9tSlNPTiwgdHlwZVRvVHlwZUpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyBtYXRjaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNvbnN0IG5hbWVUZXJtaW5hbE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3Byb3BlcnR5L0BuYW1lXCIpLFxuICAgICAgcHJvcGVydHlSZWxhdGlvblByb3BlcnR5Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Byb3BlcnR5UmVsYXRpb24vcHJvcGVydHlcIiksXG4gICAgICBwcm9wZXJ0eURlY2xhcmF0aW9uUHJvcGVydHlOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcHJvcGVydHlEZWNsYXJhdGlvbi9wcm9wZXJ0eVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgUHJvcGVydHkge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5hbWVzLCB0eXBlKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5uYW1lcyA9IG5hbWVzO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0TmFtZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZXM7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBzZXRUeXBlKHR5cGUpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgbWF0Y2hQcm9wZXJ0eU5hbWVzKHByb3BlcnR5TmFtZXMpIHtcbiAgICBjb25zdCBwcm9wZXJ0eU5hbWVzTWF0Y2ggPSBtYXRjaChwcm9wZXJ0eU5hbWVzLCB0aGlzLm5hbWVzLCAocHJvcGVydHlOYW1lLCBuYW1lKSA9PiB7XG4gICAgICBpZiAocHJvcGVydHlOYW1lID09PSBuYW1lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb3BlcnR5TmFtZXNNYXRjaDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB0eXBlSlNPTiA9IHR5cGVUb1R5cGVKU09OKHRoaXMudHlwZSksXG4gICAgICAgICAgbmFtZXMgPSB0aGlzLm5hbWVzLCAvLy9cbiAgICAgICAgICB0eXBlID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIG5hbWVzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlByb3BlcnR5XCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBuYW1lcyB9ID0ganNvbixcbiAgICAgICAgICB0eXBlID0gdHlwZUZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTmFtZXNBbmRUeXBlKG5hbWVzLCB0eXBlKSxcbiAgICAgICAgICBwcm9wZXJ0eSA9IG5ldyBQcm9wZXJ0eShzdHJpbmcsIG5hbWVzLCB0eXBlKTtcblxuICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydHlOb2RlKHByb3BlcnR5Tm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBwcm9wZXJ0eSA9IHByb3BlcnR5RnJvbVByb3BlcnR5Tm9kZShwcm9wZXJ0eU5vZGUsIGZpbGVDb250ZXh0KVxuXG4gICAgcmV0dXJuIHByb3BlcnR5O1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uUHJvcGVydHlOb2RlID0gcHJvcGVydHlSZWxhdGlvblByb3BlcnR5Tm9kZVF1ZXJ5KHByb3BlcnR5UmVsYXRpb25Ob2RlKSxcbiAgICAgICAgICBwcm9wZXJ0eU5vZGUgPSBwcm9wZXJ0eVJlbGF0aW9uUHJvcGVydHlOb2RlLCAgLy8vXG4gICAgICAgICAgcHJvcGVydHkgPSBwcm9wZXJ0eUZyb21Qcm9wZXJ0eU5vZGUocHJvcGVydHlOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gcHJvcGVydHk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnR5RGVjbGFyYXRpb25Ob2RlKHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgVHlwZSB9ID0gZG9tLFxuICAgICAgICAgIHR5cGUgPSBUeXBlLmZyb21Qcm9wZXJ0eURlY2xhcmF0aW9uTm9kZShwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgICAgcHJvcGVydHlEZWNsYXJhdGlvblByb3BlcnR5Tm9kZSA9IHByb3BlcnR5RGVjbGFyYXRpb25Qcm9wZXJ0eU5vZGVRdWVyeShwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgICAgcHJvcGVydHlOb2RlID0gcHJvcGVydHlEZWNsYXJhdGlvblByb3BlcnR5Tm9kZSwgIC8vL1xuICAgICAgICAgIHByb3BlcnR5ID0gcHJvcGVydHlGcm9tUHJvcGVydHlOb2RlKHByb3BlcnR5Tm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgcHJvcGVydHkuc2V0VHlwZSh0eXBlKTtcblxuICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHByb3BlcnR5RnJvbVByb3BlcnR5Tm9kZShwcm9wZXJ0eU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvcGVydHkgfSA9IGRvbSxcbiAgICAgICAgbm9kZSA9IHByb3BlcnR5Tm9kZSwgIC8vL1xuICAgICAgICBuYW1lcyA9IG5hbWVzRnJvbVByb3BlcnR5Tm9kZShwcm9wZXJ0eU5vZGUpLFxuICAgICAgICB0eXBlID0gbnVsbCxcbiAgICAgICAgc3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBwcm9wZXJ0eSA9IG5ldyBQcm9wZXJ0eShzdHJpbmcsIG5hbWVzLCB0eXBlKTtcblxuICByZXR1cm4gcHJvcGVydHk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21OYW1lc0FuZFR5cGUobmFtZXMsIHR5cGUpIHtcbiAgbGV0IHN0cmluZztcblxuICBjb25zdCBuYW1lc1N0cmluZyA9IG5hbWVzU3RyaW5nRnJvbU5hbWVzKG5hbWVzKTtcblxuICBpZiAodHlwZSA9PT0gYmFzZVR5cGUpIHtcbiAgICBzdHJpbmcgPSBuYW1lc1N0cmluZzsgIC8vL1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHR5cGVOYW1lID0gdHlwZS5nZXROYW1lKCk7XG5cbiAgICBzdHJpbmcgPSBgJHtuYW1lc1N0cmluZ306JHt0eXBlTmFtZX1gO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gbmFtZXNGcm9tUHJvcGVydHlOb2RlKHByb3BlcnR5Tm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgY29uc3QgbmFtZVRlcm1pbmFsTm9kZXMgPSBuYW1lVGVybWluYWxOb2Rlc1F1ZXJ5KHByb3BlcnR5Tm9kZSksXG4gICAgICAgIG5hbWVzID0gbmFtZVRlcm1pbmFsTm9kZXMubWFwKChuYW1lVGVybWluYWxOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgbmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQgPSBuYW1lVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgICAgICBuYW1lID0gbmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQ7IC8vL1xuXG4gICAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBuYW1lcztcbn1cblxuZnVuY3Rpb24gbmFtZXNTdHJpbmdGcm9tTmFtZXMobmFtZXMpIHtcbiAgY29uc3QgbmFtZXNTdHJpbmcgPSBuYW1lcy5yZWR1Y2UoKG5hbWVzU3RyaW5nLCBuYW1lKSA9PiB7XG4gICAgY29uc3QgbmFtZVN0cmluZyA9IG5hbWU7ICAvLy9cblxuICAgIG5hbWVzU3RyaW5nID0gKG5hbWVzU3RyaW5nID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgIG5hbWVTdHJpbmcgOiAgLy8vXG4gICAgICAgICAgICAgICAgICAgICBgJHtuYW1lc1N0cmluZ30gJHtuYW1lU3RyaW5nfWA7XG5cbiAgICByZXR1cm4gbmFtZXNTdHJpbmc7XG4gIH0sIG51bGwpO1xuXG4gIHJldHVybiBuYW1lc1N0cmluZztcbn1cblxuIl0sIm5hbWVzIjpbIm1hdGNoIiwiYXJyYXlVdGlsaXRpZXMiLCJuYW1lVGVybWluYWxOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsInByb3BlcnR5UmVsYXRpb25Qcm9wZXJ0eU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInByb3BlcnR5RGVjbGFyYXRpb25Qcm9wZXJ0eU5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiUHJvcGVydHkiLCJzdHJpbmciLCJuYW1lcyIsInR5cGUiLCJnZXRTdHJpbmciLCJnZXROYW1lcyIsImdldFR5cGUiLCJzZXRUeXBlIiwibWF0Y2hQcm9wZXJ0eU5hbWVzIiwicHJvcGVydHlOYW1lcyIsInByb3BlcnR5TmFtZXNNYXRjaCIsInByb3BlcnR5TmFtZSIsIm5hbWUiLCJ0b0pTT04iLCJ0eXBlSlNPTiIsInR5cGVUb1R5cGVKU09OIiwianNvbiIsImZyb21KU09OIiwiZmlsZUNvbnRleHQiLCJ0eXBlRnJvbUpTT04iLCJzdHJpbmdGcm9tTmFtZXNBbmRUeXBlIiwicHJvcGVydHkiLCJmcm9tUHJvcGVydHlOb2RlIiwicHJvcGVydHlOb2RlIiwicHJvcGVydHlGcm9tUHJvcGVydHlOb2RlIiwiZnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlIiwicHJvcGVydHlSZWxhdGlvbk5vZGUiLCJwcm9wZXJ0eVJlbGF0aW9uUHJvcGVydHlOb2RlIiwiZnJvbVByb3BlcnR5RGVjbGFyYXRpb25Ob2RlIiwicHJvcGVydHlEZWNsYXJhdGlvbk5vZGUiLCJUeXBlIiwiZG9tIiwicHJvcGVydHlEZWNsYXJhdGlvblByb3BlcnR5Tm9kZSIsIm5vZGUiLCJuYW1lc0Zyb21Qcm9wZXJ0eU5vZGUiLCJub2RlQXNTdHJpbmciLCJuYW1lc1N0cmluZyIsIm5hbWVzU3RyaW5nRnJvbU5hbWVzIiwiYmFzZVR5cGUiLCJ0eXBlTmFtZSIsImdldE5hbWUiLCJuYW1lVGVybWluYWxOb2RlcyIsIm1hcCIsIm5hbWVUZXJtaW5hbE5vZGUiLCJuYW1lVGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJyZWR1Y2UiLCJuYW1lU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFpQkE7OztlQUFBOzs7eUJBZitCOzJEQUVmO29CQUVTO3FCQUVhO29CQUNPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0MsSUFBTSxBQUFFQSxRQUFVQyx5QkFBYyxDQUF4QkQ7QUFFUixJQUFNRSx5QkFBeUJDLElBQUFBLGlCQUFVLEVBQUMsb0JBQ3BDQyxvQ0FBb0NDLElBQUFBLGdCQUFTLEVBQUMsK0JBQzlDQyx1Q0FBdUNELElBQUFBLGdCQUFTLEVBQUM7SUFFdkQsV0FBZUUsSUFBQUEsZ0JBQVcsNkJBQUM7YUFBTUMsU0FDbkJD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