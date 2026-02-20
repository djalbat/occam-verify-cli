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
var _assign = /*#__PURE__*/ _interop_require_default(require("../process/assign"));
var _elements = require("../elements");
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
var _Hypothesis;
var _default = (0, _elements.define)((_Hypothesis = /*#__PURE__*/ function(Element) {
    _inherits(Hypothesis, Element);
    function Hypothesis(context, string, node, statement) {
        _class_call_check(this, Hypothesis);
        var _this;
        _this = _call_super(this, Hypothesis, [
            context,
            string,
            node
        ]);
        _this.statement = statement;
        return _this;
    }
    _create_class(Hypothesis, [
        {
            key: "getStatement",
            value: function getStatement() {
                return this.statement;
            }
        },
        {
            key: "getHypothesisNode",
            value: function getHypothesisNode() {
                var node = this.getNode(), hypothesisNode = node; ///
                return hypothesisNode;
            }
        },
        {
            key: "verify",
            value: function verify(context) {
                return _async_to_generator(function() {
                    var verifies, hypothesisString, stated, assignments, statementValidates, subproofOrProofAssertion;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                verifies = false;
                                return [
                                    4,
                                    this.break(context)
                                ];
                            case 1:
                                _state.sent();
                                hypothesisString = this.getString(); ///
                                context.trace("Verifying the '".concat(hypothesisString, "' hypothesis..."));
                                if (false) {
                                ///
                                } else if (this.statement !== null) {
                                    stated = true, assignments = [], statementValidates = this.statement.validate(assignments, stated, context);
                                    if (statementValidates) {
                                        (0, _assign.default)(assignments, context);
                                        subproofOrProofAssertion = this; ///
                                        context.addSubproofOrProofAssertion(subproofOrProofAssertion);
                                        verifies = true;
                                    }
                                } else {
                                    context.debug("Unable to verify the '".concat(hypothesisString, "' hypothesis because it is nonsense."));
                                }
                                if (verifies) {
                                    context.debug("...verified the '".concat(hypothesisString, "' hypothesis."));
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
            key: "compareProofAssertion",
            value: function compareProofAssertion(proofAssertion, context) {
                var comparesToProofAssertion = false;
                var hypothesisString = this.getString(), proofAssertionString = proofAssertion.getString();
                context.trace("Is the '".concat(hypothesisString, "' hypothesis equal to the '").concat(proofAssertionString, "' proof assertion..."));
                var proofAssertionStatement = proofAssertion.getStatement(), statementEqualToStepStatement = this.statement.isEqualTo(proofAssertionStatement);
                if (statementEqualToStepStatement) {
                    comparesToProofAssertion = true;
                }
                if (comparesToProofAssertion) {
                    context.trace("...the '".concat(hypothesisString, "' hypothesis is equal to the '").concat(proofAssertionString, "' proof assertion."));
                }
                return comparesToProofAssertion;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var statementJSON = (0, _json.statementToStatementJSON)(this.statement), statement = statementJSON, json = {
                    statement: statement
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, context) {
                var statement = (0, _json.statementFromJSON)(json, context);
                var string;
                if (statement !== null) {
                    string = statement.getString();
                }
                var node = null, hypothesis = new Hypothesis(context, string, node, statement);
                return hypothesis;
            }
        }
    ]);
    return Hypothesis;
}(_wrap_native_super(_occamlanguages.Element)), _define_property(_Hypothesis, "name", "Hypothesis"), _Hypothesis));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2h5cG90aGVzaXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCBhc3NpZ25Bc3NpZ25tZW50cyBmcm9tIFwiLi4vcHJvY2Vzcy9hc3NpZ25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBzdGF0ZW1lbnRGcm9tSlNPTiwgc3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBIeXBvdGhlc2lzIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50KSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudDtcbiAgfVxuXG4gIGdldEh5cG90aGVzaXNOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBoeXBvdGhlc2lzTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiBoeXBvdGhlc2lzTm9kZTtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgY29uc3QgaHlwb3RoZXNpc1N0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtoeXBvdGhlc2lzU3RyaW5nfScgaHlwb3RoZXNpcy4uLmApO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZWQgPSB0cnVlLFxuICAgICAgICAgICAgYXNzaWdubWVudHMgPSBbXSxcbiAgICAgICAgICAgIHN0YXRlbWVudFZhbGlkYXRlcyA9IHRoaXMuc3RhdGVtZW50LnZhbGlkYXRlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgIGFzc2lnbkFzc2lnbm1lbnRzKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcblxuICAgICAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24gPSB0aGlzOyAgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZGRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24oc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKTtcblxuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFVuYWJsZSB0byB2ZXJpZnkgdGhlICcke2h5cG90aGVzaXNTdHJpbmd9JyBoeXBvdGhlc2lzIGJlY2F1c2UgaXQgaXMgbm9uc2Vuc2UuYCk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7aHlwb3RoZXNpc1N0cmluZ30nIGh5cG90aGVzaXMuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgY29tcGFyZVByb29mQXNzZXJ0aW9uKHByb29mQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbXBhcmVzVG9Qcm9vZkFzc2VydGlvbiA9IGZhbHNlO1xuXG4gICAgY29uc3QgaHlwb3RoZXNpc1N0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIHByb29mQXNzZXJ0aW9uU3RyaW5nID0gcHJvb2ZBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBJcyB0aGUgJyR7aHlwb3RoZXNpc1N0cmluZ30nIGh5cG90aGVzaXMgZXF1YWwgdG8gdGhlICcke3Byb29mQXNzZXJ0aW9uU3RyaW5nfScgcHJvb2YgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBwcm9vZkFzc2VydGlvblN0YXRlbWVudCA9IHByb29mQXNzZXJ0aW9uLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHN0YXRlbWVudEVxdWFsVG9TdGVwU3RhdGVtZW50ID0gdGhpcy5zdGF0ZW1lbnQuaXNFcXVhbFRvKHByb29mQXNzZXJ0aW9uU3RhdGVtZW50KTtcblxuICAgIGlmIChzdGF0ZW1lbnRFcXVhbFRvU3RlcFN0YXRlbWVudCkge1xuICAgICAgY29tcGFyZXNUb1Byb29mQXNzZXJ0aW9uID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoY29tcGFyZXNUb1Byb29mQXNzZXJ0aW9uKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi50aGUgJyR7aHlwb3RoZXNpc1N0cmluZ30nIGh5cG90aGVzaXMgaXMgZXF1YWwgdG8gdGhlICcke3Byb29mQXNzZXJ0aW9uU3RyaW5nfScgcHJvb2YgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvUHJvb2ZBc3NlcnRpb247XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50SlNPTiA9IHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTih0aGlzLnN0YXRlbWVudCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50SlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdGF0ZW1lbnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiSHlwb3RoZXNpc1wiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICBsZXQgc3RyaW5nO1xuXG4gICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgc3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGUgPSBudWxsLFxuICAgICAgICAgIGh5cG90aGVzaXMgPSBuZXcgSHlwb3RoZXNpcyhjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCk7XG5cbiAgICByZXR1cm4gaHlwb3RoZXNpcztcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiSHlwb3RoZXNpcyIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwic3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50IiwiZ2V0SHlwb3RoZXNpc05vZGUiLCJnZXROb2RlIiwiaHlwb3RoZXNpc05vZGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImh5cG90aGVzaXNTdHJpbmciLCJzdGF0ZWQiLCJhc3NpZ25tZW50cyIsInN0YXRlbWVudFZhbGlkYXRlcyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsImJyZWFrIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YWxpZGF0ZSIsImFzc2lnbkFzc2lnbm1lbnRzIiwiYWRkU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwiZGVidWciLCJjb21wYXJlUHJvb2ZBc3NlcnRpb24iLCJwcm9vZkFzc2VydGlvbiIsImNvbXBhcmVzVG9Qcm9vZkFzc2VydGlvbiIsInByb29mQXNzZXJ0aW9uU3RyaW5nIiwicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnQiLCJzdGF0ZW1lbnRFcXVhbFRvU3RlcFN0YXRlbWVudCIsImlzRXF1YWxUbyIsInRvSlNPTiIsInN0YXRlbWVudEpTT04iLCJzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJzdGF0ZW1lbnRGcm9tSlNPTiIsImh5cG90aGVzaXMiLCJFbGVtZW50IiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7OEJBUHdCOzZEQUVNO3dCQUVQO29CQUNxQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUU1RCxXQUFlQSxJQUFBQSxnQkFBTSwrQkFBQzs7YUFBTUMsV0FDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUztnQ0FEbEJKOztnQkFFeEIsa0JBRndCQTtZQUVsQkM7WUFBU0M7WUFBUUM7O1FBRXZCLE1BQUtDLFNBQVMsR0FBR0E7Ozs7O1lBR25CQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELFNBQVM7WUFDdkI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUgsT0FBTyxJQUFJLENBQUNJLE9BQU8sSUFDbkJDLGlCQUFpQkwsTUFBTyxHQUFHO2dCQUVqQyxPQUFPSztZQUNUOzs7WUFFTUMsS0FBQUE7bUJBQU4sU0FBTUEsT0FBT1IsT0FBTzs7d0JBQ2RTLFVBSUVDLGtCQU9FQyxRQUNBQyxhQUNBQyxvQkFLRUM7Ozs7Z0NBbEJOTCxXQUFXO2dDQUVmOztvQ0FBTSxJQUFJLENBQUNNLEtBQUssQ0FBQ2Y7OztnQ0FBakI7Z0NBRU1VLG1CQUFtQixJQUFJLENBQUNNLFNBQVMsSUFBSSxHQUFHO2dDQUU5Q2hCLFFBQVFpQixLQUFLLENBQUMsQUFBQyxrQkFBa0MsT0FBakJQLGtCQUFpQjtnQ0FFakQsSUFBSSxPQUFPO2dDQUNULEdBQUc7Z0NBQ0wsT0FBTyxJQUFJLElBQUksQ0FBQ1AsU0FBUyxLQUFLLE1BQU07b0NBQzVCUSxTQUFTLE1BQ1RDLGtCQUNBQyxxQkFBcUIsSUFBSSxDQUFDVixTQUFTLENBQUNlLFFBQVEsQ0FBQ04sYUFBYUQsUUFBUVg7b0NBRXhFLElBQUlhLG9CQUFvQjt3Q0FDdEJNLElBQUFBLGVBQWlCLEVBQUNQLGFBQWFaO3dDQUV6QmMsMkJBQTJCLElBQUksRUFBRyxHQUFHO3dDQUUzQ2QsUUFBUW9CLDJCQUEyQixDQUFDTjt3Q0FFcENMLFdBQVc7b0NBQ2I7Z0NBQ0YsT0FBTztvQ0FDTFQsUUFBUXFCLEtBQUssQ0FBQyxBQUFDLHlCQUF5QyxPQUFqQlgsa0JBQWlCO2dDQUMxRDtnQ0FFQSxJQUFJRCxVQUFVO29DQUNaVCxRQUFRcUIsS0FBSyxDQUFDLEFBQUMsb0JBQW9DLE9BQWpCWCxrQkFBaUI7Z0NBQ3JEO2dDQUVBOztvQ0FBT0Q7Ozs7Z0JBQ1Q7Ozs7WUFFQWEsS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQkMsY0FBYyxFQUFFdkIsT0FBTztnQkFDM0MsSUFBSXdCLDJCQUEyQjtnQkFFL0IsSUFBTWQsbUJBQW1CLElBQUksQ0FBQ00sU0FBUyxJQUNqQ1MsdUJBQXVCRixlQUFlUCxTQUFTO2dCQUVyRGhCLFFBQVFpQixLQUFLLENBQUMsQUFBQyxXQUF3RFEsT0FBOUNmLGtCQUFpQiwrQkFBa0QsT0FBckJlLHNCQUFxQjtnQkFFNUYsSUFBTUMsMEJBQTBCSCxlQUFlbkIsWUFBWSxJQUNyRHVCLGdDQUFnQyxJQUFJLENBQUN4QixTQUFTLENBQUN5QixTQUFTLENBQUNGO2dCQUUvRCxJQUFJQywrQkFBK0I7b0JBQ2pDSCwyQkFBMkI7Z0JBQzdCO2dCQUVBLElBQUlBLDBCQUEwQjtvQkFDNUJ4QixRQUFRaUIsS0FBSyxDQUFDLEFBQUMsV0FBMkRRLE9BQWpEZixrQkFBaUIsa0NBQXFELE9BQXJCZSxzQkFBcUI7Z0JBQ2pHO2dCQUVBLE9BQU9EO1lBQ1Q7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsZ0JBQWdCQyxJQUFBQSw4QkFBd0IsRUFBQyxJQUFJLENBQUM1QixTQUFTLEdBQ3ZEQSxZQUFZMkIsZUFDWkUsT0FBTztvQkFDTDdCLFdBQUFBO2dCQUNGO2dCQUVOLE9BQU82QjtZQUNUOzs7O1lBSU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNELElBQUksRUFBRWhDLE9BQU87Z0JBQzNCLElBQU1HLFlBQVkrQixJQUFBQSx1QkFBaUIsRUFBQ0YsTUFBTWhDO2dCQUUxQyxJQUFJQztnQkFFSixJQUFJRSxjQUFjLE1BQU07b0JBQ3RCRixTQUFTRSxVQUFVYSxTQUFTO2dCQUM5QjtnQkFFQSxJQUFNZCxPQUFPLE1BQ1BpQyxhQUFhLElBQUlwQyxXQUFXQyxTQUFTQyxRQUFRQyxNQUFNQztnQkFFekQsT0FBT2dDO1lBQ1Q7Ozs7cUJBckc2Q0MsdUJBQU8sSUFzRnBELDhCQUFPQyxRQUFPIn0=