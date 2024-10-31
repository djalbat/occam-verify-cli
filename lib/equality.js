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
                var rightTermNode = this.rightTerm.getNode(), leftTermNodeMatchesRightTermNode = this.leftTerm.matchTermNode(rightTermNode), reflexive = leftTermNodeMatchesRightTermNode; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lcXVhbGl0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuaW1wb3J0IEVxdWFsaXR5QXNzaWdubWVudCBmcm9tIFwiLi9hc3NpZ25tZW50L2VxdWFsaXR5XCI7XG5pbXBvcnQgVmFyaWFibGVBc3NpZ25tZW50IGZyb20gXCIuL2Fzc2lnbm1lbnQvdmFyaWFibGVcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyB1bmlmeUVxdWFsaXR5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3VuaWZpY2F0aW9uXCI7XG5cbmNvbnN0IGVxdWFsaXR5Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9lcXVhbGl0eVwiKSxcbiAgICAgIHZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3Rlcm0vdmFyaWFibGUhXCIpLFxuICAgICAgbGVmdFRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZXF1YWxpdHkvdGVybVswXVwiKSxcbiAgICAgIHJpZ2h0VGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9lcXVhbGl0eS90ZXJtWzFdXCIpO1xuXG5jbGFzcyBFcXVhbGl0eSB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZyxsZWZ0VGVybSwgcmlnaHRUZXJtKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5sZWZ0VGVybSA9IGxlZnRUZXJtO1xuICAgIHRoaXMucmlnaHRUZXJtID0gcmlnaHRUZXJtO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldExlZnRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnRUZXJtO1xuICB9XG5cbiAgZ2V0UmlnaHRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnJpZ2h0VGVybTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgbGV0IHR5cGU7XG5cbiAgICBjb25zdCBsZWZ0VGVybVR5cGUgPSB0aGlzLmxlZnRUZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICByaWdodFRlcm1UeXBlID0gdGhpcy5yaWdodFRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgIGxlZnRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlJpZ2h0VGVybVR5cGUgPSBsZWZ0VGVybVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YocmlnaHRUZXJtVHlwZSksXG4gICAgICAgICAgcmlnaHRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZkxlZnRUZXJtVHlwZSA9IHJpZ2h0VGVybVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YobGVmdFRlcm1UeXBlKTtcblxuICAgIGlmIChsZWZ0VGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZSaWdodFRlcm1UeXBlKSB7XG4gICAgICB0eXBlID0gbGVmdFRlcm1UeXBlOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKHJpZ2h0VGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZMZWZ0VGVybVR5cGUpIHtcbiAgICAgIHR5cGUgPSByaWdodFRlcm1UeXBlOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGlzUmVmbGV4aXZlKCkge1xuICAgIGNvbnN0IHJpZ2h0VGVybU5vZGUgPSB0aGlzLnJpZ2h0VGVybS5nZXROb2RlKCksXG4gICAgICAgICAgbGVmdFRlcm1Ob2RlTWF0Y2hlc1JpZ2h0VGVybU5vZGUgPSB0aGlzLmxlZnRUZXJtLm1hdGNoVGVybU5vZGUocmlnaHRUZXJtTm9kZSksXG4gICAgICAgICAgcmVmbGV4aXZlID0gbGVmdFRlcm1Ob2RlTWF0Y2hlc1JpZ2h0VGVybU5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHJlZmxleGl2ZTtcbiAgfVxuXG4gIGlzRXF1YWwoY29udGV4dCkge1xuICAgIGNvbnN0IGVxdWFsaXR5ID0gdGhpcywgIC8vL1xuICAgICAgICAgIGVxdWFsaXR5VW5pZmllZCA9IHVuaWZ5RXF1YWxpdHkoZXF1YWxpdHksIGNvbnRleHQpLFxuICAgICAgICAgIGVxdWFsID0gZXF1YWxpdHlVbmlmaWVkOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWw7XG4gIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgZXF1YWxpdHlTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkuLi5gKTtcblxuICAgIGNvbnN0IHRlcm1zVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVRlcm1zKGNvbnRleHQpO1xuXG4gICAgaWYgKHRlcm1zVmVyaWZpZWQpIHtcbiAgICAgIGxldCB2ZXJpZmllZFdoZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgdmVyaWZpZWRXaGVuU3RhdGVkID0gdGhpcy52ZXJpZnlXaGVuU3RhdGVkKGNvbnRleHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IHRoaXMudmVyaWZ5V2hlbkRlcml2ZWQoY29udGV4dCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh2ZXJpZmllZFdoZW5TdGF0ZWQgfHwgdmVyaWZpZWRXaGVuRGVyaXZlZCkge1xuICAgICAgICBpZiAoYXNzaWdubWVudHMgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCB7IFZhcmlhYmxlIH0gPSBzaGltLFxuICAgICAgICAgICAgICAgIHR5cGUgPSB0aGlzLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgICBsZWZ0VGVybU5vZGUgPSB0aGlzLmxlZnRUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICAgICAgICByaWdodFRlcm1Ob2RlID0gdGhpcy5yaWdodFRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgICAgIGxlZnRWYXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeShsZWZ0VGVybU5vZGUpLFxuICAgICAgICAgICAgICAgIHJpZ2h0VmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkocmlnaHRUZXJtTm9kZSksXG4gICAgICAgICAgICAgICAgbGVmdFZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUobGVmdFZhcmlhYmxlTm9kZSwgdHlwZSwgY29udGV4dCksXG4gICAgICAgICAgICAgICAgcmlnaHRWYXJpYWJsZSA9IFZhcmlhYmxlLmZyb21WYXJpYWJsZU5vZGVBbmRUeXBlKHJpZ2h0VmFyaWFibGVOb2RlLCB0eXBlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGxldCBhc3NpZ25tZW50O1xuXG4gICAgICAgICAgaWYgKGxlZnRWYXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgbGVmdFZhcmlhYmxlQXNzaWdubWVudCA9IFZhcmlhYmxlQXNzaWdubWVudC5mcm9tVmFyaWFibGUobGVmdFZhcmlhYmxlKTtcblxuICAgICAgICAgICAgYXNzaWdubWVudCA9IGxlZnRWYXJpYWJsZUFzc2lnbm1lbnQ7ICAvLy9cblxuICAgICAgICAgICAgYXNzaWdubWVudHMucHVzaChhc3NpZ25tZW50KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAocmlnaHRWYXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgcmlnaHRWYXJpYWJsZUFzc2lnbm1lbnQgPSBWYXJpYWJsZUFzc2lnbm1lbnQuZnJvbVZhcmlhYmxlKHJpZ2h0VmFyaWFibGUpO1xuXG4gICAgICAgICAgICBhc3NpZ25tZW50ID0gcmlnaHRWYXJpYWJsZUFzc2lnbm1lbnQ7ICAvLy9cblxuICAgICAgICAgICAgYXNzaWdubWVudHMucHVzaChhc3NpZ25tZW50KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBlcXVhbGl0eSA9IHRoaXMsICAvL1xuICAgICAgICAgICAgICAgIGVxdWFsaXR5QXNzaWdubWVudCA9IEVxdWFsaXR5QXNzaWdubWVudC5mcm9tRXF1YWxpdHkoZXF1YWxpdHkpO1xuXG4gICAgICAgICAgYXNzaWdubWVudCA9IGVxdWFsaXR5QXNzaWdubWVudDsgLy8vXG5cbiAgICAgICAgICBhc3NpZ25tZW50cy5wdXNoKGFzc2lnbm1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5VGVybXMoY29udGV4dCkge1xuICAgIGxldCB0ZXJtc1ZlcmlmaWVkO1xuXG4gICAgY29uc3QgZXF1YWxpdHlTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkncyB0ZXJtcy4uLmApO1xuXG4gICAgY29uc3QgbGVmdFRlcm1WZXJpZmllZCA9IHRoaXMubGVmdFRlcm0udmVyaWZ5KGNvbnRleHQsICgpID0+IHtcbiAgICAgIGxldCB2ZXJpZmllZEFoZWFkO1xuXG4gICAgICBjb25zdCByaWdodFRlcm1WZXJpZmllZCA9IHRoaXMucmlnaHRUZXJtLnZlcmlmeShjb250ZXh0LCAoKSA9PiB7XG4gICAgICAgIGxldCB2ZXJpZmllZEFoZWFkO1xuXG4gICAgICAgIGNvbnN0IGxlZnRUZXJtVHlwZSA9IHRoaXMubGVmdFRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICByaWdodFRlcm1UeXBlID0gdGhpcy5yaWdodFRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICBsZWZ0VGVybVR5cGVDb21wYXJhYmxlVG9SaWdodFRlcm1UeXBlID0gbGVmdFRlcm1UeXBlLmlzQ29tcGFyYWJsZVRvKHJpZ2h0VGVybVR5cGUpO1xuXG4gICAgICAgIHZlcmlmaWVkQWhlYWQgPSBsZWZ0VGVybVR5cGVDb21wYXJhYmxlVG9SaWdodFRlcm1UeXBlOyAgLy8vXG5cbiAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICB9KTtcblxuICAgICAgdmVyaWZpZWRBaGVhZCA9IHJpZ2h0VGVybVZlcmlmaWVkOyAvLy9cblxuICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgfSk7XG5cbiAgICB0ZXJtc1ZlcmlmaWVkID0gbGVmdFRlcm1WZXJpZmllZDsgLy8vXG5cbiAgICBpZiAodGVybXNWZXJpZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkncyB0ZXJtcy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybXNWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5TdGF0ZWQoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZFdoZW5TdGF0ZWQ7XG5cbiAgICBjb25zdCBlcXVhbGl0eVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBzdGF0ZWQgZXF1YWxpdHkuLi5gKTtcblxuICAgIHZlcmlmaWVkV2hlblN0YXRlZCA9IHRydWU7XG5cbiAgICBpZiAodmVyaWZpZWRXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBzdGF0ZWQgZXF1YWxpdHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuRGVyaXZlZDtcblxuICAgIGNvbnN0IGVxdWFsaXR5U3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGRlcml2ZWQgZXF1YWxpdHkuLi5gKTtcblxuICAgIGNvbnN0IGVxdWFsID0gdGhpcy5pc0VxdWFsKGNvbnRleHQpO1xuXG4gICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IGVxdWFsOyAgLy8vXG5cbiAgICBpZiAodmVyaWZpZWRXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZGVyaXZlZCBlcXVhbGl0eS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGVxdWFsaXR5ID0gbnVsbDtcblxuICAgIGNvbnN0IGVxdWFsaXR5Tm9kZSA9IGVxdWFsaXR5Tm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gICAgaWYgKGVxdWFsaXR5Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBUZXJtIH0gPSBzaGltLFxuICAgICAgICAgICAgbGVmdFRlcm1Ob2RlID0gbGVmdFRlcm1Ob2RlUXVlcnkoZXF1YWxpdHlOb2RlKSxcbiAgICAgICAgICAgIHJpZ2h0VGVybU5vZGUgPSByaWdodFRlcm1Ob2RlUXVlcnkoZXF1YWxpdHlOb2RlKSxcbiAgICAgICAgICAgIGxlZnRUZXJtID0gVGVybS5mcm9tVGVybU5vZGUobGVmdFRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHJpZ2h0VGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlKHJpZ2h0VGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IGVxdWFsaXR5Tm9kZSwgIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSk7XG5cbiAgICAgIGVxdWFsaXR5ID0gbmV3IEVxdWFsaXR5KHN0cmluZywgbGVmdFRlcm0sIHJpZ2h0VGVybSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsaXR5O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICBFcXVhbGl0eVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEVxdWFsaXR5OyJdLCJuYW1lcyI6WyJlcXVhbGl0eU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInZhcmlhYmxlTm9kZVF1ZXJ5IiwibGVmdFRlcm1Ob2RlUXVlcnkiLCJyaWdodFRlcm1Ob2RlUXVlcnkiLCJFcXVhbGl0eSIsInN0cmluZyIsImxlZnRUZXJtIiwicmlnaHRUZXJtIiwiZ2V0U3RyaW5nIiwiZ2V0TGVmdFRlcm0iLCJnZXRSaWdodFRlcm0iLCJnZXRUeXBlIiwidHlwZSIsImxlZnRUZXJtVHlwZSIsInJpZ2h0VGVybVR5cGUiLCJsZWZ0VGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZSaWdodFRlcm1UeXBlIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJyaWdodFRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mTGVmdFRlcm1UeXBlIiwiaXNSZWZsZXhpdmUiLCJyaWdodFRlcm1Ob2RlIiwiZ2V0Tm9kZSIsImxlZnRUZXJtTm9kZU1hdGNoZXNSaWdodFRlcm1Ob2RlIiwibWF0Y2hUZXJtTm9kZSIsInJlZmxleGl2ZSIsImlzRXF1YWwiLCJjb250ZXh0IiwiZXF1YWxpdHkiLCJlcXVhbGl0eVVuaWZpZWQiLCJ1bmlmeUVxdWFsaXR5IiwiZXF1YWwiLCJ2ZXJpZnkiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsInZlcmlmaWVkIiwiZXF1YWxpdHlTdHJpbmciLCJ0cmFjZSIsInRlcm1zVmVyaWZpZWQiLCJ2ZXJpZnlUZXJtcyIsInZlcmlmaWVkV2hlblN0YXRlZCIsInZlcmlmaWVkV2hlbkRlcml2ZWQiLCJ2ZXJpZnlXaGVuU3RhdGVkIiwidmVyaWZ5V2hlbkRlcml2ZWQiLCJWYXJpYWJsZSIsInNoaW0iLCJsZWZ0VGVybU5vZGUiLCJsZWZ0VmFyaWFibGVOb2RlIiwicmlnaHRWYXJpYWJsZU5vZGUiLCJsZWZ0VmFyaWFibGUiLCJmcm9tVmFyaWFibGVOb2RlQW5kVHlwZSIsInJpZ2h0VmFyaWFibGUiLCJhc3NpZ25tZW50IiwibGVmdFZhcmlhYmxlQXNzaWdubWVudCIsIlZhcmlhYmxlQXNzaWdubWVudCIsImZyb21WYXJpYWJsZSIsInB1c2giLCJyaWdodFZhcmlhYmxlQXNzaWdubWVudCIsImVxdWFsaXR5QXNzaWdubWVudCIsIkVxdWFsaXR5QXNzaWdubWVudCIsImZyb21FcXVhbGl0eSIsImRlYnVnIiwibGVmdFRlcm1WZXJpZmllZCIsInZlcmlmaWVkQWhlYWQiLCJyaWdodFRlcm1WZXJpZmllZCIsImxlZnRUZXJtVHlwZUNvbXBhcmFibGVUb1JpZ2h0VGVybVR5cGUiLCJpc0NvbXBhcmFibGVUbyIsImZyb21TdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsImVxdWFsaXR5Tm9kZSIsIlRlcm0iLCJmcm9tVGVybU5vZGUiLCJub2RlIiwibm9kZUFzU3RyaW5nIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFzT0E7OztlQUFBOzs7MkRBcE9pQjsrREFDYzsrREFDQTtxQkFFTDsyQkFDSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5QixJQUFNQSxvQkFBb0JDLElBQUFBLGdCQUFTLEVBQUMsd0JBQzlCQyxvQkFBb0JELElBQUFBLGdCQUFTLEVBQUMsb0JBQzlCRSxvQkFBb0JGLElBQUFBLGdCQUFTLEVBQUMsc0JBQzlCRyxxQkFBcUJILElBQUFBLGdCQUFTLEVBQUM7QUFFckMsSUFBQSxBQUFNSSx5QkFBTjthQUFNQSxTQUNRQyxNQUFNLEVBQUNDLFFBQVEsRUFBRUMsU0FBUztnQ0FEbENIO1FBRUYsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFB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