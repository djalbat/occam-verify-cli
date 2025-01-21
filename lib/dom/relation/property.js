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
var termNodeQuery = (0, _query.nodeQuery)("/propertyRelation/term"), propertyNodeQuery = (0, _query.nodeQuery)("/propertyRelation/property");
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
                    var variableString = this.term.getString(), variableTypeName = variableType.getName();
                    context.debug("The '".concat(propertyNames, "' property is not a property of the '").concat(variableString, "' variable's '").concat(variableTypeName, "' type."));
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
                var Term = _dom.default.Term, Property = _dom.default.Property, node = propertyRelationNode, string = context.nodeAsString(node), tokens = context.nodeAsTokens(node), propertyNode = propertyNodeQuery(propertyRelationNode), termNode = termNodeQuery(propertyRelationNode), property = Property.fromPropertyNode(propertyNode, context), term = Term.fromTermNode(termNode, context), propertyRelation = new PropertyRelation(string, node, tokens, property, term);
                return propertyRelation;
            }
        }
    ]);
    return PropertyRelation;
}(), _define_property(_PropertyRelation, "name", "PropertyRelation"), _PropertyRelation));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vcmVsYXRpb24vcHJvcGVydHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi8uLi9kb21cIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9wZXJ0eVJlbGF0aW9uL3Rlcm1cIiksXG4gICAgICBwcm9wZXJ0eU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9wZXJ0eVJlbGF0aW9uL3Byb3BlcnR5XCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBQcm9wZXJ0eVJlbGF0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCB0b2tlbnMsIHByb3BlcnR5LCB0ZXJtKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICB0aGlzLnByb3BlcnR5ID0gcHJvcGVydHk7XG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICB9XG5cbiAgZ2V0UHJvcGVydHkoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcGVydHk7XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm07XG4gIH1cblxuICBnZXRUeXBlKCkgeyByZXR1cm4gdGhpcy5wcm9wZXJ0eS5nZXRUeXBlKCk7IH1cblxuICBpc0VxdWFsVG8ocHJvcGVydHlSZWxhdGlvbikge1xuICAgIGNvbnN0IHByb3BlcnR5UmVsYXRpb25TdHJpbmcgPSBwcm9wZXJ0eVJlbGF0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIGVxdWFsVG8gPSAocHJvcGVydHlSZWxhdGlvblN0cmluZyA9PT0gdGhpcy5zdHJpbmcpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJvcGVydHlSZWxhdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cHJvcGVydHlSZWxhdGlvblN0cmluZ30nIHByb3BlcnR5IHJlbGF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVRlcm0oY29udGV4dCk7XG5cbiAgICBpZiAodGVybVZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBwcm9wZXJ0eVZlcmlmaWVkID0gdGhpcy52ZXJpZnlQcm9wZXJ0eShjb250ZXh0KTtcblxuICAgICAgdmVyaWZpZWQgPSBwcm9wZXJ0eVZlcmlmaWVkO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9JyBwcm9wZXJ0eSByZWxhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlUZXJtKGNvbnRleHQpIHtcbiAgICBsZXQgdGVybVZlcmlmaWVkO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRoaXMudGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nfScgcHJvcGVydHkgcmVsYXRpb24ncyAnJHt0ZXJtU3RyaW5nfScgdGVybS4uLmApO1xuXG4gICAgdGVybVZlcmlmaWVkID0gdGhpcy50ZXJtLnZlcmlmeShjb250ZXh0LCAoKSA9PiB7XG4gICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcblxuICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgfSk7XG5cbiAgICBpZiAodGVybVZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cHJvcGVydHlSZWxhdGlvblN0cmluZ30nIHByb3BlcnR5IHJlbGF0aW9uJ3MgJyR7dGVybVN0cmluZ30nIHRlcm0uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1WZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVByb3BlcnR5KGNvbnRleHQpIHtcbiAgICBsZXQgcHJvcGVydHlWZXJpZmllZDtcblxuICAgIGNvbnN0IHByb3BlcnR5U3RyaW5nID0gdGhpcy5wcm9wZXJ0eS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nfScgcHJvcGVydHkgcmVsYXRpb24ncyAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5Li4uYCk7XG5cbiAgICBjb25zdCB2YXJpYWJsZVR5cGUgPSB0aGlzLnRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgIHByb3BlcnR5TmFtZXMgPSB0aGlzLnByb3BlcnR5LmdldE5hbWVzKCksXG4gICAgICAgICAgdmFyaWFibGVUeXBlUHJvcGVydGllcyA9IHZhcmlhYmxlVHlwZS5nZXRQcm9wZXJ0aWVzKCksXG4gICAgICAgICAgdmFyaWFibGVUeXBlUHJvcGVydHkgPSB2YXJpYWJsZVR5cGVQcm9wZXJ0aWVzLmZpbmQoKHZhcmlhYmxlVHlwZVByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9wZXJ0eU5hbWVzTWF0Y2ggPSB2YXJpYWJsZVR5cGVQcm9wZXJ0eS5tYXRjaFByb3BlcnR5TmFtZXMocHJvcGVydHlOYW1lcyk7XG5cbiAgICAgICAgICAgIGlmIChwcm9wZXJ0eU5hbWVzTWF0Y2gpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIGlmICh2YXJpYWJsZVR5cGVQcm9wZXJ0eSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFyaWFibGVTdHJpbmcgPSB0aGlzLnRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICB2YXJpYWJsZVR5cGVOYW1lID0gdmFyaWFibGVUeXBlLmdldE5hbWUoKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3Byb3BlcnR5TmFtZXN9JyBwcm9wZXJ0eSBpcyBub3QgYSBwcm9wZXJ0eSBvZiB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSdzICcke3ZhcmlhYmxlVHlwZU5hbWV9JyB0eXBlLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlID0gdmFyaWFibGVUeXBlO1xuXG4gICAgICB0aGlzLnByb3BlcnR5LnNldFR5cGUodHlwZSk7XG5cbiAgICAgIHByb3BlcnR5VmVyaWZpZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChwcm9wZXJ0eVZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cHJvcGVydHlSZWxhdGlvblN0cmluZ30nIHByb3BlcnR5IHJlbGF0aW9uJ3MgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydHlWZXJpZmllZDtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9wZXJ0eVJlbGF0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgVGVybSwgUHJvcGVydHkgfSA9IGRvbSxcbiAgICAgICAgICBub2RlID0gcHJvcGVydHlSZWxhdGlvbk5vZGUsICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICB0b2tlbnMgPSBjb250ZXh0Lm5vZGVBc1Rva2Vucyhub2RlKSxcbiAgICAgICAgICBwcm9wZXJ0eU5vZGUgPSBwcm9wZXJ0eU5vZGVRdWVyeShwcm9wZXJ0eVJlbGF0aW9uTm9kZSksXG4gICAgICAgICAgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KHByb3BlcnR5UmVsYXRpb25Ob2RlKSxcbiAgICAgICAgICBwcm9wZXJ0eSA9IFByb3BlcnR5LmZyb21Qcm9wZXJ0eU5vZGUocHJvcGVydHlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICB0ZXJtID0gVGVybS5mcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHByb3BlcnR5UmVsYXRpb24gPSBuZXcgUHJvcGVydHlSZWxhdGlvbihzdHJpbmcsIG5vZGUsIHRva2VucywgcHJvcGVydHksIHRlcm0pO1xuXG4gICAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb247XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJwcm9wZXJ0eU5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiUHJvcGVydHlSZWxhdGlvbiIsInN0cmluZyIsIm5vZGUiLCJ0b2tlbnMiLCJwcm9wZXJ0eSIsInRlcm0iLCJnZXRTdHJpbmciLCJnZXROb2RlIiwiZ2V0VG9rZW5zIiwiZ2V0UHJvcGVydHkiLCJnZXRUZXJtIiwiZ2V0VHlwZSIsImlzRXF1YWxUbyIsInByb3BlcnR5UmVsYXRpb24iLCJwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nIiwiZXF1YWxUbyIsInZlcmlmeSIsImNvbnRleHQiLCJ2ZXJpZmllZCIsInRyYWNlIiwidGVybVZlcmlmaWVkIiwidmVyaWZ5VGVybSIsInByb3BlcnR5VmVyaWZpZWQiLCJ2ZXJpZnlQcm9wZXJ0eSIsImRlYnVnIiwidGVybVN0cmluZyIsInZlcmlmaWVkQWhlYWQiLCJwcm9wZXJ0eVN0cmluZyIsInZhcmlhYmxlVHlwZSIsInByb3BlcnR5TmFtZXMiLCJnZXROYW1lcyIsInZhcmlhYmxlVHlwZVByb3BlcnRpZXMiLCJnZXRQcm9wZXJ0aWVzIiwidmFyaWFibGVUeXBlUHJvcGVydHkiLCJmaW5kIiwicHJvcGVydHlOYW1lc01hdGNoIiwibWF0Y2hQcm9wZXJ0eU5hbWVzIiwidmFyaWFibGVTdHJpbmciLCJ2YXJpYWJsZVR5cGVOYW1lIiwiZ2V0TmFtZSIsInR5cGUiLCJzZXRUeXBlIiwiZnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlIiwicHJvcGVydHlSZWxhdGlvbk5vZGUiLCJUZXJtIiwiZG9tIiwiUHJvcGVydHkiLCJub2RlQXNTdHJpbmciLCJub2RlQXNUb2tlbnMiLCJwcm9wZXJ0eU5vZGUiLCJ0ZXJtTm9kZSIsImZyb21Qcm9wZXJ0eU5vZGUiLCJmcm9tVGVybU5vZGUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OzsyREFSZ0I7cUJBRVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUcxQixJQUFNQSxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsMkJBQzFCQyxvQkFBb0JELElBQUFBLGdCQUFTLEVBQUM7SUFFcEMsV0FBZUUsSUFBQUEsZ0JBQVcscUNBQUM7YUFBTUMsaUJBQ25CQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLElBQUk7Z0NBRGpCTDtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FB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