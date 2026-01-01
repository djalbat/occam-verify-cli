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
var _ontology = /*#__PURE__*/ _interop_require_wildcard(require("../ontology"));
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
var _default = (0, _ontology.define)((_PropertyRelation = /*#__PURE__*/ function() {
    function PropertyRelation(string, node, property, term) {
        _class_call_check(this, PropertyRelation);
        this.string = string;
        this.node = node;
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
                var Term = _ontology.default.Term, Property = _ontology.default.Property, propertyRelationNode = propertyAssertionNode.getPropertyRelationNode(), node = propertyRelationNode, string = context.nodeAsString(node), property = Property.fromPropertyRelationNode(propertyRelationNode, context), term = Term.fromPropertyRelationNode(propertyRelationNode, context), propertyRelation = new PropertyRelation(string, node, property, term);
                return propertyRelation;
            }
        }
    ]);
    return PropertyRelation;
}(), _define_property(_PropertyRelation, "name", "PropertyRelation"), _PropertyRelation));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbnRvbG9neS9wcm9wZXJ0eVJlbGF0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgb250b2xvZ3kgZnJvbSBcIi4uL29udG9sb2d5XCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9vbnRvbG9neVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUHJvcGVydHlSZWxhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSwgcHJvcGVydHksIHRlcm0pIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFByb3BlcnR5KCkge1xuICAgIHJldHVybiB0aGlzLnByb3BlcnR5O1xuICB9XG5cbiAgZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtO1xuICB9XG5cbiAgaXNFcXVhbFRvKHByb3BlcnR5UmVsYXRpb24pIHtcbiAgICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uTm9kZSA9IHByb3BlcnR5UmVsYXRpb24uZ2V0Tm9kZSgpLFxuICAgICAgICAgIG1hdGNoZXMgPSB0aGlzLm5vZGUubWF0Y2gocHJvcGVydHlSZWxhdGlvbk5vZGUpLFxuICAgICAgICAgIGVxdWFsVG8gPSBtYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nfScgcHJvcGVydHkgcmVsYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHRlcm1WZXJpZmllcyA9IHRoaXMudmVyaWZ5VGVybShjb250ZXh0KTtcblxuICAgIGlmICh0ZXJtVmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IHByb3BlcnR5VmVyaWZpZXMgPSB0aGlzLnZlcmlmeVByb3BlcnR5KGNvbnRleHQpO1xuXG4gICAgICB2ZXJpZmllcyA9IHByb3BlcnR5VmVyaWZpZXM7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cHJvcGVydHlSZWxhdGlvblN0cmluZ30nIHByb3BlcnR5IHJlbGF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVRlcm0oY29udGV4dCkge1xuICAgIGxldCB0ZXJtVmVyaWZpZXM7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGhpcy50ZXJtLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS4uLmApO1xuXG4gICAgdGVybVZlcmlmaWVzID0gdGhpcy50ZXJtLnZlcmlmeShjb250ZXh0LCAoKSA9PiB7XG4gICAgICBjb25zdCB2ZXJpZmllc0FoZWFkID0gdHJ1ZTtcblxuICAgICAgcmV0dXJuIHZlcmlmaWVzQWhlYWQ7XG4gICAgfSk7XG5cbiAgICBpZiAodGVybVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1WZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVByb3BlcnR5KGNvbnRleHQpIHtcbiAgICBsZXQgcHJvcGVydHlWZXJpZmllcztcblxuICAgIGNvbnN0IHByb3BlcnR5U3RyaW5nID0gdGhpcy5wcm9wZXJ0eS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eS4uLmApO1xuXG4gICAgY29uc3QgdGVybVR5cGUgPSB0aGlzLnRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgIHByb3BlcnR5TmFtZSA9IHRoaXMucHJvcGVydHkuZ2V0TmFtZSgpLFxuICAgICAgICAgIHRlcm1UeXBlUHJvcGVydGllcyA9IHRlcm1UeXBlLmdldFByb3BlcnRpZXMoKSxcbiAgICAgICAgICB2YXJpYWJsZVR5cGVQcm9wZXJ0eSA9IHRlcm1UeXBlUHJvcGVydGllcy5maW5kKCh0ZXJtVHlwZVByb3BlcnR5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9wZXJ0eU5hbWVNYXRjaGVzID0gdGVybVR5cGVQcm9wZXJ0eS5tYXRjaFByb3BlcnR5TmFtZShwcm9wZXJ0eU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAocHJvcGVydHlOYW1lTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKHZhcmlhYmxlVHlwZVByb3BlcnR5ID09PSBudWxsKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IHRoaXMudGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIHZhcmlhYmxlVHlwZVN0cmluZyA9IHRlcm1UeXBlLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7cHJvcGVydHlOYW1lfScgcHJvcGVydHkgaXMgbm90IGEgcHJvcGVydHkgb2YgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUncyAnJHt2YXJpYWJsZVR5cGVTdHJpbmd9JyB0eXBlLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9wZXJ0eVZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAocHJvcGVydHlWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5VmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJvcGVydHlSZWxhdGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlKHByb3BlcnR5QXNzZXJ0aW9uTm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgVGVybSwgUHJvcGVydHkgfSA9IG9udG9sb2d5LFxuICAgICAgICAgIHByb3BlcnR5UmVsYXRpb25Ob2RlID0gcHJvcGVydHlBc3NlcnRpb25Ob2RlLmdldFByb3BlcnR5UmVsYXRpb25Ob2RlKCksXG4gICAgICAgICAgbm9kZSA9IHByb3BlcnR5UmVsYXRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgcHJvcGVydHkgPSBQcm9wZXJ0eS5mcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUocHJvcGVydHlSZWxhdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgcHJvcGVydHlSZWxhdGlvbiA9IG5ldyBQcm9wZXJ0eVJlbGF0aW9uKHN0cmluZywgbm9kZSwgcHJvcGVydHksIHRlcm0pO1xuXG4gICAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb247XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlByb3BlcnR5UmVsYXRpb24iLCJzdHJpbmciLCJub2RlIiwicHJvcGVydHkiLCJ0ZXJtIiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsImdldFByb3BlcnR5IiwiZ2V0VGVybSIsImlzRXF1YWxUbyIsInByb3BlcnR5UmVsYXRpb24iLCJwcm9wZXJ0eVJlbGF0aW9uTm9kZSIsIm1hdGNoZXMiLCJtYXRjaCIsImVxdWFsVG8iLCJ2ZXJpZnkiLCJjb250ZXh0IiwidmVyaWZpZXMiLCJwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nIiwidHJhY2UiLCJ0ZXJtVmVyaWZpZXMiLCJ2ZXJpZnlUZXJtIiwicHJvcGVydHlWZXJpZmllcyIsInZlcmlmeVByb3BlcnR5IiwiZGVidWciLCJ0ZXJtU3RyaW5nIiwidmVyaWZpZXNBaGVhZCIsInByb3BlcnR5U3RyaW5nIiwidGVybVR5cGUiLCJnZXRUeXBlIiwicHJvcGVydHlOYW1lIiwiZ2V0TmFtZSIsInRlcm1UeXBlUHJvcGVydGllcyIsImdldFByb3BlcnRpZXMiLCJ2YXJpYWJsZVR5cGVQcm9wZXJ0eSIsImZpbmQiLCJ0ZXJtVHlwZVByb3BlcnR5IiwicHJvcGVydHlOYW1lTWF0Y2hlcyIsIm1hdGNoUHJvcGVydHlOYW1lIiwidmFyaWFibGVTdHJpbmciLCJ2YXJpYWJsZVR5cGVTdHJpbmciLCJmcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlIiwicHJvcGVydHlBc3NlcnRpb25Ob2RlIiwiVGVybSIsIm9udG9sb2d5IiwiUHJvcGVydHkiLCJnZXRQcm9wZXJ0eVJlbGF0aW9uTm9kZSIsIm5vZGVBc1N0cmluZyIsImZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZSIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7O2dFQUpxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBSXJCLFdBQWVBLElBQUFBLGdCQUFNLHFDQUFDO2FBQU1DLGlCQUNkQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsUUFBUSxFQUFFQyxJQUFJO2dDQURkSjtRQUV4QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUks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