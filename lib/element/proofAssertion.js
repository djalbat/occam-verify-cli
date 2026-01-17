"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ProofAssertion;
    }
});
var _element = /*#__PURE__*/ _interop_require_default(require("../element"));
var _equate = require("../process/equate");
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
var ProofAssertion = /*#__PURE__*/ function(Element) {
    _inherits(ProofAssertion, Element);
    function ProofAssertion(context, string, node, statement) {
        _class_call_check(this, ProofAssertion);
        var _this;
        _this = _call_super(this, ProofAssertion, [
            context,
            string,
            node
        ]);
        _this.statement = statement;
        return _this;
    }
    _create_class(ProofAssertion, [
        {
            key: "getStatement",
            value: function getStatement() {
                return this.statement;
            }
        },
        {
            key: "isProofAssertion",
            value: function isProofAssertion() {
                var proofAssertion = true;
                return proofAssertion;
            }
        },
        {
            key: "compareStatement",
            value: function compareStatement(statement, context) {
                var comparesToStatement = false;
                var statementString = statement.getString(), proofAssertionString = this.getString();
                context.trace("Comparing the '".concat(statementString, "' statement to the '").concat(proofAssertionString, "' proof assertion..."));
                var leftStatement = statement, rightStatement = this.statement, leftStatementNode = leftStatement.getNode(), rightStatementNode = rightStatement.getNode(), statementsEquate = (0, _equate.equateStatements)(leftStatementNode, rightStatementNode, context);
                if (statementsEquate) {
                    comparesToStatement = true;
                }
                if (comparesToStatement) {
                    context.debug("...compared the '".concat(statementString, "' statement to the '").concat(proofAssertionString, "' proof assertion."));
                }
                return comparesToStatement;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, substitutions, generalContext, specificContext) {
                var statementUnifies = false;
                if (this.statement !== null) {
                    var context = specificContext, statementString = statement.getString(), proorAssertionString = this.getString(); ///
                    context.trace("Unifying the '".concat(statementString, "' statement with the '").concat(proorAssertionString, "' proof assertion..."));
                    statementUnifies = this.statement.unifyStatement(statement, substitutions, generalContext, specificContext);
                    if (statementUnifies) {
                        context.debug("...unified the '".concat(statementString, "' statement with the '").concat(proorAssertionString, "' proof assertion."));
                    }
                }
                return statementUnifies;
            }
        }
    ]);
    return ProofAssertion;
}(_wrap_native_super(_element.default));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3Byb29mQXNzZXJ0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBlcXVhdGVTdGF0ZW1lbnRzIH0gZnJvbSBcIi4uL3Byb2Nlc3MvZXF1YXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb29mQXNzZXJ0aW9uIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50KSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudDtcbiAgfVxuXG4gIGlzUHJvb2ZBc3NlcnRpb24oKSB7XG4gICAgY29uc3QgcHJvb2ZBc3NlcnRpb24gPSB0cnVlO1xuXG4gICAgcmV0dXJuIHByb29mQXNzZXJ0aW9uO1xuICB9XG5cbiAgY29tcGFyZVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgY29tcGFyZXNUb1N0YXRlbWVudCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHByb29mQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYENvbXBhcmluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHRvIHRoZSAnJHtwcm9vZkFzc2VydGlvblN0cmluZ30nIHByb29mIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3QgbGVmdFN0YXRlbWVudCA9IHN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgIHJpZ2h0U3RhdGVtZW50ID0gdGhpcy5zdGF0ZW1lbnQsICAvLy9cbiAgICAgICAgICBsZWZ0U3RhdGVtZW50Tm9kZSA9IGxlZnRTdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHJpZ2h0U3RhdGVtZW50Tm9kZSA9IHJpZ2h0U3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRzRXF1YXRlID0gZXF1YXRlU3RhdGVtZW50cyhsZWZ0U3RhdGVtZW50Tm9kZSwgcmlnaHRTdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRzRXF1YXRlKSB7XG4gICAgICBjb21wYXJlc1RvU3RhdGVtZW50ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoY29tcGFyZXNUb1N0YXRlbWVudCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uY29tcGFyZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB0byB0aGUgJyR7cHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBwcm9vZiBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9TdGF0ZW1lbnQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllcyA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIHByb29yQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3Byb29yQXNzZXJ0aW9uU3RyaW5nfScgcHJvb2YgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLnN0YXRlbWVudC51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7cHJvb3JBc3NlcnRpb25TdHJpbmd9JyBwcm9vZiBhc3NlcnRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXM7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJQcm9vZkFzc2VydGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwic3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50IiwiaXNQcm9vZkFzc2VydGlvbiIsInByb29mQXNzZXJ0aW9uIiwiY29tcGFyZVN0YXRlbWVudCIsImNvbXBhcmVzVG9TdGF0ZW1lbnQiLCJzdGF0ZW1lbnRTdHJpbmciLCJnZXRTdHJpbmciLCJwcm9vZkFzc2VydGlvblN0cmluZyIsInRyYWNlIiwibGVmdFN0YXRlbWVudCIsInJpZ2h0U3RhdGVtZW50IiwibGVmdFN0YXRlbWVudE5vZGUiLCJnZXROb2RlIiwicmlnaHRTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50c0VxdWF0ZSIsImVxdWF0ZVN0YXRlbWVudHMiLCJkZWJ1ZyIsInVuaWZ5U3RhdGVtZW50Iiwic3Vic3RpdHV0aW9ucyIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3RhdGVtZW50VW5pZmllcyIsInByb29yQXNzZXJ0aW9uU3RyaW5nIiwiRWxlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFNcUJBOzs7OERBSkQ7c0JBRWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxCLElBQUEsQUFBTUEsK0JBQU47Y0FBTUE7YUFBQUEsZUFDUEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUztnQ0FEekJKOztnQkFFakIsa0JBRmlCQTtZQUVYQztZQUFTQztZQUFRQzs7UUFFdkIsTUFBS0MsU0FBUyxHQUFHQTs7O2tCQUpBSjs7WUFPbkJLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsU0FBUztZQUN2Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxpQkFBaUI7Z0JBRXZCLE9BQU9BO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCSixTQUFTLEVBQUVILE9BQU87Z0JBQ2pDLElBQUlRLHNCQUFzQjtnQkFFMUIsSUFBTUMsa0JBQWtCTixVQUFVTyxTQUFTLElBQ3JDQyx1QkFBdUIsSUFBSSxDQUFDRCxTQUFTO2dCQUUzQ1YsUUFBUVksS0FBSyxDQUFDLEFBQUMsa0JBQXVERCxPQUF0Q0YsaUJBQWdCLHdCQUEyQyxPQUFyQkUsc0JBQXFCO2dCQUUzRixJQUFNRSxnQkFBZ0JWLFdBQ2hCVyxpQkFBaUIsSUFBSSxDQUFDWCxTQUFTLEVBQy9CWSxvQkFBb0JGLGNBQWNHLE9BQU8sSUFDekNDLHFCQUFxQkgsZUFBZUUsT0FBTyxJQUMzQ0UsbUJBQW1CQyxJQUFBQSx3QkFBZ0IsRUFBQ0osbUJBQW1CRSxvQkFBb0JqQjtnQkFFakYsSUFBSWtCLGtCQUFrQjtvQkFDcEJWLHNCQUFzQjtnQkFDeEI7Z0JBRUEsSUFBSUEscUJBQXFCO29CQUN2QlIsUUFBUW9CLEtBQUssQ0FBQyxBQUFDLG9CQUF5RFQsT0FBdENGLGlCQUFnQix3QkFBMkMsT0FBckJFLHNCQUFxQjtnQkFDL0Y7Z0JBRUEsT0FBT0g7WUFDVDs7O1lBRUFhLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlbEIsU0FBUyxFQUFFbUIsYUFBYSxFQUFFQyxjQUFjLEVBQUVDLGVBQWU7Z0JBQ3RFLElBQUlDLG1CQUFtQjtnQkFFdkIsSUFBSSxJQUFJLENBQUN0QixTQUFTLEtBQUssTUFBTTtvQkFDM0IsSUFBTUgsVUFBVXdCLGlCQUNWZixrQkFBa0JOLFVBQVVPLFNBQVMsSUFDckNnQix1QkFBdUIsSUFBSSxDQUFDaEIsU0FBUyxJQUFLLEdBQUc7b0JBRW5EVixRQUFRWSxLQUFLLENBQUMsQUFBQyxpQkFBd0RjLE9BQXhDakIsaUJBQWdCLDBCQUE2QyxPQUFyQmlCLHNCQUFxQjtvQkFFNUZELG1CQUFtQixJQUFJLENBQUN0QixTQUFTLENBQUNrQixjQUFjLENBQUNsQixXQUFXbUIsZUFBZUMsZ0JBQWdCQztvQkFFM0YsSUFBSUMsa0JBQWtCO3dCQUNwQnpCLFFBQVFvQixLQUFLLENBQUMsQUFBQyxtQkFBMERNLE9BQXhDakIsaUJBQWdCLDBCQUE2QyxPQUFyQmlCLHNCQUFxQjtvQkFDaEc7Z0JBQ0Y7Z0JBRUEsT0FBT0Q7WUFDVDs7O1dBNURtQjFCO3FCQUF1QjRCLGdCQUFPIn0=