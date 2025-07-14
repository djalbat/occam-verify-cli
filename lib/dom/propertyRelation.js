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
var propertyAssertionPropertyRelationNodeQuery = (0, _query.nodeQuery)("/propertyAssertion/propertyRelation");
var _default = (0, _dom.domAssigned)((_PropertyRelation = /*#__PURE__*/ function() {
    function PropertyRelation(string, node, tokens, property, term) {
        _class_call_check(this, PropertyRelation);
        this.string = string;
        this.node = node;
        this.tokens = tokens;
        this.property = property;
        this.term = term;
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
            key: "getTerm",
            value: function getTerm() {
                return this.term;
            }
        },
        {
            key: "getType",
            value: function getType() {
                return this.property.getType();
            }
        },
        {
            key: "isEqualTo",
            value: function isEqualTo(propertyRelation) {
                var propertyRelationString = propertyRelation.getString(), equalTo = propertyRelationString === this.string;
                return equalTo;
            }
        },
        {
            key: "verify",
            value: function verify(context) {
                var verified = false;
                var propertyRelationString = this.string; ///
                context.trace("Verifying the '".concat(propertyRelationString, "' property relation..."));
                var termVerified = this.verifyTerm(context);
                if (termVerified) {
                    var propertyVerified = this.verifyProperty(context);
                    verified = propertyVerified;
                }
                if (verified) {
                    context.debug("...verified the '".concat(propertyRelationString, "' property relation."));
                }
                return verified;
            }
        },
        {
            key: "verifyTerm",
            value: function verifyTerm(context) {
                var termVerified;
                var termString = this.term.getString(), propertyRelationString = this.string; ///
                context.trace("Verifying the '".concat(propertyRelationString, "' property relation's '").concat(termString, "' term..."));
                termVerified = this.term.verify(context, function() {
                    var verifiedAhead = true;
                    return verifiedAhead;
                });
                if (termVerified) {
                    context.debug("...verified the '".concat(propertyRelationString, "' property relation's '").concat(termString, "' term."));
                }
                return termVerified;
            }
        },
        {
            key: "verifyProperty",
            value: function verifyProperty(context) {
                var propertyVerified;
                var propertyString = this.property.getString(), propertyRelationString = this.string; ///
                context.trace("Verifying the '".concat(propertyRelationString, "' property relation's '").concat(propertyString, "' property..."));
                var variableType = this.term.getType(), propertyNames = this.property.getNames(), variableTypeProperties = variableType.getProperties(), variableTypeProperty = variableTypeProperties.find(function(variableTypeProperty) {
                    var propertyNamesMatch = variableTypeProperty.matchPropertyNames(propertyNames);
                    if (propertyNamesMatch) {
                        return true;
                    }
                }) || null;
                if (variableTypeProperty === null) {
                    var variableString = this.term.getString(), variableTypeString = variableType.getString();
                    context.debug("The '".concat(propertyNames, "' property is not a property of the '").concat(variableString, "' variable's '").concat(variableTypeString, "' type."));
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
            key: "fromPropertyAssertionNode",
            value: function fromPropertyAssertionNode(propertyAssertionNode, context) {
                var Term = _dom.default.Term, Property = _dom.default.Property, propertyAssertionPropertyRelationNode = propertyAssertionPropertyRelationNodeQuery(propertyAssertionNode), propertyRelationNode = propertyAssertionPropertyRelationNode, node = propertyRelationNode, string = context.nodeAsString(node), tokens = context.nodeAsTokens(node), property = Property.fromPropertyRelationNode(propertyRelationNode, context), term = Term.fromPropertyRelationNode(propertyRelationNode, context), propertyRelation = new PropertyRelation(string, node, tokens, property, term);
                return propertyRelation;
            }
        }
    ]);
    return PropertyRelation;
}(), _define_property(_PropertyRelation, "name", "PropertyRelation"), _PropertyRelation));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcHJvcGVydHlSZWxhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuXG5jb25zdCBwcm9wZXJ0eUFzc2VydGlvblByb3BlcnR5UmVsYXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcHJvcGVydHlBc3NlcnRpb24vcHJvcGVydHlSZWxhdGlvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgUHJvcGVydHlSZWxhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSwgdG9rZW5zLCBwcm9wZXJ0eSwgdGVybSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgdGhpcy5wcm9wZXJ0eSA9IHByb3BlcnR5O1xuICAgIHRoaXMudGVybSA9IHRlcm07XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGdldFByb3BlcnR5KCkge1xuICAgIHJldHVybiB0aGlzLnByb3BlcnR5O1xuICB9XG5cbiAgZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHsgcmV0dXJuIHRoaXMucHJvcGVydHkuZ2V0VHlwZSgpOyB9XG5cbiAgaXNFcXVhbFRvKHByb3BlcnR5UmVsYXRpb24pIHtcbiAgICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nID0gcHJvcGVydHlSZWxhdGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBlcXVhbFRvID0gKHByb3BlcnR5UmVsYXRpb25TdHJpbmcgPT09IHRoaXMuc3RyaW5nKTtcblxuICAgIHJldHVybiBlcXVhbFRvO1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb3BlcnR5UmVsYXRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9JyBwcm9wZXJ0eSByZWxhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgdGVybVZlcmlmaWVkID0gdGhpcy52ZXJpZnlUZXJtKGNvbnRleHQpO1xuXG4gICAgaWYgKHRlcm1WZXJpZmllZCkge1xuICAgICAgY29uc3QgcHJvcGVydHlWZXJpZmllZCA9IHRoaXMudmVyaWZ5UHJvcGVydHkoY29udGV4dCk7XG5cbiAgICAgIHZlcmlmaWVkID0gcHJvcGVydHlWZXJpZmllZDtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nfScgcHJvcGVydHkgcmVsYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5VGVybShjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1WZXJpZmllZDtcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0aGlzLnRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcHJvcGVydHlSZWxhdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cHJvcGVydHlSZWxhdGlvblN0cmluZ30nIHByb3BlcnR5IHJlbGF0aW9uJ3MgJyR7dGVybVN0cmluZ30nIHRlcm0uLi5gKTtcblxuICAgIHRlcm1WZXJpZmllZCA9IHRoaXMudGVybS52ZXJpZnkoY29udGV4dCwgKCkgPT4ge1xuICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgIH0pO1xuXG4gICAgaWYgKHRlcm1WZXJpZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9JyBwcm9wZXJ0eSByZWxhdGlvbidzICcke3Rlcm1TdHJpbmd9JyB0ZXJtLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlQcm9wZXJ0eShjb250ZXh0KSB7XG4gICAgbGV0IHByb3BlcnR5VmVyaWZpZWQ7XG5cbiAgICBjb25zdCBwcm9wZXJ0eVN0cmluZyA9IHRoaXMucHJvcGVydHkuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcHJvcGVydHlSZWxhdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cHJvcGVydHlSZWxhdGlvblN0cmluZ30nIHByb3BlcnR5IHJlbGF0aW9uJ3MgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eS4uLmApO1xuXG4gICAgY29uc3QgdmFyaWFibGVUeXBlID0gdGhpcy50ZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICBwcm9wZXJ0eU5hbWVzID0gdGhpcy5wcm9wZXJ0eS5nZXROYW1lcygpLFxuICAgICAgICAgIHZhcmlhYmxlVHlwZVByb3BlcnRpZXMgPSB2YXJpYWJsZVR5cGUuZ2V0UHJvcGVydGllcygpLFxuICAgICAgICAgIHZhcmlhYmxlVHlwZVByb3BlcnR5ID0gdmFyaWFibGVUeXBlUHJvcGVydGllcy5maW5kKCh2YXJpYWJsZVR5cGVQcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvcGVydHlOYW1lc01hdGNoID0gdmFyaWFibGVUeXBlUHJvcGVydHkubWF0Y2hQcm9wZXJ0eU5hbWVzKHByb3BlcnR5TmFtZXMpO1xuXG4gICAgICAgICAgICBpZiAocHJvcGVydHlOYW1lc01hdGNoKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAodmFyaWFibGVUeXBlUHJvcGVydHkgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlU3RyaW5nID0gdGhpcy50ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgICAgdmFyaWFibGVUeXBlU3RyaW5nID0gdmFyaWFibGVUeXBlLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7cHJvcGVydHlOYW1lc30nIHByb3BlcnR5IGlzIG5vdCBhIHByb3BlcnR5IG9mIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlJ3MgJyR7dmFyaWFibGVUeXBlU3RyaW5nfScgdHlwZS5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZSA9IHZhcmlhYmxlVHlwZTtcblxuICAgICAgdGhpcy5wcm9wZXJ0eS5zZXRUeXBlKHR5cGUpO1xuXG4gICAgICBwcm9wZXJ0eVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAocHJvcGVydHlWZXJpZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9JyBwcm9wZXJ0eSByZWxhdGlvbidzICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5VmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJvcGVydHlSZWxhdGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlKHByb3BlcnR5QXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgVGVybSwgUHJvcGVydHkgfSA9IGRvbSxcbiAgICAgICAgICBwcm9wZXJ0eUFzc2VydGlvblByb3BlcnR5UmVsYXRpb25Ob2RlID0gcHJvcGVydHlBc3NlcnRpb25Qcm9wZXJ0eVJlbGF0aW9uTm9kZVF1ZXJ5KHByb3BlcnR5QXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgcHJvcGVydHlSZWxhdGlvbk5vZGUgPSBwcm9wZXJ0eUFzc2VydGlvblByb3BlcnR5UmVsYXRpb25Ob2RlLCAvLy9cbiAgICAgICAgICBub2RlID0gcHJvcGVydHlSZWxhdGlvbk5vZGUsICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICB0b2tlbnMgPSBjb250ZXh0Lm5vZGVBc1Rva2Vucyhub2RlKSxcbiAgICAgICAgICBwcm9wZXJ0eSA9IFByb3BlcnR5LmZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgdGVybSA9IFRlcm0uZnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBwcm9wZXJ0eVJlbGF0aW9uID0gbmV3IFByb3BlcnR5UmVsYXRpb24oc3RyaW5nLCBub2RlLCB0b2tlbnMsIHByb3BlcnR5LCB0ZXJtKTtcblxuICAgIHJldHVybiBwcm9wZXJ0eVJlbGF0aW9uO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJwcm9wZXJ0eUFzc2VydGlvblByb3BlcnR5UmVsYXRpb25Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlByb3BlcnR5UmVsYXRpb24iLCJzdHJpbmciLCJub2RlIiwidG9rZW5zIiwicHJvcGVydHkiLCJ0ZXJtIiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsImdldFRva2VucyIsImdldFByb3BlcnR5IiwiZ2V0VGVybSIsImdldFR5cGUiLCJpc0VxdWFsVG8iLCJwcm9wZXJ0eVJlbGF0aW9uIiwicHJvcGVydHlSZWxhdGlvblN0cmluZyIsImVxdWFsVG8iLCJ2ZXJpZnkiLCJjb250ZXh0IiwidmVyaWZpZWQiLCJ0cmFjZSIsInRlcm1WZXJpZmllZCIsInZlcmlmeVRlcm0iLCJwcm9wZXJ0eVZlcmlmaWVkIiwidmVyaWZ5UHJvcGVydHkiLCJkZWJ1ZyIsInRlcm1TdHJpbmciLCJ2ZXJpZmllZEFoZWFkIiwicHJvcGVydHlTdHJpbmciLCJ2YXJpYWJsZVR5cGUiLCJwcm9wZXJ0eU5hbWVzIiwiZ2V0TmFtZXMiLCJ2YXJpYWJsZVR5cGVQcm9wZXJ0aWVzIiwiZ2V0UHJvcGVydGllcyIsInZhcmlhYmxlVHlwZVByb3BlcnR5IiwiZmluZCIsInByb3BlcnR5TmFtZXNNYXRjaCIsIm1hdGNoUHJvcGVydHlOYW1lcyIsInZhcmlhYmxlU3RyaW5nIiwidmFyaWFibGVUeXBlU3RyaW5nIiwidHlwZSIsInNldFR5cGUiLCJmcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlIiwicHJvcGVydHlBc3NlcnRpb25Ob2RlIiwiVGVybSIsImRvbSIsIlByb3BlcnR5IiwicHJvcGVydHlBc3NlcnRpb25Qcm9wZXJ0eVJlbGF0aW9uTm9kZSIsInByb3BlcnR5UmVsYXRpb25Ob2RlIiwibm9kZUFzU3RyaW5nIiwibm9kZUFzVG9rZW5zIiwiZnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7MkRBUGdCO3FCQUVVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHMUIsSUFBTUEsNkNBQTZDQyxJQUFBQSxnQkFBUyxFQUFDO0lBRTdELFdBQWVDLElBQUFBLGdCQUFXLHFDQUFDO2FBQU1DLGlCQUNuQkMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMs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