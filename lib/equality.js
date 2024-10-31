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
var _equality = /*#__PURE__*/ _interop_require_default(require("./assignment/equality"));
var _variable = /*#__PURE__*/ _interop_require_default(require("./assignment/variable"));
var _query = require("./utilities/query");
var _unification = require("./utilities/unification");
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
var equalityNodeQuery = (0, _query.nodeQuery)("/statement/equality"), variableNodeQuery = (0, _query.nodeQuery)("/term/variable!"), leftTermNodeQuery = (0, _query.nodeQuery)("/equality/term[0]"), rightTermNodeQuery = (0, _query.nodeQuery)("/equality/term[1]");
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
                var leftTermString = this.leftTerm.getString(), rightTermString = this.rightTerm.getString(), reflexive = leftTermString === rightTermString;
                return reflexive;
            }
        },
        {
            key: "isEqual",
            value: function isEqual(context) {
                var equality = this, equalityUnified = (0, _unification.unifyEquality)(equality, context), equal = equalityUnified; ///
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
                            var equality = this, equalityAssignment = _equality.default.fromEquality(equality);
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
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode, context) {
                var equality = null;
                var equalityNode = equalityNodeQuery(statementNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lcXVhbGl0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuaW1wb3J0IEVxdWFsaXR5QXNzaWdubWVudCBmcm9tIFwiLi9hc3NpZ25tZW50L2VxdWFsaXR5XCI7XG5pbXBvcnQgVmFyaWFibGVBc3NpZ25tZW50IGZyb20gXCIuL2Fzc2lnbm1lbnQvdmFyaWFibGVcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyB1bmlmeUVxdWFsaXR5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3VuaWZpY2F0aW9uXCI7XG5cbmNvbnN0IGVxdWFsaXR5Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9lcXVhbGl0eVwiKSxcbiAgICAgIHZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0vdmFyaWFibGUhXCIpLFxuICAgICAgbGVmdFRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZXF1YWxpdHkvdGVybVswXVwiKSxcbiAgICAgIHJpZ2h0VGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9lcXVhbGl0eS90ZXJtWzFdXCIpO1xuXG5jbGFzcyBFcXVhbGl0eSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZyxsZWZ0VGVybSwgcmlnaHRUZXJtKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5sZWZ0VGVybSA9IGxlZnRUZXJtO1xuICAgIHRoaXMucmlnaHRUZXJtID0gcmlnaHRUZXJtO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldExlZnRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnRUZXJtO1xuICB9XG5cbiAgZ2V0UmlnaHRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnJpZ2h0VGVybTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgbGV0IHR5cGU7XG5cbiAgICBjb25zdCBsZWZ0VGVybVR5cGUgPSB0aGlzLmxlZnRUZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICByaWdodFRlcm1UeXBlID0gdGhpcy5yaWdodFRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgIGxlZnRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlJpZ2h0VGVybVR5cGUgPSBsZWZ0VGVybVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YocmlnaHRUZXJtVHlwZSksXG4gICAgICAgICAgcmlnaHRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZkxlZnRUZXJtVHlwZSA9IHJpZ2h0VGVybVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YobGVmdFRlcm1UeXBlKTtcblxuICAgIGlmIChsZWZ0VGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZSaWdodFRlcm1UeXBlKSB7XG4gICAgICB0eXBlID0gbGVmdFRlcm1UeXBlOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKHJpZ2h0VGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZMZWZ0VGVybVR5cGUpIHtcbiAgICAgIHR5cGUgPSByaWdodFRlcm1UeXBlOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGlzUmVmbGV4aXZlKCkge1xuICAgIGNvbnN0IGxlZnRUZXJtU3RyaW5nID0gdGhpcy5sZWZ0VGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICByaWdodFRlcm1TdHJpbmcgPSB0aGlzLnJpZ2h0VGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICByZWZsZXhpdmUgPSAobGVmdFRlcm1TdHJpbmcgPT09IHJpZ2h0VGVybVN0cmluZyk7XG5cbiAgICByZXR1cm4gcmVmbGV4aXZlO1xuICB9XG5cbiAgaXNFcXVhbChjb250ZXh0KSB7XG4gICAgY29uc3QgZXF1YWxpdHkgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgZXF1YWxpdHlVbmlmaWVkID0gdW5pZnlFcXVhbGl0eShlcXVhbGl0eSwgY29udGV4dCksXG4gICAgICAgICAgZXF1YWwgPSBlcXVhbGl0eVVuaWZpZWQ7ICAvLy9cblxuICAgIHJldHVybiBlcXVhbDtcbiAgfVxuXG4gIHZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBlcXVhbGl0eVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eS4uLmApO1xuXG4gICAgY29uc3QgdGVybXNWZXJpZmllZCA9IHRoaXMudmVyaWZ5VGVybXMoY29udGV4dCk7XG5cbiAgICBpZiAodGVybXNWZXJpZmllZCkge1xuICAgICAgbGV0IHZlcmlmaWVkV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0aGlzLnZlcmlmeVdoZW5TdGF0ZWQoY29udGV4dCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gdGhpcy52ZXJpZnlXaGVuRGVyaXZlZChjb250ZXh0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHZlcmlmaWVkV2hlblN0YXRlZCB8fCB2ZXJpZmllZFdoZW5EZXJpdmVkKSB7XG4gICAgICAgIGlmIChhc3NpZ25tZW50cyAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHsgVmFyaWFibGUgfSA9IHNoaW0sXG4gICAgICAgICAgICAgICAgdHlwZSA9IHRoaXMuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgIGxlZnRUZXJtTm9kZSA9IHRoaXMubGVmdFRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgICAgIHJpZ2h0VGVybU5vZGUgPSB0aGlzLnJpZ2h0VGVybS5nZXROb2RlKCksXG4gICAgICAgICAgICAgICAgbGVmdFZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KGxlZnRUZXJtTm9kZSksXG4gICAgICAgICAgICAgICAgcmlnaHRWYXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeShyaWdodFRlcm1Ob2RlKSxcbiAgICAgICAgICAgICAgICBsZWZ0VmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVmFyaWFibGVOb2RlQW5kVHlwZShsZWZ0VmFyaWFibGVOb2RlLCB0eXBlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgICByaWdodFZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUocmlnaHRWYXJpYWJsZU5vZGUsIHR5cGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgbGV0IGFzc2lnbm1lbnQ7XG5cbiAgICAgICAgICBpZiAobGVmdFZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBsZWZ0VmFyaWFibGVBc3NpZ25tZW50ID0gVmFyaWFibGVBc3NpZ25tZW50LmZyb21WYXJpYWJsZShsZWZ0VmFyaWFibGUpO1xuXG4gICAgICAgICAgICBhc3NpZ25tZW50ID0gbGVmdFZhcmlhYmxlQXNzaWdubWVudDsgIC8vL1xuXG4gICAgICAgICAgICBhc3NpZ25tZW50cy5wdXNoKGFzc2lnbm1lbnQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChyaWdodFZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCByaWdodFZhcmlhYmxlQXNzaWdubWVudCA9IFZhcmlhYmxlQXNzaWdubWVudC5mcm9tVmFyaWFibGUocmlnaHRWYXJpYWJsZSk7XG5cbiAgICAgICAgICAgIGFzc2lnbm1lbnQgPSByaWdodFZhcmlhYmxlQXNzaWdubWVudDsgIC8vL1xuXG4gICAgICAgICAgICBhc3NpZ25tZW50cy5wdXNoKGFzc2lnbm1lbnQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGVxdWFsaXR5ID0gdGhpcywgIC8vXG4gICAgICAgICAgICAgICAgZXF1YWxpdHlBc3NpZ25tZW50ID0gRXF1YWxpdHlBc3NpZ25tZW50LmZyb21FcXVhbGl0eShlcXVhbGl0eSk7XG5cbiAgICAgICAgICBhc3NpZ25tZW50ID0gZXF1YWxpdHlBc3NpZ25tZW50OyAvLy9cblxuICAgICAgICAgIGFzc2lnbm1lbnRzLnB1c2goYXNzaWdubWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlUZXJtcyhjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1zVmVyaWZpZWQ7XG5cbiAgICBjb25zdCBlcXVhbGl0eVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eSdzIHRlcm1zLi4uYCk7XG5cbiAgICBjb25zdCBsZWZ0VGVybVZlcmlmaWVkID0gdGhpcy5sZWZ0VGVybS52ZXJpZnkoY29udGV4dCwgKCkgPT4ge1xuICAgICAgbGV0IHZlcmlmaWVkQWhlYWQ7XG5cbiAgICAgIGNvbnN0IHJpZ2h0VGVybVZlcmlmaWVkID0gdGhpcy5yaWdodFRlcm0udmVyaWZ5KGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgbGV0IHZlcmlmaWVkQWhlYWQ7XG5cbiAgICAgICAgY29uc3QgbGVmdFRlcm1UeXBlID0gdGhpcy5sZWZ0VGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgIHJpZ2h0VGVybVR5cGUgPSB0aGlzLnJpZ2h0VGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgIGxlZnRUZXJtVHlwZUNvbXBhcmFibGVUb1JpZ2h0VGVybVR5cGUgPSBsZWZ0VGVybVR5cGUuaXNDb21wYXJhYmxlVG8ocmlnaHRUZXJtVHlwZSk7XG5cbiAgICAgICAgdmVyaWZpZWRBaGVhZCA9IGxlZnRUZXJtVHlwZUNvbXBhcmFibGVUb1JpZ2h0VGVybVR5cGU7ICAvLy9cblxuICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgIH0pO1xuXG4gICAgICB2ZXJpZmllZEFoZWFkID0gcmlnaHRUZXJtVmVyaWZpZWQ7IC8vL1xuXG4gICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICB9KTtcblxuICAgIHRlcm1zVmVyaWZpZWQgPSBsZWZ0VGVybVZlcmlmaWVkOyAvLy9cblxuICAgIGlmICh0ZXJtc1ZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eSdzIHRlcm1zLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtc1ZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlblN0YXRlZChjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkV2hlblN0YXRlZDtcblxuICAgIGNvbnN0IGVxdWFsaXR5U3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIHN0YXRlZCBlcXVhbGl0eS4uLmApO1xuXG4gICAgdmVyaWZpZWRXaGVuU3RhdGVkID0gdHJ1ZTtcblxuICAgIGlmICh2ZXJpZmllZFdoZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIHN0YXRlZCBlcXVhbGl0eS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlbkRlcml2ZWQoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZFdoZW5EZXJpdmVkO1xuXG4gICAgY29uc3QgZXF1YWxpdHlTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZGVyaXZlZCBlcXVhbGl0eS4uLmApO1xuXG4gICAgY29uc3QgZXF1YWwgPSB0aGlzLmlzRXF1YWwoY29udGV4dCk7XG5cbiAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gZXF1YWw7ICAvLy9cblxuICAgIGlmICh2ZXJpZmllZFdoZW5EZXJpdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBkZXJpdmVkIGVxdWFsaXR5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZFdoZW5EZXJpdmVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgZXF1YWxpdHkgPSBudWxsO1xuXG4gICAgY29uc3QgZXF1YWxpdHlOb2RlID0gZXF1YWxpdHlOb2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBpZiAoZXF1YWxpdHlOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFRlcm0gfSA9IHNoaW0sXG4gICAgICAgICAgICBsZWZ0VGVybU5vZGUgPSBsZWZ0VGVybU5vZGVRdWVyeShlcXVhbGl0eU5vZGUpLFxuICAgICAgICAgICAgcmlnaHRUZXJtTm9kZSA9IHJpZ2h0VGVybU5vZGVRdWVyeShlcXVhbGl0eU5vZGUpLFxuICAgICAgICAgICAgbGVmdFRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZShsZWZ0VGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgcmlnaHRUZXJtID0gVGVybS5mcm9tVGVybU5vZGUocmlnaHRUZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gZXF1YWxpdHlOb2RlLCAgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKTtcblxuICAgICAgZXF1YWxpdHkgPSBuZXcgRXF1YWxpdHkoc3RyaW5nLCBsZWZ0VGVybSwgcmlnaHRUZXJtKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWxpdHk7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihzaGltLCB7XG4gIEVxdWFsaXR5XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgRXF1YWxpdHk7Il0sIm5hbWVzIjpbImVxdWFsaXR5Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidmFyaWFibGVOb2RlUXVlcnkiLCJsZWZ0VGVybU5vZGVRdWVyeSIsInJpZ2h0VGVybU5vZGVRdWVyeSIsIkVxdWFsaXR5Iiwic3RyaW5nIiwibGVmdFRlcm0iLCJyaWdodFRlcm0iLCJnZXRTdHJpbmciLCJnZXRMZWZ0VGVybSIsImdldFJpZ2h0VGVybSIsImdldFR5cGUiLCJ0eXBlIiwibGVmdFRlcm1UeXBlIiwicmlnaHRUZXJtVHlwZSIsImxlZnRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlJpZ2h0VGVybVR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsInJpZ2h0VGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZMZWZ0VGVybVR5cGUiLCJpc1JlZmxleGl2ZSIsImxlZnRUZXJtU3RyaW5nIiwicmlnaHRUZXJtU3RyaW5nIiwicmVmbGV4aXZlIiwiaXNFcXVhbCIsImNvbnRleHQiLCJlcXVhbGl0eSIsImVxdWFsaXR5VW5pZmllZCIsInVuaWZ5RXF1YWxpdHkiLCJlcXVhbCIsInZlcmlmeSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwidmVyaWZpZWQiLCJlcXVhbGl0eVN0cmluZyIsInRyYWNlIiwidGVybXNWZXJpZmllZCIsInZlcmlmeVRlcm1zIiwidmVyaWZpZWRXaGVuU3RhdGVkIiwidmVyaWZpZWRXaGVuRGVyaXZlZCIsInZlcmlmeVdoZW5TdGF0ZWQiLCJ2ZXJpZnlXaGVuRGVyaXZlZCIsIlZhcmlhYmxlIiwic2hpbSIsImxlZnRUZXJtTm9kZSIsImdldE5vZGUiLCJyaWdodFRlcm1Ob2RlIiwibGVmdFZhcmlhYmxlTm9kZSIsInJpZ2h0VmFyaWFibGVOb2RlIiwibGVmdFZhcmlhYmxlIiwiZnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUiLCJyaWdodFZhcmlhYmxlIiwiYXNzaWdubWVudCIsImxlZnRWYXJpYWJsZUFzc2lnbm1lbnQiLCJWYXJpYWJsZUFzc2lnbm1lbnQiLCJmcm9tVmFyaWFibGUiLCJwdXNoIiwicmlnaHRWYXJpYWJsZUFzc2lnbm1lbnQiLCJlcXVhbGl0eUFzc2lnbm1lbnQiLCJFcXVhbGl0eUFzc2lnbm1lbnQiLCJmcm9tRXF1YWxpdHkiLCJkZWJ1ZyIsImxlZnRUZXJtVmVyaWZpZWQiLCJ2ZXJpZmllZEFoZWFkIiwicmlnaHRUZXJtVmVyaWZpZWQiLCJsZWZ0VGVybVR5cGVDb21wYXJhYmxlVG9SaWdodFRlcm1UeXBlIiwiaXNDb21wYXJhYmxlVG8iLCJmcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJlcXVhbGl0eU5vZGUiLCJUZXJtIiwiZnJvbVRlcm1Ob2RlIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBc09BOzs7ZUFBQTs7OzJEQXBPaUI7K0RBQ2M7K0RBQ0E7cUJBRUw7MkJBQ0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUIsSUFBTUEsb0JBQW9CQyxJQUFBQSxnQkFBUyxFQUFDLHdCQUM5QkMsb0JBQW9CRCxJQUFBQSxnQkFBUyxFQUFDLG9CQUM5QkUsb0JBQW9CRixJQUFBQSxnQkFBUyxFQUFDLHNCQUM5QkcscUJBQXFCSCxJQUFBQSxnQkFBUyxFQUFDO0FBRXJDLElBQUEsQUFBTUkseUJBQU47YUFBTUEsU0FDUUMsTUFBTSxFQUFDQyxRQUFRLEVBQUVDLFNBQVM7Z0NBRGxDSDtRQUVGLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLFNBQVMsR0FBR0E7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