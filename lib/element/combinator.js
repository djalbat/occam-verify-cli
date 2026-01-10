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
var _elements = require("../elements");
var _verify = require("../process/verify");
var _unify = require("../process/unify");
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
var _Combinator;
var _default = (0, _elements.define)((_Combinator = /*#__PURE__*/ function(Element) {
    _inherits(Combinator, Element);
    function Combinator(context, string, node, statement) {
        _class_call_check(this, Combinator);
        var _this;
        _this = _call_super(this, Combinator, [
            context,
            string,
            node
        ]);
        _this.statement = statement;
        return _this;
    }
    _create_class(Combinator, [
        {
            key: "getStatement",
            value: function getStatement() {
                return this.statement;
            }
        },
        {
            key: "verify",
            value: function verify() {
                var verifies;
                var node = this.getNode(), context = this.getContext(), combinatorString = this.getString(); ///
                context.trace("Verifying the '".concat(combinatorString, "' combinator..."), node);
                var combinator = this, combinatorVerifies = (0, _verify.verifyCombinator)(combinator, context);
                if (combinatorVerifies) {
                    verifies = true;
                }
                if (verifies) {
                    context.debug("...verified the '".concat(combinatorString, "' combinator."), node);
                }
                return verifies;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, assignments, stated, context) {
                var statementUnifies;
                var statementString = statement.getString(), combinatorString = this.getString(); ///
                context.trace("Unifying the '".concat(statementString, "' statement with the '").concat(combinatorString, "' combinator..."));
                var specifiContext = context; ///
                context = this.getContext();
                var generalContext = context; ///
                context = specifiContext; ///
                var combinator = this, statementUnifiesWithCombinator = (0, _unify.unifyStatementWithCombinator)(statement, combinator, assignments, stated, generalContext, specifiContext);
                statementUnifies = statementUnifiesWithCombinator; ///
                if (statementUnifies) {
                    context.debug("...unified the '".concat(statementString, "' statement with the '").concat(combinatorString, "' combinator."));
                }
                return statementUnifies;
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
                var statement = (0, _json.statementFromJSON)(json, context), combinator = new Combinator(statement);
                return combinator;
            }
        }
    ]);
    return Combinator;
}(_wrap_native_super(_element.default)), _define_property(_Combinator, "name", "Combinator"), _Combinator));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2NvbWJpbmF0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgdmVyaWZ5Q29tYmluYXRvciB9IGZyb20gXCIuLi9wcm9jZXNzL3ZlcmlmeVwiO1xuaW1wb3J0IHsgdW5pZnlTdGF0ZW1lbnRXaXRoQ29tYmluYXRvciB9IGZyb20gXCIuLi9wcm9jZXNzL3VuaWZ5XCI7XG5pbXBvcnQgeyBzdGF0ZW1lbnRGcm9tSlNPTiwgc3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBDb21iaW5hdG9yIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50KSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKVxuXG4gICAgdGhpcy5zdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcztcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgY29tYmluYXRvclN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29tYmluYXRvclN0cmluZ30nIGNvbWJpbmF0b3IuLi5gLCBub2RlKTtcblxuICAgIGNvbnN0IGNvbWJpbmF0b3IgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgY29tYmluYXRvclZlcmlmaWVzID0gdmVyaWZ5Q29tYmluYXRvcihjb21iaW5hdG9yLCBjb250ZXh0KTtcblxuICAgIGlmIChjb21iaW5hdG9yVmVyaWZpZXMpIHtcbiAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb21iaW5hdG9yU3RyaW5nfScgY29tYmluYXRvci5gLCBub2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllcztcblxuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBjb21iaW5hdG9yU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtjb21iaW5hdG9yU3RyaW5nfScgY29tYmluYXRvci4uLmApO1xuXG4gICAgY29uc3Qgc3BlY2lmaUNvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gc3BlY2lmaUNvbnRleHQ7IC8vL1xuXG4gICAgY29uc3QgY29tYmluYXRvciA9IHRoaXMsIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXNXaXRoQ29tYmluYXRvciA9IHVuaWZ5U3RhdGVtZW50V2l0aENvbWJpbmF0b3Ioc3RhdGVtZW50LCBjb21iaW5hdG9yLCBhc3NpZ25tZW50cywgc3RhdGVkLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaUNvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50VW5pZmllcyA9IHN0YXRlbWVudFVuaWZpZXNXaXRoQ29tYmluYXRvcjsgLy8vXG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2NvbWJpbmF0b3JTdHJpbmd9JyBjb21iaW5hdG9yLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0YXRlbWVudEpTT04gPSBzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04odGhpcy5zdGF0ZW1lbnQpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RhdGVtZW50LFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJDb21iaW5hdG9yXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBjb21iaW5hdG9yID0gbmV3IENvbWJpbmF0b3Ioc3RhdGVtZW50KTtcblxuICAgIHJldHVybiBjb21iaW5hdG9yO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJDb21iaW5hdG9yIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJzdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImdldE5vZGUiLCJnZXRDb250ZXh0IiwiY29tYmluYXRvclN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwiY29tYmluYXRvciIsImNvbWJpbmF0b3JWZXJpZmllcyIsInZlcmlmeUNvbWJpbmF0b3IiLCJkZWJ1ZyIsInVuaWZ5U3RhdGVtZW50IiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJzdGF0ZW1lbnRVbmlmaWVzIiwic3RhdGVtZW50U3RyaW5nIiwic3BlY2lmaUNvbnRleHQiLCJnZW5lcmFsQ29udGV4dCIsInN0YXRlbWVudFVuaWZpZXNXaXRoQ29tYmluYXRvciIsInVuaWZ5U3RhdGVtZW50V2l0aENvbWJpbmF0b3IiLCJ0b0pTT04iLCJzdGF0ZW1lbnRKU09OIiwic3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OIiwianNvbiIsImZyb21KU09OIiwic3RhdGVtZW50RnJvbUpTT04iLCJFbGVtZW50IiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7OERBUG9CO3dCQUVHO3NCQUNVO3FCQUNZO29CQUNlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTVELFdBQWVBLElBQUFBLGdCQUFNLCtCQUFDOzthQUFNQyxXQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTO2dDQURsQko7O2dCQUV4QixrQkFGd0JBO1lBRWxCQztZQUFTQztZQUFRQzs7UUFFdkIsTUFBS0MsU0FBUyxHQUFHQTs7Ozs7WUFHbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsU0FBUztZQUN2Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQztnQkFFSixJQUFNSixPQUFPLElBQUksQ0FBQ0ssT0FBTyxJQUNuQlAsVUFBVSxJQUFJLENBQUNRLFVBQVUsSUFDekJDLG1CQUFtQixJQUFJLENBQUNDLFNBQVMsSUFBSyxHQUFHO2dCQUUvQ1YsUUFBUVcsS0FBSyxDQUFDLEFBQUMsa0JBQWtDLE9BQWpCRixrQkFBaUIsb0JBQWtCUDtnQkFFbkUsSUFBTVUsYUFBYSxJQUFJLEVBQ2pCQyxxQkFBcUJDLElBQUFBLHdCQUFnQixFQUFDRixZQUFZWjtnQkFFeEQsSUFBSWEsb0JBQW9CO29CQUN0QlAsV0FBVztnQkFDYjtnQkFFQSxJQUFJQSxVQUFVO29CQUNaTixRQUFRZSxLQUFLLENBQUMsQUFBQyxvQkFBb0MsT0FBakJOLGtCQUFpQixrQkFBZ0JQO2dCQUNyRTtnQkFFQSxPQUFPSTtZQUNUOzs7WUFFQVUsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWViLFNBQVMsRUFBRWMsV0FBVyxFQUFFQyxNQUFNLEVBQUVsQixPQUFPO2dCQUNwRCxJQUFJbUI7Z0JBRUosSUFBTUMsa0JBQWtCakIsVUFBVU8sU0FBUyxJQUNyQ0QsbUJBQW1CLElBQUksQ0FBQ0MsU0FBUyxJQUFLLEdBQUc7Z0JBRS9DVixRQUFRVyxLQUFLLENBQUMsQUFBQyxpQkFBd0RGLE9BQXhDVyxpQkFBZ0IsMEJBQXlDLE9BQWpCWCxrQkFBaUI7Z0JBRXhGLElBQU1ZLGlCQUFpQnJCLFNBQVMsR0FBRztnQkFFbkNBLFVBQVUsSUFBSSxDQUFDUSxVQUFVO2dCQUV6QixJQUFNYyxpQkFBaUJ0QixTQUFTLEdBQUc7Z0JBRW5DQSxVQUFVcUIsZ0JBQWdCLEdBQUc7Z0JBRTdCLElBQU1ULGFBQWEsSUFBSSxFQUNqQlcsaUNBQWlDQyxJQUFBQSxtQ0FBNEIsRUFBQ3JCLFdBQVdTLFlBQVlLLGFBQWFDLFFBQVFJLGdCQUFnQkQ7Z0JBRWhJRixtQkFBbUJJLGdDQUFnQyxHQUFHO2dCQUV0RCxJQUFJSixrQkFBa0I7b0JBQ3BCbkIsUUFBUWUsS0FBSyxDQUFDLEFBQUMsbUJBQTBETixPQUF4Q1csaUJBQWdCLDBCQUF5QyxPQUFqQlgsa0JBQWlCO2dCQUM1RjtnQkFFQSxPQUFPVTtZQUNUOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGdCQUFnQkMsSUFBQUEsOEJBQXdCLEVBQUMsSUFBSSxDQUFDeEIsU0FBUyxHQUN2REEsWUFBWXVCLGVBQ1pFLE9BQU87b0JBQ0x6QixXQUFBQTtnQkFDRjtnQkFFTixPQUFPeUI7WUFDVDs7OztZQUlPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTRCxJQUFJLEVBQUU1QixPQUFPO2dCQUMzQixJQUFNRyxZQUFZMkIsSUFBQUEsdUJBQWlCLEVBQUNGLE1BQU01QixVQUNwQ1ksYUFBYSxJQUFJYixXQUFXSTtnQkFFbEMsT0FBT1M7WUFDVDs7OztxQkEvRTZDbUIsZ0JBQU8sSUF3RXBELDhCQUFPQyxRQUFPIn0=