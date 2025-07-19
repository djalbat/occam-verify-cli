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
var nameTerminalNodesQuery = (0, _query.nodesQuery)("/property/@name"), propertyRelationPropertyNodeQuery = (0, _query.nodeQuery)("/propertyRelation/property");
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
                var Type = _dom.default.Type, type = Type.fromPropertyDeclarationNode(propertyDeclarationNode), propertyNames = propertyDeclarationNode.getPropertyNames(), names = propertyNames, string = stringFromNamesAndType(names, type), property = new Property(string, names, type);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcHJvcGVydHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcblxuaW1wb3J0IHsgb2JqZWN0VHlwZSB9IGZyb20gXCIuL3R5cGVcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgdHlwZUZyb21KU09OLCB0eXBlVG9UeXBlSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5jb25zdCB7IG1hdGNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgbmFtZVRlcm1pbmFsTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvcHJvcGVydHkvQG5hbWVcIiksXG4gICAgICBwcm9wZXJ0eVJlbGF0aW9uUHJvcGVydHlOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcHJvcGVydHlSZWxhdGlvbi9wcm9wZXJ0eVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgUHJvcGVydHkge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5hbWVzLCB0eXBlKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5uYW1lcyA9IG5hbWVzO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0TmFtZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMubmFtZXM7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBzZXRUeXBlKHR5cGUpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICB9XG5cbiAgbWF0Y2hQcm9wZXJ0eU5hbWVzKHByb3BlcnR5TmFtZXMpIHtcbiAgICBjb25zdCBwcm9wZXJ0eU5hbWVzTWF0Y2ggPSBtYXRjaChwcm9wZXJ0eU5hbWVzLCB0aGlzLm5hbWVzLCAocHJvcGVydHlOYW1lLCBuYW1lKSA9PiB7XG4gICAgICBpZiAocHJvcGVydHlOYW1lID09PSBuYW1lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb3BlcnR5TmFtZXNNYXRjaDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB0eXBlSlNPTiA9IHR5cGVUb1R5cGVKU09OKHRoaXMudHlwZSksXG4gICAgICAgICAgbmFtZXMgPSB0aGlzLm5hbWVzLCAvLy9cbiAgICAgICAgICB0eXBlID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdHlwZSxcbiAgICAgICAgICAgIG5hbWVzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlByb3BlcnR5XCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBuYW1lcyB9ID0ganNvbixcbiAgICAgICAgICB0eXBlID0gdHlwZUZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTmFtZXNBbmRUeXBlKG5hbWVzLCB0eXBlKSxcbiAgICAgICAgICBwcm9wZXJ0eSA9IG5ldyBQcm9wZXJ0eShzdHJpbmcsIG5hbWVzLCB0eXBlKTtcblxuICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydHlOb2RlKHByb3BlcnR5Tm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBwcm9wZXJ0eSA9IHByb3BlcnR5RnJvbVByb3BlcnR5Tm9kZShwcm9wZXJ0eU5vZGUsIGZpbGVDb250ZXh0KVxuXG4gICAgcmV0dXJuIHByb3BlcnR5O1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uUHJvcGVydHlOb2RlID0gcHJvcGVydHlSZWxhdGlvblByb3BlcnR5Tm9kZVF1ZXJ5KHByb3BlcnR5UmVsYXRpb25Ob2RlKSxcbiAgICAgICAgICBwcm9wZXJ0eU5vZGUgPSBwcm9wZXJ0eVJlbGF0aW9uUHJvcGVydHlOb2RlLCAgLy8vXG4gICAgICAgICAgcHJvcGVydHkgPSBwcm9wZXJ0eUZyb21Qcm9wZXJ0eU5vZGUocHJvcGVydHlOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gcHJvcGVydHk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnR5RGVjbGFyYXRpb25Ob2RlKHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgVHlwZSB9ID0gZG9tLFxuICAgICAgICAgIHR5cGUgPSBUeXBlLmZyb21Qcm9wZXJ0eURlY2xhcmF0aW9uTm9kZShwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSksXG4gICAgICAgICAgcHJvcGVydHlOYW1lcyA9IHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlLmdldFByb3BlcnR5TmFtZXMoKSxcbiAgICAgICAgICBuYW1lcyA9IHByb3BlcnR5TmFtZXMsICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTmFtZXNBbmRUeXBlKG5hbWVzLCB0eXBlKSxcbiAgICAgICAgICBwcm9wZXJ0eSA9IG5ldyBQcm9wZXJ0eShzdHJpbmcsIG5hbWVzLCB0eXBlKTtcblxuICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHByb3BlcnR5RnJvbVByb3BlcnR5Tm9kZShwcm9wZXJ0eU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvcGVydHkgfSA9IGRvbSxcbiAgICAgICAgbm9kZSA9IHByb3BlcnR5Tm9kZSwgIC8vL1xuICAgICAgICBuYW1lcyA9IG5hbWVzRnJvbVByb3BlcnR5Tm9kZShwcm9wZXJ0eU5vZGUpLFxuICAgICAgICB0eXBlID0gbnVsbCxcbiAgICAgICAgc3RyaW5nID0gZmlsZUNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICBwcm9wZXJ0eSA9IG5ldyBQcm9wZXJ0eShzdHJpbmcsIG5hbWVzLCB0eXBlKTtcblxuICByZXR1cm4gcHJvcGVydHk7XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21OYW1lc0FuZFR5cGUobmFtZXMsIHR5cGUpIHtcbiAgbGV0IHN0cmluZztcblxuICBjb25zdCBuYW1lc1N0cmluZyA9IG5hbWVzU3RyaW5nRnJvbU5hbWVzKG5hbWVzKTtcblxuICBpZiAodHlwZSA9PT0gb2JqZWN0VHlwZSkge1xuICAgIHN0cmluZyA9IG5hbWVzU3RyaW5nOyAgLy8vXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgdHlwZVN0cmluZyA9IHR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBzdHJpbmcgPSBgJHtuYW1lc1N0cmluZ306JHt0eXBlU3RyaW5nfWA7XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBuYW1lc0Zyb21Qcm9wZXJ0eU5vZGUocHJvcGVydHlOb2RlLCBmaWxlQ29udGV4dCkge1xuICBjb25zdCBuYW1lVGVybWluYWxOb2RlcyA9IG5hbWVUZXJtaW5hbE5vZGVzUXVlcnkocHJvcGVydHlOb2RlKSxcbiAgICAgICAgbmFtZXMgPSBuYW1lVGVybWluYWxOb2Rlcy5tYXAoKG5hbWVUZXJtaW5hbE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBuYW1lVGVybWluYWxOb2RlQ29udGVudCA9IG5hbWVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgICAgIG5hbWUgPSBuYW1lVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG5cbiAgICAgICAgICByZXR1cm4gbmFtZTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIG5hbWVzO1xufVxuXG5mdW5jdGlvbiBuYW1lc1N0cmluZ0Zyb21OYW1lcyhuYW1lcykge1xuICBjb25zdCBuYW1lc1N0cmluZyA9IG5hbWVzLnJlZHVjZSgobmFtZXNTdHJpbmcsIG5hbWUpID0+IHtcbiAgICBjb25zdCBuYW1lU3RyaW5nID0gbmFtZTsgIC8vL1xuXG4gICAgbmFtZXNTdHJpbmcgPSAobmFtZXNTdHJpbmcgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgbmFtZVN0cmluZyA6ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgIGAke25hbWVzU3RyaW5nfSAke25hbWVTdHJpbmd9YDtcblxuICAgIHJldHVybiBuYW1lc1N0cmluZztcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIG5hbWVzU3RyaW5nO1xufVxuXG4iXSwibmFtZXMiOlsibWF0Y2giLCJhcnJheVV0aWxpdGllcyIsIm5hbWVUZXJtaW5hbE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwicHJvcGVydHlSZWxhdGlvblByb3BlcnR5Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJQcm9wZXJ0eSIsInN0cmluZyIsIm5hbWVzIiwidHlwZSIsImdldFN0cmluZyIsImdldE5hbWVzIiwiZ2V0VHlwZSIsInNldFR5cGUiLCJtYXRjaFByb3BlcnR5TmFtZXMiLCJwcm9wZXJ0eU5hbWVzIiwicHJvcGVydHlOYW1lc01hdGNoIiwicHJvcGVydHlOYW1lIiwibmFtZSIsInRvSlNPTiIsInR5cGVKU09OIiwidHlwZVRvVHlwZUpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJmaWxlQ29udGV4dCIsInR5cGVGcm9tSlNPTiIsInN0cmluZ0Zyb21OYW1lc0FuZFR5cGUiLCJwcm9wZXJ0eSIsImZyb21Qcm9wZXJ0eU5vZGUiLCJwcm9wZXJ0eU5vZGUiLCJwcm9wZXJ0eUZyb21Qcm9wZXJ0eU5vZGUiLCJmcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUiLCJwcm9wZXJ0eVJlbGF0aW9uTm9kZSIsInByb3BlcnR5UmVsYXRpb25Qcm9wZXJ0eU5vZGUiLCJmcm9tUHJvcGVydHlEZWNsYXJhdGlvbk5vZGUiLCJwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSIsIlR5cGUiLCJkb20iLCJnZXRQcm9wZXJ0eU5hbWVzIiwibm9kZSIsIm5hbWVzRnJvbVByb3BlcnR5Tm9kZSIsIm5vZGVBc1N0cmluZyIsIm5hbWVzU3RyaW5nIiwibmFtZXNTdHJpbmdGcm9tTmFtZXMiLCJvYmplY3RUeXBlIiwidHlwZVN0cmluZyIsIm5hbWVUZXJtaW5hbE5vZGVzIiwibWFwIiwibmFtZVRlcm1pbmFsTm9kZSIsIm5hbWVUZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsInJlZHVjZSIsIm5hbWVTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWdCQTs7O2VBQUE7Ozt5QkFkK0I7MkRBRWY7b0JBRVc7cUJBRVc7b0JBQ087Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QyxJQUFNLEFBQUVBLFFBQVVDLHlCQUFjLENBQXhCRDtBQUVSLElBQU1FLHlCQUF5QkMsSUFBQUEsaUJBQVUsRUFBQyxvQkFDcENDLG9DQUFvQ0MsSUFBQUEsZ0JBQVMsRUFBQztJQUVwRCxXQUFlQyxJQUFBQSxnQkFBVyw2QkFBQzthQUFNQyxTQUNuQkMsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLElBQUk7Z0NBREFIO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTs7OztZQUdkQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILEtB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