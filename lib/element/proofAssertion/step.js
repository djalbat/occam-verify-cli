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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Byb29mQXNzZXJ0aW9uL3N0ZXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IFByb29mQXNzZXJ0aW9uIGZyb20gXCIuLi9wcm9vZkFzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHVuaWZ5U3RhdGVtZW50cyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdW5pZmljYXRpb25cIjtcbmltcG9ydCB7IGFzeW5jQXR0ZW1wdCwgYXN5bmNMaW1pbmFsbHkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IHByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvc3RhdGVtZW50XCI7XG5cbmNvbnN0IHsgYXN5bmNTb21lIH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTdGVwIGV4dGVuZHMgUHJvb2ZBc3NlcnRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24pIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCk7XG5cbiAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcbiAgICB0aGlzLnNhdGlzZmllc0Fzc2VydGlvbiA9IHNhdGlzZmllc0Fzc2VydGlvbjtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICBnZXRTYXRpc2ZpZXNBc3NlcnRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2F0aXNmaWVzQXNzZXJ0aW9uO1xuICB9XG5cbiAgZ2V0U3RlcE5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN0ZXBOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIHN0ZXBOb2RlO1xuICB9XG5cbiAgaXNTYXRpc2ZpZWQoKSB7XG4gICAgY29uc3Qgc2F0aXNmaWVkID0gKHRoaXMuc2F0aXNmaWVzQXNzZXJ0aW9uICE9PSBudWxsKTtcblxuICAgIHJldHVybiBzYXRpc2ZpZWQ7XG4gIH1cblxuICBpc1F1YWxpZmllZCgpIHtcbiAgICBjb25zdCBxdWFsaWZpZWQgPSAodGhpcy5yZWZlcmVuY2UgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHF1YWxpZmllZDtcbiAgfVxuXG4gIGlzU3RhdGVkKCkge1xuICAgIGNvbnN0IHF1YWxpZmllZCA9IHRoaXMuaXNRdWFsaWZpZWQoKSxcbiAgICAgICAgICBzdGF0ZWQgPSBxdWFsaWZpZWQ7IC8vL1xuXG4gICAgcmV0dXJuIHN0YXRlZDtcbiAgfVxuXG4gIGNvbXBhcmVUZXJtQW5kUHJvcGVydHlSZWxhdGlvbih0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbiA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBwcm9wZXJ0eUFzc2VydGlvbiA9IHByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHByb3BlcnR5QXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb24gPSBwcm9wZXJ0eUFzc2VydGlvbi5jb21wYXJlVGVybUFuZFByb3BlcnR5UmVsYXRpb24odGVybSwgcHJvcGVydHlSZWxhdGlvbiwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbjtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgY29uc3Qgc3RlcFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcC4uLmApO1xuXG4gICAgYXdhaXQgYXN5bmNBdHRlbXB0KGFzeW5jIChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB2YWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnN0IHVuaWZpZXMgPSBhd2FpdCB0aGlzLnVuaWZ5KGNvbnRleHQpO1xuXG4gICAgICAgIGlmICh1bmlmaWVzKSB7XG4gICAgICAgICAgdGhpcy5zZXRDb250ZXh0KGNvbnRleHQpO1xuXG4gICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RlcFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCk7XG5cbiAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCByZWZlcmVuY2VWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlUmVmZXJlbmNlKGNvbnRleHQpO1xuXG4gICAgICBpZiAocmVmZXJlbmNlVmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnN0IHNhdGlzZmllc0Fzc2VydGlvVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVNhdGlzZmllc0Fzc2VydGlvbihjb250ZXh0KTtcblxuICAgICAgICBpZiAoc2F0aXNmaWVzQXNzZXJ0aW9WYWxpZGF0ZXMpIHtcbiAgICAgICAgICBjb25zdCBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlU3RhdGVtZW50KGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVW5hYmxlIHRvIHZhbGlkYXRlIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCBiZWNhdXNlIGl0IGlzIG5vbnNlbnNlLmApO1xuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVSZWZlcmVuY2UoY29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2VWYWxpZGF0ZXMgPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMucmVmZXJlbmNlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGVwU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5yZWZlcmVuY2UuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwJ3MgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uIGApO1xuXG4gICAgICBjb25zdCByZWZlcmVuY2UgPSB0aGlzLnJlZmVyZW5jZS52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgaWYgKHJlZmVyZW5jZSA9PT0gbnVsbCkge1xuICAgICAgICByZWZlcmVuY2VWYWxpZGF0ZXMgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlZmVyZW5jZVZhbGlkYXRlcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwJ3MgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLiBgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVTYXRpc2ZpZXNBc3NlcnRpb24oY29udGV4dCkge1xuICAgIGxldCBzYXRpc2ZpZXNBc3NlcnRpb25WYWxpZGF0ZXMgPSB0cnVlOyAgLy8vXG5cbiAgICBpZiAodGhpcy5zYXRpc2ZpZXNBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnNhdGlzZmllc0Fzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAncyAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLi4uIGApO1xuXG4gICAgICBjb25zdCBzdGF0ZWQgPSB0cnVlLFxuICAgICAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uID0gdGhpcy5zYXRpc2ZpZXNBc3NlcnRpb24udmFsaWRhdGUoc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHNhdGlzZmllc0Fzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgICBzYXRpc2ZpZXNBc3NlcnRpb25WYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoc2F0aXNmaWVzQXNzZXJ0aW9uVmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwJ3MgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi4gYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNhdGlzZmllc0Fzc2VydGlvblZhbGlkYXRlcztcbiAgfVxuXG4gIGFzeW5jIHVuaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RlcFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwLi4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IHRoaXMuZ2V0UmVmZXJlbmNlKCksXG4gICAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uID0gdGhpcy5nZXRTYXRpc2ZpZXNBc3NlcnRpb24oKSxcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gYXdhaXQgYXN5bmNMaW1pbmFsbHkoYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlbWVudFVuaWZpZXMgPSBhd2FpdCBhc3luY1NvbWUodW5pZnlTdGF0ZW1lbnRzLCBhc3luYyAodW5pZnlTdGF0ZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc3RhdGVtZW50VW5pZmllcyA9IGF3YWl0IHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgcmVmZXJlbmNlLCBzYXRpc2ZpZXNBc3NlcnRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllcztcbiAgICAgICAgICB9LCBjb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICB1bmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVdpdGhTYXRpc2ZpZXNBc3NlcnRpb24oc2F0aXNmaWVzQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGVwU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nID0gc2F0aXNmaWVzQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIHdpdGggdGhlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHNhdGlzZmllc0Fzc2VydGlvbi5nZXRSZWZlcmVuY2UoKSxcbiAgICAgICAgICBheGlvbSA9IGNvbnRleHQuZmluZEF4aW9tQnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgIGlmIChheGlvbSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RlcCA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICAgIHN0ZXBVbmlmaWVzID0gYXhpb20udW5pZnlTdGVwKHN0ZXAsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RlcFVuaWZpZXMpIHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uc0NvbXBhcmUgPSBzYXRpc2ZpZXNBc3NlcnRpb24uY29tcGFyZVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvbnNDb21wYXJlKSB7XG4gICAgICAgICAgdW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCB3aXRoIHRoZSAnJHtzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmd9JyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTdGVwXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJhc3luY1NvbWUiLCJhc3luY2hyb25vdXNVdGlsaXRpZXMiLCJkZWZpbmUiLCJTdGVwIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJzdGF0ZW1lbnQiLCJyZWZlcmVuY2UiLCJzYXRpc2ZpZXNBc3NlcnRpb24iLCJnZXRSZWZlcmVuY2UiLCJnZXRTYXRpc2ZpZXNBc3NlcnRpb24iLCJnZXRTdGVwTm9kZSIsImdldE5vZGUiLCJzdGVwTm9kZSIsImlzU2F0aXNmaWVkIiwic2F0aXNmaWVkIiwiaXNRdWFsaWZpZWQiLCJxdWFsaWZpZWQiLCJpc1N0YXRlZCIsInN0YXRlZCIsImNvbXBhcmVUZXJtQW5kUHJvcGVydHlSZWxhdGlvbiIsInRlcm0iLCJwcm9wZXJ0eVJlbGF0aW9uIiwiY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uIiwiZ2V0U3RhdGVtZW50IiwicHJvcGVydHlBc3NlcnRpb24iLCJwcm9wZXJ0eUFzc2VydGlvbkZyb21TdGF0ZW1lbnQiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsInN0ZXBTdHJpbmciLCJicmVhayIsImdldFN0cmluZyIsInRyYWNlIiwiYXN5bmNBdHRlbXB0IiwidmFsaWRhdGVzIiwidW5pZmllcyIsInZhbGlkYXRlIiwidW5pZnkiLCJzZXRDb250ZXh0IiwiZGVidWciLCJyZWZlcmVuY2VWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVJlZmVyZW5jZSIsInNhdGlzZmllc0Fzc2VydGlvVmFsaWRhdGVzIiwidmFsaWRhdGVTYXRpc2ZpZXNBc3NlcnRpb24iLCJzdGF0ZW1lbnRWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVN0YXRlbWVudCIsInJlZmVyZW5jZVN0cmluZyIsInNhdGlzZmllc0Fzc2VydGlvblZhbGlkYXRlcyIsInNhdGlzZmllc0Fzc2VydGlvblN0cmluZyIsInN0YXRlbWVudFVuaWZpZXMiLCJhc3luY0xpbWluYWxseSIsInVuaWZ5U3RhdGVtZW50cyIsInVuaWZ5U3RhdGVtZW50IiwidW5pZnlXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uIiwidW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24iLCJheGlvbSIsImZpbmRBeGlvbUJ5UmVmZXJlbmNlIiwic3RlcCIsInN1YnN0aXR1dGlvbnMiLCJzdGVwVW5pZmllcyIsInVuaWZ5U3RlcCIsInN1YnN0aXR1dGlvbnNDb21wYXJlIiwiY29tcGFyZVN1YnN0aXR1dGlvbnMiLCJQcm9vZkFzc2VydGlvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWFBOzs7ZUFBQTs7OzhCQVhzQztxRUFFWDt3QkFFSjsyQkFDUzt1QkFD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