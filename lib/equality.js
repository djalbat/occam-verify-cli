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
                var verified;
                var equalityString = this.string; ///
                localContext.trace("Verifying the '".concat(equalityString, "' equality..."));
                if (stated) {
                    var verifiedWhenStated = this.verifyWhenStated(localContext);
                    verified = verifiedWhenStated; ///
                } else {
                    var verifiedWhenDerived = this.verifyWhenDerived(localContext);
                    verified = verifiedWhenDerived; ///
                }
                if (verified) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lcXVhbGl0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuaW1wb3J0IGVxdWFsaXR5VW5pZmllciBmcm9tIFwiLi91bmlmaWVyL2VxdWFsaXR5XCI7XG5pbXBvcnQgRXF1YWxpdHlBc3NpZ25tZW50IGZyb20gXCIuL2Fzc2lnbm1lbnQvZXF1YWxpdHlcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IGxlZnRUZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2VxdWFsaXR5L3Rlcm1bMF1cIiksXG4gICAgICByaWdodFRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZXF1YWxpdHkvdGVybVsxXVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXF1YWxpdHkge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsbGVmdFRlcm0sIHJpZ2h0VGVybSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubGVmdFRlcm0gPSBsZWZ0VGVybTtcbiAgICB0aGlzLnJpZ2h0VGVybSA9IHJpZ2h0VGVybTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRMZWZ0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0VGVybTtcbiAgfVxuXG4gIGdldFJpZ2h0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy5yaWdodFRlcm07XG4gIH1cblxuICBpc1JlZmxleGl2ZSgpIHtcbiAgICBjb25zdCBsZWZ0VGVybU1hdGNoZXNSaWdodFRlcm0gPSB0aGlzLmxlZnRUZXJtLm1hdGNoKHRoaXMucmlnaHRUZXJtKSxcbiAgICAgICAgICByZWZsZXhpdmUgPSBsZWZ0VGVybU1hdGNoZXNSaWdodFRlcm07IC8vL1xuXG4gICAgcmV0dXJuIHJlZmxleGl2ZTtcbiAgfVxuXG4gIGlzRXF1YWwobG9jYWxDb250ZXh0KSB7XG4gICAgY29uc3QgbGVmdFRlcm1Ob2RlID0gdGhpcy5sZWZ0VGVybS5nZXROb2RlKCksXG4gICAgICAgICAgcmlnaHRUZXJtTm9kZSA9IHRoaXMucmlnaHRUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICBlcXVhbGl0eVVuaWZpZWQgPSBlcXVhbGl0eVVuaWZpZXIudW5pZnkobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgIGVxdWFsID0gZXF1YWxpdHlVbmlmaWVkOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWw7XG4gIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkO1xuXG4gICAgY29uc3QgZXF1YWxpdHlTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eS4uLmApO1xuXG4gICAgaWYgKHN0YXRlZCkge1xuICAgICAgY29uc3QgdmVyaWZpZWRXaGVuU3RhdGVkID0gdGhpcy52ZXJpZnlXaGVuU3RhdGVkKGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIHZlcmlmaWVkID0gdmVyaWZpZWRXaGVuU3RhdGVkOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB0aGlzLnZlcmlmeVdoZW5EZXJpdmVkKGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIHZlcmlmaWVkID0gdmVyaWZpZWRXaGVuRGVyaXZlZDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBpZiAoYXNzaWdubWVudHMgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgZXF1YWxpdHkgPSB0aGlzLCAgLy9cbiAgICAgICAgICAgICAgZXF1YWxpdHlBc3NpZ25tZW50ID0gRXF1YWxpdHlBc3NpZ25tZW50LmZyb21FcXVhbGl0eShlcXVhbGl0eSksXG4gICAgICAgICAgICAgIGFzc2lnbm1lbnQgPSBlcXVhbGl0eUFzc2lnbm1lbnQ7IC8vL1xuXG4gICAgICAgIGFzc2lnbm1lbnRzLnB1c2goYXNzaWdubWVudCk7XG4gICAgICB9XG5cbiAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5VGVybXMobG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHRlcm1zVmVyaWZpZWQ7XG5cbiAgICBjb25zdCBlcXVhbGl0eVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5J3MgdGVybXMuLi5gKTtcblxuICAgIGNvbnN0IGxlZnRUZXJtVmVyaWZpZWQgPSB0aGlzLmxlZnRUZXJtLnZlcmlmeShsb2NhbENvbnRleHQsICgpID0+IHtcbiAgICAgIGxldCB2ZXJpZmllZEFoZWFkO1xuXG4gICAgICBjb25zdCByaWdodFRlcm1WZXJpZmllZCA9IHRoaXMucmlnaHRUZXJtLnZlcmlmeShsb2NhbENvbnRleHQsICgpID0+IHtcbiAgICAgICAgbGV0IHZlcmlmaWVkQWhlYWQ7XG5cbiAgICAgICAgY29uc3QgbGVmdFRlcm1UeXBlID0gdGhpcy5sZWZ0VGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgIHJpZ2h0VGVybVR5cGUgPSB0aGlzLnJpZ2h0VGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgIGxlZnRUZXJtVHlwZUNvbXBhcmFibGVUb1JpZ2h0VGVybVR5cGUgPSBsZWZ0VGVybVR5cGUuaXNDb21wYXJhYmxlVG8ocmlnaHRUZXJtVHlwZSk7XG5cbiAgICAgICAgdmVyaWZpZWRBaGVhZCA9IGxlZnRUZXJtVHlwZUNvbXBhcmFibGVUb1JpZ2h0VGVybVR5cGU7ICAvLy9cblxuICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgIH0pO1xuXG4gICAgICB2ZXJpZmllZEFoZWFkID0gcmlnaHRUZXJtVmVyaWZpZWQ7IC8vL1xuXG4gICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICB9KTtcblxuICAgIHRlcm1zVmVyaWZpZWQgPSBsZWZ0VGVybVZlcmlmaWVkOyAvLy9cblxuICAgIGlmICh0ZXJtc1ZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5J3MgdGVybXMuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1zVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuU3RhdGVkKGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZFdoZW5TdGF0ZWQ7XG5cbiAgICBjb25zdCBlcXVhbGl0eVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIHN0YXRlZCBlcXVhbGl0eS4uLmApO1xuXG4gICAgY29uc3QgdGVybXNWZXJpZmllZCA9IHRoaXMudmVyaWZ5VGVybXMobG9jYWxDb250ZXh0KTtcblxuICAgIHZlcmlmaWVkV2hlblN0YXRlZCA9IHRlcm1zVmVyaWZpZWQ7IC8vL1xuXG4gICAgaWYgKHZlcmlmaWVkV2hlblN0YXRlZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBzdGF0ZWQgZXF1YWxpdHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5EZXJpdmVkKGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZFdoZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBlcXVhbGl0eVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGRlcml2ZWQgZXF1YWxpdHkuLi5gKTtcblxuICAgIGNvbnN0IHRlcm1zVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVRlcm1zKGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAodGVybXNWZXJpZmllZCkge1xuICAgICAgY29uc3QgZXF1YWwgPSB0aGlzLmlzRXF1YWwobG9jYWxDb250ZXh0KTtcblxuICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IGVxdWFsOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkV2hlbkRlcml2ZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZGVyaXZlZCBlcXVhbGl0eS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IGVxdWFsaXR5ID0gbnVsbDtcblxuICAgIGlmIChlcXVhbGl0eU5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgVGVybSB9ID0gc2hpbSxcbiAgICAgICAgICAgIGxlZnRUZXJtTm9kZSA9IGxlZnRUZXJtTm9kZVF1ZXJ5KGVxdWFsaXR5Tm9kZSksXG4gICAgICAgICAgICByaWdodFRlcm1Ob2RlID0gcmlnaHRUZXJtTm9kZVF1ZXJ5KGVxdWFsaXR5Tm9kZSksXG4gICAgICAgICAgICBsZWZ0VGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlKGxlZnRUZXJtTm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICAgIHJpZ2h0VGVybSA9IFRlcm0uZnJvbVRlcm1Ob2RlKHJpZ2h0VGVybU5vZGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gZXF1YWxpdHlOb2RlLCAgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpO1xuXG4gICAgICBlcXVhbGl0eSA9IG5ldyBFcXVhbGl0eShzdHJpbmcsIGxlZnRUZXJtLCByaWdodFRlcm0pO1xuICAgIH1cblxuICAgIHJldHVybiBlcXVhbGl0eTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkVxdWFsaXR5IiwibGVmdFRlcm1Ob2RlUXVlcnkiLCJub2RlUXVlcnkiLCJyaWdodFRlcm1Ob2RlUXVlcnkiLCJzdHJpbmciLCJsZWZ0VGVybSIsInJpZ2h0VGVybSIsImdldFN0cmluZyIsImdldExlZnRUZXJtIiwiZ2V0UmlnaHRUZXJtIiwiaXNSZWZsZXhpdmUiLCJsZWZ0VGVybU1hdGNoZXNSaWdodFRlcm0iLCJtYXRjaCIsInJlZmxleGl2ZSIsImlzRXF1YWwiLCJsb2NhbENvbnRleHQiLCJsZWZ0VGVybU5vZGUiLCJnZXROb2RlIiwicmlnaHRUZXJtTm9kZSIsImVxdWFsaXR5VW5pZmllZCIsImVxdWFsaXR5VW5pZmllciIsInVuaWZ5IiwiZXF1YWwiLCJ2ZXJpZnkiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsInZlcmlmaWVkIiwiZXF1YWxpdHlTdHJpbmciLCJ0cmFjZSIsInZlcmlmaWVkV2hlblN0YXRlZCIsInZlcmlmeVdoZW5TdGF0ZWQiLCJ2ZXJpZmllZFdoZW5EZXJpdmVkIiwidmVyaWZ5V2hlbkRlcml2ZWQiLCJlcXVhbGl0eSIsImVxdWFsaXR5QXNzaWdubWVudCIsIkVxdWFsaXR5QXNzaWdubWVudCIsImZyb21FcXVhbGl0eSIsImFzc2lnbm1lbnQiLCJwdXNoIiwiZGVidWciLCJ2ZXJpZnlUZXJtcyIsInRlcm1zVmVyaWZpZWQiLCJsZWZ0VGVybVZlcmlmaWVkIiwidmVyaWZpZWRBaGVhZCIsInJpZ2h0VGVybVZlcmlmaWVkIiwibGVmdFRlcm1UeXBlIiwiZ2V0VHlwZSIsInJpZ2h0VGVybVR5cGUiLCJsZWZ0VGVybVR5cGVDb21wYXJhYmxlVG9SaWdodFRlcm1UeXBlIiwiaXNDb21wYXJhYmxlVG8iLCJmcm9tRXF1YWxpdHlOb2RlIiwiZXF1YWxpdHlOb2RlIiwiVGVybSIsInNoaW0iLCJmcm9tVGVybU5vZGUiLCJub2RlIiwibm9kZUFzU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVdxQkE7OzsyREFUSjsrREFDVztnRUFDRztxQkFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNQyxvQkFBb0JDLElBQUFBLGdCQUFTLEVBQUMsc0JBQzlCQyxxQkFBcUJELElBQUFBLGdCQUFTLEVBQUM7QUFFdEIsSUFBQSxBQUFNRix5QkFBTjthQUFNQSxTQUNQSSxNQUFNLEVBQUNDLFFBQVEsRUFBRUMsU0FBUztnQ0FEbkJOO1FBRWpCLElBQUksQ0FBQ0ksTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLFNBQVMsR0FBR0E7O2tCQUpBTjs7WUFPbkJPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsTUFBTTtZQUNwQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsUUFBUTtZQUN0Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0gsU0FBUztZQUN2Qjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQywyQkFBMkIsSUFBSSxDQUFDTixRQUFRLENBQUNPLEtBQUssQ0FBQyxJQUFJLENBQUNOLFNBQVMsR0FDN0RPLFlBQVlGLDBCQUEwQixHQUFHO2dCQUUvQyxPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLFFBQVFDLFlBQVk7Z0JBQ2xCLElBQU1DLGVBQWUs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