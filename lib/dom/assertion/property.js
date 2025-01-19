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
                        if (verifiedWhenStated || verifiedWhenDerived) {
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
                var verifiedWhenStated = false;
                var propertyAssertionString = this.string; ///
                context.trace("Verifying the '".concat(propertyAssertionString, "' stated property assertion..."));
                if (assignments !== null) {
                    var variable;
                    var Variable = _dom.default.Variable, termNode = this.term.getNode();
                    variable = Variable.fromTermNode(termNode, context);
                    if (variable === null) {
                        var termString = this.term.getString();
                        context.debug("The '".concat(propertyAssertionString, "' stated property assertion's '").concat(termString, "' term is not a variable."));
                    } else {
                        var variableName = variable.getName();
                        variable = context.findVariableByVariableName(variableName);
                        variable = Variable.fromVariableAndPropertyRelation(variable, this.propertyRelation);
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
                    var Term = _dom.default.Term, PropertyRelation = _dom.default.PropertyRelation, node = propertyAssertionNode, string = context.nodeAsString(node), tokens = context.nodeAsTokens(node), termNode = termNodeQuery(propertyAssertionNode), propertyRelationNode = propertyRelationNodeQuery(propertyAssertionNode), term = Term.fromTermNode(termNode, context), propertyRelation = PropertyRelation.fromPropertyRelationNode(propertyRelationNode, context);
                    propertyAssertion = new PropertyAssertion(string, node, tokens, term, propertyRelation);
                }
                return propertyAssertion;
            }
        }
    ]);
    return PropertyAssertion;
}(), _define_property(_PropertyAssertion, "name", "PropertyAssertion"), _PropertyAssertion));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vYXNzZXJ0aW9uL3Byb3BlcnR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi8uLi9kb21cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgZG9tQXNzaWduZWQgfSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgVmFyaWFibGVBc3NpZ25tZW50IGZyb20gXCIuLi8uLi9hc3NpZ25tZW50L3ZhcmlhYmxlXCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcHJvcGVydHlBc3NlcnRpb24vdGVybVwiKSxcbiAgICAgIHByb3BlcnR5UmVsYXRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcHJvcGVydHlBc3NlcnRpb24vcHJvcGVydHlSZWxhdGlvblwiKSxcbiAgICAgIHByb3BlcnR5QXNzZXJ0aW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9wcm9wZXJ0eUFzc2VydGlvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgUHJvcGVydHlBc3NlcnRpb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5vZGUsIHRva2VucywgdGVybSwgcHJvcGVydHlSZWxhdGlvbikge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgICB0aGlzLnByb3BlcnR5UmVsYXRpb24gPSBwcm9wZXJ0eVJlbGF0aW9uO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm07XG4gIH1cblxuICBnZXRQcm9wZXJ0eVJlbGF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BlcnR5UmVsYXRpb247XG4gIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJvcGVydHlBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb3BlcnR5QXNzZXJ0aW9uU3RyaW5nfScgcHJvcGVydHkgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVRlcm0oYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICBpZiAodGVybVZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVByb3BlcnR5UmVsYXRpb24oYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChwcm9wZXJ0eVJlbGF0aW9uVmVyaWZpZWQpIHtcbiAgICAgICAgbGV0IHZlcmlmaWVkV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0aGlzLnZlcmlmeVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB0aGlzLnZlcmlmeVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZlcmlmaWVkV2hlblN0YXRlZCB8fCB2ZXJpZmllZFdoZW5EZXJpdmVkKSB7XG4gICAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cHJvcGVydHlBc3NlcnRpb25TdHJpbmd9JyBwcm9wZXJ0eSBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5VGVybShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1WZXJpZmllZDtcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0aGlzLnRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcHJvcGVydHlBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Byb3BlcnR5QXNzZXJ0aW9uU3RyaW5nfScgcHJvcGVydHkgYXNzZXJ0aW9uJ3MgJyR7dGVybVN0cmluZ30nIHRlcm0uLi5gKTtcblxuICAgIHRlcm1WZXJpZmllZCA9IHRoaXMudGVybS52ZXJpZnkoY29udGV4dCwgKCkgPT4ge1xuICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgIH0pO1xuXG4gICAgaWYgKHRlcm1WZXJpZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Byb3BlcnR5QXNzZXJ0aW9uU3RyaW5nfScgcHJvcGVydHkgYXNzZXJ0aW9uJ3MgJyR7dGVybVN0cmluZ30nIHRlcm0uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1WZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVByb3BlcnR5UmVsYXRpb24oYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBwcm9wZXJ0eVJlbGF0aW9uVmVyaWZpZWQ7XG5cbiAgICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nID0gdGhpcy5wcm9wZXJ0eVJlbGF0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHByb3BlcnR5QXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIHByb3BlcnR5IGFzc2VydGlvbidzICcke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9JyBwcm9wZXJ0eSByZWxhdGlvbi4uLmApO1xuXG4gICAgcHJvcGVydHlSZWxhdGlvblZlcmlmaWVkID0gdGhpcy5wcm9wZXJ0eVJlbGF0aW9uLnZlcmlmeShjb250ZXh0KTtcblxuICAgIGlmIChwcm9wZXJ0eVJlbGF0aW9uVmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIHByb3BlcnR5IGFzc2VydGlvbidzICcke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9JyBwcm9wZXJ0eSByZWxhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydHlSZWxhdGlvblZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlblN0YXRlZChhc3NpZ25tZW50cywgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZFdoZW5TdGF0ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb3BlcnR5QXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIHN0YXRlZCBwcm9wZXJ0eSBhc3NlcnRpb24uLi5gKTtcblxuICAgIGlmIChhc3NpZ25tZW50cyAhPT0gbnVsbCkge1xuICAgICAgbGV0IHZhcmlhYmxlO1xuXG4gICAgICBjb25zdCB7IFZhcmlhYmxlIH0gPSBkb20sXG4gICAgICAgICAgICB0ZXJtTm9kZSA9IHRoaXMudGVybS5nZXROb2RlKCk7XG5cbiAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHZhcmlhYmxlID09PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0aGlzLnRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3Byb3BlcnR5QXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIHByb3BlcnR5IGFzc2VydGlvbidzICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGlzIG5vdCBhIHZhcmlhYmxlLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdmFyaWFibGVOYW1lID0gdmFyaWFibGUuZ2V0TmFtZSgpO1xuXG4gICAgICAgIHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVZhcmlhYmxlQW5kUHJvcGVydHlSZWxhdGlvbih2YXJpYWJsZSwgdGhpcy5wcm9wZXJ0eVJlbGF0aW9uKTtcblxuICAgICAgICBjb25zdCB2YXJpYWJsZUFzc2lnbm1lbnQgPSBWYXJpYWJsZUFzc2lnbm1lbnQuZnJvbVZhcmlhYmxlKHZhcmlhYmxlKSxcbiAgICAgICAgICAgICAgYXNzaWdubWVudCA9IHZhcmlhYmxlQXNzaWdubWVudDsgIC8vL1xuXG4gICAgICAgIGFzc2lnbm1lbnRzLnB1c2goYXNzaWdubWVudCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmVyaWZpZWRXaGVuU3RhdGVkID0gdHJ1ZTtcblxuICAgIGlmICh2ZXJpZmllZFdoZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIHN0YXRlZCBwcm9wZXJ0eSBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5EZXJpdmVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb3BlcnR5QXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgcHJvcGVydHkgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBkZWJ1Z2dlclxuXG4gICAgaWYgKHZlcmlmaWVkV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgcHJvcGVydHkgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZFdoZW5EZXJpdmVkO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlByb3BlcnR5QXNzZXJ0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgcHJvcGVydHlBc3NlcnRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgcHJvcGVydHlBc3NlcnRpb25Ob2RlID0gcHJvcGVydHlBc3NlcnRpb25Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBpZiAocHJvcGVydHlBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFRlcm0sIFByb3BlcnR5UmVsYXRpb24gfSA9IGRvbSxcbiAgICAgICAgICAgIG5vZGUgPSBwcm9wZXJ0eUFzc2VydGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgdG9rZW5zID0gY29udGV4dC5ub2RlQXNUb2tlbnMobm9kZSksXG4gICAgICAgICAgICB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkocHJvcGVydHlBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICAgIHByb3BlcnR5UmVsYXRpb25Ob2RlID0gcHJvcGVydHlSZWxhdGlvbk5vZGVRdWVyeShwcm9wZXJ0eUFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgICAgdGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHByb3BlcnR5UmVsYXRpb24gPSBQcm9wZXJ0eVJlbGF0aW9uLmZyb21Qcm9wZXJ0eVJlbGF0aW9uTm9kZShwcm9wZXJ0eVJlbGF0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIHByb3BlcnR5QXNzZXJ0aW9uID0gbmV3IFByb3BlcnR5QXNzZXJ0aW9uKHN0cmluZywgbm9kZSwgdG9rZW5zLCB0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydHlBc3NlcnRpb247XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJwcm9wZXJ0eVJlbGF0aW9uTm9kZVF1ZXJ5IiwicHJvcGVydHlBc3NlcnRpb25Ob2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlByb3BlcnR5QXNzZXJ0aW9uIiwic3RyaW5nIiwibm9kZSIsInRva2VucyIsInRlcm0iLCJwcm9wZXJ0eVJlbGF0aW9uIiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsImdldFRva2VucyIsImdldFRlcm0iLCJnZXRQcm9wZXJ0eVJlbGF0aW9uIiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJjb250ZXh0IiwidmVyaWZpZWQiLCJwcm9wZXJ0eUFzc2VydGlvblN0cmluZyIsInRyYWNlIiwidGVybVZlcmlmaWVkIiwidmVyaWZ5VGVybSIsInByb3BlcnR5UmVsYXRpb25WZXJpZmllZCIsInZlcmlmeVByb3BlcnR5UmVsYXRpb24iLCJ2ZXJpZmllZFdoZW5TdGF0ZWQiLCJ2ZXJpZmllZFdoZW5EZXJpdmVkIiwidmVyaWZ5V2hlblN0YXRlZCIsInZlcmlmeVdoZW5EZXJpdmVkIiwiZGVidWciLCJ0ZXJtU3RyaW5nIiwidmVyaWZpZWRBaGVhZCIsInByb3BlcnR5UmVsYXRpb25TdHJpbmciLCJ2YXJpYWJsZSIsIlZhcmlhYmxlIiwiZG9tIiwidGVybU5vZGUiLCJmcm9tVGVybU5vZGUiLCJ2YXJpYWJsZU5hbWUiLCJnZXROYW1lIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUiLCJmcm9tVmFyaWFibGVBbmRQcm9wZXJ0eVJlbGF0aW9uIiwidmFyaWFibGVBc3NpZ25tZW50IiwiVmFyaWFibGVBc3NpZ25tZW50IiwiZnJvbVZhcmlhYmxlIiwiYXNzaWdubWVudCIsInB1c2giLCJmcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJwcm9wZXJ0eUFzc2VydGlvbiIsInByb3BlcnR5QXNzZXJ0aW9uTm9kZSIsIlRlcm0iLCJQcm9wZXJ0eVJlbGF0aW9uIiwibm9kZUFzU3RyaW5nIiwibm9kZUFzVG9rZW5zIiwicHJvcGVydHlSZWxhdGlvbk5vZGUiLCJmcm9tUHJvcGVydHlSZWxhdGlvbk5vZGUiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQUE7OzsyREFWZ0I7cUJBRVU7K0RBRUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9CLElBQU1BLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyw0QkFDMUJDLDRCQUE0QkQsSUFBQUEsZ0JBQVMsRUFBQyx3Q0FDdENFLDZCQUE2QkYsSUFBQUEsZ0JBQVMsRUFBQztJQUU3QyxXQUFlRyxJQUFBQSxnQkFBVyxzQ0FBQzthQUFNQyxr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