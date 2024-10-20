"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DefinedAssertion;
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
var DefinedAssertion = /*#__PURE__*/ function() {
    function DefinedAssertion(string, node, term, frame, negated) {
        _class_call_check(this, DefinedAssertion);
        this.string = string;
        this.node = node;
        this.term = term;
        this.frame = frame;
        this.negated = negated;
    }
    _create_class(DefinedAssertion, [
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
            key: "verify",
            value: function verify(assignments, stated, localContext) {
                var verified = false;
                var definedAssertionString = this.string; ///
                localContext.trace("Verifying the '".concat(definedAssertionString, "' defined assertion..."));
                stated = true; ///
                assignments = null; ///
                var termVerified = true, frameVerified = true;
                if (this.term !== null) {
                    termVerified = this.term.verify(localContext, function() {
                        var verifiedAhead = true;
                        return verifiedAhead;
                    });
                }
                if (this.frame !== null) {
                    frameVerified = this.frame.verify(assignments, stated, localContext);
                }
                if (termVerified && frameVerified) {
                    var verifiedWhenStated = false, verifiedWhenDerived = false;
                    if (stated) {
                        verifiedWhenStated = this.verifyWhenStated(localContext);
                    } else {
                        verifiedWhenDerived = this.verifyWhenDerived(localContext);
                    }
                    if (verifiedWhenStated || verifiedWhenDerived) {
                        verified = true;
                    }
                }
                if (verified) {
                    localContext.debug("...verified the '".concat(definedAssertionString, "' defined assertion."));
                }
                return verified;
            }
        },
        {
            key: "verifyWhenStated",
            value: function verifyWhenStated(localContext) {
                var verifiedWhenStated;
                var definedAssertionString = this.string; ///
                localContext.trace("Verifying the '".concat(definedAssertionString, "' stated defined assertion..."));
                verifiedWhenStated = true;
                if (verifiedWhenStated) {
                    localContext.debug("...verified the '".concat(definedAssertionString, "' stated defined assertion."));
                }
                return verifiedWhenStated;
            }
        },
        {
            key: "verifyWhenDerived",
            value: function verifyWhenDerived(localContext) {
                var verifiedWhenDerived = false;
                var definedAssertionString = this.string; ///
                localContext.trace("Verifying the '".concat(definedAssertionString, "' derived defined assertion..."));
                if (this.term !== null) {
                    var Variable = _shim.default.Variable, termNode = this.term.getNode(), variable = Variable.fromTermNode(termNode, localContext), variableDefined = localContext.isVariableDefined(variable);
                    if (!this.negated && variableDefined) {
                        verifiedWhenDerived = true;
                    }
                    if (this.negated && !variableDefined) {
                        verifiedWhenDerived = true;
                    }
                }
                if (this.frame !== null) {
                    debugger;
                    var Metavariable = _shim.default.Metavariable, frameNode = this.frame.getNode(), metavariable = Metavariable.fromTermNode(frameNode, localContext), metavariableDefined = localContext.isMetametavariableDefined(metavariable);
                    if (!this.negated && metavariableDefined) {
                        verifiedWhenDerived = true;
                    }
                    if (this.negated && !metavariableDefined) {
                        verifiedWhenDerived = true;
                    }
                }
                if (verifiedWhenDerived) {
                    localContext.debug("...verified the '".concat(definedAssertionString, "' derived defined assertion."));
                }
                return verifiedWhenDerived;
            }
        }
    ], [
        {
            key: "fromDefinedAssertionNode",
            value: function fromDefinedAssertionNode(definedAssertionNode, localContext) {
                var definedAssertion = null;
                if (definedAssertionNode !== null) {
                    var Term = _shim.default.Term, Frame = _shim.default.Frame, node = definedAssertionNode, string = localContext.nodeAsString(node), term = Term.fromDefinedAssertionNode(definedAssertionNode, localContext), frame = Frame.fromDefinedAssertionNode(definedAssertionNode, localContext), definedAssertionNegated = (0, _assertion.isAssertionNegated)(definedAssertionNode), negated = definedAssertionNegated; ///
                    definedAssertion = new DefinedAssertion(string, node, term, frame, negated);
                }
                return definedAssertion;
            }
        }
    ]);
    return DefinedAssertion;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3NlcnRpb24vZGVmaW5lZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcblxuaW1wb3J0IHsgaXNBc3NlcnRpb25OZWdhdGVkIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hc3NlcnRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVmaW5lZEFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSwgdGVybSwgZnJhbWUsIG5lZ2F0ZWQpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudGVybSA9IHRlcm07XG4gICAgdGhpcy5mcmFtZT0gZnJhbWU7XG4gICAgdGhpcy5uZWdhdGVkID0gbmVnYXRlZDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm07XG4gIH1cblxuICBnZXRGcmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5mcmFtZTtcbiAgfVxuXG4gIGlzTmVnYXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5uZWdhdGVkO1xuICB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgZGVmaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVmaW5lZCBhc3NlcnRpb24uLi5gKTtcblxuICAgIHN0YXRlZCA9IHRydWU7ICAvLy9cblxuICAgIGFzc2lnbm1lbnRzID0gbnVsbDsgLy8vXG5cbiAgICBsZXQgdGVybVZlcmlmaWVkID0gdHJ1ZSxcbiAgICAgICAgZnJhbWVWZXJpZmllZCA9IHRydWU7XG5cbiAgICBpZiAodGhpcy50ZXJtICE9PSBudWxsKSB7XG4gICAgICB0ZXJtVmVyaWZpZWQgPSB0aGlzLnRlcm0udmVyaWZ5KGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcblxuICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmZyYW1lIT09IG51bGwpIHtcbiAgICAgIGZyYW1lVmVyaWZpZWQgPSB0aGlzLmZyYW1lLnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpO1xuICAgIH1cblxuICAgIGlmICh0ZXJtVmVyaWZpZWQgJiYgZnJhbWVWZXJpZmllZCkge1xuICAgICAgbGV0IHZlcmlmaWVkV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0aGlzLnZlcmlmeVdoZW5TdGF0ZWQobG9jYWxDb250ZXh0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB0aGlzLnZlcmlmeVdoZW5EZXJpdmVkKGxvY2FsQ29udGV4dCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh2ZXJpZmllZFdoZW5TdGF0ZWQgfHwgdmVyaWZpZWRXaGVuRGVyaXZlZCkge1xuICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVmaW5lZCBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlblN0YXRlZChsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuU3RhdGVkO1xuXG4gICAgY29uc3QgZGVmaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIGRlZmluZWQgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHZlcmlmaWVkV2hlblN0YXRlZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIHN0YXRlZCBkZWZpbmVkIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlbkRlcml2ZWQobG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGRlZmluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgZGVmaW5lZCBhc3NlcnRpb24uLi5gKTtcblxuICAgIGlmICh0aGlzLnRlcm0gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgVmFyaWFibGUgfSA9IHNoaW0sXG4gICAgICAgICAgICB0ZXJtTm9kZSA9IHRoaXMudGVybS5nZXROb2RlKCksXG4gICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICAgIHZhcmlhYmxlRGVmaW5lZCA9IGxvY2FsQ29udGV4dC5pc1ZhcmlhYmxlRGVmaW5lZCh2YXJpYWJsZSk7XG5cbiAgICAgIGlmICghdGhpcy5uZWdhdGVkICYmIHZhcmlhYmxlRGVmaW5lZCkge1xuICAgICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMubmVnYXRlZCAmJiAhdmFyaWFibGVEZWZpbmVkKSB7XG4gICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmZyYW1lIT09IG51bGwpIHtcbiAgICAgIGRlYnVnZ2VyXG5cbiAgICAgIGNvbnN0IHsgTWV0YXZhcmlhYmxlIH0gPSBzaGltLFxuICAgICAgICAgICAgZnJhbWVOb2RlID0gdGhpcy5mcmFtZS5nZXROb2RlKCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbVRlcm1Ob2RlKGZyYW1lTm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZURlZmluZWQgPSBsb2NhbENvbnRleHQuaXNNZXRhbWV0YXZhcmlhYmxlRGVmaW5lZChtZXRhdmFyaWFibGUpO1xuXG4gICAgICBpZiAoIXRoaXMubmVnYXRlZCAmJiBtZXRhdmFyaWFibGVEZWZpbmVkKSB7XG4gICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5uZWdhdGVkICYmICFtZXRhdmFyaWFibGVEZWZpbmVkKSB7XG4gICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZFdoZW5EZXJpdmVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCBkZWZpbmVkIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBkZWZpbmVkQXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGlmIChkZWZpbmVkQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBUZXJtLCBGcmFtZSB9ID0gc2hpbSxcbiAgICAgICAgICAgIG5vZGUgPSBkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICAgIGZyYW1lID0gRnJhbWUuZnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBsb2NhbENvbnRleHQpLFxuICAgICAgICAgICAgZGVmaW5lZEFzc2VydGlvbk5lZ2F0ZWQgPSBpc0Fzc2VydGlvbk5lZ2F0ZWQoZGVmaW5lZEFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgICAgbmVnYXRlZCA9IGRlZmluZWRBc3NlcnRpb25OZWdhdGVkOyAgLy8vXG5cbiAgICAgIGRlZmluZWRBc3NlcnRpb24gPSBuZXcgRGVmaW5lZEFzc2VydGlvbihzdHJpbmcsIG5vZGUsIHRlcm0sIGZyYW1lLCBuZWdhdGVkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVmaW5lZEFzc2VydGlvbjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkRlZmluZWRBc3NlcnRpb24iLCJzdHJpbmciLCJub2RlIiwidGVybSIsImZyYW1lIiwibmVnYXRlZCIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXRUZXJtIiwiZ2V0RnJhbWUiLCJpc05lZ2F0ZWQiLCJ2ZXJpZnkiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsImxvY2FsQ29udGV4dCIsInZlcmlmaWVkIiwiZGVmaW5lZEFzc2VydGlvblN0cmluZyIsInRyYWNlIiwidGVybVZlcmlmaWVkIiwiZnJhbWVWZXJpZmllZCIsInZlcmlmaWVkQWhlYWQiLCJ2ZXJpZmllZFdoZW5TdGF0ZWQiLCJ2ZXJpZmllZFdoZW5EZXJpdmVkIiwidmVyaWZ5V2hlblN0YXRlZCIsInZlcmlmeVdoZW5EZXJpdmVkIiwiZGVidWciLCJWYXJpYWJsZSIsInNoaW0iLCJ0ZXJtTm9kZSIsInZhcmlhYmxlIiwiZnJvbVRlcm1Ob2RlIiwidmFyaWFibGVEZWZpbmVkIiwiaXNWYXJpYWJsZURlZmluZWQiLCJNZXRhdmFyaWFibGUiLCJmcmFtZU5vZGUiLCJtZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVEZWZpbmVkIiwiaXNNZXRhbWV0YXZhcmlhYmxlRGVmaW5lZCIsImZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImRlZmluZWRBc3NlcnRpb25Ob2RlIiwiZGVmaW5lZEFzc2VydGlvbiIsIlRlcm0iLCJGcmFtZSIsIm5vZGVBc1N0cmluZyIsImRlZmluZWRBc3NlcnRpb25OZWdhdGVkIiwiaXNBc3NlcnRpb25OZWdhdGVkIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQU1xQkE7OzsyREFKSjt5QkFFa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEIsSUFBQSxBQUFNQSxpQ0FBTjthQUFNQSxpQkFDUEMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxPQUFPO2dDQUQzQkw7UUFFakIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxLQUFLLEdBQUVBO1FBQ1osSUFBSSxDQUFDQyxPQUFPLEdBQUdBOztrQkFORUw7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