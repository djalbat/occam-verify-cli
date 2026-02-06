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
var _topLevelAssertion = /*#__PURE__*/ _interop_require_default(require("../../node/topLevelAssertion"));
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
                var node = this.getNode(), axiomString = this.getString(), lastProofAssertionString = lastProofAssertion.getString();
                context.trace("Unifying the '".concat(lastProofAssertionString, "' last proof assertion with the '").concat(axiomString, "' axiom..."), node);
                var statement = lastProofAssertion.getStatement(), statementUnifiesWithDeduction = this.unifyStatementWithDeduction(statement, substitutions, context);
                if (statementUnifiesWithDeduction) {
                    lastProofAssertionUnifies = true;
                }
                if (lastProofAssertionUnifies) {
                    context.debug("...unified the '".concat(lastProofAssertionString, "' last proof assertion with the '").concat(axiomString, "' axiom."), node);
                }
                return lastProofAssertionUnifies;
            }
        },
        {
            key: "unifyTopLevelAssertion",
            value: function unifyTopLevelAssertion(topLevelAssertion, substitutions, context) {
                var topLevelAssertionUnifies = false;
                var node = this.getNode(), axiomString = this.getString(), topLevelAssertionString = topLevelAssertion.getString();
                context.trace("Unifying the '".concat(topLevelAssertionString, "' top level assertion with the '").concat(axiomString, "' axiom..."), node);
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
                    context.debug("...unified the '".concat(topLevelAssertionString, "' top level assertion with the '").concat(axiomString, "' axiom."), node);
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
                    var verifies, node, context, axiomString, signatureVerifies, axiom;
                    return _ts_generator(this, function(_state) {
                        node = this.getNode(), context = this.getContext(), axiomString = this.getString(); ///
                        context.trace("Verifying the '".concat(axiomString, "' axiom..."), node);
                        signatureVerifies = this.verifySignature();
                        if (signatureVerifies) {
                            verifies = _superprop_get_verify().call(_this1);
                        }
                        if (verifies) {
                            axiom = this; ///
                            context.addAxiom(axiom);
                            context.debug("...verified the '".concat(axiomString, "' axiom."), node);
                        }
                        return [
                            2,
                            verifies
                        ];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3RvcExldmVsQXNzZXJ0aW9uL2F4aW9tLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVG9wTGV2ZWxBc3NlcnRpb24gIGZyb20gXCIuLi8uLi9ub2RlL3RvcExldmVsQXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgQXhpb20gZXh0ZW5kcyBUb3BMZXZlbEFzc2VydGlvbiB7XG4gIGlzU2F0aXNmaWFibGUoKSB7XG4gICAgY29uc3Qgc2lnbmF0dXJlID0gdGhpcy5nZXRTaWduYXR1cmUoKSxcbiAgICAgICAgICBzYXRpc2ZpYWJsZSA9IChzaWduYXR1cmUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHNhdGlzZmlhYmxlO1xuICB9XG5cbiAgdmVyaWZ5U2lnbmF0dXJlKCkge1xuICAgIGxldCBzaWduYXR1cmVWZXJpZmllcztcblxuICAgIGNvbnN0IHNhdGlzZmlhYmxlID0gdGhpcy5pc1NhdGlzZmlhYmxlKCk7XG5cbiAgICBpZiAoc2F0aXNmaWFibGUpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICAgIHNpZ25hdHVyZSA9IHRoaXMuZ2V0U2lnbmF0dXJlKCk7XG5cbiAgICAgIHNpZ25hdHVyZVZlcmlmaWVzID0gc2lnbmF0dXJlLnZlcmlmeShjb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2lnbmF0dXJlVmVyaWZpZXMgPSB0cnVlXG4gICAgfVxuXG4gICAgcmV0dXJuIHNpZ25hdHVyZVZlcmlmaWVzO1xuICB9XG5cbiAgY29tcGFyZVNpZ25hdHVyZShzaWduYXR1cmUsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgY29tcGFyZXNUb1NpZ25hdHVyZSA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2F0aXNmaWFibGUgPSB0aGlzLmlzU2F0aXNmaWFibGUoKTtcblxuICAgIGlmIChzYXRpc2ZpYWJsZSkge1xuICAgICAgY29uc3Qgc2lnbmF0dXJlQSA9IHNpZ25hdHVyZTsgLy8vXG5cbiAgICAgIHNpZ25hdHVyZSA9IHRoaXMuZ2V0U2lnbmF0dXJlKClcblxuICAgICAgY29uc3Qgc2lnbmF0dXJlQiA9IHNpZ25hdHVyZSwgLy8vXG4gICAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICAgIGNvbXBhcmVzVG9TaWduYXR1cmUgPSBzaWduYXR1cmVBLmNvbXBhcmUoc2lnbmF0dXJlQiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9TaWduYXR1cmU7XG4gIH1cblxuICB1bmlmeVN0ZXAoc3RlcCwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdGVwVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29udGV4dCA9IHN0ZXAuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3Qgc3RlcFN0cmluZyA9IHN0ZXAuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgYXhpb21TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uLi5gKTtcblxuICAgIGNvbnN0IHVuY29uZGl0aW9uYWwgPSB0aGlzLmlzVW5jb25kaXRpb25hbCgpO1xuXG4gICAgaWYgKCF1bmNvbmRpdGlvbmFsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmFibGUgdG8gdW5pZnkgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20gYmVjYXVzZSB0aGUgYXhpb20gaXMgbm90IHVuY29uZGl0aW9uYWwuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHN0ZXAuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzV2l0aERlZHVjdGlvbiA9IHRoaXMudW5pZnlTdGF0ZW1lbnRXaXRoRGVkdWN0aW9uKHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzV2l0aERlZHVjdGlvbikge1xuICAgICAgICBzdGVwVW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0ZXBVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGVwVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBheGlvbVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3VicHJvb2ZTdHJpbmcgPSBzdWJwcm9vZi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uLi5gKTtcblxuICAgIGNvbnN0IHVuY29uZGl0aW9uYWwgPSB0aGlzLmlzVW5jb25kaXRpb25hbCgpO1xuXG4gICAgaWYgKHVuY29uZGl0aW9uYWwpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFVuYWJsZSB0byB1bmlmeSB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tIGJlY2F1c2UgdGhlIGF4aW9tIGlzIHVuY29uZGl0aW9uYWwuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGxhc3RQcm9vZkFzc2VydGlvbiA9IHN1YnByb29mLmdldExhc3RQcm9vZkFzc2VydGlvbigpLFxuICAgICAgICAgICAgbGFzdFByb29mQXNzZXJ0aW9uVW5pZmllcyA9IHRoaXMudW5pZnlMYXN0UHJvb2ZBc3NlcnRpb24obGFzdFByb29mQXNzZXJ0aW9uLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKGxhc3RQcm9vZkFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25zID0gc3VicHJvb2YuZ2V0U3VwcG9zaXRpb25zKCksXG4gICAgICAgICAgICAgIHN1cHBvc2l0aW9uc1VuaWZ5ID0gdGhpcy51bmlmeVN1cHBvc2l0aW9ucyhzdXBwb3NpdGlvbnMsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdXBwb3NpdGlvbnNVbmlmeSkge1xuICAgICAgICAgIHN1YnByb29mVW5pZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VicHJvb2ZVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5RGVkdWN0aW9uKGRlZHVjdGlvbiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBkZWR1Y3Rpb25VbmlmaWVzO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNEZWR1Y3Rpb24gPSBkZWR1Y3Rpb247ICAvLy9cblxuICAgIGRlZHVjdGlvbiA9IHRoaXMuZ2V0RGVkdWN0aW9uKCk7XG5cbiAgICBjb25zdCBnZW5lcmFsRGVkdWN0aW9uID0gZGVkdWN0aW9uOyAvLy9cblxuICAgIGRlZHVjdGlvbiA9IHNwZWNpZmljRGVkdWN0aW9uOyAgLy8vXG5cbiAgICBkZWR1Y3Rpb25VbmlmaWVzID0gZ2VuZXJhbERlZHVjdGlvbi51bmlmeURlZHVjdGlvbihkZWR1Y3Rpb24sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgcmV0dXJuIGRlZHVjdGlvblVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBpbmRleCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdXBwb3NpdGlvblVuaWZpZXM7XG5cbiAgICBjb25zdCBzcGVjaWZpY1N1cHBvc2l0aW9uID0gc3VwcG9zaXRpb247ICAvLy9cblxuICAgIHN1cHBvc2l0aW9uID0gdGhpcy5nZXRTdXBwb3NpdGlvbihpbmRleCk7XG5cbiAgICBjb25zdCBnZW5lcmFsU3VwcG9zaXRpb24gPSBzdXBwb3NpdGlvbjsgLy8vXG5cbiAgICBzdXBwb3NpdGlvbiA9IHNwZWNpZmljU3VwcG9zaXRpb247ICAvLy9cblxuICAgIHN1cHBvc2l0aW9uVW5pZmllcyA9IGdlbmVyYWxTdXBwb3NpdGlvbi51bmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvblVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN1cHBvc2l0aW9ucyhzdXBwb3NpdGlvbnMsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3VwcG9zaXRpb25zVW5pZnkgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNwZWNpZmljU3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zOyAgLy8vXG5cbiAgICBzdXBwb3NpdGlvbnMgPSB0aGlzLmdldFN1cHBvc2l0aW9ucygpO1xuXG4gICAgY29uc3QgZ2VuZXJhbFN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9ucywgLy8vXG4gICAgICAgICAgZ2VuZXJhbFN1cHBvc2l0aW9uc0xlbmd0aCA9IGdlbmVyYWxTdXBwb3NpdGlvbnMubGVuZ3RoLFxuICAgICAgICAgIHNwZWNpZmljU3VwcG9zaXRpb25zTGVuZ3RoID0gc3BlY2lmaWNTdXBwb3NpdGlvbnMubGVuZ3RoO1xuXG4gICAgaWYgKGdlbmVyYWxTdXBwb3NpdGlvbnNMZW5ndGggPT09IHNwZWNpZmljU3VwcG9zaXRpb25zTGVuZ3RoKSB7XG4gICAgICBzdXBwb3NpdGlvbnMgPSBzcGVjaWZpY1N1cHBvc2l0aW9uczsgIC8vL1xuXG4gICAgICBzdXBwb3NpdGlvbnNVbmlmeSA9IHN1cHBvc2l0aW9ucy5ldmVyeSgoc3VwcG9zaXRpb24sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uVW5pZmllcyA9IHRoaXMudW5pZnlTdXBwb3NpdGlvbihzdXBwb3NpdGlvbiwgaW5kZXgsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdXBwb3NpdGlvblVuaWZpZXMpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uc1VuaWZ5O1xuICB9XG5cbiAgdW5pZnlMYXN0UHJvb2ZBc3NlcnRpb24obGFzdFByb29mQXNzZXJ0aW9uLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IGxhc3RQcm9vZkFzc2VydGlvblVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBheGlvbVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbGFzdFByb29mQXNzZXJ0aW9uU3RyaW5nID0gbGFzdFByb29mQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2xhc3RQcm9vZkFzc2VydGlvblN0cmluZ30nIGxhc3QgcHJvb2YgYXNzZXJ0aW9uIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uLi5gLCBub2RlKVxuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gbGFzdFByb29mQXNzZXJ0aW9uLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXNXaXRoRGVkdWN0aW9uID0gdGhpcy51bmlmeVN0YXRlbWVudFdpdGhEZWR1Y3Rpb24oc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzV2l0aERlZHVjdGlvbikge1xuICAgICAgbGFzdFByb29mQXNzZXJ0aW9uVW5pZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGxhc3RQcm9vZkFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2xhc3RQcm9vZkFzc2VydGlvblN0cmluZ30nIGxhc3QgcHJvb2YgYXNzZXJ0aW9uIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uYCwgbm9kZSlcbiAgICB9XG5cbiAgICByZXR1cm4gbGFzdFByb29mQXNzZXJ0aW9uVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5VG9wTGV2ZWxBc3NlcnRpb24odG9wTGV2ZWxBc3NlcnRpb24sIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgdG9wTGV2ZWxBc3NlcnRpb25VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgYXhpb21TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uLi5gLCBub2RlKTtcblxuICAgIGNvbnN0IGh5cG90aGVzZXNDb3JyZWxhdGUgPSB0b3BMZXZlbEFzc2VydGlvbi5jb3JyZWxhdGVIeXBvdGhlc2VzKGNvbnRleHQpO1xuXG4gICAgaWYgKGh5cG90aGVzZXNDb3JyZWxhdGUpIHtcbiAgICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgIGNvbnN0IGRlZHVjdGlvbiA9IHRvcExldmVsQXNzZXJ0aW9uLmdldERlZHVjdGlvbigpLFxuICAgICAgICAgICAgZGVkdWN0aW9uVW5pZmllcyA9IHRoaXMudW5pZnlEZWR1Y3Rpb24oZGVkdWN0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKGRlZHVjdGlvblVuaWZpZXMpIHtcbiAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25zID0gdG9wTGV2ZWxBc3NlcnRpb24uZ2V0U3VwcG9zaXRpb25zKCksXG4gICAgICAgICAgICAgIHN1cHBvc2l0aW9uc1VuaWZ5ID0gdGhpcy51bmlmeVN1cHBvc2l0aW9ucyhzdXBwb3NpdGlvbnMsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIHRvcExldmVsQXNzZXJ0aW9uVW5pZmllcyA9IHN1cHBvc2l0aW9uc1VuaWZ5OyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodG9wTGV2ZWxBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24gd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS5gLCBub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxBc3NlcnRpb25VbmlmaWVzO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcztcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgYXhpb21TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS4uLmAsIG5vZGUpO1xuXG4gICAgY29uc3Qgc2lnbmF0dXJlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVNpZ25hdHVyZSgpO1xuXG4gICAgaWYgKHNpZ25hdHVyZVZlcmlmaWVzKSB7XG4gICAgICB2ZXJpZmllcyA9IHN1cGVyLnZlcmlmeSgpO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29uc3QgYXhpb20gPSB0aGlzOyAvLy9cblxuICAgICAgY29udGV4dC5hZGRBeGlvbShheGlvbSk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLmAsIG5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJBeGlvbVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7IHJldHVybiBUb3BMZXZlbEFzc2VydGlvbi5mcm9tSlNPTihBeGlvbSwganNvbiwgY29udGV4dCk7IH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIkF4aW9tIiwiaXNTYXRpc2ZpYWJsZSIsInNpZ25hdHVyZSIsImdldFNpZ25hdHVyZSIsInNhdGlzZmlhYmxlIiwidmVyaWZ5U2lnbmF0dXJlIiwic2lnbmF0dXJlVmVyaWZpZXMiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsInZlcmlmeSIsImNvbXBhcmVTaWduYXR1cmUiLCJzdWJzdGl0dXRpb25zIiwiY29tcGFyZXNUb1NpZ25hdHVyZSIsInNpZ25hdHVyZUEiLCJzaWduYXR1cmVCIiwic3BlY2lmaWNDb250ZXh0IiwiZ2VuZXJhbENvbnRleHQiLCJjb21wYXJlIiwidW5pZnlTdGVwIiwic3RlcCIsInN0ZXBVbmlmaWVzIiwic3RlcFN0cmluZyIsImdldFN0cmluZyIsImF4aW9tU3RyaW5nIiwidHJhY2UiLCJ1bmNvbmRpdGlvbmFsIiwiaXNVbmNvbmRpdGlvbmFsIiwic3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50Iiwic3RhdGVtZW50VW5pZmllc1dpdGhEZWR1Y3Rpb24iLCJ1bmlmeVN0YXRlbWVudFdpdGhEZWR1Y3Rpb24iLCJkZWJ1ZyIsInVuaWZ5U3VicHJvb2YiLCJzdWJwcm9vZiIsInN1YnByb29mVW5pZmllcyIsInN1YnByb29mU3RyaW5nIiwibGFzdFByb29mQXNzZXJ0aW9uIiwiZ2V0TGFzdFByb29mQXNzZXJ0aW9uIiwibGFzdFByb29mQXNzZXJ0aW9uVW5pZmllcyIsInVuaWZ5TGFzdFByb29mQXNzZXJ0aW9uIiwic3VwcG9zaXRpb25zIiwiZ2V0U3VwcG9zaXRpb25zIiwic3VwcG9zaXRpb25zVW5pZnkiLCJ1bmlmeVN1cHBvc2l0aW9ucyIsInVuaWZ5RGVkdWN0aW9uIiwiZGVkdWN0aW9uIiwiZGVkdWN0aW9uVW5pZmllcyIsInNwZWNpZmljRGVkdWN0aW9uIiwiZ2V0RGVkdWN0aW9uIiwiZ2VuZXJhbERlZHVjdGlvbiIsInVuaWZ5U3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvbiIsImluZGV4Iiwic3VwcG9zaXRpb25VbmlmaWVzIiwic3BlY2lmaWNTdXBwb3NpdGlvbiIsImdldFN1cHBvc2l0aW9uIiwiZ2VuZXJhbFN1cHBvc2l0aW9uIiwic3BlY2lmaWNTdXBwb3NpdGlvbnMiLCJnZW5lcmFsU3VwcG9zaXRpb25zIiwiZ2VuZXJhbFN1cHBvc2l0aW9uc0xlbmd0aCIsImxlbmd0aCIsInNwZWNpZmljU3VwcG9zaXRpb25zTGVuZ3RoIiwiZXZlcnkiLCJub2RlIiwiZ2V0Tm9kZSIsImxhc3RQcm9vZkFzc2VydGlvblN0cmluZyIsInVuaWZ5VG9wTGV2ZWxBc3NlcnRpb24iLCJ0b3BMZXZlbEFzc2VydGlvbiIsInRvcExldmVsQXNzZXJ0aW9uVW5pZmllcyIsInRvcExldmVsQXNzZXJ0aW9uU3RyaW5nIiwiaHlwb3RoZXNlc0NvcnJlbGF0ZSIsImNvcnJlbGF0ZUh5cG90aGVzZXMiLCJ2ZXJpZmllcyIsImF4aW9tIiwiYWRkQXhpb20iLCJmcm9tSlNPTiIsImpzb24iLCJUb3BMZXZlbEFzc2VydGlvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7O3dFQUorQjt3QkFFUjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFdkIsV0FBZUEsSUFBQUEsZ0JBQU0sMEJBQUM7O2FBQU1DO2dDQUFBQTtRQUFOLE9BQUEs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