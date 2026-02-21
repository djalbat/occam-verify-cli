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
            value: function validate(context) {
                var validates = false;
                var stepString = this.getString(); ///
                context.trace("Validating the '".concat(stepString, "' step..."));
                var statement = this.getStatement();
                if (statement !== null) {
                    var referenceValidates = this.validateReference(context);
                    if (referenceValidates) {
                        var satisfiesAssertioValidates = this.validateSatisfiesAssertion(context);
                        if (satisfiesAssertioValidates) {
                            var statementValidates = this.validateStatement(context);
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
                    var reference = this.reference.validate(context);
                    if (reference === null) {
                        referenceValidates = false;
                    }
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
                    var stepString = this.getString(), satisfiesAssertionString = this.satisfiesAssertion.getString();
                    context.trace("Validating the '".concat(stepString, "' step's '").concat(satisfiesAssertionString, "' satisfies assertion... "));
                    var stated = true, satisfiesAssertion = this.satisfiesAssertion.validate(stated, context);
                    if (satisfiesAssertion !== null) {
                        satisfiesAssertionValidates = true;
                    }
                    if (satisfiesAssertionValidates) {
                        context.debug("...validating the '".concat(stepString, "' step's '").concat(satisfiesAssertionString, "' satisfies assertion. "));
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
            value: function verify(context) {
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
                                                        validates = this.validate(context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Byb29mQXNzZXJ0aW9uL3N0ZXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IFByb29mQXNzZXJ0aW9uIGZyb20gXCIuLi9wcm9vZkFzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHVuaWZ5U3RhdGVtZW50cyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdW5pZmljYXRpb25cIjtcbmltcG9ydCB7IGFzeW5jQXR0ZW1wdCwgYXN5bmNMaW1pbmFsbHkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IHByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvc3RhdGVtZW50XCI7XG5cbmNvbnN0IHsgYXN5bmNTb21lIH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTdGVwIGV4dGVuZHMgUHJvb2ZBc3NlcnRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24pIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCk7XG5cbiAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcbiAgICB0aGlzLnNhdGlzZmllc0Fzc2VydGlvbiA9IHNhdGlzZmllc0Fzc2VydGlvbjtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICBnZXRTYXRpc2ZpZXNBc3NlcnRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2F0aXNmaWVzQXNzZXJ0aW9uO1xuICB9XG5cbiAgZ2V0U3RlcE5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN0ZXBOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIHN0ZXBOb2RlO1xuICB9XG5cbiAgaXNTYXRpc2ZpZWQoKSB7XG4gICAgY29uc3Qgc2F0aXNmaWVkID0gKHRoaXMuc2F0aXNmaWVzQXNzZXJ0aW9uICE9PSBudWxsKTtcblxuICAgIHJldHVybiBzYXRpc2ZpZWQ7XG4gIH1cblxuICBpc1F1YWxpZmllZCgpIHtcbiAgICBjb25zdCBxdWFsaWZpZWQgPSAodGhpcy5yZWZlcmVuY2UgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHF1YWxpZmllZDtcbiAgfVxuXG4gIGlzU3RhdGVkKCkge1xuICAgIGNvbnN0IHF1YWxpZmllZCA9IHRoaXMuaXNRdWFsaWZpZWQoKSxcbiAgICAgICAgICBzdGF0ZWQgPSBxdWFsaWZpZWQ7IC8vL1xuXG4gICAgcmV0dXJuIHN0YXRlZDtcbiAgfVxuXG4gIGNvbXBhcmVUZXJtQW5kUHJvcGVydHlSZWxhdGlvbih0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbiA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBwcm9wZXJ0eUFzc2VydGlvbiA9IHByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHByb3BlcnR5QXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb24gPSBwcm9wZXJ0eUFzc2VydGlvbi5jb21wYXJlVGVybUFuZFByb3BlcnR5UmVsYXRpb24odGVybSwgcHJvcGVydHlSZWxhdGlvbiwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbjtcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGVwU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcC4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5nZXRTdGF0ZW1lbnQoKTtcblxuICAgIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJlZmVyZW5jZVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVSZWZlcmVuY2UoY29udGV4dCk7XG5cbiAgICAgIGlmIChyZWZlcmVuY2VWYWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3Qgc2F0aXNmaWVzQXNzZXJ0aW9WYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlU2F0aXNmaWVzQXNzZXJ0aW9uKGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzYXRpc2ZpZXNBc3NlcnRpb1ZhbGlkYXRlcykge1xuICAgICAgICAgIGNvbnN0IHN0YXRlbWVudFZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVTdGF0ZW1lbnQoY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBVbmFibGUgdG8gdmFsaWRhdGUgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIGJlY2F1c2UgaXQgaXMgbm9uc2Vuc2UuYCk7XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGUgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVJlZmVyZW5jZShjb250ZXh0KSB7XG4gICAgbGV0IHJlZmVyZW5jZVZhbGlkYXRlcyA9IHRydWU7XG5cbiAgICBpZiAodGhpcy5yZWZlcmVuY2UgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgICByZWZlcmVuY2VTdHJpbmcgPSB0aGlzLnJlZmVyZW5jZS5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAncyAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi4gYCk7XG5cbiAgICAgIGNvbnN0IHJlZmVyZW5jZSA9IHRoaXMucmVmZXJlbmNlLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgICBpZiAocmVmZXJlbmNlID09PSBudWxsKSB7XG4gICAgICAgIHJlZmVyZW5jZVZhbGlkYXRlcyA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVmZXJlbmNlVmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAncyAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuIGApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2VWYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVNhdGlzZmllc0Fzc2VydGlvbihjb250ZXh0KSB7XG4gICAgbGV0IHNhdGlzZmllc0Fzc2VydGlvblZhbGlkYXRlcyA9IHRydWU7ICAvLy9cblxuICAgIGlmICh0aGlzLnNhdGlzZmllc0Fzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RlcFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvblN0cmluZyA9IHRoaXMuc2F0aXNmaWVzQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCdzICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBhc3NlcnRpb24uLi4gYCk7XG5cbiAgICAgIGNvbnN0IHN0YXRlZCA9IHRydWUsXG4gICAgICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb24gPSB0aGlzLnNhdGlzZmllc0Fzc2VydGlvbi52YWxpZGF0ZShzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc2F0aXNmaWVzQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIHNhdGlzZmllc0Fzc2VydGlvblZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChzYXRpc2ZpZXNBc3NlcnRpb25WYWxpZGF0ZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAncyAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLiBgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2F0aXNmaWVzQXNzZXJ0aW9uVmFsaWRhdGVzO1xuICB9XG5cbiAgdW5pZnlXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uKHNhdGlzZmllc0Fzc2VydGlvbiwgY29udGV4dCkge1xuICAgIGxldCB1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbiA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RlcFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvblN0cmluZyA9IHNhdGlzZmllc0Fzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCB3aXRoIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCByZWZlcmVuY2UgPSBzYXRpc2ZpZXNBc3NlcnRpb24uZ2V0UmVmZXJlbmNlKCksXG4gICAgICAgICAgYXhpb20gPSBjb250ZXh0LmZpbmRBeGlvbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICBpZiAoYXhpb20gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0ZXAgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25zID0gW10sXG4gICAgICAgICAgICBzdGVwVW5pZmllcyA9IGF4aW9tLnVuaWZ5U3RlcChzdGVwLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0ZXBVbmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNDb21wYXJlID0gc2F0aXNmaWVzQXNzZXJ0aW9uLmNvbXBhcmVTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdWJzdGl0dXRpb25zQ29tcGFyZSkge1xuICAgICAgICAgIHVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbikge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgd2l0aCB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb247XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAuLi5gKTtcblxuICAgIGF3YWl0IGFzeW5jQXR0ZW1wdChhc3luYyAoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgdmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCB1bmlmaWVzID0gYXdhaXQgdGhpcy51bmlmeShjb250ZXh0KTtcblxuICAgICAgICBpZiAodW5pZmllcykge1xuICAgICAgICAgIHRoaXMuc2V0Q29udGV4dChjb250ZXh0KTtcblxuICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgYXN5bmMgdW5pZnkoY29udGV4dCkge1xuICAgIGxldCB1bmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGVwU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgcmVmZXJlbmNlID0gdGhpcy5nZXRSZWZlcmVuY2UoKSxcbiAgICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb24gPSB0aGlzLmdldFNhdGlzZmllc0Fzc2VydGlvbigpLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSBhd2FpdCBhc3luY0xpbWluYWxseShhc3luYyAoY29udGV4dCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3RhdGVtZW50VW5pZmllcyA9IGF3YWl0IGFzeW5jU29tZSh1bmlmeVN0YXRlbWVudHMsIGFzeW5jICh1bmlmeVN0YXRlbWVudCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVzID0gYXdhaXQgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCByZWZlcmVuY2UsIHNhdGlzZmllc0Fzc2VydGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzO1xuICAgICAgICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIHVuaWZpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh1bmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTdGVwXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJhc3luY1NvbWUiLCJhc3luY2hyb25vdXNVdGlsaXRpZXMiLCJkZWZpbmUiLCJTdGVwIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJzdGF0ZW1lbnQiLCJyZWZlcmVuY2UiLCJzYXRpc2ZpZXNBc3NlcnRpb24iLCJnZXRSZWZlcmVuY2UiLCJnZXRTYXRpc2ZpZXNBc3NlcnRpb24iLCJnZXRTdGVwTm9kZSIsImdldE5vZGUiLCJzdGVwTm9kZSIsImlzU2F0aXNmaWVkIiwic2F0aXNmaWVkIiwiaXNRdWFsaWZpZWQiLCJxdWFsaWZpZWQiLCJpc1N0YXRlZCIsInN0YXRlZCIsImNvbXBhcmVUZXJtQW5kUHJvcGVydHlSZWxhdGlvbiIsInRlcm0iLCJwcm9wZXJ0eVJlbGF0aW9uIiwiY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uIiwiZ2V0U3RhdGVtZW50IiwicHJvcGVydHlBc3NlcnRpb24iLCJwcm9wZXJ0eUFzc2VydGlvbkZyb21TdGF0ZW1lbnQiLCJ2YWxpZGF0ZSIsInZhbGlkYXRlcyIsInN0ZXBTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInJlZmVyZW5jZVZhbGlkYXRlcyIsInZhbGlkYXRlUmVmZXJlbmNlIiwic2F0aXNmaWVzQXNzZXJ0aW9WYWxpZGF0ZXMiLCJ2YWxpZGF0ZVNhdGlzZmllc0Fzc2VydGlvbiIsInN0YXRlbWVudFZhbGlkYXRlcyIsInZhbGlkYXRlU3RhdGVtZW50IiwiZGVidWciLCJyZWZlcmVuY2VTdHJpbmciLCJzYXRpc2ZpZXNBc3NlcnRpb25WYWxpZGF0ZXMiLCJzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmciLCJ1bmlmeVdpdGhTYXRpc2ZpZXNBc3NlcnRpb24iLCJ1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbiIsImF4aW9tIiwiZmluZEF4aW9tQnlSZWZlcmVuY2UiLCJzdGVwIiwic3Vic3RpdHV0aW9ucyIsInN0ZXBVbmlmaWVzIiwidW5pZnlTdGVwIiwic3Vic3RpdHV0aW9uc0NvbXBhcmUiLCJjb21wYXJlU3Vic3RpdHV0aW9ucyIsInZlcmlmeSIsInZlcmlmaWVzIiwiYnJlYWsiLCJhc3luY0F0dGVtcHQiLCJ1bmlmaWVzIiwidW5pZnkiLCJzZXRDb250ZXh0Iiwic3RhdGVtZW50VW5pZmllcyIsImFzeW5jTGltaW5hbGx5IiwidW5pZnlTdGF0ZW1lbnRzIiwidW5pZnlTdGF0ZW1lbnQiLCJQcm9vZkFzc2VydGlvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWFBOzs7ZUFBQTs7OzhCQVhzQztxRUFFWDt3QkFFSjsyQkFDUzt1QkFD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