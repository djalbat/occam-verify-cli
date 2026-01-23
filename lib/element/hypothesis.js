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
var _assign = /*#__PURE__*/ _interop_require_default(require("../process/assign"));
var _elements = require("../elements");
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
                var hypothesisString = this.getString(); ///
                context.trace("Verifying the '".concat(hypothesisString, "' hypothesis..."), this.node);
                if (false) {
                ///
                } else if (this.statement !== null) {
                    var stated = true, assignments = [], statementValidates = this.statement.validate(assignments, stated, context);
                    if (statementValidates) {
                        var assignmentsAssigned = (0, _assign.default)(assignments, context);
                        if (assignmentsAssigned) {
                            var subproofOrProofAssertion = this; ///
                            context.addSubproofOrProofAssertion(subproofOrProofAssertion);
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
            key: "compareProofAssertion",
            value: function compareProofAssertion(proofAssertion, context) {
                var comparesToProofAssertion = false;
                var node = this.getNode(), hypothesisString = this.getString(), proofAssertionString = proofAssertion.getString();
                context.trace("Is the '".concat(hypothesisString, "' hypothesis equal to the '").concat(proofAssertionString, "' proof assertion..."), node);
                var proofAssertionStatement = proofAssertion.getStatement(), statementEqualToStepStatement = this.statement.isEqualTo(proofAssertionStatement);
                if (statementEqualToStepStatement) {
                    comparesToProofAssertion = true;
                }
                if (comparesToProofAssertion) {
                    context.trace("...the '".concat(hypothesisString, "' hypothesis is equal to the '").concat(proofAssertionString, "' proof assertion."), node);
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
}(_wrap_native_super(_element.default)), _define_property(_Hypothesis, "name", "Hypothesis"), _Hypothesis));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2h5cG90aGVzaXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgYXNzaWduQXNzaWdubWVudHMgZnJvbSBcIi4uL3Byb2Nlc3MvYXNzaWduXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgc3RhdGVtZW50RnJvbUpTT04sIHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgSHlwb3RoZXNpcyBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgaHlwb3RoZXNpc1N0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtoeXBvdGhlc2lzU3RyaW5nfScgaHlwb3RoZXNpcy4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlZCA9IHRydWUsXG4gICAgICAgICAgICBhc3NpZ25tZW50cyA9IFtdLFxuICAgICAgICAgICAgc3RhdGVtZW50VmFsaWRhdGVzID0gdGhpcy5zdGF0ZW1lbnQudmFsaWRhdGUoYXNzaWdubWVudHMsIHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3QgYXNzaWdubWVudHNBc3NpZ25lZCA9IGFzc2lnbkFzc2lnbm1lbnRzKGFzc2lnbm1lbnRzLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoYXNzaWdubWVudHNBc3NpZ25lZCkge1xuICAgICAgICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbiA9IHRoaXM7ICAvLy9cblxuICAgICAgICAgIGNvbnRleHQuYWRkU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbik7XG5cbiAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVW5hYmxlIHRvIHZlcmlmeSB0aGUgJyR7aHlwb3RoZXNpc1N0cmluZ30nIGh5cG90aGVzaXMgYmVjYXVzZSBpdCBpcyBub25zZW5zZS5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2h5cG90aGVzaXNTdHJpbmd9JyBoeXBvdGhlc2lzLmAsIHRoaXMubm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgY29tcGFyZVByb29mQXNzZXJ0aW9uKHByb29mQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbXBhcmVzVG9Qcm9vZkFzc2VydGlvbiA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGh5cG90aGVzaXNTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICBwcm9vZkFzc2VydGlvblN0cmluZyA9IHByb29mQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgSXMgdGhlICcke2h5cG90aGVzaXNTdHJpbmd9JyBoeXBvdGhlc2lzIGVxdWFsIHRvIHRoZSAnJHtwcm9vZkFzc2VydGlvblN0cmluZ30nIHByb29mIGFzc2VydGlvbi4uLmAsIG5vZGUpO1xuXG4gICAgY29uc3QgcHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnQgPSBwcm9vZkFzc2VydGlvbi5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRFcXVhbFRvU3RlcFN0YXRlbWVudCA9IHRoaXMuc3RhdGVtZW50LmlzRXF1YWxUbyhwcm9vZkFzc2VydGlvblN0YXRlbWVudCk7XG5cbiAgICBpZiAoc3RhdGVtZW50RXF1YWxUb1N0ZXBTdGF0ZW1lbnQpIHtcbiAgICAgIGNvbXBhcmVzVG9Qcm9vZkFzc2VydGlvbiA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGNvbXBhcmVzVG9Qcm9vZkFzc2VydGlvbikge1xuICAgICAgY29udGV4dC50cmFjZShgLi4udGhlICcke2h5cG90aGVzaXNTdHJpbmd9JyBoeXBvdGhlc2lzIGlzIGVxdWFsIHRvIHRoZSAnJHtwcm9vZkFzc2VydGlvblN0cmluZ30nIHByb29mIGFzc2VydGlvbi5gLCBub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1Byb29mQXNzZXJ0aW9uO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0YXRlbWVudEpTT04gPSBzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04odGhpcy5zdGF0ZW1lbnQpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RhdGVtZW50XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkh5cG90aGVzaXNcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgbGV0IHN0cmluZztcblxuICAgIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcbiAgICB9XG5cbiAgICBjb25zdCBub2RlID0gbnVsbCxcbiAgICAgICAgICBoeXBvdGhlc2lzID0gbmV3IEh5cG90aGVzaXMoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQpO1xuXG4gICAgcmV0dXJuIGh5cG90aGVzaXM7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIkh5cG90aGVzaXMiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInN0YXRlbWVudCIsImdldFN0YXRlbWVudCIsInZlcmlmeSIsInZlcmlmaWVzIiwiaHlwb3RoZXNpc1N0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwic3RhdGVkIiwiYXNzaWdubWVudHMiLCJzdGF0ZW1lbnRWYWxpZGF0ZXMiLCJ2YWxpZGF0ZSIsImFzc2lnbm1lbnRzQXNzaWduZWQiLCJhc3NpZ25Bc3NpZ25tZW50cyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsImFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsImRlYnVnIiwiY29tcGFyZVByb29mQXNzZXJ0aW9uIiwicHJvb2ZBc3NlcnRpb24iLCJjb21wYXJlc1RvUHJvb2ZBc3NlcnRpb24iLCJnZXROb2RlIiwicHJvb2ZBc3NlcnRpb25TdHJpbmciLCJwcm9vZkFzc2VydGlvblN0YXRlbWVudCIsInN0YXRlbWVudEVxdWFsVG9TdGVwU3RhdGVtZW50IiwiaXNFcXVhbFRvIiwidG9KU09OIiwic3RhdGVtZW50SlNPTiIsInN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiIsImpzb24iLCJmcm9tSlNPTiIsInN0YXRlbWVudEZyb21KU09OIiwiaHlwb3RoZXNpcyIsIkVsZW1lbnQiLCJu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