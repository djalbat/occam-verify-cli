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
var _dom = /*#__PURE__*/ _interop_require_wildcard(require("../../dom"));
var _local = /*#__PURE__*/ _interop_require_default(require("../../context/local"));
var _constants = require("../../constants");
var _query = require("../../utilities/query");
var _substitutions = require("../../utilities/substitutions");
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
var _ContainedAssertion;
var terminalNodesQuery = (0, _query.nodesQuery)("/containedAssertion/@*"), containedAssertionNodeQuery = (0, _query.nodeQuery)("/statement/containedAssertion");
var _default = (0, _dom.domAssigned)((_ContainedAssertion = /*#__PURE__*/ function() {
    function ContainedAssertion(string, node, tokens, term, frame, negated, statement) {
        _class_call_check(this, ContainedAssertion);
        this.string = string;
        this.node = node;
        this.tokens = tokens;
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
            key: "getTokens",
            value: function getTokens() {
                return this.tokens;
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
            value: function verify(assignments, stated, context) {
                var verified = false;
                var containedAssertionString = this.string; ///
                context.trace("Verifying the '".concat(containedAssertionString, "' contained assertion..."));
                var termVerified = this.verifyTerm(assignments, stated, context), frameVerified = this.verifyFrame(assignments, stated, context), statementVerified = this.verifyStatement(assignments, stated, context);
                if (termVerified || frameVerified || statementVerified) {
                    var verifiedWhenStated = false, verifiedWhenDerived = false;
                    if (stated) {
                        verifiedWhenStated = this.verifyWhenStated(assignments, context);
                    } else {
                        verifiedWhenDerived = this.verifyWhenDerived(context);
                    }
                    if (verifiedWhenStated || verifiedWhenDerived) {
                        verified = true;
                    }
                }
                if (verified) {
                    context.debug("...verified the '".concat(containedAssertionString, "' contained assertion."));
                }
                return verified;
            }
        },
        {
            key: "verifyTerm",
            value: function verifyTerm(assignments, stated, context) {
                var termVerified = false;
                if (this.term !== null) {
                    var termString = this.term.getString(), containedAssertionString = this.string; ///
                    context.trace("Verifying the '".concat(containedAssertionString, "' contained assertion's '").concat(termString, "' term..."));
                    termVerified = this.term.verify(context, function() {
                        var verifiedAhead = true;
                        return verifiedAhead;
                    });
                    if (termVerified) {
                        context.debug("...verified the '".concat(containedAssertionString, "' contained assertion's '").concat(termString, "' term."));
                    }
                }
                return termVerified;
            }
        },
        {
            key: "verifyFrame",
            value: function verifyFrame(assignments, stated, context) {
                var frameVerified = false;
                if (this.frame !== null) {
                    var frameString = this.frame.getString(), containedAssertionString = this.string; ///
                    context.trace("Verifying the '".concat(containedAssertionString, "' contained assertion's '").concat(frameString, "' frame..."));
                    stated = true; ///
                    assignments = null; ///
                    frameVerified = this.frame.verify(assignments, stated, context);
                    if (frameVerified) {
                        context.debug("...verified the '".concat(containedAssertionString, "' contained assertion's '").concat(frameString, "' frame."));
                    }
                }
                return frameVerified;
            }
        },
        {
            key: "verifyStatement",
            value: function verifyStatement(assignments, stated, context) {
                var statementVerified = false;
                if (this.statement !== null) {
                    var statementString = this.statement.getString(), containedAssertionString = this.string; ///
                    context.trace("Verifying the '".concat(containedAssertionString, "' contained assertion's '").concat(statementString, "' statement..."));
                    stated = true; ///
                    assignments = null; ///
                    statementVerified = this.statement.verify(assignments, stated, context);
                    if (statementVerified) {
                        context.debug("...verified the '".concat(containedAssertionString, "' contained assertion's '").concat(statementString, "' statement."));
                    }
                }
                return statementVerified;
            }
        },
        {
            key: "verifyWhenStated",
            value: function verifyWhenStated(assignments, context) {
                var verifiedWhenStated;
                var containedAssertionString = this.string; ///
                context.trace("Verifying the '".concat(containedAssertionString, "' stated contained assertion..."));
                verifiedWhenStated = true;
                if (verifiedWhenStated) {
                    context.debug("...verified the '".concat(containedAssertionString, "' stated contained assertion."));
                }
                return verifiedWhenStated;
            }
        },
        {
            key: "verifyWhenDerived",
            value: function verifyWhenDerived1(context) {
                var verifiedWhenDerived;
                var containedAssertionString = this.string; ///
                context.trace("Verifying the '".concat(containedAssertionString, "' derived contained assertion..."));
                verifiedWhenDerived = verifyWhenDerived(this.term, this.frame, this.statement, this.negated, context);
                if (verifiedWhenDerived) {
                    context.debug("...verified the '".concat(containedAssertionString, "' derived contained assertion."));
                }
                return verifiedWhenDerived;
            }
        },
        {
            key: "unifyIndependently",
            value: function unifyIndependently(substitutions, context) {
                var unifiedIndependently;
                var containedAssertionString = this.string; ///
                context.trace("Unifying the '".concat(containedAssertionString, "' contained assertion independently..."));
                var localContext = _local.default.fromContextAndTokens(context, this.tokens);
                context = localContext; ///
                var term = (0, _substitutions.termFromTermAndSubstitutions)(this.term, substitutions, context), frame = (0, _substitutions.frameFromFrameAndSubstitutions)(this.frame, substitutions, context), statement = (0, _substitutions.statementFromStatementAndSubstitutions)(this.statement, substitutions, context), verifiedWhenDerived = verifyWhenDerived(term, frame, statement, this.negated, context);
                unifiedIndependently = verifiedWhenDerived; ///
                if (unifiedIndependently) {
                    context.debug("...unified the '".concat(containedAssertionString, "' contained assertion independently."));
                }
                return unifiedIndependently;
            }
        }
    ], [
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode, context) {
                var containedAssertion = null;
                var containedAssertionNode = containedAssertionNodeQuery(statementNode);
                if (containedAssertionNode !== null) {
                    var Term = _dom.default.Term, Frame = _dom.default.Frame, Statement = _dom.default.Statement, node = containedAssertionNode, string = context.nodeAsString(node), tokens = context.nodeAsTokens(node), term = Term.fromContainedAssertionNode(containedAssertionNode, context), frame = Frame.fromContainedAssertionNode(containedAssertionNode, context), statement = Statement.fromContainedAssertionNode(containedAssertionNode, context), negated = isNegated(containedAssertionNode); ///
                    containedAssertion = new ContainedAssertion(string, node, tokens, term, frame, negated, statement);
                }
                return containedAssertion;
            }
        }
    ]);
    return ContainedAssertion;
}(), _define_property(_ContainedAssertion, "name", "ContainedAssertion"), _ContainedAssertion));
function isNegated(definedAssertionNode) {
    var terminalNodes = terminalNodesQuery(definedAssertionNode), negated = terminalNodes.some(function(terminalNode) {
        var content = terminalNode.getContent(), contentMessing = content === _constants.MISSING;
        if (contentMessing) {
            return true;
        }
    });
    return negated;
}
function verifyWhenDerived(term, frame, statement, negated, context) {
    var verifiedWhenDerived = false;
    if (statement !== null) {
        if (term !== null) {
            var termContained = statement.isTermContained(term, context);
            if (!negated && termContained) {
                verifiedWhenDerived = true;
            }
            if (negated && !termContained) {
                verifiedWhenDerived = true;
            }
        }
        if (frame !== null) {
            var frameContained = statement.isFrameContained(frame, context);
            if (!negated && frameContained) {
                verifiedWhenDerived = true;
            }
            if (negated && !frameContained) {
                verifiedWhenDerived = true;
            }
        }
    }
    return verifiedWhenDerived;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vYXNzZXJ0aW9uL2NvbnRhaW5lZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0L2xvY2FsXCI7XG5cbmltcG9ydCB7IE1JU1NJTkcgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi8uLi9kb21cIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHRlcm1Gcm9tVGVybUFuZFN1YnN0aXR1dGlvbnMsIGZyYW1lRnJvbUZyYW1lQW5kU3Vic3RpdHV0aW9ucywgc3RhdGVtZW50RnJvbVN0YXRlbWVudEFuZFN1YnN0aXR1dGlvbnMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N1YnN0aXR1dGlvbnNcIjtcblxuY29uc3QgdGVybWluYWxOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9jb250YWluZWRBc3NlcnRpb24vQCpcIiksXG4gICAgICBjb250YWluZWRBc3NlcnRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L2NvbnRhaW5lZEFzc2VydGlvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgQ29udGFpbmVkQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCB0b2tlbnMsIHRlcm0sIGZyYW1lLCBuZWdhdGVkLCBzdGF0ZW1lbnQpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMudGVybSA9IHRlcm07XG4gICAgdGhpcy5mcmFtZSA9IGZyYW1lO1xuICAgIHRoaXMubmVnYXRlZCA9IG5lZ2F0ZWQ7XG4gICAgdGhpcy5zdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGdldEZyYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmZyYW1lO1xuICB9XG5cbiAgaXNOZWdhdGVkKCkge1xuICAgIHJldHVybiB0aGlzLm5lZ2F0ZWQ7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRhaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgY29udGFpbmVkIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3QgdGVybVZlcmlmaWVkID0gdGhpcy52ZXJpZnlUZXJtKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpLFxuICAgICAgICAgIGZyYW1lVmVyaWZpZWQgPSB0aGlzLnZlcmlmeUZyYW1lKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpLFxuICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVkID0gdGhpcy52ZXJpZnlTdGF0ZW1lbnQoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dClcblxuICAgIGlmICh0ZXJtVmVyaWZpZWQgfHwgZnJhbWVWZXJpZmllZCB8fCBzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgbGV0IHZlcmlmaWVkV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0aGlzLnZlcmlmeVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IHRoaXMudmVyaWZ5V2hlbkRlcml2ZWQoY29udGV4dCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh2ZXJpZmllZFdoZW5TdGF0ZWQgfHwgdmVyaWZpZWRXaGVuRGVyaXZlZCkge1xuICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgY29udGFpbmVkIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlUZXJtKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy50ZXJtICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGhpcy50ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgICAgY29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIGNvbnRhaW5lZCBhc3NlcnRpb24ncyAnJHt0ZXJtU3RyaW5nfScgdGVybS4uLmApO1xuXG4gICAgICB0ZXJtVmVyaWZpZWQgPSB0aGlzLnRlcm0udmVyaWZ5KGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgcmV0dXJuIHZlcmlmaWVkQWhlYWQ7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHRlcm1WZXJpZmllZCkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgY29udGFpbmVkIGFzc2VydGlvbidzICcke3Rlcm1TdHJpbmd9JyB0ZXJtLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZXJtVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlGcmFtZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lVmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLmZyYW1lICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZnJhbWUuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBjb250YWluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgY29udGFpbmVkIGFzc2VydGlvbidzICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuLi5gKTtcblxuICAgICAgc3RhdGVkID0gdHJ1ZTsgIC8vL1xuXG4gICAgICBhc3NpZ25tZW50cyA9IG51bGw7IC8vL1xuXG4gICAgICBmcmFtZVZlcmlmaWVkID0gdGhpcy5mcmFtZS52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChmcmFtZVZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBjb250YWluZWQgYXNzZXJ0aW9uJ3MgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVN0YXRlbWVudChhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5zdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgICAgY29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIGNvbnRhaW5lZCBhc3NlcnRpb24ncyAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgICAgc3RhdGVkID0gdHJ1ZTsgIC8vL1xuXG4gICAgICBhc3NpZ25tZW50cyA9IG51bGw7IC8vL1xuXG4gICAgICBzdGF0ZW1lbnRWZXJpZmllZCA9IHRoaXMuc3RhdGVtZW50LnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBjb250YWluZWQgYXNzZXJ0aW9uJ3MgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuU3RhdGVkO1xuXG4gICAgY29uc3QgY29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgY29udGFpbmVkIGFzc2VydGlvbi4uLmApO1xuXG4gICAgdmVyaWZpZWRXaGVuU3RhdGVkID0gdHJ1ZTtcblxuICAgIGlmICh2ZXJpZmllZFdoZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgY29udGFpbmVkIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWRXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlbkRlcml2ZWQoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZFdoZW5EZXJpdmVkO1xuXG4gICAgY29uc3QgY29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIGNvbnRhaW5lZCBhc3NlcnRpb24uLi5gKTtcblxuICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB2ZXJpZnlXaGVuRGVyaXZlZCh0aGlzLnRlcm0sIHRoaXMuZnJhbWUsIHRoaXMuc3RhdGVtZW50LCB0aGlzLm5lZ2F0ZWQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHZlcmlmaWVkV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIGNvbnRhaW5lZCBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkV2hlbkRlcml2ZWQ7XG4gIH1cblxuICB1bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCB1bmlmaWVkSW5kZXBlbmRlbnRseTtcblxuICAgIGNvbnN0IGNvbnRhaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBjb250YWluZWQgYXNzZXJ0aW9uIGluZGVwZW5kZW50bHkuLi5gKTtcblxuICAgIGNvbnN0IGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tQ29udGV4dEFuZFRva2Vucyhjb250ZXh0LCB0aGlzLnRva2Vucyk7XG5cbiAgICBjb250ZXh0ID0gbG9jYWxDb250ZXh0OyAvLy9cblxuICAgIGNvbnN0IHRlcm0gPSB0ZXJtRnJvbVRlcm1BbmRTdWJzdGl0dXRpb25zKHRoaXMudGVybSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCksXG4gICAgICAgICAgZnJhbWUgPSBmcmFtZUZyb21GcmFtZUFuZFN1YnN0aXR1dGlvbnModGhpcy5mcmFtZSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudEFuZFN1YnN0aXR1dGlvbnModGhpcy5zdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpLFxuICAgICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB2ZXJpZnlXaGVuRGVyaXZlZCh0ZXJtLCBmcmFtZSwgc3RhdGVtZW50LCB0aGlzLm5lZ2F0ZWQsIGNvbnRleHQpO1xuXG4gICAgdW5pZmllZEluZGVwZW5kZW50bHkgPSB2ZXJpZmllZFdoZW5EZXJpdmVkOyAvLy9cblxuICAgIGlmICh1bmlmaWVkSW5kZXBlbmRlbnRseSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgY29udGFpbmVkIGFzc2VydGlvbiBpbmRlcGVuZGVudGx5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVkSW5kZXBlbmRlbnRseTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJDb250YWluZWRBc3NlcnRpb25cIjtcblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCBjb250YWluZWRBc3NlcnRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgY29udGFpbmVkQXNzZXJ0aW9uTm9kZSA9IGNvbnRhaW5lZEFzc2VydGlvbk5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICAgIGlmIChjb250YWluZWRBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFRlcm0sIEZyYW1lLCBTdGF0ZW1lbnQgfSA9IGRvbSxcbiAgICAgICAgICAgIG5vZGUgPSBjb250YWluZWRBc3NlcnRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgIHRva2VucyA9IGNvbnRleHQubm9kZUFzVG9rZW5zKG5vZGUpLFxuICAgICAgICAgICAgdGVybSA9IFRlcm0uZnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBmcmFtZSA9IEZyYW1lLmZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgbmVnYXRlZCA9IGlzTmVnYXRlZChjb250YWluZWRBc3NlcnRpb25Ob2RlKTsgIC8vL1xuXG4gICAgICBjb250YWluZWRBc3NlcnRpb24gPSBuZXcgQ29udGFpbmVkQXNzZXJ0aW9uKHN0cmluZywgbm9kZSwgdG9rZW5zLCB0ZXJtLCBmcmFtZSwgbmVnYXRlZCwgc3RhdGVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGFpbmVkQXNzZXJ0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gaXNOZWdhdGVkKGRlZmluZWRBc3NlcnRpb25Ob2RlKSB7XG4gIGNvbnN0IHRlcm1pbmFsTm9kZXMgPSB0ZXJtaW5hbE5vZGVzUXVlcnkoZGVmaW5lZEFzc2VydGlvbk5vZGUpLFxuICAgICAgICBuZWdhdGVkID0gdGVybWluYWxOb2Rlcy5zb21lKCh0ZXJtaW5hbE5vZGUpID0+IHsgIC8vL1xuICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgICAgIGNvbnRlbnRNZXNzaW5nID0gKGNvbnRlbnQgPT09IE1JU1NJTkcpO1xuXG4gICAgICAgICAgaWYgKGNvbnRlbnRNZXNzaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBuZWdhdGVkO1xufVxuXG5mdW5jdGlvbiB2ZXJpZnlXaGVuRGVyaXZlZCh0ZXJtLCBmcmFtZSwgc3RhdGVtZW50LCBuZWdhdGVkLCBjb250ZXh0KSB7XG4gIGxldCB2ZXJpZmllZFdoZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0ZXJtQ29udGFpbmVkID0gc3RhdGVtZW50LmlzVGVybUNvbnRhaW5lZCh0ZXJtLCBjb250ZXh0KTtcblxuICAgICAgaWYgKCFuZWdhdGVkICYmIHRlcm1Db250YWluZWQpIHtcbiAgICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWdhdGVkICYmICF0ZXJtQ29udGFpbmVkKSB7XG4gICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFtZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZnJhbWVDb250YWluZWQgPSBzdGF0ZW1lbnQuaXNGcmFtZUNvbnRhaW5lZChmcmFtZSwgY29udGV4dCk7XG5cbiAgICAgIGlmICghbmVnYXRlZCAmJiBmcmFtZUNvbnRhaW5lZCkge1xuICAgICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZ2F0ZWQgJiYgIWZyYW1lQ29udGFpbmVkKSB7XG4gICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB2ZXJpZmllZFdoZW5EZXJpdmVkO1xufSJdLCJuYW1lcyI6WyJ0ZXJtaW5hbE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwiY29udGFpbmVkQXNzZXJ0aW9uTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwiZG9tQXNzaWduZWQiLCJDb250YWluZWRBc3NlcnRpb24iLCJzdHJpbmciLCJub2RlIiwidG9rZW5zIiwidGVybSIsImZyYW1lIiwibmVnYXRlZCIsInN0YXRlbWVudCIsImdldFN0cmluZyIsImdldE5vZGUiLCJnZXRUb2tlbnMiLCJnZXRUZXJtIiwiZ2V0RnJhbWUiLCJpc05lZ2F0ZWQiLCJnZXRTdGF0ZW1lbnQiLCJ2ZXJpZnkiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsImNvbnRleHQiLCJ2ZXJpZmllZCIsImNvbnRhaW5lZEFzc2VydGlvblN0cmluZyIsInRyYWNlIiwidGVybVZlcmlmaWVkIiwidmVyaWZ5VGVybSIsImZyYW1lVmVyaWZpZWQiLCJ2ZXJpZnlGcmFtZSIsInN0YXRlbWVudFZlcmlmaWVkIiwidmVyaWZ5U3RhdGVtZW50IiwidmVyaWZpZWRXaGVuU3RhdGVkIiwidmVyaWZpZWRXaGVuRGVyaXZlZCIsInZlcmlmeVdoZW5TdGF0ZWQiLCJ2ZXJpZnlXaGVuRGVyaXZlZCIsImRlYnVnIiwidGVybVN0cmluZyIsInZlcmlmaWVkQWhlYWQiLCJmcmFtZVN0cmluZyIsInN0YXRlbWVudFN0cmluZyIsInVuaWZ5SW5kZXBlbmRlbnRseSIsInN1YnN0aXR1dGlvbnMiLCJ1bmlmaWVkSW5kZXBlbmRlbnRseSIsImxvY2FsQ29udGV4dCIsIkxvY2FsQ29udGV4dCIsImZyb21Db250ZXh0QW5kVG9rZW5zIiwidGVybUZyb21UZXJtQW5kU3Vic3RpdHV0aW9ucyIsImZyYW1lRnJvbUZyYW1lQW5kU3Vic3RpdHV0aW9ucyIsInN0YXRlbWVudEZyb21TdGF0ZW1lbnRBbmRTdWJzdGl0dXRpb25zIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwiY29udGFpbmVkQXNzZXJ0aW9uIiwiY29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsIlRlcm0iLCJkb20iLCJGcmFtZSIsIlN0YXRlbWVudCIsIm5vZGVBc1N0cmluZyIsIm5vZGVBc1Rva2VucyIsImZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlIiwibmFtZSIsImRlZmluZWRBc3NlcnRpb25Ob2RlIiwidGVybWluYWxOb2RlcyIsInNvbWUiLCJ0ZXJtaW5hbE5vZGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsImNvbnRlbnRNZXNzaW5nIiwiTUlTU0lORyIsInRlcm1Db250YWluZWQiLCJpc1Rlcm1Db250YWluZWQiLCJmcmFtZUNvbnRhaW5lZCIsImlzRnJhbWVDb250YWluZWQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWFBOzs7ZUFBQTs7OzJEQVhnQjs0REFDUzt5QkFFRDtxQkFFYzs2QkFDK0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJILElBQU1BLHFCQUFxQkMsSUFBQUEsaUJBQVUsRUFBQywyQkFDaENDLDhCQUE4QkMsSUFBQUEsZ0JBQVMsRUFBQztJQUU5QyxXQUFlQyxJQUFBQSxnQkFBVyx1Q0FBQzthQUFNQyxtQkFDbkJDLE1B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