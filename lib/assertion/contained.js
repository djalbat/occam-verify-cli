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
var _metaLevel = /*#__PURE__*/ _interop_require_default(require("../verifier/metaLevel"));
var _query = require("../utilities/query");
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
var statementNodeQuery = (0, _query.nodeQuery)("/containedAssertion/statement");
var ContainedAssertion = /*#__PURE__*/ function() {
    function ContainedAssertion(string, node, term, frame, negated, statements) {
        _class_call_check(this, ContainedAssertion);
        this.string = string;
        this.node = node;
        this.term = term;
        this.frame = frame;
        this.negated = negated;
        this.statements = statements;
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
            key: "getStatements",
            value: function getStatements() {
                return this.statements;
            }
        },
        {
            key: "verify",
            value: function verify(assignments, stated, localContext) {
                var verified = false;
                var containedAssertionString = this.string; ///
                localContext.trace("Verifying the '".concat(containedAssertionString, "' contained assertion..."));
                assignments = null; ///
                stated = true; ///
                var containedAssertionNode = this.node, verifiedAtMetaLevel = _metaLevel.default.verify(containedAssertionNode, assignments, stated, localContext);
                if (verifiedAtMetaLevel) {
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
                    var Term = _shim.default.Term, Frame = _shim.default.Frame, Statement = _shim.default.Statement, term = Term.fromContainedAssertionNode(containedAssertionNode, localContext), frame = Frame.fromContainedAssertionNode(containedAssertionNode, localContext), statementNode = statementNodeQuery(containedAssertionNode), containedAssertionNegated = (0, _assertion.isAssertionNegated)(containedAssertionNode), node = containedAssertionNode, string = localContext.nodeAsString(node), negated = containedAssertionNegated, statement = Statement.fromStatementNode(statementNode, localContext);
                    containedAssertion = new ContainedAssertion(string, node, term, frame, negated, statement);
                }
                return containedAssertion;
            }
        }
    ]);
    return ContainedAssertion;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hc3NlcnRpb24vY29udGFpbmVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuaW1wb3J0IG1ldGFMZXZlbFZlcmlmaWVyIGZyb20gXCIuLi92ZXJpZmllci9tZXRhTGV2ZWxcIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgaXNBc3NlcnRpb25OZWdhdGVkIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hc3NlcnRpb25cIjtcblxuY29uc3Qgc3RhdGVtZW50Tm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL2NvbnRhaW5lZEFzc2VydGlvbi9zdGF0ZW1lbnRcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRhaW5lZEFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSwgdGVybSwgZnJhbWUsIG5lZ2F0ZWQsIHN0YXRlbWVudHMpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudGVybSA9IHRlcm07XG4gICAgdGhpcy5mcmFtZSA9IGZyYW1lO1xuICAgIHRoaXMubmVnYXRlZCA9IG5lZ2F0ZWQ7XG4gICAgdGhpcy5zdGF0ZW1lbnRzID0gc3RhdGVtZW50cztcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm07XG4gIH1cblxuICBnZXRGcmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5mcmFtZTtcbiAgfVxuXG4gIGlzTmVnYXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5uZWdhdGVkO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnRzO1xuICB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIGNvbnRhaW5lZCBhc3NlcnRpb24uLi5gKTtcblxuICAgIGFzc2lnbm1lbnRzID0gbnVsbDsgLy8vXG5cbiAgICBzdGF0ZWQgPSB0cnVlOyAgLy8vXG5cbiAgICBjb25zdCBjb250YWluZWRBc3NlcnRpb25Ob2RlID0gdGhpcy5ub2RlLCAvLy9cbiAgICAgICAgICB2ZXJpZmllZEF0TWV0YUxldmVsID0gbWV0YUxldmVsVmVyaWZpZXIudmVyaWZ5KGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAodmVyaWZpZWRBdE1ldGFMZXZlbCkge1xuICAgICAgbGV0IHZlcmlmaWVkV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0aGlzLnZlcmlmeVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGxvY2FsQ29udGV4dCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gdGhpcy52ZXJpZnlXaGVuRGVyaXZlZChsb2NhbENvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICBpZiAodmVyaWZpZWRXaGVuU3RhdGVkIHx8IHZlcmlmaWVkV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgY29udGFpbmVkIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuU3RhdGVkO1xuXG4gICAgY29uc3QgY29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIHN0YXRlZCBjb250YWluZWQgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHZlcmlmaWVkV2hlblN0YXRlZCkge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIGNvbnRhaW5lZCBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5EZXJpdmVkKGxvY2FsQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZFdoZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250YWluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCBjb250YWluZWQgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBpZiAodGhpcy50ZXJtICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB2YXJpYWJsZSA9IHRoaXMudGVybS5nZXRWYXJpYWJsZShsb2NhbENvbnRleHQpO1xuXG4gICAgICBpZiAodmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgdmFyaWFibGVDb250YWluZWQgPSB0aGlzLnN0YXRlbWVudC5pc1ZhcmlhYmxlQ29udGFpbmVkKHZhcmlhYmxlLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIGlmICghdGhpcy5uZWdhdGVkICYmIHZhcmlhYmxlQ29udGFpbmVkKSB7XG4gICAgICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5uZWdhdGVkICYmICF2YXJpYWJsZUNvbnRhaW5lZCkge1xuICAgICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZnJhbWUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMuZnJhbWUuZ2V0VmFyaWFibGUobG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVDb250YWluZWQgPSB0aGlzLnN0YXRlbWVudC5pc01ldGF2YXJpYWJsZUNvbnRhaW5lZChtZXRhdmFyaWFibGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLm5lZ2F0ZWQgJiYgbWV0YXZhcmlhYmxlQ29udGFpbmVkKSB7XG4gICAgICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5uZWdhdGVkICYmICFtZXRhdmFyaWFibGVDb250YWluZWQpIHtcbiAgICAgICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZFdoZW5EZXJpdmVkKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIGNvbnRhaW5lZCBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkV2hlbkRlcml2ZWQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IGNvbnRhaW5lZEFzc2VydGlvbiA9IG51bGw7XG5cbiAgICBpZiAoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBUZXJtLCBGcmFtZSwgU3RhdGVtZW50IH0gPSBzaGltLFxuICAgICAgICAgICAgdGVybSA9IFRlcm0uZnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICAgIGZyYW1lID0gRnJhbWUuZnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnROb2RlUXVlcnkoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgICBjb250YWluZWRBc3NlcnRpb25OZWdhdGVkID0gaXNBc3NlcnRpb25OZWdhdGVkKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgICAgbm9kZSA9IGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICBuZWdhdGVkID0gY29udGFpbmVkQXNzZXJ0aW9uTmVnYXRlZCwgIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGNvbnRhaW5lZEFzc2VydGlvbiA9IG5ldyBDb250YWluZWRBc3NlcnRpb24oc3RyaW5nLCBub2RlLCB0ZXJtLCBmcmFtZSwgbmVnYXRlZCwgc3RhdGVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGFpbmVkQXNzZXJ0aW9uO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ29udGFpbmVkQXNzZXJ0aW9uIiwic3RhdGVtZW50Tm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwic3RyaW5nIiwibm9kZSIsInRlcm0iLCJmcmFtZSIsIm5lZ2F0ZWQiLCJzdGF0ZW1lbnRzIiwiZ2V0U3RyaW5nIiwiZ2V0Tm9kZSIsImdldFRlcm0iLCJnZXRGcmFtZSIsImlzTmVnYXRlZCIsImdldFN0YXRlbWVudHMiLCJ2ZXJpZnkiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsImxvY2FsQ29udGV4dCIsInZlcmlmaWVkIiwiY29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nIiwidHJhY2UiLCJjb250YWluZWRBc3NlcnRpb25Ob2RlIiwidmVyaWZpZWRBdE1ldGFMZXZlbCIsIm1ldGFMZXZlbFZlcmlmaWVyIiwidmVyaWZpZWRXaGVuU3RhdGVkIiwidmVyaWZpZWRXaGVuRGVyaXZlZCIsInZlcmlmeVdoZW5TdGF0ZWQiLCJ2ZXJpZnlXaGVuRGVyaXZlZCIsImRlYnVnIiwidmFyaWFibGUiLCJnZXRWYXJpYWJsZSIsInZhcmlhYmxlQ29udGFpbmVkIiwic3RhdGVtZW50IiwiaXNWYXJpYWJsZUNvbnRhaW5lZCIsIm1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZUNvbnRhaW5lZCIsImlzTWV0YXZhcmlhYmxlQ29udGFpbmVkIiwiZnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJjb250YWluZWRBc3NlcnRpb24iLCJUZXJtIiwic2hpbSIsIkZyYW1lIiwiU3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsImNvbnRhaW5lZEFzc2VydGlvbk5lZ2F0ZWQiLCJpc0Fzc2VydGlvbk5lZ2F0ZWQiLCJub2RlQXNTdHJpbmciLCJmcm9tU3RhdGVtZW50Tm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFVcUJBOzs7MkRBUko7Z0VBQ2E7cUJBRUo7eUJBQ1M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkMsSUFBTUMscUJBQXFCQyxJQUFBQSxnQkFBUyxFQUFDO0FBRXRCLElBQUEsQUFBTUYsbUNBQU47YUFBTUEsbUJBQ1BHLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxVQUFVO2dDQUR2Q1I7UUFFakIsSUFBSSxDQUFDRyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxVQUFVLEdBQUdBOztrQkFQRFI7O1lBVW5CUyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNOLE1BQU07WUFDcEI7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNOLElBQUk7WUFDbEI7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNOLElBQUk7WUFDbEI7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNOLEtBQUs7WUFDbkI7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNOLE9BQU87WUFDckI7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNOLFVBQVU7WUFDeEI7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT0MsV0FBVyxFQUFFQyxNQUFNLEVBQUVDLFlB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