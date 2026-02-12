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
var nominalLexerFromNothing = _occamnominal.lexersUtilities.nominalLexerFromNothing, nominalParserFromNothing = _occamnominal.parsersUtilities.nominalParserFromNothing;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L25vbWluYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5pbXBvcnQgeyBsZXhlcnNVdGlsaXRpZXMsIHBhcnNlcnNVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tbm9taW5hbFwiO1xuXG5pbXBvcnQgTm9taW5hbExleGVyIGZyb20gXCIuLi9ub21pbmFsL2xleGVyXCI7XG5pbXBvcnQgTm9taW5hbFBhcnNlciBmcm9tIFwiLi4vbm9taW5hbC9wYXJzZXJcIjtcblxuY29uc3QgeyBub21pbmFsTGV4ZXJGcm9tTm90aGluZyB9ID0gbGV4ZXJzVXRpbGl0aWVzLFxuICAgICAgeyBub21pbmFsUGFyc2VyRnJvbU5vdGhpbmcgfSA9IHBhcnNlcnNVdGlsaXRpZXM7XG5cbmNvbnN0IG5vbWluYWxMZXhlciA9IG5vbWluYWxMZXhlckZyb21Ob3RoaW5nKE5vbWluYWxMZXhlciksXG4gICAgICBub21pbmFsUGFyc2VyID0gbm9taW5hbFBhcnNlckZyb21Ob3RoaW5nKE5vbWluYWxQYXJzZXIpOyAvLy9cblxuY2xhc3MgTm9taW5hbENvbnRleHQgZXh0ZW5kcyBDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgbGV4ZXIsIHBhcnNlcikge1xuICAgIHN1cGVyKGNvbnRleHQpO1xuXG4gICAgdGhpcy5sZXhlciA9IGxleGVyO1xuICAgIHRoaXMucGFyc2VyID0gcGFyc2VyO1xuICB9XG5cbiAgZ2V0TGV4ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubGV4ZXI7XG4gIH1cblxuICBnZXRQYXJzZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyc2VyO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBudWxsLFxuICAgICAgICAgIGxleGVyID0gbm9taW5hbExleGVyLCAvLy9cbiAgICAgICAgICBwYXJzZXIgPSBub21pbmFsUGFyc2VyLCAvLy9cbiAgICAgICAgICBub21pbmFsQ29udGV4dCA9IENvbnRleHQuZnJvbU5vdGhpbmcoTm9taW5hbENvbnRleHQsIGxleGVyLCBwYXJzZXIsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIG5vbWluYWxDb250ZXh0O1xuICB9XG59XG5cbmNvbnN0IG5vbWluYWxDb250ZXh0ID0gTm9taW5hbENvbnRleHQuZnJvbU5vdGhpbmcoKTtcblxuZXhwb3J0IGRlZmF1bHQgbm9taW5hbENvbnRleHQ7XG4iXSwibmFtZXMiOlsibm9taW5hbExleGVyRnJvbU5vdGhpbmciLCJsZXhlcnNVdGlsaXRpZXMiLCJub21pbmFsUGFyc2VyRnJvbU5vdGhpbmciLCJwYXJzZXJzVXRpbGl0aWVzIiwibm9taW5hbExleGVyIiwiTm9taW5hbExleGVyIiwibm9taW5hbFBhcnNlciIsIk5vbWluYWxQYXJzZXIiLCJOb21pbmFsQ29udGV4dCIsImNvbnRleHQiLCJsZXhlciIsInBhcnNlciIsImdldExleGVyIiwiZ2V0UGFyc2VyIiwiZnJvbU5vdGhpbmciLCJub21pbmFsQ29udGV4dCIsIkNvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTBDQTs7O2VBQUE7Ozs4QkF4Q3dCOzRCQUMwQjs0REFFekI7NkRBQ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFMUIsSUFBTSxBQUFFQSwwQkFBNEJDLDZCQUFlLENBQTNDRCx5QkFDRixBQUFFRSwyQkFBNkJDLDhCQUFnQixDQUE3Q0Q7QUFFUixJQUFNRSxlQUFlSix3QkFBd0JLLGNBQVksR0FDbkRDLGdCQUFnQkoseUJBQXlCSyxlQUFhLEdBQUcsR0FBRztBQUVsRSxJQUFBLEFBQU1DLCtCQUFOO2NBQU1BO2FBQUFBLGVBQ1FDLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxNQUFNO2dDQUQ5Qkg7O2dCQUVGLGtCQUZFQTtZQUVJQzs7UUFFTixNQUFLQyxLQUFLLEdBQUdBO1FBQ2IsTUFBS0MsTUFBTSxHQUFHQTs7O2tCQUxaSDs7WUFRSkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixLQUFLO1lBQ25COzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixNQUFNO1lBQ3BCOzs7O1lBRU9HLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQU1MLFVBQVUsTUFDVkMsUUFBUU4sY0FDUk8sU0FBU0wsZUFDVFMsaUJBQWlCQyx1QkFBTyxDQUFDRixXQUFXLENBcEJ4Q04sZ0JBb0J5REUsT0FBT0MsUUFBUUY7Z0JBRTFFLE9BQU9NO1lBQ1Q7OztXQXZCSVA7RUFBdUJRLHVCQUFPO0FBMEJwQyxJQUFNRCxpQkFBaUJQLGVBQWVNLFdBQVc7SUFFakQsV0FBZUMifQ==