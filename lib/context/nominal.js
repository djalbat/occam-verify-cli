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
var _metaTypes = require("../metaTypes");
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
        },
        {
            key: "findMetaTypeByMetaTypeName",
            value: function findMetaTypeByMetaTypeName(metaTypeName) {
                var metaType = (0, _metaTypes.findMetaTypeByMetaTypeName)(metaTypeName);
                return metaType;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L25vbWluYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5pbXBvcnQgeyBsZXhlcnNVdGlsaXRpZXMsIHBhcnNlcnNVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tbm9taW5hbFwiO1xuXG5pbXBvcnQgTm9taW5hbExleGVyIGZyb20gXCIuLi9ub21pbmFsL2xleGVyXCI7XG5pbXBvcnQgTm9taW5hbFBhcnNlciBmcm9tIFwiLi4vbm9taW5hbC9wYXJzZXJcIjtcblxuaW1wb3J0IHsgZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUgfSBmcm9tIFwiLi4vbWV0YVR5cGVzXCI7XG5cbmNvbnN0IHsgbm9taW5hbExleGVyRnJvbU5vdGhpbmcgfSA9IGxleGVyc1V0aWxpdGllcyxcbiAgICAgIHsgbm9taW5hbFBhcnNlckZyb21Ob3RoaW5nIH0gPSBwYXJzZXJzVXRpbGl0aWVzO1xuXG5jb25zdCBub21pbmFsTGV4ZXIgPSBub21pbmFsTGV4ZXJGcm9tTm90aGluZyhOb21pbmFsTGV4ZXIpLFxuICAgICAgbm9taW5hbFBhcnNlciA9IG5vbWluYWxQYXJzZXJGcm9tTm90aGluZyhOb21pbmFsUGFyc2VyKTsgLy8vXG5cbmNsYXNzIE5vbWluYWxDb250ZXh0IGV4dGVuZHMgQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIGxleGVyLCBwYXJzZXIpIHtcbiAgICBzdXBlcihjb250ZXh0KTtcblxuICAgIHRoaXMubGV4ZXIgPSBsZXhlcjtcbiAgICB0aGlzLnBhcnNlciA9IHBhcnNlcjtcbiAgfVxuXG4gIGdldExleGVyKCkge1xuICAgIHJldHVybiB0aGlzLmxleGVyO1xuICB9XG5cbiAgZ2V0UGFyc2VyKCkge1xuICAgIHJldHVybiB0aGlzLnBhcnNlcjtcbiAgfVxuXG4gIGZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSkge1xuICAgIGNvbnN0IG1ldGFUeXBlID0gZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKTtcblxuICAgIHJldHVybiBtZXRhVHlwZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZygpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gbnVsbCxcbiAgICAgICAgICBsZXhlciA9IG5vbWluYWxMZXhlciwgLy8vXG4gICAgICAgICAgcGFyc2VyID0gbm9taW5hbFBhcnNlciwgLy8vXG4gICAgICAgICAgbm9taW5hbENvbnRleHQgPSBDb250ZXh0LmZyb21Ob3RoaW5nKE5vbWluYWxDb250ZXh0LCBsZXhlciwgcGFyc2VyLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBub21pbmFsQ29udGV4dDtcbiAgfVxufVxuXG5jb25zdCBub21pbmFsQ29udGV4dCA9IE5vbWluYWxDb250ZXh0LmZyb21Ob3RoaW5nKCk7XG5cbmV4cG9ydCBkZWZhdWx0IG5vbWluYWxDb250ZXh0O1xuIl0sIm5hbWVzIjpbIm5vbWluYWxMZXhlckZyb21Ob3RoaW5nIiwibGV4ZXJzVXRpbGl0aWVzIiwibm9taW5hbFBhcnNlckZyb21Ob3RoaW5nIiwicGFyc2Vyc1V0aWxpdGllcyIsIm5vbWluYWxMZXhlciIsIk5vbWluYWxMZXhlciIsIm5vbWluYWxQYXJzZXIiLCJOb21pbmFsUGFyc2VyIiwiTm9taW5hbENvbnRleHQiLCJjb250ZXh0IiwibGV4ZXIiLCJwYXJzZXIiLCJnZXRMZXhlciIsImdldFBhcnNlciIsImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIiwibWV0YVR5cGVOYW1lIiwibWV0YVR5cGUiLCJmcm9tTm90aGluZyIsIm5vbWluYWxDb250ZXh0IiwiQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBa0RBOzs7ZUFBQTs7OzhCQWhEd0I7NEJBQzBCOzREQUV6Qjs2REFDQzt5QkFFaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0MsSUFBTSxBQUFFQSwwQkFBNEJDLDZCQUFlLENBQTNDRCx5QkFDRixBQUFFRSwyQkFBNkJDLDhCQUFnQixDQUE3Q0Q7QUFFUixJQUFNRSxlQUFlSix3QkFBd0JLLGNBQVksR0FDbkRDLGdCQUFnQkoseUJBQXlCSyxlQUFhLEdBQUcsR0FBRztBQUVsRSxJQUFBLEFBQU1DLCtCQUFOO2NBQU1BO2FBQUFBLGVBQ1FDLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxNQUFNO2dDQUQ5Qkg7O2dCQUVGLGtCQUZFQTtZQUVJQzs7UUFFTixNQUFLQyxLQUFLLEdBQUdBO1FBQ2IsTUFBS0MsTUFBTSxHQUFHQTs7O2tCQUxaSDs7WUFRSkksS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixLQUFLO1lBQ25COzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDRixNQUFNO1lBQ3BCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLDJCQUEyQkMsWUFBWTtnQkFDckMsSUFBTUMsV0FBV0YsSUFBQUEscUNBQTBCLEVBQUNDO2dCQUU1QyxPQUFPQztZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BO2dCQUNMLElBQU1SLFVBQVUsTUFDVkMsUUFBUU4sY0FDUk8sU0FBU0wsZUFDVFksaUJBQWlCQyx1QkFBTyxDQUFDRixXQUFXLENBMUJ4Q1QsZ0JBMEJ5REUsT0FBT0MsUUFBUUY7Z0JBRTFFLE9BQU9TO1lBQ1Q7OztXQTdCSVY7RUFBdUJXLHVCQUFPO0FBZ0NwQyxJQUFNRCxpQkFBaUJWLGVBQWVTLFdBQVc7SUFFakQsV0FBZUMifQ==