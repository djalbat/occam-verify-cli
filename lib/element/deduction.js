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
var _elements = require("../elements");
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
var _Deduction;
var _default = (0, _elements.define)((_Deduction = /*#__PURE__*/ function(Element) {
    _inherits(Deduction, Element);
    function Deduction(context, string, node, statement) {
        _class_call_check(this, Deduction);
        var _this;
        _this = _call_super(this, Deduction, [
            context,
            string,
            node
        ]);
        _this.statement = statement;
        return _this;
    }
    _create_class(Deduction, [
        {
            key: "getStatement",
            value: function getStatement() {
                return this.statement;
            }
        },
        {
            key: "getDeductionNode",
            value: function getDeductionNode() {
                var node = this.getNode(), deductionNode = node; ///
                return deductionNode;
            }
        },
        {
            key: "verify",
            value: function verify(context) {
                return _async_to_generator(function() {
                    var _this, verifies, deductionString;
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
                                deductionString = this.getString(); ///
                                context.trace("Verifying the '".concat(deductionString, "' deduction..."));
                                if (this.statement !== null) {
                                    (0, _context.attempt)(function(context) {
                                        var stated = true, assignments = null, statementValidates = _this.statement.validate(assignments, stated, context);
                                        if (statementValidates) {
                                            _this.setContext(context);
                                            verifies = true;
                                        }
                                    }, context);
                                } else {
                                    context.debug("Unable to verify the '".concat(deductionString, "' deduction because it is nonsense."));
                                }
                                if (verifies) {
                                    context.debug("...verified the '".concat(deductionString, "' deduction."));
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
            key: "unifyStatement",
            value: function unifyStatement(statement, substitutions, context) {
                var statementUnifies;
                var statementString = statement.getString(), deductionString = this.getString(); ///
                context.trace("Unifying the '".concat(statementString, "' statement with the '").concat(deductionString, "' deduction..."));
                var specificContext = context; ///
                context = this.getContext();
                var generalContext = context; ///
                context = specificContext; ///
                statementUnifies = this.statement.unifyStatement(statement, substitutions, generalContext, specificContext);
                if (statementUnifies) {
                    context.debug("...unified the '".concat(statementString, "' statement with the '").concat(deductionString, "' deduction."));
                }
                return statementUnifies;
            }
        },
        {
            key: "unifyDeduction",
            value: function unifyDeduction(deduction, substitutions, generalContext, specificContext) {
                var deductionUnifies = false;
                var context = specificContext, generalDeduction = this, specificDeduction = deduction, generalDeductionString = generalDeduction.getString(), specificDeductionString = specificDeduction.getString();
                context.trace("Unifying the '".concat(specificDeductionString, "' deduction with the '").concat(generalDeductionString, "' deduction..."));
                var statement = specificDeduction.getStatement(), statementUnifies = this.unifyStatement(statement, substitutions, generalContext, specificContext);
                if (statementUnifies) {
                    deductionUnifies = true;
                }
                if (deductionUnifies) {
                    context.debug("...unified the '".concat(specificDeductionString, "' deduction with the '").concat(generalDeductionString, "' deduction."));
                }
                return deductionUnifies;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var frames, terms;
                frames = this.context.getFrames();
                terms = this.context.getTerms();
                var statementJSON = (0, _json.statementToStatementJSON)(this.statement), framesJSON = (0, _json.framesToFramesJSON)(frames), termsJSON = (0, _json.termsToTermsJSON)(terms);
                frames = framesJSON; ///
                terms = termsJSON; ///
                var statement = statementJSON, json = {
                    statement: statement,
                    frames: frames,
                    terms: terms
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, context) {
                var statement = (0, _json.statementFromJSON)(json, context), string = statement.getString();
                var deduction = new Deduction(context, string, statement);
                return deduction;
            }
        }
    ]);
    return Deduction;
}(_wrap_native_super(_occamlanguages.Element)), _define_property(_Deduction, "name", "Deduction"), _Deduction));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2RlZHVjdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBhdHRlbXB0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBzdGF0ZW1lbnRGcm9tSlNPTiwgdGVybXNUb1Rlcm1zSlNPTiwgZnJhbWVzVG9GcmFtZXNKU09OLCBzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIERlZHVjdGlvbiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXREZWR1Y3Rpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBkZWR1Y3Rpb25Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gZGVkdWN0aW9uTm9kZTtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgY29uc3QgZGVkdWN0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtkZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24uLi5gKTtcblxuICAgIGlmICh0aGlzLnN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgYXR0ZW1wdCgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBzdGF0ZWQgPSB0cnVlLFxuICAgICAgICAgICAgICBhc3NpZ25tZW50cyA9IG51bGwsXG4gICAgICAgICAgICAgIHN0YXRlbWVudFZhbGlkYXRlcyA9IHRoaXMuc3RhdGVtZW50LnZhbGlkYXRlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgICB0aGlzLnNldENvbnRleHQoY29udGV4dCk7XG5cbiAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBVbmFibGUgdG8gdmVyaWZ5IHRoZSAnJHtkZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24gYmVjYXVzZSBpdCBpcyBub25zZW5zZS5gKTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtkZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZXM7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgZGVkdWN0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtkZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24uLi5gKTtcblxuICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgc3RhdGVtZW50VW5pZmllcyA9IHRoaXMuc3RhdGVtZW50LnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5RGVkdWN0aW9uKGRlZHVjdGlvbiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBkZWR1Y3Rpb25VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbERlZHVjdGlvbiA9IHRoaXMsICAvLy9cbiAgICAgICAgICBzcGVjaWZpY0RlZHVjdGlvbiA9IGRlZHVjdGlvbiwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxEZWR1Y3Rpb25TdHJpbmcgPSBnZW5lcmFsRGVkdWN0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHNwZWNpZmljRGVkdWN0aW9uU3RyaW5nID0gc3BlY2lmaWNEZWR1Y3Rpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNEZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24gd2l0aCB0aGUgJyR7Z2VuZXJhbERlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gc3BlY2lmaWNEZWR1Y3Rpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IHRoaXMudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICBkZWR1Y3Rpb25VbmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoZGVkdWN0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3BlY2lmaWNEZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24gd2l0aCB0aGUgJyR7Z2VuZXJhbERlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVkdWN0aW9uVW5pZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBsZXQgZnJhbWVzLFxuICAgICAgICB0ZXJtcztcblxuICAgIGZyYW1lcyA9IHRoaXMuY29udGV4dC5nZXRGcmFtZXMoKTtcblxuICAgIHRlcm1zID0gdGhpcy5jb250ZXh0LmdldFRlcm1zKCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRKU09OID0gc3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OKHRoaXMuc3RhdGVtZW50KSxcbiAgICAgICAgICBmcmFtZXNKU09OID0gZnJhbWVzVG9GcmFtZXNKU09OKGZyYW1lcyksXG4gICAgICAgICAgdGVybXNKU09OID0gdGVybXNUb1Rlcm1zSlNPTih0ZXJtcyk7XG5cbiAgICBmcmFtZXMgPSBmcmFtZXNKU09OOyAgLy8vXG5cbiAgICB0ZXJtcyA9IHRlcm1zSlNPTjsgIC8vL1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gc3RhdGVtZW50SlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdGF0ZW1lbnQsXG4gICAgICAgICAgICBmcmFtZXMsXG4gICAgICAgICAgICB0ZXJtc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJEZWR1Y3Rpb25cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnN0IGRlZHVjdGlvbiA9IG5ldyBEZWR1Y3Rpb24oY29udGV4dCwgc3RyaW5nLCBzdGF0ZW1lbnQpO1xuXG4gICAgcmV0dXJuIGRlZHVjdGlvbjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiRGVkdWN0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJzdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJnZXREZWR1Y3Rpb25Ob2RlIiwiZ2V0Tm9kZSIsImRlZHVjdGlvbk5vZGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImRlZHVjdGlvblN0cmluZyIsImJyZWFrIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJhdHRlbXB0Iiwic3RhdGVkIiwiYXNzaWdubWVudHMiLCJzdGF0ZW1lbnRWYWxpZGF0ZXMiLCJ2YWxpZGF0ZSIsInNldENvbnRleHQiLCJkZWJ1ZyIsInVuaWZ5U3RhdGVtZW50Iiwic3Vic3RpdHV0aW9ucyIsInN0YXRlbWVudFVuaWZpZXMiLCJzdGF0ZW1lbnRTdHJpbmciLCJzcGVjaWZpY0NvbnRleHQiLCJnZXRDb250ZXh0IiwiZ2VuZXJhbENvbnRleHQiLCJ1bmlmeURlZHVjdGlvbiIsImRlZHVjdGlvbiIsImRlZHVjdGlvblVuaWZpZXMiLCJnZW5lcmFsRGVkdWN0aW9uIiwic3BlY2lmaWNEZWR1Y3Rpb24iLCJnZW5lcmFsRGVkdWN0aW9uU3RyaW5nIiwic3BlY2lmaWNEZWR1Y3Rpb25TdHJpbmciLCJ0b0pTT04iLCJmcmFtZXMiLCJ0ZXJtcyIsImdldEZyYW1lcyIsImdldFRlcm1zIiwic3RhdGVtZW50SlNPTiIsInN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiIsImZyYW1lc0pTT04iLCJmcmFtZXNUb0ZyYW1lc0pTT04iLCJ0ZXJtc0pTT04iLCJ0ZXJtc1RvVGVybXNKU09OIiwianNvbiIsImZyb21KU09OIiwic3RhdGVtZW50RnJvbUpTT04iLCJFbGVtZW50IiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFBOzs7OEJBTndCO3dCQUVEO3VCQUNDO29CQUMwRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFbEcsV0FBZUEsSUFBQUEsZ0JBQU0sOEJBQUM7O2FBQU1DLFVBQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVM7Z0NBRGxCSjs7Z0JBRXhCLGtCQUZ3QkE7WUFFbEJDO1lBQVNDO1lBQVFDOztRQUV2QixNQUFLQyxTQUFTLEdBQUdBOzs7OztZQUduQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCxTQUFTO1lBQ3ZCOzs7WUFFQUUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElB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