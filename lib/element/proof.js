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
var _Proof;
var _default = (0, _elements.define)((_Proof = /*#__PURE__*/ function(Element) {
    _inherits(Proof, Element);
    function Proof(context, string, node, derivation) {
        _class_call_check(this, Proof);
        var _this;
        _this = _call_super(this, Proof, [
            context,
            string,
            node
        ]);
        _this.derivation = derivation;
        return _this;
    }
    _create_class(Proof, [
        {
            key: "getDerivation",
            value: function getDerivation() {
                return this.derivation;
            }
        },
        {
            key: "getLastProofAssertion",
            value: function getLastProofAssertion() {
                return this.derivation.getLastProofAssertion();
            }
        },
        {
            key: "getStatement",
            value: function getStatement() {
                var lastProofAssertion = this.getLastProofAssertion(), lastProofAssertionStatement = lastProofAssertion.getStatement(), statement = lastProofAssertionStatement; ///
                return statement;
            }
        },
        {
            key: "verify",
            value: function verify(statement, context) {
                return _async_to_generator(function() {
                    var _this, verifies;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this = this;
                                verifies = false;
                                return [
                                    4,
                                    (0, _context.asyncScope)(function(context) {
                                        return _async_to_generator(function() {
                                            var derivationVerifies, lastProofAssertion, proof, proofStatement, proofStatementEqualToStatement;
                                            return _ts_generator(this, function(_state) {
                                                switch(_state.label){
                                                    case 0:
                                                        return [
                                                            4,
                                                            this.derivation.verify(context)
                                                        ];
                                                    case 1:
                                                        derivationVerifies = _state.sent();
                                                        if (derivationVerifies) {
                                                            lastProofAssertion = context.getLastProofAssertion();
                                                            if (lastProofAssertion !== null) {
                                                                proof = this, proofStatement = proof.getStatement(), proofStatementEqualToStatement = proofStatement.isEqualTo(statement);
                                                                if (proofStatementEqualToStatement) {
                                                                    verifies = true;
                                                                }
                                                            }
                                                        }
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
                                return [
                                    2,
                                    verifies
                                ];
                        }
                    });
                }).call(this);
            }
        }
    ]);
    return Proof;
}(_wrap_native_super(_occamlanguages.Element)), _define_property(_Proof, "name", "Proof"), _Proof));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb29mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGFzeW5jU2NvcGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFByb29mIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgZGVyaXZhdGlvbikge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLmRlcml2YXRpb24gPSBkZXJpdmF0aW9uO1xuICB9XG5cbiAgZ2V0RGVyaXZhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kZXJpdmF0aW9uO1xuICB9XG5cbiAgZ2V0TGFzdFByb29mQXNzZXJ0aW9uKCkgeyByZXR1cm4gdGhpcy5kZXJpdmF0aW9uLmdldExhc3RQcm9vZkFzc2VydGlvbigpOyB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIGNvbnN0IGxhc3RQcm9vZkFzc2VydGlvbiA9IHRoaXMuZ2V0TGFzdFByb29mQXNzZXJ0aW9uKCksXG4gICAgICAgICAgbGFzdFByb29mQXNzZXJ0aW9uU3RhdGVtZW50ID0gbGFzdFByb29mQXNzZXJ0aW9uLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IGxhc3RQcm9vZkFzc2VydGlvblN0YXRlbWVudDsgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgYXdhaXQgYXN5bmNTY29wZShhc3luYyAoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgZGVyaXZhdGlvblZlcmlmaWVzID0gYXdhaXQgdGhpcy5kZXJpdmF0aW9uLnZlcmlmeShjb250ZXh0KTtcblxuICAgICAgaWYgKGRlcml2YXRpb25WZXJpZmllcykge1xuICAgICAgICBjb25zdCBsYXN0UHJvb2ZBc3NlcnRpb24gPSBjb250ZXh0LmdldExhc3RQcm9vZkFzc2VydGlvbigpO1xuXG4gICAgICAgIGlmIChsYXN0UHJvb2ZBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBwcm9vZiA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgICAgIHByb29mU3RhdGVtZW50ID0gcHJvb2YuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgICAgICAgcHJvb2ZTdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50ID0gcHJvb2ZTdGF0ZW1lbnQuaXNFcXVhbFRvKHN0YXRlbWVudCk7XG5cbiAgICAgICAgICBpZiAocHJvb2ZTdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50KSB7XG4gICAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJvb2ZcIjtcbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlByb29mIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJkZXJpdmF0aW9uIiwiZ2V0RGVyaXZhdGlvbiIsImdldExhc3RQcm9vZkFzc2VydGlvbiIsImdldFN0YXRlbWVudCIsImxhc3RQcm9vZkFzc2VydGlvbiIsImxhc3RQcm9vZkFzc2VydGlvblN0YXRlbWVudCIsInN0YXRlbWVudCIsInZlcmlmeSIsInZlcmlmaWVzIiwiYXN5bmNTY29wZSIsImRlcml2YXRpb25WZXJpZmllcyIsInByb29mIiwicHJvb2ZTdGF0ZW1lbnQiLCJwcm9vZlN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQiLCJpc0VxdWFsVG8iLCJFbGVtZW50IiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFBOzs7OEJBTHdCO3dCQUVEO3VCQUNJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUUzQixXQUFlQSxJQUFBQSxnQkFBTSwwQkFBQzs7YUFBTUMsTUFDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVTtnQ0FEbkJKOztnQkFFeEIsa0JBRndCQTtZQUVsQkM7WUFBU0M7WUFBUUM7O1FBRXZCLE1BQUtDLFVBQVUsR0FBR0E7Ozs7O1lBR3BCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELFVBQVU7WUFDeEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQTBCLE9BQU8sSUFBSSxDQUFDRixVQUFVLENBQUNFLHFCQUFxQjtZQUFJOzs7WUFFMUVDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxxQkFBcUIsSUFBSSxDQUFDRixxQkFBcUIsSUFDL0NHLDhCQUE4QkQsbUJBQW1CRCxZQUFZLElBQzdERyxZQUFZRCw2QkFBNkIsR0FBRztnQkFFbEQsT0FBT0M7WUFDVDs7O1lBRU1DLEtBQUFBO21CQUFOLFNBQU1BLE9BQU9ELFNBQVMsRUFBRVQsT0FBTzs7K0JBQ3pCVzs7Ozs7Z0NBQUFBLFdBQVc7Z0NBRWY7O29DQUFNQyxJQUFBQSxtQkFBVSxFQUFDLFNBQU9aOztnREFDaEJhLG9CQUdFTixvQkFHRU8sT0FDQUMsZ0JBQ0FDOzs7O3dEQVJpQjs7NERBQU0sSUFBSSxDQUFDYixVQUFVLENBQUNPLE1BQU0sQ0FBQ1Y7Ozt3REFBbERhLHFCQUFxQjt3REFFM0IsSUFBSUEsb0JBQW9COzREQUNoQk4scUJBQXFCUCxRQUFRSyxxQkFBcUI7NERBRXhELElBQUlFLHVCQUF1QixNQUFNO2dFQUN6Qk8sUUFBUSxJQUFJLEVBQ1pDLGlCQUFpQkQsTUFBTVIsWUFBWSxJQUNuQ1UsaUNBQWlDRCxlQUFlRSxTQUFTLENBQUNSO2dFQUVoRSxJQUFJTyxnQ0FBZ0M7b0VBQ2xDTCxXQUFXO2dFQUNiOzREQUNGO3dEQUNGOzs7Ozs7d0NBQ0Y7dUNBQUdYOzs7Z0NBaEJIO2dDQWtCQTs7b0NBQU9XOzs7O2dCQUNUOzs7OztxQkEzQ3dDTyx1QkFBTyxJQTZDL0MseUJBQU9DLFFBQU8ifQ==