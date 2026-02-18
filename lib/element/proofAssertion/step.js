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
var _occamlanguages = require("occam-languages");
var _proofAssertion = /*#__PURE__*/ _interop_require_default(require("../proofAssertion"));
var _elements = require("../../elements");
var _unification = require("../../utilities/unification");
var _context = require("../../utilities/context");
var _statement = require("../../utilities/statement");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
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
function _ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var _Step;
var asyncSome = _occamlanguages.asynchronousUtilities.asyncSome;
var _default = (0, _elements.define)((_Step = /*#__PURE__*/ function(ProofAssertion) {
    _inherits(Step, ProofAssertion);
    function Step(context, string, node, statement, reference, satisfiesAssertion) {
        _class_call_check(this, Step);
        var _this;
        _this = _call_super(this, Step, [
            context,
            string,
            node,
            statement
        ]);
        _this.reference = reference;
        _this.satisfiesAssertion = satisfiesAssertion;
        return _this;
    }
    _create_class(Step, [
        {
            key: "getReference",
            value: function getReference() {
                return this.reference;
            }
        },
        {
            key: "getSatisfiesAssertion",
            value: function getSatisfiesAssertion() {
                return this.satisfiesAssertion;
            }
        },
        {
            key: "getStepNode",
            value: function getStepNode() {
                var node = this.getNode(), stepNode = node; ///
                return stepNode;
            }
        },
        {
            key: "isSatisfied",
            value: function isSatisfied() {
                var satisfied = this.satisfiesAssertion !== null;
                return satisfied;
            }
        },
        {
            key: "isQualified",
            value: function isQualified() {
                var qualified = this.reference !== null;
                return qualified;
            }
        },
        {
            key: "isStated",
            value: function isStated() {
                var qualified = this.isQualified(), stated = qualified; ///
                return stated;
            }
        },
        {
            key: "compareTermAndPropertyRelation",
            value: function compareTermAndPropertyRelation(term, propertyRelation, context) {
                var comparesToTermAndPropertyRelation = false;
                var statement = this.getStatement(), propertyAssertion = (0, _statement.propertyAssertionFromStatement)(statement, context);
                if (propertyAssertion !== null) {
                    comparesToTermAndPropertyRelation = propertyAssertion.compareTermAndPropertyRelation(term, propertyRelation, context);
                }
                return comparesToTermAndPropertyRelation;
            }
        },
        {
            key: "validate",
            value: function validate(assignments, context) {
                var validates = false;
                var stepString = this.getString(); ///
                context.trace("Validating the '".concat(stepString, "' step..."));
                var statement = this.getStatement();
                if (statement !== null) {
                    var referenceValidates = this.validateReference(context);
                    if (referenceValidates) {
                        var satisfiesAssertioValidates = this.validateSatisfiesAssertion(context);
                        if (satisfiesAssertioValidates) {
                            var statementValidates = this.validateStatement(assignments, context);
                            if (statementValidates) {
                                validates = true;
                            }
                        }
                    }
                } else {
                    context.debug("Unable to validate the '".concat(stepString, "' step because it is nonsense."));
                }
                if (validates) {
                    context.debug("...validate the '".concat(stepString, "' step."));
                }
                return validates;
            }
        },
        {
            key: "validateReference",
            value: function validateReference(context) {
                var referenceValidates = true;
                if (this.reference !== null) {
                    var stepString = this.getString(), referenceString = this.reference.getString();
                    context.trace("Validating the '".concat(stepString, "' step's '").concat(referenceString, "' reference... "));
                    referenceValidates = this.reference.validate(context);
                    if (referenceValidates) {
                        context.debug("...validated the '".concat(stepString, "' step's '").concat(referenceString, "' reference. "));
                    }
                }
                return referenceValidates;
            }
        },
        {
            key: "validateSatisfiesAssertion",
            value: function validateSatisfiesAssertion(context) {
                var satisfiesAssertionValidates = true; ///
                if (this.satisfiesAssertion !== null) {
                    var stepString = this.getString(), satisfiesAssertion = this.satisfiesAssertion.getString();
                    context.trace("Validating the '".concat(stepString, "' step's '").concat(satisfiesAssertion, "' satisfies assertion... "));
                    var stated = true, assignments = null;
                    satisfiesAssertionValidates = this.satisfiesAssertion.validate(assignments, stated, context);
                    if (satisfiesAssertionValidates) {
                        context.debug("...validating the '".concat(stepString, "' step's '").concat(satisfiesAssertion, "' satisfies assertion. "));
                    }
                }
                return satisfiesAssertionValidates;
            }
        },
        {
            key: "unifyWithSatisfiesAssertion",
            value: function unifyWithSatisfiesAssertion(satisfiesAssertion, context) {
                var unifiesWithSatisfiesAssertion = false;
                var stepString = this.getString(), satisfiesAssertionString = satisfiesAssertion.getString();
                context.trace("Unifying the '".concat(stepString, "' step with the '").concat(satisfiesAssertionString, "' satisfies assertion..."));
                var reference = satisfiesAssertion.getReference(), axiom = context.findAxiomByReference(reference);
                if (axiom !== null) {
                    var step = this, substitutions = [], stepUnifies = axiom.unifyStep(step, substitutions, context);
                    if (stepUnifies) {
                        var substitutionsCompare = satisfiesAssertion.compareSubstitutions(substitutions, context);
                        if (substitutionsCompare) {
                            unifiesWithSatisfiesAssertion = true;
                        }
                    }
                }
                if (unifiesWithSatisfiesAssertion) {
                    context.debug("...unified the '".concat(stepString, "' step with the '").concat(satisfiesAssertionString, "' satisfies assertion."));
                }
                return unifiesWithSatisfiesAssertion;
            }
        },
        {
            key: "verify",
            value: function verify(assignments, context) {
                return _async_to_generator(function() {
                    var _this, verifies, stepString;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this = this;
                                verifies = false;
                                return [
                                    4,
                                    this.break(context)
                                ];
                            case 1:
                                _state.sent();
                                stepString = this.getString(); ///
                                context.trace("Verifying the '".concat(stepString, "' step..."));
                                return [
                                    4,
                                    (0, _context.asyncAttempt)(function(context) {
                                        return _async_to_generator(function() {
                                            var validates, unifies;
                                            return _ts_generator(this, function(_state) {
                                                switch(_state.label){
                                                    case 0:
                                                        validates = this.validate(assignments, context);
                                                        if (!validates) return [
                                                            3,
                                                            2
                                                        ];
                                                        return [
                                                            4,
                                                            this.unify(context)
                                                        ];
                                                    case 1:
                                                        unifies = _state.sent();
                                                        if (unifies) {
                                                            this.setContext(context);
                                                            verifies = true;
                                                        }
                                                        _state.label = 2;
                                                    case 2:
                                                        return [
                                                            2
                                                        ];
                                                }
                                            });
                                        }).call(_this);
                                    }, context)
                                ];
                            case 2:
                                _state.sent();
                                if (verifies) {
                                    context.debug("...verified the '".concat(stepString, "' step."));
                                }
                                return [
                                    2,
                                    verifies
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "unify",
            value: function unify(context) {
                return _async_to_generator(function() {
                    var unifies, stepString, statement, reference, satisfiesAssertion, statementUnifies;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                unifies = false;
                                stepString = this.getString(); ///
                                context.trace("Unifying the '".concat(stepString, "' step..."));
                                statement = this.getStatement(), reference = this.getReference(), satisfiesAssertion = this.getSatisfiesAssertion();
                                return [
                                    4,
                                    (0, _context.asyncLiminally)(function(context) {
                                        return _async_to_generator(function() {
                                            var statementUnifies;
                                            return _ts_generator(this, function(_state) {
                                                switch(_state.label){
                                                    case 0:
                                                        return [
                                                            4,
                                                            asyncSome(_unification.unifyStatements, function(unifyStatement) {
                                                                return _async_to_generator(function() {
                                                                    var statementUnifies;
                                                                    return _ts_generator(this, function(_state) {
                                                                        switch(_state.label){
                                                                            case 0:
                                                                                return [
                                                                                    4,
                                                                                    unifyStatement(statement, reference, satisfiesAssertion, context)
                                                                                ];
                                                                            case 1:
                                                                                statementUnifies = _state.sent();
                                                                                if (statementUnifies) {
                                                                                    return [
                                                                                        2,
                                                                                        true
                                                                                    ];
                                                                                }
                                                                                return [
                                                                                    2
                                                                                ];
                                                                        }
                                                                    });
                                                                })();
                                                            })
                                                        ];
                                                    case 1:
                                                        statementUnifies = _state.sent();
                                                        return [
                                                            2,
                                                            statementUnifies
                                                        ];
                                                }
                                            });
                                        })();
                                    }, context)
                                ];
                            case 1:
                                statementUnifies = _state.sent();
                                if (statementUnifies) {
                                    unifies = true;
                                }
                                if (unifies) {
                                    context.debug("...unified the '".concat(stepString, "' step."));
                                }
                                return [
                                    2,
                                    unifies
                                ];
                        }
                    });
                }).call(this);
            }
        }
    ]);
    return Step;
}(_proofAssertion.default), _define_property(_Step, "name", "Step"), _Step));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Byb29mQXNzZXJ0aW9uL3N0ZXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IFByb29mQXNzZXJ0aW9uIGZyb20gXCIuLi9wcm9vZkFzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHVuaWZ5U3RhdGVtZW50cyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdW5pZmljYXRpb25cIjtcbmltcG9ydCB7IGFzeW5jQXR0ZW1wdCwgYXN5bmNMaW1pbmFsbHkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IHByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvc3RhdGVtZW50XCI7XG5cbmNvbnN0IHsgYXN5bmNTb21lIH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTdGVwIGV4dGVuZHMgUHJvb2ZBc3NlcnRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24pIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCk7XG5cbiAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcbiAgICB0aGlzLnNhdGlzZmllc0Fzc2VydGlvbiA9IHNhdGlzZmllc0Fzc2VydGlvbjtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICBnZXRTYXRpc2ZpZXNBc3NlcnRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2F0aXNmaWVzQXNzZXJ0aW9uO1xuICB9XG5cbiAgZ2V0U3RlcE5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN0ZXBOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIHN0ZXBOb2RlO1xuICB9XG5cbiAgaXNTYXRpc2ZpZWQoKSB7XG4gICAgY29uc3Qgc2F0aXNmaWVkID0gKHRoaXMuc2F0aXNmaWVzQXNzZXJ0aW9uICE9PSBudWxsKTtcblxuICAgIHJldHVybiBzYXRpc2ZpZWQ7XG4gIH1cblxuICBpc1F1YWxpZmllZCgpIHtcbiAgICBjb25zdCBxdWFsaWZpZWQgPSAodGhpcy5yZWZlcmVuY2UgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHF1YWxpZmllZDtcbiAgfVxuXG4gIGlzU3RhdGVkKCkge1xuICAgIGNvbnN0IHF1YWxpZmllZCA9IHRoaXMuaXNRdWFsaWZpZWQoKSxcbiAgICAgICAgICBzdGF0ZWQgPSBxdWFsaWZpZWQ7IC8vL1xuXG4gICAgcmV0dXJuIHN0YXRlZDtcbiAgfVxuXG4gIGNvbXBhcmVUZXJtQW5kUHJvcGVydHlSZWxhdGlvbih0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbiA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBwcm9wZXJ0eUFzc2VydGlvbiA9IHByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHByb3BlcnR5QXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb24gPSBwcm9wZXJ0eUFzc2VydGlvbi5jb21wYXJlVGVybUFuZFByb3BlcnR5UmVsYXRpb24odGVybSwgcHJvcGVydHlSZWxhdGlvbiwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbjtcbiAgfVxuXG4gIHZhbGlkYXRlKGFzc2lnbm1lbnRzLCBjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RlcFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCk7XG5cbiAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCByZWZlcmVuY2VWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlUmVmZXJlbmNlKGNvbnRleHQpO1xuXG4gICAgICBpZiAocmVmZXJlbmNlVmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnN0IHNhdGlzZmllc0Fzc2VydGlvVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVNhdGlzZmllc0Fzc2VydGlvbihjb250ZXh0KTtcblxuICAgICAgICBpZiAoc2F0aXNmaWVzQXNzZXJ0aW9WYWxpZGF0ZXMpIHtcbiAgICAgICAgICBjb25zdCBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlU3RhdGVtZW50KGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFVuYWJsZSB0byB2YWxpZGF0ZSB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgYmVjYXVzZSBpdCBpcyBub25zZW5zZS5gKTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZSB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlUmVmZXJlbmNlKGNvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlVmFsaWRhdGVzID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLnJlZmVyZW5jZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RlcFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHRoaXMucmVmZXJlbmNlLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCdzICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLiBgKTtcblxuICAgICAgcmVmZXJlbmNlVmFsaWRhdGVzID0gdGhpcy5yZWZlcmVuY2UudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICAgIGlmIChyZWZlcmVuY2VWYWxpZGF0ZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCdzICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4gYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlU2F0aXNmaWVzQXNzZXJ0aW9uKGNvbnRleHQpIHtcbiAgICBsZXQgc2F0aXNmaWVzQXNzZXJ0aW9uVmFsaWRhdGVzID0gdHJ1ZTsgIC8vL1xuXG4gICAgaWYgKHRoaXMuc2F0aXNmaWVzQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGVwU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uID0gdGhpcy5zYXRpc2ZpZXNBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwJ3MgJyR7c2F0aXNmaWVzQXNzZXJ0aW9ufScgc2F0aXNmaWVzIGFzc2VydGlvbi4uLiBgKTtcblxuICAgICAgY29uc3Qgc3RhdGVkID0gdHJ1ZSxcbiAgICAgICAgICAgIGFzc2lnbm1lbnRzID0gbnVsbDtcblxuICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uVmFsaWRhdGVzID0gdGhpcy5zYXRpc2ZpZXNBc3NlcnRpb24udmFsaWRhdGUoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzYXRpc2ZpZXNBc3NlcnRpb25WYWxpZGF0ZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAncyAnJHtzYXRpc2ZpZXNBc3NlcnRpb259JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLiBgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2F0aXNmaWVzQXNzZXJ0aW9uVmFsaWRhdGVzO1xuICB9XG5cbiAgdW5pZnlXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uKHNhdGlzZmllc0Fzc2VydGlvbiwgY29udGV4dCkge1xuICAgIGxldCB1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbiA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RlcFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvblN0cmluZyA9IHNhdGlzZmllc0Fzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCB3aXRoIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCByZWZlcmVuY2UgPSBzYXRpc2ZpZXNBc3NlcnRpb24uZ2V0UmVmZXJlbmNlKCksXG4gICAgICAgICAgYXhpb20gPSBjb250ZXh0LmZpbmRBeGlvbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICBpZiAoYXhpb20gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0ZXAgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25zID0gW10sXG4gICAgICAgICAgICBzdGVwVW5pZmllcyA9IGF4aW9tLnVuaWZ5U3RlcChzdGVwLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0ZXBVbmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNDb21wYXJlID0gc2F0aXNmaWVzQXNzZXJ0aW9uLmNvbXBhcmVTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdWJzdGl0dXRpb25zQ29tcGFyZSkge1xuICAgICAgICAgIHVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbikge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgd2l0aCB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb247XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoYXNzaWdubWVudHMsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBzdGVwU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwLi4uYCk7XG5cbiAgICBhd2FpdCBhc3luY0F0dGVtcHQoYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGUoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnN0IHVuaWZpZXMgPSBhd2FpdCB0aGlzLnVuaWZ5KGNvbnRleHQpO1xuXG4gICAgICAgIGlmICh1bmlmaWVzKSB7XG4gICAgICAgICAgdGhpcy5zZXRDb250ZXh0KGNvbnRleHQpO1xuXG4gICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICBhc3luYyB1bmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcC4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICByZWZlcmVuY2UgPSB0aGlzLmdldFJlZmVyZW5jZSgpLFxuICAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvbiA9IHRoaXMuZ2V0U2F0aXNmaWVzQXNzZXJ0aW9uKCksXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IGF3YWl0IGFzeW5jTGltaW5hbGx5KGFzeW5jIChjb250ZXh0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVzID0gYXdhaXQgYXN5bmNTb21lKHVuaWZ5U3RhdGVtZW50cywgYXN5bmMgKHVuaWZ5U3RhdGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHN0YXRlbWVudFVuaWZpZXMgPSBhd2FpdCB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc2F0aXNmaWVzQXNzZXJ0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXM7XG4gICAgICAgICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgdW5pZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwLmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN0ZXBcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImFzeW5jU29tZSIsImFzeW5jaHJvbm91c1V0aWxpdGllcyIsImRlZmluZSIsIlN0ZXAiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInN0YXRlbWVudCIsInJlZmVyZW5jZSIsInNhdGlzZmllc0Fzc2VydGlvbiIsImdldFJlZmVyZW5jZSIsImdldFNhdGlzZmllc0Fzc2VydGlvbiIsImdldFN0ZXBOb2RlIiwiZ2V0Tm9kZSIsInN0ZXBOb2RlIiwiaXNTYXRpc2ZpZWQiLCJzYXRpc2ZpZWQiLCJpc1F1YWxpZmllZCIsInF1YWxpZmllZCIsImlzU3RhdGVkIiwic3RhdGVkIiwiY29tcGFyZVRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uIiwidGVybSIsInByb3BlcnR5UmVsYXRpb24iLCJjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb24iLCJnZXRTdGF0ZW1lbnQiLCJwcm9wZXJ0eUFzc2VydGlvbiIsInByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudCIsInZhbGlkYXRlIiwiYXNzaWdubWVudHMiLCJ2YWxpZGF0ZXMiLCJzdGVwU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJyZWZlcmVuY2VWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVJlZmVyZW5jZSIsInNhdGlzZmllc0Fzc2VydGlvVmFsaWRhdGVzIiwidmFsaWRhdGVTYXRpc2ZpZXNBc3NlcnRpb24iLCJzdGF0ZW1lbnRWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVN0YXRlbWVudCIsImRlYnVnIiwicmVmZXJlbmNlU3RyaW5nIiwic2F0aXNmaWVzQXNzZXJ0aW9uVmFsaWRhdGVzIiwidW5pZnlXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uIiwidW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24iLCJzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmciLCJheGlvbSIsImZpbmRBeGlvbUJ5UmVmZXJlbmNlIiwic3RlcCIsInN1YnN0aXR1dGlvbnMiLCJzdGVwVW5pZmllcyIsInVuaWZ5U3RlcCIsInN1YnN0aXR1dGlvbnNDb21wYXJlIiwiY29tcGFyZVN1YnN0aXR1dGlvbnMiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImJyZWFrIiwiYXN5bmNBdHRlbXB0IiwidW5pZmllcyIsInVuaWZ5Iiwic2V0Q29udGV4dCIsInN0YXRlbWVudFVuaWZpZXMiLCJhc3luY0xpbWluYWxseSIsInVuaWZ5U3RhdGVtZW50cyIsInVuaWZ5U3RhdGVtZW50IiwiUHJvb2ZBc3NlcnRpb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFhQTs7O2VBQUE7Ozs4QkFYc0M7cUVBRVg7d0JBRUo7MkJBQ1M7dUJBQ2E7eUJBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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