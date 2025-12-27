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
var _ContainedAssertion;
var _default = (0, _structure.define)((_ContainedAssertion = /*#__PURE__*/ function(Assertion) {
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
                    var Term = _structure.default.Term, Frame = _structure.default.Frame, Statement = _structure.default.Statement, node = containedAssertionNode, string = context.nodeAsString(node), tokens = context.nodeAsTokens(node), negated = containedAssertionNode.isNegated(), term = Term.fromContainedAssertionNode(containedAssertionNode, context), frame = Frame.fromContainedAssertionNode(containedAssertionNode, context), statement = Statement.fromContainedAssertionNode(containedAssertionNode, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zdHJ1Y3R1cmUvYXNzZXJ0aW9uL2NvbnRhaW5lZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHN0cnVjdHVyZSBmcm9tIFwiLi4vLi4vc3RydWN0dXJlXCI7XG5pbXBvcnQgQXNzZXJ0aW9uIGZyb20gXCIuLi9hc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL3N0cnVjdHVyZVwiO1xuaW1wb3J0IHsgdGVybUZyb21UZXJtQW5kU3Vic3RpdHV0aW9ucywgZnJhbWVGcm9tRnJhbWVBbmRTdWJzdGl0dXRpb25zLCBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50QW5kU3Vic3RpdHV0aW9ucyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvc3Vic3RpdHV0aW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgQ29udGFpbmVkQXNzZXJ0aW9uIGV4dGVuZHMgQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nLCBub2RlLCB0b2tlbnMsIHRlcm0sIGZyYW1lLCBuZWdhdGVkLCBzdGF0ZW1lbnQpIHtcbiAgICBzdXBlcihzdHJpbmcsIG5vZGUsIHRva2Vucyk7XG5cbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICAgIHRoaXMuZnJhbWUgPSBmcmFtZTtcbiAgICB0aGlzLm5lZ2F0ZWQgPSBuZWdhdGVkO1xuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtO1xuICB9XG5cbiAgZ2V0RnJhbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZnJhbWU7XG4gIH1cblxuICBpc05lZ2F0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMubmVnYXRlZDtcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICB2ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIGNvbnRhaW5lZCBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHRlcm1WZXJpZmllcyA9IHRoaXMudmVyaWZ5VGVybShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSxcbiAgICAgICAgICBmcmFtZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlGcmFtZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSxcbiAgICAgICAgICBzdGF0ZW1lbnRWZXJpZmllcyA9IHRoaXMudmVyaWZ5U3RhdGVtZW50KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpXG5cbiAgICBpZiAodGVybVZlcmlmaWVzIHx8IGZyYW1lVmVyaWZpZXMgfHwgc3RhdGVtZW50VmVyaWZpZXMpIHtcbiAgICAgIGxldCB2ZXJpZmllc1doZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgdmVyaWZpZXNXaGVuU3RhdGVkID0gdGhpcy52ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSB0aGlzLnZlcmlmeVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgfVxuXG4gICAgICBpZiAodmVyaWZpZXNXaGVuU3RhdGVkIHx8IHZlcmlmaWVzV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIGNvbnRhaW5lZCBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5VGVybShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1WZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMudGVybSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdGVybVN0cmluZyA9IHRoaXMudGVybS5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS4uLmApO1xuXG4gICAgICBjb25zdCB0ZXJtU2luZ3VsYXIgPSB0aGlzLnRlcm0uaXNTaW5ndWxhcigpO1xuXG4gICAgICBpZiAoIXRlcm1TaW5ndWxhcikge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dGVybVN0cmluZ30nIHRlcm0gaXMgbm90IHNpbmd1bGFyLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGVybVZlcmlmaWVzID0gdGhpcy50ZXJtLnZlcmlmeShjb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmVyaWZpZXNBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gdmVyaWZpZXNBaGVhZDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRlcm1WZXJpZmllcykge1xuICAgICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZXJtVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlGcmFtZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLmZyYW1lICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZnJhbWUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS4uLmApO1xuXG4gICAgICBjb25zdCBmcmFtZVNpbmd1bGFyID0gdGhpcy5mcmFtZS5pc1Npbmd1bGFyKCk7XG5cbiAgICAgIGlmICghZnJhbWVTaW5ndWxhcikge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSBpcyBub3Qgc2luZ3VsYXIuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0ZWQgPSB0cnVlOyAgLy8vXG5cbiAgICAgICAgYXNzaWdubWVudHMgPSBudWxsOyAvLy9cblxuICAgICAgICBmcmFtZVZlcmlmaWVzID0gdGhpcy5mcmFtZS52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGZyYW1lVmVyaWZpZXMpIHtcbiAgICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmcmFtZVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5U3RhdGVtZW50KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLnN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICAgIHN0YXRlZCA9IHRydWU7ICAvLy9cblxuICAgICAgYXNzaWdubWVudHMgPSBudWxsOyAvLy9cblxuICAgICAgc3RhdGVtZW50VmVyaWZpZXMgPSB0aGlzLnN0YXRlbWVudC52ZXJpZnkoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXNXaGVuU3RhdGVkO1xuXG4gICAgY29uc3QgY29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIHN0YXRlZCBjb250YWluZWQgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICB2ZXJpZmllc1doZW5TdGF0ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHZlcmlmaWVzV2hlblN0YXRlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIHN0YXRlZCBjb250YWluZWQgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllc1doZW5TdGF0ZWQ7XG4gIH1cblxuICB2ZXJpZnlXaGVuRGVyaXZlZChjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzV2hlbkRlcml2ZWQ7XG5cbiAgICBjb25zdCBjb250YWluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCBjb250YWluZWQgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ290bmV4dCA9IG51bGwsXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gdmVyaWZ5V2hlbkRlcml2ZWQodGhpcy50ZXJtLCB0aGlzLmZyYW1lLCB0aGlzLnN0YXRlbWVudCwgdGhpcy5uZWdhdGVkLCBnZW5lcmFsQ290bmV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmICh2ZXJpZmllc1doZW5EZXJpdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCBjb250YWluZWQgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllc1doZW5EZXJpdmVkO1xuICB9XG5cbiAgdW5pZnlJbmRlcGVuZGVudGx5KHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllc0luZGVwZW5kZW50bHk7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgY29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgY29udGFpbmVkIGFzc2VydGlvbiBpbmRlcGVuZGVudGx5Li4uYCk7XG5cbiAgICBjb25zdCB0ZXJtID0gdGVybUZyb21UZXJtQW5kU3Vic3RpdHV0aW9ucyh0aGlzLnRlcm0sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpLFxuICAgICAgICAgIGZyYW1lID0gZnJhbWVGcm9tRnJhbWVBbmRTdWJzdGl0dXRpb25zKHRoaXMuZnJhbWUsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnRBbmRTdWJzdGl0dXRpb25zKHRoaXMuc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSxcbiAgICAgICAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gdmVyaWZ5V2hlbkRlcml2ZWQodGVybSwgZnJhbWUsIHN0YXRlbWVudCwgdGhpcy5uZWdhdGVkLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gdmVyaWZpZXNXaGVuRGVyaXZlZDsgLy8vXG5cbiAgICBpZiAodW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIGNvbnRhaW5lZCBhc3NlcnRpb24gaW5kZXBlbmRlbnRseS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllc0luZGVwZW5kZW50bHk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQ29udGFpbmVkQXNzZXJ0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpIHtcbiAgICBsZXQgY29udGFpbmVkQXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGNvbnRhaW5lZEFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldENvbnRhaW5lZEFzc2VydGlvbk5vZGUoKTtcblxuICAgIGlmIChjb250YWluZWRBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFRlcm0sIEZyYW1lLCBTdGF0ZW1lbnQgfSA9IHN0cnVjdHVyZSxcbiAgICAgICAgICAgIG5vZGUgPSBjb250YWluZWRBc3NlcnRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgIHRva2VucyA9IGNvbnRleHQubm9kZUFzVG9rZW5zKG5vZGUpLFxuICAgICAgICAgICAgbmVnYXRlZCA9IGNvbnRhaW5lZEFzc2VydGlvbk5vZGUuaXNOZWdhdGVkKCksXG4gICAgICAgICAgICB0ZXJtID0gVGVybS5mcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGZyYW1lID0gRnJhbWUuZnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGNvbnRhaW5lZEFzc2VydGlvbiA9IG5ldyBDb250YWluZWRBc3NlcnRpb24oc3RyaW5nLCBub2RlLCB0b2tlbnMsIHRlcm0sIGZyYW1lLCBuZWdhdGVkLCBzdGF0ZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBjb250YWluZWRBc3NlcnRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiB2ZXJpZnlXaGVuRGVyaXZlZCh0ZXJtLCBmcmFtZSwgc3RhdGVtZW50LCBuZWdhdGVkLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGxldCB2ZXJpZmllc1doZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdGVybUNvbnRhaW5lZCA9IHN0YXRlbWVudC5pc1Rlcm1Db250YWluZWQodGVybSwgY29udGV4dCk7XG5cbiAgICAgIGlmICghbmVnYXRlZCAmJiB0ZXJtQ29udGFpbmVkKSB7XG4gICAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVnYXRlZCAmJiAhdGVybUNvbnRhaW5lZCkge1xuICAgICAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJhbWUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGZyYW1lQ29udGFpbmVkID0gc3RhdGVtZW50LmlzRnJhbWVDb250YWluZWQoZnJhbWUsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoIW5lZ2F0ZWQgJiYgZnJhbWVDb250YWluZWQpIHtcbiAgICAgICAgdmVyaWZpZXNXaGVuRGVyaXZlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWdhdGVkICYmICFmcmFtZUNvbnRhaW5lZCkge1xuICAgICAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmVyaWZpZXNXaGVuRGVyaXZlZDtcbn0iXSwibmFtZXMiOlsiZGVmaW5lIiwiQ29udGFpbmVkQXNzZXJ0aW9uIiwic3RyaW5nIiwibm9kZSIsInRva2VucyIsInRlcm0iLCJmcmFtZSIsIm5lZ2F0ZWQiLCJzdGF0ZW1lbnQiLCJnZXRUZXJtIiwiZ2V0RnJhbWUiLCJpc05lZ2F0ZWQiLCJnZXRTdGF0ZW1lbnQiLCJ2ZXJpZnkiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsImNvbnRleHQiLCJ2ZXJpZmllcyIsImNvbnRhaW5lZEFzc2VydGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidGVybVZlcmlmaWVzIiwidmVyaWZ5VGVybSIsImZyYW1lVmVyaWZpZXMiLCJ2ZXJpZnlGcmFtZSIsInN0YXRlbWVudFZlcmlmaWVzIiwidmVyaWZ5U3RhdGVtZW50IiwidmVyaWZpZXNXaGVuU3RhdGVkIiwidmVyaWZpZXNXaGVuRGVyaXZlZCIsInZlcmlmeVdoZW5TdGF0ZWQiLCJ2ZXJpZnlXaGVuRGVyaXZlZCIsImRlYnVnIiwidGVybVN0cmluZyIsInRlcm1TaW5ndWxhciIsImlzU2luZ3VsYXIiLCJ2ZXJpZmllc0FoZWFkIiwiZnJhbWVTdHJpbmciLCJmcmFtZVNpbmd1bGFyIiwic3RhdGVtZW50U3RyaW5nIiwiZ2VuZXJhbENvdG5leHQiLCJzcGVjaWZpY0NvbnRleHQiLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJzdWJzdGl0dXRpb25zIiwiZ2VuZXJhbENvbnRleHQiLCJ1bmlmaWVzSW5kZXBlbmRlbnRseSIsInRlcm1Gcm9tVGVybUFuZFN1YnN0aXR1dGlvbnMiLCJmcmFtZUZyb21GcmFtZUFuZFN1YnN0aXR1dGlvbnMiLCJzdGF0ZW1lbnRGcm9tU3RhdGVtZW50QW5kU3Vic3RpdHV0aW9ucyIsImZyb21TdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsImNvbnRhaW5lZEFzc2VydGlvbiIsImNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJnZXRDb250YWluZWRBc3NlcnRpb25Ob2RlIiwiVGVybSIsInN0cnVjdHVyZSIsIkZyYW1lIiwiU3RhdGVtZW50Iiwibm9kZUFzU3RyaW5nIiwibm9kZUFzVG9rZW5zIiwiZnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJBc3NlcnRpb24iLCJuYW1lIiwidGVybUNvbnRhaW5lZCIsImlzVGVybUNvbnRhaW5lZCIsImZyYW1lQ29udGFpbmVkIiwiaXNGcmFtZUNvbnRhaW5lZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFBOzs7aUVBTnNCO2dFQUNBOzZCQUcrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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