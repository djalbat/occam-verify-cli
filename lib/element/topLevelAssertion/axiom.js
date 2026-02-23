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
var _topLevelAssertion = /*#__PURE__*/ _interop_require_default(require("../topLevelAssertion"));
var _elements = require("../../elements");
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
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
        _get = Reflect.get;
    } else {
        _get = function get(target, property, receiver) {
            var base = _super_prop_base(target, property);
            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);
            if (desc.get) {
                return desc.get.call(receiver || target);
            }
            return desc.value;
        };
    }
    return _get(target, property, receiver || target);
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
function _super_prop_base(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _get_prototype_of(object);
        if (object === null) break;
    }
    return object;
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
var _Axiom;
var _default = (0, _elements.define)((_Axiom = /*#__PURE__*/ function(TopLevelAssertion) {
    _inherits(Axiom, TopLevelAssertion);
    function Axiom() {
        _class_call_check(this, Axiom);
        return _call_super(this, Axiom, arguments);
    }
    _create_class(Axiom, [
        {
            key: "getAxiomNode",
            value: function getAxiomNode() {
                var node = this.getNode(), axiomNode = node; ///
                return axiomNode;
            }
        },
        {
            key: "isSatisfiable",
            value: function isSatisfiable() {
                var signature = this.getSignature(), satisfiable = signature !== null;
                return satisfiable;
            }
        },
        {
            key: "verifySignature",
            value: function verifySignature() {
                var signatureVerifies;
                var satisfiable = this.isSatisfiable();
                if (satisfiable) {
                    var context = this.getContext(), signature = this.getSignature();
                    signatureVerifies = signature.verify(context);
                } else {
                    signatureVerifies = true;
                }
                return signatureVerifies;
            }
        },
        {
            key: "compareSignature",
            value: function compareSignature(signature, substitutions, context) {
                var comparesToSignature = false;
                var satisfiable = this.isSatisfiable();
                if (satisfiable) {
                    var signatureA = signature; ///
                    signature = this.getSignature();
                    var signatureB = signature, specificContext = context; ///
                    context = this.getContext();
                    var generalContext = context; ///
                    comparesToSignature = signatureA.compare(signatureB, substitutions, generalContext, specificContext);
                }
                return comparesToSignature;
            }
        },
        {
            key: "unifyStep",
            value: function unifyStep(step, substitutions, context) {
                var stepUnifies = false;
                context = step.getContext();
                var stepString = step.getString(), axiomString = this.getString();
                context.trace("Unifying the '".concat(stepString, "' step with the '").concat(axiomString, "' axiom..."));
                var unconditional = this.isUnconditional();
                if (!unconditional) {
                    context.trace("Unable to unify the '".concat(stepString, "' step with the '").concat(axiomString, "' axiom because the axiom is not unconditional."));
                } else {
                    var statement = step.getStatement(), statementUnifiesWithDeduction = this.unifyStatementWithDeduction(statement, substitutions, context);
                    if (statementUnifiesWithDeduction) {
                        stepUnifies = true;
                    }
                }
                if (stepUnifies) {
                    context.debug("...unified the '".concat(stepString, "' step with the '").concat(axiomString, "' axiom."));
                }
                return stepUnifies;
            }
        },
        {
            key: "unifySubproof",
            value: function unifySubproof(subproof, substitutions, context) {
                var subproofUnifies = false;
                var axiomString = this.getString(), subproofString = subproof.getString();
                context.trace("Unifying the '".concat(subproofString, "' subproof with the '").concat(axiomString, "' axiom..."));
                var unconditional = this.isUnconditional();
                if (unconditional) {
                    context.trace("Unable to unify the '".concat(subproofString, "' subproof with the '").concat(axiomString, "' axiom because the axiom is unconditional."));
                } else {
                    var lastProofAssertion = subproof.getLastProofAssertion(), lastProofAssertionUnifies = this.unifyLastProofAssertion(lastProofAssertion, substitutions, context);
                    if (lastProofAssertionUnifies) {
                        var suppositions = subproof.getSuppositions(), suppositionsUnify = this.unifySuppositions(suppositions, substitutions, context);
                        if (suppositionsUnify) {
                            subproofUnifies = true;
                        }
                    }
                }
                if (subproofUnifies) {
                    context.debug("...unified the '".concat(subproofString, "' subproof with the '").concat(axiomString, "' axiom."));
                }
                return subproofUnifies;
            }
        },
        {
            key: "unifyDeduction",
            value: function unifyDeduction(deduction, substitutions, generalContext, specificContext) {
                var deductionUnifies;
                var specificDeduction = deduction; ///
                deduction = this.getDeduction();
                var generalDeduction = deduction; ///
                deduction = specificDeduction; ///
                deductionUnifies = generalDeduction.unifyDeduction(deduction, substitutions, generalContext, specificContext);
                return deductionUnifies;
            }
        },
        {
            key: "unifySupposition",
            value: function unifySupposition(supposition, index, substitutions, generalContext, specificContext) {
                var suppositionUnifies;
                var specificSupposition = supposition; ///
                supposition = this.getSupposition(index);
                var generalSupposition = supposition; ///
                supposition = specificSupposition; ///
                suppositionUnifies = generalSupposition.unifySupposition(supposition, substitutions, generalContext, specificContext);
                return suppositionUnifies;
            }
        },
        {
            key: "unifySuppositions",
            value: function unifySuppositions(suppositions, substitutions, generalContext, specificContext) {
                var _this = this;
                var suppositionsUnify = false;
                var specificSuppositions = suppositions; ///
                suppositions = this.getSuppositions();
                var generalSuppositions = suppositions, generalSuppositionsLength = generalSuppositions.length, specificSuppositionsLength = specificSuppositions.length;
                if (generalSuppositionsLength === specificSuppositionsLength) {
                    suppositions = specificSuppositions; ///
                    suppositionsUnify = suppositions.every(function(supposition, index) {
                        var suppositionUnifies = _this.unifySupposition(supposition, index, substitutions, generalContext, specificContext);
                        if (suppositionUnifies) {
                            return true;
                        }
                    });
                }
                return suppositionsUnify;
            }
        },
        {
            key: "unifyLastProofAssertion",
            value: function unifyLastProofAssertion(lastProofAssertion, substitutions, context) {
                var lastProofAssertionUnifies = false;
                var axiomString = this.getString(), lastProofAssertionString = lastProofAssertion.getString();
                context.trace("Unifying the '".concat(lastProofAssertionString, "' last proof assertion with the '").concat(axiomString, "' axiom..."));
                var statement = lastProofAssertion.getStatement(), statementUnifiesWithDeduction = this.unifyStatementWithDeduction(statement, substitutions, context);
                if (statementUnifiesWithDeduction) {
                    lastProofAssertionUnifies = true;
                }
                if (lastProofAssertionUnifies) {
                    context.debug("...unified the '".concat(lastProofAssertionString, "' last proof assertion with the '").concat(axiomString, "' axiom."));
                }
                return lastProofAssertionUnifies;
            }
        },
        {
            key: "unifyTopLevelAssertion",
            value: function unifyTopLevelAssertion(topLevelAssertion, substitutions, context) {
                var topLevelAssertionUnifies = false;
                var axiomString = this.getString(), topLevelAssertionString = topLevelAssertion.getString();
                context.trace("Unifying the '".concat(topLevelAssertionString, "' top level assertion with the '").concat(axiomString, "' axiom..."));
                var hypothesesCorrelate = topLevelAssertion.correlateHypotheses(context);
                if (hypothesesCorrelate) {
                    var specificContext = context; ///
                    context = this.getContext();
                    var generalContext = context; ///
                    context = specificContext; ///
                    var deduction = topLevelAssertion.getDeduction(), deductionUnifies = this.unifyDeduction(deduction, substitutions, generalContext, specificContext);
                    if (deductionUnifies) {
                        var suppositions = topLevelAssertion.getSuppositions(), suppositionsUnify = this.unifySuppositions(suppositions, substitutions, generalContext, specificContext);
                        topLevelAssertionUnifies = suppositionsUnify; ///
                    }
                }
                if (topLevelAssertionUnifies) {
                    context.debug("...unified the '".concat(topLevelAssertionString, "' top level assertion with the '").concat(axiomString, "' axiom."));
                }
                return topLevelAssertionUnifies;
            }
        },
        {
            key: "verify",
            value: function verify() {
                var _this = this;
                var _this1 = this, _superprop_get_verify = function() {
                    return _get(_get_prototype_of(Axiom.prototype), "verify", _this);
                };
                return _async_to_generator(function() {
                    var verifies, context, axiomString, signatureVerifies, axiom;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                context = this.getContext();
                                return [
                                    4,
                                    this.break(context)
                                ];
                            case 1:
                                _state.sent();
                                axiomString = this.getString(); ///
                                context.trace("Verifying the '".concat(axiomString, "' axiom..."));
                                signatureVerifies = this.verifySignature();
                                if (!signatureVerifies) return [
                                    3,
                                    3
                                ];
                                return [
                                    4,
                                    _superprop_get_verify().call(_this1)
                                ];
                            case 2:
                                verifies = _state.sent();
                                _state.label = 3;
                            case 3:
                                if (verifies) {
                                    axiom = this; ///
                                    context.addAxiom(axiom);
                                    context.debug("...verified the '".concat(axiomString, "' axiom."));
                                }
                                return [
                                    2,
                                    verifies
                                ];
                        }
                    });
                }).call(this);
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, context) {
                return _topLevelAssertion.default.fromJSON(Axiom, json, context);
            }
        }
    ]);
    return Axiom;
}(_topLevelAssertion.default), _define_property(_Axiom, "name", "Axiom"), _Axiom));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3RvcExldmVsQXNzZXJ0aW9uL2F4aW9tLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVG9wTGV2ZWxBc3NlcnRpb24gZnJvbSBcIi4uL3RvcExldmVsQXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgQXhpb20gZXh0ZW5kcyBUb3BMZXZlbEFzc2VydGlvbiB7XG4gIGdldEF4aW9tTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgYXhpb21Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gYXhpb21Ob2RlO1xuICB9XG5cbiAgaXNTYXRpc2ZpYWJsZSgpIHtcbiAgICBjb25zdCBzaWduYXR1cmUgPSB0aGlzLmdldFNpZ25hdHVyZSgpLFxuICAgICAgICAgIHNhdGlzZmlhYmxlID0gKHNpZ25hdHVyZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc2F0aXNmaWFibGU7XG4gIH1cblxuICB2ZXJpZnlTaWduYXR1cmUoKSB7XG4gICAgbGV0IHNpZ25hdHVyZVZlcmlmaWVzO1xuXG4gICAgY29uc3Qgc2F0aXNmaWFibGUgPSB0aGlzLmlzU2F0aXNmaWFibGUoKTtcblxuICAgIGlmIChzYXRpc2ZpYWJsZSkge1xuICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgICAgc2lnbmF0dXJlID0gdGhpcy5nZXRTaWduYXR1cmUoKTtcblxuICAgICAgc2lnbmF0dXJlVmVyaWZpZXMgPSBzaWduYXR1cmUudmVyaWZ5KGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaWduYXR1cmVWZXJpZmllcyA9IHRydWVcbiAgICB9XG5cbiAgICByZXR1cm4gc2lnbmF0dXJlVmVyaWZpZXM7XG4gIH1cblxuICBjb21wYXJlU2lnbmF0dXJlKHNpZ25hdHVyZSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBjb21wYXJlc1RvU2lnbmF0dXJlID0gZmFsc2U7XG5cbiAgICBjb25zdCBzYXRpc2ZpYWJsZSA9IHRoaXMuaXNTYXRpc2ZpYWJsZSgpO1xuXG4gICAgaWYgKHNhdGlzZmlhYmxlKSB7XG4gICAgICBjb25zdCBzaWduYXR1cmVBID0gc2lnbmF0dXJlOyAvLy9cblxuICAgICAgc2lnbmF0dXJlID0gdGhpcy5nZXRTaWduYXR1cmUoKVxuXG4gICAgICBjb25zdCBzaWduYXR1cmVCID0gc2lnbmF0dXJlLCAvLy9cbiAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgICAgY29tcGFyZXNUb1NpZ25hdHVyZSA9IHNpZ25hdHVyZUEuY29tcGFyZShzaWduYXR1cmVCLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1NpZ25hdHVyZTtcbiAgfVxuXG4gIHVuaWZ5U3RlcChzdGVwLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0ZXBVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb250ZXh0ID0gc3RlcC5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBzdGVwU3RyaW5nID0gc3RlcC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBheGlvbVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS4uLmApO1xuXG4gICAgY29uc3QgdW5jb25kaXRpb25hbCA9IHRoaXMuaXNVbmNvbmRpdGlvbmFsKCk7XG5cbiAgICBpZiAoIXVuY29uZGl0aW9uYWwpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFVuYWJsZSB0byB1bmlmeSB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbSBiZWNhdXNlIHRoZSBheGlvbSBpcyBub3QgdW5jb25kaXRpb25hbC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3RhdGVtZW50ID0gc3RlcC5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXNXaXRoRGVkdWN0aW9uID0gdGhpcy51bmlmeVN0YXRlbWVudFdpdGhEZWR1Y3Rpb24oc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXNXaXRoRGVkdWN0aW9uKSB7XG4gICAgICAgIHN0ZXBVbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RlcFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0ZXBVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZlVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGF4aW9tU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdWJwcm9vZlN0cmluZyA9IHN1YnByb29mLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS4uLmApO1xuXG4gICAgY29uc3QgdW5jb25kaXRpb25hbCA9IHRoaXMuaXNVbmNvbmRpdGlvbmFsKCk7XG5cbiAgICBpZiAodW5jb25kaXRpb25hbCkge1xuICAgICAgY29udGV4dC50cmFjZShgVW5hYmxlIHRvIHVuaWZ5IHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20gYmVjYXVzZSB0aGUgYXhpb20gaXMgdW5jb25kaXRpb25hbC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbGFzdFByb29mQXNzZXJ0aW9uID0gc3VicHJvb2YuZ2V0TGFzdFByb29mQXNzZXJ0aW9uKCksXG4gICAgICAgICAgICBsYXN0UHJvb2ZBc3NlcnRpb25VbmlmaWVzID0gdGhpcy51bmlmeUxhc3RQcm9vZkFzc2VydGlvbihsYXN0UHJvb2ZBc3NlcnRpb24sIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAobGFzdFByb29mQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgICBjb25zdCBzdXBwb3NpdGlvbnMgPSBzdWJwcm9vZi5nZXRTdXBwb3NpdGlvbnMoKSxcbiAgICAgICAgICAgICAgc3VwcG9zaXRpb25zVW5pZnkgPSB0aGlzLnVuaWZ5U3VwcG9zaXRpb25zKHN1cHBvc2l0aW9ucywgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1cHBvc2l0aW9uc1VuaWZ5KSB7XG4gICAgICAgICAgc3VicHJvb2ZVbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdWJwcm9vZlVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2ZVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlEZWR1Y3Rpb24oZGVkdWN0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IGRlZHVjdGlvblVuaWZpZXM7XG5cbiAgICBjb25zdCBzcGVjaWZpY0RlZHVjdGlvbiA9IGRlZHVjdGlvbjsgIC8vL1xuXG4gICAgZGVkdWN0aW9uID0gdGhpcy5nZXREZWR1Y3Rpb24oKTtcblxuICAgIGNvbnN0IGdlbmVyYWxEZWR1Y3Rpb24gPSBkZWR1Y3Rpb247IC8vL1xuXG4gICAgZGVkdWN0aW9uID0gc3BlY2lmaWNEZWR1Y3Rpb247ICAvLy9cblxuICAgIGRlZHVjdGlvblVuaWZpZXMgPSBnZW5lcmFsRGVkdWN0aW9uLnVuaWZ5RGVkdWN0aW9uKGRlZHVjdGlvbiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICByZXR1cm4gZGVkdWN0aW9uVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIGluZGV4LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN1cHBvc2l0aW9uVW5pZmllcztcblxuICAgIGNvbnN0IHNwZWNpZmljU3VwcG9zaXRpb24gPSBzdXBwb3NpdGlvbjsgIC8vL1xuXG4gICAgc3VwcG9zaXRpb24gPSB0aGlzLmdldFN1cHBvc2l0aW9uKGluZGV4KTtcblxuICAgIGNvbnN0IGdlbmVyYWxTdXBwb3NpdGlvbiA9IHN1cHBvc2l0aW9uOyAvLy9cblxuICAgIHN1cHBvc2l0aW9uID0gc3BlY2lmaWNTdXBwb3NpdGlvbjsgIC8vL1xuXG4gICAgc3VwcG9zaXRpb25VbmlmaWVzID0gZ2VuZXJhbFN1cHBvc2l0aW9uLnVuaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3VwcG9zaXRpb25zKHN1cHBvc2l0aW9ucywgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdXBwb3NpdGlvbnNVbmlmeSA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNTdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnM7ICAvLy9cblxuICAgIHN1cHBvc2l0aW9ucyA9IHRoaXMuZ2V0U3VwcG9zaXRpb25zKCk7XG5cbiAgICBjb25zdCBnZW5lcmFsU3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zLCAvLy9cbiAgICAgICAgICBnZW5lcmFsU3VwcG9zaXRpb25zTGVuZ3RoID0gZ2VuZXJhbFN1cHBvc2l0aW9ucy5sZW5ndGgsXG4gICAgICAgICAgc3BlY2lmaWNTdXBwb3NpdGlvbnNMZW5ndGggPSBzcGVjaWZpY1N1cHBvc2l0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAoZ2VuZXJhbFN1cHBvc2l0aW9uc0xlbmd0aCA9PT0gc3BlY2lmaWNTdXBwb3NpdGlvbnNMZW5ndGgpIHtcbiAgICAgIHN1cHBvc2l0aW9ucyA9IHNwZWNpZmljU3VwcG9zaXRpb25zOyAgLy8vXG5cbiAgICAgIHN1cHBvc2l0aW9uc1VuaWZ5ID0gc3VwcG9zaXRpb25zLmV2ZXJ5KChzdXBwb3NpdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25VbmlmaWVzID0gdGhpcy51bmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBpbmRleCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1cHBvc2l0aW9uVW5pZmllcykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25zVW5pZnk7XG4gIH1cblxuICB1bmlmeUxhc3RQcm9vZkFzc2VydGlvbihsYXN0UHJvb2ZBc3NlcnRpb24sIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgbGFzdFByb29mQXNzZXJ0aW9uVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgYXhpb21TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGxhc3RQcm9vZkFzc2VydGlvblN0cmluZyA9IGxhc3RQcm9vZkFzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtsYXN0UHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBsYXN0IHByb29mIGFzc2VydGlvbiB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLi4uYClcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IGxhc3RQcm9vZkFzc2VydGlvbi5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzV2l0aERlZHVjdGlvbiA9IHRoaXMudW5pZnlTdGF0ZW1lbnRXaXRoRGVkdWN0aW9uKHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllc1dpdGhEZWR1Y3Rpb24pIHtcbiAgICAgIGxhc3RQcm9vZkFzc2VydGlvblVuaWZpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChsYXN0UHJvb2ZBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtsYXN0UHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBsYXN0IHByb29mIGFzc2VydGlvbiB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLmApXG4gICAgfVxuXG4gICAgcmV0dXJuIGxhc3RQcm9vZkFzc2VydGlvblVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVRvcExldmVsQXNzZXJ0aW9uKHRvcExldmVsQXNzZXJ0aW9uLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHRvcExldmVsQXNzZXJ0aW9uVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgYXhpb21TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uLi5gKTtcblxuICAgIGNvbnN0IGh5cG90aGVzZXNDb3JyZWxhdGUgPSB0b3BMZXZlbEFzc2VydGlvbi5jb3JyZWxhdGVIeXBvdGhlc2VzKGNvbnRleHQpO1xuXG4gICAgaWYgKGh5cG90aGVzZXNDb3JyZWxhdGUpIHtcbiAgICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgIGNvbnN0IGRlZHVjdGlvbiA9IHRvcExldmVsQXNzZXJ0aW9uLmdldERlZHVjdGlvbigpLFxuICAgICAgICAgICAgZGVkdWN0aW9uVW5pZmllcyA9IHRoaXMudW5pZnlEZWR1Y3Rpb24oZGVkdWN0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKGRlZHVjdGlvblVuaWZpZXMpIHtcbiAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25zID0gdG9wTGV2ZWxBc3NlcnRpb24uZ2V0U3VwcG9zaXRpb25zKCksXG4gICAgICAgICAgICAgIHN1cHBvc2l0aW9uc1VuaWZ5ID0gdGhpcy51bmlmeVN1cHBvc2l0aW9ucyhzdXBwb3NpdGlvbnMsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIHRvcExldmVsQXNzZXJ0aW9uVW5pZmllcyA9IHN1cHBvc2l0aW9uc1VuaWZ5OyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodG9wTGV2ZWxBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24gd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxBc3NlcnRpb25VbmlmaWVzO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcztcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBheGlvbVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLi4uYCk7XG5cbiAgICBjb25zdCBzaWduYXR1cmVWZXJpZmllcyA9IHRoaXMudmVyaWZ5U2lnbmF0dXJlKCk7XG5cbiAgICBpZiAoc2lnbmF0dXJlVmVyaWZpZXMpIHtcbiAgICAgIHZlcmlmaWVzID0gYXdhaXQgc3VwZXIudmVyaWZ5KCk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBheGlvbSA9IHRoaXM7IC8vL1xuXG4gICAgICBjb250ZXh0LmFkZEF4aW9tKGF4aW9tKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkF4aW9tXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHsgcmV0dXJuIFRvcExldmVsQXNzZXJ0aW9uLmZyb21KU09OKEF4aW9tLCBqc29uLCBjb250ZXh0KTsgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiQXhpb20iLCJnZXRBeGlvbU5vZGUiLCJub2RlIiwiZ2V0Tm9kZSIsImF4aW9tTm9kZSIsImlzU2F0aXNmaWFibGUiLCJzaWduYXR1cmUiLCJnZXRTaWduYXR1cmUiLCJzYXRpc2ZpYWJsZSIsInZlcmlmeVNpZ25hdHVyZSIsInNpZ25hdHVyZVZlcmlmaWVzIiwiY29udGV4dCIsImdldENvbnRleHQiLCJ2ZXJpZnkiLCJjb21wYXJlU2lnbmF0dXJlIiwic3Vic3RpdHV0aW9ucyIsImNvbXBhcmVzVG9TaWduYXR1cmUiLCJzaWduYXR1cmVBIiwic2lnbmF0dXJlQiIsInNwZWNpZmljQ29udGV4dCIsImdlbmVyYWxDb250ZXh0IiwiY29tcGFyZSIsInVuaWZ5U3RlcCIsInN0ZXAiLCJzdGVwVW5pZmllcyIsInN0ZXBTdHJpbmciLCJnZXRTdHJpbmciLCJheGlvbVN0cmluZyIsInRyYWNlIiwidW5jb25kaXRpb25hbCIsImlzVW5jb25kaXRpb25hbCIsInN0YXRlbWVudCIsImdldFN0YXRlbWVudCIsInN0YXRlbWVudFVuaWZpZXNXaXRoRGVkdWN0aW9uIiwidW5pZnlTdGF0ZW1lbnRXaXRoRGVkdWN0aW9uIiwiZGVidWciLCJ1bmlmeVN1YnByb29mIiwic3VicHJvb2YiLCJzdWJwcm9vZlVuaWZpZXMiLCJzdWJwcm9vZlN0cmluZyIsImxhc3RQcm9vZkFzc2VydGlvbiIsImdldExhc3RQcm9vZkFzc2VydGlvbiIsImxhc3RQcm9vZkFzc2VydGlvblVuaWZpZXMiLCJ1bmlmeUxhc3RQcm9vZkFzc2VydGlvbiIsInN1cHBvc2l0aW9ucyIsImdldFN1cHBvc2l0aW9ucyIsInN1cHBvc2l0aW9uc1VuaWZ5IiwidW5pZnlTdXBwb3NpdGlvbnMiLCJ1bmlmeURlZHVjdGlvbiIsImRlZHVjdGlvbiIsImRlZHVjdGlvblVuaWZpZXMiLCJzcGVjaWZpY0RlZHVjdGlvbiIsImdldERlZHVjdGlvbiIsImdlbmVyYWxEZWR1Y3Rpb24iLCJ1bmlmeVN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb24iLCJpbmRleCIsInN1cHBvc2l0aW9uVW5pZmllcyIsInNwZWNpZmljU3VwcG9zaXRpb24iLCJnZXRTdXBwb3NpdGlvbiIsImdlbmVyYWxTdXBwb3NpdGlvbiIsInNwZWNpZmljU3VwcG9zaXRpb25zIiwiZ2VuZXJhbFN1cHBvc2l0aW9ucyIsImdlbmVyYWxTdXBwb3NpdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJzcGVjaWZpY1N1cHBvc2l0aW9uc0xlbmd0aCIsImV2ZXJ5IiwibGFzdFByb29mQXNzZXJ0aW9uU3RyaW5nIiwidW5pZnlUb3BMZXZlbEFzc2VydGlvbiIsInRvcExldmVsQXNzZXJ0aW9uIiwidG9wTGV2ZWxBc3NlcnRpb25VbmlmaWVzIiwidG9wTGV2ZWxBc3NlcnRpb25TdHJpbmciLCJoeXBvdGhlc2VzQ29ycmVsYXRlIiwiY29ycmVsYXRlSHlwb3RoZXNlcyIsInZlcmlmaWVzIiwiYXhpb20iLCJicmVhayIsImFkZEF4aW9tIiwiZnJvbUpTT04iLCJqc29uIiwiVG9wTGV2ZWxBc3NlcnRpb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQUE7Ozt3RUFKOEI7d0JBRVA7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRXZC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