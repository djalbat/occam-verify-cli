"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ContainedAssertion;
    }
});
var _shim = /*#__PURE__*/ _interop_require_default(require("../shim"));
var _assertion = require("../utilities/assertion");
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
var ContainedAssertion = /*#__PURE__*/ function() {
    function ContainedAssertion(string, node, term, frame, negated, statement) {
        _class_call_check(this, ContainedAssertion);
        this.string = string;
        this.node = node;
        this.term = term;
        this.frame = frame;
        this.negated = negated;
        this.statement = statement;
    }
    _create_class(ContainedAssertion, [
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        },
        {
            key: "getTerm",
            value: function getTerm() {
                return this.term;
            }
        },
        {
            key: "getFrame",
            value: function getFrame() {
                return this.frame;
            }
        },
        {
            key: "isNegated",
            value: function isNegated() {
                return this.negated;
            }
        },
        {
            key: "getStatement",
            value: function getStatement() {
                return this.statement;
            }
        },
        {
            key: "verify",
            value: function verify(assignments, stated, localContext) {
                var verified = false;
                var containedAssertionString = this.string; ///
                localContext.trace("Verifying the '".concat(containedAssertionString, "' contained assertion..."));
                stated = true;
                assignments = null; ///
                var termVerified = true, frameVerified = true, statementVerified;
                if (this.term !== null) {
                    termVerified = this.term.verify(localContext, function() {
                        var verifiedAhead = true;
                        return verifiedAhead;
                    });
                }
                if (this.frame !== null) {
                    frameVerified = this.frame.verify(assignments, stated, localContext);
                }
                statementVerified = this.statement.verify(assignments, stated, localContext);
                if (termVerified && frameVerified && statementVerified) {
                    var verifiedWhenStated = false, verifiedWhenDerived = false;
                    if (stated) {
                        verifiedWhenStated = this.verifyWhenStated(assignments, localContext);
                    } else {
                        verifiedWhenDerived = this.verifyWhenDerived(localContext);
                    }
                    if (verifiedWhenStated || verifiedWhenDerived) {
                        verified = true;
                    }
                }
                if (verified) {
                    localContext.debug("...verified the '".concat(containedAssertionString, "' contained assertion."));
                }
                return verified;
            }
        },
        {
            key: "verifyWhenStated",
            value: function verifyWhenStated(assignments, localContext) {
                var verifiedWhenStated;
                var containedAssertionString = this.string; ///
                localContext.trace("Verifying the '".concat(containedAssertionString, "' stated contained assertion..."));
                verifiedWhenStated = true;
                if (verifiedWhenStated) {
                    localContext.debug("...verified the '".concat(containedAssertionString, "' stated contained assertion."));
                }
                return verifiedWhenStated;
            }
        },
        {
            key: "verifyWhenDerived",
            value: function verifyWhenDerived(localContext) {
                var verifiedWhenDerived = false;
                var containedAssertionString = this.string; ///
                localContext.trace("Verifying the '".concat(containedAssertionString, "' derived contained assertion..."));
                if (this.term !== null) {
                    var variable = this.term.getVariable(localContext);
                    if (variable !== null) {
                        var variableContained = this.statement.isVariableContained(variable, localContext);
                        if (!this.negated && variableContained) {
                            verifiedWhenDerived = true;
                        }
                        if (this.negated && !variableContained) {
                            verifiedWhenDerived = true;
                        }
                    }
                }
                if (this.frame !== null) {
                    var metavariable = this.frame.getVariable(localContext);
                    if (metavariable !== null) {
                        var metavariableContained = this.statement.isMetavariableContained(metavariable, localContext);
                        if (!this.negated && metavariableContained) {
                            verifiedWhenDerived = true;
                        }
                        if (this.negated && !metavariableContained) {
                            verifiedWhenDerived = true;
                        }
                    }
                }
                if (verifiedWhenDerived) {
                    localContext.debug("...verified the '".concat(containedAssertionString, "' derived contained assertion."));
                }
                return verifiedWhenDerived;
            }
        }
    ], [
        {
            key: "fromContainedAssertionNode",
            value: function fromContainedAssertionNode(containedAssertionNode, localContext) {
                var containedAssertion = null;
                if (containedAssertionNode !== null) {
                    var Term = _shim.default.Term, Frame = _shim.default.Frame, Statement = _shim.default.Statement, node = containedAssertionNode, string = localContext.nodeAsString(node), term = Term.fromContainedAssertionNode(containedAssertionNode, localContext), frame = Frame.fromContainedAssertionNode(containedAssertionNode, localContext), statement = Statement.fromContainedAssertionNode(containedAssertionNode, localContext), containedAssertionNegated = (0, _assertion.isAssertionNegated)(containedAssertionNode), negated = containedAssertionNegated; ///
                    containedAssertion = new ContainedAssertion(string, node, term, frame, negated, statement);
                }
                return containedAssertion;
            }
        }
    ]);
    return ContainedAssertion;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3NlcnRpb24vY29udGFpbmVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuXG5pbXBvcnQgeyBpc0Fzc2VydGlvbk5lZ2F0ZWQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2Fzc2VydGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250YWluZWRBc3NlcnRpb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5vZGUsIHRlcm0sIGZyYW1lLCBuZWdhdGVkLCBzdGF0ZW1lbnQpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudGVybSA9IHRlcm07XG4gICAgdGhpcy5mcmFtZSA9IGZyYW1lO1xuICAgIHRoaXMubmVnYXRlZCA9IG5lZ2F0ZWQ7XG4gICAgdGhpcy5zdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtO1xuICB9XG5cbiAgZ2V0RnJhbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZnJhbWU7XG4gIH1cblxuICBpc05lZ2F0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMubmVnYXRlZDtcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250YWluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgY29udGFpbmVkIGFzc2VydGlvbi4uLmApO1xuXG4gICAgc3RhdGVkID0gdHJ1ZTtcblxuICAgIGFzc2lnbm1lbnRzID0gbnVsbDsgLy8vXG5cbiAgICBsZXQgdGVybVZlcmlmaWVkID0gdHJ1ZSwgIC8vL1xuICAgICAgICBmcmFtZVZlcmlmaWVkID0gdHJ1ZSwgLy8vXG4gICAgICAgIHN0YXRlbWVudFZlcmlmaWVkO1xuXG4gICAgaWYgKHRoaXMudGVybSAhPT0gbnVsbCkge1xuICAgICAgdGVybVZlcmlmaWVkID0gdGhpcy50ZXJtLnZlcmlmeShsb2NhbENvbnRleHQsICgpID0+IHtcbiAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5mcmFtZSAhPT0gbnVsbCkge1xuICAgICAgZnJhbWVWZXJpZmllZCA9IHRoaXMuZnJhbWUudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG4gICAgfVxuXG4gICAgc3RhdGVtZW50VmVyaWZpZWQgPSB0aGlzLnN0YXRlbWVudC52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmICh0ZXJtVmVyaWZpZWQgJiYgZnJhbWVWZXJpZmllZCAmJiBzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgbGV0IHZlcmlmaWVkV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0aGlzLnZlcmlmeVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGxvY2FsQ29udGV4dCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gdGhpcy52ZXJpZnlXaGVuRGVyaXZlZChsb2NhbENvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICBpZiAodmVyaWZpZWRXaGVuU3RhdGVkIHx8IHZlcmlmaWVkV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgY29udGFpbmVkIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuU3RhdGVkO1xuXG4gICAgY29uc3QgY29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIHN0YXRlZCBjb250YWluZWQgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHZlcmlmaWVkV2hlblN0YXRlZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIGNvbnRhaW5lZCBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5EZXJpdmVkKGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZFdoZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250YWluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCBjb250YWluZWQgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBpZiAodGhpcy50ZXJtICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZSA9IHRoaXMudGVybS5nZXRWYXJpYWJsZShsb2NhbENvbnRleHQpO1xuXG4gICAgICBpZiAodmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgdmFyaWFibGVDb250YWluZWQgPSB0aGlzLnN0YXRlbWVudC5pc1ZhcmlhYmxlQ29udGFpbmVkKHZhcmlhYmxlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIGlmICghdGhpcy5uZWdhdGVkICYmIHZhcmlhYmxlQ29udGFpbmVkKSB7XG4gICAgICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5uZWdhdGVkICYmICF2YXJpYWJsZUNvbnRhaW5lZCkge1xuICAgICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZnJhbWUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMuZnJhbWUuZ2V0VmFyaWFibGUobG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVDb250YWluZWQgPSB0aGlzLnN0YXRlbWVudC5pc01ldGF2YXJpYWJsZUNvbnRhaW5lZChtZXRhdmFyaWFibGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLm5lZ2F0ZWQgJiYgbWV0YXZhcmlhYmxlQ29udGFpbmVkKSB7XG4gICAgICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5uZWdhdGVkICYmICFtZXRhdmFyaWFibGVDb250YWluZWQpIHtcbiAgICAgICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZFdoZW5EZXJpdmVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIGNvbnRhaW5lZCBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkV2hlbkRlcml2ZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IGNvbnRhaW5lZEFzc2VydGlvbiA9IG51bGw7XG5cbiAgICBpZiAoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBUZXJtLCBGcmFtZSwgU3RhdGVtZW50IH0gPSBzaGltLFxuICAgICAgICAgICAgbm9kZSA9IGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICB0ZXJtID0gVGVybS5mcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgICAgZnJhbWUgPSBGcmFtZS5mcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgICAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGxvY2FsQ29udGV4dCksXG4gICAgICAgICAgICBjb250YWluZWRBc3NlcnRpb25OZWdhdGVkID0gaXNBc3NlcnRpb25OZWdhdGVkKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgICAgbmVnYXRlZCA9IGNvbnRhaW5lZEFzc2VydGlvbk5lZ2F0ZWQ7ICAvLy9cblxuICAgICAgY29udGFpbmVkQXNzZXJ0aW9uID0gbmV3IENvbnRhaW5lZEFzc2VydGlvbihzdHJpbmcsIG5vZGUsIHRlcm0sIGZyYW1lLCBuZWdhdGVkLCBzdGF0ZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBjb250YWluZWRBc3NlcnRpb247XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb250YWluZWRBc3NlcnRpb24iLCJzdHJpbmciLCJub2RlIiwidGVybSIsImZyYW1lIiwibmVnYXRlZCIsInN0YXRlbWVudCIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXRUZXJtIiwiZ2V0RnJhbWUiLCJpc05lZ2F0ZWQiLCJnZXRTdGF0ZW1lbnQiLCJ2ZXJpZnkiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsImxvY2FsQ29udGV4dCIsInZlcmlmaWVkIiwiY29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nIiwidHJhY2UiLCJ0ZXJtVmVyaWZpZWQiLCJmcmFtZVZlcmlmaWVkIiwic3RhdGVtZW50VmVyaWZpZWQiLCJ2ZXJpZmllZEFoZWFkIiwidmVyaWZpZWRXaGVuU3RhdGVkIiwidmVyaWZpZWRXaGVuRGVyaXZlZCIsInZlcmlmeVdoZW5TdGF0ZWQiLCJ2ZXJpZnlXaGVuRGVyaXZlZCIsImRlYnVnIiwidmFyaWFibGUiLCJnZXRWYXJpYWJsZSIsInZhcmlhYmxlQ29udGFpbmVkIiwiaXNWYXJpYWJsZUNvbnRhaW5lZCIsIm1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZUNvbnRhaW5lZCIsImlzTWV0YXZhcmlhYmxlQ29udGFpbmVkIiwiZnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJjb250YWluZWRBc3NlcnRpb25Ob2RlIiwiY29udGFpbmVkQXNzZXJ0aW9uIiwiVGVybSIsInNoaW0iLCJGcmFtZSIsIlN0YXRlbWVudCIsIm5vZGVBc1N0cmluZyIsImNvbnRhaW5lZEFzc2VydGlvbk5lZ2F0ZWQiLCJpc0Fzc2VydGlvbk5lZ2F0ZWQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBTXFCQTs7OzJEQUpKO3lCQUVrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwQixJQUFBLEFBQU1BLG1DQUFOO2FBQU1BLG1CQUNQQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sRUFBRUMsU0FBUztnQ0FEdENOO1FBRWpCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTs7a0JBUEFOOztZQVVuQk8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixNQUFNO1lBQ3BCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixJQUFJO1lBQ2xCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixJQUFJO1lBQ2xCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixLQUFLO1lBQ25COzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixPQUFPO1lBQ3JCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixTQUFTO1lBQ3ZCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBLE9BQU9DLFdBQVcsRUFBRUMsTUFBTSxFQUFFQyxZQUFZO2dCQUN0QyxJ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