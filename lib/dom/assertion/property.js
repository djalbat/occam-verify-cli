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
var termNodeQuery = (0, _query.nodeQuery)("/propertyAssertion/term"), variableNodeQuery = (0, _query.nodeQuery)("/propertyAssertion/variable"), propertyNodeQuery = (0, _query.nodeQuery)("/propertyAssertion/property"), propertyAssertionNodeQuery = (0, _query.nodeQuery)("/statement/propertyAssertion");
var _default = (0, _dom.domAssigned)((_PropertyAssertion = /*#__PURE__*/ function() {
    function PropertyAssertion(string, node, tokens, property, variable, term) {
        _class_call_check(this, PropertyAssertion);
        this.string = string;
        this.node = node;
        this.tokens = tokens;
        this.property = property;
        this.variable = variable;
        this.term = term;
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
            key: "getVariable",
            value: function getVariable() {
                return this.variable;
            }
        },
        {
            key: "getTerm",
            value: function getTerm() {
                return this.term;
            }
        },
        {
            key: "verify",
            value: function verify(assignments, stated, context) {
                var verified = false;
                var propertyAssertionString = this.string; ///
                context.trace("Verifying the '".concat(propertyAssertionString, "' property assertion..."));
                var variableVerified = this.verifyVariable(assignments, stated, context);
                if (variableVerified) {
                    var termVerified = this.verifyTerm(assignments, stated, context);
                    if (termVerified) {
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
            key: "verifyTerm",
            value: function verifyTerm(assignments, stated, context) {
                var termVerified;
                var termString = this.term.getString(), propertyAssertionString = this.string; ///
                context.trace("Verifying the '".concat(propertyAssertionString, "' property assertion's '").concat(termString, "' term..."));
                termVerified = this.term.verify(context, function() {
                    var verifiedAhead = true;
                    return verifiedAhead;
                });
                if (termVerified) {
                    context.debug("...verified the '".concat(propertyAssertionString, "' property assertion's '").concat(termString, "' term."));
                }
                return termVerified;
            }
        },
        {
            key: "verifyVariable",
            value: function verifyVariable(assignments, stated, context) {
                var variableVerified;
                var variableString = this.variable.getString(), propertyAssertionString = this.string; ///
                context.trace("Verifying the '".concat(propertyAssertionString, "' property assertion's '").concat(variableString, "' variable..."));
                variableVerified = this.variable.verify(context);
                if (variableVerified) {
                    context.debug("...verified the '".concat(propertyAssertionString, "' property assertion's '").concat(variableString, "' variable."));
                }
                return variableVerified;
            }
        },
        {
            key: "verifyProperty",
            value: function verifyProperty(assignments, stated, context) {
                var propertyVerified;
                var propertyString = this.property.getString(), propertyAssertionString = this.string; ///
                context.trace("Verifying the '".concat(propertyAssertionString, "' property assertion's '").concat(propertyString, "' property..."));
                var termType = this.term.getType(), propertyName = this.property.getName(), property = termType.findPropertyByPropertyName(propertyName);
                if (property === null) {
                    var termTypeName = termType.getName();
                    context.debug("The '".concat(propertyName, "' property is not a property of the term's '").concat(termTypeName, "' type."));
                } else {
                    var variableType = this.variable.getType(), propertyType = property.getType(), variableTypeEqualToOrSubTypeOfPropertyType = variableType.isEqualToOrSubTypeOf(propertyType);
                    if (!variableTypeEqualToOrSubTypeOfPropertyType) {
                        var variableTypeName = variableType.getName(), propertyTypeName = propertyType.getName();
                        context.debug("The variable's '".concat(variableTypeName, "' type is not equal to or a sub-type of the '").concat(propertyName, "' property's '").concat(propertyTypeName, "' type."));
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
            key: "verifyWhenStated",
            value: function verifyWhenStated(assignments, context) {
                var verifiedWhenStated = false;
                var propertyAssertionString = this.string; ///
                context.trace("Verifying the '".concat(propertyAssertionString, "' stated property assertion..."));
                if (assignments !== null) {
                    var Variable = _dom.default.Variable, termNode = this.term.getNode(), variableNode = variableNodeQuery(termNode), variable = Variable.fromVariableNodeAndType(variableNode, this.type, context);
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
                    var Term = _dom.default.Term, Variable = _dom.default.Variable, Property = _dom.default.Property, node = propertyAssertionNode, string = context.nodeAsString(node), tokens = context.nodeAsTokens(node), propertyNode = propertyNodeQuery(propertyAssertionNode), variableNode = variableNodeQuery(propertyAssertionNode), termNode = termNodeQuery(propertyAssertionNode), property = Property.fromPropertyNode(propertyNode, context), variable = Variable.fromVariableNode(variableNode, context), term = Term.fromTermNode(termNode, context);
                    propertyAssertion = new PropertyAssertion(string, node, tokens, property, variable, term);
                }
                return propertyAssertion;
            }
        }
    ]);
    return PropertyAssertion;
}(), _define_property(_PropertyAssertion, "name", "PropertyAssertion"), _PropertyAssertion));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vYXNzZXJ0aW9uL3Byb3BlcnR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi8uLi9kb21cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgVmFyaWFibGVBc3NpZ25tZW50IGZyb20gXCIuLi8uLi9hc3NpZ25tZW50L3ZhcmlhYmxlXCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcHJvcGVydHlBc3NlcnRpb24vdGVybVwiKSxcbiAgICAgIHZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Byb3BlcnR5QXNzZXJ0aW9uL3ZhcmlhYmxlXCIpLFxuICAgICAgcHJvcGVydHlOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcHJvcGVydHlBc3NlcnRpb24vcHJvcGVydHlcIiksXG4gICAgICBwcm9wZXJ0eUFzc2VydGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvcHJvcGVydHlBc3NlcnRpb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFByb3BlcnR5QXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCB0b2tlbnMsIHByb3BlcnR5LCB2YXJpYWJsZSwgdGVybSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgdGhpcy5wcm9wZXJ0eSA9IHByb3BlcnR5O1xuICAgIHRoaXMudmFyaWFibGUgPSB2YXJpYWJsZTtcbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXRQcm9wZXJ0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wZXJ0eTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtO1xuICB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb3BlcnR5QXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIHByb3BlcnR5IGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3QgdmFyaWFibGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5VmFyaWFibGUoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICBpZiAodmFyaWFibGVWZXJpZmllZCkge1xuICAgICAgY29uc3QgdGVybVZlcmlmaWVkID0gdGhpcy52ZXJpZnlUZXJtKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAodGVybVZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IHByb3BlcnR5VmVyaWZpZWQgPSB0aGlzLnZlcmlmeVByb3BlcnR5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChwcm9wZXJ0eVZlcmlmaWVkKSB7XG4gICAgICAgICAgbGV0IHZlcmlmaWVkV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICAgICAgICBpZiAoc3RhdGVkKSB7XG4gICAgICAgICAgICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0aGlzLnZlcmlmeVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gdGhpcy52ZXJpZnlXaGVuRGVyaXZlZChjb250ZXh0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodmVyaWZpZWRXaGVuU3RhdGVkIHx8IHZlcmlmaWVkV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIHByb3BlcnR5IGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlUZXJtKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybVZlcmlmaWVkO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRoaXMudGVybS5nZXRTdHJpbmcoKSxcbiAgICAgIHByb3BlcnR5QXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIHByb3BlcnR5IGFzc2VydGlvbidzICcke3Rlcm1TdHJpbmd9JyB0ZXJtLi4uYCk7XG5cbiAgICB0ZXJtVmVyaWZpZWQgPSB0aGlzLnRlcm0udmVyaWZ5KGNvbnRleHQsICgpID0+IHtcbiAgICAgIGNvbnN0IHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuXG4gICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICB9KTtcblxuICAgIGlmICh0ZXJtVmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIHByb3BlcnR5IGFzc2VydGlvbidzICcke3Rlcm1TdHJpbmd9JyB0ZXJtLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlWYXJpYWJsZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZhcmlhYmxlVmVyaWZpZWQ7XG5cbiAgICBjb25zdCB2YXJpYWJsZVN0cmluZyA9IHRoaXMudmFyaWFibGUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcHJvcGVydHlBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb3BlcnR5QXNzZXJ0aW9uU3RyaW5nfScgcHJvcGVydHkgYXNzZXJ0aW9uJ3MgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZS4uLmApO1xuXG4gICAgdmFyaWFibGVWZXJpZmllZCA9IHRoaXMudmFyaWFibGUudmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgaWYgKHZhcmlhYmxlVmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIHByb3BlcnR5IGFzc2VydGlvbidzICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhcmlhYmxlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlQcm9wZXJ0eShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHByb3BlcnR5VmVyaWZpZWQ7XG5cbiAgICBjb25zdCBwcm9wZXJ0eVN0cmluZyA9IHRoaXMucHJvcGVydHkuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcHJvcGVydHlBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb3BlcnR5QXNzZXJ0aW9uU3RyaW5nfScgcHJvcGVydHkgYXNzZXJ0aW9uJ3MgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eS4uLmApO1xuXG4gICAgY29uc3QgdGVybVR5cGUgPSB0aGlzLnRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgIHByb3BlcnR5TmFtZSA9IHRoaXMucHJvcGVydHkuZ2V0TmFtZSgpLFxuICAgICAgICAgIHByb3BlcnR5ID0gdGVybVR5cGUuZmluZFByb3BlcnR5QnlQcm9wZXJ0eU5hbWUocHJvcGVydHlOYW1lKTtcblxuICAgIGlmIChwcm9wZXJ0eSA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgdGVybVR5cGVOYW1lID0gdGVybVR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7cHJvcGVydHlOYW1lfScgcHJvcGVydHkgaXMgbm90IGEgcHJvcGVydHkgb2YgdGhlIHRlcm0ncyAnJHt0ZXJtVHlwZU5hbWV9JyB0eXBlLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB2YXJpYWJsZVR5cGUgPSB0aGlzLnZhcmlhYmxlLmdldFR5cGUoKSxcbiAgICAgICAgICAgIHByb3BlcnR5VHlwZSA9IHByb3BlcnR5LmdldFR5cGUoKSxcbiAgICAgICAgICAgIHZhcmlhYmxlVHlwZUVxdWFsVG9PclN1YlR5cGVPZlByb3BlcnR5VHlwZSA9IHZhcmlhYmxlVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZihwcm9wZXJ0eVR5cGUpO1xuXG4gICAgICBpZiAoIXZhcmlhYmxlVHlwZUVxdWFsVG9PclN1YlR5cGVPZlByb3BlcnR5VHlwZSkge1xuICAgICAgICBjb25zdCB2YXJpYWJsZVR5cGVOYW1lID0gdmFyaWFibGVUeXBlLmdldE5hbWUoKSxcbiAgICAgICAgICAgICAgcHJvcGVydHlUeXBlTmFtZSA9IHByb3BlcnR5VHlwZS5nZXROYW1lKCk7XG5cbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlIHZhcmlhYmxlJ3MgJyR7dmFyaWFibGVUeXBlTmFtZX0nIHR5cGUgaXMgbm90IGVxdWFsIHRvIG9yIGEgc3ViLXR5cGUgb2YgdGhlICcke3Byb3BlcnR5TmFtZX0nIHByb3BlcnR5J3MgJyR7cHJvcGVydHlUeXBlTmFtZX0nIHR5cGUuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9wZXJ0eVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocHJvcGVydHlWZXJpZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Byb3BlcnR5QXNzZXJ0aW9uU3RyaW5nfScgcHJvcGVydHkgYXNzZXJ0aW9uJ3MgJyR7cHJvcGVydHlTdHJpbmd9JyBwcm9wZXJ0eS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydHlWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuU3RhdGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcm9wZXJ0eUFzc2VydGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cHJvcGVydHlBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgcHJvcGVydHkgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBpZiAoYXNzaWdubWVudHMgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgVmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgICAgIHRlcm1Ob2RlID0gdGhpcy50ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKSxcbiAgICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUodmFyaWFibGVOb2RlLCB0aGlzLnR5cGUsIGNvbnRleHQpO1xuXG4gICAgfVxuXG4gICAgdmVyaWZpZWRXaGVuU3RhdGVkID0gdHJ1ZTtcblxuICAgIGlmICh2ZXJpZmllZFdoZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIHN0YXRlZCBwcm9wZXJ0eSBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5EZXJpdmVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb3BlcnR5QXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgcHJvcGVydHkgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBkZWJ1Z2dlclxuXG4gICAgaWYgKHZlcmlmaWVkV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgcHJvcGVydHkgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZFdoZW5EZXJpdmVkO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlByb3BlcnR5QXNzZXJ0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgcHJvcGVydHlBc3NlcnRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgcHJvcGVydHlBc3NlcnRpb25Ob2RlID0gcHJvcGVydHlBc3NlcnRpb25Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBpZiAocHJvcGVydHlBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFRlcm0sIFZhcmlhYmxlLCBQcm9wZXJ0eSB9ID0gZG9tLFxuICAgICAgICAgICAgbm9kZSA9IHByb3BlcnR5QXNzZXJ0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICB0b2tlbnMgPSBjb250ZXh0Lm5vZGVBc1Rva2Vucyhub2RlKSxcbiAgICAgICAgICAgIHByb3BlcnR5Tm9kZSA9IHByb3BlcnR5Tm9kZVF1ZXJ5KHByb3BlcnR5QXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgICB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeShwcm9wZXJ0eUFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgICAgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KHByb3BlcnR5QXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgICBwcm9wZXJ0eSA9IFByb3BlcnR5LmZyb21Qcm9wZXJ0eU5vZGUocHJvcGVydHlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgdGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgcHJvcGVydHlBc3NlcnRpb24gPSBuZXcgUHJvcGVydHlBc3NlcnRpb24oc3RyaW5nLCBub2RlLCB0b2tlbnMsIHByb3BlcnR5LCB2YXJpYWJsZSwgdGVybSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5QXNzZXJ0aW9uO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidmFyaWFibGVOb2RlUXVlcnkiLCJwcm9wZXJ0eU5vZGVRdWVyeSIsInByb3BlcnR5QXNzZXJ0aW9uTm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJQcm9wZXJ0eUFzc2VydGlvbiIsInN0cmluZyIsIm5vZGUiLCJ0b2tlbnMiLCJwcm9wZXJ0eSIsInZhcmlhYmxlIiwidGVybSIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXRUb2tlbnMiLCJnZXRQcm9wZXJ0eSIsImdldFZhcmlhYmxlIiwiZ2V0VGVybSIsInZlcmlmeSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwiY29udGV4dCIsInZlcmlmaWVkIiwicHJvcGVydHlBc3NlcnRpb25TdHJpbmciLCJ0cmFjZSIsInZhcmlhYmxlVmVyaWZpZWQiLCJ2ZXJpZnlWYXJpYWJsZSIsInRlcm1WZXJpZmllZCIsInZlcmlmeVRlcm0iLCJwcm9wZXJ0eVZlcmlmaWVkIiwidmVyaWZ5UHJvcGVydHkiLCJ2ZXJpZmllZFdoZW5TdGF0ZWQiLCJ2ZXJpZmllZFdoZW5EZXJpdmVkIiwidmVyaWZ5V2hlblN0YXRlZCIsInZlcmlmeVdoZW5EZXJpdmVkIiwiZGVidWciLCJ0ZXJtU3RyaW5nIiwidmVyaWZpZWRBaGVhZCIsInZhcmlhYmxlU3RyaW5nIiwicHJvcGVydHlTdHJpbmciLCJ0ZXJtVHlwZSIsImdldFR5cGUiLCJwcm9wZXJ0eU5hbWUiLCJnZXROYW1lIiwiZmluZFByb3BlcnR5QnlQcm9wZXJ0eU5hbWUiLCJ0ZXJtVHlwZU5hbWUiLCJ2YXJpYWJsZVR5cGUiLCJwcm9wZXJ0eVR5cGUiLCJ2YXJpYWJsZVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZQcm9wZXJ0eVR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsInZhcmlhYmxlVHlwZU5hbWUiLCJwcm9wZXJ0eVR5cGVOYW1lIiwiVmFyaWFibGUiLCJkb20iLCJ0ZXJtTm9kZSIsInZhcmlhYmxlTm9kZSIsImZyb21WYXJpYWJsZU5vZGVBbmRUeXBlIiwidHlwZSIsImZyb21TdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsInByb3BlcnR5QXNzZXJ0aW9uIiwicHJvcGVydHlBc3NlcnRpb25Ob2RlIiwiVGVybSIsIlByb3BlcnR5Iiwibm9kZUFzU3RyaW5nIiwibm9kZUFzVG9rZW5zIiwicHJvcGVydHlOb2RlIiwiZnJvbVByb3BlcnR5Tm9kZSIsImZyb21WYXJpYWJsZU5vZGUiLCJmcm9tVGVybU5vZGUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFhQTs7O2VBQUE7OzsyREFYZ0I7cUJBRVU7K0RBRUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9CLElBQU1BLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyw0QkFDMUJDLG9CQUFvQkQsSUFBQUEsZ0JBQVMsRUFBQyxnQ0FDOUJFLG9CQUFvQkYsSUFBQUEsZ0JBQVMsRUFBQyxnQ0FDOUJHLDZCQUE2QkgsSUFBQUEsZ0JBQVMsRUFBQztJQUU3QyxXQUFlSSxJQUFBQSxnQkFBVyxzQ0FBQzthQUFNQyxrQkFDbkJDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsUUFBUSxFQUFFQyxJQUFJO2dDQUQzQk47UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLElBQUksR0FBR0E7Ozs7WUFHZEMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixNQUFNO1lBQ3BCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixJQUFJO1lBQ2xCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixNQUFNO1lBQ3BCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixRQUFRO1lBQ3RCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixRQUFRO1lBQ3RCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixJQUFJO1lBQ2xCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLFdBQVcsRUFBRUMsTUFBTSxFQUFFQyxPQUFPO2dCQUNqQyxJQUFJQyxXQUFXO2dCQUVmLElBQU1DLDBCQUEwQixJQUFJLENBQUNqQixNQUFNLEVBQUUsR0FBRztnQkFFaERlLFFBQVFHLEtBQUssQ0FBQyxBQUFDLGtCQUF5QyxPQUF4QkQseUJBQXdCO2dCQUV4RCxJQUFNRSxtQkFBbUIsSUFBSSxDQUFDQyxjQUFjLENBQUNQLGFBQWFDLFFBQVFDO2dCQUVsRSxJQUFJSSxrQkFBa0I7b0JBQ3BCLElBQU1FLGVBQWUsSUFBSSxDQUFDQyxVQUFVLENBQUNULGFBQWFDLFFBQVFDO29CQUUxRCxJQUFJTSxjQUFjO3dCQUNoQixJQUFNRSxtQkFBbUIsSUFBSSxDQUFDQyxjQUFjLENBQUNYLGFBQWFDLFFBQVFDO3dCQUVsRSxJQUFJUSxrQkFBa0I7NEJBQ3BCLElBQUlFLHFCQUFxQixPQUNyQkMsc0JBQXNCOzRCQUUxQixJQUFJWixRQUFRO2dDQUNWVyxxQkFBcUIsSUFBSSxDQUFDRSxnQkFBZ0IsQ0FBQ2QsYUFBYUU7NEJBQzFELE9BQU87Z0NBQ0xXLHNCQUFzQixJQUFJLENBQUNFLGlCQUFpQixDQUFDYjs0QkFDL0M7NEJBRUEsSUFBSVUsc0JBQXNCQyxxQkFBcUI7Z0NBQzdDVixXQUFXOzRCQUNiO3dCQUNGO29CQUNGO2dCQUNGO2dCQUVBLElBQUlBLFVBQVU7b0JBQ1pELFFBQVFjLEtBQUssQ0FBQyxBQUFDLG9CQUEyQyxPQUF4QloseUJBQXdCO2dCQUM1RDtnQkFFQSxPQUFPRDtZQUNUOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdULFdBQVcsRUFBRUMsTUFBTSxFQUFFQyxPQUFPO2dCQUNyQyxJQUFJTTtnQkFFSixJQUFNUyxhQUFhLElBQUksQ0FBQ3pCLElBQUksQ0FBQ0MsU0FBUyxJQUNwQ1csMEJBQTBCLElBQUksQ0FBQ2pCLE1BQU0sRUFBRSxHQUFHO2dCQUU1Q2UsUUFBUUcsS0FBSyxDQUFDLEFBQUMsa0JBQW1FWSxPQUFsRGIseUJBQXdCLDRCQUFxQyxPQUFYYSxZQUFXO2dCQUU3RlQsZUFBZSxJQUFJLENBQUNoQixJQUFJLENBQUNPLE1BQU0sQ0FBQ0csU0FBUztvQkFDdkMsSUFBTWdCLGdCQUFnQjtvQkFFdEIsT0FBT0E7Z0JBQ1Q7Z0JBRUEsSUFBSVYsY0FBYztvQkFDaEJOLFFBQVFjLEtBQUssQ0FBQyxBQUFDLG9CQUFxRUMsT0FBbERiLHlCQUF3Qiw0QkFBcUMsT0FBWGEsWUFBVztnQkFDakc7Z0JBRUEsT0FBT1Q7WUFDVDs7O1lBRUFELEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlUCxXQUFXLEVBQUVDLE1BQU0sRUFBRUMsT0FBTztnQkFDekMsSUFBSUk7Z0JBRUosSUFBTWEsaUJBQWlCLElBQUksQ0FBQzVCLFFBQVEsQ0FBQ0UsU0FBUyxJQUN4Q1csMEJBQTBCLElBQUksQ0FBQ2pCLE1BQU0sRUFBRSxHQUFHO2dCQUVoRGUsUUFBUUcsS0FBSyxDQUFDLEFBQUMsa0JBQW1FYyxPQUFsRGYseUJBQXdCLDRCQUF5QyxPQUFmZSxnQkFBZTtnQkFFakdiLG1CQUFtQixJQUFJLENBQUNmLFFBQVEsQ0FBQ1EsTUFBTSxDQUFDRztnQkFFeEMsSUFBSUksa0JBQWtCO29CQUNwQkosUUFBUWMsS0FBSyxDQUFDLEFBQUMsb0JBQXFFRyxPQUFsRGYseUJBQXdCLDRCQUF5QyxPQUFmZSxnQkFBZTtnQkFDckc7Z0JBRUEsT0FBT2I7WUFDVDs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlWCxXQUFXLEVBQUVDLE1BQU0sRUFBRUMsT0FBTztnQkFDekMsSUFBSVE7Z0JBRUosSUFBTVUsaUJBQWlCLElBQUksQ0FBQzlCLFFBQVEsQ0FBQ0csU0FBUyxJQUN4Q1csMEJBQTBCLElBQUksQ0FBQ2pCLE1BQU0sRUFBRSxHQUFHO2dCQUVoRGUsUUFBUUcsS0FBSyxDQUFDLEFBQUMsa0JBQW1FZSxPQUFsRGhCLHlCQUF3Qiw0QkFBeUMsT0FBZmdCLGdCQUFlO2dCQUVqRyxJQUFNQyxXQUFXLElBQUksQ0FBQzdCLElBQUksQ0FBQzhCLE9BQU8sSUFDNUJDLGVBQWUsSUFBSSxDQUFDakMsUUFBUSxDQUFDa0MsT0FBTyxJQUNwQ2xDLFdBQVcrQixTQUFTSSwwQkFBMEIsQ0FBQ0Y7Z0JBRXJELElBQUlqQyxhQUFhLE1BQU07b0JBQ3JCLElBQU1vQyxlQUFlTCxTQUFTRyxPQUFPO29CQUVyQ3RCLFFBQVFjLEtBQUssQ0FBQyxBQUFDLFFBQWtFVSxPQUEzREgsY0FBYSxnREFBMkQsT0FBYkcsY0FBYTtnQkFDaEcsT0FBTztvQkFDTCxJQUFNQyxlQUFlLElBQUksQ0FBQ3BDLFFBQVEsQ0FBQytCLE9BQU8sSUFDcENNLGVBQWV0QyxTQUFTZ0MsT0FBTyxJQUMvQk8sNkNBQTZDRixhQUFhRyxvQkFBb0IsQ0FBQ0Y7b0JBRXJGLElBQUksQ0FBQ0MsNENBQTRDO3dCQUMvQyxJQUFNRSxtQkFBbUJKLGFBQWFILE9BQU8sSUFDdkNRLG1CQUFtQkosYUFBYUosT0FBTzt3QkFFN0N0QixRQUFRYyxLQUFLLENBQUMsQUFBQyxtQkFBa0ZPLE9BQWhFUSxrQkFBaUIsaURBQTRFQyxPQUE3QlQsY0FBYSxrQkFBaUMsT0FBakJTLGtCQUFpQjtvQkFDakosT0FBTzt3QkFDTHRCLG1CQUFtQjtvQkFDckI7Z0JBQ0Y7Z0JBRUEsSUFBSUEsa0JBQWtCO29CQUNwQlIsUUFBUWMsS0FBSyxDQUFDLEFBQUMsb0JBQXFFSSxPQUFsRGhCLHlCQUF3Qiw0QkFBeUMsT0FBZmdCLGdCQUFlO2dCQUNyRztnQkFFQSxPQUFPVjtZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLGlCQUFpQmQsV0FBVyxFQUFFRSxPQUFPO2dCQUNuQyxJQUFJVSxxQkFBcUI7Z0JBRXpCLElBQU1SLDBCQUEwQixJQUFJLENBQUNqQixNQUFNLEVBQUUsR0FBRztnQkFFaERlLFFBQVFHLEtBQUssQ0FBQyxBQUFDLGtCQUF5QyxPQUF4QkQseUJBQXdCO2dCQUV4RCxJQUFJSixnQkFBZ0IsTUFBTTtvQkFDeEIsSUFBTSxBQUFFaUMsV0FBYUMsWUFBRyxDQUFoQkQsVUFDRkUsV0FBVyxJQUFJLENBQUMzQyxJQUFJLENBQUNFLE9BQU8sSUFDNUIwQyxlQUFldEQsa0JBQWtCcUQsV0FDakM1QyxXQUFXMEMsU0FBU0ksdUJBQXVCLENBQUNELGNBQWMsSUFBSSxDQUFDRSxJQUFJLEVBQUVwQztnQkFFN0U7Z0JBRUFVLHFCQUFxQjtnQkFFckIsSUFBSUEsb0JBQW9CO29CQUN0QlYsUUFBUWMsS0FBSyxDQUFDLEFBQUMsb0JBQTJDLE9BQXhCWix5QkFBd0I7Z0JBQzVEO2dCQUVBLE9BQU9RO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCZixXQUFXLEVBQUVFLE9BQU87Z0JBQ3BDLElBQUlXLHNCQUFzQjtnQkFFMUIsSUFBTVQsMEJBQTBCLElBQUksQ0FBQ2pCLE1BQU0sRUFBRSxHQUFHO2dCQUVoRGUsUUFBUUcsS0FBSyxDQUFDLEFBQUMsa0JBQXlDLE9BQXhCRCx5QkFBd0I7Z0JBRXhELFFBQVE7Z0JBRVIsSUFBSVMscUJBQXFCO29CQUN2QlgsUUFBUWMsS0FBSyxDQUFDLEFBQUMsb0JBQTJDLE9BQXhCWix5QkFBd0I7Z0JBQzVEO2dCQUVBLE9BQU9TO1lBQ1Q7Ozs7WUFJTzBCLEtBQUFBO21CQUFQLFNBQU9BLGtCQUFrQkMsYUFBYSxFQUFFdEMsT0FBTztnQkFDN0MsSUFBSXVDLG9CQUFvQjtnQkFFeEIsSUFBTUMsd0JBQXdCMUQsMkJBQTJCd0Q7Z0JBRXpELElBQUlFLDBCQUEwQixNQUFNO29CQUNsQyxJQUFRQyxPQUE2QlQsWUFBRyxDQUFoQ1MsTUFBTVYsV0FBdUJDLFlBQUcsQ0FBMUJELFVBQVVXLFdBQWFWLFlBQUcsQ0FBaEJVLFVBQ2xCeEQsT0FBT3NELHVCQUNQdkQsU0FBU2UsUUFBUTJDLFlBQVksQ0FBQ3pELE9BQzlCQyxTQUFTYSxRQUFRNEMsWUFBWSxDQUFDMUQsT0FDOUIyRCxlQUFlaEUsa0JBQWtCMkQsd0JBQ2pDTixlQUFldEQsa0JBQWtCNEQsd0JBQ2pDUCxXQUFXdkQsY0FBYzhELHdCQUN6QnBELFdBQVdzRCxTQUFTSSxnQkFBZ0IsQ0FBQ0QsY0FBYzdDLFVBQ25EWCxXQUFXMEMsU0FBU2dCLGdCQUFnQixDQUFDYixjQUFjbEMsVUFDbkRWLE9BQU9tRCxLQUFLTyxZQUFZLENBQUNmLFVBQVVqQztvQkFFekN1QyxvQkFBb0IsSUFBSXZELGtCQUFrQkMsUUFBUUMsTUFBTUMsUUFBUUMsVUFBVUMsVUFBVUM7Z0JBQ3RGO2dCQUVBLE9BQU9pRDtZQUNUOzs7O0tBdkJBLHFDQUFPVSxRQUFPIn0=