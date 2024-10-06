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
                localContext.trace("Verifying the '".concat(equalityString, "' equality when stated..."));
                var termsVerified = this.verifyTerms(localContext);
                verifiedWhenStated = termsVerified; ///
                if (verifiedWhenStated) {
                    localContext.debug("...verified the '".concat(equalityString, "' equality when stated."));
                }
                return verifiedWhenStated;
            }
        },
        {
            key: "verifyWhenDerived",
            value: function verifyWhenDerived(localContext) {
                var verifiedWhenDerived = false;
                var equalityString = this.string; ///
                localContext.trace("Verifying the '".concat(equalityString, "' equality when derived..."));
                var termsVerified = this.verifyTerms(localContext);
                if (termsVerified) {
                    var equal = this.isEqual(localContext);
                    verifiedWhenDerived = equal; ///
                }
                if (verifiedWhenDerived) {
                    localContext.debug("...verified the '".concat(equalityString, "' equality when derived."));
                }
                return verifiedWhenDerived;
            }
        }
    ], [
        {
            key: "fromEqualityNode",
            value: function fromEqualityNode(equalityNode, localContext) {
                var Term = _shim.default.Term, leftTermNode = leftTermNodeQuery(equalityNode), rightTermNode = rightTermNodeQuery(equalityNode), leftTerm = Term.fromTermNode(leftTermNode, localContext), rightTerm = Term.fromTermNode(rightTermNode, localContext), node = equalityNode, string = localContext.nodeAsString(node), equality = new Equality(string, leftTerm, rightTerm);
                return equality;
            }
        }
    ]);
    return Equality;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9lcXVhbGl0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuaW1wb3J0IGVxdWFsaXR5VW5pZmllciBmcm9tIFwiLi91bmlmaWVyL2VxdWFsaXR5XCI7XG5pbXBvcnQgRXF1YWxpdHlBc3NpZ25tZW50IGZyb20gXCIuL2Fzc2lnbm1lbnQvZXF1YWxpdHlcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IGxlZnRUZXJtTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2VxdWFsaXR5L3Rlcm1bMF1cIiksXG4gICAgICByaWdodFRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvZXF1YWxpdHkvdGVybVsxXVwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXF1YWxpdHkge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsbGVmdFRlcm0sIHJpZ2h0VGVybSkge1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubGVmdFRlcm0gPSBsZWZ0VGVybTtcbiAgICB0aGlzLnJpZ2h0VGVybSA9IHJpZ2h0VGVybTtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRMZWZ0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy5sZWZ0VGVybTtcbiAgfVxuXG4gIGdldFJpZ2h0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy5yaWdodFRlcm07XG4gIH1cblxuICBpc1JlZmxleGl2ZSgpIHtcbiAgICBjb25zdCBsZWZ0VGVybU1hdGNoZXNSaWdodFRlcm0gPSB0aGlzLmxlZnRUZXJtLm1hdGNoKHRoaXMucmlnaHRUZXJtKSxcbiAgICAgICAgICByZWZsZXhpdmUgPSBsZWZ0VGVybU1hdGNoZXNSaWdodFRlcm07IC8vL1xuXG4gICAgcmV0dXJuIHJlZmxleGl2ZTtcbiAgfVxuXG4gIGlzRXF1YWwobG9jYWxDb250ZXh0KSB7XG4gICAgY29uc3QgbGVmdFRlcm1Ob2RlID0gdGhpcy5sZWZ0VGVybS5nZXROb2RlKCksXG4gICAgICAgICAgcmlnaHRUZXJtTm9kZSA9IHRoaXMucmlnaHRUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICBlcXVhbGl0eVVuaWZpZWQgPSBlcXVhbGl0eVVuaWZpZXIudW5pZnkobGVmdFRlcm1Ob2RlLCByaWdodFRlcm1Ob2RlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgIGVxdWFsID0gZXF1YWxpdHlVbmlmaWVkOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWw7XG4gIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkO1xuXG4gICAgY29uc3QgZXF1YWxpdHlTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eS4uLmApO1xuXG4gICAgaWYgKHN0YXRlZCkge1xuICAgICAgY29uc3QgdmVyaWZpZWRXaGVuU3RhdGVkID0gdGhpcy52ZXJpZnlXaGVuU3RhdGVkKGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIHZlcmlmaWVkID0gdmVyaWZpZWRXaGVuU3RhdGVkOyAgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB0aGlzLnZlcmlmeVdoZW5EZXJpdmVkKGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIHZlcmlmaWVkID0gdmVyaWZpZWRXaGVuRGVyaXZlZDsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBpZiAoYXNzaWdubWVudHMgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgZXF1YWxpdHkgPSB0aGlzLCAgLy9cbiAgICAgICAgICAgICAgZXF1YWxpdHlBc3NpZ25tZW50ID0gRXF1YWxpdHlBc3NpZ25tZW50LmZyb21FcXVhbGl0eShlcXVhbGl0eSksXG4gICAgICAgICAgICAgIGFzc2lnbm1lbnQgPSBlcXVhbGl0eUFzc2lnbm1lbnQ7IC8vL1xuXG4gICAgICAgIGFzc2lnbm1lbnRzLnB1c2goYXNzaWdubWVudCk7XG4gICAgICB9XG5cbiAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5VGVybXMobG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHRlcm1zVmVyaWZpZWQ7XG5cbiAgICBjb25zdCBlcXVhbGl0eVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5J3MgdGVybXMuLi5gKTtcblxuICAgIGNvbnN0IGxlZnRUZXJtVmVyaWZpZWQgPSB0aGlzLmxlZnRUZXJtLnZlcmlmeShsb2NhbENvbnRleHQsICgpID0+IHtcbiAgICAgIGxldCB2ZXJpZmllZEFoZWFkO1xuXG4gICAgICBjb25zdCByaWdodFRlcm1WZXJpZmllZCA9IHRoaXMucmlnaHRUZXJtLnZlcmlmeShsb2NhbENvbnRleHQsICgpID0+IHtcbiAgICAgICAgbGV0IHZlcmlmaWVkQWhlYWQ7XG5cbiAgICAgICAgY29uc3QgbGVmdFRlcm1UeXBlID0gdGhpcy5sZWZ0VGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgIHJpZ2h0VGVybVR5cGUgPSB0aGlzLnJpZ2h0VGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgIGxlZnRUZXJtVHlwZUNvbXBhcmFibGVUb1JpZ2h0VGVybVR5cGUgPSBsZWZ0VGVybVR5cGUuaXNDb21wYXJhYmxlVG8ocmlnaHRUZXJtVHlwZSk7XG5cbiAgICAgICAgdmVyaWZpZWRBaGVhZCA9IGxlZnRUZXJtVHlwZUNvbXBhcmFibGVUb1JpZ2h0VGVybVR5cGU7ICAvLy9cblxuICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgIH0pO1xuXG4gICAgICB2ZXJpZmllZEFoZWFkID0gcmlnaHRUZXJtVmVyaWZpZWQ7IC8vL1xuXG4gICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICB9KTtcblxuICAgIHRlcm1zVmVyaWZpZWQgPSBsZWZ0VGVybVZlcmlmaWVkOyAvLy9cblxuICAgIGlmICh0ZXJtc1ZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5J3MgdGVybXMuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1zVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuU3RhdGVkKGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZFdoZW5TdGF0ZWQ7XG5cbiAgICBjb25zdCBlcXVhbGl0eVN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5IHdoZW4gc3RhdGVkLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtc1ZlcmlmaWVkID0gdGhpcy52ZXJpZnlUZXJtcyhsb2NhbENvbnRleHQpO1xuXG4gICAgdmVyaWZpZWRXaGVuU3RhdGVkID0gdGVybXNWZXJpZmllZDsgLy8vXG5cbiAgICBpZiAodmVyaWZpZWRXaGVuU3RhdGVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5IHdoZW4gc3RhdGVkLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZFdoZW5TdGF0ZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuRGVyaXZlZChsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgZXF1YWxpdHlTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eSB3aGVuIGRlcml2ZWQuLi5gKTtcblxuICAgIGNvbnN0IHRlcm1zVmVyaWZpZWQgPSB0aGlzLnZlcmlmeVRlcm1zKGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAodGVybXNWZXJpZmllZCkge1xuICAgICAgY29uc3QgZXF1YWwgPSB0aGlzLmlzRXF1YWwobG9jYWxDb250ZXh0KTtcblxuICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IGVxdWFsOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkV2hlbkRlcml2ZWQpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkgd2hlbiBkZXJpdmVkLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZFdoZW5EZXJpdmVkO1xuICB9XG5cbiAgc3RhdGljIGZyb21FcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlLCBsb2NhbENvbnRleHQpIHtcbiAgICBjb25zdCB7IFRlcm0gfSA9IHNoaW0sXG4gICAgICAgICAgbGVmdFRlcm1Ob2RlID0gbGVmdFRlcm1Ob2RlUXVlcnkoZXF1YWxpdHlOb2RlKSxcbiAgICAgICAgICByaWdodFRlcm1Ob2RlID0gcmlnaHRUZXJtTm9kZVF1ZXJ5KGVxdWFsaXR5Tm9kZSksXG4gICAgICAgICAgbGVmdFRlcm0gPSBUZXJtLmZyb21UZXJtTm9kZShsZWZ0VGVybU5vZGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgcmlnaHRUZXJtID0gVGVybS5mcm9tVGVybU5vZGUocmlnaHRUZXJtTm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICBub2RlID0gZXF1YWxpdHlOb2RlLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICBlcXVhbGl0eSA9IG5ldyBFcXVhbGl0eShzdHJpbmcsIGxlZnRUZXJtLCByaWdodFRlcm0pO1xuXG4gICAgcmV0dXJuIGVxdWFsaXR5O1xuICB9XG59XG4iXSwibmFtZXMiOlsiRXF1YWxpdHkiLCJsZWZ0VGVybU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInJpZ2h0VGVybU5vZGVRdWVyeSIsInN0cmluZyIsImxlZnRUZXJtIiwicmlnaHRUZXJtIiwiZ2V0U3RyaW5nIiwiZ2V0TGVmdFRlcm0iLCJnZXRSaWdodFRlcm0iLCJpc1JlZmxleGl2ZSIsImxlZnRUZXJtTWF0Y2hlc1JpZ2h0VGVybSIsIm1hdGNoIiwicmVmbGV4aXZlIiwiaXNFcXVhbCIsImxvY2FsQ29udGV4dCIsImxlZnRUZXJtTm9kZSIsImdldE5vZGUiLCJyaWdodFRlcm1Ob2RlIiwiZXF1YWxpdHlVbmlmaWVkIiwiZXF1YWxpdHlVbmlmaWVyIiwidW5pZnkiLCJlcXVhbCIsInZlcmlmeSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwidmVyaWZpZWQiLCJlcXVhbGl0eVN0cmluZyIsInRyYWNlIiwidmVyaWZpZWRXaGVuU3RhdGVkIiwidmVyaWZ5V2hlblN0YXRlZCIsInZlcmlmaWVkV2hlbkRlcml2ZWQiLCJ2ZXJpZnlXaGVuRGVyaXZlZCIsImVxdWFsaXR5IiwiZXF1YWxpdHlBc3NpZ25tZW50IiwiRXF1YWxpdHlBc3NpZ25tZW50IiwiZnJvbUVxdWFsaXR5IiwiYXNzaWdubWVudCIsInB1c2giLCJkZWJ1ZyIsInZlcmlmeVRlcm1zIiwidGVybXNWZXJpZmllZCIsImxlZnRUZXJtVmVyaWZpZWQiLCJ2ZXJpZmllZEFoZWFkIiwicmlnaHRUZXJtVmVyaWZpZWQiLCJsZWZ0VGVybVR5cGUiLCJnZXRUeXBlIiwicmlnaHRUZXJtVHlwZSIsImxlZnRUZXJtVHlwZUNvbXBhcmFibGVUb1JpZ2h0VGVybVR5cGUiLCJpc0NvbXBhcmFibGVUbyIsImZyb21FcXVhbGl0eU5vZGUiLCJlcXVhbGl0eU5vZGUiLCJUZXJtIiwic2hpbSIsImZyb21UZXJtTm9kZSIsIm5vZGUiLCJub2RlQXNTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBV3FCQTs7OzJEQVRKOytEQUNXO2dFQUNHO3FCQUVMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTFCLElBQU1DLG9CQUFvQkMsSUFBQUEsZ0JBQVMsRUFBQyxzQkFDOUJDLHFCQUFxQkQsSUFBQUEsZ0JBQVMsRUFBQztBQUV0QixJQUFBLEFBQU1GLHlCQUFOO2FBQU1BLFNBQ1BJLE1BQU0sRUFBQ0MsUUFBUSxFQUFFQyxTQUFTO2dDQURuQk47UUFFakIsSUFBSSxDQUFDSSxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTs7a0JBSkFOOztZQU9uQk8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxNQUFNO1lBQ3BCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxRQUFRO1lBQ3RCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSCxTQUFTO1lBQ3ZCOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLDJCQUEyQixJQUFJLENBQUNOLFFBQVEsQ0FBQ08sS0FBSyxDQUFDLElBQUksQ0FBQ04sU0FBUyxHQUM3RE8sWUFBWUYsMEJBQTBCLEdBQUc7Z0JBRS9DLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsUUFBUUMsWUFBWTtnQkFDbEIsSUFBTUMsZUFBZSxJQUFJLENBQUNYLFFBQVEsQ0FBQ1ksT0FBTyxJQUNwQ0MsZ0JBQWdCLElBQUksQ0FBQ1osU0FBUyxDQUFD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