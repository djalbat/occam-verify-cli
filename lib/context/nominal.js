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
var _occamnominal = require("occam-nominal");
var _lexer = /*#__PURE__*/ _interop_require_default(require("../nominal/lexer"));
var _parser = /*#__PURE__*/ _interop_require_default(require("../nominal/parser"));
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
var nominalLexerFromNothing = _occamnominal.lexersUtilities.nominalLexerFromNothing, nominalParserFromNothing = _occamnominal.parsersUtilities.nominalParserFromNothing, nodeAsString = _occamlanguages.nodeUtilities.nodeAsString, nodesAsString = _occamlanguages.nodeUtilities.nodesAsString;
var nominalLexer = nominalLexerFromNothing(_lexer.default), nominalParser = nominalParserFromNothing(_parser.default); ///
var NominalContext = /*#__PURE__*/ function(Context) {
    _inherits(NominalContext, Context);
    function NominalContext(context, lexer, parser) {
        _class_call_check(this, NominalContext);
        var _this;
        _this = _call_super(this, NominalContext, [
            context
        ]);
        _this.lexer = lexer;
        _this.parser = parser;
        return _this;
    }
    _create_class(NominalContext, [
        {
            key: "getLexer",
            value: function getLexer() {
                return this.lexer;
            }
        },
        {
            key: "getParser",
            value: function getParser() {
                return this.parser;
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
            value: function fromNothing() {
                var context = null, lexer = nominalLexer, parser = nominalParser, nominalContext = _occamlanguages.Context.fromNothing(NominalContext, lexer, parser, context);
                return nominalContext;
            }
        }
    ]);
    return NominalContext;
}(_occamlanguages.Context);
var nominalContext = NominalContext.fromNothing();
var _default = nominalContext;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L25vbWluYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENvbnRleHQsIG5vZGVVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5pbXBvcnQgeyBsZXhlcnNVdGlsaXRpZXMsIHBhcnNlcnNVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tbm9taW5hbFwiO1xuXG5pbXBvcnQgTm9taW5hbExleGVyIGZyb20gXCIuLi9ub21pbmFsL2xleGVyXCI7XG5pbXBvcnQgTm9taW5hbFBhcnNlciBmcm9tIFwiLi4vbm9taW5hbC9wYXJzZXJcIjtcblxuY29uc3QgeyBub21pbmFsTGV4ZXJGcm9tTm90aGluZyB9ID0gbGV4ZXJzVXRpbGl0aWVzLFxuICAgICAgeyBub21pbmFsUGFyc2VyRnJvbU5vdGhpbmcgfSA9IHBhcnNlcnNVdGlsaXRpZXMsXG4gICAgICB7IG5vZGVBc1N0cmluZywgbm9kZXNBc1N0cmluZyB9ID0gbm9kZVV0aWxpdGllcztcblxuY29uc3Qgbm9taW5hbExleGVyID0gbm9taW5hbExleGVyRnJvbU5vdGhpbmcoTm9taW5hbExleGVyKSxcbiAgICAgIG5vbWluYWxQYXJzZXIgPSBub21pbmFsUGFyc2VyRnJvbU5vdGhpbmcoTm9taW5hbFBhcnNlcik7IC8vL1xuXG5jbGFzcyBOb21pbmFsQ29udGV4dCBleHRlbmRzIENvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBsZXhlciwgcGFyc2VyKSB7XG4gICAgc3VwZXIoY29udGV4dCk7XG5cbiAgICB0aGlzLmxleGVyID0gbGV4ZXI7XG4gICAgdGhpcy5wYXJzZXIgPSBwYXJzZXI7XG4gIH1cblxuICBnZXRMZXhlcigpIHtcbiAgICByZXR1cm4gdGhpcy5sZXhlcjtcbiAgfVxuXG4gIGdldFBhcnNlcigpIHtcbiAgICByZXR1cm4gdGhpcy5wYXJzZXI7XG4gIH1cblxuICBub2RlQXNTdHJpbmcobm9kZSkge1xuICAgIGNvbnN0IHN0cmluZyA9IG5vZGVBc1N0cmluZyhub2RlLCB0aGlzLnRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgbm9kZXNBc1N0cmluZyhub2Rlcykge1xuICAgIGNvbnN0IHN0cmluZyA9IG5vZGVzQXNTdHJpbmcobm9kZXMsIHRoaXMudG9rZW5zKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IG51bGwsXG4gICAgICAgICAgbGV4ZXIgPSBub21pbmFsTGV4ZXIsIC8vL1xuICAgICAgICAgIHBhcnNlciA9IG5vbWluYWxQYXJzZXIsIC8vL1xuICAgICAgICAgIG5vbWluYWxDb250ZXh0ID0gQ29udGV4dC5mcm9tTm90aGluZyhOb21pbmFsQ29udGV4dCwgbGV4ZXIsIHBhcnNlciwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbm9taW5hbENvbnRleHQ7XG4gIH1cbn1cblxuY29uc3Qgbm9taW5hbENvbnRleHQgPSBOb21pbmFsQ29udGV4dC5mcm9tTm90aGluZygpO1xuXG5leHBvcnQgZGVmYXVsdCBub21pbmFsQ29udGV4dDtcbiJdLCJuYW1lcyI6WyJub21pbmFsTGV4ZXJGcm9tTm90aGluZyIsImxleGVyc1V0aWxpdGllcyIsIm5vbWluYWxQYXJzZXJGcm9tTm90aGluZyIsInBhcnNlcnNVdGlsaXRpZXMiLCJub2RlQXNTdHJpbmciLCJub2RlVXRpbGl0aWVzIiwibm9kZXNBc1N0cmluZyIsIm5vbWluYWxMZXhlciIsIk5vbWluYWxMZXhlciIsIm5vbWluYWxQYXJzZXIiLCJOb21pbmFsUGFyc2VyIiwiTm9taW5hbENvbnRleHQiLCJjb250ZXh0IiwibGV4ZXIiLCJwYXJzZXIiLCJnZXRMZXhlciIsImdldFBhcnNlciIsIm5vZGUiLCJzdHJpbmciLCJ0b2tlbnMiLCJub2RlcyIsImZyb21Ob3RoaW5nIiwibm9taW5hbENvbnRleHQiLCJDb250ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF1REE7OztlQUFBOzs7OEJBckR1Qzs0QkFDVzs0REFFekI7NkRBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBTSxBQUFFQSwwQkFBNEJDLDZCQUFlLENBQTNDRCx5QkFDRixBQUFFRSwyQkFBNkJDLDhCQUFnQixDQUE3Q0QsMEJBQ0FFLGVBQWdDQyw2QkFBYSxDQUE3Q0QsY0FBY0UsZ0JBQWtCRCw2QkFBYSxDQUEvQkM7QUFFdEIsSUFBTUMsZUFBZVAsd0JBQXdCUSxjQUFZLEdBQ25EQyxnQkFBZ0JQLHlCQUF5QlEsZUFBYSxHQUFHLEdBQUc7QUFFbEUsSUFBQSxBQUFNQywrQkFBTjtjQUFNQTthQUFBQSxlQUNRQyxPQUFPLEVBQUVDLEtBQUssRUFBRUMsTUFBTTtnQ0FEOUJIOztnQkFFRixrQkFGRUE7WUFFSUM7O1FBRU4sTUFBS0MsS0FBSyxHQUFHQTtRQUNiLE1BQUtDLE1BQU0sR0FBR0E7OztrQkFMWkg7O1lBUUpJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsS0FBSztZQUNuQjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0YsTUFBTTtZQUNwQjs7O1lBRUFWLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFhYSxJQUFJO2dCQUNmLElBQU1DLFNBQVNkLGFBQWFhLE1BQU0sSUFBSSxDQUFDRSxNQUFNO2dCQUU3QyxPQUFPRDtZQUNUOzs7WUFFQVosS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWNjLEtBQUs7Z0JBQ2pCLElBQU1GLFNBQVNaLGNBQWNjLE9BQU8sSUFBSSxDQUFDRCxNQUFNO2dCQUUvQyxPQUFPRDtZQUNUOzs7O1lBRU9HLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQU1ULFVBQVUsTUFDVkMsUUFBUU4sY0FDUk8sU0FBU0wsZUFDVGEsaUJBQWlCQyx1QkFBTyxDQUFDRixXQUFXLENBaEN4Q1YsZ0JBZ0N5REUsT0FBT0MsUUFBUUY7Z0JBRTFFLE9BQU9VO1lBQ1Q7OztXQW5DSVg7RUFBdUJZLHVCQUFPO0FBc0NwQyxJQUFNRCxpQkFBaUJYLGVBQWVVLFdBQVc7SUFFakQsV0FBZUMifQ==