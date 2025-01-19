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
var propertyNodeQuery = (0, _query.nodeQuery)("/propertyDeclaration/property"), nameTerminalNodesQuery = (0, _query.nodesQuery)("/property/@name");
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
                var node = propertyNode, names = namesFromPropertyNode(propertyNode), type = null, string = fileContext.nodeAsString(node), property = new Property(string, names, type);
                return property;
            }
        },
        {
            key: "fromPropertyDeclarationNode",
            value: function fromPropertyDeclarationNode(propertyDeclarationNode, fileContext) {
                var Type = _dom.default.Type, propertyNode = propertyNodeQuery(propertyDeclarationNode), node = propertyDeclarationNode, names = namesFromPropertyNode(propertyNode), type = Type.fromPropertyDeclarationNode(propertyDeclarationNode), string = fileContext.nodeAsString(node), property = new Property(string, names, type);
                return property;
            }
        }
    ]);
    return Property;
}(), _define_property(_Property, "name", "Property"), _Property));
function namesStringFromNames(names) {
    var namesString = names.reduce(function(namesString, name) {
        var nameString = name; ///
        namesString = namesString === null ? nameString : "".concat(namesString, " ").concat(nameString);
        return namesString;
    }, null);
    return namesString;
}
function namesFromPropertyNode(propertyNode, fileContext) {
    var nameTerminalNodes = nameTerminalNodesQuery(propertyNode), names = nameTerminalNodes.map(function(nameTerminalNode) {
        var nameTerminalNodeContent = nameTerminalNode.getContent(), name = nameTerminalNodeContent; ///
        return name;
    });
    return names;
}
function stringFromNamesAndType(names, type) {
    var string;
    var namesString = namesStringFromNames(names);
    if (type === _type.objectType) {
        string = namesString; ///
    } else {
        var typeName = type.getName();
        string = "".concat(namesString, ":").concat(typeName);
    }
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcHJvcGVydHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcblxuaW1wb3J0IHsgb2JqZWN0VHlwZSB9IGZyb20gXCIuL3R5cGVcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgdHlwZUZyb21KU09OLCB0eXBlVG9UeXBlSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5jb25zdCB7IG1hdGNoIH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgcHJvcGVydHlOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcHJvcGVydHlEZWNsYXJhdGlvbi9wcm9wZXJ0eVwiKSxcbiAgICAgIG5hbWVUZXJtaW5hbE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3Byb3BlcnR5L0BuYW1lXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBQcm9wZXJ0eSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbmFtZXMsIHR5cGUpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5hbWVzID0gbmFtZXM7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROYW1lcygpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lcztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIHNldFR5cGUodHlwZSkge1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBtYXRjaFByb3BlcnR5TmFtZXMocHJvcGVydHlOYW1lcykge1xuICAgIGNvbnN0IHByb3BlcnR5TmFtZXNNYXRjaCA9IG1hdGNoKHByb3BlcnR5TmFtZXMsIHRoaXMubmFtZXMsIChwcm9wZXJ0eU5hbWUsIG5hbWUpID0+IHtcbiAgICAgIGlmIChwcm9wZXJ0eU5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcHJvcGVydHlOYW1lc01hdGNoO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHR5cGVKU09OID0gdHlwZVRvVHlwZUpTT04odGhpcy50eXBlKSxcbiAgICAgICAgICBuYW1lcyA9IHRoaXMubmFtZXMsIC8vL1xuICAgICAgICAgIHR5cGUgPSB0eXBlSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgbmFtZXNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJvcGVydHlcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IG5hbWVzIH0gPSBqc29uLFxuICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21OYW1lc0FuZFR5cGUobmFtZXMsIHR5cGUpLFxuICAgICAgICAgIHByb3BlcnR5ID0gbmV3IFByb3BlcnR5KHN0cmluZywgbmFtZXMsIHR5cGUpO1xuXG4gICAgcmV0dXJuIHByb3BlcnR5O1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0eU5vZGUocHJvcGVydHlOb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSBwcm9wZXJ0eU5vZGUsICAvLy9cbiAgICAgICAgICBuYW1lcyA9IG5hbWVzRnJvbVByb3BlcnR5Tm9kZShwcm9wZXJ0eU5vZGUpLFxuICAgICAgICAgIHR5cGUgPSBudWxsLFxuICAgICAgICAgIHN0cmluZyA9IGZpbGVDb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICBwcm9wZXJ0eSA9IG5ldyBQcm9wZXJ0eShzdHJpbmcsIG5hbWVzLCB0eXBlKTtcblxuICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydHlEZWNsYXJhdGlvbk5vZGUocHJvcGVydHlEZWNsYXJhdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBUeXBlIH0gPSBkb20sXG4gICAgICAgICAgcHJvcGVydHlOb2RlID0gcHJvcGVydHlOb2RlUXVlcnkocHJvcGVydHlEZWNsYXJhdGlvbk5vZGUpLFxuICAgICAgICAgIG5vZGUgPSBwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgIG5hbWVzID0gbmFtZXNGcm9tUHJvcGVydHlOb2RlKHByb3BlcnR5Tm9kZSksXG4gICAgICAgICAgdHlwZSA9IFR5cGUuZnJvbVByb3BlcnR5RGVjbGFyYXRpb25Ob2RlKHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlKSxcbiAgICAgICAgICBzdHJpbmcgPSBmaWxlQ29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgcHJvcGVydHkgPSBuZXcgUHJvcGVydHkoc3RyaW5nLCBuYW1lcywgdHlwZSk7XG5cbiAgICByZXR1cm4gcHJvcGVydHk7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBuYW1lc1N0cmluZ0Zyb21OYW1lcyhuYW1lcykge1xuICBjb25zdCBuYW1lc1N0cmluZyA9IG5hbWVzLnJlZHVjZSgobmFtZXNTdHJpbmcsIG5hbWUpID0+IHtcbiAgICBjb25zdCBuYW1lU3RyaW5nID0gbmFtZTsgIC8vL1xuXG4gICAgbmFtZXNTdHJpbmcgPSAobmFtZXNTdHJpbmcgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgbmFtZVN0cmluZyA6ICAvLy9cbiAgICAgICAgICAgICAgICAgICAgIGAke25hbWVzU3RyaW5nfSAke25hbWVTdHJpbmd9YDtcblxuICAgIHJldHVybiBuYW1lc1N0cmluZztcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIG5hbWVzU3RyaW5nO1xufVxuXG5mdW5jdGlvbiBuYW1lc0Zyb21Qcm9wZXJ0eU5vZGUocHJvcGVydHlOb2RlLCBmaWxlQ29udGV4dCkge1xuICBjb25zdCBuYW1lVGVybWluYWxOb2RlcyA9IG5hbWVUZXJtaW5hbE5vZGVzUXVlcnkocHJvcGVydHlOb2RlKSxcbiAgICAgICAgbmFtZXMgPSBuYW1lVGVybWluYWxOb2Rlcy5tYXAoKG5hbWVUZXJtaW5hbE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBuYW1lVGVybWluYWxOb2RlQ29udGVudCA9IG5hbWVUZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgICAgIG5hbWUgPSBuYW1lVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG5cbiAgICAgICAgICByZXR1cm4gbmFtZTtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIG5hbWVzO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tTmFtZXNBbmRUeXBlKG5hbWVzLCB0eXBlKSB7XG4gIGxldCBzdHJpbmc7XG5cbiAgY29uc3QgbmFtZXNTdHJpbmcgPSBuYW1lc1N0cmluZ0Zyb21OYW1lcyhuYW1lcyk7XG5cbiAgaWYgKHR5cGUgPT09IG9iamVjdFR5cGUpIHtcbiAgICBzdHJpbmcgPSBuYW1lc1N0cmluZzsgIC8vL1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHR5cGVOYW1lID0gdHlwZS5nZXROYW1lKCk7XG5cbiAgICBzdHJpbmcgPSBgJHtuYW1lc1N0cmluZ306JHt0eXBlTmFtZX1gO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJtYXRjaCIsImFycmF5VXRpbGl0aWVzIiwicHJvcGVydHlOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJuYW1lVGVybWluYWxOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsImRvbUFzc2lnbmVkIiwiUHJvcGVydHkiLCJzdHJpbmciLCJuYW1lcyIsInR5cGUiLCJnZXRTdHJpbmciLCJnZXROYW1lcyIsImdldFR5cGUiLCJzZXRUeXBlIiwibWF0Y2hQcm9wZXJ0eU5hbWVzIiwicHJvcGVydHlOYW1lcyIsInByb3BlcnR5TmFtZXNNYXRjaCIsInByb3BlcnR5TmFtZSIsIm5hbWUiLCJ0b0pTT04iLCJ0eXBlSlNPTiIsInR5cGVUb1R5cGVKU09OIiwianNvbiIsImZyb21KU09OIiwiZmlsZUNvbnRleHQiLCJ0eXBlRnJvbUpTT04iLCJzdHJpbmdGcm9tTmFtZXNBbmRUeXBlIiwicHJvcGVydHkiLCJmcm9tUHJvcGVydHlOb2RlIiwicHJvcGVydHlOb2RlIiwibm9kZSIsIm5hbWVzRnJvbVByb3BlcnR5Tm9kZSIsIm5vZGVBc1N0cmluZyIsImZyb21Qcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSIsInByb3BlcnR5RGVjbGFyYXRpb25Ob2RlIiwiVHlwZSIsImRvbSIsIm5hbWVzU3RyaW5nRnJvbU5hbWVzIiwibmFtZXNTdHJpbmciLCJyZWR1Y2UiLCJuYW1lU3RyaW5nIiwibmFtZVRlcm1pbmFsTm9kZXMiLCJtYXAiLCJuYW1lVGVybWluYWxOb2RlIiwibmFtZVRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50Iiwib2JqZWN0VHlwZSIsInR5cGVOYW1lIiwiZ2V0TmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZ0JBOzs7ZUFBQTs7O3lCQWQrQjsyREFFZjtvQkFFVztxQkFFVztvQkFDTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdDLElBQU0sQUFBRUEsUUFBVUMseUJBQWMsQ0FBeEJEO0FBRVIsSUFBTUUsb0JBQW9CQyxJQUFBQSxnQkFBUyxFQUFDLGtDQUM5QkMseUJBQXlCQyxJQUFBQSxp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