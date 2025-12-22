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
var _ontology = /*#__PURE__*/ _interop_require_wildcard(require("../../ontology"));
var _assertion = /*#__PURE__*/ _interop_require_default(require("../assertion"));
var _temporary = /*#__PURE__*/ _interop_require_default(require("../../context/temporary"));
var _substitutions = require("../../utilities/substitutions");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
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
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var _DefinedAssertion;
var _default = (0, _ontology.define)((_DefinedAssertion = /*#__PURE__*/ function(Assertion) {
    _inherits(DefinedAssertion, Assertion);
    function DefinedAssertion(string, node, tokens, term, frame, negated) {
        _class_call_check(this, DefinedAssertion);
        var _this;
        _this = _call_super(this, DefinedAssertion, [
            string,
            node,
            tokens
        ]);
        _this.term = term;
        _this.frame = frame;
        _this.negated = negated;
        return _this;
    }
    _create_class(DefinedAssertion, [
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
                var definedAssertionString = this.getString(); ///
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
                var definedAssertionString = this.getString(); ///
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
                var definedAssertionString = this.getString(); ///
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
                var definedAssertionString = this.getString(); ///
                context.trace("Unifying the '".concat(definedAssertionString, "' defined assertion independently..."));
                var tokens = this.getTokens(), temporaryContext = _temporary.default.fromContextAndTokens(context, tokens);
                context = temporaryContext; ///
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
                    var Term = _ontology.default.Term, Frame = _ontology.default.Frame, node = definedAssertionNode, string = context.nodeAsString(node), tokens = context.nodeAsTokens(node), negated = definedAssertionNode.isNegated(), term = Term.fromDefinedAssertionNode(definedAssertionNode, context), frame = Frame.fromDefinedAssertionNode(definedAssertionNode, context);
                    definedAssertion = new DefinedAssertion(string, node, tokens, term, frame, negated);
                }
                return definedAssertion;
            }
        }
    ]);
    return DefinedAssertion;
}(_assertion.default), _define_property(_DefinedAssertion, "name", "DefinedAssertion"), _DefinedAssertion));
function verifyWhenDerived(term, frame, negated, context) {
    var verifiesWhenDerived = false;
    if (term !== null) {
        var Variable = _ontology.default.Variable, termNode = term.getNode(), variable = Variable.fromTermNode(termNode, context), generalContext = context, variableDefined = generalContext.isVariableDefined(variable);
        if (!negated && variableDefined) {
            verifiesWhenDerived = true;
        }
        if (negated && !variableDefined) {
            verifiesWhenDerived = true;
        }
    }
    if (frame !== null) {
        var Metavariable = _ontology.default.Metavariable, frameNode = frame.getNode(), metavariable = Metavariable.fromFrameNode(frameNode, context), metavariableDefined = context.isMetavariableDefined(metavariable);
        if (!negated && metavariableDefined) {
            verifiesWhenDerived = true;
        }
        if (negated && !metavariableDefined) {
            verifiesWhenDerived = true;
        }
    }
    return verifiesWhenDerived;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbnRvbG9neS9hc3NlcnRpb24vZGVmaW5lZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IG9udG9sb2d5IGZyb20gXCIuLi8uLi9vbnRvbG9neVwiO1xuaW1wb3J0IEFzc2VydGlvbiBmcm9tIFwiLi4vYXNzZXJ0aW9uXCI7XG5pbXBvcnQgVGVtcG9yYXJ5Q29udGV4dCBmcm9tIFwiLi4vLi4vY29udGV4dC90ZW1wb3JhcnlcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL29udG9sb2d5XCI7XG5pbXBvcnQgeyB0ZXJtRnJvbVRlcm1BbmRTdWJzdGl0dXRpb25zLCBmcmFtZUZyb21GcmFtZUFuZFN1YnN0aXR1dGlvbnMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N1YnN0aXR1dGlvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIERlZmluZWRBc3NlcnRpb24gZXh0ZW5kcyBBc3NlcnRpb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5vZGUsIHRva2VucywgdGVybSwgZnJhbWUsIG5lZ2F0ZWQpIHtcbiAgICBzdXBlcihzdHJpbmcsIG5vZGUsIHRva2Vucyk7XG5cbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICAgIHRoaXMuZnJhbWU9IGZyYW1lO1xuICAgIHRoaXMubmVnYXRlZCA9IG5lZ2F0ZWQ7XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm07XG4gIH1cblxuICBnZXRGcmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5mcmFtZTtcbiAgfVxuXG4gIGlzTmVnYXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5uZWdhdGVkO1xuICB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGRlZmluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlZmluZWQgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVRlcm0oYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCksXG4gICAgICAgICAgZnJhbWVWZXJpZmllcyA9IHRoaXMudmVyaWZ5RnJhbWUoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICBpZiAodGVybVZlcmlmaWVzIHx8IGZyYW1lVmVyaWZpZXMpIHtcbiAgICAgIGxldCB2ZXJpZmllc1doZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgdmVyaWZpZXNXaGVuU3RhdGVkID0gdGhpcy52ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSB0aGlzLnZlcmlmeVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICBpZiAodmVyaWZpZXNXaGVuU3RhdGVkIHx8IHZlcmlmaWVzV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBkZWZpbmVkIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlUZXJtKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy50ZXJtICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGhpcy50ZXJtLmdldFN0cmluZygpOyAvLy9cblxuICAgICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS4uLmApO1xuXG4gICAgICBjb25zdCB0ZXJtU2ltcGxlID0gdGhpcy50ZXJtLmlzU2ltcGxlKCk7XG5cbiAgICAgIGlmICghdGVybVNpbXBsZSkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dGVybVN0cmluZ30nIHRlcm0gaXMgbm90IHNpbXBsZS5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRlcm1WZXJpZmllcyA9IHRoaXMudGVybS52ZXJpZnkoY29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZlcmlmaWVzQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIHZlcmlmaWVzQWhlYWQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0ZXJtVmVyaWZpZXMpIHtcbiAgICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0uYCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5RnJhbWUoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBmcmFtZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5mcmFtZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmZyYW1lLmdldFN0cmluZygpOyAvLy9cblxuICAgICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLi4uYCk7XG5cbiAgICAgIGNvbnN0IGZyYW1lU2ltcGxlID0gdGhpcy5mcmFtZS5pc1NpbXBsZSgpO1xuXG4gICAgICBpZiAoIWZyYW1lU2ltcGxlKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGlzIG5vdCBzaW1wbGUuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0ZWQgPSB0cnVlOyAgLy8vXG5cbiAgICAgICAgYXNzaWdubWVudHMgPSBudWxsOyAvLy9cblxuICAgICAgICBmcmFtZVZlcmlmaWVzID0gdGhpcy5mcmFtZS52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGZyYW1lVmVyaWZpZXMpIHtcbiAgICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmcmFtZVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5V2hlblN0YXRlZChhc3NpZ25tZW50cywgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllc1doZW5TdGF0ZWQ7XG5cbiAgICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgZGVmaW5lZCBhc3NlcnRpb24uLi5gKTtcblxuICAgIHZlcmlmaWVzV2hlblN0YXRlZCA9IHRydWU7XG5cbiAgICBpZiAodmVyaWZpZXNXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIHN0YXRlZCBkZWZpbmVkIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXNXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlbkRlcml2ZWQoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllc1doZW5EZXJpdmVkO1xuXG4gICAgY29uc3QgZGVmaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCBkZWZpbmVkIGFzc2VydGlvbi4uLmApO1xuXG4gICAgdmVyaWZpZXNXaGVuRGVyaXZlZCA9IHZlcmlmeVdoZW5EZXJpdmVkKHRoaXMudGVybSwgdGhpcy5mcmFtZSwgdGhpcy5uZWdhdGVkLCBjb250ZXh0KTtcblxuICAgIGlmICh2ZXJpZmllc1doZW5EZXJpdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgZGVmaW5lZCBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzV2hlbkRlcml2ZWQ7XG4gIH1cblxuICB1bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCB1bmlmaWVzSW5kZXBlbmRlbnRseTtcblxuICAgIGNvbnN0IGRlZmluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVmaW5lZCBhc3NlcnRpb24gaW5kZXBlbmRlbnRseS4uLmApO1xuXG4gICAgY29uc3QgdG9rZW5zID0gdGhpcy5nZXRUb2tlbnMoKSxcbiAgICAgICAgICB0ZW1wb3JhcnlDb250ZXh0ID0gVGVtcG9yYXJ5Q29udGV4dC5mcm9tQ29udGV4dEFuZFRva2Vucyhjb250ZXh0LCB0b2tlbnMpO1xuXG4gICAgY29udGV4dCA9IHRlbXBvcmFyeUNvbnRleHQ7IC8vL1xuXG4gICAgY29uc3QgdGVybSA9IHRlcm1Gcm9tVGVybUFuZFN1YnN0aXR1dGlvbnModGhpcy50ZXJtLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSxcbiAgICAgICAgICBmcmFtZSA9IGZyYW1lRnJvbUZyYW1lQW5kU3Vic3RpdHV0aW9ucyh0aGlzLmZyYW1lLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSxcbiAgICAgICAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gdmVyaWZ5V2hlbkRlcml2ZWQodGVybSwgZnJhbWUsIHRoaXMubmVnYXRlZCwgY29udGV4dCk7XG5cbiAgICB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IHZlcmlmaWVzV2hlbkRlcml2ZWQ7IC8vL1xuXG4gICAgaWYgKHVuaWZpZXNJbmRlcGVuZGVudGx5KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVmaW5lZCBhc3NlcnRpb24gaW5kZXBlbmRlbnRseS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllc0luZGVwZW5kZW50bHk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiRGVmaW5lZEFzc2VydGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGRlZmluZWRBc3NlcnRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgZGVmaW5lZEFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldERlZmluZWRBc3NlcnRpb25Ob2RlKCk7XG5cbiAgICBpZiAoZGVmaW5lZEFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgVGVybSwgRnJhbWUgfSA9IG9udG9sb2d5LFxuICAgICAgICAgICAgbm9kZSA9IGRlZmluZWRBc3NlcnRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgIHRva2VucyA9IGNvbnRleHQubm9kZUFzVG9rZW5zKG5vZGUpLFxuICAgICAgICAgICAgbmVnYXRlZCA9IGRlZmluZWRBc3NlcnRpb25Ob2RlLmlzTmVnYXRlZCgpLFxuICAgICAgICAgICAgdGVybSA9IFRlcm0uZnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGZyYW1lID0gRnJhbWUuZnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgZGVmaW5lZEFzc2VydGlvbiA9IG5ldyBEZWZpbmVkQXNzZXJ0aW9uKHN0cmluZywgbm9kZSwgdG9rZW5zLCB0ZXJtLCBmcmFtZSwgbmVnYXRlZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZmluZWRBc3NlcnRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiB2ZXJpZnlXaGVuRGVyaXZlZCh0ZXJtLCBmcmFtZSwgbmVnYXRlZCwgY29udGV4dCkge1xuICBsZXQgdmVyaWZpZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBWYXJpYWJsZSB9ID0gb250b2xvZ3ksXG4gICAgICAgICAgdGVybU5vZGUgPSB0ZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0LCAvLy9cbiAgICAgICAgICB2YXJpYWJsZURlZmluZWQgPSBnZW5lcmFsQ29udGV4dC5pc1ZhcmlhYmxlRGVmaW5lZCh2YXJpYWJsZSk7XG5cbiAgICBpZiAoIW5lZ2F0ZWQgJiYgdmFyaWFibGVEZWZpbmVkKSB7XG4gICAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAobmVnYXRlZCAmJiAhdmFyaWFibGVEZWZpbmVkKSB7XG4gICAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAoZnJhbWUhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgTWV0YXZhcmlhYmxlIH0gPSBvbnRvbG9neSxcbiAgICAgICAgICBmcmFtZU5vZGUgPSBmcmFtZS5nZXROb2RlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21GcmFtZU5vZGUoZnJhbWVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVEZWZpbmVkID0gY29udGV4dC5pc01ldGF2YXJpYWJsZURlZmluZWQobWV0YXZhcmlhYmxlKTtcblxuICAgIGlmICghbmVnYXRlZCAmJiBtZXRhdmFyaWFibGVEZWZpbmVkKSB7XG4gICAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAobmVnYXRlZCAmJiAhbWV0YXZhcmlhYmxlRGVmaW5lZCkge1xuICAgICAgdmVyaWZpZXNXaGVuRGVyaXZlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZlcmlmaWVzV2hlbkRlcml2ZWQ7XG59XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiRGVmaW5lZEFzc2VydGlvbiIsInN0cmluZyIsIm5vZGUiLCJ0b2tlbnMiLCJ0ZXJtIiwiZnJhbWUiLCJuZWdhdGVkIiwiZ2V0VGVybSIsImdldEZyYW1lIiwiaXNOZWdhdGVkIiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJjb250ZXh0IiwidmVyaWZpZXMiLCJkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ0ZXJtVmVyaWZpZXMiLCJ2ZXJpZnlUZXJtIiwiZnJhbWVWZXJpZmllcyIsInZlcmlmeUZyYW1lIiwidmVyaWZpZXNXaGVuU3RhdGVkIiwidmVyaWZpZXNXaGVuRGVyaXZlZCIsInZlcmlmeVdoZW5TdGF0ZWQiLCJ2ZXJpZnlXaGVuRGVyaXZlZCIsImRlYnVnIiwidGVybVN0cmluZyIsInRlcm1TaW1wbGUiLCJpc1NpbXBsZSIsInZlcmlmaWVzQWhlYWQiLCJmcmFtZVN0cmluZyIsImZyYW1lU2ltcGxlIiwidW5pZnlJbmRlcGVuZGVudGx5Iiwic3Vic3RpdHV0aW9ucyIsInVuaWZpZXNJbmRlcGVuZGVudGx5IiwiZ2V0VG9rZW5zIiwidGVtcG9yYXJ5Q29udGV4dCIsIlRlbXBvcmFyeUNvbnRleHQiLCJmcm9tQ29udGV4dEFuZFRva2VucyIsInRlcm1Gcm9tVGVybUFuZFN1YnN0aXR1dGlvbnMiLCJmcmFtZUZyb21GcmFtZUFuZFN1YnN0aXR1dGlvbnMiLCJmcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJkZWZpbmVkQXNzZXJ0aW9uIiwiZGVmaW5lZEFzc2VydGlvbk5vZGUiLCJnZXREZWZpbmVkQXNzZXJ0aW9uTm9kZSIsIlRlcm0iLCJvbnRvbG9neSIsIkZyYW1lIiwibm9kZUFzU3RyaW5nIiwibm9kZUFzVG9rZW5zIiwiZnJvbURlZmluZWRBc3NlcnRpb25Ob2RlIiwiQXNzZXJ0aW9uIiwibmFtZSIsIlZhcmlhYmxlIiwidGVybU5vZGUiLCJnZXROb2RlIiwidmFyaWFibGUiLCJmcm9tVGVybU5vZGUiLCJnZW5lcmFsQ29udGV4dCIsInZhcmlhYmxlRGVmaW5lZCIsImlzVmFyaWFibGVEZWZpbmVkIiwiTWV0YXZhcmlhYmxlIiwiZnJhbWVOb2RlIiwibWV0YXZhcmlhYmxlIiwiZnJvbUZyYW1lTm9kZSIsIm1ldGF2YXJpYWJsZURlZmluZWQiLCJpc01ldGF2YXJpYWJsZURlZmluZWQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7O2dFQVBxQjtnRUFDQztnRUFDTzs2QkFHZ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTdFLFdBQWVBLElBQUFBLGdCQUFNLHFDQUFDOzthQUFNQyxpQkFDZEMsTUFB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