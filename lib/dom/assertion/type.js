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
var _type = require("../../dom/type");
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
var _TypeAssertion;
var termNodeQuery = (0, _query.nodeQuery)("/typeAssertion/term"), typeNodeQuery = (0, _query.nodeQuery)("/typeAssertion/type"), variableNodeQuery = (0, _query.nodeQuery)("/term/variable!"), typeAssertionNodeQuery = (0, _query.nodeQuery)("/statement/typeAssertion");
var _default = (0, _dom.domAssigned)((_TypeAssertion = /*#__PURE__*/ function() {
    function TypeAssertion(string, term, type) {
        _class_call_check(this, TypeAssertion);
        this.string = string;
        this.term = term;
        this.type = type;
    }
    _create_class(TypeAssertion, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
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
                return this.type;
            }
        },
        {
            key: "verify",
            value: function verify(assignments, stated, context) {
                var verified = false;
                var typeAssertionString = this.string; ///
                context.trace("Verifying the '".concat(typeAssertionString, "' type assertion..."));
                var typeVerified = this.verifyType(context);
                if (typeVerified) {
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
                if (verified) {
                    context.debug("...verified the '".concat(typeAssertionString, "' type assertion."));
                }
                return verified;
            }
        },
        {
            key: "verifyType",
            value: function verifyType(context) {
                var typeVerified;
                if (this.type === _type.objectType) {
                    typeVerified = true;
                } else {
                    var typeName = this.type.getName();
                    context.trace("Verifying the '".concat(typeName, "' type..."));
                    var type = context.findTypeByTypeName(typeName);
                    if (type !== null) {
                        this.type = type;
                        typeVerified = true;
                    } else {
                        context.debug("The '".concat(typeName, "' type is not present."));
                    }
                    if (typeVerified) {
                        context.debug("...verified the '".concat(typeName, "' type."));
                    }
                }
                return typeVerified;
            }
        },
        {
            key: "verifyWhenStated",
            value: function verifyWhenStated(assignments, context) {
                var _this = this;
                var verifiedWhenStated = false;
                var typeAssertionString = this.string; ///
                context.trace("Verifying the '".concat(typeAssertionString, "' stated type assertion..."));
                var termVerified = this.term.verify(context, function() {
                    var verifiedAhead;
                    var termType = _this.term.getType(), typeEqualToOrSubTypeOfTermType = _this.type.isEqualToOrSubTypeOf(termType);
                    if (typeEqualToOrSubTypeOfTermType) {
                        verifiedAhead = true;
                    }
                    return verifiedAhead;
                });
                if (termVerified) {
                    var Variable = _dom.default.Variable, termNode = this.term.getNode(), variableNode = variableNodeQuery(termNode), variable = Variable.fromVariableNodeAndType(variableNode, this.type, context);
                    if (variable === null) {
                        var termString = this.term.getString();
                        context.debug("The '".concat(termString, "' term is not a variable and therefore its type cannot be asserted."));
                    } else {
                        if (assignments !== null) {
                            var variableAssignment = _variable.default.fromVariable(variable), assignment = variableAssignment; ///
                            assignments.push(assignment);
                        }
                    }
                    verifiedWhenStated = true;
                }
                if (verifiedWhenStated) {
                    context.debug("...verified the '".concat(typeAssertionString, "' stated type assertion."));
                }
                return verifiedWhenStated;
            }
        },
        {
            key: "verifyWhenDerived",
            value: function verifyWhenDerived(context) {
                var _this = this;
                var verifiedWhenDerived;
                var typeAssertionString = this.string; ///
                context.trace("Verifying the '".concat(typeAssertionString, "' derived type assertion..."));
                var termVerified = this.term.verify(context, function() {
                    var verifiedAhead;
                    var termType = _this.term.getType(), typeEqualToOrSuperTypeOfTermType = _this.type.isEqualToOrSuperTypeOf(termType);
                    verifiedAhead = typeEqualToOrSuperTypeOfTermType; ///
                    return verifiedAhead;
                });
                verifiedWhenDerived = termVerified; ///
                if (verifiedWhenDerived) {
                    context.debug("...verified the '".concat(typeAssertionString, "' derived type assertion."));
                }
                return verifiedWhenDerived;
            }
        }
    ], [
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode, context) {
                var typeAssertion = null;
                var typeAssertionNode = typeAssertionNodeQuery(statementNode);
                if (typeAssertionNode !== null) {
                    var Term = _dom.default.Term, Type = _dom.default.Type, termNode = termNodeQuery(typeAssertionNode), typeNode = typeNodeQuery(typeAssertionNode), term = Term.fromTermNode(termNode, context), type = Type.fromTypeNode(typeNode), string = stringFromTermAndType(term, type);
                    typeAssertion = new TypeAssertion(string, term, type);
                }
                return typeAssertion;
            }
        }
    ]);
    return TypeAssertion;
}(), _define_property(_TypeAssertion, "name", "TypeAssertion"), _TypeAssertion));
function stringFromTermAndType(term, type) {
    var termString = term.getString(), typeName = type.getName(), string = "".concat(termString, ":").concat(typeName);
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vYXNzZXJ0aW9uL3R5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuaW1wb3J0IFZhcmlhYmxlQXNzaWdubWVudCBmcm9tIFwiLi4vLi4vYXNzaWdubWVudC92YXJpYWJsZVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBvYmplY3RUeXBlIH0gZnJvbSBcIi4uLy4uL2RvbS90eXBlXCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi8uLi9kb21cIjtcblxuY29uc3QgdGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlQXNzZXJ0aW9uL3Rlcm1cIiksXG4gICAgICB0eXBlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVBc3NlcnRpb24vdHlwZVwiKSxcbiAgICAgIHZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0vdmFyaWFibGUhXCIpLFxuICAgICAgdHlwZUFzc2VydGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9zdGF0ZW1lbnQvdHlwZUFzc2VydGlvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgVHlwZUFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdGVybSwgdHlwZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudGVybSA9IHRlcm07XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm07XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgbGV0IHR5cGVBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgdHlwZSBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHR5cGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5VHlwZShjb250ZXh0KTtcblxuICAgIGlmICh0eXBlVmVyaWZpZWQpIHtcbiAgICAgIGxldCB2ZXJpZmllZFdoZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgdmVyaWZpZWRXaGVuU3RhdGVkID0gdGhpcy52ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB0aGlzLnZlcmlmeVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICBpZiAodmVyaWZpZWRXaGVuU3RhdGVkIHx8IHZlcmlmaWVkV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyB0eXBlIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlUeXBlKGNvbnRleHQpIHtcbiAgICBsZXQgdHlwZVZlcmlmaWVkO1xuXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gb2JqZWN0VHlwZSkge1xuICAgICAgdHlwZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLnR5cGUuZ2V0TmFtZSgpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVOYW1lfScgdHlwZS4uLmApO1xuXG4gICAgICBjb25zdCB0eXBlID0gY29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICBpZiAodHlwZSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuXG4gICAgICAgIHR5cGVWZXJpZmllZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dHlwZU5hbWV9JyB0eXBlIGlzIG5vdCBwcmVzZW50LmApO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZVZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlTmFtZX0nIHR5cGUuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuU3RhdGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCB0eXBlQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIHR5cGUgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtVmVyaWZpZWQgPSB0aGlzLnRlcm0udmVyaWZ5KGNvbnRleHQsICgpID0+IHtcbiAgICAgIGxldCB2ZXJpZmllZEFoZWFkO1xuXG4gICAgICBjb25zdCB0ZXJtVHlwZSA9IHRoaXMudGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICB0eXBlRXF1YWxUb09yU3ViVHlwZU9mVGVybVR5cGUgPSB0aGlzLnR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YodGVybVR5cGUpO1xuXG4gICAgICBpZiAodHlwZUVxdWFsVG9PclN1YlR5cGVPZlRlcm1UeXBlKSB7XG4gICAgICAgIHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICB9KTtcblxuICAgIGlmICh0ZXJtVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IHsgVmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgICAgIHRlcm1Ob2RlID0gdGhpcy50ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKSxcbiAgICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUodmFyaWFibGVOb2RlLCB0aGlzLnR5cGUsIGNvbnRleHQpO1xuXG4gICAgICBpZiAodmFyaWFibGUgPT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgdGVybVN0cmluZyA9IHRoaXMudGVybS5nZXRTdHJpbmcoKTtcblxuICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dGVybVN0cmluZ30nIHRlcm0gaXMgbm90IGEgdmFyaWFibGUgYW5kIHRoZXJlZm9yZSBpdHMgdHlwZSBjYW5ub3QgYmUgYXNzZXJ0ZWQuYClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChhc3NpZ25tZW50cyAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHZhcmlhYmxlQXNzaWdubWVudCA9IFZhcmlhYmxlQXNzaWdubWVudC5mcm9tVmFyaWFibGUodmFyaWFibGUpLFxuICAgICAgICAgICAgICAgIGFzc2lnbm1lbnQgPSB2YXJpYWJsZUFzc2lnbm1lbnQ7ICAvLy9cblxuICAgICAgICAgIGFzc2lnbm1lbnRzLnB1c2goYXNzaWdubWVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmVyaWZpZWRXaGVuU3RhdGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWRXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHN0YXRlZCB0eXBlIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlbkRlcml2ZWQoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZFdoZW5EZXJpdmVkO1xuXG4gICAgY29uc3QgdHlwZUFzc2VydGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgdHlwZSBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHRlcm1WZXJpZmllZCA9IHRoaXMudGVybS52ZXJpZnkoY29udGV4dCwgKCkgPT4ge1xuICAgICAgbGV0IHZlcmlmaWVkQWhlYWQ7XG5cbiAgICAgIGNvbnN0IHRlcm1UeXBlID0gdGhpcy50ZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICAgIHR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlRlcm1UeXBlID0gdGhpcy50eXBlLmlzRXF1YWxUb09yU3VwZXJUeXBlT2YodGVybVR5cGUpO1xuXG4gICAgICB2ZXJpZmllZEFoZWFkID0gdHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mVGVybVR5cGU7IC8vL1xuXG4gICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICB9KTtcblxuICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB0ZXJtVmVyaWZpZWQ7IC8vL1xuXG4gICAgaWYgKHZlcmlmaWVkV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCB0eXBlIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJUeXBlQXNzZXJ0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdHlwZUFzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCB0eXBlQXNzZXJ0aW9uTm9kZSA9IHR5cGVBc3NlcnRpb25Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBpZiAodHlwZUFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgVGVybSwgVHlwZSB9ID0gZG9tLFxuICAgICAgICAgICAgdGVybU5vZGUgPSB0ZXJtTm9kZVF1ZXJ5KHR5cGVBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICAgIHR5cGVOb2RlID0gdHlwZU5vZGVRdWVyeSh0eXBlQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgICB0ZXJtID0gVGVybS5mcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgdHlwZSA9IFR5cGUuZnJvbVR5cGVOb2RlKHR5cGVOb2RlKSxcbiAgICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21UZXJtQW5kVHlwZSh0ZXJtLCB0eXBlKTtcblxuICAgICAgdHlwZUFzc2VydGlvbiA9IG5ldyBUeXBlQXNzZXJ0aW9uKHN0cmluZywgdGVybSwgdHlwZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVBc3NlcnRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzdHJpbmdGcm9tVGVybUFuZFR5cGUodGVybSwgdHlwZSkge1xuICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgdHlwZU5hbWUgPSB0eXBlLmdldE5hbWUoKSxcbiAgICAgICAgc3RyaW5nID0gYCR7dGVybVN0cmluZ306JHt0eXBlTmFtZX1gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInR5cGVOb2RlUXVlcnkiLCJ2YXJpYWJsZU5vZGVRdWVyeSIsInR5cGVBc3NlcnRpb25Ob2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlR5cGVBc3NlcnRpb24iLCJzdHJpbmciLCJ0ZXJtIiwidHlwZSIsImdldFN0cmluZyIsImdldFRlcm0iLCJnZXRUeXBlIiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJjb250ZXh0IiwidmVyaWZpZWQiLCJ0eXBlQXNzZXJ0aW9uU3RyaW5nIiwidHJhY2UiLCJ0eXBlVmVyaWZpZWQiLCJ2ZXJpZnlUeXBlIiwidmVyaWZpZWRXaGVuU3RhdGVkIiwidmVyaWZpZWRXaGVuRGVyaXZlZCIsInZlcmlmeVdoZW5TdGF0ZWQiLCJ2ZXJpZnlXaGVuRGVyaXZlZCIsImRlYnVnIiwib2JqZWN0VHlwZSIsInR5cGVOYW1lIiwiZ2V0TmFtZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInRlcm1WZXJpZmllZCIsInZlcmlmaWVkQWhlYWQiLCJ0ZXJtVHlwZSIsInR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUZXJtVHlwZSIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwiVmFyaWFibGUiLCJkb20iLCJ0ZXJtTm9kZSIsImdldE5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZSIsImZyb21WYXJpYWJsZU5vZGVBbmRUeXBlIiwidGVybVN0cmluZyIsInZhcmlhYmxlQXNzaWdubWVudCIsIlZhcmlhYmxlQXNzaWdubWVudCIsImZyb21WYXJpYWJsZSIsImFzc2lnbm1lbnQiLCJwdXNoIiwidHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mVGVybVR5cGUiLCJpc0VxdWFsVG9PclN1cGVyVHlwZU9mIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwidHlwZUFzc2VydGlvbiIsInR5cGVBc3NlcnRpb25Ob2RlIiwiVGVybSIsIlR5cGUiLCJ0eXBlTm9kZSIsImZyb21UZXJtTm9kZSIsImZyb21UeXBlTm9kZSIsInN0cmluZ0Zyb21UZXJtQW5kVHlwZSIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWNBOzs7ZUFBQTs7OzJEQVpnQjsrREFDZTtxQkFFTDtvQkFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHM0IsSUFBTUEsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLHdCQUMxQkMsZ0JBQWdCRCxJQUFBQSxnQkFBUyxFQUFDLHdCQUMxQkUsb0JBQW9CRixJQUFBQSxnQkFBUyxFQUFDLG9CQUM5QkcseUJBQXlCSCxJQUFBQSxnQkFBUyxFQUFDO0lBRXpDLFdBQWVJLElBQUFBLGdCQUFXLGtDQUFDO2FBQU1DLGNBQ25CQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSTtnQ0FEQ0g7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBOzs7O1lBR2RDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsSUFBSTtZQUNsQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsSUFBSTtZQUNsQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPQyxXQUFXLEVBQUVDLE1BQU0sRUFBRUMsT0FBTztnQkFDakMsSUFBSUMsV0FBVztnQkFFZixJQUFJQyxzQkFBc0IsSUFBSSxDQUFDWCxNQUFNLEVBQUcsR0FBRztnQkFFM0NTLFFBQVFHLEtBQUssQ0FBQyxBQUFDLGtCQUFxQyxPQUFwQkQscUJBQW9CO2dCQUVwRCxJQUFNRSxlQUFlLElBQUksQ0FBQ0MsVUFBVSxDQUFDTDtnQkFFckMsSUFBSUksY0FBYztvQkFDaEIsSUFBSUUscUJBQXFCLE9BQ3JCQyxzQkFBc0I7b0JBRTFCLElBQUlSLFFBQVE7d0JBQ1ZPLHFCQUFxQixJQUFJLENBQUNFLGdCQUFnQixDQUFDVixhQUFhRTtvQkFDMUQsT0FBTzt3QkFDTE8sc0JBQXNCLElBQUksQ0FBQ0UsaUJBQWlCLENBQUNUO29CQUMvQztvQkFFQSxJQUFJTSxzQkFBc0JDLHFCQUFxQjt3QkFDN0NOLFdBQVc7b0JBQ2I7Z0JBQ0Y7Z0JBRUEsSUFBSUEsVUFBVTtvQkFDWkQsUUFBUVUsS0FBSyxDQUFDLEFBQUMsb0JBQXVDLE9BQXBCUixxQkFBb0I7Z0JBQ3hEO2dCQUVBLE9BQU9EO1lBQ1Q7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsV0FBV0wsT0FBTztnQkFDaEIsSUFBSUk7Z0JBRUosSUFBSSxJQUFJLENBQUNYLElBQUksS0FBS2tCLGdCQUFVLEVBQUU7b0JBQzVCUCxlQUFlO2dCQUNqQixPQUFPO29CQUNMLElBQU1RLFdBQVcsSUFBSSxDQUFDbkIsSUFBSSxDQUFDb0IsT0FBTztvQkFFbENiLFFBQVFHLEtBQUssQ0FBQyxBQUFDLGtCQUEwQixPQUFUUyxVQUFTO29CQUV6QyxJQUFNbkIsT0FBT08sUUFBUWMsa0JBQWtCLENBQUNGO29CQUV4QyxJQUFJbkIsU0FBUyxNQUFNO3dCQUNqQixJQUFJLENBQUNBLElBQUksR0FBR0E7d0JBRVpXLGVBQWU7b0JBQ2pCLE9BQU87d0JBQ0xKLFFBQVFVLEtBQUssQ0FBQyxBQUFDLFFBQWdCLE9BQVRFLFVBQVM7b0JBQ2pDO29CQUVBLElBQUlSLGNBQWM7d0JBQ2hCSixRQUFRVSxLQUFLLENBQUMsQUFBQyxvQkFBNEIsT0FBVEUsVUFBUztvQkFDN0M7Z0JBQ0Y7Z0JBRUEsT0FBT1I7WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJWLFdBQVcsRUFBRUUsT0FBTzs7Z0JBQ25DLElBQUlNLHFCQUFxQjtnQkFFekIsSUFBTUosc0JBQXNCLElBQUksQ0FBQ1gsTUFBTSxFQUFFLEdBQUc7Z0JBRTVDUyxRQUFRRyxLQUFLLENBQUMsQUFBQyxrQkFBcUMsT0FBcEJELHFCQUFvQjtnQkFFcEQsSUFBTWEsZUFBZSxJQUFJLENBQUN2QixJQUFJLENBQUNLLE1BQU0sQ0FBQ0csU0FBUztvQkFDN0MsSUFBSWdCO29CQUVKLElBQU1DLFdBQVcsTUFBS3pCLElBQUksQ0FBQ0ksT0FBTyxJQUM1QnNCLGlDQUFpQyxNQUFLekIsSUFBSSxDQUFDMEIsb0JBQW9CLENBQUNGO29CQUV0RSxJQUFJQyxnQ0FBZ0M7d0JBQ2xDRixnQkFBZ0I7b0JBQ2xCO29CQUVBLE9BQU9BO2dCQUNUO2dCQUVBLElBQUlELGNBQWM7b0JBQ2hCLElBQU0sQUFBRUssV0FBYUMsWUFBRyxDQUFoQkQsVUFDRkUsV0FBVyxJQUFJLENBQUM5QixJQUFJLENBQUMrQixPQUFPLElBQzVCQyxlQUFlckMsa0JBQWtCbUMsV0FDakNHLFdBQVdMLFNBQVNNLHVCQUF1QixDQUFDRixjQUFjLElBQUksQ0FBQy9CLElBQUksRUFBRU87b0JBRTNFLElBQUl5QixhQUFhLE1BQU07d0JBQ3JCLElBQU1FLGFBQWEsSUFBSSxDQUFDbkMsSUFBSSxDQUFDRSxTQUFTO3dCQUV0Q00sUUFBUVUsS0FBSyxDQUFDLEFBQUMsUUFBa0IsT0FBWGlCLFlBQVc7b0JBQ25DLE9BQU87d0JBQ0wsSUFBSTdCLGdCQUFnQixNQUFNOzRCQUN4QixJQUFNOEIscUJBQXFCQyxpQkFBa0IsQ0FBQ0MsWUFBWSxDQUFDTCxXQUNyRE0sYUFBYUgsb0JBQXFCLEdBQUc7NEJBRTNDOUIsWUFBWWtDLElBQUksQ0FBQ0Q7d0JBQ25CO29CQUNGO29CQUVBekIscUJBQXFCO2dCQUN2QjtnQkFFQSxJQUFJQSxvQkFBb0I7b0JBQ3RCTixRQUFRVSxLQUFLLENBQUMsQUFBQyxvQkFBdUMsT0FBcEJSLHFCQUFvQjtnQkFDeEQ7Z0JBRUEsT0FBT0k7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxrQkFBa0JULE9BQU87O2dCQUN2QixJQUFJTztnQkFFSixJQUFNTCxzQkFBc0IsSUFBSSxDQUFDWCxNQUFNLEVBQUUsR0FBRztnQkFFNUNTLFFBQVFHLEtBQUssQ0FBQyxBQUFDLGtCQUFxQyxPQUFwQkQscUJBQW9CO2dCQUVwRCxJQUFNYSxlQUFlLElBQUksQ0FBQ3ZCLElBQUksQ0FBQ0ssTUFBTSxDQUFDRyxTQUFTO29CQUM3QyxJQUFJZ0I7b0JBRUosSUFBTUMsV0FBVyxNQUFLekIsSUFBSSxDQUFDSSxPQUFPLElBQzVCcUMsbUNBQW1DLE1BQUt4QyxJQUFJLENBQUN5QyxzQkFBc0IsQ0FBQ2pCO29CQUUxRUQsZ0JBQWdCaUIsa0NBQWtDLEdBQUc7b0JBRXJELE9BQU9qQjtnQkFDVDtnQkFFQVQsc0JBQXNCUSxjQUFjLEdBQUc7Z0JBRXZDLElBQUlSLHFCQUFxQjtvQkFDdkJQLFFBQVFVLEtBQUssQ0FBQyxBQUFDLG9CQUF1QyxPQUFwQlIscUJBQW9CO2dCQUN4RDtnQkFFQSxPQUFPSztZQUNUOzs7O1lBSU80QixLQUFBQTttQkFBUCxTQUFPQSxrQkFBa0JDLGFBQWEsRUFBRXBDLE9BQU87Z0JBQzdDLElBQUlxQyxnQkFBZ0I7Z0JBRXBCLElBQU1DLG9CQUFvQmxELHVCQUF1QmdEO2dCQUVqRCxJQUFJRSxzQkFBc0IsTUFBTTtvQkFDOUIsSUFBUUMsT0FBZWxCLFlBQUcsQ0FBbEJrQixNQUFNQyxPQUFTbkIsWUFBRyxDQUFabUIsTUFDUmxCLFdBQVd0QyxjQUFjc0Qsb0JBQ3pCRyxXQUFXdkQsY0FBY29ELG9CQUN6QjlDLE9BQU8rQyxLQUFLRyxZQUFZLENBQUNwQixVQUFVdEIsVUFDbkNQLE9BQU8rQyxLQUFLRyxZQUFZLENBQUNGLFdBQ3pCbEQsU0FBU3FELHNCQUFzQnBELE1BQU1DO29CQUUzQzRDLGdCQUFnQixJQUFJL0MsY0FBY0MsUUFBUUMsTUFBTUM7Z0JBQ2xEO2dCQUVBLE9BQU80QztZQUNUOzs7O0tBbkJBLGlDQUFPUSxRQUFPO0FBc0JoQixTQUFTRCxzQkFBc0JwRCxJQUFJLEVBQUVDLElBQUk7SUFDdkMsSUFBTWtDLGFBQWFuQyxLQUFLRSxTQUFTLElBQzNCa0IsV0FBV25CLEtBQUtvQixPQUFPLElBQ3ZCdEIsU0FBUyxBQUFDLEdBQWdCcUIsT0FBZGUsWUFBVyxLQUFZLE9BQVRmO0lBRWhDLE9BQU9yQjtBQUNUIn0=