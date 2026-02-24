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
                debugger;
            }
        }
    ]);
    return Combinator;
}(_wrap_native_super(_occamlanguages.Element)), _define_property(_Combinator, "name", "Combinator"), _Combinator));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2NvbWJpbmF0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgYXR0ZW1wdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgdmVyaWZ5U3RhdGVtZW50QXNDb21iaW5hdG9yIH0gZnJvbSBcIi4uL3Byb2Nlc3MvdmVyaWZ5XCI7XG5pbXBvcnQgeyB1bmlmeVN0YXRlbWVudFdpdGhDb21iaW5hdG9yIH0gZnJvbSBcIi4uL3Byb2Nlc3MvdW5pZnlcIjtcbmltcG9ydCB7IHN0YXRlbWVudEZyb21KU09OLCBzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIENvbWJpbmF0b3IgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpXG5cbiAgICB0aGlzLnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRDb25iaW5hdG9yTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY29tYmluYXRvck5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gY29tYmluYXRvck5vZGU7XG4gIH1cblxuICB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29tYmluYXRvclN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7Y29tYmluYXRvclN0cmluZ30nIGNvbWJpbmF0b3IuLi5gKTtcblxuICAgIGF0dGVtcHQoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFZlcmlmaWVzQXNDb21iaW5hdG9yID0gdmVyaWZ5U3RhdGVtZW50QXNDb21iaW5hdG9yKHRoaXMuc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFZlcmlmaWVzQXNDb21iaW5hdG9yKSB7XG4gICAgICAgIHRoaXMuc2V0Q29udGV4dChjb250ZXh0KTtcblxuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSwgY29udGV4dClcblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2NvbWJpbmF0b3JTdHJpbmd9JyBjb21iaW5hdG9yLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZXM7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgY29tYmluYXRvclN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7Y29tYmluYXRvclN0cmluZ30nIGNvbWJpbmF0b3IuLi5gKTtcblxuICAgIGNvbnN0IHNwZWNpZmlDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29udGV4dCA9IHNwZWNpZmlDb250ZXh0OyAvLy9cblxuICAgIGNvbnN0IGNvbWJpbmF0b3IgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbWJpbmF0b3IgPSB1bmlmeVN0YXRlbWVudFdpdGhDb21iaW5hdG9yKHN0YXRlbWVudCwgY29tYmluYXRvciwgc3RhdGVkLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaUNvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50VW5pZmllcyA9IHN0YXRlbWVudFVuaWZpZXNXaXRoQ29tYmluYXRvcjsgLy8vXG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2NvbWJpbmF0b3JTdHJpbmd9JyBjb21iaW5hdG9yLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0YXRlbWVudEpTT04gPSBzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04odGhpcy5zdGF0ZW1lbnQpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RhdGVtZW50XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkNvbWJpbmF0b3JcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGRlYnVnZ2VyXG5cbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiQ29tYmluYXRvciIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwic3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50IiwiZ2V0Q29uYmluYXRvck5vZGUiLCJnZXROb2RlIiwiY29tYmluYXRvck5vZGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImNvbWJpbmF0b3JTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImF0dGVtcHQiLCJzdGF0ZW1lbnRWZXJpZmllc0FzQ29tYmluYXRvciIsInZlcmlmeVN0YXRlbWVudEFzQ29tYmluYXRvciIsInNldENvbnRleHQiLCJkZWJ1ZyIsInVuaWZ5U3RhdGVtZW50Iiwic3RhdGVkIiwic3RhdGVtZW50VW5pZmllcyIsInN0YXRlbWVudFN0cmluZyIsInNwZWNpZmlDb250ZXh0IiwiZ2V0Q29udGV4dCIsImdlbmVyYWxDb250ZXh0IiwiY29tYmluYXRvciIsInN0YXRlbWVudFVuaWZpZXNXaXRoQ29tYmluYXRvciIsInVuaWZ5U3RhdGVtZW50V2l0aENvbWJpbmF0b3IiLCJ0b0pTT04iLCJzdGF0ZW1lbnRKU09OIiwic3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OIiwianNvbiIsImZyb21KU09OIiwiRWxlbWVudCIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7OzhCQVJ3Qjt3QkFFRDt1QkFDQztzQkFDb0I7cUJBQ0M7b0JBQ2U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTVELFdBQWVBLElBQUFBLGdCQUFNLCtCQUFDOzthQUFNQyxXQUNkQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTO2dDQURsQko7O2dCQUV4QixrQkFGd0JBO1lBRWxCQztZQUFTQztZQUFRQzs7UUFFdkIsTUFBS0MsU0FBUyxHQUFHQTs7Ozs7WUFHbkJDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0QsU0FBUztZQUN2Qjs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNSCxPQUFPLElBQUksQ0FBQ0ksT0FBTyxJQUNuQkMsaUJBQWlCTCxNQUFPLEdBQUc7Z0JBRWpDLE9BQU9LO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsT0FBT1IsT0FBTzs7Z0JBQ1osSUFBSVMsV0FBVztnQkFFZixJQUFNQyxtQkFBbUIsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztnQkFFL0NYLFFBQVFZLEtBQUssQ0FBQyxBQUFDLGtCQUFrQyxPQUFqQkYsa0JBQWlCO2dCQUVqREcsSUFBQUEsZ0JBQU8sRUFBQyxTQUFDYjtvQkFDUCxJQUFNYyxnQ0FBZ0NDLElBQUFBLG1DQUEyQixFQUFDLE1BQUtaLFNBQVMsRUFBRUg7b0JBRWxGLElBQUljLCtCQUErQjt3QkFDakMsTUFBS0UsVUFBVSxDQUFDaEI7d0JBRWhCUyxXQUFXO29CQUNiO2dCQUNGLEdBQUdUO2dCQUVILElBQUlTLFVBQVU7b0JBQ1pULFFBQVFpQixLQUFLLENBQUMsQUFBQyxvQkFBb0MsT0FBakJQLGtCQUFpQjtnQkFDckQ7Z0JBRUEsT0FBT0Q7WUFDVDs7O1lBRUFTLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFlZixTQUFTLEVBQUVnQixNQUFNLEVBQUVuQixPQUFPO2dCQUN2QyxJQUFJb0I7Z0JBRUosSUFBTUMsa0JBQWtCbEIsVUFBVVEsU0FBUyxJQUNyQ0QsbUJBQW1CLElBQUksQ0FBQ0MsU0FBUyxJQUFLLEdBQUc7Z0JBRS9DWCxRQUFRWSxLQUFLLENBQUMsQUFBQyxpQkFBd0RGLE9BQXhDVyxpQkFBZ0IsMEJBQXlDLE9BQWpCWCxrQkFBaUI7Z0JBRXhGLElBQU1ZLGlCQUFpQnRCLFNBQVMsR0FBRztnQkFFbkNBLFVBQVUsSUFBSSxDQUFDdUIsVUFBVTtnQkFFekIsSUFBTUMsaUJBQWlCeEIsU0FBUyxHQUFHO2dCQUVuQ0EsVUFBVXNCLGdCQUFnQixHQUFHO2dCQUU3QixJQUFNRyxhQUFhLElBQUksRUFDakJDLGlDQUFpQ0MsSUFBQUEsbUNBQTRCLEVBQUN4QixXQUFXc0IsWUFBWU4sUUFBUUssZ0JBQWdCRjtnQkFFbkhGLG1CQUFtQk0sZ0NBQWdDLEdBQUc7Z0JBRXRELElBQUlOLGtCQUFrQjtvQkFDcEJwQixRQUFRaUIsS0FBSyxDQUFDLEFBQUMsbUJBQTBEUCxPQUF4Q1csaUJBQWdCLDBCQUF5QyxPQUFqQlgsa0JBQWlCO2dCQUM1RjtnQkFFQSxPQUFPVTtZQUNUOzs7WUFFQVEsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLGdCQUFnQkMsSUFBQUEsOEJBQXdCLEVBQUMsSUFBSSxDQUFDM0IsU0FBUyxHQUN2REEsWUFBWTBCLGVBQ1pFLE9BQU87b0JBQ0w1QixXQUFBQTtnQkFDRjtnQkFFTixPQUFPNEI7WUFDVDs7OztZQUlPQyxLQUFBQTttQkFBUCxTQUFPQSxTQUFTRCxJQUFJLEVBQUUvQixPQUFPO2dCQUMzQixRQUFRO1lBRVY7Ozs7cUJBckY2Q2lDLHVCQUFPLElBZ0ZwRCw4QkFBT0MsUUFBTyJ9