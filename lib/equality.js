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
var _shim = /*#__PURE__*/ _interop_require_default(require("./shim"));
var _equality = /*#__PURE__*/ _interop_require_default(require("./unifier/equality"));
var _equality1 = /*#__PURE__*/ _interop_require_default(require("./assignment/equality"));
var _variable = /*#__PURE__*/ _interop_require_default(require("./assignment/variable"));
var _query = require("./utilities/query");
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
var variableNodeQuery = (0, _query.nodeQuery)("/term/variable!"), leftTermNodeQuery = (0, _query.nodeQuery)("/equality/term[0]"), rightTermNodeQuery = (0, _query.nodeQuery)("/equality/term[1]");
var Equality = /*#__PURE__*/ function() {
    function Equality(string, leftTerm, rightTerm) {
        _class_call_check(this, Equality);
        this.string = string;
        this.leftTerm = leftTerm;
        this.rightTerm = rightTerm;
    }
    _create_class(Equality, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getLeftTerm",
            value: function getLeftTerm() {
                return this.leftTerm;
            }
        },
        {
            key: "getRightTerm",
            value: function getRightTerm() {
                return this.rightTerm;
            }
        },
        {
            key: "getType",
            value: function getType() {
                var type;
                var leftTermType = this.leftTerm.getType(), rightTermType = this.rightTerm.getType(), leftTermTypeEqualToOrSubTypeOfRightTermType = leftTermType.isEqualToOrSubTypeOf(rightTermType), rightTermTypeEqualToOrSubTypeOfLeftTermType = rightTermType.isEqualToOrSubTypeOf(leftTermType);
                if (leftTermTypeEqualToOrSubTypeOfRightTermType) {
                    type = leftTermType; ///
                }
                if (rightTermTypeEqualToOrSubTypeOfLeftTermType) {
                    type = rightTermType; ///
                }
                return type;
            }
        },
        {
            key: "isReflexive",
            value: function isReflexive() {
                var rightTermNode = this.rightTerm.getNode(), leftTermNodeMatchesRightTermNode = this.leftTerm.matchTermNode(rightTermNode), reflexive = leftTermNodeMatchesRightTermNode; ///
                return reflexive;
            }
        },
        {
            key: "isEqual",
            value: function isEqual(context) {
                var leftTermNode = this.leftTerm.getNode(), rightTermNode = this.rightTerm.getNode(), equalityUnified = _equality.default.unify(leftTermNode, rightTermNode, context), equal = equalityUnified; ///
                return equal;
            }
        },
        {
            key: "verify",
            value: function verify(assignments, stated, context) {
                var verified = false;
                var equalityString = this.string; ///
                context.trace("Verifying the '".concat(equalityString, "' equality..."));
                var termsVerified = this.verifyTerms(context);
                if (termsVerified) {
                    var verifiedWhenStated = false, verifiedWhenDerived = false;
                    if (stated) {
                        verifiedWhenStated = this.verifyWhenStated(context);
                    } else {
                        verifiedWhenDerived = this.verifyWhenDerived(context);
                    }
                    if (verifiedWhenStated || verifiedWhenDerived) {
                        if (assignments !== null) {
                            var Variable = _shim.default.Variable, type = this.getType(), leftTermNode = this.leftTerm.getNode(), rightTermNode = this.rightTerm.getNode(), leftVariableNode = variableNodeQuery(leftTermNode), rightVariableNode = variableNodeQuery(rightTermNode), leftVariable = Variable.fromVariableNodeAndType(leftVariableNode, type, context), rightVariable = Variable.fromVariableNodeAndType(rightVariableNode, type, context);
                            var assignment;
                            if (leftVariable !== null) {
                                var leftVariableAssignment = _variable.default.fromVariable(leftVariable);
                                assignment = leftVariableAssignment; ///
                                assignments.push(assignment);
                            }
                            if (rightVariable !== null) {
                                var rightVariableAssignment = _variable.default.fromVariable(rightVariable);
                                assignment = rightVariableAssignment; ///
                                assignments.push(assignment);
                            }
                            var equality = this, equalityAssignment = _equality1.default.fromEquality(equality);
                            assignment = equalityAssignment; ///
                            assignments.push(assignment);
                        }
                        verified = true;
                    }
                }
                if (verified) {
                    context.debug("...verified the '".concat(equalityString, "' equality."));
                }
                return verified;
            }
        },
        {
            key: "verifyTerms",
            value: function verifyTerms(context) {
                var _this = this;
                var termsVerified;
                var equalityString = this.string; ///
                context.trace("Verifying the '".concat(equalityString, "' equality's terms..."));
                var leftTermVerified = this.leftTerm.verify(context, function() {
                    var verifiedAhead;
                    var rightTermVerified = _this.rightTerm.verify(context, function() {
                        var verifiedAhead;
                        var leftTermType = _this.leftTerm.getType(), rightTermType = _this.rightTerm.getType(), leftTermTypeComparableToRightTermType = leftTermType.isComparableTo(rightTermType);
                        verifiedAhead = leftTermTypeComparableToRightTermType; ///
                        return verifiedAhead;
                    });
                    verifiedAhead = rightTermVerified; ///
                    return verifiedAhead;
                });
                termsVerified = leftTermVerified; ///
                if (termsVerified) {
                    context.debug("...verified the '".concat(equalityString, "' equality's terms."));
                }
                return termsVerified;
            }
        },
        {
            key: "verifyWhenStated",
            value: function verifyWhenStated(context) {
                var verifiedWhenStated;
                var equalityString = this.string; ///
                context.trace("Verifying the '".concat(equalityString, "' stated equality..."));
                verifiedWhenStated = true;
                if (verifiedWhenStated) {
                    context.debug("...verified the '".concat(equalityString, "' stated equality."));
                }
                return verifiedWhenStated;
            }
        },
        {
            key: "verifyWhenDerived",
            value: function verifyWhenDerived(context) {
                var verifiedWhenDerived;
                var equalityString = this.string; ///
                context.trace("Verifying the '".concat(equalityString, "' derived equality..."));
                var equal = this.isEqual(context);
                verifiedWhenDerived = equal; ///
                if (verifiedWhenDerived) {
                    context.debug("...verified the '".concat(equalityString, "' derived equality."));
                }
                return verifiedWhenDerived;
            }
        }
    ], [
        {
            key: "fromEqualityNode",
            value: function fromEqualityNode(equalityNode, context) {
                var equality = null;
                if (equalityNode !== null) {
                    var Term = _shim.default.Term, leftTermNode = leftTermNodeQuery(equalityNode), rightTermNode = rightTermNodeQuery(equalityNode), leftTerm = Term.fromTermNode(leftTermNode, context), rightTerm = Term.fromTermNode(rightTermNode, context), node = equalityNode, string = context.nodeAsString(node);
                    equality = new Equality(string, leftTerm, rightTerm);
                }
                return equality;
            }
        }
    ]);
    return Equality;
}();
Object.assign(_shim.default, {
    Equality: Equality
});
var _default = Equality;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lcXVhbGl0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuaW1wb3J0IGVxdWFsaXR5VW5pZmllciBmcm9tIFwiLi91bmlmaWVyL2VxdWFsaXR5XCI7XG5pbXBvcnQgRXF1YWxpdHlBc3NpZ25tZW50IGZyb20gXCIuL2Fzc2lnbm1lbnQvZXF1YWxpdHlcIjtcbmltcG9ydCBWYXJpYWJsZUFzc2lnbm1lbnQgZnJvbSBcIi4vYXNzaWdubWVudC92YXJpYWJsZVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybS92YXJpYWJsZSFcIiksXG4gICAgICBsZWZ0VGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9lcXVhbGl0eS90ZXJtWzBdXCIpLFxuICAgICAgcmlnaHRUZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2VxdWFsaXR5L3Rlcm1bMV1cIik7XG5cbmNsYXNzIEVxdWFsaXR5IHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLGxlZnRUZXJtLCByaWdodFRlcm0pIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLmxlZnRUZXJtID0gbGVmdFRlcm07XG4gICAgdGhpcy5yaWdodFRlcm0gPSByaWdodFRlcm07XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0TGVmdFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFRlcm07XG4gIH1cblxuICBnZXRSaWdodFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMucmlnaHRUZXJtO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICBsZXQgdHlwZTtcblxuICAgIGNvbnN0IGxlZnRUZXJtVHlwZSA9IHRoaXMubGVmdFRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgIHJpZ2h0VGVybVR5cGUgPSB0aGlzLnJpZ2h0VGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgbGVmdFRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mUmlnaHRUZXJtVHlwZSA9IGxlZnRUZXJtVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZihyaWdodFRlcm1UeXBlKSxcbiAgICAgICAgICByaWdodFRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mTGVmdFRlcm1UeXBlID0gcmlnaHRUZXJtVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZihsZWZ0VGVybVR5cGUpO1xuXG4gICAgaWYgKGxlZnRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlJpZ2h0VGVybVR5cGUpIHtcbiAgICAgIHR5cGUgPSBsZWZ0VGVybVR5cGU7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAocmlnaHRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZkxlZnRUZXJtVHlwZSkge1xuICAgICAgdHlwZSA9IHJpZ2h0VGVybVR5cGU7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgaXNSZWZsZXhpdmUoKSB7XG4gICAgY29uc3QgcmlnaHRUZXJtTm9kZSA9IHRoaXMucmlnaHRUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICBsZWZ0VGVybU5vZGVNYXRjaGVzUmlnaHRUZXJtTm9kZSA9IHRoaXMubGVmdFRlcm0ubWF0Y2hUZXJtTm9kZShyaWdodFRlcm1Ob2RlKSxcbiAgICAgICAgICByZWZsZXhpdmUgPSBsZWZ0VGVybU5vZGVNYXRjaGVzUmlnaHRUZXJtTm9kZTsgLy8vXG5cbiAgICByZXR1cm4gcmVmbGV4aXZlO1xuICB9XG5cbiAgaXNFcXVhbChjb250ZXh0KSB7XG4gICAgY29uc3QgbGVmdFRlcm1Ob2RlID0gdGhpcy5sZWZ0VGVybS5nZXROb2RlKCksXG4gICAgICAgICAgcmlnaHRUZXJtTm9kZSA9IHRoaXMucmlnaHRUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICBlcXVhbGl0eVVuaWZpZWQgPSBlcXVhbGl0eVVuaWZpZXIudW5pZnkobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBlcXVhbCA9IGVxdWFsaXR5VW5pZmllZDsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsO1xuICB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGVxdWFsaXR5U3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5Li4uYCk7XG5cbiAgICBjb25zdCB0ZXJtc1ZlcmlmaWVkID0gdGhpcy52ZXJpZnlUZXJtcyhjb250ZXh0KTtcblxuICAgIGlmICh0ZXJtc1ZlcmlmaWVkKSB7XG4gICAgICBsZXQgdmVyaWZpZWRXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICBpZiAoc3RhdGVkKSB7XG4gICAgICAgIHZlcmlmaWVkV2hlblN0YXRlZCA9IHRoaXMudmVyaWZ5V2hlblN0YXRlZChjb250ZXh0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB0aGlzLnZlcmlmeVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICBpZiAodmVyaWZpZWRXaGVuU3RhdGVkIHx8IHZlcmlmaWVkV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgaWYgKGFzc2lnbm1lbnRzICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgeyBWYXJpYWJsZSB9ID0gc2hpbSxcbiAgICAgICAgICAgICAgICB0eXBlID0gdGhpcy5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgbGVmdFRlcm1Ob2RlID0gdGhpcy5sZWZ0VGVybS5nZXROb2RlKCksXG4gICAgICAgICAgICAgICAgcmlnaHRUZXJtTm9kZSA9IHRoaXMucmlnaHRUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICAgICAgICBsZWZ0VmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkobGVmdFRlcm1Ob2RlKSxcbiAgICAgICAgICAgICAgICByaWdodFZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KHJpZ2h0VGVybU5vZGUpLFxuICAgICAgICAgICAgICAgIGxlZnRWYXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYXJpYWJsZU5vZGVBbmRUeXBlKGxlZnRWYXJpYWJsZU5vZGUsIHR5cGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICAgIHJpZ2h0VmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVmFyaWFibGVOb2RlQW5kVHlwZShyaWdodFZhcmlhYmxlTm9kZSwgdHlwZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBsZXQgYXNzaWdubWVudDtcblxuICAgICAgICAgIGlmIChsZWZ0VmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGxlZnRWYXJpYWJsZUFzc2lnbm1lbnQgPSBWYXJpYWJsZUFzc2lnbm1lbnQuZnJvbVZhcmlhYmxlKGxlZnRWYXJpYWJsZSk7XG5cbiAgICAgICAgICAgIGFzc2lnbm1lbnQgPSBsZWZ0VmFyaWFibGVBc3NpZ25tZW50OyAgLy8vXG5cbiAgICAgICAgICAgIGFzc2lnbm1lbnRzLnB1c2goYXNzaWdubWVudCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHJpZ2h0VmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0VmFyaWFibGVBc3NpZ25tZW50ID0gVmFyaWFibGVBc3NpZ25tZW50LmZyb21WYXJpYWJsZShyaWdodFZhcmlhYmxlKTtcblxuICAgICAgICAgICAgYXNzaWdubWVudCA9IHJpZ2h0VmFyaWFibGVBc3NpZ25tZW50OyAgLy8vXG5cbiAgICAgICAgICAgIGFzc2lnbm1lbnRzLnB1c2goYXNzaWdubWVudCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgZXF1YWxpdHkgPSB0aGlzLCAgLy9cbiAgICAgICAgICAgICAgICBlcXVhbGl0eUFzc2lnbm1lbnQgPSBFcXVhbGl0eUFzc2lnbm1lbnQuZnJvbUVxdWFsaXR5KGVxdWFsaXR5KTtcblxuICAgICAgICAgIGFzc2lnbm1lbnQgPSBlcXVhbGl0eUFzc2lnbm1lbnQ7IC8vL1xuXG4gICAgICAgICAgYXNzaWdubWVudHMucHVzaChhc3NpZ25tZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVRlcm1zKGNvbnRleHQpIHtcbiAgICBsZXQgdGVybXNWZXJpZmllZDtcblxuICAgIGNvbnN0IGVxdWFsaXR5U3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5J3MgdGVybXMuLi5gKTtcblxuICAgIGNvbnN0IGxlZnRUZXJtVmVyaWZpZWQgPSB0aGlzLmxlZnRUZXJtLnZlcmlmeShjb250ZXh0LCAoKSA9PiB7XG4gICAgICBsZXQgdmVyaWZpZWRBaGVhZDtcblxuICAgICAgY29uc3QgcmlnaHRUZXJtVmVyaWZpZWQgPSB0aGlzLnJpZ2h0VGVybS52ZXJpZnkoY29udGV4dCwgKCkgPT4ge1xuICAgICAgICBsZXQgdmVyaWZpZWRBaGVhZDtcblxuICAgICAgICBjb25zdCBsZWZ0VGVybVR5cGUgPSB0aGlzLmxlZnRUZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgcmlnaHRUZXJtVHlwZSA9IHRoaXMucmlnaHRUZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgbGVmdFRlcm1UeXBlQ29tcGFyYWJsZVRvUmlnaHRUZXJtVHlwZSA9IGxlZnRUZXJtVHlwZS5pc0NvbXBhcmFibGVUbyhyaWdodFRlcm1UeXBlKTtcblxuICAgICAgICB2ZXJpZmllZEFoZWFkID0gbGVmdFRlcm1UeXBlQ29tcGFyYWJsZVRvUmlnaHRUZXJtVHlwZTsgIC8vL1xuXG4gICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgfSk7XG5cbiAgICAgIHZlcmlmaWVkQWhlYWQgPSByaWdodFRlcm1WZXJpZmllZDsgLy8vXG5cbiAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgIH0pO1xuXG4gICAgdGVybXNWZXJpZmllZCA9IGxlZnRUZXJtVmVyaWZpZWQ7IC8vL1xuXG4gICAgaWYgKHRlcm1zVmVyaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5J3MgdGVybXMuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1zVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuU3RhdGVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuU3RhdGVkO1xuXG4gICAgY29uc3QgZXF1YWxpdHlTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgc3RhdGVkIGVxdWFsaXR5Li4uYCk7XG5cbiAgICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHZlcmlmaWVkV2hlblN0YXRlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgc3RhdGVkIGVxdWFsaXR5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZFdoZW5TdGF0ZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuRGVyaXZlZChjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkV2hlbkRlcml2ZWQ7XG5cbiAgICBjb25zdCBlcXVhbGl0eVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBkZXJpdmVkIGVxdWFsaXR5Li4uYCk7XG5cbiAgICBjb25zdCBlcXVhbCA9IHRoaXMuaXNFcXVhbChjb250ZXh0KTtcblxuICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSBlcXVhbDsgIC8vL1xuXG4gICAgaWYgKHZlcmlmaWVkV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGRlcml2ZWQgZXF1YWxpdHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkV2hlbkRlcml2ZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgZXF1YWxpdHkgPSBudWxsO1xuXG4gICAgaWYgKGVxdWFsaXR5Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBUZXJtIH0gPSBzaGltLFxuICAgICAgICAgICAgbGVmdFRlcm1Ob2RlID0gbGVmdFRlcm1Ob2RlUXVlcnkoZXF1YWxpdHlOb2RlKSxcbiAgICAgICAgICAgIHJpZ2h0VGVybU5vZGUgPSByaWdodFRlcm1Ob2RlUXVlcnkoZXF1YWxpdHlOb2RlKSxcbiAgICAgICAgICAgIGxlZnRUZXJtID0gVGVybS5mcm9tVGVybU5vZGUobGVmdFRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHJpZ2h0VGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlKHJpZ2h0VGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IGVxdWFsaXR5Tm9kZSwgIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSk7XG5cbiAgICAgIGVxdWFsaXR5ID0gbmV3IEVxdWFsaXR5KHN0cmluZywgbGVmdFRlcm0sIHJpZ2h0VGVybSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsaXR5O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICBFcXVhbGl0eVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEVxdWFsaXR5OyJdLCJuYW1lcyI6WyJ2YXJpYWJsZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImxlZnRUZXJtTm9kZVF1ZXJ5IiwicmlnaHRUZXJtTm9kZVF1ZXJ5IiwiRXF1YWxpdHkiLCJzdHJpbmciLCJsZWZ0VGVybSIsInJpZ2h0VGVybSIsImdldFN0cmluZyIsImdldExlZnRUZXJtIiwiZ2V0UmlnaHRUZXJtIiwiZ2V0VHlwZSIsInR5cGUiLCJsZWZ0VGVybVR5cGUiLCJyaWdodFRlcm1UeXBlIiwibGVmdFRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mUmlnaHRUZXJtVHlwZSIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwicmlnaHRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZkxlZnRUZXJtVHlwZSIsImlzUmVmbGV4aXZlIiwicmlnaHRUZXJtTm9kZSIsImdldE5vZGUiLCJsZWZ0VGVybU5vZGVNYXRjaGVzUmlnaHRUZXJtTm9kZSIsIm1hdGNoVGVybU5vZGUiLCJyZWZsZXhpdmUiLCJpc0VxdWFsIiwiY29udGV4dCIsImxlZnRUZXJtTm9kZSIsImVxdWFsaXR5VW5pZmllZCIsImVxdWFsaXR5VW5pZmllciIsInVuaWZ5IiwiZXF1YWwiLCJ2ZXJpZnkiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsInZlcmlmaWVkIiwiZXF1YWxpdHlTdHJpbmciLCJ0cmFjZSIsInRlcm1zVmVyaWZpZWQiLCJ2ZXJpZnlUZXJtcyIsInZlcmlmaWVkV2hlblN0YXRlZCIsInZlcmlmaWVkV2hlbkRlcml2ZWQiLCJ2ZXJpZnlXaGVuU3RhdGVkIiwidmVyaWZ5V2hlbkRlcml2ZWQiLCJWYXJpYWJsZSIsInNoaW0iLCJsZWZ0VmFyaWFibGVOb2RlIiwicmlnaHRWYXJpYWJsZU5vZGUiLCJsZWZ0VmFyaWFibGUiLCJmcm9tVmFyaWFibGVOb2RlQW5kVHlwZSIsInJpZ2h0VmFyaWFibGUiLCJhc3NpZ25tZW50IiwibGVmdFZhcmlhYmxlQXNzaWdubWVudCIsIlZhcmlhYmxlQXNzaWdubWVudCIsImZyb21WYXJpYWJsZSIsInB1c2giLCJyaWdodFZhcmlhYmxlQXNzaWdubWVudCIsImVxdWFsaXR5IiwiZXF1YWxpdHlBc3NpZ25tZW50IiwiRXF1YWxpdHlBc3NpZ25tZW50IiwiZnJvbUVxdWFsaXR5IiwiZGVidWciLCJsZWZ0VGVybVZlcmlmaWVkIiwidmVyaWZpZWRBaGVhZCIsInJpZ2h0VGVybVZlcmlmaWVkIiwibGVmdFRlcm1UeXBlQ29tcGFyYWJsZVRvUmlnaHRUZXJtVHlwZSIsImlzQ29tcGFyYWJsZVRvIiwiZnJvbUVxdWFsaXR5Tm9kZSIsImVxdWFsaXR5Tm9kZSIsIlRlcm0iLCJmcm9tVGVybU5vZGUiLCJub2RlIiwibm9kZUFzU3RyaW5nIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFvT0E7OztlQUFBOzs7MkRBbE9pQjsrREFDVztnRUFDRzsrREFDQTtxQkFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNQSxvQkFBb0JDLElBQUFBLGdCQUFTLEVBQUMsb0JBQzlCQyxvQkFBb0JELElBQUFBLGdCQUFTLEVBQUMsc0JBQzlCRSxxQkFBcUJGLElBQUFBLGdCQUFTLEVBQUM7QUFFckMsSUFBQSxBQUFNRyx5QkFBTjthQUFNQSxTQUNRQyxNQUFNLEVBQUNDLFFBQVEsRUFBRUMsU0FBUztnQ0FEbENIO1FBRUYsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTs7a0JBSmZIOztZQU9KSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJ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