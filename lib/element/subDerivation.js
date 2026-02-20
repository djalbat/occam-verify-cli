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
var _necessary = require("necessary");
var _occamlanguages = require("occam-languages");
var _elements = require("../elements");
var _assign = /*#__PURE__*/ _interop_require_default(require("../process/assign"));
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
var _SubDerivation;
var last = _necessary.arrayUtilities.last, asyncEvery = _occamlanguages.asynchronousUtilities.asyncEvery;
var _default = (0, _elements.define)((_SubDerivation = /*#__PURE__*/ function(Element) {
    _inherits(SubDerivation, Element);
    function SubDerivation(context, string, node, subproofOrProofAssertions) {
        _class_call_check(this, SubDerivation);
        var _this;
        _this = _call_super(this, SubDerivation, [
            context,
            string,
            node
        ]);
        _this.subproofOrProofAssertions = subproofOrProofAssertions;
        return _this;
    }
    _create_class(SubDerivation, [
        {
            key: "getSubproofOrProofAssertions",
            value: function getSubproofOrProofAssertions() {
                return this.subproofOrProofAssertions;
            }
        },
        {
            key: "getSubDerivationNode",
            value: function getSubDerivationNode() {
                var node = this.getNode(), subDerivationNode = node; ///
                return subDerivationNode;
            }
        },
        {
            key: "getLastProofAssertion",
            value: function getLastProofAssertion() {
                var lastSubproofOrProofAssertion = last(this.subproofOrProofAssertions), lastProofAssertion = lastSubproofOrProofAssertion; ///
                return lastProofAssertion;
            }
        },
        {
            key: "verify",
            value: function verify(context) {
                return _async_to_generator(function() {
                    var verifies;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    asyncEvery(this.subproofOrProofAssertions, function(subproofOrProofAssertion) {
                                        return _async_to_generator(function() {
                                            var assignments, subproofOrProofAssertionVarifies;
                                            return _ts_generator(this, function(_state) {
                                                switch(_state.label){
                                                    case 0:
                                                        assignments = [];
                                                        return [
                                                            4,
                                                            subproofOrProofAssertion.verify(assignments, context)
                                                        ];
                                                    case 1:
                                                        subproofOrProofAssertionVarifies = _state.sent();
                                                        if (subproofOrProofAssertionVarifies) {
                                                            (0, _assign.default)(assignments, context);
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
                                verifies = _state.sent();
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
    return SubDerivation;
}(_wrap_native_super(_occamlanguages.Element)), _define_property(_SubDerivation, "name", "SubDerivation"), _SubDerivation));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3N1YkRlcml2YXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgRWxlbWVudCwgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcblxuaW1wb3J0IGFzc2lnbkFzc2lnbm1lbnRzIGZyb20gXCIuLi9wcm9jZXNzL2Fzc2lnblwiO1xuXG5jb25zdCB7IGxhc3QgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBhc3luY0V2ZXJ5IH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTdWJEZXJpdmF0aW9uIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucykge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMgPSBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zO1xuICB9XG5cbiAgZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zO1xuICB9XG5cbiAgZ2V0U3ViRGVyaXZhdGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN1YkRlcml2YXRpb25Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gc3ViRGVyaXZhdGlvbk5vZGU7XG4gIH1cblxuICBnZXRMYXN0UHJvb2ZBc3NlcnRpb24oKSB7XG4gICAgY29uc3QgbGFzdFN1YnByb29mT3JQcm9vZkFzc2VydGlvbiA9IGxhc3QodGhpcy5zdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKSxcbiAgICAgICAgICBsYXN0UHJvb2ZBc3NlcnRpb24gPSBsYXN0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uOyAgLy8vXG5cbiAgICByZXR1cm4gbGFzdFByb29mQXNzZXJ0aW9uO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXM7XG5cbiAgICB2ZXJpZmllcyA9IGF3YWl0IGFzeW5jRXZlcnkodGhpcy5zdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBhc3luYyAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKSA9PiB7IC8vL1xuICAgICAgY29uc3QgYXNzaWdubWVudHMgPSBbXSxcbiAgICAgICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvblZhcmlmaWVzID0gYXdhaXQgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uLnZlcmlmeShhc3NpZ25tZW50cywgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25WYXJpZmllcykge1xuICAgICAgICBhc3NpZ25Bc3NpZ25tZW50cyhhc3NpZ25tZW50cywgY29udGV4dCk7XG5cbiAgICAgICAgY29udGV4dC5hZGRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24oc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTdWJEZXJpdmF0aW9uXCI7XG59KTtcbiJdLCJuYW1lcyI6WyJsYXN0IiwiYXJyYXlVdGlsaXRpZXMiLCJhc3luY0V2ZXJ5IiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwiZGVmaW5lIiwiU3ViRGVyaXZhdGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsImdldFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJnZXRTdWJEZXJpdmF0aW9uTm9kZSIsImdldE5vZGUiLCJzdWJEZXJpdmF0aW9uTm9kZSIsImdldExhc3RQcm9vZkFzc2VydGlvbiIsImxhc3RTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJsYXN0UHJvb2ZBc3NlcnRpb24iLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsImFzc2lnbm1lbnRzIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVmFyaWZpZXMiLCJhc3NpZ25Bc3NpZ25tZW50cyIsImFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsIkVsZW1lbnQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQUE7Ozt5QkFWK0I7OEJBQ2dCO3dCQUV4Qjs2REFFTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5QixJQUFNLEFBQUVBLE9BQVNDLHlCQUFjLENBQXZCRCxNQUNGLEFBQUVFLGFBQWVDLHFDQUFxQixDQUFwQ0Q7SUFFUixXQUFlRSxJQUFBQSxnQkFBTSxrQ0FBQzs7YUFBTUMsY0FDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMseUJBQXlCO2dDQURsQ0o7O2dCQUV4QixrQkFGd0JBO1lBRWxCQztZQUFTQztZQUFRQzs7UUFFdkIsTUFBS0MseUJBQXlCLEdBQUdBOzs7OztZQUduQ0MsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRCx5QkFBeUI7WUFDdkM7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUgsT0FBTyxJQUFJLENBQUNJLE9BQU8sSUFDbkJDLG9CQUFvQkwsTUFBTSxHQUFHO2dCQUVuQyxPQUFPSztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLCtCQUErQmYsS0FBSyxJQUFJLENBQUNTLHlCQUF5QixHQUNsRU8scUJBQXFCRCw4QkFBK0IsR0FBRztnQkFFN0QsT0FBT0M7WUFDVDs7O1lBRU1DLEtBQUFBO21CQUFOLFNBQU1BLE9BQU9YLE9BQU87O3dCQUNkWTs7OztnQ0FFTzs7b0NBQU1oQixXQUFXLElBQUksQ0FBQ08seUJBQXlCLEVBQUUsU0FBT1U7O2dEQUMzREMsYUFDQUM7Ozs7d0RBREFEO3dEQUNtQzs7NERBQU1ELHlCQUF5QkYsTUFBTSxDQUFDRyxhQUFhZDs7O3dEQUF0RmUsbUNBQW1DO3dEQUV6QyxJQUFJQSxrQ0FBa0M7NERBQ3BDQyxJQUFBQSxlQUFpQixFQUFDRixhQUFhZDs0REFFL0JBLFFBQVFpQiwyQkFBMkIsQ0FBQ0o7NERBRXBDOztnRUFBTzs7d0RBQ1Q7Ozs7Ozt3Q0FDRjs7OztnQ0FYQUQsV0FBVztnQ0FhWDs7b0NBQU9BOzs7O2dCQUNUOzs7OztxQkExQ2dETSx1QkFBTyxJQTRDdkQsaUNBQU9DLFFBQU8ifQ==