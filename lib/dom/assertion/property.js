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
var _variable = /*#__PURE__*/ _interop_require_default(require("../../assignment/variable"));
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
var variableNodeQuery = (0, _query.nodeQuery)("/term/variable!"), propertyNodeQuery = (0, _query.nodeQuery)("/propertyAssertion/property"), leftTermNodeQuery = (0, _query.nodeQuery)("/propertyAssertion/term[0]"), rightTermNodeQuery = (0, _query.nodeQuery)("/propertyAssertion/term[1]"), propertyAssertionNodeQuery = (0, _query.nodeQuery)("/statement/propertyAssertion");
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
                            var verifiedWhenStated = false, verifiedWhenDerived = false;
                            if (stated) {
                                verifiedWhenStated = this.verifyWhenStated(assignments, context);
                            } else {
                                verifiedWhenDerived = this.verifyWhenDerived(context);
                            }
                            if (verifiedWhenStated || verifiedWhenDerived) {
                                verified = true;
                            }
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
        },
        {
            key: "verifyWhenStated",
            value: function verifyWhenStated(assignments, context) {
                var verifiedWhenStated = false;
                var propertyAssertionString = this.string; ///
                context.trace("Verifying the '".concat(propertyAssertionString, "' stated property assertion..."));
                if (assignments !== null) {
                    var Variable = _dom.default.Variable, leftTermNode = this.leftTerm.getNode(), termNode = leftTermNode, variableNode = variableNodeQuery(termNode);
                    if (variableNode) variable = Variable.fromVariableNodeAndType(variableNode, this.type, context);
                    if (variable !== null) {
                        var variableAssignment = _variable.default.fromVariable(variable), assignment = variableAssignment; ///
                        assignments.push(assignment);
                    }
                }
                verifiedWhenStated = true;
                if (verifiedWhenStated) {
                    context.debug("...verified the '".concat(propertyAssertionString, "' stated property assertion."));
                }
                return verifiedWhenStated;
            }
        },
        {
            key: "verifyWhenDerived",
            value: function verifyWhenDerived(assignments, context) {
                var verifiedWhenDerived = false;
                var propertyAssertionString = this.string; ///
                context.trace("Verifying the '".concat(propertyAssertionString, "' derived property assertion..."));
                debugger;
                if (verifiedWhenDerived) {
                    context.debug("...verified the '".concat(propertyAssertionString, "' derived property assertion."));
                }
                return verifiedWhenDerived;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vYXNzZXJ0aW9uL3Byb3BlcnR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi8uLi9kb21cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgVmFyaWFibGVBc3NpZ25tZW50IGZyb20gXCIuLi8uLi9hc3NpZ25tZW50L3ZhcmlhYmxlXCI7XG5cbmNvbnN0IHZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0vdmFyaWFibGUhXCIpLFxuICAgICAgcHJvcGVydHlOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcHJvcGVydHlBc3NlcnRpb24vcHJvcGVydHlcIiksXG4gICAgICBsZWZ0VGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9wZXJ0eUFzc2VydGlvbi90ZXJtWzBdXCIpLFxuICAgICAgcmlnaHRUZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Byb3BlcnR5QXNzZXJ0aW9uL3Rlcm1bMV1cIiksXG4gICAgICBwcm9wZXJ0eUFzc2VydGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvcHJvcGVydHlBc3NlcnRpb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFByb3BlcnR5QXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCB0b2tlbnMsIHByb3BlcnR5LCBsZWZ0VGVybSwgcmlnaHRUZXJtKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICB0aGlzLnByb3BlcnR5ID0gcHJvcGVydHk7XG4gICAgdGhpcy5sZWZ0VGVybSA9IGxlZnRUZXJtO1xuICAgIHRoaXMucmlnaHRUZXJtID0gcmlnaHRUZXJtO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXRQcm9wZXJ0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wZXJ0eTtcbiAgfVxuXG4gIGdldExlZnRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnRUZXJtO1xuICB9XG5cbiAgZ2V0UmlnaHRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnJpZ2h0VGVybTtcbiAgfVxuXG4gIHZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcm9wZXJ0eUFzc2VydGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cHJvcGVydHlBc3NlcnRpb25TdHJpbmd9JyBwcm9wZXJ0eSBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHJpZ2h0VGVybVZlcmlmaWVkID0gdGhpcy52ZXJpZnlSaWdodFRlcm0oYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICBpZiAocmlnaHRUZXJtVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IGxlZnRUZXJtVmVyaWZpZWQgPSB0aGlzLnZlcmlmeUxlZnRUZXJtKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAobGVmdFRlcm1WZXJpZmllZCkge1xuICAgICAgICBjb25zdCBwcm9wZXJ0eVZlcmlmaWVkID0gdGhpcy52ZXJpZnlQcm9wZXJ0eShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAocHJvcGVydHlWZXJpZmllZCkge1xuICAgICAgICAgIGxldCB2ZXJpZmllZFdoZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICAgICAgdmVyaWZpZWRXaGVuU3RhdGVkID0gdGhpcy52ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IHRoaXMudmVyaWZ5V2hlbkRlcml2ZWQoY29udGV4dCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHZlcmlmaWVkV2hlblN0YXRlZCB8fCB2ZXJpZmllZFdoZW5EZXJpdmVkKSB7XG4gICAgICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cHJvcGVydHlBc3NlcnRpb25TdHJpbmd9JyBwcm9wZXJ0eSBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5UHJvcGVydHkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBwcm9wZXJ0eVZlcmlmaWVkO1xuXG4gICAgY29uc3QgcHJvcGVydHlTdHJpbmcgPSB0aGlzLnByb3BlcnR5LmdldFN0cmluZygpLFxuICAgICAgICAgIHByb3BlcnR5QXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIHByb3BlcnR5IGFzc2VydGlvbidzICcke3Byb3BlcnR5U3RyaW5nfScgcHJvcGVydHkuLi5gKTtcblxuICAgIGNvbnN0IHJpZ2h0VGVybVR5cGUgPSB0aGlzLnJpZ2h0VGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgcHJvcGVydHlOYW1lID0gdGhpcy5wcm9wZXJ0eS5nZXROYW1lKCksXG4gICAgICAgICAgcHJvcGVydHkgPSByaWdodFRlcm1UeXBlLmZpbmRQcm9wZXJ0eUJ5UHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZSk7XG5cbiAgICBpZiAocHJvcGVydHkgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJpZ2h0VGVybVR5cGVOYW1lID0gcmlnaHRUZXJtVHlwZS5nZXROYW1lKCk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtwcm9wZXJ0eU5hbWV9JyBwcm9wZXJ0eSBpcyBub3QgYSBwcm9wZXJ0eSBvZiB0aGUgcmlnaHQgdGVybSdzICcke3JpZ2h0VGVybVR5cGVOYW1lfScgdHlwZS5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbGVmdFRlcm1UeXBlID0gdGhpcy5sZWZ0VGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICBwcm9wZXJ0eVR5cGUgPSBwcm9wZXJ0eS5nZXRUeXBlKCksXG4gICAgICAgICAgICBsZWZ0VGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZQcm9wZXJ0eVR5cGUgPSBsZWZ0VGVybVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YocHJvcGVydHlUeXBlKTtcblxuICAgICAgaWYgKCFsZWZ0VGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZQcm9wZXJ0eVR5cGUpIHtcbiAgICAgICAgY29uc3QgbGVmdFRlcm1UeXBlTmFtZSA9IGxlZnRUZXJtVHlwZS5nZXROYW1lKCksXG4gICAgICAgICAgICAgIHByb3BlcnR5VHlwZU5hbWUgPSBwcm9wZXJ0eVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSBsZWZ0IHRlcm0ncyAnJHtsZWZ0VGVybVR5cGVOYW1lfScgdHlwZSBpcyBub3QgZXF1YWwgdG8gb3IgYSBzdWItdHlwZSBvZiB0aGUgJyR7cHJvcGVydHlOYW1lfScgcHJvcGVydHkncyAnJHtwcm9wZXJ0eVR5cGVOYW1lfScgdHlwZS5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb3BlcnR5VmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9wZXJ0eVZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cHJvcGVydHlBc3NlcnRpb25TdHJpbmd9JyBwcm9wZXJ0eSBhc3NlcnRpb24ncyAnJHtwcm9wZXJ0eVN0cmluZ30nIHByb3BlcnR5LmApO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0eVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5TGVmdFRlcm0oYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBsZWZ0VGVybVZlcmlmaWVkO1xuXG4gICAgY29uc3QgbGVmdFRlcm1TdHJpbmcgPSB0aGlzLmxlZnRUZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIHByb3BlcnR5QXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIHByb3BlcnR5IGFzc2VydGlvbidzICcke2xlZnRUZXJtU3RyaW5nfScgbGVmdCB0ZXJtLi4uYCk7XG5cbiAgICBsZWZ0VGVybVZlcmlmaWVkID0gdGhpcy5sZWZ0VGVybS52ZXJpZnkoY29udGV4dCwgKCkgPT4ge1xuICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgIH0pO1xuXG4gICAgaWYgKGxlZnRUZXJtVmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIHByb3BlcnR5IGFzc2VydGlvbidzICcke2xlZnRUZXJtU3RyaW5nfScgbGVmdCB0ZXJtLmApO1xuICAgIH1cblxuICAgIHJldHVybiBsZWZ0VGVybVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5UmlnaHRUZXJtKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgcmlnaHRUZXJtVmVyaWZpZWQ7XG5cbiAgICBjb25zdCByaWdodFRlcm1TdHJpbmcgPSB0aGlzLnJpZ2h0VGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBwcm9wZXJ0eUFzc2VydGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cHJvcGVydHlBc3NlcnRpb25TdHJpbmd9JyBwcm9wZXJ0eSBhc3NlcnRpb24ncyAnJHtyaWdodFRlcm1TdHJpbmd9JyByaWdodCB0ZXJtLi4uYCk7XG5cbiAgICByaWdodFRlcm1WZXJpZmllZCA9IHRoaXMucmlnaHRUZXJtLnZlcmlmeShjb250ZXh0LCAoKSA9PiB7XG4gICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcblxuICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgfSk7XG5cbiAgICBpZiAocmlnaHRUZXJtVmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIHByb3BlcnR5IGFzc2VydGlvbidzICcke3JpZ2h0VGVybVN0cmluZ30nIHJpZ2h0IHRlcm0uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJpZ2h0VGVybVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlblN0YXRlZChhc3NpZ25tZW50cywgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZFdoZW5TdGF0ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb3BlcnR5QXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIHN0YXRlZCBwcm9wZXJ0eSBhc3NlcnRpb24uLi5gKTtcblxuICAgIGlmIChhc3NpZ25tZW50cyAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBWYXJpYWJsZSB9ID0gZG9tLFxuICAgICAgICAgICAgbGVmdFRlcm1Ob2RlID0gdGhpcy5sZWZ0VGVybS5nZXROb2RlKCksXG4gICAgICAgICAgICB0ZXJtTm9kZSA9IGxlZnRUZXJtTm9kZSwgIC8vL1xuICAgICAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkodGVybU5vZGUpO1xuXG4gICAgICBpZiAodmFyaWFibGVOb2RlKVxuICAgICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVmFyaWFibGVOb2RlQW5kVHlwZSh2YXJpYWJsZU5vZGUsIHRoaXMudHlwZSwgY29udGV4dCk7XG5cbiAgICAgIGlmICh2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB2YXJpYWJsZUFzc2lnbm1lbnQgPSBWYXJpYWJsZUFzc2lnbm1lbnQuZnJvbVZhcmlhYmxlKHZhcmlhYmxlKSxcbiAgICAgICAgICAgICAgYXNzaWdubWVudCA9IHZhcmlhYmxlQXNzaWdubWVudDsgIC8vL1xuXG4gICAgICAgIGFzc2lnbm1lbnRzLnB1c2goYXNzaWdubWVudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmVyaWZpZWRXaGVuU3RhdGVkID0gdHJ1ZTtcblxuICAgIGlmICh2ZXJpZmllZFdoZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIHN0YXRlZCBwcm9wZXJ0eSBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5EZXJpdmVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb3BlcnR5QXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgcHJvcGVydHkgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBkZWJ1Z2dlclxuXG4gICAgaWYgKHZlcmlmaWVkV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgcHJvcGVydHkgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZFdoZW5EZXJpdmVkO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlByb3BlcnR5QXNzZXJ0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgcHJvcGVydHlBc3NlcnRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgcHJvcGVydHlBc3NlcnRpb25Ob2RlID0gcHJvcGVydHlBc3NlcnRpb25Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBpZiAocHJvcGVydHlBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFRlcm0sIFByb3BlcnR5IH0gPSBkb20sXG4gICAgICAgICAgICBub2RlID0gcHJvcGVydHlBc3NlcnRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgIHRva2VucyA9IGNvbnRleHQubm9kZUFzVG9rZW5zKG5vZGUpLFxuICAgICAgICAgICAgcHJvcGVydHlOb2RlID0gcHJvcGVydHlOb2RlUXVlcnkocHJvcGVydHlBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICAgIGxlZnRUZXJtTm9kZSA9IGxlZnRUZXJtTm9kZVF1ZXJ5KHByb3BlcnR5QXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgICByaWdodFRlcm1Ob2RlID0gcmlnaHRUZXJtTm9kZVF1ZXJ5KHByb3BlcnR5QXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgICBwcm9wZXJ0eSA9IFByb3BlcnR5LmZyb21Qcm9wZXJ0eU5vZGUocHJvcGVydHlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGxlZnRUZXJtID0gVGVybS5mcm9tVGVybU5vZGUobGVmdFRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHJpZ2h0VGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlKHJpZ2h0VGVybU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBwcm9wZXJ0eUFzc2VydGlvbiA9IG5ldyBQcm9wZXJ0eUFzc2VydGlvbihzdHJpbmcsIG5vZGUsIHRva2VucywgcHJvcGVydHksIGxlZnRUZXJtLCByaWdodFRlcm0pO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0eUFzc2VydGlvbjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsidmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJwcm9wZXJ0eU5vZGVRdWVyeSIsImxlZnRUZXJtTm9kZVF1ZXJ5IiwicmlnaHRUZXJtTm9kZVF1ZXJ5IiwicHJvcGVydHlBc3NlcnRpb25Ob2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlByb3BlcnR5QXNzZXJ0aW9uIiwic3RyaW5nIiwibm9kZSIsInRva2VucyIsInByb3BlcnR5IiwibGVmdFRlcm0iLCJyaWdodFRlcm0iLCJnZXRTdHJpbmciLCJnZXROb2RlIiwiZ2V0VG9rZW5zIiwiZ2V0UHJvcGVydHkiLCJnZXRMZWZ0VGVybSIsImdldFJpZ2h0VGVybSIsInZlcmlmeSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwiY29udGV4dCIsInZlcmlmaWVkIiwicHJvcGVydHlBc3NlcnRpb25TdHJpbmciLCJ0cmFjZSIsInJpZ2h0VGVybVZlcmlmaWVkIiwidmVyaWZ5UmlnaHRUZXJtIiwibGVmdFRlcm1WZXJpZmllZCIsInZlcmlmeUxlZnRUZXJtIiwicHJvcGVydHlWZXJpZmllZCIsInZlcmlmeVByb3BlcnR5IiwidmVyaWZpZWRXaGVuU3RhdGVkIiwidmVyaWZpZWRXaGVuRGVyaXZlZCIsInZlcmlmeVdoZW5TdGF0ZWQiLCJ2ZXJpZnlXaGVuRGVyaXZlZCIsImRlYnVnIiwicHJvcGVydHlTdHJpbmciLCJyaWdodFRlcm1UeXBlIiwiZ2V0VHlwZSIsInByb3BlcnR5TmFtZSIsImdldE5hbWUiLCJmaW5kUHJvcGVydHlCeVByb3BlcnR5TmFtZSIsInJpZ2h0VGVybVR5cGVOYW1lIiwibGVmdFRlcm1UeXBlIiwicHJvcGVydHlUeXBlIiwibGVmdFRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mUHJvcGVydHlUeXBlIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJsZWZ0VGVybVR5cGVOYW1lIiwicHJvcGVydHlUeXBlTmFtZSIsImxlZnRUZXJtU3RyaW5nIiwidmVyaWZpZWRBaGVhZCIsInJpZ2h0VGVybVN0cmluZyIsIlZhcmlhYmxlIiwiZG9tIiwibGVmdFRlcm1Ob2RlIiwidGVybU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZSIsImZyb21WYXJpYWJsZU5vZGVBbmRUeXBlIiwidHlwZSIsInZhcmlhYmxlQXNzaWdubWVudCIsIlZhcmlhYmxlQXNzaWdubWVudCIsImZyb21WYXJpYWJsZSIsImFzc2lnbm1lbnQiLCJwdXNoIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwicHJvcGVydHlBc3NlcnRpb24iLCJwcm9wZXJ0eUFzc2VydGlvbk5vZGUiLCJUZXJtIiwiUHJvcGVydHkiLCJub2RlQXNTdHJpbmciLCJub2RlQXNUb2tlbnMiLCJwcm9wZXJ0eU5vZGUiLCJyaWdodFRlcm1Ob2RlIiwiZnJvbVByb3BlcnR5Tm9kZSIsImZyb21UZXJtTm9kZSIsIm5hbWUiXSwibWFwcGluZ3MiOiJB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