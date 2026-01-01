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
    function ContainedAssertion(string, node, term, frame, negated, statement) {
        _class_call_check(this, ContainedAssertion);
        var _this;
        _this = _call_super(this, ContainedAssertion, [
            string,
            node
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
                    var Term = _ontology.default.Term, Frame = _ontology.default.Frame, Statement = _ontology.default.Statement, node = containedAssertionNode, string = context.nodeAsString(node), negated = containedAssertionNode.isNegated(), term = Term.fromContainedAssertionNode(containedAssertionNode, context), frame = Frame.fromContainedAssertionNode(containedAssertionNode, context), statement = Statement.fromContainedAssertionNode(containedAssertionNode, context);
                    containedAssertion = new ContainedAssertion(string, node, term, frame, negated, statement);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9vbnRvbG9neS9hc3NlcnRpb24vY29udGFpbmVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgb250b2xvZ3kgZnJvbSBcIi4uLy4uL29udG9sb2d5XCI7XG5pbXBvcnQgQXNzZXJ0aW9uIGZyb20gXCIuLi9hc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL29udG9sb2d5XCI7XG5pbXBvcnQgeyB0ZXJtRnJvbVRlcm1BbmRTdWJzdGl0dXRpb25zLCBmcmFtZUZyb21GcmFtZUFuZFN1YnN0aXR1dGlvbnMsIHN0YXRlbWVudEZyb21TdGF0ZW1lbnRBbmRTdWJzdGl0dXRpb25zIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9zdWJzdGl0dXRpb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBDb250YWluZWRBc3NlcnRpb24gZXh0ZW5kcyBBc3NlcnRpb24ge1xuICBjb25zdHJ1Y3RvcihzdHJpbmcsIG5vZGUsIHRlcm0sIGZyYW1lLCBuZWdhdGVkLCBzdGF0ZW1lbnQpIHtcbiAgICBzdXBlcihzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgICB0aGlzLmZyYW1lID0gZnJhbWU7XG4gICAgdGhpcy5uZWdhdGVkID0gbmVnYXRlZDtcbiAgICB0aGlzLnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGdldEZyYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmZyYW1lO1xuICB9XG5cbiAgaXNOZWdhdGVkKCkge1xuICAgIHJldHVybiB0aGlzLm5lZ2F0ZWQ7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgdmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRhaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBjb250YWluZWQgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVRlcm0oYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCksXG4gICAgICAgICAgZnJhbWVWZXJpZmllcyA9IHRoaXMudmVyaWZ5RnJhbWUoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCksXG4gICAgICAgICAgc3RhdGVtZW50VmVyaWZpZXMgPSB0aGlzLnZlcmlmeVN0YXRlbWVudChhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KVxuXG4gICAgaWYgKHRlcm1WZXJpZmllcyB8fCBmcmFtZVZlcmlmaWVzIHx8IHN0YXRlbWVudFZlcmlmaWVzKSB7XG4gICAgICBsZXQgdmVyaWZpZXNXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgdmVyaWZpZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICBpZiAoc3RhdGVkKSB7XG4gICAgICAgIHZlcmlmaWVzV2hlblN0YXRlZCA9IHRoaXMudmVyaWZ5V2hlblN0YXRlZChhc3NpZ25tZW50cywgY29udGV4dCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gdGhpcy52ZXJpZnlXaGVuRGVyaXZlZChjb250ZXh0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHZlcmlmaWVzV2hlblN0YXRlZCB8fCB2ZXJpZmllc1doZW5EZXJpdmVkKSB7XG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBjb250YWluZWQgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVRlcm0oYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtVmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLnRlcm0gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0aGlzLnRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0uLi5gKTtcblxuICAgICAgY29uc3QgdGVybVNpbmd1bGFyID0gdGhpcy50ZXJtLmlzU2luZ3VsYXIoKTtcblxuICAgICAgaWYgKCF0ZXJtU2luZ3VsYXIpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGlzIG5vdCBzaW5ndWxhci5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRlcm1WZXJpZmllcyA9IHRoaXMudGVybS52ZXJpZnkoY29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZlcmlmaWVzQWhlYWQgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIHZlcmlmaWVzQWhlYWQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0ZXJtVmVyaWZpZXMpIHtcbiAgICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0uYCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5RnJhbWUoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBmcmFtZVZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5mcmFtZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmZyYW1lLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuLi5gKTtcblxuICAgICAgY29uc3QgZnJhbWVTaW5ndWxhciA9IHRoaXMuZnJhbWUuaXNTaW5ndWxhcigpO1xuXG4gICAgICBpZiAoIWZyYW1lU2luZ3VsYXIpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgaXMgbm90IHNpbmd1bGFyLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGVkID0gdHJ1ZTsgIC8vL1xuXG4gICAgICAgIGFzc2lnbm1lbnRzID0gbnVsbDsgLy8vXG5cbiAgICAgICAgZnJhbWVWZXJpZmllcyA9IHRoaXMuZnJhbWUudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChmcmFtZVZlcmlmaWVzKSB7XG4gICAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuYCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWVWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVN0YXRlbWVudChhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5zdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgICBzdGF0ZWQgPSB0cnVlOyAgLy8vXG5cbiAgICAgIGFzc2lnbm1lbnRzID0gbnVsbDsgLy8vXG5cbiAgICAgIHN0YXRlbWVudFZlcmlmaWVzID0gdGhpcy5zdGF0ZW1lbnQudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VmVyaWZpZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlXaGVuU3RhdGVkKGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzV2hlblN0YXRlZDtcblxuICAgIGNvbnN0IGNvbnRhaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgY29udGFpbmVkIGFzc2VydGlvbi4uLmApO1xuXG4gICAgdmVyaWZpZXNXaGVuU3RhdGVkID0gdHJ1ZTtcblxuICAgIGlmICh2ZXJpZmllc1doZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgY29udGFpbmVkIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXNXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmVyaWZ5V2hlbkRlcml2ZWQoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllc1doZW5EZXJpdmVkO1xuXG4gICAgY29uc3QgY29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgY29udGFpbmVkIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvdG5leHQgPSBudWxsLFxuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgdmVyaWZpZXNXaGVuRGVyaXZlZCA9IHZlcmlmeVdoZW5EZXJpdmVkKHRoaXMudGVybSwgdGhpcy5mcmFtZSwgdGhpcy5zdGF0ZW1lbnQsIHRoaXMubmVnYXRlZCwgZ2VuZXJhbENvdG5leHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAodmVyaWZpZXNXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgY29udGFpbmVkIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXNXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIHVuaWZ5SW5kZXBlbmRlbnRseShzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXNJbmRlcGVuZGVudGx5O1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGNvbnRhaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIGNvbnRhaW5lZCBhc3NlcnRpb24gaW5kZXBlbmRlbnRseS4uLmApO1xuXG4gICAgY29uc3QgdGVybSA9IHRlcm1Gcm9tVGVybUFuZFN1YnN0aXR1dGlvbnModGhpcy50ZXJtLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSxcbiAgICAgICAgICBmcmFtZSA9IGZyYW1lRnJvbUZyYW1lQW5kU3Vic3RpdHV0aW9ucyh0aGlzLmZyYW1lLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50QW5kU3Vic3RpdHV0aW9ucyh0aGlzLnN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCksXG4gICAgICAgICAgdmVyaWZpZXNXaGVuRGVyaXZlZCA9IHZlcmlmeVdoZW5EZXJpdmVkKHRlcm0sIGZyYW1lLCBzdGF0ZW1lbnQsIHRoaXMubmVnYXRlZCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IHZlcmlmaWVzV2hlbkRlcml2ZWQ7IC8vL1xuXG4gICAgaWYgKHVuaWZpZXNJbmRlcGVuZGVudGx5KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBjb250YWluZWQgYXNzZXJ0aW9uIGluZGVwZW5kZW50bHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZXNJbmRlcGVuZGVudGx5O1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkNvbnRhaW5lZEFzc2VydGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbnRhaW5lZEFzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBjb250YWluZWRBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRDb250YWluZWRBc3NlcnRpb25Ob2RlKCk7XG5cbiAgICBpZiAoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgeyBUZXJtLCBGcmFtZSwgU3RhdGVtZW50IH0gPSBvbnRvbG9neSxcbiAgICAgICAgICAgIG5vZGUgPSBjb250YWluZWRBc3NlcnRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgICAgIG5lZ2F0ZWQgPSBjb250YWluZWRBc3NlcnRpb25Ob2RlLmlzTmVnYXRlZCgpLFxuICAgICAgICAgICAgdGVybSA9IFRlcm0uZnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBmcmFtZSA9IEZyYW1lLmZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgc3RhdGVtZW50ID0gU3RhdGVtZW50LmZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBjb250YWluZWRBc3NlcnRpb24gPSBuZXcgQ29udGFpbmVkQXNzZXJ0aW9uKHN0cmluZywgbm9kZSwgdGVybSwgZnJhbWUsIG5lZ2F0ZWQsIHN0YXRlbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRhaW5lZEFzc2VydGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHZlcmlmeVdoZW5EZXJpdmVkKHRlcm0sIGZyYW1lLCBzdGF0ZW1lbnQsIG5lZ2F0ZWQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgbGV0IHZlcmlmaWVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0ZXJtQ29udGFpbmVkID0gc3RhdGVtZW50LmlzVGVybUNvbnRhaW5lZCh0ZXJtLCBjb250ZXh0KTtcblxuICAgICAgaWYgKCFuZWdhdGVkICYmIHRlcm1Db250YWluZWQpIHtcbiAgICAgICAgdmVyaWZpZXNXaGVuRGVyaXZlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWdhdGVkICYmICF0ZXJtQ29udGFpbmVkKSB7XG4gICAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFtZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZnJhbWVDb250YWluZWQgPSBzdGF0ZW1lbnQuaXNGcmFtZUNvbnRhaW5lZChmcmFtZSwgY29udGV4dCk7XG5cbiAgICAgIGlmICghbmVnYXRlZCAmJiBmcmFtZUNvbnRhaW5lZCkge1xuICAgICAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZ2F0ZWQgJiYgIWZyYW1lQ29udGFpbmVkKSB7XG4gICAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB2ZXJpZmllc1doZW5EZXJpdmVkO1xufSJdLCJuYW1lcyI6WyJkZWZpbmUiLCJDb250YWluZWRBc3NlcnRpb24iLCJzdHJpbmciLCJub2RlIiwidGVybSIsImZyYW1lIiwibmVnYXRlZCIsInN0YXRlbWVudCIsImdldFRlcm0iLCJnZXRGcmFtZSIsImlzTmVnYXRlZCIsImdldFN0YXRlbWVudCIsInZlcmlmeSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwiY29udGV4dCIsInZlcmlmaWVzIiwiY29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ0ZXJtVmVyaWZpZXMiLCJ2ZXJpZnlUZXJtIiwiZnJhbWVWZXJpZmllcyIsInZlcmlmeUZyYW1lIiwic3RhdGVtZW50VmVyaWZpZXMiLCJ2ZXJpZnlTdGF0ZW1lbnQiLCJ2ZXJpZmllc1doZW5TdGF0ZWQiLCJ2ZXJpZmllc1doZW5EZXJpdmVkIiwidmVyaWZ5V2hlblN0YXRlZCIsInZlcmlmeVdoZW5EZXJpdmVkIiwiZGVidWciLCJ0ZXJtU3RyaW5nIiwidGVybVNpbmd1bGFyIiwiaXNTaW5ndWxhciIsInZlcmlmaWVzQWhlYWQiLCJmcmFtZVN0cmluZyIsImZyYW1lU2luZ3VsYXIiLCJzdGF0ZW1lbnRTdHJpbmciLCJnZW5lcmFsQ290bmV4dCIsInNwZWNpZmljQ29udGV4dCIsInVuaWZ5SW5kZXBlbmRlbnRseSIsInN1YnN0aXR1dGlvbnMiLCJnZW5lcmFsQ29udGV4dCIsInVuaWZpZXNJbmRlcGVuZGVudGx5IiwidGVybUZyb21UZXJtQW5kU3Vic3RpdHV0aW9ucyIsImZyYW1lRnJvbUZyYW1lQW5kU3Vic3RpdHV0aW9ucyIsInN0YXRlbWVudEZyb21TdGF0ZW1lbnRBbmRTdWJzdGl0dXRpb25zIiwiZnJvbVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwiY29udGFpbmVkQXNzZXJ0aW9uIiwiY29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsImdldENvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJUZXJtIiwib250b2xvZ3kiLCJGcmFtZSIsIlN0YXRlbWVudCIsIm5vZGVBc1N0cmluZyIsImZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlIiwiQXNzZXJ0aW9uIiwibmFtZSIsInRlcm1Db250YWluZWQiLCJpc1Rlcm1Db250YWluZWQiLCJmcmFtZUNvbnRhaW5lZCIsImlzRnJhbWVDb250YWluZWQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBQTs7O2dFQU5xQjtnRUFDQzs2QkFHK0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXJILFdBQWVBLElBQUFBLGdCQUFNLHVDQUFDOzthQUFNQyxtQkFDZEMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxPQUFPLEVB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