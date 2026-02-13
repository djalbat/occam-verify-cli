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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Byb29mQXNzZXJ0aW9uL3N0ZXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IFByb29mQXNzZXJ0aW9uIGZyb20gXCIuLi9wcm9vZkFzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGFzeW5jQXR0ZW1wdCwgYXN5bmNMaW1pbmFsbHkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IHByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvc3RhdGVtZW50XCI7XG5cbmNvbnN0IHsgYXN5bmNTb21lIH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTdGVwIGV4dGVuZHMgUHJvb2ZBc3NlcnRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24pIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCk7XG5cbiAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcbiAgICB0aGlzLnNhdGlzZmllc0Fzc2VydGlvbiA9IHNhdGlzZmllc0Fzc2VydGlvbjtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICBnZXRTYXRpc2ZpZXNBc3NlcnRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2F0aXNmaWVzQXNzZXJ0aW9uO1xuICB9XG5cbiAgaXNTYXRpc2ZpZWQoKSB7XG4gICAgY29uc3Qgc2F0aXNmaWVkID0gKHRoaXMuc2F0aXNmaWVzQXNzZXJ0aW9uICE9PSBudWxsKTtcblxuICAgIHJldHVybiBzYXRpc2ZpZWQ7XG4gIH1cblxuICBpc1F1YWxpZmllZCgpIHtcbiAgICBjb25zdCBxdWFsaWZpZWQgPSAodGhpcy5yZWZlcmVuY2UgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHF1YWxpZmllZDtcbiAgfVxuXG4gIGlzU3RhdGVkKCkge1xuICAgIGNvbnN0IHF1YWxpZmllZCA9IHRoaXMuaXNRdWFsaWZpZWQoKSxcbiAgICAgICAgICBzdGF0ZWQgPSBxdWFsaWZpZWQ7IC8vL1xuXG4gICAgcmV0dXJuIHN0YXRlZDtcbiAgfVxuXG4gIGNvbXBhcmVUZXJtQW5kUHJvcGVydHlSZWxhdGlvbih0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbiA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBwcm9wZXJ0eUFzc2VydGlvbiA9IHByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHByb3BlcnR5QXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb24gPSBwcm9wZXJ0eUFzc2VydGlvbi5jb21wYXJlVGVybUFuZFByb3BlcnR5UmVsYXRpb24odGVybSwgcHJvcGVydHlSZWxhdGlvbiwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbjtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeShhc3NpZ25tZW50cywgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCk7XG5cbiAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBhc3luY0F0dGVtcHQoYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVJlZmVyZW5jZShjb250ZXh0KTtcblxuICAgICAgICBpZiAocmVmZXJlbmNlVmFsaWRhdGVzKSB7XG4gICAgICAgICAgY29uc3Qgc2F0aXNmaWVzQXNzZXJ0aW9WYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlU2F0aXNmaWVzQXNzZXJ0aW9uKGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHNhdGlzZmllc0Fzc2VydGlvVmFsaWRhdGVzKSB7XG4gICAgICAgICAgICBjb25zdCBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlU3RhdGVtZW50KGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICAgICAgICBjb25zdCByZWZlcmVuY2UgPSB0aGlzLmdldFJlZmVyZW5jZSgpLFxuICAgICAgICAgICAgICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb24gPSB0aGlzLmdldFNhdGlzZmllc0Fzc2VydGlvbigpLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gYXdhaXQgYXN5bmNMaW1pbmFsbHkoYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVzID0gYXdhaXQgYXN5bmNTb21lKGFzeW5jICh1bmlmeVN0YXRlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdGVtZW50VW5pZmllcyA9IGF3YWl0IHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldENvbnRleHQoY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllcztcbiAgICAgICAgICAgICAgICAgICAgfSwgY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgICAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmVyaWZpZXM7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVW5hYmxlIHRvIHZlcmlmeSB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgYmVjYXVzZSBpdCBpcyBub25zZW5zZS5gKTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2YWxpZGF0ZVJlZmVyZW5jZShjb250ZXh0KSB7XG4gICAgbGV0IHJlZmVyZW5jZVZhbGlkYXRlcyA9IHRydWU7XG5cbiAgICBpZiAodGhpcy5yZWZlcmVuY2UgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgICByZWZlcmVuY2VTdHJpbmcgPSB0aGlzLnJlZmVyZW5jZS5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAncyAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi4gYCk7XG5cbiAgICAgIHJlZmVyZW5jZVZhbGlkYXRlcyA9IHRoaXMucmVmZXJlbmNlLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgICBpZiAocmVmZXJlbmNlVmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAncyAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuIGApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2VWYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVNhdGlzZmllc0Fzc2VydGlvbihjb250ZXh0KSB7XG4gICAgbGV0IHNhdGlzZmllc0Fzc2VydGlvblZhbGlkYXRlcyA9IHRydWU7ICAvLy9cblxuICAgIGlmICh0aGlzLnNhdGlzZmllc0Fzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RlcFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvbiA9IHRoaXMuc2F0aXNmaWVzQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCdzICcke3NhdGlzZmllc0Fzc2VydGlvbn0nIHNhdGlzZmllcyBhc3NlcnRpb24uLi4gYCk7XG5cbiAgICAgIGNvbnN0IHN0YXRlZCA9IHRydWUsXG4gICAgICAgICAgICBhc3NpZ25tZW50cyA9IG51bGw7XG5cbiAgICAgIHNhdGlzZmllc0Fzc2VydGlvblZhbGlkYXRlcyA9IHRoaXMuc2F0aXNmaWVzQXNzZXJ0aW9uLnZhbGlkYXRlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc2F0aXNmaWVzQXNzZXJ0aW9uVmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwJ3MgJyR7c2F0aXNmaWVzQXNzZXJ0aW9ufScgc2F0aXNmaWVzIGFzc2VydGlvbi4gYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNhdGlzZmllc0Fzc2VydGlvblZhbGlkYXRlcztcbiAgfVxuXG4gIHVuaWZ5V2l0aFNhdGlzZmllc0Fzc2VydGlvbihzYXRpc2ZpZXNBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24gPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmcgPSBzYXRpc2ZpZXNBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgd2l0aCB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlID0gc2F0aXNmaWVzQXNzZXJ0aW9uLmdldFJlZmVyZW5jZSgpLFxuICAgICAgICAgIGF4aW9tID0gY29udGV4dC5maW5kQXhpb21CeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgaWYgKGF4aW9tICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGVwID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFtdLFxuICAgICAgICAgICAgc3RlcFVuaWZpZXMgPSBheGlvbS51bmlmeVN0ZXAoc3RlcCwgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGVwVW5pZmllcykge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zQ29tcGFyZSA9IHNhdGlzZmllc0Fzc2VydGlvbi5jb21wYXJlU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uc0NvbXBhcmUpIHtcbiAgICAgICAgICB1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24pIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIHdpdGggdGhlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN0ZXBcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImFzeW5jU29tZSIsImFzeW5jaHJvbm91c1V0aWxpdGllcyIsImRlZmluZSIsIlN0ZXAiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInN0YXRlbWVudCIsInJlZmVyZW5jZSIsInNhdGlzZmllc0Fzc2VydGlvbiIsImdldFJlZmVyZW5jZSIsImdldFNhdGlzZmllc0Fzc2VydGlvbiIsImlzU2F0aXNmaWVkIiwic2F0aXNmaWVkIiwiaXNRdWFsaWZpZWQiLCJxdWFsaWZpZWQiLCJpc1N0YXRlZCIsInN0YXRlZCIsImNvbXBhcmVUZXJtQW5kUHJvcGVydHlSZWxhdGlvbiIsInRlcm0iLCJwcm9wZXJ0eVJlbGF0aW9uIiwiY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uIiwiZ2V0U3RhdGVtZW50IiwicHJvcGVydHlBc3NlcnRpb24iLCJwcm9wZXJ0eUFzc2VydGlvbkZyb21TdGF0ZW1lbnQiLCJ2ZXJpZnkiLCJhc3NpZ25tZW50cyIsInZlcmlmaWVzIiwic3RlcFN0cmluZyIsImJyZWFrIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJhc3luY0F0dGVtcHQiLCJyZWZlcmVuY2VWYWxpZGF0ZXMiLCJzYXRpc2ZpZXNBc3NlcnRpb1ZhbGlkYXRlcyIsInN0YXRlbWVudFZhbGlkYXRlcyIsInN0YXRlbWVudFVuaWZpZXMiLCJ2YWxpZGF0ZVJlZmVyZW5jZSIsInZhbGlkYXRlU2F0aXNmaWVzQXNzZXJ0aW9uIiwidmFsaWRhdGVTdGF0ZW1lbnQiLCJhc3luY0xpbWluYWxseSIsInVuaWZ5U3RhdGVtZW50Iiwic2V0Q29udGV4dCIsImRlYnVnIiwicmVmZXJlbmNlU3RyaW5nIiwidmFsaWRhdGUiLCJzYXRpc2ZpZXNBc3NlcnRpb25WYWxpZGF0ZXMiLCJ1bmlmeVdpdGhTYXRpc2ZpZXNBc3NlcnRpb24iLCJ1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbiIsInNhdGlzZmllc0Fzc2VydGlvblN0cmluZyIsImF4aW9tIiwiZmluZEF4aW9tQnlSZWZlcmVuY2UiLCJzdGVwIiwic3Vic3RpdHV0aW9ucyIsInN0ZXBVbmlmaWVzIiwidW5pZnlTdGVwIiwic3Vic3RpdHV0aW9uc0NvbXBhcmUiLCJjb21wYXJlU3Vic3RpdHV0aW9ucyIsIlByb29mQXNzZXJ0aW9uIiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUFBOzs7OEJBVnNDO3FFQUVYO3dCQUVKO3VCQUNzQjt5QkFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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