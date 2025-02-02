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
var _variable = /*#__PURE__*/ _interop_require_default(require("../../assignment/variable"));
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
var termNodeQuery = (0, _query.nodeQuery)("/propertyAssertion/term"), propertyRelationNodeQuery = (0, _query.nodeQuery)("/propertyAssertion/propertyRelation"), propertyAssertionNodeQuery = (0, _query.nodeQuery)("/statement/propertyAssertion");
var _default = (0, _dom.domAssigned)((_PropertyAssertion = /*#__PURE__*/ function() {
    function PropertyAssertion(string, node, tokens, term, propertyRelation) {
        _class_call_check(this, PropertyAssertion);
        this.string = string;
        this.node = node;
        this.tokens = tokens;
        this.term = term;
        this.propertyRelation = propertyRelation;
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
            key: "getTerm",
            value: function getTerm() {
                return this.term;
            }
        },
        {
            key: "getPropertyRelation",
            value: function getPropertyRelation() {
                return this.propertyRelation;
            }
        },
        {
            key: "matchTermAndPropertyRelation",
            value: function matchTermAndPropertyRelation(term, propertyRelation, context) {
                var verifiedAsPropertyAssertion = false;
                var termString = term.getString(), propertyRelationString = propertyRelation.getString(), propertyAssertionString = this.getString();
                context.trace("Matching the '".concat(termString, "' term and '").concat(propertyRelationString, "' property relation against the '").concat(propertyAssertionString, "' property assertion..."));
                var termA = term, termB = this.term, termAEqualToTermB = termA.isEqualTo(termB);
                if (termAEqualToTermB) {
                    var propertyRelationEqualToPropertyRelation = this.propertyRelation.isEqualTo(propertyRelation);
                    verifiedAsPropertyAssertion = propertyRelationEqualToPropertyRelation; ///
                }
                if (verifiedAsPropertyAssertion) {
                    context.debug("...matched the '".concat(termString, "' term and '").concat(propertyRelationString, "' property relation against the '").concat(propertyAssertionString, "' property assertion."));
                }
                return verifiedAsPropertyAssertion;
            }
        },
        {
            key: "verify",
            value: function verify(assignments, stated, context) {
                var verified = false;
                var propertyAssertionString = this.string; ///
                context.trace("Verifying the '".concat(propertyAssertionString, "' property assertion..."));
                var termVerified = this.verifyTerm(assignments, stated, context);
                if (termVerified) {
                    var propertyRelationVerified = this.verifyPropertyRelation(assignments, stated, context);
                    if (propertyRelationVerified) {
                        var verifiedWhenStated = false, verifiedWhenDerived = false;
                        if (stated) {
                            verifiedWhenStated = this.verifyWhenStated(assignments, context);
                        } else {
                            verifiedWhenDerived = this.verifyWhenDerived(context);
                        }
                        verified = verifiedWhenStated || verifiedWhenDerived;
                    }
                }
                if (verified) {
                    if (stated) {
                        this.assign(assignments, context);
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
            key: "verifyPropertyRelation",
            value: function verifyPropertyRelation(assignments, stated, context) {
                var propertyRelationVerified;
                var propertyRelationString = this.propertyRelation.getString(), propertyAssertionString = this.string; ///
                context.trace("Verifying the '".concat(propertyAssertionString, "' property assertion's '").concat(propertyRelationString, "' property relation..."));
                propertyRelationVerified = this.propertyRelation.verify(context);
                if (propertyRelationVerified) {
                    context.debug("...verified the '".concat(propertyAssertionString, "' property assertion's '").concat(propertyRelationString, "' property relation."));
                }
                return propertyRelationVerified;
            }
        },
        {
            key: "verifyWhenStated",
            value: function verifyWhenStated(assignments, context) {
                var verifiedWhenStated;
                var propertyAssertionString = this.string; ///
                context.trace("Verifying the '".concat(propertyAssertionString, "' stated property assertion..."));
                verifiedWhenStated = true;
                if (verifiedWhenStated) {
                    context.debug("...verified the '".concat(propertyAssertionString, "' stated property assertion."));
                }
                return verifiedWhenStated;
            }
        },
        {
            key: "verifyWhenDerived",
            value: function verifyWhenDerived(context) {
                var verifiedWhenDerived;
                var propertyAssertionString = this.string; ///
                context.trace("Verifying the '".concat(propertyAssertionString, "' derived property assertion..."));
                verifiedWhenDerived = true;
                if (verifiedWhenDerived) {
                    context.debug("...verified the '".concat(propertyAssertionString, "' derived property assertion."));
                }
                return verifiedWhenDerived;
            }
        },
        {
            key: "assign",
            value: function assign(assignments, context) {
                if (assignments === null) {
                    return;
                }
                var variable;
                var Variable = _dom.default.Variable, termNode = this.term.getNode();
                variable = Variable.fromTermNode(termNode, context);
                if (variable !== null) {
                    var variableName = variable.getName();
                    variable = context.findVariableByVariableName(variableName);
                    variable = Variable.fromVariableAndPropertyRelation(variable, this.propertyRelation);
                    var variableAssignment = _variable.default.fromVariable(variable), assignment = variableAssignment; ///
                    assignments.push(assignment);
                }
            }
        }
    ], [
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode, context) {
                var propertyAssertion = null;
                var propertyAssertionNode = propertyAssertionNodeQuery(statementNode);
                if (propertyAssertionNode !== null) {
                    var Term = _dom.default.Term, PropertyRelation = _dom.default.PropertyRelation, node = propertyAssertionNode, string = context.nodeAsString(node), tokens = context.nodeAsTokens(node), termNode = termNodeQuery(propertyAssertionNode), propertyRelationNode = propertyRelationNodeQuery(propertyAssertionNode), term = Term.fromTermNode(termNode, context), propertyRelation = PropertyRelation.fromPropertyRelationNode(propertyRelationNode, context);
                    propertyAssertion = new PropertyAssertion(string, node, tokens, term, propertyRelation);
                }
                return propertyAssertion;
            }
        }
    ]);
    return PropertyAssertion;
}(), _define_property(_PropertyAssertion, "name", "PropertyAssertion"), _PropertyAssertion));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vYXNzZXJ0aW9uL3Byb3BlcnR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi8uLi9kb21cIjtcblxuaW1wb3J0IFZhcmlhYmxlQXNzaWdubWVudCBmcm9tIFwiLi4vLi4vYXNzaWdubWVudC92YXJpYWJsZVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi8uLi9kb21cIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9wZXJ0eUFzc2VydGlvbi90ZXJtXCIpLFxuICAgICAgcHJvcGVydHlSZWxhdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9wcm9wZXJ0eUFzc2VydGlvbi9wcm9wZXJ0eVJlbGF0aW9uXCIpLFxuICAgICAgcHJvcGVydHlBc3NlcnRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L3Byb3BlcnR5QXNzZXJ0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBQcm9wZXJ0eUFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSwgdG9rZW5zLCB0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICAgIHRoaXMucHJvcGVydHlSZWxhdGlvbiA9IHByb3BlcnR5UmVsYXRpb247XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGdldFByb3BlcnR5UmVsYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcGVydHlSZWxhdGlvbjtcbiAgfVxuXG4gIG1hdGNoVGVybUFuZFByb3BlcnR5UmVsYXRpb24odGVybSwgcHJvcGVydHlSZWxhdGlvbiwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZEFzUHJvcGVydHlBc3NlcnRpb24gPSBmYWxzZTtcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIHByb3BlcnR5UmVsYXRpb25TdHJpbmcgPSBwcm9wZXJ0eVJlbGF0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHByb3BlcnR5QXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYE1hdGNoaW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBhbmQgJyR7cHJvcGVydHlSZWxhdGlvblN0cmluZ30nIHByb3BlcnR5IHJlbGF0aW9uIGFnYWluc3QgdGhlICcke3Byb3BlcnR5QXNzZXJ0aW9uU3RyaW5nfScgcHJvcGVydHkgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtQSA9IHRlcm0sXG4gICAgICAgICAgdGVybUIgPSB0aGlzLnRlcm0sIC8vL1xuICAgICAgICAgIHRlcm1BRXF1YWxUb1Rlcm1CID0gdGVybUEuaXNFcXVhbFRvKHRlcm1CKTtcblxuICAgIGlmICh0ZXJtQUVxdWFsVG9UZXJtQikge1xuICAgICAgY29uc3QgcHJvcGVydHlSZWxhdGlvbkVxdWFsVG9Qcm9wZXJ0eVJlbGF0aW9uID0gdGhpcy5wcm9wZXJ0eVJlbGF0aW9uLmlzRXF1YWxUbyhwcm9wZXJ0eVJlbGF0aW9uKTtcblxuICAgICAgdmVyaWZpZWRBc1Byb3BlcnR5QXNzZXJ0aW9uID0gcHJvcGVydHlSZWxhdGlvbkVxdWFsVG9Qcm9wZXJ0eVJlbGF0aW9uOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkQXNQcm9wZXJ0eUFzc2VydGlvbikge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4ubWF0Y2hlZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYW5kICcke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9JyBwcm9wZXJ0eSByZWxhdGlvbiBhZ2FpbnN0IHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIHByb3BlcnR5IGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRBc1Byb3BlcnR5QXNzZXJ0aW9uO1xuICB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb3BlcnR5QXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIHByb3BlcnR5IGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3QgdGVybVZlcmlmaWVkID0gdGhpcy52ZXJpZnlUZXJtKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHRlcm1WZXJpZmllZCkge1xuICAgICAgY29uc3QgcHJvcGVydHlSZWxhdGlvblZlcmlmaWVkID0gdGhpcy52ZXJpZnlQcm9wZXJ0eVJlbGF0aW9uKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAocHJvcGVydHlSZWxhdGlvblZlcmlmaWVkKSB7XG4gICAgICAgIGxldCB2ZXJpZmllZFdoZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgICBpZiAoc3RhdGVkKSB7XG4gICAgICAgICAgdmVyaWZpZWRXaGVuU3RhdGVkID0gdGhpcy52ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gdGhpcy52ZXJpZnlXaGVuRGVyaXZlZChjb250ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZlcmlmaWVkID0gdmVyaWZpZWRXaGVuU3RhdGVkIHx8IHZlcmlmaWVkV2hlbkRlcml2ZWQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBpZiAoc3RhdGVkKSB7XG4gICAgICAgIHRoaXMuYXNzaWduKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIHByb3BlcnR5IGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlUZXJtKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybVZlcmlmaWVkO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRoaXMudGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBwcm9wZXJ0eUFzc2VydGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cHJvcGVydHlBc3NlcnRpb25TdHJpbmd9JyBwcm9wZXJ0eSBhc3NlcnRpb24ncyAnJHt0ZXJtU3RyaW5nfScgdGVybS4uLmApO1xuXG4gICAgdGVybVZlcmlmaWVkID0gdGhpcy50ZXJtLnZlcmlmeShjb250ZXh0LCAoKSA9PiB7XG4gICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcblxuICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgfSk7XG5cbiAgICBpZiAodGVybVZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cHJvcGVydHlBc3NlcnRpb25TdHJpbmd9JyBwcm9wZXJ0eSBhc3NlcnRpb24ncyAnJHt0ZXJtU3RyaW5nfScgdGVybS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5UHJvcGVydHlSZWxhdGlvbihhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHByb3BlcnR5UmVsYXRpb25WZXJpZmllZDtcblxuICAgIGNvbnN0IHByb3BlcnR5UmVsYXRpb25TdHJpbmcgPSB0aGlzLnByb3BlcnR5UmVsYXRpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcHJvcGVydHlBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb3BlcnR5QXNzZXJ0aW9uU3RyaW5nfScgcHJvcGVydHkgYXNzZXJ0aW9uJ3MgJyR7cHJvcGVydHlSZWxhdGlvblN0cmluZ30nIHByb3BlcnR5IHJlbGF0aW9uLi4uYCk7XG5cbiAgICBwcm9wZXJ0eVJlbGF0aW9uVmVyaWZpZWQgPSB0aGlzLnByb3BlcnR5UmVsYXRpb24udmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgaWYgKHByb3BlcnR5UmVsYXRpb25WZXJpZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Byb3BlcnR5QXNzZXJ0aW9uU3RyaW5nfScgcHJvcGVydHkgYXNzZXJ0aW9uJ3MgJyR7cHJvcGVydHlSZWxhdGlvblN0cmluZ30nIHByb3BlcnR5IHJlbGF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0eVJlbGF0aW9uVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkV2hlblN0YXRlZDtcblxuICAgIGNvbnN0IHByb3BlcnR5QXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIHN0YXRlZCBwcm9wZXJ0eSBhc3NlcnRpb24uLi5gKTtcblxuICAgIHZlcmlmaWVkV2hlblN0YXRlZCA9IHRydWU7XG5cbiAgICBpZiAodmVyaWZpZWRXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cHJvcGVydHlBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgcHJvcGVydHkgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZFdoZW5TdGF0ZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuRGVyaXZlZChjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkV2hlbkRlcml2ZWQ7XG5cbiAgICBjb25zdCBwcm9wZXJ0eUFzc2VydGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cHJvcGVydHlBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIHByb3BlcnR5IGFzc2VydGlvbi4uLmApO1xuXG4gICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IHRydWU7XG5cbiAgICBpZiAodmVyaWZpZWRXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Byb3BlcnR5QXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCBwcm9wZXJ0eSBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkV2hlbkRlcml2ZWQ7XG4gIH1cblxuICBhc3NpZ24oYXNzaWdubWVudHMsIGNvbnRleHQpIHtcbiAgICBpZiAoYXNzaWdubWVudHMgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgdmFyaWFibGU7XG5cbiAgICBjb25zdCB7IFZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgICAgdGVybU5vZGUgPSB0aGlzLnRlcm0uZ2V0Tm9kZSgpO1xuXG4gICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpO1xuXG4gICAgaWYgKHZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZS5nZXROYW1lKCk7XG5cbiAgICAgIHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuXG4gICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYXJpYWJsZUFuZFByb3BlcnR5UmVsYXRpb24odmFyaWFibGUsIHRoaXMucHJvcGVydHlSZWxhdGlvbik7XG5cbiAgICAgIGNvbnN0IHZhcmlhYmxlQXNzaWdubWVudCA9IFZhcmlhYmxlQXNzaWdubWVudC5mcm9tVmFyaWFibGUodmFyaWFibGUpLFxuICAgICAgICAgICAgYXNzaWdubWVudCA9IHZhcmlhYmxlQXNzaWdubWVudDsgIC8vL1xuXG4gICAgICBhc3NpZ25tZW50cy5wdXNoKGFzc2lnbm1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9wZXJ0eUFzc2VydGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IHByb3BlcnR5QXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHByb3BlcnR5QXNzZXJ0aW9uTm9kZSA9IHByb3BlcnR5QXNzZXJ0aW9uTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gICAgaWYgKHByb3BlcnR5QXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBUZXJtLCBQcm9wZXJ0eVJlbGF0aW9uIH0gPSBkb20sXG4gICAgICAgICAgICBub2RlID0gcHJvcGVydHlBc3NlcnRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgIHRva2VucyA9IGNvbnRleHQubm9kZUFzVG9rZW5zKG5vZGUpLFxuICAgICAgICAgICAgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KHByb3BlcnR5QXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgICBwcm9wZXJ0eVJlbGF0aW9uTm9kZSA9IHByb3BlcnR5UmVsYXRpb25Ob2RlUXVlcnkocHJvcGVydHlBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBwcm9wZXJ0eVJlbGF0aW9uID0gUHJvcGVydHlSZWxhdGlvbi5mcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUocHJvcGVydHlSZWxhdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBwcm9wZXJ0eUFzc2VydGlvbiA9IG5ldyBQcm9wZXJ0eUFzc2VydGlvbihzdHJpbmcsIG5vZGUsIHRva2VucywgdGVybSwgcHJvcGVydHlSZWxhdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5QXNzZXJ0aW9uO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwicHJvcGVydHlSZWxhdGlvbk5vZGVRdWVyeSIsInByb3BlcnR5QXNzZXJ0aW9uTm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJQcm9wZXJ0eUFzc2VydGlvbiIsInN0cmluZyIsIm5vZGUiLCJ0b2tlbnMiLCJ0ZXJtIiwicHJvcGVydHlSZWxhdGlvbiIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXRUb2tlbnMiLCJnZXRUZXJtIiwiZ2V0UHJvcGVydHlSZWxhdGlvbiIsIm1hdGNoVGVybUFuZFByb3BlcnR5UmVsYXRpb24iLCJjb250ZXh0IiwidmVyaWZpZWRBc1Byb3BlcnR5QXNzZXJ0aW9uIiwidGVybVN0cmluZyIsInByb3BlcnR5UmVsYXRpb25TdHJpbmciLCJwcm9wZXJ0eUFzc2VydGlvblN0cmluZyIsInRyYWNlIiwidGVybUEiLCJ0ZXJtQiIsInRlcm1BRXF1YWxUb1Rlcm1CIiwiaXNFcXVhbFRvIiwicHJvcGVydHlSZWxhdGlvbkVxdWFsVG9Qcm9wZXJ0eVJlbGF0aW9uIiwiZGVidWciLCJ2ZXJpZnkiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsInZlcmlmaWVkIiwidGVybVZlcmlmaWVkIiwidmVyaWZ5VGVybSIsInByb3BlcnR5UmVsYXRpb25WZXJpZmllZCIsInZlcmlmeVByb3BlcnR5UmVsYXRpb24iLCJ2ZXJpZmllZFdoZW5TdGF0ZWQiLCJ2ZXJpZmllZFdoZW5EZXJpdmVkIiwidmVyaWZ5V2hlblN0YXRlZCIsInZlcmlmeVdoZW5EZXJpdmVkIiwiYXNzaWduIiwidmVyaWZpZWRBaGVhZCIsInZhcmlhYmxlIiwiVmFyaWFibGUiLCJkb20iLCJ0ZXJtTm9kZSIsImZyb21UZXJtTm9kZSIsInZhcmlhYmxlTmFtZSIsImdldE5hbWUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSIsImZyb21WYXJpYWJsZUFuZFByb3BlcnR5UmVsYXRpb24iLCJ2YXJpYWJsZUFzc2lnbm1lbnQiLCJWYXJpYWJsZUFzc2lnbm1lbnQiLCJmcm9tVmFyaWFibGUiLCJhc3NpZ25tZW50IiwicHVzaCIsImZyb21TdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsInByb3BlcnR5QXNzZXJ0aW9uIiwicHJvcGVydHlBc3NlcnRpb25Ob2RlIiwiVGVybSIsIlByb3BlcnR5UmVsYXRpb24iLCJub2RlQXNTdHJpbmciLCJub2RlQXNUb2tlbnMiLCJwcm9wZXJ0eVJlbGF0aW9uTm9kZSIsImZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZSIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWFBOzs7ZUFBQTs7OzJEQVhnQjsrREFFZTtx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