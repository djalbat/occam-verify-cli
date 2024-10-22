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
            value: function isEqual(localContext) {
                var leftTermNode = this.leftTerm.getNode(), rightTermNode = this.rightTerm.getNode(), equalityUnified = _equality.default.unify(leftTermNode, rightTermNode, localContext), equal = equalityUnified; ///
                return equal;
            }
        },
        {
            key: "verify",
            value: function verify(assignments, stated, localContext) {
                var verified = false;
                var equalityString = this.string; ///
                localContext.trace("Verifying the '".concat(equalityString, "' equality..."));
                var termsVerified = this.verifyTerms(localContext);
                if (termsVerified) {
                    var verifiedWhenStated = false, verifiedWhenDerived = false;
                    if (stated) {
                        verifiedWhenStated = this.verifyWhenStated(localContext);
                    } else {
                        verifiedWhenDerived = this.verifyWhenDerived(localContext);
                    }
                    if (verifiedWhenStated || verifiedWhenDerived) {
                        if (assignments !== null) {
                            var Variable = _shim.default.Variable, type = this.getType(), leftTermNode = this.leftTerm.getNode(), rightTermNode = this.rightTerm.getNode(), leftVariableNode = variableNodeQuery(leftTermNode), rightVariableNode = variableNodeQuery(rightTermNode), leftVariable = Variable.fromVariableNodeAndType(leftVariableNode, type, localContext), rightVariable = Variable.fromVariableNodeAndType(rightVariableNode, type, localContext);
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
                    localContext.debug("...verified the '".concat(equalityString, "' equality."));
                }
                return verified;
            }
        },
        {
            key: "verifyTerms",
            value: function verifyTerms(localContext) {
                var _this = this;
                var termsVerified;
                var equalityString = this.string; ///
                localContext.trace("Verifying the '".concat(equalityString, "' equality's terms..."));
                var leftTermVerified = this.leftTerm.verify(localContext, function() {
                    var verifiedAhead;
                    var rightTermVerified = _this.rightTerm.verify(localContext, function() {
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
                    localContext.debug("...verified the '".concat(equalityString, "' equality's terms."));
                }
                return termsVerified;
            }
        },
        {
            key: "verifyWhenStated",
            value: function verifyWhenStated(localContext) {
                var verifiedWhenStated;
                var equalityString = this.string; ///
                localContext.trace("Verifying the '".concat(equalityString, "' stated equality..."));
                verifiedWhenStated = true;
                if (verifiedWhenStated) {
                    localContext.debug("...verified the '".concat(equalityString, "' stated equality."));
                }
                return verifiedWhenStated;
            }
        },
        {
            key: "verifyWhenDerived",
            value: function verifyWhenDerived(localContext) {
                var verifiedWhenDerived;
                var equalityString = this.string; ///
                localContext.trace("Verifying the '".concat(equalityString, "' derived equality..."));
                var equal = this.isEqual(localContext);
                verifiedWhenDerived = equal; ///
                if (verifiedWhenDerived) {
                    localContext.debug("...verified the '".concat(equalityString, "' derived equality."));
                }
                return verifiedWhenDerived;
            }
        }
    ], [
        {
            key: "fromEqualityNode",
            value: function fromEqualityNode(equalityNode, localContext) {
                var equality = null;
                if (equalityNode !== null) {
                    var Term = _shim.default.Term, leftTermNode = leftTermNodeQuery(equalityNode), rightTermNode = rightTermNodeQuery(equalityNode), leftTerm = Term.fromTermNode(leftTermNode, localContext), rightTerm = Term.fromTermNode(rightTermNode, localContext), node = equalityNode, string = localContext.nodeAsString(node);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lcXVhbGl0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuaW1wb3J0IGVxdWFsaXR5VW5pZmllciBmcm9tIFwiLi91bmlmaWVyL2VxdWFsaXR5XCI7XG5pbXBvcnQgRXF1YWxpdHlBc3NpZ25tZW50IGZyb20gXCIuL2Fzc2lnbm1lbnQvZXF1YWxpdHlcIjtcbmltcG9ydCBWYXJpYWJsZUFzc2lnbm1lbnQgZnJvbSBcIi4vYXNzaWdubWVudC92YXJpYWJsZVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybS92YXJpYWJsZSFcIiksXG4gICAgICBsZWZ0VGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9lcXVhbGl0eS90ZXJtWzBdXCIpLFxuICAgICAgcmlnaHRUZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2VxdWFsaXR5L3Rlcm1bMV1cIik7XG5cbmNsYXNzIEVxdWFsaXR5IHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLGxlZnRUZXJtLCByaWdodFRlcm0pIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLmxlZnRUZXJtID0gbGVmdFRlcm07XG4gICAgdGhpcy5yaWdodFRlcm0gPSByaWdodFRlcm07XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0TGVmdFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFRlcm07XG4gIH1cblxuICBnZXRSaWdodFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMucmlnaHRUZXJtO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICBsZXQgdHlwZTtcblxuICAgIGNvbnN0IGxlZnRUZXJtVHlwZSA9IHRoaXMubGVmdFRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgIHJpZ2h0VGVybVR5cGUgPSB0aGlzLnJpZ2h0VGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgbGVmdFRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mUmlnaHRUZXJtVHlwZSA9IGxlZnRUZXJtVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZihyaWdodFRlcm1UeXBlKSxcbiAgICAgICAgICByaWdodFRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mTGVmdFRlcm1UeXBlID0gcmlnaHRUZXJtVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZihsZWZ0VGVybVR5cGUpO1xuXG4gICAgaWYgKGxlZnRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlJpZ2h0VGVybVR5cGUpIHtcbiAgICAgIHR5cGUgPSBsZWZ0VGVybVR5cGU7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAocmlnaHRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZkxlZnRUZXJtVHlwZSkge1xuICAgICAgdHlwZSA9IHJpZ2h0VGVybVR5cGU7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgaXNSZWZsZXhpdmUoKSB7XG4gICAgY29uc3QgcmlnaHRUZXJtTm9kZSA9IHRoaXMucmlnaHRUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICBsZWZ0VGVybU5vZGVNYXRjaGVzUmlnaHRUZXJtTm9kZSA9IHRoaXMubGVmdFRlcm0ubWF0Y2hUZXJtTm9kZShyaWdodFRlcm1Ob2RlKSxcbiAgICAgICAgICByZWZsZXhpdmUgPSBsZWZ0VGVybU5vZGVNYXRjaGVzUmlnaHRUZXJtTm9kZTsgLy8vXG5cbiAgICByZXR1cm4gcmVmbGV4aXZlO1xuICB9XG5cbiAgaXNFcXVhbChsb2NhbENvbnRleHQpIHtcbiAgICBjb25zdCBsZWZ0VGVybU5vZGUgPSB0aGlzLmxlZnRUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICByaWdodFRlcm1Ob2RlID0gdGhpcy5yaWdodFRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIGVxdWFsaXR5VW5pZmllZCA9IGVxdWFsaXR5VW5pZmllci51bmlmeShsZWZ0VGVybU5vZGUsIHJpZ2h0VGVybU5vZGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgZXF1YWwgPSBlcXVhbGl0eVVuaWZpZWQ7ICAvLy9cblxuICAgIHJldHVybiBlcXVhbDtcbiAgfVxuXG4gIHZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGVxdWFsaXR5U3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkuLi5gKTtcblxuICAgIGNvbnN0IHRlcm1zVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVRlcm1zKGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAodGVybXNWZXJpZmllZCkge1xuICAgICAgbGV0IHZlcmlmaWVkV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0aGlzLnZlcmlmeVdoZW5TdGF0ZWQobG9jYWxDb250ZXh0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB0aGlzLnZlcmlmeVdoZW5EZXJpdmVkKGxvY2FsQ29udGV4dCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh2ZXJpZmllZFdoZW5TdGF0ZWQgfHwgdmVyaWZpZWRXaGVuRGVyaXZlZCkge1xuICAgICAgICBpZiAoYXNzaWdubWVudHMgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCB7IFZhcmlhYmxlIH0gPSBzaGltLFxuICAgICAgICAgICAgICAgIHR5cGUgPSB0aGlzLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgICBsZWZ0VGVybU5vZGUgPSB0aGlzLmxlZnRUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICAgICAgICByaWdodFRlcm1Ob2RlID0gdGhpcy5yaWdodFRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgICAgIGxlZnRWYXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeShsZWZ0VGVybU5vZGUpLFxuICAgICAgICAgICAgICAgIHJpZ2h0VmFyaWFibGVOb2RlID0gdmFyaWFibGVOb2RlUXVlcnkocmlnaHRUZXJtTm9kZSksXG4gICAgICAgICAgICAgICAgbGVmdFZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUobGVmdFZhcmlhYmxlTm9kZSwgdHlwZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICAgICAgICByaWdodFZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUocmlnaHRWYXJpYWJsZU5vZGUsIHR5cGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgICBsZXQgYXNzaWdubWVudDtcblxuICAgICAgICAgIGlmIChsZWZ0VmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGxlZnRWYXJpYWJsZUFzc2lnbm1lbnQgPSBWYXJpYWJsZUFzc2lnbm1lbnQuZnJvbVZhcmlhYmxlKGxlZnRWYXJpYWJsZSk7XG5cbiAgICAgICAgICAgIGFzc2lnbm1lbnQgPSBsZWZ0VmFyaWFibGVBc3NpZ25tZW50OyAgLy8vXG5cbiAgICAgICAgICAgIGFzc2lnbm1lbnRzLnB1c2goYXNzaWdubWVudCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHJpZ2h0VmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0VmFyaWFibGVBc3NpZ25tZW50ID0gVmFyaWFibGVBc3NpZ25tZW50LmZyb21WYXJpYWJsZShyaWdodFZhcmlhYmxlKTtcblxuICAgICAgICAgICAgYXNzaWdubWVudCA9IHJpZ2h0VmFyaWFibGVBc3NpZ25tZW50OyAgLy8vXG5cbiAgICAgICAgICAgIGFzc2lnbm1lbnRzLnB1c2goYXNzaWdubWVudCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgZXF1YWxpdHkgPSB0aGlzLCAgLy9cbiAgICAgICAgICAgICAgICBlcXVhbGl0eUFzc2lnbm1lbnQgPSBFcXVhbGl0eUFzc2lnbm1lbnQuZnJvbUVxdWFsaXR5KGVxdWFsaXR5KTtcblxuICAgICAgICAgIGFzc2lnbm1lbnQgPSBlcXVhbGl0eUFzc2lnbm1lbnQ7IC8vL1xuXG4gICAgICAgICAgYXNzaWdubWVudHMucHVzaChhc3NpZ25tZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5VGVybXMobG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHRlcm1zVmVyaWZpZWQ7XG5cbiAgICBjb25zdCBlcXVhbGl0eVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5J3MgdGVybXMuLi5gKTtcblxuICAgIGNvbnN0IGxlZnRUZXJtVmVyaWZpZWQgPSB0aGlzLmxlZnRUZXJtLnZlcmlmeShsb2NhbENvbnRleHQsICgpID0+IHtcbiAgICAgIGxldCB2ZXJpZmllZEFoZWFkO1xuXG4gICAgICBjb25zdCByaWdodFRlcm1WZXJpZmllZCA9IHRoaXMucmlnaHRUZXJtLnZlcmlmeShsb2NhbENvbnRleHQsICgpID0+IHtcbiAgICAgICAgbGV0IHZlcmlmaWVkQWhlYWQ7XG5cbiAgICAgICAgY29uc3QgbGVmdFRlcm1UeXBlID0gdGhpcy5sZWZ0VGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgIHJpZ2h0VGVybVR5cGUgPSB0aGlzLnJpZ2h0VGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgIGxlZnRUZXJtVHlwZUNvbXBhcmFibGVUb1JpZ2h0VGVybVR5cGUgPSBsZWZ0VGVybVR5cGUuaXNDb21wYXJhYmxlVG8ocmlnaHRUZXJtVHlwZSk7XG5cbiAgICAgICAgdmVyaWZpZWRBaGVhZCA9IGxlZnRUZXJtVHlwZUNvbXBhcmFibGVUb1JpZ2h0VGVybVR5cGU7ICAvLy9cblxuICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgIH0pO1xuXG4gICAgICB2ZXJpZmllZEFoZWFkID0gcmlnaHRUZXJtVmVyaWZpZWQ7IC8vL1xuXG4gICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICB9KTtcblxuICAgIHRlcm1zVmVyaWZpZWQgPSBsZWZ0VGVybVZlcmlmaWVkOyAvLy9cblxuICAgIGlmICh0ZXJtc1ZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5J3MgdGVybXMuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1zVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuU3RhdGVkKGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZFdoZW5TdGF0ZWQ7XG5cbiAgICBjb25zdCBlcXVhbGl0eVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIHN0YXRlZCBlcXVhbGl0eS4uLmApO1xuXG4gICAgdmVyaWZpZWRXaGVuU3RhdGVkID0gdHJ1ZTtcblxuICAgIGlmICh2ZXJpZmllZFdoZW5TdGF0ZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgc3RhdGVkIGVxdWFsaXR5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZFdoZW5TdGF0ZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuRGVyaXZlZChsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuRGVyaXZlZDtcblxuICAgIGNvbnN0IGVxdWFsaXR5U3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZGVyaXZlZCBlcXVhbGl0eS4uLmApO1xuXG4gICAgY29uc3QgZXF1YWwgPSB0aGlzLmlzRXF1YWwobG9jYWxDb250ZXh0KTtcblxuICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSBlcXVhbDsgIC8vL1xuXG4gICAgaWYgKHZlcmlmaWVkV2hlbkRlcml2ZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZGVyaXZlZCBlcXVhbGl0eS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IGVxdWFsaXR5ID0gbnVsbDtcblxuICAgIGlmIChlcXVhbGl0eU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgVGVybSB9ID0gc2hpbSxcbiAgICAgICAgICAgIGxlZnRUZXJtTm9kZSA9IGxlZnRUZXJtTm9kZVF1ZXJ5KGVxdWFsaXR5Tm9kZSksXG4gICAgICAgICAgICByaWdodFRlcm1Ob2RlID0gcmlnaHRUZXJtTm9kZVF1ZXJ5KGVxdWFsaXR5Tm9kZSksXG4gICAgICAgICAgICBsZWZ0VGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlKGxlZnRUZXJtTm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICAgIHJpZ2h0VGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlKHJpZ2h0VGVybU5vZGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gZXF1YWxpdHlOb2RlLCAgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpO1xuXG4gICAgICBlcXVhbGl0eSA9IG5ldyBFcXVhbGl0eShzdHJpbmcsIGxlZnRUZXJtLCByaWdodFRlcm0pO1xuICAgIH1cblxuICAgIHJldHVybiBlcXVhbGl0eTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKHNoaW0sIHtcbiAgRXF1YWxpdHlcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBFcXVhbGl0eTsiXSwibmFtZXMiOlsidmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJsZWZ0VGVybU5vZGVRdWVyeSIsInJpZ2h0VGVybU5vZGVRdWVyeSIsIkVxdWFsaXR5Iiwic3RyaW5nIiwibGVmdFRlcm0iLCJyaWdodFRlcm0iLCJnZXRTdHJpbmciLCJnZXRMZWZ0VGVybSIsImdldFJpZ2h0VGVybSIsImdldFR5cGUiLCJ0eXBlIiwibGVmdFRlcm1UeXBlIiwicmlnaHRUZXJtVHlwZSIsImxlZnRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlJpZ2h0VGVybVR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsInJpZ2h0VGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZMZWZ0VGVybVR5cGUiLCJpc1JlZmxleGl2ZSIsInJpZ2h0VGVybU5vZGUiLCJnZXROb2RlIiwibGVmdFRlcm1Ob2RlTWF0Y2hlc1JpZ2h0VGVybU5vZGUiLCJtYXRjaFRlcm1Ob2RlIiwicmVmbGV4aXZlIiwiaXNFcXVhbCIsImxvY2FsQ29udGV4dCIsImxlZnRUZXJtTm9kZSIsImVxdWFsaXR5VW5pZmllZCIsImVxdWFsaXR5VW5pZmllciIsInVuaWZ5IiwiZXF1YWwiLCJ2ZXJpZnkiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsInZlcmlmaWVkIiwiZXF1YWxpdHlTdHJpbmciLCJ0cmFjZSIsInRlcm1zVmVyaWZpZWQiLCJ2ZXJpZnlUZXJtcyIsInZlcmlmaWVkV2hlblN0YXRlZCIsInZlcmlmaWVkV2hlbkRlcml2ZWQiLCJ2ZXJpZnlXaGVuU3RhdGVkIiwidmVyaWZ5V2hlbkRlcml2ZWQiLCJWYXJpYWJsZSIsInNoaW0iLCJsZWZ0VmFyaWFibGVOb2RlIiwicmlnaHRWYXJpYWJsZU5vZGUiLCJsZWZ0VmFyaWFibGUiLCJmcm9tVmFyaWFibGVOb2RlQW5kVHlwZSIsInJpZ2h0VmFyaWFibGUiLCJhc3NpZ25tZW50IiwibGVmdFZhcmlhYmxlQXNzaWdubWVudCIsIlZhcmlhYmxlQXNzaWdubWVudCIsImZyb21WYXJpYWJsZSIsInB1c2giLCJyaWdodFZhcmlhYmxlQXNzaWdubWVudCIsImVxdWFsaXR5IiwiZXF1YWxpdHlBc3NpZ25tZW50IiwiRXF1YWxpdHlBc3NpZ25tZW50IiwiZnJvbUVxdWFsaXR5IiwiZGVidWciLCJsZWZ0VGVybVZlcmlmaWVkIiwidmVyaWZpZWRBaGVhZCIsInJpZ2h0VGVybVZlcmlmaWVkIiwibGVmdFRlcm1UeXBlQ29tcGFyYWJsZVRvUmlnaHRUZXJtVHlwZSIsImlzQ29tcGFyYWJsZVRvIiwiZnJvbUVxdWFsaXR5Tm9kZSIsImVxdWFsaXR5Tm9kZSIsIlRlcm0iLCJmcm9tVGVybU5vZGUiLCJub2RlIiwibm9kZUFzU3RyaW5nIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFvT0E7OztlQUFBOzs7MkRBbE9pQjsrREFDVztnRUFDRzsrREFDQTtxQkFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNQSxvQkFBb0JDLElBQUFBLGdCQUFTLEVBQUMsb0JBQzlCQyxvQkFBb0JELElBQUFBLGdCQUFTLEVBQUMsc0JBQzlCRSxxQkFBcUJGLElBQUFBLGdCQUFTLEVBQUM7QUFFckMsSUFBQSxBQUFNRyx5QkFBTjthQUFNQSxTQUNRQyxNQUFNLEVBQUNDLFFBQVEsRUFBRUMsU0FBUztnQ0FE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