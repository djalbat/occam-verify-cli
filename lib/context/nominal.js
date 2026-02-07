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
var _nominal = require("../utilities/nominal");
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
                var lexer = _nominal.nominalLexer, parser = _nominal.nominalParser, nominalContext = new NominalContext(lexer, parser);
                return nominalContext;
            }
        }
    ]);
    return NominalContext;
}(_occamlanguages.Context);
var nominalContext = NominalContext.fromNothing();
var _default = nominalContext;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L25vbWluYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENvbnRleHQsIGNvbnRleHRVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5pbXBvcnQgeyBub21pbmFsTGV4ZXIsIG5vbWluYWxQYXJzZXIgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vbWluYWxcIjtcblxuY2xhc3MgTm9taW5hbENvbnRleHQgZXh0ZW5kcyBDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgbGV4ZXIsIHBhcnNlcikge1xuICAgIHN1cGVyKGNvbnRleHQpO1xuXG4gICAgdGhpcy5sZXhlciA9IGxleGVyO1xuICAgIHRoaXMucGFyc2VyID0gcGFyc2VyO1xuICB9XG5cbiAgZ2V0TGV4ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubGV4ZXI7XG4gIH1cblxuICBnZXRQYXJzZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyc2VyO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKCkge1xuICAgIGNvbnN0IGxleGVyID0gbm9taW5hbExleGVyLCAvLy9cbiAgICAgICAgICBwYXJzZXIgPSBub21pbmFsUGFyc2VyLCAvLy9cbiAgICAgICAgICBub21pbmFsQ29udGV4dCA9IG5ldyBOb21pbmFsQ29udGV4dChsZXhlciwgcGFyc2VyKTtcblxuICAgIHJldHVybiBub21pbmFsQ29udGV4dDtcbiAgfVxufVxuXG5jb25zdCBub21pbmFsQ29udGV4dCA9IE5vbWluYWxDb250ZXh0LmZyb21Ob3RoaW5nKCk7XG5cbmV4cG9ydCBkZWZhdWx0IG5vbWluYWxDb250ZXh0O1xuIl0sIm5hbWVzIjpbIk5vbWluYWxDb250ZXh0IiwiY29udGV4dCIsImxleGVyIiwicGFyc2VyIiwiZ2V0TGV4ZXIiLCJnZXRQYXJzZXIiLCJmcm9tTm90aGluZyIsIm5vbWluYWxMZXhlciIsIm5vbWluYWxQYXJzZXIiLCJub21pbmFsQ29udGV4dCIsIkNvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWdDQTs7O2VBQUE7Ozs4QkE5QjBDO3VCQUNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1QyxJQUFBLEFBQU1BLCtCQUFOO2NBQU1BO2FBQUFBLGVBQ1FDLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxNQUFNO2dDQUQ5Qkg7O2dCQUVGLGtCQUZFQTtZQUVJQzs7UUFFTixNQUFLQyxLQUFLLEdBQUdBO1FBQ2IsTUFBS0MsTUFBTSxHQUFHQTs7O2tCQUxaSDs7WUFRSkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixLQUFLO1lBQ25COzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixNQUFNO1lBQ3BCOzs7O1lBRU9HLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQU1KLFFBQVFLLHFCQUFZLEVBQ3BCSixTQUFTSyxzQkFBYSxFQUN0QkMsaUJBQWlCLElBbkJyQlQsZUFtQndDRSxPQUFPQztnQkFFakQsT0FBT007WUFDVDs7O1dBdEJJVDtFQUF1QlUsdUJBQU87QUF5QnBDLElBQU1ELGlCQUFpQlQsZUFBZU0sV0FBVztJQUVqRCxXQUFlRyJ9