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
var _assign = /*#__PURE__*/ _interop_require_default(require("../process/assign"));
var _json = require("../utilities/json");
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
            key: "verify",
            value: function verify(context) {
                var verifies = false;
                var hypothesisString = this.string; ///
                context.trace("Verifying the '".concat(hypothesisString, "' hypothesis..."), this.node);
                if (false) {
                ///
                } else if (this.statement !== null) {
                    var stated = true, assignments = [], statementValidates = this.statement.validate(assignments, stated, context);
                    if (statementValidates) {
                        var assignmentsAssigned = (0, _assign.default)(assignments, context);
                        if (assignmentsAssigned) {
                            var Step = _elements.default.Step, step = Step.fromStatement(this.statement, context), stepOrSubproof = step; ///
                            context.addStepOrSubproof(stepOrSubproof);
                            verifies = true;
                        }
                    }
                } else {
                    context.debug("Unable to verify the '".concat(hypothesisString, "' hypothesis because it is nonsense."), this.node);
                }
                if (verifies) {
                    context.debug("...verified the '".concat(hypothesisString, "' hypothesis."), this.node);
                }
                return verifies;
            }
        },
        {
            key: "isEqualToStep",
            value: function isEqualToStep(step, context) {
                var equalToStep = false;
                var stepString = step.getString(), hypothesisString = this.string; ///
                context.trace("Is the '".concat(hypothesisString, "' hypothesis equal to the '").concat(stepString, "' step..."), this.node);
                var stepStatement = step.getStatement(), statementEqualToStepStatement = this.statement.isEqualTo(stepStatement);
                if (statementEqualToStepStatement) {
                    equalToStep = true;
                }
                if (equalToStep) {
                    context.trace("...the '".concat(hypothesisString, "' hypothesis is equal to the '").concat(stepString, "' step."), this.node);
                }
                return equalToStep;
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
}(_wrap_native_super(_element.default)), _define_property(_Hypothesis, "name", "Hypothesis"), _Hypothesis));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2h5cG90aGVzaXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgYXNzaWduQXNzaWdubWVudHMgZnJvbSBcIi4uL3Byb2Nlc3MvYXNzaWduXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgc3RhdGVtZW50RnJvbUpTT04sIHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgSHlwb3RoZXNpcyBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgaHlwb3RoZXNpc1N0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7aHlwb3RoZXNpc1N0cmluZ30nIGh5cG90aGVzaXMuLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZWQgPSB0cnVlLFxuICAgICAgICAgICAgYXNzaWdubWVudHMgPSBbXSxcbiAgICAgICAgICAgIHN0YXRlbWVudFZhbGlkYXRlcyA9IHRoaXMuc3RhdGVtZW50LnZhbGlkYXRlKGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnN0IGFzc2lnbm1lbnRzQXNzaWduZWQgPSBhc3NpZ25Bc3NpZ25tZW50cyhhc3NpZ25tZW50cywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGFzc2lnbm1lbnRzQXNzaWduZWQpIHtcbiAgICAgICAgICBjb25zdCB7IFN0ZXAgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgICAgICAgIHN0ZXAgPSBTdGVwLmZyb21TdGF0ZW1lbnQodGhpcy5zdGF0ZW1lbnQsIGNvbnRleHQpLFxuICAgICAgICAgICAgICAgIHN0ZXBPclN1YnByb29mID0gc3RlcDsgIC8vL1xuXG4gICAgICAgICAgY29udGV4dC5hZGRTdGVwT3JTdWJwcm9vZihzdGVwT3JTdWJwcm9vZik7XG5cbiAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVW5hYmxlIHRvIHZlcmlmeSB0aGUgJyR7aHlwb3RoZXNpc1N0cmluZ30nIGh5cG90aGVzaXMgYmVjYXVzZSBpdCBpcyBub25zZW5zZS5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2h5cG90aGVzaXNTdHJpbmd9JyBoeXBvdGhlc2lzLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgaXNFcXVhbFRvU3RlcChzdGVwLCBjb250ZXh0KSB7XG4gICAgbGV0IGVxdWFsVG9TdGVwID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGVwU3RyaW5nID0gc3RlcC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBoeXBvdGhlc2lzU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgSXMgdGhlICcke2h5cG90aGVzaXNTdHJpbmd9JyBoeXBvdGhlc2lzIGVxdWFsIHRvIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcC4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBjb25zdCBzdGVwU3RhdGVtZW50ID0gc3RlcC5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRFcXVhbFRvU3RlcFN0YXRlbWVudCA9IHRoaXMuc3RhdGVtZW50LmlzRXF1YWxUbyhzdGVwU3RhdGVtZW50KTtcblxuICAgIGlmIChzdGF0ZW1lbnRFcXVhbFRvU3RlcFN0YXRlbWVudCkge1xuICAgICAgZXF1YWxUb1N0ZXAgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChlcXVhbFRvU3RlcCkge1xuICAgICAgY29udGV4dC50cmFjZShgLi4udGhlICcke2h5cG90aGVzaXNTdHJpbmd9JyBoeXBvdGhlc2lzIGlzIGVxdWFsIHRvIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcC5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBlcXVhbFRvU3RlcDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRKU09OID0gc3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OKHRoaXMuc3RhdGVtZW50KSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0YXRlbWVudFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJIeXBvdGhlc2lzXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIGxldCBzdHJpbmc7XG5cbiAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBzdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG4gICAgfVxuXG4gICAgY29uc3Qgbm9kZSA9IG51bGwsXG4gICAgICAgICAgaHlwb3RoZXNpcyA9IG5ldyBIeXBvdGhlc2lzKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50KTtcblxuICAgIHJldHVybiBoeXBvdGhlc2lzO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJIeXBvdGhlc2lzIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJzdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImh5cG90aGVzaXNTdHJpbmciLCJ0cmFjZSIsInN0YXRlZCIsImFzc2lnbm1lbnRzIiwic3RhdGVtZW50VmFsaWRhdGVzIiwidmFsaWRhdGUiLCJhc3NpZ25tZW50c0Fzc2lnbmVkIiwiYXNzaWduQXNzaWdubWVudHMiLCJTdGVwIiwiZWxlbWVudHMiLCJzdGVwIiwiZnJvbVN0YXRlbWVudCIsInN0ZXBPclN1YnByb29mIiwiYWRkU3RlcE9yU3VicHJvb2YiLCJkZWJ1ZyIsImlzRXF1YWxUb1N0ZXAiLCJlcXVhbFRvU3RlcCIsInN0ZXBTdHJpbmciLCJnZXRTdHJpbmciLCJzdGVwU3RhdGVtZW50Iiwic3RhdGVtZW50RXF1YWxUb1N0ZXBTdGF0ZW1lbnQiLCJpc0VxdWFsVG8iLCJ0b0pTT04iLCJzdGF0ZW1lbnRKU09OIiwic3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OIiwianNvbiIsImZyb21KU09OIiwic3RhdGVtZW50RnJvbUpTT04iLCJoeXBvdGhlc2lzIiwiRWxlbWVudCIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7OzhEQVBvQjtnRUFDQzs2REFDUztvQkFHOEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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