"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return LiteralContext;
    }
});
var _occamlanguages = require("occam-languages");
var _context = /*#__PURE__*/ _interop_require_default(require("../context"));
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
var nodeAsString = _occamlanguages.nodeUtilities.nodeAsString, nodesAsString = _occamlanguages.nodeUtilities.nodesAsString;
var LiteralContext = /*#__PURE__*/ function(Context) {
    _inherits(LiteralContext, Context);
    function LiteralContext(context, tokens) {
        _class_call_check(this, LiteralContext);
        var _this;
        _this = _call_super(this, LiteralContext, [
            context
        ]);
        _this.tokens = tokens;
        return _this;
    }
    _create_class(LiteralContext, [
        {
            key: "getTokens",
            value: function getTokens() {
                return this.tokens;
            }
        },
        {
            key: "getLexer",
            value: function getLexer() {
                var context = this.getContext(), lexer = context.getLexer();
                return lexer;
            }
        },
        {
            key: "getParser",
            value: function getParser() {
                var context = this.getContext(), parser = context.getParser();
                return parser;
            }
        },
        {
            key: "setTokens",
            value: function setTokens(tokens) {
                this.tokens = tokens;
            }
        },
        {
            key: "nodeAsString",
            value: function nodeAsString1(node) {
                var string = nodeAsString(node, this.tokens);
                return string;
            }
        },
        {
            key: "nodesAsString",
            value: function nodesAsString1(nodes) {
                var string = nodesAsString(nodes, this.tokens);
                return string;
            }
        }
    ], [
        {
            key: "fromNothing",
            value: function fromNothing(context) {
                var tokens = null, literalContext = new LiteralContext(context, tokens);
                return literalContext;
            }
        }
    ]);
    return LiteralContext;
}(_context.default);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2xpdGVyYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7ICBub2RlVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dFwiO1xuXG5jb25zdCB7IG5vZGVBc1N0cmluZywgbm9kZXNBc1N0cmluZyB9ID0gbm9kZVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGl0ZXJhbENvbnRleHQgZXh0ZW5kcyBDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgdG9rZW5zKSB7XG4gICAgc3VwZXIoY29udGV4dCk7XG5cbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXRMZXhlcigpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbGV4ZXIgPSBjb250ZXh0LmdldExleGVyKCk7XG5cbiAgICByZXR1cm4gbGV4ZXI7XG4gIH1cblxuICBnZXRQYXJzZXIoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHBhcnNlciA9IGNvbnRleHQuZ2V0UGFyc2VyKCk7XG5cbiAgICByZXR1cm4gcGFyc2VyO1xuICB9XG5cbiAgc2V0VG9rZW5zKHRva2Vucykge1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICB9XG5cbiAgbm9kZUFzU3RyaW5nKG5vZGUpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBub2RlQXNTdHJpbmcobm9kZSwgdGhpcy50b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIG5vZGVzQXNTdHJpbmcobm9kZXMpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBub2Rlc0FzU3RyaW5nKG5vZGVzLCB0aGlzLnRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNvbnRleHQpIHtcbiAgICBjb25zdCB0b2tlbnMgPSBudWxsLFxuICAgICAgICAgIGxpdGVyYWxDb250ZXh0ID0gbmV3IExpdGVyYWxDb250ZXh0KGNvbnRleHQsIHRva2Vucyk7XG5cbiAgICByZXR1cm4gbGl0ZXJhbENvbnRleHQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJMaXRlcmFsQ29udGV4dCIsIm5vZGVBc1N0cmluZyIsIm5vZGVVdGlsaXRpZXMiLCJub2Rlc0FzU3RyaW5nIiwiY29udGV4dCIsInRva2VucyIsImdldFRva2VucyIsImdldExleGVyIiwiZ2V0Q29udGV4dCIsImxleGVyIiwiZ2V0UGFyc2VyIiwicGFyc2VyIiwic2V0VG9rZW5zIiwibm9kZSIsInN0cmluZyIsIm5vZGVzIiwiZnJvbU5vdGhpbmciLCJsaXRlcmFsQ29udGV4dCIsIkNvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7OzhCQU5VOzhEQUVYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBCLElBQVFDLGVBQWdDQyw2QkFBYSxDQUE3Q0QsY0FBY0UsZ0JBQWtCRCw2QkFBYSxDQUEvQkM7QUFFUCxJQUFBLEFBQU1ILCtCQUFOO2NBQU1BO2FBQUFBLGVBQ1BJLE9BQU8sRUFBRUMsTUFBTTtnQ0FEUkw7O2dCQUVqQixrQkFGaUJBO1lBRVhJOztRQUVOLE1BQUtDLE1BQU0sR0FBR0E7OztrQkFKR0w7O1lBT25CTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNELE1BQU07WUFDcEI7OztZQUVBRSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUgsVUFBVSxJQUFJLENBQUNJLFVBQVUsSUFDekJDLFFBQVFMLFFBQVFHLFFBQVE7Z0JBRTlCLE9BQU9FO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTU4sVUFBVSxJQUFJLENBQUNJLFVBQVUsSUFDekJHLFNBQVNQLFFBQVFNLFNBQVM7Z0JBRWhDLE9BQU9DO1lBQ1Q7OztZQUVBQyxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVVAsTUFBTTtnQkFDZCxJQUFJLENBQUNBLE1BQU0sR0FBR0E7WUFDaEI7OztZQUVBSixLQUFBQTttQkFBQUEsU0FBQUEsY0FBYVksSUFBSTtnQkFDZixJQUFNQyxTQUFTYixhQUFhWSxNQUFNLElBQUksQ0FBQ1IsTUFBTTtnQkFFN0MsT0FBT1M7WUFDVDs7O1lBRUFYLEtBQUFBO21CQUFBQSxTQUFBQSxlQUFjWSxLQUFLO2dCQUNqQixJQUFNRCxTQUFTWCxjQUFjWSxPQUFPLElBQUksQ0FBQ1YsTUFBTTtnQkFFL0MsT0FBT1M7WUFDVDs7OztZQUVPRSxLQUFBQTttQkFBUCxTQUFPQSxZQUFZWixPQUFPO2dCQUN4QixJQUFNQyxTQUFTLE1BQ1RZLGlCQUFpQixJQTNDTmpCLGVBMkN5QkksU0FBU0M7Z0JBRW5ELE9BQU9ZO1lBQ1Q7OztXQTlDbUJqQjtFQUF1QmtCLGdCQUFPIn0=