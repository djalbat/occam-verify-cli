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
var _proofAssertion = /*#__PURE__*/ _interop_require_default(require("../proofAssertion"));
var _elements = require("../../elements");
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
            key: "verify",
            value: function verify(assignments, context) {
                return _async_to_generator(function() {
                    var _this, verifies, stepString, statement;
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
                                statement = this.getStatement();
                                if (statement !== null) {
                                    (0, _context.asyncAttempt)(function(context) {
                                        return _async_to_generator(function() {
                                            var _this, referenceValidates, satisfiesAssertioValidates, statementValidates, reference, satisfiesAssertion, statementUnifies;
                                            return _ts_generator(this, function(_state) {
                                                switch(_state.label){
                                                    case 0:
                                                        _this = this;
                                                        referenceValidates = this.validateReference(context);
                                                        if (!referenceValidates) return [
                                                            3,
                                                            2
                                                        ];
                                                        satisfiesAssertioValidates = this.validateSatisfiesAssertion(context);
                                                        if (!satisfiesAssertioValidates) return [
                                                            3,
                                                            2
                                                        ];
                                                        statementValidates = this.validateStatement(assignments, context);
                                                        if (!statementValidates) return [
                                                            3,
                                                            2
                                                        ];
                                                        reference = this.getReference(), satisfiesAssertion = this.getSatisfiesAssertion();
                                                        return [
                                                            4,
                                                            (0, _context.asyncLiminally)(function(context) {
                                                                return _async_to_generator(function() {
                                                                    var _this, statementUnifies;
                                                                    return _ts_generator(this, function(_state) {
                                                                        switch(_state.label){
                                                                            case 0:
                                                                                _this = this;
                                                                                return [
                                                                                    4,
                                                                                    asyncSome(function(unifyStatement) {
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
                                                                                                            this.setContext(context);
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
                                                                                        }).call(_this);
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
                                                                }).call(_this);
                                                            }, context)
                                                        ];
                                                    case 1:
                                                        statementUnifies = _state.sent();
                                                        if (statementUnifies) {
                                                            verifies = true;
                                                        }
                                                        _state.label = 2;
                                                    case 2:
                                                        return [
                                                            2,
                                                            verifies
                                                        ];
                                                }
                                            });
                                        }).call(_this);
                                    }, context);
                                } else {
                                    context.debug("Unable to verify the '".concat(stepString, "' step because it is nonsense."));
                                }
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
        }
    ]);
    return Step;
}(_proofAssertion.default), _define_property(_Step, "name", "Step"), _Step));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Byb29mQXNzZXJ0aW9uL3N0ZXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQcm9vZkFzc2VydGlvbiBmcm9tIFwiLi4vcHJvb2ZBc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBhc3luY0F0dGVtcHQsIGFzeW5jTGltaW5hbGx5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBwcm9wZXJ0eUFzc2VydGlvbkZyb21TdGF0ZW1lbnQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N0YXRlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgU3RlcCBleHRlbmRzIFByb29mQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc2F0aXNmaWVzQXNzZXJ0aW9uKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQpO1xuXG4gICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2U7XG4gICAgdGhpcy5zYXRpc2ZpZXNBc3NlcnRpb24gPSBzYXRpc2ZpZXNBc3NlcnRpb247XG4gIH1cblxuICBnZXRSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0U2F0aXNmaWVzQXNzZXJ0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnNhdGlzZmllc0Fzc2VydGlvbjtcbiAgfVxuXG4gIGlzU2F0aXNmaWVkKCkge1xuICAgIGNvbnN0IHNhdGlzZmllZCA9ICh0aGlzLnNhdGlzZmllc0Fzc2VydGlvbiAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc2F0aXNmaWVkO1xuICB9XG5cbiAgaXNRdWFsaWZpZWQoKSB7XG4gICAgY29uc3QgcXVhbGlmaWVkID0gKHRoaXMucmVmZXJlbmNlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBxdWFsaWZpZWQ7XG4gIH1cblxuICBpc1N0YXRlZCgpIHtcbiAgICBjb25zdCBxdWFsaWZpZWQgPSB0aGlzLmlzUXVhbGlmaWVkKCksXG4gICAgICAgICAgc3RhdGVkID0gcXVhbGlmaWVkOyAvLy9cblxuICAgIHJldHVybiBzdGF0ZWQ7XG4gIH1cblxuICBjb21wYXJlVGVybUFuZFByb3BlcnR5UmVsYXRpb24odGVybSwgcHJvcGVydHlSZWxhdGlvbiwgY29udGV4dCkge1xuICAgIGxldCBjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb24gPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgcHJvcGVydHlBc3NlcnRpb24gPSBwcm9wZXJ0eUFzc2VydGlvbkZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChwcm9wZXJ0eUFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uID0gcHJvcGVydHlBc3NlcnRpb24uY29tcGFyZVRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uKHRlcm0sIHByb3BlcnR5UmVsYXRpb24sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb247XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoYXNzaWdubWVudHMsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBzdGVwU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwLi4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLmdldFN0YXRlbWVudCgpO1xuXG4gICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgYXN5bmNBdHRlbXB0KGFzeW5jIChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlZmVyZW5jZVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVSZWZlcmVuY2UoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHJlZmVyZW5jZVZhbGlkYXRlcykge1xuICAgICAgICAgIGNvbnN0IHNhdGlzZmllc0Fzc2VydGlvVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVNhdGlzZmllc0Fzc2VydGlvbihjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChzYXRpc2ZpZXNBc3NlcnRpb1ZhbGlkYXRlcykge1xuICAgICAgICAgICAgY29uc3Qgc3RhdGVtZW50VmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVN0YXRlbWVudChhc3NpZ25tZW50cywgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgICAgICAgY29uc3QgcmVmZXJlbmNlID0gdGhpcy5nZXRSZWZlcmVuY2UoKSxcbiAgICAgICAgICAgICAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uID0gdGhpcy5nZXRTYXRpc2ZpZXNBc3NlcnRpb24oKSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IGF3YWl0IGFzeW5jTGltaW5hbGx5KGFzeW5jIChjb250ZXh0KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdGVtZW50VW5pZmllcyA9IGF3YWl0IGFzeW5jU29tZShhc3luYyAodW5pZnlTdGF0ZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlbWVudFVuaWZpZXMgPSBhd2FpdCB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc2F0aXNmaWVzQXNzZXJ0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRDb250ZXh0KGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXM7XG4gICAgICAgICAgICAgICAgICAgIH0sIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICAgICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZlcmlmaWVzO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFVuYWJsZSB0byB2ZXJpZnkgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIGJlY2F1c2UgaXQgaXMgbm9uc2Vuc2UuYCk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmFsaWRhdGVSZWZlcmVuY2UoY29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2VWYWxpZGF0ZXMgPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMucmVmZXJlbmNlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGVwU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5yZWZlcmVuY2UuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwJ3MgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uIGApO1xuXG4gICAgICByZWZlcmVuY2VWYWxpZGF0ZXMgPSB0aGlzLnJlZmVyZW5jZS52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgaWYgKHJlZmVyZW5jZVZhbGlkYXRlcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwJ3MgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLiBgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVTYXRpc2ZpZXNBc3NlcnRpb24oY29udGV4dCkge1xuICAgIGxldCBzYXRpc2ZpZXNBc3NlcnRpb25WYWxpZGF0ZXMgPSB0cnVlOyAgLy8vXG5cbiAgICBpZiAodGhpcy5zYXRpc2ZpZXNBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb24gPSB0aGlzLnNhdGlzZmllc0Fzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAncyAnJHtzYXRpc2ZpZXNBc3NlcnRpb259JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLi4uIGApO1xuXG4gICAgICBjb25zdCBzdGF0ZWQgPSB0cnVlLFxuICAgICAgICAgICAgYXNzaWdubWVudHMgPSBudWxsO1xuXG4gICAgICBzYXRpc2ZpZXNBc3NlcnRpb25WYWxpZGF0ZXMgPSB0aGlzLnNhdGlzZmllc0Fzc2VydGlvbi52YWxpZGF0ZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHNhdGlzZmllc0Fzc2VydGlvblZhbGlkYXRlcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCdzICcke3NhdGlzZmllc0Fzc2VydGlvbn0nIHNhdGlzZmllcyBhc3NlcnRpb24uIGApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzYXRpc2ZpZXNBc3NlcnRpb25WYWxpZGF0ZXM7XG4gIH1cblxuICB1bmlmeVdpdGhTYXRpc2ZpZXNBc3NlcnRpb24oc2F0aXNmaWVzQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGVwU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nID0gc2F0aXNmaWVzQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIHdpdGggdGhlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHNhdGlzZmllc0Fzc2VydGlvbi5nZXRSZWZlcmVuY2UoKSxcbiAgICAgICAgICBheGlvbSA9IGNvbnRleHQuZmluZEF4aW9tQnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgIGlmIChheGlvbSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RlcCA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICAgIHN0ZXBVbmlmaWVzID0gYXhpb20udW5pZnlTdGVwKHN0ZXAsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RlcFVuaWZpZXMpIHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uc0NvbXBhcmUgPSBzYXRpc2ZpZXNBc3NlcnRpb24uY29tcGFyZVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvbnNDb21wYXJlKSB7XG4gICAgICAgICAgdW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCB3aXRoIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTdGVwXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJTdGVwIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJzdGF0ZW1lbnQiLCJyZWZlcmVuY2UiLCJzYXRpc2ZpZXNBc3NlcnRpb24iLCJnZXRSZWZlcmVuY2UiLCJnZXRTYXRpc2ZpZXNBc3NlcnRpb24iLCJpc1NhdGlzZmllZCIsInNhdGlzZmllZCIsImlzUXVhbGlmaWVkIiwicXVhbGlmaWVkIiwiaXNTdGF0ZWQiLCJzdGF0ZWQiLCJjb21wYXJlVGVybUFuZFByb3BlcnR5UmVsYXRpb24iLCJ0ZXJtIiwicHJvcGVydHlSZWxhdGlvbiIsImNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbiIsImdldFN0YXRlbWVudCIsInByb3BlcnR5QXNzZXJ0aW9uIiwicHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50IiwidmVyaWZ5IiwiYXNzaWdubWVudHMiLCJ2ZXJpZmllcyIsInN0ZXBTdHJpbmciLCJicmVhayIsImdldFN0cmluZyIsInRyYWNlIiwiYXN5bmNBdHRlbXB0IiwicmVmZXJlbmNlVmFsaWRhdGVzIiwic2F0aXNmaWVzQXNzZXJ0aW9WYWxpZGF0ZXMiLCJzdGF0ZW1lbnRWYWxpZGF0ZXMiLCJzdGF0ZW1lbnRVbmlmaWVzIiwidmFsaWRhdGVSZWZlcmVuY2UiLCJ2YWxpZGF0ZVNhdGlzZmllc0Fzc2VydGlvbiIsInZhbGlkYXRlU3RhdGVtZW50IiwiYXN5bmNMaW1pbmFsbHkiLCJhc3luY1NvbWUiLCJ1bmlmeVN0YXRlbWVudCIsInNldENvbnRleHQiLCJkZWJ1ZyIsInJlZmVyZW5jZVN0cmluZyIsInZhbGlkYXRlIiwic2F0aXNmaWVzQXNzZXJ0aW9uVmFsaWRhdGVzIiwidW5pZnlXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uIiwidW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24iLCJzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmciLCJheGlvbSIsImZpbmRBeGlvbUJ5UmVmZXJlbmNlIiwic3RlcCIsInN1YnN0aXR1dGlvbnMiLCJzdGVwVW5pZmllcyIsInVuaWZ5U3RlcCIsInN1YnN0aXR1dGlvbnNDb21wYXJlIiwiY29tcGFyZVN1YnN0aXR1dGlvbnMiLCJQcm9vZkFzc2VydGlvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBQTs7O3FFQU4yQjt3QkFFSjt1QkFDc0I7eUJBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUUvQyxXQUFlQSxJQUFBQSxnQkFBTSx5QkFBQzs7YUFBTUMsS0FDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVD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