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
            key: "getConbinatorNode",
            value: function getConbinatorNode() {
                var node = this.getNode(), combinatorNode = node; ///
                return combinatorNode;
            }
        },
        {
            key: "verify",
            value: function verify(context) {
                var _this = this;
                var verifies = false;
                var combinatorString = this.getString(); ///
                context.trace("Verifying the '".concat(combinatorString, "' combinator..."));
                (0, _context.attempt)(function(context) {
                    var statementVerifiesAsCombinator = (0, _verify.verifyStatementAsCombinator)(_this.statement, context);
                    if (statementVerifiesAsCombinator) {
                        _this.setContext(context);
                        verifies = true;
                    }
                }, context);
                if (verifies) {
                    context.debug("...verified the '".concat(combinatorString, "' combinator."));
                }
                return verifies;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, stated, context) {
                var statementUnifies;
                var statementString = statement.getString(), combinatorString = this.getString(); ///
                context.trace("Unifying the '".concat(statementString, "' statement with the '").concat(combinatorString, "' combinator..."));
                var specifiContext = context; ///
                context = this.getContext();
                var generalContext = context; ///
                context = specifiContext; ///
                var combinator = this, statementUnifiesWithCombinator = (0, _unify.unifyStatementWithCombinator)(statement, combinator, stated, generalContext, specifiContext);
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
}(_wrap_native_super(_occamlanguages.Element)), _define_property(_Combinator, "name", "Combinator"), _Combinator));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2NvbWJpbmF0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgYXR0ZW1wdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgdmVyaWZ5U3RhdGVtZW50QXNDb21iaW5hdG9yIH0gZnJvbSBcIi4uL3Byb2Nlc3MvdmVyaWZ5XCI7XG5pbXBvcnQgeyB1bmlmeVN0YXRlbWVudFdpdGhDb21iaW5hdG9yIH0gZnJvbSBcIi4uL3Byb2Nlc3MvdW5pZnlcIjtcbmltcG9ydCB7IHN0YXRlbWVudEZyb21KU09OLCBzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIENvbWJpbmF0b3IgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpXG5cbiAgICB0aGlzLnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRDb25iaW5hdG9yTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY29tYmluYXRvck5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gY29tYmluYXRvck5vZGU7XG4gIH1cblxuICB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29tYmluYXRvclN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29tYmluYXRvclN0cmluZ30nIGNvbWJpbmF0b3IuLi5gKTtcblxuICAgIGF0dGVtcHQoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVzQXNDb21iaW5hdG9yID0gdmVyaWZ5U3RhdGVtZW50QXNDb21iaW5hdG9yKHRoaXMuc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFZlcmlmaWVzQXNDb21iaW5hdG9yKSB7XG4gICAgICAgIHRoaXMuc2V0Q29udGV4dChjb250ZXh0KTtcblxuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSwgY29udGV4dClcblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbWJpbmF0b3JTdHJpbmd9JyBjb21iaW5hdG9yLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZXM7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgY29tYmluYXRvclN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7Y29tYmluYXRvclN0cmluZ30nIGNvbWJpbmF0b3IuLi5gKTtcblxuICAgIGNvbnN0IHNwZWNpZmlDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29udGV4dCA9IHNwZWNpZmlDb250ZXh0OyAvLy9cblxuICAgIGNvbnN0IGNvbWJpbmF0b3IgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbWJpbmF0b3IgPSB1bmlmeVN0YXRlbWVudFdpdGhDb21iaW5hdG9yKHN0YXRlbWVudCwgY29tYmluYXRvciwgc3RhdGVkLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaUNvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50VW5pZmllcyA9IHN0YXRlbWVudFVuaWZpZXNXaXRoQ29tYmluYXRvcjsgLy8vXG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2NvbWJpbmF0b3JTdHJpbmd9JyBjb21iaW5hdG9yLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0YXRlbWVudEpTT04gPSBzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04odGhpcy5zdGF0ZW1lbnQpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RhdGVtZW50LFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJDb21iaW5hdG9yXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBjb21iaW5hdG9yID0gbmV3IENvbWJpbmF0b3Ioc3RhdGVtZW50KTtcblxuICAgIHJldHVybiBjb21iaW5hdG9yO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJDb21iaW5hdG9yIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJzdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJnZXRDb25iaW5hdG9yTm9kZSIsImdldE5vZGUiLCJjb21iaW5hdG9yTm9kZSIsInZlcmlmeSIsInZlcmlmaWVzIiwiY29tYmluYXRvclN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwiYXR0ZW1wdCIsInN0YXRlbWVudFZlcmlmaWVzQXNDb21iaW5hdG9yIiwidmVyaWZ5U3RhdGVtZW50QXNDb21iaW5hdG9yIiwic2V0Q29udGV4dCIsImRlYnVnIiwidW5pZnlTdGF0ZW1lbnQiLCJzdGF0ZWQiLCJzdGF0ZW1lbnRVbmlmaWVzIiwic3RhdGVtZW50U3RyaW5nIiwic3BlY2lmaUNvbnRleHQiLCJnZXRDb250ZXh0IiwiZ2VuZXJhbENvbnRleHQiLCJjb21iaW5hdG9yIiwic3RhdGVtZW50VW5pZmllc1dpdGhDb21iaW5hdG9yIiwidW5pZnlTdGF0ZW1lbnRXaXRoQ29tYmluYXRvciIsInRvSlNPTiIsInN0YXRlbWVudEpTT04iLCJzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJzdGF0ZW1lbnRGcm9tSlNPTiIsIkVsZW1lbnQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7Ozs4QkFSd0I7d0JBRUQ7dUJBQ0M7c0JBQ29CO3FCQUNDO29CQUNlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUU1RCxXQUFlQSxJQUFBQSxnQkFBTSwrQkFBQzs7YUFBTUMsV0FDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUztnQ0FEbEJKOztnQkFF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