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
var _PropertyRelation;
var _default = (0, _structure.define)((_PropertyRelation = /*#__PURE__*/ function() {
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
            key: "isEqualTo",
            value: function isEqualTo(propertyRelation) {
                var propertyRelationNode = propertyRelation.getNode(), matches = this.node.match(propertyRelationNode), equalTo = matches; ///
                return equalTo;
            }
        },
        {
            key: "verify",
            value: function verify(context) {
                var verifies = false;
                var propertyRelationString = this.string; ///
                context.trace("Verifying the '".concat(propertyRelationString, "' property relation..."));
                var termVerifies = this.verifyTerm(context);
                if (termVerifies) {
                    var propertyVerifies = this.verifyProperty(context);
                    verifies = propertyVerifies;
                }
                if (verifies) {
                    context.debug("...verified the '".concat(propertyRelationString, "' property relation."));
                }
                return verifies;
            }
        },
        {
            key: "verifyTerm",
            value: function verifyTerm(context) {
                var termVerifies;
                var termString = this.term.getString();
                context.trace("Verifying the '".concat(termString, "' term..."));
                termVerifies = this.term.verify(context, function() {
                    var verifiesAhead = true;
                    return verifiesAhead;
                });
                if (termVerifies) {
                    context.debug("...verified the '".concat(termString, "' term."));
                }
                return termVerifies;
            }
        },
        {
            key: "verifyProperty",
            value: function verifyProperty(context) {
                var propertyVerifies;
                var propertyString = this.property.getString();
                context.trace("Verifying the '".concat(propertyString, "' property..."));
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
                    propertyVerifies = true;
                }
                if (propertyVerifies) {
                    context.debug("...verified the '".concat(propertyString, "' property."));
                }
                return propertyVerifies;
            }
        }
    ], [
        {
            key: "fromPropertyAssertionNode",
            value: function fromPropertyAssertionNode(propertyAssertionNode, context) {
                var Term = _structure.default.Term, Property = _structure.default.Property, propertyRelationNode = propertyAssertionNode.getPropertyRelationNode(), node = propertyRelationNode, string = context.nodeAsString(node), tokens = context.nodeAsTokens(node), property = Property.fromPropertyRelationNode(propertyRelationNode, context), term = Term.fromPropertyRelationNode(propertyRelationNode, context), propertyRelation = new PropertyRelation(string, node, tokens, property, term);
                return propertyRelation;
            }
        }
    ]);
    return PropertyRelation;
}(), _define_property(_PropertyRelation, "name", "PropertyRelation"), _PropertyRelation));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHJ1Y3R1cmUvcHJvcGVydHlSZWxhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHN0cnVjdHVyZSBmcm9tIFwiLi4vc3RydWN0dXJlXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9zdHJ1Y3R1cmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFByb3BlcnR5UmVsYXRpb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5vZGUsIHRva2VucywgcHJvcGVydHksIHRlcm0pIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXRQcm9wZXJ0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wZXJ0eTtcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGlzRXF1YWxUbyhwcm9wZXJ0eVJlbGF0aW9uKSB7XG4gICAgY29uc3QgcHJvcGVydHlSZWxhdGlvbk5vZGUgPSBwcm9wZXJ0eVJlbGF0aW9uLmdldE5vZGUoKSxcbiAgICAgICAgICBtYXRjaGVzID0gdGhpcy5ub2RlLm1hdGNoKHByb3BlcnR5UmVsYXRpb25Ob2RlKSxcbiAgICAgICAgICBlcXVhbFRvID0gbWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJvcGVydHlSZWxhdGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cHJvcGVydHlSZWxhdGlvblN0cmluZ30nIHByb3BlcnR5IHJlbGF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVRlcm0oY29udGV4dCk7XG5cbiAgICBpZiAodGVybVZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBwcm9wZXJ0eVZlcmlmaWVzID0gdGhpcy52ZXJpZnlQcm9wZXJ0eShjb250ZXh0KTtcblxuICAgICAgdmVyaWZpZXMgPSBwcm9wZXJ0eVZlcmlmaWVzO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9JyBwcm9wZXJ0eSByZWxhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlUZXJtKGNvbnRleHQpIHtcbiAgICBsZXQgdGVybVZlcmlmaWVzO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRoaXMudGVybS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0uLi5gKTtcblxuICAgIHRlcm1WZXJpZmllcyA9IHRoaXMudGVybS52ZXJpZnkoY29udGV4dCwgKCkgPT4ge1xuICAgICAgY29uc3QgdmVyaWZpZXNBaGVhZCA9IHRydWU7XG5cbiAgICAgIHJldHVybiB2ZXJpZmllc0FoZWFkO1xuICAgIH0pO1xuXG4gICAgaWYgKHRlcm1WZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlQcm9wZXJ0eShjb250ZXh0KSB7XG4gICAgbGV0IHByb3BlcnR5VmVyaWZpZXM7XG5cbiAgICBjb25zdCBwcm9wZXJ0eVN0cmluZyA9IHRoaXMucHJvcGVydHkuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkuLi5gKTtcblxuICAgIGNvbnN0IHRlcm1UeXBlID0gdGhpcy50ZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICBwcm9wZXJ0eU5hbWUgPSB0aGlzLnByb3BlcnR5LmdldE5hbWUoKSxcbiAgICAgICAgICB0ZXJtVHlwZVByb3BlcnRpZXMgPSB0ZXJtVHlwZS5nZXRQcm9wZXJ0aWVzKCksXG4gICAgICAgICAgdmFyaWFibGVUeXBlUHJvcGVydHkgPSB0ZXJtVHlwZVByb3BlcnRpZXMuZmluZCgodGVybVR5cGVQcm9wZXJ0eSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvcGVydHlOYW1lTWF0Y2hlcyA9IHRlcm1UeXBlUHJvcGVydHkubWF0Y2hQcm9wZXJ0eU5hbWUocHJvcGVydHlOYW1lKTtcblxuICAgICAgICAgICAgaWYgKHByb3BlcnR5TmFtZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIGlmICh2YXJpYWJsZVR5cGVQcm9wZXJ0eSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFyaWFibGVTdHJpbmcgPSB0aGlzLnRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICB2YXJpYWJsZVR5cGVTdHJpbmcgPSB0ZXJtVHlwZS5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3Byb3BlcnR5TmFtZX0nIHByb3BlcnR5IGlzIG5vdCBhIHByb3BlcnR5IG9mIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlJ3MgJyR7dmFyaWFibGVUeXBlU3RyaW5nfScgdHlwZS5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvcGVydHlWZXJpZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHByb3BlcnR5VmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5LmApO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0eVZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlByb3BlcnR5UmVsYXRpb25cIjtcblxuICBzdGF0aWMgZnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZShwcm9wZXJ0eUFzc2VydGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IFRlcm0sIFByb3BlcnR5IH0gPSBzdHJ1Y3R1cmUsXG4gICAgICAgICAgcHJvcGVydHlSZWxhdGlvbk5vZGUgPSBwcm9wZXJ0eUFzc2VydGlvbk5vZGUuZ2V0UHJvcGVydHlSZWxhdGlvbk5vZGUoKSxcbiAgICAgICAgICBub2RlID0gcHJvcGVydHlSZWxhdGlvbk5vZGUsICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICB0b2tlbnMgPSBjb250ZXh0Lm5vZGVBc1Rva2Vucyhub2RlKSxcbiAgICAgICAgICBwcm9wZXJ0eSA9IFByb3BlcnR5LmZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgdGVybSA9IFRlcm0uZnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlKHByb3BlcnR5UmVsYXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBwcm9wZXJ0eVJlbGF0aW9uID0gbmV3IFByb3BlcnR5UmVsYXRpb24oc3RyaW5nLCBub2RlLCB0b2tlbnMsIHByb3BlcnR5LCB0ZXJtKTtcblxuICAgIHJldHVybiBwcm9wZXJ0eVJlbGF0aW9uO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJQcm9wZXJ0eVJlbGF0aW9uIiwic3RyaW5nIiwibm9kZSIsInRva2VucyIsInByb3BlcnR5IiwidGVybSIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXRUb2tlbnMiLCJnZXRQcm9wZXJ0eSIsImdldFRlcm0iLCJpc0VxdWFsVG8iLCJwcm9wZXJ0eVJlbGF0aW9uIiwicHJvcGVydHlSZWxhdGlvbk5vZGUiLCJtYXRjaGVzIiwibWF0Y2giLCJlcXVhbFRvIiwidmVyaWZ5IiwiY29udGV4dCIsInZlcmlmaWVzIiwicHJvcGVydHlSZWxhdGlvblN0cmluZyIsInRyYWNlIiwidGVybVZlcmlmaWVzIiwidmVyaWZ5VGVybSIsInByb3BlcnR5VmVyaWZpZXMiLCJ2ZXJpZnlQcm9wZXJ0eSIsImRlYnVnIiwidGVybVN0cmluZyIsInZlcmlmaWVzQWhlYWQiLCJwcm9wZXJ0eVN0cmluZyIsInRlcm1UeXBlIiwiZ2V0VHlwZSIsInByb3BlcnR5TmFtZSIsImdldE5hbWUiLCJ0ZXJtVHlwZVByb3BlcnRpZXMiLCJnZXRQcm9wZXJ0aWVzIiwidmFyaWFibGVUeXBlUHJvcGVydHkiLCJmaW5kIiwidGVybVR5cGVQcm9wZXJ0eSIsInByb3BlcnR5TmFtZU1hdGNoZXMiLCJtYXRjaFByb3BlcnR5TmFtZSIsInZhcmlhYmxlU3RyaW5nIiwidmFyaWFibGVUeXBlU3RyaW5nIiwiZnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZSIsInByb3BlcnR5QXNzZXJ0aW9uTm9kZSIsIlRlcm0iLCJzdHJ1Y3R1cmUiLCJQcm9wZXJ0eSIsImdldFByb3BlcnR5UmVsYXRpb25Ob2RlIiwibm9kZUFzU3RyaW5nIiwibm9kZUFzVG9rZW5zIiwiZnJvbVByb3BlcnR5UmVsYXRpb25Ob2RlIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFBOzs7aUVBSnNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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