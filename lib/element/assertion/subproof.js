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
var _assertion = /*#__PURE__*/ _interop_require_default(require("../assertion"));
var _elements = require("../../elements");
var _unify = require("../../process/unify");
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
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var _SubproofAssertion;
var match = _necessary.arrayUtilities.match;
var _default = (0, _elements.define)((_SubproofAssertion = /*#__PURE__*/ function(Assertion) {
    _inherits(SubproofAssertion, Assertion);
    function SubproofAssertion(context, string, node, statements) {
        _class_call_check(this, SubproofAssertion);
        var _this;
        _this = _call_super(this, SubproofAssertion, [
            context,
            string,
            node
        ]);
        _this.statements = statements;
        return _this;
    }
    _create_class(SubproofAssertion, [
        {
            key: "getStatements",
            value: function getStatements() {
                return this.statements;
            }
        },
        {
            key: "getSubproofAssertionNode",
            value: function getSubproofAssertionNode() {
                var node = this.getNode(), subproofAssertionNode = node; ///
                return subproofAssertionNode;
            }
        },
        {
            key: "validate",
            value: function validate(stated, context) {
                var subproofAssertion = null;
                var subproofAssertionString = this.getString(); ///
                context.trace("Validating the '".concat(subproofAssertionString, "' subproof assertion..."));
                var validAssertion = this.findValidAssertion(context);
                if (validAssertion) {
                    subproofAssertion = validAssertion; ///
                    context.debug("...the '".concat(subproofAssertionString, "' subproof assertion is already valid."));
                } else {
                    var validates = false;
                    var statementsValidate = this.validateStatements(stated, context);
                    if (statementsValidate) {
                        validates = true;
                    }
                    if (validates) {
                        var assertion = this; ///
                        subproofAssertion = assertion; ///
                        context.addAssertion(assertion);
                        context.debug("...validated the '".concat(subproofAssertionString, "' subproof assertion."));
                    }
                }
                return subproofAssertion;
            }
        },
        {
            key: "validateStatements",
            value: function validateStatements(stated, context) {
                stated = true; ///
                var statementsValidate = this.statements.map(function(statement) {
                    var statementValidates = false;
                    statement = statement.validate(stated, context); ///
                    if (statement !== null) {
                        statementValidates = true;
                    }
                    if (statementValidates) {
                        return true;
                    }
                });
                return statementsValidate;
            }
        },
        {
            key: "unifySubproof",
            value: function unifySubproof(subproof, generalContext, specificContext) {
                var subproofUnifies;
                var subproofString = subproof.getString(), subproofAssertionString = this.getString(); ///
                specificContext.trace("Unifying the '".concat(subproofString, "' subproof with the '").concat(subproofAssertionString, "' subproof assertion..."));
                var subproofStatements = subproof.getStatements(), subproofAssertionStatements = this.statements; ///
                subproofUnifies = match(subproofAssertionStatements, subproofStatements, function(subproofAssertionStatement, subproofStatement) {
                    var generalStatement = subproofAssertionStatement, specificStatement = subproofStatement, statementUnifies = (0, _unify.unifyStatement)(generalStatement, specificStatement, generalContext, specificContext);
                    if (statementUnifies) {
                        return true;
                    }
                });
                if (subproofUnifies) {
                    specificContext.debug("...unified the '".concat(subproofString, "' subproof with the '").concat(subproofAssertionString, "' subproof assertion."));
                }
                return subproofUnifies;
            }
        }
    ]);
    return SubproofAssertion;
}(_assertion.default), _define_property(_SubproofAssertion, "name", "SubproofAssertion"), _SubproofAssertion));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi9zdWJwcm9vZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBBc3NlcnRpb24gZnJvbSBcIi4uL2Fzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHVuaWZ5U3RhdGVtZW50IH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvdW5pZnlcIjtcblxuY29uc3QgeyBtYXRjaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTdWJwcm9vZkFzc2VydGlvbiBleHRlbmRzIEFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50cykge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnRzO1xuICB9XG5cbiAgZ2V0U3VicHJvb2ZBc3NlcnRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvbk5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBzdWJwcm9vZkFzc2VydGlvbk5vZGU7XG4gIH1cblxuICB2YWxpZGF0ZShzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZBc3NlcnRpb24gPSBudWxsO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3QgdmFsaWRBc3NlcnRpb24gPSB0aGlzLmZpbmRWYWxpZEFzc2VydGlvbihjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZEFzc2VydGlvbikge1xuICAgICAgc3VicHJvb2ZBc3NlcnRpb24gPSB2YWxpZEFzc2VydGlvbjsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIGFzc2VydGlvbiBpcyBhbHJlYWR5IHZhbGlkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IHN0YXRlbWVudHNWYWxpZGF0ZSA9IHRoaXMudmFsaWRhdGVTdGF0ZW1lbnRzKHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRzVmFsaWRhdGUpIHtcbiAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBhc3NlcnRpb24gPSB0aGlzOyAvLy9cblxuICAgICAgICBzdWJwcm9vZkFzc2VydGlvbiA9IGFzc2VydGlvbjsgIC8vL1xuXG4gICAgICAgIGNvbnRleHQuYWRkQXNzZXJ0aW9uKGFzc2VydGlvbik7XG5cbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIGFzc2VydGlvbi5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2ZBc3NlcnRpb247XG4gIH1cblxuICB2YWxpZGF0ZVN0YXRlbWVudHMoc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgc3RhdGVkID0gdHJ1ZTsgIC8vL1xuXG4gICAgY29uc3Qgc3RhdGVtZW50c1ZhbGlkYXRlID0gdGhpcy5zdGF0ZW1lbnRzLm1hcCgoc3RhdGVtZW50KSA9PiB7XG4gICAgICBsZXQgc3RhdGVtZW50VmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudC52YWxpZGF0ZShzdGF0ZWQsIGNvbnRleHQpOyAgLy8vXG5cbiAgICAgIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgc3RhdGVtZW50VmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRzVmFsaWRhdGU7XG4gIH1cblxuICB1bmlmeVN1YnByb29mKHN1YnByb29mLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mVW5pZmllcztcblxuICAgIGNvbnN0IHN1YnByb29mU3RyaW5nID0gc3VicHJvb2YuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBzcGVjaWZpY0NvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke3N1YnByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2YgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzdWJwcm9vZlN0YXRlbWVudHMgPSBzdWJwcm9vZi5nZXRTdGF0ZW1lbnRzKCksXG4gICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25TdGF0ZW1lbnRzID0gdGhpcy5zdGF0ZW1lbnRzOyAgLy8vXG5cbiAgICBzdWJwcm9vZlVuaWZpZXMgPSBtYXRjaChzdWJwcm9vZkFzc2VydGlvblN0YXRlbWVudHMsIHN1YnByb29mU3RhdGVtZW50cywgKHN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50LCBzdWJwcm9vZlN0YXRlbWVudCkgPT4ge1xuICAgICAgY29uc3QgZ2VuZXJhbFN0YXRlbWVudCA9IHN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50LCAgLy8vXG4gICAgICAgICAgICBzcGVjaWZpY1N0YXRlbWVudCA9IHN1YnByb29mU3RhdGVtZW50LCAgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdW5pZnlTdGF0ZW1lbnQoZ2VuZXJhbFN0YXRlbWVudCwgc3BlY2lmaWNTdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChzdWJwcm9vZlVuaWZpZXMpIHtcbiAgICAgIHNwZWNpZmljQ29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtzdWJwcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2ZVbmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN1YnByb29mQXNzZXJ0aW9uXCI7XG59KTtcblxuIl0sIm5hbWVzIjpbIm1hdGNoIiwiYXJyYXlVdGlsaXRpZXMiLCJkZWZpbmUiLCJTdWJwcm9vZkFzc2VydGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwic3RhdGVtZW50cyIsImdldFN0YXRlbWVudHMiLCJnZXRTdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJnZXROb2RlIiwic3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwidmFsaWRhdGUiLCJzdGF0ZWQiLCJzdWJwcm9vZkFzc2VydGlvbiIsInN1YnByb29mQXNzZXJ0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YWxpZEFzc2VydGlvbiIsImZpbmRWYWxpZEFzc2VydGlvbiIsImRlYnVnIiwidmFsaWRhdGVzIiwic3RhdGVtZW50c1ZhbGlkYXRlIiwidmFsaWRhdGVTdGF0ZW1lbnRzIiwiYXNzZXJ0aW9uIiwiYWRkQXNzZXJ0aW9uIiwibWFwIiwic3RhdGVtZW50Iiwic3RhdGVtZW50VmFsaWRhdGVzIiwidW5pZnlTdWJwcm9vZiIsInN1YnByb29mIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJzdWJwcm9vZlVuaWZpZXMiLCJzdWJwcm9vZlN0cmluZyIsInN1YnByb29mU3RhdGVtZW50cyIsInN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50cyIsInN1YnByb29mQXNzZXJ0aW9uU3RhdGVtZW50Iiwic3VicHJvb2ZTdGF0ZW1lbnQiLCJnZW5lcmFsU3RhdGVtZW50Iiwic3BlY2lmaWNTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVbmlmaWVzIiwidW5pZnlTdGF0ZW1lbnQiLCJBc3NlcnRpb24iLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQUE7Ozt5QkFUK0I7Z0VBRVQ7d0JBRUM7cUJBQ1E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQixJQUFNLEFBQUVBLFFBQVVDLHlCQUFjLENBQXhCRDtJQUVSLFdBQWVFLElBQUFBLGdCQUFNLHNDQUFDOzthQUFNQyxrQkFDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVTtnQ0FEbkJKOztnQkFFeEIsa0JBRndCQTtZQUVsQkM7WUFBU0M7WUFBUUM7O1FBRXZCLE1BQUtDLFVBQVUsR0FBR0E7Ozs7O1lBR3BCQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELFVBQVU7WUFDeEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUgsT0FBTyxJQUFJLENBQUNJLE9BQU8sSUFDbkJDLHdCQUF3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