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
var _instantiate = require("../process/instantiate");
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
                var context;
                context = this.getContext();
                var contextJSON = context.toJSON();
                context = contextJSON; ///
                var statementJSON = (0, _json.statementToStatementJSON)(this.statement), statement = statementJSON, string = this.getString(), json = {
                    context: context,
                    string: string,
                    statement: statement
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, context) {
                var combinator = (0, _context.literally)(function(context) {
                    var string = json.string, combinatorNode = (0, _instantiate.instantiateCombinator)(string, context), node = combinatorNode, statement = (0, _json.statementFromJSON)(json, context), ephemeralContext = (0, _json.ephemeralContextFromJSON)(json, context);
                    context = ephemeralContext; ///
                    var combinator = new Combinator(context, string, node, statement);
                    return combinator;
                }, context);
                return combinator;
            }
        }
    ]);
    return Combinator;
}(_wrap_native_super(_occamlanguages.Element)), _define_property(_Combinator, "name", "Combinator"), _Combinator));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2NvbWJpbmF0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgYXR0ZW1wdCwgbGl0ZXJhbGx5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZUNvbWJpbmF0b3IgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgdmVyaWZ5U3RhdGVtZW50QXNDb21iaW5hdG9yIH0gZnJvbSBcIi4uL3Byb2Nlc3MvdmVyaWZ5XCI7XG5pbXBvcnQgeyB1bmlmeVN0YXRlbWVudFdpdGhDb21iaW5hdG9yIH0gZnJvbSBcIi4uL3Byb2Nlc3MvdW5pZnlcIjtcbmltcG9ydCB7XG4gIHN0YXRlbWVudEZyb21KU09OLFxuICBlcGhlbWVyYWxDb250ZXh0RnJvbUpTT04sXG4gIHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTixcbiAgcHJvY2VkdXJlQ2FsbFRvUHJvY2VkdXJlQ2FsbEpTT05cbn0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBDb21iaW5hdG9yIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50KSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKVxuXG4gICAgdGhpcy5zdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0Q29uYmluYXRvck5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbWJpbmF0b3JOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3JOb2RlO1xuICB9XG5cbiAgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbWJpbmF0b3JTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2NvbWJpbmF0b3JTdHJpbmd9JyBjb21iaW5hdG9yLi4uYCk7XG5cbiAgICBhdHRlbXB0KChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRWZXJpZmllc0FzQ29tYmluYXRvciA9IHZlcmlmeVN0YXRlbWVudEFzQ29tYmluYXRvcih0aGlzLnN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRWZXJpZmllc0FzQ29tYmluYXRvcikge1xuICAgICAgICB0aGlzLnNldENvbnRleHQoY29udGV4dCk7XG5cbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0sIGNvbnRleHQpXG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtjb21iaW5hdG9yU3RyaW5nfScgY29tYmluYXRvci5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVzO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIGNvbWJpbmF0b3JTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2NvbWJpbmF0b3JTdHJpbmd9JyBjb21iaW5hdG9yLi4uYCk7XG5cbiAgICBjb25zdCBzcGVjaWZpQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSBzcGVjaWZpQ29udGV4dDsgLy8vXG5cbiAgICBjb25zdCBjb21iaW5hdG9yID0gdGhpcywgLy8vXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllc1dpdGhDb21iaW5hdG9yID0gdW5pZnlTdGF0ZW1lbnRXaXRoQ29tYmluYXRvcihzdGF0ZW1lbnQsIGNvbWJpbmF0b3IsIHN0YXRlZCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmlDb250ZXh0KTtcblxuICAgIHN0YXRlbWVudFVuaWZpZXMgPSBzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbWJpbmF0b3I7IC8vL1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtjb21iaW5hdG9yU3RyaW5nfScgY29tYmluYXRvci5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBsZXQgY29udGV4dDtcblxuICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IGNvbnRleHRKU09OID0gY29udGV4dC50b0pTT04oKTtcblxuICAgIGNvbnRleHQgPSBjb250ZXh0SlNPTjsgIC8vL1xuXG4gICAgY29uc3Qgc3RhdGVtZW50SlNPTiA9IHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTih0aGlzLnN0YXRlbWVudCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50SlNPTiwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICBzdGF0ZW1lbnRcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQ29tYmluYXRvclwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgY29tYmluYXRvciA9IGxpdGVyYWxseSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICBjb21iaW5hdG9yTm9kZSA9IGluc3RhbnRpYXRlQ29tYmluYXRvcihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IGNvbWJpbmF0b3JOb2RlLCAgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGVwaGVtZXJhbENvbnRleHQgPSBlcGhlbWVyYWxDb250ZXh0RnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICAgIGNvbnRleHQgPSBlcGhlbWVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgY29uc3QgY29tYmluYXRvciA9IG5ldyBDb21iaW5hdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50KTtcblxuICAgICAgcmV0dXJuIGNvbWJpbmF0b3I7XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gY29tYmluYXRvcjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiQ29tYmluYXRvciIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwic3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50IiwiZ2V0Q29uYmluYXRvck5vZGUiLCJnZXROb2RlIiwiY29tYmluYXRvck5vZGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImNvbWJpbmF0b3JTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImF0dGVtcHQiLCJzdGF0ZW1lbnRWZXJpZmllc0FzQ29tYmluYXRvciIsInZlcmlmeVN0YXRlbWVudEFzQ29tYmluYXRvciIsInNldENvbnRleHQiLCJkZWJ1ZyIsInVuaWZ5U3RhdGVtZW50Iiwic3RhdGVkIiwic3RhdGVtZW50VW5pZmllcyIsInN0YXRlbWVudFN0cmluZyIsInNwZWNpZmlDb250ZXh0IiwiZ2V0Q29udGV4dCIsImdlbmVyYWxDb250ZXh0IiwiY29tYmluYXRvciIsInN0YXRlbWVudFVuaWZpZXNXaXRoQ29tYmluYXRvciIsInVuaWZ5U3RhdGVtZW50V2l0aENvbWJpbmF0b3IiLCJ0b0pTT04iLCJjb250ZXh0SlNPTiIsInN0YXRlbWVudEpTT04iLCJzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJsaXRlcmFsbHkiLCJpbnN0YW50aWF0ZUNvbWJpbmF0b3IiLCJzdGF0ZW1lbnRGcm9tSlNPTiIsImVwaGVtZXJhbENvbnRleHQiLCJlcGhlbWVyYWxDb250ZXh0RnJvbUpTT04iLCJFbGVtZW50IiwibmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZ0JBOzs7ZUFBQTs7OzhCQWR3Qjt3QkFFRDt1QkFDWTsyQkFDRztzQkFDTTtxQkFDQztvQkFNdEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRVAsV0FBZUEsSUFBQUEsZ0JBQU0sK0JBQUM7O2FBQU1DLFdBQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVM7Z0NBRGxCSjs7Z0JBRXhCLGtCQUZ3QkE7WUFFbEJDO1lBQVNDO1lBQVFDOztRQUV2QixNQUFLQyxTQUFTLEdB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