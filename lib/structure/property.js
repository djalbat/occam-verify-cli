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
var _structure = /*#__PURE__*/ _interop_require_wildcard(require("../structure"));
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
var _default = (0, _structure.define)((_Property = /*#__PURE__*/ function() {
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
    var Property = _structure.default.Property, propertyName = propertyNode.getPropertyName(), nominalTypeName = null, name = propertyName, string = name, property = new Property(string, name, nominalTypeName);
    return property;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHJ1Y3R1cmUvcHJvcGVydHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzdHJ1Y3R1cmUgZnJvbSBcIi4uL3N0cnVjdHVyZVwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vc3RydWN0dXJlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBQcm9wZXJ0eSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbmFtZSwgbm9taW5hbFR5cGVOYW1lKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLm5vbWluYWxUeXBlTmFtZSA9IG5vbWluYWxUeXBlTmFtZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXROb21pbmFsVHlwZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9taW5hbFR5cGVOYW1lO1xuICB9XG5cbiAgbWF0Y2hQcm9wZXJ0eU5hbWUocHJvcGVydHlOYW1lKSB7XG4gICAgY29uc3QgcHJvcGVydHlOYW1lTWF0Y2hlcyA9ICh0aGlzLm5hbWUgPT09IHByb3BlcnR5TmFtZSk7XG5cbiAgICByZXR1cm4gcHJvcGVydHlOYW1lTWF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSkge1xuICAgIGNvbnN0IG5vbWluYWxUeXBlTmFtZU1hdGNoZXMgPSAodGhpcy5ub21pbmFsVHlwZU5hbWUgPT09IG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICByZXR1cm4gbm9taW5hbFR5cGVOYW1lTWF0Y2hlcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBuYW1lID0gdGhpcy5uYW1lLCAvLy9cbiAgICAgICAgICBub21pbmFsVHlwZU5hbWUgPSB0aGlzLm5vbWluYWxUeXBlTmFtZSwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgbm9taW5hbFR5cGVOYW1lXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlByb3BlcnR5XCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IG5hbWUsIG5vbWluYWxUeXBlTmFtZSB9ID0ganNvbixcbiAgICAgICAgICBzdHJpbmcgPSBuYW1lLCAvLy9cbiAgICAgICAgICBwcm9wZXJ0eSA9IG5ldyBQcm9wZXJ0eShzdHJpbmcsIG5hbWUsIG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICByZXR1cm4gcHJvcGVydHk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcHJvcGVydHlOb2RlID0gcHJvcGVydHlSZWxhdGlvbk5vZGUuZ2V0UHJvcGVydHlOb2RlKCksXG4gICAgICAgICAgcHJvcGVydHkgPSBwcm9wZXJ0eUZyb21Qcm9wZXJ0eU5vZGUocHJvcGVydHlOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUHJvcGVydHlEZWNsYXJhdGlvbk5vZGUocHJvcGVydHlEZWNsYXJhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBwcm9wZXJ0eU5hbWUgPSBwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZS5nZXRQcm9wZXJ0eU5hbWUoKSxcbiAgICAgICAgICBub21pbmFsVHlwZU5hbWUgPSBwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZS5nZXROb21pbmFsVHlwZU5hbWUoKSxcbiAgICAgICAgICBuYW1lID0gcHJvcGVydHlOYW1lLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gbmFtZSwgIC8vL1xuICAgICAgICAgIHByb3BlcnR5ID0gbmV3IFByb3BlcnR5KHN0cmluZywgbmFtZSwgbm9taW5hbFR5cGVOYW1lKTtcblxuICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHByb3BlcnR5RnJvbVByb3BlcnR5Tm9kZShwcm9wZXJ0eU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9wZXJ0eSB9ID0gc3RydWN0dXJlLFxuICAgICAgICBwcm9wZXJ0eU5hbWUgPSBwcm9wZXJ0eU5vZGUuZ2V0UHJvcGVydHlOYW1lKCksXG4gICAgICAgIG5vbWluYWxUeXBlTmFtZSA9IG51bGwsXG4gICAgICAgIG5hbWUgPSBwcm9wZXJ0eU5hbWUsICAvLy9cbiAgICAgICAgc3RyaW5nID0gbmFtZSwgIC8vL1xuICAgICAgICBwcm9wZXJ0eSA9IG5ldyBQcm9wZXJ0eShzdHJpbmcsIG5hbWUsIG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgcmV0dXJuIHByb3BlcnR5O1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIlByb3BlcnR5Iiwic3RyaW5nIiwibmFtZSIsIm5vbWluYWxUeXBlTmFtZSIsImdldFN0cmluZyIsImdldE5hbWUiLCJnZXROb21pbmFsVHlwZU5hbWUiLCJtYXRjaFByb3BlcnR5TmFtZSIsInByb3BlcnR5TmFtZSIsInByb3BlcnR5TmFtZU1hdGNoZXMiLCJtYXRjaE5vbWluYWxUeXBlTmFtZSIsIm5vbWluYWxUeXBlTmFtZU1hdGNoZXMiLCJ0b0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJjb250ZXh0IiwicHJvcGVydHkiLCJmcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUiLCJwcm9wZXJ0eVJlbGF0aW9uTm9kZSIsInByb3BlcnR5Tm9kZSIsImdldFByb3BlcnR5Tm9kZSIsInByb3BlcnR5RnJvbVByb3BlcnR5Tm9kZSIsImZyb21Qcm9wZXJ0eURlY2xhcmF0aW9uTm9kZSIsInByb3BlcnR5RGVjbGFyYXRpb25Ob2RlIiwiZ2V0UHJvcGVy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