"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return verifyMetastatementAsDefinedAssertion;
    },
    isMetastatementDefinedAssertion: function() {
        return isMetastatementDefinedAssertion;
    }
});
var _term = /*#__PURE__*/ _interop_require_default(require("./term"));
var _metaLevel = /*#__PURE__*/ _interop_require_default(require("../verifier/node/metaLevel"));
var _array = require("../utilities/array");
var _constants = require("../constants");
var _query = require("../utilities/query");
var _verify = require("../utilities/verify");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var termNodeQuery = (0, _query.nodeQuery)("/metastatement/term!"), variableNodeQuery = (0, _query.nodeQuery)("/metastatement/term/variable!"), operatorTerminalNodesQuery = (0, _query.nodesQuery)("/metastatement/@operator");
function verifyMetastatementAsDefinedAssertion(metastatementNode, assignments, derived, localContext) {
    var metastatementVerifiedAsDefinedAssertion = false;
    var metastatementDefinedAssertion = isMetastatementDefinedAssertion(metastatementNode);
    if (metastatementDefinedAssertion) {
        var metastatementString = localContext.nodeAsString(metastatementNode);
        localContext.trace("Verifying the '".concat(metastatementString, "' metastatement as a defined assertion..."), metastatementNode);
        var definedAssertionFunctions = [
            verifyDerivedMetastatementAsDefinedAssertion,
            verifyStatedMetastatementAsDefinedAssertion
        ];
        metastatementVerifiedAsDefinedAssertion = definedAssertionFunctions.some(function(definedAssertionFunction) {
            var metastatementVerifiedAsDefinedAssertion = definedAssertionFunction(metastatementNode, assignments, derived, localContext);
            if (metastatementVerifiedAsDefinedAssertion) {
                return true;
            }
        });
        if (metastatementVerifiedAsDefinedAssertion) {
            localContext.debug("...verified the '".concat(metastatementString, "' metastatement as a defined assertion."), metastatementNode);
        }
    }
    return metastatementVerifiedAsDefinedAssertion;
}
function verifyDerivedMetastatementAsDefinedAssertion(metastatementNode, assignments, derived, localContext) {
    var derivedMetastatementVerifiedAsDefeindAssertion = false;
    if (derived) {
        var metastatementString = localContext.nodeAsString(metastatementNode);
        localContext.trace("Verifying the derived '".concat(metastatementString, "' metastatement as a defined assertion..."), metastatementNode);
        var metastatementNegated = (0, _verify.isMetastatementNegated)(metastatementNode), variableNode = variableNodeQuery(metastatementNode), termNode = termNodeQuery(metastatementNode);
        if (false) {
        ///
        } else if (variableNode !== null) {
            var variable = localContext.findVariableByVariableNode(variableNode);
            if (variable !== null) {
                var variableDefined = localContext.isVariableDefined(variable);
                if (!metastatementNegated) {
                    if (variableDefined) {
                        derivedMetastatementVerifiedAsDefeindAssertion = true;
                    }
                }
                if (metastatementNegated) {
                    if (!variableDefined) {
                        derivedMetastatementVerifiedAsDefeindAssertion = true;
                    }
                }
            }
        } else if (termNode !== null) {
            var terms = [], termVerified = (0, _term.default)(termNode, terms, localContext, function() {
                var verifiedAhead = true;
                return verifiedAhead;
            });
            if (termVerified) {
                var firstTerm = (0, _array.first)(terms), term = firstTerm, termGrounded = localContext.isTermGrounded(term);
                if (!metastatementNegated) {
                    if (termGrounded) {
                        derivedMetastatementVerifiedAsDefeindAssertion = true;
                    }
                }
                if (metastatementNegated) {
                    if (!termGrounded) {
                        derivedMetastatementVerifiedAsDefeindAssertion = true;
                    }
                }
            }
        }
        if (derivedMetastatementVerifiedAsDefeindAssertion) {
            localContext.debug("...verified the derived '".concat(metastatementString, "' metastatement as a defined assertion."), metastatementNode);
        }
    }
    return derivedMetastatementVerifiedAsDefeindAssertion;
}
function verifyStatedMetastatementAsDefinedAssertion(metastatementNode, assignments, derived, localContext) {
    var statedMetastatementVerifiedAsDefinedAssertion = false;
    if (!derived) {
        var metastatementString = localContext.nodeAsString(metastatementNode);
        localContext.trace("Verifying the stated '".concat(metastatementString, "' metastatement as a defined assertion..."), metastatementNode);
        var intrinsicLevel = localContext.isIntrinsicLevel();
        if (intrinsicLevel) {
            localContext.debug("The stated '".concat(metastatementString, "' metastatement as a defined assertion cannot be verified at intrinsic level."), metastatementNode);
        } else {
            var nonTerminalNode = metastatementNode, nonTerminalNodeVerified = _metaLevel.default.verifyNonTerminalNode(nonTerminalNode, localContext, function() {
                var verifiedAhead = true;
                return verifiedAhead;
            });
            statedMetastatementVerifiedAsDefinedAssertion = nonTerminalNodeVerified; ///
        }
        if (statedMetastatementVerifiedAsDefinedAssertion) {
            localContext.debug("...verified the stated '".concat(metastatementString, "' metastatement as a defined assertion."), metastatementNode);
        }
    }
    return statedMetastatementVerifiedAsDefinedAssertion;
}
function isMetastatementDefinedAssertion(metastatementNode) {
    var operatorTerminalNodes = operatorTerminalNodesQuery(metastatementNode), metastatementDefinedAssertion = operatorTerminalNodes.some(function(operatorTerminalNode) {
        var content = operatorTerminalNode.getContent(), contentDefined = content === _constants.DEFINED;
        if (contentDefined) {
            return true;
        }
    });
    return metastatementDefinedAssertion;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvbWV0YXN0YXRlbWVudEFzRGVmaW5lZEFzc2VydGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHZlcmlmeVRlcm0gZnJvbSBcIi4vdGVybVwiO1xuaW1wb3J0IG1ldGFMZXZlbE5vZGVWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXIvbm9kZS9tZXRhTGV2ZWxcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBERUZJTkVEIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgaXNNZXRhc3RhdGVtZW50TmVnYXRlZCB9IGZyb20gXCIuLi91dGlsaXRpZXMvdmVyaWZ5XCI7XG5cbmNvbnN0IHRlcm1Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YXN0YXRlbWVudC90ZXJtIVwiKSxcbiAgICAgIHZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL21ldGFzdGF0ZW1lbnQvdGVybS92YXJpYWJsZSFcIiksXG4gICAgICBvcGVyYXRvclRlcm1pbmFsTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvbWV0YXN0YXRlbWVudC9Ab3BlcmF0b3JcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeU1ldGFzdGF0ZW1lbnRBc0RlZmluZWRBc3NlcnRpb24obWV0YXN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IG1ldGFzdGF0ZW1lbnRWZXJpZmllZEFzRGVmaW5lZEFzc2VydGlvbiA9IGZhbHNlO1xuXG4gIGNvbnN0IG1ldGFzdGF0ZW1lbnREZWZpbmVkQXNzZXJ0aW9uID0gaXNNZXRhc3RhdGVtZW50RGVmaW5lZEFzc2VydGlvbihtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgaWYgKG1ldGFzdGF0ZW1lbnREZWZpbmVkQXNzZXJ0aW9uKSB7XG4gICAgY29uc3QgbWV0YXN0YXRlbWVudFN0cmluZyA9IGxvY2FsQ29udGV4dC5ub2RlQXNTdHJpbmcobWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgbG9jYWxDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke21ldGFzdGF0ZW1lbnRTdHJpbmd9JyBtZXRhc3RhdGVtZW50IGFzIGEgZGVmaW5lZCBhc3NlcnRpb24uLi5gLCBtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uRnVuY3Rpb25zID0gW1xuICAgICAgdmVyaWZ5RGVyaXZlZE1ldGFzdGF0ZW1lbnRBc0RlZmluZWRBc3NlcnRpb24sXG4gICAgICB2ZXJpZnlTdGF0ZWRNZXRhc3RhdGVtZW50QXNEZWZpbmVkQXNzZXJ0aW9uXG4gICAgXTtcblxuICAgIG1ldGFzdGF0ZW1lbnRWZXJpZmllZEFzRGVmaW5lZEFzc2VydGlvbiA9IGRlZmluZWRBc3NlcnRpb25GdW5jdGlvbnMuc29tZSgoZGVmaW5lZEFzc2VydGlvbkZ1bmN0aW9uKSA9PiB7XG4gICAgICBjb25zdCBtZXRhc3RhdGVtZW50VmVyaWZpZWRBc0RlZmluZWRBc3NlcnRpb24gPSBkZWZpbmVkQXNzZXJ0aW9uRnVuY3Rpb24obWV0YXN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBpZiAobWV0YXN0YXRlbWVudFZlcmlmaWVkQXNEZWZpbmVkQXNzZXJ0aW9uKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKG1ldGFzdGF0ZW1lbnRWZXJpZmllZEFzRGVmaW5lZEFzc2VydGlvbikge1xuICAgICAgbG9jYWxDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bWV0YXN0YXRlbWVudFN0cmluZ30nIG1ldGFzdGF0ZW1lbnQgYXMgYSBkZWZpbmVkIGFzc2VydGlvbi5gLCBtZXRhc3RhdGVtZW50Tm9kZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1ldGFzdGF0ZW1lbnRWZXJpZmllZEFzRGVmaW5lZEFzc2VydGlvbjtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5RGVyaXZlZE1ldGFzdGF0ZW1lbnRBc0RlZmluZWRBc3NlcnRpb24obWV0YXN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IGRlcml2ZWRNZXRhc3RhdGVtZW50VmVyaWZpZWRBc0RlZmVpbmRBc3NlcnRpb24gPSBmYWxzZTtcblxuICBpZiAoZGVyaXZlZCkge1xuICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnRTdHJpbmcgPSBsb2NhbENvbnRleHQubm9kZUFzU3RyaW5nKG1ldGFzdGF0ZW1lbnROb2RlKTtcblxuICAgIGxvY2FsQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSBkZXJpdmVkICcke21ldGFzdGF0ZW1lbnRTdHJpbmd9JyBtZXRhc3RhdGVtZW50IGFzIGEgZGVmaW5lZCBhc3NlcnRpb24uLi5gLCBtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBjb25zdCBtZXRhc3RhdGVtZW50TmVnYXRlZCA9IGlzTWV0YXN0YXRlbWVudE5lZ2F0ZWQobWV0YXN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHZhcmlhYmxlTm9kZVF1ZXJ5KG1ldGFzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICB0ZXJtTm9kZSA9IHRlcm1Ob2RlUXVlcnkobWV0YXN0YXRlbWVudE5vZGUpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdmFyaWFibGUgPSBsb2NhbENvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKHZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHZhcmlhYmxlRGVmaW5lZCA9IGxvY2FsQ29udGV4dC5pc1ZhcmlhYmxlRGVmaW5lZCh2YXJpYWJsZSk7XG5cbiAgICAgICAgaWYgKCFtZXRhc3RhdGVtZW50TmVnYXRlZCkge1xuICAgICAgICAgIGlmICh2YXJpYWJsZURlZmluZWQpIHtcbiAgICAgICAgICAgIGRlcml2ZWRNZXRhc3RhdGVtZW50VmVyaWZpZWRBc0RlZmVpbmRBc3NlcnRpb24gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZXRhc3RhdGVtZW50TmVnYXRlZCkge1xuICAgICAgICAgIGlmICghdmFyaWFibGVEZWZpbmVkKSB7XG4gICAgICAgICAgICBkZXJpdmVkTWV0YXN0YXRlbWVudFZlcmlmaWVkQXNEZWZlaW5kQXNzZXJ0aW9uID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRlcm1Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0ZXJtcyA9IFtdLFxuICAgICAgICAgICAgdGVybVZlcmlmaWVkID0gdmVyaWZ5VGVybSh0ZXJtTm9kZSwgdGVybXMsIGxvY2FsQ29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB2ZXJpZmllZEFoZWFkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICBpZiAodGVybVZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0VGVybSA9IGZpcnN0KHRlcm1zKSxcbiAgICAgICAgICAgICAgdGVybSA9IGZpcnN0VGVybSwgLy8vXG4gICAgICAgICAgICAgIHRlcm1Hcm91bmRlZCA9IGxvY2FsQ29udGV4dC5pc1Rlcm1Hcm91bmRlZCh0ZXJtKTtcblxuICAgICAgICBpZiAoIW1ldGFzdGF0ZW1lbnROZWdhdGVkKSB7XG4gICAgICAgICAgaWYgKHRlcm1Hcm91bmRlZCkge1xuICAgICAgICAgICAgZGVyaXZlZE1ldGFzdGF0ZW1lbnRWZXJpZmllZEFzRGVmZWluZEFzc2VydGlvbiA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1ldGFzdGF0ZW1lbnROZWdhdGVkKSB7XG4gICAgICAgICAgaWYgKCF0ZXJtR3JvdW5kZWQpIHtcbiAgICAgICAgICAgIGRlcml2ZWRNZXRhc3RhdGVtZW50VmVyaWZpZWRBc0RlZmVpbmRBc3NlcnRpb24gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChkZXJpdmVkTWV0YXN0YXRlbWVudFZlcmlmaWVkQXNEZWZlaW5kQXNzZXJ0aW9uKSB7XG4gICAgICBsb2NhbENvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSBkZXJpdmVkICcke21ldGFzdGF0ZW1lbnRTdHJpbmd9JyBtZXRhc3RhdGVtZW50IGFzIGEgZGVmaW5lZCBhc3NlcnRpb24uYCwgbWV0YXN0YXRlbWVudE5vZGUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkZXJpdmVkTWV0YXN0YXRlbWVudFZlcmlmaWVkQXNEZWZlaW5kQXNzZXJ0aW9uO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlTdGF0ZWRNZXRhc3RhdGVtZW50QXNEZWZpbmVkQXNzZXJ0aW9uKG1ldGFzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBzdGF0ZWRNZXRhc3RhdGVtZW50VmVyaWZpZWRBc0RlZmluZWRBc3NlcnRpb24gPSBmYWxzZTtcblxuICBpZiAoIWRlcml2ZWQpIHtcbiAgICBjb25zdCBtZXRhc3RhdGVtZW50U3RyaW5nID0gbG9jYWxDb250ZXh0Lm5vZGVBc1N0cmluZyhtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBsb2NhbENvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgc3RhdGVkICcke21ldGFzdGF0ZW1lbnRTdHJpbmd9JyBtZXRhc3RhdGVtZW50IGFzIGEgZGVmaW5lZCBhc3NlcnRpb24uLi5gLCBtZXRhc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBjb25zdCBpbnRyaW5zaWNMZXZlbCA9IGxvY2FsQ29udGV4dC5pc0ludHJpbnNpY0xldmVsKCk7XG5cbiAgICBpZiAoaW50cmluc2ljTGV2ZWwpIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgVGhlIHN0YXRlZCAnJHttZXRhc3RhdGVtZW50U3RyaW5nfScgbWV0YXN0YXRlbWVudCBhcyBhIGRlZmluZWQgYXNzZXJ0aW9uIGNhbm5vdCBiZSB2ZXJpZmllZCBhdCBpbnRyaW5zaWMgbGV2ZWwuYCwgbWV0YXN0YXRlbWVudE5vZGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBtZXRhc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgICAgICBub25UZXJtaW5hbE5vZGVWZXJpZmllZCA9IG1ldGFMZXZlbE5vZGVWZXJpZmllci52ZXJpZnlOb25UZXJtaW5hbE5vZGUobm9uVGVybWluYWxOb2RlLCBsb2NhbENvbnRleHQsICgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgc3RhdGVkTWV0YXN0YXRlbWVudFZlcmlmaWVkQXNEZWZpbmVkQXNzZXJ0aW9uID0gbm9uVGVybWluYWxOb2RlVmVyaWZpZWQ7IC8vL1xuICAgIH1cblxuICAgIGlmIChzdGF0ZWRNZXRhc3RhdGVtZW50VmVyaWZpZWRBc0RlZmluZWRBc3NlcnRpb24pIHtcbiAgICAgIGxvY2FsQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlIHN0YXRlZCAnJHttZXRhc3RhdGVtZW50U3RyaW5nfScgbWV0YXN0YXRlbWVudCBhcyBhIGRlZmluZWQgYXNzZXJ0aW9uLmAsIG1ldGFzdGF0ZW1lbnROb2RlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVkTWV0YXN0YXRlbWVudFZlcmlmaWVkQXNEZWZpbmVkQXNzZXJ0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNNZXRhc3RhdGVtZW50RGVmaW5lZEFzc2VydGlvbihtZXRhc3RhdGVtZW50Tm9kZSkge1xuICBjb25zdCBvcGVyYXRvclRlcm1pbmFsTm9kZXMgPSBvcGVyYXRvclRlcm1pbmFsTm9kZXNRdWVyeShtZXRhc3RhdGVtZW50Tm9kZSksXG4gICAgICAgIG1ldGFzdGF0ZW1lbnREZWZpbmVkQXNzZXJ0aW9uID0gb3BlcmF0b3JUZXJtaW5hbE5vZGVzLnNvbWUoKG9wZXJhdG9yVGVybWluYWxOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgY29udGVudCA9IG9wZXJhdG9yVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgICAgICBjb250ZW50RGVmaW5lZCA9IChjb250ZW50ID09PSBERUZJTkVEKTtcblxuICAgICAgICAgIGlmIChjb250ZW50RGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICByZXR1cm4gbWV0YXN0YXRlbWVudERlZmluZWRBc3NlcnRpb247XG59XG4iXSwibmFtZXMiOlsidmVyaWZ5TWV0YXN0YXRlbWVudEFzRGVmaW5lZEFzc2VydGlvbiIsImlzTWV0YXN0YXRlbWVudERlZmluZWRBc3NlcnRpb24iLCJ0ZXJtTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwidmFyaWFibGVOb2RlUXVlcnkiLCJvcGVyYXRvclRlcm1pbmFsTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJtZXRhc3RhdGVtZW50Tm9kZSIsImFzc2lnbm1lbnRzIiwiZGVyaXZlZCIsImxvY2FsQ29udGV4dCIsIm1ldGFzdGF0ZW1lbnRWZXJpZmllZEFzRGVmaW5lZEFzc2VydGlvbiIsIm1ldGFzdGF0ZW1lbnREZWZpbmVkQXNzZXJ0aW9uIiwibWV0YXN0YXRlbWVudFN0cmluZyIsIm5vZGVBc1N0cmluZyIsInRyYWNlIiwiZGVmaW5lZEFzc2VydGlvbkZ1bmN0aW9ucyIsInZlcmlmeURlcml2ZWRNZXRhc3RhdGVtZW50QXNEZWZpbmVkQXNzZXJ0aW9uIiwidmVyaWZ5U3RhdGVkTWV0YXN0YXRlbWVudEFzRGVmaW5lZEFzc2VydGlvbiIsInNvbWUiLCJkZWZpbmVkQXNzZXJ0aW9uRnVuY3Rpb24iLCJkZWJ1ZyIsImRlcml2ZWRNZXRhc3RhdGVtZW50VmVyaWZpZWRBc0RlZmVpbmRBc3NlcnRpb24iLCJtZXRhc3RhdGVtZW50TmVnYXRlZCIsImlzTWV0YXN0YXRlbWVudE5lZ2F0ZWQiLCJ2YXJpYWJsZU5vZGUiLCJ0ZXJtTm9kZSIsInZhcmlhYmxlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZURlZmluZWQiLCJpc1ZhcmlhYmxlRGVmaW5lZCIsInRlcm1zIiwidGVybVZlcmlmaWVkIiwidmVyaWZ5VGVybSIsInZlcmlmaWVkQWhlYWQiLCJmaXJzdFRlcm0iLCJmaXJzdCIsInRlcm0iLCJ0ZXJtR3JvdW5kZWQiLCJpc1Rlcm1Hcm91bmRlZCIsInN0YXRlZE1ldGFzdGF0ZW1lbnRWZXJpZmllZEFzRGVmaW5lZEFzc2VydGlvbiIsImludHJpbnNpY0xldmVsIiwiaXNJbnRyaW5zaWNMZXZlbCIsIm5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZVZlcmlmaWVkIiwibWV0YUxldmVsTm9kZVZlcmlmaWVyIiwidmVyaWZ5Tm9uVGVybWluYWxOb2RlIiwib3BlcmF0b3JUZXJtaW5hbE5vZGVzIiwib3BlcmF0b3JUZXJtaW5hbE5vZGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsImNvbnRlbnREZWZpbmVkIiwiREVGSU5FRCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBY0EsT0E2QkM7ZUE3QnVCQTs7SUFpSVJDLCtCQUErQjtlQUEvQkE7OzsyREE3SU87Z0VBQ1c7cUJBRVo7eUJBQ0U7cUJBQ2M7c0JBQ0M7Ozs7OztBQUV2QyxJQUFN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