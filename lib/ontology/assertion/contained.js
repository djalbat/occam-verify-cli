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
                    var frameString = this.frame.getString();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbnRvbG9neS9hc3NlcnRpb24vY29udGFpbmVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgb250b2xvZ3kgZnJvbSBcIi4uLy4uL29udG9sb2d5XCI7XG5pbXBvcnQgQXNzZXJ0aW9uIGZyb20gXCIuLi9hc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL29udG9sb2d5XCI7XG5pbXBvcnQgeyB0ZXJtRnJvbVRlcm1BbmRTdWJzdGl0dXRpb25zLCBmcmFtZUZyb21GcmFtZUFuZFN1YnN0aXR1dGlvbnMsIHN0YXRlbWVudEZyb21TdGF0ZW1lbnRBbmRTdWJzdGl0dXRpb25zIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9zdWJzdGl0dXRpb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBDb250YWluZWRBc3NlcnRpb24gZXh0ZW5kcyBBc3NlcnRpb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5vZGUsIHRva2VucywgdGVybSwgZnJhbWUsIG5lZ2F0ZWQsIHN0YXRlbWVudCkge1xuICAgIHN1cGVyKHN0cmluZywgbm9kZSwgdG9rZW5zKTtcblxuICAgIHRoaXMudGVybSA9IHRlcm07XG4gICAgdGhpcy5mcmFtZSA9IGZyYW1lO1xuICAgIHRoaXMubmVnYXRlZCA9IG5lZ2F0ZWQ7XG4gICAgdGhpcy5zdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm07XG4gIH1cblxuICBnZXRGcmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5mcmFtZTtcbiAgfVxuXG4gIGlzTmVnYXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5uZWdhdGVkO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudDtcbiAgfVxuXG4gIHZlcmlmeShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250YWluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgY29udGFpbmVkIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3QgdGVybVZlcmlmaWVzID0gdGhpcy52ZXJpZnlUZXJtKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpLFxuICAgICAgICAgIGZyYW1lVmVyaWZpZXMgPSB0aGlzLnZlcmlmeUZyYW1lKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpLFxuICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVzID0gdGhpcy52ZXJpZnlTdGF0ZW1lbnQoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dClcblxuICAgIGlmICh0ZXJtVmVyaWZpZXMgfHwgZnJhbWVWZXJpZmllcyB8fCBzdGF0ZW1lbnRWZXJpZmllcykge1xuICAgICAgbGV0IHZlcmlmaWVzV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICB2ZXJpZmllc1doZW5TdGF0ZWQgPSB0aGlzLnZlcmlmeVdoZW5TdGF0ZWQoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmVyaWZpZXNXaGVuRGVyaXZlZCA9IHRoaXMudmVyaWZ5V2hlbkRlcml2ZWQoY29udGV4dCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh2ZXJpZmllc1doZW5TdGF0ZWQgfHwgdmVyaWZpZXNXaGVuRGVyaXZlZCkge1xuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgY29udGFpbmVkIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlUZXJtKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy50ZXJtICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGhpcy50ZXJtLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLi4uYCk7XG5cbiAgICAgIGNvbnN0IHRlcm1TaW1wbGUgPSB0aGlzLnRlcm0uaXNTaW1wbGUoKTtcblxuICAgICAgaWYgKCF0ZXJtU2ltcGxlKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBpcyBub3Qgc2ltcGxlLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGVybVZlcmlmaWVzID0gdGhpcy50ZXJtLnZlcmlmeShjb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmVyaWZpZXNBaGVhZCA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gdmVyaWZpZXNBaGVhZDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRlcm1WZXJpZmllcykge1xuICAgICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZXJtVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlGcmFtZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLmZyYW1lICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZnJhbWUuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS4uLmApO1xuXG4gICAgICBjb25zdCBmcmFtZVNpbXBsZSA9IHRoaXMuZnJhbWUuaXNTaW1wbGUoKTtcblxuICAgICAgaWYgKCFmcmFtZVNpbXBsZSkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSBpcyBub3Qgc2ltcGxlLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGVkID0gdHJ1ZTsgIC8vL1xuXG4gICAgICAgIGFzc2lnbm1lbnRzID0gbnVsbDsgLy8vXG5cbiAgICAgICAgZnJhbWVWZXJpZmllcyA9IHRoaXMuZnJhbWUudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChmcmFtZVZlcmlmaWVzKSB7XG4gICAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuYCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWVWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVN0YXRlbWVudChhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5zdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgICBzdGF0ZWQgPSB0cnVlOyAgLy8vXG5cbiAgICAgIGFzc2lnbm1lbnRzID0gbnVsbDsgLy8vXG5cbiAgICAgIHN0YXRlbWVudFZlcmlmaWVzID0gdGhpcy5zdGF0ZW1lbnQudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VmVyaWZpZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzV2hlblN0YXRlZDtcblxuICAgIGNvbnN0IGNvbnRhaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgY29udGFpbmVkIGFzc2VydGlvbi4uLmApO1xuXG4gICAgdmVyaWZpZXNXaGVuU3RhdGVkID0gdHJ1ZTtcblxuICAgIGlmICh2ZXJpZmllc1doZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgY29udGFpbmVkIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXNXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlbkRlcml2ZWQoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllc1doZW5EZXJpdmVkO1xuXG4gICAgY29uc3QgY29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgY29udGFpbmVkIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvdG5leHQgPSBudWxsLFxuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgdmVyaWZpZXNXaGVuRGVyaXZlZCA9IHZlcmlmeVdoZW5EZXJpdmVkKHRoaXMudGVybSwgdGhpcy5mcmFtZSwgdGhpcy5zdGF0ZW1lbnQsIHRoaXMubmVnYXRlZCwgZ2VuZXJhbENvdG5leHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAodmVyaWZpZXNXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgY29udGFpbmVkIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXNXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIHVuaWZ5SW5kZXBlbmRlbnRseShzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXNJbmRlcGVuZGVudGx5O1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGNvbnRhaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIGNvbnRhaW5lZCBhc3NlcnRpb24gaW5kZXBlbmRlbnRseS4uLmApO1xuXG4gICAgY29uc3QgdGVybSA9IHRlcm1Gcm9tVGVybUFuZFN1YnN0aXR1dGlvbnModGhpcy50ZXJtLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSxcbiAgICAgICAgICBmcmFtZSA9IGZyYW1lRnJvbUZyYW1lQW5kU3Vic3RpdHV0aW9ucyh0aGlzLmZyYW1lLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50QW5kU3Vic3RpdHV0aW9ucyh0aGlzLnN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCksXG4gICAgICAgICAgdmVyaWZpZXNXaGVuRGVyaXZlZCA9IHZlcmlmeVdoZW5EZXJpdmVkKHRlcm0sIGZyYW1lLCBzdGF0ZW1lbnQsIHRoaXMubmVnYXRlZCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IHZlcmlmaWVzV2hlbkRlcml2ZWQ7IC8vL1xuXG4gICAgaWYgKHVuaWZpZXNJbmRlcGVuZGVudGx5KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBjb250YWluZWQgYXNzZXJ0aW9uIGluZGVwZW5kZW50bHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZXNJbmRlcGVuZGVudGx5O1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkNvbnRhaW5lZEFzc2VydGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbnRhaW5lZEFzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBjb250YWluZWRBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRDb250YWluZWRBc3NlcnRpb25Ob2RlKCk7XG5cbiAgICBpZiAoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBUZXJtLCBGcmFtZSwgU3RhdGVtZW50IH0gPSBvbnRvbG9neSxcbiAgICAgICAgICAgIG5vZGUgPSBjb250YWluZWRBc3NlcnRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgIHRva2VucyA9IGNvbnRleHQubm9kZUFzVG9rZW5zKG5vZGUpLFxuICAgICAgICAgICAgbmVnYXRlZCA9IGNvbnRhaW5lZEFzc2VydGlvbk5vZGUuaXNOZWdhdGVkKCksXG4gICAgICAgICAgICB0ZXJtID0gVGVybS5mcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGZyYW1lID0gRnJhbWUuZnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBzdGF0ZW1lbnQgPSBTdGF0ZW1lbnQuZnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGNvbnRhaW5lZEFzc2VydGlvbiA9IG5ldyBDb250YWluZWRBc3NlcnRpb24oc3RyaW5nLCBub2RlLCB0b2tlbnMsIHRlcm0sIGZyYW1lLCBuZWdhdGVkLCBzdGF0ZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBjb250YWluZWRBc3NlcnRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiB2ZXJpZnlXaGVuRGVyaXZlZCh0ZXJtLCBmcmFtZSwgc3RhdGVtZW50LCBuZWdhdGVkLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGxldCB2ZXJpZmllc1doZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdGVybUNvbnRhaW5lZCA9IHN0YXRlbWVudC5pc1Rlcm1Db250YWluZWQodGVybSwgY29udGV4dCk7XG5cbiAgICAgIGlmICghbmVnYXRlZCAmJiB0ZXJtQ29udGFpbmVkKSB7XG4gICAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVnYXRlZCAmJiAhdGVybUNvbnRhaW5lZCkge1xuICAgICAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJhbWUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGZyYW1lQ29udGFpbmVkID0gc3RhdGVtZW50LmlzRnJhbWVDb250YWluZWQoZnJhbWUsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoIW5lZ2F0ZWQgJiYgZnJhbWVDb250YWluZWQpIHtcbiAgICAgICAgdmVyaWZpZXNXaGVuRGVyaXZlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWdhdGVkICYmICFmcmFtZUNvbnRhaW5lZCkge1xuICAgICAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmVyaWZpZXNXaGVuRGVyaXZlZDtcbn0iXSwibmFtZXMiOlsiZGVmaW5lIiwiQ29udGFpbmVkQXNzZXJ0aW9uIiwic3RyaW5nIiwibm9kZSIsInRva2VucyIsInRlcm0iLCJmcmFtZSIsIm5lZ2F0ZWQiLCJzdGF0ZW1lbnQiLCJnZXRUZXJtIiwiZ2V0RnJhbWUiLCJpc05lZ2F0ZWQiLCJnZXRTdGF0ZW1lbnQiLCJ2ZXJpZnkiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsImNvbnRleHQiLCJ2ZXJpZmllcyIsImNvbnRhaW5lZEFzc2VydGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidGVybVZlcmlmaWVzIiwidmVyaWZ5VGVybSIsImZyYW1lVmVyaWZpZXMiLCJ2ZXJpZnlGcmFtZSIsInN0YXRlbWVudFZlcmlmaWVzIiwidmVyaWZ5U3RhdGVtZW50IiwidmVyaWZpZXNXaGVuU3RhdGVkIiwidmVyaWZpZXNXaGVuRGVyaXZlZCIsInZlcmlmeVdoZW5TdGF0ZWQiLCJ2ZXJpZnlXaGVuRGVyaXZlZCIsImRlYnVnIiwidGVybVN0cmluZyIsInRlcm1TaW1wbGUiLCJpc1NpbXBsZSIsInZlcmlmaWVzQWhlYWQiLCJmcmFtZVN0cmluZyIsImZyYW1lU2ltcGxlIiwic3RhdGVtZW50U3RyaW5nIiwiZ2VuZXJhbENvdG5leHQiLCJzcGVjaWZpY0NvbnRleHQiLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJzdWJzdGl0dXRpb25zIiwiZ2VuZXJhbENvbnRleHQiLCJ1bmlmaWVzSW5kZXBlbmRlbnRseSIsInRlcm1Gcm9tVGVybUFuZFN1YnN0aXR1dGlvbnMiLCJmcmFtZUZyb21GcmFtZUFuZFN1YnN0aXR1dGlvbnMiLCJzdGF0ZW1lbnRGcm9tU3RhdGVtZW50QW5kU3Vic3RpdHV0aW9ucyIsImZyb21TdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsImNvbnRhaW5lZEFzc2VydGlvbiIsImNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJnZXRDb250YWluZWRBc3NlcnRpb25Ob2RlIiwiVGVybSIsIm9udG9sb2d5IiwiRnJhbWUiLCJTdGF0ZW1lbnQiLCJub2RlQXNTdHJpbmciLCJub2RlQXNUb2tlbnMiLCJmcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsIkFzc2VydGlvbiIsIm5hbWUiLCJ0ZXJtQ29udGFpbmVkIiwiaXNUZXJtQ29udGFpbmVkIiwiZnJhbWVDb250YWluZWQiLCJpc0ZyYW1lQ29udGFpbmVkIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQUE7OztnRUFOcUI7Z0VBQ0M7NkJBRytGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUVySCxXQUFlQSxJQUFBQSxn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