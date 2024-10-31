"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TypeAssertion;
    }
});
var _shim = /*#__PURE__*/ _interop_require_default(require("../shim"));
var _variable = /*#__PURE__*/ _interop_require_default(require("../assignment/variable"));
var _query = require("../utilities/query");
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var termNodeQuery = (0, _query.nodeQuery)("/typeAssertion/term"), typeNodeQuery = (0, _query.nodeQuery)("/typeAssertion/type"), variableNodeQuery = (0, _query.nodeQuery)("/term/variable!"), typeAssertionNodeQuery = (0, _query.nodeQuery)("/statement/typeAssertion");
var TypeAssertion = /*#__PURE__*/ function() {
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
                        context.debug("The '".concat(typeName, "' type is missing."));
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
                    if (assignments !== null) {
                        var Variable = _shim.default.Variable, termNode = this.term.getNode(), variableNode = variableNodeQuery(termNode), variable = Variable.fromVariableNodeAndType(variableNode, this.type, context);
                        if (variable !== null) {
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
                    var Term = _shim.default.Term, Type = _shim.default.Type, termNode = termNodeQuery(typeAssertionNode), typeNode = typeNodeQuery(typeAssertionNode), term = Term.fromTermNode(termNode, context), type = Type.fromTypeNode(typeNode, context), string = stringFromTermAndType(term, type);
                    typeAssertion = new TypeAssertion(string, term, type);
                }
                return typeAssertion;
            }
        }
    ]);
    return TypeAssertion;
}();
function stringFromTermAndType(term, type) {
    var termString = term.getString(), typeName = type.getName(), string = "".concat(termString, ":").concat(typeName);
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3NlcnRpb24vdHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcbmltcG9ydCBWYXJpYWJsZUFzc2lnbm1lbnQgZnJvbSBcIi4uL2Fzc2lnbm1lbnQvdmFyaWFibGVcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgb2JqZWN0VHlwZSB9IGZyb20gXCIuLi90eXBlXCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZUFzc2VydGlvbi90ZXJtXCIpLFxuICAgICAgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlQXNzZXJ0aW9uL3R5cGVcIiksXG4gICAgICB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlIVwiKSxcbiAgICAgIHR5cGVBc3NlcnRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L3R5cGVBc3NlcnRpb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR5cGVBc3NlcnRpb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIHRlcm0sIHR5cGUpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGxldCB0eXBlQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHR5cGUgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0eXBlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVR5cGUoY29udGV4dCk7XG5cbiAgICBpZiAodHlwZVZlcmlmaWVkKSB7XG4gICAgICBsZXQgdmVyaWZpZWRXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICBpZiAoc3RhdGVkKSB7XG4gICAgICAgIHZlcmlmaWVkV2hlblN0YXRlZCA9IHRoaXMudmVyaWZ5V2hlblN0YXRlZChhc3NpZ25tZW50cywgY29udGV4dCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gdGhpcy52ZXJpZnlXaGVuRGVyaXZlZChjb250ZXh0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHZlcmlmaWVkV2hlblN0YXRlZCB8fCB2ZXJpZmllZFdoZW5EZXJpdmVkKSB7XG4gICAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgdHlwZSBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5VHlwZShjb250ZXh0KSB7XG4gICAgbGV0IHR5cGVWZXJpZmllZDtcblxuICAgIGlmICh0aGlzLnR5cGUgPT09IG9iamVjdFR5cGUpIHtcbiAgICAgIHR5cGVWZXJpZmllZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVOYW1lID0gdGhpcy50eXBlLmdldE5hbWUoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlTmFtZX0nIHR5cGUuLi5gKTtcblxuICAgICAgY29uc3QgdHlwZSA9IGNvbnRleHQuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgICAgaWYgKHR5cGUgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcblxuICAgICAgICB0eXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVOYW1lfScgdHlwZSBpcyBtaXNzaW5nLmApO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZVZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlTmFtZX0nIHR5cGUuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuU3RhdGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCB0eXBlQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIHR5cGUgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtVmVyaWZpZWQgPSB0aGlzLnRlcm0udmVyaWZ5KGNvbnRleHQsICgpID0+IHtcbiAgICAgIGxldCB2ZXJpZmllZEFoZWFkO1xuXG4gICAgICBjb25zdCB0ZXJtVHlwZSA9IHRoaXMudGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICB0eXBlRXF1YWxUb09yU3ViVHlwZU9mVGVybVR5cGUgPSB0aGlzLnR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YodGVybVR5cGUpO1xuXG4gICAgICBpZiAodHlwZUVxdWFsVG9PclN1YlR5cGVPZlRlcm1UeXBlKSB7XG4gICAgICAgIHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICB9KTtcblxuICAgIGlmICh0ZXJtVmVyaWZpZWQpIHtcbiAgICAgIGlmIChhc3NpZ25tZW50cyAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB7IFZhcmlhYmxlIH0gPSBzaGltLFxuICAgICAgICAgICAgICB0ZXJtTm9kZSA9IHRoaXMudGVybS5nZXROb2RlKCksXG4gICAgICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHRlcm1Ob2RlKSxcbiAgICAgICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVmFyaWFibGVOb2RlQW5kVHlwZSh2YXJpYWJsZU5vZGUsIHRoaXMudHlwZSwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgdmFyaWFibGVBc3NpZ25tZW50ID0gVmFyaWFibGVBc3NpZ25tZW50LmZyb21WYXJpYWJsZSh2YXJpYWJsZSksXG4gICAgICAgICAgICAgICAgYXNzaWdubWVudCA9IHZhcmlhYmxlQXNzaWdubWVudDsgIC8vL1xuXG4gICAgICAgICAgYXNzaWdubWVudHMucHVzaChhc3NpZ25tZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZFdoZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIHR5cGUgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZFdoZW5TdGF0ZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuRGVyaXZlZChjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkV2hlbkRlcml2ZWQ7XG5cbiAgICBjb25zdCB0eXBlQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCB0eXBlIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3QgdGVybVZlcmlmaWVkID0gdGhpcy50ZXJtLnZlcmlmeShjb250ZXh0LCAoKSA9PiB7XG4gICAgICBsZXQgdmVyaWZpZWRBaGVhZDtcblxuICAgICAgY29uc3QgdGVybVR5cGUgPSB0aGlzLnRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgdHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mVGVybVR5cGUgPSB0aGlzLnR5cGUuaXNFcXVhbFRvT3JTdXBlclR5cGVPZih0ZXJtVHlwZSk7XG5cbiAgICAgIHZlcmlmaWVkQWhlYWQgPSB0eXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZUZXJtVHlwZTsgLy8vXG5cbiAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgIH0pO1xuXG4gICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IHRlcm1WZXJpZmllZDsgLy8vXG5cbiAgICBpZiAodmVyaWZpZWRXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIHR5cGUgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZFdoZW5EZXJpdmVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgdHlwZUFzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCB0eXBlQXNzZXJ0aW9uTm9kZSA9IHR5cGVBc3NlcnRpb25Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBpZiAodHlwZUFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgVGVybSwgVHlwZSB9ID0gc2hpbSxcbiAgICAgICAgICAgIHRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeSh0eXBlQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgICB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkodHlwZUFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgICAgdGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHR5cGUgPSBUeXBlLmZyb21UeXBlTm9kZSh0eXBlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVGVybUFuZFR5cGUodGVybSwgdHlwZSk7XG5cbiAgICAgIHR5cGVBc3NlcnRpb24gPSBuZXcgVHlwZUFzc2VydGlvbihzdHJpbmcsIHRlcm0sIHR5cGUpO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlQXNzZXJ0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21UZXJtQW5kVHlwZSh0ZXJtLCB0eXBlKSB7XG4gIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICB0eXBlTmFtZSA9IHR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICBzdHJpbmcgPSBgJHt0ZXJtU3RyaW5nfToke3R5cGVOYW1lfWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJUeXBlQXNzZXJ0aW9uIiwidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInR5cGVOb2RlUXVlcnkiLCJ2YXJpYWJsZU5vZGVRdWVyeSIsInR5cGVBc3NlcnRpb25Ob2RlUXVlcnkiLCJzdHJpbmciLCJ0ZXJtIiwidHlwZSIsImdldFN0cmluZyIsImdldFRlcm0iLCJnZXRUeXBlIiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJjb250ZXh0IiwidmVyaWZpZWQiLCJ0eXBlQXNzZXJ0aW9uU3RyaW5nIiwidHJhY2UiLCJ0eXBlVmVyaWZpZWQiLCJ2ZXJpZnlUeXBlIiwidmVyaWZpZWRXaGVuU3RhdGVkIiwidmVyaWZpZWRXaGVuRGVyaXZlZCIsInZlcmlmeVdoZW5TdGF0ZWQiLCJ2ZXJpZnlXaGVuRGVyaXZlZCIsImRlYnVnIiwib2JqZWN0VHlwZSIsInR5cGVOYW1lIiwiZ2V0TmFtZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInRlcm1WZXJpZmllZCIsInZlcmlmaWVkQWhlYWQiLCJ0ZXJtVHlwZSIsInR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZUZXJtVHlwZSIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwiVmFyaWFibGUiLCJzaGltIiwidGVybU5vZGUiLCJnZXROb2RlIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGUiLCJmcm9tVmFyaWFibGVOb2RlQW5kVHlwZSIsInZhcmlhYmxlQXNzaWdubWVudCIsIlZhcmlhYmxlQXNzaWdubWVudCIsImZyb21WYXJpYWJsZSIsImFzc2lnbm1lbnQiLCJwdXNoIiwidHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mVGVybVR5cGUiLCJpc0VxdWFsVG9PclN1cGVyVHlwZU9mIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwidHlwZUFzc2VydGlvbiIsInR5cGVBc3NlcnRpb25Ob2RlIiwiVGVybSIsIlR5cGUiLCJ0eXBlTm9kZSIsImZyb21UZXJtTm9kZSIsImZyb21UeXBlTm9kZSIsInN0cmluZ0Zyb21UZXJtQW5kVHlwZSIsInRlcm1TdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBYXFCQTs7OzJEQVhKOytEQUNjO3FCQUVMO29CQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNCLElBQU1DLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyx3QkFDMUJDLGdCQUFnQkQsSUFBQUEsZ0JBQVMsRUFBQyx3QkFDMUJFLG9CQUFvQkYsSUFBQUEsZ0JBQVMsRUFBQyxvQkFDOUJHLHlCQUF5QkgsSUFBQUEsZ0JBQVMsRUFBQztBQUUxQixJQUFBLEFBQU1GLDhCQUFOO2FBQU1BLGNBQ1BN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