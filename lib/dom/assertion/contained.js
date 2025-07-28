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
                    var termString = this.term.getString();
                    context.trace("Verifying the '".concat(termString, "' term..."));
                    var termSimple = this.term.isSimple();
                    if (!termSimple) {
                        context.debug("The '".concat(termString, "' term is not simple."));
                    } else {
                        termVerified = this.term.verify(context, function() {
                            var verifiedAhead = true;
                            return verifiedAhead;
                        });
                        if (termVerified) {
                            context.debug("...verified the '".concat(termString, "' term."));
                        }
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
                    var frameString = this.frame.getString();
                    context.trace("Verifying the '".concat(frameString, "' frame..."));
                    var frameSimple = this.frame.isSimple();
                    if (!frameSimple) {
                        context.debug("The '".concat(frameString, "' frame is not simple."));
                    } else {
                        stated = true; ///
                        assignments = null; ///
                        frameVerified = this.frame.verify(assignments, stated, context);
                        if (frameVerified) {
                            context.debug("...verified the '".concat(frameString, "' frame."));
                        }
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
                    var statementString = this.statement.getString();
                    context.trace("Verifying the '".concat(statementString, "' statement..."));
                    stated = true; ///
                    assignments = null; ///
                    statementVerified = this.statement.verify(assignments, stated, context);
                    if (statementVerified) {
                        context.debug("...verified the '".concat(statementString, "' statement."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vYXNzZXJ0aW9uL2NvbnRhaW5lZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vLi4vZG9tXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuLi8uLi9jb250ZXh0L2xvY2FsXCI7XG5cbmltcG9ydCB7IE1JU1NJTkcgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi8uLi9kb21cIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IHRlcm1Gcm9tVGVybUFuZFN1YnN0aXR1dGlvbnMsIGZyYW1lRnJvbUZyYW1lQW5kU3Vic3RpdHV0aW9ucywgc3RhdGVtZW50RnJvbVN0YXRlbWVudEFuZFN1YnN0aXR1dGlvbnMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N1YnN0aXR1dGlvbnNcIjtcblxuY29uc3QgdGVybWluYWxOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9jb250YWluZWRBc3NlcnRpb24vQCpcIiksXG4gICAgICBjb250YWluZWRBc3NlcnRpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L2NvbnRhaW5lZEFzc2VydGlvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgZG9tQXNzaWduZWQoY2xhc3MgQ29udGFpbmVkQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCB0b2tlbnMsIHRlcm0sIGZyYW1lLCBuZWdhdGVkLCBzdGF0ZW1lbnQpIHtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMudGVybSA9IHRlcm07XG4gICAgdGhpcy5mcmFtZSA9IGZyYW1lO1xuICAgIHRoaXMubmVnYXRlZCA9IG5lZ2F0ZWQ7XG4gICAgdGhpcy5zdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGdldEZyYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmZyYW1lO1xuICB9XG5cbiAgaXNOZWdhdGVkKCkge1xuICAgIHJldHVybiB0aGlzLm5lZ2F0ZWQ7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRhaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgY29udGFpbmVkIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3QgdGVybVZlcmlmaWVkID0gdGhpcy52ZXJpZnlUZXJtKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpLFxuICAgICAgICAgIGZyYW1lVmVyaWZpZWQgPSB0aGlzLnZlcmlmeUZyYW1lKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpLFxuICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVkID0gdGhpcy52ZXJpZnlTdGF0ZW1lbnQoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dClcblxuICAgIGlmICh0ZXJtVmVyaWZpZWQgfHwgZnJhbWVWZXJpZmllZCB8fCBzdGF0ZW1lbnRWZXJpZmllZCkge1xuICAgICAgbGV0IHZlcmlmaWVkV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICB2ZXJpZmllZFdoZW5TdGF0ZWQgPSB0aGlzLnZlcmlmeVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IHRoaXMudmVyaWZ5V2hlbkRlcml2ZWQoY29udGV4dCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh2ZXJpZmllZFdoZW5TdGF0ZWQgfHwgdmVyaWZpZWRXaGVuRGVyaXZlZCkge1xuICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgY29udGFpbmVkIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlUZXJtKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybVZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy50ZXJtICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGhpcy50ZXJtLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLi4uYCk7XG5cbiAgICAgIGNvbnN0IHRlcm1TaW1wbGUgPSB0aGlzLnRlcm0uaXNTaW1wbGUoKTtcblxuICAgICAgaWYgKCF0ZXJtU2ltcGxlKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBpcyBub3Qgc2ltcGxlLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGVybVZlcmlmaWVkID0gdGhpcy50ZXJtLnZlcmlmeShjb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmVyaWZpZWRBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gdmVyaWZpZWRBaGVhZDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRlcm1WZXJpZmllZCkge1xuICAgICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZXJtVmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlGcmFtZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lVmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLmZyYW1lICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZnJhbWUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS4uLmApO1xuXG4gICAgICBjb25zdCBmcmFtZVNpbXBsZSA9IHRoaXMuZnJhbWUuaXNTaW1wbGUoKTtcblxuICAgICAgaWYgKCFmcmFtZVNpbXBsZSkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSBpcyBub3Qgc2ltcGxlLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGVkID0gdHJ1ZTsgIC8vL1xuXG4gICAgICAgIGFzc2lnbm1lbnRzID0gbnVsbDsgLy8vXG5cbiAgICAgICAgZnJhbWVWZXJpZmllZCA9IHRoaXMuZnJhbWUudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChmcmFtZVZlcmlmaWVkKSB7XG4gICAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuYCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWVWZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeVN0YXRlbWVudChhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5zdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgICBzdGF0ZWQgPSB0cnVlOyAgLy8vXG5cbiAgICAgIGFzc2lnbm1lbnRzID0gbnVsbDsgLy8vXG5cbiAgICAgIHN0YXRlbWVudFZlcmlmaWVkID0gdGhpcy5zdGF0ZW1lbnQudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VmVyaWZpZWQpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVkV2hlblN0YXRlZDtcblxuICAgIGNvbnN0IGNvbnRhaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIGNvbnRhaW5lZCBhc3NlcnRpb24uLi5gKTtcblxuICAgIHZlcmlmaWVkV2hlblN0YXRlZCA9IHRydWU7XG5cbiAgICBpZiAodmVyaWZpZWRXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIGNvbnRhaW5lZCBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWRXaGVuRGVyaXZlZDtcblxuICAgIGNvbnN0IGNvbnRhaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCBjb250YWluZWQgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gdmVyaWZ5V2hlbkRlcml2ZWQodGhpcy50ZXJtLCB0aGlzLmZyYW1lLCB0aGlzLnN0YXRlbWVudCwgdGhpcy5uZWdhdGVkLCBjb250ZXh0KTtcblxuICAgIGlmICh2ZXJpZmllZFdoZW5EZXJpdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCBjb250YWluZWQgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZFdoZW5EZXJpdmVkO1xuICB9XG5cbiAgdW5pZnlJbmRlcGVuZGVudGx5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllZEluZGVwZW5kZW50bHk7XG5cbiAgICBjb25zdCBjb250YWluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgY29udGFpbmVkIGFzc2VydGlvbiBpbmRlcGVuZGVudGx5Li4uYCk7XG5cbiAgICBjb25zdCBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUNvbnRleHRBbmRUb2tlbnMoY29udGV4dCwgdGhpcy50b2tlbnMpO1xuXG4gICAgY29udGV4dCA9IGxvY2FsQ29udGV4dDsgLy8vXG5cbiAgICBjb25zdCB0ZXJtID0gdGVybUZyb21UZXJtQW5kU3Vic3RpdHV0aW9ucyh0aGlzLnRlcm0sIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpLFxuICAgICAgICAgIGZyYW1lID0gZnJhbWVGcm9tRnJhbWVBbmRTdWJzdGl0dXRpb25zKHRoaXMuZnJhbWUsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnRBbmRTdWJzdGl0dXRpb25zKHRoaXMuc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSxcbiAgICAgICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gdmVyaWZ5V2hlbkRlcml2ZWQodGVybSwgZnJhbWUsIHN0YXRlbWVudCwgdGhpcy5uZWdhdGVkLCBjb250ZXh0KTtcblxuICAgIHVuaWZpZWRJbmRlcGVuZGVudGx5ID0gdmVyaWZpZWRXaGVuRGVyaXZlZDsgLy8vXG5cbiAgICBpZiAodW5pZmllZEluZGVwZW5kZW50bHkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIGNvbnRhaW5lZCBhc3NlcnRpb24gaW5kZXBlbmRlbnRseS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllZEluZGVwZW5kZW50bHk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQ29udGFpbmVkQXNzZXJ0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgY29udGFpbmVkQXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGNvbnRhaW5lZEFzc2VydGlvbk5vZGUgPSBjb250YWluZWRBc3NlcnRpb25Ob2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICBpZiAoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBUZXJtLCBGcmFtZSwgU3RhdGVtZW50IH0gPSBkb20sXG4gICAgICAgICAgICBub2RlID0gY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICB0b2tlbnMgPSBjb250ZXh0Lm5vZGVBc1Rva2Vucyhub2RlKSxcbiAgICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgZnJhbWUgPSBGcmFtZS5mcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHN0YXRlbWVudCA9IFN0YXRlbWVudC5mcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5lZ2F0ZWQgPSBpc05lZ2F0ZWQoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSk7ICAvLy9cblxuICAgICAgY29udGFpbmVkQXNzZXJ0aW9uID0gbmV3IENvbnRhaW5lZEFzc2VydGlvbihzdHJpbmcsIG5vZGUsIHRva2VucywgdGVybSwgZnJhbWUsIG5lZ2F0ZWQsIHN0YXRlbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRhaW5lZEFzc2VydGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGlzTmVnYXRlZChkZWZpbmVkQXNzZXJ0aW9uTm9kZSkge1xuICBjb25zdCB0ZXJtaW5hbE5vZGVzID0gdGVybWluYWxOb2Rlc1F1ZXJ5KGRlZmluZWRBc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgbmVnYXRlZCA9IHRlcm1pbmFsTm9kZXMuc29tZSgodGVybWluYWxOb2RlKSA9PiB7ICAvLy9cbiAgICAgICAgICBjb25zdCBjb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgICAgICBjb250ZW50TWVzc2luZyA9IChjb250ZW50ID09PSBNSVNTSU5HKTtcblxuICAgICAgICAgIGlmIChjb250ZW50TWVzc2luZykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICByZXR1cm4gbmVnYXRlZDtcbn1cblxuZnVuY3Rpb24gdmVyaWZ5V2hlbkRlcml2ZWQodGVybSwgZnJhbWUsIHN0YXRlbWVudCwgbmVnYXRlZCwgY29udGV4dCkge1xuICBsZXQgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdGVybUNvbnRhaW5lZCA9IHN0YXRlbWVudC5pc1Rlcm1Db250YWluZWQodGVybSwgY29udGV4dCk7XG5cbiAgICAgIGlmICghbmVnYXRlZCAmJiB0ZXJtQ29udGFpbmVkKSB7XG4gICAgICAgIHZlcmlmaWVkV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVnYXRlZCAmJiAhdGVybUNvbnRhaW5lZCkge1xuICAgICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJhbWUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGZyYW1lQ29udGFpbmVkID0gc3RhdGVtZW50LmlzRnJhbWVDb250YWluZWQoZnJhbWUsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoIW5lZ2F0ZWQgJiYgZnJhbWVDb250YWluZWQpIHtcbiAgICAgICAgdmVyaWZpZWRXaGVuRGVyaXZlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWdhdGVkICYmICFmcmFtZUNvbnRhaW5lZCkge1xuICAgICAgICB2ZXJpZmllZFdoZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmVyaWZpZWRXaGVuRGVyaXZlZDtcbn0iXSwibmFtZXMiOlsidGVybWluYWxOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsImNvbnRhaW5lZEFzc2VydGlvbk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImRvbUFzc2lnbmVkIiwiQ29udGFpbmVkQXNzZXJ0aW9uIiwic3RyaW5nIiwibm9kZSIsInRva2VucyIsInRlcm0iLCJmcmFtZSIsIm5lZ2F0ZWQiLCJzdGF0ZW1lbnQiLCJnZXRTdHJpbmciLCJnZXROb2RlIiwiZ2V0VG9rZW5zIiwiZ2V0VGVybSIsImdldEZyYW1lIiwiaXNOZWdhdGVkIiwiZ2V0U3RhdGVtZW50IiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJjb250ZXh0IiwidmVyaWZpZWQiLCJjb250YWluZWRBc3NlcnRpb25TdHJpbmciLCJ0cmFjZSIsInRlcm1WZXJpZmllZCIsInZlcmlmeVRlcm0iLCJmcmFtZVZlcmlmaWVkIiwidmVyaWZ5RnJhbWUiLCJzdGF0ZW1lbnRWZXJpZmllZCIsInZlcmlmeVN0YXRlbWVudCIsInZlcmlmaWVkV2hlblN0YXRlZCIsInZlcmlmaWVkV2hlbkRlcml2ZWQiLCJ2ZXJpZnlXaGVuU3RhdGVkIiwidmVyaWZ5V2hlbkRlcml2ZWQiLCJkZWJ1ZyIsInRlcm1TdHJpbmciLCJ0ZXJtU2ltcGxlIiwiaXNTaW1wbGUiLCJ2ZXJpZmllZEFoZWFkIiwiZnJhbWVTdHJpbmciLCJmcmFtZVNpbXBsZSIsInN0YXRlbWVudFN0cmluZyIsInVuaWZ5SW5kZXBlbmRlbnRseSIsInN1YnN0aXR1dGlvbnMiLCJ1bmlmaWVkSW5kZXBlbmRlbnRseSIsImxvY2FsQ29udGV4dCIsIkxvY2FsQ29udGV4dCIsImZyb21Db250ZXh0QW5kVG9rZW5zIiwidGVybUZyb21UZXJtQW5kU3Vic3RpdHV0aW9ucyIsImZyYW1lRnJvbUZyYW1lQW5kU3Vic3RpdHV0aW9ucyIsInN0YXRlbWVudEZyb21TdGF0ZW1lbnRBbmRTdWJzdGl0dXRpb25zIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwiY29udGFpbmVkQXNzZXJ0aW9uIiwiY29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsIlRlcm0iLCJkb20iLCJGcmFtZSIsIlN0YXRlbWVudCIsIm5vZGVBc1N0cmluZyIsIm5vZGVBc1Rva2VucyIsImZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlIiwibmFtZSIsImRlZmluZWRBc3NlcnRpb25Ob2RlIiwidGVybWluYWxOb2RlcyIsInNvbWUiLCJ0ZXJtaW5hbE5vZGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsImNvbnRlbnRNZXNzaW5nIiwiTUlTU0lORyIsInRlcm1Db250YWluZWQiLCJpc1Rlcm1Db250YWluZWQiLCJmcmFtZUNvbnRhaW5lZCIsImlzRnJhbWVDb250YWluZWQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWFBOzs7ZUFBQTs7OzJEQVhnQjs0REFDUzt5QkFFRDtxQkFFYzs2QkFDK0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXJILElBQU1BLHFCQUFxQkMsSUFBQUEsaUJBQVUsRUFBQywyQkFDaENDLDhCQUE4QkMsSUFBQUEsZ0JBQVMsRUFBQztJQUU5QyxXQUFlQyxJQUFBQSxnQkFBVyx1Q0FBQzthQUFNQyxtQkFDbkJDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLFNBQVM7Z0NBRGxDUDtR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