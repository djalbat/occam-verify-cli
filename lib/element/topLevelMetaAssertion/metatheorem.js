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
var _topLevelMetaAssertion = /*#__PURE__*/ _interop_require_default(require("../topLevelMetaAssertion"));
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
var _Metatheorem;
var _default = (0, _elements.define)((_Metatheorem = /*#__PURE__*/ function(TopLevelMetaAssertion) {
    _inherits(Metatheorem, TopLevelMetaAssertion);
    function Metatheorem() {
        _class_call_check(this, Metatheorem);
        return _call_super(this, Metatheorem, arguments);
    }
    _create_class(Metatheorem, [
        {
            key: "verify",
            value: function verify() {
                var _this = this;
                var _this1 = this, _superprop_get_verify = function() {
                    return _get(_get_prototype_of(Metatheorem.prototype), "verify", _this);
                };
                return _async_to_generator(function() {
                    var verifies, context, metaLemmaString, metaTheorem;
                    return _ts_generator(this, function(_state) {
                        context = this.getContext();
                        this.break(context);
                        metaLemmaString = this.getString(); ///
                        context.trace("Verifying the '".concat(metaLemmaString, "' metatheorem..."));
                        verifies = _superprop_get_verify().call(_this1);
                        if (verifies) {
                            metaTheorem = this; ///
                            context.addMetatheorem(metaTheorem);
                            context.debug("...verified the '".concat(metaLemmaString, "' metatheorem."));
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
                return _topLevelMetaAssertion.default.fromJSON(Metatheorem, json, context);
            }
        }
    ]);
    return Metatheorem;
}(_topLevelMetaAssertion.default), _define_property(_Metatheorem, "name", "Metatheorem"), _Metatheorem));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3RvcExldmVsTWV0YUFzc2VydGlvbi9tZXRhdGhlb3JlbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRvcExldmVsTWV0YUFzc2VydGlvbiBmcm9tIFwiLi4vdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgTWV0YXRoZW9yZW0gZXh0ZW5kcyBUb3BMZXZlbE1ldGFBc3NlcnRpb24ge1xuICBhc3luYyB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IG1ldGFMZW1tYVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHttZXRhTGVtbWFTdHJpbmd9JyBtZXRhdGhlb3JlbS4uLmApO1xuXG4gICAgdmVyaWZpZXMgPSBzdXBlci52ZXJpZnkoKTtcblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29uc3QgbWV0YVRoZW9yZW0gPSB0aGlzOyAvLy9cblxuICAgICAgY29udGV4dC5hZGRNZXRhdGhlb3JlbShtZXRhVGhlb3JlbSk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHttZXRhTGVtbWFTdHJpbmd9JyBtZXRhdGhlb3JlbS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiTWV0YXRoZW9yZW1cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkgeyByZXR1cm4gVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLmZyb21KU09OKE1ldGF0aGVvcmVtLCBqc29uLCBjb250ZXh0KTsgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiTWV0YXRoZW9yZW0iLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImNvbnRleHQiLCJtZXRhTGVtbWFTdHJpbmciLCJtZXRhVGhlb3JlbSIsImdldENvbnRleHQiLCJicmVhayIsImdldFN0cmluZyIsInRyYWNlIiwiYWRkTWV0YXRoZW9yZW0iLCJkZWJ1ZyIsImZyb21KU09OIiwianNvbiIsIlRvcExldmVsTWV0YUFzc2VydGlvbiIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7OzRFQUprQzt3QkFFWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFdkIsV0FBZUEsSUFBQUEsZ0JBQU0sZ0NBQUM7O2FBQU1DO2dDQUFBQTtRQUFOLE9BQUEsa0JBQU1BOzs7O1lBQ3BCQyxLQUFBQTttQkFBTixTQUFNQTs7O2tEQURvQkQ7Ozt3QkFFcEJFLFVBRUVDLFNBSUFDLGlCQU9FQzs7d0JBWEZGLFVBQVUsSUFBSSxDQUFDRyxVQUFVO3dCQUUvQixJQUFJLENBQUNDLEtBQUssQ0FBQ0o7d0JBRUxDLGtCQUFrQixJQUFJLENBQUNJLFNBQVMsSUFBSSxHQUFHO3dCQUU3Q0wsUUFBUU0sS0FBSyxDQUFDLEFBQUMsa0JBQWlDLE9BQWhCTCxpQkFBZ0I7d0JBRWhERixXQUFXLHdCQUFBO3dCQUVYLElBQUlBLFVBQVU7NEJBQ05HLGNBQWMsSUFBSSxFQUFFLEdBQUc7NEJBRTdCRixRQUFRTyxjQUFjLENBQUNMOzRCQUV2QkYsUUFBUVEsS0FBSyxDQUFDLEFBQUMsb0JBQW1DLE9BQWhCUCxpQkFBZ0I7d0JBQ3BEO3dCQUVBOzs0QkFBT0Y7OztnQkFDVDs7Ozs7WUFJT1UsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0MsSUFBSSxFQUFFVixPQUFPO2dCQUFJLE9BQU9XLDhCQUFxQixDQUFDRixRQUFRLENBQUNaLGFBQWFhLE1BQU1WO1lBQVU7Ozs7RUEzQnREVyw4QkFBcUIsR0F5Qm5FLCtCQUFPQyxRQUFPIn0=