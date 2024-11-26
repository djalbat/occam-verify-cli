"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return StatementPartialContext;
    }
});
var _partial = /*#__PURE__*/ _interop_require_wildcard(require("../../context/partial"));
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
var bnf = "\n\n        _ ::= statement... <END_OF_LINE> ;\n        \n      ", rule = (0, _partial.ruleFromBNF)(bnf);
var StatementPartialContext = /*#__PURE__*/ function(PartialContext) {
    _inherits(StatementPartialContext, PartialContext);
    function StatementPartialContext() {
        _class_call_check(this, StatementPartialContext);
        return _call_super(this, StatementPartialContext, arguments);
    }
    _create_class(StatementPartialContext, [
        {
            key: "getStatementNode",
            value: function getStatementNode() {
                var statementNode = this.node; ///
                return statementNode;
            }
        },
        {
            key: "getStatementTokens",
            value: function getStatementTokens() {
                var statementTokens = this.tokens; ///
                return statementTokens;
            }
        }
    ], [
        {
            key: "fromStatement",
            value: function fromStatement(statement, context) {
                var string = statement.getString(), lexer = context.getLexer(), parser = context.getParser(), statementPartialContext = _partial.default.fromStringLexerAndParser(StatementPartialContext, string, lexer, parser);
                return statementPartialContext;
            }
        },
        {
            key: "fromStringLexerAndParser",
            value: function fromStringLexerAndParser(string, lexer, parser) {
                return _partial.default.fromStringLexerAndParser(StatementPartialContext, string, lexer, parser);
            }
        }
    ]);
    return StatementPartialContext;
}(_partial.default);
_define_property(StatementPartialContext, "rule", rule);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250ZXh0L3BhcnRpYWwvc3RhdGVtZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUGFydGlhbENvbnRleHQgZnJvbSBcIi4uLy4uL2NvbnRleHQvcGFydGlhbFwiO1xuXG5pbXBvcnQgeyBydWxlRnJvbUJORiB9IGZyb20gXCIuLi8uLi9jb250ZXh0L3BhcnRpYWxcIjtcblxuY29uc3QgYm5mID0gYFxuXG4gICAgICAgIF8gOjo9IHN0YXRlbWVudC4uLiA8RU5EX09GX0xJTkU+IDtcbiAgICAgICAgXG4gICAgICBgLFxuICAgICAgcnVsZSA9IHJ1bGVGcm9tQk5GKGJuZik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRlbWVudFBhcnRpYWxDb250ZXh0IGV4dGVuZHMgUGFydGlhbENvbnRleHQge1xuICBnZXRTdGF0ZW1lbnROb2RlKCkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSB0aGlzLm5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnRUb2tlbnMoKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50VG9rZW5zID0gdGhpcy50b2tlbnM7IC8vL1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFRva2VucztcbiAgfVxuXG4gIHN0YXRpYyBydWxlID0gcnVsZTtcblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgbGV4ZXIgPSBjb250ZXh0LmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gY29udGV4dC5nZXRQYXJzZXIoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRQYXJ0aWFsQ29udGV4dCA9IFBhcnRpYWxDb250ZXh0LmZyb21TdHJpbmdMZXhlckFuZFBhcnNlcihTdGF0ZW1lbnRQYXJ0aWFsQ29udGV4dCwgc3RyaW5nLCBsZXhlciwgcGFyc2VyKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRQYXJ0aWFsQ29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RyaW5nTGV4ZXJBbmRQYXJzZXIoc3RyaW5nLCBsZXhlciwgcGFyc2VyKSB7IHJldHVybiBQYXJ0aWFsQ29udGV4dC5mcm9tU3RyaW5nTGV4ZXJBbmRQYXJzZXIoU3RhdGVtZW50UGFydGlhbENvbnRleHQsIHN0cmluZywgbGV4ZXIsIHBhcnNlcik7IH1cbn1cbiJdLCJuYW1lcyI6WyJTdGF0ZW1lbnRQYXJ0aWFsQ29udGV4dCIsImJuZiIsInJ1bGUiLCJydWxlRnJvbUJORiIsImdldFN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwibm9kZSIsImdldFN0YXRlbWVudFRva2VucyIsInN0YXRlbWVudFRva2VucyIsInRva2VucyIsImZyb21TdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwiZ2V0U3RyaW5nIiwibGV4ZXIiLCJnZXRMZXhlciIsInBhcnNlciIsImdldFBhcnNlciIsInN0YXRlbWVudFBhcnRpYWxDb250ZXh0IiwiUGFydGlhbENvbnRleHQiLCJmcm9tU3RyaW5nTGV4ZXJBbmRQYXJzZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBYXFCQTs7OytEQVhNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUkzQixJQUFNQyxNQUFPLG9FQUtQQyxPQUFPQyxJQUFBQSxvQkFBVyxFQUFDRjtBQUVWLElBQUEsQUFBTUQsd0NBQU47Y0FBTUE7YUFBQUE7Z0NBQUFBO2VBQU4sa0JBQU1BOztrQkFBQUE7O1lBQ25CSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsZ0JBQWdCLElBQUksQ0FBQ0MsSUFBSSxFQUFFLEdBQUc7Z0JBRXBDLE9BQU9EO1lBQ1Q7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsa0JBQWtCLElBQUksQ0FBQ0MsTUFBTSxFQUFFLEdBQUc7Z0JBRXhDLE9BQU9EO1lBQ1Q7Ozs7WUFJT0UsS0FBQUE7bUJBQVAsU0FBT0EsY0FBY0MsU0FBUyxFQUFFQyxPQUFPO2dCQUNyQyxJQUFNQyxTQUFTRixVQUFVRyxTQUFTLElBQzVCQyxRQUFRSCxRQUFRSSxRQUFRLElBQ3hCQyxTQUFTTCxRQUFRTSxTQUFTLElBQzFCQywwQkFBMEJDLGdCQUFjLENBQUNDLHdCQUF3QixDQW5CdERyQix5QkFtQmdGYSxRQUFRRSxPQUFPRTtnQkFFaEgsT0FBT0U7WUFDVDs7O1lBRU9FLEtBQUFBO21CQUFQLFNBQU9BLHlCQUF5QlIsTUFBTSxFQUFFRSxLQUFLLEVBQUVFLE1BQU07Z0JBQUksT0FBT0csZ0JBQWMsQ0FBQ0Msd0JBQXdCLENBeEJwRnJCLHlCQXdCOEdhLFFBQVFFLE9BQU9FO1lBQVM7OztXQXhCdElqQjtFQUFnQ29CLGdCQUFjO0FBYWpFLGlCQWJtQnBCLHlCQWFaRSxRQUFPQSJ9