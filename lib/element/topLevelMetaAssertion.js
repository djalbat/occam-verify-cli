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
                    context.debug("...verified the '".concat(topLevelMetaAssertionString, "' top level meta assertion's label."));
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
                                            var suppositionVerifies, subproofOrProofAssertion;
                                            return _ts_generator(this, function(_state) {
                                                switch(_state.label){
                                                    case 0:
                                                        return [
                                                            4,
                                                            supposition.verify(context)
                                                        ];
                                                    case 1:
                                                        suppositionVerifies = _state.sent();
                                                        if (suppositionVerifies) {
                                                            subproofOrProofAssertion = supposition; ////
                                                            context.assignAssignments();
                                                            context.addSubproofOrProofAssertion(subproofOrProofAssertion);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3RvcExldmVsTWV0YUFzc2VydGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgYXN5bmNTY29wZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgbGFiZWxGcm9tSlNPTixcbiAgICAgICAgIGxhYmVsVG9MYWJlbEpTT04sXG4gICAgICAgICBkZWR1Y3Rpb25Gcm9tSlNPTixcbiAgICAgICAgIHN1cHBvc2l0aW9uc0Zyb21KU09OLFxuICAgICAgICAgc3Vic3RpdHV0aW9uc0Zyb21KU09OLFxuICAgICAgICAgZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OLFxuICAgICAgICAgc3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OLFxuICAgICAgICAgc3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGFiZWwsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc3Vic3RpdHV0aW9ucykge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLmxhYmVsID0gbGFiZWw7XG4gICAgdGhpcy5zdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnM7XG4gICAgdGhpcy5kZWR1Y3Rpb24gPSBkZWR1Y3Rpb247XG4gICAgdGhpcy5wcm9vZiA9IHByb29mO1xuICAgIHRoaXMuc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBnZXRMYWJlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbDtcbiAgfVxuXG4gIGdldFN1cHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBwb3NpdGlvbnM7XG4gIH1cblxuICBnZXREZWR1Y3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVkdWN0aW9uO1xuICB9XG5cbiAgZ2V0UHJvb2YoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvb2Y7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7IHJldHVybiB0aGlzLmRlZHVjdGlvbi5nZXRTdGF0ZW1lbnQoKTsgfVxuXG4gIGNvbXBhcmVSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmdldExhYmVsKCksXG4gICAgICAgICAgbGFiZWxDb21wYXJlc1RvUmVmZmVyZW5jZSA9IGxhYmVsLmNvbXBhcmVSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICBjb21wYXJlc1RvUmVmZXJlbmNlID0gbGFiZWxDb21wYXJlc1RvUmVmZmVyZW5jZTsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9SZWZlcmVuY2U7XG4gIH1cblxuICB2ZXJpZnlMYWJlbCgpIHtcbiAgICBsZXQgbGFiZWxWZXJpZmllcztcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmaWVzaW5nIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YSBhc3NlcnRpb24ncyBsYWJlbC4uLmApO1xuXG4gICAgY29uc3QgbmFtZU9ubHkgPSB0cnVlO1xuXG4gICAgbGFiZWxWZXJpZmllcyA9IHRoaXMubGFiZWwudmVyaWZ5KG5hbWVPbmx5KTtcblxuICAgIGlmIChsYWJlbFZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEgYXNzZXJ0aW9uJ3MgbGFiZWwuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVsVmVyaWZpZXM7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhIGFzc2VydGlvbi4uLmApO1xuXG4gICAgYXdhaXQgYXN5bmNTY29wZShhc3luYyAoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgbGFiZWxWZXJpZmllcyA9IHRoaXMudmVyaWZ5TGFiZWwoKTtcblxuICAgICAgaWYgKGxhYmVsVmVyaWZpZXMpIHtcbiAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25zVmVyaWZ5ID0gYXdhaXQgdGhpcy52ZXJpZnlTdXBwb3NpdGlvbnMoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1cHBvc2l0aW9uc1ZlcmlmeSkge1xuICAgICAgICAgIGNvbnN0IGRlZHVjdGlvblZlcmlmaWVzID0gYXdhaXQgdGhpcy52ZXJpZnlEZWR1Y3Rpb24oY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoZGVkdWN0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb29mVmVyaWZpZXMgPSBhd2FpdCB0aGlzLnZlcmlmeVByb29mKGNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAocHJvb2ZWZXJpZmllcykge1xuICAgICAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YSBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5UHJvb2YoY29udGV4dCkge1xuICAgIGxldCBwcm9vZlZlcmlmaWVzO1xuXG4gICAgaWYgKHRoaXMucHJvb2YgPT09IG51bGwpIHtcbiAgICAgIHByb29mVmVyaWZpZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIG1ldGEgbGV2ZWwgYXNzZXJ0aW9uJ3MgcHJvb2YuLi5gKTtcblxuICAgICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5kZWR1Y3Rpb24uZ2V0U3RhdGVtZW50KCk7XG5cbiAgICAgIHByb29mVmVyaWZpZXMgPSB0aGlzLnByb29mLnZlcmlmeShzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAocHJvb2ZWZXJpZmllcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIG1ldGEgbGV2ZWwgYXNzZXJ0aW9uJ3MgcHJvb2YuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb29mVmVyaWZpZXM7XG4gIH1cblxuICBhc3luYyB2ZXJpZnlEZWR1Y3Rpb24oY29udGV4dCkge1xuICAgIGxldCBkZWR1Y3Rpb25WZXJpZmllcztcblxuICAgIGNvbnN0IHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YSBhc3NlcnRpb24ncyBkZWR1Y3Rpb24uLi5gKTtcblxuICAgIGRlZHVjdGlvblZlcmlmaWVzID0gYXdhaXQgdGhpcy5kZWR1Y3Rpb24udmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgaWYgKGRlZHVjdGlvblZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEgYXNzZXJ0aW9uJ3MgZGVkdWN0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBkZWR1Y3Rpb25WZXJpZmllcztcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeVN1cHBvc2l0aW9ucyhjb250ZXh0KSB7XG4gICAgbGV0IHN1cHBvc2l0aW9uc1ZlcmlmeTtcblxuICAgIGNvbnN0IHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEgYXNzZXJ0aW9uJ3Mgc3VwcG9zaXRpb25zLi4uYCk7XG5cbiAgICBzdXBwb3NpdGlvbnNWZXJpZnkgPSBhd2FpdCBhc3luY0ZvcndhcmRzRXZlcnkodGhpcy5zdXBwb3NpdGlvbnMsIGFzeW5jIChzdXBwb3NpdGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3VwcG9zaXRpb25WZXJpZmllcyA9IGF3YWl0IHN1cHBvc2l0aW9uLnZlcmlmeShjb250ZXh0KVxuXG4gICAgICBpZiAoc3VwcG9zaXRpb25WZXJpZmllcykge1xuICAgICAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24gPSBzdXBwb3NpdGlvbjsgIC8vLy9cblxuICAgICAgICBjb250ZXh0LmFzc2lnbkFzc2lnbm1lbnRzKCk7XG5cbiAgICAgICAgY29udGV4dC5hZGRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24oc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChzdXBwb3NpdGlvbnNWZXJpZnkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YSBhc3NlcnRpb24ncyBzdXBwb3NpdGlvbnMuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uc1ZlcmlmeTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBsYWJlbEpTT04gPSBsYWJlbFRvTGFiZWxKU09OKHRoaXMubGFiZWwpLFxuICAgICAgICAgIGRlZHVjdGlvbkpTT04gPSBkZWR1Y3Rpb25Ub0RlZHVjdGlvbkpTT04odGhpcy5kZWR1Y3Rpb24pLFxuICAgICAgICAgIHN1cHBvc2l0aW9uc0pTT04gPSBzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04odGhpcy5zdXBwb3NpdGlvbnMpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnNKU09OID0gc3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04odGhpcy5zdWJzdGl0dXRpb25zKSxcbiAgICAgICAgICBsYWJlbCA9IGxhYmVsSlNPTiwgIC8vL1xuICAgICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkpTT04sICAvLy9cbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNKU09OLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnNKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGxhYmVsLFxuICAgICAgICAgICAgZGVkdWN0aW9uLFxuICAgICAgICAgICAgc3VwcG9zaXRpb25zLFxuICAgICAgICAgICAgc3Vic3RpdHV0aW9uc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihDbGFzcywganNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IGxhYmVsID0gbGFiZWxGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25Gcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9uc0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIHByb29mID0gbnVsbCxcbiAgICAgICAgICBzdHJpbmcgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxBU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVsLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiksXG4gICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uID0gbmV3IENsYXNzKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGFiZWwsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uO1xuICB9XG59XG4iXSwibmFtZXMiOlsiVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsYWJlbCIsInN1cHBvc2l0aW9ucyIsImRlZHVjdGlvbiIsInByb29mIiwic3Vic3RpdHV0aW9ucyIsImdldExhYmVsIiwiZ2V0U3VwcG9zaXRpb25zIiwiZ2V0RGVkdWN0aW9uIiwiZ2V0UHJvb2YiLCJnZXRTdWJzdGl0dXRpb25zIiwiZ2V0U3RhdGVtZW50IiwiY29tcGFyZVJlZmVyZW5jZSIsInJlZmVyZW5jZSIsImxhYmVsQ29tcGFyZXNUb1JlZmZlcmVuY2UiLCJjb21wYXJlc1RvUmVmZXJlbmNlIiwidmVyaWZ5TGFiZWwiLCJsYWJlbFZlcmlmaWVzIiwiZ2V0Q29udGV4dCIsInRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwibmFtZU9ubHkiLCJ2ZXJpZnkiLCJkZWJ1ZyIsInZlcmlmaWVzIiwiYXN5bmNTY29wZSIsInN1cHBvc2l0aW9uc1ZlcmlmeSIsImRlZHVjdGlvblZlcmlmaWVzIiwicHJvb2ZWZXJpZmllcyIsInZlcmlmeVN1cHBvc2l0aW9ucyIsInZlcmlmeURlZHVjdGlvbiIsInZlcmlmeVByb29mIiwic3RhdGVtZW50IiwiYXN5bmNGb3J3YXJkc0V2ZXJ5Iiwic3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvblZlcmlmaWVzIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwiYXNzaWduQXNzaWdubWVudHMiLCJhZGRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJ0b0pTT04iLCJsYWJlbEpTT04iLCJsYWJlbFRvTGFiZWxKU09OIiwiZGVkdWN0aW9uSlNPTiIsImRlZHVjdGlvblRvRGVkdWN0aW9uSlNPTiIsInN1cHBvc2l0aW9uc0pTT04iLCJzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04iLCJzdWJzdGl0dXRpb25zSlNPTiIsInN1YnN0aXR1dGlvbnNUb1N1YnN0aXR1dGlvbnNKU09OIiwianNvbiIsImZyb21KU09OIiwiQ2xhc3MiLCJsYWJlbEZyb21KU09OIiwiZGVkdWN0aW9uRnJvbUpTT04iLCJzdXBwb3NpdGlvbnNGcm9tSlNPTiIsInN1YnN0aXR1dGlvbnNGcm9tSlNPTiIsInRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ0Zyb21MYWJlbEFTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24iLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb24iLCJFbGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWNxQkE7Ozs4QkFaRzt1QkFFRztvQkFRc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsQyxJQUFBLEFBQU1BLHNDQUFOO2NBQU1BO2FBQUFBLHNCQUNQQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLFlBQVksRUFBRUMsU0FBUyxFQUFFQyxLQUFLLEVBQUVDLGFBQWE7Z0NBRHBFUjs7Z0JBRWpCLGtCQUZpQkE7WUFFWEM7WUFBU0M7WUFBUUM7O1FBRXZCLE1BQUtDLEtBQUssR0FBR0E7UUFDYixNQUFLQyxZQUFZLEdBQUdBO1FBQ3BCLE1BQUtDLFNBQVMsR0FBR0E7UUFDakIsTUFBS0MsS0FBSyxHQUFHQTtRQUNiLE1BQUtDLGFBQWEsR0FBR0E7OztrQkFSSlI7O1lBV25CUyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLEtBQUs7WUFDbkI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLFlBQVk7WUFDMUI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLFNBQVM7WUFDdkI7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNMLEtBQUs7WUFDbkI7OztZQUVBTSxLQUFBQTttQkFB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