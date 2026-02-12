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
var _context = /*#__PURE__*/ _interop_require_default(require("../context"));
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
                var context = null, lexer = nominalLexer, parser = nominalParser, nominalContext = _context.default.fromNothing(NominalContext, lexer, parser, context);
                return nominalContext;
            }
        }
    ]);
    return NominalContext;
}(_context.default);
var nominalContext = NominalContext.fromNothing();
var _default = nominalContext;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L25vbWluYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG5vZGVVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5pbXBvcnQgeyBsZXhlcnNVdGlsaXRpZXMsIHBhcnNlcnNVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tbm9taW5hbFwiO1xuXG5pbXBvcnQgQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dFwiO1xuaW1wb3J0IE5vbWluYWxMZXhlciBmcm9tIFwiLi4vbm9taW5hbC9sZXhlclwiO1xuaW1wb3J0IE5vbWluYWxQYXJzZXIgZnJvbSBcIi4uL25vbWluYWwvcGFyc2VyXCI7XG5cbmNvbnN0IHsgbm9taW5hbExleGVyRnJvbU5vdGhpbmcgfSA9IGxleGVyc1V0aWxpdGllcyxcbiAgICAgIHsgbm9taW5hbFBhcnNlckZyb21Ob3RoaW5nIH0gPSBwYXJzZXJzVXRpbGl0aWVzLFxuICAgICAgeyBub2RlQXNTdHJpbmcsIG5vZGVzQXNTdHJpbmcgfSA9IG5vZGVVdGlsaXRpZXM7XG5cbmNvbnN0IG5vbWluYWxMZXhlciA9IG5vbWluYWxMZXhlckZyb21Ob3RoaW5nKE5vbWluYWxMZXhlciksXG4gICAgICBub21pbmFsUGFyc2VyID0gbm9taW5hbFBhcnNlckZyb21Ob3RoaW5nKE5vbWluYWxQYXJzZXIpOyAvLy9cblxuY2xhc3MgTm9taW5hbENvbnRleHQgZXh0ZW5kcyBDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgbGV4ZXIsIHBhcnNlcikge1xuICAgIHN1cGVyKGNvbnRleHQpO1xuXG4gICAgdGhpcy5sZXhlciA9IGxleGVyO1xuICAgIHRoaXMucGFyc2VyID0gcGFyc2VyO1xuICB9XG5cbiAgZ2V0TGV4ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubGV4ZXI7XG4gIH1cblxuICBnZXRQYXJzZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyc2VyO1xuICB9XG5cbiAgbm9kZUFzU3RyaW5nKG5vZGUpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBub2RlQXNTdHJpbmcobm9kZSwgdGhpcy50b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIG5vZGVzQXNTdHJpbmcobm9kZXMpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBub2Rlc0FzU3RyaW5nKG5vZGVzLCB0aGlzLnRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBudWxsLFxuICAgICAgICAgIGxleGVyID0gbm9taW5hbExleGVyLCAvLy9cbiAgICAgICAgICBwYXJzZXIgPSBub21pbmFsUGFyc2VyLCAvLy9cbiAgICAgICAgICBub21pbmFsQ29udGV4dCA9IENvbnRleHQuZnJvbU5vdGhpbmcoTm9taW5hbENvbnRleHQsIGxleGVyLCBwYXJzZXIsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIG5vbWluYWxDb250ZXh0O1xuICB9XG59XG5cbmNvbnN0IG5vbWluYWxDb250ZXh0ID0gTm9taW5hbENvbnRleHQuZnJvbU5vdGhpbmcoKTtcblxuZXhwb3J0IGRlZmF1bHQgbm9taW5hbENvbnRleHQ7XG4iXSwibmFtZXMiOlsibm9taW5hbExleGVyRnJvbU5vdGhpbmciLCJsZXhlcnNVdGlsaXRpZXMiLCJub21pbmFsUGFyc2VyRnJvbU5vdGhpbmciLCJwYXJzZXJzVXRpbGl0aWVzIiwibm9kZUFzU3RyaW5nIiwibm9kZVV0aWxpdGllcyIsIm5vZGVzQXNTdHJpbmciLCJub21pbmFsTGV4ZXIiLCJOb21pbmFsTGV4ZXIiLCJub21pbmFsUGFyc2VyIiwiTm9taW5hbFBhcnNlciIsIk5vbWluYWxDb250ZXh0IiwiY29udGV4dCIsImxleGVyIiwicGFyc2VyIiwiZ2V0TGV4ZXIiLCJnZXRQYXJzZXIiLCJub2RlIiwic3RyaW5nIiwidG9rZW5zIiwibm9kZXMiLCJmcm9tTm90aGluZyIsIm5vbWluYWxDb250ZXh0IiwiQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBd0RBOzs7ZUFBQTs7OzhCQXREOEI7NEJBQ29COzhEQUU5Qjs0REFDSzs2REFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUxQixJQUFNLEFBQUVBLDBCQUE0QkMsNkJBQWUsQ0FBM0NELHlCQUNGLEFBQUVFLDJCQUE2QkMsOEJBQWdCLENBQTdDRCwwQkFDQUUsZUFBZ0NDLDZCQUFhLENBQTdDRCxjQUFjRSxnQkFBa0JELDZCQUFhLENBQS9CQztBQUV0QixJQUFNQyxlQUFlUCx3QkFBd0JRLGNBQVksR0FDbkRDLGdCQUFnQlAseUJBQXlCUSxlQUFhLEdBQUcsR0FBRztBQUVsRSxJQUFBLEFBQU1DLCtCQUFOO2NBQU1BO2FBQUFBLGVBQ1FDLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxNQUFNO2dDQUQ5Qkg7O2dCQUVGLGtCQUZFQTtZQUVJQzs7UUFFTixNQUFLQyxLQUFLLEdBQUdBO1FBQ2IsTUFBS0MsTUFBTSxHQUFHQTs7O2tCQUxaSDs7WUFRSkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixLQUFLO1lBQ25COzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixNQUFNO1lBQ3BCOzs7WUFFQVYsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWFhLElBQUk7Z0JBQ2YsSUFBTUMsU0FBU2QsYUFBYWEsTUFBTSxJQUFJLENBQUNFLE1BQU07Z0JBRTdDLE9BQU9EO1lBQ1Q7OztZQUVBWixLQUFBQTttQkFBQUEsU0FBQUEsZUFBY2MsS0FBSztnQkFDakIsSUFBTUYsU0FBU1osY0FBY2MsT0FBTyxJQUFJLENBQUNELE1BQU07Z0JBRS9DLE9BQU9EO1lBQ1Q7Ozs7WUFFT0csS0FBQUE7bUJBQVAsU0FBT0E7Z0JBQ0wsSUFBTVQsVUFBVSxNQUNWQyxRQUFRTixjQUNSTyxTQUFTTCxlQUNUYSxpQkFBaUJDLGdCQUFPLENBQUNGLFdBQVcsQ0FoQ3hDVixnQkFnQ3lERSxPQUFPQyxRQUFRRjtnQkFFMUUsT0FBT1U7WUFDVDs7O1dBbkNJWDtFQUF1QlksZ0JBQU87QUFzQ3BDLElBQU1ELGlCQUFpQlgsZUFBZVUsV0FBVztJQUVqRCxXQUFlQyJ9