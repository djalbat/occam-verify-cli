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
    function DefinedAssertion(string, node, term, frame, negated) {
        _class_call_check(this, DefinedAssertion);
        var _this;
        _this = _call_super(this, DefinedAssertion, [
            string,
            node
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
                    var termSingular = this.term.isSingular();
                    if (!termSingular) {
                        context.debug("The '".concat(termString, "' term is not singular."));
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
                    var frameSingular = this.frame.isSingular();
                    if (!frameSingular) {
                        context.debug("The '".concat(frameString, "' frame is not singular."));
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
                var generalContext = null, specificContext = context; ///
                verifiesWhenDerived = verifyWhenDerived(this.term, this.frame, this.negated, generalContext, specificContext);
                if (verifiesWhenDerived) {
                    context.debug("...verified the '".concat(definedAssertionString, "' derived defined assertion."));
                }
                return verifiesWhenDerived;
            }
        },
        {
            key: "unifyIndependently",
            value: function unifyIndependently(substitutions, generalContext, specificContext) {
                var unifiesIndependently;
                var context = specificContext, definedAssertionString = this.getString(); ///
                context.trace("Unifying the '".concat(definedAssertionString, "' defined assertion independently..."));
                var term = (0, _substitutions.termFromTermAndSubstitutions)(this.term, substitutions, generalContext, specificContext), frame = (0, _substitutions.frameFromFrameAndSubstitutions)(this.frame, substitutions, generalContext, specificContext), verifiesWhenDerived = verifyWhenDerived(term, frame, this.negated, generalContext, specificContext);
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
                    var Term = _ontology.default.Term, Frame = _ontology.default.Frame, node = definedAssertionNode, string = context.nodeAsString(node), negated = definedAssertionNode.isNegated(), term = Term.fromDefinedAssertionNode(definedAssertionNode, context), frame = Frame.fromDefinedAssertionNode(definedAssertionNode, context);
                    definedAssertion = new DefinedAssertion(string, node, term, frame, negated);
                }
                return definedAssertion;
            }
        }
    ]);
    return DefinedAssertion;
}(_assertion.default), _define_property(_DefinedAssertion, "name", "DefinedAssertion"), _DefinedAssertion));
function verifyWhenDerived(term, frame, negated, generalContext, specificContext) {
    var verifiesWhenDerived = false;
    var context = specificContext; ///
    if (term !== null) {
        var Variable = _ontology.default.Variable, termNode = term.getNode(), variable = Variable.fromTermNode(termNode, context), generalContext1 = context, variableDefined = generalContext1.isVariableDefined(variable);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbnRvbG9neS9hc3NlcnRpb24vZGVmaW5lZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IG9udG9sb2d5IGZyb20gXCIuLi8uLi9vbnRvbG9neVwiO1xuaW1wb3J0IEFzc2VydGlvbiBmcm9tIFwiLi4vYXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9vbnRvbG9neVwiO1xuaW1wb3J0IHsgdGVybUZyb21UZXJtQW5kU3Vic3RpdHV0aW9ucywgZnJhbWVGcm9tRnJhbWVBbmRTdWJzdGl0dXRpb25zIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9zdWJzdGl0dXRpb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBEZWZpbmVkQXNzZXJ0aW9uIGV4dGVuZHMgQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCB0ZXJtLCBmcmFtZSwgbmVnYXRlZCkge1xuICAgIHN1cGVyKHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICAgIHRoaXMuZnJhbWU9IGZyYW1lO1xuICAgIHRoaXMubmVnYXRlZCA9IG5lZ2F0ZWQ7XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm07XG4gIH1cblxuICBnZXRGcmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5mcmFtZTtcbiAgfVxuXG4gIGlzTmVnYXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5uZWdhdGVkO1xuICB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGRlZmluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlZmluZWQgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVRlcm0oYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCksXG4gICAgICAgICAgZnJhbWVWZXJpZmllcyA9IHRoaXMudmVyaWZ5RnJhbWUoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICBpZiAodGVybVZlcmlmaWVzIHx8IGZyYW1lVmVyaWZpZXMpIHtcbiAgICAgIGxldCB2ZXJpZmllc1doZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgdmVyaWZpZXNXaGVuU3RhdGVkID0gdGhpcy52ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSB0aGlzLnZlcmlmeVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICBpZiAodmVyaWZpZXNXaGVuU3RhdGVkIHx8IHZlcmlmaWVzV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBkZWZpbmVkIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlUZXJtKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy50ZXJtICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGhpcy50ZXJtLmdldFN0cmluZygpOyAvLy9cblxuICAgICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS4uLmApO1xuXG4gICAgICBjb25zdCB0ZXJtU2luZ3VsYXIgPSB0aGlzLnRlcm0uaXNTaW5ndWxhcigpO1xuXG4gICAgICBpZiAoIXRlcm1TaW5ndWxhcikge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dGVybVN0cmluZ30nIHRlcm0gaXMgbm90IHNpbmd1bGFyLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGVybVZlcmlmaWVzID0gdGhpcy50ZXJtLnZlcmlmeShjb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmVyaWZpZXNBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gdmVyaWZpZXNBaGVhZDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRlcm1WZXJpZmllcykge1xuICAgICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZXJtVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlGcmFtZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLmZyYW1lICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZnJhbWUuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuLi5gKTtcblxuICAgICAgY29uc3QgZnJhbWVTaW5ndWxhciA9IHRoaXMuZnJhbWUuaXNTaW5ndWxhcigpO1xuXG4gICAgICBpZiAoIWZyYW1lU2luZ3VsYXIpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgaXMgbm90IHNpbmd1bGFyLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGVkID0gdHJ1ZTsgIC8vL1xuXG4gICAgICAgIGFzc2lnbm1lbnRzID0gbnVsbDsgLy8vXG5cbiAgICAgICAgZnJhbWVWZXJpZmllcyA9IHRoaXMuZnJhbWUudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChmcmFtZVZlcmlmaWVzKSB7XG4gICAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuYCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWVWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXNXaGVuU3RhdGVkO1xuXG4gICAgY29uc3QgZGVmaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIGRlZmluZWQgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICB2ZXJpZmllc1doZW5TdGF0ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHZlcmlmaWVzV2hlblN0YXRlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgZGVmaW5lZCBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXNXaGVuRGVyaXZlZDtcblxuICAgIGNvbnN0IGRlZmluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgZGVmaW5lZCBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gbnVsbCxcbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gdmVyaWZ5V2hlbkRlcml2ZWQodGhpcy50ZXJtLCB0aGlzLmZyYW1lLCB0aGlzLm5lZ2F0ZWQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHZlcmlmaWVzV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCBkZWZpbmVkIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXNXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIHVuaWZ5SW5kZXBlbmRlbnRseShzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXNJbmRlcGVuZGVudGx5O1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgLy8vXG4gICAgICAgICAgZGVmaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBkZWZpbmVkIGFzc2VydGlvbiBpbmRlcGVuZGVudGx5Li4uYCk7XG5cbiAgICBjb25zdCB0ZXJtID0gdGVybUZyb21UZXJtQW5kU3Vic3RpdHV0aW9ucyh0aGlzLnRlcm0sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpLFxuICAgICAgICAgIGZyYW1lID0gZnJhbWVGcm9tRnJhbWVBbmRTdWJzdGl0dXRpb25zKHRoaXMuZnJhbWUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpLFxuICAgICAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSB2ZXJpZnlXaGVuRGVyaXZlZCh0ZXJtLCBmcmFtZSwgdGhpcy5uZWdhdGVkLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gdmVyaWZpZXNXaGVuRGVyaXZlZDsgLy8vXG5cbiAgICBpZiAodW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBkZWZpbmVkIGFzc2VydGlvbiBpbmRlcGVuZGVudGx5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVzSW5kZXBlbmRlbnRseTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJEZWZpbmVkQXNzZXJ0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgZGVmaW5lZEFzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0RGVmaW5lZEFzc2VydGlvbk5vZGUoKTtcblxuICAgIGlmIChkZWZpbmVkQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBUZXJtLCBGcmFtZSB9ID0gb250b2xvZ3ksXG4gICAgICAgICAgICBub2RlID0gZGVmaW5lZEFzc2VydGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgbmVnYXRlZCA9IGRlZmluZWRBc3NlcnRpb25Ob2RlLmlzTmVnYXRlZCgpLFxuICAgICAgICAgICAgdGVybSA9IFRlcm0uZnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGZyYW1lID0gRnJhbWUuZnJvbURlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgZGVmaW5lZEFzc2VydGlvbiA9IG5ldyBEZWZpbmVkQXNzZXJ0aW9uKHN0cmluZywgbm9kZSwgdGVybSwgZnJhbWUsIG5lZ2F0ZWQpO1xuICAgIH1cblxuICAgIHJldHVybiBkZWZpbmVkQXNzZXJ0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gdmVyaWZ5V2hlbkRlcml2ZWQodGVybSwgZnJhbWUsIG5lZ2F0ZWQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgbGV0IHZlcmlmaWVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICBjb25zdCB7IFZhcmlhYmxlIH0gPSBvbnRvbG9neSxcbiAgICAgICAgICB0ZXJtTm9kZSA9IHRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHZhcmlhYmxlID0gVmFyaWFibGUuZnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlRGVmaW5lZCA9IGdlbmVyYWxDb250ZXh0LmlzVmFyaWFibGVEZWZpbmVkKHZhcmlhYmxlKTtcblxuICAgIGlmICghbmVnYXRlZCAmJiB2YXJpYWJsZURlZmluZWQpIHtcbiAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChuZWdhdGVkICYmICF2YXJpYWJsZURlZmluZWQpIHtcbiAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChmcmFtZSE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBNZXRhdmFyaWFibGUgfSA9IG9udG9sb2d5LFxuICAgICAgICAgIGZyYW1lTm9kZSA9IGZyYW1lLmdldE5vZGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZURlZmluZWQgPSBjb250ZXh0LmlzTWV0YXZhcmlhYmxlRGVmaW5lZChtZXRhdmFyaWFibGUpO1xuXG4gICAgaWYgKCFuZWdhdGVkICYmIG1ldGF2YXJpYWJsZURlZmluZWQpIHtcbiAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChuZWdhdGVkICYmICFtZXRhdmFyaWFibGVEZWZpbmVkKSB7XG4gICAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmVyaWZpZXNXaGVuRGVyaXZlZDtcbn1cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJEZWZpbmVkQXNzZXJ0aW9uIiwic3RyaW5nIiwibm9kZSIsInRlcm0iLCJmcmFtZSIsIm5lZ2F0ZWQiLCJnZXRUZXJtIiwiZ2V0RnJhbWUiLCJpc05lZ2F0ZWQiLCJ2ZXJpZnkiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsImNvbnRleHQiLCJ2ZXJpZmllcyIsImRlZmluZWRBc3NlcnRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInRlcm1WZXJpZmllcyIsInZlcmlmeVRlcm0iLCJmcmFtZVZlcmlmaWVzIiwidmVyaWZ5RnJhbWUiLCJ2ZXJpZmllc1doZW5TdGF0ZWQiLCJ2ZXJpZmllc1doZW5EZXJpdmVkIiwidmVyaWZ5V2hlblN0YXRlZCIsInZlcmlmeVdoZW5EZXJpdmVkIiwiZGVidWciLCJ0ZXJtU3RyaW5nIiwidGVybVNpbmd1bGFyIiwiaXNTaW5ndWxhciIsInZlcmlmaWVzQWhlYWQiLCJmcmFtZVN0cmluZyIsImZyYW1lU2luZ3VsYXIiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInVuaWZ5SW5kZXBlbmRlbnRseSIsInN1YnN0aXR1dGlvbnMiLCJ1bmlmaWVzSW5kZXBlbmRlbnRseSIsInRlcm1Gcm9tVGVybUFuZFN1YnN0aXR1dGlvbnMiLCJmcmFtZUZyb21GcmFtZUFuZFN1YnN0aXR1dGlvbnMiLCJmcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJkZWZpbmVkQXNzZXJ0aW9uIiwiZGVmaW5lZEFzc2VydGlvbk5vZGUiLCJnZXREZWZpbmVkQXNzZXJ0aW9uTm9kZSIsIlRlcm0iLCJvbnRvbG9neSIsIkZyYW1lIiwibm9kZUFzU3RyaW5nIiwiZnJvbURlZmluZWRBc3NlcnRpb25Ob2RlIiwiQXNzZXJ0aW9uIiwibmFtZSIsIlZhcmlhYmxlIiwidGVybU5vZGUiLCJnZXROb2RlIiwidmFyaWFibGUiLCJmcm9tVGVybU5vZGUiLCJ2YXJpYWJsZURlZmluZWQiLCJpc1ZhcmlhYmxlRGVmaW5lZCIsIk1ldGF2YXJpYWJsZSIsImZyYW1lTm9kZSIsIm1ldGF2YXJpYWJsZSIsImZyb21GcmFtZU5vZGUiLCJtZXRhdmFyaWFibGVEZWZpbmVkIiwiaXNNZXRhdmFyaWFibGVEZWZpbmVkIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQUE7OztnRUFOcUI7Z0VBQ0M7NkJBR3VEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUU3RSxXQUFlQSxJQUFBQSxnQkFBTSxxQ0FBQzs7YUFBTUMsaUJBQ2RDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsT0FBTztnQ0FEcEJM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