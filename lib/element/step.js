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
var _element = /*#__PURE__*/ _interop_require_default(require("../element"));
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../elements"));
var _temporary = /*#__PURE__*/ _interop_require_default(require("../context/temporary"));
var _instantiate = require("../process/instantiate");
var _unification = require("../utilities/unification");
var _equate = require("../process/equate");
var _element1 = require("../utilities/element");
var _statement = require("../utilities/statement");
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
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var _Step;
var _default = (0, _elements.define)((_Step = /*#__PURE__*/ function(Element) {
    _inherits(Step, Element);
    function Step(context, string, node, statement, reference, satisfiesAssertion) {
        _class_call_check(this, Step);
        var _this;
        _this = _call_super(this, Step, [
            context,
            string,
            node
        ]);
        _this.statement = statement;
        _this.reference = reference;
        _this.satisfiesAssertion = satisfiesAssertion;
        return _this;
    }
    _create_class(Step, [
        {
            key: "getStatement",
            value: function getStatement() {
                return this.statement;
            }
        },
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
            key: "isStep",
            value: function isStep() {
                var step = true;
                return step;
            }
        },
        {
            key: "matchTermAndPropertyRelation",
            value: function matchTermAndPropertyRelation(term, propertyRelation, context) {
                var termAndPropertyRelationMatch = false;
                var propertyAssertion = (0, _statement.propertyAssertionFromStatement)(this.statement, context);
                if (propertyAssertion !== null) {
                    termAndPropertyRelationMatch = propertyAssertion.matchTermAndPropertyRelation(term, propertyRelation, context);
                }
                return termAndPropertyRelationMatch;
            }
        },
        {
            key: "verify",
            value: function verify(substitutions, assignments, context) {
                var _this = this;
                var verifies = false;
                var temporaryContext = _temporary.default.fromNothing(context);
                context = temporaryContext; ///
                var node = this.getNode(), stepString = this.getString(); ///
                context.trace("Verifying the '".concat(stepString, "' step..."), node);
                if (this.statement === null) {
                    context.debug("Unable to verify the '".concat(stepString, "' step because it is nonsense."), node);
                } else {
                    var referenceVerifies = this.verifyReference(context);
                    if (referenceVerifies) {
                        var satisfiesAssertioVeriries = this.verifySatisfiesAssertion(context);
                        if (satisfiesAssertioVeriries) {
                            var stated = this.isStated(), statementValidates = this.statement.validate(assignments, stated, context);
                            if (statementValidates) {
                                var statementUnifies = _unification.unifyStatements.some(function(unifyStatement) {
                                    var statementUnifies = unifyStatement(_this.statement, _this.reference, _this.satisfiesAssertion, substitutions, context);
                                    if (statementUnifies) {
                                        return true;
                                    }
                                });
                                if (statementUnifies) {
                                    var _$Step = _elements.default.Step, step = _$Step.fromStatement(this.statement, context), stepOrSubproof = step; ///
                                    context.addStepOrSubproof(stepOrSubproof);
                                    this.setContext(context);
                                    verifies = true;
                                }
                            }
                        }
                    }
                }
                if (verifies) {
                    context.debug("...verified the '".concat(stepString, "' step."), node);
                }
                return verifies;
            }
        },
        {
            key: "verifyReference",
            value: function verifyReference(context) {
                var referenceVeriries;
                var node = this.getNode(), stepString = this.getString(); ///
                context.trace("Verifying the '".concat(stepString, "' step's reference... "), node);
                if (this.reference !== null) {
                    referenceVeriries = this.reference.verify(context);
                } else {
                    referenceVeriries = true;
                }
                if (referenceVeriries) {
                    context.debug("...verified the '".concat(stepString, "' step's reference. "), node);
                }
                return referenceVeriries;
            }
        },
        {
            key: "verifySatisfiesAssertion",
            value: function verifySatisfiesAssertion(context) {
                var satisfiesAssertionVerifies;
                var node = this.getNode(), stepString = this.getString(); ///
                context.trace("Verifying the '".concat(stepString, "' step's satisfies assertion... "), node);
                if (this.satisfiesAssertion !== null) {
                    var stated = true, assignments = null;
                    satisfiesAssertionVerifies = this.satisfiesAssertion.validate(assignments, stated, context);
                } else {
                    satisfiesAssertionVerifies = true;
                }
                if (satisfiesAssertionVerifies) {
                    context.debug("...verified the '".concat(stepString, "' step's satisfies assertion. "), node);
                }
                return satisfiesAssertionVerifies;
            }
        },
        {
            key: "equateWithStatement",
            value: function equateWithStatement(statement, context) {
                var statementEquates;
                var leftStatement = statement, rightStatement = this.statement, leftStatementNode = leftStatement.getNode(), rightStatementNode = rightStatement.getNode(), statementsEquate = (0, _equate.equateStatements)(leftStatementNode, rightStatementNode, context);
                statementEquates = statementsEquate; ///
                return statementEquates;
            }
        },
        {
            key: "unifyWithSatisfiesAssertion",
            value: function unifyWithSatisfiesAssertion(satisfiesAssertion, context) {
                var unifiesWithSatisfiesAssertion = false;
                var stepString = this.string, satisfiesAssertionString = satisfiesAssertion.getString();
                context.trace("Unifying the '".concat(stepString, "' step with the '").concat(satisfiesAssertionString, "' satisfies assertion..."), this.node);
                var reference = satisfiesAssertion.getReference(), axiom = context.findAxiomByReference(reference);
                if (axiom !== null) {
                    var Substitutions = _elements.default.Substitutions, step = this, substitutions = Substitutions.fromNothing(), stepUnifies = axiom.unifyStep(step, substitutions, context);
                    if (stepUnifies) {
                        var substitutionsCompare = satisfiesAssertion.compareSubstitutions(substitutions, context);
                        if (substitutionsCompare) {
                            unifiesWithSatisfiesAssertion = true;
                        }
                    }
                }
                if (unifiesWithSatisfiesAssertion) {
                    context.debug("...unified the '".concat(stepString, "' step with the '").concat(satisfiesAssertionString, "' satisfies assertion."), this.node);
                }
                return unifiesWithSatisfiesAssertion;
            }
        }
    ], [
        {
            key: "fromStatement",
            value: function fromStatement(statement, context) {
                var statementString = statement.getString(), stepString = statementString, string = "".concat(stepString, "\n"), stepNode = (0, _instantiate.instantiateStep)(string, context), step = (0, _element1.stepFromStepNode)(stepNode, context);
                return step;
                ;
            }
        }
    ]);
    return Step;
}(_wrap_native_super(_element.default)), _define_property(_Step, "name", "Step"), _Step));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3N0ZXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgVGVtcG9yYXJ5Q29udGV4dCBmcm9tIFwiLi4vY29udGV4dC90ZW1wb3JhcnlcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVN0ZXAgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgdW5pZnlTdGF0ZW1lbnRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy91bmlmaWNhdGlvblwiO1xuaW1wb3J0IHsgZXF1YXRlU3RhdGVtZW50cyB9IGZyb20gXCIuLi9wcm9jZXNzL2VxdWF0ZVwiO1xuaW1wb3J0IHsgc3RlcEZyb21TdGVwTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgcHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdGF0ZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFN0ZXAgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc2F0aXNmaWVzQXNzZXJ0aW9uKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICAgIHRoaXMuc2F0aXNmaWVzQXNzZXJ0aW9uID0gc2F0aXNmaWVzQXNzZXJ0aW9uO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICBnZXRTYXRpc2ZpZXNBc3NlcnRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2F0aXNmaWVzQXNzZXJ0aW9uO1xuICB9XG5cbiAgaXNTYXRpc2ZpZWQoKSB7XG4gICAgY29uc3Qgc2F0aXNmaWVkID0gKHRoaXMuc2F0aXNmaWVzQXNzZXJ0aW9uICE9PSBudWxsKTtcblxuICAgIHJldHVybiBzYXRpc2ZpZWQ7XG4gIH1cblxuICBpc1F1YWxpZmllZCgpIHtcbiAgICBjb25zdCBxdWFsaWZpZWQgPSAodGhpcy5yZWZlcmVuY2UgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHF1YWxpZmllZDtcbiAgfVxuXG4gIGlzU3RhdGVkKCkge1xuICAgIGNvbnN0IHF1YWxpZmllZCA9IHRoaXMuaXNRdWFsaWZpZWQoKSxcbiAgICAgICAgICBzdGF0ZWQgPSBxdWFsaWZpZWQ7IC8vL1xuXG4gICAgcmV0dXJuIHN0YXRlZDtcbiAgfVxuXG4gIGlzU3RlcCgpIHtcbiAgICBjb25zdCBzdGVwID0gdHJ1ZTtcblxuICAgIHJldHVybiBzdGVwO1xuICB9XG5cbiAgbWF0Y2hUZXJtQW5kUHJvcGVydHlSZWxhdGlvbih0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uTWF0Y2ggPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb3BlcnR5QXNzZXJ0aW9uID0gcHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50KHRoaXMuc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChwcm9wZXJ0eUFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgdGVybUFuZFByb3BlcnR5UmVsYXRpb25NYXRjaCA9IHByb3BlcnR5QXNzZXJ0aW9uLm1hdGNoVGVybUFuZFByb3BlcnR5UmVsYXRpb24odGVybSwgcHJvcGVydHlSZWxhdGlvbiwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uTWF0Y2g7XG4gIH1cblxuICB2ZXJpZnkoc3Vic3RpdHV0aW9ucywgYXNzaWdubWVudHMsIGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHRlbXBvcmFyeUNvbnRleHQgPSBUZW1wb3JhcnlDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gICAgY29udGV4dCA9IHRlbXBvcmFyeUNvbnRleHQ7IC8vL1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN0ZXBTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAuLi5gLCBub2RlKTtcblxuICAgIGlmICh0aGlzLnN0YXRlbWVudCA9PT0gbnVsbCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVW5hYmxlIHRvIHZlcmlmeSB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgYmVjYXVzZSBpdCBpcyBub25zZW5zZS5gLCBub2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcmVmZXJlbmNlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVJlZmVyZW5jZShjb250ZXh0KTtcblxuICAgICAgaWYgKHJlZmVyZW5jZVZlcmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IHNhdGlzZmllc0Fzc2VydGlvVmVyaXJpZXMgPSB0aGlzLnZlcmlmeVNhdGlzZmllc0Fzc2VydGlvbihjb250ZXh0KTtcblxuICAgICAgICBpZiAoc2F0aXNmaWVzQXNzZXJ0aW9WZXJpcmllcykge1xuICAgICAgICAgIGNvbnN0IHN0YXRlZCA9IHRoaXMuaXNTdGF0ZWQoKSxcbiAgICAgICAgICAgICAgICBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0aGlzLnN0YXRlbWVudC52YWxpZGF0ZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlbWVudFVuaWZpZXMgPSB1bmlmeVN0YXRlbWVudHMuc29tZSgodW5pZnlTdGF0ZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc3RhdGVtZW50VW5pZmllcyA9IHVuaWZ5U3RhdGVtZW50KHRoaXMuc3RhdGVtZW50LCB0aGlzLnJlZmVyZW5jZSwgdGhpcy5zYXRpc2ZpZXNBc3NlcnRpb24sIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICAgICAgICBjb25zdCB7IFN0ZXAgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgICAgICAgICAgICBzdGVwID0gU3RlcC5mcm9tU3RhdGVtZW50KHRoaXMuc3RhdGVtZW50LCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgICAgICAgc3RlcE9yU3VicHJvb2YgPSBzdGVwOyAgLy8vXG5cbiAgICAgICAgICAgICAgY29udGV4dC5hZGRTdGVwT3JTdWJwcm9vZihzdGVwT3JTdWJwcm9vZik7XG5cbiAgICAgICAgICAgICAgdGhpcy5zZXRDb250ZXh0KGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcC5gLCBub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlSZWZlcmVuY2UoY29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2VWZXJpcmllcztcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBzdGVwU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCdzIHJlZmVyZW5jZS4uLiBgLCBub2RlKTtcblxuICAgIGlmICh0aGlzLnJlZmVyZW5jZSAhPT0gbnVsbCkge1xuICAgICAgcmVmZXJlbmNlVmVyaXJpZXMgPSB0aGlzLnJlZmVyZW5jZS52ZXJpZnkoY29udGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlZmVyZW5jZVZlcmlyaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAocmVmZXJlbmNlVmVyaXJpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCdzIHJlZmVyZW5jZS4gYCwgbm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVZlcmlyaWVzO1xuICB9XG5cbiAgdmVyaWZ5U2F0aXNmaWVzQXNzZXJ0aW9uKGNvbnRleHQpIHtcbiAgICBsZXQgc2F0aXNmaWVzQXNzZXJ0aW9uVmVyaWZpZXM7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgc3RlcFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAncyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLi4uIGAsIG5vZGUpO1xuXG4gICAgaWYgKHRoaXMuc2F0aXNmaWVzQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZWQgPSB0cnVlLFxuICAgICAgICAgICAgYXNzaWdubWVudHMgPSBudWxsO1xuXG4gICAgICBzYXRpc2ZpZXNBc3NlcnRpb25WZXJpZmllcyA9IHRoaXMuc2F0aXNmaWVzQXNzZXJ0aW9uLnZhbGlkYXRlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzYXRpc2ZpZXNBc3NlcnRpb25WZXJpZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHNhdGlzZmllc0Fzc2VydGlvblZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAncyBzYXRpc2ZpZXMgYXNzZXJ0aW9uLiBgLCBub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2F0aXNmaWVzQXNzZXJ0aW9uVmVyaWZpZXM7XG4gIH1cblxuICBlcXVhdGVXaXRoU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRFcXVhdGVzO1xuXG4gICAgY29uc3QgbGVmdFN0YXRlbWVudCA9IHN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgIHJpZ2h0U3RhdGVtZW50ID0gdGhpcy5zdGF0ZW1lbnQsICAvLy9cbiAgICAgICAgICBsZWZ0U3RhdGVtZW50Tm9kZSA9IGxlZnRTdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHJpZ2h0U3RhdGVtZW50Tm9kZSA9IHJpZ2h0U3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRzRXF1YXRlID0gZXF1YXRlU3RhdGVtZW50cyhsZWZ0U3RhdGVtZW50Tm9kZSwgcmlnaHRTdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgIHN0YXRlbWVudEVxdWF0ZXMgPSBzdGF0ZW1lbnRzRXF1YXRlOyAgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVtZW50RXF1YXRlcztcbiAgfVxuXG4gIHVuaWZ5V2l0aFNhdGlzZmllc0Fzc2VydGlvbihzYXRpc2ZpZXNBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24gPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSB0aGlzLnN0cmluZywgLy8vXG4gICAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nID0gc2F0aXNmaWVzQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIHdpdGggdGhlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBhc3NlcnRpb24uLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlID0gc2F0aXNmaWVzQXNzZXJ0aW9uLmdldFJlZmVyZW5jZSgpLFxuICAgICAgICAgIGF4aW9tID0gY29udGV4dC5maW5kQXhpb21CeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgaWYgKGF4aW9tICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFN1YnN0aXR1dGlvbnMgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgICAgc3RlcCA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgICBzdGVwVW5pZmllcyA9IGF4aW9tLnVuaWZ5U3RlcChzdGVwLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0ZXBVbmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNDb21wYXJlID0gc2F0aXNmaWVzQXNzZXJ0aW9uLmNvbXBhcmVTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdWJzdGl0dXRpb25zQ29tcGFyZSkge1xuICAgICAgICAgIHVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbikge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgd2l0aCB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTdGVwXCI7XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHN0ZXBTdHJpbmcgPSBzdGF0ZW1lbnRTdHJpbmcsIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGAke3N0ZXBTdHJpbmd9XG5gLFxuICAgICAgICAgIHN0ZXBOb2RlID0gaW5zdGFudGlhdGVTdGVwKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgc3RlcCA9IHN0ZXBGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN0ZXA7O1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJTdGVwIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJzdGF0ZW1lbnQiLCJyZWZlcmVuY2UiLCJzYXRpc2ZpZXNBc3NlcnRpb24iLCJnZXRTdGF0ZW1lbnQiLCJnZXRSZWZlcmVuY2UiLCJnZXRTYXRpc2ZpZXNBc3NlcnRpb24iLCJpc1NhdGlzZmllZCIsInNhdGlzZmllZCIsImlzUXVhbGlmaWVkIiwicXVhbGlmaWVkIiwiaXNTdGF0ZWQiLCJzdGF0ZWQiLCJpc1N0ZXAiLCJzdGVwIiwibWF0Y2hUZXJtQW5kUHJvcGVydHlSZWxhdGlvbiIsInRlcm0iLCJwcm9wZXJ0eVJlbGF0aW9uIiwidGVybUFuZFByb3BlcnR5UmVsYXRpb25NYXRjaCIsInByb3BlcnR5QXNzZXJ0aW9uIiwicHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50IiwidmVyaWZ5Iiwic3Vic3RpdHV0aW9ucyIsImFzc2lnbm1lbnRzIiwidmVyaWZpZXMiLCJ0ZW1wb3JhcnlDb250ZXh0IiwiVGVtcG9yYXJ5Q29udGV4dCIsImZyb21Ob3RoaW5nIiwiZ2V0Tm9kZSIsInN0ZXBTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImRlYnVnIiwicmVmZXJlbmNlVmVyaWZpZXMiLCJ2ZXJpZnlSZWZlcmVuY2UiLCJzYXRpc2ZpZXNBc3NlcnRpb1ZlcmlyaWVzIiwidmVyaWZ5U2F0aXNmaWVzQXNzZXJ0aW9uIiwic3RhdGVtZW50VmFsaWRhdGVzIiwidmFsaWRhdGUiLCJzdGF0ZW1lbnRVbmlmaWVzIiwidW5pZnlTdGF0ZW1lbnRzIiwic29tZSIsInVuaWZ5U3RhdGVtZW50IiwiZWxlbWVudHMiLCJmcm9tU3RhdGVtZW50Iiwic3RlcE9yU3VicHJvb2YiLCJhZGRTdGVwT3JTdWJwcm9vZiIsInNldENvbnRleHQiLCJyZWZlcmVuY2VWZXJpcmllcyIsInNhdGlzZmllc0Fzc2VydGlvblZlcmlmaWVzIiwiZXF1YXRlV2l0aFN0YXRlbWVudCIsInN0YXRlbWVudEVxdWF0ZXMiLCJsZWZ0U3RhdGVtZW50IiwicmlnaHRTdGF0ZW1lbnQiLCJsZWZ0U3RhdGVtZW50Tm9kZSIsInJpZ2h0U3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudHNFcXVhdGUiLCJlcXVhdGVTdGF0ZW1lbnRzIiwidW5pZnlXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uIiwidW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24iLCJzYXRpc2ZpZXNBc3NlcnRpb25TdHJpbmciLCJheGlvbSIsImZpbmRBeGlvbUJ5UmVmZXJlbmNlIiwiU3Vic3RpdHV0aW9ucyIsInN0ZXBVbmlmaWVzIiwidW5pZnlTdGVwIiwic3Vic3RpdHV0aW9uc0NvbXBhcmUiLCJjb21wYXJlU3Vic3RpdHV0aW9ucyIsInN0YXRlbWVudFN0cmluZyIsInN0ZXBOb2RlIiwiaW5zdGFudGlhdGVTdGVwIiwic3RlcEZyb21TdGVwTm9kZSIsIkVsZW1lbnQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFhQTs7O2VBQUE7Ozs4REFYb0I7Z0VBQ0M7Z0VBQ1E7MkJBR0c7MkJBQ0E7c0JBQ0M7d0JBQ0E7eUJBQ2M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUUvQyxXQUFlQSxJQUFBQSxnQkFBTSx5QkFBQzs7YUFBTUMsS0FDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUVDLGtCQUFrQjtnQ0FEakROOztnQkFFeEIsa0JBRndCQTtZQUVsQkM7WUFBU0M7WUFBUUM7O1FBRXZCLE1BQUtDLFNBQVMsR0FBR0E7UUFDakIsTUFBS0MsU0FBUyxHQUFHQTtRQUNqQixNQUFLQyxrQkFBa0IsR0FBR0E7Ozs7O1lBRzVCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFNBQVM7WUFDdkI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFNBQVM7WUFDdkI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILGtCQUFrQjtZQUNoQzs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxZQUFhLElBQUksQ0FBQ0wsa0JBQWtCLEtBQUs7Z0JBRS9DLE9BQU9LO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsWUFBYSxJQUFJLENBQUNSLFNBQVMsS0FBSztnQkFFdEMsT0FBT1E7WUFD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