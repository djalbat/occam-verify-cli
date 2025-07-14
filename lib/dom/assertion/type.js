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
var _type = require("../type");
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
var variableNodeQuery = (0, _query.nodeQuery)("/term/variable!"), typeAssertionNodeQuery = (0, _query.nodeQuery)("/statement/typeAssertion");
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
                    verified = verifiedWhenStated || verifiedWhenDerived;
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
                if (this.type === _type.objectType) {
                    typeVerified = true;
                } else {
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
                var Type = _dom.default.Type, Variable = _dom.default.Variable, termNode = this.term.getNode(), variableNode = variableNodeQuery(termNode);
                var type, provisional;
                provisional = this.type.isProvisional();
                if (!provisional) {
                    type = this.type;
                } else {
                    provisional = false;
                    type = Type.fromTypeAndProvisional(this.type, provisional);
                }
                var variable = Variable.fromVariableNodeAndType(variableNode, type, context);
                if (variable !== null) {
                    var variableAssignment = _variable.default.fromVariable(variable), assignment = variableAssignment; ///
                    assignments.push(assignment);
                }
            }
        }
    ], [
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode, context) {
                var typeAssertion = null;
                var typeAssertionNode = typeAssertionNodeQuery(statementNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vYXNzZXJ0aW9uL3R5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuaW1wb3J0IFZhcmlhYmxlQXNzaWdubWVudCBmcm9tIFwiLi4vLi4vYXNzaWdubWVudC92YXJpYWJsZVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBvYmplY3RUeXBlIH0gZnJvbSBcIi4uL3R5cGVcIjtcbmltcG9ydCB7IGRvbUFzc2lnbmVkIH0gZnJvbSBcIi4uLy4uL2RvbVwiO1xuXG5jb25zdCB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlIVwiKSxcbiAgICAgIHR5cGVBc3NlcnRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L3R5cGVBc3NlcnRpb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGRvbUFzc2lnbmVkKGNsYXNzIFR5cGVBc3NlcnRpb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHRlcm0sIHR5cGUpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGxldCB0eXBlQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHR5cGUgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0eXBlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVR5cGUoY29udGV4dCk7XG5cbiAgICBpZiAodHlwZVZlcmlmaWVkKSB7XG4gICAgICBsZXQgdmVyaWZpZWRXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICBpZiAoc3RhdGVkKSB7XG4gICAgICAgIHZlcmlmaWVkV2hlblN0YXRlZCA9IHRoaXMudmVyaWZ5V2hlblN0YXRlZChhc3NpZ25tZW50cywgY29udGV4dCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gdGhpcy52ZXJpZnlXaGVuRGVyaXZlZChjb250ZXh0KTtcbiAgICAgIH1cblxuICAgICAgdmVyaWZpZWQgPSB2ZXJpZmllZFdoZW5TdGF0ZWQgfHwgdmVyaWZpZWRXaGVuRGVyaXZlZDtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgdGhpcy5hc3NpZ24oYXNzaWdubWVudHMsIGNvbnRleHQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyB0eXBlIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlUeXBlKGNvbnRleHQpIHtcbiAgICBsZXQgdHlwZVZlcmlmaWVkO1xuXG4gICAgaWYgKHRoaXMudHlwZSA9PT0gb2JqZWN0VHlwZSkge1xuICAgICAgdHlwZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdHlwZVN0cmluZyA9IHRoaXMudHlwZS5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZS4uLmApO1xuXG4gICAgICBjb25zdCB0eXBlID0gY29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZVN0cmluZyk7XG5cbiAgICAgIGlmICh0eXBlICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG5cbiAgICAgICAgdHlwZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSBpcyBub3QgcHJlc2VudC5gKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVWZXJpZmllZCkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuU3RhdGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCB0eXBlQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIHR5cGUgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtVmVyaWZpZWQgPSB0aGlzLnRlcm0udmVyaWZ5KGNvbnRleHQsICgpID0+IHtcbiAgICAgIGxldCB2ZXJpZmllZEFoZWFkO1xuXG4gICAgICBjb25zdCB0ZXJtVHlwZSA9IHRoaXMudGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICB0eXBlRXF1YWxUb09yU3ViVHlwZU9mVGVybVR5cGUgPSB0aGlzLnR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YodGVybVR5cGUpO1xuXG4gICAgICBpZiAodHlwZUVxdWFsVG9PclN1YlR5cGVPZlRlcm1UeXBlKSB7XG4gICAgICAgIHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICB9KTtcblxuICAgIGlmICh0ZXJtVmVyaWZpZWQpIHtcbiAgICAgIHZlcmlmaWVkV2hlblN0YXRlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkV2hlblN0YXRlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgdHlwZSBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuRGVyaXZlZDtcblxuICAgIGNvbnN0IHR5cGVBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIHR5cGUgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtVmVyaWZpZWQgPSB0aGlzLnRlcm0udmVyaWZ5KGNvbnRleHQsICgpID0+IHtcbiAgICAgIGxldCB2ZXJpZmllZEFoZWFkID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IHRlcm1UeXBlID0gdGhpcy50ZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICAgIHRlcm1UeXBlUHJvdmlzaW9uYWwgPSB0ZXJtVHlwZS5pc1Byb3Zpc2lvbmFsKCk7XG5cbiAgICAgIGlmICghdGVybVR5cGVQcm92aXNpb25hbCkge1xuICAgICAgICBjb25zdCB0eXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZUZXJtVHlwZSA9IHRoaXMudHlwZS5pc0VxdWFsVG9PclN1cGVyVHlwZU9mKHRlcm1UeXBlKTtcblxuICAgICAgICB2ZXJpZmllZEFoZWFkID0gdHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mVGVybVR5cGU7IC8vL1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICB9KTtcblxuICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB0ZXJtVmVyaWZpZWQ7IC8vL1xuXG4gICAgaWYgKHZlcmlmaWVkV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCB0eXBlIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIGFzc2lnbihhc3NpZ25tZW50cywgY29udGV4dCkge1xuICAgIGlmIChhc3NpZ25tZW50cyA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHsgVHlwZSwgVmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgICB0ZXJtTm9kZSA9IHRoaXMudGVybS5nZXROb2RlKCksXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkodGVybU5vZGUpO1xuXG4gICAgbGV0IHR5cGUsXG4gICAgICAgIHByb3Zpc2lvbmFsO1xuXG4gICAgcHJvdmlzaW9uYWwgPSB0aGlzLnR5cGUuaXNQcm92aXNpb25hbCgpO1xuXG4gICAgaWYgKCFwcm92aXNpb25hbCkge1xuICAgICAgdHlwZSA9IHRoaXMudHlwZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvdmlzaW9uYWwgPSBmYWxzZTtcblxuICAgICAgdHlwZSA9IFR5cGUuZnJvbVR5cGVBbmRQcm92aXNpb25hbCh0aGlzLnR5cGUsIHByb3Zpc2lvbmFsKTtcbiAgICB9XG5cbiAgICBjb25zdCB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYXJpYWJsZU5vZGVBbmRUeXBlKHZhcmlhYmxlTm9kZSwgdHlwZSwgY29udGV4dCk7XG5cbiAgICBpZiAodmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHZhcmlhYmxlQXNzaWdubWVudCA9IFZhcmlhYmxlQXNzaWdubWVudC5mcm9tVmFyaWFibGUodmFyaWFibGUpLFxuICAgICAgICAgICAgYXNzaWdubWVudCA9IHZhcmlhYmxlQXNzaWdubWVudDsgIC8vL1xuXG4gICAgICBhc3NpZ25tZW50cy5wdXNoKGFzc2lnbm1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJUeXBlQXNzZXJ0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdHlwZUFzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCB0eXBlQXNzZXJ0aW9uTm9kZSA9IHR5cGVBc3NlcnRpb25Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBpZiAodHlwZUFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgVGVybSwgVHlwZSB9ID0gZG9tLFxuICAgICAgICAgICAgbm9kZSA9IHR5cGVBc3NlcnRpb25Ob2RlLCAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgdGVybSA9IFRlcm0uZnJvbVR5cGVBc3NlcnRpb25Ob2RlKHR5cGVBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHR5cGUgPSBUeXBlLmZyb21UeXBlQXNzZXJ0aW9uTm9kZSh0eXBlQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIHR5cGVBc3NlcnRpb24gPSBuZXcgVHlwZUFzc2VydGlvbihzdHJpbmcsIHRlcm0sIHR5cGUpO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlQXNzZXJ0aW9uO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJ2YXJpYWJsZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInR5cGVBc3NlcnRpb25Ob2RlUXVlcnkiLCJkb21Bc3NpZ25lZCIsIlR5cGVBc3NlcnRpb24iLCJzdHJpbmciLCJ0ZXJtIiwidHlwZSIsImdldFN0cmluZyIsImdldFRlcm0iLCJnZXRUeXBlIiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJjb250ZXh0IiwidmVyaWZpZWQiLCJ0eXBlQXNzZXJ0aW9uU3RyaW5nIiwidHJhY2UiLCJ0eXBlVmVyaWZpZWQiLCJ2ZXJpZnlUeXBlIiwidmVyaWZpZWRXaGVuU3RhdGVkIiwidmVyaWZpZWRXaGVuRGVyaXZlZCIsInZlcmlmeVdoZW5TdGF0ZWQiLCJ2ZXJpZnlXaGVuRGVyaXZlZCIsImFzc2lnbiIsImRlYnVnIiwib2JqZWN0VHlwZSIsInR5cGVTdHJpbmciLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJ0ZXJtVmVyaWZpZWQiLCJ2ZXJpZmllZEFoZWFkIiwidGVybVR5cGUiLCJ0eXBlRXF1YWxUb09yU3ViVHlwZU9mVGVybVR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsInRlcm1UeXBlUHJvdmlzaW9uYWwiLCJpc1Byb3Zpc2lvbmFsIiwidHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mVGVybVR5cGUiLCJpc0VxdWFsVG9PclN1cGVyVHlwZU9mIiwiVHlwZSIsImRvbSIsIlZhcmlhYmxlIiwidGVybU5vZGUiLCJnZXROb2RlIiwidmFyaWFibGVOb2RlIiwicHJvdmlzaW9uYWwiLCJmcm9tVHlwZUFuZFByb3Zpc2lvbmFsIiwidmFyaWFibGUiLCJmcm9tVmFyaWFibGVOb2RlQW5kVHlwZSIsInZhcmlhYmxlQXNzaWdubWVudCIsIlZhcmlhYmxlQXNzaWdubWVudCIsImZyb21WYXJpYWJsZSIsImFzc2lnbm1lbnQiLCJwdXNoIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwidHlwZUFzc2VydGlvbiIsInR5cGVBc3NlcnRpb25Ob2RlIiwiVGVybSIsIm5vZGUiLCJub2RlQXNTdHJpbmciLCJmcm9tVHlwZUFz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