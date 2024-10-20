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
                var leftTermMatchesRightTerm = this.leftTerm.match(this.rightTerm), reflexive = leftTermMatchesRightTerm; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lcXVhbGl0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuaW1wb3J0IGVxdWFsaXR5VW5pZmllciBmcm9tIFwiLi91bmlmaWVyL2VxdWFsaXR5XCI7XG5pbXBvcnQgRXF1YWxpdHlBc3NpZ25tZW50IGZyb20gXCIuL2Fzc2lnbm1lbnQvZXF1YWxpdHlcIjtcbmltcG9ydCBWYXJpYWJsZUFzc2lnbm1lbnQgZnJvbSBcIi4vYXNzaWdubWVudC92YXJpYWJsZVwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvdGVybS92YXJpYWJsZSFcIiksXG4gICAgICBsZWZ0VGVybU5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9lcXVhbGl0eS90ZXJtWzBdXCIpLFxuICAgICAgcmlnaHRUZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2VxdWFsaXR5L3Rlcm1bMV1cIik7XG5cbmNsYXNzIEVxdWFsaXR5IHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLGxlZnRUZXJtLCByaWdodFRlcm0pIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLmxlZnRUZXJtID0gbGVmdFRlcm07XG4gICAgdGhpcy5yaWdodFRlcm0gPSByaWdodFRlcm07XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0TGVmdFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFRlcm07XG4gIH1cblxuICBnZXRSaWdodFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMucmlnaHRUZXJtO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICBsZXQgdHlwZTtcblxuICAgIGNvbnN0IGxlZnRUZXJtVHlwZSA9IHRoaXMubGVmdFRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgIHJpZ2h0VGVybVR5cGUgPSB0aGlzLnJpZ2h0VGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgbGVmdFRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mUmlnaHRUZXJtVHlwZSA9IGxlZnRUZXJtVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZihyaWdodFRlcm1UeXBlKSxcbiAgICAgICAgICByaWdodFRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mTGVmdFRlcm1UeXBlID0gcmlnaHRUZXJtVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZihsZWZ0VGVybVR5cGUpO1xuXG4gICAgaWYgKGxlZnRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlJpZ2h0VGVybVR5cGUpIHtcbiAgICAgIHR5cGUgPSBsZWZ0VGVybVR5cGU7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAocmlnaHRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZkxlZnRUZXJtVHlwZSkge1xuICAgICAgdHlwZSA9IHJpZ2h0VGVybVR5cGU7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgaXNSZWZsZXhpdmUoKSB7XG4gICAgY29uc3QgbGVmdFRlcm1NYXRjaGVzUmlnaHRUZXJtID0gdGhpcy5sZWZ0VGVybS5tYXRjaCh0aGlzLnJpZ2h0VGVybSksXG4gICAgICAgICAgcmVmbGV4aXZlID0gbGVmdFRlcm1NYXRjaGVzUmlnaHRUZXJtOyAvLy9cblxuICAgIHJldHVybiByZWZsZXhpdmU7XG4gIH1cblxuICBpc0VxdWFsKGxvY2FsQ29udGV4dCkge1xuICAgIGNvbnN0IGxlZnRUZXJtTm9kZSA9IHRoaXMubGVmdFRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHJpZ2h0VGVybU5vZGUgPSB0aGlzLnJpZ2h0VGVybS5nZXROb2RlKCksXG4gICAgICAgICAgZXF1YWxpdHlVbmlmaWVkID0gZXF1YWxpdHlVbmlmaWVyLnVuaWZ5KGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICBlcXVhbCA9IGVxdWFsaXR5VW5pZmllZDsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsO1xuICB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgZXF1YWxpdHlTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eS4uLmApO1xuXG4gICAgY29uc3QgdGVybXNWZXJpZmllZCA9IHRoaXMudmVyaWZ5VGVybXMobG9jYWxDb250ZXh0KTtcblxuICAgIGlmICh0ZXJtc1ZlcmlmaWVkKSB7XG4gICAgICBsZXQgdmVyaWZpZWRXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICBpZiAoc3RhdGVkKSB7XG4gICAgICAgIHZlcmlmaWVkV2hlblN0YXRlZCA9IHRoaXMudmVyaWZ5V2hlblN0YXRlZChsb2NhbENvbnRleHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IHRoaXMudmVyaWZ5V2hlbkRlcml2ZWQobG9jYWxDb250ZXh0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHZlcmlmaWVkV2hlblN0YXRlZCB8fCB2ZXJpZmllZFdoZW5EZXJpdmVkKSB7XG4gICAgICAgIGlmIChhc3NpZ25tZW50cyAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHsgVmFyaWFibGUgfSA9IHNoaW0sXG4gICAgICAgICAgICAgICAgdHlwZSA9IHRoaXMuZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgIGxlZnRUZXJtTm9kZSA9IHRoaXMubGVmdFRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgICAgIHJpZ2h0VGVybU5vZGUgPSB0aGlzLnJpZ2h0VGVybS5nZXROb2RlKCksXG4gICAgICAgICAgICAgICAgbGVmdFZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KGxlZnRUZXJtTm9kZSksXG4gICAgICAgICAgICAgICAgcmlnaHRWYXJpYWJsZU5vZGUgPSB2YXJpYWJsZU5vZGVRdWVyeShyaWdodFRlcm1Ob2RlKSxcbiAgICAgICAgICAgICAgICBsZWZ0VmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVmFyaWFibGVOb2RlQW5kVHlwZShsZWZ0VmFyaWFibGVOb2RlLCB0eXBlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgICAgICAgIHJpZ2h0VmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVmFyaWFibGVOb2RlQW5kVHlwZShyaWdodFZhcmlhYmxlTm9kZSwgdHlwZSwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgICAgIGxldCBhc3NpZ25tZW50O1xuXG4gICAgICAgICAgaWYgKGxlZnRWYXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgbGVmdFZhcmlhYmxlQXNzaWdubWVudCA9IFZhcmlhYmxlQXNzaWdubWVudC5mcm9tVmFyaWFibGUobGVmdFZhcmlhYmxlKTtcblxuICAgICAgICAgICAgYXNzaWdubWVudCA9IGxlZnRWYXJpYWJsZUFzc2lnbm1lbnQ7ICAvLy9cblxuICAgICAgICAgICAgYXNzaWdubWVudHMucHVzaChhc3NpZ25tZW50KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAocmlnaHRWYXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgcmlnaHRWYXJpYWJsZUFzc2lnbm1lbnQgPSBWYXJpYWJsZUFzc2lnbm1lbnQuZnJvbVZhcmlhYmxlKHJpZ2h0VmFyaWFibGUpO1xuXG4gICAgICAgICAgICBhc3NpZ25tZW50ID0gcmlnaHRWYXJpYWJsZUFzc2lnbm1lbnQ7ICAvLy9cblxuICAgICAgICAgICAgYXNzaWdubWVudHMucHVzaChhc3NpZ25tZW50KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBlcXVhbGl0eSA9IHRoaXMsICAvL1xuICAgICAgICAgICAgICAgIGVxdWFsaXR5QXNzaWdubWVudCA9IEVxdWFsaXR5QXNzaWdubWVudC5mcm9tRXF1YWxpdHkoZXF1YWxpdHkpO1xuXG4gICAgICAgICAgYXNzaWdubWVudCA9IGVxdWFsaXR5QXNzaWdubWVudDsgLy8vXG5cbiAgICAgICAgICBhc3NpZ25tZW50cy5wdXNoKGFzc2lnbm1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlUZXJtcyhsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdGVybXNWZXJpZmllZDtcblxuICAgIGNvbnN0IGVxdWFsaXR5U3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkncyB0ZXJtcy4uLmApO1xuXG4gICAgY29uc3QgbGVmdFRlcm1WZXJpZmllZCA9IHRoaXMubGVmdFRlcm0udmVyaWZ5KGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgbGV0IHZlcmlmaWVkQWhlYWQ7XG5cbiAgICAgIGNvbnN0IHJpZ2h0VGVybVZlcmlmaWVkID0gdGhpcy5yaWdodFRlcm0udmVyaWZ5KGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgICBsZXQgdmVyaWZpZWRBaGVhZDtcblxuICAgICAgICBjb25zdCBsZWZ0VGVybVR5cGUgPSB0aGlzLmxlZnRUZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgcmlnaHRUZXJtVHlwZSA9IHRoaXMucmlnaHRUZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgbGVmdFRlcm1UeXBlQ29tcGFyYWJsZVRvUmlnaHRUZXJtVHlwZSA9IGxlZnRUZXJtVHlwZS5pc0NvbXBhcmFibGVUbyhyaWdodFRlcm1UeXBlKTtcblxuICAgICAgICB2ZXJpZmllZEFoZWFkID0gbGVmdFRlcm1UeXBlQ29tcGFyYWJsZVRvUmlnaHRUZXJtVHlwZTsgIC8vL1xuXG4gICAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgICAgfSk7XG5cbiAgICAgIHZlcmlmaWVkQWhlYWQgPSByaWdodFRlcm1WZXJpZmllZDsgLy8vXG5cbiAgICAgIHJldHVybiB2ZXJpZmllZEFoZWFkO1xuICAgIH0pO1xuXG4gICAgdGVybXNWZXJpZmllZCA9IGxlZnRUZXJtVmVyaWZpZWQ7IC8vL1xuXG4gICAgaWYgKHRlcm1zVmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkncyB0ZXJtcy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybXNWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5TdGF0ZWQobG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkV2hlblN0YXRlZDtcblxuICAgIGNvbnN0IGVxdWFsaXR5U3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgc3RhdGVkIGVxdWFsaXR5Li4uYCk7XG5cbiAgICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHZlcmlmaWVkV2hlblN0YXRlZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBzdGF0ZWQgZXF1YWxpdHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5EZXJpdmVkKGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZFdoZW5EZXJpdmVkO1xuXG4gICAgY29uc3QgZXF1YWxpdHlTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBkZXJpdmVkIGVxdWFsaXR5Li4uYCk7XG5cbiAgICBjb25zdCBlcXVhbCA9IHRoaXMuaXNFcXVhbChsb2NhbENvbnRleHQpO1xuXG4gICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IGVxdWFsOyAgLy8vXG5cbiAgICBpZiAodmVyaWZpZWRXaGVuRGVyaXZlZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBkZXJpdmVkIGVxdWFsaXR5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZFdoZW5EZXJpdmVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21FcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgZXF1YWxpdHkgPSBudWxsO1xuXG4gICAgaWYgKGVxdWFsaXR5Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBUZXJtIH0gPSBzaGltLFxuICAgICAgICAgICAgbGVmdFRlcm1Ob2RlID0gbGVmdFRlcm1Ob2RlUXVlcnkoZXF1YWxpdHlOb2RlKSxcbiAgICAgICAgICAgIHJpZ2h0VGVybU5vZGUgPSByaWdodFRlcm1Ob2RlUXVlcnkoZXF1YWxpdHlOb2RlKSxcbiAgICAgICAgICAgIGxlZnRUZXJtID0gVGVybS5mcm9tVGVybU5vZGUobGVmdFRlcm1Ob2RlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgICAgcmlnaHRUZXJtID0gVGVybS5mcm9tVGVybU5vZGUocmlnaHRUZXJtTm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSBlcXVhbGl0eU5vZGUsICAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSk7XG5cbiAgICAgIGVxdWFsaXR5ID0gbmV3IEVxdWFsaXR5KHN0cmluZywgbGVmdFRlcm0sIHJpZ2h0VGVybSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsaXR5O1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICBFcXVhbGl0eVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEVxdWFsaXR5OyJdLCJuYW1lcyI6WyJ2YXJpYWJsZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImxlZnRUZXJtTm9kZVF1ZXJ5IiwicmlnaHRUZXJtTm9kZVF1ZXJ5IiwiRXF1YWxpdHkiLCJzdHJpbmciLCJsZWZ0VGVybSIsInJpZ2h0VGVybSIsImdldFN0cmluZyIsImdldExlZnRUZXJtIiwiZ2V0UmlnaHRUZXJtIiwiZ2V0VHlwZSIsInR5cGUiLCJsZWZ0VGVybVR5cGUiLCJyaWdodFRlcm1UeXBlIiwibGVmdFRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mUmlnaHRUZXJtVHlwZSIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwicmlnaHRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZkxlZnRUZXJtVHlwZSIsImlzUmVmbGV4aXZlIiwibGVmdFRlcm1NYXRjaGVzUmlnaHRUZXJtIiwibWF0Y2giLCJyZWZsZXhpdmUiLCJpc0VxdWFsIiwibG9jYWxDb250ZXh0IiwibGVmdFRlcm1Ob2RlIiwiZ2V0Tm9kZSIsInJpZ2h0VGVybU5vZGUiLCJlcXVhbGl0eVVuaWZpZWQiLCJlcXVhbGl0eVVuaWZpZXIiLCJ1bmlmeSIsImVxdWFsIiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJ2ZXJpZmllZCIsImVxdWFsaXR5U3RyaW5nIiwidHJhY2UiLCJ0ZXJtc1ZlcmlmaWVkIiwidmVyaWZ5VGVybXMiLCJ2ZXJpZmllZFdoZW5TdGF0ZWQiLCJ2ZXJpZmllZFdoZW5EZXJpdmVkIiwidmVyaWZ5V2hlblN0YXRlZCIsInZlcmlmeVdoZW5EZXJpdmVkIiwiVmFyaWFibGUiLCJzaGltIiwibGVmdFZhcmlhYmxlTm9kZSIsInJpZ2h0VmFyaWFibGVOb2RlIiwibGVmdFZhcmlhYmxlIiwiZnJvbVZhcmlhYmxlTm9kZUFuZFR5cGUiLCJyaWdodFZhcmlhYmxlIiwiYXNzaWdubWVudCIsImxlZnRWYXJpYWJsZUFzc2lnbm1lbnQiLCJWYXJpYWJsZUFzc2lnbm1lbnQiLCJmcm9tVmFyaWFibGUiLCJwdXNoIiwicmlnaHRWYXJpYWJsZUFzc2lnbm1lbnQiLCJlcXVhbGl0eSIsImVxdWFsaXR5QXNzaWdubWVudCIsIkVxdWFsaXR5QXNzaWdubWVudCIsImZyb21FcXVhbGl0eSIsImRlYnVnIiwibGVmdFRlcm1WZXJpZmllZCIsInZlcmlmaWVkQWhlYWQiLCJyaWdodFRlcm1WZXJpZmllZCIsImxlZnRUZXJtVHlwZUNvbXBhcmFibGVUb1JpZ2h0VGVybVR5cGUiLCJpc0NvbXBhcmFibGVUbyIsImZyb21FcXVhbGl0eU5vZGUiLCJlcXVhbGl0eU5vZGUiLCJUZXJtIiwiZnJvbVRlcm1Ob2RlIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBbU9BOzs7ZUFBQTs7OzJEQWpPaUI7K0RBQ1c7Z0VBQ0c7K0RBQ0E7cUJBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBTUEsb0JBQW9CQyxJQUFBQSxnQkFBUyxFQUFDLG9CQUM5QkMsb0JBQW9CRCxJQUFBQSxnQkFBUyxFQUFDLHNCQUM5QkUscUJBQXFCRixJQUFBQSxnQkFBUyxFQUFDO0FBRXJDLElBQUEsQUFBTUcseUJBQU47YUFBTUEsU0FDUUMsTUFBTSxFQUFDQyxRQUFRLEVBQUVDLFNBQVM7Z0NBRGxDSDtRQUVGLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLFNBQVMsR0FBR0E7O2tCQUpm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