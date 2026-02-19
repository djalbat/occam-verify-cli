"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TopLevelMetaAssertion;
    }
});
var _occamlanguages = require("occam-languages");
var _assign = /*#__PURE__*/ _interop_require_default(require("../process/assign"));
var _context = require("../utilities/context");
var _json = require("../utilities/json");
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
var TopLevelMetaAssertion = /*#__PURE__*/ function(Element) {
    _inherits(TopLevelMetaAssertion, Element);
    function TopLevelMetaAssertion(context, string, node, label, suppositions, deduction, proof, substitutions) {
        _class_call_check(this, TopLevelMetaAssertion);
        var _this;
        _this = _call_super(this, TopLevelMetaAssertion, [
            context,
            string,
            node
        ]);
        _this.label = label;
        _this.suppositions = suppositions;
        _this.deduction = deduction;
        _this.proof = proof;
        _this.substitutions = substitutions;
        return _this;
    }
    _create_class(TopLevelMetaAssertion, [
        {
            key: "getLabel",
            value: function getLabel() {
                return this.label;
            }
        },
        {
            key: "getSuppositions",
            value: function getSuppositions() {
                return this.suppositions;
            }
        },
        {
            key: "getDeduction",
            value: function getDeduction() {
                return this.deduction;
            }
        },
        {
            key: "getProof",
            value: function getProof() {
                return this.proof;
            }
        },
        {
            key: "getSubstitutions",
            value: function getSubstitutions() {
                return this.substitutions;
            }
        },
        {
            key: "getStatement",
            value: function getStatement() {
                return this.deduction.getStatement();
            }
        },
        {
            key: "compareReference",
            value: function compareReference(reference) {
                var label = this.getLabel(), labelComparesToRefference = label.compareReference(reference), comparesToReference = labelComparesToRefference; ///
                return comparesToReference;
            }
        },
        {
            key: "verifyLabel",
            value: function verifyLabel() {
                var labelVerifies;
                var context = this.getContext(), topLevelMetaAssertionString = this.getString(); ///
                context.trace("Verifiesing the '".concat(topLevelMetaAssertionString, "' top level meta assertion's label..."));
                var nameOnly = true;
                labelVerifies = this.label.verify(nameOnly);
                if (labelVerifies) {
                    context.trace("...verified the '".concat(topLevelMetaAssertionString, "' top level meta assertion's label."));
                }
                return labelVerifies;
            }
        },
        {
            key: "verify",
            value: function verify() {
                return _async_to_generator(function() {
                    var _this, verifies, context, topLevelMetaAssertionString;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this = this;
                                verifies = false;
                                context = this.getContext(), topLevelMetaAssertionString = this.getString(); ///
                                context.trace("Verifying the '".concat(topLevelMetaAssertionString, "' top level meta assertion..."));
                                return [
                                    4,
                                    (0, _context.asyncScope)(function(context) {
                                        return _async_to_generator(function() {
                                            var labelVerifies, suppositionsVerify, deductionVerifies, proofVerifies;
                                            return _ts_generator(this, function(_state) {
                                                switch(_state.label){
                                                    case 0:
                                                        labelVerifies = this.verifyLabel();
                                                        if (!labelVerifies) return [
                                                            3,
                                                            4
                                                        ];
                                                        return [
                                                            4,
                                                            this.verifySuppositions(context)
                                                        ];
                                                    case 1:
                                                        suppositionsVerify = _state.sent();
                                                        if (!suppositionsVerify) return [
                                                            3,
                                                            4
                                                        ];
                                                        return [
                                                            4,
                                                            this.verifyDeduction(context)
                                                        ];
                                                    case 2:
                                                        deductionVerifies = _state.sent();
                                                        if (!deductionVerifies) return [
                                                            3,
                                                            4
                                                        ];
                                                        return [
                                                            4,
                                                            this.verifyProof(context)
                                                        ];
                                                    case 3:
                                                        proofVerifies = _state.sent();
                                                        if (proofVerifies) {
                                                            verifies = true;
                                                        }
                                                        _state.label = 4;
                                                    case 4:
                                                        return [
                                                            2
                                                        ];
                                                }
                                            });
                                        }).call(_this);
                                    }, context)
                                ];
                            case 1:
                                _state.sent();
                                if (verifies) {
                                    context.debug("...verified the '".concat(topLevelMetaAssertionString, "' top level meta assertion."));
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
            key: "verifyProof",
            value: function verifyProof(context) {
                return _async_to_generator(function() {
                    var proofVerifies, topLevelMetaAssertionString, statement;
                    return _ts_generator(this, function(_state) {
                        if (this.proof === null) {
                            proofVerifies = true;
                        } else {
                            topLevelMetaAssertionString = this.getString(); ///
                            context.trace("Verifying the '".concat(topLevelMetaAssertionString, "' top meta level assertion's proof..."));
                            statement = this.deduction.getStatement();
                            proofVerifies = this.proof.verify(statement, context);
                            if (proofVerifies) {
                                context.debug("...verified the '".concat(topLevelMetaAssertionString, "' top meta level assertion's proof."));
                            }
                        }
                        return [
                            2,
                            proofVerifies
                        ];
                    });
                }).call(this);
            }
        },
        {
            key: "verifyDeduction",
            value: function verifyDeduction(context) {
                return _async_to_generator(function() {
                    var deductionVerifies, topLevelMetaAssertionString;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                topLevelMetaAssertionString = this.getString(); ///
                                context.trace("Verifying the '".concat(topLevelMetaAssertionString, "' top level meta assertion's deduction..."));
                                return [
                                    4,
                                    this.deduction.verify(context)
                                ];
                            case 1:
                                deductionVerifies = _state.sent();
                                if (deductionVerifies) {
                                    context.debug("...verified the '".concat(topLevelMetaAssertionString, "' top level meta assertion's deduction."));
                                }
                                return [
                                    2,
                                    deductionVerifies
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "verifySuppositions",
            value: function verifySuppositions(context) {
                return _async_to_generator(function() {
                    var suppositionsVerify, topLevelMetaAssertionString;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                topLevelMetaAssertionString = this.getString(); ///
                                context.trace("Verifying the '".concat(topLevelMetaAssertionString, "' top level meta assertion's suppositions..."));
                                return [
                                    4,
                                    asyncForwardsEvery(this.suppositions, function(supposition) {
                                        return _async_to_generator(function() {
                                            var assignments, suppositionVerifies, assignmentsAssigned, subproofOrProofAssertion;
                                            return _ts_generator(this, function(_state) {
                                                switch(_state.label){
                                                    case 0:
                                                        assignments = [];
                                                        return [
                                                            4,
                                                            supposition.verify(assignments, context)
                                                        ];
                                                    case 1:
                                                        suppositionVerifies = _state.sent();
                                                        if (suppositionVerifies) {
                                                            assignmentsAssigned = (0, _assign.default)(assignments);
                                                            if (assignmentsAssigned) {
                                                                subproofOrProofAssertion = supposition; ////
                                                                context.addSubproofOrProofAssertion(subproofOrProofAssertion);
                                                                return [
                                                                    2,
                                                                    true
                                                                ];
                                                            }
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
                                suppositionsVerify = _state.sent();
                                if (suppositionsVerify) {
                                    context.debug("...verified the '".concat(topLevelMetaAssertionString, "' top level meta assertion's suppositions."));
                                }
                                return [
                                    2,
                                    suppositionsVerify
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var labelJSON = (0, _json.labelToLabelJSON)(this.label), deductionJSON = (0, _json.deductionToDeductionJSON)(this.deduction), suppositionsJSON = (0, _json.suppositionsToSuppositionsJSON)(this.suppositions), substitutionsJSON = (0, _json.substitutionsToSubstitutionsJSON)(this.substitutions), label = labelJSON, deduction = deductionJSON, suppositions = suppositionsJSON, substitutions = substitutionsJSON, json = {
                    label: label,
                    deduction: deduction,
                    suppositions: suppositions,
                    substitutions: substitutions
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(Class, json, context) {
                var label = (0, _json.labelFromJSON)(json, context), deduction = (0, _json.deductionFromJSON)(json, context), suppositions = (0, _json.suppositionsFromJSON)(json, context), substitutions = (0, _json.substitutionsFromJSON)(json, context), node = null, proof = null, string = topLevelMetaAssertionStringFromLabelASuppositionsAndDeduction(label, suppositions, deduction), topLevelMetaAssertion = new Class(context, string, node, label, suppositions, deduction, proof, substitutions);
                return topLevelMetaAssertion;
            }
        }
    ]);
    return TopLevelMetaAssertion;
}(_wrap_native_super(_occamlanguages.Element));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3RvcExldmVsTWV0YUFzc2VydGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IGFzc2lnbkFzc2lnbm1lbnRzIGZyb20gXCIuLi9wcm9jZXNzL2Fzc2lnblwiO1xuXG5pbXBvcnQgeyBhc3luY1Njb3BlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBsYWJlbEZyb21KU09OLFxuICAgICAgICAgbGFiZWxUb0xhYmVsSlNPTixcbiAgICAgICAgIGRlZHVjdGlvbkZyb21KU09OLFxuICAgICAgICAgc3VwcG9zaXRpb25zRnJvbUpTT04sXG4gICAgICAgICBzdWJzdGl0dXRpb25zRnJvbUpTT04sXG4gICAgICAgICBkZWR1Y3Rpb25Ub0RlZHVjdGlvbkpTT04sXG4gICAgICAgICBzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04sXG4gICAgICAgICBzdWJzdGl0dXRpb25zVG9TdWJzdGl0dXRpb25zSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3BMZXZlbE1ldGFBc3NlcnRpb24gZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbCwgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBzdWJzdGl0dXRpb25zKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMubGFiZWwgPSBsYWJlbDtcbiAgICB0aGlzLnN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9ucztcbiAgICB0aGlzLmRlZHVjdGlvbiA9IGRlZHVjdGlvbjtcbiAgICB0aGlzLnByb29mID0gcHJvb2Y7XG4gICAgdGhpcy5zdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGdldExhYmVsKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVsO1xuICB9XG5cbiAgZ2V0U3VwcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnN1cHBvc2l0aW9ucztcbiAgfVxuXG4gIGdldERlZHVjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kZWR1Y3Rpb247XG4gIH1cblxuICBnZXRQcm9vZigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9vZjtcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHsgcmV0dXJuIHRoaXMuZGVkdWN0aW9uLmdldFN0YXRlbWVudCgpOyB9XG5cbiAgY29tcGFyZVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuZ2V0TGFiZWwoKSxcbiAgICAgICAgICBsYWJlbENvbXBhcmVzVG9SZWZmZXJlbmNlID0gbGFiZWwuY29tcGFyZVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIGNvbXBhcmVzVG9SZWZlcmVuY2UgPSBsYWJlbENvbXBhcmVzVG9SZWZmZXJlbmNlOyAgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1JlZmVyZW5jZTtcbiAgfVxuXG4gIHZlcmlmeUxhYmVsKCkge1xuICAgIGxldCBsYWJlbFZlcmlmaWVzO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZpZXNpbmcgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhIGFzc2VydGlvbidzIGxhYmVsLi4uYCk7XG5cbiAgICBjb25zdCBuYW1lT25seSA9IHRydWU7XG5cbiAgICBsYWJlbFZlcmlmaWVzID0gdGhpcy5sYWJlbC52ZXJpZnkobmFtZU9ubHkpO1xuXG4gICAgaWYgKGxhYmVsVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnZlcmlmaWVkIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YSBhc3NlcnRpb24ncyBsYWJlbC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxWZXJpZmllcztcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBhd2FpdCBhc3luY1Njb3BlKGFzeW5jIChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBsYWJlbFZlcmlmaWVzID0gdGhpcy52ZXJpZnlMYWJlbCgpO1xuXG4gICAgICBpZiAobGFiZWxWZXJpZmllcykge1xuICAgICAgICBjb25zdCBzdXBwb3NpdGlvbnNWZXJpZnkgPSBhd2FpdCB0aGlzLnZlcmlmeVN1cHBvc2l0aW9ucyhjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3VwcG9zaXRpb25zVmVyaWZ5KSB7XG4gICAgICAgICAgY29uc3QgZGVkdWN0aW9uVmVyaWZpZXMgPSBhd2FpdCB0aGlzLnZlcmlmeURlZHVjdGlvbihjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChkZWR1Y3Rpb25WZXJpZmllcykge1xuICAgICAgICAgICAgY29uc3QgcHJvb2ZWZXJpZmllcyA9IGF3YWl0IHRoaXMudmVyaWZ5UHJvb2YoY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChwcm9vZlZlcmlmaWVzKSB7XG4gICAgICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICBhc3luYyB2ZXJpZnlQcm9vZihjb250ZXh0KSB7XG4gICAgbGV0IHByb29mVmVyaWZpZXM7XG5cbiAgICBpZiAodGhpcy5wcm9vZiA9PT0gbnVsbCkge1xuICAgICAgcHJvb2ZWZXJpZmllcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbWV0YSBsZXZlbCBhc3NlcnRpb24ncyBwcm9vZi4uLmApO1xuXG4gICAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLmRlZHVjdGlvbi5nZXRTdGF0ZW1lbnQoKTtcblxuICAgICAgcHJvb2ZWZXJpZmllcyA9IHRoaXMucHJvb2YudmVyaWZ5KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChwcm9vZlZlcmlmaWVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbWV0YSBsZXZlbCBhc3NlcnRpb24ncyBwcm9vZi5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcHJvb2ZWZXJpZmllcztcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeURlZHVjdGlvbihjb250ZXh0KSB7XG4gICAgbGV0IGRlZHVjdGlvblZlcmlmaWVzO1xuXG4gICAgY29uc3QgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhIGFzc2VydGlvbidzIGRlZHVjdGlvbi4uLmApO1xuXG4gICAgZGVkdWN0aW9uVmVyaWZpZXMgPSBhd2FpdCB0aGlzLmRlZHVjdGlvbi52ZXJpZnkoY29udGV4dCk7XG5cbiAgICBpZiAoZGVkdWN0aW9uVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YSBhc3NlcnRpb24ncyBkZWR1Y3Rpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZHVjdGlvblZlcmlmaWVzO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5U3VwcG9zaXRpb25zKGNvbnRleHQpIHtcbiAgICBsZXQgc3VwcG9zaXRpb25zVmVyaWZ5O1xuXG4gICAgY29uc3QgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YSBhc3NlcnRpb24ncyBzdXBwb3NpdGlvbnMuLi5gKTtcblxuICAgIHN1cHBvc2l0aW9uc1ZlcmlmeSA9IGF3YWl0IGFzeW5jRm9yd2FyZHNFdmVyeSh0aGlzLnN1cHBvc2l0aW9ucywgYXN5bmMgKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgICBjb25zdCBhc3NpZ25tZW50cyA9IFtdLFxuICAgICAgICAgICAgc3VwcG9zaXRpb25WZXJpZmllcyA9IGF3YWl0IHN1cHBvc2l0aW9uLnZlcmlmeShhc3NpZ25tZW50cywgY29udGV4dClcblxuICAgICAgaWYgKHN1cHBvc2l0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgY29uc3QgYXNzaWdubWVudHNBc3NpZ25lZCA9IGFzc2lnbkFzc2lnbm1lbnRzKGFzc2lnbm1lbnRzKTtcblxuICAgICAgICBpZiAoYXNzaWdubWVudHNBc3NpZ25lZCkge1xuICAgICAgICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbiA9IHN1cHBvc2l0aW9uOyAgLy8vL1xuXG4gICAgICAgICAgY29udGV4dC5hZGRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24oc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoc3VwcG9zaXRpb25zVmVyaWZ5KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEgYXNzZXJ0aW9uJ3Mgc3VwcG9zaXRpb25zLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBwb3NpdGlvbnNWZXJpZnk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbGFiZWxKU09OID0gbGFiZWxUb0xhYmVsSlNPTih0aGlzLmxhYmVsKSxcbiAgICAgICAgICBkZWR1Y3Rpb25KU09OID0gZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OKHRoaXMuZGVkdWN0aW9uKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnNKU09OID0gc3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OKHRoaXMuc3VwcG9zaXRpb25zKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zSlNPTiA9IHN1YnN0aXR1dGlvbnNUb1N1YnN0aXR1dGlvbnNKU09OKHRoaXMuc3Vic3RpdHV0aW9ucyksXG4gICAgICAgICAgbGFiZWwgPSBsYWJlbEpTT04sICAvLy9cbiAgICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25KU09OLCAgLy8vXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zSlNPTiwgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBsYWJlbCxcbiAgICAgICAgICAgIGRlZHVjdGlvbixcbiAgICAgICAgICAgIHN1cHBvc2l0aW9ucyxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbnNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oQ2xhc3MsIGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBsYWJlbCA9IGxhYmVsRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICBwcm9vZiA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nRnJvbUxhYmVsQVN1cHBvc2l0aW9uc0FuZERlZHVjdGlvbihsYWJlbCwgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pLFxuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvbiA9IG5ldyBDbGFzcyhjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxhYmVsLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgcmV0dXJuIHRvcExldmVsTWV0YUFzc2VydGlvbjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlRvcExldmVsTWV0YUFzc2VydGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibGFiZWwiLCJzdXBwb3NpdGlvbnMiLCJkZWR1Y3Rpb24iLCJwcm9vZiIsInN1YnN0aXR1dGlvbnMiLCJnZXRMYWJlbCIsImdldFN1cHBvc2l0aW9ucyIsImdldERlZHVjdGlvbiIsImdldFByb29mIiwiZ2V0U3Vic3RpdHV0aW9ucyIsImdldFN0YXRlbWVudCIsImNvbXBhcmVSZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJsYWJlbENvbXBhcmVzVG9SZWZmZXJlbmNlIiwiY29tcGFyZXNUb1JlZmVyZW5jZSIsInZlcmlmeUxhYmVsIiwibGFiZWxWZXJpZmllcyIsImdldENvbnRleHQiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsIm5hbWVPbmx5IiwidmVyaWZ5IiwidmVyaWZpZXMiLCJhc3luY1Njb3BlIiwic3VwcG9zaXRpb25zVmVyaWZ5IiwiZGVkdWN0aW9uVmVyaWZpZXMiLCJwcm9vZlZlcmlmaWVzIiwidmVyaWZ5U3VwcG9zaXRpb25zIiwidmVyaWZ5RGVkdWN0aW9uIiwidmVyaWZ5UHJvb2YiLCJkZWJ1ZyIsInN0YXRlbWVudCIsImFzeW5jRm9yd2FyZHNFdmVyeSIsInN1cHBvc2l0aW9uIiwiYXNzaWdubWVudHMiLCJzdXBwb3NpdGlvblZlcmlmaWVzIiwiYXNzaWdubWVudHNBc3NpZ25lZCIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsImFzc2lnbkFzc2lnbm1lbnRzIiwiYWRkU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwidG9KU09OIiwibGFiZWxKU09OIiwibGFiZWxUb0xhYmVsSlNPTiIsImRlZHVjdGlvbkpTT04iLCJkZWR1Y3Rpb25Ub0RlZHVjdGlvbkpTT04iLCJzdXBwb3NpdGlvbnNKU09OIiwic3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OIiwic3Vic3RpdHV0aW9uc0pTT04iLCJzdWJzdGl0dXRpb25zVG9TdWJzdGl0dXRpb25zSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsIkNsYXNzIiwibGFiZWxGcm9tSlNPTiIsImRlZHVjdGlvbkZyb21KU09OIiwic3VwcG9zaXRpb25zRnJvbUpTT04iLCJzdWJzdGl0dXRpb25zRnJvbUpTT04iLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxBU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwiRWxlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFnQnFCQTs7OzhCQWRHOzZEQUVNO3VCQUVIO29CQVFzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEMsSUFBQSxBQUFNQSxzQ0FBTjtjQUFNQTthQUFBQSxzQkFDUEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxZQUFZLEVBQUVDLFNBQVMsRUFBRUMsS0FBSyxFQUFFQyxhQUFhO2dDQURwRVI7O2dCQUVqQixrQkFGaUJBO1lBRVhDO1lBQVNDO1lBQVFDOztRQUV2QixNQUFLQyxLQUFLLEdBQUdBO1FBQ2IsTUFBS0MsWUFBWSxHQUFHQTtRQUNwQixNQUFLQyxTQUFTLEdBQUdBO1FBQ2pCLE1BQUtDLEtBQUssR0FBR0E7UUFDYixNQUFLQyxhQUFhLEdBQUdBOzs7a0JBUkpSOztZQVduQlMsS0FBQUE7bUJBQUFBLFNBQUFB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