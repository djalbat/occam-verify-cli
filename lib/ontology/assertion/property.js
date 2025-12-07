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
var _ontology = /*#__PURE__*/ _interop_require_wildcard(require("../../ontology"));
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
var _default = (0, _ontology.define)((_PropertyAssertion = /*#__PURE__*/ function() {
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
                var propertyMatchesTermAndPropertyRelation = false;
                var termString = term.getString(), propertyRelationString = propertyRelation.getString(), propertyAssertionString = this.getString();
                context.trace("Matching the '".concat(termString, "' term and '").concat(propertyRelationString, "' property relation against the '").concat(propertyAssertionString, "' property assertion..."));
                var termA = term, termB = this.term, termAEqualToTermB = termA.isEqualTo(termB);
                if (termAEqualToTermB) {
                    var propertyRelationEqualToPropertyRelation = this.propertyRelation.isEqualTo(propertyRelation);
                    propertyMatchesTermAndPropertyRelation = propertyRelationEqualToPropertyRelation; ///
                }
                if (propertyMatchesTermAndPropertyRelation) {
                    context.debug("...matched the '".concat(termString, "' term and '").concat(propertyRelationString, "' property relation against the '").concat(propertyAssertionString, "' property assertion."));
                }
                return propertyMatchesTermAndPropertyRelation;
            }
        },
        {
            key: "verify",
            value: function verify(assignments, stated, context) {
                var verifies = false;
                var propertyAssertionString = this.string; ///
                context.trace("Verifying the '".concat(propertyAssertionString, "' property assertion..."));
                var termVerifies = this.verifyTerm(assignments, stated, context);
                if (termVerifies) {
                    var propertyRelationVerifies = this.verifyPropertyRelation(assignments, stated, context);
                    if (propertyRelationVerifies) {
                        var verifiesWhenStated = false, verifiesWhenDerived = false;
                        if (stated) {
                            verifiesWhenStated = this.verifyWhenStated(assignments, context);
                        } else {
                            verifiesWhenDerived = this.verifyWhenDerived(context);
                        }
                        if (verifiesWhenStated || verifiesWhenDerived) {
                            verifies = true;
                        }
                    }
                }
                if (verifies) {
                    if (stated) {
                        this.assign(assignments, context);
                    }
                }
                if (verifies) {
                    context.debug("...verified the '".concat(propertyAssertionString, "' property assertion."));
                }
                return verifies;
            }
        },
        {
            key: "verifyTerm",
            value: function verifyTerm(assignments, stated, context) {
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
            key: "verifyPropertyRelation",
            value: function verifyPropertyRelation(assignments, stated, context) {
                var propertyRelationVerifies;
                var propertyRelationString = this.propertyRelation.getString();
                context.trace("Verifying the '".concat(propertyRelationString, "' property relation..."));
                propertyRelationVerifies = this.propertyRelation.verify(context);
                if (propertyRelationVerifies) {
                    context.debug("...verified the '".concat(propertyRelationString, "' property relation."));
                }
                return propertyRelationVerifies;
            }
        },
        {
            key: "verifyWhenStated",
            value: function verifyWhenStated(assignments, context) {
                var verifiesWhenStated = false;
                var propertyAssertionString = this.string; ///
                context.trace("Verifying the '".concat(propertyAssertionString, "' stated property assertion..."));
                verifiesWhenStated = true;
                if (verifiesWhenStated) {
                    context.debug("...verified the '".concat(propertyAssertionString, "' stated property assertion."));
                }
                return verifiesWhenStated;
            }
        },
        {
            key: "verifyWhenDerived",
            value: function verifyWhenDerived(context) {
                var verifiesWhenDerived;
                var propertyAssertionString = this.string; ///
                context.trace("Verifying the '".concat(propertyAssertionString, "' derived property assertion..."));
                verifiesWhenDerived = true;
                if (verifiesWhenDerived) {
                    context.debug("...verified the '".concat(propertyAssertionString, "' derived property assertion."));
                }
                return verifiesWhenDerived;
            }
        },
        {
            key: "assign",
            value: function assign(assignments, context) {
                if (assignments === null) {
                    return;
                }
                var variable;
                var Variable = _ontology.default.Variable, termNode = this.term.getNode();
                variable = Variable.fromTermNode(termNode, context);
                if (variable !== null) {
                    var variableIdentifier = variable.getIdentifier();
                    variable = context.findVariableByVariableIdentifier(variableIdentifier);
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
                var propertyAssertionNode = statementNode.getPropertyAssertionNode();
                if (propertyAssertionNode !== null) {
                    var Term = _ontology.default.Term, PropertyRelation = _ontology.default.PropertyRelation, node = propertyAssertionNode, string = context.nodeAsString(node), tokens = context.nodeAsTokens(node), term = Term.fromPropertyAssertionNode(propertyAssertionNode, context), propertyRelation = PropertyRelation.fromPropertyAssertionNode(propertyAssertionNode, context);
                    propertyAssertion = new PropertyAssertion(string, node, tokens, term, propertyRelation);
                }
                return propertyAssertion;
            }
        }
    ]);
    return PropertyAssertion;
}(), _define_property(_PropertyAssertion, "name", "PropertyAssertion"), _PropertyAssertion));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbnRvbG9neS9hc3NlcnRpb24vcHJvcGVydHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBvbnRvbG9neSBmcm9tIFwiLi4vLi4vb250b2xvZ3lcIjtcblxuaW1wb3J0IFZhcmlhYmxlQXNzaWdubWVudCBmcm9tIFwiLi4vLi4vYXNzaWdubWVudC92YXJpYWJsZVwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vb250b2xvZ3lcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFByb3BlcnR5QXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCB0b2tlbnMsIHRlcm0sIHByb3BlcnR5UmVsYXRpb24pIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMudGVybSA9IHRlcm07XG4gICAgdGhpcy5wcm9wZXJ0eVJlbGF0aW9uID0gcHJvcGVydHlSZWxhdGlvbjtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICB9XG5cbiAgZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtO1xuICB9XG5cbiAgZ2V0UHJvcGVydHlSZWxhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wZXJ0eVJlbGF0aW9uO1xuICB9XG5cbiAgbWF0Y2hUZXJtQW5kUHJvcGVydHlSZWxhdGlvbih0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHByb3BlcnR5TWF0Y2hlc1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uID0gZmFsc2U7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nID0gcHJvcGVydHlSZWxhdGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBwcm9wZXJ0eUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBNYXRjaGluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYW5kICcke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9JyBwcm9wZXJ0eSByZWxhdGlvbiBhZ2FpbnN0IHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIHByb3BlcnR5IGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3QgdGVybUEgPSB0ZXJtLFxuICAgICAgICAgIHRlcm1CID0gdGhpcy50ZXJtLCAvLy9cbiAgICAgICAgICB0ZXJtQUVxdWFsVG9UZXJtQiA9IHRlcm1BLmlzRXF1YWxUbyh0ZXJtQik7XG5cbiAgICBpZiAodGVybUFFcXVhbFRvVGVybUIpIHtcbiAgICAgIGNvbnN0IHByb3BlcnR5UmVsYXRpb25FcXVhbFRvUHJvcGVydHlSZWxhdGlvbiA9IHRoaXMucHJvcGVydHlSZWxhdGlvbi5pc0VxdWFsVG8ocHJvcGVydHlSZWxhdGlvbik7XG5cbiAgICAgIHByb3BlcnR5TWF0Y2hlc1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uID0gcHJvcGVydHlSZWxhdGlvbkVxdWFsVG9Qcm9wZXJ0eVJlbGF0aW9uOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKHByb3BlcnR5TWF0Y2hlc1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5tYXRjaGVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBhbmQgJyR7cHJvcGVydHlSZWxhdGlvblN0cmluZ30nIHByb3BlcnR5IHJlbGF0aW9uIGFnYWluc3QgdGhlICcke3Byb3BlcnR5QXNzZXJ0aW9uU3RyaW5nfScgcHJvcGVydHkgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0eU1hdGNoZXNUZXJtQW5kUHJvcGVydHlSZWxhdGlvbjtcbiAgfVxuXG4gIHZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcm9wZXJ0eUFzc2VydGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cHJvcGVydHlBc3NlcnRpb25TdHJpbmd9JyBwcm9wZXJ0eSBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHRlcm1WZXJpZmllcyA9IHRoaXMudmVyaWZ5VGVybShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgIGlmICh0ZXJtVmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IHByb3BlcnR5UmVsYXRpb25WZXJpZmllcyA9IHRoaXMudmVyaWZ5UHJvcGVydHlSZWxhdGlvbihhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHByb3BlcnR5UmVsYXRpb25WZXJpZmllcykge1xuICAgICAgICBsZXQgdmVyaWZpZXNXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICAgIHZlcmlmaWVzV2hlblN0YXRlZCA9IHRoaXMudmVyaWZ5V2hlblN0YXRlZChhc3NpZ25tZW50cywgY29udGV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmVyaWZpZXNXaGVuRGVyaXZlZCA9IHRoaXMudmVyaWZ5V2hlbkRlcml2ZWQoY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmVyaWZpZXNXaGVuU3RhdGVkIHx8IHZlcmlmaWVzV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgdGhpcy5hc3NpZ24oYXNzaWdubWVudHMsIGNvbnRleHQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Byb3BlcnR5QXNzZXJ0aW9uU3RyaW5nfScgcHJvcGVydHkgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVRlcm0oYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtVmVyaWZpZXM7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGhpcy50ZXJtLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS4uLmApO1xuXG4gICAgdGVybVZlcmlmaWVzID0gdGhpcy50ZXJtLnZlcmlmeShjb250ZXh0LCAoKSA9PiB7XG4gICAgICBjb25zdCB2ZXJpZmllc0FoZWFkID0gdHJ1ZTtcblxuICAgICAgcmV0dXJuIHZlcmlmaWVzQWhlYWQ7XG4gICAgfSk7XG5cbiAgICBpZiAodGVybVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1WZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVByb3BlcnR5UmVsYXRpb24oYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBwcm9wZXJ0eVJlbGF0aW9uVmVyaWZpZXM7XG5cbiAgICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nID0gdGhpcy5wcm9wZXJ0eVJlbGF0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nfScgcHJvcGVydHkgcmVsYXRpb24uLi5gKTtcblxuICAgIHByb3BlcnR5UmVsYXRpb25WZXJpZmllcyA9IHRoaXMucHJvcGVydHlSZWxhdGlvbi52ZXJpZnkoY29udGV4dCk7XG5cbiAgICBpZiAocHJvcGVydHlSZWxhdGlvblZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cHJvcGVydHlSZWxhdGlvblN0cmluZ30nIHByb3BlcnR5IHJlbGF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0eVJlbGF0aW9uVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzV2hlblN0YXRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJvcGVydHlBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb3BlcnR5QXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIHByb3BlcnR5IGFzc2VydGlvbi4uLmApO1xuXG4gICAgdmVyaWZpZXNXaGVuU3RhdGVkID0gdHJ1ZTtcblxuICAgIGlmICh2ZXJpZmllc1doZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIHN0YXRlZCBwcm9wZXJ0eSBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXNXaGVuRGVyaXZlZDtcblxuICAgIGNvbnN0IHByb3BlcnR5QXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgcHJvcGVydHkgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gdHJ1ZTtcblxuICAgIGlmICh2ZXJpZmllc1doZW5EZXJpdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cHJvcGVydHlBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIHByb3BlcnR5IGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXNXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIGFzc2lnbihhc3NpZ25tZW50cywgY29udGV4dCkge1xuICAgIGlmIChhc3NpZ25tZW50cyA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCB2YXJpYWJsZTtcblxuICAgIGNvbnN0IHsgVmFyaWFibGUgfSA9IG9udG9sb2d5LFxuICAgICAgICAgIHRlcm1Ob2RlID0gdGhpcy50ZXJtLmdldE5vZGUoKTtcblxuICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICAgIGlmICh2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyID0gdmFyaWFibGUuZ2V0SWRlbnRpZmllcigpO1xuXG4gICAgICB2YXJpYWJsZSA9IGNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVmFyaWFibGVBbmRQcm9wZXJ0eVJlbGF0aW9uKHZhcmlhYmxlLCB0aGlzLnByb3BlcnR5UmVsYXRpb24pO1xuXG4gICAgICBjb25zdCB2YXJpYWJsZUFzc2lnbm1lbnQgPSBWYXJpYWJsZUFzc2lnbm1lbnQuZnJvbVZhcmlhYmxlKHZhcmlhYmxlKSxcbiAgICAgICAgICAgIGFzc2lnbm1lbnQgPSB2YXJpYWJsZUFzc2lnbm1lbnQ7ICAvLy9cblxuICAgICAgYXNzaWdubWVudHMucHVzaChhc3NpZ25tZW50KTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJvcGVydHlBc3NlcnRpb25cIjtcblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCBwcm9wZXJ0eUFzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBwcm9wZXJ0eUFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFByb3BlcnR5QXNzZXJ0aW9uTm9kZSgpO1xuXG4gICAgaWYgKHByb3BlcnR5QXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBUZXJtLCBQcm9wZXJ0eVJlbGF0aW9uIH0gPSBvbnRvbG9neSxcbiAgICAgICAgICAgIG5vZGUgPSBwcm9wZXJ0eUFzc2VydGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgdG9rZW5zID0gY29udGV4dC5ub2RlQXNUb2tlbnMobm9kZSksXG4gICAgICAgICAgICB0ZXJtID0gVGVybS5mcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlKHByb3BlcnR5QXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBwcm9wZXJ0eVJlbGF0aW9uID0gUHJvcGVydHlSZWxhdGlvbi5mcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlKHByb3BlcnR5QXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIHByb3BlcnR5QXNzZXJ0aW9uID0gbmV3IFByb3BlcnR5QXNzZXJ0aW9uKHN0cmluZywgbm9kZSwgdG9rZW5zLCB0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydHlBc3NlcnRpb247XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlByb3BlcnR5QXNzZXJ0aW9uIiwic3RyaW5nIiwibm9kZSIsInRva2VucyIsInRlcm0iLCJwcm9wZXJ0eVJlbGF0aW9uIiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsImdldFRva2VucyIsImdldFRlcm0iLCJnZXRQcm9wZXJ0eVJlbGF0aW9uIiwibWF0Y2hUZXJtQW5kUHJvcGVydHlSZWxhdGlvbiIsImNvbnRleHQiLCJwcm9wZXJ0eU1hdGNoZXNUZXJtQW5kUHJvcGVydHlSZWxhdGlvbiIsInRlcm1TdHJpbmciLCJwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nIiwicHJvcGVydHlBc3NlcnRpb25TdHJpbmciLCJ0cmFjZSIsInRlcm1BIiwidGVybUIiLCJ0ZXJtQUVxdWFsVG9UZXJtQiIsImlzRXF1YWxUbyIsInByb3BlcnR5UmVsYXRpb25FcXVhbFRvUHJvcGVydHlSZWxhdGlvbiIsImRlYnVnIiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJ2ZXJpZmllcyIsInRlcm1WZXJpZmllcyIsInZlcmlmeVRlcm0iLCJwcm9wZXJ0eVJlbGF0aW9uVmVyaWZpZXMiLCJ2ZXJpZnlQcm9wZXJ0eVJlbGF0aW9uIiwidmVyaWZpZXNXaGVuU3RhdGVkIiwidmVyaWZpZXNXaGVuRGVyaXZlZCIsInZlcmlmeVdoZW5TdGF0ZWQiLCJ2ZXJpZnlXaGVuRGVyaXZlZCIsImFzc2lnbiIsInZlcmlmaWVzQWhlYWQiLCJ2YXJpYWJsZSIsIlZhcmlhYmxlIiwib250b2xvZ3kiLCJ0ZXJtTm9kZSIsImZyb21UZXJtTm9kZSIsInZhcmlhYmxlSWRlbnRpZmllciIsImdldElkZW50aWZpZXIiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllciIsImZyb21WYXJpYWJsZUFuZFByb3BlcnR5UmVsYXRpb24iLCJ2YXJpYWJsZUFzc2lnbm1lbnQiLCJWYXJpYWJsZUFzc2lnbm1lbnQiLCJmcm9tVmFyaWFibGUiLCJhc3NpZ25tZW50IiwicHVzaCIsImZyb21TdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsInByb3BlcnR5QXNzZXJ0aW9uIiwicHJvcGVydHlBc3NlcnRpb25Ob2RlIiwiZ2V0UHJvcGVydHlBc3NlcnRpb25Ob2RlIiwiVGVybSIsIlByb3BlcnR5UmVsYXRpb24iLCJub2RlQXNTdHJpbmciLCJub2RlQXNUb2tlbnMiLCJmcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFBOzs7Z0VBTnFCOytEQUVVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUkvQixXQUFlQSxJQUFBQSxnQkFBTSxzQ0FBQzthQUFNQyxrQkFDZEMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxnQkFBZ0I7Z0NBRDlCTDtRQUV4QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLGdCQUFnQixHQUFHQTs7OztZQUcxQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxNQUFNO1lBQ3BCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxJQUFJO1lBQ2xCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxNQUFNO1lBQ3BCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxJQUFJO1lBQ2xCOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTCxnQkFBZ0I7WUFDOUI7OztZQUVBTSxLQUFBQTtt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