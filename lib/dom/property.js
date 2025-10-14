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
    function Property(string, name, nominalTypeName) {
        _class_call_check(this, Property);
        this.string = string;
        this.name = name;
        this.nominalTypeName = nominalTypeName;
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
            key: "getNominalTypeName",
            value: function getNominalTypeName() {
                return this.nominalTypeName;
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
            key: "matchNominalTypeName",
            value: function matchNominalTypeName(nominalTypeName) {
                var nominalTypeNameMatches = this.nominalTypeName === nominalTypeName;
                return nominalTypeNameMatches;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var name = this.name, nominalTypeName = this.nominalTypeName, json = {
                    name: name,
                    nominalTypeName: nominalTypeName
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, context) {
                var name = json.name, nominalTypeName = json.nominalTypeName, string = name, property = new Property(string, name, nominalTypeName);
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
                var propertyName = propertyDeclarationNode.getPropertyName(), nominalTypeName = propertyDeclarationNode.getNominalTypeName(), name = propertyName, string = name, property = new Property(string, name, nominalTypeName);
                return property;
            }
        }
    ]);
    return Property;
}(), _define_property(_Property, "name", "Property"), _Property));
function propertyFromPropertyNode(propertyNode, context) {
    var Property = _dom.default.Property, propertyName = propertyNode.getPropertyName(), nominalTypeName = null, name = propertyName, string = name, property = new Property(string, name, nominalTypeName);
    return property;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcHJvcGVydHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uL2RvbVwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi9kb21cIjtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgUHJvcGVydHkge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5hbWUsIG5vbWluYWxUeXBlTmFtZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5ub21pbmFsVHlwZU5hbWUgPSBub21pbmFsVHlwZU5hbWU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xuICB9XG5cbiAgZ2V0Tm9taW5hbFR5cGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5vbWluYWxUeXBlTmFtZTtcbiAgfVxuXG4gIG1hdGNoUHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZSkge1xuICAgIGNvbnN0IHByb3BlcnR5TmFtZU1hdGNoZXMgPSAodGhpcy5uYW1lID09PSBwcm9wZXJ0eU5hbWUpO1xuXG4gICAgcmV0dXJuIHByb3BlcnR5TmFtZU1hdGNoZXM7XG4gIH1cblxuICBtYXRjaE5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpIHtcbiAgICBjb25zdCBub21pbmFsVHlwZU5hbWVNYXRjaGVzID0gKHRoaXMubm9taW5hbFR5cGVOYW1lID09PSBub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgcmV0dXJuIG5vbWluYWxUeXBlTmFtZU1hdGNoZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbmFtZSA9IHRoaXMubmFtZSwgLy8vXG4gICAgICAgICAgbm9taW5hbFR5cGVOYW1lID0gdGhpcy5ub21pbmFsVHlwZU5hbWUsICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIG5vbWluYWxUeXBlTmFtZVxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9wZXJ0eVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBuYW1lLCBub21pbmFsVHlwZU5hbWUgfSA9IGpzb24sXG4gICAgICAgICAgc3RyaW5nID0gbmFtZSwgLy8vXG4gICAgICAgICAgcHJvcGVydHkgPSBuZXcgUHJvcGVydHkoc3RyaW5nLCBuYW1lLCBub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgcmV0dXJuIHByb3BlcnR5O1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHByb3BlcnR5Tm9kZSA9IHByb3BlcnR5UmVsYXRpb25Ob2RlLmdldFByb3BlcnR5Tm9kZSgpLFxuICAgICAgICAgIHByb3BlcnR5ID0gcHJvcGVydHlGcm9tUHJvcGVydHlOb2RlKHByb3BlcnR5Tm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcHJvcGVydHk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnR5RGVjbGFyYXRpb25Ob2RlKHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcHJvcGVydHlOYW1lID0gcHJvcGVydHlEZWNsYXJhdGlvbk5vZGUuZ2V0UHJvcGVydHlOYW1lKCksXG4gICAgICAgICAgbm9taW5hbFR5cGVOYW1lID0gcHJvcGVydHlEZWNsYXJhdGlvbk5vZGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCksXG4gICAgICAgICAgbmFtZSA9IHByb3BlcnR5TmFtZSwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IG5hbWUsICAvLy9cbiAgICAgICAgICBwcm9wZXJ0eSA9IG5ldyBQcm9wZXJ0eShzdHJpbmcsIG5hbWUsIG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICByZXR1cm4gcHJvcGVydHk7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBwcm9wZXJ0eUZyb21Qcm9wZXJ0eU5vZGUocHJvcGVydHlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvcGVydHkgfSA9IGRvbSxcbiAgICAgICAgcHJvcGVydHlOYW1lID0gcHJvcGVydHlOb2RlLmdldFByb3BlcnR5TmFtZSgpLFxuICAgICAgICBub21pbmFsVHlwZU5hbWUgPSBudWxsLFxuICAgICAgICBuYW1lID0gcHJvcGVydHlOYW1lLCAgLy8vXG4gICAgICAgIHN0cmluZyA9IG5hbWUsICAvLy9cbiAgICAgICAgcHJvcGVydHkgPSBuZXcgUHJvcGVydHkoc3RyaW5nLCBuYW1lLCBub21pbmFsVHlwZU5hbWUpO1xuXG4gIHJldHVybiBwcm9wZXJ0eTtcbn1cbiJdLCJuYW1lcyI6WyJkb21Bc3NpZ25lZCIsIlByb3BlcnR5Iiwic3RyaW5nIiwibmFtZSIsIm5vbWluYWxUeXBlTmFtZSIsImdldFN0cmluZyIsImdldE5hbWUiLCJnZXROb21pbmFsVHlwZU5hbWUiLCJtYXRjaFByb3BlcnR5TmFtZSIsInByb3BlcnR5TmFtZSIsInByb3BlcnR5TmFtZU1hdGNoZXMiLCJtYXRjaE5vbWluYWxUeXBlTmFtZSIsIm5vbWluYWxUeXBlTmFtZU1hdGNoZXMiLCJ0b0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJjb250ZXh0IiwicHJvcGVydHkiLCJmcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUiLCJwcm9wZXJ0eVJlbGF0aW9uTm9kZSIsInByb3BlcnR5Tm9kZSIsImdldFByb3BlcnR5Tm9kZSIsInByb3BlcnR5RnJvbVByb3BlcnR5Tm9kZSIsImZyb21Qcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSIsInByb3BlcnR5RGVjbGFyYXRpb25Ob2RlIiwiZ2V0UHJvcGVydHlOYW1lIiwiZG9tIl0s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