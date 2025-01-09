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
var termNodeQuery = (0, _query.nodeQuery)("/propertyRelation/term"), propertyNodeQuery = (0, _query.nodeQuery)("/propertyRelation/property"), propertyRelationNodeQuery = (0, _query.nodeQuery)("/term/propertyRelation");
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
            key: "verify",
            value: function verify(context) {
                var verified = false;
                var propertyRelationString = this.string; ///
                context.trace("Verifying the '".concat(propertyRelationString, "' property relation..."));
                var termVerified = this.verifyTerm(context);
                if (termVerified) {
                    var propertyVerified = this.verifyProperty(context);
                    if (propertyVerified) {
                        var type = this.property.getType();
                        this.term.setType(type);
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
            key: "verifyProperty",
            value: function verifyProperty(context) {
                var propertyVerified;
                var propertyString = this.property.getString(), propertyRelationString = this.string; ///
                context.trace("Verifying the '".concat(propertyRelationString, "' property relation's '").concat(propertyString, "' property..."));
                var termType = this.term.getType(), propertyName = this.property.getName(), termTypeProperties = termType.getProperties(), termTypeProperty = termTypeProperties.find(function(termTypeProperty) {
                    var propertyNameMatches = termTypeProperty.matchPropertyName(propertyName);
                    if (propertyNameMatches) {
                        return true;
                    }
                }) || null;
                if (termTypeProperty === null) {
                    var termString = this.term.getString(), termTypeName = termType.getName();
                    context.debug("The '".concat(propertyName, "' property is not a property of the '").concat(termString, "' term's '").concat(termTypeName, "' type."));
                } else {
                    var type = termType;
                    this.property.setType(type);
                    propertyVerified = true;
                }
                if (propertyVerified) {
                    context.debug("...verified the '".concat(propertyRelationString, "' property relation's '").concat(propertyString, "' property."));
                }
                return propertyVerified;
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
        }
    ], [
        {
            key: "fromTermNode",
            value: function fromTermNode(termNode, context) {
                var propertyRelation = null;
                var propertyRelationNode = propertyRelationNodeQuery(termNode);
                if (propertyRelationNode !== null) {
                    var Term = _dom.default.Term, Property = _dom.default.Property, node = propertyRelationNode, string = context.nodeAsString(node), tokens = context.nodeAsTokens(node), _$termNode = termNodeQuery(propertyRelationNode), propertyNode = propertyNodeQuery(propertyRelationNode), property = Property.fromPropertyNode(propertyNode, context), term = Term.fromTermNode(_$termNode, context);
                    propertyRelation = new PropertyRelation(string, node, tokens, property, term);
                }
                return propertyRelation;
            }
        }
    ]);
    return PropertyRelation;
}(), _define_property(_PropertyRelation, "name", "PropertyRelation"), _PropertyRelation));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vcmVsYXRpb24vcHJvcGVydHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi8uLi9kb21cIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9wZXJ0eVJlbGF0aW9uL3Rlcm1cIiksXG4gICAgICBwcm9wZXJ0eU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9wZXJ0eVJlbGF0aW9uL3Byb3BlcnR5XCIpLFxuICAgICAgcHJvcGVydHlSZWxhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3Byb3BlcnR5UmVsYXRpb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFByb3BlcnR5UmVsYXRpb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5vZGUsIHRva2VucywgcHJvcGVydHksIHRlcm0pIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXRQcm9wZXJ0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wZXJ0eTtcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7IHJldHVybiB0aGlzLnByb3BlcnR5LmdldFR5cGUoKTsgfVxuXG4gIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nfScgcHJvcGVydHkgcmVsYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHRlcm1WZXJpZmllZCA9IHRoaXMudmVyaWZ5VGVybShjb250ZXh0KTtcblxuICAgIGlmICh0ZXJtVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IHByb3BlcnR5VmVyaWZpZWQgPSB0aGlzLnZlcmlmeVByb3BlcnR5KGNvbnRleHQpO1xuXG4gICAgICBpZiAocHJvcGVydHlWZXJpZmllZCkge1xuICAgICAgICBjb25zdCB0eXBlID0gdGhpcy5wcm9wZXJ0eS5nZXRUeXBlKCk7XG5cbiAgICAgICAgdGhpcy50ZXJtLnNldFR5cGUodHlwZSk7XG5cbiAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9JyBwcm9wZXJ0eSByZWxhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlQcm9wZXJ0eShjb250ZXh0KSB7XG4gICAgbGV0IHByb3BlcnR5VmVyaWZpZWQ7XG5cbiAgICBjb25zdCBwcm9wZXJ0eVN0cmluZyA9IHRoaXMucHJvcGVydHkuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcHJvcGVydHlSZWxhdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cHJvcGVydHlSZWxhdGlvblN0cmluZ30nIHByb3BlcnR5IHJlbGF0aW9uJ3MgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eS4uLmApO1xuXG4gICAgY29uc3QgdGVybVR5cGUgPSB0aGlzLnRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgIHByb3BlcnR5TmFtZSA9IHRoaXMucHJvcGVydHkuZ2V0TmFtZSgpLFxuICAgICAgICAgIHRlcm1UeXBlUHJvcGVydGllcyA9IHRlcm1UeXBlLmdldFByb3BlcnRpZXMoKSxcbiAgICAgICAgICB0ZXJtVHlwZVByb3BlcnR5ID0gdGVybVR5cGVQcm9wZXJ0aWVzLmZpbmQoKHRlcm1UeXBlUHJvcGVydHkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5TmFtZU1hdGNoZXMgPSB0ZXJtVHlwZVByb3BlcnR5Lm1hdGNoUHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChwcm9wZXJ0eU5hbWVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAodGVybVR5cGVQcm9wZXJ0eSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgdGVybVN0cmluZyA9IHRoaXMudGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIHRlcm1UeXBlTmFtZSA9IHRlcm1UeXBlLmdldE5hbWUoKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3Byb3BlcnR5TmFtZX0nIHByb3BlcnR5IGlzIG5vdCBhIHByb3BlcnR5IG9mIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSdzICcke3Rlcm1UeXBlTmFtZX0nIHR5cGUuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGUgPSB0ZXJtVHlwZTtcblxuICAgICAgdGhpcy5wcm9wZXJ0eS5zZXRUeXBlKHR5cGUpO1xuXG4gICAgICBwcm9wZXJ0eVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAocHJvcGVydHlWZXJpZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9JyBwcm9wZXJ0eSByZWxhdGlvbidzICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5VmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlUZXJtKGNvbnRleHQpIHtcbiAgICBsZXQgdGVybVZlcmlmaWVkO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRoaXMudGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nfScgcHJvcGVydHkgcmVsYXRpb24ncyAnJHt0ZXJtU3RyaW5nfScgdGVybS4uLmApO1xuXG4gICAgdGVybVZlcmlmaWVkID0gdGhpcy50ZXJtLnZlcmlmeShjb250ZXh0LCAoKSA9PiB7XG4gICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcblxuICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgfSk7XG5cbiAgICBpZiAodGVybVZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cHJvcGVydHlSZWxhdGlvblN0cmluZ30nIHByb3BlcnR5IHJlbGF0aW9uJ3MgJyR7dGVybVN0cmluZ30nIHRlcm0uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1WZXJpZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9wZXJ0eVJlbGF0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICAgIGxldCBwcm9wZXJ0eVJlbGF0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHByb3BlcnR5UmVsYXRpb25Ob2RlID0gcHJvcGVydHlSZWxhdGlvbk5vZGVRdWVyeSh0ZXJtTm9kZSk7XG5cbiAgICBpZiAocHJvcGVydHlSZWxhdGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgVGVybSwgUHJvcGVydHkgfSA9IGRvbSxcbiAgICAgICAgICAgIG5vZGUgPSBwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICB0b2tlbnMgPSBjb250ZXh0Lm5vZGVBc1Rva2Vucyhub2RlKSxcbiAgICAgICAgICAgIHRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeShwcm9wZXJ0eVJlbGF0aW9uTm9kZSksXG4gICAgICAgICAgICBwcm9wZXJ0eU5vZGUgPSBwcm9wZXJ0eU5vZGVRdWVyeShwcm9wZXJ0eVJlbGF0aW9uTm9kZSksXG4gICAgICAgICAgICBwcm9wZXJ0eSA9IFByb3BlcnR5LmZyb21Qcm9wZXJ0eU5vZGUocHJvcGVydHlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIHByb3BlcnR5UmVsYXRpb24gPSBuZXcgUHJvcGVydHlSZWxhdGlvbihzdHJpbmcsIG5vZGUsIHRva2VucywgcHJvcGVydHksIHRlcm0pO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0eVJlbGF0aW9uO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwicHJvcGVydHlOb2RlUXVlcnkiLCJwcm9wZXJ0eVJlbGF0aW9uTm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJQcm9wZXJ0eVJlbGF0aW9uIiwic3RyaW5nIiwibm9kZSIsInRva2VucyIsInByb3BlcnR5IiwidGVybSIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXRUb2tlbnMiLCJnZXRQcm9wZXJ0eSIsImdldFRlcm0iLCJnZXRUeXBlIiwidmVyaWZ5IiwiY29udGV4dCIsInZlcmlmaWVkIiwicHJvcGVydHlSZWxhdGlvblN0cmluZyIsInRyYWNlIiwidGVybVZlcmlmaWVkIiwidmVyaWZ5VGVybSIsInByb3BlcnR5VmVyaWZpZWQiLCJ2ZXJpZnlQcm9wZXJ0eSIsInR5cGUiLCJzZXRUeXBlIiwiZGVidWciLCJwcm9wZXJ0eVN0cmluZyIsInRlcm1UeXBlIiwicHJvcGVydHlOYW1lIiwiZ2V0TmFtZSIsInRlcm1UeXBlUHJvcGVydGllcyIsImdldFByb3BlcnRpZXMiLCJ0ZXJtVHlwZVByb3BlcnR5IiwiZmluZCIsInByb3BlcnR5TmFtZU1hdGNoZXMiLCJtYXRjaFByb3BlcnR5TmFtZSIsInRlcm1TdHJpbmciLCJ0ZXJtVHlwZU5hbWUiLCJ2ZXJpZmllZEFoZWFkIiwiZnJvbVRlcm1Ob2RlIiwidGVybU5vZGUiLCJwcm9wZXJ0eVJlbGF0aW9uIiwicHJvcGVydHlSZWxhdGlvbk5vZGUiLCJUZXJtIiwiZG9tIiwiUHJvcGVydHkiLCJub2RlQXNTdHJpbmciLCJub2RlQXNUb2tlbnMiLCJwcm9wZXJ0eU5vZGUiLCJmcm9tUHJvcGVydHlOb2RlIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUFBOzs7MkRBVGdCO3FCQUVVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHMUIsSUFBTUEsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLDJCQUMxQkMsb0JBQW9CRCxJQUFBQSxnQkFBUyxFQUFDLCtCQUM5QkUsNEJBQTRCRixJQUFBQSxnQkFBUyxFQUFDO0lBRTVDLFdBQWVHLElBQUFBLGdCQUFXLHFDQUFDO2FBQU1DLGlCQUNuQkMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxJQUFJO2dDQURqQkw7UUFF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