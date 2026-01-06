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
                    var stated = true, assignments = [], statementVerifies = this.statement.verify(assignments, stated, context);
                    if (statementVerifies) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2h5cG90aGVzaXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgYXNzaWduQXNzaWdubWVudHMgZnJvbSBcIi4uL3Byb2Nlc3MvYXNzaWduXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgc3RhdGVtZW50RnJvbUpTT04sIHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgSHlwb3RoZXNpcyBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgaHlwb3RoZXNpc1N0cmluZyA9IHRoaXMuc3RyaW5nOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7aHlwb3RoZXNpc1N0cmluZ30nIGh5cG90aGVzaXMuLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZWQgPSB0cnVlLFxuICAgICAgICAgICAgYXNzaWdubWVudHMgPSBbXSxcbiAgICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVzID0gdGhpcy5zdGF0ZW1lbnQudmVyaWZ5KGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VmVyaWZpZXMpIHtcbiAgICAgICAgY29uc3QgYXNzaWdubWVudHNBc3NpZ25lZCA9IGFzc2lnbkFzc2lnbm1lbnRzKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoYXNzaWdubWVudHNBc3NpZ25lZCkge1xuICAgICAgICAgIGNvbnN0IHsgU3RlcCB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgICAgICAgc3RlcCA9IFN0ZXAuZnJvbVN0YXRlbWVudCh0aGlzLnN0YXRlbWVudCwgY29udGV4dCksXG4gICAgICAgICAgICAgICAgc3RlcE9yU3VicHJvb2YgPSBzdGVwOyAgLy8vXG5cbiAgICAgICAgICBjb250ZXh0LmFkZFN0ZXBPclN1YnByb29mKHN0ZXBPclN1YnByb29mKTtcblxuICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBVbmFibGUgdG8gdmVyaWZ5IHRoZSAnJHtoeXBvdGhlc2lzU3RyaW5nfScgaHlwb3RoZXNpcyBiZWNhdXNlIGl0IGlzIG5vbnNlbnNlLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7aHlwb3RoZXNpc1N0cmluZ30nIGh5cG90aGVzaXMuYCwgdGhpcy5ub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICBpc0VxdWFsVG9TdGVwKHN0ZXAsIGNvbnRleHQpIHtcbiAgICBsZXQgZXF1YWxUb1N0ZXAgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSBzdGVwLmdldFN0cmluZygpLFxuICAgICAgICAgIGh5cG90aGVzaXNTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBJcyB0aGUgJyR7aHlwb3RoZXNpc1N0cmluZ30nIGh5cG90aGVzaXMgZXF1YWwgdG8gdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwLi4uYCwgdGhpcy5ub2RlKTtcblxuICAgIGNvbnN0IHN0ZXBTdGF0ZW1lbnQgPSBzdGVwLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHN0YXRlbWVudEVxdWFsVG9TdGVwU3RhdGVtZW50ID0gdGhpcy5zdGF0ZW1lbnQuaXNFcXVhbFRvKHN0ZXBTdGF0ZW1lbnQpO1xuXG4gICAgaWYgKHN0YXRlbWVudEVxdWFsVG9TdGVwU3RhdGVtZW50KSB7XG4gICAgICBlcXVhbFRvU3RlcCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGVxdWFsVG9TdGVwKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi50aGUgJyR7aHlwb3RoZXNpc1N0cmluZ30nIGh5cG90aGVzaXMgaXMgZXF1YWwgdG8gdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsVG9TdGVwO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0YXRlbWVudEpTT04gPSBzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04odGhpcy5zdGF0ZW1lbnQpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RhdGVtZW50XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkh5cG90aGVzaXNcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgbGV0IHN0cmluZztcblxuICAgIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlID0gbnVsbCxcbiAgICAgICAgICBoeXBvdGhlc2lzID0gbmV3IEh5cG90aGVzaXMoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQpO1xuXG4gICAgcmV0dXJuIGh5cG90aGVzaXM7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIkh5cG90aGVzaXMiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInN0YXRlbWVudCIsImdldFN0YXRlbWVudCIsInZlcmlmeSIsInZlcmlmaWVzIiwiaHlwb3RoZXNpc1N0cmluZyIsInRyYWNlIiwic3RhdGVkIiwiYXNzaWdubWVudHMiLCJzdGF0ZW1lbnRWZXJpZmllcyIsImFzc2lnbm1lbnRzQXNzaWduZWQiLCJhc3NpZ25Bc3NpZ25tZW50cyIsIlN0ZXAiLCJlbGVtZW50cyIsInN0ZXAiLCJmcm9tU3RhdGVtZW50Iiwic3RlcE9yU3VicHJvb2YiLCJhZGRTdGVwT3JTdWJwcm9vZiIsImRlYnVnIiwiaXNFcXVhbFRvU3RlcCIsImVxdWFsVG9TdGVwIiwic3RlcFN0cmluZyIsImdldFN0cmluZyIsInN0ZXBTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRFcXVhbFRvU3RlcFN0YXRlbWVudCIsImlzRXF1YWxUbyIsInRvSlNPTiIsInN0YXRlbWVudEpTT04iLCJzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJzdGF0ZW1lbnRGcm9tSlNPTiIsImh5cG90aGVzaXMiLCJFbGVtZW50IiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7OERBUG9CO2dFQUNDOzZEQUNTO29CQUc4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTVELFdBQWVBLElBQUFBLGdCQUFNLCtCQUFDOzthQUFNQyxXQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTO2dDQURsQko7O2dCQUV4QixrQkFGd0JBO1lBRWxCQztZQUFTQztZQUFRQzs7UUFFdkIsTUFBS0MsU0FBUyxHQUFHQTs7Ozs7WUFHbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsU0FBUztZQUN2Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxPQUFPTCxPQUFPO2dCQUNaLElBQUlNLFdBQVc7Z0JBRWYsSUFBTUMsbUJBQW1CLElBQUksQ0FBQ04sTUFBTSxFQUFFLEdBQUc7Z0JBRXpDRCxRQUFRUSxLQUFLLENBQUMsQUFBQyxrQkFBa0MsT0FBakJELGtCQUFpQixvQkFBa0IsSUFBSSxDQUFDTCxJQUFJO2dCQUU1RSxJQUFJLE9BQU87Z0JBQ1QsR0FBRztnQkFDTCxPQUFPLElBQUksSUFBSSxDQUFDQyxTQUFTLEtBQUssTUFBTTtvQkFDbEMsSUFBTU0sU0FBUyxNQUNUQyxjQUFjLEVBQUUsRUFDaEJDLG9CQUFvQixJQUFJLENBQUNSLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDSyxhQUFhRCxRQUFRVDtvQkFFckUsSUFBSVcsbUJBQW1CO3dCQUNyQixJQUFNQyxzQkFBc0JDLElBQUFBLGVBQWlCLEVBQUNILGFBQWFWO3dCQUUzRCxJQUFJWSxxQkFBcUI7NEJBQ3ZCLElBQU0sQUFBRUUsT0FBU0MsaUJBQVEsQ0FBakJELE1BQ0ZFLE9BQU9GLEtBQUtHLGFBQWEsQ0FBQyxJQUFJLENBQUNkLFNBQVMsRUFBRUgsVUFDMUNrQixpQkFBaUJGLE1BQU8sR0FBRzs0QkFFakNoQixRQUFRbUIsaUJBQWlCLENBQUNEOzRCQUUxQlosV0FBVzt3QkFDYjtvQkFDRjtnQkFDRixPQUFPO29CQUNMTixRQUFRb0IsS0FBSyxDQUFDLEFBQUMseUJBQXlDLE9BQWpCYixrQkFBaUIseUNBQXVDLElBQUksQ0FBQ0wsSUFBSTtnQkFDMUc7Z0JBRUEsSUFBSUksVUFBVTtvQkFDWk4sUUFBUW9CLEtBQUssQ0FBQyxBQUFDLG9CQUFvQyxPQUFqQmIsa0JBQWlCLGtCQUFnQixJQUFJLENBQUNMLElBQUk7Z0JBQzlFO2dCQUVBLE9BQU9JO1lBQ1Q7OztZQUVBZSxLQUFBQTttQkFBQUEsU0FBQUEsY0FBY0wsSUFBSSxFQUFFaEIsT0FBTztnQkFDekIsSUFBSXNCLGNBQWM7Z0JBRWxCLElBQU1DLGFBQWFQLEtBQUtRLFNBQVMsSUFDM0JqQixtQkFBbUIsSUFBSSxDQUFDTixNQUFNLEVBQUUsR0FBRztnQkFFekNELFFBQVFRLEtBQUssQ0FBQyxBQUFDLFdBQXdEZSxPQUE5Q2hCLGtCQUFpQiwrQkFBd0MsT0FBWGdCLFlBQVcsY0FBWSxJQUFJLENBQUNyQixJQUFJO2dCQUV2RyxJQUFNdUIsZ0JBQWdCVCxLQUFLWixZQUFZLElBQ2pDc0IsZ0NBQWdDLElBQUksQ0FBQ3ZCLFNBQVMsQ0FBQ3dCLFNBQVMsQ0FBQ0Y7Z0JBRS9ELElBQUlDLCtCQUErQjtvQkFDakNKLGNBQWM7Z0JBQ2hCO2dCQUVBLElBQUlBLGFBQWE7b0JBQ2Z0QixRQUFRUSxLQUFLLENBQUMsQUFBQyxXQUEyRGUsT0FBakRoQixrQkFBaUIsa0NBQTJDLE9BQVhnQixZQUFXLFlBQVUsSUFBSSxDQUFDckIsSUFBSTtnQkFDMUc7Z0JBRUEsT0FBT29CO1lBQ1Q7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsZ0JBQWdCQyxJQUFBQSw4QkFBd0IsRUFBQyxJQUFJLENBQUMzQixTQUFTLEdBQ3ZEQSxZQUFZMEIsZUFDWkUsT0FBTztvQkFDTDVCLFdBQUFBO2dCQUNGO2dCQUVOLE9BQU80QjtZQUNUOzs7O1lBSU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNELElBQUksRUFBRS9CLE9BQU87Z0JBQzNCLElBQU1HLFlBQVk4QixJQUFBQSx1QkFBaUIsRUFBQ0YsTUFBTS9CO2dCQUUxQyxJQUFJQztnQkFFSixJQUFJRSxjQUFjLE1BQU07b0JBQ3RCRixTQUFTRSxVQUFVcUIsU0FBUztnQkFDOUI7Z0JBRUEsSUFBTXRCLE9BQU8sTUFDUGdDLGFBQWEsSUFBSW5DLFdBQVdDLFNBQVNDLFFBQVFDLE1BQU1DO2dCQUV6RCxPQUFPK0I7WUFDVDs7OztxQkFoRzZDQyxnQkFBTyxJQWlGcEQsOEJBQU9DLFFBQU8ifQ==