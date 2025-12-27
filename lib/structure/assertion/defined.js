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
var _structure = /*#__PURE__*/ _interop_require_wildcard(require("../../structure"));
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
var _default = (0, _structure.define)((_DefinedAssertion = /*#__PURE__*/ function(Assertion) {
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
                    var Term = _structure.default.Term, Frame = _structure.default.Frame, node = definedAssertionNode, string = context.nodeAsString(node), tokens = context.nodeAsTokens(node), negated = definedAssertionNode.isNegated(), term = Term.fromDefinedAssertionNode(definedAssertionNode, context), frame = Frame.fromDefinedAssertionNode(definedAssertionNode, context);
                    definedAssertion = new DefinedAssertion(string, node, tokens, term, frame, negated);
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
        var Variable = _structure.default.Variable, termNode = term.getNode(), variable = Variable.fromTermNode(termNode, context), generalContext1 = context, variableDefined = generalContext1.isVariableDefined(variable);
        if (!negated && variableDefined) {
            verifiesWhenDerived = true;
        }
        if (negated && !variableDefined) {
            verifiesWhenDerived = true;
        }
    }
    if (frame !== null) {
        var Metavariable = _structure.default.Metavariable, frameNode = frame.getNode(), metavariable = Metavariable.fromFrameNode(frameNode, context), metavariableDefined = context.isMetavariableDefined(metavariable);
        if (!negated && metavariableDefined) {
            verifiesWhenDerived = true;
        }
        if (negated && !metavariableDefined) {
            verifiesWhenDerived = true;
        }
    }
    return verifiesWhenDerived;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdHJ1Y3R1cmUvYXNzZXJ0aW9uL2RlZmluZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzdHJ1Y3R1cmUgZnJvbSBcIi4uLy4uL3N0cnVjdHVyZVwiO1xuaW1wb3J0IEFzc2VydGlvbiBmcm9tIFwiLi4vYXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9zdHJ1Y3R1cmVcIjtcbmltcG9ydCB7IHRlcm1Gcm9tVGVybUFuZFN1YnN0aXR1dGlvbnMsIGZyYW1lRnJvbUZyYW1lQW5kU3Vic3RpdHV0aW9ucyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvc3Vic3RpdHV0aW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgRGVmaW5lZEFzc2VydGlvbiBleHRlbmRzIEFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKHN0cmluZywgbm9kZSwgdG9rZW5zLCB0ZXJtLCBmcmFtZSwgbmVnYXRlZCkge1xuICAgIHN1cGVyKHN0cmluZywgbm9kZSwgdG9rZW5zKTtcblxuICAgIHRoaXMudGVybSA9IHRlcm07XG4gICAgdGhpcy5mcmFtZT0gZnJhbWU7XG4gICAgdGhpcy5uZWdhdGVkID0gbmVnYXRlZDtcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGdldEZyYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmZyYW1lO1xuICB9XG5cbiAgaXNOZWdhdGVkKCkge1xuICAgIHJldHVybiB0aGlzLm5lZ2F0ZWQ7XG4gIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgZGVmaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVmaW5lZCBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHRlcm1WZXJpZmllcyA9IHRoaXMudmVyaWZ5VGVybShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSxcbiAgICAgICAgICBmcmFtZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlGcmFtZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgIGlmICh0ZXJtVmVyaWZpZXMgfHwgZnJhbWVWZXJpZmllcykge1xuICAgICAgbGV0IHZlcmlmaWVzV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICB2ZXJpZmllc1doZW5TdGF0ZWQgPSB0aGlzLnZlcmlmeVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmVyaWZpZXNXaGVuRGVyaXZlZCA9IHRoaXMudmVyaWZ5V2hlbkRlcml2ZWQoY29udGV4dCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh2ZXJpZmllc1doZW5TdGF0ZWQgfHwgdmVyaWZpZXNXaGVuRGVyaXZlZCkge1xuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlZmluZWQgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVRlcm0oYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLnRlcm0gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0aGlzLnRlcm0uZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLi4uYCk7XG5cbiAgICAgIGNvbnN0IHRlcm1TaW5ndWxhciA9IHRoaXMudGVybS5pc1Npbmd1bGFyKCk7XG5cbiAgICAgIGlmICghdGVybVNpbmd1bGFyKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBpcyBub3Qgc2luZ3VsYXIuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0ZXJtVmVyaWZpZXMgPSB0aGlzLnRlcm0udmVyaWZ5KGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgICBjb25zdCB2ZXJpZmllc0FoZWFkID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiB2ZXJpZmllc0FoZWFkO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGVybVZlcmlmaWVzKSB7XG4gICAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLmApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1WZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeUZyYW1lKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuZnJhbWUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5mcmFtZS5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS4uLmApO1xuXG4gICAgICBjb25zdCBmcmFtZVNpbmd1bGFyID0gdGhpcy5mcmFtZS5pc1Npbmd1bGFyKCk7XG5cbiAgICAgIGlmICghZnJhbWVTaW5ndWxhcikge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSBpcyBub3Qgc2luZ3VsYXIuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0ZWQgPSB0cnVlOyAgLy8vXG5cbiAgICAgICAgYXNzaWdubWVudHMgPSBudWxsOyAvLy9cblxuICAgICAgICBmcmFtZVZlcmlmaWVzID0gdGhpcy5mcmFtZS52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGZyYW1lVmVyaWZpZXMpIHtcbiAgICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmcmFtZVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5V2hlblN0YXRlZChhc3NpZ25tZW50cywgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllc1doZW5TdGF0ZWQ7XG5cbiAgICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgZGVmaW5lZCBhc3NlcnRpb24uLi5gKTtcblxuICAgIHZlcmlmaWVzV2hlblN0YXRlZCA9IHRydWU7XG5cbiAgICBpZiAodmVyaWZpZXNXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIHN0YXRlZCBkZWZpbmVkIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXNXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlbkRlcml2ZWQoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllc1doZW5EZXJpdmVkO1xuXG4gICAgY29uc3QgZGVmaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCBkZWZpbmVkIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBudWxsLFxuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSB2ZXJpZnlXaGVuRGVyaXZlZCh0aGlzLnRlcm0sIHRoaXMuZnJhbWUsIHRoaXMubmVnYXRlZCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAodmVyaWZpZXNXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIGRlZmluZWQgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllc1doZW5EZXJpdmVkO1xuICB9XG5cbiAgdW5pZnlJbmRlcGVuZGVudGx5KHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllc0luZGVwZW5kZW50bHk7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAvLy9cbiAgICAgICAgICBkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlZmluZWQgYXNzZXJ0aW9uIGluZGVwZW5kZW50bHkuLi5gKTtcblxuICAgIGNvbnN0IHRlcm0gPSB0ZXJtRnJvbVRlcm1BbmRTdWJzdGl0dXRpb25zKHRoaXMudGVybSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCksXG4gICAgICAgICAgZnJhbWUgPSBmcmFtZUZyb21GcmFtZUFuZFN1YnN0aXR1dGlvbnModGhpcy5mcmFtZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCksXG4gICAgICAgICAgdmVyaWZpZXNXaGVuRGVyaXZlZCA9IHZlcmlmeVdoZW5EZXJpdmVkKHRlcm0sIGZyYW1lLCB0aGlzLm5lZ2F0ZWQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgdW5pZmllc0luZGVwZW5kZW50bHkgPSB2ZXJpZmllc1doZW5EZXJpdmVkOyAvLy9cblxuICAgIGlmICh1bmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlZmluZWQgYXNzZXJ0aW9uIGluZGVwZW5kZW50bHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZXNJbmRlcGVuZGVudGx5O1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkRlZmluZWRBc3NlcnRpb25cIjtcblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCBkZWZpbmVkQXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGRlZmluZWRBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXREZWZpbmVkQXNzZXJ0aW9uTm9kZSgpO1xuXG4gICAgaWYgKGRlZmluZWRBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFRlcm0sIEZyYW1lIH0gPSBzdHJ1Y3R1cmUsXG4gICAgICAgICAgICBub2RlID0gZGVmaW5lZEFzc2VydGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgIHN0cmluZyA9IGNvbnRleHQubm9kZUFzU3RyaW5nKG5vZGUpLFxuICAgICAgICAgICAgdG9rZW5zID0gY29udGV4dC5ub2RlQXNUb2tlbnMobm9kZSksXG4gICAgICAgICAgICBuZWdhdGVkID0gZGVmaW5lZEFzc2VydGlvbk5vZGUuaXNOZWdhdGVkKCksXG4gICAgICAgICAgICB0ZXJtID0gVGVybS5mcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgZnJhbWUgPSBGcmFtZS5mcm9tRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBkZWZpbmVkQXNzZXJ0aW9uID0gbmV3IERlZmluZWRBc3NlcnRpb24oc3RyaW5nLCBub2RlLCB0b2tlbnMsIHRlcm0sIGZyYW1lLCBuZWdhdGVkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVmaW5lZEFzc2VydGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHZlcmlmeVdoZW5EZXJpdmVkKHRlcm0sIGZyYW1lLCBuZWdhdGVkLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGxldCB2ZXJpZmllc1doZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBWYXJpYWJsZSB9ID0gc3RydWN0dXJlLFxuICAgICAgICAgIHRlcm1Ob2RlID0gdGVybS5nZXROb2RlKCksXG4gICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIGdlbmVyYWxDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgICAgdmFyaWFibGVEZWZpbmVkID0gZ2VuZXJhbENvbnRleHQuaXNWYXJpYWJsZURlZmluZWQodmFyaWFibGUpO1xuXG4gICAgaWYgKCFuZWdhdGVkICYmIHZhcmlhYmxlRGVmaW5lZCkge1xuICAgICAgdmVyaWZpZXNXaGVuRGVyaXZlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKG5lZ2F0ZWQgJiYgIXZhcmlhYmxlRGVmaW5lZCkge1xuICAgICAgdmVyaWZpZXNXaGVuRGVyaXZlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgaWYgKGZyYW1lIT09IG51bGwpIHtcbiAgICBjb25zdCB7IE1ldGF2YXJpYWJsZSB9ID0gc3RydWN0dXJlLFxuICAgICAgICAgIGZyYW1lTm9kZSA9IGZyYW1lLmdldE5vZGUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbUZyYW1lTm9kZShmcmFtZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZURlZmluZWQgPSBjb250ZXh0LmlzTWV0YXZhcmlhYmxlRGVmaW5lZChtZXRhdmFyaWFibGUpO1xuXG4gICAgaWYgKCFuZWdhdGVkICYmIG1ldGF2YXJpYWJsZURlZmluZWQpIHtcbiAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChuZWdhdGVkICYmICFtZXRhdmFyaWFibGVEZWZpbmVkKSB7XG4gICAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmVyaWZpZXNXaGVuRGVyaXZlZDtcbn1cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJEZWZpbmVkQXNzZXJ0aW9uIiwic3RyaW5nIiwibm9kZSIsInRva2VucyIsInRlcm0iLCJmcmFtZSIsIm5lZ2F0ZWQiLCJnZXRUZXJtIiwiZ2V0RnJhbWUiLCJpc05lZ2F0ZWQiLCJ2ZXJpZnkiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsImNvbnRleHQiLCJ2ZXJpZmllcyIsImRlZmluZWRBc3NlcnRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInRlcm1WZXJpZmllcyIsInZlcmlmeVRlcm0iLCJmcmFtZVZlcmlmaWVzIiwidmVyaWZ5RnJhbWUiLCJ2ZXJpZmllc1doZW5TdGF0ZWQiLCJ2ZXJpZmllc1doZW5EZXJpdmVkIiwidmVyaWZ5V2hlblN0YXRlZCIsInZlcmlmeVdoZW5EZXJpdmVkIiwiZGVidWciLCJ0ZXJtU3RyaW5nIiwidGVybVNpbmd1bGFyIiwiaXNTaW5ndWxhciIsInZlcmlmaWVzQWhlYWQiLCJmcmFtZVN0cmluZyIsImZyYW1lU2luZ3VsYXIiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInVuaWZ5SW5kZXBlbmRlbnRseSIsInN1YnN0aXR1dGlvbnMiLCJ1bmlmaWVzSW5kZXBlbmRlbnRseSIsInRlcm1Gcm9tVGVybUFuZFN1YnN0aXR1dGlvbnMiLCJmcmFtZUZyb21GcmFtZUFuZFN1YnN0aXR1dGlvbnMiLCJmcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJkZWZpbmVkQXNzZXJ0aW9uIiwiZGVmaW5lZEFzc2VydGlvbk5vZGUiLCJnZXREZWZpbmVkQXNzZXJ0aW9uTm9kZSIsIlRlcm0iLCJzdHJ1Y3R1cmUiLCJGcmFtZSIsIm5vZGVBc1N0cmluZyIsIm5vZGVBc1Rva2VucyIsImZyb21EZWZpbmVkQXNzZXJ0aW9uTm9kZSIsIkFzc2VydGlvbiIsIm5hbWUiLCJWYXJpYWJsZSIsInRlcm1Ob2RlIiwiZ2V0Tm9kZSIsInZhcmlhYmxlIiwiZnJvbVRlcm1Ob2RlIiwidmFyaWFibGVEZWZpbmVkIiwiaXNWYXJpYWJsZURlZmluZWQiLCJNZXRhdmFyaWFibGUiLCJmcmFtZU5vZGUiLCJtZXRhdmFyaWFibGUiLCJmcm9tRnJhbWVOb2RlIiwibWV0YXZhcmlhYmxlRGVmaW5lZCIsImlzTWV0YXZhcmlhYmxlRGVmaW5lZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFBOzs7aUVBTnNCO2dFQUNBOzZCQUd1RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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