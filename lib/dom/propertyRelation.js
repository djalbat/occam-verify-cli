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
var _PropertyRelation;
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
                var termType = this.term.getType(), propertyName = this.property.getName(), termTypeProperties = termType.getProperties(), variableTypeProperty = termTypeProperties.find(function(termTypeProperty) {
                    var propertyNameMatches = termTypeProperty.matchPropertyName(propertyName);
                    if (propertyNameMatches) {
                        return true;
                    }
                }) || null;
                if (variableTypeProperty === null) {
                    var variableString = this.term.getString(), variableTypeString = termType.getString();
                    context.debug("The '".concat(propertyName, "' property is not a property of the '").concat(variableString, "' variable's '").concat(variableTypeString, "' type."));
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
        }
    ], [
        {
            key: "fromPropertyAssertionNode",
            value: function fromPropertyAssertionNode(propertyAssertionNode, context) {
                var Term = _dom.default.Term, Property = _dom.default.Property, propertyRelationNode = propertyAssertionNode.getPropertyRelationNode(), node = propertyRelationNode, string = context.nodeAsString(node), tokens = context.nodeAsTokens(node), property = Property.fromPropertyRelationNode(propertyRelationNode, context), term = Term.fromPropertyRelationNode(propertyRelationNode, context), propertyRelation = new PropertyRelation(string, node, tokens, property, term);
                return propertyRelation;
            }
        }
    ]);
    return PropertyRelation;
}(), _define_property(_PropertyRelation, "name", "PropertyRelation"), _PropertyRelation));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vcHJvcGVydHlSZWxhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5cbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uL2RvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBQcm9wZXJ0eVJlbGF0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCB0b2tlbnMsIHByb3BlcnR5LCB0ZXJtKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICB0aGlzLnByb3BlcnR5ID0gcHJvcGVydHk7XG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICB9XG5cbiAgZ2V0UHJvcGVydHkoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcGVydHk7XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm07XG4gIH1cblxuICBnZXRUeXBlKCkgeyByZXR1cm4gdGhpcy5wcm9wZXJ0eS5nZXRUeXBlKCk7IH1cblxuICBpc0VxdWFsVG8ocHJvcGVydHlSZWxhdGlvbikge1xuICAgIGNvbnN0IHByb3BlcnR5UmVsYXRpb25TdHJpbmcgPSBwcm9wZXJ0eVJlbGF0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIGVxdWFsVG8gPSAocHJvcGVydHlSZWxhdGlvblN0cmluZyA9PT0gdGhpcy5zdHJpbmcpO1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJvcGVydHlSZWxhdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cHJvcGVydHlSZWxhdGlvblN0cmluZ30nIHByb3BlcnR5IHJlbGF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVRlcm0oY29udGV4dCk7XG5cbiAgICBpZiAodGVybVZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBwcm9wZXJ0eVZlcmlmaWVkID0gdGhpcy52ZXJpZnlQcm9wZXJ0eShjb250ZXh0KTtcblxuICAgICAgdmVyaWZpZWQgPSBwcm9wZXJ0eVZlcmlmaWVkO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9JyBwcm9wZXJ0eSByZWxhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlUZXJtKGNvbnRleHQpIHtcbiAgICBsZXQgdGVybVZlcmlmaWVkO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRoaXMudGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nfScgcHJvcGVydHkgcmVsYXRpb24ncyAnJHt0ZXJtU3RyaW5nfScgdGVybS4uLmApO1xuXG4gICAgdGVybVZlcmlmaWVkID0gdGhpcy50ZXJtLnZlcmlmeShjb250ZXh0LCAoKSA9PiB7XG4gICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcblxuICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgfSk7XG5cbiAgICBpZiAodGVybVZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cHJvcGVydHlSZWxhdGlvblN0cmluZ30nIHByb3BlcnR5IHJlbGF0aW9uJ3MgJyR7dGVybVN0cmluZ30nIHRlcm0uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1WZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVByb3BlcnR5KGNvbnRleHQpIHtcbiAgICBsZXQgcHJvcGVydHlWZXJpZmllZDtcblxuICAgIGNvbnN0IHByb3BlcnR5U3RyaW5nID0gdGhpcy5wcm9wZXJ0eS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nfScgcHJvcGVydHkgcmVsYXRpb24ncyAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5Li4uYCk7XG5cbiAgICBjb25zdCB0ZXJtVHlwZSA9IHRoaXMudGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgcHJvcGVydHlOYW1lID0gdGhpcy5wcm9wZXJ0eS5nZXROYW1lKCksXG4gICAgICAgICAgdGVybVR5cGVQcm9wZXJ0aWVzID0gdGVybVR5cGUuZ2V0UHJvcGVydGllcygpLFxuICAgICAgICAgIHZhcmlhYmxlVHlwZVByb3BlcnR5ID0gdGVybVR5cGVQcm9wZXJ0aWVzLmZpbmQoKHRlcm1UeXBlUHJvcGVydHkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb3BlcnR5TmFtZU1hdGNoZXMgPSB0ZXJtVHlwZVByb3BlcnR5Lm1hdGNoUHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChwcm9wZXJ0eU5hbWVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAodmFyaWFibGVUeXBlUHJvcGVydHkgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlU3RyaW5nID0gdGhpcy50ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgICAgdmFyaWFibGVUeXBlU3RyaW5nID0gdGVybVR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtwcm9wZXJ0eU5hbWV9JyBwcm9wZXJ0eSBpcyBub3QgYSBwcm9wZXJ0eSBvZiB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSdzICcke3ZhcmlhYmxlVHlwZVN0cmluZ30nIHR5cGUuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGUgPSB0ZXJtVHlwZTtcblxuICAgICAgdGhpcy5wcm9wZXJ0eS5zZXRUeXBlKHR5cGUpO1xuXG4gICAgICBwcm9wZXJ0eVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAocHJvcGVydHlWZXJpZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9JyBwcm9wZXJ0eSByZWxhdGlvbidzICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5VmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJvcGVydHlSZWxhdGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlKHByb3BlcnR5QXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgVGVybSwgUHJvcGVydHkgfSA9IGRvbSxcbiAgICAgICAgICBwcm9wZXJ0eVJlbGF0aW9uTm9kZSA9IHByb3BlcnR5QXNzZXJ0aW9uTm9kZS5nZXRQcm9wZXJ0eVJlbGF0aW9uTm9kZSgpLFxuICAgICAgICAgIG5vZGUgPSBwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgIHRva2VucyA9IGNvbnRleHQubm9kZUFzVG9rZW5zKG5vZGUpLFxuICAgICAgICAgIHByb3BlcnR5ID0gUHJvcGVydHkuZnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICB0ZXJtID0gVGVybS5mcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUocHJvcGVydHlSZWxhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHByb3BlcnR5UmVsYXRpb24gPSBuZXcgUHJvcGVydHlSZWxhdGlvbihzdHJpbmcsIG5vZGUsIHRva2VucywgcHJvcGVydHksIHRlcm0pO1xuXG4gICAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb247XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRvbUFzc2lnbmVkIiwiUHJvcGVydHlSZWxhdGlvbiIsInN0cmluZyIsIm5vZGUiLCJ0b2tlbnMiLCJwcm9wZXJ0eSIsInRlcm0iLCJnZXRTdHJpbmciLCJnZXROb2RlIiwiZ2V0VG9rZW5zIiwiZ2V0UHJvcGVydHkiLCJnZXRUZXJtIiwiZ2V0VHlwZSIsImlzRXF1YWxUbyIsInByb3BlcnR5UmVsYXRpb24iLCJwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nIiwiZXF1YWxUbyIsInZlcmlmeSIsImNvbnRleHQiLCJ2ZXJpZmllZCIsInRyYWNlIiwidGVybVZlcmlmaWVkIiwidmVyaWZ5VGVybSIsInByb3BlcnR5VmVyaWZpZWQiLCJ2ZXJpZnlQcm9wZXJ0eSIsImRlYnVnIiwidGVybVN0cmluZyIsInZlcmlmaWVkQWhlYWQiLCJwcm9wZXJ0eVN0cmluZyIsInRlcm1UeXBlIiwicHJvcGVydHlOYW1lIiwiZ2V0TmFtZSIsInRlcm1UeXBlUHJvcGVydGllcyIsImdldFByb3BlcnRpZXMiLCJ2YXJpYWJsZVR5cGVQcm9wZXJ0eSIsImZpbmQiLCJ0ZXJtVHlwZVByb3BlcnR5IiwicHJvcGVydHlOYW1lTWF0Y2hlcyIsIm1hdGNoUHJvcGVydHlOYW1lIiwidmFyaWFibGVTdHJpbmciLCJ2YXJpYWJsZVR5cGVTdHJpbmciLCJ0eXBlIiwic2V0VHlwZSIsImZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUiLCJwcm9wZXJ0eUFzc2VydGlvbk5vZGUiLCJUZXJtIiwiZG9tIiwiUHJvcGVydHkiLCJwcm9wZXJ0eVJlbGF0aW9uTm9kZSIsImdldFByb3BlcnR5UmVsYXRpb25Ob2RlIiwibm9kZUFzU3RyaW5nIiwibm9kZUFzVG9rZW5zIiwiZnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFBOzs7MkRBSmdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFJaEIsV0FBZUEsSUFBQUEsZ0JBQVcscUNBQUM7YUFBTUMsaUJBQ25CQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLElBQUk7Z0NBRGpCTDtRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBOzs7O1lBR2RDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsTUFBTTtZQUNwQjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsSUFBSTtZQUNsQjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsTUFBTTtZQUNwQjs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0wsUUFBUTtZQUN0Qjs7O1lBRUFN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