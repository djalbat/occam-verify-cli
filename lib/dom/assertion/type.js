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
                    if (stated) {
                        this.assign(assignments, context);
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
                var typeString = this.type.getString();
                context.trace("Verifying the '".concat(typeString, "' type..."));
                var type = context.findTypeByTypeName(typeString);
                if (type !== null) {
                    this.type = type;
                    typeVerified = true;
                } else {
                    context.debug("The '".concat(typeString, "' type is not present."));
                }
                if (typeVerified) {
                    context.debug("...verified the '".concat(typeString, "' type."));
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
                    var verifiedAhead = false;
                    var termType = _this.term.getType(), termTypeProvisional = termType.isProvisional();
                    if (!termTypeProvisional) {
                        var typeEqualToOrSuperTypeOfTermType = _this.type.isEqualToOrSuperTypeOf(termType);
                        verifiedAhead = typeEqualToOrSuperTypeOfTermType; ///
                    }
                    return verifiedAhead;
                });
                verifiedWhenDerived = termVerified; ///
                if (verifiedWhenDerived) {
                    context.debug("...verified the '".concat(typeAssertionString, "' derived type assertion."));
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
                var Type = _dom.default.Type, Variable = _dom.default.Variable, termNode = this.term.getNode();
                var type, provisional;
                provisional = this.type.isProvisional();
                if (!provisional) {
                    type = this.type;
                } else {
                    provisional = false;
                    type = Type.fromTypeAndProvisional(this.type, provisional);
                }
                var singularVariableNode = termNode.getSingularVariableNode();
                if (singularVariableNode !== null) {
                    var variableNode = singularVariableNode, variable = Variable.fromVariableNodeAndType(variableNode, type, context), variableAssignment = _variable.default.fromVariable(variable), assignment = variableAssignment; ///
                    assignments.push(assignment);
                }
            }
        }
    ], [
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode, context) {
                var typeAssertion = null;
                var typeAssertionNode = statementNode.getTypeAssertionNode();
                if (typeAssertionNode !== null) {
                    var Term = _dom.default.Term, Type = _dom.default.Type, node = typeAssertionNode, string = context.nodeAsString(node), term = Term.fromTypeAssertionNode(typeAssertionNode, context), type = Type.fromTypeAssertionNode(typeAssertionNode, context);
                    typeAssertion = new TypeAssertion(string, term, type);
                }
                return typeAssertion;
            }
        }
    ]);
    return TypeAssertion;
}(), _define_property(_TypeAssertion, "name", "TypeAssertion"), _TypeAssertion));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vYXNzZXJ0aW9uL3R5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuaW1wb3J0IFZhcmlhYmxlQXNzaWdubWVudCBmcm9tIFwiLi4vLi4vYXNzaWdubWVudC92YXJpYWJsZVwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi8uLi9kb21cIjtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgVHlwZUFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdGVybSwgdHlwZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudGVybSA9IHRlcm07XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm07XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgbGV0IHR5cGVBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgdHlwZSBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHR5cGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5VHlwZShjb250ZXh0KTtcblxuICAgIGlmICh0eXBlVmVyaWZpZWQpIHtcbiAgICAgIGxldCB2ZXJpZmllZFdoZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgdmVyaWZpZWRXaGVuU3RhdGVkID0gdGhpcy52ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB0aGlzLnZlcmlmeVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICBpZiAodmVyaWZpZWRXaGVuU3RhdGVkIHx8IHZlcmlmaWVkV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICB0aGlzLmFzc2lnbihhc3NpZ25tZW50cywgY29udGV4dCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHR5cGUgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVR5cGUoY29udGV4dCkge1xuICAgIGxldCB0eXBlVmVyaWZpZWQ7XG5cbiAgICBjb25zdCB0eXBlU3RyaW5nID0gdGhpcy50eXBlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS4uLmApO1xuXG4gICAgY29uc3QgdHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVTdHJpbmcpO1xuXG4gICAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG5cbiAgICAgIHR5cGVWZXJpZmllZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZVZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuU3RhdGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCB0eXBlQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIHR5cGUgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtVmVyaWZpZWQgPSB0aGlzLnRlcm0udmVyaWZ5KGNvbnRleHQsICgpID0+IHtcbiAgICAgIGxldCB2ZXJpZmllZEFoZWFkO1xuXG4gICAgICBjb25zdCB0ZXJtVHlwZSA9IHRoaXMudGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICB0eXBlRXF1YWxUb09yU3ViVHlwZU9mVGVybVR5cGUgPSB0aGlzLnR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YodGVybVR5cGUpO1xuXG4gICAgICBpZiAodHlwZUVxdWFsVG9PclN1YlR5cGVPZlRlcm1UeXBlKSB7XG4gICAgICAgIHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICB9KTtcblxuICAgIGlmICh0ZXJtVmVyaWZpZWQpIHtcbiAgICAgIHZlcmlmaWVkV2hlblN0YXRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkV2hlblN0YXRlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgdHlwZSBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuRGVyaXZlZDtcblxuICAgIGNvbnN0IHR5cGVBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIHR5cGUgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtVmVyaWZpZWQgPSB0aGlzLnRlcm0udmVyaWZ5KGNvbnRleHQsICgpID0+IHtcbiAgICAgIGxldCB2ZXJpZmllZEFoZWFkID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IHRlcm1UeXBlID0gdGhpcy50ZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICAgIHRlcm1UeXBlUHJvdmlzaW9uYWwgPSB0ZXJtVHlwZS5pc1Byb3Zpc2lvbmFsKCk7XG5cbiAgICAgIGlmICghdGVybVR5cGVQcm92aXNpb25hbCkge1xuICAgICAgICBjb25zdCB0eXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZUZXJtVHlwZSA9IHRoaXMudHlwZS5pc0VxdWFsVG9PclN1cGVyVHlwZU9mKHRlcm1UeXBlKTtcblxuICAgICAgICB2ZXJpZmllZEFoZWFkID0gdHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mVGVybVR5cGU7IC8vL1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICB9KTtcblxuICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB0ZXJtVmVyaWZpZWQ7IC8vL1xuXG4gICAgaWYgKHZlcmlmaWVkV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCB0eXBlIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIGFzc2lnbihhc3NpZ25tZW50cywgY29udGV4dCkge1xuICAgIGlmIChhc3NpZ25tZW50cyA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHsgVHlwZSwgVmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgICB0ZXJtTm9kZSA9IHRoaXMudGVybS5nZXROb2RlKCk7XG5cbiAgICBsZXQgdHlwZSxcbiAgICAgICAgcHJvdmlzaW9uYWw7XG5cbiAgICBwcm92aXNpb25hbCA9IHRoaXMudHlwZS5pc1Byb3Zpc2lvbmFsKCk7XG5cbiAgICBpZiAoIXByb3Zpc2lvbmFsKSB7XG4gICAgICB0eXBlID0gdGhpcy50eXBlO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm92aXNpb25hbCA9IGZhbHNlO1xuXG4gICAgICB0eXBlID0gVHlwZS5mcm9tVHlwZUFuZFByb3Zpc2lvbmFsKHRoaXMudHlwZSwgcHJvdmlzaW9uYWwpO1xuICAgIH1cblxuICAgIGNvbnN0IHNpbmd1bGFyVmFyaWFibGVOb2RlID0gdGVybU5vZGUuZ2V0U2luZ3VsYXJWYXJpYWJsZU5vZGUoKTtcblxuICAgIGlmIChzaW5ndWxhclZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFyaWFibGVOb2RlID0gc2luZ3VsYXJWYXJpYWJsZU5vZGUsICAvLy9cbiAgICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUodmFyaWFibGVOb2RlLCB0eXBlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHZhcmlhYmxlQXNzaWdubWVudCA9IFZhcmlhYmxlQXNzaWdubWVudC5mcm9tVmFyaWFibGUodmFyaWFibGUpLFxuICAgICAgICAgICAgYXNzaWdubWVudCA9IHZhcmlhYmxlQXNzaWdubWVudDsgIC8vL1xuXG4gICAgICBhc3NpZ25tZW50cy5wdXNoKGFzc2lnbm1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJUeXBlQXNzZXJ0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdHlwZUFzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCB0eXBlQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0VHlwZUFzc2VydGlvbk5vZGUoKTtcblxuICAgIGlmICh0eXBlQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBUZXJtLCBUeXBlIH0gPSBkb20sXG4gICAgICAgICAgICBub2RlID0gdHlwZUFzc2VydGlvbk5vZGUsIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICB0ZXJtID0gVGVybS5mcm9tVHlwZUFzc2VydGlvbk5vZGUodHlwZUFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgdHlwZSA9IFR5cGUuZnJvbVR5cGVBc3NlcnRpb25Ob2RlKHR5cGVBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgdHlwZUFzc2VydGlvbiA9IG5ldyBUeXBlQXNzZXJ0aW9uKHN0cmluZywgdGVybSwgdHlwZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVBc3NlcnRpb247XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRvbUFzc2lnbmVkIiwiVHlwZUFzc2VydGlvbiIsInN0cmluZyIsInRlcm0iLCJ0eXBlIiwiZ2V0U3RyaW5nIiwiZ2V0VGVybSIsImdldFR5cGUiLCJ2ZXJpZnkiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsImNvbnRleHQiLCJ2ZXJpZmllZCIsInR5cGVBc3NlcnRpb25TdHJpbmciLCJ0cmFjZSIsInR5cGVWZXJpZmllZCIsInZlcmlmeVR5cGUiLCJ2ZXJpZmllZFdoZW5TdGF0ZWQiLCJ2ZXJpZmllZFdoZW5EZXJpdmVkIiwidmVyaWZ5V2hlblN0YXRlZCIsInZlcmlmeVdoZW5EZXJpdmVkIiwiYXNzaWduIiwiZGVidWciLCJ0eXBlU3RyaW5nIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwidGVybVZlcmlmaWVkIiwidmVyaWZpZWRBaGVhZCIsInRlcm1UeXBlIiwidHlwZUVxdWFsVG9PclN1YlR5cGVPZlRlcm1UeXBlIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJ0ZXJtVHlwZVByb3Zpc2lvbmFsIiwiaXNQcm92aXNpb25hbCIsInR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlRlcm1UeXBlIiwiaXNFcXVhbFRvT3JTdXBlclR5cGVPZiIsIlR5cGUiLCJkb20iLCJWYXJpYWJsZSIsInRlcm1Ob2RlIiwiZ2V0Tm9kZSIsInByb3Zpc2lvbmFsIiwiZnJvbVR5cGVBbmRQcm92aXNpb25hbCIsInNpbmd1bGFyVmFyaWFibGVOb2RlIiwiZ2V0U2luZ3VsYXJWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZSIsImZyb21WYXJpYWJsZU5vZGVBbmRUeXBlIiwidmFyaWFibGVBc3NpZ25tZW50IiwiVmFyaWFibGVBc3NpZ25tZW50IiwiZnJvbVZhcmlhYmxlIiwiYXNzaWdubWVudCIsInB1c2giLCJmcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJ0eXBlQXNzZXJ0aW9uIiwidHlwZUFzc2VydGlvbk5vZGUiLCJnZXRUeXBlQXNzZXJ0aW9uTm9kZSIsIlRlcm0iLCJub2RlIiwibm9kZUFzU3RyaW5nIiwiZnJvbVR5cGVBc3NlcnRpb25Ob2RlIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFBOzs7MkRBTGdCOytEQUNlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUkvQixXQUFlQSxJQUFBQSxnQkFBVyxrQ0FBQzthQUFNQyxjQUNuQkMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUk7Z0NBRENI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