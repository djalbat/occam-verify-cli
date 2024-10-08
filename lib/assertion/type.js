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
                var verified;
                if (stated) {
                    var verifiedWhenStated = this.verifyWhenStated(assignments, localContext);
                    verified = verifiedWhenStated; ///
                } else {
                    var verifiedWhenDerived = this.verifyWhenDerived(localContext);
                    verified = verifiedWhenDerived; ///
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
                var Term = _shim.default.Term, Type = _shim.default.Type, termNode = termNodeQuery(typeAssertionNode), typeNode = typeNodeQuery(typeAssertionNode), variableNode = variableNodeQuery(termNode), term = Term.fromTermNode(termNode, localContext), type = Type.fromTypeNode(typeNode, localContext), variable = _variable.default.fromVariableNode(variableNode, localContext), string = stringFromTermAndType(term, type), typeAssertion = new TypeAssertion(string, term, type, variable);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3NlcnRpb24vdHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcbmltcG9ydCBWYXJpYWJsZSBmcm9tIFwiLi4vdmFyaWFibGVcIjtcbmltcG9ydCBWYXJpYWJsZUFzc2lnbm1lbnQgZnJvbSBcIi4uL2Fzc2lnbm1lbnQvdmFyaWFibGVcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHtvYmplY3RUeXBlfSBmcm9tIFwiLi4vdHlwZVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVBc3NlcnRpb24vdGVybVwiKSxcbiAgICAgIHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZUFzc2VydGlvbi90eXBlXCIpLFxuICAgICAgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybS92YXJpYWJsZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHlwZUFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdGVybSwgdHlwZSwgdmFyaWFibGUpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZDtcblxuICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgIGNvbnN0IHZlcmlmaWVkV2hlblN0YXRlZCA9IHRoaXMudmVyaWZ5V2hlblN0YXRlZChhc3NpZ25tZW50cywgbG9jYWxDb250ZXh0KTtcblxuICAgICAgdmVyaWZpZWQgPSB2ZXJpZmllZFdoZW5TdGF0ZWQ7ICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IHRoaXMudmVyaWZ5V2hlbkRlcml2ZWQobG9jYWxDb250ZXh0KTtcblxuICAgICAgdmVyaWZpZWQgPSB2ZXJpZmllZFdoZW5EZXJpdmVkOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlUeXBlKGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB0eXBlVmVyaWZpZWQ7XG5cbiAgICBpZiAodGhpcy50eXBlID09PSBvYmplY3RUeXBlKSB7XG4gICAgICB0eXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMudHlwZS5nZXROYW1lKCk7XG5cbiAgICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlTmFtZX0nIHR5cGUuLi5gKTtcblxuICAgICAgY29uc3QgdHlwZSA9IGxvY2FsQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgICBsb2NhbENvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlTmFtZX0nIHR5cGUgaXMgbWlzc2luZy5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7IC8vL1xuXG4gICAgICAgIHR5cGVWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlVmVyaWZpZWQpIHtcbiAgICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZU5hbWV9JyB0eXBlLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuU3RhdGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCB0eXBlQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgdHlwZSBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHR5cGVWZXJpZmllZCA9IHRoaXMudmVyaWZ5VHlwZShsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKHR5cGVWZXJpZmllZCkge1xuICAgICAgY29uc3QgdGVybVZlcmlmaWVkID0gdGhpcy50ZXJtLnZlcmlmeShsb2NhbENvbnRleHQsICgpID0+IHtcbiAgICAgICAgbGV0IHZlcmlmaWVkQWhlYWQ7XG5cbiAgICAgICAgY29uc3QgdGVybVR5cGUgPSB0aGlzLnRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICB0eXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZUZXJtVHlwZSA9IHRoaXMudHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZih0ZXJtVHlwZSk7XG5cbiAgICAgICAgaWYgKHR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlRlcm1UeXBlKSB7XG4gICAgICAgICAgaWYgKHRoaXMudmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMudmFyaWFibGUuc2V0VHlwZSh0aGlzLnR5cGUpO1xuXG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZUFzc2lnbm1lbnQgPSBWYXJpYWJsZUFzc2lnbm1lbnQuZnJvbVZhcmlhYmxlKHRoaXMudmFyaWFibGUpLFxuICAgICAgICAgICAgICAgICAgYXNzaWdubWVudCA9IHZhcmlhYmxlQXNzaWdubWVudDsgIC8vL1xuXG4gICAgICAgICAgICBhc3NpZ25tZW50cy5wdXNoKGFzc2lnbm1lbnQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICB9KTtcblxuICAgICAgdmVyaWZpZWRXaGVuU3RhdGVkID0gdGVybVZlcmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWRXaGVuU3RhdGVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIHR5cGUgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZFdoZW5TdGF0ZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuRGVyaXZlZChsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHlwZUFzc2VydGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCB0eXBlIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3QgdHlwZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlUeXBlKGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAodHlwZVZlcmlmaWVkKSB7XG4gICAgICBjb25zdCB0ZXJtVmVyaWZpZWQgPSB0aGlzLnRlcm0udmVyaWZ5KGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgICBsZXQgdmVyaWZpZWRBaGVhZDtcblxuICAgICAgICBjb25zdCB0ZXJtVHlwZSA9IHRoaXMudGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgIHR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlRlcm1UeXBlID0gdGhpcy50eXBlLmlzRXF1YWxUb09yU3VwZXJUeXBlT2YodGVybVR5cGUpO1xuXG4gICAgICAgIHZlcmlmaWVkQWhlYWQgPSB0eXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZUZXJtVHlwZTsgLy8vXG5cbiAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICB9KTtcblxuICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IHRlcm1WZXJpZmllZDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkV2hlbkRlcml2ZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIHR5cGUgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZFdoZW5EZXJpdmVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21UeXBlQXNzZXJ0aW9uTm9kZSh0eXBlQXNzZXJ0aW9uTm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgY29uc3QgeyBUZXJtLCBUeXBlIH0gPSBzaGltLFxuICAgICAgICAgIHRlcm1Ob2RlID0gdGVybU5vZGVRdWVyeSh0eXBlQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgdHlwZU5vZGUgPSB0eXBlTm9kZVF1ZXJ5KHR5cGVBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICB2YXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeSh0ZXJtTm9kZSksXG4gICAgICAgICAgdGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgIHR5cGUgPSBUeXBlLmZyb21UeXBlTm9kZSh0eXBlTm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21UZXJtQW5kVHlwZSh0ZXJtLCB0eXBlKSxcbiAgICAgICAgICB0eXBlQXNzZXJ0aW9uID0gbmV3IFR5cGVBc3NlcnRpb24oc3RyaW5nLCB0ZXJtLCB0eXBlLCB2YXJpYWJsZSk7XG5cbiAgICByZXR1cm4gdHlwZUFzc2VydGlvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiBzdHJpbmdGcm9tVGVybUFuZFR5cGUodGVybSwgdHlwZSkge1xuICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgdHlwZU5hbWUgPSB0eXBlLmdldE5hbWUoKSxcbiAgICAgICAgc3RyaW5nID0gYCR7dGVybVN0cmluZ306JHt0eXBlTmFtZX1gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsiVHlwZUFzc2VydGlvbiIsInRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJ0eXBlTm9kZVF1ZXJ5IiwidmFyaWFibGVOb2RlUXVlcnkiLCJzdHJpbmciLCJ0ZXJtIiwidHlwZSIsInZhcmlhYmxlIiwiZ2V0U3RyaW5nIiwiZ2V0VGVybSIsImdldFR5cGUiLCJnZXRWYXJpYWJsZSIsInZlcmlmeSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwibG9jYWxDb250ZXh0IiwidmVyaWZpZWQiLCJ2ZXJpZmllZFdoZW5TdGF0ZWQiLCJ2ZXJpZnlXaGVuU3RhdGVkIiwidmVyaWZpZWRXaGVuRGVyaXZlZCIsInZlcmlmeVdoZW5EZXJpdmVkIiwidmVyaWZ5VHlwZSIsInR5cGVWZXJpZmllZCIsIm9iamVjdFR5cGUiLCJ0eXBlTmFtZSIsImdldE5hbWUiLCJ0cmFjZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsImRlYnVnIiwidHlwZUFzc2VydGlvblN0cmluZyIsInRlcm1WZXJpZmllZCIsInZlcmlmaWVkQWhlYWQiLCJ0ZXJtVHlwZSIsInR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlRlcm1UeXBlIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJzZXRUeXBlIiwidmFyaWFibGVBc3NpZ25tZW50IiwiVmFyaWFibGVBc3NpZ25tZW50IiwiZnJvbVZhcmlhYmxlIiwiYXNzaWdubWVudCIsInB1c2giLCJpc0VxdWFsVG9PclN1cGVyVHlwZU9mIiwiZnJvbVR5cGVBc3NlcnRpb25Ob2RlIiwidHlwZUFzc2VydGlvbk5vZGUiLCJUZXJtIiwic2hpbSIsIlR5cGUiLCJ0ZXJtTm9kZSIsInR5cGVOb2RlIiwidmFyaWFibGVOb2RlIiwiZnJvbVRlcm1Ob2RlIiwiZnJvbVR5cGVOb2RlIiwiVmFyaWFibGUiLCJmcm9tVmFyaWFibGVOb2RlIiwic3RyaW5nRnJvbVRlcm1BbmRUeXBlIiwidHlwZUFzc2VydGlvbiIsInRlcm1TdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBYXFCQTs7OzJEQVhKOytEQUNJO2dFQUNVO3FCQUVMO29CQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpCLElBQU1DLGdCQUFnQkMsSUFBQUEsZ0JBQVMsRUFBQyx3QkFDMUJDLGdCQUFnQkQsSUFBQUEsZ0JBQVMsRUFBQyx3QkFDMUJFLG9CQUFvQkYsSUFBQUEsZ0JBQVMsRUFBQztBQUVyQixJQUFBLEFBQU1GLDhCQUFOO2FBQU1BLGNBQ1BLLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLFFBQVE7Z0NBRHJCUjtRQUVqQixJQUFJLENBQUNLLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLFFBQVEsR0FBR0E7O2tCQUxDUjs7WUFRbkJTLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osTUFBTTtZQUNwQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osSUFBSTtZQUNsQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osSUFBSTtZQUNsQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxT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