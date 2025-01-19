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
                var variableType = this.variable.getType(), propertyNames = this.property.getNames(), variableTypeProperties = variableType.getProperties(), variableTypeProperty = variableTypeProperties.find(function(variableTypeProperty) {
                    var propertyNamesMatch = variableTypeProperty.matchPropertyNames(propertyNames);
                    if (propertyNamesMatch) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vcmVsYXRpb24vcHJvcGVydHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi8uLi9kb21cIjtcblxuY29uc3QgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcHJvcGVydHlSZWxhdGlvbi92YXJpYWJsZVwiKSxcbiAgICAgIHByb3BlcnR5Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Byb3BlcnR5UmVsYXRpb24vcHJvcGVydHlcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFByb3BlcnR5UmVsYXRpb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5vZGUsIHRva2VucywgcHJvcGVydHksIHZhcmlhYmxlKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICB0aGlzLnByb3BlcnR5ID0gcHJvcGVydHk7XG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXRQcm9wZXJ0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wZXJ0eTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHsgcmV0dXJuIHRoaXMucHJvcGVydHkuZ2V0VHlwZSgpOyB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb3BlcnR5UmVsYXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9JyBwcm9wZXJ0eSByZWxhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgdmFyaWFibGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5VmFyaWFibGUoY29udGV4dCk7XG5cbiAgICBpZiAodmFyaWFibGVWZXJpZmllZCkge1xuICAgICAgY29uc3QgcHJvcGVydHlWZXJpZmllZCA9IHRoaXMudmVyaWZ5UHJvcGVydHkoY29udGV4dCk7XG5cbiAgICAgIGlmIChwcm9wZXJ0eVZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSB0aGlzLnByb3BlcnR5LmdldFR5cGUoKTtcblxuICAgICAgICB0aGlzLnZhcmlhYmxlLnNldFR5cGUodHlwZSk7XG5cbiAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9JyBwcm9wZXJ0eSByZWxhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlWYXJpYWJsZShjb250ZXh0KSB7XG4gICAgbGV0IHZhcmlhYmxlVmVyaWZ5ZWQ7XG5cbiAgICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IHRoaXMudmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcHJvcGVydHlSZWxhdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cHJvcGVydHlSZWxhdGlvblN0cmluZ30nIHByb3BlcnR5IHJlbGF0aW9uJ3MgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmApO1xuXG4gICAgdmFyaWFibGVWZXJpZnllZCA9IHRoaXMudmFyaWFibGUudmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgaWYgKHZhcmlhYmxlVmVyaWZ5ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nfScgcHJvcGVydHkgcmVsYXRpb24ncyAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZVZlcmlmeWVkO1xuICB9XG5cbiAgdmVyaWZ5UHJvcGVydHkoY29udGV4dCkge1xuICAgIGxldCBwcm9wZXJ0eVZlcmlmaWVkO1xuXG4gICAgY29uc3QgcHJvcGVydHlTdHJpbmcgPSB0aGlzLnByb3BlcnR5LmdldFN0cmluZygpLFxuICAgICAgICAgIHByb3BlcnR5UmVsYXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9JyBwcm9wZXJ0eSByZWxhdGlvbidzICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkuLi5gKTtcblxuICAgIGNvbnN0IHZhcmlhYmxlVHlwZSA9IHRoaXMudmFyaWFibGUuZ2V0VHlwZSgpLFxuICAgICAgICAgIHByb3BlcnR5TmFtZXMgPSB0aGlzLnByb3BlcnR5LmdldE5hbWVzKCksXG4gICAgICAgICAgdmFyaWFibGVUeXBlUHJvcGVydGllcyA9IHZhcmlhYmxlVHlwZS5nZXRQcm9wZXJ0aWVzKCksXG4gICAgICAgICAgdmFyaWFibGVUeXBlUHJvcGVydHkgPSB2YXJpYWJsZVR5cGVQcm9wZXJ0aWVzLmZpbmQoKHZhcmlhYmxlVHlwZVByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9wZXJ0eU5hbWVzTWF0Y2ggPSB2YXJpYWJsZVR5cGVQcm9wZXJ0eS5tYXRjaFByb3BlcnR5TmFtZXMocHJvcGVydHlOYW1lcyk7XG5cbiAgICAgICAgICAgIGlmIChwcm9wZXJ0eU5hbWVzTWF0Y2gpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIGlmICh2YXJpYWJsZVR5cGVQcm9wZXJ0eSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFyaWFibGVTdHJpbmcgPSB0aGlzLnZhcmlhYmxlLmdldFN0cmluZygpLFxuICAgICAgICAgICAgdmFyaWFibGVUeXBlTmFtZSA9IHZhcmlhYmxlVHlwZS5nZXROYW1lKCk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtwcm9wZXJ0eU5hbWV9JyBwcm9wZXJ0eSBpcyBub3QgYSBwcm9wZXJ0eSBvZiB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSdzICcke3ZhcmlhYmxlVHlwZU5hbWV9JyB0eXBlLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlID0gdmFyaWFibGVUeXBlO1xuXG4gICAgICB0aGlzLnByb3BlcnR5LnNldFR5cGUodHlwZSk7XG5cbiAgICAgIHByb3BlcnR5VmVyaWZpZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChwcm9wZXJ0eVZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cHJvcGVydHlSZWxhdGlvblN0cmluZ30nIHByb3BlcnR5IHJlbGF0aW9uJ3MgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydHlWZXJpZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9wZXJ0eVJlbGF0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgVmFyaWFibGUsIFByb3BlcnR5IH0gPSBkb20sXG4gICAgICAgICAgbm9kZSA9IHByb3BlcnR5UmVsYXRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgdG9rZW5zID0gY29udGV4dC5ub2RlQXNUb2tlbnMobm9kZSksXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkocHJvcGVydHlSZWxhdGlvbk5vZGUpLFxuICAgICAgICAgIHByb3BlcnR5Tm9kZSA9IHByb3BlcnR5Tm9kZVF1ZXJ5KHByb3BlcnR5UmVsYXRpb25Ob2RlKSxcbiAgICAgICAgICBwcm9wZXJ0eSA9IFByb3BlcnR5LmZyb21Qcm9wZXJ0eU5vZGUocHJvcGVydHlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBwcm9wZXJ0eVJlbGF0aW9uID0gbmV3IFByb3BlcnR5UmVsYXRpb24oc3RyaW5nLCBub2RlLCB0b2tlbnMsIHByb3BlcnR5LCB2YXJpYWJsZSk7XG5cbiAgICByZXR1cm4gcHJvcGVydHlSZWxhdGlvbjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsidmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJwcm9wZXJ0eU5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiUHJvcGVydHlSZWxhdGlvbiIsInN0cmluZyIsIm5vZGUiLCJ0b2tlbnMiLCJwcm9wZXJ0eSIsInZhcmlhYmxlIiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsImdldFRva2VucyIsImdldFByb3BlcnR5IiwiZ2V0VmFyaWFibGUiLCJnZXRUeXBlIiwidmVyaWZ5IiwiY29udGV4dCIsInZlcmlmaWVkIiwicHJvcGVydHlSZWxhdGlvblN0cmluZyIsInRyYWNlIiwidmFyaWFibGVWZXJpZmllZCIsInZlcmlmeVZhcmlhYmxlIiwicHJvcGVydHlWZXJpZmllZCIsInZlcmlmeVByb3BlcnR5IiwidHlwZSIsInNldFR5cGUiLCJkZWJ1ZyIsInZhcmlhYmxlVmVyaWZ5ZWQiLCJ2YXJpYWJsZVN0cmluZyIsInByb3BlcnR5U3RyaW5nIiwidmFyaWFibGVUeXBlIiwicHJvcGVydHlOYW1lcyIsImdldE5hbWVzIiwidmFyaWFibGVUeXBlUHJvcGVydGllcyIsImdldFByb3BlcnRpZXMiLCJ2YXJpYWJsZVR5cGVQcm9wZXJ0eSIsImZpbmQiLCJwcm9wZXJ0eU5hbWVzTWF0Y2giLCJtYXRjaFByb3BlcnR5TmFtZXMiLCJ2YXJpYWJsZVR5cGVOYW1lIiwiZ2V0TmFtZSIsInByb3BlcnR5TmFtZSIsImZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZSIsInByb3BlcnR5UmVsYXRpb25Ob2RlIiwiVmFyaWFibGUiLCJkb20iLCJQcm9wZXJ0eSIsIm5vZGVBc1N0cmluZyIsIm5vZGVBc1Rva2VucyIsInZhcmlhYmxlTm9kZSIsInByb3BlcnR5Tm9kZSIsImZyb21Qcm9wZXJ0eU5vZGUiLCJmcm9tVmFyaWFibGVOb2RlIiwicHJvcGVydHlSZWxhdGlvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7OzJEQVJnQjtxQkFFVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzFCLElBQU1BLG9CQUFvQkMsSUFBQUEsZ0JBQVMsRUFBQywrQkFDOUJDLG9CQUFvQkQsSUFBQUEsZ0JBQVMsRUFBQztJQUVwQyxXQUFlRSxJQUFBQSxnQkFBVyxxQ0FBQzthQUFNQyxpQkFDbkJDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsUUFBUTtnQ0FEckJMO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUks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