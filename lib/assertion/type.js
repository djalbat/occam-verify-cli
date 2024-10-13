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
var _variable = /*#__PURE__*/ _interop_require_default(require("../variable"));
var _variable1 = /*#__PURE__*/ _interop_require_default(require("../assignment/variable"));
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
var termNodeQuery = (0, _query.nodeQuery)("/typeAssertion/term"), typeNodeQuery = (0, _query.nodeQuery)("/typeAssertion/type"), variableNodeQuery = (0, _query.nodeQuery)("/term/variable");
var TypeAssertion = /*#__PURE__*/ function() {
    function TypeAssertion(string, term, type, variable) {
        _class_call_check(this, TypeAssertion);
        this.string = string;
        this.term = term;
        this.type = type;
        this.variable = variable;
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
            key: "getVariable",
            value: function getVariable() {
                return this.variable;
            }
        },
        {
            key: "verify",
            value: function verify(assignments, stated, localContext) {
                var verified = false;
                var typeAssertionString = this.string; ///
                localContext.trace("Verifying the '$".concat(typeAssertionString, "' type assertion..."));
                var verifiedWhenStated = false, verifiedWhenDerived = false;
                if (stated) {
                    verifiedWhenStated = this.verifyWhenStated(assignments, localContext);
                } else {
                    verifiedWhenDerived = this.verifyWhenDerived(localContext);
                }
                if (verifiedWhenStated || verifiedWhenDerived) {
                    verified = true;
                }
                if (verified) {
                    localContext.debug("...verified the '$".concat(typeAssertionString, "' type assertion."));
                }
                return verified;
            }
        },
        {
            key: "verifyType",
            value: function verifyType(localContext) {
                var typeVerified;
                if (this.type === _type.objectType) {
                    typeVerified = true;
                } else {
                    var typeName = this.type.getName();
                    localContext.trace("Verifying the '".concat(typeName, "' type..."));
                    var type = localContext.findTypeByTypeName(typeName);
                    if (type === null) {
                        localContext.debug("The '".concat(typeName, "' type is missing."));
                    } else {
                        this.type = type; ///
                        typeVerified = true;
                    }
                    if (typeVerified) {
                        localContext.debug("...verified the '".concat(typeName, "' type."));
                    }
                }
                return typeVerified;
            }
        },
        {
            key: "verifyWhenStated",
            value: function verifyWhenStated(assignments, localContext) {
                var _this = this;
                var verifiedWhenStated = false;
                var typeAssertionString = this.string; ///
                localContext.trace("Verifying the '".concat(typeAssertionString, "' stated type assertion..."));
                var typeVerified = this.verifyType(localContext);
                if (typeVerified) {
                    var termVerified = this.term.verify(localContext, function() {
                        var verifiedAhead;
                        var termType = _this.term.getType(), typeEqualToOrSuperTypeOfTermType = _this.type.isEqualToOrSubTypeOf(termType);
                        if (typeEqualToOrSuperTypeOfTermType) {
                            if (_this.variable !== null) {
                                _this.variable.setType(_this.type);
                                var variableAssignment = _variable1.default.fromVariable(_this.variable), assignment = variableAssignment; ///
                                assignments.push(assignment);
                            }
                            verifiedAhead = true;
                        }
                        return verifiedAhead;
                    });
                    verifiedWhenStated = termVerified; ///
                }
                if (verifiedWhenStated) {
                    localContext.debug("...verified the '".concat(typeAssertionString, "' stated type assertion."));
                }
                return verifiedWhenStated;
            }
        },
        {
            key: "verifyWhenDerived",
            value: function verifyWhenDerived(localContext) {
                var _this = this;
                var verifiedWhenDerived = false;
                var typeAssertionString = this.string; ///
                localContext.trace("Verifying the '".concat(typeAssertionString, "' derived type assertion..."));
                var typeVerified = this.verifyType(localContext);
                if (typeVerified) {
                    var termVerified = this.term.verify(localContext, function() {
                        var verifiedAhead;
                        var termType = _this.term.getType(), typeEqualToOrSuperTypeOfTermType = _this.type.isEqualToOrSuperTypeOf(termType);
                        verifiedAhead = typeEqualToOrSuperTypeOfTermType; ///
                        return verifiedAhead;
                    });
                    verifiedWhenDerived = termVerified; ///
                }
                if (verifiedWhenDerived) {
                    localContext.debug("...verified the '".concat(typeAssertionString, "' derived type assertion."));
                }
                return verifiedWhenDerived;
            }
        }
    ], [
        {
            key: "fromTypeAssertionNode",
            value: function fromTypeAssertionNode(typeAssertionNode, localContext) {
                var typeAssertion = null;
                if (typeAssertionNode !== null) {
                    var Term = _shim.default.Term, Type = _shim.default.Type, termNode = termNodeQuery(typeAssertionNode), typeNode = typeNodeQuery(typeAssertionNode), variableNode = variableNodeQuery(termNode), term = Term.fromTermNode(termNode, localContext), type = Type.fromTypeNode(typeNode, localContext), variable = _variable.default.fromVariableNode(variableNode, localContext), string = stringFromTermAndType(term, type);
                    typeAssertion = new TypeAssertion(string, term, type, variable);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3NlcnRpb24vdHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcbmltcG9ydCBWYXJpYWJsZSBmcm9tIFwiLi4vdmFyaWFibGVcIjtcbmltcG9ydCBWYXJpYWJsZUFzc2lnbm1lbnQgZnJvbSBcIi4uL2Fzc2lnbm1lbnQvdmFyaWFibGVcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgb2JqZWN0VHlwZSB9IGZyb20gXCIuLi90eXBlXCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZUFzc2VydGlvbi90ZXJtXCIpLFxuICAgICAgdHlwZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90eXBlQXNzZXJ0aW9uL3R5cGVcIiksXG4gICAgICB2YXJpYWJsZU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi90ZXJtL3ZhcmlhYmxlXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUeXBlQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCB0ZXJtLCB0eXBlLCB2YXJpYWJsZSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMudGVybSA9IHRlcm07XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnZhcmlhYmxlID0gdmFyaWFibGU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0VmFyaWFibGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGU7XG4gIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBsZXQgdHlwZUFzc2VydGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyQke3R5cGVBc3NlcnRpb25TdHJpbmd9JyB0eXBlIGFzc2VydGlvbi4uLmApO1xuXG4gICAgbGV0IHZlcmlmaWVkV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICBpZiAoc3RhdGVkKSB7XG4gICAgICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0aGlzLnZlcmlmeVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGxvY2FsQ29udGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB0aGlzLnZlcmlmeVdoZW5EZXJpdmVkKGxvY2FsQ29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkV2hlblN0YXRlZCB8fCB2ZXJpZmllZFdoZW5EZXJpdmVkKSB7XG4gICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJCR7dHlwZUFzc2VydGlvblN0cmluZ30nIHR5cGUgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVR5cGUobG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHR5cGVWZXJpZmllZDtcblxuICAgIGlmICh0aGlzLnR5cGUgPT09IG9iamVjdFR5cGUpIHtcbiAgICAgIHR5cGVWZXJpZmllZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHR5cGVOYW1lID0gdGhpcy50eXBlLmdldE5hbWUoKTtcblxuICAgICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVOYW1lfScgdHlwZS4uLmApO1xuXG4gICAgICBjb25zdCB0eXBlID0gbG9jYWxDb250ZXh0LmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgVGhlICcke3R5cGVOYW1lfScgdHlwZSBpcyBtaXNzaW5nLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTsgLy8vXG5cbiAgICAgICAgdHlwZVZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVWZXJpZmllZCkge1xuICAgICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlTmFtZX0nIHR5cGUuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZFdoZW5TdGF0ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHR5cGVBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHN0YXRlZCB0eXBlIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3QgdHlwZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlUeXBlKGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAodHlwZVZlcmlmaWVkKSB7XG4gICAgICBjb25zdCB0ZXJtVmVyaWZpZWQgPSB0aGlzLnRlcm0udmVyaWZ5KGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgICBsZXQgdmVyaWZpZWRBaGVhZDtcblxuICAgICAgICBjb25zdCB0ZXJtVHlwZSA9IHRoaXMudGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgIHR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlRlcm1UeXBlID0gdGhpcy50eXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKHRlcm1UeXBlKTtcblxuICAgICAgICBpZiAodHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mVGVybVR5cGUpIHtcbiAgICAgICAgICBpZiAodGhpcy52YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy52YXJpYWJsZS5zZXRUeXBlKHRoaXMudHlwZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlQXNzaWdubWVudCA9IFZhcmlhYmxlQXNzaWdubWVudC5mcm9tVmFyaWFibGUodGhpcy52YXJpYWJsZSksXG4gICAgICAgICAgICAgICAgICBhc3NpZ25tZW50ID0gdmFyaWFibGVBc3NpZ25tZW50OyAgLy8vXG5cbiAgICAgICAgICAgIGFzc2lnbm1lbnRzLnB1c2goYXNzaWdubWVudCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgIH0pO1xuXG4gICAgICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0ZXJtVmVyaWZpZWQ7IC8vL1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZFdoZW5TdGF0ZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgdHlwZSBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5EZXJpdmVkKGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZFdoZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICBjb25zdCB0eXBlQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIHR5cGUgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0eXBlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVR5cGUobG9jYWxDb250ZXh0KTtcblxuICAgIGlmICh0eXBlVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IHRlcm1WZXJpZmllZCA9IHRoaXMudGVybS52ZXJpZnkobG9jYWxDb250ZXh0LCAoKSA9PiB7XG4gICAgICAgIGxldCB2ZXJpZmllZEFoZWFkO1xuXG4gICAgICAgIGNvbnN0IHRlcm1UeXBlID0gdGhpcy50ZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgdHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mVGVybVR5cGUgPSB0aGlzLnR5cGUuaXNFcXVhbFRvT3JTdXBlclR5cGVPZih0ZXJtVHlwZSk7XG5cbiAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlRlcm1UeXBlOyAvLy9cblxuICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgIH0pO1xuXG4gICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gdGVybVZlcmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWRXaGVuRGVyaXZlZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgdHlwZSBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkV2hlbkRlcml2ZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbVR5cGVBc3NlcnRpb25Ob2RlKHR5cGVBc3NlcnRpb25Ob2RlLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdHlwZUFzc2VydGlvbiA9IG51bGw7XG5cbiAgICBpZiAodHlwZUFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgVGVybSwgVHlwZSB9ID0gc2hpbSxcbiAgICAgICAgICAgIHRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeSh0eXBlQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgICB0eXBlTm9kZSA9IHR5cGVOb2RlUXVlcnkodHlwZUFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkodGVybU5vZGUpLFxuICAgICAgICAgICAgdGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgICAgdHlwZSA9IFR5cGUuZnJvbVR5cGVOb2RlKHR5cGVOb2RlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21UZXJtQW5kVHlwZSh0ZXJtLCB0eXBlKTtcblxuICAgICAgdHlwZUFzc2VydGlvbiA9IG5ldyBUeXBlQXNzZXJ0aW9uKHN0cmluZywgdGVybSwgdHlwZSwgdmFyaWFibGUpO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlQXNzZXJ0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0cmluZ0Zyb21UZXJtQW5kVHlwZSh0ZXJtLCB0eXBlKSB7XG4gIGNvbnN0IHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpLFxuICAgICAgICB0eXBlTmFtZSA9IHR5cGUuZ2V0TmFtZSgpLFxuICAgICAgICBzdHJpbmcgPSBgJHt0ZXJtU3RyaW5nfToke3R5cGVOYW1lfWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJUeXBlQXNzZXJ0aW9uIiwidGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInR5cGVOb2RlUXVlcnkiLCJ2YXJpYWJsZU5vZGVRdWVyeSIsInN0cmluZyIsInRlcm0iLCJ0eXBlIiwidmFyaWFibGUiLCJnZXRTdHJpbmciLCJnZXRUZXJtIiwiZ2V0VHlwZSIsImdldFZhcmlhYmxlIiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJsb2NhbENvbnRleHQiLCJ2ZXJpZmllZCIsInR5cGVBc3NlcnRpb25TdHJpbmciLCJ0cmFjZSIsInZlcmlmaWVkV2hlblN0YXRlZCIsInZlcmlmaWVkV2hlbkRlcml2ZWQiLCJ2ZXJpZnlXaGVuU3RhdGVkIiwidmVyaWZ5V2hlbkRlcml2ZWQiLCJkZWJ1ZyIsInZlcmlmeVR5cGUiLCJ0eXBlVmVyaWZpZWQiLCJvYmplY3RUeXBlIiwidHlwZU5hbWUiLCJnZXROYW1lIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwidGVybVZlcmlmaWVkIiwidmVyaWZpZWRBaGVhZCIsInRlcm1UeXBlIiwidHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mVGVybVR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsInNldFR5cGUiLCJ2YXJpYWJsZUFzc2lnbm1lbnQiLCJWYXJpYWJsZUFzc2lnbm1lbnQiLCJmcm9tVmFyaWFibGUiLCJhc3NpZ25tZW50IiwicHVzaCIsImlzRXF1YWxUb09yU3VwZXJUeXBlT2YiLCJmcm9tVHlwZUFzc2VydGlvbk5vZGUiLCJ0eXBlQXNzZXJ0aW9uTm9kZSIsInR5cGVBc3NlcnRpb24iLCJUZXJtIiwic2hpbSIsIlR5cGUiLCJ0ZXJtTm9kZSIsInR5cGVOb2RlIiwidmFyaWFibGVOb2RlIiwiZnJvbVRlcm1Ob2RlIiwiZnJvbVR5cGVOb2RlIiwiVmFyaWFibGUiLCJmcm9tVmFyaWFibGVOb2RlIiwic3RyaW5nRnJvbVRlcm1BbmRUeXBlIiwidGVybVN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFhcUJBOzs7MkRBWEo7K0RBQ0k7Z0VBQ1U7cUJBRUw7b0JBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0IsSUFBTUMsZ0JBQWdCQyxJQUFBQSxnQkFBUyxFQUFDLHdCQUMxQkMsZ0JBQWdCRCxJQUFBQSxnQkFBUyxFQUFDLHdCQUMxQkUsb0JBQW9CRixJQUFBQSxnQkFBUyxFQUFDO0FBRXJCLElBQUEsQUFBTUYsOEJBQU47YUFBTUEsY0FDUEssTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsUUFBUTtnQ0FEckJSO1FBRWpCLElBQUksQ0FBQ0ssTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTs7a0JBTENSOztZQVFuQlMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixNQUFNO1lBQ3BCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixJQUFJO1lBQ2xCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixJQUFJO1lBQ2xCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixRQUFRO1lBQ3RCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLFdBQVcsRUFBRUMsTUFBTSxFQUFFQyxZQUFZO2dCQUN0QyxJQUFJQyxXQUFXO2dCQUVmLElBQUlDLHNCQUFzQixJQUFJLENBQUNiLE1BQU0sRUFBRyxHQUFHO2dCQUUzQ1csYUFBYUcsS0FBSyxDQUFDLEFBQUMsbUJBQXNDLE9BQXBCRCxxQkFBb0I7Z0JBRTFELElBQUlFLHFCQUFxQixPQUNyQkMsc0JBQXNCO2dCQUUxQixJQUFJTixRQUFRO29CQUNWSyxxQkFBcUIsSUFBSSxDQUFDRSxnQkFBZ0IsQ0FBQ1IsYUFBYUU7Z0JBQzFELE9BQU87b0JBQ0xLLHNCQUFzQixJQUFJLENBQUNFLGlCQUFpQixDQUFDUDtnQkFDL0M7Z0JBRUEsSUFBSUksc0JBQXNCQyxxQkFBcUI7b0JBQzdDSixXQUFXO2dCQUNiO2dCQUVBLElBQUlBLFVBQVU7b0JBQ1pELGFBQWFRLEtBQUssQ0FBQyxBQUFDLHFCQUF3QyxPQUFwQk4scUJBQW9CO2dCQUM5RDtnQkFFQSxPQUFPRDtZQUNUOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdULFlBQVk7Z0JBQ3JCLElBQUlVO2dCQUVKLElBQUksSUFBSSxDQUFDbkIsSUFBSSxLQUFLb0IsZ0JBQVUsRUFBRTtvQkFDNUJELGVBQWU7Z0JBQ2pCLE9BQU87b0JBQ0wsSUFBTUUsV0FBVyxJQUFJLENBQUNyQixJQUFJLENBQUNzQixPQUFPO29CQUVsQ2IsYUFBYUcsS0FBSyxDQUFDLEFBQUMsa0JBQTBCLE9BQVRTLFVBQVM7b0JBRTlDLElBQU1yQixPQUFPUyxhQUFhYyxrQkFBa0IsQ0FBQ0Y7b0JBRTdDLElBQUlyQixTQUFTLE1BQU07d0JBQ2pCUyxhQUFhUSxLQUFLLENBQUMsQUFBQyxRQUFnQixPQUFUSSxVQUFTO29CQUN0QyxPQUFPO3dCQUNMLElBQUksQ0FBQ3JCLElBQUksR0FBR0EsTUFBTSxHQUFHO3dCQUVyQm1CLGVBQWU7b0JBQ2pCO29CQUVBLElBQUlBLGNBQWM7d0JBQ2hCVixhQUFhUSxLQUFLLENBQUMsQUFBQyxvQkFBNEIsT0FBVEksVUFBUztvQkFDbEQ7Z0JBQ0Y7Z0JBRUEsT0FBT0Y7WUFDVDs7O1lBRUFKLEtBQUFBO21CQUFBQSxTQUFBQSxpQkFBaUJSLFdBQVcsRUFBRUUsWUFBWTs7Z0JBQ3hDLElBQUlJLHFCQUFxQjtnQkFFekIsSUFBTUYsc0JBQXNCLElBQUksQ0FBQ2IsTUFBTSxFQUFFLEdBQUc7Z0JBRTVDVyxhQUFhRyxLQUFLLENBQUMsQUFBQyxrQkFBcUMsT0FBcEJELHFCQUFvQjtnQkFFekQsSUFBTVEsZUFBZSxJQUFJLENBQUNELFVBQVUsQ0FBQ1Q7Z0JBRXJDLElBQUlVLGNBQWM7b0JBQ2hCLElBQU1LLGVBQWUsSUFBSSxDQUFDekIsSUFBSSxDQUFDTyxNQUFNLENBQUNHLGNBQWM7d0JBQ2xELElBQUlnQjt3QkFFSixJQUFNQyxXQUFXLE1BQUszQixJQUFJLENBQUNLLE9BQU8sSUFDNUJ1QixtQ0FBbUMsTUFBSzNCLElBQUksQ0FBQzRCLG9CQUFvQixDQUFDRjt3QkFFeEUsSUFBSUMsa0NBQWtDOzRCQUNwQyxJQUFJLE1BQUsxQixRQUFRLEtBQUssTUFBTTtnQ0FDMUIsTUFBS0EsUUFBUSxDQUFDNEIsT0FBTyxDQUFDLE1BQUs3QixJQUFJO2dDQUUvQixJQUFNOEIscUJBQXFCQyxrQkFBa0IsQ0FBQ0MsWUFBWSxDQUFDLE1BQUsvQixRQUFRLEdBQ2xFZ0MsYUFBYUgsb0JBQXFCLEdBQUc7Z0NBRTNDdkIsWUFBWTJCLElBQUksQ0FBQ0Q7NEJBQ25COzRCQUVBUixnQkFBZ0I7d0JBQ2xCO3dCQUVBLE9BQU9BO29CQUNUO29CQUVBWixxQkFBcUJXLGNBQWMsR0FBRztnQkFDeEM7Z0JBRUEsSUFBSVgsb0JBQW9CO29CQUN0QkosYUFBYVEsS0FBSyxDQUFDLEFBQUMsb0JBQXVDLE9BQXBCTixxQkFBb0I7Z0JBQzdEO2dCQUVBLE9BQU9FO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsa0JBQWtCUCxZQUFZOztnQkFDNUIsSUFBSUssc0JBQXNCO2dCQUUxQixJQUFNSCxzQkFBc0IsSUFBSSxDQUFDYixNQUFNLEVBQUUsR0FBRztnQkFFNUNXLGFBQWFHLEtBQUssQ0FBQyxBQUFDLGtCQUFxQyxPQUFwQkQscUJBQW9CO2dCQUV6RCxJQUFNUSxlQUFlLElBQUksQ0FBQ0QsVUFBVSxDQUFDVDtnQkFFckMsSUFBSVUsY0FBYztvQkFDaEIsSUFBTUssZUFBZSxJQUFJLENBQUN6QixJQUFJLENBQUNPLE1BQU0sQ0FBQ0csY0FBYzt3QkFDbEQsSUFBSWdCO3dCQUVKLElBQU1DLFdBQVcsTUFBSzNCLElBQUksQ0FBQ0ssT0FBTyxJQUM1QnVCLG1DQUFtQyxNQUFLM0IsSUFBSSxDQUFDbUMsc0JBQXNCLENBQUNUO3dCQUUxRUQsZ0JBQWdCRSxrQ0FBa0MsR0FBRzt3QkFFckQsT0FBT0Y7b0JBQ1Q7b0JBRUFYLHNCQUFzQlUsY0FBYyxHQUFHO2dCQUN6QztnQkFFQSxJQUFJVixxQkFBcUI7b0JBQ3ZCTCxhQUFhUSxLQUFLLENBQUMsQUFBQyxvQkFBdUMsT0FBcEJOLHFCQUFvQjtnQkFDN0Q7Z0JBRUEsT0FBT0c7WUFDVDs7OztZQUVPc0IsS0FBQUE7bUJBQVAsU0FBT0Esc0JBQXNCQyxpQkFBaUIsRUFBRTVCLFlBQVk7Z0JBQzFELElBQUk2QixnQkFBZ0I7Z0JBRXBCLElBQUlELHNCQUFzQixNQUFNO29CQUM5QixJQUFRRSxPQUFlQyxhQUFJLENBQW5CRCxNQUFNRSxPQUFTRCxhQUFJLENBQWJDLE1BQ1JDLFdBQVdoRCxjQUFjMkMsb0JBQ3pCTSxXQUFXL0MsY0FBY3lDLG9CQUN6Qk8sZUFBZS9DLGtCQUFrQjZDLFdBQ2pDM0MsT0FBT3dDLEtBQUtNLFlBQVksQ0FBQ0gsVUFBVWpDLGVBQ25DVCxPQUFPeUMsS0FBS0ssWUFBWSxDQUFDSCxVQUFVbEMsZUFDbkNSLFdBQVc4QyxpQkFBUSxDQUFDQyxnQkFBZ0IsQ0FBQ0osY0FBY25DLGVBQ25EWCxTQUFTbUQsc0JBQXNCbEQsTUFBTUM7b0JBRTNDc0MsZ0JBQWdCLElBcktEN0MsY0FxS21CSyxRQUFRQyxNQUFNQyxNQUFNQztnQkFDeEQ7Z0JBRUEsT0FBT3FDO1lBQ1Q7OztXQXpLbUI3Qzs7QUE0S3JCLFNBQVN3RCxzQkFBc0JsRCxJQUFJLEVBQUVDLElBQUk7SUFDdkMsSUFBTWtELGFBQWFuRCxLQUFLRyxTQUFTLElBQzNCbUIsV0FBV3JCLEtBQUtzQixPQUFPLElBQ3ZCeEIsU0FBUyxBQUFDLEdBQWdCdUIsT0FBZDZCLFlBQVcsS0FBWSxPQUFUN0I7SUFFaEMsT0FBT3ZCO0FBQ1QifQ==