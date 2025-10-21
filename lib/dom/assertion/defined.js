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
var _DefinedAssertion;
var _default = (0, _dom.domAssigned)((_DefinedAssertion = /*#__PURE__*/ function() {
    function DefinedAssertion(string, node, tokens, term, frame, negated) {
        _class_call_check(this, DefinedAssertion);
        this.string = string;
        this.node = node;
        this.tokens = tokens;
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
            key: "verify",
            value: function verify(assignments, stated, context) {
                var verifies = false;
                var definedAssertionString = this.string; ///
                context.trace("Verifying the '".concat(definedAssertionString, "' defined assertion..."));
                var termVerifies = this.verifyTerm(assignments, stated, context), frameVerifies = this.verifyFrame(assignments, stated, context);
                if (termVerifies || frameVerifies) {
                    var verifiesWhenStated = false, verifiesWhenDerived = false;
                    if (stated) {
                        verifiesWhenStated = this.verifyWhenStated(assignments, context);
                    } else {
                        verifiesWhenDerived = this.verifyWhenDerived(context);
                    }
                    if (verifiesWhenStated || verifiesWhenDerived) {
                        verifies = true;
                    }
                }
                if (verifies) {
                    context.debug("...verified the '".concat(definedAssertionString, "' defined assertion."));
                }
                return verifies;
            }
        },
        {
            key: "verifyTerm",
            value: function verifyTerm(assignments, stated, context) {
                var termVerifies = false;
                if (this.term !== null) {
                    var termString = this.term.getString(); ///
                    context.trace("Verifying the '".concat(termString, "' term..."));
                    var termSimple = this.term.isSimple();
                    if (!termSimple) {
                        context.debug("The '".concat(termString, "' term is not simple."));
                    } else {
                        termVerifies = this.term.verify(context, function() {
                            var verifiesAhead = true;
                            return verifiesAhead;
                        });
                        if (termVerifies) {
                            context.debug("...verified the '".concat(termString, "' term."));
                        }
                    }
                }
                return termVerifies;
            }
        },
        {
            key: "verifyFrame",
            value: function verifyFrame(assignments, stated, context) {
                var frameVerifies = false;
                if (this.frame !== null) {
                    var frameString = this.frame.getString(); ///
                    context.trace("Verifying the '".concat(frameString, "' frame..."));
                    var frameSimple = this.frame.isSimple();
                    if (!frameSimple) {
                        context.debug("The '".concat(frameString, "' frame is not simple."));
                    } else {
                        stated = true; ///
                        assignments = null; ///
                        frameVerifies = this.frame.verify(assignments, stated, context);
                        if (frameVerifies) {
                            context.debug("...verified the '".concat(frameString, "' frame."));
                        }
                    }
                }
                return frameVerifies;
            }
        },
        {
            key: "verifyWhenStated",
            value: function verifyWhenStated(assignments, context) {
                var verifiesWhenStated;
                var definedAssertionString = this.string; ///
                context.trace("Verifying the '".concat(definedAssertionString, "' stated defined assertion..."));
                verifiesWhenStated = true;
                if (verifiesWhenStated) {
                    context.debug("...verified the '".concat(definedAssertionString, "' stated defined assertion."));
                }
                return verifiesWhenStated;
            }
        },
        {
            key: "verifyWhenDerived",
            value: function verifyWhenDerived1(context) {
                var verifiesWhenDerived;
                var definedAssertionString = this.string; ///
                context.trace("Verifying the '".concat(definedAssertionString, "' derived defined assertion..."));
                verifiesWhenDerived = verifyWhenDerived(this.term, this.frame, this.negated, context);
                if (verifiesWhenDerived) {
                    context.debug("...verified the '".concat(definedAssertionString, "' derived defined assertion."));
                }
                return verifiesWhenDerived;
            }
        },
        {
            key: "unifyIndependently",
            value: function unifyIndependently(substitutions, context) {
                var unifiesIndependently;
                var definedAssertionString = this.string; ///
                context.trace("Unifying the '".concat(definedAssertionString, "' defined assertion independently..."));
                var localContext = _local.default.fromContextAndTokens(context, this.tokens);
                context = localContext; ///
                var term = (0, _substitutions.termFromTermAndSubstitutions)(this.term, substitutions, context), frame = (0, _substitutions.frameFromFrameAndSubstitutions)(this.frame, substitutions, context), verifiesWhenDerived = verifyWhenDerived(term, frame, this.negated, context);
                unifiesIndependently = verifiesWhenDerived; ///
                if (unifiesIndependently) {
                    context.debug("...unified the '".concat(definedAssertionString, "' defined assertion independently."));
                }
                return unifiesIndependently;
            }
        }
    ], [
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode, context) {
                var definedAssertion = null;
                var definedAssertionNode = statementNode.getDefinedAssertionNode();
                if (definedAssertionNode !== null) {
                    var Term = _dom.default.Term, Frame = _dom.default.Frame, node = definedAssertionNode, string = context.nodeAsString(node), tokens = context.nodeAsTokens(node), negated = definedAssertionNode.isNegated(), term = Term.fromDefinedAssertionNode(definedAssertionNode, context), frame = Frame.fromDefinedAssertionNode(definedAssertionNode, context);
                    definedAssertion = new DefinedAssertion(string, node, tokens, term, frame, negated);
                }
                return definedAssertion;
            }
        }
    ]);
    return DefinedAssertion;
}(), _define_property(_DefinedAssertion, "name", "DefinedAssertion"), _DefinedAssertion));
function verifyWhenDerived(term, frame, negated, context) {
    var verifiesWhenDerived = false;
    if (term !== null) {
        var Variable = _dom.default.Variable, termNode = term.getNode(), variable = Variable.fromTermNode(termNode, context), generalContext = context, variableDefined = generalContext.isVariableDefined(variable);
        if (!negated && variableDefined) {
            verifiesWhenDerived = true;
        }
        if (negated && !variableDefined) {
            verifiesWhenDerived = true;
        }
    }
    if (frame !== null) {
        var SimpleReference = _dom.default.SimpleReference, frameNode = frame.getNode(), simpleReference = SimpleReference.fromFrameNode(frameNode, context), simpleReferenceDefined = context.isSimpleReferenceDefined(simpleReference);
        if (!negated && simpleReferenceDefined) {
            verifiesWhenDerived = true;
        }
        if (negated && !simpleReferenceDefined) {
            verifiesWhenDerived = true;
        }
    }
    return verifiesWhenDerived;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kb20vYXNzZXJ0aW9uL2RlZmluZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBkb20gZnJvbSBcIi4uLy4uL2RvbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vLi4vY29udGV4dC9sb2NhbFwiO1xuXG5pbXBvcnQgeyBkb21Bc3NpZ25lZCB9IGZyb20gXCIuLi8uLi9kb21cIjtcbmltcG9ydCB7IHRlcm1Gcm9tVGVybUFuZFN1YnN0aXR1dGlvbnMsIGZyYW1lRnJvbUZyYW1lQW5kU3Vic3RpdHV0aW9ucyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvc3Vic3RpdHV0aW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkb21Bc3NpZ25lZChjbGFzcyBEZWZpbmVkQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCB0b2tlbnMsIHRlcm0sIGZyYW1lLCBuZWdhdGVkKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICAgIHRoaXMuZnJhbWU9IGZyYW1lO1xuICAgIHRoaXMubmVnYXRlZCA9IG5lZ2F0ZWQ7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGdldEZyYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmZyYW1lO1xuICB9XG5cbiAgaXNOZWdhdGVkKCkge1xuICAgIHJldHVybiB0aGlzLm5lZ2F0ZWQ7XG4gIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgZGVmaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlZmluZWQgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVRlcm0oYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCksXG4gICAgICAgICAgZnJhbWVWZXJpZmllcyA9IHRoaXMudmVyaWZ5RnJhbWUoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICBpZiAodGVybVZlcmlmaWVzIHx8IGZyYW1lVmVyaWZpZXMpIHtcbiAgICAgIGxldCB2ZXJpZmllc1doZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgdmVyaWZpZXNXaGVuU3RhdGVkID0gdGhpcy52ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSB0aGlzLnZlcmlmeVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICBpZiAodmVyaWZpZXNXaGVuU3RhdGVkIHx8IHZlcmlmaWVzV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBkZWZpbmVkIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlUZXJtKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy50ZXJtICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGhpcy50ZXJtLmdldFN0cmluZygpOyAvLy9cblxuICAgICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS4uLmApO1xuXG4gICAgICBjb25zdCB0ZXJtU2ltcGxlID0gdGhpcy50ZXJtLmlzU2ltcGxlKCk7XG5cbiAgICAgIGlmICghdGVybVNpbXBsZSkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dGVybVN0cmluZ30nIHRlcm0gaXMgbm90IHNpbXBsZS5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRlcm1WZXJpZmllcyA9IHRoaXMudGVybS52ZXJpZnkoY29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZlcmlmaWVzQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIHZlcmlmaWVzQWhlYWQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0ZXJtVmVyaWZpZXMpIHtcbiAgICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0uYCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5RnJhbWUoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBmcmFtZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5mcmFtZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmZyYW1lLmdldFN0cmluZygpOyAvLy9cblxuICAgICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLi4uYCk7XG5cbiAgICAgIGNvbnN0IGZyYW1lU2ltcGxlID0gdGhpcy5mcmFtZS5pc1NpbXBsZSgpO1xuXG4gICAgICBpZiAoIWZyYW1lU2ltcGxlKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGlzIG5vdCBzaW1wbGUuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0ZWQgPSB0cnVlOyAgLy8vXG5cbiAgICAgICAgYXNzaWdubWVudHMgPSBudWxsOyAvLy9cblxuICAgICAgICBmcmFtZVZlcmlmaWVzID0gdGhpcy5mcmFtZS52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGZyYW1lVmVyaWZpZXMpIHtcbiAgICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmcmFtZVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5V2hlblN0YXRlZChhc3NpZ25tZW50cywgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllc1doZW5TdGF0ZWQ7XG5cbiAgICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIGRlZmluZWQgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICB2ZXJpZmllc1doZW5TdGF0ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHZlcmlmaWVzV2hlblN0YXRlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgZGVmaW5lZCBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXNXaGVuRGVyaXZlZDtcblxuICAgIGNvbnN0IGRlZmluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIGRlZmluZWQgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gdmVyaWZ5V2hlbkRlcml2ZWQodGhpcy50ZXJtLCB0aGlzLmZyYW1lLCB0aGlzLm5lZ2F0ZWQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHZlcmlmaWVzV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCBkZWZpbmVkIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXNXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIHVuaWZ5SW5kZXBlbmRlbnRseShzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXNJbmRlcGVuZGVudGx5O1xuXG4gICAgY29uc3QgZGVmaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVmaW5lZCBhc3NlcnRpb24gaW5kZXBlbmRlbnRseS4uLmApO1xuXG4gICAgY29uc3QgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21Db250ZXh0QW5kVG9rZW5zKGNvbnRleHQsIHRoaXMudG9rZW5zKTtcblxuICAgIGNvbnRleHQgPSBsb2NhbENvbnRleHQ7IC8vL1xuXG4gICAgY29uc3QgdGVybSA9IHRlcm1Gcm9tVGVybUFuZFN1YnN0aXR1dGlvbnModGhpcy50ZXJtLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSxcbiAgICAgICAgICBmcmFtZSA9IGZyYW1lRnJvbUZyYW1lQW5kU3Vic3RpdHV0aW9ucyh0aGlzLmZyYW1lLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSxcbiAgICAgICAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gdmVyaWZ5V2hlbkRlcml2ZWQodGVybSwgZnJhbWUsIHRoaXMubmVnYXRlZCwgY29udGV4dCk7XG5cbiAgICB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IHZlcmlmaWVzV2hlbkRlcml2ZWQ7IC8vL1xuXG4gICAgaWYgKHVuaWZpZXNJbmRlcGVuZGVudGx5KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVmaW5lZCBhc3NlcnRpb24gaW5kZXBlbmRlbnRseS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllc0luZGVwZW5kZW50bHk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiRGVmaW5lZEFzc2VydGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGRlZmluZWRBc3NlcnRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgZGVmaW5lZEFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldERlZmluZWRBc3NlcnRpb25Ob2RlKCk7XG5cbiAgICBpZiAoZGVmaW5lZEFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgVGVybSwgRnJhbWUgfSA9IGRvbSxcbiAgICAgICAgICAgIG5vZGUgPSBkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICB0b2tlbnMgPSBjb250ZXh0Lm5vZGVBc1Rva2Vucyhub2RlKSxcbiAgICAgICAgICAgIG5lZ2F0ZWQgPSBkZWZpbmVkQXNzZXJ0aW9uTm9kZS5pc05lZ2F0ZWQoKSxcbiAgICAgICAgICAgIHRlcm0gPSBUZXJtLmZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBmcmFtZSA9IEZyYW1lLmZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGRlZmluZWRBc3NlcnRpb24gPSBuZXcgRGVmaW5lZEFzc2VydGlvbihzdHJpbmcsIG5vZGUsIHRva2VucywgdGVybSwgZnJhbWUsIG5lZ2F0ZWQpO1xuICAgIH1cblxuICAgIHJldHVybiBkZWZpbmVkQXNzZXJ0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gdmVyaWZ5V2hlbkRlcml2ZWQodGVybSwgZnJhbWUsIG5lZ2F0ZWQsIGNvbnRleHQpIHtcbiAgbGV0IHZlcmlmaWVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgVmFyaWFibGUgfSA9IGRvbSxcbiAgICAgICAgICB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlRGVmaW5lZCA9IGdlbmVyYWxDb250ZXh0LmlzVmFyaWFibGVEZWZpbmVkKHZhcmlhYmxlKTtcblxuICAgIGlmICghbmVnYXRlZCAmJiB2YXJpYWJsZURlZmluZWQpIHtcbiAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChuZWdhdGVkICYmICF2YXJpYWJsZURlZmluZWQpIHtcbiAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChmcmFtZSE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBTaW1wbGVSZWZlcmVuY2UgfSA9IGRvbSxcbiAgICAgICAgICBmcmFtZU5vZGUgPSBmcmFtZS5nZXROb2RlKCksXG4gICAgICAgICAgc2ltcGxlUmVmZXJlbmNlID0gU2ltcGxlUmVmZXJlbmNlLmZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBzaW1wbGVSZWZlcmVuY2VEZWZpbmVkID0gY29udGV4dC5pc1NpbXBsZVJlZmVyZW5jZURlZmluZWQoc2ltcGxlUmVmZXJlbmNlKTtcblxuICAgIGlmICghbmVnYXRlZCAmJiBzaW1wbGVSZWZlcmVuY2VEZWZpbmVkKSB7XG4gICAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAobmVnYXRlZCAmJiAhc2ltcGxlUmVmZXJlbmNlRGVmaW5lZCkge1xuICAgICAgdmVyaWZpZXNXaGVuRGVyaXZlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZlcmlmaWVzV2hlbkRlcml2ZWQ7XG59XG4iXSwibmFtZXMiOlsiZG9tQXNzaWduZWQiLCJEZWZpbmVkQXNzZXJ0aW9uIiwic3RyaW5nIiwibm9kZSIsInRva2VucyIsInRlcm0iLCJmcmFtZSIsIm5lZ2F0ZWQiLCJnZXRTdHJpbmciLCJnZXROb2RlIiwiZ2V0VG9rZW5zIiwiZ2V0VGVybSIsImdldEZyYW1lIiwiaXNOZWdhdGVkIiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJjb250ZXh0IiwidmVyaWZpZXMiLCJkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nIiwidHJhY2UiLCJ0ZXJtVmVyaWZpZXMiLCJ2ZXJpZnlUZXJtIiwiZnJhbWVWZXJpZmllcyIsInZlcmlmeUZyYW1lIiwidmVyaWZpZXNXaGVuU3RhdGVkIiwidmVyaWZpZXNXaGVuRGVyaXZlZCIsInZlcmlmeVdoZW5TdGF0ZWQiLCJ2ZXJpZnlXaGVuRGVyaXZlZCIsImRlYnVnIiwidGVybVN0cmluZyIsInRlcm1TaW1wbGUiLCJpc1NpbXBsZSIsInZlcmlmaWVzQWhlYWQiLCJmcmFtZVN0cmluZyIsImZyYW1lU2ltcGxlIiwidW5pZnlJbmRlcGVuZGVudGx5Iiwic3Vic3RpdHV0aW9ucyIsInVuaWZpZXNJbmRlcGVuZGVudGx5IiwibG9jYWxDb250ZXh0IiwiTG9jYWxDb250ZXh0IiwiZnJvbUNvbnRleHRBbmRUb2tlbnMiLCJ0ZXJtRnJvbVRlcm1BbmRTdWJzdGl0dXRpb25zIiwiZnJhbWVGcm9tRnJhbWVBbmRTdWJzdGl0dXRpb25zIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwiZGVmaW5lZEFzc2VydGlvbiIsImRlZmluZWRBc3NlcnRpb25Ob2RlIiwiZ2V0RGVmaW5lZEFzc2VydGlvbk5vZGUiLCJUZXJtIiwiZG9tIiwiRnJhbWUiLCJub2RlQXNTdHJpbmciLCJub2RlQXNUb2tlbnMiLCJmcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUiLCJuYW1lIiwiVmFyaWFibGUiLCJ0ZXJtTm9kZSIsInZhcmlhYmxlIiwiZnJvbVRlcm1Ob2RlIiwiZ2VuZXJhbENvbnRleHQiLCJ2YXJpYWJsZURlZmluZWQiLCJpc1ZhcmlhYmxlRGVmaW5lZCIsIlNpbXBsZVJlZmVyZW5jZSIsImZyYW1lTm9kZSIsInNpbXBsZVJlZmVyZW5jZSIsImZyb21GcmFtZU5vZGUiLCJzaW1wbGVSZWZlcmVuY2VEZWZpbmVkIiwiaXNTaW1wbGVSZWZlcmVuY2VEZWZpbmVkIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQUE7OzsyREFOZ0I7NERBQ1M7NkJBR29EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUU3RSxXQUFlQSxJQUFBQSxnQkFBVyxxQ0FBQzthQUFNQyxpQkFDbkJDLE1BQU0sRUFBRUMsSUFBSSxFQUFF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