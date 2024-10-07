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
                localContext.trace("Verifying the '".concat(typeAssertionString, "' type assertion when stated..."));
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
                                verifiedAhead = true;
                            }
                        }
                        return verifiedAhead;
                    });
                    verifiedWhenStated = termVerified; ///
                }
                if (verifiedWhenStated) {
                    localContext.debug("...verified the '".concat(typeAssertionString, "' type assertion when stated."));
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
                localContext.trace("Verifying the '".concat(typeAssertionString, "' type assertion when derived..."));
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
                    localContext.debug("...verified the '".concat(typeAssertionString, "' type assertion when derived."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3NlcnRpb24vdHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcbmltcG9ydCBWYXJpYWJsZSBmcm9tIFwiLi4vdmFyaWFibGVcIjtcbmltcG9ydCBWYXJpYWJsZUFzc2lnbm1lbnQgZnJvbSBcIi4uL2Fzc2lnbm1lbnQvdmFyaWFibGVcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHtvYmplY3RUeXBlfSBmcm9tIFwiLi4vdHlwZVwiO1xuXG5jb25zdCB0ZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3R5cGVBc3NlcnRpb24vdGVybVwiKSxcbiAgICAgIHR5cGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdHlwZUFzc2VydGlvbi90eXBlXCIpLFxuICAgICAgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybS92YXJpYWJsZVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHlwZUFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgdGVybSwgdHlwZSwgdmFyaWFibGUpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy52YXJpYWJsZSA9IHZhcmlhYmxlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlKCkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlO1xuICB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZDtcblxuICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgIGNvbnN0IHZlcmlmaWVkV2hlblN0YXRlZCA9IHRoaXMudmVyaWZ5V2hlblN0YXRlZChhc3NpZ25tZW50cywgbG9jYWxDb250ZXh0KTtcblxuICAgICAgdmVyaWZpZWQgPSB2ZXJpZmllZFdoZW5TdGF0ZWQ7ICAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IHRoaXMudmVyaWZ5V2hlbkRlcml2ZWQobG9jYWxDb250ZXh0KTtcblxuICAgICAgdmVyaWZpZWQgPSB2ZXJpZmllZFdoZW5EZXJpdmVkOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlUeXBlKGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB0eXBlVmVyaWZpZWQ7XG5cbiAgICBpZiAodGhpcy50eXBlID09PSBvYmplY3RUeXBlKSB7XG4gICAgICB0eXBlVmVyaWZpZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMudHlwZS5nZXROYW1lKCk7XG5cbiAgICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlTmFtZX0nIHR5cGUuLi5gKTtcblxuICAgICAgY29uc3QgdHlwZSA9IGxvY2FsQ29udGV4dC5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgICBsb2NhbENvbnRleHQuZGVidWcoYFRoZSAnJHt0eXBlTmFtZX0nIHR5cGUgaXMgbWlzc2luZy5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7IC8vL1xuXG4gICAgICAgIHR5cGVWZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlVmVyaWZpZWQpIHtcbiAgICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZU5hbWV9JyB0eXBlLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0eXBlVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuU3RhdGVkID0gZmFsc2U7XG5cbiAgICBjb25zdCB0eXBlQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3R5cGVBc3NlcnRpb25TdHJpbmd9JyB0eXBlIGFzc2VydGlvbiB3aGVuIHN0YXRlZC4uLmApO1xuXG4gICAgY29uc3QgdHlwZVZlcmlmaWVkID0gdGhpcy52ZXJpZnlUeXBlKGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAodHlwZVZlcmlmaWVkKSB7XG4gICAgICBjb25zdCB0ZXJtVmVyaWZpZWQgPSB0aGlzLnRlcm0udmVyaWZ5KGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgICBsZXQgdmVyaWZpZWRBaGVhZDtcblxuICAgICAgICBjb25zdCB0ZXJtVHlwZSA9IHRoaXMudGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgIHR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlRlcm1UeXBlID0gdGhpcy50eXBlLmlzRXF1YWxUb09yU3ViVHlwZU9mKHRlcm1UeXBlKTtcblxuICAgICAgICBpZiAodHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mVGVybVR5cGUpIHtcbiAgICAgICAgICBpZiAodGhpcy52YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy52YXJpYWJsZS5zZXRUeXBlKHRoaXMudHlwZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlQXNzaWdubWVudCA9IFZhcmlhYmxlQXNzaWdubWVudC5mcm9tVmFyaWFibGUodGhpcy52YXJpYWJsZSksXG4gICAgICAgICAgICAgICAgICBhc3NpZ25tZW50ID0gdmFyaWFibGVBc3NpZ25tZW50OyAgLy8vXG5cbiAgICAgICAgICAgIGFzc2lnbm1lbnRzLnB1c2goYXNzaWdubWVudCk7XG5cbiAgICAgICAgICAgIHZlcmlmaWVkQWhlYWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgfSk7XG5cbiAgICAgIHZlcmlmaWVkV2hlblN0YXRlZCA9IHRlcm1WZXJpZmllZDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkV2hlblN0YXRlZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHR5cGUgYXNzZXJ0aW9uIHdoZW4gc3RhdGVkLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZFdoZW5TdGF0ZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuRGVyaXZlZChsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdHlwZUFzc2VydGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0eXBlQXNzZXJ0aW9uU3RyaW5nfScgdHlwZSBhc3NlcnRpb24gd2hlbiBkZXJpdmVkLi4uYCk7XG5cbiAgICBjb25zdCB0eXBlVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVR5cGUobG9jYWxDb250ZXh0KTtcblxuICAgIGlmICh0eXBlVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IHRlcm1WZXJpZmllZCA9IHRoaXMudGVybS52ZXJpZnkobG9jYWxDb250ZXh0LCAoKSA9PiB7XG4gICAgICAgIGxldCB2ZXJpZmllZEFoZWFkO1xuXG4gICAgICAgIGNvbnN0IHRlcm1UeXBlID0gdGhpcy50ZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgdHlwZUVxdWFsVG9PclN1cGVyVHlwZU9mVGVybVR5cGUgPSB0aGlzLnR5cGUuaXNFcXVhbFRvT3JTdXBlclR5cGVPZih0ZXJtVHlwZSk7XG5cbiAgICAgICAgdmVyaWZpZWRBaGVhZCA9IHR5cGVFcXVhbFRvT3JTdXBlclR5cGVPZlRlcm1UeXBlOyAvLy9cblxuICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgIH0pO1xuXG4gICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gdGVybVZlcmlmaWVkOyAvLy9cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWRXaGVuRGVyaXZlZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dHlwZUFzc2VydGlvblN0cmluZ30nIHR5cGUgYXNzZXJ0aW9uIHdoZW4gZGVyaXZlZC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVHlwZUFzc2VydGlvbk5vZGUodHlwZUFzc2VydGlvbk5vZGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGNvbnN0IHsgVGVybSwgVHlwZSB9ID0gc2hpbSxcbiAgICAgICAgICB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkodHlwZUFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgIHR5cGVOb2RlID0gdHlwZU5vZGVRdWVyeSh0eXBlQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgdmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkodGVybU5vZGUpLFxuICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICB0eXBlID0gVHlwZS5mcm9tVHlwZU5vZGUodHlwZU5vZGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tVGVybUFuZFR5cGUodGVybSwgdHlwZSksXG4gICAgICAgICAgdHlwZUFzc2VydGlvbiA9IG5ldyBUeXBlQXNzZXJ0aW9uKHN0cmluZywgdGVybSwgdHlwZSwgdmFyaWFibGUpO1xuXG4gICAgcmV0dXJuIHR5cGVBc3NlcnRpb247XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaW5nRnJvbVRlcm1BbmRUeXBlKHRlcm0sIHR5cGUpIHtcbiAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgIHR5cGVOYW1lID0gdHlwZS5nZXROYW1lKCksXG4gICAgICAgIHN0cmluZyA9IGAke3Rlcm1TdHJpbmd9OiR7dHlwZU5hbWV9YDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbIlR5cGVBc3NlcnRpb24iLCJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidHlwZU5vZGVRdWVyeSIsInZhcmlhYmxlTm9kZVF1ZXJ5Iiwic3RyaW5nIiwidGVybSIsInR5cGUiLCJ2YXJpYWJsZSIsImdldFN0cmluZyIsImdldFRlcm0iLCJnZXRUeXBlIiwiZ2V0VmFyaWFibGUiLCJ2ZXJpZnkiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsImxvY2FsQ29udGV4dCIsInZlcmlmaWVkIiwidmVyaWZpZWRXaGVuU3RhdGVkIiwidmVyaWZ5V2hlblN0YXRlZCIsInZlcmlmaWVkV2hlbkRlcml2ZWQiLCJ2ZXJpZnlXaGVuRGVyaXZlZCIsInZlcmlmeVR5cGUiLCJ0eXBlVmVyaWZpZWQiLCJvYmplY3RUeXBlIiwidHlwZU5hbWUiLCJnZXROYW1lIiwidHJhY2UiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJkZWJ1ZyIsInR5cGVBc3NlcnRpb25TdHJpbmciLCJ0ZXJtVmVyaWZpZWQiLCJ2ZXJpZmllZEFoZWFkIiwidGVybVR5cGUiLCJ0eXBlRXF1YWxUb09yU3VwZXJUeXBlT2ZUZXJtVHlwZSIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwic2V0VHlwZSIsInZhcmlhYmxlQXNzaWdubWVudCIsIlZhcmlhYmxlQXNzaWdubWVudCIsImZyb21WYXJpYWJsZSIsImFzc2lnbm1lbnQiLCJwdXNoIiwiaXNFcXVhbFRvT3JTdXBlclR5cGVPZiIsImZyb21UeXBlQXNzZXJ0aW9uTm9kZSIsInR5cGVBc3NlcnRpb25Ob2RlIiwiVGVybSIsInNoaW0iLCJUeXBlIiwidGVybU5vZGUiLCJ0eXBlTm9kZSIsInZhcmlhYmxlTm9kZSIsImZyb21UZXJtTm9kZSIsImZyb21UeXBlTm9kZSIsIlZhcmlhYmxlIiwiZnJvbVZhcmlhYmxlTm9kZSIsInN0cmluZ0Zyb21UZXJtQW5kVHlwZSIsInR5cGVBc3NlcnRpb24iLCJ0ZXJtU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWFxQkE7OzsyREFYSjsrREFDSTtnRUFDVTtxQkFFTDtvQkFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6QixJQUFNQyxnQkFBZ0JDLElBQUFBLGdCQUFTLEVBQUMsd0JBQzFCQyxnQkFBZ0JELElBQUFBLGdCQUFTLEVBQUMsd0JBQzFCRSxvQkFBb0JGLElBQUFBLGdCQUFTLEVBQUM7QUFFckIsSUFBQSxBQUFNRiw4QkFBTjthQUFNQSxjQUNQSyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxRQUFRO2dDQURyQlI7UUFFakIsSUFBSSxDQUFDSyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxRQUFRLEdBQUdBOztrQkFMQ1I7O1lBUW5CUyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLE1BQU07WUFDcEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLElBQUk7WUFDbEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLElBQUk7WUFDbEI7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