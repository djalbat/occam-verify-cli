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
            key: "validate",
            value: function validate(substitutions, assignments, context) {
                var validates = false;
                var temporaryContext = _temporary.default.fromNothing(context);
                context = temporaryContext; ///
                var stepString = this.string; ///
                context.trace("Validating the '".concat(stepString, "' step..."), this.node);
                if (this.statement !== null) {
                    var stated = this.isStated(), statementVerifies = this.statement.validate(assignments, stated, context);
                    if (statementVerifies) {
                        var qualified = this.isQualified(), satisfied = this.isSatisfied();
                        if (false) {
                        ///
                        } else if (qualified) {
                            var referenceVerifies = this.reference.validate(context);
                            if (referenceVerifies) {
                                validates = true;
                            }
                        } else if (satisfied) {
                            var stated1 = true, _$assignments = null, satisfiesAssertionVerifies = this.satisfiesAssertion.validate(_$assignments, stated1, context);
                            if (satisfiesAssertionVerifies) {
                                validates = true;
                            }
                        } else {
                            validates = true;
                        }
                    }
                } else {
                    context.debug("Cannot validate the '".concat(stepString, "' step because it is nonsense."), this.node);
                }
                if (validates) {
                    this.context = context;
                    context.debug("...verified the '".concat(stepString, "' step."), this.node);
                }
                return validates;
            }
        },
        {
            key: "unify",
            value: function unify(substitutions, context) {
                var _this = this;
                var unifies;
                context = this.context;
                var stepString = this.string; ///
                context.trace("Unifying the '".concat(stepString, "' step..."), this.node);
                unifies = _unification.unifyStatements.some(function(unifyStatement) {
                    var statementUnifies = unifyStatement(_this.statement, _this.reference, _this.satisfiesAssertion, substitutions, context);
                    if (statementUnifies) {
                        return true;
                    }
                });
                if (unifies) {
                    context.debug("...unified the '".concat(stepString, "' step."), this.node);
                }
                return unifies;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3N0ZXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgVGVtcG9yYXJ5Q29udGV4dCBmcm9tIFwiLi4vY29udGV4dC90ZW1wb3JhcnlcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVN0ZXAgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgdW5pZnlTdGF0ZW1lbnRzIH0gZnJvbSBcIi4uL3V0aWxpdGllcy91bmlmaWNhdGlvblwiO1xuaW1wb3J0IHsgZXF1YXRlU3RhdGVtZW50cyB9IGZyb20gXCIuLi9wcm9jZXNzL2VxdWF0ZVwiO1xuaW1wb3J0IHsgc3RlcEZyb21TdGVwTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgcHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdGF0ZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFN0ZXAgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgc2F0aXNmaWVzQXNzZXJ0aW9uKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICAgIHRoaXMuc2F0aXNmaWVzQXNzZXJ0aW9uID0gc2F0aXNmaWVzQXNzZXJ0aW9uO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICBnZXRTYXRpc2ZpZXNBc3NlcnRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2F0aXNmaWVzQXNzZXJ0aW9uO1xuICB9XG5cbiAgaXNTYXRpc2ZpZWQoKSB7XG4gICAgY29uc3Qgc2F0aXNmaWVkID0gKHRoaXMuc2F0aXNmaWVzQXNzZXJ0aW9uICE9PSBudWxsKTtcblxuICAgIHJldHVybiBzYXRpc2ZpZWQ7XG4gIH1cblxuICBpc1F1YWxpZmllZCgpIHtcbiAgICBjb25zdCBxdWFsaWZpZWQgPSAodGhpcy5yZWZlcmVuY2UgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHF1YWxpZmllZDtcbiAgfVxuXG4gIGlzU3RhdGVkKCkge1xuICAgIGNvbnN0IHF1YWxpZmllZCA9IHRoaXMuaXNRdWFsaWZpZWQoKSxcbiAgICAgICAgICBzdGF0ZWQgPSBxdWFsaWZpZWQ7IC8vL1xuXG4gICAgcmV0dXJuIHN0YXRlZDtcbiAgfVxuXG4gIGlzU3RlcCgpIHtcbiAgICBjb25zdCBzdGVwID0gdHJ1ZTtcblxuICAgIHJldHVybiBzdGVwO1xuICB9XG5cbiAgbWF0Y2hUZXJtQW5kUHJvcGVydHlSZWxhdGlvbih0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uTWF0Y2ggPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb3BlcnR5QXNzZXJ0aW9uID0gcHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50KHRoaXMuc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChwcm9wZXJ0eUFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgdGVybUFuZFByb3BlcnR5UmVsYXRpb25NYXRjaCA9IHByb3BlcnR5QXNzZXJ0aW9uLm1hdGNoVGVybUFuZFByb3BlcnR5UmVsYXRpb24odGVybSwgcHJvcGVydHlSZWxhdGlvbiwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uTWF0Y2g7XG4gIH1cblxuICB2YWxpZGF0ZShzdWJzdGl0dXRpb25zLCBhc3NpZ25tZW50cywgY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHRlbXBvcmFyeUNvbnRleHQgPSBUZW1wb3JhcnlDb250ZXh0LmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gICAgY29udGV4dCA9IHRlbXBvcmFyeUNvbnRleHQ7IC8vL1xuXG4gICAgY29uc3Qgc3RlcFN0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwLi4uYCwgdGhpcy5ub2RlKTtcblxuICAgIGlmICh0aGlzLnN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVkID0gdGhpcy5pc1N0YXRlZCgpLFxuICAgICAgICAgICAgc3RhdGVtZW50VmVyaWZpZXMgPSB0aGlzLnN0YXRlbWVudC52YWxpZGF0ZShhc3NpZ25tZW50cywgc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFZlcmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IHF1YWxpZmllZCA9IHRoaXMuaXNRdWFsaWZpZWQoKSxcbiAgICAgICAgICAgICAgc2F0aXNmaWVkID0gdGhpcy5pc1NhdGlzZmllZCgpO1xuXG4gICAgICAgIGlmIChmYWxzZSkge1xuICAgICAgICAgIC8vL1xuICAgICAgICB9IGVsc2UgaWYgKHF1YWxpZmllZCkge1xuICAgICAgICAgIGNvbnN0IHJlZmVyZW5jZVZlcmlmaWVzID0gdGhpcy5yZWZlcmVuY2UudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAocmVmZXJlbmNlVmVyaWZpZXMpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHNhdGlzZmllZCkge1xuICAgICAgICAgIGNvbnN0IHN0YXRlZCA9IHRydWUsXG4gICAgICAgICAgICAgICAgYXNzaWdubWVudHMgPSBudWxsLFxuICAgICAgICAgICAgICAgIHNhdGlzZmllc0Fzc2VydGlvblZlcmlmaWVzID0gdGhpcy5zYXRpc2ZpZXNBc3NlcnRpb24udmFsaWRhdGUoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoc2F0aXNmaWVzQXNzZXJ0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgQ2Fubm90IHZhbGlkYXRlIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCBiZWNhdXNlIGl0IGlzIG5vbnNlbnNlLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlcztcbiAgfVxuXG4gIHVuaWZ5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllcztcblxuICAgIGNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XG5cbiAgICBjb25zdCBzdGVwU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcC4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICB1bmlmaWVzID0gdW5pZnlTdGF0ZW1lbnRzLnNvbWUoKHVuaWZ5U3RhdGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVzID0gdW5pZnlTdGF0ZW1lbnQodGhpcy5zdGF0ZW1lbnQsIHRoaXMucmVmZXJlbmNlLCB0aGlzLnNhdGlzZmllc0Fzc2VydGlvbiwgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZXM7XG4gIH1cblxuICBlcXVhdGVXaXRoU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRFcXVhdGVzO1xuXG4gICAgY29uc3QgbGVmdFN0YXRlbWVudCA9IHN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgIHJpZ2h0U3RhdGVtZW50ID0gdGhpcy5zdGF0ZW1lbnQsICAvLy9cbiAgICAgICAgICBsZWZ0U3RhdGVtZW50Tm9kZSA9IGxlZnRTdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHJpZ2h0U3RhdGVtZW50Tm9kZSA9IHJpZ2h0U3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRzRXF1YXRlID0gZXF1YXRlU3RhdGVtZW50cyhsZWZ0U3RhdGVtZW50Tm9kZSwgcmlnaHRTdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgIHN0YXRlbWVudEVxdWF0ZXMgPSBzdGF0ZW1lbnRzRXF1YXRlOyAgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVtZW50RXF1YXRlcztcbiAgfVxuXG4gIHVuaWZ5V2l0aFNhdGlzZmllc0Fzc2VydGlvbihzYXRpc2ZpZXNBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllc1dpdGhTYXRpc2ZpZXNBc3NlcnRpb24gPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSB0aGlzLnN0cmluZywgLy8vXG4gICAgICAgICAgc2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nID0gc2F0aXNmaWVzQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIHdpdGggdGhlICcke3NhdGlzZmllc0Fzc2VydGlvblN0cmluZ30nIHNhdGlzZmllcyBhc3NlcnRpb24uLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlID0gc2F0aXNmaWVzQXNzZXJ0aW9uLmdldFJlZmVyZW5jZSgpLFxuICAgICAgICAgIGF4aW9tID0gY29udGV4dC5maW5kQXhpb21CeVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgaWYgKGF4aW9tICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB7IFN1YnN0aXR1dGlvbnMgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgICAgc3RlcCA9IHRoaXMsICAvLy9cbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgICBzdGVwVW5pZmllcyA9IGF4aW9tLnVuaWZ5U3RlcChzdGVwLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0ZXBVbmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNDb21wYXJlID0gc2F0aXNmaWVzQXNzZXJ0aW9uLmNvbXBhcmVTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdWJzdGl0dXRpb25zQ29tcGFyZSkge1xuICAgICAgICAgIHVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbikge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgd2l0aCB0aGUgJyR7c2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nfScgc2F0aXNmaWVzIGFzc2VydGlvbi5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVzV2l0aFNhdGlzZmllc0Fzc2VydGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTdGVwXCI7XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHN0ZXBTdHJpbmcgPSBzdGF0ZW1lbnRTdHJpbmcsIC8vL1xuICAgICAgICAgIHN0cmluZyA9IGAke3N0ZXBTdHJpbmd9XG5gLFxuICAgICAgICAgIHN0ZXBOb2RlID0gaW5zdGFudGlhdGVTdGVwKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgc3RlcCA9IHN0ZXBGcm9tU3RlcE5vZGUoc3RlcE5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN0ZXA7O1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJTdGVwIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJzdGF0ZW1lbnQiLCJyZWZlcmVuY2UiLCJzYXRpc2ZpZXNBc3NlcnRpb24iLCJnZXRTdGF0ZW1lbnQiLCJnZXRSZWZlcmVuY2UiLCJnZXRTYXRpc2ZpZXNBc3NlcnRpb24iLCJpc1NhdGlzZmllZCIsInNhdGlzZmllZCIsImlzUXVhbGlmaWVkIiwicXVhbGlmaWVkIiwiaXNTdGF0ZWQiLCJzdGF0ZWQiLCJpc1N0ZXAiLCJzdGVwIiwibWF0Y2hUZXJtQW5kUHJvcGVydHlSZWxhdGlvbiIsInRlcm0iLCJwcm9wZXJ0eVJlbGF0aW9uIiwidGVybUFuZFByb3BlcnR5UmVsYXRpb25NYXRjaCIsInByb3BlcnR5QXNzZXJ0aW9uIiwicHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50IiwidmFsaWRhdGUiLCJzdWJzdGl0dXRpb25zIiwiYXNzaWdubWVudHMiLCJ2YWxpZGF0ZXMiLCJ0ZW1wb3JhcnlDb250ZXh0IiwiVGVtcG9yYXJ5Q29udGV4dCIsImZyb21Ob3RoaW5nIiwic3RlcFN0cmluZyIsInRyYWNlIiwic3RhdGVtZW50VmVyaWZpZXMiLCJyZWZlcmVuY2VWZXJpZmllcyIsInNhdGlzZmllc0Fzc2VydGlvblZlcmlmaWVzIiwiZGVidWciLCJ1bmlmeSIsInVuaWZpZXMiLCJ1bmlmeVN0YXRlbWVudHMiLCJzb21lIiwidW5pZnlTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVbmlmaWVzIiwiZXF1YXRlV2l0aFN0YXRlbWVudCIsInN0YXRlbWVudEVxdWF0ZXMiLCJsZWZ0U3RhdGVtZW50IiwicmlnaHRTdGF0ZW1lbnQiLCJsZWZ0U3RhdGVtZW50Tm9kZSIsImdldE5vZGUiLCJyaWdodFN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRzRXF1YXRlIiwiZXF1YXRlU3RhdGVtZW50cyIsInVuaWZ5V2l0aFNhdGlzZmllc0Fzc2VydGlvbiIsInVuaWZpZXNXaXRoU2F0aXNmaWVzQXNzZXJ0aW9uIiwic2F0aXNmaWVzQXNzZXJ0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwiYXhpb20iLCJmaW5kQXhpb21CeVJlZmVyZW5jZSIsIlN1YnN0aXR1dGlvbnMiLCJlbGVtZW50cyIsInN0ZXBVbmlmaWVzIiwidW5pZnlTdGVwIiwic3Vic3RpdHV0aW9uc0NvbXBhcmUiLCJjb21wYXJlU3Vic3RpdHV0aW9ucyIsImZyb21TdGF0ZW1lbnQiLCJzdGF0ZW1lbnRTdHJpbmciLCJzdGVwTm9kZSIsImluc3RhbnRpYXRlU3RlcCIsInN0ZXBGcm9tU3RlcE5vZGUiLCJFbGVtZW50IiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBYUE7OztlQUFBOzs7OERBWG9CO2dFQUNDO2dFQUNROzJCQUdHOzJCQUNBO3NC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