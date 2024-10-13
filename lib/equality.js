"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Equality;
    }
});
var _shim = /*#__PURE__*/ _interop_require_default(require("./shim"));
var _equality = /*#__PURE__*/ _interop_require_default(require("./unifier/equality"));
var _equality1 = /*#__PURE__*/ _interop_require_default(require("./assignment/equality"));
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
var leftTermNodeQuery = (0, _query.nodeQuery)("/equality/term[0]"), rightTermNodeQuery = (0, _query.nodeQuery)("/equality/term[1]");
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
                var verifiedWhenStated = false, verifiedWhenDerived = false;
                if (stated) {
                    verifiedWhenStated = this.verifyWhenStated(localContext);
                } else {
                    verifiedWhenDerived = this.verifyWhenDerived(localContext);
                }
                if (verifiedWhenStated || verifiedWhenDerived) {
                    if (assignments !== null) {
                        var equality = this, equalityAssignment = _equality1.default.fromEquality(equality), assignment = equalityAssignment; ///
                        assignments.push(assignment);
                    }
                    verified = true;
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
                var termsVerified = this.verifyTerms(localContext);
                verifiedWhenStated = termsVerified; ///
                if (verifiedWhenStated) {
                    localContext.debug("...verified the '".concat(equalityString, "' stated equality."));
                }
                return verifiedWhenStated;
            }
        },
        {
            key: "verifyWhenDerived",
            value: function verifyWhenDerived(localContext) {
                var verifiedWhenDerived = false;
                var equalityString = this.string; ///
                localContext.trace("Verifying the '".concat(equalityString, "' derived equality..."));
                var termsVerified = this.verifyTerms(localContext);
                if (termsVerified) {
                    var equal = this.isEqual(localContext);
                    verifiedWhenDerived = equal; ///
                }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lcXVhbGl0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuaW1wb3J0IGVxdWFsaXR5VW5pZmllciBmcm9tIFwiLi91bmlmaWVyL2VxdWFsaXR5XCI7XG5pbXBvcnQgRXF1YWxpdHlBc3NpZ25tZW50IGZyb20gXCIuL2Fzc2lnbm1lbnQvZXF1YWxpdHlcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IGxlZnRUZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2VxdWFsaXR5L3Rlcm1bMF1cIiksXG4gICAgICByaWdodFRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZXF1YWxpdHkvdGVybVsxXVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXF1YWxpdHkge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsbGVmdFRlcm0sIHJpZ2h0VGVybSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubGVmdFRlcm0gPSBsZWZ0VGVybTtcbiAgICB0aGlzLnJpZ2h0VGVybSA9IHJpZ2h0VGVybTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRMZWZ0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0VGVybTtcbiAgfVxuXG4gIGdldFJpZ2h0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy5yaWdodFRlcm07XG4gIH1cblxuICBpc1JlZmxleGl2ZSgpIHtcbiAgICBjb25zdCBsZWZ0VGVybU1hdGNoZXNSaWdodFRlcm0gPSB0aGlzLmxlZnRUZXJtLm1hdGNoKHRoaXMucmlnaHRUZXJtKSxcbiAgICAgICAgICByZWZsZXhpdmUgPSBsZWZ0VGVybU1hdGNoZXNSaWdodFRlcm07IC8vL1xuXG4gICAgcmV0dXJuIHJlZmxleGl2ZTtcbiAgfVxuXG4gIGlzRXF1YWwobG9jYWxDb250ZXh0KSB7XG4gICAgY29uc3QgbGVmdFRlcm1Ob2RlID0gdGhpcy5sZWZ0VGVybS5nZXROb2RlKCksXG4gICAgICAgICAgcmlnaHRUZXJtTm9kZSA9IHRoaXMucmlnaHRUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICBlcXVhbGl0eVVuaWZpZWQgPSBlcXVhbGl0eVVuaWZpZXIudW5pZnkobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgIGVxdWFsID0gZXF1YWxpdHlVbmlmaWVkOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWw7XG4gIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBlcXVhbGl0eVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5Li4uYCk7XG5cbiAgICBsZXQgdmVyaWZpZWRXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgIHZlcmlmaWVkV2hlblN0YXRlZCA9IHRoaXMudmVyaWZ5V2hlblN0YXRlZChsb2NhbENvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gdGhpcy52ZXJpZnlXaGVuRGVyaXZlZChsb2NhbENvbnRleHQpO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZFdoZW5TdGF0ZWQgfHwgdmVyaWZpZWRXaGVuRGVyaXZlZCkge1xuICAgICAgaWYgKGFzc2lnbm1lbnRzICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGVxdWFsaXR5ID0gdGhpcywgIC8vXG4gICAgICAgICAgICAgIGVxdWFsaXR5QXNzaWdubWVudCA9IEVxdWFsaXR5QXNzaWdubWVudC5mcm9tRXF1YWxpdHkoZXF1YWxpdHkpLFxuICAgICAgICAgICAgICBhc3NpZ25tZW50ID0gZXF1YWxpdHlBc3NpZ25tZW50OyAvLy9cblxuICAgICAgICBhc3NpZ25tZW50cy5wdXNoKGFzc2lnbm1lbnQpO1xuICAgICAgfVxuXG4gICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVRlcm1zKGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB0ZXJtc1ZlcmlmaWVkO1xuXG4gICAgY29uc3QgZXF1YWxpdHlTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eSdzIHRlcm1zLi4uYCk7XG5cbiAgICBjb25zdCBsZWZ0VGVybVZlcmlmaWVkID0gdGhpcy5sZWZ0VGVybS52ZXJpZnkobG9jYWxDb250ZXh0LCAoKSA9PiB7XG4gICAgICBsZXQgdmVyaWZpZWRBaGVhZDtcblxuICAgICAgY29uc3QgcmlnaHRUZXJtVmVyaWZpZWQgPSB0aGlzLnJpZ2h0VGVybS52ZXJpZnkobG9jYWxDb250ZXh0LCAoKSA9PiB7XG4gICAgICAgIGxldCB2ZXJpZmllZEFoZWFkO1xuXG4gICAgICAgIGNvbnN0IGxlZnRUZXJtVHlwZSA9IHRoaXMubGVmdFRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICByaWdodFRlcm1UeXBlID0gdGhpcy5yaWdodFRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICBsZWZ0VGVybVR5cGVDb21wYXJhYmxlVG9SaWdodFRlcm1UeXBlID0gbGVmdFRlcm1UeXBlLmlzQ29tcGFyYWJsZVRvKHJpZ2h0VGVybVR5cGUpO1xuXG4gICAgICAgIHZlcmlmaWVkQWhlYWQgPSBsZWZ0VGVybVR5cGVDb21wYXJhYmxlVG9SaWdodFRlcm1UeXBlOyAgLy8vXG5cbiAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICB9KTtcblxuICAgICAgdmVyaWZpZWRBaGVhZCA9IHJpZ2h0VGVybVZlcmlmaWVkOyAvLy9cblxuICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgfSk7XG5cbiAgICB0ZXJtc1ZlcmlmaWVkID0gbGVmdFRlcm1WZXJpZmllZDsgLy8vXG5cbiAgICBpZiAodGVybXNWZXJpZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eSdzIHRlcm1zLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtc1ZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlblN0YXRlZChsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuU3RhdGVkO1xuXG4gICAgY29uc3QgZXF1YWxpdHlTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBzdGF0ZWQgZXF1YWxpdHkuLi5gKTtcblxuICAgIGNvbnN0IHRlcm1zVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVRlcm1zKGxvY2FsQ29udGV4dCk7XG5cbiAgICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0ZXJtc1ZlcmlmaWVkOyAvLy9cblxuICAgIGlmICh2ZXJpZmllZFdoZW5TdGF0ZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgc3RhdGVkIGVxdWFsaXR5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZFdoZW5TdGF0ZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuRGVyaXZlZChsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgZXF1YWxpdHlTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBkZXJpdmVkIGVxdWFsaXR5Li4uYCk7XG5cbiAgICBjb25zdCB0ZXJtc1ZlcmlmaWVkID0gdGhpcy52ZXJpZnlUZXJtcyhsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKHRlcm1zVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IGVxdWFsID0gdGhpcy5pc0VxdWFsKGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSBlcXVhbDsgIC8vL1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZFdoZW5EZXJpdmVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGRlcml2ZWQgZXF1YWxpdHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkV2hlbkRlcml2ZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBlcXVhbGl0eSA9IG51bGw7XG5cbiAgICBpZiAoZXF1YWxpdHlOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFRlcm0gfSA9IHNoaW0sXG4gICAgICAgICAgICBsZWZ0VGVybU5vZGUgPSBsZWZ0VGVybU5vZGVRdWVyeShlcXVhbGl0eU5vZGUpLFxuICAgICAgICAgICAgcmlnaHRUZXJtTm9kZSA9IHJpZ2h0VGVybU5vZGVRdWVyeShlcXVhbGl0eU5vZGUpLFxuICAgICAgICAgICAgbGVmdFRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZShsZWZ0VGVybU5vZGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgICByaWdodFRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZShyaWdodFRlcm1Ob2RlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IGVxdWFsaXR5Tm9kZSwgIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKTtcblxuICAgICAgZXF1YWxpdHkgPSBuZXcgRXF1YWxpdHkoc3RyaW5nLCBsZWZ0VGVybSwgcmlnaHRUZXJtKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWxpdHk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJFcXVhbGl0eSIsImxlZnRUZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwicmlnaHRUZXJtTm9kZVF1ZXJ5Iiwic3RyaW5nIiwibGVmdFRlcm0iLCJyaWdodFRlcm0iLCJnZXRTdHJpbmciLCJnZXRMZWZ0VGVybSIsImdldFJpZ2h0VGVybSIsImlzUmVmbGV4aXZlIiwibGVmdFRlcm1NYXRjaGVzUmlnaHRUZXJtIiwibWF0Y2giLCJyZWZsZXhpdmUiLCJpc0VxdWFsIiwibG9jYWxDb250ZXh0IiwibGVmdFRlcm1Ob2RlIiwiZ2V0Tm9kZSIsInJpZ2h0VGVybU5vZGUiLCJlcXVhbGl0eVVuaWZpZWQiLCJlcXVhbGl0eVVuaWZpZXIiLCJ1bmlmeSIsImVxdWFsIiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJ2ZXJpZmllZCIsImVxdWFsaXR5U3RyaW5nIiwidHJhY2UiLCJ2ZXJpZmllZFdoZW5TdGF0ZWQiLCJ2ZXJpZmllZFdoZW5EZXJpdmVkIiwidmVyaWZ5V2hlblN0YXRlZCIsInZlcmlmeVdoZW5EZXJpdmVkIiwiZXF1YWxpdHkiLCJlcXVhbGl0eUFzc2lnbm1lbnQiLCJFcXVhbGl0eUFzc2lnbm1lbnQiLCJmcm9tRXF1YWxpdHkiLCJhc3NpZ25tZW50IiwicHVzaCIsImRlYnVnIiwidmVyaWZ5VGVybXMiLCJ0ZXJtc1ZlcmlmaWVkIiwibGVmdFRlcm1WZXJpZmllZCIsInZlcmlmaWVkQWhlYWQiLCJyaWdodFRlcm1WZXJpZmllZCIsImxlZnRUZXJtVHlwZSIsImdldFR5cGUiLCJyaWdodFRlcm1UeXBlIiwibGVmdFRlcm1UeXBlQ29tcGFyYWJsZVRvUmlnaHRUZXJtVHlwZSIsImlzQ29tcGFyYWJsZVRvIiwiZnJvbUVxdWFsaXR5Tm9kZSIsImVxdWFsaXR5Tm9kZSIsIlRlcm0iLCJzaGltIiwiZnJvbVRlcm1Ob2RlIiwibm9kZSIsIm5vZGVBc1N0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFXcUJBOzs7MkRBVEo7K0RBQ1c7Z0VBQ0c7cUJBRUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBTUMsb0JBQW9CQyxJQUFBQSxnQkFBUyxFQUFDLHNCQUM5QkMscUJBQXFCRCxJQUFBQSxnQkFBUyxFQUFDO0FBRXRCLElBQUEsQUFBTUYseUJBQU47YUFBTUEsU0FDUEksTUFBTSxFQUFDQyxRQUFRLEVBQUVDLFNBQVM7Z0NBRG5CTjtRQUVqQixJQUFJLENBQUNJLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBOztrQkFKQU47O1lBT25CTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFFBQVE7WUFDdEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFNBQVM7WUFDdkI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsMkJBQTJCLElBQUksQ0FBQ04sUUFBUSxDQUFDTyxLQUFLLENBQUMsSUFBSSxDQUFDTixTQUFTLEdBQzdETyxZQUFZRiwwQkFBMEIsR0FBRztnQkFFL0MsT0FBT0U7WUFDVDs7O1lBRUFDLEtBQUFBO21CQUFBQSxTQUFBQSxRQUFRQyxZQUFZO2dC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