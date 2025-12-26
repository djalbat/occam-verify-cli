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
var _ContainedAssertion;
var _default = (0, _ontology.define)((_ContainedAssertion = /*#__PURE__*/ function(Assertion) {
    _inherits(ContainedAssertion, Assertion);
    function ContainedAssertion(string, node, tokens, term, frame, negated, statement) {
        _class_call_check(this, ContainedAssertion);
        var _this;
        _this = _call_super(this, ContainedAssertion, [
            string,
            node,
            tokens
        ]);
        _this.term = term;
        _this.frame = frame;
        _this.negated = negated;
        _this.statement = statement;
        return _this;
    }
    _create_class(ContainedAssertion, [
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
                var verifies = false;
                var containedAssertionString = this.getString(); ///
                context.trace("Verifying the '".concat(containedAssertionString, "' contained assertion..."));
                var termVerifies = this.verifyTerm(assignments, stated, context), frameVerifies = this.verifyFrame(assignments, stated, context), statementVerifies = this.verifyStatement(assignments, stated, context);
                if (termVerifies || frameVerifies || statementVerifies) {
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
                    context.debug("...verified the '".concat(containedAssertionString, "' contained assertion."));
                }
                return verifies;
            }
        },
        {
            key: "verifyTerm",
            value: function verifyTerm(assignments, stated, context) {
                var termVerifies = false;
                if (this.term !== null) {
                    var termString = this.term.getString();
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
                    var frameString = this.frame.getString();
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
            key: "verifyStatement",
            value: function verifyStatement(assignments, stated, context) {
                var statementVerifies = false;
                if (this.statement !== null) {
                    var statementString = this.statement.getString();
                    context.trace("Verifying the '".concat(statementString, "' statement..."));
                    stated = true; ///
                    assignments = null; ///
                    statementVerifies = this.statement.verify(assignments, stated, context);
                    if (statementVerifies) {
                        context.debug("...verified the '".concat(statementString, "' statement."));
                    }
                }
                return statementVerifies;
            }
        },
        {
            key: "verifyWhenStated",
            value: function verifyWhenStated(assignments, context) {
                var verifiesWhenStated;
                var containedAssertionString = this.getString(); ///
                context.trace("Verifying the '".concat(containedAssertionString, "' stated contained assertion..."));
                verifiesWhenStated = true;
                if (verifiesWhenStated) {
                    context.debug("...verified the '".concat(containedAssertionString, "' stated contained assertion."));
                }
                return verifiesWhenStated;
            }
        },
        {
            key: "verifyWhenDerived",
            value: function verifyWhenDerived1(context) {
                var verifiesWhenDerived;
                var containedAssertionString = this.getString(); ///
                context.trace("Verifying the '".concat(containedAssertionString, "' derived contained assertion..."));
                var generalCotnext = null, specificContext = context; ///
                verifiesWhenDerived = verifyWhenDerived(this.term, this.frame, this.statement, this.negated, generalCotnext, specificContext);
                if (verifiesWhenDerived) {
                    context.debug("...verified the '".concat(containedAssertionString, "' derived contained assertion."));
                }
                return verifiesWhenDerived;
            }
        },
        {
            key: "unifyIndependently",
            value: function unifyIndependently(substitutions, generalContext, specificContext) {
                var unifiesIndependently;
                var context = specificContext, containedAssertionString = this.getString(); ///
                context.trace("Unifying the '".concat(containedAssertionString, "' contained assertion independently..."));
                var term = (0, _substitutions.termFromTermAndSubstitutions)(this.term, substitutions, generalContext, specificContext), frame = (0, _substitutions.frameFromFrameAndSubstitutions)(this.frame, substitutions, generalContext, specificContext), statement = (0, _substitutions.statementFromStatementAndSubstitutions)(this.statement, substitutions, generalContext, specificContext), verifiesWhenDerived = verifyWhenDerived(term, frame, statement, this.negated, generalContext, specificContext);
                unifiesIndependently = verifiesWhenDerived; ///
                if (unifiesIndependently) {
                    context.debug("...unified the '".concat(containedAssertionString, "' contained assertion independently."));
                }
                return unifiesIndependently;
            }
        }
    ], [
        {
            key: "fromStatementNode",
            value: function fromStatementNode(statementNode, context) {
                var containedAssertion = null;
                var containedAssertionNode = statementNode.getContainedAssertionNode();
                if (containedAssertionNode !== null) {
                    var Term = _ontology.default.Term, Frame = _ontology.default.Frame, Statement = _ontology.default.Statement, node = containedAssertionNode, string = context.nodeAsString(node), tokens = context.nodeAsTokens(node), negated = containedAssertionNode.isNegated(), term = Term.fromContainedAssertionNode(containedAssertionNode, context), frame = Frame.fromContainedAssertionNode(containedAssertionNode, context), statement = Statement.fromContainedAssertionNode(containedAssertionNode, context);
                    containedAssertion = new ContainedAssertion(string, node, tokens, term, frame, negated, statement);
                }
                return containedAssertion;
            }
        }
    ]);
    return ContainedAssertion;
}(_assertion.default), _define_property(_ContainedAssertion, "name", "ContainedAssertion"), _ContainedAssertion));
function verifyWhenDerived(term, frame, statement, negated, generalContext, specificContext) {
    var verifiesWhenDerived = false;
    var context = specificContext; ///
    if (statement !== null) {
        if (term !== null) {
            var termContained = statement.isTermContained(term, context);
            if (!negated && termContained) {
                verifiesWhenDerived = true;
            }
            if (negated && !termContained) {
                verifiesWhenDerived = true;
            }
        }
        if (frame !== null) {
            var frameContained = statement.isFrameContained(frame, context);
            if (!negated && frameContained) {
                verifiesWhenDerived = true;
            }
            if (negated && !frameContained) {
                verifiesWhenDerived = true;
            }
        }
    }
    return verifiesWhenDerived;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbnRvbG9neS9hc3NlcnRpb24vY29udGFpbmVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgb250b2xvZ3kgZnJvbSBcIi4uLy4uL29udG9sb2d5XCI7XG5pbXBvcnQgQXNzZXJ0aW9uIGZyb20gXCIuLi9hc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL29udG9sb2d5XCI7XG5pbXBvcnQgeyB0ZXJtRnJvbVRlcm1BbmRTdWJzdGl0dXRpb25zLCBmcmFtZUZyb21GcmFtZUFuZFN1YnN0aXR1dGlvbnMsIHN0YXRlbWVudEZyb21TdGF0ZW1lbnRBbmRTdWJzdGl0dXRpb25zIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9zdWJzdGl0dXRpb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBDb250YWluZWRBc3NlcnRpb24gZXh0ZW5kcyBBc3NlcnRpb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5vZGUsIHRva2VucywgdGVybSwgZnJhbWUsIG5lZ2F0ZWQsIHN0YXRlbWVudCkge1xuICAgIHN1cGVyKHN0cmluZywgbm9kZSwgdG9rZW5zKTtcblxuICAgIHRoaXMudGVybSA9IHRlcm07XG4gICAgdGhpcy5mcmFtZSA9IGZyYW1lO1xuICAgIHRoaXMubmVnYXRlZCA9IG5lZ2F0ZWQ7XG4gICAgdGhpcy5zdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm07XG4gIH1cblxuICBnZXRGcmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5mcmFtZTtcbiAgfVxuXG4gIGlzTmVnYXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5uZWdhdGVkO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudDtcbiAgfVxuXG4gIHZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250YWluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgY29udGFpbmVkIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3QgdGVybVZlcmlmaWVzID0gdGhpcy52ZXJpZnlUZXJtKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpLFxuICAgICAgICAgIGZyYW1lVmVyaWZpZXMgPSB0aGlzLnZlcmlmeUZyYW1lKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpLFxuICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVzID0gdGhpcy52ZXJpZnlTdGF0ZW1lbnQoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dClcblxuICAgIGlmICh0ZXJtVmVyaWZpZXMgfHwgZnJhbWVWZXJpZmllcyB8fCBzdGF0ZW1lbnRWZXJpZmllcykge1xuICAgICAgbGV0IHZlcmlmaWVzV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICB2ZXJpZmllc1doZW5TdGF0ZWQgPSB0aGlzLnZlcmlmeVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmVyaWZpZXNXaGVuRGVyaXZlZCA9IHRoaXMudmVyaWZ5V2hlbkRlcml2ZWQoY29udGV4dCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh2ZXJpZmllc1doZW5TdGF0ZWQgfHwgdmVyaWZpZXNXaGVuRGVyaXZlZCkge1xuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgY29udGFpbmVkIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlUZXJtKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy50ZXJtICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGhpcy50ZXJtLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLi4uYCk7XG5cbiAgICAgIGNvbnN0IHRlcm1TaW5ndWxhciA9IHRoaXMudGVybS5pc1Npbmd1bGFyKCk7XG5cbiAgICAgIGlmICghdGVybVNpbmd1bGFyKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBpcyBub3Qgc2luZ3VsYXIuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0ZXJtVmVyaWZpZXMgPSB0aGlzLnRlcm0udmVyaWZ5KGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgICBjb25zdCB2ZXJpZmllc0FoZWFkID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiB2ZXJpZmllc0FoZWFkO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGVybVZlcmlmaWVzKSB7XG4gICAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLmApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1WZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeUZyYW1lKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWVWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuZnJhbWUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5mcmFtZS5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLi4uYCk7XG5cbiAgICAgIGNvbnN0IGZyYW1lU2luZ3VsYXIgPSB0aGlzLmZyYW1lLmlzU2luZ3VsYXIoKTtcblxuICAgICAgaWYgKCFmcmFtZVNpbmd1bGFyKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGlzIG5vdCBzaW5ndWxhci5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRlZCA9IHRydWU7ICAvLy9cblxuICAgICAgICBhc3NpZ25tZW50cyA9IG51bGw7IC8vL1xuXG4gICAgICAgIGZyYW1lVmVyaWZpZXMgPSB0aGlzLmZyYW1lLnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoZnJhbWVWZXJpZmllcykge1xuICAgICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLmApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlTdGF0ZW1lbnQoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRWZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgICAgc3RhdGVkID0gdHJ1ZTsgIC8vL1xuXG4gICAgICBhc3NpZ25tZW50cyA9IG51bGw7IC8vL1xuXG4gICAgICBzdGF0ZW1lbnRWZXJpZmllcyA9IHRoaXMuc3RhdGVtZW50LnZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFZlcmlmaWVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5V2hlblN0YXRlZChhc3NpZ25tZW50cywgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllc1doZW5TdGF0ZWQ7XG5cbiAgICBjb25zdCBjb250YWluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIGNvbnRhaW5lZCBhc3NlcnRpb24uLi5gKTtcblxuICAgIHZlcmlmaWVzV2hlblN0YXRlZCA9IHRydWU7XG5cbiAgICBpZiAodmVyaWZpZXNXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIGNvbnRhaW5lZCBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZlcmlmeVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXNXaGVuRGVyaXZlZDtcblxuICAgIGNvbnN0IGNvbnRhaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIGNvbnRhaW5lZCBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb3RuZXh0ID0gbnVsbCxcbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSB2ZXJpZnlXaGVuRGVyaXZlZCh0aGlzLnRlcm0sIHRoaXMuZnJhbWUsIHRoaXMuc3RhdGVtZW50LCB0aGlzLm5lZ2F0ZWQsIGdlbmVyYWxDb3RuZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHZlcmlmaWVzV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIGNvbnRhaW5lZCBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzV2hlbkRlcml2ZWQ7XG4gIH1cblxuICB1bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB1bmlmaWVzSW5kZXBlbmRlbnRseTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBjb250YWluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBjb250YWluZWQgYXNzZXJ0aW9uIGluZGVwZW5kZW50bHkuLi5gKTtcblxuICAgIGNvbnN0IHRlcm0gPSB0ZXJtRnJvbVRlcm1BbmRTdWJzdGl0dXRpb25zKHRoaXMudGVybSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCksXG4gICAgICAgICAgZnJhbWUgPSBmcmFtZUZyb21GcmFtZUFuZFN1YnN0aXR1dGlvbnModGhpcy5mcmFtZSwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudEFuZFN1YnN0aXR1dGlvbnModGhpcy5zdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpLFxuICAgICAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSB2ZXJpZnlXaGVuRGVyaXZlZCh0ZXJtLCBmcmFtZSwgc3RhdGVtZW50LCB0aGlzLm5lZ2F0ZWQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgdW5pZmllc0luZGVwZW5kZW50bHkgPSB2ZXJpZmllc1doZW5EZXJpdmVkOyAvLy9cblxuICAgIGlmICh1bmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgY29udGFpbmVkIGFzc2VydGlvbiBpbmRlcGVuZGVudGx5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVzSW5kZXBlbmRlbnRseTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJDb250YWluZWRBc3NlcnRpb25cIjtcblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICAgIGxldCBjb250YWluZWRBc3NlcnRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgY29udGFpbmVkQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0Q29udGFpbmVkQXNzZXJ0aW9uTm9kZSgpO1xuXG4gICAgaWYgKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHsgVGVybSwgRnJhbWUsIFN0YXRlbWVudCB9ID0gb250b2xvZ3ksXG4gICAgICAgICAgICBub2RlID0gY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgc3RyaW5nID0gY29udGV4dC5ub2RlQXNTdHJpbmcobm9kZSksXG4gICAgICAgICAgICB0b2tlbnMgPSBjb250ZXh0Lm5vZGVBc1Rva2Vucyhub2RlKSxcbiAgICAgICAgICAgIG5lZ2F0ZWQgPSBjb250YWluZWRBc3NlcnRpb25Ob2RlLmlzTmVnYXRlZCgpLFxuICAgICAgICAgICAgdGVybSA9IFRlcm0uZnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBmcmFtZSA9IEZyYW1lLmZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBjb250YWluZWRBc3NlcnRpb24gPSBuZXcgQ29udGFpbmVkQXNzZXJ0aW9uKHN0cmluZywgbm9kZSwgdG9rZW5zLCB0ZXJtLCBmcmFtZSwgbmVnYXRlZCwgc3RhdGVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGFpbmVkQXNzZXJ0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gdmVyaWZ5V2hlbkRlcml2ZWQodGVybSwgZnJhbWUsIHN0YXRlbWVudCwgbmVnYXRlZCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICBsZXQgdmVyaWZpZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHRlcm1Db250YWluZWQgPSBzdGF0ZW1lbnQuaXNUZXJtQ29udGFpbmVkKHRlcm0sIGNvbnRleHQpO1xuXG4gICAgICBpZiAoIW5lZ2F0ZWQgJiYgdGVybUNvbnRhaW5lZCkge1xuICAgICAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZ2F0ZWQgJiYgIXRlcm1Db250YWluZWQpIHtcbiAgICAgICAgdmVyaWZpZXNXaGVuRGVyaXZlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZyYW1lICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBmcmFtZUNvbnRhaW5lZCA9IHN0YXRlbWVudC5pc0ZyYW1lQ29udGFpbmVkKGZyYW1lLCBjb250ZXh0KTtcblxuICAgICAgaWYgKCFuZWdhdGVkICYmIGZyYW1lQ29udGFpbmVkKSB7XG4gICAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVnYXRlZCAmJiAhZnJhbWVDb250YWluZWQpIHtcbiAgICAgICAgdmVyaWZpZXNXaGVuRGVyaXZlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZlcmlmaWVzV2hlbkRlcml2ZWQ7XG59Il0sIm5hbWVzIjpbImRlZmluZSIsIkNvbnRhaW5lZEFzc2VydGlvbiIsInN0cmluZyIsIm5vZGUiLCJ0b2tlbnMiLCJ0ZXJtIiwiZnJhbWUiLCJuZWdhdGVkIiwic3RhdGVtZW50IiwiZ2V0VGVybSIsImdldEZyYW1lIiwiaXNOZWdhdGVkIiwiZ2V0U3RhdGVtZW50IiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJjb250ZXh0IiwidmVyaWZpZXMiLCJjb250YWluZWRBc3NlcnRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInRlcm1WZXJpZmllcyIsInZlcmlmeVRlcm0iLCJmcmFtZVZlcmlmaWVzIiwidmVyaWZ5RnJhbWUiLCJzdGF0ZW1lbnRWZXJpZmllcyIsInZlcmlmeVN0YXRlbWVudCIsInZlcmlmaWVzV2hlblN0YXRlZCIsInZlcmlmaWVzV2hlbkRlcml2ZWQiLCJ2ZXJpZnlXaGVuU3RhdGVkIiwidmVyaWZ5V2hlbkRlcml2ZWQiLCJkZWJ1ZyIsInRlcm1TdHJpbmciLCJ0ZXJtU2luZ3VsYXIiLCJpc1Npbmd1bGFyIiwidmVyaWZpZXNBaGVhZCIsImZyYW1lU3RyaW5nIiwiZnJhbWVTaW5ndWxhciIsInN0YXRlbWVudFN0cmluZyIsImdlbmVyYWxDb3RuZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwidW5pZnlJbmRlcGVuZGVudGx5Iiwic3Vic3RpdHV0aW9ucyIsImdlbmVyYWxDb250ZXh0IiwidW5pZmllc0luZGVwZW5kZW50bHkiLCJ0ZXJtRnJvbVRlcm1BbmRTdWJzdGl0dXRpb25zIiwiZnJhbWVGcm9tRnJhbWVBbmRTdWJzdGl0dXRpb25zIiwic3RhdGVtZW50RnJvbVN0YXRlbWVudEFuZFN1YnN0aXR1dGlvbnMiLCJmcm9tU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJjb250YWluZWRBc3NlcnRpb24iLCJjb250YWluZWRBc3NlcnRpb25Ob2RlIiwiZ2V0Q29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsIlRlcm0iLCJvbnRvbG9neSIsIkZyYW1lIiwiU3RhdGVtZW50Iiwibm9kZUFzU3RyaW5nIiwibm9kZUFzVG9rZW5zIiwiZnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJBc3NlcnRpb24iLCJuYW1lIiwidGVybUNvbnRhaW5lZCIsImlzVGVybUNvbnRhaW5lZCIsImZyYW1lQ29udGFpbmVkIiwiaXNGcmFtZUNvbnRhaW5lZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFBOzs7Z0VBTnFCO2dFQUNDOzZCQUcrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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