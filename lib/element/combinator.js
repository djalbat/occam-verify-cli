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
                var json, context;
                context = this.getContext();
                var statementJSON = (0, _json.statementToStatementJSON)(this.statement), contextJSON = context.toJSON(), statement = statementJSON, string = this.getString();
                context = contextJSON; ///
                json = {
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
                var string = json.string, node = nodeFromString(string, context), statement = (0, _json.statementFromJSON)(json, context), ephemeralContext = (0, _json.ephemeralContextFromJSON)(json, context);
                context = ephemeralContext; ///
                var combinator = new Combinator(context, string, node, statement);
                return combinator;
            }
        }
    ]);
    return Combinator;
}(_wrap_native_super(_occamlanguages.Element)), _define_property(_Combinator, "name", "Combinator"), _Combinator));
function nodeFromString(string, context) {
    var node = (0, _context.literally)(function(context) {
        var combinatorNode = (0, _instantiate.instantiateCombinator)(string, context), node = combinatorNode; ///
        return node;
    }, context);
    return node;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2NvbWJpbmF0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgYXR0ZW1wdCwgbGl0ZXJhbGx5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZUNvbWJpbmF0b3IgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgdmVyaWZ5U3RhdGVtZW50QXNDb21iaW5hdG9yIH0gZnJvbSBcIi4uL3Byb2Nlc3MvdmVyaWZ5XCI7XG5pbXBvcnQgeyB1bmlmeVN0YXRlbWVudFdpdGhDb21iaW5hdG9yIH0gZnJvbSBcIi4uL3Byb2Nlc3MvdW5pZnlcIjtcbmltcG9ydCB7IHN0YXRlbWVudEZyb21KU09OLCBlcGhlbWVyYWxDb250ZXh0RnJvbUpTT04sIHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgQ29tYmluYXRvciBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSlcblxuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudDtcbiAgfVxuXG4gIGdldENvbmJpbmF0b3JOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb21iaW5hdG9yTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiBjb21iaW5hdG9yTm9kZTtcbiAgfVxuXG4gIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb21iaW5hdG9yU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtjb21iaW5hdG9yU3RyaW5nfScgY29tYmluYXRvci4uLmApO1xuXG4gICAgYXR0ZW1wdCgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVtZW50VmVyaWZpZXNBc0NvbWJpbmF0b3IgPSB2ZXJpZnlTdGF0ZW1lbnRBc0NvbWJpbmF0b3IodGhpcy5zdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VmVyaWZpZXNBc0NvbWJpbmF0b3IpIHtcbiAgICAgICAgdGhpcy5zZXRDb250ZXh0KGNvbnRleHQpO1xuXG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7Y29tYmluYXRvclN0cmluZ30nIGNvbWJpbmF0b3IuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllcztcblxuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBjb21iaW5hdG9yU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtjb21iaW5hdG9yU3RyaW5nfScgY29tYmluYXRvci4uLmApO1xuXG4gICAgY29uc3Qgc3BlY2lmaUNvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gc3BlY2lmaUNvbnRleHQ7IC8vL1xuXG4gICAgY29uc3QgY29tYmluYXRvciA9IHRoaXMsIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXNXaXRoQ29tYmluYXRvciA9IHVuaWZ5U3RhdGVtZW50V2l0aENvbWJpbmF0b3Ioc3RhdGVtZW50LCBjb21iaW5hdG9yLCBzdGF0ZWQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpQ29udGV4dCk7XG5cbiAgICBzdGF0ZW1lbnRVbmlmaWVzID0gc3RhdGVtZW50VW5pZmllc1dpdGhDb21iaW5hdG9yOyAvLy9cblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7Y29tYmluYXRvclN0cmluZ30nIGNvbWJpbmF0b3IuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgbGV0IGpzb24sXG4gICAgICAgIGNvbnRleHQ7XG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRKU09OID0gc3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OKHRoaXMuc3RhdGVtZW50KSxcbiAgICAgICAgICBjb250ZXh0SlNPTiA9IGNvbnRleHQudG9KU09OKCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50SlNPTiwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0ID0gY29udGV4dEpTT047ICAvLy9cblxuICAgIGpzb24gPSB7XG4gICAgICBjb250ZXh0LFxuICAgICAgc3RyaW5nLFxuICAgICAgc3RhdGVtZW50XG4gICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkNvbWJpbmF0b3JcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgIG5vZGUgPSBub2RlRnJvbVN0cmluZyhzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIGVwaGVtZXJhbENvbnRleHQgPSBlcGhlbWVyYWxDb250ZXh0RnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICBjb250ZXh0ID0gZXBoZW1lcmFsQ29udGV4dDsgLy8vXG5cbiAgICBjb25zdCBjb21iaW5hdG9yID0gbmV3IENvbWJpbmF0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQpO1xuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3I7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBub2RlRnJvbVN0cmluZyhzdHJpbmcsIGNvbnRleHQpIHtcbiAgY29uc3Qgbm9kZSA9IGxpdGVyYWxseSgoY29udGV4dCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvbWJpbmF0b3JOb2RlID0gaW5zdGFudGlhdGVDb21iaW5hdG9yKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICAgICAgbm9kZSA9IGNvbWJpbmF0b3JOb2RlOyAgLy8vXG5cbiAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIG5vZGU7XG59XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiQ29tYmluYXRvciIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwic3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50IiwiZ2V0Q29uYmluYXRvck5vZGUiLCJnZXROb2RlIiwiY29tYmluYXRvck5vZGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImNvbWJpbmF0b3JTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImF0dGVtcHQiLCJzdGF0ZW1lbnRWZXJpZmllc0FzQ29tYmluYXRvciIsInZlcmlmeVN0YXRlbWVudEFzQ29tYmluYXRvciIsInNldENvbnRleHQiLCJkZWJ1ZyIsInVuaWZ5U3RhdGVtZW50Iiwic3RhdGVkIiwic3RhdGVtZW50VW5pZmllcyIsInN0YXRlbWVudFN0cmluZyIsInNwZWNpZmlDb250ZXh0IiwiZ2V0Q29udGV4dCIsImdlbmVyYWxDb250ZXh0IiwiY29tYmluYXRvciIsInN0YXRlbWVudFVuaWZpZXNXaXRoQ29tYmluYXRvciIsInVuaWZ5U3RhdGVtZW50V2l0aENvbWJpbmF0b3IiLCJ0b0pTT04iLCJqc29uIiwic3RhdGVtZW50SlNPTiIsInN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiIsImNvbnRleHRKU09OIiwiZnJvbUpTT04iLCJub2RlRnJvbVN0cmluZyIsInN0YXRlbWVudEZyb21KU09OIiwiZXBoZW1lcmFsQ29udGV4dCIsImVwaGVtZXJhbENvbnRleHRGcm9tSlNPTiIsIkVsZW1lbnQiLCJuYW1lIiwibGl0ZXJhbGx5IiwiaW5zdGFudGlhdGVDb21iaW5hdG9yIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQUE7Ozs4QkFUd0I7d0JBRUQ7dUJBQ1k7MkJBQ0c7c0JBQ007cUJBQ0M7b0JBQ3lDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUV0RixXQUFlQSxJQUFBQSxnQkFBTSwrQkFBQzs7YUFBTUMsV0FDZEMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FB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