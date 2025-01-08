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
var _PropertyAssertion;
var propertyNodeQuery = (0, _query.nodeQuery)("/propertyAssertion/property"), leftTermNodeQuery = (0, _query.nodeQuery)("/propertyAssertion/term[0]"), rightTermNodeQuery = (0, _query.nodeQuery)("/propertyAssertion/term[1]"), propertyAssertionNodeQuery = (0, _query.nodeQuery)("/statement/propertyAssertion");
var _default = (0, _dom.domAssigned)((_PropertyAssertion = /*#__PURE__*/ function() {
    function PropertyAssertion(string, node, tokens, property, leftTerm, rightTerm) {
        _class_call_check(this, PropertyAssertion);
        this.string = string;
        this.node = node;
        this.tokens = tokens;
        this.property = property;
        this.leftTerm = leftTerm;
        this.rightTerm = rightTerm;
    }
    _create_class(PropertyAssertion, [
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
            key: "getLeftTerm",
            value: function getLeftTerm() {
                return this.leftTerm;
            }
        },
        {
            key: "getRightTerm",
            value: function getRightTerm() {
                return this.rightTerm;
            }
        },
        {
            key: "verify",
            value: function verify(assignments, stated, context) {
                var verified = false;
                var propertyAssertionString = this.string; ///
                context.trace("Verifying the '".concat(propertyAssertionString, "' property assertion..."));
                var rightTermVerified = this.verifyRightTerm(assignments, stated, context);
                if (rightTermVerified) {
                    var leftTermVerified = this.verifyLeftTerm(assignments, stated, context);
                    if (leftTermVerified) {
                        var propertyVerified = this.verifyProperty(assignments, stated, context);
                        if (propertyVerified) {
                            verified = true;
                        }
                    }
                }
                if (verified) {
                    context.debug("...verified the '".concat(propertyAssertionString, "' property assertion."));
                }
                return verified;
            }
        },
        {
            key: "verifyProperty",
            value: function verifyProperty(assignments, stated, context) {
                var propertyVerified;
                var propertyString = this.property.getString(), propertyAssertionString = this.string; ///
                context.trace("Verifying the '".concat(propertyAssertionString, "' property assertion's '").concat(propertyString, "' property..."));
                var rightTermType = this.rightTerm.getType(), propertyName = this.property.getName(), property = rightTermType.findPropertyByPropertyName(propertyName);
                if (property === null) {
                    var rightTermTypeName = rightTermType.getName();
                    context.debug("The '".concat(propertyName, "' property is not a property of the right term's '").concat(rightTermTypeName, "' type."));
                } else {
                    var leftTermType = this.leftTerm.getType(), propertyType = property.getType(), leftTermTypeEqualToOrSubTypeOfPropertyType = leftTermType.isEqualToOrSubTypeOf(propertyType);
                    if (!leftTermTypeEqualToOrSubTypeOfPropertyType) {
                        var leftTermTypeName = leftTermType.getName(), propertyTypeName = propertyType.getName();
                        context.debug("The left term's '".concat(leftTermTypeName, "' type is not equal to or a sub-type of the '").concat(propertyName, "' property's '").concat(propertyTypeName, "' type."));
                    } else {
                        propertyVerified = true;
                    }
                }
                if (propertyVerified) {
                    context.debug("...verified the '".concat(propertyAssertionString, "' property assertion's '").concat(propertyString, "' property."));
                }
                return propertyVerified;
            }
        },
        {
            key: "verifyLeftTerm",
            value: function verifyLeftTerm(assignments, stated, context) {
                var leftTermVerified;
                var leftTermString = this.leftTerm.getString(), propertyAssertionString = this.string; ///
                context.trace("Verifying the '".concat(propertyAssertionString, "' property assertion's '").concat(leftTermString, "' left term..."));
                leftTermVerified = this.leftTerm.verify(context, function() {
                    var verifiedAhead = true;
                    return verifiedAhead;
                });
                if (leftTermVerified) {
                    context.debug("...verified the '".concat(propertyAssertionString, "' property assertion's '").concat(leftTermString, "' left term."));
                }
                return leftTermVerified;
            }
        },
        {
            key: "verifyRightTerm",
            value: function verifyRightTerm(assignments, stated, context) {
                var rightTermVerified;
                var rightTermString = this.rightTerm.getString(), propertyAssertionString = this.string; ///
                context.trace("Verifying the '".concat(propertyAssertionString, "' property assertion's '").concat(rightTermString, "' right term..."));
                rightTermVerified = this.rightTerm.verify(context, function() {
                    var verifiedAhead = true;
                    return verifiedAhead;
                });
                if (rightTermVerified) {
                    context.debug("...verified the '".concat(propertyAssertionString, "' property assertion's '").concat(rightTermString, "' right term."));
                }
                return rightTermVerified;
            }
        }
    ], [
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode, context) {
                var propertyAssertion = null;
                var propertyAssertionNode = propertyAssertionNodeQuery(statementNode);
                if (propertyAssertionNode !== null) {
                    var Term = _dom.default.Term, Property = _dom.default.Property, node = propertyAssertionNode, string = context.nodeAsString(node), tokens = context.nodeAsTokens(node), propertyNode = propertyNodeQuery(propertyAssertionNode), leftTermNode = leftTermNodeQuery(propertyAssertionNode), rightTermNode = rightTermNodeQuery(propertyAssertionNode), property = Property.fromPropertyNode(propertyNode, context), leftTerm = Term.fromTermNode(leftTermNode, context), rightTerm = Term.fromTermNode(rightTermNode, context);
                    propertyAssertion = new PropertyAssertion(string, node, tokens, property, leftTerm, rightTerm);
                }
                return propertyAssertion;
            }
        }
    ]);
    return PropertyAssertion;
}(), _define_property(_PropertyAssertion, "name", "PropertyAssertion"), _PropertyAssertion));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vYXNzZXJ0aW9uL3Byb3BlcnR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi8uLi9kb21cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5cbmNvbnN0IHByb3BlcnR5Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Byb3BlcnR5QXNzZXJ0aW9uL3Byb3BlcnR5XCIpLFxuICAgICAgbGVmdFRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcHJvcGVydHlBc3NlcnRpb24vdGVybVswXVwiKSxcbiAgICAgIHJpZ2h0VGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9wZXJ0eUFzc2VydGlvbi90ZXJtWzFdXCIpLFxuICAgICAgcHJvcGVydHlBc3NlcnRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L3Byb3BlcnR5QXNzZXJ0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBQcm9wZXJ0eUFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSwgdG9rZW5zLCBwcm9wZXJ0eSwgbGVmdFRlcm0sIHJpZ2h0VGVybSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgdGhpcy5wcm9wZXJ0eSA9IHByb3BlcnR5O1xuICAgIHRoaXMubGVmdFRlcm0gPSBsZWZ0VGVybTtcbiAgICB0aGlzLnJpZ2h0VGVybSA9IHJpZ2h0VGVybTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICB9XG5cbiAgZ2V0UHJvcGVydHkoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcGVydHk7XG4gIH1cblxuICBnZXRMZWZ0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0VGVybTtcbiAgfVxuXG4gIGdldFJpZ2h0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy5yaWdodFRlcm07XG4gIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJvcGVydHlBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb3BlcnR5QXNzZXJ0aW9uU3RyaW5nfScgcHJvcGVydHkgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCByaWdodFRlcm1WZXJpZmllZCA9IHRoaXMudmVyaWZ5UmlnaHRUZXJtKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHJpZ2h0VGVybVZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBsZWZ0VGVybVZlcmlmaWVkID0gdGhpcy52ZXJpZnlMZWZ0VGVybShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKGxlZnRUZXJtVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgcHJvcGVydHlWZXJpZmllZCA9IHRoaXMudmVyaWZ5UHJvcGVydHkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHByb3BlcnR5VmVyaWZpZWQpIHtcbiAgICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIHByb3BlcnR5IGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlQcm9wZXJ0eShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHByb3BlcnR5VmVyaWZpZWQ7XG5cbiAgICBjb25zdCBwcm9wZXJ0eVN0cmluZyA9IHRoaXMucHJvcGVydHkuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcHJvcGVydHlBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb3BlcnR5QXNzZXJ0aW9uU3RyaW5nfScgcHJvcGVydHkgYXNzZXJ0aW9uJ3MgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eS4uLmApO1xuXG4gICAgY29uc3QgcmlnaHRUZXJtVHlwZSA9IHRoaXMucmlnaHRUZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICBwcm9wZXJ0eU5hbWUgPSB0aGlzLnByb3BlcnR5LmdldE5hbWUoKSxcbiAgICAgICAgICBwcm9wZXJ0eSA9IHJpZ2h0VGVybVR5cGUuZmluZFByb3BlcnR5QnlQcm9wZXJ0eU5hbWUocHJvcGVydHlOYW1lKTtcblxuICAgIGlmIChwcm9wZXJ0eSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgcmlnaHRUZXJtVHlwZU5hbWUgPSByaWdodFRlcm1UeXBlLmdldE5hbWUoKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3Byb3BlcnR5TmFtZX0nIHByb3BlcnR5IGlzIG5vdCBhIHByb3BlcnR5IG9mIHRoZSByaWdodCB0ZXJtJ3MgJyR7cmlnaHRUZXJtVHlwZU5hbWV9JyB0eXBlLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsZWZ0VGVybVR5cGUgPSB0aGlzLmxlZnRUZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICAgIHByb3BlcnR5VHlwZSA9IHByb3BlcnR5LmdldFR5cGUoKSxcbiAgICAgICAgICAgIGxlZnRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlByb3BlcnR5VHlwZSA9IGxlZnRUZXJtVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZihwcm9wZXJ0eVR5cGUpO1xuXG4gICAgICBpZiAoIWxlZnRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlByb3BlcnR5VHlwZSkge1xuICAgICAgICBjb25zdCBsZWZ0VGVybVR5cGVOYW1lID0gbGVmdFRlcm1UeXBlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgcHJvcGVydHlUeXBlTmFtZSA9IHByb3BlcnR5VHlwZS5nZXROYW1lKCk7XG5cbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlIGxlZnQgdGVybSdzICcke2xlZnRUZXJtVHlwZU5hbWV9JyB0eXBlIGlzIG5vdCBlcXVhbCB0byBvciBhIHN1Yi10eXBlIG9mIHRoZSAnJHtwcm9wZXJ0eU5hbWV9JyBwcm9wZXJ0eSdzICcke3Byb3BlcnR5VHlwZU5hbWV9JyB0eXBlLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJvcGVydHlWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHByb3BlcnR5VmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIHByb3BlcnR5IGFzc2VydGlvbidzICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5VmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlMZWZ0VGVybShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IGxlZnRUZXJtVmVyaWZpZWQ7XG5cbiAgICBjb25zdCBsZWZ0VGVybVN0cmluZyA9IHRoaXMubGVmdFRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcHJvcGVydHlBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb3BlcnR5QXNzZXJ0aW9uU3RyaW5nfScgcHJvcGVydHkgYXNzZXJ0aW9uJ3MgJyR7bGVmdFRlcm1TdHJpbmd9JyBsZWZ0IHRlcm0uLi5gKTtcblxuICAgIGxlZnRUZXJtVmVyaWZpZWQgPSB0aGlzLmxlZnRUZXJtLnZlcmlmeShjb250ZXh0LCAoKSA9PiB7XG4gICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcblxuICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgfSk7XG5cbiAgICBpZiAobGVmdFRlcm1WZXJpZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Byb3BlcnR5QXNzZXJ0aW9uU3RyaW5nfScgcHJvcGVydHkgYXNzZXJ0aW9uJ3MgJyR7bGVmdFRlcm1TdHJpbmd9JyBsZWZ0IHRlcm0uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxlZnRUZXJtVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlSaWdodFRlcm0oYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCByaWdodFRlcm1WZXJpZmllZDtcblxuICAgIGNvbnN0IHJpZ2h0VGVybVN0cmluZyA9IHRoaXMucmlnaHRUZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIHByb3BlcnR5QXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIHByb3BlcnR5IGFzc2VydGlvbidzICcke3JpZ2h0VGVybVN0cmluZ30nIHJpZ2h0IHRlcm0uLi5gKTtcblxuICAgIHJpZ2h0VGVybVZlcmlmaWVkID0gdGhpcy5yaWdodFRlcm0udmVyaWZ5KGNvbnRleHQsICgpID0+IHtcbiAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICB9KTtcblxuICAgIGlmIChyaWdodFRlcm1WZXJpZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Byb3BlcnR5QXNzZXJ0aW9uU3RyaW5nfScgcHJvcGVydHkgYXNzZXJ0aW9uJ3MgJyR7cmlnaHRUZXJtU3RyaW5nfScgcmlnaHQgdGVybS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmlnaHRUZXJtVmVyaWZpZWQ7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJvcGVydHlBc3NlcnRpb25cIjtcblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCBwcm9wZXJ0eUFzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBwcm9wZXJ0eUFzc2VydGlvbk5vZGUgPSBwcm9wZXJ0eUFzc2VydGlvbk5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChwcm9wZXJ0eUFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgVGVybSwgUHJvcGVydHkgfSA9IGRvbSxcbiAgICAgICAgICAgIG5vZGUgPSBwcm9wZXJ0eUFzc2VydGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgdG9rZW5zID0gY29udGV4dC5ub2RlQXNUb2tlbnMobm9kZSksXG4gICAgICAgICAgICBwcm9wZXJ0eU5vZGUgPSBwcm9wZXJ0eU5vZGVRdWVyeShwcm9wZXJ0eUFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgICAgbGVmdFRlcm1Ob2RlID0gbGVmdFRlcm1Ob2RlUXVlcnkocHJvcGVydHlBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICAgIHJpZ2h0VGVybU5vZGUgPSByaWdodFRlcm1Ob2RlUXVlcnkocHJvcGVydHlBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICAgIHByb3BlcnR5ID0gUHJvcGVydHkuZnJvbVByb3BlcnR5Tm9kZShwcm9wZXJ0eU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgbGVmdFRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZShsZWZ0VGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgcmlnaHRUZXJtID0gVGVybS5mcm9tVGVybU5vZGUocmlnaHRUZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIHByb3BlcnR5QXNzZXJ0aW9uID0gbmV3IFByb3BlcnR5QXNzZXJ0aW9uKHN0cmluZywgbm9kZSwgdG9rZW5zLCBwcm9wZXJ0eSwgbGVmdFRlcm0sIHJpZ2h0VGVybSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5QXNzZXJ0aW9uO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJwcm9wZXJ0eU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImxlZnRUZXJtTm9kZVF1ZXJ5IiwicmlnaHRUZXJtTm9kZVF1ZXJ5IiwicHJvcGVydHlBc3NlcnRpb25Ob2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlByb3BlcnR5QXNzZXJ0aW9uIiwic3RyaW5nIiwibm9kZSIsInRva2VucyIsInByb3BlcnR5IiwibGVmdFRlcm0iLCJyaWdodFRlcm0iLCJnZXRTdHJpbmciLCJnZXROb2RlIiwiZ2V0VG9rZW5zIiwiZ2V0UHJvcGVydHkiLCJnZXRMZWZ0VGVybSIsImdldFJpZ2h0VGVybSIsInZlcmlmeSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwiY29udGV4dCIsInZlcmlmaWVkIiwicHJvcGVydHlBc3NlcnRpb25TdHJpbmciLCJ0cmFjZSIsInJpZ2h0VGVybVZlcmlmaWVkIiwidmVyaWZ5UmlnaHRUZXJtIiwibGVmdFRlcm1WZXJpZmllZCIsInZlcmlmeUxlZnRUZXJtIiwicHJvcGVydHlWZXJpZmllZCIsInZlcmlmeVByb3BlcnR5IiwiZGVidWciLCJwcm9wZXJ0eVN0cmluZyIsInJpZ2h0VGVybVR5cGUiLCJnZXRUeXBlIiwicHJvcGVydHlOYW1lIiwiZ2V0TmFtZSIsImZpbmRQcm9wZXJ0eUJ5UHJvcGVydHlOYW1lIiwicmlnaHRUZXJtVHlwZU5hbWUiLCJsZWZ0VGVybVR5cGUiLCJwcm9wZXJ0eVR5cGUiLCJsZWZ0VGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZQcm9wZXJ0eVR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsImxlZnRUZXJtVHlwZU5hbWUiLCJwcm9wZXJ0eVR5cGVOYW1lIiwibGVmdFRlcm1TdHJpbmciLCJ2ZXJpZmllZEFoZWFkIiwicmlnaHRUZXJtU3RyaW5nIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwicHJvcGVydHlBc3NlcnRpb24iLCJwcm9wZXJ0eUFzc2VydGlvbk5vZGUiLCJUZXJtIiwiZG9tIiwiUHJvcGVydHkiLCJub2RlQXNTdHJpbmciLCJub2RlQXNUb2tlbnMiLCJwcm9wZXJ0eU5vZGUiLCJsZWZ0VGVybU5vZGUiLCJyaWdodFRlcm1Ob2RlIiwiZnJvbVByb3BlcnR5Tm9kZSIsImZyb21UZXJtTm9kZSIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBQTs7OzJEQVZnQjtxQkFFVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRzFCLElBQU1BLG9CQUFvQkMsSUFBQUEsZ0JBQVMsRUFBQyxnQ0FDOUJDLG9CQUFvQkQsSUFBQUEsZ0JBQVMsRUFBQywrQkFDOUJFLHFCQUFxQkYsSUFBQUEsZ0JBQVMsRUFBQywrQkFDL0JHLDZCQUE2QkgsSUFBQUEsZ0JBQVMsRUFBQztJQUU3QyxXQUFlSSxJQUFBQSxnQkFBVyxzQ0FBQzthQUFNQyxrQkFDbkJDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsUUFBUSxFQUFFQyxTQUFTO2dDQURoQ047UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxD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