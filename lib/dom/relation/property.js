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
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../../dom"));
var _query = require("../../utilities/query");
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
var _PropertyRelation;
var variableNodeQuery = (0, _query.nodeQuery)("/propertyRelation/variable"), propertyNodeQuery = (0, _query.nodeQuery)("/propertyRelation/property");
var _default = (0, _dom.domAssigned)((_PropertyRelation = /*#__PURE__*/ function() {
    function PropertyRelation(string, node, tokens, property, variable) {
        _class_call_check(this, PropertyRelation);
        this.string = string;
        this.node = node;
        this.tokens = tokens;
        this.property = property;
        this.variable = variable;
    }
    _create_class(PropertyRelation, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        },
        {
            key: "getTokens",
            value: function getTokens() {
                return this.tokens;
            }
        },
        {
            key: "getProperty",
            value: function getProperty() {
                return this.property;
            }
        },
        {
            key: "getVariable",
            value: function getVariable() {
                return this.variable;
            }
        },
        {
            key: "getType",
            value: function getType() {
                return this.property.getType();
            }
        },
        {
            key: "verify",
            value: function verify(context) {
                var verified = false;
                var propertyRelationString = this.string; ///
                context.trace("Verifying the '".concat(propertyRelationString, "' property relation..."));
                var variableVerified = this.verifyVariable(context);
                if (variableVerified) {
                    var propertyVerified = this.verifyProperty(context);
                    if (propertyVerified) {
                        var type = this.property.getType();
                        this.variable.setType(type);
                        verified = true;
                    }
                }
                if (verified) {
                    context.debug("...verified the '".concat(propertyRelationString, "' property relation."));
                }
                return verified;
            }
        },
        {
            key: "verifyVariable",
            value: function verifyVariable(context) {
                var variableVerifyed;
                var variableString = this.variable.getString(), propertyRelationString = this.string; ///
                context.trace("Verifying the '".concat(propertyRelationString, "' property relation's '").concat(variableString, "' variable..."));
                variableVerifyed = this.variable.verify(context);
                if (variableVerifyed) {
                    context.debug("...verified the '".concat(propertyRelationString, "' property relation's '").concat(variableString, "' variable."));
                }
                return variableVerifyed;
            }
        },
        {
            key: "verifyProperty",
            value: function verifyProperty(context) {
                var propertyVerified;
                var propertyString = this.property.getString(), propertyRelationString = this.string; ///
                context.trace("Verifying the '".concat(propertyRelationString, "' property relation's '").concat(propertyString, "' property..."));
                var variableType = this.variable.getType(), propertyName = this.property.getName(), variableTypeProperties = variableType.getProperties(), variableTypeProperty = variableTypeProperties.find(function(variableTypeProperty) {
                    var propertyNameMatches = variableTypeProperty.matchPropertyName(propertyName);
                    if (propertyNameMatches) {
                        return true;
                    }
                }) || null;
                if (variableTypeProperty === null) {
                    var variableString = this.variable.getString(), variableTypeName = variableType.getName();
                    context.debug("The '".concat(propertyName, "' property is not a property of the '").concat(variableString, "' variable's '").concat(variableTypeName, "' type."));
                } else {
                    var type = variableType;
                    this.property.setType(type);
                    propertyVerified = true;
                }
                if (propertyVerified) {
                    context.debug("...verified the '".concat(propertyRelationString, "' property relation's '").concat(propertyString, "' property."));
                }
                return propertyVerified;
            }
        }
    ], [
        {
            key: "fromPropertyRelationNode",
            value: function fromPropertyRelationNode(propertyRelationNode, context) {
                var Variable = _dom.default.Variable, Property = _dom.default.Property, node = propertyRelationNode, string = context.nodeAsString(node), tokens = context.nodeAsTokens(node), variableNode = variableNodeQuery(propertyRelationNode), propertyNode = propertyNodeQuery(propertyRelationNode), property = Property.fromPropertyNode(propertyNode, context), variable = Variable.fromVariableNode(variableNode, context), propertyRelation = new PropertyRelation(string, node, tokens, property, variable);
                return propertyRelation;
            }
        }
    ]);
    return PropertyRelation;
}(), _define_property(_PropertyRelation, "name", "PropertyRelation"), _PropertyRelation));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vcmVsYXRpb24vcHJvcGVydHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi8uLi9kb21cIjtcblxuY29uc3QgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcHJvcGVydHlSZWxhdGlvbi92YXJpYWJsZVwiKSxcbiAgICAgIHByb3BlcnR5Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Byb3BlcnR5UmVsYXRpb24vcHJvcGVydHlcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFByb3BlcnR5UmVsYXRpb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5vZGUsIHRva2VucywgcHJvcGVydHksIHZhcmlhYmxlKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICB0aGlzLnByb3BlcnR5ID0gcHJvcGVydHk7XG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXRQcm9wZXJ0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wZXJ0eTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHsgcmV0dXJuIHRoaXMucHJvcGVydHkuZ2V0VHlwZSgpOyB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb3BlcnR5UmVsYXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9JyBwcm9wZXJ0eSByZWxhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgdmFyaWFibGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5VmFyaWFibGUoY29udGV4dCk7XG5cbiAgICBpZiAodmFyaWFibGVWZXJpZmllZCkge1xuICAgICAgY29uc3QgcHJvcGVydHlWZXJpZmllZCA9IHRoaXMudmVyaWZ5UHJvcGVydHkoY29udGV4dCk7XG5cbiAgICAgIGlmIChwcm9wZXJ0eVZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSB0aGlzLnByb3BlcnR5LmdldFR5cGUoKTtcblxuICAgICAgICB0aGlzLnZhcmlhYmxlLnNldFR5cGUodHlwZSk7XG5cbiAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9JyBwcm9wZXJ0eSByZWxhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlWYXJpYWJsZShjb250ZXh0KSB7XG4gICAgbGV0IHZhcmlhYmxlVmVyaWZ5ZWQ7XG5cbiAgICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IHRoaXMudmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcHJvcGVydHlSZWxhdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cHJvcGVydHlSZWxhdGlvblN0cmluZ30nIHByb3BlcnR5IHJlbGF0aW9uJ3MgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmApO1xuXG4gICAgdmFyaWFibGVWZXJpZnllZCA9IHRoaXMudmFyaWFibGUudmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgaWYgKHZhcmlhYmxlVmVyaWZ5ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nfScgcHJvcGVydHkgcmVsYXRpb24ncyAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZVZlcmlmeWVkO1xuICB9XG5cbiAgdmVyaWZ5UHJvcGVydHkoY29udGV4dCkge1xuICAgIGxldCBwcm9wZXJ0eVZlcmlmaWVkO1xuXG4gICAgY29uc3QgcHJvcGVydHlTdHJpbmcgPSB0aGlzLnByb3BlcnR5LmdldFN0cmluZygpLFxuICAgICAgICAgIHByb3BlcnR5UmVsYXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9JyBwcm9wZXJ0eSByZWxhdGlvbidzICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkuLi5gKTtcblxuICAgIGNvbnN0IHZhcmlhYmxlVHlwZSA9IHRoaXMudmFyaWFibGUuZ2V0VHlwZSgpLFxuICAgICAgICAgIHByb3BlcnR5TmFtZSA9IHRoaXMucHJvcGVydHkuZ2V0TmFtZSgpLFxuICAgICAgICAgIHZhcmlhYmxlVHlwZVByb3BlcnRpZXMgPSB2YXJpYWJsZVR5cGUuZ2V0UHJvcGVydGllcygpLFxuICAgICAgICAgIHZhcmlhYmxlVHlwZVByb3BlcnR5ID0gdmFyaWFibGVUeXBlUHJvcGVydGllcy5maW5kKCh2YXJpYWJsZVR5cGVQcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvcGVydHlOYW1lTWF0Y2hlcyA9IHZhcmlhYmxlVHlwZVByb3BlcnR5Lm1hdGNoUHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChwcm9wZXJ0eU5hbWVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAodmFyaWFibGVUeXBlUHJvcGVydHkgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlU3RyaW5nID0gdGhpcy52YXJpYWJsZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIHZhcmlhYmxlVHlwZU5hbWUgPSB2YXJpYWJsZVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7cHJvcGVydHlOYW1lfScgcHJvcGVydHkgaXMgbm90IGEgcHJvcGVydHkgb2YgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUncyAnJHt2YXJpYWJsZVR5cGVOYW1lfScgdHlwZS5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZSA9IHZhcmlhYmxlVHlwZTtcblxuICAgICAgdGhpcy5wcm9wZXJ0eS5zZXRUeXBlKHR5cGUpO1xuXG4gICAgICBwcm9wZXJ0eVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAocHJvcGVydHlWZXJpZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9JyBwcm9wZXJ0eSByZWxhdGlvbidzICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5VmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJvcGVydHlSZWxhdGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUocHJvcGVydHlSZWxhdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IFZhcmlhYmxlLCBQcm9wZXJ0eSB9ID0gZG9tLFxuICAgICAgICAgIG5vZGUgPSBwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIHRva2VucyA9IGNvbnRleHQubm9kZUFzVG9rZW5zKG5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHByb3BlcnR5UmVsYXRpb25Ob2RlKSxcbiAgICAgICAgICBwcm9wZXJ0eU5vZGUgPSBwcm9wZXJ0eU5vZGVRdWVyeShwcm9wZXJ0eVJlbGF0aW9uTm9kZSksXG4gICAgICAgICAgcHJvcGVydHkgPSBQcm9wZXJ0eS5mcm9tUHJvcGVydHlOb2RlKHByb3BlcnR5Tm9kZSwgY29udGV4dCksXG4gICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgcHJvcGVydHlSZWxhdGlvbiA9IG5ldyBQcm9wZXJ0eVJlbGF0aW9uKHN0cmluZywgbm9kZSwgdG9rZW5zLCBwcm9wZXJ0eSwgdmFyaWFibGUpO1xuXG4gICAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb247XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbInZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwicHJvcGVydHlOb2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlByb3BlcnR5UmVsYXRpb24iLCJzdHJpbmciLCJub2RlIiwidG9rZW5zIiwicHJvcGVydHkiLCJ2YXJpYWJsZSIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXRUb2tlbnMiLCJnZXRQcm9wZXJ0eSIsImdldFZhcmlhYmxlIiwiZ2V0VHlwZSIsInZlcmlmeSIsImNvbnRleHQiLCJ2ZXJpZmllZCIsInByb3BlcnR5UmVsYXRpb25TdHJpbmciLCJ0cmFjZSIsInZhcmlhYmxlVmVyaWZpZWQiLCJ2ZXJpZnlWYXJpYWJsZSIsInByb3BlcnR5VmVyaWZpZWQiLCJ2ZXJpZnlQcm9wZXJ0eSIsInR5cGUiLCJzZXRUeXBlIiwiZGVidWciLCJ2YXJpYWJsZVZlcmlmeWVkIiwidmFyaWFibGVTdHJpbmciLCJwcm9wZXJ0eVN0cmluZyIsInZhcmlhYmxlVHlwZSIsInByb3BlcnR5TmFtZSIsImdldE5hbWUiLCJ2YXJpYWJsZVR5cGVQcm9wZXJ0aWVzIiwiZ2V0UHJvcGVydGllcyIsInZhcmlhYmxlVHlwZVByb3BlcnR5IiwiZmluZCIsInByb3BlcnR5TmFtZU1hdGNoZXMiLCJtYXRjaFByb3BlcnR5TmFtZSIsInZhcmlhYmxlVHlwZU5hbWUiLCJmcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUiLCJwcm9wZXJ0eVJlbGF0aW9uTm9kZSIsIlZhcmlhYmxlIiwiZG9tIiwiUHJvcGVydHkiLCJub2RlQXNTdHJpbmciLCJub2RlQXNUb2tlbnMiLCJ2YXJpYWJsZU5vZGUiLCJwcm9wZXJ0eU5vZGUiLCJmcm9tUHJvcGVydHlOb2RlIiwiZnJvbVZhcmlhYmxlTm9kZSIsInByb3BlcnR5UmVsYXRpb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OzsyREFSZ0I7cUJBRVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUcxQixJQUFNQSxvQkFBb0JDLElBQUFBLGdCQUFTLEVBQUMsK0JBQzlCQyxvQkFBb0JELElBQUFBLGdCQUFTLEVBQUM7SUFFcEMsV0FBZUUsSUFBQUEsZ0JBQVcscUNBQUM7YUFBTUMsaUJBQ25CQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFFBQVE7Z0NBRHJCTDtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxRQUFRLEdBQUdBOzs7O1lBR2xCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLE1BQU07WUFDcEI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLElBQUk7WUFDbEI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLE1BQU07WUFDcEI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLFFBQVE7WUFDdEI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLFFBQVE7WUFDdEI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQVksT0FBTyxJQUFJLENBQUNQLFFBQVEsQ0FBQ08sT0FBTztZQUFJOzs7WUFFNUNDLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxPQUFPO2dCQUNaLElBQUlDLFdBQVc7Z0JBRWYsSUFBTUMseUJBQXlCLElBQUksQ0FBQ2QsTUFBTSxFQUFFLEdBQUc7Z0JBRS9DWSxRQUFRRyxLQUFLLENBQUMsQUFBQyxrQkFBd0MsT0FBdkJELHdCQUF1QjtnQkFFdkQsSUFBTUUsbUJBQW1CLElBQUksQ0FBQ0MsY0FBYyxDQUFDTDtnQkFFN0MsSUFBSUksa0JBQWtCO29CQUNwQixJQUFNRSxtQkFBbUIsSUFBSSxDQUFDQyxjQUFjLENBQUNQO29CQUU3QyxJQUFJTSxrQkFBa0I7d0JBQ3BCLElBQU1FLE9BQU8sSUFBSSxDQUFDakIsUUFBUSxDQUFDTyxPQUFPO3dCQUVsQyxJQUFJLENBQUNOLFFBQVEsQ0FBQ2lCLE9BQU8sQ0FBQ0Q7d0JBRXRCUCxXQUFXO29CQUNiO2dCQUNGO2dCQUVBLElBQUlBLFVBQVU7b0JBQ1pELFFBQVFVLEtBQUssQ0FBQyxBQUFDLG9CQUEwQyxPQUF2QlIsd0JBQXVCO2dCQUMzRDtnQkFFQSxPQUFPRDtZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVMLE9BQU87Z0JBQ3BCLElBQUlXO2dCQUVKLElBQU1DLGlCQUFpQixJQUFJLENBQUNwQixRQUFRLENBQUNDLFNBQVMsSUFDeENTLHlCQUF5QixJQUFJLENBQUNkLE1BQU0sRUFBRSxHQUFHO2dCQUUvQ1ksUUFBUUcsS0FBSyxDQUFDLEFBQUMsa0JBQWlFUyxPQUFoRFYsd0JBQXVCLDJCQUF3QyxPQUFmVSxnQkFBZTtnQkFFL0ZELG1CQUFtQixJQUFJLENBQUNuQixRQUFRLENBQUNPLE1BQU0sQ0FBQ0M7Z0JBRXhDLElBQUlXLGtCQUFrQjtvQkFDcEJYLFFBQVFVLEtBQUssQ0FBQyxBQUFDLG9CQUFtRUUsT0FBaERWLHdCQUF1QiwyQkFBd0MsT0FBZlUsZ0JBQWU7Z0JBQ25HO2dCQUVBLE9BQU9EO1lBQ1Q7OztZQUVBSixLQUFBQTttQkFBQUEsU0FBQUEsZUFBZVAsT0FBTztnQkFDcEIsSUFBSU07Z0JBRUosSUFBTU8saUJBQWlCLElBQUksQ0FBQ3RCLFFBQVEsQ0FBQ0UsU0FBUyxJQUN4Q1MseUJBQXlCLElBQUksQ0FBQ2QsTUFBTSxFQUFFLEdBQUc7Z0JBRS9DWSxRQUFRRyxLQUFLLENBQUMsQUFBQyxrQkFBaUVVLE9BQWhEWCx3QkFBdUIsMkJBQXdDLE9BQWZXLGdCQUFlO2dCQUUvRixJQUFNQyxlQUFlLElBQUksQ0FBQ3RCLFFBQVEsQ0FBQ00sT0FBTyxJQUNwQ2lCLGVBQWUsSUFBSSxDQUFDeEIsUUFBUSxDQUFDeUIsT0FBTyxJQUNwQ0MseUJBQXlCSCxhQUFhSSxhQUFhLElBQ25EQyx1QkFBdUJGLHVCQUF1QkcsSUFBSSxDQUFDLFNBQUNEO29CQUNsRCxJQUFNRSxzQkFBc0JGLHFCQUFxQkcsaUJBQWlCLENBQUNQO29CQUVuRSxJQUFJTSxxQkFBcUI7d0JBQ3ZCLE9BQU87b0JBQ1Q7Z0JBQ0YsTUFBTTtnQkFFWixJQUFJRix5QkFBeUIsTUFBTTtvQkFDakMsSUFBTVAsaUJBQWlCLElBQUksQ0FBQ3BCLFFBQVEsQ0FBQ0MsU0FBUyxJQUN4QzhCLG1CQUFtQlQsYUFBYUUsT0FBTztvQkFFN0NoQixRQUFRVSxLQUFLLENBQUMsQUFBQyxRQUEyREUsT0FBcERHLGNBQWEseUNBQXNFUSxPQUEvQlgsZ0JBQWUsa0JBQWlDLE9BQWpCVyxrQkFBaUI7Z0JBQzVILE9BQU87b0JBQ0wsSUFBTWYsT0FBT007b0JBRWIsSUFBSSxDQUFDdkIsUUFBUSxDQUFDa0IsT0FBTyxDQUFDRDtvQkFFdEJGLG1CQUFtQjtnQkFDckI7Z0JBRUEsSUFBSUEsa0JBQWtCO29CQUNwQk4sUUFBUVUsS0FBSyxDQUFDLEFBQUMsb0JBQW1FRyxPQUFoRFgsd0JBQXVCLDJCQUF3QyxPQUFmVyxnQkFBZTtnQkFDbkc7Z0JBRUEsT0FBT1A7WUFDVDs7OztZQUlPa0IsS0FBQUE7bUJBQVAsU0FBT0EseUJBQXlCQyxvQkFBb0IsRUFBRXpCLE9BQU87Z0JBQzNELElBQVEwQixXQUF1QkMsWUFBRyxDQUExQkQsVUFBVUUsV0FBYUQsWUFBRyxDQUFoQkMsVUFDWnZDLE9BQU9vQyxzQkFDUHJDLFNBQVNZLFFBQVE2QixZQUFZLENBQUN4QyxPQUM5QkMsU0FBU1UsUUFBUThCLFlBQVksQ0FBQ3pDLE9BQzlCMEMsZUFBZWhELGtCQUFrQjBDLHVCQUNqQ08sZUFBZS9DLGtCQUFrQndDLHVCQUNqQ2xDLFdBQVdxQyxTQUFTSyxnQkFBZ0IsQ0FBQ0QsY0FBY2hDLFVBQ25EUixXQUFXa0MsU0FBU1EsZ0JBQWdCLENBQUNILGNBQWMvQixVQUNuRG1DLG1CQUFtQixJQUFJaEQsaUJBQWlCQyxRQUFRQyxNQUFNQyxRQUFRQyxVQUFVQztnQkFFOUUsT0FBTzJDO1lBQ1Q7Ozs7S0FkQSxvQ0FBT0MsUUFBTyJ9